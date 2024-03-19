const { I } = inject();

module.exports = {
    lesson: {
        buttonId: '#badButton'
    },
  // insert your locators and methods here

  clickButton () {
    I.click(this.lesson.buttonId)
  },
  seeCssProperties (){
    I.seeCssPropertiesOnElements('#badButton', { 'background-color': "#28A745"});
  }
}
