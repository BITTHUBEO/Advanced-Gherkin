const { I } = inject();

module.exports = {
    lesson: {
        buttonId: '//*[@id="4a3a4560-b373-cace-f23c-efe751b08cd1"]'
    },
  // insert your locators and methods here

  clickButton () {
    I.click(this.lesson.buttonId)
  }
}
