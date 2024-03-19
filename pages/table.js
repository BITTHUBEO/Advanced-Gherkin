const { I } = inject();

module.exports = {
  // insert your locators and methods here
    async getCpuOfChrome() {
        return await I.grabTextFrom('//html/body/section/div/div/div[3]/div[2]/span[3]');
    },

    async getCpuFromYellow() {
        return await I.grabTextFrom('p.bg-warning');
    },
    }
