(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i}),n.d(t,"pageQuery",function(){return u});var a=n(0),r=n.n(a),o=n(149);function i(e){var t=e.data.markdownRemark,n=t.frontmatter,a=t.html;return r.a.createElement(o.a,null,r.a.createElement("article",null,r.a.createElement("header",null,r.a.createElement("h1",null,n.title),r.a.createElement("h2",null,n.date)),r.a.createElement("section",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:a}})))}var u="1579142440"},144:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=f,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(150)),o=a(n(151)),i=a(n(7)),u=a(n(51)),s=a(n(52)),l=a(n(4)),c=a(n(0)),d=n(23),p=n(145);function f(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:l.default.string,activeStyle:l.default.object},m=function(e){function t(t){var n;n=e.call(this,t)||this,(0,s.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,u=t.onClick,s=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var v=f(n);return c.default.createElement(d.Link,(0,o.default)({to:v,state:l,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),y(n,{state:l,replace:h})),!0}},m))},t}(c.default.Component);m.propTypes=(0,o.default)({},h,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var v=c.default.forwardRef(function(e,t){return c.default.createElement(m,(0,o.default)({innerRef:t},e))});t.default=v;var y=function(e,t){window.___navigate(f(e),t)};t.navigate=y;var w=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(f(e))};t.push=w;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(f(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),w(e)}},145:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(144),s=n.n(u);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(146),c=n.n(l);n.d(t,"PageRenderer",function(){return c.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},146:function(e,t,n){var a;e.exports=(a=n(148))&&a.default||a},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Anyone Can Code",description:"A personal website. Mostly about software."}}}}},148:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(53),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},149:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(147),s=n(145),l=function(){return r.a.createElement(s.StaticQuery,{query:"579592196",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{id:"siteheader"},r.a.createElement("h1",null,r.a.createElement(s.Link,{to:"/"},e.site.siteMetadata.title)),r.a.createElement("h2",null,e.site.siteMetadata.description)))},data:u})},c=function(){return r.a.createElement("footer",null,r.a.createElement("p",null,"Philip Schweiger’s web site, built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," and hosted on"," ",r.a.createElement("a",{href:"http://github.com/anyonecancode/anyonecancode.github.io"},"Github"),"."),r.a.createElement("p",null,"You can reach me via"," ",r.a.createElement("a",{href:"https://www.linkedin.com/in/philipschweiger/"},"LinkedIn")," or at the email on my"," ",r.a.createElement("a",{href:Object(s.withPrefix)("/files/schweiger_resume.pdf")},"resume"),"."),r.a.createElement("p",{className:"hidden"},"Looking for more on this site? Browse all my"," ",r.a.createElement(s.Link,{to:"/posts"},"posts"),", or maybe just the post where I talk a bit"," ",r.a.createElement(s.Link,{to:"/posts/about"},"about")," myself or explain my"," ",r.a.createElement(s.Link,{to:"/posts/anyonecancode"},"user name"),"."))},d=function(e){var t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l,null),r.a.createElement("main",null,t),r.a.createElement(c,null))};d.propTypes={children:i.a.node.isRequired};t.a=d},150:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},151:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n}}]);
//# sourceMappingURL=component---src-templates-posts-js-0c9fa25d68649e09ecc5.js.map