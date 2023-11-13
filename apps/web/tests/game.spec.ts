import { test, expect } from "@playwright/test";

// Reusable function to select a winning attribute
const selectWinningAttribute = async (page, attribute) => {
  const selectAttribute = await page
    .locator("button")
    .filter({ hasText: attribute });
  await selectAttribute.click();
  await page.getByRole("option", { name: attribute }).click();
};

test.beforeEach(async ({ page }) => {
  await page.goto("./");
  await page.waitForLoadState("domcontentloaded");
});

test("has title", async ({ page }) => {
  await expect(page).toHaveTitle(/SW Card Game/);
});

test("game start", async ({ page }) => {
  await selectWinningAttribute(page, "Height");
  await selectWinningAttribute(page, "Crew");

  await page.getByRole("button", { name: "Draw cards" }).click();
  await expect(
    page.locator("button").filter({ hasText: "Height" })
  ).not.toBeVisible();
  await expect(
    page.locator("button").filter({ hasText: "Crew" })
  ).not.toBeVisible();
});

test("game round", async ({ page }) => {
  await page.getByRole("button", { name: "Draw cards" }).click();
  await page.waitForEvent("requestfinished");

  const getPlayerScore = async (player) => {
    return parseInt(
      (
        await page.getByText(`Player ${player}:`, { exact: false }).innerText()
      ).split(":")[1]
    );
  };

  const getPlayerAttributeScore = async (player, attribute) => {
    return parseInt(
      (
        await page
          .getByText(`${attribute.toLowerCase()}:`, { exact: false })
          .innerText()
      ).split(":")[1]
    );
  };

  const playerScore = await getPlayerScore(1);
  const player2Score = await getPlayerScore(2);

  const playerAttributeValue = await getPlayerAttributeScore(1, "Height");
  const player2AttributeValue = await getPlayerAttributeScore(2, "Crew");

  await expect(playerScore).toBeGreaterThan(player2Score);
  await expect(playerScore).toBe(
    playerAttributeValue > player2AttributeValue ? 1 : 0
  );
});

test("game restart", async ({ page }) => {
  await page.getByRole("button", { name: "Draw cards" }).click();
  const gameCards = page.getByTestId("game-card");

  await page.getByRole("button", { name: "Restart" }).click();
  await expect(gameCards).not.toBeVisible();
});
