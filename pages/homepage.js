const { I } = inject();

module.exports = {
    homepage: {
      url: 'http://uitestingplayground.com/'
    },
    lessons: {
      dynamicId: '//*[@id="overview"]/div/div[1]/div[1]/h3/a',
      ajax : '//*[@id="overview"]/div/div[2]/div[1]/h3/a',
    },
  // insert your locators and methods here
  goToWebsite(){
    I.amOnPage(this.homepage.url)
  },
  goToDynamicId () {
    I.click(this.lessons.dynamicId)
  },
  goToAjAx (){
    I.click(this.lessons.ajax)
  }
}
