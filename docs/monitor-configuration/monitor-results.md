---
sidebar_position: 5
---

# Monitoring results

When a monitor is configured to run from multiple monitoring locations, the results from all the locations are evaluated to determine the final outcome.

Following are the statuses for a monitoring result and the hierarchy for determining the final result.

1. IN_PROGRESS
2. SKIPPED
3. PASSED
4. WARN
5. FAILED

For example: Assume a monitor is configured to run from US East, US East and Europe locations. When a run is triggered, a unique Run Id is created with the default status IN_PROGRESS and monitor runs from all locations.

The results from all the monitors are collected asynchronously and based on the hierarchy, the final result for the run is determined.

If US East monitor reports FAILED and US West monitor reports PASSED, since the FAILED is at the top of the hierarchy the overall result is marked as FAILED for the test. And later if the result from Europe is in WARN state, the previous overall FAILED result will not be overwritten.

:::caution

Depending on the order of receiving the results and their status from the monitoring locations, it can take upto a minute to determine the final status. The final status may be marked as skipped, if we can't determine the outcome from all the monitoring locations.

:::