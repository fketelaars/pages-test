(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("NmYn"),o=a.n(i),l=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),p=a("QH2O"),u=a.n(p),h=a("qKvR"),m=function(e){var t,a=e.title,n=e.theme,r=e.tabs,i=void 0===r?[]:r;return Object(h.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=i.length,t[u.a.darkMode]="dark"===n,t))},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:u.a.text},a)))))},g=a("BAC9"),y=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,i=r.baseUrl,o=r.subDirectory,s=i+"/edit/"+r.branch+o+"/src/pages"+t;return i?Object(h.b)("div",{className:"bx--row "+g.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),i=a===r,s=new RegExp(r+"/?(#.*)?$"),c=n.replace(s,a);return Object(h.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(h.b)(l.Link,{className:f.link,to:""+c},e))}));return Object(h.b)("div",{className:f.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",{"aria-label":t},Object(h.b)("ul",{className:f.list},i))))))},t}(r.a.Component),N=a("MjG9"),C=a("CzIb"),w=a("Asxa"),x=a("OIbQ"),k=a.n(x),T=function(e){var t=e.date,a=new Date(t);return t?Object(h.b)(w.c,{className:k.a.row},Object(h.b)(w.a,null,Object(h.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,i=t.frontmatter,b=void 0===i?{}:i,d=t.relativePagePath,p=t.titleType,u=b.tabs,g=b.title,j=b.theme,f=b.description,w=b.keywords,x=b.date,k=Object(C.a)().interiorTheme,I=Object(l.useStaticQuery)("2456312558").site.pathPrefix,_=I?n.pathname.replace(I,""):n.pathname,P=u?_.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",S=j||k;return Object(h.b)(c.a,{tabs:u,homepage:!1,theme:S,pageTitle:g,pageDescription:f,pageKeywords:w,titleType:p},Object(h.b)(m,{title:r?Object(h.b)(r,null):g,label:"label",tabs:u,theme:S}),u&&Object(h.b)(v,{title:g,slug:_,tabs:u,currentTab:P}),Object(h.b)(N.a,{padded:!0},a,Object(h.b)(y,{relativePagePath:d}),Object(h.b)(T,{date:x})),Object(h.b)(O.a,{pageContext:t,location:n,slug:_,tabs:u,currentTab:P}),Object(h.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},m4sI:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return u}));var n,r=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),l=a("013z"),s=(a("qKvR"),["components"]),c={},b=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),d={_frontmatter:c},p=l.a;function u(e){var t=e.components,a=Object(i.a)(e,s);return Object(o.b)(p,Object(r.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",null,"Private registry and air-gapped installations"),Object(o.b)("p",null,"In cases where the OpenShift cluster is in an environment with limited internet connectivity, you may want OpenShift to pull Cloud Pak images from a private image registry (aka container registry). There may also be other reasons for choosing a private registry over the entitled registry."),Object(o.b)("h2",null,"Configuring a private registry"),Object(o.b)("p",null,"The below steps outline how to configure a private registry for a Cloud Pak deployment. When the ",Object(o.b)("inlineCode",{parentName:"p"},"image_registry")," object is referenced by the Cloud Pak object (such as ",Object(o.b)("inlineCode",{parentName:"p"},"cp4d"),"), the deployer makes the following changes in OpenShift so that images are pulled from the private registry:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Global pull secret: The image registry’s credentials are retrieved from the vault (the secret name must be ",Object(o.b)("inlineCode",{parentName:"li"},"image-registry-<name>")," and an entry for the registry is added to the global pull secret (secret ",Object(o.b)("inlineCode",{parentName:"li"},"pull-secret")," in project ",Object(o.b)("inlineCode",{parentName:"li"},"openshift-config"),")."),Object(o.b)("li",{parentName:"ul"},"ImageContentSourcePolicy: This is a mapping between the original location of the image, for example ",Object(o.b)("inlineCode",{parentName:"li"},"quay.io/opencloudio/zen-metastoredb@sha256:582cac2366dda8520730184dec2c430e51009a854ed9ccea07db9c3390e13b29")," is mapped to ",Object(o.b)("inlineCode",{parentName:"li"},"registry.coc.uk.ibm.com:15000/opencloudio/zen-metastoredb@sha256:582cac2366dda8520730184dec2c430e51009a854ed9ccea07db9c3390e13b29"),"."),Object(o.b)("li",{parentName:"ul"},"Image registry settings: OpenShift keeps image registry settings in custom resource ",Object(o.b)("inlineCode",{parentName:"li"},"image.config.openshift.io/cluster"),". If a private registry with a self-signed certificate is configured, certificate authority’s PEM secret must be created as a configmap in the ",Object(o.b)("inlineCode",{parentName:"li"},"openshift-config")," project. The deployer uses the vault secret referenced in ",Object(o.b)("inlineCode",{parentName:"li"},"registry_trusted_ca_secret")," property to create or update the configmap so that OpenShift can connect to the registry in a secure manner. Alternatively, you add the ",Object(o.b)("inlineCode",{parentName:"li"},"registry_insecure: true")," property to pull images without checking the certificate.")),Object(o.b)("h3",null,"Using the IBM Container Registry as a private registry"),Object(o.b)("p",null,"If you want to use a private registry when running the deployer for a ROKS cluster on IBM Cloud, you must use the IBM Container Registry (ICR) service. The deployer will automatically create the specified namespace in the ICR and set up the credentials accordingly. Configure an ",Object(o.b)("a",{parentName:"p",href:"/cpd-design/objects/cloud-paks#image_registry"},"image_registry")," object with the host name of the private registry and the namespace that holds the images. An example of using the ICR as a private registry:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"image_registry:\n- name: cpd405\n  registry_host_name: de.icr.io\n  registry_namespace: cpd405\n")),Object(o.b)("p",null,"The registry host name must end with ",Object(o.b)("inlineCode",{parentName:"p"},"icr.io")," and the registry namespace is mandatory. No other properties are needed; the deployer will retrieve them from IBM Cloud."),Object(o.b)("p",null,"If you have already created the ICR namespace, create a vault secret for the image registry credentials:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'./cp-deploy.sh vault set \\\n  -vs image-registry-cpd405\n  -vsv "admin:very_s3cret"\n')),Object(o.b)("p",null,"An example of configuring the private registry for a ",Object(o.b)("inlineCode",{parentName:"p"},"cp4d")," object is below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cp4d:\n- project: zen-40\n  openshift_cluster_name: {{ env_id }}\n  cp4d_version: 4.0\n  openshift_storage_name: ocs-storage\n  image_registry_name: cpd405\n")),Object(o.b)("p",null,"The Cloud Pak for Data installation refers to the ",Object(o.b)("inlineCode",{parentName:"p"},"cpd405")," ",Object(o.b)("inlineCode",{parentName:"p"},"image_registry")," object."),Object(o.b)("p",null,"If the ",Object(o.b)("inlineCode",{parentName:"p"},"ibm_cp_entitlement_key")," secret is in the vault at the time of running the deployer, the required images will be mirrored from the entitled registry to the private registry. If all images are already available in the private registry, just specify the ",Object(o.b)("inlineCode",{parentName:"p"},"--skip-mirror-images")," flag when you run the deployer."),Object(o.b)("h2",null,"Using a private registry for the Cloud Pak installation (non-IBM Cloud)"),Object(o.b)("p",null,"Configure an ",Object(o.b)("a",{parentName:"p",href:"/cpd-design/objects/cloud-paks#image_registry"},"image_registry")," object with the host name of the private registry and some optional properties such as port number, CA certificate and whether insecure access to the registry is allowed."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"image_registry:\n- name: cpd405\n  registry_host_name: registry.coc.uk.ibm.com\n  registry_port: 15000\n  registry_trusted_ca_secret: cpd405-ca-bundle\n")),Object(o.b)("p",null,"To create the vault secret for the image registry credentials:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'./cp-deploy.sh vault set \\\n  -vs image-registry-cpd405\n  -vsv "admin:very_s3cret"\n')),Object(o.b)("p",null,"To create the vault secret for the CA bundle:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"./cp-deploy.sh vault set \\\n  -vs cpd405-ca-bundle\n  -vsf /tmp/ca.crt\n")),Object(o.b)("p",null,"Where ",Object(o.b)("inlineCode",{parentName:"p"},"ca.crt")," looks something like this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"-----BEGIN CERTIFICATE-----\nMIIFszCCA5ugAwIBAgIUT02v9OdgdvjgQVslCuL0wwCVaE8wDQYJKoZIhvcNAQEL\nBQAwaTELMAkGA1UEBhMCVVMxETAPBgNVBAgMCE5ldyBZb3JrMQ8wDQYDVQQHDAZB\ncm1vbmsxFjAUBgNVBAoMDUlCTSBDbG91ZCBQYWsxHjAcBgNVBAMMFUlCTSBDbG91\n...\nmcutkgtbkq31XYZj0CiM451Qp8KnTx0=\n-----END CERTIFICATE-\n")),Object(o.b)("p",null,"An example of configuring the private registry for a ",Object(o.b)("inlineCode",{parentName:"p"},"cp4d")," object is below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"cp4d:\n- project: zen-40\n  openshift_cluster_name: {{ env_id }}\n  cp4d_version: 4.0\n  openshift_storage_name: ocs-storage\n  image_registry_name: cpd405\n")),Object(o.b)("p",null,"The Cloud Pak for Data installation refers to the ",Object(o.b)("inlineCode",{parentName:"p"},"cpd405")," ",Object(o.b)("inlineCode",{parentName:"p"},"image_registry")," object."),Object(o.b)("p",null,"If the ",Object(o.b)("inlineCode",{parentName:"p"},"ibm_cp_entitlement_key")," secret is in the vault at the time of running the deployer, the required images will be mirrored from the entitled registry to the private registry. If all images are already available in the private registry, just specify the ",Object(o.b)("inlineCode",{parentName:"p"},"--skip-mirror-images")," flag when you run the deployer."),Object(o.b)("h2",null,"Air-gapped installation"),Object(o.b)("p",null,"The deployer can mirror images from the entitled registry to a private registry that you want to use for the Cloud Pak. "),Object(o.b)("p",null,"We identify two methods for mirroring images to a private registry that the air-gapped OpenShift cluster can pull images from:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#mirror-images-with-a-bastion-node"},"Mirror images with a bastion node"),". The bastion node can connect to the internet and to the private registry used by the OpenShift cluster. You run the deployer on the bastion node."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"#using-a-portable-image-registry"},"Using an intermediate (portable) registry"),". The private registry used by the OpenShift cluster cannot be reached from a machine that is connected to the internet. In this case you need a portable registry to download images and which you then ship to a server that can connect to the OpenShift cluster and its private registry.")),Object(o.b)("p",null,"The two methods are also outlined in the Cloud Pak for Data installation documentation: ",Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/docs/en/cloud-paks/cp-data/4.0?topic=tasks-mirroring-images-your-private-container-registry"},"https://www.ibm.com/docs/en/cloud-paks/cp-data/4.0?topic=tasks-mirroring-images-your-private-container-registry")),Object(o.b)(b,{kind:"info",mdxType:"InlineNotification"},"The deployer only supports using a private registry for the Cloud Pak images, not for OpenShift itself. Air-gapped installation of OpenShift is currently not in scope for the deployer."),Object(o.b)("p",null,"Below we first outline the use of a private registry for the Cloud Pak installation, then we will continue with air-gapped installation."),Object(o.b)("h3",null,"Mirror images with a bastion node"),Object(o.b)("p",null,"This method is also sometimes referred to as “semi-airgapped”. Use this method when the private registry used by the OpenShift cluster ",Object(o.b)("strong",{parentName:"p"},"can be")," reached from an internet-connected server or workstation. In this case the internet-connected machine can directly mirror the images to the private registry but it cannot do anything on the OpenShift cluster."),Object(o.b)("h4",null,"On the server connected to the internet"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Build the Cloud Pak Deployer image using ",Object(o.b)("inlineCode",{parentName:"li"},"cp-deploy.sh build")),Object(o.b)("li",{parentName:"ul"},"Create or update the directory with the configuration"),Object(o.b)("li",{parentName:"ul"},"Create a status directory that will hold the vault and all other downloaded assets"),Object(o.b)("li",{parentName:"ul"},"Make sure all your Cloud Paks and cartridges are specified as well as an ",Object(o.b)("inlineCode",{parentName:"li"},"image_registry")," entry to identify the private registry"),Object(o.b)("li",{parentName:"ul"},"Create a vault secret holding the connection credentials for the private registry"),Object(o.b)("li",{parentName:"ul"},"Run the deployer with the ",Object(o.b)("inlineCode",{parentName:"li"},"env download")," subcommand and action and specify flag ",Object(o.b)("inlineCode",{parentName:"li"},"--skip-portable-registry"),". This will download all clients and then mirror images from the entitled registry to the privagte registry. If mirroring fails, fix the issue and just run the ",Object(o.b)("inlineCode",{parentName:"li"},"env download")," again."),Object(o.b)("li",{parentName:"ul"},"When finished successfully, re-run the deployer with ",Object(o.b)("inlineCode",{parentName:"li"},"env save")," subcommand and action to save the registry and deployer container images to the status directory"),Object(o.b)("li",{parentName:"ul"},"Ship the config and status directories to a server that can be connected to the private registry and the OpenShift cluster. The status directory now holds all assets required for the air-gapped installation. It should be relatively small (< 5 GB)")),Object(o.b)("h4",null,"On the bastion server that is connected to the OpenShift cluster"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Restore the deployer, config and status directories to the bastion server"),Object(o.b)("li",{parentName:"ul"},"Use the instructions in ",Object(o.b)("a",{parentName:"li",href:"/cp-deploy/run/run-on-existing-openshift"},"Existing OpenShift")," to start the deployer. Run the ",Object(o.b)("inlineCode",{parentName:"li"},"cp-deploy.sh")," command with the ",Object(o.b)("inlineCode",{parentName:"li"},"--air-gapped")," and ",Object(o.b)("inlineCode",{parentName:"li"},"--skip-mirror-images")," flag to indicate that images are available in the private registry")),Object(o.b)("h3",null,"Using a portable image registry"),Object(o.b)("p",null,"Use this method when the private registry used by the OpenShift cluster cannot be reached from an internet-connected machine. In this case you need a portable registry to download images and which you then ship to a server that can connect to the OpenShift cluster and its private registry."),Object(o.b)("h4",null,"On the server connected to the internet"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Build the Cloud Pak Deployer image using ",Object(o.b)("inlineCode",{parentName:"li"},"cp-deploy.sh build")),Object(o.b)("li",{parentName:"ul"},"Create or update the directory with the configuration, making sure all your Cloud Paks and cartridges are specified"),Object(o.b)("li",{parentName:"ul"},"Create a status directory that will hold the vault and all other downloaded assets"),Object(o.b)("li",{parentName:"ul"},"Run the deployer with the ",Object(o.b)("inlineCode",{parentName:"li"},"env download")," subcommand and action to download all clients, start the portable registry and then mirror images from the entitled registry to the portable registry. If mirroring fails, fix the issue and just run the ",Object(o.b)("inlineCode",{parentName:"li"},"env download")," again."),Object(o.b)("li",{parentName:"ul"},"When finished successfully, re-run the deployer with ",Object(o.b)("inlineCode",{parentName:"li"},"env save")," subcommand and action to stop the portable registry and save the registry and deployer container images to the status directory"),Object(o.b)("li",{parentName:"ul"},"Ship the config and status directories to a server that can be connected to the private registry and the OpenShift cluster. The status directory now holds all assets required for the air-gapped installation and its size can be substantial (100+ GB). You may want to use multi-volume tar files if you are using network transfer")),Object(o.b)("h4",null,"On the bastion server that is connected to the OpenShift cluster"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Restore the deployer, config and status directories to the bastion server"),Object(o.b)("li",{parentName:"ul"},"Use the instructions in ",Object(o.b)("a",{parentName:"li",href:"/cp-deploy/run/run-on-existing-openshift"},"Existing OpenShift")," to start the deployer. Run the ",Object(o.b)("inlineCode",{parentName:"li"},"cp-deploy.sh")," command with the ",Object(o.b)("inlineCode",{parentName:"li"},"--air-gapped")," flag to indicate images have to be mirrored from the portable registry to the private registry and the appropriate OpenShift configuration is done")),Object(o.b)("h3",null,"Inventory properties for debug and DaemonSet images"),Object(o.b)("p",null,"Specifically when running the deployer on IBM Cloud ROKS, certain OpenShift settings must be applied using DaemonSets in the ",Object(o.b)("inlineCode",{parentName:"p"},"kube-system")," namespace. Additionally, the deployer uses the ",Object(o.b)("inlineCode",{parentName:"p"},"oc debug node")," commands to retrieve ",Object(o.b)("inlineCode",{parentName:"p"},"kubelet")," and ",Object(o.b)("inlineCode",{parentName:"p"},"crio")," configuration files from the compute nodes."),Object(o.b)("p",null,"The default container images used by the DaemonSets and ",Object(o.b)("inlineCode",{parentName:"p"},"oc debug node")," commands are based on Red Hat’s Universal Base Image and will be pulled from Red Hat registries. This is typically not possible in air-gapped installations, hence different images must be used. It is your responsibility to copy suitable (preferably UBI) images to an image registry that is connected to the OpenShift cluster. Also, if a pull secret is needed to pull the image(s) from the registry, you must create the associated secret in the ",Object(o.b)("inlineCode",{parentName:"p"},"kube-system")," OpenShift project."),Object(o.b)("p",null,"To configure alternative container images for the deployer to use, set the following properties in the ",Object(o.b)("inlineCode",{parentName:"p"},".inv")," file kept in your configuration’s ",Object(o.b)("inlineCode",{parentName:"p"},"inventory")," directory. If you do not set these values, the deployer assumes that the default images are used for DaemonSet and ",Object(o.b)("inlineCode",{parentName:"p"},"oc debug node"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Property"),Object(o.b)("th",{parentName:"tr",align:null},"Description"),Object(o.b)("th",{parentName:"tr",align:null},"Example"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"cpd_oc_debug_image"),Object(o.b)("td",{parentName:"tr",align:null},"Container image to be used for the ",Object(o.b)("inlineCode",{parentName:"td"},"oc debug")," command."),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"registry.redhat.io/rhel8/support-tools:latest"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"cpd_ds_image"),Object(o.b)("td",{parentName:"tr",align:null},"Container image to be used for the DaemonSets that configure Kubelet, etc."),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"registry.access.redhat.com/ubi8/ubi:latest"))))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-cpd-design-components-private-registry-index-mdx-0a870eb35bdef8ba1886.js.map