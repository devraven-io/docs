"use strict";(self.webpackChunkdevraven_docs=self.webpackChunkdevraven_docs||[]).push([[514,75],{9068:function(e,t,a){a.r(t),a.d(t,{default:function(){return ye}});var n=a(7294),r=a(4608),l=a(8277),i=a(6010),o=a(5999),c=a(2466),s=a(5936);var d=a(5281),m="backToTopButton_RiI4",u="backToTopButtonShow_ssHd";function b(){var e=function(e){var t=e.threshold,a=(0,n.useState)(!1),r=a[0],l=a[1],i=(0,n.useRef)(!1),o=(0,c.Ct)(),d=o.startScroll,m=o.cancelScroll;return(0,c.RF)((function(e,a){var n=e.scrollY,r=null==a?void 0:a.scrollY;r&&(i.current?i.current=!1:n>=r?(m(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,s.S)((function(e){e.location.hash&&(i.current=!0,l(!1))})),{shown:r,scrollToTop:function(){return d(0)}}}({threshold:300}),t=e.shown,a=e.scrollToTop;return n.createElement("button",{"aria-label":(0,o.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",d.k.common.backToTopButton,m,t&&u),type:"button",onClick:a})}var p=a(7524),v=a(6668),h=a(5537),f=a(7462);function E(e){return n.createElement("svg",(0,f.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var g="collapseSidebarButton_FykI",_="collapseSidebarButtonIcon_DTRl";function k(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,o.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,o.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",g),onClick:t},n.createElement(E,{className:_}))}var C=a(9689),I=a(3366),N=a(9688),S=a(8425),Z=a(8596),y=a(6043),T=Symbol("EmptyContext"),x=n.createContext(T);function L(e){var t=e.children,a=(0,n.useState)(null),r=a[0],l=a[1],i=(0,n.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return n.createElement(x.Provider,{value:i},t)}var w=a(9960),A=a(2389),F=["item","onItemClick","activePath","level","index"];function M(e){var t=e.categoryLabel,a=e.onClick;return n.createElement("button",{"aria-label":(0,o.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function P(e){var t=e.item,a=e.onItemClick,r=e.activePath,l=e.level,o=e.index,c=(0,I.Z)(e,F),s=t.items,m=t.label,u=t.collapsible,b=t.className,p=t.href,h=function(e){var t=(0,A.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,S.Wl)(e):void 0}),[e,t])}(t),E=(0,S._F)(t,r),g=(0,Z.Mg)(p,r),_=(0,y.u)({initialState:function(){return!!u&&(!E&&t.collapsed)}}),k=_.collapsed,C=_.setCollapsed;!function(e){var t=e.isActive,a=e.collapsed,r=e.setCollapsed,l=(0,N.D9)(t);(0,n.useEffect)((function(){t&&!l&&a&&r(!1)}),[t,l,a,r])}({isActive:E,collapsed:k,setCollapsed:C});var L=function(){var e=(0,n.useContext)(x);if(e===T)throw new N.i6("DocSidebarItemsExpandedStateProvider");return e}(),P=L.expandedItem,H=L.setExpandedItem;function B(e){void 0===e&&(e=!k),H(e?null:o),C(e)}var R=(0,v.L)().docs.sidebar.autoCollapseCategories;return(0,n.useEffect)((function(){u&&P&&P!==o&&R&&C(!0)}),[u,P,o,C,R]),n.createElement("li",{className:(0,i.Z)(d.k.docs.docSidebarItemCategory,d.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":k},b)},n.createElement("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},n.createElement(w.Z,(0,f.Z)({className:(0,i.Z)("menu__link",{"menu__link--sublist":u,"menu__link--sublist-caret":!p&&u,"menu__link--active":E}),onClick:u?function(e){null==a||a(t),p?B(!1):(e.preventDefault(),B())}:function(){null==a||a(t)},"aria-current":g?"page":void 0,"aria-expanded":u?!k:void 0,href:u?null!=h?h:"#":h},c),m),p&&u&&n.createElement(M,{categoryLabel:m,onClick:function(e){e.preventDefault(),B()}})),n.createElement(y.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},n.createElement(j,{items:s,tabIndex:k?-1:0,onItemClick:a,activePath:r,level:l+1})))}var H=a(3919),B=a(541),R="menuExternalLink_KU1_",D=["item","onItemClick","activePath","level","index"];function W(e){var t=e.item,a=e.onItemClick,r=e.activePath,l=e.level,o=(e.index,(0,I.Z)(e,D)),c=t.href,s=t.label,m=t.className,u=(0,S._F)(t,r),b=(0,H.Z)(c);return n.createElement("li",{className:(0,i.Z)(d.k.docs.docSidebarItemLink,d.k.docs.docSidebarItemLinkLevel(l),"menu__list-item",m),key:s},n.createElement(w.Z,(0,f.Z)({className:(0,i.Z)("menu__link",!b&&R,{"menu__link--active":u}),"aria-current":u?"page":void 0,to:c},b&&{onClick:a?function(){return a(t)}:void 0},o),s,!b&&n.createElement(B.Z,null)))}var z="menuHtmlItem_hP_2";function U(e){var t=e.item,a=e.level,r=e.index,l=t.value,o=t.defaultStyle,c=t.className;return n.createElement("li",{className:(0,i.Z)(d.k.docs.docSidebarItemLink,d.k.docs.docSidebarItemLinkLevel(a),o&&z+" menu__list-item",c),key:r,dangerouslySetInnerHTML:{__html:l}})}var V=["item"];function Y(e){var t=e.item,a=(0,I.Z)(e,V);switch(t.type){case"category":return n.createElement(P,(0,f.Z)({item:t},a));case"html":return n.createElement(U,(0,f.Z)({item:t},a));default:return n.createElement(W,(0,f.Z)({item:t},a))}}var K=["items"];function Q(e){var t=e.items,a=(0,I.Z)(e,K);return n.createElement(L,null,t.map((function(e,t){return n.createElement(Y,(0,f.Z)({key:t,item:e,index:t},a))})))}var j=(0,n.memo)(Q),q="menu_izAj",X="menuWithAnnouncementBar_l2a_";function G(e){var t=e.path,a=e.sidebar,r=e.className,l=function(){var e=(0,C.nT)().isActive,t=(0,n.useState)(e),a=t[0],r=t[1];return(0,c.RF)((function(t){var a=t.scrollY;e&&r(0===a)}),[e]),e&&a}();return n.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",q,l&&X,r)},n.createElement("ul",{className:(0,i.Z)(d.k.docs.docSidebarMenu,"menu__list")},n.createElement(j,{items:a,activePath:t,level:1})))}var J="sidebar_RiAD",O="sidebarWithHideableNavbar_d0QC",$="sidebarHidden_Lg_2",ee="sidebarLogo_YUvz";function te(e){var t=e.path,a=e.sidebar,r=e.onCollapse,l=e.isHidden,o=(0,v.L)(),c=o.navbar.hideOnScroll,s=o.docs.sidebar.hideable;return n.createElement("div",{className:(0,i.Z)(J,c&&O,l&&$)},c&&n.createElement(h.Z,{tabIndex:-1,className:ee}),n.createElement(G,{path:t,sidebar:a}),s&&n.createElement(k,{onClick:r}))}var ae=n.memo(te),ne=a(2961),re=a(3102),le=function(e){var t=e.sidebar,a=e.path,r=(0,ne.e)();return n.createElement("ul",{className:(0,i.Z)(d.k.docs.docSidebarMenu,"menu__list")},n.createElement(j,{items:t,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function ie(e){return n.createElement(re.Zo,{component:le,props:e})}var oe=n.memo(ie);function ce(e){var t=(0,p.i)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(ae,e),r&&n.createElement(oe,e))}var se=a(6775),de="expandButton__5cy",me="expandButtonIcon_FlNX";function ue(e){var t=e.toggleSidebar;return n.createElement("div",{className:de,title:(0,o.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,o.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(E,{className:me}))}var be="docSidebarContainer_UQUJ",pe="docSidebarContainerHidden_f7XD",ve=a(1116);function he(e){var t,a=e.children,r=(0,ve.V)();return n.createElement(n.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},a)}function fe(e){var t=e.sidebar,a=e.hiddenSidebarContainer,r=e.setHiddenSidebarContainer,l=(0,se.TH)().pathname,o=(0,n.useState)(!1),c=o[0],s=o[1],m=(0,n.useCallback)((function(){c&&s(!1),r((function(e){return!e}))}),[r,c]);return n.createElement("aside",{className:(0,i.Z)(d.k.docs.docSidebarContainer,be,a&&pe),onTransitionEnd:function(e){e.currentTarget.classList.contains(be)&&a&&s(!0)}},n.createElement(he,null,n.createElement(ce,{sidebar:t,path:l,onCollapse:m,isHidden:c})),c&&n.createElement(ue,{toggleSidebar:m}))}var Ee={docMainContainer:"docMainContainer_uL0j",docMainContainerEnhanced:"docMainContainerEnhanced_oQfM",docItemWrapperEnhanced:"docItemWrapperEnhanced_HFwV"};function ge(e){var t=e.hiddenSidebarContainer,a=e.children,r=(0,ve.V)();return n.createElement("main",{className:(0,i.Z)(Ee.docMainContainer,(t||!r)&&Ee.docMainContainerEnhanced)},n.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",Ee.docItemWrapper,t&&Ee.docItemWrapperEnhanced)},a))}var _e="docPage_ualW",ke="docsWrapper_mKqt";function Ce(e){var t=e.children,a=(0,ve.V)(),r=(0,n.useState)(!1),i=r[0],o=r[1];return n.createElement(l.Z,{wrapperClassName:ke},n.createElement(b,null),n.createElement("div",{className:_e},a&&n.createElement(fe,{sidebar:a.items,hiddenSidebarContainer:i,setHiddenSidebarContainer:o}),n.createElement(ge,{hiddenSidebarContainer:i},t)))}var Ie=a(3320),Ne=a(1944),Se=a(4477),Ze=a(4739);function ye(e){var t=e.versionMetadata,a=(0,S.hI)(e);if(!a)return n.createElement(r.default,null);var l=a.docElement,o=a.sidebarName,c=a.sidebarItems;return n.createElement(n.Fragment,null,n.createElement(Ze.Z,{version:t.version,tag:(0,Ie.os)(t.pluginId,t.version)}),n.createElement(Ne.FG,{className:(0,i.Z)(d.k.wrapper.docsPages,d.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(Se.q,{version:t},n.createElement(ve.b,{name:o,items:c},n.createElement(Ce,null,l)))))}},4608:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(7294),r=a(8277),l=a(5999),i=a(1944);function o(){return n.createElement(n.Fragment,null,n.createElement(i.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(r.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);