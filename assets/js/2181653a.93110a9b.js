"use strict";(self.webpackChunkdevraven_docs=self.webpackChunkdevraven_docs||[]).push([[9028],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,y=p["".concat(s,".").concat(f)]||p[f]||m[f]||i;return n?r.createElement(y,a(a({ref:t},l),{},{components:n})):r.createElement(y,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},925:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={sidebar_position:6},s="Security recommendations",u={unversionedId:"monitor-configuration/security-recommendations",id:"monitor-configuration/security-recommendations",title:"Security recommendations",description:"We recommend the following general security practices when setting up DevRaven for monitoring your services. These recommendations are not just specific to DevRaven, but can apply to any monitoring services you use.",source:"@site/docs/monitor-configuration/security-recommendations.md",sourceDirName:"monitor-configuration",slug:"/monitor-configuration/security-recommendations",permalink:"/docs/monitor-configuration/security-recommendations",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Data Retention",permalink:"/docs/monitor-configuration/data-retention"},next:{title:"Integrations",permalink:"/docs/category/integrations"}},l={},m=[],p={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"security-recommendations"},"Security recommendations"),(0,i.kt)("p",null,"We recommend the following general security practices when setting up DevRaven for monitoring your services. These recommendations are not just specific to DevRaven, but can apply to any monitoring services you use."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use credentials with least privilege required for validating the functionality."),(0,i.kt)("li",{parentName:"ol"},"Use seperate test accounts or demo accounts in your environments for setting up monitors. "),(0,i.kt)("li",{parentName:"ol"},"Never use any accounts with real customer data or any other important data that requires to be secured for monitoring purposes."),(0,i.kt)("li",{parentName:"ol"},"Setup monitoring schedules that works best for your needs. Do not DDOS your services by setting up too many monitors. For example if you have 10 tests setup to run every 5 minutes from 5 locations, there will be ~50 concurrent users executing your scenario every 5 minutes.")))}f.isMDXComponent=!0}}]);