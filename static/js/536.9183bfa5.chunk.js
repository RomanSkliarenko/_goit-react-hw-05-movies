"use strict";(self.webpackChunkreact_hw_template=self.webpackChunkreact_hw_template||[]).push([[536],{4455:function(t,n,e){e.d(n,{Z:function(){return u}});var o,i=e(168),r=(e(2791),e(1087)),a=e(6444),c=e(184);function u(t){var n=t.to,e=t.children,o=t.from;return(0,c.jsx)(l,{to:n,state:{from:o},children:e})}var l=(0,a.ZP)(r.OL)(o||(o=(0,i.Z)(["\n  color: black;\n\n  &.active {\n    color: orange;\n    border-bottom: 2px solid orange;\n  }\n"])))},8536:function(t,n,e){e.r(n);var o=e(5861),i=e(9439),r=e(7757),a=e.n(r),c=e(2791),u=e(7689),l=e(3352),s=e(4455),d=e(184);n.default=function(t){var n,e,r,v,f=(0,u.TH)(),h=(0,u.UO)().movieId,m=(0,c.useState)(null),p=(0,i.Z)(m,2),g=p[0],b=p[1],_=(0,u.s0)();return(0,c.useEffect)((function(){var t=function(){var t=(0,o.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.Z.fetchFilmById(h);case 2:n=t.sent,b(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t().catch((function(t){return console.log(t)}))}),[h]),(0,d.jsxs)("div",{className:"single-movie-container",children:[(0,d.jsx)("button",{className:"styled-button",onClick:function(){var t,n;_(null!==(t=null===(n=f.state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/")},children:"go back"}),(0,d.jsx)("img",{src:null!==g&&void 0!==g&&g.poster_path?"https://image.tmdb.org/t/p/w500".concat(g.poster_path):"https://skydomepictures.com/wp-content/uploads/2018/08/movie-poster-coming-soon-2.png",alt:(null===g||void 0===g?void 0:g.title)||(null===g||void 0===g?void 0:g.original_name)||(null===g||void 0===g?void 0:g.original_title)}),g&&(0,d.jsx)("h2",{children:(null===g||void 0===g?void 0:g.title)||(null===g||void 0===g?void 0:g.original_name)||(null===g||void 0===g?void 0:g.original_title)}),(0,d.jsxs)("div",{className:"film-navigation-button-wrapper",children:[(0,d.jsx)(s.Z,{to:"/movies/".concat(h,"/cast"),from:null!==(n=null===(e=f.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",children:"Cast"}),(0,d.jsx)(s.Z,{to:"/movies/".concat(h,"/review"),from:null!==(r=null===(v=f.state)||void 0===v?void 0:v.from)&&void 0!==r?r:"/",children:"Review"})]}),(0,d.jsx)(u.j3,{})]})}},3352:function(t,n,e){var o=e(1912),i="f87fb9311e8c4be1eab05e1500732ab3",r={fetchTrendingFilms:function(){return o.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(i)).then((function(t){return t.data.results}))},fetchFilmsByName:function(t){return o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&page=1&include_adult=false")).then((function(t){return t.data.results}))},fetchFilmById:function(t){return o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i,"&language=en-US")).then((function(t){return t.data}))},fetchFilmCast:function(t){return o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US")).then((function(t){return t.data.cast}))},fetchFilmReview:function(t){return o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1")).then((function(t){return t.data.results}))}};n.Z=r},5861:function(t,n,e){function o(t,n,e,o,i,r,a){try{var c=t[r](a),u=c.value}catch(l){return void e(l)}c.done?n(u):Promise.resolve(u).then(o,i)}function i(t){return function(){var n=this,e=arguments;return new Promise((function(i,r){var a=t.apply(n,e);function c(t){o(a,i,r,c,u,"next",t)}function u(t){o(a,i,r,c,u,"throw",t)}c(void 0)}))}}e.d(n,{Z:function(){return i}})}}]);
//# sourceMappingURL=536.9183bfa5.chunk.js.map