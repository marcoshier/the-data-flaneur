(function(t){function e(e){for(var r,o,i=e[0],s=e[1],c=e[2],f=0,p=[];f<i.length;f++)o=i[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(p.length)p.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(l.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},l=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=s;l.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},2823:function(t,e,n){"use strict";n("809c")},"52d6":function(t,e,n){"use strict";n("5af7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Homepage")],1)},l=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home-cnt"}},[n("Header"),n("Video"),n("Concept",{attrs:{title:"Concept"}}),n("Calendar",{attrs:{title:"Calendar"}}),n("About",{attrs:{title:"Who are we?"}}),n("Footer")],1)},i=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("div",{staticClass:"logo"},[t._v("The Data Flâneur")]),n("ul",{staticClass:"menu"},[n("li",[n("a",{attrs:{href:"#"}},[t._v("Home")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("Concept")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("Calendar")])]),n("li",[n("a",{attrs:{href:"#"}},[t._v("About")])])])])}],u={name:"Header"},f=u,p=(n("52d6"),n("2877")),d=Object(p["a"])(f,s,c,!1,null,"3ceeffcb",null),v=d.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section",attrs:{id:"main-cnt"}},[n("div",{staticClass:"video"},[n("iframe",{attrs:{src:"https://player.vimeo.com/video/498946704?background=1&autoplay=1&loop=1&byline=0&title=0?muted=1",width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen;",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])])}],h={name:"Video"},b=h,C=(n("c9e9"),Object(p["a"])(b,m,_,!1,null,null,null)),g=C.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section",attrs:{id:"content-cnt"}},[n("div",{staticClass:"section-title"},[n("h1",[t._v(t._s(t.title)+" ")])])])},w=[],O={name:"Concept",props:{title:String}},j=O,k=Object(p["a"])(j,y,w,!1,null,null,null),x=k.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section",attrs:{id:"calendar-cnt"}},[n("div",{staticClass:"section-title"},[n("h1",[t._v(t._s(t.title)+" ")])])])},E=[],S={name:"Calendar",props:{title:String}},H=S,P=Object(p["a"])(H,$,E,!1,null,null,null),A=P.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section",attrs:{id:"content-cnt"}},[n("div",{staticClass:"section-title"},[n("h1",[t._v(t._s(t.title)+" ")])])])},F=[],T={name:"About",props:{title:String}},V=T,J=Object(p["a"])(V,M,F,!1,null,null,null),q=J.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},D=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"footer"}},[n("div",{staticClass:"with-love"},[t._v("◍ with love.")]),n("div",{staticClass:"quick-links"},[n("div",{staticClass:"footer-column"},[n("p",{staticClass:"footer-column-main"},[t._v("Sitemap")]),n("p",{staticClass:"footer-column-link"},[t._v("Main")]),n("p",{staticClass:"footer-column-link"},[t._v("Concept")]),n("p",{staticClass:"footer-column-link"},[t._v("Calendar")]),n("p",{staticClass:"footer-column-link"},[t._v("About us")])]),n("div",{staticClass:"footer-column"},[n("p",{staticClass:"footer-column-main"},[t._v("Social")]),n("p",{staticClass:"footer-column-link"},[t._v("Instagram")]),n("p",{staticClass:"footer-column-link"},[t._v("Notion")]),n("p",{staticClass:"footer-column-link"},[t._v("Vimeo")])])])])}],I={name:"Footer"},N=I,W=(n("2823"),Object(p["a"])(N,z,D,!1,null,"d866f26c",null)),B=W.exports,G={name:"Homepage",components:{Header:v,Video:g,Concept:x,Calendar:A,About:q,Footer:B}},K=G,L=(n("766b"),Object(p["a"])(K,o,i,!1,null,"528a604b",null)),Q=L.exports,R={name:"App",components:{Homepage:Q}},U=R,X=(n("034f"),Object(p["a"])(U,a,l,!1,null,null,null)),Y=X.exports;n("fa6d");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(Y)}}).$mount("#app")},"5af7":function(t,e,n){},"60a4":function(t,e,n){},"6fef":function(t,e,n){},"766b":function(t,e,n){"use strict";n("60a4")},"809c":function(t,e,n){},"85ec":function(t,e,n){},c9e9:function(t,e,n){"use strict";n("6fef")}});
//# sourceMappingURL=app.32da0237.js.map