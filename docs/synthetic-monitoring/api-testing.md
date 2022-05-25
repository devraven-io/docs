---
sidebar_position: 8
---

# API Tests

We also support executing REST API tests using Playwright scripts.

Playwright's [APIRequestContext](https://playwright.dev/docs/api/class-apirequestcontext) API allows performing REST operations to the specified end point.

Following is an example test that executes HTTP requests and asserts the responses.

```js
const { request } = require('playwright');
const { expect } = require('chai');

//go to https://requestbin.net/ and create a new bin

const apiRequestContext = await request.newContext({        
    baseURL: 'http://<your bin url here>', //change this url to your bin url
    extraHTTPHeaders: {
        'Content-Type': 'application/json'
    },
    });
//GET request
const getResponse = await apiRequestContext.get('/');
expect(getResponse.status()).to.equal(200);
expect(await getResponse.text()).to.be.not.empty;

//POST request
const postResponse = await apiRequestContext.post('/', {
    data: {
        foo: 'bar',
        baz: 'qux'
    }
});
expect(postResponse.status()).to.equal(200);
expect(await postResponse.text()).to.be.not.empty;

//PUT request
const putResponse = await apiRequestContext.put('/', {
    data: {
        foo: 'bar'
    }
});
expect(putResponse.status()).to.equal(200);
expect(await putResponse.text()).to.be.not.empty;

await apiRequestContext.dispose();

```