const { I } = inject();

module.exports = {
    elements: {
        generateButton: '#buttonGenerate',
        copyButton : '#buttonCopy',
        inputField : '#editField',
    },
  // insert your locators and methods here

    clickGenerateButton() {
        I.click(this.elements.generateButton);
        I.wait(5);
    },
    clickCopyButton() {
        I.click(this.elements.copyButton);
        I.wait(5);
    },
    async compareClipboardAndInputField() {
        const clipboardValue = await I.executeScript(async () => {
          if (navigator.clipboard) {
            return navigator.clipboard.readText();
          } else {
            return null;
          }
        });
        const inputFieldValue = await I.grabValueFrom(this.elements.inputField);
        assert.strictEqual(clipboardValue, inputFieldValue);
      }

}
