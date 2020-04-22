
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import SearchBar from '../SearchBar';
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
describe('SearchBar Component testing', function () {

  it('search_bar_wrapper should have  \"input\" element', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find('input')).to.have.attr('placeholder').equal('Search Movie Title...');
  });

  /* clearInputValue() */
  describe('clearInputValue() testing', function () {
    it('clearInputValue() should clear \"input\" value', () => {
      const wrapper = mount(<SearchBar />);
      wrapper.instance().clearInputValue();
      expect(typeof wrapper.find('input').props.value == 'undefined').to.equal(true);
    });
});

  /* clearInputValue() */
  describe('handleInputChange() testing', function () {
    it('handleInputChange() should set \"state\" to arguement passed', () => {
      const wrapper = mount(<SearchBar />);
      wrapper.instance().handleInputChange("test").then((result) => {
        expect(wrapper.state().inputField === result).to.be.equal(true);
      })
    });
});



  chai.use(chaiEnzyme())

});