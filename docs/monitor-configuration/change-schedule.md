---
sidebar_position: 3
---

# Change Schedule

Monitors can be setup to run automatically at configured scheduled intervals. To change the monitoring schedule:

1. Navigate to **Edit Monitor** page for the monitor.
2. Click **Monitoring Schedule** tab.
3. Change the **Timezone** for the monitor. By default, the timezone is set to UTC.
4. Change the Run interval.
    - **Day based** allows running the monitor once per day on configured days.
    - **Hour based** allows running the monitor every x hours.
    - **Minute based** allows running the monitor every x minutes. 5 minutes is the minimum interval supported.
5. Optionally, toggle **Schedule Status** to OFF for disabling scheduled runs for the monitor.
6. Click **Save changes** to save the configuration changes.

:::caution

**Schedule Status** is dependent on Monitor's status. Disabling a monitor will automatically disable the associated **Schedule Status** for the monitor. Similarly, enabling a monitor will automatically enable the monitoring **Schedule Status** for the monitor.

For example: If **Schedule Status** is disabled for a monitor. And then the monitor's status is disabled and re-enabled, the **Schedule Status** will also be automatically enabled.

:::