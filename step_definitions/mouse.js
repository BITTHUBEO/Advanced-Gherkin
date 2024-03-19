const { I, homePage, mouse } = inject();

    Given('The mouse over website is open', () => {
        homePage.goToWebsite();
        I.wait(10)
        homePage.goToMouseOver();
        I.wait(10)
    });
    let times = 0;
    When('I click the link 2 times', () => {
        mouse.clickLink();
        mouse.clickLink();
    });
    Then('The click count should increase by 2', () => {
        times +=2;
        I.see(times.toString())
    });
    pause(30)

  