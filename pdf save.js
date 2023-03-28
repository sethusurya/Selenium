const {Builder, By, Key, until} = require('selenium-webdriver');
require('chromedriver');
const chrome = require('selenium-webdriver/chrome');
let opts = new chrome.Options();
let fs = require('fs');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').setChromeOptions(opts.headless()).build();
  driver.manage().window().maximize();
  try {
    await driver.get('https://me.northeastern.edu');
    await driver.sleep(2000)
    await driver.findElement(By.className('idp')).click();
    await driver.sleep(2000)
    await driver.executeScript('setTimeout(() => window.print(),1000)');
    console.log("we are here")
    // let encodedString = await driver.takeScreenshot();
    // await fs.writeFileSync('./image.png', encodedString, 'base64');
    myWindowHandles = await driver.getAllWindowHandles()
    
    console.log(myWindowHandles);
    // await driver.wait(until.elementLocated(By.className("action-button")),10000);
    // await driver.findElement(By.className(action-button)).click();
    let base64 = await driver.printPage({pageRanges:["1-2"]});
    await fs.writeFileSync('./test.pdf', base64, 'base64');
  } finally {
    await driver.quit();
  }
})();