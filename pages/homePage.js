const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
const logger = require("../logger");


class HomePage extends BasePage {
  static PAGE_URL = 'https://www.tiffany.com/';
  static BAG_BUTTON_XPATH = "//div[@class='shoppingbagEmpty-icon']";
  static LOCATION_BUTTON_XPATH = `//div[@class='left-container_item store-locator-wrapper col-sm__hide']`
  static SEARCH_LOGO_XPATH = `//div[@class='search-icon']`;
  static INPUT_SEARCH_VALUE_TEXT_XPATH = `//*[@id="searchInput"]`;


  openPage = async () => super.openPage(HomePage.PAGE_URL);

  async clickSearchButton() {
    logger.info("Clicking on the search button");
    const element = await this.findByXpath(HomePage.SEARCH_LOGO_XPATH)
    await element.click();
    return this;
  }

  async inputSearchValue(textToSeacrh) {
    logger.info("Entering '" + textToSeacrh + "' text and click Enter");
    const element = await this.findByXpath(HomePage.INPUT_SEARCH_VALUE_TEXT_XPATH);
    await element.sendKeys(textToSeacrh, Key.ENTER);
    return this;
  }

  async clickBagButton() {
    logger.info("Clicking on the bag button");
    const element = await this.findByXpath(HomePage.BAG_BUTTON_XPATH)
    await element.click();
    return this;
  }

  async clickLocationButton() {
    logger.info("Clicking on the location button");
    const element = await this.findByXpath(HomePage.LOCATION_BUTTON_XPATH)
    await element.click();
    return this;
  }


}

module.exports = HomePage;
