
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import App from '../App';
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


 /* html */
describe('App Component testing', function () {

  it('Class = Logo has attr = \"logo\"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.logo')).to.have.attr('alt').equal('logo');
  });

  it("App root class is \"App\"", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.have.attr('class').equal('main_content_wrapper');
  });

  /* search function */
  describe('Search()', () => {
    it("should return an object full of movie data", () => {
      const wrapper = mount(<App />);
      wrapper.instance().search("test").then((results) => {
        expect(results).to.be.an('array').that.is.not.empty;
      });
    });
  
    it('should update the state with the returned results and film list in state should be same as returned results', () => {
      const wrapper = mount(<App />);
      let preFilmList = wrapper.state().filmList;
      wrapper.instance().search("test").then((results) => {
        expect(preFilmList.length != wrapper.state().filmList.length && results.length == wrapper.state().filmList.length).to.be.equal(true);
      });
    });
  });

   /* clearInput function */
   describe('clearSearch()', () => {
    it("should return false", () => {
      const wrapper = mount(<App />);
      wrapper.instance().clearSearch();
      expect(wrapper.state().activateFilmList).to.be.equal(false);
    });
  });

  chai.use(chaiEnzyme())

});