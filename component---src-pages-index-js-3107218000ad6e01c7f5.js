(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/e88":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"8+s/":function(e,t,r){"use strict";r("V+eJ"),r("bWfx"),r("f3/d"),r("hHhE"),r("HAE/");var n,a=r("q1tI"),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=e(l.map((function(e){return e.props}))),f.canUseDOM?t(c):r&&(c=r(c))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(f,"canUseDOM",s),f}}},CKlV:function(e,t,r){e.exports=r.p+"static/icon-0c9d95094f19236181713134218747bd.jpg"},"HAE/":function(e,t,r){var n=r("XKFU");n(n.S+n.F*!r("nh4g"),"Object",{defineProperty:r("hswa").f})},ItV3:function(e,t,r){e.exports=r.p+"static/website-screenshot-c3d3d22e0710c632af9b2715b6ab00fc.png"},K8vu:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Genoveva Fossas","author":"Genoveva Fossas","description":"Portfolio website for Genoveva Fossas","keywords":"Software developer, software, developer, Genoveva, Fossas"}}}}')},Lnxd:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r("bWfx"),r("ioFf"),r("V+eJ"),r("91GP");var n=r("q1tI"),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(a),o=function(){return(o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&(r[n[a]]=e[n[a]])}return r};function c(e){return function(t){return n.createElement(l,o({attr:o({},e.attr)},t),function e(t){return t&&t.map((function(t,r){return n.createElement(t.tag,o({key:r},t.attr),e(t.child))}))}(e.child))}}function l(e){var t=function(t){var r,a=e.size||t.size||"1em";t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className);var i=e.attr,c=e.title,l=s(e,["attr","title"]);return n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,l,{className:r,style:o({color:e.color||t.color},t.style,e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(e){return t(e)})):t(a)}},Oyvg:function(e,t,r){var n=r("dyZX"),a=r("Xbzi"),i=r("hswa").f,o=r("kJMx").f,s=r("quPj"),c=r("C/va"),l=n.RegExp,u=l,f=l.prototype,m=/a/g,p=/a/g,d=new l(m)!==m;if(r("nh4g")&&(!d||r("eeVq")((function(){return p[r("K0xU")("match")]=!1,l(m)!=m||l(p)==p||"/a/i"!=l(m,"i")})))){l=function(e,t){var r=this instanceof l,n=s(e),i=void 0===t;return!r&&n&&e.constructor===l&&i?e:a(d?new u(n&&!i?e.source:e,t):u((n=e instanceof l)?e.source:e,n&&i?c.call(e):t),r?this:f,l)};for(var h=function(e){e in l||i(l,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},g=o(u),y=0;g.length>y;)h(g[y++]);f.constructor=l,l.prototype=f,r("KroJ")(n,"RegExp",l)}r("elZq")("RegExp")},Q96Y:function(e,t,r){e.exports=r.p+"static/ResumeFossas-fe91464ce188e13e7b78dda5999733e0.pdf"},RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return O}));var n=r("q1tI"),a=r.n(n),i=(r("uQsf"),r("CKlV")),o=r.n(i),s=r("Q96Y"),c=r.n(s),l=r("ma3e"),u="Genoveva Fossas",f="Undergraduate Research Assistant @ UCF",m="genofossas@gmail.com",p={twitter:"gfossas",linkedin:"gfossas",github:"genovevafossas"};function d(){return a.a.createElement("section",{className:"hero gradient-bg is-dark"},a.a.createElement("div",{className:"hero-body"},a.a.createElement("div",{className:"header"},a.a.createElement("img",{className:"icon",src:o.a,alt:"Genoveva"}),a.a.createElement("section",{className:"section has-text-justified"},a.a.createElement("div",{className:"container"},a.a.createElement("h1",{className:"title is-2"},u),a.a.createElement("h2",{className:"subtitle is-4"},f)),a.a.createElement("div",{className:"container pt-2"},a.a.createElement("a",{className:"icon-link",href:"mailto:"+m,rel:"noreferrer",target:"_blank"},a.a.createElement(l.a,{className:"social-icon",size:"2.75em"})),a.a.createElement("a",{className:"icon-link",href:"https://github.com/"+p.github,rel:"noreferrer",target:"_blank"},a.a.createElement(l.c,{className:"social-icon",size:"2.75em"})),a.a.createElement("a",{className:"icon-link",href:"https://linkedin.com/in/"+p.linkedin,rel:"noreferrer",target:"_blank"},a.a.createElement(l.d,{className:"social-icon",size:"2.75em"})),a.a.createElement("a",{className:"icon-link",href:"https://twitter.com/"+p.twitter,rel:"noreferrer",target:"_blank"},a.a.createElement(l.e,{className:"social-icon",size:"2.75em"})),a.a.createElement("a",{className:"icon-link",href:c.a,rel:"noreferrer",target:"_blank"},a.a.createElement("button",{className:"button"},a.a.createElement(l.b,{style:{marginRight:7},size:"1.4em"}),a.a.createElement("span",{className:"button-text"},"Resume PDF"))))))))}var h=r("K8vu"),g=(r("xfY5"),r("+ZDr"),r("lw3w"),r("emEt").default.enqueue,a.a.createContext({}));function y(e){var t=e.staticQueryData,r=e.data,n=e.query,i=e.render,o=r?r.data:t[n]&&t[n].data;return a.a.createElement(a.a.Fragment,null,o&&i(o),!o&&a.a.createElement("div",null,"Loading (StaticQuery)"))}var v=function(e){var t=e.data,r=e.query,n=e.render,i=e.children;return a.a.createElement(g.Consumer,null,(function(e){return a.a.createElement(y,{data:t,query:r,render:n||i,staticQueryData:e})}))};var b=r("qhky"),E=r("bpwf"),w=r.n(E),T=function(){return a.a.createElement(v,{query:"534146544",render:function(e){return a.a.createElement(b.a,null,a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"}),a.a.createElement("meta",{name:"description",content:e.site.siteMetadata.description}),a.a.createElement("meta",{name:"keywords",content:e.site.siteMetadata.keywords}),a.a.createElement("title",null,e.site.siteMetadata.title),a.a.createElement("html",{lang:"en"}),a.a.createElement("meta",{itemprop:"name",content:e.site.siteMetadata.author})," />",a.a.createElement("meta",{itemprop:"description",content:e.site.siteMetadata.description}),a.a.createElement("link",{rel:"icon",href:w.a}))},data:h})},N=r("ItV3"),S=r.n(N);function A(){return a.a.createElement("div",{className:"container py-3"},a.a.createElement("div",{className:"tile is-ancestor"},a.a.createElement("div",{className:"tile is-8 is-vertical"},a.a.createElement("div",{className:"tile is-vertical is-parent"},a.a.createElement("div",{className:"tile is-child box has-background-white-ter"},a.a.createElement("p",{className:"title"},"About me"),a.a.createElement("p",null,"A senior Burnett Honors College member pursuing a Bachelor’s in computer science at the University of Central Florida. Primary interests include software security, programming languages, and program analysis. I normally work on side channel mitigation under ",a.a.createElement("a",{href:"https://paulgazzillo.com/"},"Dr. Paul Gazzillo")," as an undergraduate research assistant, but I am currently spending the summer as a remote intern at AWS on the AWS Service Quotas team. I fully anticipate to return to research with Dr. Gazzillo in the upcoming fall.")),a.a.createElement("div",{className:"tile is-child box has-background-white-ter"},a.a.createElement("p",{className:"title"},"Recent Project(s)"),a.a.createElement("p",null,"Recently I undertook the project of rewriting my website in React with Gatsby and Bulma. You're looking at the product of that right now, in fact. :) My last website was a static website generated with Jekyll and a pre-made theme. This rewrite was a great learning experience, and let me explore html and css more than I had previously. For reference, I included a screenshot of my old website below. You can also see the source code of this website over on my GitHub."),a.a.createElement("img",{className:"centered-image",src:S.a,alt:"Screenshot of old website."})),a.a.createElement("div",{className:"tile is-child box has-background-white-ter"},a.a.createElement("p",{className:"title"},"Experience"),a.a.createElement("span",{className:"headline-large"},"Sofware Development Intern - "),a.a.createElement("span",{className:"sub-headline-large"},"Amazon Web Services (May 2020 - Present)"),a.a.createElement("ul",null,a.a.createElement("li",null,"Working with the AWS Service Quotas team to make a widget that aims to bring the Service Quotas experience to other AWS Consoles.")),a.a.createElement("span",{className:"headline-large"},"Undergraduate Research Assistant - "),a.a.createElement("span",{className:"sub-headline-large"},"University of Central Florida (October 2019 - Present)"),a.a.createElement("ul",null,a.a.createElement("li",null,"Working on modifications to LLVM’s register allocator to support a side-channel free architecture under Dr. Paul Gazzillo.")),a.a.createElement("span",{className:"headline-large"},"AFE Software Development Intern - "),a.a.createElement("span",{className:"sub-headline-large"},"Amazon Web Services (May 2019 - August 2019)"),a.a.createElement("ul",null,a.a.createElement("li",null,"Built a baseline for an internal console that aimed to make on-boarding to and management of information on AWS Service Quotas easier for new and existing AWS services."),a.a.createElement("li",null,"Console was built in JavaScript and React.js with an internal library of pre-styled React components and served in a serverless architecture."))))),a.a.createElement("div",{className:"tile is-parent is-vertical"},a.a.createElement("div",{className:"tile is-child box has-background-white-ter"},a.a.createElement("p",{className:"title"},"Education"),a.a.createElement("p",{className:"headline-small"}," Bachelor of Science, Computer Science"),a.a.createElement("p",null,"University of Central Florida, 2017-2021")),a.a.createElement("div",{className:"tile is-child box has-background-white-ter"},a.a.createElement("p",{className:"title"},"Skills"),a.a.createElement("p",null,"Not included here is my familiarity with Linux and Git, as well as some prior experience with Java's Swing framework."),a.a.createElement("br",null),a.a.createElement("span",{className:"progress-text-left"},"C"),a.a.createElement("span",{className:"progress-text-right"},"Very Proficient"),a.a.createElement("progress",{className:"progress is-large",value:"90",max:"100"},"90%"),a.a.createElement("span",{className:"progress-text-left"},"Java"),a.a.createElement("span",{className:"progress-text-right"},"Proficient"),a.a.createElement("progress",{className:"progress is-large",value:"75",max:"100"},"75%"),a.a.createElement("span",{className:"progress-text-left"},"JavaScript"),a.a.createElement("span",{className:"progress-text-right"},"Familiar"),a.a.createElement("progress",{className:"progress is-large",value:"60",max:"100"},"60%"),a.a.createElement("span",{className:"progress-text-left"},"React.js"),a.a.createElement("span",{className:"progress-text-right"},"Familiar"),a.a.createElement("progress",{className:"progress is-large",value:"60",max:"100"},"60%"),a.a.createElement("span",{className:"progress-text-left"},"C++"),a.a.createElement("span",{className:"progress-text-right"},"Prior Experience"),a.a.createElement("progress",{className:"progress is-large",value:"30",max:"100"},"30%"),a.a.createElement("span",{className:"progress-text-left"},"TypeScript"),a.a.createElement("span",{className:"progress-text-right"},"Prior Experience"),a.a.createElement("progress",{className:"progress is-large",value:"25",max:"100"},"25%"),a.a.createElement("br",null)),a.a.createElement("div",{className:"tile is-child box has-background-white-ter"},a.a.createElement("p",{className:"title"}," Courses (Fall 2020)"),a.a.createElement("ul",null,a.a.createElement("li",null,"Senior Design 1"),a.a.createElement("li",null,"Statistics 1"),a.a.createElement("li",null,"Digital Forensics"),a.a.createElement("li",null,"Physics 2"))))))}function x(){return a.a.createElement("div",null,a.a.createElement(T,null),a.a.createElement(d,null),a.a.createElement(A,null))}r("t+Ps");function O(){return a.a.createElement(x,null)}},bmMU:function(e,t,r){r("SRfc"),r("RW0V"),r("a1Th"),r("h7Nl"),r("OEbY"),r("Oyvg"),r("LK8F"),r("T39b"),r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("9AAn");var n="undefined"!=typeof Element,a="function"==typeof Map,i="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var s,c,l,u;if(Array.isArray(t)){if((s=t.length)!=r.length)return!1;for(c=s;0!=c--;)if(!e(t[c],r[c]))return!1;return!0}if(a&&t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!r.has(c.value[0]))return!1;for(u=t.entries();!(c=u.next()).done;)if(!e(c.value[1],r.get(c.value[0])))return!1;return!0}if(i&&t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!r.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(r)){if((s=t.length)!=r.length)return!1;for(c=s;0!=c--;)if(t[c]!==r[c])return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((s=(l=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(r,l[c]))return!1;if(n&&t instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!t.$$typeof)&&!e(t[l[c]],r[l[c]]))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},bpwf:function(e,t,r){e.exports=r.p+"static/favicon-acc95884fc3f6541adcea8922c7bbb1a.ico"},"dZ+Y":function(e,t,r){"use strict";var n=r("XKFU"),a=r("CkkT")(3);n(n.P+n.F*!r("LyE8")([].some,!0),"Array",{some:function(e){return a(this,e,arguments[1])}})},h7Nl:function(e,t,r){var n=Date.prototype,a=n.toString,i=n.getTime;new Date(NaN)+""!="Invalid Date"&&r("KroJ")(n,"toString",(function(){var e=i.call(this);return e==e?a.call(this):"Invalid Date"}))},lw3w:function(e,t,r){var n;e.exports=(n=r("rzlk"))&&n.default||n},qhky:function(e,t,r){"use strict";(function(e){r("dZ+Y"),r("KKXr"),r("2Spj"),r("eM6i"),r("8+KV"),r("0l/t"),r("LK8F"),r("pIFo"),r("V+eJ"),r("/SS/"),r("hHhE"),r("91GP"),r("HAE/"),r("rE2o"),r("ioFf"),r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx");var n,a,i,o,s=r("17x9"),c=r.n(s),l=r("8+s/"),u=r.n(l),f=r("bmMU"),m=r.n(f),p=r("q1tI"),d=r.n(p),h=r("MgzW"),g=r.n(h),y="bodyAttributes",v="htmlAttributes",b="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(E).map((function(e){return E[e]})),"charset"),T="cssText",N="href",S="http-equiv",A="innerHTML",x="itemprop",O="name",C="property",k="rel",I="src",P="target",j={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",F="defer",M="encodeSpecialCharacters",R="onChangeClientState",q="titleTemplate",z=Object.keys(j).reduce((function(e,t){return e[j[t]]=t,e}),{}),D=[E.NOSCRIPT,E.SCRIPT,E.STYLE],_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},V=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},H=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=Z(e,E.TITLE),r=Z(e,q);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Z(e,L);return t||n||void 0},G=function(e){return Z(e,R)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return K({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+_(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var s=i[o],c=s.toLowerCase();-1===t.indexOf(c)||r===k&&"canonical"===e[r].toLowerCase()||c===k&&"stylesheet"===e[c].toLowerCase()||(r=c),-1===t.indexOf(s)||s!==A&&s!==T&&s!==x||(r=s)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var s=i[o],c=g()({},n[s],a[s]);n[s]=c}return e}),[]).reverse()},Z=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,f=e.title,m=e.titleAttributes;ce(E.BODY,n),ce(E.HTML,a),se(f,m);var p={baseTag:le(E.BASE,r),linkTags:le(E.LINK,i),metaTags:le(E.META,o),noscriptTags:le(E.NOSCRIPT,s),scriptTags:le(E.SCRIPT,l),styleTags:le(E.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(d[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,d,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},se=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(E.TITLE,t)},ce=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),s=0;s<o.length;s++){var c=o[s],l=t[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===a.indexOf(c)&&a.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);a.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==o.join(",")&&r.setAttribute("data-react-helmet",o.join(","))}},le=function(e,t){var r=document.head||document.querySelector(E.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===A)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[n]?"":t[n];r.setAttribute(n,s)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[j[r]||r]=e[r],t}),t)},me=function(e,t,r){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=fe(r,n),[d.a.createElement(E.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+H(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+H(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case v:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=j[e]||e;if(r===A||r===T){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),d.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===A||e===T)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+H(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,s=e.noscriptTags,c=e.scriptTags,l=e.styleTags,u=e.title,f=void 0===u?"":u,m=e.titleAttributes;return{base:me(E.BASE,t,n),bodyAttributes:me(y,r,n),htmlAttributes:me(v,a,n),link:me(E.LINK,i,n),meta:me(E.META,o,n),noscript:me(E.NOSCRIPT,s,n),script:me(E.SCRIPT,c,n),style:me(E.STYLE,l,n),title:me(E.TITLE,{title:f,titleAttributes:m},n)}},de=u()((function(e){return{baseTag:X([N,P],e),bodyAttributes:J(y,e),defer:Z(e,F),encode:Z(e,M),htmlAttributes:J(v,e),linkTags:Q(E.LINK,[k,N],e),metaTags:Q(E.META,[O,w,S,C,x],e),noscriptTags:Q(E.NOSCRIPT,[A],e),onChangeClientState:G(e),scriptTags:Q(E.SCRIPT,[I,A],e),styleTags:Q(E.STYLE,[T],e),title:W(e),titleAttributes:J(b,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),pe)((function(){return null})),he=(a=de,o=i=function(e){function t(){return U(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return K({},n,((t={})[r.type]=[].concat(n[r.type]||[],[K({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case E.TITLE:return K({},a,((t={})[n.type]=o,t.titleAttributes=K({},i),t));case E.BODY:return K({},a,{bodyAttributes:K({},i)});case E.HTML:return K({},a,{htmlAttributes:K({},i)})}return K({},a,((r={})[n.type]=K({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=K({},t);return Object.keys(e).forEach((function(t){var n;r=K({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return d.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[z[r]||r]=e[r],t}),t)}(V(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=V(e,["children"]),n=K({},r);return t&&(n=this.mapChildrenToProps(t,n)),d.a.createElement(a,n)},B(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(d.a.Component),i.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind,t.a=he}).call(this,r("yLpj"))},qncB:function(e,t,r){var n=r("XKFU"),a=r("vhPU"),i=r("eeVq"),o=r("/e88"),s="["+o+"]",c=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),u=function(e,t,r){var a={},s=i((function(){return!!o[e]()||"​"!="​"[e]()})),c=a[e]=s?t(f):o[e];r&&(a[r]=c),n(n.P+n.F*s,"String",a)},f=u.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(l,"")),e};e.exports=u},rzlk:function(e,t,r){"use strict";r.r(t);r("91GP");var n=r("q1tI"),a=r.n(n),i=r("IOVJ");t.default=function(e){var t=e.location,r=e.pageResources;return r?a.a.createElement(i.a,Object.assign({location:t,pageResources:r},r.json)):null}},"t+Ps":function(e,t,r){},uQsf:function(e,t,r){},xfY5:function(e,t,r){"use strict";var n=r("dyZX"),a=r("aagx"),i=r("LZWt"),o=r("Xbzi"),s=r("apmT"),c=r("eeVq"),l=r("kJMx").f,u=r("EemH").f,f=r("hswa").f,m=r("qncB").trim,p=n.Number,d=p,h=p.prototype,g="Number"==i(r("Kuth")(h)),y="trim"in String.prototype,v=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var r,n,a,i=(t=y?t.trim():m(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+t}for(var o,c=t.slice(2),l=0,u=c.length;l<u;l++)if((o=c.charCodeAt(l))<48||o>a)return NaN;return parseInt(c,n)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof p&&(g?c((function(){h.valueOf.call(r)})):"Number"!=i(r))?o(new d(v(t)),r,p):v(t)};for(var b,E=r("nh4g")?l(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;E.length>w;w++)a(d,b=E[w])&&!a(p,b)&&f(p,b,u(d,b));p.prototype=h,h.constructor=p,r("KroJ")(n,"Number",p)}},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=component---src-pages-index-js-3107218000ad6e01c7f5.js.map