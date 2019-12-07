const path = require('path');
const express = require('express');
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

  const url = `http://api.wolframalpha.com/v2/query?appid=${keys.WOLFRAM_ALPHA_API_KEY}&input=${encodeURI(query)}&output=json&format=html`;
  request({url: url, json: true}, (error, data) => {
    if (error) {
      return console.log(error);
    }
    return res.send(data.body);
  });
});

// -- mathpix
router.post('/upload/image', upload.single('photo'), (req, res) => {
  console.log("i'm in the upload route");
  if (!req.file) {
    throw new Error('File not found');
  } else {
    console.log('hello', req.file);
    return res.json(req.file);
  }
});

module.exports = router;
