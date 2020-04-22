## Project Title
Movie DB - Film app that queries a film database for information.

## Prerequisites
You will need an internet connection, Node.js installed on your computer.

## Installing
1. Install the latest version of NodeJS
2. Open your Code Editor, open terminal and enter `npm install`.
( now you have all the neccessary modules to test and deploy your app )

## Deployment 
1. Open your Code Editor, open terminal and enter `npm run build`.
2. Then enter `cd build`.
 ( from the build directory you can stage your website, my personal platform I use is surge.sh, or yo can use React scripts )

## Deployment Surge
1. Install the latest version of NodeJS
2. Install using npm by running `npm install -g surge`
2. Run surge from within any directory to publish that directory onto the web.

## Deployment React
1. Open your Code Editor, open terminal and enter `npm run start`.


## Built With 
Visual Studio Code
React.js

## Testing
Step 1: Please set up your test enviroment by `npm install` the following and make sure that the entry is followed by `--save-dev`:
1. @babel/core
2.  @babel/plugin-transform-modules-commonjs
3. @babel/register
4. @testing-library/jest-dom
5. @testing-library/react
6. @testing-library/user-event
7. babel-plugin-inline-react-svg
8. babel-preset-react-app-babel-7
9. chai
10. chai-enzyme
11. enzyme
12. enzyme-adapter-react-16
13. ignore-styles
14. jsdom
15. mocha
16. node-fetch
17. node-sass
Step 2: Create a `babel.rc` file in your root directory and paste in the following: 
{    
    "presets": ["react-app"],
    "plugins": ["@babel/plugin-transform-modules-commonjs"]
}
Step 3: Navigate to `package.json` and firstly make sure all the above packages are saved under `devDepencies` and then locate
the `test` script and paste in the following: `"NODE_ENV=test mocha --require @babel/register --require ignore-styles src/js/test/<yourFIle>.js"`,
if you are a Windows user simpy paste: `"NODE_ENV=test && mocha --require @babel/register --require ignore-styles src/js/test/<yourFIle>.js"`.
Step 4: Copy this code into your new test.js doc: 
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
 
<! Write your tests here > 

    chai.use(chaiEnzyme())
});
   

## Contributing
The Movie Database API.

## Versioning
none

## Authors
Jean Greeff, GitHub - https://github.com/greeffjean

## License
none


## Acknowledgments
This project was built in 2020, practicing REACT.JS, JAVASCRIPT.



## Auto Genrerated 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
