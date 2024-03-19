const { I } = inject();

module.exports = {
    homepage: {
      url: 'http://uitestingplayground.com/'
    },
    lessons: {
      dynamicId: '//*[@id="overview"]/div/div[1]/div[1]/h3/a',
      ajax : '//*[@id="overview"]/div/div[2]/div[1]/h3/a',
      visibility: '//*[@id="overview"]/div/div[4]/div[1]/h3/a',
      clientdelay: '//*[@id="overview"]/div/div[2]/div[2]/h3',
      dynamictable: '//*[@id="overview"]/div/div[3]/div[2]/h3/a',
      sampleapp: '//*[@id="overview"]/div/div[4]/div[2]/h3/a',
      shadowdom: '//*[@id="overview"]/div/div[5]/div[2]/h3/a',
      hidden :'//*[@id="overview"]/div/div[1]/div[3]/h3/a',
      click: '//*[@id="overview"]/div/div[2]/div[3]/h3/a',
      verify: '//*[@id="overview"]/div/div[3]/div[3]/h3/a',
      mouse: '//*[@id="overview"]/div/div[4]/div[3]/h3/a',
      textinput: '//*[@id="overview"]/div/div[2]/div[4]/h3/a',
      bar: '//*[@id="overview"]/div/div[3]/div[4]/h3/a',
      nonspace: '//*[@id="overview"]/div/div[4]/div[4]/h3/a'
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
  },
  goToVisibility (){
    I.click(this.lessons.visibility)
  },
  goToClientDelay (){
    I.click(this.lessons.clientdelay)
  },
  goToDynamicTable (){
    I.click(this.lessons.dynamictable)
  },
  goToSampleApp (){
    I.click(this.lessons.sampleapp)
  },
  goToDom (){
    I.click(this.lessons.shadowdom)
  },
  goToHidden (){
    I.click(this.lessons.hidden)
  },
  goToClick (){
    I.click(this.lessons.click)
  },
  goToVerify (){
    I.click(this.lessons.verify)
  },
  goToMouseOver (){
    I.click(this.lessons.mouse)
  },
  goToTextInput(){
    I.click(this.lessons.textinput)
  },
  goToBar(){
    I.click(this.lessons.bar)
  },
  goToNonSpace(){
    I.click(this.lessons.nonspace)
  }
}
