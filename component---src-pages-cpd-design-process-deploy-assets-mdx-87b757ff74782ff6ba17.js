(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),l=a.n(r),b=a("Wbzz"),i=a("Xrax"),c=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},j=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,l=o.subDirectory,i=r+"/edit/"+o.branch+l+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+j.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},f=a("FCXl"),g=a("dI71"),h=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),r=a===o,i=new RegExp(o+"/?(#.*)?$"),c=n.replace(i,a);return Object(p.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=r,t),h.listItem)},Object(p.b)(b.Link,{className:h.link,to:""+c},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:h.list},r))))))},t}(o.a.Component),k=a("MjG9"),w=a("CzIb"),v=a("Asxa"),P=a("OIbQ"),N=a.n(P),y=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(v.c,{className:N.a.row},Object(p.b)(v.a,null,Object(p.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,s=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,m=s.tabs,j=s.title,g=s.theme,h=s.description,v=s.keywords,P=s.date,N=Object(w.a)().interiorTheme,C=Object(b.useStaticQuery)("2456312558").site.pathPrefix,D=C?n.pathname.replace(C,""):n.pathname,I=m?D.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",E=g||N;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:E,pageTitle:j,pageDescription:h,pageKeywords:v,titleType:u},Object(p.b)(x,{title:o?Object(p.b)(o,null):j,label:"label",tabs:m,theme:E}),m&&Object(p.b)(T,{title:j,slug:D,tabs:m,currentTab:I}),Object(p.b)(k.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:d}),Object(p.b)(y,{date:P})),Object(p.b)(f.a,{pageContext:t,location:n,slug:D,tabs:m,currentTab:I}),Object(p.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},biT6:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),l=a("013z"),b=(a("qKvR"),["components"]),i={},c={_frontmatter:i},s=l.a;function d(e){var t=e.components,a=Object(o.a)(e,b);return Object(r.b)(s,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"Deploy Cloud Pak assets"),Object(r.b)("h2",null,"Cloud Pak for Data"),Object(r.b)("p",null,"For Cloud Pak for Data, this stage does the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Deploy Cloud Pak for Data assets which are defined with object ",Object(r.b)("inlineCode",{parentName:"li"},"cp4d_asset")),Object(r.b)("li",{parentName:"ul"},"Deploy the Cloud Pak for Data monitors identified with ",Object(r.b)("inlineCode",{parentName:"li"},"cp4d_monitors")," elements.")),Object(r.b)("h3",null,"Deploy Cloud Pak for Data assets"),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"/cpd-design/objects/cloud-pak-assets"},"cp4d_asset")," for more details."),Object(r.b)("h3",null,"Cloud Pak for Data monitors"),Object(r.b)("p",null,"See ",Object(r.b)("a",{parentName:"p",href:"/cpd-design/objects/cp4d_monitors"},"cp4d_monitors")," for more details."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-cpd-design-process-deploy-assets-mdx-87b757ff74782ff6ba17.js.map