const { expect } = require('chai');
const { Builder, Browser, } = require('selenium-webdriver');

const Driver = require("../driver/Driver");
const Constants = require("../config/constants");
const DataReaderService = require("../services/dataReader.service");
const ProductPage = require("../pages/productPage");
const BagPage = require("../pages/bagPage");


describe('Add the product to the bag.', () => {
    before(async function () {
      const props = await DataReaderService.getTestData('watch.properties');
      for (const key in props) {
        this[key] = props[key];
      }
    })
  
    beforeEach(async function () {
      this.driver = await Driver.createDriver();
    });

  it('Should add Men`s 2-Hand 37.5 mm watch to the bag.', async function () {
      const productPage = new ProductPage(this.driver);
      await productPage.openPage();
      await productPage.addProductToBag();
      await productPage.clickBagButton();

      const bagPage = new BagPage(this.driver);
      const productTitle = await bagPage.getProductName();
      await productTitle.getText();
      expect(await bagPage.getProductPrice()).to.contain(this.productPriceValue)
        
  }).timeout(Constants.TEST_TIMEOUT);

  it('Should increase the quantity of the product and add Men`s 2-Hand 37.5 mm watch to the bag.', async function () {
      const productPage = new ProductPage(this.driver);
      await productPage.openPage();
      await productPage.clickIncreaseButton();
      await productPage.addProductToBag();
      await productPage.clickBagButton();

      const bagPage = new BagPage(this.driver);
      const productTitle = await bagPage.getProductName();
      await productTitle.getText();
      expect(await bagPage.getProductPrice()).to.contain(this.productPriceAfterIncreasing)
    
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