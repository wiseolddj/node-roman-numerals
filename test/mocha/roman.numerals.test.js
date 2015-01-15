'use strict';
var expect = require('chai').expect;

var romanNumerals = require('../../app/lib/roman.numerals.js');
console.log(romanNumerals.generate(2));

describe('RomanNumeralGenerator', function () {
    it('Returns an object', function () {
        expect(romanNumerals).to.be.an('object');
    });
    describe('#generate()', function () {
        it('is a function', function () {
            expect(romanNumerals.generate).to.be.a('function');
        });
        it('accepts a number', function () {
            //wrap in function to produce error
            expect(function () {
                romanNumerals.generate(2)
            }).to.not.throw('Error');
        });
        it('does not accept a string', function () {
            //wrap in function to produce error
            expect(function () {
                romanNumerals.generate('monkey')
            }).to.throw('Error');
        });
        it('returns a string', function () {
            expect(romanNumerals.generate(2)).to.be.a('string');
        });
        //breaking down the problem
        describe('numbers up to 10', function () {
            it('returns "I" when given the number 1', function () {
                expect(romanNumerals.generate(1)).to.equal('I');
            });
            it('returns "II" when given the number 2', function () {
                expect(romanNumerals.generate(2)).to.equal('II');
            });
            it('returns "III" when given the number 3', function () {
                expect(romanNumerals.generate(3)).to.equal('III');
            });
            it('returns "IV" when given the number 4', function () {
                expect(romanNumerals.generate(4)).to.equal('IV');
            });
            it('returns "V" when given the number 5', function () {
                expect(romanNumerals.generate(5)).to.equal('V');
            });
            it('returns "VI" when given the number 6', function () {
                expect(romanNumerals.generate(6)).to.equal('VI');
            });
            it('returns "VII" when given the number 7', function () {
                expect(romanNumerals.generate(7)).to.equal('VII');
            });
            it('returns "VIII" when given the number 8', function () {
                expect(romanNumerals.generate(8)).to.equal('VIII');
            });
            it('returns "IX" when given the number 9', function () {
                expect(romanNumerals.generate(9)).to.equal('IX');
            });
            it('returns "X" when given the number 10', function () {
                expect(romanNumerals.generate(10)).to.equal('X');
            });
        });
        //test a range of numbers that match 10, 20, 30, 40 etc
        describe('numbers up to 100', function () {
            it('returns "XI" when given the number 11', function () {
                expect(romanNumerals.generate(13)).to.equal('XIII');
            });
            it('returns "XXIV" when given the number 24', function () {
                expect(romanNumerals.generate(24)).to.equal('XXIV');
            });
            it('returns "XXXVIII" when given the number 38', function () {
                expect(romanNumerals.generate(38)).to.equal('XXXVIII');
            });
            it('returns "XLI" when given the number 41', function () {
                expect(romanNumerals.generate(41)).to.equal('XLI');
            });
            it('returns "LV" when given the number 55', function () {
                expect(romanNumerals.generate(55)).to.equal('LV');
            });
            it('returns "LXVII" when given the number 67', function () {
                expect(romanNumerals.generate(67)).to.equal('LXVII');
            });
            it('returns "LXXII" when given the number 72', function () {
                expect(romanNumerals.generate(72)).to.equal('LXXII');
            });
            it('returns "LXXXIX" when given the number 89', function () {
                expect(romanNumerals.generate(89)).to.equal('LXXXIX');
            });
            it('returns "XC" when given the number 90', function () {
                expect(romanNumerals.generate(90)).to.equal('XC');
            });

        });
        describe('Much larger numbers', function () {
            it('returns "MMMCMXCIX" when given the number 3999', function () {
                expect(romanNumerals.generate(3999)).to.equal('MMMCMXCIX');
            });
            it('returns "MMDCLXXIV" when given the number 2674', function () {
                expect(romanNumerals.generate(2674)).to.equal('MMDCLXXIV');
            });
            it('returns "DCLXV" when given the number 665', function () {
                expect(romanNumerals.generate(90)).to.equal('XC');
            });
            it('returns an error on numbers larger than 3999',function(){
                expect(function () {
                    romanNumerals.generate(90000000)
                }).to.throw('Number too large');
                expect(function () {
                    romanNumerals.generate(4000)
                }).to.throw('Number too large');
            })
        })

    });

    describe('#parse()', function () {
        it('is a function', function () {
            expect(romanNumerals.generate).to.be.a('function');
        });
        it('accepts a string', function () {
            //wrap in function to produce error
            expect(function () {
                romanNumerals.parse('M')
            }).to.not.throw('Error');
        });
        it('throws error when given another type',function(){
            expect(function () {
                romanNumerals.parse({})
            }).to.throw('Cannot parse input');
            expect(function () {
                romanNumerals.parse(12)
            }).to.throw('Cannot parse input');
            expect(function () {
                romanNumerals.parse(Array())
            }).to.throw('Cannot parse input');
        });
        it('throws error when given an invalid string',function(){
            expect(function () {
                romanNumerals.parse('monkey')
            }).to.throw('Cannot parse input');
            expect(function () {
                romanNumerals.parse('IIIIIII')
            }).to.throw('Cannot parse input');
            expect(function () {
                romanNumerals.parse('XIVX')
            }).to.throw('Cannot parse input');
            expect(function () {
                romanNumerals.parse('ii')
            }).to.throw('Cannot parse input');
        });
        describe('valid input', function(){
            it('returns 1 when given I',function(){
                expect(romanNumerals.parse('I')).to.equal(1);
            });
            it('returns 2 when given II',function(){
                expect(romanNumerals.parse('II')).to.equal(2);
            });
            it('returns 4 when given IV',function(){
                expect(romanNumerals.parse('IV')).to.equal(4);
            });
            it('returns 6 when given VI',function(){
                expect(romanNumerals.parse('VI')).to.equal(6);
            });
            it('returns 26 when given XXVI',function(){
                expect(romanNumerals.parse('XXVI')).to.equal(26);
            });
            it('returns 2345 when given MMCCCXLV',function(){
                expect(romanNumerals.parse('MMCCCXLV')).to.equal(2345);
            });
        });

    });

    describe('#generateZeros()', function () {
        it('returns the correct zero string', function () {
            expect(romanNumerals.generateZeros(1)).to.equal('0');
            expect(romanNumerals.generateZeros(4)).to.equal('0000');
        })

    });
    describe('#generateRomanNumberSection()', function () {
        it('returns correct values at digit position 0', function () {
            expect(romanNumerals.generateRomanNumberSection(1,0)).to.equal('I');
            expect(romanNumerals.generateRomanNumberSection(2,0)).to.equal('II');
            expect(romanNumerals.generateRomanNumberSection(3,0)).to.equal('III');
            expect(romanNumerals.generateRomanNumberSection(4,0)).to.equal('IV');
            expect(romanNumerals.generateRomanNumberSection(5,0)).to.equal('V');
            expect(romanNumerals.generateRomanNumberSection(6,0)).to.equal('VI');
            expect(romanNumerals.generateRomanNumberSection(7,0)).to.equal('VII');
            expect(romanNumerals.generateRomanNumberSection(8,0)).to.equal('VIII');
            expect(romanNumerals.generateRomanNumberSection(9,0)).to.equal('IX');
        });
        it('returns correct values at digit position 1', function () {
            expect(romanNumerals.generateRomanNumberSection(1,1)).to.equal('X');
            expect(romanNumerals.generateRomanNumberSection(2,1)).to.equal('XX');
            expect(romanNumerals.generateRomanNumberSection(3,1)).to.equal('XXX');
            expect(romanNumerals.generateRomanNumberSection(4,1)).to.equal('XL');
            expect(romanNumerals.generateRomanNumberSection(5,1)).to.equal('L');
            expect(romanNumerals.generateRomanNumberSection(6,1)).to.equal('LX');
            expect(romanNumerals.generateRomanNumberSection(7,1)).to.equal('LXX');
            expect(romanNumerals.generateRomanNumberSection(8,1)).to.equal('LXXX');
            expect(romanNumerals.generateRomanNumberSection(9,1)).to.equal('XC');
        });
        it('returns correct values at digit position 2', function () {
            expect(romanNumerals.generateRomanNumberSection(1,2)).to.equal('C');
            expect(romanNumerals.generateRomanNumberSection(2,2)).to.equal('CC');
            expect(romanNumerals.generateRomanNumberSection(3,2)).to.equal('CCC');
            expect(romanNumerals.generateRomanNumberSection(4,2)).to.equal('CD');
            expect(romanNumerals.generateRomanNumberSection(5,2)).to.equal('D');
            expect(romanNumerals.generateRomanNumberSection(6,2)).to.equal('DC');
            expect(romanNumerals.generateRomanNumberSection(7,2)).to.equal('DCC');
            expect(romanNumerals.generateRomanNumberSection(8,2)).to.equal('DCCC');
            expect(romanNumerals.generateRomanNumberSection(9,2)).to.equal('CM');
        });
        it('returns correct values at digit position 3', function () {
            expect(romanNumerals.generateRomanNumberSection(1,3)).to.equal('M');
            expect(romanNumerals.generateRomanNumberSection(2,3)).to.equal('MM');
            expect(romanNumerals.generateRomanNumberSection(3,3)).to.equal('MMM');
        });

    });
});