---
sidebar_position: 7
---

# Monitoring Locations

We support running monitors from the following locations:

* India - Mumbai (ID: asia-south1)
* Australia - Sydney (ID: australia-southeast1)
* Germany - Frankfurt (ID: europe-west3)
* US - East - N. Virginia (ID: us-east4)
* US - West - Oregon (ID: us-west1) - *default*

Depending on the monitoring locations selected for a monitor, worker nodes are randomly assigned in each of these locations for executing your test.

Each monitor is always executed on a standard, clean environment for every test instance. After the test is complete, the environment is deleted automatically. Monitors are not guaranteed to be executed on the same machine or environment for every execution.

You can also access the current location ID in your test scripts via environment variables. An environment variable `__DR_LOCATION` is set in the execution environment which points to the current location. Here is an example script reading current location:

```js

const location = process.env.__DR_LOCATION;

```