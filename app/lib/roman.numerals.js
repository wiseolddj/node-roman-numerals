'use strict';

/* functions for converting and parsing numbers to roman numerals.
* Names are kept from the exercise so that the following is implemented:
* interface RomanNumeralGenerator {
*      public generate(<integer>); // convert from int -> roman
*      public parse(<string>); // convert from roman -> int
* }
*/
var RomanNumeralGenerator = {

    //map used for generation of numerals
    numberMap: {
        '0': '', '1': 'I', '5': 'V', '10': 'X', '50': 'L', '100': 'C', '500': 'D', '1000': 'M'
    },

    //map used for parsing numerals
    numeralMap: {
        'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1
    },

    //Convert a number to a Roman Numeral
    generate: function (numberToConvert) {
        //validate input
        if (numberToConvert !== parseInt(numberToConvert, 10)) {
            throw('Error');
        }
        if (numberToConvert > 3999) {
            throw('Number too large')
        }

        var romanNumber = '',
            digits = numberToConvert.toString().split('').reverse();

        for (var i in digits) {
            romanNumber = this.generateRomanNumberSection(parseInt(digits[i], 10), i) + romanNumber;
        }

        return romanNumber;
    },

    //convert a roman numeral to an integer
    parse: function (romanNumeral) {
        //validate input - Only accept uppercase representation
        var validRegex = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/;
        if (typeof (romanNumeral) !== 'string' || !validRegex.test(romanNumeral)) {
            throw('Cannot parse input');
        }

        var tokens = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
            value = 0,
            extractedToken;

        while (extractedToken = tokens.exec(romanNumeral))
            value += this.numeralMap[extractedToken[0]];
        return value;
    },

    //Helper methods. If implemented in another language these would be private
    //return a string of zeros. This maps to the position of the digit
    generateZeros: function (lengthToGenerate) {
        var zeros = '';
        for (var i = 0; i < lengthToGenerate; i++) {
            zeros += '0';
        }
        return zeros;
    },

    //returns the correct 'section' of a numeral based on the position of the digit. e.g. VI, XC, D
    generateRomanNumberSection: function (numberVal, digitPosition) {
        var section = '';
        var suffix = this.generateZeros(digitPosition);

        // build the correct sections based on the digit position.
        switch (true) {
            case(numberVal < 4):
                for (var i = 1; i <= numberVal; i++) {
                    section += this.numberMap['1' + suffix];
                }
                break;
            case (numberVal == 4):
                section = this.numberMap['1' + suffix] + this.numberMap['5' + suffix];
                break;
            case (numberVal == 5):
                section = this.numberMap['5' + suffix];
                break;
            case (numberVal < 9):
                section = this.numberMap['5' + suffix];
                for (var i = 1; i <= (numberVal - 5); i++) {
                    section += this.numberMap['1' + suffix];
                }
                break;
            case (numberVal == 9):
                section = this.numberMap['1' + suffix] + this.numberMap['10' + suffix];
                break;
        }
        return section;
    }

};

module.exports = RomanNumeralGenerator;