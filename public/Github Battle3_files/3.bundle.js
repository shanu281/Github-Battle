(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{27:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.d(t,"a",function(){return s}),n.d(t,"b",function(){return l});var o="?client_id=".concat("YOUR_CLIENT_ID","&client_secret=").concat("YOUR_SECRET_ID");function a(e,t){return"Not Found"===e?"".concat(t," doesn't exist."):e}function c(e){return fetch("https://api.github.com/users/".concat(e,"/repos").concat(o,"&per_page=100")).then(function(e){return e.json()}).then(function(t){if(t.message)throw new Error(a(t.message,e));return t})}function i(e,t){return 3*e.followers+function(e){return e.reduce(function(e,t){return e+t.stargazers_count},0)}(t)}function u(e){return Promise.all([(t=e,fetch("https://api.github.com/users/".concat(t).concat(o)).then(function(e){return e.json()}).then(function(e){if(e.message)throw new Error(a(e.message,t));return e})),c(e)]).then(function(e){var t=r(e,2),n=t[0];return{profile:n,score:i(n,t[1])}});var t}function s(e){return Promise.all(e.map(u)).then(function(e){return e.sort(function(e,t){return t.score-e.score})})}function l(e){var t=window.encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(e,"&sort=stars&order=desc&type=Repositories"));return fetch(t).then(function(e){return e.json()}).then(function(e){if(!e.items)throw new Error(e.message);return e.items})}},28:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(1),o=n.n(r),a=n(0),c=n.n(a),i=n(5);function u(e){var t=e.header,n=e.subheader,r=e.avatar,a=e.href,c=e.name,u=e.children;return o.a.createElement(i.a,null,function(e){var i=e.theme;return o.a.createElement("div",{className:"card bg-".concat(i)},o.a.createElement("h4",{className:"header-lg center-text"},t),o.a.createElement("img",{className:"avatar",src:r,alt:"Avatar for "+c}),n&&o.a.createElement("h4",{className:"center-text"},n),o.a.createElement("h2",{className:"center-text"},o.a.createElement("a",{className:"link",href:a},c)),u)})}u.propTypes={header:c.a.string.isRequired,subheader:c.a.string,avatar:c.a.string.isRequired,href:c.a.string.isRequired,name:c.a.string.isRequired}},30:function(e,t,n){"use strict";var r=n(1),o=n.n(r),a=n(0),c=n.n(a);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return r=this,o=(e=s(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==i(o)&&"function"!=typeof o?l(r):o,p(l(n),"state",{hovering:!1}),p(l(n),"mouseOver",function(){return n.setState({hovering:!0})}),p(l(n),"mouseOut",function(){return n.setState({hovering:!1})}),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){return o.a.createElement("div",{onMouseOver:this.mouseOver,onMouseOut:this.mouseOut},this.props.children(this.state.hovering))}}])&&u(n.prototype,r),a&&u(n,a),t}();n.d(t,"a",function(){return g});var h={container:{position:"relative",display:"flex"},tooltip:{boxSizing:"border-box",position:"absolute",width:"160px",bottom:"100%",left:"50%",marginLeft:"-80px",borderRadius:"3px",backgroundColor:"hsla(0, 0%, 20%, 0.9)",padding:"7px",marginBottom:"5px",color:"#fff",textAlign:"center",fontSize:"14px"}};function g(e){var t=e.children,n=e.text;return o.a.createElement(m,null,function(e){return o.a.createElement("div",{style:h.container},e&&o.a.createElement("div",{style:h.tooltip},n),t)})}g.propTypes={text:c.a.string.isRequired}},34:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return w});var r=n(1),o=n.n(r),a=n(0),c=n.n(a),i=n(27),u=n(29),s=n(28),l=n(8),f=n(30);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){d(e,t,n[t])})}return e}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e){var t=e.selected,n=e.onUpdateLanguage;return o.a.createElement("ul",{className:"flex-center"},["All","JavaScript","Ruby","Java","CSS","Python"].map(function(e){return o.a.createElement("li",{key:e},o.a.createElement("button",{className:"btn-clear nav-link ",style:e===t?{color:"rgb(187, 46, 31)"}:null,onClick:function(){return n(e)}},e))}))}function E(e){var t=e.repos;return o.a.createElement("ul",{className:"grid space-around"},t.map(function(e,t){e.name;var n=e.owner,r=e.html_url,a=e.stargazers_count,c=e.forks,i=e.open_issues,l=n.login,p=n.avatar_url;return o.a.createElement(s.a,{key:r,header:"#".concat(t+1),name:l,avatar:p,href:r},o.a.createElement("ul",{className:"card-list"},o.a.createElement("li",null,o.a.createElement(f.a,{text:"Github username"},o.a.createElement(u.j,{color:"rgb(255, 191, 116)",size:22}),o.a.createElement("a",{href:"https://github.com/".concat(l)},l))),o.a.createElement("li",null,o.a.createElement(u.g,{color:"rgb(255, 215, 0)",size:22}),a.toLocaleString()," stars"),o.a.createElement("li",null,o.a.createElement(u.c,{color:"rgb(129, 195, 245)",size:22}),c.toLocaleString()," forks"),o.a.createElement("li",null,o.a.createElement(u.e,{color:"rgb(241, 138, 147)",size:22}),i.toLocaleString()," open issues")))}))}v.propTypes={selected:c.a.string.isRequired,onUpdateLanguage:c.a.func.isRequired},E.propTypes={repos:c.a.array.isRequired};var w=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return r=this,o=(e=g(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==p(o)&&"function"!=typeof o?b(r):o,d(b(n),"state",{selectedLanguage:"All",repos:{},error:null}),d(b(n),"updateLanguage",function(e){n.setState({selectedLanguage:e,error:null}),n.state.repos[e]||Object(i.b)(e).then(function(t){n.setState(function(n){return{repos:m({},n.repos,d({},e,t))}})}).catch(function(e){console.warn("Error fetching repos: ",e),n.setState({error:"There was an error fetching the repositories."})})}),d(b(n),"isLoading",function(){var e=n.state,t=e.selectedLanguage,r=e.repos,o=e.error;return!r[t]&&null===o}),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,o.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.updateLanguage(this.state.selectedLanguage)}},{key:"render",value:function(){var e=this.state,t=e.selectedLanguage,n=e.repos,r=e.error;return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{selected:t,onUpdateLanguage:this.updateLanguage}),this.isLoading()&&o.a.createElement(l.a,{text:"Fetching Repos"}),r&&o.a.createElement("p",{className:"center-text error"},r),n[t]&&o.a.createElement(E,{repos:n[t]}))}}])&&h(n.prototype,r),a&&h(n,a),t}()}}]);