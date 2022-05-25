"use strict";(self.webpackChunkdevraven_docs=self.webpackChunkdevraven_docs||[]).push([[8082],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8600:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},c="Create Synthetic Test",l={unversionedId:"synthetic-monitoring/create-synthetic-test",id:"synthetic-monitoring/create-synthetic-test",title:"Create Synthetic Test",description:"A synthetic test allows running your end-to-end test scenario using real browsers from our cloud environment. We leverage Playwright framework to executing the test scenario. The scenarios can be automated adding scripts written in Javascript.",source:"@site/docs/synthetic-monitoring/create-synthetic-test.md",sourceDirName:"synthetic-monitoring",slug:"/synthetic-monitoring/create-synthetic-test",permalink:"/docs/synthetic-monitoring/create-synthetic-test",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Synthetic Monitoring",permalink:"/docs/category/synthetic-monitoring"},next:{title:"Create test from recipe",permalink:"/docs/synthetic-monitoring/create-from-recipe"}},p={},u=[{value:"Add a new Synthetic Test",id:"add-a-new-synthetic-test",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-synthetic-test"},"Create Synthetic Test"),(0,o.kt)("p",null,"A synthetic test allows running your end-to-end test scenario using real browsers from our cloud environment. We leverage Playwright framework to executing the test scenario. The scenarios can be automated adding scripts written in Javascript."),(0,o.kt)("h2",{id:"add-a-new-synthetic-test"},"Add a new Synthetic Test"),(0,o.kt)("p",null,"Navigate to ",(0,o.kt)("a",{parentName:"p",href:"https://app.devraven.io/app/syntheticTests"},"Synthetic Tests")," page."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"New Monitor")," button."),(0,o.kt)("li",{parentName:"ol"},"Provide a ",(0,o.kt)("strong",{parentName:"li"},"Name")," for your test e.g. Check WWW page title."),(0,o.kt)("li",{parentName:"ol"},"Optionally, select an ",(0,o.kt)("strong",{parentName:"li"},"Environment")," which contains variables that can be referenced in your test."),(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("strong",{parentName:"li"},"Playwright Script")," that must be executed for your test. Following is an example Playwright script.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');\nconst { expect } = require('chai');\n\nconst browser = await chromium.launch();    \nconst page = await browser.newPage();\nawait page.goto('https://www.playwright.dev');\nconst title = await page.title();\nconsole.log('Asserting page title');\nexpect(title).to.equal('Fast and reliable end-to-end testing for modern web apps | Playwright');\nbrowser.close();    \n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Leave the ",(0,o.kt)("strong",{parentName:"li"},"Enabled")," toggle button ON to enable the monitor on creation."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Submit"))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Synthetic tests will have ",(0,o.kt)("strong",{parentName:"p"},"Snooze alerts")," enabled on creation. This is to prevent sending out alerts while you work on the script to ensure the test is running as expected. Once the script is working as expected, ",(0,o.kt)("strong",{parentName:"p"},"Unsnooze alerts")," for the monitor to start receiving notifications from the monitor."))))}d.isMDXComponent=!0}}]);