---
sidebar_position: 1
---

# Overview

An environment is a container object for variables which can be used during test execution.

Instead of hardcoding test scripts with values that can change, such values can be externalized by leveraging Environments.

The [Environments](https://app.devraven.io/app/environments) page shows the list of available environments in your Workspace.

## Create a new Environment

1. Navigate to [Environments](https://app.devraven.io/app/environments) page
2. Click **Create new Environment** tile.
3. A new modal dialog will be displayed.
4. Provide a **Name** for the Environment.
5. Add any variables and their values to the Environment.
6. Click **Create** to create the environment

## Editing or Viewing Environment details

1. Navigate to [Environments](https://app.devraven.io/app/environments) page
2. Locate the tile for the Environment.
3. Click the ellipsis button on the top right of the tile.
4. Click **Edit Environment**.
5. A modal dialog will be displayed with the variables and their values for that Environment.

## Delete an Environment

1. Navigate to [Environments](https://app.devraven.io/app/environments) page
2. Locate the tile for the Environment you wish to delete.
3. Click the ellipsis button on the top right of the tile.
4. Click **Delete Environment**.
5. Click **Delete** on the confirm dialog.

:::danger
Deleting an environment is an irreversible operation. If an environment that is still in use by any tests is deleted, all the variables that are used in the test will resolve to `undefined` and may cause unexpected results during the test execution.
:::