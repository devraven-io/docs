---
sidebar_position: 3
---

# Running a Monitor

Monitors can be executed manually or can be scheduled to run automatically at predefined intervals.

Web Page monitors, by default, will have a monitoring schedule attached that runs at 12AM UTC time automatically.

## How we check?

We use Google Lighthouse to analyze your web page for performance, accessibility, best practices, SEO and Progressive Web App scores.

When a run is triggered, we launch a headless Chrome browser to navigate to the specified web page and then run Lighthouse report for that loaded page. We ignore any certificate errors during the page load. If there are any SSL certificate errors with your URL, the test will not report a failure. 

## Run Manually

1. Navigate to [Web Page Monitors](https://app.devraven.io/app/webPageMonitors) page.
2. Click **Run monitor** to trigger an adhoc run for the monitor.
3. Monitor run will be executed from all selected monitoring locations for the monitor.
4. The Web Page monitoring results will be displayed automatically in few seconds.

## Change Schedule

Refer [Change Schedule](/docs/monitor-configuration/change-schedule) page for more details about changing monitoring schedules.