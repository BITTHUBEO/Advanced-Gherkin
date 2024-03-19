const { I } = inject();

module.exports = {
    lesson: {
        hideButton: '//*[@id="hideButton"]'
    },
    async checkButton (buttonNames){
        for (const buttonName of buttonNames) {
            if (buttonName !== 'Hide') {
                const width = await I.grabAttributeFrom('button[type="button"]', 'width');
            if (width === '0') {
                I.dontSee(`Button "${buttonName}"`);
            }}
        }
    },
  // insert your locators and methods here

    clickButton () {
        I.click(this.lesson.hideButton)
  }
}
