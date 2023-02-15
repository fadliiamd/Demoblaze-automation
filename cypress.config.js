const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    defaultCommandTimeout: 10000,
    testIsolation: false,
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
  },
});
