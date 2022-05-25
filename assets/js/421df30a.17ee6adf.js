"use strict";(self.webpackChunkdevraven_docs=self.webpackChunkdevraven_docs||[]).push([[4790],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),g=o,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5959:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={sidebar_position:3},u="Running a Monitor",c={unversionedId:"web-page-monitoring/running-monitor",id:"web-page-monitoring/running-monitor",title:"Running a Monitor",description:"Monitors can be executed manually or can be scheduled to run automatically at predefined intervals.",source:"@site/docs/web-page-monitoring/running-monitor.md",sourceDirName:"web-page-monitoring",slug:"/web-page-monitoring/running-monitor",permalink:"/docs/web-page-monitoring/running-monitor",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Edit Web Page Monitor",permalink:"/docs/web-page-monitoring/edit-webpage-monitor"},next:{title:"Web Page Monitoring Results",permalink:"/docs/web-page-monitoring/web-page-results"}},s={},p=[{value:"How we check?",id:"how-we-check",level:2},{value:"Run Manually",id:"run-manually",level:2},{value:"Change Schedule",id:"change-schedule",level:2}],d={toc:p};function g(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-a-monitor"},"Running a Monitor"),(0,a.kt)("p",null,"Monitors can be executed manually or can be scheduled to run automatically at predefined intervals."),(0,a.kt)("p",null,"Web Page monitors, by default, will have a monitoring schedule attached that runs at 12AM UTC time automatically."),(0,a.kt)("h2",{id:"how-we-check"},"How we check?"),(0,a.kt)("p",null,"When a monitor is executed, our backend system automatically spins up a process to execute Google Lighthouse run against the configured Web Page Url. The Web page is loaded to ignore any certificate errors for the Lighthouse run."),(0,a.kt)("h2",{id:"run-manually"},"Run Manually"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("a",{parentName:"li",href:"https://app.devraven.io/app/webPageMonitors"},"Web Page Monitors")," page."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Run monitor")," to trigger an adhoc run for the monitor."),(0,a.kt)("li",{parentName:"ol"},"Monitor run will be executed from all selected monitoring locations for the monitor."),(0,a.kt)("li",{parentName:"ol"},"The Web Page monitoring results will be displayed automatically in few seconds.")),(0,a.kt)("h2",{id:"change-schedule"},"Change Schedule"),(0,a.kt)("p",null,"Refer ",(0,a.kt)("a",{parentName:"p",href:"/docs/monitor-configuration/change-schedule"},"Change Schedule")," page for more details about changing monitoring schedules."))}g.isMDXComponent=!0}}]);