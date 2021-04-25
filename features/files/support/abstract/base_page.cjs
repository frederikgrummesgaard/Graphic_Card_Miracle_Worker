import { } from "chromedriver";
import { Builder } from 'selenium-webdriver';
class BasePage {
    driver;
    constructor() {
        this.driver = new Builder()
            .forBrowser('chrome')
            .build();
    }

    get driver() {
        this.driver
    }

    visit(url) {
        this.driver.get(url)
    }

}
