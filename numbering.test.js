const expect = require('chai').expect;

const { prep, recog } = require('./numbering');

describe('Numbering module', function () {

    describe('Check correctness functions types', function() {

        it('"prep" should be function variable', function () {

            expect(prep).to.be.a('function');
        });

        it('"recog" should be function variable', function () {

            expect(recog).to.be.a('function');
        });

    });

    describe('Check "prep" function features', function () {
        
        const tCases = [
            {
                params: [ 'start', 'stop', 4 ],
                idx: 67,
                expected: 'start0067stop'
            },
            {
                params: [ 'start', 'stop', 4 ],
                idx: 128,
                expected: 'start0128stop'
            },
            {
                params: [ 'one', 'two', 2 ],
                idx: 2000,
                expected: 'one2000two'
            },
        ];

        const prepTest = (tCase) => {
            return () => {
                const result = prep(tCase.params[0], tCase.params[1], tCase.params[2]);
                expect(result.get(tCase.idx)).to.equal(tCase.expected);;
            }
        }
    
        tCases.forEach((tCase) => {
            it('strings should be the same', prepTest(tCase));
        });

    });

    describe('Check "recog" function features', function () {
        
        const tCases = [
            {
                param: 'directory/img076.svg',
                idx: 24,
                expected: 'directory/img024.svg'
            },
            {
                param: 'directory/img03.png',
                idx: 256,
                expected: 'directory/img256.png'
            },
            {
                param: 'numbering00012_small',
                idx: 1967,
                expected: 'numbering01967_small'
            },
        ];

        const recogTest = (tCase) => {
            return () => {
                const result = recog(tCase.param);
                expect(result.get(tCase.idx)).to.equal(tCase.expected);;
            }
        }
    
        tCases.forEach((tCase) => {
            it('strings should be the same', recogTest(tCase));
        });
        
    });

});