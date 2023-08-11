const {test,expect} = require('@playwright/test');
test('Navigationnpx playwright test ./test/navigation.spec.js --project chromium --headed',async({page}) => 
{
await page.goto('https://www.bkash.com/');
await page.pause();
await page.locator('#top-menu-0').click();
await expect(page).toHaveURL(/campaign/);


});