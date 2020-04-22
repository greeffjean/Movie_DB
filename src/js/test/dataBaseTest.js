
const assert = require('chai').assert;
const filmDataBaseTest = require('../dataBaseTest');

describe("filmDataBase", () => {
    let jsonObject = filmDataBaseTest.search("test");
    describe("search()", () => {
        it("search() should return \"json Object\"", () => {
            assert.equal(sayHelloResult, "hello");
        });
    });

    let addNumbersResult = app.addNumbers(5, 5);
    describe("addNumbers()", () => {
        it("addNumbers() should return sum of two numbers", () => {
            assert.equal(addNumbersResult, "10");
        });
        it("addNumbers() should return a number", () => {
            assert.typeOf(addNumbersResult, 'number');
        });
    });
});