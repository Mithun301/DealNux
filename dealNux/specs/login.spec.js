const logInAction = require('../pageobjects/login/actions');
const loginData = require('../testData/loginData')
describe('LogIn', () => {
   
    it("Displays error message for invalid password", async () => {
       await logInAction.clickLogIn();
        await logInAction.invalid1LogIn();
        await browser.pause(2000);
    });
    it("Displays error message for invalid email", async () => {
     
        await logInAction.invalid2LogIn();
        await browser.pause(2000);

    });

     it("Successfully logs in with valid credentials", async () => {
    
        await logInAction.validLogIn();

    });
     


});
