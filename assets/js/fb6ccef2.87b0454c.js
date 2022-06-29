"use strict";(self.webpackChunkdevraven_docs=self.webpackChunkdevraven_docs||[]).push([[3704],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),v=u(r),d=a,m=v["".concat(l,".").concat(d)]||v[d]||p[d]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=v;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},7995:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={sidebar_position:10},l="Preserving state values",u={unversionedId:"api-monitoring/preserving-values",id:"api-monitoring/preserving-values",title:"Preserving state values",description:"We recommend that the monitors not have dependencies on any state values. However, there can be scenarios where a test may have dependency on a value previously created in another monitor.",source:"@site/docs/api-monitoring/preserving-values.md",sourceDirName:"api-monitoring",slug:"/api-monitoring/preserving-values",permalink:"/docs/api-monitoring/preserving-values",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Third party libraries",permalink:"/docs/api-monitoring/third-party-libraries"},next:{title:"SSL Monitoring",permalink:"/docs/category/ssl-monitoring"}},c={},p=[{value:"Persist Value",id:"persist-value",level:2},{value:"Retrieve Vaue",id:"retrieve-vaue",level:2},{value:"Delete Value",id:"delete-value",level:2}],v={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"preserving-state-values"},"Preserving state values"),(0,i.kt)("p",null,"We recommend that the monitors not have dependencies on any state values. However, there can be scenarios where a test may have dependency on a value previously created in another monitor."),(0,i.kt)("p",null,"For example, assume you have two monitors: ",(0,i.kt)("strong",{parentName:"p"},"Create Ticket")," and ",(0,i.kt)("strong",{parentName:"p"},"Approve Ticket"),". ",(0,i.kt)("strong",{parentName:"p"},"Create Ticket")," creates a record as user1, then certain process gets executed for few minutes and then another user must approve the previously created ticket."),(0,i.kt)("p",null,"In order to monitor this scenario, the previously created ticket number is required for ",(0,i.kt)("strong",{parentName:"p"},"Approve Ticket")," monitor. "),(0,i.kt)("p",null,"To support scenarios like this, we provide a mechanism to persist simple String key-value pairs and ability to retrieve them. Following are few considerations to keep in mind."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Values persisted are ephemeral in nature. The values persisted are purged at regular intervals after a 1 hour interval."),(0,i.kt)("li",{parentName:"ul"},"Values are not secured and any persisted values can be accessed by the saved key. Do not persist any credentials or values that must be secured."),(0,i.kt)("li",{parentName:"ul"},"Key must be at least 10 characters in length up to 36 characters. We recommend using an UUID as key name. For example, generate a UUID and use the same across your tests."),(0,i.kt)("li",{parentName:"ul"},"Value must not be blank or null, String type and can be up to 200 characters in length."),(0,i.kt)("li",{parentName:"ul"},"If a test is executed from multiple locations, each location may overwrite the stored value. If your tests persist state, make sure they either use unique key names per location. Location name can be accessed via ",(0,i.kt)("inlineCode",{parentName:"li"},"process.env.__DR_LOCATION")," in scripts.")),(0,i.kt)("p",null,"Here are the methods available that could be invoked from Before Request or After Request scripts:"),(0,i.kt)("h2",{id:"persist-value"},"Persist Value"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"\n//key must be between 10-36 characters, UUID is recommended\n//value must be less than 200 characters\nawait devraven.persistValue('MY_UNIQUE_KEY_HERE_123', 'value to be persisted'); //store to non-secure temporary location\n\n")),(0,i.kt)("h2",{id:"retrieve-vaue"},"Retrieve Vaue"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"//retrieve a previously persisted value by key\nconst value = await devraven.retrieveValue('MY_UNIQUE_KEY_HERE_123')\n\n")),(0,i.kt)("h2",{id:"delete-value"},"Delete Value"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"//delete a previously persisted value by key\n//if not explictly deleted, the value will be deleted after 1 hr interval\nawait devraven.deleteValue('MY_UNIQUE_KEY_HERE_123')\n\n")))}d.isMDXComponent=!0}}]);