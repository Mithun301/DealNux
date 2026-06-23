
const logInAction = require('../pageobjects/login/actions');
const searchFilterAction = require('../pageobjects/search&filter/actions');


describe('Product Purchase', () => {

    it("Log In ", async () => {
            await logInAction.clickLogIn();
            await logInAction.validLogIn();
            await browser.pause(8000);
    });
    
    it.skip(" Search Product", async () => {
            await searchFilterAction.searchProduct();
            await browser.pause(3000);
    });

    it(" Compare Prices", async () => {
            await searchFilterAction.comparePrice();
            await browser.pause(3000);
    });
 it.skip(" Filter Verify", async () => {
            // await searchFilterAction.verifyPriceRangefilter();
            await browser.pause(3000);
            // await searchFilterAction.verifyPriceLowToHighFilter();
            await browser.pause(3000);
            await searchFilterAction.verifyPriceHighToLowFilter();
        });

    it.skip(" Products  Purchase Journey", async () => {
            await searchFilterAction.productPurchase();
            await browser.pause(3000);

    
        });
         
    
    
    });
    