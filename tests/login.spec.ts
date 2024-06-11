import { test, expect } from "@playwright/test";

test("login", async ({ page }) => {
  // ======== Step1 ========
  await page.goto("http://127.0.0.1:8000/login");

  // ======== Step2 ========
  // ------- Email
  await page.getByLabel("E-Mail Address").fill("lyhabrithyny@gmail.com");

  // ------- Password
  await page.getByLabel("Password", { exact: true }).fill("Lyhab$168");

  // ======== Step3 ========
  // Submit the login form (this depends on your form's implementation)
  await page.click('button[type="submit"]');

  // ======== Step4 ========
  // Assert that user can see "You are logged in!"
  await expect(page.getByText("You are logged in!")).toBeVisible();
});
