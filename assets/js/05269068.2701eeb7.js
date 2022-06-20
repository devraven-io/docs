"use strict";(self.webpackChunkdevraven_docs=self.webpackChunkdevraven_docs||[]).push([[7990],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(v,s(s({ref:n},p),{},{components:t})):r.createElement(v,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9982:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),s=["components"],o={sidebar_position:5},c="Using Environment Variables",l={unversionedId:"api-monitoring/using-variables",id:"api-monitoring/using-variables",title:"Using Environment Variables",description:"API Monitors can leverage variables defined in Environments instead of hardcoding values in your test. Any variables defined in the associated environment can be accessed in Before Request, After Request scripts. Variables defined as MustacheJS templates in Request URL, headers, body can also be resolved.",source:"@site/docs/api-monitoring/using-variables.md",sourceDirName:"api-monitoring",slug:"/api-monitoring/using-variables",permalink:"/docs/api-monitoring/using-variables",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"API Monitoring Results",permalink:"/docs/api-monitoring/api-monitor-results"},next:{title:"Monitoring Assertions",permalink:"/docs/api-monitoring/assertions"}},p={},u=[],d={toc:u};function m(e){var n=e.components,o=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-environment-variables"},"Using Environment Variables"),(0,i.kt)("p",null,"API Monitors can leverage variables defined in Environments instead of hardcoding values in your test. Any variables defined in the associated environment can be accessed in Before Request, After Request scripts. Variables defined as MustacheJS templates in Request URL, headers, body can also be resolved."),(0,i.kt)("h1",{id:"using-template-variables-for-http-requests"},"Using template variables for HTTP requests"),(0,i.kt)("p",null,"Variables defined in an associated environment can be used directly in HTTP Request URL, headers or body as MustacheJS templates in the format ",(0,i.kt)("strong",{parentName:"p"},"{{variable_name}}"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Template variables",src:t(751).Z,width:"2628",height:"596"})),(0,i.kt)("h1",{id:"using-variables-in-scripts"},"Using variables in scripts"),(0,i.kt)("p",null,"For example if you are adding a test which performs login to an end point, the username, password and the url can be externalized to an Environment object. The variables defined in the Envrionment are available as environment variables during the test execution. The variables can then be accessed as ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.<variable name>")," in the Before Request and After Request scripts."),(0,i.kt)("p",null,"Here is an example Before Request snippet using ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.username")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"process.env.password")," variables from the associated environment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'\nconst username = process.env.username;\nconst password = process.env.password;\n\nconst payload = {\n    username,\n    password\n};\n\ndevraven.request.url = "<your url here>";\ndevraven.request.body = JSON.stringify(payload);\ndevraven.request.headers = {\n    "content-type":"application/json",\n    "foo":"bar"\n}\n\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Context variables also allow access to the variables in the associted Environment. Refer ",(0,i.kt)("a",{parentName:"p",href:"context"},"Context variables")," for more details."))))}m.isMDXComponent=!0},751:function(e,n,t){n.Z=t.p+"assets/images/api-mustache-templates-48976c61994813dccebfa2b8c3697271.png"}}]);