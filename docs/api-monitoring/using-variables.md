---
sidebar_position: 5
---

# Using Environment Variables

API Monitors can leverage variables defined in Environments instead of hardcoding values in your test. Any variables defined in the associated environment can be accessed in Before Request, After Request scripts. Variables defined as MustacheJS templates in Request URL, headers, body can also be resolved.

# Using template variables for HTTP requests
Variables defined in an associated environment can be used directly in HTTP Request URL, headers or body as MustacheJS templates in the format **{{variable_name}}**.

![Template variables](/img/api-mustache-templates.png)

# Using variables in scripts
For example if you are adding a test which performs login to an end point, the username, password and the url can be externalized to an Environment object. The variables defined in the Envrionment are available as environment variables during the test execution. The variables can then be accessed as `process.env.<variable name>` in the Before Request and After Request scripts.

Here is an example Before Request snippet using `process.env.username` and `process.env.password` variables from the associated environment.

```js

const username = process.env.username;
const password = process.env.password;

const payload = {
    username,
    password
};

devraven.request.url = "<your url here>";
devraven.request.body = JSON.stringify(payload);
devraven.request.headers = {
    "content-type":"application/json",
    "foo":"bar"
}

```
