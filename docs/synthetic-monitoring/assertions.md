---
sidebar_position: 9
---

# Test assertions

We support performing assertions using [Jest's expect](https://jestjs.io/docs/expect) framework or [chai.js](https://www.chaijs.com/) framework.

Following are the versions we use.

chai - v4.3.6
expect - v28.1.0

## Using Jest's expect

```js

const { chromium } = require('playwright');
const { expect } = require('expect');

const browser = await chromium.launch();    
const page = await browser.newPage();
await page.goto('https://www.playwright.dev');
const title = await page.title();
console.log('Asserting page title');
expect(title).toBe('Fast and reliable end-to-end testing for modern web apps | Playwright');
browser.close();       
```

:::caution

Starting with Jest v28, expect object must be created via named import as below. Click [here](https://jestjs.io/docs/upgrading-to-jest28#expect) for more details.

```js
const { expect } = require('expect');
```

:::

## Using chai expect

```js
const { chromium } = require('playwright');
const { expect } = require('chai');

const browser = await chromium.launch();    
const page = await browser.newPage();
await page.goto('https://www.playwright.dev');
const title = await page.title();
console.log('Asserting page title');
expect(title).to.equal('Fast and reliable end-to-end testing for modern web apps | Playwright');
browser.close();    
```