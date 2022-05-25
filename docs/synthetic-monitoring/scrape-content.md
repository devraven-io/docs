---
sidebar_position: 7
---

# Scrape content on a page

Playwright scripts can be used to navigate through web pages and capture content on a page. Playwright's [Locator API](https://playwright.dev/docs/api/class-locator) allows find specific elements on a page and interact with those page elements.

The following example demonstrates navigating to Hacker News page and capturing the article titles to console logs.

```js
const { chromium } = require('playwright');
    
const browser = await chromium.launch();    
const page = await browser.newPage();
await page.goto('https://news.ycombinator.com');

const articlesLocator = page.locator('td.title a.titlelink');
const count = await articlesLocator.count();
for(let i = 0; i < count; i++) {
    console.log(await articlesLocator.nth(i).innerText());
}

browser.close();

```