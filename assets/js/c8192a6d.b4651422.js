"use strict";(self.webpackChunkdevraven_docs=self.webpackChunkdevraven_docs||[]).push([[7122],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},634:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:1},c="Create SSL Monitor",s={unversionedId:"ssl-monitoring/create-ssl-monitor",id:"ssl-monitoring/create-ssl-monitor",title:"Create SSL Monitor",description:"An SSL monitor allows you to receive warning notifications before expiry of an SSL certificate or receive failure alerts on SSL certificate expiry for the configured domain.",source:"@site/docs/ssl-monitoring/create-ssl-monitor.md",sourceDirName:"ssl-monitoring",slug:"/ssl-monitoring/create-ssl-monitor",permalink:"/docs/ssl-monitoring/create-ssl-monitor",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SSL Monitoring",permalink:"/docs/category/ssl-monitoring"},next:{title:"Edit SSL Monitor",permalink:"/docs/ssl-monitoring/edit-ssl-monitor"}},p={},m=[{value:"Add a new SSL Monitor",id:"add-a-new-ssl-monitor",level:2}],u={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-ssl-monitor"},"Create SSL Monitor"),(0,i.kt)("p",null,"An SSL monitor allows you to receive warning notifications before expiry of an SSL certificate or receive failure alerts on SSL certificate expiry for the configured domain."),(0,i.kt)("h2",{id:"add-a-new-ssl-monitor"},"Add a new SSL Monitor"),(0,i.kt)("p",null,"Navigate to ",(0,i.kt)("a",{parentName:"p",href:"https://app.devraven.io/app/sslMonitors"},"SSL Monitors")," page."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"New Monitor")," button."),(0,i.kt)("li",{parentName:"ol"},"Provide ",(0,i.kt)("strong",{parentName:"li"},"Domain Name")," you would like to monitor e.g: example.com."),(0,i.kt)("li",{parentName:"ol"},"Select appropriate warning interval for receiving Warning notifications before certificate expiry."),(0,i.kt)("li",{parentName:"ol"},"Leave the Status enabled to immediately enable the monitor on creation."),(0,i.kt)("li",{parentName:"ol"},"Optionally, select multiple monitoring locations for checking the SSL certificates for your domain from multiple geolocations.")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If your service has geolocation specific end points which serve your geographically distributed customers, you may choose to monitor from multiple locations to ensure certificates deployed to all the end points are valid. But if you have one end point for serving all your customers, you may choose to monitor from one location."))),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Submit")),(0,i.kt)("li",{parentName:"ol"},"A new SSL monitor is created for your domain.")))}f.isMDXComponent=!0}}]);