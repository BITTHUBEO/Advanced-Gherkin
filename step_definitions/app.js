const { I,homePage, sampleApp } = inject();


Given('Web is open and ready for use', () => {
    homePage.goToWebsite();
    I.wait(10)
    homePage.goToSampleApp();
    I.wait(10)
  });
  When('I enter valid name into the username field', () => {
    sampleApp.enterUsername();
  });
  When ('I enter pwd as password',() => {
    sampleApp.enterPassword();
  })
  When ('I click login button',() => {
    sampleApp.clickButton();
  })
  Then('I login successfully', () => {
    const username = 'Thu';
    sampleApp.verifyLoginSuccess(username);
  });
  pause(30)

  