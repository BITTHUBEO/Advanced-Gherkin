const { I } = inject();

module.exports = {

    submitButton: {css:'//*[@id="login"]'},
  // insert your locators and methods here
    enterUsername(username) {
        I.fillField('input[name="UserName"]', 'Thu');
    },

    enterPassword(password) {
        I.fillField('//input[@name="Password"]', 'pwd');
    },

    clickButton() {
        I.click(this.submitButton);
    },
    verifyLoginSuccess(username) {
        I.see(`Welcome, Thu!`);
      }
    }
