var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');


/* GET home page. */
router.get('/', async function(req, res, next) {

  const wolframTest = {
    "queryresult": {
      "success": true,
      "error": false,
      "numpods": 8,
      "datatypes": "",
      "timedout": "",
      "timedoutpods": "",
      "timing": 2.799,
      "parsetiming": 0.116,
      "parsetimedout": false,
      "recalculate": "",
      "id": "MSP18601701218197ib1a6h000047i210fa90e771a1",
      "host": "https://www4f.wolframalpha.com",
      "server": "42",
      "related": "https://www4f.wolframalpha.com/api/v1/relatedQueries.jsp?id=MSPa18611701218197ib1a6h00004dbcbhi6ge5042i74086047748590067375",
      "version": "2.6",
      "pods": [
        {
          "title": "Input",
          "scanner": "Identity",
          "id": "Input",
          "position": 100,
          "error": false,
          "numsubpods": 1,
          "subpods": [
            {
              "title": "",
              "img": {
                "src": "https://www4f.wolframalpha.com/Calculate/MSP/MSP18621701218197ib1a6h00001cefa81gc9e6hg9c?MSPStoreType=image/gif&s=42",
                "alt": "π",
                "title": "π",
                "width": 7,
                "height": 18,
                "type": "Default",
                "themes": "1,2,3,4,5,6,7,8,9,10,11,12",
                "colorinvertable": true
              }
            }
          ],
          "expressiontypes": {
            "name": "Default"
          }
        },
        {
          "title": "Decimal approximation",
          "scanner": "Numeric",
          "id": "DecimalApproximation",
          "position": 200,
          "error": false,
          "numsubpods": 1,
          "primary": true,
          "subpods": [
            {
              "title": "",
              "img": {
                "src": "https://www4f.wolframalpha.com/Calculate/MSP/MSP18631701218197ib1a6h000039g70g8ed433afcd?MSPStoreType=image/gif&s=42",
                "alt": "3.141592653589793238462643383279502884197169399375105820974...",
                "title": "3.141592653589793238462643383279502884197169399375105820974...",
                "width": 491,
                "height": 22,
                "type": "Default",
                "themes": "1,2,3,4,5,6,7,8,9,10,11,12",
                "colorinvertable": true
              }
            }
          ],
          "expressiontypes": {
            "name": "Default"
          },
          "states": [
            {
              "name": "More digits",
              "input": "DecimalApproximation__More digits"
            }
          ]
        },
        {
          "title": "Property",
          "scanner": "Numeric",
          "id": "Property",
          "position": 300,
          "error": false,
          "numsubpods": 1,
          "subpods": [
            {
              "title": "",
              "img": {
                "src": "https://www4f.wolframalpha.com/Calculate/MSP/MSP18641701218197ib1a6h00003g1f9eeb278264g3?MSPStoreType=image/gif&s=42",
                "alt": "π is a transcendental number",
                "title": "π is a transcendental number",
                "width": 192,
                "height": 18,
                "type": "Default",
                "themes": "1,2,3,4,5,6,7,8,9,10,11,12",
                "colorinvertable": true
              }
            }
          ],
          "expressiontypes": {
            "name": "Default"
          }
        },
        {
          "title": "Number line",
          "scanner": "NumberLine",
          "id": "NumberLine",
          "position": 400,
          "error": false,
          "numsubpods": 1,
          "subpods": [
            {
              "title": "",
              "img": {
                "src": "https://www4f.wolframalpha.com/Calculate/MSP/MSP18651701218197ib1a6h00004238gb1393bb3gc1?MSPStoreType=image/gif&s=42",
                "alt": "",
                "title": "",
                "width": 330,
                "height": 58,
                "type": "1DMathPlot_1",
                "themes": "1,2,3,4,5,6,7,8,9,10,11,12",
                "colorinvertable": true
              }
            }
          ],
          "expressiontypes": {
            "name": "1DMathPlot"
          }
        },
        {
          "title": "Continued fraction",
          "scanner": "ContinuedFraction",
          "id": "ContinuedFraction",
          "position": 500,
          "error": false,
          "numsubpods": 1,
          "subpods": [
            {
              "title": "",
              "img": {
                "src": "https://www4f.wolframalpha.com/Calculate/MSP/MSP18661701218197ib1a6h00002efe77d95e5efd1e?MSPStoreType=image/gif&s=42",
                "alt": "[3; 7, 15, 1, 292, 1, 1, 1, 2, 1, 3, 1, 14, 2, 1, 1, 2, 2, 2, 2, 1, 84, 2, 1, 1, 15, 3, 13, 1, ...]",
                "title": "[3; 7, 15, 1, 292, 1, 1, 1, 2, 1, 3, 1, 14, 2, 1, 1, 2, 2, 2, 2, 1, 84, 2, 1, 1, 15, 3, 13, 1, ...]",
                "width": 548,
                "height": 20,
                "type": "Default",
                "themes": "1,2,3,4,5,6,7,8,9,10,11,12",
                "colorinvertable": true
              }
            }
          ],
          "expressiontypes": {
            "name": "Default"
          },
          "states": [
            {
              "name": "More terms",
              "input": "ContinuedFraction__More terms"
            },
            {
              "name": "Fraction form",
              "input": "ContinuedFraction__Fraction form"
            }
          ]
        },
        {
          "title": "Alternative representations",
          "scanner": "MathematicalFunctionData",
          "id": "AlternativeRepresentations:MathematicalFunctionIdentityData",
          "position": 600,
          "error": false,
          "numsubpods": 3,
          "subpods": [
            {
              "title": "",
              "img": {
                "src": "https://www4f.wolframalpha.com/Calculate/MSP/MSP18671701218197ib1a6h00005hc128di8f89bf24?MSPStoreType=image/gif&s=42",
                "alt": "π = 180 °",
                "title": "π = 180 °",
                "width": 57,
                "height": 28,
                "type": "Default",
                "themes": "1,2,3,4,5,6,7,8,9,10,11,12",
                "colorinvertable": true
              }
            },
            {
              "title": "",
              "img": {
                "src": "https://www4f.wolframalpha.com/Calculate/MSP/MSP18681701218197ib1a6h00006abcdh91d1icc9gb?MSPStoreType=image/gif&s=42",
                "alt": "π = -i log(-1)",
                "title": "π = -i log(-1)",
                "width": 86,
                "height": 28,
                "type": "Default",
                "themes": "1,2,3,4,5,6,7,8,9,10,11,12",
                "colorinvertable": true
              }
            },
            {
              "title": "",
              "img": {
                "src": "https://www4f.wolframalpha.com/Calculate/MSP/MSP18691701218197ib1a6h0000523geed0ca698257?MSPStoreType=image/gif&s=42",
                "alt": "π = cos^(-1)(-1)",
                "title": "π = cos^(-1)(-1)",
                "width": 84,
                "height": 28,
                "type": "Default",
                "themes": "1,2,3,4,5,6,7,8,9,10,11,12",
                "colorinvertable": true
              }
            }
          ],
          "expressiontypes": [
            {
              "name": "Default"
            },
            {
              "name": "Default"
            },
            {
              "name": "Default"
            }
          ],
          "states": [
            {
              "name": "More",
              "input": "AlternativeRepresentations:MathematicalFunctionIdentityData__More"
            }
          ],
          "infos": [
            {
              "text": "log(x) is the natural logarithm",
              "img": {
                "src": "https://www4f.wolframalpha.com/Calculate/MSP/MSP18701701218197ib1a6h000055fecg5d4df59i1d?MSPStoreType=image/gif&s=42",
                "alt": "log(x) is the natural logarithm",
                "title": "log(x) is the natural logarithm",
                "width": "196",
                "height": "18"
              },
              "links": [
                {
                  "url": "http://reference.wolfram.com/language/ref/Log.html",
                  "text": "Documentation",
                  "title": "Mathematica"
                },
                {
                  "url": "http://functions.wolfram.com/ElementaryFunctions/Log",
                  "text": "Properties",
                  "title": "Wolfram Functions Site"
                },
                {
                  "url": "http://mathworld.wolfram.com/NaturalLogarithm.html",
                  "text": "Definition",
                  "title": "MathWorld"
                }
              ]
            },
            {
              "text": "i is the imaginary unit",
              "img": {
                "src": "https://www4f.wolframalpha.com/Calculate/MSP/MSP18711701218197ib1a6h000030242137884d29eb?MSPStoreType=image/gif&s=42",
                "alt": "i is the imaginary unit",
                "title": "i is the imaginary unit",
                "width": "146",
                "height": "18"
              },
              "links": [
                {
                  "url": "http://reference.wolfram.com/language/ref/I.html",
                  "text": "Documentation",
                  "title": "Documentation"
                },
                {
                  "url": "http://mathworld.wolfram.com/i.html",
                  "text": "Definition",
                  "title": "MathWorld"
                }
              ]
            },
            {
              "text": "cos^(-1)(x) is the inverse cosine function",
              "img": {
                "src": "https://www4f.wolframalpha.com/Calculate/MSP/MSP18721701218197ib1a6h00001i2i2b7bcahhae63?MSPStoreType=image/gif&s=42",
                "alt": "cos^(-1)(x) is the inverse cosine function",
                "title": "cos^(-1)(x) is the inverse cosine function",
                "width": "243",
                "height": "18"
              },
              "links": [
                {
                  "url": "http://reference.wolfram.com/language/ref/ArcCos.html",
                  "text": "Documentation",
                  "title": "Mathematica"
                },
                {
                  "url": "http://functions.wolfram.com/ElementaryFunctions/ArcCos",
                  "text": "Properties",
                  "title": "Wolfram Functions Site"
                },
                {
                  "url": "http://mathworld.wolfram.com/InverseCosine.html",
                  "text": "Definition",
                  "title": "MathWorld"
                }
              ]
            },
            {
              "links": {
                "url": "http://functions.wolfram.com/Constants/Pi/27/ShowAll.html",
                "text": "More information"
              }
            }
          ]
        },
        {
          "title": "Series representations",
          "scanner": "MathematicalFunctionData",
          "id": "SeriesRepresentations:MathematicalFunctionIdentityData",
          "position": 700,
          "error": false,
          "numsubpods": 3,
          "subpods": [
            {
              "title": "",
              "img": {
                "src": "https://www4f.wolframalpha.com/Calculate/MSP/MSP18731701218197ib1a6h00005b9e8e211a198ha6?MSPStoreType=image/gif&s=42",
                "alt": "π = 4 sum_(k=0)^∞ (-1)^k/(2 k + 1)",
                "title": "π = 4 sum_(k=0)^∞ (-1)^k/(2 k + 1)",
                "width": 102,
                "height": 57,
                "type": "Default",
                "themes": "1,2,3,4,5,6,7,8,9,10,11,12",
                "colorinvertable": true
              }
            },
            {
              "title": "",
              "img": {
                "src": "https://www4f.wolframalpha.com/Calculate/MSP/MSP18741701218197ib1a6h00003ahcd277576de9ge?MSPStoreType=image/gif&s=42",
                "alt": "π = -2 + 2 sum_(k=1)^∞ 2^k/binomial(2 k, k)",
                "title": "π = -2 + 2 sum_(k=1)^∞ 2^k/binomial(2 k, k)",
                "width": 127,
                "height": 70,
                "type": "Default",
                "themes": "1,2,3,4,5,6,7,8,9,10,11,12",
                "colorinvertable": true
              }
            },
            {
              "title": "",
              "img": {
                "src": "https://www4f.wolframalpha.com/Calculate/MSP/MSP18751701218197ib1a6h00006687df8254007ca8?MSPStoreType=image/gif&s=42",
                "alt": "π = sum_(k=0)^∞ (50 k - 6)/(2^k binomial(3 k, k))",
                "title": "π = sum_(k=0)^∞ (50 k - 6)/(2^k binomial(3 k, k))",
                "width": 103,
                "height": 67,
                "type": "Default",
                "themes": "1,2,3,4,5,6,7,8,9,10,11,12",
                "colorinvertable": true
              }
            }
          ],
          "expressiontypes": [
            {
              "name": "Default"
            },
            {
              "name": "Default"
            },
            {
              "name": "Default"
            }
          ],
          "states": [
            {
              "name": "More",
              "input": "SeriesRepresentations:MathematicalFunctionIdentityData__More"
            }
          ],
          "infos": [
            {
              "text": "binomial(n, m) is the binomial coefficient",
              "img": {
                "src": "https://www4f.wolframalpha.com/Calculate/MSP/MSP18761701218197ib1a6h00005be40140399dfcb9?MSPStoreType=image/gif&s=42",
                "alt": "binomial(n, m) is the binomial coefficient",
                "title": "binomial(n, m) is the binomial coefficient",
                "width": "202",
                "height": "36"
              },
              "links": [
                {
                  "url": "http://reference.wolfram.com/language/ref/Binomial.html",
                  "text": "Documentation",
                  "title": "Mathematica"
                },
                {
                  "url": "http://functions.wolfram.com/GammaBetaErf/Binomial",
                  "text": "Properties",
                  "title": "Wolfram Functions Site"
                },
                {
                  "url": "http://mathworld.wolfram.com/BinomialCoefficient.html",
                  "text": "Definition",
                  "title": "MathWorld"
                }
              ]
            },
            {
              "links": {
                "url": "http://functions.wolfram.com/Constants/Pi/06/ShowAll.html",
                "text": "More information"
              }
            }
          ]
        },
        {
          "title": "Integral representations",
          "scanner": "MathematicalFunctionData",
          "id": "IntegralRepresentations:MathematicalFunctionIdentityData",
          "position": 800,
          "error": false,
          "numsubpods": 3,
          "subpods": [
            {
              "title": "",
              "img": {
                "src": "https://www4f.wolframalpha.com/Calculate/MSP/MSP18771701218197ib1a6h00000ia14daad5a60cbd?MSPStoreType=image/gif&s=42",
                "alt": "π = 2 integral_0^∞ 1/(t^2 + 1) dt",
                "title": "π = 2 integral_0^∞ 1/(t^2 + 1) dt",
                "width": 119,
                "height": 44,
                "type": "Default",
                "themes": "1,2,3,4,5,6,7,8,9,10,11,12",
                "colorinvertable": true
              }
            },
            {
              "title": "",
              "img": {
                "src": "https://www4f.wolframalpha.com/Calculate/MSP/MSP18781701218197ib1a6h0000305igd2b30hh3aca?MSPStoreType=image/gif&s=42",
                "alt": "π = 4 integral_0^1 sqrt(1 - t^2) dt",
                "title": "π = 4 integral_0^1 sqrt(1 - t^2) dt",
                "width": 129,
                "height": 43,
                "type": "Default",
                "themes": "1,2,3,4,5,6,7,8,9,10,11,12",
                "colorinvertable": true
              }
            },
            {
              "title": "",
              "img": {
                "src": "https://www4f.wolframalpha.com/Calculate/MSP/MSP18791701218197ib1a6h00000db6ef248ig779ie?MSPStoreType=image/gif&s=42",
                "alt": "π = 2 integral_0^∞ sin(t)/t dt",
                "title": "π = 2 integral_0^∞ sin(t)/t dt",
                "width": 117,
                "height": 44,
                "type": "Default",
                "themes": "1,2,3,4,5,6,7,8,9,10,11,12",
                "colorinvertable": true
              }
            }
          ],
          "expressiontypes": [
            {
              "name": "Default"
            },
            {
              "name": "Default"
            },
            {
              "name": "Default"
            }
          ],
          "states": [
            {
              "name": "More",
              "input": "IntegralRepresentations:MathematicalFunctionIdentityData__More"
            }
          ],
          "infos": {
            "links": {
              "url": "http://functions.wolfram.com/Constants/Pi/07/ShowAll.html",
              "text": "More information"
            }
          }
        }
      ],
      "assumptions": {
        "type": "Clash",
        "word": "pi",
        "template": "Assuming \"${word}\" is ${desc1}. Use as ${desc2} instead",
        "count": 5,
        "values": [
          {
            "name": "NamedConstant",
            "desc": "a mathematical constant",
            "input": "*C.pi-_*NamedConstant-"
          },
          {
            "name": "Character",
            "desc": "a character",
            "input": "*C.pi-_*Character-"
          },
          {
            "name": "MathWorld",
            "desc": " referring to a mathematical definition",
            "input": "*C.pi-_*MathWorld-"
          },
          {
            "name": "Word",
            "desc": "a word",
            "input": "*C.pi-_*Word-"
          },
          {
            "name": "Movie",
            "desc": "a movie",
            "input": "*C.pi-_*Movie-"
          }
        ]
      }
    }
  };
  res.render('index', wolframTest);

});


module.exports = router;
