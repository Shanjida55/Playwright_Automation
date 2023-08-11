const {test,expect} = require('@playwright/test');
test('Registration 1',async({page}) => 
{
await page.goto('https://demo.opencart.com/index.php?route=account/register&language=en-gb');
await page.pause();
await page.getByPlaceholder('First Name').fill('labonno');
await page.getByPlaceholder('Last Name').fill('Shanjida');
await page.getByPlaceholder('E-Mail').fill('shanjida@email.com');
await page.getByPlaceholder('Password').fill('12345');
await page.getByLabel('Yes');
await page.getByRole('checkbox').check();
await page.getByRole('button', { name: 'Continue' }).click();
});



