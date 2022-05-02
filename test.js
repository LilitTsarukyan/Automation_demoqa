//Pull all the required functions from node_modules.


const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
const assert = require("assert");


async function demoqa(){

    let url='https://demoqa.com/text-box';
    let fullName='Ani';
    let email='ani_aramyan@gmail.com';
    let currentAddress='Sayat-Nova Avenue, 40';
    let permanentAddress='Sayat-Nova Avenue, 40';

     //To wait for browser to build and launch properly

     let driver = await new Builder().forBrowser('chrome').build();

    //To fetch https://demoqa.com/text-box from the browser with our code.

    await driver.get(url);

    let userName = await driver.findElement(By.id('userName'));
    let userEmail= await driver.findElement(By.id('userEmail'));
    let CurrentAddress= await driver.findElement(By.id('currentAddress'));
    let PermanentAddress= await driver.findElement(By.id('permanentAddress'));

    userName.sendKeys(fullName);
    userEmail.sendKeys(email);
    CurrentAddress.sendKeys(currentAddress);
    PermanentAddress.sendKeys(permanentAddress);



    
    await driver.findElement(By.id('submit')).click();
    await driver.sleep(1000);

    await driver.quit();

}
demoqa();