---
sidebar_position: 3
---

# Running a Monitor

Monitors can be executed manually or can be scheduled to run automatically at predefined intervals.

SSL monitors, by default, will have a monitoring schedule attached that runs at 12AM UTC time automatically.

## How we check?

When a monitor is executed, our backend system automatically spins up a process to check the SSL certificate for the configured domain.

The process then performs a **HTTP HEAD** request to **port 443** for the configured domain name for the monitor. Once a connection is established, the associated SSL certificates are retrieved. The certificate details are then evaluated against the configuration to send appropriate alerts.

## Run Manually

1. Navigate to [SSL Monitors](https://app.devraven.io/app/sslMonitors) page.
2. Click **Run monitor** to trigger an adhoc run for the monitor.
3. Monitor run will be executed from all selected monitoring locations for the monitor.
4. The SSL monitoring results will be displayed automatically in few seconds.

## Change Schedule

Refer [Change Schedule](/docs/monitor-configuration/change-schedule) page for more details about changing monitoring schedules.