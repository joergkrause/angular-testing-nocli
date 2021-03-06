// reuse existing webpack.config
// remove entry value since karma-webpack will set its value automatically
var webpackConfig = require("../webpack.config.js")();
webpackConfig.entry = undefined;

module.exports = (config) => {
    config.set({
        basePath: "",
        frameworks: ["jasmine"],
        files: [
            "./test.ts"
        ],
        preprocessors: {
            "./test.ts": ["webpack"]
        },
        mime: {
            "text/x-typescript": ["ts"]
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: "error-only"
        },
        reporters: ["spec", "html"],
        htmlReporter: {
            outputFile: '../dist/test/testresult.html',
            pageTitle: 'Unit Test Demo',
            subPageTitle: 'Angular Testing Without CLI',
            groupSuites: true,
            useCompactStyle: true,
            useLegacyStyle: true
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_ERROR,
        singleRun: true,
        browsers: ['ChromeHeadlessNoSandbox'],
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            }
        },
        concurrency: Infinity
    });
}