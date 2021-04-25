import { BasePage } from './support/abstract/base_page.cjs';
import { By, until } from 'selenium-webdriver';
class ProshopCartPage extends BasePage {

    constructor() {
        super();
    }

    addToCart() {
        driver.findElement(By.class('site-btn-addToBasket-lg')).click();
    }
}