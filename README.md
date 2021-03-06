## React App Scaffold
My current scaffold for TypeScript apps with React & Redux. Use at your own risk. PRs are more than welcome.

[![Dependency Status](https://david-dm.org/sambou/react-boilerplate.svg)](https://david-dm.org/sambou/react-boilerplate)
[![devDependency Status](https://david-dm.org/sambou/react-boilerplate/dev-status.svg)](https://david-dm.org/sambou/react-boilerplate#info=devDependencies)
[![Build Status](https://travis-ci.org/sambou/react-boilerplate.svg?branch=master)](https://travis-ci.org/sambou/react-boilerplate)
[![Demo on Heroku](https://img.shields.io/badge/heroku-demo-blue.svg)](https://react-boilerplate.herokuapp.com)

## Setup
- ```npm install```
- ```npm start``` for dev server at localhost:3000
- ```npm test``` for unit tests
- ```npm run build``` gets run automatically in production environments via postinstall hook

## TODOs
- [ ] Update hot loader
- [ ] Add Immutable.js
- [ ] Add normalizr
- [ ] Add more testing facilities (e.g. Nock, nice integration test boilerplate)
- [ ] Find a way to decouple boilerplate code from application code
- [ ] Add server-side authentication (passport.js, cookies)
- [ ] Add enzyme for testing

## Misc
- Unit tests are run as a precommit hook
