const { I, homePage, dom } = inject();
const assert = require('assert');


Given('The website is open and ready for use', () => {
    homePage.goToWebsite();
    I.wait(10)
    homePage.goToDom();
    I.wait(10)
  });
  When('I click on the Generate button', () => {
    dom.clickGenerateButton()
    I.wait(5)
  });
  When ('I click on the Copy button',() => {
    dom.clickCopyButton()
    I.wait(5)
  })
  Then('The copied GUID should match the value displayed in the input field', async () => {
    await dom.compareClipboardAndInputField();
  });
  pause(30)

  

  