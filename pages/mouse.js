const { I } = inject();

module.exports = {

  // insert your locators and methods here

  clickLink () {
  I.click('body > section > div > div:nth-child(7) > a');
}}
