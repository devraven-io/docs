---
sidebar_position: 1
---

# Overview

Functions are reusable code blocks that can be used with one or more monitor scripts to perform a particular task.

Functions help prevent duplication of code across multiple monitors. For example, you can create a function for login to your application and invoke that function from all your monitors without duplicating the code in your scripts.

Functions can be invoked from your `Playwright Script` in Synthetic Tests, `Before Request Script` or `After Request Script` in API monitors.

The [Functions](https://app.devraven.io/app/functions) page shows the list of available functions in your Workspace.

## Create a new Function

1. Navigate to [Functions](https://app.devraven.io/app/functions) page
2. Click **Create new Function** tile.
3. You will be navigated to **New Function** page.
4. Provide a **Name** for the Function.
5. Provide the **Function Script** for the Function. Following is an example script.

We recommend wrapping your script blocks as a function so they can be invoked in your monitoring scripts as needed. Use `async` keyword to declare async functions.

```
function getCredentials() {
    const Base64 = require('crypto-js/enc-base64');
    const Utf8 = require('crypto-js/enc-utf8');

    const username = 'foo';
    const password = 'bar';

    return Base64.stringify(Utf8.parse(`${username}:${password}`))
}
```

:::warning
If your Function's script block is not wrapped as a function or added as an immediately invoked function, the Function's script block gets invoked before the execution of your monitoring scripts.
:::

6. Click **Save** to create the Function.

## Editing or Viewing Function Details

1. Navigate to [Functions](https://app.devraven.io/app/functions) page
2. Click the tile for the Function to edit.
5. **Edit Function** page will be displayed.

## Delete a Function

1. Navigate to [Functions](https://app.devraven.io/app/functions) page
2. Locate the tile for the Function you wish to delete.
3. Click the ellipsis button on the top right of the tile.
4. Click **Delete Function**.
5. Click **Delete** on the confirm dialog.

:::danger
Deleting a Function is an irreversible operation. Once a Function is deleted, any monitors that still reference or use the functions
:::

