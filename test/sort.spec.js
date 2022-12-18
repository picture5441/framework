const { expect } = require('chai');
const { Builder, Browser, } = require('selenium-webdriver');

const Driver = require("../driver/Driver");
const Constants = require("../config/constants");
const DataReaderService = require("../services/dataReader.service");
const SortPage = require('../pages/sortPage');



describe('Show sort products on the page.', () => {
    before(async function () {
      const props = await DataReaderService.getTestData('sort.properties');
      for (const key in props) {
        this[key] = props[key];
      }
    })

    beforeEach(async function () {
        this.driver = await Driver.createDriver();
      });


    it('Should sort by Recommendations.', async function () {

      const sortPage = new SortPage(this.driver);
      await sortPage.openPage();
      await sortPage.clickSortBy();
      await sortPage.chooseSortbyPriceHighToLow();
      expect(await sortPage.getResultOfSort()).to.contain(this.resultOfSort)
  }).timeout(Constants.TEST_TIMEOUT);


    afterEach(async function () {
        await new Promise((resolve) => {
          setTimeout(async () => {
            resolve();
          }, 100);
        })
        await this.driver.quit();
      })
    });