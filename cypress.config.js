const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://the-internet.herokuapp.com/',
    viewportHeight: 550,
    viewportHeight: 660,
    experimentalStudio: true
  },
});
