const { I } = inject();

module.exports = {
    lesson: {
        buttonId: '//*[@id="b4e97b71-5cbd-5c34-b076-3f25793425ed"]'
    },
  // insert your locators and methods here

  clickButton () {
    I.click(this.lesson.buttonId)
  }
}
