"use strict";(self.webpackChunkdevraven_docs=self.webpackChunkdevraven_docs||[]).push([[1824],{3905:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(m,o(o({ref:t},g),{},{components:n})):r.createElement(m,o({ref:t},g))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3127:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},s="PagerDuty Integration",p={unversionedId:"integrations/pd-integration",id:"integrations/pd-integration",title:"PagerDuty Integration",description:"PagerDuty integration allows notifying on-call responders about monitoring alerts and recovery events.",source:"@site/docs/integrations/pd-integration.md",sourceDirName:"integrations",slug:"/integrations/pd-integration",permalink:"/docs/integrations/pd-integration",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Slack Integration",permalink:"/docs/integrations/enable-slack-integration"},next:{title:"Microsoft Teams integration",permalink:"/docs/integrations/teams-integration"}},g={},c=[{value:"How it works?",id:"how-it-works",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Support",id:"support",level:2},{value:"Integration Walkthrough",id:"integration-walkthrough",level:2},{value:"In DevRaven",id:"in-devraven",level:3},{value:"Sending Monitoring alerts to PagerDuty",id:"sending-monitoring-alerts-to-pagerduty",level:3},{value:"How to Uninstall",id:"how-to-uninstall",level:2},{value:"In DevRaven",id:"in-devraven-1",level:3},{value:"In PagerDuty",id:"in-pagerduty",level:3}],u={toc:c};function d(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pagerduty-integration"},"PagerDuty Integration"),(0,i.kt)("p",null,"PagerDuty integration allows notifying on-call responders about monitoring alerts and recovery events."),(0,i.kt)("p",null,"SSL, Web Page, Synthetic and API monitoring failures, warning and recovery events can be sent to associated PagerDuty services."),(0,i.kt)("h2",{id:"how-it-works"},"How it works?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Once PagerDuty integration is enabled for a Workspace, monitors can be associated with PagerDuty services."),(0,i.kt)("li",{parentName:"ul"},"When a monitor reports a failure, DevRaven will ",(0,i.kt)("inlineCode",{parentName:"li"},"trigger")," an alert for all associated PagerDuty services for the monitor."),(0,i.kt)("li",{parentName:"ul"},"When the monitor recovers and passes again, a ",(0,i.kt)("inlineCode",{parentName:"li"},"resolve")," event will be sent to the PagerDuty service to resolve the previously triggered alert.")),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"PagerDuty: ",(0,i.kt)("inlineCode",{parentName:"p"},"Admin")," role is required for enabling the integration. "),(0,i.kt)("p",null,"DevRaven: Any DevRaven Workspace ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," can activate the PagerDuty integration."),(0,i.kt)("p",null,"If you are not an Admin or Account Owner in PagerDuty, please reach out to users with this role to enable the integration."),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"If you need help with this integration, please contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@devraven.io"},"support@devraven.io")),(0,i.kt)("h2",{id:"integration-walkthrough"},"Integration Walkthrough"),(0,i.kt)("h3",{id:"in-devraven"},"In DevRaven"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Login to your DevRaven Workspace."),(0,i.kt)("li",{parentName:"ol"},"Navigate to ",(0,i.kt)("a",{parentName:"li",href:"https://app.devraven.io/app/settings"},"Settings")," page and then click on ",(0,i.kt)("strong",{parentName:"li"},"Integrations")," tab."),(0,i.kt)("li",{parentName:"ol"},"The page lists a ",(0,i.kt)("strong",{parentName:"li"},"PagerDuty")," tile.\n",(0,i.kt)("img",{alt:"PagerDuty Tile",src:n(9179).Z,width:"967",height:"747"})),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Connect")," button on ",(0,i.kt)("strong",{parentName:"li"},"PagerDuty")," tile."),(0,i.kt)("li",{parentName:"ol"},"A new popup window will be displayed prompting for your PagerDuty credentials.\n",(0,i.kt)("img",{alt:"PagerDuty Login",src:n(3682).Z,width:"899",height:"839"})),(0,i.kt)("li",{parentName:"ol"},"Sign In to your PagerDuty account."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Select Services")," to integrate with DevRaven.\n",(0,i.kt)("img",{alt:"Select PagerDuty Services",src:n(9012).Z,width:"897",height:"833"})),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Connect"),". A confirmation message will be displayed."),(0,i.kt)("li",{parentName:"ol"},"Close the popup window.\n",(0,i.kt)("img",{alt:"Confirmation Message",src:n(5630).Z,width:"900",height:"838"})),(0,i.kt)("li",{parentName:"ol"},"The PagerDuty tile should now show ",(0,i.kt)("strong",{parentName:"li"},"View details")," and ",(0,i.kt)("strong",{parentName:"li"},"Disconnect")," button. DevRaven will now be able to send alerts to the selected PagerDuty services.")),(0,i.kt)("h3",{id:"sending-monitoring-alerts-to-pagerduty"},"Sending Monitoring alerts to PagerDuty"),(0,i.kt)("p",null,"To send monitoring alerts from monitors:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Navigate to the monitor page."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Edit Monitor")," button."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Integrations")," tab.\n",(0,i.kt)("img",{alt:"Integrations tab",src:n(5444).Z,width:"1232",height:"616"})),(0,i.kt)("li",{parentName:"ol"},"Under ",(0,i.kt)("strong",{parentName:"li"},"PagerDuty Integration")," section, select the PagerDuty Services to be alerted."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save")," button."),(0,i.kt)("li",{parentName:"ol"},"The monitor is now configured to send alerts to associated PagerDuty Services.")),(0,i.kt)("h2",{id:"how-to-uninstall"},"How to Uninstall"),(0,i.kt)("h3",{id:"in-devraven-1"},"In DevRaven"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Login to your DevRaven Workspace."),(0,i.kt)("li",{parentName:"ol"},"Navigate to ",(0,i.kt)("a",{parentName:"li",href:"https://app.devraven.io/app/settings"},"Settings")," page and then click on ",(0,i.kt)("strong",{parentName:"li"},"Integrations")," tab."),(0,i.kt)("li",{parentName:"ol"},"The page lists a ",(0,i.kt)("strong",{parentName:"li"},"PagerDuty")," tile."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Disconnect")," button.")),(0,i.kt)("h3",{id:"in-pagerduty"},"In PagerDuty"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Login to your PagerDuty account."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Services")," in the top navigation bar."),(0,i.kt)("li",{parentName:"ol"},"Click the service which is integrated with DevRaven."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Integrations")," tab."),(0,i.kt)("li",{parentName:"ol"},"Click the gear icon for ",(0,i.kt)("strong",{parentName:"li"},"DevRaven")," integration and then click ",(0,i.kt)("strong",{parentName:"li"},"Delete Integration")," button."),(0,i.kt)("li",{parentName:"ol"},"Repeat the steps for any other associated services.")))}d.isMDXComponent=!0},9179:function(e,t,n){t.Z=n.p+"assets/images/dr-pd1-87c7eff59031dc4c5519f4d361099b57.jpg"},3682:function(e,t,n){t.Z=n.p+"assets/images/dr-pd2-3b0fd9a1adc55b99dda6cd5f745f63f6.jpg"},9012:function(e,t,n){t.Z=n.p+"assets/images/dr-pd3-d3f1e71381ce5723b708fb9b185e42a1.jpg"},5630:function(e,t,n){t.Z=n.p+"assets/images/dr-pd4-185ae497e6e72228aab9c1ccb3566421.jpg"},5444:function(e,t,n){t.Z=n.p+"assets/images/dr-pd5-7854d2b34d3d8d0c6e9d841c36faf3ea.jpg"}}]);