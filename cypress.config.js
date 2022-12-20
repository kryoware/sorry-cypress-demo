const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "a7bq2k",
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    baseUrl: "https://google.com",
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: "cypress/integration/**/*.spec.js",
  },
});
