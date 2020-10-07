exports.config = {
  directConnect: true,
  allScriptsTimeout: 200000,
  framework: "mocha",
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless"],
    },
    shardTestFiles: true,
    maxInstances: 3,
  },

  specs: ["./specs/api.spec.js"],

  /*
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
    defaultTimeoutInterval: 30000, // Default time to wait in ms before a test fails.
  },*/
  mochaOpts: { // Some reasonable mocha config
    reporter: "spec",
    slow: 3000,
    ui: 'bdd',
    timeout: 30000
  },

  onPrepare: function () {
    // making chai available globally. in your test use `const expect = global['chai'].expect;`
    //var chai = require("chai");
    //var chaiAsPromised = require("chai-as-promised");
    //chai.use(chaiAsPromised);
    //global.chai = chai;
  },
};