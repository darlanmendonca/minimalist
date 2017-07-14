# Contributions

Found a bug or have an idea? Please, create an issue or a pull request. Always have enhancements to do!

## About

Minimalist is a framework with UI components, agnostic to frameworks, and easy to use and change identity.

This means that you can use it without framework or with frameworks such as: angular, react, vue, etc.


### architecture

The core of each component, is a ES6 Class, and for each framework we create a respective component (directive in angular, component in react and so on). Therefore, the core is just the ES6 Class and we move their to frameworks, respecting the architecture of each one of them.

### design

We like flat design, but minimalism is easier to use and overwrite, it have less 'kbs', that's why we choose for a minimalist design. This means that our components has a design specification, but if you need (and you will), you can easily change the design to follow component's identity.

### productive

During development you maybe write more than you want, for example, the code below, just implement an input text with a text as placeholder and validation messages to required field.

```html
<md-input-container no-ink="no-ink" class="md-icon-float md-block md-has-icon">
  <label>Username</label>
  <input required name="username" ng-model="username" name="username" autocomplete="off"/>
  <small ng-messages="form.username.$error" class="help-block">
    <span ng-message="required">Campo obrigatório</span>
  </small>
</md-input-container>
```

We abstracted all stuffs in components, so our input component is just:

```html
<mn-input placeholder="Username" ng-model="username" required />
<!-- and other attributes that you know like disabled, autofucus, etc, is supported, we dont reinvent the wheel -->
```

### Demo

You can see all components in our site [minimalist/components](http://reservafacil.github.io/minimalist) ~~not available yet, working on it~~.

### Usage

```sh
# working in progress, not available yet
npm install @reservafacil/minimalist
```

```js
// In your scripts, just import the module and bundle using a tool like webpack or browserify
const {input} = require('@reservafacil/minimalist')
```

```html
<!-- in your html, just use the component -->
<mn-input placeholder="lorem ipsum" />
```

Using a framework? Check the directory [webcomponents/COMPONENT-NAME-HERE](https://github.com/reserva-facil/minimalist/tree/master/webcomponents) to see the entire documentation of component.


### Tests

We believe in tests as the unique way to have sure that our work really works, in different browsers and operational systems. So, we cover all with tests.

You can run all tests, cloning this project.

```sh
# install the dependencies
npm install
```

```sh
npm test
```

Actually we support latest versions of Chrome, Firefox, Safari and Edge. We will add more browsers soon as possible.
