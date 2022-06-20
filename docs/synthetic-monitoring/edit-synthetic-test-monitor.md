---
sidebar_position: 3
---

# Edit Synthetic Test

A previously configured Synthetic Test can be edited from **Edit Test** page. 

## Editing a test

1. Navigate to [Synthetic Tests](https://app.devraven.io/app/syntheticTests) page and click **Edit test** button to edit a test.
2. Change the test configuration as required for the test.
3. Click **Save changes**.

## Change Status

Toggle **Status** switch to OFF to disable the Synthetic Test. Toggle to ON for enabling the test.

:::caution

Disabling a test will automatically disable the associated monitoring schedule for the test. Similarly, enabling a test will automatically enable the monitoring schedule for the test.

:::

## Notification Settings

Refer [Notification Settings](/docs/monitor-configuration/notification-settings) page for more details about changing notification settings for Synthetic tests.

## Change Monitoring Schedule 

Refer [Change Schedule](/docs/monitor-configuration/change-schedule) section for more details about changing monitoring schedule.

## Delete Test

To delete a test:

1. Navigate to [Synthetic Tests](https://app.devraven.io/app/syntheticTests) page and click **Edit test** button to edit a test.
2. Scroll to the bottom of the page.
3. Click **Delete Test** button
4. A confirmation dialog will be displayed.
5. Click **Delete** to proceed with deleting the test.

:::danger

Test deletion is an irreversible operation. Deleting a test will also delete any associated historical monitoring data. To temporarily stop monitoring, we recommend disabling the test instead of deleting the test.

:::