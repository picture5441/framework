const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
const logger = require("../logger");


class BagPage extends BasePage {
    
    static PRODUCT_NAME_XPATH = `//*[@class='item-name type-aem-b-sb']`
    static PRODUCT_PRICE_XPATH = `//*[@class='flex-item itemPrice price bag-item-details__size-qty-price--price']`;
    static HEADING_XPATH = '//h1';
    static QTY_XPATH = `//*[@id="rptCart_ctl00_quantityDiv"]/div`;
    static QUANTITY_INPUT_XPATH = `document.querySelector("#rptCart_ctl00_ddlQuantity")`



    async getProductName() {
        logger.info("Getting the product name.");
        return this.findByXpath(BagPage.PRODUCT_NAME_XPATH);
      }

    async getProductPrice() {
        logger.info("Getting the product price.");
        const element = await this.findByXpath(BagPage.PRODUCT_PRICE_XPATH);
        return element.getText();
      }

      async getHeading() {
        logger.info("Getting the cart page heading");
        return this.findByXpath(BagPage.HEADING_XPATH);
      }
}

module.exports = BagPage;