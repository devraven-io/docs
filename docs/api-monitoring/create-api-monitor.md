---
sidebar_position: 1
---
import ReactPlayer from 'react-player'

# Create API Monitor

API monitors execute configured HTTP requests at regular intervals and trigger alerts based on configured assertion failures or via scripted assertion failures.


## Add a new API Monitor

Navigate to [API Monitors](https://app.devraven.io/app/apiMonitors) page.

1. Click **New Monitor** button.
2. Provide a **Name** for your test e.g. Get Users
3. Optionally, select an **Environment** which contains variables that can be referenced in your test.
4. Select the HTTP **Method** for the HTTP request
5. Provide the HTTP **Request URL**.
6. Optionally, add **HTTP Headers** for the request.
7. Enter the HTTP **Request Body** for the request.
8. Provide **Before Request Script** (Javascript) for executing custom script before the HTTP request is executed.
9. Provide **After Request Script** (Javascript) for executing custom script after the HTTP request is executed.

:::info

Mustache style variables are supported in URL, Body and Header values which can resolve to variables in the configured environment. For example, if a variable named URL is defined as a variable in the selected environment, the URL value can accessed by setting up {{URL}} as Request URL.

:::

10. Configure assertions to be executed for asserting the HTTP responses for the API call.
11. Click **Submit**
12. A new API monitor is created.

