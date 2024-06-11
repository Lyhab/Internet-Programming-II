import { test, expect } from "@playwright/test";

test("newtask", async ({ page }) => {
  // ======== Step1 ========
  await page.goto("http://127.0.0.1:8000/tasks/create");

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
  await page.click('a[href="http://127.0.0.1:8000/tasks/create"]');

  // ------- Task name
  await page.getByLabel("Task Name").fill("Play game");

  // ------- Task description
  await page.getByLabel("Description").fill("Play Mobile Legend");

  // ======== Step4 ========
  // Create task
  await page.click('button[type="submit"]');

  // ======== Step5 ========
  await page.goto("http://127.0.0.1:8000/tasks");
});
