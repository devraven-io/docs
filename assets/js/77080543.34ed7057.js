"use strict";(self.webpackChunkdevraven_docs=self.webpackChunkdevraven_docs||[]).push([[5680],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1761:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="Global Alert Channels",c={unversionedId:"account-settings/global-alert-settings",id:"account-settings/global-alert-settings",title:"Global Alert Channels",description:"Global Alert Settings allow you to configure alert channels that can be commonly used across monitors in your Workspace for receiving alerts. For example: if Slack integration is enabled for your Workspace, all monitors will be able to send alerts to the integrated Slack channel.",source:"@site/docs/account-settings/global-alert-settings.md",sourceDirName:"account-settings",slug:"/account-settings/global-alert-settings",permalink:"/docs/account-settings/global-alert-settings",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Settings",permalink:"/docs/category/settings"},next:{title:"Integrations",permalink:"/docs/category/integrations"}},u={},p=[{value:"Email Address",id:"email-address",level:3},{value:"Slack integration",id:"slack-integration",level:3},{value:"Microsoft Teams incoming webhook URL",id:"microsoft-teams-incoming-webhook-url",level:3}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"global-alert-channels"},"Global Alert Channels"),(0,a.kt)("p",null,"Global Alert Settings allow you to configure alert channels that can be commonly used across monitors in your Workspace for receiving alerts. For example: if Slack integration is enabled for your Workspace, all monitors will be able to send alerts to the integrated Slack channel."),(0,a.kt)("h3",{id:"email-address"},"Email Address"),(0,a.kt)("p",null,"Configure an ",(0,a.kt)("strong",{parentName:"p"},"email address")," for receiving alerts from all the monitors. Usually this email address is your team's distribution list or Office 365 group email address so all the team members receive the alerts."),(0,a.kt)("h3",{id:"slack-integration"},"Slack integration"),(0,a.kt)("p",null,"Enable ",(0,a.kt)("strong",{parentName:"p"},"Slack")," integration for receiving alerts from all the monitors to the configured Slack channel. Only one Slack channel can be setup to receive notifications per Workspace. We do not currently support sending Slack notifications to multiple channels or to monitor specific channels."),(0,a.kt)("p",null,"Refer ",(0,a.kt)("a",{parentName:"p",href:"/docs/integrations/enable-slack-integration"},"Slack itegration")," page for more details,"),(0,a.kt)("h3",{id:"microsoft-teams-incoming-webhook-url"},"Microsoft Teams incoming webhook URL"),(0,a.kt)("p",null,"You can choose to receive notifications via ",(0,a.kt)("strong",{parentName:"p"},"Microsoft Teams")," by setting up an incoming webhook URL. We only support sending notifications to one Microsoft Teams incoming webhook URL per Workspace."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Every monitor by default has notifications enabled to ",(0,a.kt)("strong",{parentName:"p"},"Global Alert Channels"),". You can choose to disable notifications from individual monitors by changing confguration in ",(0,a.kt)("strong",{parentName:"p"},"Notification Settings")," section for the monitor."))))}d.isMDXComponent=!0}}]);