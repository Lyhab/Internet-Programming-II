import { test, expect } from "@playwright/test";

test("deletetask", async ({ page }) => {
  // ======== Step1 ========
  await page.goto("http://127.0.0.1:8000/tasks");

  // ======== Step2 ========
  // ------- Email
  await page.getByLabel("E-Mail Address").fill("lyhabrithyny@gmail.com");

  // ------- Password
  await page.getByLabel("Password", { exact: true }).fill("Lyhab$168");

  // ------- Login
  // Submit the login form (this depends on your form's implementation)
  await page.click('button[type="submit"]');

  // ======== Step3 ========
  // ------- Click on task
  await page.click(".dropdown:nth-child(1)");

  // ------- Click on create task
  await page.click('a[href="http://127.0.0.1:8000/tasks-all"]');

  // ------- Click on edit task
  await page.click(".fa-pencil:nth-child(1)");

  // ======== Step4 ========
  // Save Changes
  await page.click('button[type="submit"]:nth-child(4)');

  // ======== Step5 ========
  // Assert that user can see "You are logged in!"
  await expect(page.getByText("Task Deleted")).toBeVisible();
});
