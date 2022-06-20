---
sidebar_position: 7
---

# Monitoring Assertions

Assertions are required to validate if your API is working as expected. Without any assertions, your API monitor will not report any failures. Assertions can be setup with **simple configuration** or even complex assertions can be also be scripted in **After Request** scripts.

**Simple configuration based assertions**

No code assertions can be added to API monitors as shown in the screenshot below.

![Simple Assertions](/img/simple-assertions.png)

Assertions based on HTTP Response Status Code, Response Time, Headers, String body or JSON body can be added.

:::info

We support JSONPath expressions for retrieving values from JSON response. The assertion always return a value matching the first element for the provided JSONPath Expression. For example, if your JSONPath expression results in returning an array, only the first element is used for evaluting the assertion.

For complex assertions, we recommend leveraging After Request scrips for assertions.

:::

**Scripted assertions**
Complex assertions can be scripted and can be added to **After Request** scripts. Chai.js library can be used for adding assertions.

Following is an example:


```JS

const { expect } = require('chai');

const body = devraven.response.jsonBody;
expect(body).to.be.an('array')
expect(body).to.have.lengthOf.above(0);

//devraven.response.status -- returns status code
//devraven.response.headers -- returns headers
//devraven.response.responseTime - returns time taken to complete the http request
//devraven.response.body - Response body in string format
//devraven.response.jsonBody - Response body as JSON Object if the payload is JSON format or will be {}

```