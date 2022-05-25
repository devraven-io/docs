---
sidebar_position: 2
---

# Edit SSL Monitor

A previously configured SSL monitor can be edited from **Edit Monitor** page. 

## Edit configuration

1. Navigate to [SSL Monitors](https://app.devraven.io/app/sslMonitors) page and click **Edit Monitor** button to edit a monitor.
2. You may change the **Domain Name** and **Warn Interval** for the monitor.
3. Click **Save changes**.

## Change Status

Toggle **Status** switch to OFF to disable SSL monitor. Toggle to ON for enabling a monitor.

:::caution

Disabling a monitor will automatically disable the associated monitoring schedule for the monitor. Similarly, enabling a monitor will automatically enable the monitoring schedule for the monitor.

:::

## Notification Settings

Refer [Notification Settings](/docs/monitor-configuration/notification-settings) page for more details about changing notification settings for SSL monitors.

## Change Monitoring Schedule 

Refer [Change Schedule](/docs/monitor-configuration/change-schedule) section for more details about changing monitoring schedule.

## Delete Monitor

To delete a monitor:

1. Navigate to [SSL Monitors](https://app.devraven.io/app/sslMonitors) page and click **Edit Monitor** button to edit a monitor.
2. Scroll to the bottom of the page.
3. Click **Delete Monitor** button
4. A confirmation dialog will be displayed.
5. Click **Delete** to proceed with deleting the monitor.

:::danger

Monitor deletion is an irreversible operation. Deleting a monitor will also delete any historical monitoring data associated with the monitor. To temporarily stop monitoring, we recommend disabling the monitor instead of deleting the monitor.

:::