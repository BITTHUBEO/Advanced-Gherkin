const { I, homePage, clientDelay } = inject();


Given('The website is opened', () => {
    homePage.goToWebsite();
    I.wait(10)
    homePage.goToClientDelay();
    I.wait(10)
  });
  When('I press the button and wait for data to appear', () => {
    clientDelay.clickButton()
    I.waitForText('Data calculated on the client side.', 15);
  });
  When ('I click on the text of the loaded label',() => {
    I.waitForText('Data calculated on the client side.', 15);
  })
  Then('I verify that the label text has appeared', () => {
    I.see('Data calculated on the client side.');
  });
  pause(30)

  