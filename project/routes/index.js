const path = require('path');
const express = require('express');
const fs = require('fs');
const router = express.Router();
const request = require('request');
const multer = require('multer');
const upload = multer({dest: path.join(__dirname, '..', '/public/images')});
const keys = require('../config');

/* GET home page. */
router.get('/', async function(req, res, next) {
  res.render('index');
});

// -- wolfram
router.get('/wolfram', async function(req, res, next) {
  const query = req.query.string;
  if (!query) {
    return res.send({
      error: 'You must provide a query.'
    })
  }
  const url = `http://api.wolframalpha.com/v2/query?appid=${keys.WOLFRAM_ALPHA_API_KEY}&input=${encodeURIComponent(query)}&output=json&format=html`;
  request({url: url, json: true}, (error, data) => {
    if (error) {
      return console.log(error);
    }
    return res.send(data.body);
  });
});

// -- mathpix
router.post('/upload/image', upload.single('photo'), async (req, res) => {
  if (!req.file) {
    throw new Error('File not found');
  } else {
    const imgPath = path.join(__dirname, `../public/images/${req.file.filename}`);
    let base64 = fs.readFileSync(imgPath, {encoding: 'base64'});
    base64 = `data:${req.file.mimetype};base64,` + base64;

    const url = 'https://api.mathpix.com/v3/latex';
    request({
        method: 'POST',
        url: url,
        json: true,
        headers: {
            "Content-Type": 'application/json',
            "app_id": keys.MATHPIX_APP_ID,
            "app_key": keys.MATHPIX_APP_KEY
        },
        body: {
            "src": base64,
            "ocr": ["math", "text"],
            "formats": ["text", "wolfram"]
        }
    }, (error, data) => {
      if (error) {
        return console.log(error);
      }
      return res.send(data.body);
    });
  }
});

module.exports = router;
