---
sidebar_position: 6
---

# Context variables

**Context variables** are available and be mutated during API monitor execution. Context variables stays available during the entire execution period.

When a API monitor execution starts, the **Context** object is created as an empty object and attributes can be set to context in Before Request script and those attributes will be available for any assertions in the After Request scripts.

Here are example snippets of Before Request and After Request scripts leveraging Context.

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