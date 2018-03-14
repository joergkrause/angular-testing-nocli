# Angular Testing Without CLI

I have setup this project without the CLI and it's a good example of how to create unit tests using Jasmine and Karma within an existing project.

> This app is not doing anything useful. It's the infrastructure work that counts.

## Features

This project is just for learning and demonstration. It has the following things to show:

* A complete build workflow using Gulp 3
  * Setup for debug and development, using SystemJS and single file loading
  * Setup for pre-production to show minified bundles using SystemJS
* A complete build workflow using WebPack 3
  * Setup for pre-production to show minified bundles using WebPack
* Run unit tests for components and service code using Karma and Jasmine

## Usage

As always, pull the packages:

~~~
npm i
~~~

It's recommended to have a few things running **globally** (-g, "http-server" is optional):

~~~
npm i webpack http-server gulp -g
~~~

Having this, you can decide to use one version or the other.

Bundled and minified version using WebPack:

~~~
npm run webpack
~~~

Not bundled and not minified single file version using SystemJS:

~~~
gulp
~~~

SystemJS is loading all files separately and hence you can see all files in the browser for easy access in the debugger.

Bundled and minified single file version using SystemJS:

~~~
gulp bundled
~~~

This shows how compact the file could be before going to production.

~~~
npm run webpack
~~~

This shows the webpack version of the bundler, very similar to the version using SystemJs and Gulp.

## Why?

### Why angular-cli if there is no CLI?

It'a just to use the generator. It's convenient to create new components or pipes using the CLI. It's not being used for the bundling or deploy procedures.

### Why using SystemJS?

One may ask why the effort usign SystemJS. Is loading each file separately worth the work?

1. Because I can
2. You have more power in Gulp, even things far beyond standard setups are possibile
3. The workflow is highly configurable
4. It's stable. WebPack 3 has still a bunch of serious bugs
5. It's robust. WebPack cannot pack all crazy constructs TypeScript allows

### Why using WebPack?

1. It's easier to setup
2. It's slightly better on optimization
3. It works well as foundation for Karma (see below)
4. It's fast, at least a little bit faster than SystemJsBuilder

## Testing

The testing setup has these parts:

* *test/karma.conf.js*: Setup for Karma based on reading *webpack.config.js*
* *test/test.js*: Setup the testbed for Angular

### Run tests

~~~
npm test
~~~

This simply calls Karma.

I'm using a headless Chrome for execution. No visible browser, just output on the command line.

## Code Coverage

I'm using NYC from IstanbulJS. That's nothing special indeed. It's in the test command.