[![Build Status](https://travis-ci.org/minimalist-components/webcomponent.svg?branch=master)](https://travis-ci.org/minimalist-components/webcomponent)
[![Coverage Status](https://coveralls.io/repos/github/minimalist-components/webcomponent/badge.svg?branch=master)](https://coveralls.io/github/minimalist-components/webcomponent?branch=master)

The architecture used by minimalist components

### study case

A simple input text, with getters and setters, and a animation in placeholder using CSS.
The core is writed in a es6 class, and the components will be available in

- HTML5 (custom elements)
- Angular (directive)
- React (component)
- Vue (component)

The target is implement a webcomponent using only javascript, and easiliy offer their to any framework or anyone.

### Demo

The url [minimalist-components.github.io/webcomponent](http://minimalist-components.github.io/webcomponent) (not available yet)

At now, clone this project and run locally. You need `node` and `npm` only.

```sh
# install dependencies
npm install
```

```sh
# start the demo at `localhost:3000`
npm start
```

### Tests

All specs is defined in spec files `sources/**/*.spec.js`.
To run tests, just run

```sh
# run tests in backend, using a headless browser (nightmare)
npm test
```

```sh
# run with karma
npm test chrome
```

available browsers

- all (run in all browsers, below)
- chrome
- safari
- nightmare (headless)


If you want pass args for script, just use `-- args here`, e.g.

```sh
# in example below, --watch is argument passed to process
npm test -- --watch
```

You can see all args available in the following links, to [mocha](https://mochajs.org/#usage) and [karma](https://karma-runner.github.io/1.0/config/configuration-file.html)
