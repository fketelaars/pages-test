(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),c=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,s=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},f=a("FCXl"),j=a("dI71"),h=a("I8xM"),T=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,s=new RegExp(r+"/?(#.*)?$"),l=n.replace(s,a);return Object(p.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=o,t),h.listItem)},Object(p.b)(c.Link,{className:h.link,to:""+l},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:h.list},o))))))},t}(r.a.Component),v=a("MjG9"),y=a("CzIb"),w=a("Asxa"),P=a("OIbQ"),N=a.n(P),k=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(w.c,{className:N.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,b=void 0===o?{}:o,d=t.relativePagePath,u=t.titleType,m=b.tabs,g=b.title,j=b.theme,h=b.description,w=b.keywords,P=b.date,N=Object(y.a)().interiorTheme,_=Object(c.useStaticQuery)("2456312558").site.pathPrefix,A=_?n.pathname.replace(_,""):n.pathname,C=m?A.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",I=j||N;return Object(p.b)(l.a,{tabs:m,homepage:!1,theme:I,pageTitle:g,pageDescription:h,pageKeywords:w,titleType:u},Object(p.b)(x,{title:r?Object(p.b)(r,null):g,label:"label",tabs:m,theme:I}),m&&Object(p.b)(T,{title:g,slug:A,tabs:m,currentTab:C}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(O,{relativePagePath:d}),Object(p.b)(k,{date:P})),Object(p.b)(f.a,{pageContext:t,location:n,slug:A,tabs:m,currentTab:C}),Object(p.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},nTne:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),c=(a("qKvR"),["components"]),s={},l={_frontmatter:s},b=i.a;function d(e){var t=e.components,a=Object(r.a)(e,c);return Object(o.b)(b,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"File: config/cp4d_instance_configuration.yaml"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"---\n# Each Cloud Pak for Data Deployment deployed in an OpenShift Project of an OpenShift cluster can have its own configuration for the provisioned instances\ncp4d_instance_configuration:\n- project: zen-sample                # Mandatory\n  openshift_cluster_name: sample     # Mandatory\n  cartridges:\n  - name: cognos_analytics\n    manage_access:                                  # Optional, requires LDAP connectivity\n    - ca_role: Analytics Viewer                     # Mandatory, one the CA Access roles\n      cp4d_user_group: CA_Analytics_Viewer          # Mandatory, the CP4D User Group Name\n    - ca_role: Analytics Administrators             # Mandatory, one the CA Access roles\n      cp4d_user_group: CA_Analytics_Administrators  # Mandatory, the CP4D User Group Name\n\n")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-cpd-design-objects-cp-4-d-instance-configuration-mdx-8269edf61af4e61cab7b.js.map