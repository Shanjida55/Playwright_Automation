const {test,expect} = require('@playwright/test');
test('Automation with Playwright!',async({page}) => {

await page.goto('https://demoblaze.com/index.html');
//await page.setViewportSize({ width: 1000, height: 2000 });
await page.pause();

await page.getByRole('link', { name: 'Sign up' }).click();//sign up 
await page.getByLabel('Username:').fill('Arohi1');
await page.getByLabel('Password:').fill('12345');
await page.getByRole('button', { name: 'Sign up' }).click();

await page.getByRole('link', { name: 'Log in' }).click();//login 
await page.locator('#loginusername').fill('Arohi1');
await page.locator('#loginpassword').fill('12345')
await page.getByRole('button', { name: 'Log in' }).click();
await page.pause();

await page.getByRole('link', { name: 'PRODUCT STORE' }).click();
await page.getByRole('link', { name: 'Laptops' }).click();
await page.locator('#next2').click();
await page.locator('#prev2').click();

await page.getByRole('link', { name: 'Nexus 6' }).click();//cart 1
await page.getByRole('link', { name: 'Add to cart' }).click();

await page.getByRole('link', { name: 'Home (current)' }).click();//go to home

await page.getByRole('link', { name: 'Nokia lumia 1520' }).click();//cart 2
await page.getByRole('link', { name: 'Add to cart' }).click();
await page.pause();

await page.getByRole('link', { name: 'Cart', exact: true }).click();//Check cart list
await page.getByRole('row', { name: 'Nokia lumia 1520 820 Delete' }).getByRole('link').click(); //Delete an item
await page.getByRole('button', { name: 'Place Order' }).click();

await page.locator('#name').fill('oroni'); //fill up purchase form
await page.getByLabel('Country:').fill('Bangladesh');
await page.getByLabel('City:').fill('Dhaka');
await page.getByLabel('Credit card:').fill('6432786890');
await page.getByLabel('Month:').fill('december');
await page.getByLabel('Year:').fill('2023')

await page.getByRole('button', { name: 'Purchase' }).click();
await page.getByRole('button', { name: 'OK' }).click();

await page.getByRole('link', { name: 'Contact' }).click();// fill up the contact form
await page.locator('#recipient-email').fill('dnbchgv@gmail.com');
await page.getByLabel('Contact Email:').fill('cbbh23@gmail.com');
await page.getByLabel('Message:').fill('hi product is so good');
await page.getByRole('button', { name: 'Send message' }).click();

await page.getByRole('link', { name: 'Log out' }).click(); //logout


})
