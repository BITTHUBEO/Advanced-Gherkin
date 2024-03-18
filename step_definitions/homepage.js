const { I } = inject();


  Given('The homepage is opened', () => {
    I.amOnPage('http://uitestingplayground.com/dynamicid');
  });
  When('Click the Button with dynamic ID button', () => {
    I.click('Button with Dynamic ID');
  });
  Then('ID is not used to identify the button', () => {
    I.dontSee('buttonID');
  });
  pause(30)

  