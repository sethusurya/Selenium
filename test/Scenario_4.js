require("chromedriver");
require('dotenv').config();
const { Builder, By, Key, until, Select } = require("selenium-webdriver");
var assert = require("chai").assert;
var expect = require("chai").expect;
let fs = require('fs');

// Name of directory
var dir = './Scenario4';

// delete the existing directory if it is present
if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
}

// make a new directory
fs.mkdirSync(dir);

 
describe("Scenario 4", function () {
    //it - describes expected behaviour
    it("Download a DATASET", async function () {
          let driver = await new Builder().forBrowser('chrome').build();
            driver.manage().window().maximize();
            try {
                // Go to the given url
                await driver.get('https://onesearch.library.northeastern.edu/discovery/search?vid=01NEU_INST:NU&lang=en');
                
                // Wait until a link with given href is visible 
                await driver.wait(until.elementLocated(By.xpath('//a[@href="https://repository.library.northeastern.edu/"]')));
               
                //Take Screenshot
                let encodedString = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario4/image1.png', encodedString, 'base64');


                await driver.findElement(By.xpath('//a[@href="https://repository.library.northeastern.edu/"]')).click();
                await driver.sleep(5000);
                let myList = await driver.getAllWindowHandles();
                // console.log('myList', myList);
                await driver.sleep(5000);
                await driver.switchTo().window(myList[1]);
                
                //Take Screenshot
                let encodedString2 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario4/image2.png', encodedString2, 'base64');

                await driver.findElement(By.xpath('//a[@data-original-title="High value datasets, such as statistical datasets and research datasets"]')).click();
                await driver.sleep(3000);
                //Take Screenshot
                let encodedString3 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario4/image3.png', encodedString3, 'base64');
                await driver.sleep(3000);
                await driver.findElement(By.xpath('//a[@title="Zip File"]')).click();
                await driver.sleep(3000);
                
                //Take Screenshot
                let encodedString4 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario4/image4.png', encodedString4, 'base64');
                await driver.sleep(3000);
                console.log('Test Success')
            } finally {
                // Closing the browser
                await driver.quit();
            }
                })
  })
