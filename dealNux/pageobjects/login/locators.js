class LogInlocator{

    get signinButton(){
        return $("//button[text()='Sign In']");
    }
    get logintext(){
        return $("//p[text()='Sign in to track prices and save money.']");
    } 
    get email(){
        return $("//input[@id='email']");
    }
    get password(){
        return $("//input[@id='password']");
    }
    get submitButton(){
        return $("//button[@type='submit']");
    } 
    get errorMessage (){
        return $("//div[text()='Email and password do not match.']")
    }

}
module.exports = new LogInlocator();