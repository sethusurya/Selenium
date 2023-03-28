require("chromedriver");
require('dotenv').config();
const { Builder, By, Key, until, Select } = require("selenium-webdriver");
var assert = require("chai").assert;
var expect = require("chai").expect;
let fs = require('fs');

// Name of directory
var dir = './Scenario3';

// delete the existing directory if it is present
if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
}

// make a new directory
fs.mkdirSync(dir);

 
describe("Scenario 3", function () {
    //it - describes expected behaviour
    it("Download a classroom guide", async function () {
          let driver = await new Builder().forBrowser('chrome').build();
            driver.manage().window().maximize();
            try {
                // Go to the given url
                await driver.get('https://service.northeastern.edu/tech?id=classrooms');
                // Wait until username is located
                await driver.wait(until.elementLocated(By.id('username')),10000);
                await driver.findElement(By.id('username')).sendKeys(process.env.username);
                await driver.findElement(By.id('password')).sendKeys(process.env.password);

                //Take Screenshot
                let encodedString = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario3/image1.png', encodedString, 'base64');

                // wait 3 sec
                await driver.sleep(3000);

                // click the login button
                await driver.findElement(By.name('_eventId_proceed')).click();

                // wait until list-group-item className is visible
                await driver.wait(until.elementLocated(By.className("list-group-item")),50000);

                //Take Screenshot
                let encodedString2 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario3/image2.png', encodedString2, 'base64');

                // wait 3 sec
                await driver.sleep(3000);
                
                await driver.findElement(By.xpath("//*[text()='007 Behrakis Health Sciences Center']")).click();
                
                
                await driver.wait(until.elementLocated(By.css("a[href='https://nuflex.northeastern.edu/wp-content/uploads/2020/11/Hybrid_Nuflex_Classroom.pdf']")),10000);
                
                //Take Screenshot
                let encodedString3 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario3/image3.png', encodedString3, 'base64');

                // wait 3 sec
                await driver.sleep(3000);

                // click on the available href link
                await driver.findElement(By.css("a[href='https://nuflex.northeastern.edu/wp-content/uploads/2020/11/Hybrid_Nuflex_Classroom.pdf']")).click();
                myTabs = await driver.getAllWindowHandles();
                await driver.switchTo().window(myTabs[1]); // switching to pdf viewer tab
                await driver.wait(until.urlIs('https://nuflex.northeastern.edu/wp-content/uploads/2020/11/Hybrid_Nuflex_Classroom.pdf'),10000);

                // wait 3 sec
                await driver.sleep(3000);

                //Take Screenshot
                let encodedString4 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario3/image4.png', encodedString4, 'base64');

                // Wait 3 sec
                await driver.sleep(3000)
                console.log('Test Success')
            } finally {
                // Closing the browser
                await driver.quit();
            }
                })
  })
