const expect = require('chai').expect;
const { prep, recog } = require('./numbering');
const tCases = getTestCases();


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
 
        tCases['prep-function'].forEach((tCase) => {
            it(
                'strings should be the same',
                caseTest(tCase, prep(tCase.args[0], tCase.args[1], tCase.args[2]))
            );
        });

    });

    describe('Check "recog" function features', function () {
    
        tCases['recog-function'].forEach((tCase) => {
            it(
                'strings should be the same',
                caseTest(tCase, recog(tCase.arg))
            );
        });
        
    });

});

function caseTest(testCase, nb) {

    return () => { expect(nb.get(testCase.idx)).to.equal(testCase.expected); };
};

function getTestCases() {

    return ({
        "prep-function": [
            { "args": [ "start", "stop", 4 ], "idx": 67, "expected": "start0067stop" },
            { "args": [ "start", "stop", 4 ], "idx": 128, "expected": "start0128stop" },
            { "args": [ "one", "two", 2 ], "idx": 2000, "expected": "one2000two" },
            { "args": [ "begin", "end", 1 ], "idx": 10, "expected": "begin10end" },
            { "args": [ "prefix", "postfix", 0 ], "idx": 20, "expected": "prefix20postfix" }
        ],
        "recog-function": [
            { "arg": "directory/img076.svg", "idx": 24, "expected": "directory/img024.svg" },
            { "arg": "directory/img03.png", "idx": 256, "expected": "directory/img256.png" },
            { "arg": "numbering00012_small", "idx": 1967, "expected": "numbering01967_small" },
            { "arg": "img03.png", "idx": 70, "expected": "img70.png" },
            { "arg": "img01m", "idx": 130, "expected": "img130m" }
        ]
    });
};