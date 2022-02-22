"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[834],{1454:function(e,n,t){t.d(n,{Z:function(){return s}});var r,c=t(8602),i=t(168),o=t(5751).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),a=t(184),s=function(){return(0,a.jsx)(o,{children:(0,a.jsx)(c.s,{size:50,thickness:100,speed:100,color:"#1eee0b",secondaryColor:"rgba(0, 0, 0, 0.44)"})})}},4668:function(e,n,t){t.d(n,{qw:function(){return p},Md:function(){return d},Mc:function(){return f},xc:function(){return x},Hx:function(){return g}});var r=t(5861),c=t(7757),i=t.n(c),o=t(4569),a=t.n(o),s="330e0c7492d2da195764b5f6a5017e6c",u="https://api.themoviedb.org/3";function p(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("".concat(u,"/trending/movie/day?api_key=").concat(s));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("".concat(u,"/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(n,"&include_adult=false"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("".concat(u,"/movie/").concat(n,"?api_key=").concat(s));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("".concat(u,"/movie/").concat(n,"/credits?api_key=").concat(s));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a().get("".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(s));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},2834:function(e,n,t){t.r(n),t.d(n,{MovieDetailsPage:function(){return M}});var r,c,i,o,a,s,u,p,l=t(885),d=t(2791),h=t(6871),f=t(4668),v=t(8479),x=t(1454),m=t(8494),g=t(168),j=t(5751),y=t(501),w=j.ZP.main(r||(r=(0,g.Z)(["\n  padding: 20px;\n"]))),Z=j.ZP.div(c||(c=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n"]))),b=j.ZP.img(i||(i=(0,g.Z)(["\n  display: block;\n  width: 100%;\n  height: auto;\n"]))),k=j.ZP.div(o||(o=(0,g.Z)(["\n  max-width: 250px;\n"]))),_=j.ZP.div(a||(a=(0,g.Z)(["\n  padding-left: 20px;\n"]))),P=j.ZP.button(s||(s=(0,g.Z)(["\n  margin-bottom: 10px;\n  padding: 10px;\n  background-color: #ad08ee;\n  border: none;\n  border-radius: 5px;\n  opacity: 0.8;\n  &:hover, &:focus {\n  opacity: 1;\n  }\n"]))),S=(0,j.ZP)(y.rU)(u||(u=(0,g.Z)(["\n  color: #000000;\n"]))),T=(0,j.ZP)(y.OL)(p||(p=(0,g.Z)(["\n  &.active {\n    color: #ff4747;\n  }    \n"]))),C=t(184);function M(){var e,n,t,r=(0,h.UO)().moviesId,c=(0,d.useState)(null),i=(0,l.Z)(c,2),o=i[0],a=i[1],s=(0,d.useState)(!1),u=(0,l.Z)(s,2),p=u[0],g=u[1],j=(0,h.TH)(),y=(0,d.useRef)(j);return(0,d.useEffect)((function(){g(!0),(0,f.Mc)(r).then((function(e){var n=e.data,t=n.poster_path,r=n.title,c=n.name,i=n.overview,o=n.vote_average,s=n.genres;a({poster:t?"https://image.tmdb.org/t/p/w500"+t:"https://sd.keepcalms.com/i/sorry-no-picture-available-2.png",title:r,name:c,overview:i||"There is no overview",vote_average:o,genresValues:0===s.length?"There are no genres":s.map((function(e){return[e.name]})).join(", ")})})).catch((function(e){return console.log("Whoops, something went wrong...",e),v.Am.error("Sorry, there is no film. Try another request...")})).finally((function(){return setTimeout((function(){g(!1)}),1e3)}))}),[r]),(0,C.jsxs)(w,{children:[(0,C.jsx)(v.x7,{position:"top-right"}),p&&(0,C.jsx)(x.Z,{}),(0,C.jsx)(P,{type:"button",children:(0,C.jsxs)(S,{to:null!==(e=null===(n=y.current)||void 0===n||null===(t=n.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",state:{from:y.current},children:[(0,C.jsx)(m.Fjg,{})," Go back"]})}),o&&(0,C.jsxs)(Z,{children:[(0,C.jsx)(k,{children:(0,C.jsx)(b,{src:o.poster,alt:o.title?o.title:o.name})}),(0,C.jsxs)(_,{children:[(0,C.jsx)("h1",{children:o.title?o.title:o.name}),(0,C.jsxs)("p",{children:["User Score: ",10*o.vote_average,"%"]}),(0,C.jsx)("h2",{children:"Overview"}),(0,C.jsx)("p",{children:o.overview}),(0,C.jsx)("h3",{children:"Genres"}),(0,C.jsx)("p",{children:o.genresValues})]})]}),(0,C.jsx)("hr",{}),(0,C.jsx)("h3",{children:"Additional information"}),(0,C.jsxs)("ul",{children:[(0,C.jsx)("li",{children:(0,C.jsx)(T,{to:"/movies/".concat(r,"/cast"),state:{from:y.current},children:"Cast"})}),(0,C.jsx)("li",{children:(0,C.jsx)(T,{to:"/movies/".concat(r,"/reviews"),state:{from:y.current},children:"Reviews"})})]}),(0,C.jsx)("hr",{}),(0,C.jsx)(h.j3,{})]})}}}]);
//# sourceMappingURL=834.93d38620.chunk.js.map