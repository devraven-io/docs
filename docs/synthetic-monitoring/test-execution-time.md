---
sidebar_position: 11
---

# Test Execution Time

The maximum allocated runtime for each Synthetic test is **2 minutes**. Your test must complete within 2 minutes for capture the test result.

Test script will be automatically killed after a maximum runtime of 2 minutes and the test will be marked as **SKIPPED**.

## Playwright Timeouts

Playwright framework also has default timeouts and wait mechanisms for various methods. For example: [page.waitForNavigation](https://playwright.dev/docs/api/class-page#page-wait-for-navigation) method has a default timeout of 30 seconds.

Refer [Playwright's API documentation](https://playwright.dev/docs/api/class-playwright) for default timeouts for specific methods.