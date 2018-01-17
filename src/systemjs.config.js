/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'assets/js/lib/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': '/',
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/common/http': 'npm:@angular/common/bundles/common-http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      // required by common-http          
      'tslib': 'npm:tslib.js'
    },
    packages: {
      'app': {
        main: './main.js',
        defaultExtension: 'js'
      },
      'rxjs': {
        defaultExtension: false
      }
    },
    bundles: {
      "npm:Rx.js": [
        "rxjs",
        "rxjs/*",
        "rxjs/operator/*",
        "rxjs/observable/*",
        "rxjs/scheduler/*",
        "rxjs/symbol/*",
        "rxjs/add/operator/*",
        "rxjs/add/observable/*",
        "rxjs/util/*"
      ]
    }
  });
})(this);