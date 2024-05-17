import { test, expect } from "@playwright/test";

test("display with all information", async ({ page }) => {
    await page.goto("http://localhost:5173/Artwork/375834");
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot("page-top.png");
    await page.locator("body").press("End");
    await expect(page).toHaveScreenshot("page-bottom.png");
});
