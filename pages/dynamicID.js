const { I } = inject();

module.exports = {
    lesson: {
        buttonId: '//*[@id="751dc207-60b3-ab00-f104-025f994ac7bb"]'
    },
  // insert your locators and methods here

  clickButton () {
    I.click(this.lesson.buttonId)
  }
}
