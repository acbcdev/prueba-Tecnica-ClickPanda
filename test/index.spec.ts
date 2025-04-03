import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3000";

test.describe("Countries Dashboard", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(BASE_URL);
	});

	test("has title", async ({ page }) => {
		await expect(page).toHaveTitle("Countries Dashboard");
	});

	test("search functionality works", async ({ page }) => {
		await page.getByLabel("Search countries").fill("Colombia");
		await page.waitForTimeout(500); // Wait for debounce
		await expect(page.getByRole("heading", { name: "Colombia" })).toBeVisible();
	});

	test("filter by region works", async ({ page }) => {
		await page.goto(`${BASE_URL}/?region=Americas`);
		await expect(page.getByText("Argentina")).toContainText("Argentina");
	});

	test("navigation to country details works", async ({ page }) => {
		await page.goto(`${BASE_URL}/?search=Colombia`);
		await page.getByRole("heading", { name: "Colombia" }).click();
		await expect(page).toHaveURL(`${BASE_URL}/country/CO`);

		// Verify country details page content
		await expect(page.locator("h1.text-3xl.font-bold")).toContainText(
			"Colombia",
		);
		await expect(page.getByText("Population").first()).toContainText(
			"Population",
		);
	});

	test("pagination works", async ({ page }) => {
		// Check if pagination controls exist
		await expect(page.locator("[data-slot='next']")).toBeVisible();

		// Click next page
		await page.locator("[data-slot='next']").click();
		await page.waitForTimeout(500);
		// Verify URL has page parameter
		await expect(page.url()).toContain("page=2");
	});

	test("multiple filters combination works", async ({ page }) => {
		// Apply region filter
		await page.goto(`${BASE_URL}/?region=Americas&language=Spanish`);
		// Verify filtered results
		await expect(page.getByText("Colombia")).toBeVisible();
	});
});
