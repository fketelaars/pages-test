(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"013z":function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),c=n("NmYn"),l=n.n(c),r=n("Wbzz"),i=n("Xrax"),b=n("k4MR"),s=n("TSYQ"),d=n.n(s),p=n("QH2O"),m=n.n(p),u=n("qKvR"),_=function(e){var t,n=e.title,o=e.theme,a=e.tabs,c=void 0===a?[]:a;return Object(u.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=c.length,t[m.a.darkMode]="dark"===o,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},n)))))},g=n("BAC9"),f=function(e){var t=e.relativePagePath,n=e.repository,o=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,a=n||o,c=a.baseUrl,l=a.subDirectory,i=c+"/edit/"+a.branch+l+"/src/pages"+t;return c?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:i},"Edit this page on GitHub"))):null},O=n("FCXl"),h=n("dI71"),j=n("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(h.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,o=e.slug,a=o.split("/").filter(Boolean).slice(-1)[0],c=n.map((function(e){var t,n=l()(e,{lower:!0,strict:!0}),c=n===a,i=new RegExp(a+"/?(#.*)?$"),b=o.replace(i,n);return Object(u.b)("li",{key:e,className:d()((t={},t[j.selectedItem]=c,t),j.listItem)},Object(u.b)(r.Link,{className:j.link,to:""+b},e))}));return Object(u.b)("div",{className:j.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:j.list},c))))))},t}(a.a.Component),x=n("MjG9"),w=n("CzIb"),P=n("Asxa"),N=n("OIbQ"),y=n.n(N),C=function(e){var t=e.date,n=new Date(t);return t?Object(u.b)(P.c,{className:y.a.row},Object(u.b)(P.a,null,Object(u.b)("div",{className:y.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,o=e.location,a=e.Title,c=t.frontmatter,s=void 0===c?{}:c,d=t.relativePagePath,p=t.titleType,m=s.tabs,g=s.title,h=s.theme,j=s.description,P=s.keywords,N=s.date,y=Object(w.a)().interiorTheme,T=Object(r.useStaticQuery)("2456312558").site.pathPrefix,k=T?o.pathname.replace(T,""):o.pathname,A=m?k.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",D=h||y;return Object(u.b)(b.a,{tabs:m,homepage:!1,theme:D,pageTitle:g,pageDescription:j,pageKeywords:P,titleType:p},Object(u.b)(_,{title:a?Object(u.b)(a,null):g,label:"label",tabs:m,theme:D}),m&&Object(u.b)(v,{title:g,slug:k,tabs:m,currentTab:A}),Object(u.b)(x.a,{padded:!0},n,Object(u.b)(f,{relativePagePath:d}),Object(u.b)(C,{date:N})),Object(u.b)(O.a,{pageContext:t,location:o,slug:k,tabs:m,currentTab:A}),Object(u.b)(i.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},kqPH:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return d}));var o=n("wx14"),a=n("zLVn"),c=(n("q1tI"),n("7ljp")),l=n("013z"),r=(n("qKvR"),["components"]),i={},b={_frontmatter:i},s=l.a;function d(e){var t=e.components,n=Object(a.a)(e,r);return Object(c.b)(s,Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/cpd-design/components/monitoring"},"<—…Back to monitors overview")),Object(c.b)("h2",null,"Global Platform Connections"),Object(c.b)("p",null,"This monitor counts the number of Global Platform connections and for each Global Platform Connection a test is executed to test whether the connection can still be established."),Object(c.b)("h2",null,"Generated metrics"),Object(c.b)("p",null,"Once the monitor is deployed, the following metrics are available in IBM Cloud Pak for Data."),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"29.51388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAIAAABM9SnKAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAsUlEQVQY052Q3Q6DIAxGeXFnyJLN+JIaowZQRJ34g4L7Moa3S3YumkNpKUDo/ZGmKaU0iqLbL+I4fn5AS5IkxJ2ncwj/QIZhUEoVRTFp/QLTrOcvS+DyS9Z1RSR1XWdZlud5WZZVVTHG+4AQQkqJo+FN03Rd5/NIMsYgZBxHznnbtthGHWZvgV4pNOBqcNlPqDbGwDFfaw0h+75fN7HWYukCyKAIDXie2RaIzx/H4b/pDYpLPko3QpsSAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Overview Events and Alerts",title:"Overview Events and Alerts",src:"/static/4acb0d49d914bbe1145094f08a7950cc/3cbba/cp4d_events.png",srcSet:["/static/4acb0d49d914bbe1145094f08a7950cc/7fc1e/cp4d_events.png 288w","/static/4acb0d49d914bbe1145094f08a7950cc/a5df1/cp4d_events.png 576w","/static/4acb0d49d914bbe1145094f08a7950cc/3cbba/cp4d_events.png 1152w","/static/4acb0d49d914bbe1145094f08a7950cc/0b124/cp4d_events.png 1728w","/static/4acb0d49d914bbe1145094f08a7950cc/4ea69/cp4d_events.png 2304w","/static/4acb0d49d914bbe1145094f08a7950cc/06d2f/cp4d_events.png 2552w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("p",null,"On the Platform Management Events page the following entries are added:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Cloud Pak for Data Global Connections Count"),Object(c.b)("li",{parentName:"ul"},"Global Connection - ","<","Global Connection Name",">"," (for each connection)")),Object(c.b)("h3",null,"Using the IBM Cloud Pak for Data Prometheus endpoint"),Object(c.b)("p",null,"https://","<","CP4D-BASE-URL",">","/zen/metrics"),Object(c.b)("p",null,"It will generate 2 types of metrics:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"global_connections_count",Object(c.b)("br",{parentName:"li"}),"Provides the number of available connections"),Object(c.b)("li",{parentName:"ul"},"global_connection_valid",Object(c.b)("br",{parentName:"li"}),"For each connection, a test action is performed",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"1 (Test Connection success)"),Object(c.b)("li",{parentName:"ul"},"0 (Test connection failed)")))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'# HELP global_connections_count \n# TYPE global_connections_count gauge\nglobal_connections_count{event_type="global_connections_count",monitor_type="cp4d_platform_global_connections",reference="Cloud Pak for Data Global Connections Count"} 2\n\n# HELP global_connection_valid \n# TYPE global_connection_valid gauge\nglobal_connection_valid{event_type="global_connection_valid",monitor_type="cp4d_platform_global_connections",reference="Cognos MetaStore Connection"} 1\nglobal_connection_valid{event_type="global_connection_valid",monitor_type="cp4d_platform_global_connections",reference="Cognos non-shared"} 0\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Zen Watchdog metrics")," (used in platform management events)"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"watchdog_cp4d_platform_global_connections_global_connections_count"),Object(c.b)("li",{parentName:"ul"},"watchdog_cp4d_platform_global_connections_global_connection_valid (for each connection)")),Object(c.b)("p",null,"Zen Watchdog metrics can have the following values:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"2 (info)"),Object(c.b)("li",{parentName:"ul"},"1 (warning)"),Object(c.b)("li",{parentName:"ul"},"0 (critical)")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'# HELP watchdog_cp4d_platform_global_connections_global_connection_valid \n# TYPE watchdog_cp4d_platform_global_connections_global_connection_valid gauge\nwatchdog_cp4d_platform_global_connections_global_connection_valid{event_type="global_connection_valid",monitor_type="cp4d_platform_global_connections",reference="Cognos MetaStore Connection"} 2\nwatchdog_cp4d_platform_global_connections_global_connection_valid{event_type="global_connection_valid",monitor_type="cp4d_platform_global_connections",reference="Cognos non-shared"} 1\n\n# HELP watchdog_cp4d_platform_global_connections_global_connections_count \n# TYPE watchdog_cp4d_platform_global_connections_global_connections_count gauge\nwatchdog_cp4d_platform_global_connections_global_connections_count{event_type="global_connections_count",monitor_type="cp4d_platform_global_connections",reference="Cloud Pak for Data Global Connections Count"} 2\n')),Object(c.b)("h2",null,"Install the Monitor using the Cloud Pak Deployer"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Pre-requisite"),": Ensure all secrets (source_token and target_cr) are configured in the vault prior to deploying the monitors. "),Object(c.b)("p",null,"Add the following section to the Cloud Pak Deployer configuration, or add the monitor to an existing ",Object(c.b)("inlineCode",{parentName:"p"},"monitors")," section:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'# List of cp4d_monitors\ncp4d_monitors:\n- name: cp4d-monitor-set-1\n  cp4d_instance: <OC_PROJECT>\n  openshift_cluster_name: pluto-01\n  default_monitor_source_repo: https://github.ibm.com/CloudPakDeployer/cloud-pak-deployer-monitors\n  default_monitor_source_token_secret: monitors_source_repo_secret\n  default_monitor_target_cr: de.icr.io/monitorrepo  \n  default_monitor_target_cr_user_secret: monitors_target_cr_username\n  default_monitor_target_cr_password_secret: monitors_target_cr_password\n  # List of monitors\n  monitors:\n  - name: cp4d-platform-global-connections\n    #monitor_source_repo:             \n    #monitor_source_token_secret:    \n    #monitor_target_cr:              \n    #monitor_target_cr_user_secret:  \n    #monitor_target_cr_user_password:\n    context: cp4d-platform-global-connections\n    label: latest\n    schedule: "*/15 * * * *"\n    event_types:\n    - name: "global_connections_count"\n      simple_name: "Number of CP4D Platform connections"\n      alert_type: "platform"\n      short_description: "Number of CP4D Platform connections"\n      long_description: "Number of CP4D Platform connections: <global_connections_count>"\n      resolution: "none"\n      reason_code_prefix: "80"\n    - name: "global_connection_valid"\n      simple_name: "Test CP4D Platform connection"\n      alert_type: "platform"\n      short_description: "Test CP4D Platform connection"\n      long_description: "Test result CP4D Platform connection: <global_connection_valid>"\n      resolution: "Validate the connection properties"\n      reason_code_prefix: "80"\n')),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/cpd-design/components/monitoring"},"<—…Back to monitors overview")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-cpd-design-components-monitoring-global-platform-connections-mdx-10e50084f07f1caef1cf.js.map