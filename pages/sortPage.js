const { By, Key, until } = require("selenium-webdriver");
const BasePage = require("./basePage");
const logger = require("../logger");

class SortPage extends BasePage {
    static PAGE_URL = 'https://www.tiffany.com/watches/shop/mens-watches/';
    static SORT_BY_BUTTON_XPATH = `//*[@id="main"]/div/div/div/div/div/div[3]/tiffany-grid/div/div[1]/div[1]/div/div[2]/div[2]/div/button`
    static REC_XPATH = `//*[@id="main"]/div/div/div/div/div/div[3]/tiffany-grid/div/div[1]/div[1]/div/div[2]/div[2]/div/button/span/span`

    openPage = async () => super.openPage(SortPage.PAGE_URL);

    async clickSortBy() {
        logger.info("Clicking on Sort By button");
        const element = await this.findByXpath(SortPage.SORT_BY_BUTTON_XPATH)
        await element.click();
        await this.driver.sleep(1000);
        return this;
    }

    async chooseSortbyPriceHighToLow(){
        logger.info("Choose sort by recommendation");
        const element = await this.findByXpath(SortPage.REC_XPATH)
        await element.click();
        await this.driver.sleep(1000);
        return this;
    }
    
    async getResultOfSort(sortResult) {
        logger.info("Getting '" + sortResult + "' result");
        const element = await this.findByXpath(SortPage.REC_XPATH);
        return element.getText();
    }

}


module.exports = SortPage;