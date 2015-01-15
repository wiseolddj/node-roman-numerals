'use strict';
var romanNumerals = require('./lib/roman.numerals');

var Api = {

    //handle the root request
    getRoot: function (req, res) {
        res.render('homepage');
    },
    generate: function (req, res){
        var number,romanNumeral;
        number = req.body.number;
        romanNumeral = romanNumerals.generate(number);
        res.json(
            {
                "romanNumeral":romanNumeral,
                "parsedNumber":number
            }
        );
    },
    parse: function(req, res){
        var number,romanNumeral;
        romanNumeral = req.body.romanNumeral;
        number = romanNumerals.parse(romanNumeral);
        res.json(
            {
                "number":number,
                "parsedromanNumeral":romanNumeral
            }
        );
    }
};

module.exports = Api;