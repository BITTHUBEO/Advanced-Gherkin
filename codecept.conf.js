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
    sampleApp: "./pages/app.js",
    dom: "./pages/dom.js",
    hidden: "./pages/hidden.js",
    click: "./pages/click.js",
    verify: "./pages/verify.js",

  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/homepage.js','./step_definitions/dynamicID.js','./step_definitions/ajax.js','./step_definitions/visibility.js','./step_definitions/clientdelay.js','./step_definitions/table.js','./step_definitions/app.js','./step_definitions/dom.js','./step_definitions/hidden.js','./step_definitions/click.js','./step_definitions/verify.js'  ]
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