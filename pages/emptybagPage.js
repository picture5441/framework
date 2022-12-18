const { Select } = require('selenium-webdriver')
const BasePage = require("./basePage");
const logger = require("../logger");
const BagPage = require('./bagPage');



class EmptyBagPage extends BasePage {
    static EMPTY_BAG_RESULT_XPATH =  `//*[@class='type-aem-b-sb']`;


    async checkEmptybagMessage() {
        logger.info("Getting the result of empty bag.");
        const element = await this.findByXpath(EmptyBagPage.EMPTY_BAG_RESULT_XPATH);
      return element.getText();
      }
    }

    module.exports = EmptyBagPage;