const { defineConfig } = require('cypress')

module.exports = defineConfig({
  component: {
    baseUrl : "http://localhost:5000"
  },
  videoUploadOnPasses : false
})
