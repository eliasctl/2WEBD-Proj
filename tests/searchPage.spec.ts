import { test, expect } from "@playwright/test";

test("Dispay first view", async ({ page }) => {
  await page.goto("http://localhost:5173/search");
  await page.waitForTimeout(5000);
  await expect(page).toHaveScreenshot("searchPage.png");
});

test("Search for a specific artwork", async ({ page }) => {
  await page.goto("http://localhost:5173/search");
  await page.waitForTimeout(5000);
  await page.getByLabel("Highlght").check();
  await page.locator('#department svg').click();
  await page.getByRole("option", { name: "European Sculpture and" }).click();
  await page.getByLabel("Search").click();
  await page.getByLabel("Search").fill("desk");
  await page.getByRole("button", { name: "Search" }).click();
  await page.waitForTimeout(5000);
  await expect(page).toHaveScreenshot("searchTestPage.png");
});