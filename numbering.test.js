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
                `strings should be the same [ expected: ${tCase.expected} ]`,
                caseTest(tCase, prep(tCase.args[0], tCase.args[1], tCase.args[2]))
            );
        });

    });

    describe('Check "recog" function features', function () {
    
        tCases['recog-function'].forEach((tCase) => {
            it(
                `strings should be the same [ expected: ${tCase.expected} ]`,
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
            { "args": [ "one", "two", 2 ], "idx": 2000, "expected": "one2000two" },
            { "args": [ "begin", "end", 1 ], "idx": 10, "expected": "begin10end" },
            { "args": [ "prefix", "postfix", 0 ], "idx": 20, "expected": "prefix20postfix" },
            { "args": [ "cat_", "small", 4 ], "idx": 30, "expected": "cat_0030small" }
        ],
        "recog-function": [
            { "arg": "directory/img076.svg", "idx": 24, "expected": "directory/img024.svg" },
            { "arg": "numbering00012_small", "idx": 1967, "expected": "numbering01967_small" },
            { "arg": "file012_copy", "idx": 7, "expected": "file007_copy" },
            { "arg": "1", "idx": 3, "expected": "3" },
            { "arg": "aa_1", "idx": 3, "expected": "aa_3" },
            { "arg": "a-01", "idx": 3, "expected": "a-03" },
            { "arg": "1m", "idx": 5, "expected": "5m" },
            { "arg": "e001", "idx": 5, "expected": "e005" },
            { "arg": "0001", "idx": 5, "expected": "0005" },
            { "arg": "aa_1", "idx": 24, "expected": "aa_24" },
            { "arg": "a-01s", "idx": 67, "expected": "a-67s" },
            { "arg": "a-01l", "idx": 176, "expected": "a-176l" },
            { "arg": "a_01", "idx": 1983, "expected": "a_1983" },
            { "arg": "23_1_o", "idx": 8, "expected": "23_8_o" },
            { "arg": "10_01_o.svg", "idx": 6, "expected": "10_06_o.svg" }
        ]
    });
};