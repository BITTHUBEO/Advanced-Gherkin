const { I,homePage, bar } = inject();


Given('The progress bar website is open and ready for use', () => {
    homePage.goToWebsite();
    I.wait(10)
    homePage.goToBar();
    I.wait(30);
});
When('I click the Start button', () => {
    bar.clickStartButton()
});
Then('I wait for the progress bar to reach 75%', async() => {
    await bar.waitForProgressBar(75);
    bar.clickStopButton();
});
pause(30)

  