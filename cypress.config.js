const cypress = require("cypress");
const { defineConfig } = require("cypress");
const createEsbuildPlugin =
require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const addCucumberPreprocessorPlugin =
require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin


module.exports = defineConfig({
  projectId: 'uk8y1y',
  e2e: {
     setupNodeEvents(on, config) {
      // implement node event listeners here
      const bundler =createBundler({
        plugins:[createEsbuildPlugin(config)],
      });
      on("file:preprocessor",bundler);
       addCucumberPreprocessorPlugin(on,config);

      return config;      
    },
    specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"]

  },
  "env": {
    "homepage":"http://the-internet.herokuapp.com"
  },
    defaultCommandTimeout: 6000,
    
      "reporter": "mochawesome",
      "reporterOptions": {
         "reportDir": "cypress/reports",
         "reportFilename" : "report",
         "overwrite":false,
         "html": true,
         "json": true
      },
      retries: {

        runMode: 2,
  
        openMode: 2,
  
        },        
        
});

