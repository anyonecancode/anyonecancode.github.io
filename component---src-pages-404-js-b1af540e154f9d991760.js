(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(150),o=n(148);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(143),u=n.n(l);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var c=n(145),s=n.n(c);n.d(t,"PageRenderer",function(){return s.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,n){var a;e.exports=(a=n(147))&&a.default||a},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Anyone Can Code",description:"A personal website. Mostly about software."}}}}},147:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(52),u=n(2),c=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},148:function(e,t,n){"use strict";var a=n(149),r=n(0),i=n.n(r),o=n(4),l=n.n(o),u=n(151),c=n.n(u),s=n(144);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(s.StaticQuery,{query:p,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d;var p="1025518380"},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Anyone Can Code",description:"A personal website. Mostly about software.",author:"pschwei1@gmail.com"}}}}},150:function(e,t,n){"use strict";var a=n(146),r=n(0),i=n.n(r),o=n(4),l=n.n(o),u=n(144),c=function(e){var t=e.siteTitle,n=e.siteDescription;return i.a.createElement("header",null,i.a.createElement("h1",null,i.a.createElement(u.Link,{to:"/"},t)),i.a.createElement("h2",null,n))};c.propTypes={siteTitle:l.a.string},c.defaultProps={siteTitle:""};var s=c,d=function(){return i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(u.Link,{to:"/about"},"About")),i.a.createElement("li",null,i.a.createElement(u.Link,{to:"/posts"},"Posts"))))},p=function(){return i.a.createElement("footer",null,i.a.createElement("p",null,"Linked In | Github | email"),i.a.createElement("hr",null),"© 2019, Built with ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))},m=function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"2328579951",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s,{siteTitle:e.site.siteMetadata.title,siteDescription:e.site.siteMetadata.description}),i.a.createElement("div",{id:"container"},i.a.createElement("main",null,t),i.a.createElement(d,null)),i.a.createElement(p,null))},data:a})};m.propTypes={children:l.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-pages-404-js-b1af540e154f9d991760.js.map