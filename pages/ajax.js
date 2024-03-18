const { I } = inject();

module.exports = {
    lesson: {
        buttonId: '#ajaxButton'
    },
  // insert your locators and methods here

  clickButton () {
    I.click(this.lesson.buttonId)
  }
}
