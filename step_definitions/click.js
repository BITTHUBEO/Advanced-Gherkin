const { I , homePage, click} = inject();


  Given('The website is open', () => {
    homePage.goToWebsite();
    I.wait(10)
    homePage.goToClick();
    I.wait(10)
  });
  When('I click on the blue button', () => {
    click.clickButton()
  });
  Then('The button can be clicked', () => {
    I.wait(30); 
    click.seeCssProperties();
  });
  pause(30)

  