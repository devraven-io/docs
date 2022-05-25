---
sidebar_position: 3
---

# Running a Monitor

Monitors can be executed manually or can be scheduled to run automatically at predefined intervals.

Web Page monitors, by default, will have a monitoring schedule attached that runs at 12AM UTC time automatically.

## How we check?

When a monitor is executed, our backend system automatically spins up a process to execute Google Lighthouse run against the configured Web Page Url. The Web page is loaded to ignore any certificate errors for the Lighthouse run.

## Run Manually

1. Navigate to [Web Page Monitors](https://app.devraven.io/app/webPageMonitors) page.
2. Click **Run monitor** to trigger an adhoc run for the monitor.
3. Monitor run will be executed from all selected monitoring locations for the monitor.
4. The Web Page monitoring results will be displayed automatically in few seconds.

## Change Schedule

Refer [Change Schedule](/docs/monitor-configuration/change-schedule) page for more details about changing monitoring schedules.