# Kiterator

Kiterator is a generator of front-end starter kits. It's included lots of techs to create your own starter kit easily just defining config file according to your needs.

## Currently Supported Techs
### HTML
  - HTML (Default, not using any template engine)
  - PUG
  - TWIG
### CSS
  - CSS (Default, not using any post-proccesor)
  - SCSS
  - LESS
### JAVASCRIPT
  - JS (Default, not using any view engine or mvc)
  - ReactJS

You can also:
  - Select EcmaScript version; ES5, ES6 or ESNext (Stage-0, Stage-1 ...)
  - Include supported libraries; jQuery, Bootstrap, Modernizr, RequireJS, Underscore, Loadash
  - Select test tools; Mocha, Chai, Jest, Jasmine

## Getting Started
```sh
$ npm install 
```

## Generating Starter Kit
```sh
$ gulp generate --hard
$ gulp reset
```

## Running Starter Kit
You can use both `gulp` and `grunt` as TaskManager[TM] for running tasks
```sh
$ [TM] build
$ [TM] serve
$ [TM] dist
$ [TM] prod
```
