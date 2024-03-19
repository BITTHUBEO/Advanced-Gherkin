const { I } = inject();

module.exports = {
     username: {
        id: '//*[@id="newButtonName"]'
     },
    enterUserName(username) {
        I.fillField(this.username.id, username);
    },
  // insert your locators and methods here
}
