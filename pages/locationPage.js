const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
const logger = require("../logger");


class LocationPage extends BasePage {

    static FIND_STORE_BUTTON_XPATH = `//*[@class='storesearchbar__findastore btn--outline']`;
    static FIND_STORE_WITHIN_POPUP_XPATH = `//*[@class='storesearchbar__button distance-dropdown']`;
    static CHOOSE_DISTANCE_XPATH = `//*[@id="main"]/div/div/div/div[1]/div/div[1]/tiffany-store-search-bar/div/div[1]/div/div/ul/li[2]`;
    static CITY_INPUT_XPATH = `//*[@class='storesearchbar__of_region_input input']`;
    static CITY_RESULT_XPATH = `//*[@id="main"]/div/div/div/div[1]/div/div[1]/tiffany-store-search-results/div/div[2]/div[2]/div/div[1]/div[1]/div[1]/span/a/span/span[1]`;
    static INVALID_CITY_RESULT_XPATH = `//*[@class='store-search-results__empty_heading']`
    static CHOOSE_REGION_POPUP_XPATH = `//*[@class='custom-dropdown_category_title cta hover-cta']`;
    static CHOOSE_REGION_VALUE_XPATH = `//*[@id="custom-dropdown-control-Choose a Region"]/div/li[2]/span`;
    static CHOOSE_CITY_OF_REGION_VALUE_XPATH = `//*[@id="main"]/div/div/div/div[1]/div/div[2]/div/tiffany-global-flagship/div/div/div[2]/div[2]/ul/li[1]/a`;
    static GET_CITY_OF_REGION_RESULT = `//*[@id="main"]/div/div/div/div[1]/div/article/div[1]/div[2]/h1`

    async clickFindStoreButton() {
        logger.info("Clicking on find a store button");
        const element = await this.findByXpath(LocationPage.FIND_STORE_BUTTON_XPATH)
        await element.click();
        return this;
    }

    async clickFindStoreWithinMiles() {
        logger.info("Clicking on find a store within button");
        const element = await this.findByXpath(LocationPage.FIND_STORE_WITHIN_POPUP_XPATH)
        await element.click();
        await this.driver.sleep(1000);
        return this;
    }

    async chooseDistance() {
        logger.info("Choosing the desirable distance");
        const element = await this.findByXpath(LocationPage.CHOOSE_DISTANCE_XPATH)
        await element.click();
        await this.driver.sleep(1000);
        return this;
    }

    async inputCutyValue(cityToSeacrh) {
        logger.info("Entering '" + cityToSeacrh + "' city and click Enter");
        const element = await this.findByXpath(LocationPage.CITY_INPUT_XPATH);
        await element.sendKeys(cityToSeacrh, Key.ENTER);
        return this;
    }

    async getCityResult(cityResult) {
        logger.info("Getting '" + cityResult + "' result");
        const element = await this.findByXpath(LocationPage.CITY_RESULT_XPATH);
        return element.getText();
    }

    async inputInvalidCutyValue(invalidCityToSeacrh) {
        logger.info("Entering '" + invalidCityToSeacrh + "' city and click Enter");
        const element = await this.findByXpath(LocationPage.CITY_INPUT_XPATH);
        await element.sendKeys(invalidCityToSeacrh, Key.ENTER);
        return this;
    }

    async getNoResult() {
        logger.info("Getting no result message");
        const element = await this.findByXpath(LocationPage.INVALID_CITY_RESULT_XPATH);
        return element.getText();
    }

    async clickChooseRegion() {
        logger.info("Clicking on Choose a Region button");
        const element = await this.findByXpath(LocationPage.CHOOSE_REGION_POPUP_XPATH)
        await element.click();
        await this.driver.sleep(1000);
        return this;
    }

    async chooseRegion() {
        logger.info("Choosing the desirable region");
        const element = await this.findByXpath(LocationPage.CHOOSE_REGION_VALUE_XPATH)
        await element.click();
        await this.driver.sleep(1000);
        return this;
    }

    async clickCityOfRegionValue() {
        logger.info("Clicking on city of desirable region");
        const element = await this.findByXpath(LocationPage.CHOOSE_CITY_OF_REGION_VALUE_XPATH)
        await element.click();
        await this.driver.sleep(1000);
        return this;
    }

    async getCityOfRegionResult(cityOfRegionResult) {
        logger.info("Getting '" + cityOfRegionResult + "' result");
        const element = await this.findByXpath(LocationPage.GET_CITY_OF_REGION_RESULT);
        return element.getText();
    }

}


module.exports = LocationPage;