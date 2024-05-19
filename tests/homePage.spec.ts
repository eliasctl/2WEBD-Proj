import { test, expect } from "@playwright/test";

test("First view", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(
    page.getByText(
      "Metropolitan Museum of ArtDepartments Search The e-MetAll the artworks of the"
    )
  ).toBeVisible();
  await expect(page).toHaveScreenshot("home-top.png");
});

test("Navbar", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(page.getByLabel("E-Met")).toContainText(
    "Metropolitan Museum of Art"
  );
  await page.getByLabel("E-Met").click();
  await page.getByRole("link", { name: "Departments" }).click();
  await page.getByLabel("E-Met").click();
  await page.getByRole('link', { name: 'Search', exact: true }).click();
  await page.getByLabel("E-Met").click();
  await page.locator("body").press("ControlOrMeta+k");
  await page.getByPlaceholder("Enter your search").fill("test");
  await page.getByPlaceholder("Enter your search").press("Enter");
  await expect(page.locator("#searchResultDisplay")).toContainText(
    "Result for : test"
  );
  await expect(page.locator("#searchResultDisplay")).toContainText(
    "PrécédentSuivant"
  );
  await expect(page.getByRole("button", { name: "Précédent" })).toBeDisabled();
  await expect(page.getByRole("contentinfo")).toContainText(
    "e-METAll the artworks of the MET online.© SupInfo Proj 2024 BenG2. The C&E. All rights reserved."
  );
});

test("Web Site presentation", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(page).toHaveScreenshot("home-top.png");
  await expect(page.locator("#root")).toContainText(
    "All artworks of the Metropolitan Museum of Art at your disposalWith the help of this site you can retrieve all the works of the MET with their information and this simply and quickly !Search for a work of artAs if you were inside the METYou can let yourself be guided by the departments of the museum and admire the works that compose them.More iformations than in realWith e-MET, you can get more information about the works than in the MET. Ideal to discover the history of the work and make a presentation.A simple search systemA simple, fast and powerful search system, on each page you can search for content on one page or in all the museum according to all the parameters you want."
  );
  await page.getByRole("link", { name: "Search for a work of art" }).click();
});

test("Footer", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(page.getByRole("contentinfo")).toContainText(
    "e-METAll the artworks of the MET online.© SupInfo Proj 2024 BenG2. The C&E. All rights reserved."
  );
});
