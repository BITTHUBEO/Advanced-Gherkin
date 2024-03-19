const { I, homePage, textInput} = inject();


  Given('The web is open and ready for use', () => {
    homePage.goToWebsite();
    I.wait(10)
    homePage.goToTextInput();
    I.wait(10)
  });
  When('I enter username into the input field', () => {
    textInput.enterUserName('Thu')
  });
  When('I press the button', () => {
    I.click('Button That Should Change it\'s Name Based on Input Value'); 
  });
  Then('The button name changed to Button Name Changed',()=>{
    I.see(`Thu`);
  })

  pause(30)

  