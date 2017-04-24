a draft(and refactor) of webcomponent, using only the necessary to run, and most uptodated apis, without fallbacks/polyfills.

### starring

- pure es6 (no transpile)
- custom elements v1
- module exported only to npm (in commonjs)
- unit tests
- integration tests

### study case

a simple input text


### demo

access the url [minimalist-components.github.io/webcomponent](http://minimalist-components.github.io/webcomponent)

or clone this project. to run locally, you need node and npm, just run these scripts

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
npm test
```

