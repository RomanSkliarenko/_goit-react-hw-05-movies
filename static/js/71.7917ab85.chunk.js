"use strict";(self.webpackChunkreact_hw_template=self.webpackChunkreact_hw_template||[]).push([[71],{2071:function(A,n,t){t.r(n),t.d(n,{default:function(){return w}});var a=t(5861),e=t(9439),i=t(7757),o=t.n(i),r=t(2791),h=t(7689),c=t(3352),u=t(5984),p=t(184);var w=function(){var A=(0,h.UO)().movieId,n=(0,r.useState)(null),t=(0,e.Z)(n,2),i=t[0],w=t[1];return(0,r.useEffect)((function(){var n=function(){var n=(0,a.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.fetchFilmCast(A);case 2:t=n.sent,w(t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n().catch((function(A){return console.log(A)}))}),[A]),(0,p.jsx)("div",{className:"cast-container",children:i&&i.map((function(A){return(0,p.jsxs)("div",{className:"actor",children:[(0,p.jsx)("img",{src:A.profile_path?"https://image.tmdb.org/t/p/w500".concat(A.profile_path):"data:image/jpeg;base64,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",alt:A.name}),(0,p.jsx)("h5",{children:A.name}),(0,p.jsx)("p",{children:A.character||"Actor"})]},(0,u.x0)())}))})}},3352:function(A,n,t){var a=t(1912),e="f87fb9311e8c4be1eab05e1500732ab3",i={fetchTrendingFilms:function(){return a.Z.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(e)).then((function(A){return A.data.results}))},fetchFilmsByName:function(A){return a.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(e,"&language=en-US&query=").concat(A,"&page=1&include_adult=false")).then((function(A){return A.data.results}))},fetchFilmById:function(A){return a.Z.get("https://api.themoviedb.org/3/movie/".concat(A,"?api_key=").concat(e,"&language=en-US")).then((function(A){return A.data}))},fetchFilmCast:function(A){return a.Z.get("https://api.themoviedb.org/3/movie/".concat(A,"/credits?api_key=").concat(e,"&language=en-US")).then((function(A){return A.data.cast}))},fetchFilmReview:function(A){return a.Z.get("https://api.themoviedb.org/3/movie/".concat(A,"/reviews?api_key=").concat(e,"&language=en-US&page=1")).then((function(A){return A.data.results}))}};n.Z=i},5861:function(A,n,t){function a(A,n,t,a,e,i,o){try{var r=A[i](o),h=r.value}catch(c){return void t(c)}r.done?n(h):Promise.resolve(h).then(a,e)}function e(A){return function(){var n=this,t=arguments;return new Promise((function(e,i){var o=A.apply(n,t);function r(A){a(o,e,i,r,h,"next",A)}function h(A){a(o,e,i,r,h,"throw",A)}r(void 0)}))}}t.d(n,{Z:function(){return e}})},5984:function(A,n,t){t.d(n,{x0:function(){return a}});var a=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(A)).reduce((function(A,n){return A+=(n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=71.7917ab85.chunk.js.map