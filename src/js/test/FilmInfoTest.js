
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import FilmInfo from '../FilmInfo';
import chaiEnzyme from 'chai-enzyme';
import Adapter from 'enzyme-adapter-react-16';

/* Set-Up Dom Enviroment */
const jsdom = require("jsdom");

function setUpDomEnvironment() {
    const { JSDOM } = jsdom;
    const dom = new JSDOM('<!doctype html><html><body></body></html>', { url: 'http://localhost/' });
    const { window } = dom;
    global.window = window;
    global.document = window.document;
    global.navigator = {
        userAgent: 'node.js',
    };
    copyProps(window, global);
}

function copyProps(src, target) {
    const props = Object.getOwnPropertyNames(src)
        .filter(prop => typeof target[prop] === 'undefined')
        .map(prop => Object.getOwnPropertyDescriptor(src, prop));
    Object.defineProperties(target, props);
}

setUpDomEnvironment();

/* Adapter */
configure({ adapter: new Adapter() });


/* FilmInfo.js */
describe('FilmInfo Component testing', function () {

    /* retreiveFilmData() */
    describe('retreiveFilmData() function', function () {
        it('retrieveFilmData should update state with new data', async () => {
            const wrapper = mount(<FilmInfo />);
            let testObj = {
                popularity: 43.43,
                vote_count: 4601,
                video: false,
                poster_path: "/w9kR8qbmQ01HwnvK4alvnQ2ca0L.jpg",
                id: 301528,
                adult: false,
                backdrop_path: "/m67smI1IIMmYzCl9axvKNULVKLr.jpg",
                original_language: "en",
                original_title: "Toy Story 4",
                genre_ids: [12, 16, 35, 14, 10751],
                title: "Toy Story 4",
                vote_average: 7.6,
                overview: "Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called \Forky\ to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.",
                release_date: "2019-06-19"
            };

            let prevState = wrapper.state();
            let result;
            
            before((done) => {
                wrapper.instance().retrieveFilmData(testObj).then((resolvedValue) => {
                    result = resolvedValue;
                    done();
                });
            });

            expect(result !== prevState).to.equal(true);

        });
    })

    chai.use(chaiEnzyme())

});