(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{"013z":function(A,e,t){"use strict";var a=t("q1tI"),n=t.n(a),s=t("NmYn"),i=t.n(s),o=t("Wbzz"),c=t("Xrax"),l=t("k4MR"),b=t("TSYQ"),d=t.n(b),r=t("QH2O"),g=t.n(r),p=t("qKvR"),j=function(A){var e,t=A.title,a=A.theme,n=A.tabs,s=void 0===n?[]:n;return Object(p.b)("div",{className:d()(g.a.pageHeader,(e={},e[g.a.withTabs]=s.length,e[g.a.darkMode]="dark"===a,e))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:g.a.text},t)))))},m=t("BAC9"),B=function(A){var e=A.relativePagePath,t=A.repository,a=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,n=t||a,s=n.baseUrl,i=n.subDirectory,c=s+"/edit/"+n.branch+i+"/src/pages"+e;return s?Object(p.b)("div",{className:"bx--row "+m.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:m.link,href:c},"Edit this page on GitHub"))):null},u=t("FCXl"),E=t("dI71"),h=t("I8xM"),x=function(A){function e(){return A.apply(this,arguments)||this}return Object(E.a)(e,A),e.prototype.render=function(){var A=this.props,e=A.title,t=A.tabs,a=A.slug,n=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((function(A){var e,t=i()(A,{lower:!0,strict:!0}),s=t===n,c=new RegExp(n+"/?(#.*)?$"),l=a.replace(c,t);return Object(p.b)("li",{key:A,className:d()((e={},e[h.selectedItem]=s,e),h.listItem)},Object(p.b)(o.Link,{className:h.link,to:""+l},A))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":e},Object(p.b)("ul",{className:h.list},s))))))},e}(n.a.Component),f=t("MjG9"),Q=t("CzIb"),w=t("Asxa"),N=t("OIbQ"),k=t.n(N),y=function(A){var e=A.date,t=new Date(e);return e?Object(p.b)(w.c,{className:k.a.row},Object(p.b)(w.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};e.a=function(A){var e=A.pageContext,t=A.children,a=A.location,n=A.Title,s=e.frontmatter,b=void 0===s?{}:s,d=e.relativePagePath,r=e.titleType,g=b.tabs,m=b.title,E=b.theme,h=b.description,w=b.keywords,N=b.date,k=Object(Q.a)().interiorTheme,Y=Object(o.useStaticQuery)("2456312558").site.pathPrefix,O=Y?a.pathname.replace(Y,""):a.pathname,C=g?O.split("/").filter(Boolean).slice(-1)[0]||i()(g[0],{lower:!0}):"",v=E||k;return Object(p.b)(l.a,{tabs:g,homepage:!1,theme:v,pageTitle:m,pageDescription:h,pageKeywords:w,titleType:r},Object(p.b)(j,{title:n?Object(p.b)(n,null):m,label:"label",tabs:g,theme:v}),g&&Object(p.b)(x,{title:m,slug:O,tabs:g,currentTab:C}),Object(p.b)(f.a,{padded:!0},t,Object(p.b)(B,{relativePagePath:d}),Object(p.b)(y,{date:N})),Object(p.b)(u.a,{pageContext:e,location:a,slug:O,tabs:g,currentTab:C}),Object(p.b)(c.a,null))}},BAC9:function(A,e,t){A.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(A,e,t){A.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(A,e,t){A.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(A,e,t){A.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},pfKO:function(A,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return c})),t.d(e,"default",(function(){return j}));var a=t("wx14"),n=t("zLVn"),s=(t("q1tI"),t("7ljp")),i=(t("013z"),t("QH4P")),o=(t("qKvR"),["components"]),c={},l=function(A){return function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(s.b)("div",e)}},b=l("Row"),d=l("Column"),r=l("ArticleCard"),g={_frontmatter:c},p=i.a;function j(A){var e=A.components,t=Object(n.a)(A,o);return Object(s.b)(p,Object(a.a)({},g,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)(b,{mdxType:"Row"},Object(s.b)(d,{colMd:2,colLg:2,noGutterMdLeft:!0,mdxType:"Column"},Object(s.b)(r,{title:"Introduction & Overview",color:"dark",href:"/introduction",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUBA//EABUBAQEAAAAAAAAAAAAAAAAAAAIB/9oADAMBAAIQAxAAAAF3lYzSSBv/xAAYEAADAQEAAAAAAAAAAAAAAAAAAQISMf/aAAgBAQABBQKZRw3IqZTYz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAgEBPwFbW//EABcQAQADAAAAAAAAAAAAAAAAAAAgMTL/2gAIAQEABj8CW1D/xAAaEAACAgMAAAAAAAAAAAAAAAAAAREhMUFR/9oACAEBAAE/IWEUtwJ9DoHnbJJ5P//aAAwDAQACAAMAAAAQ6C//xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQMBAT8QjH//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/EAP/xAAbEAEBAQACAwAAAAAAAAAAAAABEQAhQVGBkf/aAAgBAQABPxABwfcJoh8zK7fquBIj3gdFkF6wgHN//9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Overview",title:"Overview",src:"/static/0db80f86e38344d45187ba7910262efb/2e753/niklas-ohlrogge-wtgjxJCZM3A-unsplash.jpg",srcSet:["/static/0db80f86e38344d45187ba7910262efb/69549/niklas-ohlrogge-wtgjxJCZM3A-unsplash.jpg 288w","/static/0db80f86e38344d45187ba7910262efb/473e3/niklas-ohlrogge-wtgjxJCZM3A-unsplash.jpg 576w","/static/0db80f86e38344d45187ba7910262efb/2e753/niklas-ohlrogge-wtgjxJCZM3A-unsplash.jpg 1152w","/static/0db80f86e38344d45187ba7910262efb/74f4b/niklas-ohlrogge-wtgjxJCZM3A-unsplash.jpg 1728w","/static/0db80f86e38344d45187ba7910262efb/de5bb/niklas-ohlrogge-wtgjxJCZM3A-unsplash.jpg 2304w","/static/0db80f86e38344d45187ba7910262efb/538f4/niklas-ohlrogge-wtgjxJCZM3A-unsplash.jpg 6032w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(s.b)(d,{colMd:2,colLg:2,noGutterMdLeft:!0,mdxType:"Column"},Object(s.b)(r,{title:"Deploy",color:"dark",href:"/cp-deploy/overview",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAwABAv/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAHCAh7gm//EABkQAQADAQEAAAAAAAAAAAAAAAEAAiIRMf/aAAgBAQABBQJ1DlW7pzU9Z//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABwQAAIBBQEAAAAAAAAAAAAAAAABAhARISIxYf/aAAgBAQAGPwKDktfDPLjFX//EABwQAQACAgMBAAAAAAAAAAAAAAEAESExQVFhkf/aAAgBAQABPyEoCp0qAVHg9IGIQvUGC7Fl0q7lLzf2f//aAAwDAQACAAMAAAAQj8//xAAWEQEBAQAAAAAAAAAAAAAAAAABECH/2gAIAQMBAT8QdZ//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAgEBPxAZ/8QAHBABAAIDAAMAAAAAAAAAAAAAAREhADFBYaHR/9oACAEBAAE/EGdDUQkIU5bI6kQNj5wN6iQ0NnrIymx6RH3JkOmKmskVsUTxn//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Deploy",title:"Deploy",src:"/static/6031c787542cb75bec528227d27d5f0b/2e753/lenny-kuhne-jHZ70nRk7Ns-unsplash.jpg",srcSet:["/static/6031c787542cb75bec528227d27d5f0b/69549/lenny-kuhne-jHZ70nRk7Ns-unsplash.jpg 288w","/static/6031c787542cb75bec528227d27d5f0b/473e3/lenny-kuhne-jHZ70nRk7Ns-unsplash.jpg 576w","/static/6031c787542cb75bec528227d27d5f0b/2e753/lenny-kuhne-jHZ70nRk7Ns-unsplash.jpg 1152w","/static/6031c787542cb75bec528227d27d5f0b/74f4b/lenny-kuhne-jHZ70nRk7Ns-unsplash.jpg 1728w","/static/6031c787542cb75bec528227d27d5f0b/de5bb/lenny-kuhne-jHZ70nRk7Ns-unsplash.jpg 2304w","/static/6031c787542cb75bec528227d27d5f0b/621b7/lenny-kuhne-jHZ70nRk7Ns-unsplash.jpg 6000w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(s.b)(d,{colMd:2,colLg:2,noGutterMdLeft:!0,mdxType:"Column"},Object(s.b)(r,{title:"Advanced Configuration",color:"dark",href:"/advanced/gitops",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.27777777777779%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMBBP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHijs4Kj//EABoQAAIDAQEAAAAAAAAAAAAAAAECABIhAyL/2gAIAQEAAQUCC3ld6L7DMJZi+z//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwFX/8QAGRABAAMBAQAAAAAAAAAAAAAAAAEhMRHB/9oACAEBAAY/AqeJ5Cpa1//EABwQAAMAAgMBAAAAAAAAAAAAAAABESFhMVFxgf/aAAgBAQABPyFjLps2ZvsihkGFj8E5bz4pk66Z/9oADAMBAAIAAwAAABAUL//EABcRAQEBAQAAAAAAAAAAAAAAAAEAETH/2gAIAQMBAT8QesBl/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAERMf/aAAgBAgEBPxCMWf/EABoQAQEBAQEBAQAAAAAAAAAAAAERADEhQYH/2gAIAQEAAT8QM4YLUEVvMUoAfB8XluVBh8guQraAwfPzJAb4FmViU6pv/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Under the hood",title:"Under the hood",src:"/static/0db26b67bdde9cd3669c1fd4c410dc99/2e753/roman-synkevych-wX2L8L-fGeA-unsplash.jpg",srcSet:["/static/0db26b67bdde9cd3669c1fd4c410dc99/69549/roman-synkevych-wX2L8L-fGeA-unsplash.jpg 288w","/static/0db26b67bdde9cd3669c1fd4c410dc99/473e3/roman-synkevych-wX2L8L-fGeA-unsplash.jpg 576w","/static/0db26b67bdde9cd3669c1fd4c410dc99/2e753/roman-synkevych-wX2L8L-fGeA-unsplash.jpg 1152w","/static/0db26b67bdde9cd3669c1fd4c410dc99/74f4b/roman-synkevych-wX2L8L-fGeA-unsplash.jpg 1728w","/static/0db26b67bdde9cd3669c1fd4c410dc99/de5bb/roman-synkevych-wX2L8L-fGeA-unsplash.jpg 2304w","/static/0db26b67bdde9cd3669c1fd4c410dc99/3fdcb/roman-synkevych-wX2L8L-fGeA-unsplash.jpg 5327w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(s.b)(d,{colMd:2,colLg:2,noGutterMdLeft:!0,mdxType:"Column"},Object(s.b)(r,{title:"Under the Hood",color:"dark",href:"/cpd-design",actionIcon:"arrowRight",mdxType:"ArticleCard"},Object(s.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(s.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"66.66666666666666%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAACAwT/2gAMAwEAAhADEAAAAU40VQ6gNMP/xAAaEAACAgMAAAAAAAAAAAAAAAABAgASBBEi/9oACAEBAAEFAiGi7SODZaucjl3n/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/Aa2v/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAERAiH/2gAIAQIBAT8By+wiP//EABwQAAICAgMAAAAAAAAAAAAAAAARASECMTJBcf/aAAgBAQAGPwJbk6ZRwgWNIjw//8QAGhABAAMBAQEAAAAAAAAAAAAAAQARIVExof/aAAgBAQABPyHaLTFv5DZnTYbg+XPdJ7FeBQaGxXL/2gAMAwEAAgADAAAAECTf/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAwEBPxAc0lb/xAAYEQEBAAMAAAAAAAAAAAAAAAABABEhQf/aAAgBAgEBPxB1s32MV//EABsQAAIDAQEBAAAAAAAAAAAAAAERACFRQTGh/9oACAEBAAE/EA2+81Yf0wEpUsWrIwDU2AmXhrRDIdwICFhsYIjnytn/2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(s.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Under the hood",title:"Under the hood",src:"/static/5633a95e739f5039e994c7bfa084efe9/2e753/neonbrand-2K_-PG95qlI-unsplash.jpg",srcSet:["/static/5633a95e739f5039e994c7bfa084efe9/69549/neonbrand-2K_-PG95qlI-unsplash.jpg 288w","/static/5633a95e739f5039e994c7bfa084efe9/473e3/neonbrand-2K_-PG95qlI-unsplash.jpg 576w","/static/5633a95e739f5039e994c7bfa084efe9/2e753/neonbrand-2K_-PG95qlI-unsplash.jpg 1152w","/static/5633a95e739f5039e994c7bfa084efe9/74f4b/neonbrand-2K_-PG95qlI-unsplash.jpg 1728w","/static/5633a95e739f5039e994c7bfa084efe9/de5bb/neonbrand-2K_-PG95qlI-unsplash.jpg 2304w","/static/5633a95e739f5039e994c7bfa084efe9/baa4f/neonbrand-2K_-PG95qlI-unsplash.jpg 4896w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-index-mdx-f3506522a9205cfca9ea.js.map