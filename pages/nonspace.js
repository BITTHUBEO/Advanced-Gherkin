const { I } = inject();

module.exports = {
  element: {
    button: `//button[text()='My\xA0Button']`
  },
  // insert your locators and methods here

  clickButton () {
  I.click(this.element.button);
}}
