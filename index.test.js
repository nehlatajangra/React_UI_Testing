const { Builder, By, Key, until } = require('selenium-webdriver')
require('selenium-webdriver/chrome')
require('chromedriver')
const {fireEvent,screen}= require('@testing-library/react')
debugger;

const rootURL = 'http://52.226.220.141:3000/'

const d = new Builder().forBrowser('chrome').build()
const waitUntilTime = 20000
let driver, el, actual, expected

async function getElementById(id) {
  const el = await driver.wait(until.elementLocated(By.id(id)), waitUntilTime)
  return await driver.wait(until.elementIsVisible(el), waitUntilTime)
}

async function getElementByXPath(xpath) {
  const el = await driver.wait(until.elementLocated(By.xpath(xpath)), waitUntilTime)
  return await driver.wait(until.elementIsVisible(el), waitUntilTime)
}

afterAll(async () => {
  setTimeout(function() {
    driver.quit();
  }, (5000));
});


// beforeAll(async()=>{
//   return d.then(_d => {
//         driver = _d
//       })
// })

it('waits for the driver to start', () => {
  return d.then(_d => {
    driver = _d
  })
})


it('initialises the context', async () => {

  await driver.manage().window().setPosition(0, 0)
  await driver.manage().window().setSize(1280, 1024)
  await driver.get(rootURL)
},  30000
)


test('click on brand tab ',async()=>{
  brand_btn=await  getElementByXPath("//a[contains(text(),'Brands')]");
  await brand_btn.click();
})

test('click on Dove ',async()=>{
  setTimeout(async function() {
    console.log('This printed after about 1 second');
    dove_btn= await getElementByXPath("//a[@id='Dove']");
    await dove_btn.click();
  }, 2000);

  }
  )


test('click on shampoo to add to the cart',async()=>{
    console.log('This printed after about 1 second');
    shampoo=await getElementByXPath("//button[@id='Shampoo']");
  await shampoo.click();
  
})

test('go to cart',async()=>{
  setTimeout(async function() {

  cart_btn=await getElementByXPath("//a[contains(text(),'Cart')]");
  await cart_btn.click();
}, 2000);

})

test("PROCEED TO CHECKOUT",async()=>{
  
  proceed_btn=await getElementByXPath("//button[contains(text(),'PROCEED TO CHECKOUT')]");
  await proceed_btn.click();
})

test("fill the details",async()=>{
  setTimeout(async function() {

  fname=await getElementByXPath("//*[@name='firstname']");
  await fname.sendKeys("Neha");
  lname=await getElementByXPath("//*[@name='lastname']");
  await lname.sendKeys("Jangra");
  phone=await getElementByXPath("//*[@name='phone']");
  await phone.sendKeys("1234567891");
  email=await getElementByXPath("//*[@name='email']");
  await email.sendKeys("abc@gmail.com");
}, 2000);

})

test("Proceed to pay",async()=>{
  setTimeout(async function() {

  submit_btn= await getElementByXPath("//button[contains(text(),'Proceed To Pay')]");
  await submit_btn.click();
  }, 2000);

})

// it('close the browser', () => {
//  driver.quit();
// },2000)
