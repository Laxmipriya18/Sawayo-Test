import { test, expect } from '@playwright/test';
test('has title', async ({ page }) => {
    await page.goto('https://auth.sawayo.de/signin');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Sawayo Auth/);
    //await page.pause();
    await page.getByPlaceholder('name@beispiel.com').click();
  await page.getByPlaceholder('name@beispiel.com').fill('prprod@yopmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Sawayo@2022');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  });