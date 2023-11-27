const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "f81t7h",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
