---
sidebar_position: 11
---

# Available APIs

Following DevRaven APIs are available for use in your scripts during execution of API monitoring checks.

## Context APIs

Context API allows settings values that stay available throughout the API monitoring check execution. You can use context APIs to set a value in **Before Request Script** and later read the value in **After Request Script**.

### context

Allows setting and reading values from Context.

```js

//Before Request script
//set context variables. txn_id is new context variable being added.
devraven.context.txn_id = '1234'

```

```js

//After Request script
//read context variables again
console.log(devraven.context.txn_id);

//or assert with context variables
expect(devraven.response.jsonBody.id).to.equal(devraven.context.txn_id)

```

## Request APIs

`devraven.request` allows changing request object before the HTTP request is executed during a monitoring run.

### request.method

Set/change the HTTP method for the HTTP request in **Before Request Script**

```js
devraven.request.method = 'POST'
```

### request.url

Change the URL before the execution of http request in **Before Request Script**

```js
devraven.request.url = 'https://www.devraven.io';
```

### request.body
Set/change the current body for the HTTP request in  **Before Request Script**

```js
var payload = {'foo':'bar};
devraven.request.body = JSON.stringify(payload);
```

### request.headers

Replace all the headers or set a new header to existing headers in **Before Request Script**

```js
//replaces all existing header values currently available
devraven.headers = {
    'headername':'value'
}

//set a new header
devraven.headers['x-newheadername'] = 'value';
```

## Response APIs

`devraven.response` allows reading response object after the execution of HTTP request during a API monitoring run.

Use this object to create complex assertions in **After Request Script**.

### response.status

Status code of the HTTP request

```js
expect(devraven.response.status).to.equal(200);
```

### response.headers

Allows read response header values from the HTTP response.

```js
console.log(devraven.response.headers['x-powered-by'])
```

### response.body

HTTP response body as String.

```js
console.log(devraven.response.body);
```

### response.jsonBody

HTTP response body as a JSON object. An empty object will be returned if the response is not a JSON object type.

```js
console.log(devraven.response.jsonBody.name);

expect(devraven.response.jsonBody.id).to.equal(devraven.context.txn_id);
```

### response.responseTime

Time taken to execute the HTTP request in milliseconds.

```js
expect(devraven.response.responseTime).to.be.below(250); //response times less than 250ms
```

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