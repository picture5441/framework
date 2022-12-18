const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
const logger = require("../logger");


class ProductPage extends BasePage {
    static PAGE_URL = 'https://www.tiffany.com/watches/mens-watches/atlas-2-hand-375-mm-watch-34875979/';
    static BAG_BUTTON_XPATH = "//*[@class='shoppingbag']";
    static ADD_TO_BUG_BUTTON_XPATH = `//*[@class='product-description__addtobag_btn']`;
    static INCREASE_QUANTITY_XPATH = "//*[@class='quantity__container_manipulator_increment cta']";
    static DECREASE_QUANTITY_XPATH = "//*[@class='quantity__container_manipulator_decrement cta']";

    openPage = async () => super.openPage(ProductPage.PAGE_URL);


    async clickBagButton() {
        logger.info("Clicking the bag button");
        const element = await this.findByXpath(ProductPage.BAG_BUTTON_XPATH)
        await element.click();
        await this.driver.sleep(5000);
        return this;
      }

    async clickIncreaseButton() {
        logger.info("Increasing the quantity by 1");
        const element = await this.findByXpath(ProductPage.INCREASE_QUANTITY_XPATH)
        await element.click();
        return this;
    }

    async clickDecreaseButton() {
        logger.info("Decreasing the quantity by 1");
        const element = await this.findByXpath(ProductPage.DECREASE_QUANTITY_XPATH)
        await element.click();
        return this;
    }

    async addProductToBag() {
        logger.info("Adding the product to the bag");
        const element = await this.findByXpath(ProductPage.ADD_TO_BUG_BUTTON_XPATH)
        await element.click();
        await this.driver.sleep(5000);
        return this;
    }

    }

    module.exports = ProductPage;