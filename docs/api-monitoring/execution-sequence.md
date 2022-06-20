---
sidebar_position: 8
---

# Execution sequence

API monitors are capable of evaluating multiple expressions and executing custom scripts when a monitor is triggered for execution. Following is the flow of execution for a monitor.

**1. Environment variables are set**

    Variables defined in the environment associated to the monitor are set as environment variables for test exection.

**2. Context object is set**

    A Context object is created and initialized with attributes from the associated environment.

**3. Request Template variables are resolved**

    Any variables defined as MustacheJS templates in Request URL, Body, Headers are evaluated and replaced. `devraven.request` object is set.

**4. Before Request script execution**

    If a Before Request script is configured, the script will be executed. This script has access to environment variables accessible via `process.env.<variable name>`, `devraven.context` and `devraven.request`.

**5. HTTP Request execution**

    The HTTP request is executed based on `devraven.request` object. Upon request completion, `devraven.response` object is created.

**6. Simple assertions evaluation**

    Configured assertions are evaluated.

**7. After Request script execution**

    Any configured After Request script is executed. 


At any time during the execution of these steps, if an exception is throw, the test is marked as 'FAILED' and monitor execution terminates immediately.

:::important

If multiple assertions are configured for a monitor and one of the assertions results in a failure, the remaining assertions including After Script are skipped.

:::