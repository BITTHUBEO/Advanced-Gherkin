const { I, homePage, visibility } = inject();


Given('The website is ready for use', () => {
    homePage.goToWebsite();
    I.wait(10)
    homePage.goToVisibility();
    I.wait(10)
  });
  When('I press the Hide button', () => {
    visibility.clickButton();
    I.wait(5)
  });
  Then('I determine if other buttons are visible under various conditions', async() => {
    const buttons = ['Zero Width', 'Removed', 'Overlapped', 'Opacity 0', 'Visibility Hidden', 'Display None', 'Offscreen'];
    await visibility.checkButton(buttons);
});