const { I, homePage, dynamicId} = inject();

Given('The website is open and ready for use', () => {
    homePage.goToWebsite();
    I.wait(10)
    homePage.goToDynamicId();
    I.wait(10)
  });
When('Click the Button with dynamic ID button', () => {
    dynamicId.clickButton();
  });
Then('ID is not used to identify the button', () => {
  });
pause(30)

  