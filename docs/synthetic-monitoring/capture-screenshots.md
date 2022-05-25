---
sidebar_position: 7
---

# Capturing Screenshots

We support capturing screenshots while running the tests. We support a capture of up to 10 screenshots per test. Any screenshots captured during the test execution are automatically saved and shown in the test results page.

Screenshots captured must be in PNG or JPG format only.

## Capture page screenshot

Capture screenshot of a browser view for a page

```js

await page.screenshot({ path: 'page.png' });

```

## Capture full page screenshot

Capture full screenshot including scrollable page content for a page.

```js

await page.screenshot({ path: 'screenshot.png', fullPage: true });

```

## Capture an element's screenshot

Capture screenshot of a specific element on a page.

```js

await page.locator('.sidebar').screenshot({ path: 'sidebar.png' });

```