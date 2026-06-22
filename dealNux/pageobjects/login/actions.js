const logInLocator = require('./locators');
const loginData = require('../../testData/loginData');
const utility = require('../../utilities/utility');



class LogInAction{
    async clickLogIn(){
        await logInLocator.signinButton.click();
        const text = await  logInLocator.logintext;
        expect(text).toHaveText('Sign in to track prices and save money.');
    }
    async validLogIn(){
        await logInLocator.email.click();
        await utility.clearValue();
        await logInLocator.email.setValue(loginData.valid.Email);
        await logInLocator.password.click();
        await utility.clearValue();
        await logInLocator.password.setValue(loginData.valid.Password);
        await logInLocator.submitButton.click();
    }
    async invalid1LogIn(){
        await logInLocator.email.setValue(loginData.invalid1.Email);
        await logInLocator.password.setValue(loginData.invalid1.Password);
        await logInLocator.submitButton.click();
        const text = await logInLocator.errorMessage;
        expect(text).toHaveText('Email and password do not match.');
    }
    async invalid2LogIn(){
        await logInLocator.email.click();
        await utility.clearValue();
        await logInLocator.email.setValue(loginData.invalid2.Email);
        await logInLocator.password.click();
        await utility.clearValue();
        await logInLocator.password.setValue(loginData.invalid2.Password);
        await logInLocator.submitButton.click();
        const text = await logInLocator.errorMessage;
        expect(text).toHaveText('Email and password do not match.');

    }




}
module.exports = new LogInAction();