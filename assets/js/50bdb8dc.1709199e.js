"use strict";(self.webpackChunkdevraven_docs=self.webpackChunkdevraven_docs||[]).push([[1168],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,d=p["".concat(l,".").concat(f)]||p[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3866:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:4},l="Monitoring results",u={unversionedId:"monitor-configuration/monitor-results",id:"monitor-configuration/monitor-results",title:"Monitoring results",description:"When a monitor is configured to run from multiple monitoring locations, the results from all the locations are evaluated to determine the final outcome.",source:"@site/docs/monitor-configuration/monitor-results.md",sourceDirName:"monitor-configuration",slug:"/monitor-configuration/monitor-results",permalink:"/docs/monitor-configuration/monitor-results",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Snooze Alerts",permalink:"/docs/monitor-configuration/snooze-alerts"},next:{title:"Settings",permalink:"/docs/category/settings"}},c={},m=[],p={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"monitoring-results"},"Monitoring results"),(0,i.kt)("p",null,"When a monitor is configured to run from multiple monitoring locations, the results from all the locations are evaluated to determine the final outcome."),(0,i.kt)("p",null,"Following are the statuses for a monitoring result and the hierarchy for determining the final result."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"IN_PROGRESS"),(0,i.kt)("li",{parentName:"ol"},"SKIPPED"),(0,i.kt)("li",{parentName:"ol"},"PASSED"),(0,i.kt)("li",{parentName:"ol"},"WARN"),(0,i.kt)("li",{parentName:"ol"},"FAILED")),(0,i.kt)("p",null,"For example: Assume a monitor is configured to run from US East, US East and Europe locations. When a run is triggered, a unique Run Id is created with the default status IN_PROGRESS and monitor runs from all locations."),(0,i.kt)("p",null,"The results from all the monitors are collected asynchronously and based on the hierarchy, the final result for the run is determined."),(0,i.kt)("p",null,"If US East monitor reports FAILED and US West monitor reports PASSED, since the FAILED is at the top of the hierarchy the overall result is marked as FAILED for the test. And later if the result from Europe is in WARN state, the previous overall FAILED result will not be overwritten."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Depending on the order of receiving the results and their status from the monitoring locations, it can take upto a minute to determine the final status. The final status may be marked as skipped, if we can't determine the outcome from all the monitoring locations."))))}f.isMDXComponent=!0}}]);