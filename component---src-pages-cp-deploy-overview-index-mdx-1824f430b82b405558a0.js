(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),s=a("NmYn"),i=a.n(s),r=a("Wbzz"),o=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),p=a("QH2O"),m=a.n(p),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,l=e.tabs,s=void 0===l?[]:l;return Object(u.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=s.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},O=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,l=a||n,s=l.baseUrl,i=l.subDirectory,o=s+"/edit/"+l.branch+i+"/src/pages"+t;return s?Object(u.b)("div",{className:"bx--row "+O.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},f=a("FCXl"),j=a("dI71"),x=a("I8xM"),A=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,l=n.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),s=a===l,o=new RegExp(l+"/?(#.*)?$"),c=n.replace(o,a);return Object(u.b)("li",{key:e,className:d()((t={},t[x.selectedItem]=s,t),x.listItem)},Object(u.b)(r.Link,{className:x.link,to:""+c},e))}));return Object(u.b)("div",{className:x.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:x.list},s))))))},t}(l.a.Component),y=a("MjG9"),k=a("CzIb"),N=a("Asxa"),w=a("OIbQ"),T=a.n(w),v=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(N.c,{className:T.a.row},Object(u.b)(N.a,null,Object(u.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,l=e.Title,s=t.frontmatter,b=void 0===s?{}:s,d=t.relativePagePath,p=t.titleType,m=b.tabs,O=b.title,j=b.theme,x=b.description,N=b.keywords,w=b.date,T=Object(k.a)().interiorTheme,C=Object(r.useStaticQuery)("2456312558").site.pathPrefix,P=C?n.pathname.replace(C,""):n.pathname,S=m?P.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",E=j||T;return Object(u.b)(c.a,{tabs:m,homepage:!1,theme:E,pageTitle:O,pageDescription:x,pageKeywords:N,titleType:p},Object(u.b)(g,{title:l?Object(u.b)(l,null):O,label:"label",tabs:m,theme:E}),m&&Object(u.b)(A,{title:O,slug:P,tabs:m,currentTab:S}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:d}),Object(u.b)(v,{date:w})),Object(u.b)(f.a,{pageContext:t,location:n,slug:P,tabs:m,currentTab:S}),Object(u.b)(o.a,null))}},"8kqh":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a("wx14"),l=a("zLVn"),s=(a("q1tI"),a("7ljp")),i=a("013z"),r=(a("qKvR"),["components"]),o={},c={_frontmatter:o},b=i.a;function d(e){var t=e.components,a=Object(l.a)(e,r);return Object(s.b)(b,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",null,"Deployment options"),Object(s.b)("h2",null,"Basic deployment"),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"722px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"109.72222222222223%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChElEQVQ4y+WVz0tUURTHZxe0ivbRMlq0aNWqAiMjaFXLMmqhmFGUgZpiCf0J2i+CIBVSYlArddRUysYW/aDGmZjxR40ojDpv1Pn5ft736b4ZCdR5mrXswpd7zj3nft+55517rkcIGwuILizT6w+Q0wz+ZXjiaYGiQudoiLKmp4xHFFQBmUyGZDJJOp3Oy5qmoev6tvDMKDaBBRgPxega/sjEvEYiB1OTEaLRWeLxeB4OoW3bCCFcYZomHt208wSJZI7o3AK6IeRGgWHs/OgOqacg2psMTvh5i4zqT/CbsLDA2nFsV8KtxgZCNm3cSLjdWEfoZvhPCR3VssSO4EroFPJfXb1ihKbp3G5BOLJIR+cnunu+4esNMNQfYHggSH9/kO7ur3n9jS/AQF+ALqkrSro4oWGY+dknHS9feMKNqjaOnnnMgWPNHC59xO06L1UVzzhUcp+Dx1s4cuoh16+08mN6sTihkwth6ixl4UtMMJOE8ucxSlrmOPlgnpFpnaACJ5qjlEr9fGuMiSXZUAzbJUJTtht0vGE43ZqicgDKvDnK+2wqfXC2XaFCrl30Zrk6CJd6TM51qEQSuEVoyQxazE4t8fZlgHGZM38eIUZffGCobZixns/4fd/x903w7nWQ0VchVhIuORRO73OExgb5Sc967N0D+/fB7l2bbe/HXAhl63KaV2ZwhNVr1aTq75K4VYdSXYvS0IRy5x5KXSPKzRpWaupJSXm1tpHs9E/3OjRklIsyTNl7kalhRrUJp3QmUxqTSY2IRDitMyfTvUzBT8maWxDKKG05W5qOpct4ndp0fpYDaw1StmWJOT5C+oitbkoul9vwXsi8akWgF94aQ0JVVX4BBDtr6/fN+RkAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Basic deployment",title:"Basic deployment",src:"/pages-test/static/4d4ad776e91be99ddbb8325ef9377a41/a12c0/cloud-pak-context-deployment-basic.png",srcSet:["/pages-test/static/4d4ad776e91be99ddbb8325ef9377a41/7fc1e/cloud-pak-context-deployment-basic.png 288w","/pages-test/static/4d4ad776e91be99ddbb8325ef9377a41/a5df1/cloud-pak-context-deployment-basic.png 576w","/pages-test/static/4d4ad776e91be99ddbb8325ef9377a41/a12c0/cloud-pak-context-deployment-basic.png 722w"],sizes:"(max-width: 722px) 100vw, 722px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("p",null,"For more details on each of the elements, refer to:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/pages-test/cpd-design/components/infrastructure"},"Infrastructure")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/pages-test/cpd-design/components/openshift"},"OpenShift")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/pages-test/cpd-design/components/cloud-pak"},"Cloud Pak")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/pages-test/cpd-design/components/cp4d-cartridges"},"Cloud Pak Cartridges")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/pages-test/cpd-design/components/cp4d-instances"},"Cloud Pak Instances")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/pages-test/cpd-design/components/cp4d-assets"},"Cloud Pak Assets"))),Object(s.b)("h2",null,"Extended deployment"),Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"722px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"109.72222222222223%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsTAAALEwEAmpwYAAADmUlEQVQ4y6WVTWhcVRTHZye4EvfiUly4cOVKhUqrgoLoUitx0dJGKlqhjS3RgPuCtGqtUDCttEFCEmunSSYfNHGitCZNJolmJpNm8kEnmXnzPfO+3/t57ptJk+JkBH28P/fed8/733P+99xzQ57n4wKprTw3ozF00+b/PKFsxUMzoGd8kcNdl5mKaxgeVKtVSqUS5UqFisAwDSzLFFh7WoG5py8IrWg+sS2YWkzTN3qX+U2TnA7LiTip1BrFQh4tm8U0rcADz5PVfHklMtX3G98UHMchZDl+QJAr6aQ2trBsMfI9bLseer6sN4LxqdmFoGc5Jp7vCqnYVaoy5T9cLLRjvPdxXGXssrGdp63rEiO/J1mvTnAuehCtluLcj8e5szwIZYPZE+1gW3VP5b+QL+xqAdWqDVKPKxOu6wTeXeqfILmRJ1tbZSRxGd2uMHxngPvbCfSyxXJkAhXlQw8b3lIn3p1QAjf4g1ZUaGi3G4kpqCgJ/HqUe0LeJd0hVBq60q5n85JKHiVzk+kHPTiezr2ZGe7em4ZMBndyEr9YrP+nQm5GqEL2JORCVaftq6uMza6zWrrNxem32Mz9RSQcoS8yxPa1HtKvvYkxF6sTql1uSqhSQDw0bZe5tRxbRV08s1nNrAXzpUqNom5S20wTvzGOlf8XD3c0VEPL9mXX5TQJVCa5rso5gg10GjrKVPDdbaWhaZr/7eg1I3Qcdbo9luJbXO/5g/6BOQZvxojcijE6tED41gJ9/bPBeEQwFI4FY02rNCe0bSdoB8Xwg/e+5+P2K7z4xnc889J5nj90kc86emk/+gPPHfiaZ1++wAuvfstHx7u5n9zeb5dFJ8ciU4OZtMdKCY5cS3PgwgYHv9lkLGmxoMEr51MckvG73WnmM1JQRO/mHjoqey16l+D17jLHhuBwr86RsM8xOXFvX9U4Kt/e763x4TC0DTi8c90gnqNFHkqVXFvOcPvnGFOiWTTAIuM//UbkyiiTA9NEB/8kGp5n4pcFxm8sUsjto6GnapzqdJ6VJUOP4skn4Omn4PHH/jn36+Q+hJJwqnhVh8conjhJ+cwX5D7tQDt5Gu1sF9rnX6J1dKJ9corCqTOUpV883UktudriLIuX2+Km1F5EGlYMnyWpLomySaJkEhcsVSw2RO48dTut5rQuDqqAulKpXctWRVLg1eE2IH1fUkzZeGLjuS1Oiq7rj9wVwT1iNkHjfrEFhmHwN64uUWPd4vDPAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Extended deployment",title:"Extended deployment",src:"/pages-test/static/ad0f9d60ced68fd167bb5803df2732bf/a12c0/cloud-pak-context-deployment-full.png",srcSet:["/pages-test/static/ad0f9d60ced68fd167bb5803df2732bf/7fc1e/cloud-pak-context-deployment-full.png 288w","/pages-test/static/ad0f9d60ced68fd167bb5803df2732bf/a5df1/cloud-pak-context-deployment-full.png 576w","/pages-test/static/ad0f9d60ced68fd167bb5803df2732bf/a12c0/cloud-pak-context-deployment-full.png 722w"],sizes:"(max-width: 722px) 100vw, 722px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(s.b)("p",null,"For more details about extended deployment, refer to:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/pages-test/cpd-design/components/monitoring"},"Monitoring")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/pages-test/cpd-design/components/logging-auditing"},"Logging and auditing")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/pages-test/cpd-design/components/git"},"Git integration")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/pages-test/cpd-design/components/private-registry"},"Private registry and air-gapped installations")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/pages-test/cpd-design/components/dns"},"DNS Servers")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/pages-test/cpd-design/components/cp4d-ldap"},"Cloud Pak for Data LDAP integration")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",{parentName:"li",href:"/pages-test/cpd-design/components/cp4d-saml"},"Cloud Pak for Data SAML"))),Object(s.b)("h1",null,"Current state of the Cloud Pak Deployer"),Object(s.b)("p",null,"The below picture indicates the current state of the Cloud Pak Deployer, which infrastructures are supported to provision or use OpenShift, the storage classes which can be controlled and the Cloud Paks with cartridges and components.\n",Object(s.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"73.26388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD+klEQVQ4y22Ta0zTVxjGD7RFCoPSlkmRS4FyWeQykCI4RTEGNjVTbLkFhsgowhCYBnS3OKdzUsW5KUgnEG1LC2zsovOD+6YZIQYmuA8DWSDLZHPZki2GLMygwG9/yrLsw07y5DnnOSfPec973lf42gLQ2w389niWX+8N07VTzvFdgujTfiS/q6Rlu8CWK7ggoV1C23+47X80MdK/lbtXTSwszPHL93dwloVzsSGenK4EdnQk0F0bTV9VFL3VMbir9PRVR3u41xLtgdui/5ddEoulfaksNeaw9McsD/8cYeJuMF8Nqcm8rCXXoWabK4g0dwgVn65mx+cp5PXqWO/WsdWtIsetJbM3lN19GpJ6Qmm5EYCYO/QGfx09AQ8f8fvsKENDegZuriXLnkpeTwo7XCls7Eljb38y23oz2b6s9Wdj7jPyQk8yW6S9wt4UMhxpnLyeJEUILLAyhicfkFj7BSHVrWS7s9lwORdVyRm05m40BZ1oTJ1oC7pQmS4RZO5EXdgtoQt1wbJ+iQBJE0/mF5ifX1wxnHhATImLuH0X2XCunHTrPiJLbeiLnUQWX2FNUScRxXaiSuzoSxxESRdFmbuIKnZ41tESi6tTd7h1f8ZjODj0E/5KF6siWglpS0R70ogs6Bwy0U+QqZTwgQRym9fBBxmMHszgu5h0nsTGkaA8hVA4kft0Ia5PTjF2/weP4ejwDMYwGxtTrOQcfZ7NTS9iTLKyTn+RTfl1bDm1k9IqM183m+l/uZAvU4u4vW4Xu2OtZMTY2BTTLj35MTyeX/IYPrg9zsfKEqyheQR+GELY22HEWnXo+oJJOhiB+j0NhoZIREcYutcNtMiLOONVRrfChFORj12xB+FxWvzHcGQch76IjtR8ShqTqahOo7LSSHm9kYymMIRTkPLaaqoajbxSmYEjbjcuQz4Og4nLsSbsBjPi2vQYgzMrOfx5aJA+hYLzWm+eOaxkfY2SDRZf4o/4klavJPRaHNvNCm4IgVN4k3xIRsQJOVkWGdpWOfuzpE75bHySb36c8hhOfzvGscxs6vZsRNkfiKozEPVHgfgM+KNrURH5SQyZzVEcfy6HV/OyeLpDg4/LnzVng6UzgWw9EC8V9twCc49WymZwegrlkbdQvrkf7wt+eL8fjOxsCLJ2P7xadci6pQiszyKajiIO1yM7r0FukyM7E4qiU+B1bPNyDpdYWFwp7ZsT44jScrxqy/C1xqE4kYj3O2vxsRoQJ9cgrgjCpVy2pG/CsiUbrzrpExok1BUhGnchal6SOmVp2XAlwlv3JhB7q1A0lqKxq3jKFsyqtiBUTiVeLWrPp2y2BEFACJOR4cgrqhDVBxCWWgl10ryGvwEX2qMdOg0ZhwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Current state of the deployer",title:"Current state of the deployer",src:"/pages-test/static/d0e21842796b2016a7a4d821c2bd4430/3cbba/cp-deploy-current-state.png",srcSet:["/pages-test/static/d0e21842796b2016a7a4d821c2bd4430/7fc1e/cp-deploy-current-state.png 288w","/pages-test/static/d0e21842796b2016a7a4d821c2bd4430/a5df1/cp-deploy-current-state.png 576w","/pages-test/static/d0e21842796b2016a7a4d821c2bd4430/3cbba/cp-deploy-current-state.png 1152w","/pages-test/static/d0e21842796b2016a7a4d821c2bd4430/40d2a/cp-deploy-current-state.png 1161w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(s.b)("h1",null,"Using the Cloud Pak Deployer"),Object(s.b)("p",null,"There are 3 main steps you need to perform to provision a Cloud Pak for Data on ROKS. We’re assuming you’re starting from scratch."),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("a",{parentName:"li",href:"/pages-test/cp-deploy/install"},"Install the Cloud Pak Deployer")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("a",{parentName:"li",href:"/pages-test/cp-deploy/configure"},"Configure the environment you want to deploy")),Object(s.b)("li",{parentName:"ol"},Object(s.b)("a",{parentName:"li",href:"/pages-test/cp-deploy-run"},"Run the Cloud Pak Deployer to create the cluster and install the Cloud Pak")),Object(s.b)("li",{parentName:"ol"},"Optional: ",Object(s.b)("a",{parentName:"li",href:"/pages-test/cp-deploy/destroy"},"Destroy the assets")),Object(s.b)("li",{parentName:"ol"},"Optional: Run ",Object(s.b)("inlineCode",{parentName:"li"},"oc")," commands against the deployed environment ",Object(s.b)("a",{parentName:"li",href:"/pages-test/cp-deploy/command"},"Open a command line"))),Object(s.b)("h2",null,"What will I need?"),Object(s.b)("p",null,"To complete the deployment, you will need the following. Details will be provided when you need them."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A Linux server/VM to run the Cloud Pak Deployer"),Object(s.b)("li",{parentName:"ul"},"Docker or Podman installed on the Linux server"),Object(s.b)("li",{parentName:"ul"},"Git command or desktop"),Object(s.b)("li",{parentName:"ul"},"A Git token to pull from the Git repository"),Object(s.b)("li",{parentName:"ul"},"Your Cloud Pak entitlement key to pull images from the IBM Container Registry")),Object(s.b)("p",null,"Specifically, dependeding on the infrastructure:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"IBM Cloud VPC: An IBM Cloud API key that allows you to provision infrastructure"),Object(s.b)("li",{parentName:"ul"},"vSphere: A vSphere user and password which has infrastructure create permissions"),Object(s.b)("li",{parentName:"ul"},"AWS: AWS IAM credentials (access key and secret access key) and a ROSA login token"),Object(s.b)("li",{parentName:"ul"},"Existing OpenShift: The ",Object(s.b)("inlineCode",{parentName:"li"},"kubeconfig")," file that allows you cluster admin access to the OpenShift cluster")))}d.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-cp-deploy-overview-index-mdx-1824f430b82b405558a0.js.map