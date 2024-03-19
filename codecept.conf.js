exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: true
    }
  },
  include: {
    I: './steps_file.js',
    homePage: "./pages/homepage.js",
    dynamicId:"./pages/dynamicID.js",
    ajax:"./pages/ajax.js",
    visibility: "./pages/visibility.js",
    clientDelay: "./pages/clientdelay.js",
    dynamicTable: "./pages/table.js",

  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/homepage.js','./step_definitions/dynamicID.js','./step_definitions/ajax.js','./step_definitions/visibility.js','./step_definitions/clientdelay.js','./step_definitions/table.js'  ]
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'Advanced-gherkin'
}