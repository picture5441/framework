const { By, until } = require("selenium-webdriver");

const logger = require("../logger")


class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async openPage(url) {
    logger.info(`Opening the page: ${url}.`);
    await this.driver.get(url);

    return this;
  }

  async getPageUrl() {
    return this.driver.getCurrentUrl();
  }

  async findByXpath(xpath) {
    return this.driver.wait(until.elementLocated(By.xpath(xpath)), 8000)
    
  }
}

module.exports = BasePage;
