const { I } = inject();

module.exports = {
    element: {
        text: '//div[normalize-space(.)="Welcome UserName!"]'
    },
  // insert your locators and methods here

  findText () {
    I.seeElement(this.element.text);}
}
