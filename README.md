# babel-npm-module-example [![Build Status](https://travis-ci.org/anvk/babel-npm-module-example.svg?branch=master)](https://travis-ci.org/anvk/babel-npm-module-example)

> A boilerplate to start writing your NPM modules in ES6 using Babel.

## Install

```
$ npm install babel-npm-module-example --save
```

## How to use

Open sourcecode, take a look and start coding...
https://github.com/anvk/babel-npm-module-example

#### Using NPM commands

```
$ npm run build
```

```
$ npm test
```

## Linting?

I'm using [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) for this project with my few custom modifications. You can read more on the [Airbnb JavaScript Style Guide here](https://github.com/airbnb/javascript)

## Important!

I commented out `dist/` and `test-dist` folders in my ignore file on purpose to demonstrate how built files will look like. In a real project, most likely, you do not want to push those `dist folders` to your repo. If you do, you will constantly see changes in dist folders during your merges/code reviews which can be very annoying.

## License

MIT license; see [LICENSE](./LICENSE).

(c) 2016 by Alexey Novak
