const { I, homePage, nonSpace } = inject();

Given('The non-space website is open and ready for use', () => {
    homePage.goToWebsite();
    I.wait(10)
    homePage.goToNonSpace();
    I.wait(10)
});

When('I search for the button with text My Button using XPath', () => {
    nonSpace.clickButton()
}); 
Then('The button is found successfully', () => {

});

