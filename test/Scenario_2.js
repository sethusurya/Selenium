require("chromedriver");
require('dotenv').config();
const { Builder, By, Key, until, Select } = require("selenium-webdriver");
var assert = require("chai").assert;
var expect = require("chai").expect;
let fs = require('fs');

// Name of directory
var dir = './Scenario2';

// delete the existing directory if it is present
if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
}

// make a new directory
fs.mkdirSync(dir);

 
describe("Scenario 2", function () {
    //it - describes expected behaviour
    it("Add a To-Do task for yourself", async function () {
          let driver = await new Builder().forBrowser('chrome').build();
            driver.manage().window().maximize();
            try {
                // Open canvas URL
                await driver.get('https://canvas.northeastern.edu');

                // wait 5 sec
                await driver.sleep(5000);

                //Take Screenshot
                let encodedString = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario2/image1.png', encodedString, 'base64');

                // Log in to canvas button click
                await driver.findElement(By.linkText('Log in to Canvas')).click();
                // wait until username is located
                await driver.wait(until.elementLocated(By.id('username')),10000);
                await driver.findElement(By.id('username')).sendKeys(process.env.username);
                await driver.findElement(By.id('password')).sendKeys(process.env.password);

                //Take Screenshot
                let encodedString2 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario2/image2.png', encodedString2, 'base64');

                // wait 3 sec
                await driver.sleep(3000);
                // Click on login button
                await driver.findElement(By.name('_eventId_proceed')).click();

                // Give time for duo authentication, timeout if not done in 30 Sec
                // Wait until Calendar item is located
                await driver.wait(until.elementLocated(By.id("global_nav_calendar_link")),30000);
                await driver.findElement(By.id('global_nav_calendar_link')).click();

                //Take Screenshot
                let encodedString3 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario2/image3.png', encodedString3, 'base64');

                // wait 3 seconds
                await driver.sleep(3000);

                // Wait until new event link is visible
                await driver.wait(until.elementLocated(By.id("create_new_event_link")),10000)
                // Click on new Event link
                await driver.findElement(By.id('create_new_event_link')).click();

                // wait until modal is opened and located
                await driver.wait(until.elementLocated(By.className("ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable")),10000);
                let container = await driver.findElement(By.className('ui-dialog ui-widget ui-widget-content ui-corner-all ui-draggable'));
                //Take Screenshot
                let encodedString4 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario2/image4.png', encodedString4, 'base64');

                // wait 3 seconds
                await driver.sleep(3000);

                // **********************************
                await driver.wait(until.elementLocated(By.xpath('//a[@href="#edit_planner_note_form_holder"]')),10000);
                let elements = await driver.findElements(By.xpath('//a[@href="#edit_planner_note_form_holder"]'));
                await elements[elements.length - 1].click();
                // **********************************

                // input title
                await container.findElement(By.id('planner_note_title')).sendKeys("MyCustomTodo");
                await container.findElement(By.id('details_textarea')).sendKeys("selenium testing");
                // await container.findElement(By.xpath('//input[@placeholder="Input Event Title..."]')).sendKeys('MyCustomEvent');

                // wait  3 sec
                await driver.sleep(3000);

                //Take Screenshot
                let encodedString5 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario2/image5.png', encodedString5, 'base64');

                // wait  3 sec
                await driver.sleep(3000);

                // Click Submit // there are 2 submit buttons, for second submit we are using this
                mySubmits = await container.findElements(By.xpath('//button[@type="submit"]'));

                await mySubmits[mySubmits.length -1].click()

                // wait 3 sec
                await driver.sleep(3000);

                //Take Screenshot
                let encodedString6 = await driver.takeScreenshot();
                //Save Screenshot
                await fs.writeFileSync('./Scenario2/image6.png', encodedString6, 'base64');

                // wait 3 sec
                await driver.sleep(3000);
                console.log('Test Success')
            } finally {
                // Closing the browser
                await driver.quit();
            }
                })
  })
