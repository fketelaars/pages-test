(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),r=n("NmYn"),o=n.n(r),l=n("Wbzz"),s=n("Xrax"),c=n("k4MR"),p=n("TSYQ"),b=n.n(p),d=n("QH2O"),u=n.n(d),h=n("qKvR"),m=function(e){var t,n=e.title,a=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(h.b)("div",{className:b()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===a,t))},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:u.a.text},n)))))},f=n("BAC9"),O=function(e){var t=e.relativePagePath,n=e.repository,a=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=n||a,r=i.baseUrl,o=i.subDirectory,s=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(h.b)("div",{className:"bx--row "+f.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:f.link,href:s},"Edit this page on GitHub"))):null},j=n("FCXl"),g=n("dI71"),y=n("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(g.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],r=n.map((function(e){var t,n=o()(e,{lower:!0,strict:!0}),r=n===i,s=new RegExp(i+"/?(#.*)?$"),c=a.replace(s,n);return Object(h.b)("li",{key:e,className:b()((t={},t[y.selectedItem]=r,t),y.listItem)},Object(h.b)(l.Link,{className:y.link,to:""+c},e))}));return Object(h.b)("div",{className:y.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",{"aria-label":t},Object(h.b)("ul",{className:y.list},r))))))},t}(i.a.Component),N=n("MjG9"),w=n("CzIb"),k=n("Asxa"),C=n("OIbQ"),x=n.n(C),T=function(e){var t=e.date,n=new Date(t);return t?Object(h.b)(k.c,{className:x.a.row},Object(h.b)(k.a,null,Object(h.b)("div",{className:x.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,i=e.Title,r=t.frontmatter,p=void 0===r?{}:r,b=t.relativePagePath,d=t.titleType,u=p.tabs,f=p.title,g=p.theme,y=p.description,k=p.keywords,C=p.date,x=Object(w.a)().interiorTheme,P=Object(l.useStaticQuery)("2456312558").site.pathPrefix,S=P?a.pathname.replace(P,""):a.pathname,I=u?S.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",A=g||x;return Object(h.b)(c.a,{tabs:u,homepage:!1,theme:A,pageTitle:f,pageDescription:y,pageKeywords:k,titleType:d},Object(h.b)(m,{title:i?Object(h.b)(i,null):f,label:"label",tabs:u,theme:A}),u&&Object(h.b)(v,{title:f,slug:S,tabs:u,currentTab:I}),Object(h.b)(N.a,{padded:!0},n,Object(h.b)(O,{relativePagePath:b}),Object(h.b)(T,{date:C})),Object(h.b)(j.a,{pageContext:t,location:a,slug:S,tabs:u,currentTab:I}),Object(h.b)(s.a,null))}},"2HeZ":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return u}));var a,i=n("wx14"),r=n("zLVn"),o=(n("q1tI"),n("7ljp")),l=n("013z"),s=(n("qKvR"),["components"]),c={},p=(a="InlineNotification",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),b={_frontmatter:c},d=l.a;function u(e){var t=e.components,n=Object(r.a)(e,s);return Object(o.b)(d,Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",null,"Running the Cloud Pak Deployer on vSphere"),Object(o.b)("h2",null,"Topology"),Object(o.b)("p",null,"A typical setup of the vSphere cluster with OpenShift is pictured below:\n",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"784px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"104.16666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAAsTAAALEwEAmpwYAAADm0lEQVQ4y41Ua2vdRhD13+rf6J/Kl1IolBTatBBKCukD4oYSEkyc1Nh1Hce+ra+vX/G1r6179ZZ2Je1qV6/T2ZV8bfcBHRh2jrR7NHtmNCsg67pu6cY+ffISn3z7wsbXfITRYhV1U2Ga/IaHOx8DbY53aYKP3j7DVGR2XzucXbkhuWvP3uzj+a/7No4KB1uHm0jTAl5+jrWTb9A1JT7wDA/GewikMBmhaRq0bYsVc6iua0wmE8znc/hhiExoiLKirBqUqkHCFZTWUKpFQeeVrqEVvZc1PatQ1eRV75bQsHPO7dpIiUoIlEUBmedoaTOlQHdqyRsK6yFu0Rk8xHTYZmoJTaomS2P67Azu4QST8RjjvT0IxkApoFManf4vr9CVpfUloaYXPaO2uDFfHaz7P26KSmeXhOb+1pSimzX2+n3Buju0d9e/mdmr1b8Q0kOjSTtk+PtM4fFWiJ8nFZ5sB1id1Hi6m+KnPwr8sJ/j+/eMYoHvtkPETPdtY7K5IWxkCSE1WCGJW+PlicYX2w2+3q3x1U5l/bM1Hw83OB7tNnj0rsKXOy0+39DwkyHDXrpew9CLcTlz4QcZBLVELjtEuUQqGjDr7YBriuse08eTrELGCqysb45wMXOsbi21AYsFktzBWbzef6hhuEjfIhRH/Q26AtN0Hb44sJirGeHX4NJBwSjDg8NjzK4cNNQ2bdcSYYEgDTCNegJVlzh0t7Bg0wErjN1NOOkHixMR4MDdQMQD5KnESuB71NRs2YdpnGHmCThhhXlkVkm4wpWvsIhv8WzAV0FJcY2ZW0BkotfQFOa+hg7COIGqqD/JmUwgqfoGG+f3MOlYxraQBRe3Vda6rzJP8nvtJeuE9HyNRf7noGmGk+gVnGzP4lie4zR+hbi4RM7UPzNkcb7swV6zCkfuCH626AlJmiN3Hx53+v2SYeK+pyqnREgaCkFDwAyEoQ/jkONywUkrYTW8Dkgn0sgJ9D18bXFBqyRvcUW656Ztjo5PEQTBktBo6MwXSFhK46uznkoPuWIDbgn7hM17k3GFRC6oXwsiJA1/fP4Gnh9SlSvSskaWlAj4BUbu6jCJFU6jNerFzUGEFpPgF1wOONcejqMXmLMDCE7zsKSRU5Zq2TY8KaiKijTLUJOUFWVxHk7pgEfkt/g6de2YKKiYJ8EJfLpRZjS8KYrRsaE/hUcpYj8BizLEQYqI4tDLEHmccLLE4RKbPTmCRYI84fgL+iZAhzy1+5QAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"vSphere configuration",title:"vSphere configuration",src:"/static/7c8f9b90ed9942834514dffe84ef1794/ee623/vsphere-ocs-nfs.png",srcSet:["/static/7c8f9b90ed9942834514dffe84ef1794/7fc1e/vsphere-ocs-nfs.png 288w","/static/7c8f9b90ed9942834514dffe84ef1794/a5df1/vsphere-ocs-nfs.png 576w","/static/7c8f9b90ed9942834514dffe84ef1794/ee623/vsphere-ocs-nfs.png 784w"],sizes:"(max-width: 784px) 100vw, 784px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)("p",null,"When deploying OpenShift and the Cloud Pak(s) on VMWare vSphere, there is a dependency on a DHCP server for issuing IP addresses to the newly configured cluster nodes. Also, once the OpenShift cluster has been installed, valid fully qualified host names are required to connect to the OpenShift API server at port ",Object(o.b)("inlineCode",{parentName:"p"},"6443")," and applications running behind the ingress server at port ",Object(o.b)("inlineCode",{parentName:"p"},"443"),". The Cloud Pak deployer cannot set up a DHCP server or a DNS server and to be able to connect to OpenShift or to reach the Cloud Pak after installation, name entries must be set up."),Object(o.b)("h3",null,"DNS configuration"),Object(o.b)("p",null,"Ensure that the DNS server has the following entries:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"api.openshift_name.domain_name")," —> Point to the ",Object(o.b)("inlineCode",{parentName:"li"},"api_vip")," address configured in the ",Object(o.b)("inlineCode",{parentName:"li"},"openshift")," object"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"*.apps.openshift_name.domain_name")," —> Point to the ",Object(o.b)("inlineCode",{parentName:"li"},"ingress_vip")," address configured in the ",Object(o.b)("inlineCode",{parentName:"li"},"openshift")," object")),Object(o.b)("p",null,"If you do not configure the DNS entries upfront, the deployer will still run and it will “spoof” the required entries in the container’s ",Object(o.b)("inlineCode",{parentName:"p"},"/etc/hosts")," file. However to be able to connect to OpenShift and access the Cloud Pak, the DNS entries are required."),Object(o.b)("h2",null,"Obtain the vSphere user and password"),Object(o.b)("p",null,"In order for the Cloud Pak Deployer to create the infrastructure and deploy the IBM Cloud Pak, it must have provisioning access to vSphere and it needs the vSphere user and password. The user must have permissions to create VM folders and virtual machines."),Object(o.b)("h2",null,"Acquire an OpenShift pull secret"),Object(o.b)("p",null,"To install OpenShift you need an OpenShift pull secret which holds your entitlement."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Navigate to ",Object(o.b)("a",{parentName:"li",href:"https://console.redhat.com/openshift/install/pull-secret"},"https://console.redhat.com/openshift/install/pull-secret")," and download the pull secret into file ",Object(o.b)("inlineCode",{parentName:"li"},"/tmp/ocp_pullsecret.json"))),Object(o.b)("h2",null,"Acquire an IBM Cloud Pak Entitlement Key"),Object(o.b)("p",null,"If you want to pull the Cloud Pak images from the entitled registry (i.e. an online install), or if you want to mirror the images to your private registry, you need to download the entitlement key. You can skip this step if you’re installing from a private registry and all Cloud Pak images have already been downloaded to the private registry."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Navigate to ",Object(o.b)("a",{parentName:"li",href:"https://myibm.ibm.com/products-services/containerlibrary"},"https://myibm.ibm.com/products-services/containerlibrary")," and login with your IBMId credentials"),Object(o.b)("li",{parentName:"ul"},"Select ",Object(o.b)("strong",{parentName:"li"},"Get Entitlement Key")," and create a new key (or copy your existing key)"),Object(o.b)("li",{parentName:"ul"},"Copy the key value")),Object(o.b)(p,{kind:"warning",mdxType:"InlineNotification"},"As stated for the API key, you can choose to download the entitlement key to a file. However, when we reference the entitlement key, we mean the 80+ character string that is displayed, not the file."),Object(o.b)("h2",null,"Prepare for running"),Object(o.b)("h3",null,"Set environment variables"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"export VSPHERE_USER=your_vsphere_user\nexport VSPHERE_PASSWORD=password_of_the_vsphere_user\nexport CP_ENTITLEMENT_KEY=your_cp_entitlement_key\n\nexport STATUS_DIR=/data/status/sample\nexport CONFIG_DIR=/data/config/sample\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"VSPHERE_USER"),": This is the user name of the vSphere user, often this is something like ",Object(o.b)("inlineCode",{parentName:"li"},"admin@vsphere.local")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"VSPHERE_PASSWORD"),": The password of the vSphere user. Be careful with special characters like ",Object(o.b)("inlineCode",{parentName:"li"},"$"),", ",Object(o.b)("inlineCode",{parentName:"li"},"!")," as they are not accepted by the IPI provisioning of OpenShift"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CP_ENTITLEMENT_KEY"),": This is the entitlement key you acquired as per the instructions above, this is a 80+ character string"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"STATUS_DIR"),": The directory where the Cloud Pak Deployer keeps all status information and logs files. ",Object(o.b)("strong",{parentName:"li"},"Please note")," that if you have chosen to use a File Vault, the properties file is keps under the ",Object(o.b)("inlineCode",{parentName:"li"},"vault")," directory within the status directory"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"CONFIG_DIR"),": Directory that holds the configuration, it must have ",Object(o.b)("inlineCode",{parentName:"li"},"config"),", ",Object(o.b)("inlineCode",{parentName:"li"},"defaults")," and ",Object(o.b)("inlineCode",{parentName:"li"},"inventory")," subdirectories")),Object(o.b)(p,{mdxType:"InlineNotification"},"Cloud Pak Deployer uses the status directory to logs its activities and also to keep track of its running state. For a given environment you're provisioning or destroying, you should always specify the same status directory to avoid contention between different deploy runs. You can run the Cloud Pak Deployer in parallel for different environments (different configuration directories)."),Object(o.b)("h3",null,"Create the secrets needed for vSphere"),Object(o.b)("p",null,"You need to store the vSphere user and password in the vault so that the deployer has access to them when doing the IPI install."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"./cp-deploy.sh vault set \\\n    --vault-secret vsphere-user \\\n    --vault-secret-value $VSPHERE_USER\n\n./cp-deploy.sh vault set \\\n    --vault-secret vsphere-password \\\n    --vault-secret-value $VSPHERE_PASSWORD\n\n./cp-deploy.sh vault set \\\n    --vault-secret ocp-pullsecret \\\n    --vault-secret-file /tmp/ocp_pullsecret.json\n\n./cp-deploy.sh vault set \\\n    --vault-secret ocp-ssh-pub-key \\\n    --vault-secret-file ~/.ssh/id_rsa.pub\n")),Object(o.b)("h2",null,"Optional: validate the configuration"),Object(o.b)("p",null,"If you only want to validate the configuration, you can run the dpeloyer with the ",Object(o.b)("inlineCode",{parentName:"p"},"--check-only")," argument. This will run the first stage to validate variables and vault secrets and then execute the generators."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"./cp-deploy.sh env apply -e env_id=pluto-01 --check-only\n")),Object(o.b)("h2",null,"Run the Cloud Pak Deployer"),Object(o.b)("p",null,"To run the container using a local configuration input directory and a data directory where temporary and state is kept, use the example below. If you don’t specify the status directory, the deployer will automatically create a temporary directory. Please note that the status directory will also hold secrets if you have configured a flat file vault. If you lose the directory, you will not be able to make changes to the configuration and adjust the deployment. It is best to specify a permanent directory that you can reuse later. If you specify an existing directory the current user ",Object(o.b)("strong",{parentName:"p"},"must")," be the owner of the directory. Failing to do so may cause the container to fail with insufficient permissions."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"./cp-deploy.sh env apply -e env_id=pluto-01\n")),Object(o.b)("p",null,"In the above command, the ",Object(o.b)("inlineCode",{parentName:"p"},"env_id")," extra variable defines the names of the objects that are being created; these are referenced in the ",Object(o.b)("inlineCode",{parentName:"p"},".yaml")," configuration files as ",Object(o.b)("inlineCode",{parentName:"p"},"{{ env_id }}"),". For more information about the extra (dynamic) variables, see ",Object(o.b)("a",{parentName:"p",href:"/advanced/advanced-configuration"},"advanced configuration"),"."),Object(o.b)("p",null,"When running the command, the container will start as a daemon and the command will tail-follow the logs. You can press Ctrl-C at any time to interrupt the logging but the container will continue to run in the background."),Object(o.b)("p",null,"You can return to view the logs as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"./cp-deploy.sh env logs\n")),Object(o.b)("p",null,"Deploying the infrastructure, preparing OpenShift and installing the Cloud Pak will take a long time, typically between 1-5 hours,dependent on which Cloud Pak cartridges you configured. For estimated duration of the steps, refer to ",Object(o.b)("a",{parentName:"p",href:"/cpd-design/timings"},"Timings"),"."),Object(o.b)("p",null,"If you need to interrupt the automation, use CTRL-C to stop the logging output and then use:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"./cp-deploy.sh env kill\n")),Object(o.b)("h2",null,"DNS entries needed for vSphere provisioning"),Object(o.b)("p",null,"During the provisioning and configuration process, the deployer needs access to the OpenShift API server and the ingress server. These have been specified in the ",Object(o.b)("inlineCode",{parentName:"p"},"openshift")," object. To avoid any dependencies on the DNS entries for these servers to be present prior to provisioning, the deployer will add ",Object(o.b)("inlineCode",{parentName:"p"},"api.<cluster + domain name>")," and several <.apps.<cluster + domain name>",Object(o.b)("inlineCode",{parentName:"p"},"entries to the"),"/etc/hosts` file within the container. Once the deployer has completed, but ideally even before, you must add the appropriate entries to our DNS server:"),Object(o.b)("p",null,"*",".apps.<cluster + domain name> must be mapped to the ",Object(o.b)("inlineCode",{parentName:"p"},"ingress_vip")," address\napi.<cluster + domain name> must be mapped to the ",Object(o.b)("inlineCode",{parentName:"p"},"api_vip")," address"),Object(o.b)("h2",null,"On failure"),Object(o.b)("p",null,"If the Cloud Pak Deployer fails, for example because certain infrastructure components are temporarily not available, fix the cause if needed and then just re-run it with the same ",Object(o.b)("inlineCode",{parentName:"p"},"CONFIG_DIR")," and ",Object(o.b)("inlineCode",{parentName:"p"},"STATUS_DIR")," as well extra variables. The provisioning process has been designed to be idempotent and it will not redo actions that have already completed successfully."),Object(o.b)("h2",null,"Finishing up"),Object(o.b)("p",null,"Once the process has finished, it will output the URLs by which you can access the deployed Cloud Pak. You can also find this information under the ",Object(o.b)("inlineCode",{parentName:"p"},"cloud-paks")," directory in the status directory you specified."),Object(o.b)("p",null,"To retrieve the Cloud Pak URL(s):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cat $STATUS_DIR/cloud-paks/*\n")),Object(o.b)("p",null,"This will show the Cloud Pak URLs:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-output"},"Cloud Pak for Data URL for cluster pluto-01 and project zen-40:\nhttps://cpd-zen-40.apps.pluto-01.example.com\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"admin")," password can be retrieved from the vault as follows:"),Object(o.b)("p",null,"List the secrets in the vault:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"./cp-deploy.sh vault list\n")),Object(o.b)("p",null,"This will show something similar to the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-output"},"Secret list for group sample:\n- vsphere-user\n- vsphere-password\n- sample-kubeadmin-password\n- cp4d_admin_zen_sample_sample\n")),Object(o.b)("p",null,"You can then retrieve the Cloud Pak for Data admin password like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"./cp-deploy.sh vault get --vault-secret cp4d_admin_zen_sample_sample\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-output"},"PLAY [Secrets] *****************************************************************\nincluded: /cloud-pak-deployer/automation-roles/99-generic/vault/vault-get-secret/tasks/get-secret-file.yml for localhost\ncp4d_admin_zen_sample_sample: gelGKrcgaLatBsnAdMEbmLwGr\n")),Object(o.b)("h2",null,"Post-install configuration"),Object(o.b)("p",null,"You can find examples of a couple of typical changes you may want to do here: ",Object(o.b)("a",{parentName:"p",href:"/cp-deploy/post-run"},"Post-run changes"),"."))}u.isMDXComponent=!0},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-cp-deploy-run-run-on-vsphere-mdx-d0e4d4b5b9044e4a3414.js.map