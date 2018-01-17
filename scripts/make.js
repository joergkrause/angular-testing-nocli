const gulp = require('gulp');
const print = require('gulp-print');
const systemBuilder = require('systemjs-builder');

gulp.task('make:rxjs', function () {
  var builder = new systemBuilder('./', {
    paths: { "rxjs/*": "node_modules/rxjs/*.js" },
    map: { "rxjs": "node_modules/rxjs" },
    packages: { "rxjs": { main: 'Rx.js', defaultExtension: "js" } }
  });
  // create the bundle we use from systemjs.config.js
  builder.bundle('rxjs', './dist/assets/js/lib/Rx.js', {
    sourceMaps: false,
    minify: true,
    mangle: true
  });
});

gulp.task('make:bundle', function () {
  var builder = new systemBuilder('.', {
    paths: { 'npm:': './node_modules/' },
    map: {
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js', '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      'rxjs': 'npm:rxjs',
      'tslib': 'npm:tslib/tslib.js' // required by common-http      
    },
    packages: {
      "app": { main: 'main.js', defaultExtension: "js" },
      "rxjs": { main: "Rx.js", defaultExtension: "js" }
    }
  });
  //builder.reset();
  builder.loader.defaultJSExtensions = true;
  return builder
    .buildStatic('./dist/main.js', './dist/main.bundle.js', {
      sourceMaps: false,
      minify: false,
      mangle: false,
      rollup: true
    })
    .then(function () {
      console.log('Bundle completed');
    });
});
