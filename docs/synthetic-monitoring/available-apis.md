---
sidebar_position: 14
---

# Available APIs

Following DevRaven APIs are available for use in your scripts during execution of Synthetic tests.

## State Persistence APIs

### persistValue(key, value)

Persists provided value to public ephemeral storage for retrieval later in any dependent tests.

**key** `String` - Key must be at least 10 characters in length up to 36 characters. We recommend using an UUID as a key.

**value** `String` - Value must not be blank or null, String type and can be up to 200 characters in length.


```js
//key must be between 10-36 characters, UUID is recommended
//value must be less than 200 characters
await devraven.persistValue('MY_UNIQUE_KEY_HERE_123', 'value to be persisted');

```

:::danger
Values persisted are purged at regular hourly intervals. Values stored are not secured and accessible publicly using the key. Do not persist credentials or any sensitive information to this storage.

:::

### retrieveValue(key)

Retrieves a previously persisted value using the provided key.

Returns `null` if a value is not set for the provided key.

```js
const value = await devraven.retrieveValue('MY_UNIQUE_KEY_HERE_123')

```

### deleteValue(key)

Deletes a previously persisted value from Storage.

```js
//if not explictly deleted, the value will be purged after ~1 hr interval
await devraven.deleteValue('MY_UNIQUE_KEY_HERE_123')

```