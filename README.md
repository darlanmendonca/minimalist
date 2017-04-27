[![Build Status](https://travis-ci.org/minimalist-components/webcomponent.svg?branch=master)](https://travis-ci.org/minimalist-components/webcomponent)

a draft(and refactor) of webcomponent, using only the necessary to run, and most uptodated apis, without fallbacks/polyfills.

### starring

- pure es6 (no transpile)
- module exported only to npm (in commonjs)
- unit tests
- integration tests

### study case

a simple input text


### demo

access the url [minimalist-components.github.io/webcomponent](http://minimalist-components.github.io/webcomponent) (not available yet)

or clone this project and run locally. You need node and npm, just run these scripts

```sh
# install dependencies
npm install
```

```sh
# start the demo at `localhost:3000`
npm install
```

The demo can be used to developement too, change files, automatically reload the browser.

### tests

all specs is defined in spec files `sources/**/*.spec.js`.
To run tests, just run

```sh
# run tests in backend, using a headless browser
npm test
```

```sh
# run with karma
npm test chrome # too available chrome, safari, and nightmare (headless)
```

If you want pass args for script, just use `-- args here`, e.g.

```sh
# in example below, --watch is argument passed to process
npm test -- --watch
```

all mocha args availabe [here](https://mochajs.org/#usage)
