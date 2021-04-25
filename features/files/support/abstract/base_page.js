const { Builder } = require('selenium-webdriver');
class basePage {
    driver;
    constructor() {
        this.driver = new Builder()
            .forBrowser('chrome')
            .build();
    }

    visit(url) {
        this.driver.get(url)
    }

}
