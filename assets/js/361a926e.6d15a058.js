"use strict";(self.webpackChunkdevraven_docs=self.webpackChunkdevraven_docs||[]).push([[4543],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,u=d["".concat(c,".").concat(g)]||d[g]||m[g]||a;return n?o.createElement(u,r(r({ref:t},s),{},{components:n})):o.createElement(u,r({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1410:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],l={sidebar_position:2},c="Edit Web Page Monitor",p={unversionedId:"web-page-monitoring/edit-webpage-monitor",id:"web-page-monitoring/edit-webpage-monitor",title:"Edit Web Page Monitor",description:"A previously configured Web Page monitor can be edited from Edit Monitor page.",source:"@site/docs/web-page-monitoring/edit-webpage-monitor.md",sourceDirName:"web-page-monitoring",slug:"/web-page-monitoring/edit-webpage-monitor",permalink:"/docs/web-page-monitoring/edit-webpage-monitor",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Create Web Page Monitor",permalink:"/docs/web-page-monitoring/create-webpage-monitor"},next:{title:"Running a Monitor",permalink:"/docs/web-page-monitoring/running-monitor"}},s={},m=[{value:"Edit configuration",id:"edit-configuration",level:2},{value:"Change Status",id:"change-status",level:2},{value:"Notification Settings",id:"notification-settings",level:2},{value:"Change Monitoring Schedule",id:"change-monitoring-schedule",level:2},{value:"Delete Monitor",id:"delete-monitor",level:2}],d={toc:m};function g(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"edit-web-page-monitor"},"Edit Web Page Monitor"),(0,a.kt)("p",null,"A previously configured Web Page monitor can be edited from ",(0,a.kt)("strong",{parentName:"p"},"Edit Monitor")," page. "),(0,a.kt)("h2",{id:"edit-configuration"},"Edit configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("a",{parentName:"li",href:"https://app.devraven.io/app/webPageMonitors"},"Web Page Monitors")," page and click ",(0,a.kt)("strong",{parentName:"li"},"Edit Monitor")," button to edit a monitor."),(0,a.kt)("li",{parentName:"ol"},"You may change the ",(0,a.kt)("strong",{parentName:"li"},"Name"),", ",(0,a.kt)("strong",{parentName:"li"},"Web Page URL"),", ",(0,a.kt)("strong",{parentName:"li"},"Device"),", ",(0,a.kt)("strong",{parentName:"li"},"Categories"),", ",(0,a.kt)("strong",{parentName:"li"},"Score Assertions")," for the monitor."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save changes"),".")),(0,a.kt)("h2",{id:"change-status"},"Change Status"),(0,a.kt)("p",null,"Toggle ",(0,a.kt)("strong",{parentName:"p"},"Status")," switch to OFF to disable Web Page monitor. Toggle to ON for enabling a monitor."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Disabling a monitor will automatically disable the associated monitoring schedule for the monitor. Similarly, enabling a monitor will automatically enable the monitoring schedule for the monitor."))),(0,a.kt)("h2",{id:"notification-settings"},"Notification Settings"),(0,a.kt)("p",null,"Refer ",(0,a.kt)("a",{parentName:"p",href:"/docs/monitor-configuration/notification-settings"},"Notification Settings")," page for more details about changing notification settings for Web Page monitors."),(0,a.kt)("h2",{id:"change-monitoring-schedule"},"Change Monitoring Schedule"),(0,a.kt)("p",null,"Refer ",(0,a.kt)("a",{parentName:"p",href:"/docs/monitor-configuration/change-schedule"},"Change Schedule")," section for more details about changing monitoring schedule."),(0,a.kt)("h2",{id:"delete-monitor"},"Delete Monitor"),(0,a.kt)("p",null,"To delete a monitor:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("a",{parentName:"li",href:"https://app.devraven.io/app/webPageMonitors"},"Web Page Monitors")," page and click ",(0,a.kt)("strong",{parentName:"li"},"Edit Monitor")," button to edit a monitor."),(0,a.kt)("li",{parentName:"ol"},"Scroll to the bottom of the page."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Delete Monitor")," button"),(0,a.kt)("li",{parentName:"ol"},"A confirmation dialog will be displayed."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Delete")," to proceed with deleting the monitor.")),(0,a.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Monitor deletion is an irreversible operation. Deleting a monitor will also delete any historical monitoring data associated with the monitor. To temporarily stop monitoring, we recommend disabling the monitor instead of deleting the monitor."))))}g.isMDXComponent=!0}}]);