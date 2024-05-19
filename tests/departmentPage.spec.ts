import { test, expect } from "@playwright/test";

test("Display firstPage", async ({ page }) => {
    await page.goto("http://localhost:5173/Department/3");
    await page.waitForTimeout(5000);
    await expect(page).toHaveScreenshot("departmentPage-top.png");
    await page.locator("body").press("End");
    await expect(page).toHaveScreenshot("departmentPage-bottom.png");
});

test("Display 3ndPage", async ({ page }) => {
    await page.goto("http://localhost:5173/Department/3");
    await page.waitForTimeout(5000);
    await expect(page).toHaveScreenshot("departmentPage-search.png");
    await page.getByRole('button', { name: 'Suivant' }).click();
    await page.getByRole('button', { name: 'Suivant' }).click();
    await page.waitForTimeout(5000);
    await expect(page).toHaveScreenshot("departmentPage-next.png");
});