
const logInAction = require('../pageobjects/login/actions');
const searchFilterAction = require('../pageobjects/search&filter/actions');


describe('Product Purchase', () => {

    it("Log In ", async () => {
            await logInAction.clickLogIn();
            await logInAction.validLogIn();
            await browser.pause(8000);
    });
 it(" Filter Verify", async () => {
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
    