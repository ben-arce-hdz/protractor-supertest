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
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: "reports",
      overwrite: true,
      inlineAssets: true,
      reportPageTitle: "API Test Reports",
      reportTitle: "API Test Reports"
    },
    timeout: 30000
  },
};