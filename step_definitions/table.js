const { I, homePage, dynamicTable } = inject();


  Given('The dynamic table website is open and ready for use', () => {
    homePage.goToWebsite();
    I.wait(10)
    homePage.goToDynamicTable();
    I.wait(10)
  });
  When('I open the Task Manager page', () => {
  });
  Then('I compare the CPU load of Chrome with the value in the yellow label', async()=>{
    I.wait(10);
    const chrome = await dynamicTable.getCpuOfChrome()
    I.wait(10);
    const yellow = await dynamicTable.getCpuFromYellow()
    I.wait(10);
    if (chrome === yellow) {
        console.log('CPU load values match');
    } else {
        console.log('CPU load values do not match');
    }
    })
  pause(30)

  