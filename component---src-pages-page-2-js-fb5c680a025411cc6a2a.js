(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{138:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(142),o=a(149),c=a(147);e.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.Link,{to:"/"},"Go back to the homepage"))}},142:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return f}),a.d(e,"StaticQueryContext",function(){return p}),a.d(e,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(141),s=a.n(c);a.d(e,"Link",function(){return s.a}),a.d(e,"withPrefix",function(){return c.withPrefix}),a.d(e,"navigate",function(){return c.navigate}),a.d(e,"push",function(){return c.push}),a.d(e,"replace",function(){return c.replace}),a.d(e,"navigateTo",function(){return c.navigateTo});var u=a(143),l=a.n(u);a.d(e,"PageRenderer",function(){return l.a});var d=a(32);a.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},143:function(t,e,a){var n;t.exports=(n=a(145))&&n.default||n},144:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},145:function(t,e,a){"use strict";a.r(e);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(52),s=a(2),u=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},146:function(t,e,a){},147:function(t,e,a){"use strict";var n=a(148),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(150),u=a.n(s),l=a(142);function d(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(t){var n=e||t.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d;var p="1025518380"},148:function(t){t.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},149:function(t,e,a){"use strict";var n=a(144),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(142),u=function(t){var e=t.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};u.propTypes={siteTitle:c.a.string},u.defaultProps={siteTitle:""};var l=u,d=(a(146),function(t){var e=t.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},e,i.a.createElement("footer",null,"© 2018, Built with ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});d.propTypes={children:c.a.node.isRequired};e.a=d}}]);
//# sourceMappingURL=component---src-pages-page-2-js-fb5c680a025411cc6a2a.js.map