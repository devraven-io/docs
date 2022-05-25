---
sidebar_position: 12
---

# Using Environment Variables

Synthetic tests can leverage variables defined in Environments instead of hardcoding values in your test. Any variables defined in the associated environment can be accessed in the test script.

![Associate Environment to a Test](/img/associate-environment.png)

For example if you are adding a test which performs login to an end point, the username, password and the url can be externalized to an Environment object. The variables defined in the Envrionment are available as environment variables during the test execution. The variables can then be accessed as `process.env.<variable name>` in your test.

Here is an example snippet using `process.env.username` and `process.env.password` variables from the associated environment.

```js
const { chromium } = require('playwright');
const { expect } = require('chai');

const browser = await chromium.launch();    
const page = await browser.newPage();
await page.goto('https://www.example.com/login', { waitUntil:'networkidle' });

//fill username and password on the form
await page.fill('[name=username]', process.env.username); //use environment variables

await page.fill('[name=password]', process.env.password);

await page.locator('.login-box >> text="Log In"').click();

await page.waitForResponse('**/api/Login');
expect(await page.locator('div.text-danger >> text = Login Failed!').isVisible()).to.be.true;
browser.close();
```