[![Build Status](https://travis-ci.org/darlanmendonca/minimalist.svg?branch=master)](https://travis-ci.org/darlanmendonca/minimalist)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

## minimalist

A lot of components ready to be used with or without any framework.

See the [components list](https://github.com/darlanmendonca/minimalist/tree/master/src).

### How it works

Each component in minimalist, has a single core writed with a ES6 class, following the Custom Elements API v1 and providing a complete style ready to be used or customized using CSS Variables.

All is designed to allow inheritance between components, e.g. `<mn-input>` defines a input text in appearance and behaviors like a disabled state. But if you need a input number, `<mn-number>` extends `mn-input` style and common behaviors, but implements new features like increment/decrement using arrow keys, or min/max parameters.


Each feature is built with three things in mind
- keep it simple
- respect different framework architectures
- identity can be changed totally

<!-- See more about minimalist components in [darlanmendonca.github.io/minimalist](https://darlanmendonca.github.io/minimalist/) -->