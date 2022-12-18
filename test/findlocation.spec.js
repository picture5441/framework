const { expect } = require('chai');
const { Builder, Browser, } = require('selenium-webdriver');

const Driver = require("../driver/Driver");
const Constants = require("../config/constants");
const DataReaderService = require("../services/dataReader.service");
const LocationPage = require('../pages/locationPage');
const HomePage = require("../pages/homePage");


describe('Show location of the store.', () => {
    before(async function () {
      const props = await DataReaderService.getTestData('findlocation.properties');
      for (const key in props) {
        this[key] = props[key];
      }
    })

    beforeEach(async function () {
        this.driver = await Driver.createDriver();
      });

    it('Should show location of the store.', async function () {

        const homePage = new HomePage(this.driver);
        await homePage.openPage();
        await homePage.clickLocationButton();
    
        const locationPage = new LocationPage(this.driver);
        await locationPage.clickFindStoreWithinMiles();
        await locationPage.chooseDistance();  
        await locationPage.inputCutyValue(this.cityValue);  
        await locationPage.getCityResult(this.cityValueResult);                 
    }).timeout(Constants.TEST_TIMEOUT);


    it('Should show a message about the invalid store.', async function () {

        const homePage = new HomePage(this.driver);
        await homePage.openPage();
        await homePage.clickLocationButton();

        const locationPage = new LocationPage(this.driver);
        await locationPage.clickFindStoreWithinMiles();
        await locationPage.chooseDistance();  
        await locationPage.inputCutyValue(this.invalidCityValue);
        expect(await locationPage.getNoResult()).to.contain(this.noResult)
    }).timeout(Constants.TEST_TIMEOUT);

    it('Should show a store in chosen region.', async function () {

      const homePage = new HomePage(this.driver);
      await homePage.openPage();
      await homePage.clickLocationButton();
      
      const locationPage = new LocationPage(this.driver);
      await locationPage.clickChooseRegion();
      await locationPage.chooseRegion(); 
      await locationPage.clickCityOfRegionValue();
      await locationPage.getCityOfRegionResult(this.cityOfRegionValue);  

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