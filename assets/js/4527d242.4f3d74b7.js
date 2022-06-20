"use strict";(self.webpackChunkdevraven_docs=self.webpackChunkdevraven_docs||[]).push([[3371],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8545:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={sidebar_position:3},u="Running a Monitor",c={unversionedId:"api-monitoring/running-monitor",id:"api-monitoring/running-monitor",title:"Running a Monitor",description:"Monitors can be executed manually or can be scheduled to run automatically at predefined intervals.",source:"@site/docs/api-monitoring/running-monitor.md",sourceDirName:"api-monitoring",slug:"/api-monitoring/running-monitor",permalink:"/docs/api-monitoring/running-monitor",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Edit an API Monitor",permalink:"/docs/api-monitoring/edit-api-monitor"},next:{title:"API Monitoring Results",permalink:"/docs/api-monitoring/api-monitor-results"}},p={},s=[{value:"Run Manually",id:"run-manually",level:2},{value:"Change Schedule",id:"change-schedule",level:2}],m={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"running-a-monitor"},"Running a Monitor"),(0,i.kt)("p",null,"Monitors can be executed manually or can be scheduled to run automatically at predefined intervals."),(0,i.kt)("p",null,"API monitors, by default, will have a monitoring schedule attached that runs at 12AM UTC time automatically."),(0,i.kt)("h2",{id:"run-manually"},"Run Manually"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to ",(0,i.kt)("a",{parentName:"li",href:"https://app.devraven.io/app/apiMonitors"},"API Monitors")," page."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Run monitor")," to trigger an adhoc run for the monitor."),(0,i.kt)("li",{parentName:"ol"},"Monitor run will be executed from all selected monitoring locations for the monitor."),(0,i.kt)("li",{parentName:"ol"},"The API monitoring results will be displayed automatically in few seconds.")),(0,i.kt)("h2",{id:"change-schedule"},"Change Schedule"),(0,i.kt)("p",null,"Refer ",(0,i.kt)("a",{parentName:"p",href:"/docs/monitor-configuration/change-schedule"},"Change Schedule")," page for more details about changing monitoring schedules."))}d.isMDXComponent=!0}}]);