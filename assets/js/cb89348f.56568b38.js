"use strict";(self.webpackChunkdevraven_docs=self.webpackChunkdevraven_docs||[]).push([[1591],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),u=r,f=g["".concat(l,".").concat(u)]||g[u]||m[u]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},277:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:2},l="Microsoft Teams integration",c={unversionedId:"integrations/teams-integration",id:"integrations/teams-integration",title:"Microsoft Teams integration",description:"You can choose to receive notifications via Microsoft Teams by setting up an incoming webhook URL. We only support sending notifications to one Microsoft Teams incoming webhook URL per Workspace.",source:"@site/docs/integrations/teams-integration.md",sourceDirName:"integrations",slug:"/integrations/teams-integration",permalink:"/docs/integrations/teams-integration",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Slack Integration",permalink:"/docs/integrations/enable-slack-integration"}},p={},m=[{value:"Enabling Microsoft Teams integration",id:"enabling-microsoft-teams-integration",level:3},{value:"Disabling Microsoft Teams integration",id:"disabling-microsoft-teams-integration",level:3}],g={toc:m};function u(e){var t=e.components,s=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"microsoft-teams-integration"},"Microsoft Teams integration"),(0,a.kt)("p",null,"You can choose to receive notifications via ",(0,a.kt)("strong",{parentName:"p"},"Microsoft Teams")," by setting up an incoming webhook URL. We only support sending notifications to one Microsoft Teams incoming webhook URL per Workspace."),(0,a.kt)("p",null,"We do not currently support sending Microsoft Teams notifications to multiple teams or to monitor specific teams."),(0,a.kt)("h3",{id:"enabling-microsoft-teams-integration"},"Enabling Microsoft Teams integration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Login to ",(0,a.kt)("strong",{parentName:"li"},"Microsoft Teams")," app."),(0,a.kt)("li",{parentName:"ol"},"Navigate to the team where you would to receive the notifications."),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"ellipsis button")," on the top right corner for your team."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Connectors")," menu item in the displayed menu.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Connectors",src:n(1908).Z,width:"886",height:"556"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"A modal dialog will be displayed as shown in the picture below."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add")," button next to ",(0,a.kt)("strong",{parentName:"li"},"Incoming Webhook")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add")," button again on the dialog."),(0,a.kt)("li",{parentName:"ol"},"Navigate back to the ",(0,a.kt)("strong",{parentName:"li"},"Connectors")," dialog again and click ",(0,a.kt)("strong",{parentName:"li"},"Configure")," button next to ",(0,a.kt)("strong",{parentName:"li"},"Incoming Webhook")),(0,a.kt)("li",{parentName:"ol"},"Provide Name as ",(0,a.kt)("strong",{parentName:"li"},"DevRaven")," and upload the ",(0,a.kt)("a",{target:"_blank",href:n(4993).Z},"Logo")," as shown below.\n",(0,a.kt)("img",{alt:"Teams Integration",src:n(861).Z,width:"1572",height:"1794"})),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create")," button"),(0,a.kt)("li",{parentName:"ol"},"Copy the generated ",(0,a.kt)("strong",{parentName:"li"},"Incoming Webhook URL"),"."),(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("a",{parentName:"li",href:"https://app.devraven.io/app/settings/alert-channels"},"Global Alert Channels")," page in Workspace Settings."),(0,a.kt)("li",{parentName:"ol"},"Paste the copied ",(0,a.kt)("strong",{parentName:"li"},"Incoming Webhook URL")," to the textbox under ",(0,a.kt)("strong",{parentName:"li"},"Microsoft Teams incoming webhook URL")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save changes"))),(0,a.kt)("h3",{id:"disabling-microsoft-teams-integration"},"Disabling Microsoft Teams integration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("a",{parentName:"li",href:"https://app.devraven.io/app/settings/alert-channels"},"Global Alert Channels")," page in Workspace Settings."),(0,a.kt)("li",{parentName:"ol"},"Clear the incoming webhook URL under ",(0,a.kt)("strong",{parentName:"li"},"Microsoft Teams incoming webhook URL")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save changes"))))}u.isMDXComponent=!0},4993:function(e,t,n){t.Z=n.p+"assets/files/logo1500-bc15fd3d08333ea93f0feb1f17f9c333.jpg"},1908:function(e,t,n){t.Z=n.p+"assets/images/teams-connectors-6cf6a8f28f02c33d0d5d92b620adcc00.png"},861:function(e,t,n){t.Z=n.p+"assets/images/teams-webhook-87d33e64bf073115ebcc58743ef91fba.png"}}]);