---
sidebar_position: 6
---

# Context variables

**Context variables** are available and be mutated during API monitor execution. Context variables stays available during the entire execution period.

When a API monitor execution starts, the **Context** object is created and initialized with variables in the associated environment.

For example, if an associated environment has two variables defined `username` and `password`. When the execution starts, the Context object is initialized with two attributes `username` and `password`. Context values can be read, updated or set as below in Before or After Request scripts.

```js

//read existing context variables as below
const username = devraven.context.username;
const password = devraven.context.password;

//set new context variables as below
devraven.context.foo = 'bar';

```