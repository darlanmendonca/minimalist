[![Build Status](https://travis-ci.org/reserva-facil/minimalist.svg?branch=master)](https://travis-ci.org/reserva-facil/minimalist)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

# mn-search

A search component, with minimalist design

### Install

```sh
# working in progress, not available yet
npm install @reservafacil/minimalist
```

```js
// In your scripts, just import the module, and bundle using a tool like webpack, or browserify
const {search} = require('@reservafacil/minimalist')
```


```sass
// Dont forget the .scss file, to style component
@import 'path/to/node_modules/@reservafacil/minimalist/webcomponents/dialog-sheet/dialog-sheet.scss';
@import 'path/to/node_modules/@reservafacil/minimalist/webcomponents/select/select.scss';
@import 'path/to/node_modules/@reservafacil/minimalist/webcomponents/search/search.scss';
```


### Usage

This module extends a `mn-select`, so all documentation of it is valid, in use of attributes, or tag option.

The main difference is that options will be created using javascript.

In your html, you can use the tags `mn-search` e.g.

```html
<mn-search placeholder="House" name="house"></mn-search> 
```

```js
const search = document.querySelector('mn-search')

search.addEventListener('search', (event) => {
  const params = new URLSearchParams()
  params.append('query', event.query)
  const houses = new Request(`/houses?${params}`) // the url to server our options

  event.target
    .fetch(houses)
    .then(setOptions)

  async function setOptions(response) {
    const houses = await response.json()
    houses.forEach(house => {
      // const obj = {name: house, value: house.toLowerCase()}
      const option = document.createElement('option')
      option.textContent = house//obj.name
      option.setAttribute('value', house.toLowerCase())//JSON.stringify(obj))

      event.target.appendChild(option)
    })
  }
})
```


### Fetch

This method exists to manager loading style of component, and clean old options. You can use with this method, a simple url (String), or a instance of Request object, like example above. And use the native `fetch` API to make your request.


### Angular

In angular is common use a service like `$http`, `$resource`, or `Restangular`. To use any of them with `mn-search` is indicated create a directive. The unique requirement, is that function, return a promise.

Below a simple directive to search houses of game of thrones

```html
<mn-search placeholder="House" ng-model="house"></mn-search>
```

```js
// directive to elements with class .houses
angular
  .module('app')
  .directive('houses', HousesSearchDirective)

function HousesSearchDirective(Houses) {
  return {
    restrict: 'C',
    require: 'ngModel',
    link(scope, element, attributes) {
      element.bind('search', (event) => {
        const {query} = event
        event.target
          .fetch(() => Houses.list({query}))
          .then(setOptions)

        function setOptions(houses) {
          houses.forEach(house => {
            const option = document.createElement('option')
            option.textContent = house
            option.setAttribute('value', house.toLowerCase())

            event.target.appendChild(option)
          })
        }
      })
    }
  }
}
``` 

```js
// Houses Service, using ngResource
angular
  .module('app')
  .service('Houses', HousesService)

function HousesService($resource) {
  const service =  $resource('/houses') // the endpoint

  this.list = list

  function list(params = {}) {
    // important, the ngResource dont return a promise by default, use the .$promise to made this
    return service.query(params).$promise 
  }
}
```
