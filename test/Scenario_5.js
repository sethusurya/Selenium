require("chromedriver");
require('dotenv').config();
const { Builder, By, Key, until, Select } = require("selenium-webdriver");
var assert = require("chai").assert;
var expect = require("chai").expect;
let fs = require('fs');

// Name of directory
var dir = './Scenario5';

// delete the existing directory if it is present
if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
}

// make a new directory
fs.mkdirSync(dir);

 
describe("Scenario 5", function () {
    //it - describes expected behaviour
    it("Job Alert alternative", async function () {
          let driver = await new Builder().forBrowser('chrome').build();
            driver.manage().window().maximize();
            try {
                // Go to the given url
                // Similar to Scenario_1 ***** Start *******
                await driver.get('https://me.northeastern.edu');
                await driver.wait(until.elementLocated(By.className('idp')),10000);
                await driver.findElement(By.className('idp')).click();
                await driver.wait(until.elementLocated(By.id('username')),10000);
                await driver.findElement(By.id('username')).sendKeys(process.env.username);
                await driver.findElement(By.id('password')).sendKeys(process.env.password);
                await driver.findElement(By.name('_eventId_proceed')).click();
                await driver.wait(until.elementLocated(By.id("idSIButton9")),10000);
                await driver.findElement(By.id('idSIButton9')).click();
                await driver.wait(until.elementLocated(By.xpath('*//button[@aria-describedby="welcomeModalDescription"]')),20000);
                await driver.findElement(By.xpath('*//button[@aria-describedby="welcomeModalDescription"]')).click();
                await driver.findElement(By.xpath("//*[text()='Resources']")).click();
                await driver.wait(until.elementLocated(By.className("categoryNavItemWrapper_5ebd5061")),10000)
                // Similar to Scenario_1 ***** End *******


                // click on careers and Employment
                await driver.findElement(By.xpath('//*[text()="Careers & Employment"]')).click();
                // wait 3 sec
                await driver.sleep(3000);

                //Take Screenshot
                let encodedString = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario5/image1.png', encodedString, 'base64');

                await driver.sleep(3000);

                // Find Link to campus Employment & Work-Study
                await driver.findElement(By.xpath('//a[@data-gtm-sh-resources-link="Campus Employment & Work-Study"]')).click();
                let myWindowHandles = await driver.getAllWindowHandles();
                await driver.switchTo().window(myWindowHandles[1]);
                // Wait until Find a Job is located
                await driver.wait(until.elementLocated(By.linkText('Find a Job')), 10000);
                // Wait  3 sec
                await driver.sleep(3000);
                //Take Screenshot
                let encodedString2 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario5/image2.png', encodedString2, 'base64');

                // Click on Find a Job
                await driver.findElement(By.linkText('Find a Job')).click();
                // Wait until Text below is located
                await driver.wait(until.elementLocated(By.linkText('Find an On-Campus or Work-Study Job')), 10000);

                // wait 3 sec
                await driver.sleep(3000);
                //Take Screenshot
                let encodedString3 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario5/image3.png', encodedString3, 'base64');
                // wait 1 sec
                await driver.sleep(1000);
                await driver.findElement(By.linkText('Find an On-Campus or Work-Study Job')).click();
                await driver.wait(until.elementLocated(By.xpath('//a[@data-automation-id="linkButton"]')),10000);

                // wait 3 sec
                await driver.sleep(3000);
                //Take Screenshot
                let encodedString4 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario5/image4.png', encodedString4, 'base64');
                // wait 1 sec
                await driver.sleep(1000);
                await driver.findElement(By.xpath('//a[@data-automation-id="linkButton"]')).click();
            
                await driver.wait(until.elementLocated(By.className('wdappchrome-ac')),10000);
                // wait 3 sec
                await driver.sleep(2000);
                //Take Screenshot
                let encodedString5 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario5/image5.png', encodedString5, 'base64');
                // wait 3 sec
                await driver.sleep(3000);
                await driver.findElement(By.className('wdappchrome-ac')).click();
                // Wait to locate Jobs and Career Hub
                await driver.wait(until.elementLocated(By.xpath('//a[@aria-label="Jobs and Career Hub"]')),10000);
                // wait 3 sec
                await driver.sleep(3000);
                // Click on Jobs and Career Hub
                await driver.findElement(By.xpath('//a[@aria-label="Jobs and Career Hub"]')).click();
                await driver.sleep(2000);
                await driver.wait(until.elementLocated(By.className('WJA2 WL41 WHA2')),10000);
                // wait 2 sec
                await driver.sleep(2000);
                //Take Screenshot
                let encodedString6 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario5/image6.png', encodedString6, 'base64');
                // wait 2 sec
                await driver.sleep(2000);
                await driver.findElement(By.className('WJA2 WL41 WHA2')).click();
                await driver.sleep(2000);
            
                // for office of student employment link
                await driver.wait(until.elementLocated(By.className('WAMR')),10000);
                let myElements = await driver.findElements(By.className('WAMR'));
                // Click on the 3rd Link available now
                await myElements[2].click();
                // Sleep for 3 sec
                await driver.sleep(3000);
            
                let myWindowHandles2 = await driver.getAllWindowHandles()
                // Switch to 3rd Tab which will be open by now
                await driver.switchTo().window(myWindowHandles2[2]);
            
                await driver.wait(until.elementLocated(By.xpath('//a[@href="#"]')),10000);
                await driver.findElement(By.xpath('//a[@href="#"]')).click();
                // wait 2 sec
                await driver.sleep(2000);
                //Take Screenshot
                let encodedString7 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario5/image7.png', encodedString7, 'base64');
                // wait 2 sec
                await driver.sleep(2000);
            
                await driver.wait(until.elementLocated(By.xpath('//a[@href="/jobX_myjobmail.aspx"]')),10000);
                await driver.findElement(By.xpath('//a[@href="/jobX_myjobmail.aspx"]')).click();
                // wait 2 sec
                await driver.sleep(2000);
                //Take Screenshot
                let encodedString8 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario5/image8.png', encodedString8, 'base64');
                // wait 2 sec
                await driver.sleep(2000);
                
                // Wait until username and password is located!
                await driver.wait(until.elementLocated(By.id('Skin_ctl11_LoginNameText')),10000);
                await driver.findElement(By.id('Skin_ctl11_LoginNameText')).sendKeys(process.env.username);
                await driver.findElement(By.id('Skin_ctl11_LoginPasswordText')).sendKeys(process.env.password);
                // wait 2 sec
                await driver.sleep(2000);
                //Take Screenshot
                let encodedString9 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario5/image9.png', encodedString9, 'base64');
                // wait 2 sec
                await driver.sleep(2000);
            
                // Click Login
                await driver.findElement(By.name('Skin$ctl11$ctl14')).click();
            
                await driver.wait(until.elementLocated(By.id('Skin_body_JobMailShell_AddNew_8')),10000);
                await driver.findElement(By.id('Skin_body_JobMailShell_AddNew_8')).click();
            
                await driver.wait(until.elementLocated(By.className('GraphicShell-Body1-Even something-button pull-right')),10000);
                let inputs = await driver.findElements(By.className('GraphicShell-Body1-Even something-button pull-right'));
            
                // employers
                await inputs[inputs.length - 3].click();
                
                // wait 2 sec
                await driver.sleep(2000);
                //Take Screenshot
                let encodedString10 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario5/image10.png', encodedString10, 'base64');
                // wait 2 sec
                await driver.sleep(2000);

                await driver.wait(until.elementLocated(By.xpath('//a[@onclick="AddAll();"]')),10000);
                await driver.sleep(2000);
                await driver.findElement(By.xpath('//a[@onclick="AddAll();"]')).click();
                // wait 2 sec
                await driver.sleep(2000);
                //Take Screenshot
                let encodedString11 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario5/image11.png', encodedString11, 'base64');
                // wait 2 sec
                await driver.sleep(2000);
                await driver.findElement(By.className('btn-Link something-button')).click();
                await driver.sleep(3000);
            
                //category
                await inputs[inputs.length - 2].click();
                // wait 2 sec
                await driver.sleep(2000);
                //Take Screenshot
                let encodedString12 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario5/image12.png', encodedString12, 'base64');
                // wait 2 sec
                await driver.sleep(2000);
                await driver.wait(until.elementLocated(By.xpath('//a[@onclick="AddAll();"]')),10000);
                await driver.findElement(By.xpath('//a[@onclick="AddAll();"]')).click();
                // wait 2 sec
                await driver.sleep(2000);
                //Take Screenshot
                let encodedString13 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario5/image13.png', encodedString13, 'base64');
                // wait 2 sec
                await driver.sleep(2000);
                await driver.findElement(By.className('btn-Link something-button')).click();
                await driver.sleep(3000);

                //Time frame
                await inputs[inputs.length - 1].click();
                // wait 2 sec
                await driver.sleep(2000);
                //Take Screenshot
                let encodedString14 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario5/image14.png', encodedString14, 'base64');
                // wait 2 sec
                await driver.sleep(2000);
                await driver.wait(until.elementLocated(By.xpath('//a[@onclick="AddAll();"]')),10000);
                await driver.findElement(By.xpath('//a[@onclick="AddAll();"]')).click();
                // wait 2 sec
                await driver.sleep(2000);
                //Take Screenshot
                let encodedString15 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario5/image15.png', encodedString15, 'base64');
                // wait 2 sec
                await driver.sleep(2000);
                await driver.findElement(By.className('btn-Link something-button')).click();
                await driver.sleep(3000);
                
                await driver.wait(until.elementLocated(By.name('Skin$body$ctl02')),10000);
                await driver.findElement(By.name('Skin$body$ctl02')).click();
                // wait 2 sec
                await driver.sleep(2000);
                //Take Screenshot
                let encodedString16 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario5/image16.png', encodedString16, 'base64');
                // wait 2 sec
                await driver.sleep(2000);
                console.log('Test Success')
            } finally {
                // Closing the browser
                await driver.quit();
            }
                })
  })
