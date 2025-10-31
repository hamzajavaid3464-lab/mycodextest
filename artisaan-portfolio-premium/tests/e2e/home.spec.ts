import { test, expect } from '@playwright/test';

test('home to app detail flow', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /beautifully engineered android experiences/i })).toBeVisible();
  await page.getByRole('link', { name: /explore the portfolio/i }).click();
  await expect(page).toHaveURL(/.*\/apps/);
  await page.getByRole('link', { name: /Explore/ }).first().click();
  await expect(page).toHaveURL(/\/apps\//);
  await expect(page.getByRole('button', { name: /view on play store/i })).toBeVisible();
});

test('support form validation', async ({ page }) => {
  await page.goto('/support');
  await page.getByLabel('Name').fill('Jordan');
  await page.getByLabel('Email').fill('jordan@example.com');
  await page.getByLabel('How can we help?').fill('Testing the contact pipeline.');
  await page.getByRole('button', { name: /send message/i }).click();
  await expect(page.getByText(/thanks for reaching out/i)).toBeVisible();
});
