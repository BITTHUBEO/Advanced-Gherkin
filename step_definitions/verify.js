const { I, homePage, verify } = inject();


Given('The verify tex website is open and ready for use', () => {
    homePage.goToWebsite();
    I.wait(10)
    homePage.goToVerify();
    I.wait(10)
});
When('I search for an element with text Welcome UserName!', () => {
    verify.findText()
});
Then('the element should be found', () => {
 
});
pause(30)

  