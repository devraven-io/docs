---
sidebar_position: 2
---

# Using Functions

Functions created in a Workspace can be invoked from scripts in Synthetic Test checks and API Monitoring checks.

## Synthetic Tests

The `Edit Test` page for a Synthetic Test allows including Functions that can invoked during monitoring test execution.

The **Include Functions** section on the page allows for searching an existing Function or creating a new Function that can be included.

Selected Functions will be included inline before your Playwright script during the monitor's execution. Any such included functions can be invoked from your Playwright script.

Here is an example Function.

```
async function launchPage(browser) {    
    const page = await browser.newPage();
    await page.goto('https://www.playwright.dev');
    return await page.title();       
}
```
By including this Function in your synthetic test, the `launchPage()` method can be invoked from your Playwright script.

![Synthetic Test using a Function](/img/function-synthetic.png)

## API Monitors

The `Edit Test` page for an API monitor allows including Functions that can be invoked from `Before Request Script` or `After Request Script` during the execution of the API check.

The **Include Functions** section on the page allows for searching an existing Function or creating a new Function that can be included.

Selected Functions will be included inline before your `Before Request Script` and `After Request Script` script during the monitor's execution. Any such included functions can be invoked from your scripts.

Following is an example usage.

![API Monitor using a Function](/img/function-api.png)

