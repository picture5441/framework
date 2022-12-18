const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
const logger = require("../logger");

class SearchPage extends BasePage {

    static SEARCH_VALUE_RESULT = `//*[@id="main"]/div/div/div/div[1]/tiffany-grid/div/div[1]/div[1]/div/div[2]/div[1]/div/div/div/div/span/span`;
    static INVALID_SEARCH_VALUE_RESULT = `//*[@class='nosearch__container']`;

    async getNumberOfResults(){
        logger.info("Getting number of results");
        const element = await this.findByXpath(SearchPage.SEARCH_VALUE_RESULT);
        return element.getText();
    }

    async getInvavidResult() {
        logger.info("Getting the message about no result");
        const element = await this.findByXpath(SearchPage.INVALID_SEARCH_VALUE_RESULT);
        return element.getText();
    }
}


module.exports = SearchPage;