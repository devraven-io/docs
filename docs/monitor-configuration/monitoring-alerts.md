---
sidebar_position: 3
---

# Monitoring Alerts

Monitors can send alerts for `FAILURES`, `WARNINGS` and `RECOVERY` scenarios. In order to cut down the noise due to repeat failures for monitors, we do not send alerts for all failure scenarios. The rules below apply to Email, Slack, Teams notifications and all other monitor related integrations.

## Alerting Rules
In general, monitoring alerts are sent every day for **two** consecutive failing runs once a monitor's state changes from `PASSED` state. After alerts are sent for two consecutive alerts are sent, no alerts will be sent for any following runs until the monitor recovers from failure or until next day at UTC time.


Here is an example for a monitor configured to run every 15 minutes:

Jan 1st, 2022 09:00AM UTC - Run 1 - `PASSED`

Jan 1st, 2022 09:15AM UTC - Run 2 - `FAILED` (First failure alert will be sent)

Jan 1st, 2022 09:30AM UTC - Run 3 - `FAILED` (Second failure alert will be sent)

Jan 1st, 2022 09:45AM UTC - Run 4 - `FAILED` (No alerts are sent for this monitor)

Jan 1st, 2022 10:00AM UTC - Run 5 - `FAILED` (No alerts are sent for this monitor)

.
.
.

Jan 1st, 2022 11:00AM UTC - Run 10 - `PASSED` (A recovery email is sent)

Jan 1st, 2022 11:15AM UTC - Run 11 - `PASSED` (No alerts are sent for this monitor)

Jan 1st, 2022 11:30AM UTC - Run 12 - `FAILED` (First failure alert will be sent)

Jan 1st, 2022 11:45AM UTC - Run 13 - `FAILED` (Second failure alert will be sent)

Jan 1st, 2022 12:00PM UTC - Run 14 - `FAILED` (No alerts are sent for this monitor)

.
.

Jan 1st, 2022 03:00PM UTC - Run 26 - `FAILED` (No alerts are sent for this monitor)

Jan 1st, 2022 03:15PM UTC - Run 27 - `FAILED` (No alerts are sent for this monitor)

.
.
.

Jan 1st, 2022 03:00PM UTC - Run 26 - `FAILED` (No alerts are sent for this monitor)

Jan 1st, 2022 03:15PM UTC - Run 27 - `FAILED` (No alerts are sent for this monitor)

.
.

Jan 1st, 2022 11:45PM UTC - Run 61 - `FAILED` (No alerts are sent for this monitor)

Jan 2nd, 2022 12:00AM UTC - Run 62 - `FAILED` (First failure alert will be sent because the day has changed)

Jan 2nd, 2022 12:15AM UTC - Run 63 - `FAILED` (Second failure alert will be sent)

:::danger
No alerts will be sent for monitors with **Snooze alerts** option turned on. 
:::

## Retry on first failure

All monitors support retry mechanism to prevent false positive failure notifications due to flapping tests. Monitors may report failures due to varieties of reasons not limited to intermittent timeouts, application load conditions, test infrastructure issues etc. Turning on **Retry on first failure** for your monitor, triggers a retry immediately to confirm the failure.

Here is an example for a monitor configured to run every 15 minutes with **Retry on first failure** enabled.

Jan 1st, 2022 09:00AM UTC - Run 1 - `PASSED`

Jan 1st, 2022 09:15AM UTC - Run 2 - `FAILED` (Triggers a retry and no alert will be sent)

Jan 1st, 2022 09:15:15AM UTC - Run 3 - `FAILED` (First failure alert will be sent)

Jan 1st, 2022 09:30AM UTC - Run 4 - `FAILED` (Second failure alert will be sent)

Jan 1st, 2022 09:45AM UTC - Run 5 - `FAILED` (No alerts are sent for this monitor)

Jan 1st, 2022 10:00AM UTC - Run 6 - `FAILED` (No alerts are sent for this monitor)

.
.
.

Jan 1st, 2022 11:00AM UTC - Run 10 - `PASSED` (A recovery email is sent)

Jan 1st, 2022 11:15AM UTC - Run 11 - `PASSED` (No alerts are sent for this monitor)

Jan 1st, 2022 11:30AM UTC - Run 12 - `FAILED` (Triggers a retry and no alert will be sent)

Jan 1st, 2022 11:30:15AM UTC - Run 13 - `FAILED` (First failure alert will be sent)

Jan 1st, 2022 11:45AM UTC - Run 14 - `FAILED` (Second failure alert will be sent)

Jan 1st, 2022 12:00PM UTC - Run 15 - `FAILED` (No alerts are sent for this monitor)

:::info

Runs triggered due to retry configuration will also be counted against your Workspace's monitoring quotas.

:::