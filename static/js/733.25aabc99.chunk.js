"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[733],{633:function(e,n,t){t.d(n,{LZ:function(){return v},cd:function(){return w},eK:function(){return d},kK:function(){return m},l2:function(){return h}});var r=t(861),a=t(757),c=t.n(a),u=t(243),s="c93a6a4d3a553d1e7ad5324e4c95943f";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="/trending/movie/week",o="/search/movie",p="/movie",f="/credits",l="/reviews",v=function(){var e=(0,r.Z)(c().mark((function e(){var n,t,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:1,e.next=3,u.Z.get("".concat(i,"?api_key=").concat(s,"&page=").concat(n,"&language=en-US&include_adult=false"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>1&&void 0!==a[1]?a[1]:1,e.next=3,u.Z.get("".concat(o,"?api_key=").concat(s,"&page=").concat(t,"&query=").concat(n,"&language=en-US&include_adult=false"));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(p,"/").concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n).concat(f,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),w=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(n).concat(l,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},733:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var r=t(861),a=t(439),c=t(757),u=t.n(c),s=t(791),i=t(689),o=t(633),p="Reviews_movieReviewList__XlBjl",f="Reviews_movieReviewItem__60aUy",l="Reviews_movieReviewText__csCbs",v=t(184);function d(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],d=(0,s.useState)(null),h=(0,a.Z)(d,2),m=h[0],w=h[1],g=(0,i.UO)().movieId;return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.cd)(g);case 3:n=e.sent,c(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),w("ERROR");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[g]),(0,v.jsxs)(v.Fragment,{children:[m&&(0,v.jsx)("div",{children:m}),(0,v.jsx)("ul",{className:p,children:t&&t.map((function(e){return(0,v.jsxs)("li",{className:f,children:[(0,v.jsxs)("p",{className:l,children:["Author: ",(0,v.jsx)("span",{children:e.author})]}),(0,v.jsxs)("p",{className:l,children:[" ",(0,v.jsx)("span",{children:e.content})]})]},e.id)}))})]})}}}]);
//# sourceMappingURL=733.25aabc99.chunk.js.map