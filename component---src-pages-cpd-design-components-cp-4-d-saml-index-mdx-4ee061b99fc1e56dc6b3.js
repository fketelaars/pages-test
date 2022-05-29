(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),o=a.n(r),c=a("Wbzz"),l=a("Xrax"),s=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),m=a.n(u),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},x=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,l=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+x.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:x.link,href:l},"Edit this page on GitHub"))):null},h=a("FCXl"),j=a("dI71"),O=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),r=a===i,l=new RegExp(i+"/?(#.*)?$"),s=n.replace(l,a);return Object(p.b)("li",{key:e,className:d()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(p.b)(c.Link,{className:O.link,to:""+s},e))}));return Object(p.b)("div",{className:O.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:O.list},r))))))},t}(i.a.Component),T=a("MjG9"),k=a("CzIb"),w=a("Asxa"),P=a("OIbQ"),y=a.n(P),N=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(w.c,{className:y.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:y.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,b=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,m=b.tabs,x=b.title,j=b.theme,O=b.description,w=b.keywords,P=b.date,y=Object(k.a)().interiorTheme,L=Object(c.useStaticQuery)("2456312558").site.pathPrefix,I=L?n.pathname.replace(L,""):n.pathname,M=m?I.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",_=j||y;return Object(p.b)(s.a,{tabs:m,homepage:!1,theme:_,pageTitle:x,pageDescription:O,pageKeywords:w,titleType:u},Object(p.b)(g,{title:i?Object(p.b)(i,null):x,label:"label",tabs:m,theme:_}),m&&Object(p.b)(v,{title:x,slug:I,tabs:m,currentTab:M}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(f,{relativePagePath:d}),Object(p.b)(N,{date:P})),Object(p.b)(h.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:M}),Object(p.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},DKX8:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),c=(a("qKvR"),["components"]),l={},s={_frontmatter:l},b=o.a;function d(e){var t=e.components,a=Object(i.a)(e,c);return Object(r.b)(b,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"Cloud Pak for Data SAML configuration"),Object(r.b)("p",null,"You can configure Single Sign-on (SSO) by specifying a SAML server for the Cloud Pak for Data instance. SAML configuration only takes care of identity management (i.e. authentication). SAML configuration can be used in combination with the Cloud Pak for Data LDAP configuration, in which case LDAP complements the identity with access management (groups) for users."),Object(r.b)("p",null,"A sample SAML configuration:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'cp4d_saml_config:\n- project: zen-40\n  entrypoint: "https://prepiam.ice.ibmcloud.com/saml/sps/saml20ip/saml20/login"\n  field_to_authenticate: email\n  sp_cert_secret: {{ env_id }}-zen-40-sp-cert\n  idp_cert_secret: {{ env_id }}-zen-40-idp-cert\n  issuer: "cp4d"\n  identifier_format: ""\n  callback_url: ""\n')),Object(r.b)("p",null,"The above configuration uses the IBM preproduction IAM server to delegate authentication to and authentication is done via the user’s e-mail address. An issuer must be configured in the identity provider (idP) and the idP’s certificate must be kept in the vault so Cloud Pak for Data can confirm its identity."),Object(r.b)("p",null,"There are a few more attributes that can be configured, for a full list, please check the ",Object(r.b)("a",{parentName:"p",href:"/cpd-design/objects/cp4d_saml_config"},"SAML configuration")," page."))}d.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-cpd-design-components-cp-4-d-saml-index-mdx-4ee061b99fc1e56dc6b3.js.map