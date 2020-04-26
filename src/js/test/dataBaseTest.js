

const assert = require('chai').assert;
const filmDataBase = require('../filmDataBase');

describe("filmDataBase", () => {
    describe("search()", () => {

        let searchResult ;
        const search = () => Promise.resolve(filmDataBase.default.search("test"));

        before(async () => {
            searchResult = await search();
        })

        it("search() should return an object that is not empty", () => {
            assert.equal(typeof searchResult == 'object', true)
                });
        })
    })  
