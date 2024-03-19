const { I } = inject();

module.exports = {
    element: {
        startButton: '#startButton',
        progressBar: '#progressBar',
        stopButton: '#stopButton',
    },
  // insert your locators and methods here

    clickStartButton () {
        I.click(this.element.startButton)
    },
    async waitForProgressBar(percent) {
        let width = 0;
        while (width < percent) {
            let progress = await I.grabAttributeFrom('#progressBar', 'aria-valuenow');
            width = parseInt (progress)
        }
    },
    clickStopButton () {
        I.click(this.element.stopButton)
    },

}
