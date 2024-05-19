import { test, expect } from "@playwright/test";

test("Test on department 3", async ({ page }) => {
  await page.goto("http://localhost:5173/Department/3");
  await page.waitForTimeout(5000);
  await expect(page.locator("#root")).toContainText("PrécédentSuivant");
  await expect(page.getByRole("button", { name: "Précédent" })).toBeDisabled();
  await page.getByRole("button", { name: "Suivant" }).click();
  await page.waitForTimeout(5000);
  await expect(page.getByRole("button", { name: "Suivant" })).toBeEnabled();
  await expect(page.getByRole("button", { name: "Précédent" })).toBeEnabled();
  await expect(page.getByRole("contentinfo")).toContainText(
    "e-METAll the artworks of the MET online.© SupInfo Proj 2024 BenG2. The C&E. All rights reserved."
  );
  await expect(page.getByLabel("Global")).toContainText(
    "Metropolitan Museum of ArtDepartments Search"
  );
  await expect(page.locator("#navbar-collapse-with-animation")).toContainText(
    "Departments Search"
  );
});
