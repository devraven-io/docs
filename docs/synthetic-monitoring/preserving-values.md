---
sidebar_position: 13
---

# Preserving state values

We recommend that the monitors not have dependencies on any state values. However, there can be scenarios where a test may have dependency on a value previously created in another monitor.

For example, assume you have two monitors: **Create Ticket** and **Approve Ticket**. **Create Ticket** creates a record as user1, then certain process gets executed for few minutes and then another user must approve the previously created ticket.

In order to monitor this scenario, the previously created ticket number is required for **Approve Ticket** monitor. 

To support scenarios like this, we provide a mechanism to persist simple String key-value pairs and ability to retrieve them. Following are few considerations to keep in mind.

* Values persisted are ephemeral in nature. The values persisted are purged at regular intervals after a 1 hour interval.
* Values are not secured and any persisted values can be accessed by the saved key. Do not persist any credentials or values that must be secured.
* Key must be at least 10 characters in length up to 36 characters. We recommend using an UUID as key name. For example, generate a UUID and use the same across your tests.
* Value must not be blank or null, String type and can be up to 200 characters in length.
* If a test is executed from multiple locations, each location may overwrite the stored value. If your tests persist state, make sure they either use unique key names per location. Location name can be accessed via `process.env.__DR_LOCATION` in scripts.

Here are the methods available that could be invoked in your Playwright monitoring script.

## Persist Value

```js

//key must be between 10-36 characters, UUID is recommended
//value must be less than 200 characters
await devraven.persistValue('MY_UNIQUE_KEY_HERE_123', 'value to be persisted'); //store to non-secure temporary location

```

## Retrieve Vaue

```js
//retrieve a previously persisted value by key
const value = await devraven.retrieveValue('MY_UNIQUE_KEY_HERE_123')

```

## Delete Value

```js
//delete a previously persisted value by key
//if not explictly deleted, the value will be deleted after 1 hr interval
await devraven.deleteValue('MY_UNIQUE_KEY_HERE_123')

```