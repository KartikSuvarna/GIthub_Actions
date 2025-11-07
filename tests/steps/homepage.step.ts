import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
const { Given, When, Then } = createBdd();

Given("the user is on the homepage", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/login");
});

When(
  "the user enters Username {string}",
  async ({ page }, username: string) => {
    await page.fill("#username", username);
  }
);

When(
  "the user enters Password {string}",
  async ({ page }, password: string) => {
    await page.fill("#password", password);
  }
);

When("the user clicks the Login button", async ({ page }) => {
  await page.click('button[type="submit"]');
});

Then("the user should be redirected to the dashboard", async ({ page }) => {
  expect(await page.url()).toBe("https://the-internet.herokuapp.com/secure");
});
