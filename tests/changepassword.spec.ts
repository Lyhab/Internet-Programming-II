import { test, expect } from "@playwright/test";

test("changepassword", async ({ page }) => {
  // ======== Step1 ========
  await page.goto("http://127.0.0.1:8000/login");

  // ======== Step2 ========
  // Click on forget password
  await page.click('a[href="http://127.0.0.1:8000/password/reset"]');

  // ======== Step3 ========
  // ------- Email
  await page.getByLabel("E-Mail Address").fill("lyhabrithyny@gmail.com");

  // ------- Login
  // Send password reset link
  await page.click('button[type="submit"]');
});
