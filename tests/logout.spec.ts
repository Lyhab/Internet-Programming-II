import { test, expect } from "@playwright/test";

test("logout", async ({ page }) => {
  // ======== Step1 ========
  await page.goto("http://127.0.0.1:8000/login");

  // ======== Step2 ========
  // ------- Email
  await page.getByLabel("E-Mail Address").fill("lyhabrithyny@gmail.com");

  // ------- Password
  await page.getByLabel("Password", { exact: true }).fill("Lyhab$168");

  // ------- Login
  // Submit the login form (this depends on your form's implementation)
  await page.click('button[type="submit"]');

  // ======== Step3 ========
  // Click on username
  await page.click(".dropdown:nth-child(2)");

  // ======== Step4 ========
  // Click on username
  await page.click('a[href="http://127.0.0.1:8000/logout"]');

  // ======== Step5 ========
  // Assert that user can see "You are logged in!"
  await expect(
    page.getByText("Your Application's Landing Page.")
  ).toBeVisible();
});
