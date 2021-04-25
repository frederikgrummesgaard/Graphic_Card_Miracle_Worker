import { Given, When, Then } from 'cucumber';

Given('I am on the Proshop website viewing the graphic card with the url', function () {
    ProshopCartPage.visit('https://www.proshop.dk/Grafikkort/GIGABYTE-GeForce-GTX-1050-Ti-OC-Low-Profile-4GB-GDDR5-RAM-Grafikkort/2581605')
});

When('I add the graphic card to cart', function () {
    ProshopCartPage.addToCart()
});
