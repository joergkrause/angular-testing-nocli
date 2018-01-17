# Angular Testing Without CLI

I have setup this project without the CLI and it's a good example of how to create unit tests using Jasmine and Karma within an existing project.

> This app is not doing anything useful. It's the infrastructure work that counts.

## Features

This project is justt for learning and demonstration. IT has the following things to show:

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

It's recommended to have a few things running globally:

~~~
npm i webpack http-server gulp -g
~~~

Having this, you can decide to use one version or the other.

Bundled and minified version using WebPack:

~~~
npm run webpack
~~~

Bundled and not minified single file version using SystemJS:

~~~
gulp
~~~

