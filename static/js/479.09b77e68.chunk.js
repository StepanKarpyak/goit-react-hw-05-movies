"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[479],{8479:function(n,t,e){e.d(t,{x7:function(){return hn},ZP:function(){return bn},Am:function(){return I}});var r=e(2791);var o={data:""},i=function(n){return"object"==typeof window?((n?n.querySelector("#_goober"):window._goober)||Object.assign((n||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:n||o},a=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,s=/\/\*[^]*?\*\/|\s\s+|\n/g,u=function n(t,e){var r="",o="",i="",a=function(a){var u=t[a];"@"==a[0]?"i"==a[1]?r=a+" "+u+";":o+="f"==a[1]?n(u,a):a+"{"+n(u,"k"==a[1]?"":e)+"}":"object"==typeof u?o+=n(u,e?e.replace(/([^,])+/g,(function(n){return a.replace(/(^:.*)|([^,])+/g,(function(t){return/&/.test(t)?t.replace(/&/g,n):n?n+" "+t:t}))})):a):null!=u&&(a=/^--/.test(a)?a:a.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=n.p?n.p(a,u):a+":"+u+";"),s=a};for(var s in t)a(s);return r+(e&&i?e+"{"+i+"}":i)+o},c={},f=function n(t){if("object"==typeof t){var e="";for(var r in t)e+=r+n(t[r]);return e}return t},d=function(n,t,e,r,o){var i,d,l,p=f(n),m=c[p]||(c[p]=function(n){for(var t=0,e=11;t<n.length;)e=101*e+n.charCodeAt(t++)>>>0;return"go"+e}(p));if(!c[m]){var v=p!==n?n:function(n){for(var t,e=[{}];t=a.exec(n.replace(s,""));)t[4]?e.shift():t[3]?e.unshift(e[0][t[3]]=e[0][t[3]]||{}):e[0][t[1]]=t[2];return e[0]}(n);c[m]=u(o?(l=v,(d="@keyframes "+m)in(i={})?Object.defineProperty(i,d,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[d]=l,i):v,e?"":"."+m)}return function(n,t,e){-1==t.data.indexOf(n)&&(t.data=e?n+t.data:t.data+n)}(c[m],t,r),m},l=function(n,t,e){return n.reduce((function(n,r,o){var i=t[o];if(i&&i.call){var a=i(e),s=a&&a.props&&a.props.className||/^go/.test(a)&&a;i=s?"."+s:a&&"object"==typeof a?a.props?"":u(a,""):!1===a?"":a}return n+r+(null==i?"":i)}),"")};function p(n){var t=this||{},e=n.call?n(t.p):n;return d(e.unshift?e.raw?l(e,[].slice.call(arguments,1),t.p):e.reduce((function(n,e){return Object.assign(n,e&&e.call?e(t.p):e)}),{}):e,i(t.target),t.g,t.o,t.k)}p.bind({g:1});var m,v,g,y=p.bind({k:1});function h(n,t){var e=this||{};return function(){var r=arguments;function o(i,a){var s=Object.assign({},i),u=s.className||o.className;e.p=Object.assign({theme:v&&v()},s),e.o=/ *go\d+/.test(u),s.className=p.apply(e,r)+(u?" "+u:""),t&&(s.ref=a);var c=n;return n[0]&&(c=s.as||n,delete s.as),g&&c[0]&&g(s),m(c,s)}return t?t(o):o}}function b(){return b=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},b.apply(this,arguments)}function T(n,t){return t||(t=n.slice(0)),n.raw=t,n}var x,S=function(n,t){return function(n){return"function"===typeof n}(n)?n(t):n},A=function(){var n=0;return function(){return(++n).toString()}}(),E=function(){var n=void 0;return function(){if(void 0===n&&"undefined"!==typeof window){var t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n}}();!function(n){n[n.ADD_TOAST=0]="ADD_TOAST",n[n.UPDATE_TOAST=1]="UPDATE_TOAST",n[n.UPSERT_TOAST=2]="UPSERT_TOAST",n[n.DISMISS_TOAST=3]="DISMISS_TOAST",n[n.REMOVE_TOAST=4]="REMOVE_TOAST",n[n.START_PAUSE=5]="START_PAUSE",n[n.END_PAUSE=6]="END_PAUSE"}(x||(x={}));var O=new Map,w=function(n){if(!O.has(n)){var t=setTimeout((function(){O.delete(n),j({type:x.REMOVE_TOAST,toastId:n})}),1e3);O.set(n,t)}},_=function n(t,e){switch(e.type){case x.ADD_TOAST:return b({},t,{toasts:[e.toast].concat(t.toasts).slice(0,20)});case x.UPDATE_TOAST:return e.toast.id&&function(n){var t=O.get(n);t&&clearTimeout(t)}(e.toast.id),b({},t,{toasts:t.toasts.map((function(n){return n.id===e.toast.id?b({},n,e.toast):n}))});case x.UPSERT_TOAST:var r=e.toast;return t.toasts.find((function(n){return n.id===r.id}))?n(t,{type:x.UPDATE_TOAST,toast:r}):n(t,{type:x.ADD_TOAST,toast:r});case x.DISMISS_TOAST:var o=e.toastId;return o?w(o):t.toasts.forEach((function(n){w(n.id)})),b({},t,{toasts:t.toasts.map((function(n){return n.id===o||void 0===o?b({},n,{visible:!1}):n}))});case x.REMOVE_TOAST:return void 0===e.toastId?b({},t,{toasts:[]}):b({},t,{toasts:t.toasts.filter((function(n){return n.id!==e.toastId}))});case x.START_PAUSE:return b({},t,{pausedAt:e.time});case x.END_PAUSE:var i=e.time-(t.pausedAt||0);return b({},t,{pausedAt:void 0,toasts:t.toasts.map((function(n){return b({},n,{pauseDuration:n.pauseDuration+i})}))})}},D=[],P={toasts:[],pausedAt:void 0},j=function(n){P=_(P,n),D.forEach((function(n){n(P)}))},k={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},U=function(n){return function(t,e){var r=function(n,t,e){return void 0===t&&(t="blank"),b({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0},e,{id:(null==e?void 0:e.id)||A()})}(t,n,e);return j({type:x.UPSERT_TOAST,toast:r}),r.id}},I=function(n,t){return U("blank")(n,t)};I.error=U("error"),I.success=U("success"),I.loading=U("loading"),I.custom=U("custom"),I.dismiss=function(n){j({type:x.DISMISS_TOAST,toastId:n})},I.remove=function(n){return j({type:x.REMOVE_TOAST,toastId:n})},I.promise=function(n,t,e){var r=I.loading(t.loading,b({},e,null==e?void 0:e.loading));return n.then((function(n){return I.success(S(t.success,n),b({id:r},e,null==e?void 0:e.success)),n})).catch((function(n){I.error(S(t.error,n),b({id:r},e,null==e?void 0:e.error))})),n};var M=function(n){var t=function(n){void 0===n&&(n={});var t=(0,r.useState)(P),e=t[0],o=t[1];(0,r.useEffect)((function(){return D.push(o),function(){var n=D.indexOf(o);n>-1&&D.splice(n,1)}}),[e]);var i=e.toasts.map((function(t){var e,r,o;return b({},n,n[t.type],t,{duration:t.duration||(null==(e=n[t.type])?void 0:e.duration)||(null==(r=n)?void 0:r.duration)||k[t.type],style:b({},n.style,null==(o=n[t.type])?void 0:o.style,t.style)})}));return b({},e,{toasts:i})}(n),e=t.toasts,o=t.pausedAt;(0,r.useEffect)((function(){if(!o){var n=Date.now(),t=e.map((function(t){if(t.duration!==1/0){var e=(t.duration||0)+t.pauseDuration-(n-t.createdAt);if(!(e<0))return setTimeout((function(){return I.dismiss(t.id)}),e);t.visible&&I.dismiss(t.id)}}));return function(){t.forEach((function(n){return n&&clearTimeout(n)}))}}}),[e,o]);var i=(0,r.useMemo)((function(){return{startPause:function(){j({type:x.START_PAUSE,time:Date.now()})},endPause:function(){o&&j({type:x.END_PAUSE,time:Date.now()})},updateHeight:function(n,t){return j({type:x.UPDATE_TOAST,toast:{id:n,height:t}})},calculateOffset:function(n,t){var r,o=t||{},i=o.reverseOrder,a=void 0!==i&&i,s=o.gutter,u=void 0===s?8:s,c=o.defaultPosition,f=e.filter((function(t){return(t.position||c)===(n.position||c)&&t.height})),d=f.findIndex((function(t){return t.id===n.id})),l=f.filter((function(n,t){return t<d&&n.visible})).length,p=(r=f.filter((function(n){return n.visible}))).slice.apply(r,a?[l+1]:[0,l]).reduce((function(n,t){return n+(t.height||0)+u}),0);return p}}}),[e,o]);return{toasts:e,handlers:i}};function R(){var n=T(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);return R=function(){return n},n}function N(){var n=T(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]);return N=function(){return n},n}function z(){var n=T(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return z=function(){return n},n}function C(){var n=T(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);return C=function(){return n},n}var F=y(C()),V=y(z()),H=y(N()),L=h("div")(R(),(function(n){return n.primary||"#ff4b4b"}),F,V,(function(n){return n.secondary||"#fff"}),H);function Z(){var n=T(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"]);return Z=function(){return n},n}function q(){var n=T(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return q=function(){return n},n}var B=y(q()),Y=h("div")(Z(),(function(n){return n.secondary||"#e0e0e0"}),(function(n){return n.primary||"#616161"}),B);function $(){var n=T(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);return $=function(){return n},n}function G(){var n=T(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);return G=function(){return n},n}function J(){var n=T(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]);return J=function(){return n},n}var K=y(J()),Q=y(G()),W=h("div")($(),(function(n){return n.primary||"#61d345"}),K,Q,(function(n){return n.secondary||"#fff"}));function X(){var n=T(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);return X=function(){return n},n}function nn(){var n=T(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return nn=function(){return n},n}function tn(){var n=T(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);return tn=function(){return n},n}function en(){var n=T(["\n  position: absolute;\n"]);return en=function(){return n},n}var rn=h("div")(en()),on=h("div")(tn()),an=y(nn()),sn=h("div")(X(),an),un=function(n){var t=n.toast,e=t.icon,o=t.type,i=t.iconTheme;return void 0!==e?"string"===typeof e?(0,r.createElement)(sn,null,e):e:"blank"===o?null:(0,r.createElement)(on,null,(0,r.createElement)(Y,Object.assign({},i)),"loading"!==o&&(0,r.createElement)(rn,null,"error"===o?(0,r.createElement)(L,Object.assign({},i)):(0,r.createElement)(W,Object.assign({},i))))};function cn(){var n=T(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]);return cn=function(){return n},n}function fn(){var n=T(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);return fn=function(){return n},n}var dn=function(n){return"\n0% {transform: translate3d(0,"+-200*n+"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"},ln=function(n){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,"+-150*n+"%,-1px) scale(.6); opacity:0;}\n"},pn=h("div",r.forwardRef)(fn()),mn=h("div")(cn()),vn=(0,r.memo)((function(n){var t=n.toast,e=n.position,o=n.style,i=n.children,a=null!=t&&t.height?function(n,t){var e=n.includes("top")?1:-1,r=E()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[dn(e),ln(e)],o=r[1];return{animation:t?y(r[0])+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":y(o)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}}(t.position||e||"top-center",t.visible):{opacity:0},s=(0,r.createElement)(un,{toast:t}),u=(0,r.createElement)(mn,Object.assign({},t.ariaProps),S(t.message,t));return(0,r.createElement)(pn,{className:t.className,style:b({},a,o,t.style)},"function"===typeof i?i({icon:s,message:u}):(0,r.createElement)(r.Fragment,null,s,u))}));function gn(){var n=T(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);return gn=function(){return n},n}!function(n,t,e,r){u.p=t,m=n,v=e,g=r}(r.createElement);var yn=p(gn()),hn=function(n){var t=n.reverseOrder,e=n.position,o=void 0===e?"top-center":e,i=n.toastOptions,a=n.gutter,s=n.children,u=n.containerStyle,c=n.containerClassName,f=M(i),d=f.toasts,l=f.handlers;return(0,r.createElement)("div",{style:b({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},u),className:c,onMouseEnter:l.startPause,onMouseLeave:l.endPause},d.map((function(n){var e,i=n.position||o,u=function(n,t){var e=n.includes("top"),r=e?{top:0}:{bottom:0},o=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return b({left:0,right:0,display:"flex",position:"absolute",transition:E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+t*(e?1:-1)+"px)"},r,o)}(i,l.calculateOffset(n,{reverseOrder:t,gutter:a,defaultPosition:o})),c=n.height?void 0:(e=function(t){l.updateHeight(n.id,t.height)},function(n){n&&setTimeout((function(){var t=n.getBoundingClientRect();e(t)}))});return(0,r.createElement)("div",{ref:c,className:n.visible?yn:"",key:n.id,style:u},"custom"===n.type?S(n.message,n):s?s(n):(0,r.createElement)(vn,{toast:n,position:i}))})))},bn=I}}]);
//# sourceMappingURL=479.09b77e68.chunk.js.map