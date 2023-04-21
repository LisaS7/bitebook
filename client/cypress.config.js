const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '39u39w',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true,
    experimentalSessionAndOrigin: true,
    baseUrl: "http://localhost:3000/",
  },
});
