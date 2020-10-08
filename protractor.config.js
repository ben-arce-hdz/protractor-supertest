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

  mochaOpts: {
    reporter: "spec",
    slow: 3000,
    ui: 'bdd',
    timeout: 30000
  },

  onPrepare: function () {},
};