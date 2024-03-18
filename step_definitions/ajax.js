const { I, homePage, dynamicId} = inject();

Given('The ajax website is open and ready for use', () => {
    homePage.goToWebsite();
    I.wait(10)
    homePage.goToAjAx();
    I.wait(10)
  });
When('Click the Load Data button', () => {
    ajax.clickButton();
  });
Then('I Wait for the label text to appear', () => {
    I.waitForText('Data loaded with AJAX get request.', 15);
  });
pause(30)

  