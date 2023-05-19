const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("clicking the Draw button displays the choices div", async () => {
    await driver.get("http://localhost:8000");
    const drawButton = await driver.findElement(By.id("draw"));
    await drawButton.click();
    const choicesDiv = await driver.findElement(By.id("choices"));
    const choicesDivIsDisplayed = await choicesDiv.isDisplayed();
    expect(choicesDivIsDisplayed).toBe(true);
  });

  test("clicking the 'Add to Duo' button displays the player-duo div", async () => {
    await driver.get("http://localhost:8000");
    const addToDuoButton = await driver.findElement(By.className("add-to-duo-button"));
    await addToDuoButton.click();
    const playerDuoDiv = await driver.findElement(By.id("player-duo"));
    const playerDuoDivIsDisplayed = await playerDuoDiv.isDisplayed();
    expect(playerDuoDivIsDisplayed).toBe(true);
  });
});