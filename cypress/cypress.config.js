// eslint-disable-next-line import/no-extraneous-dependencies
const { defineConfig } = require('cypress');

const viteConfig = require('../vite.config');

module.exports = defineConfig({
  viewportWidth: 900,
  viewportHeight: 1080,
  video: false,
  numTestsKeptInMemory: 24,
  fixturesFolder: false,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'reports/component-[hash].xml',
    attachments: true,
  },
  component: {
    setupNodeEvents() {},
    specPattern: 'cypress/**/*.test.tsx',
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig,
    },
  },
});
