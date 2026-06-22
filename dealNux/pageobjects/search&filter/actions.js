const searchFilterLocators = require('./locators');
const utility = require('../../utilities/utility')
const priceData = require('../../testData/price');
const clientData = require('../../testData/clientData');
const verify = require('../../utilities/verify');

class SearchFilterActions {
    async viewAllProducts(minPrice, maxPrice   ) {
         await searchFilterLocators.homePage.click();
     //   await searchFilterLocators.allProducts.click();
        await browser.pause(2000);
        // await searchFilterLocators.minPrice.setValue(priceData.price1.minPrice);
        // await searchFilterLocators.maxPrice.click();
        // await utility.clearValue();
        // await searchFilterLocators.maxPrice.setValue(priceData.price1.maxPrice);
        // await searchFilterLocators.filterText.click();
        // await browser.pause(2000);
        // await this.verifyPriceRange();
        //await searchFilterLocators.categoryFilter1.click();
      //  await searchFilterLocators.subCategoryFilter1.click();
    //   await searchFilterLocators.categoryFilter2.click();
    //   await searchFilterLocators.subCategoryFilter2.click();
        await searchFilterLocators.selectcategory1.click();
        await searchFilterLocators.priceFilter.click();
        // await searchFilterLocators.lowestPriceFilter.click();
        await searchFilterLocators.highestPriceFilter.click();
        await browser.pause(2000);  
        // await verify.verifyPriceLowToHigh();
            await verify.verifyPriceHighToLow();
        await browser.pause(5000);
    }
    async productPurchase() {
        await searchFilterLocators.homePage.click();
        await searchFilterLocators.viewAllProducts.click();
        await browser.pause(2000);
        await verify.rndmProductClick();
        await searchFilterLocators.addToCart.click();
        await searchFilterLocators.cartIcon.click();
        await searchFilterLocators.placeOrder.click();
        await searchFilterLocators.firstName.setValue(clientData.info.firstName);
        await searchFilterLocators.lastName.setValue(clientData.info.lastName);
        await searchFilterLocators.address.setValue(clientData.info.address);
        await searchFilterLocators.city.setValue(clientData.info.city);
        await searchFilterLocators.state.setValue(clientData.info.state);
        await searchFilterLocators.zip.setValue(clientData.info.zip);
        await searchFilterLocators.country.setValue(clientData.info.country);
        await searchFilterLocators.payment.click();

    }
    async verifyPriceRangefilter() {
        await searchFilterLocators.allProducts.click();
        await browser.pause(2000);
        await searchFilterLocators.minPrice.setValue(priceData.price1.minPrice);
        await searchFilterLocators.maxPrice.click();
        await utility.clearValue();
        await searchFilterLocators.maxPrice.setValue(priceData.price1.maxPrice);
        await searchFilterLocators.filterText.click();
        await browser.pause(2000);
        await verify.verifyPriceRange();
    }
    async verifyPriceLowToHighFilter() {

        await searchFilterLocators.allProducts.click();
        await browser.pause(2000);
        await searchFilterLocators.categoryFilter2.click();
        await searchFilterLocators.subCategoryFilter2.click();
        await searchFilterLocators.priceFilter.click();
        await searchFilterLocators.lowestPriceFilter.click();
        await browser.pause(2000);  
        await verify.verifyPriceLowToHigh();
      
    }
    async verifyPriceHighToLowFilter() {

        await searchFilterLocators.homePage.click();
        await browser.pause(2000);
        await searchFilterLocators.selectcategory1.click();
        await searchFilterLocators.priceFilter.click();
        await searchFilterLocators.highestPriceFilter.click();
        await browser.pause(2000);  
        await verify.verifyPriceHighToLow();    
        await browser.pause(5000);
    
    }


}


 

module.exports = new SearchFilterActions();