(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),s=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),d=a("TSYQ"),b=a.n(d),u=a("QH2O"),p=a.n(u),m=a("qKvR"),f=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(m.b)("div",{className:b()(p.a.pageHeader,(t={},t[p.a.withTabs]=o.length,t[p.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:p.a.text},a)))))},g=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,c=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},x=a("FCXl"),O=a("dI71"),_=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,c=new RegExp(r+"/?(#.*)?$"),l=n.replace(c,a);return Object(m.b)("li",{key:e,className:b()((t={},t[_.selectedItem]=o,t),_.listItem)},Object(m.b)(s.Link,{className:_.link,to:""+l},e))}));return Object(m.b)("div",{className:_.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:_.list},o))))))},t}(r.a.Component),v=a("MjG9"),P=a("CzIb"),T=a("Asxa"),w=a("OIbQ"),k=a.n(w),N=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(T.c,{className:k.a.row},Object(m.b)(T.a,null,Object(m.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,d=void 0===o?{}:o,b=t.relativePagePath,u=t.titleType,p=d.tabs,g=d.title,O=d.theme,_=d.description,T=d.keywords,w=d.date,k=Object(P.a)().interiorTheme,D=Object(s.useStaticQuery)("2456312558").site.pathPrefix,y=D?n.pathname.replace(D,""):n.pathname,C=p?y.split("/").filter(Boolean).slice(-1)[0]||i()(p[0],{lower:!0}):"",L=O||k;return Object(m.b)(l.a,{tabs:p,homepage:!1,theme:L,pageTitle:g,pageDescription:_,pageKeywords:T,titleType:u},Object(m.b)(f,{title:r?Object(m.b)(r,null):g,label:"label",tabs:p,theme:L}),p&&Object(m.b)(j,{title:g,slug:y,tabs:p,currentTab:C}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(h,{relativePagePath:b}),Object(m.b)(N,{date:w})),Object(m.b)(x.a,{pageContext:t,location:n,slug:y,tabs:p,currentTab:C}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},O0Xa:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),s=(a("qKvR"),["components"]),c={},l={_frontmatter:c},d=i.a;function b(e){var t=e.components,a=Object(r.a)(e,s);return Object(o.b)(d,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",null,"Cloud Pak for Data LDAP"),Object(o.b)("p",null,"Cloud Pak for Data can connect to an LDAP user registry for identity and access managment (IAM). When configured, for a Cloud Pak for Data instance, a user must authenticate with the user name and password stored in the LDAP server."),Object(o.b)("p",null,"If SAML is also configured for the Cloud Pak for Data instance, authentication (identity) is managed by the SAML server but access management (groups, roles) can still be served by LDAP."),Object(o.b)("p",null,"Example LDAP configuration:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'# Each Cloud Pak for Data Deployment deployed in an OpenShift Project of an OpenShift cluster can have its own LDAP configuration\ncp4d_ldap_config:\n- project: zen-sample\n  openshift_cluster_name: sample\n  ldap_host: ldaps://ldap-host\n  ldap_port: 636\n  ldap_user_search_base: ou=users,dc=ibm,dc=com\n  ldap_user_search_field: uid\n  ldap_domain_search_user: uid=ibm_roks_bind_user,ou=users,dc=ibm,dc=com\n  ldap_domain_search_password_vault: ldap_bind_password\n  auto_signup: "false"\n  ldap_group_search_base: ou=groups,dc=ibm,dc=com\n  ldap_group_search_field: cn\n  ldap_mapping_first_name: cn\n  ldap_mapping_last_name: sn\n  ldap_mapping_email: mail\n  ldap_mapping_group_membership: memberOf\n  ldap_mapping_group_member: member\n')),Object(o.b)("p",null,"The above configuration uses the LDAPS protocol to connect to port ",Object(o.b)("inlineCode",{parentName:"p"},"636")," on the ",Object(o.b)("inlineCode",{parentName:"p"},"ldap-host")," server. This server can be a private server if an upstream DNS server is also defined for the OpenShift cluster that runs Cloud Pak for Data. Common Name ",Object(o.b)("inlineCode",{parentName:"p"},"uid=ibm_roks_bind_user,ou=users,dc=ibm,dc=com")," is used as the bind user for the LDAP server and its password is retrieved from vault secret ",Object(o.b)("inlineCode",{parentName:"p"},"ldap_bind_password"),"."),Object(o.b)("p",null,"For more information on configuring LDAP for Cloud Pak for Data, check the ",Object(o.b)("a",{parentName:"p",href:"/pages-test/cpd-design/objects/cp4d_ldap_configuration"},"LDAP configuration")," page."))}b.isMDXComponent=!0},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-cpd-design-components-cp-4-d-ldap-index-mdx-4ecf56202fb0ccd10d30.js.map