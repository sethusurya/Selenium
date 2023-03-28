require("chromedriver");
require('dotenv').config();
const { Builder, By, Key, until, Select } = require("selenium-webdriver");
var assert = require("chai").assert;
var expect = require("chai").expect;
let fs = require('fs');

// Name of directory
var dir = './Scenario1';

// delete the existing directory if it is present
if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
}

// make a new directory
fs.mkdirSync(dir);

 
describe("Scenario 1", function () {
    //it - describes expected behaviour
    it("Open Transcript from student hub", async function () {
          let driver = await new Builder().forBrowser('chrome').build();
            driver.manage().window().maximize();
            try {
                // open the web page
                await driver.get('https://me.northeastern.edu');
                // wait 3 sec
                await driver.sleep(3000);

                //Take Screenshot
                let encodedString = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario1/image1.png', encodedString, 'base64');

                // Select myNortheasternLogin Based on class
                await driver.findElement(By.className('idp')).click();

                // Input username from env file
                await driver.findElement(By.id('username')).sendKeys(process.env.username);
                // Input password from env file
                await driver.findElement(By.id('password')).sendKeys(process.env.password);

                //Take Screenshot
                let encodedString2 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario1/image2.png', encodedString2, 'base64');

                // wait 3 sec
                await driver.sleep(3000);
                // Click on login button
                await driver.findElement(By.name('_eventId_proceed')).click();

                
                // Save login for future button, Wait for it to be located
                await driver.wait(until.elementLocated(By.id("idSIButton9")),20000)
                
                // wait 3 sec
                await driver.sleep(3000);

                //Take Screenshot
                let encodedString3 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario1/image3.png', encodedString3, 'base64');

                // click on the button once visible
                await driver.findElement(By.id('idSIButton9')).click();

                // a dialog with let's go will appear once we login in new browser window, waiting for it to be located
                await driver.wait(until.elementLocated(By.className("ms-Button ms-Button--default button_bde9cc16 root-653")),20000);

                //Take Screenshot
                let encodedString4 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario1/image4.png', encodedString4, 'base64');

                // clicking the let's go button
                await driver.findElement(By.className('ms-Button ms-Button--default button_bde9cc16 root-653')).click();

                // page is loaded, so switching to resources by xPath
                await driver.findElement(By.xpath("//*[text()='Resources']")).click();

                // wait 3 sec
                await driver.sleep(3000);

                // waiting the first item with the below class name
                await driver.wait(until.elementLocated(By.className("categoryNavItemWrapper_5ebd5061")));
                // clicking on first item with the below class name as it is present in first position
                await driver.findElement(By.xpath('//*[text()="Academics, Classes & Registration"]')).click();

                // wait 3 sec
                await driver.sleep(3000);

                //Take Screenshot
                let encodedString5 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario1/image5.png', encodedString5, 'base64');


                // finding element My Transcript and clicking it
                await driver.findElement(By.xpath("//*[text()='My Transcript']")).click();
                // Get all window handles and switch to latest one
                let myTabs = await driver.getAllWindowHandles();
                // switching to latest one
                await driver.switchTo().window(myTabs[1]);
                // sleep for 5 seconds
                await driver.sleep(5000);
                
                // Selecting the Graduate level
                await driver.wait(until.elementLocated(By.name('levl')),10000);
                const selectElement = await driver.findElement(By.name('levl'));
                const select = new Select(selectElement)
                await select.selectByValue('GR')

                // Giving 3 seconds gap
                await driver.sleep(3000);
                
                //Take Screenshot
                let encodedString6 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario1/image6.png', encodedString6, 'base64');

                // selecting Audit transcript
                await driver.wait(until.elementLocated(By.name('tprt')),10000);
                const selectElement2 = await driver.findElement(By.name('tprt'));
                const select2 = new Select(selectElement2)
                await select2.selectByValue('AUDI')
                await driver.sleep(3000);

                // Locate submit button
                await driver.wait(until.elementLocated(By.xpath("*//input[@value='Submit']")),10000);
                // click submit button
                await driver.findElement(By.xpath("*//input[@value='Submit']")).click();
                // wait 5 seconds
                await driver.sleep(2000);

                //Take Screenshot
                let encodedString7 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario1/image7.png', encodedString7, 'base64');

                // wait 3 sec
                await driver.sleep(3000);

                // checking the elements in the page matching text "Academic Transcript"
                let myElements = await driver.findElements(By.xpath('//*[text()="Academic Transcript"]'));
                // If there are any, then confirming our test is passed
                expect(myElements.length).to.greaterThanOrEqual(1)
                console.log('Test Success')
            } finally {
                // Closing the browser
                await driver.quit();
            }
                })
  })
