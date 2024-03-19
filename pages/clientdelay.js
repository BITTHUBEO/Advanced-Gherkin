const { I } = inject();

module.exports = {
    lesson: {
        buttonId: '//*[@id="ajaxButton"]'
    },
  // insert your locators and methods here

  clickButton () {
    I.click(this.lesson.buttonId)
  }
}
