import { test, expect } from "@playwright/test";

test("Dispay all department", async ({ page }) => {
  await page.goto("http://localhost:5173/departments");
  await page.waitForTimeout(5000);
  await expect(page).toHaveScreenshot("departmentList.png");
  await page.getByRole("link", { name: "American Decorative Arts" }).click();
  await page.waitForTimeout(5000);
  await expect(page.locator('h1')).toContainText('Department of : American Decorative Arts');
});