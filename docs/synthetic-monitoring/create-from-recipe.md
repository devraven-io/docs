---
sidebar_position: 2
---

# Create test from recipe

Navigate to [Home](https://app.devraven.io/app/home) page to see a list of Synthetic test recipes that can be readily used for most common test scenarios.

## Creating from recipe

Navigate to [Home](https://app.devraven.io/app/home) page.

1. The **Synthetic test recipes** section has a list of test scenarios that can be used.
2. Click **See the test code** button to see the example code in a modal dialog.
3. Click **Create a new test** button to create a new test from the recipe.

![Synthetic test recipes](/img/test-recipe.png)

4. The **New Test** page will be displayed with the selected example script prepopulated.
5. Provide a **Name** for your test scenario.
6. Optionally, select an **Environment** which contains variables that can be referenced in your test.
7. Leave the **Enabled** toggle button ON to enable the monitor on creation.
8. Click **Submit**


:::note

Synthetic tests will have **Snooze alerts** enabled on creation. This is to prevent sending out alerts while you work on the script to ensure the test is running as expected. Once the script is working as expected, **Unsnooze alerts** for the monitor to start receiving notifications from the monitor.

:::

