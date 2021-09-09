(this["webpackJsonpfocus-react"]=this["webpackJsonpfocus-react"]||[]).push([[0],{18:function(e,t,c){},19:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(8),o=c.n(a),s=(c(18),c(3)),i=c(2),l=c(4),j=(c.p,c(19),c(12)),u=c(11),b=c(1);var f=function(){var e={"color-1":"#FFB000","color-2":"#785EF0","color-3":"#648FFF","color-4":"#DC267F","color-inactive":"#767676","color-focus":"#FE6100"},t={"stroke-width":"8"},c={"font-size":36,"font-family":"Arial","letter-spacing":"0.02"},r=["sans-serif","serif","monospace","cursive","Atkinson Hyperlegible"],a=Object(n.useRef)(0),o=Object(n.useState)(!1),f=Object(l.a)(o,2),O=f[0],d=f[1],h=Object(n.useState)(Object(i.a)({},e)),v=Object(l.a)(h,2),p=v[0],x=v[1],m=Object(n.useState)(Object(i.a)({},t)),g=Object(l.a)(m,2),y=g[0],k=g[1],C=Object(n.useState)(Object(i.a)({},c)),F=Object(l.a)(C,2),S=F[0],N=F[1];function A(e,t){N(Object(i.a)(Object(i.a)({},S),{},Object(s.a)({},t,e.target.value)))}var E=Object(u.a)({colors:function(){var e={};return Object.keys(p).forEach((function(t,c){"color-focus"==t?e['& [data-layer="root"]:focus [data-layer="bg"]']={fill:p[t]}:"color-inactive"==t?e['& [data-layer-state="0"] [data-layer="bg"]']={fill:p[t]}:t.startsWith("color")&&(e["& .".concat(t," [data-layer='bg']")]={fill:p[t]})})),e}(),strokes:function(){var e={};return Object.keys(y).forEach((function(t,c){"stroke-width"==t&&(e['& [data-layer="bg"]']={strokeWidth:y[t]})})),e}(),fonts:function(){var e={},t=S["font-size"],c=S["font-family"],n=S["letter-spacing"];return e['& [data-layer="txt"]']={font:"bold ".concat(t,"px ").concat(c),letterSpacing:n+"em"},e}()}),w=function(e){var t=e.children,c=E();return Object(b.jsx)("div",{className:"".concat(c.colors," ").concat(c.strokes," ").concat(c.fonts),children:t})};return Object(n.useEffect)((function(){var e=setInterval((function(){for(var e=Array.from(document.querySelectorAll("[data-meta='Unthemed']")),t=0;t<e.length-1;)e[t].remove(),t++}),5e3);return function(){return clearInterval(e)}}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{className:"title",children:"Adaptive SVG"}),Object(b.jsx)(w,{children:Object(b.jsx)(j.a,{innerRef:a,src:"".concat("/focus-react","/assets/focus-test.svg"),onLoad:function(){d(!0)}})}),O&&Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"colors",children:[Object(b.jsx)("h3",{children:"Color"}),Object.keys(p).map((function(e,t){if(e.startsWith("color"))return Object(b.jsxs)("label",{children:[e,Object(b.jsx)("input",{type:"color",value:p[e],onChange:function(t){return function(e,t){x(Object(i.a)(Object(i.a)({},p),{},Object(s.a)({},t,e.target.value)))}(t,e)}})]},t)})),Object(b.jsx)("button",{onClick:function(){x(Object(i.a)({},e))},children:"Reset Colors"})]}),Object(b.jsxs)("div",{className:"stroke",children:[Object(b.jsx)("h3",{children:"Stroke"}),Object.keys(y).map((function(e,t){if("stroke-width"==e)return Object(b.jsxs)("label",{children:[e,Object(b.jsx)("input",{type:"number",step:"2",value:y[e],onChange:function(t){return function(e,t){k(Object(i.a)(Object(i.a)({},y),{},Object(s.a)({},t,e.target.value)))}(t,e)}})]},t)})),Object(b.jsx)("button",{onClick:function(){k(Object(i.a)({},t))},children:"Reset Stroke"})]}),Object(b.jsxs)("div",{className:"fonts",children:[Object(b.jsx)("h3",{children:"Font"}),Object.keys(S).map((function(e,t){return"font-size"==e?Object(b.jsxs)("label",{children:[e,Object(b.jsx)("input",{type:"number",value:S[e],onChange:function(t){return A(t,e)}})]},t):"font-family"==e?Object(b.jsxs)("label",{children:[e,Object(b.jsx)("select",{onChange:function(t){return A(t,e)},children:r.map((function(e){return Object(b.jsx)("option",{children:e})}))})]},t):"letter-spacing"==e?Object(b.jsxs)("label",{children:[e+" (em)",Object(b.jsx)("input",{type:"number",step:"0.01",value:S[e],onChange:function(t){return A(t,e)}})]},t):void 0})),Object(b.jsx)("button",{onClick:function(){N(Object(i.a)({},c))},children:"Reset Fonts"})]})]})]})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,30)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),r(e),a(e),o(e)}))};o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),O()}},[[29,1,2]]]);
//# sourceMappingURL=main.0d01e3b3.chunk.js.map