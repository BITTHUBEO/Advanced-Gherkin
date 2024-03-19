const { I, homePage, hidden } = inject();


Given('Website is open and ready for use', () => {
    homePage.goToWebsite();
    I.wait(10)
    homePage.goToHidden();
    I.wait(10)
  });
  When('I click on the green button', () => {
    hidden.clickButton()
  });
  Then('The green button cannot be clicked twice', () => {
    I.seeElement('button#blueButton')
  });
  pause(30)

  