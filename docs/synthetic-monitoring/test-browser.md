---
sidebar_position: 6
---

# Supported Browsers

Playwright provides Chromium (Google Chrome, Microsoft Edge), Firefox, Webkit (Apple Safari) browsers for running the test. We only support running the test in headless mode. Refer [Playwright Browsers](https://playwright.dev/docs/browsers) documentation for more details. We only support running tests against the packaged recent builds, running tests using on stable and beta channel builds is not supported. 

The browser version we use is dependent on the Playwright framework version we use in the cloud. We currenly use Playwright framework version 1.21.1 for running Synthetic tests. Refer [Playwright Releases](https://github.com/microsoft/playwright/releases) to check the specific browser versions that are packaged.

:::note

We regularly upgrade the Playwright framework version in our environments. In most cases our upgrade process should be transparent to you and should not affect the tests. We do not currently support choosing specific Playwright version environment for running tests.

:::

## Using Chromium

Here is an example to use Chromium browser

```js

const { chromium } = require('playwright');
const { expect } = require('chai');

const browser = await chromium.launch();    
const page = await browser.newPage();
await page.goto('https://www.playwright.dev');
browser.close()

```

## Using Firefox

Here is an example to use Firefox browser

```js

const { firefox } = require('playwright');
const { expect } = require('chai');

const browser = await firefox.launch();    
const page = await browser.newPage();
await page.goto('https://www.playwright.dev');
browser.close()

```

## Using Webkit

Here is an example to use Webkit browser

```js

const { webkit } = require('playwright');
const { expect } = require('chai');

const browser = await webkit.launch();    
const page = await browser.newPage();
await page.goto('https://www.playwright.dev');
browser.close()

```