const {test,expect} = require('@playwright/test');
test('Log in Test',async({page}) => 
{
await page.goto('https://demo.applitools.com/');
await page.pause();
await page.getByPlaceholder('Enter your username').fill('labonno');
await page.getByPlaceholder("Enter your password").fill('12345');
await page.getByRole('link', { name: 'Sign in' }).click();

});

test('Log in OrangeHRM',async({page}) => 
{
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
await page.pause();
await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('Password').fill('admin123');
await page.getByRole('button', { name: 'Login' }).click();
await expect(page).toHaveURL(/dashboard/);

});