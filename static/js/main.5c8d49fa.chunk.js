(this["webpackJsonpreact-rect"]=this["webpackJsonpreact-rect"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),c=n(5),s=n.n(c),r=n(2),o=n(0),u=function(e){var t=e.canvasRef,n=e.width,a=e.height;return Object(o.jsx)("canvas",{className:"canvas",ref:t,width:n,height:a})},h=function(e){var t=e.canvasWidth,n=e.canvasHeight,a=e.setLineWidth,i=e.setCanvasWidth,c=e.setCanvasHeight;return Object(o.jsxs)("div",{className:"form",children:[Object(o.jsx)("label",{htmlFor:"line-width",children:"\u0422\u043e\u043b\u0449\u0438\u043d\u0430 \u043b\u0438\u043d\u0438\u0438"}),Object(o.jsx)("input",{onChange:function(e){return a(e.target.value)},className:"input",id:"line-width",type:"number",defaultValue:1,min:1,max:10}),Object(o.jsx)("label",{htmlFor:"line-width",children:"\u0428\u0438\u0440\u0438\u043d\u0430 \u0445\u043e\u043b\u0441\u0442\u0430"}),Object(o.jsx)("input",{onChange:function(e){return i(e.target.value)},className:"input",id:"line-width",type:"text",value:t}),Object(o.jsx)("label",{htmlFor:"line-height",children:"\u0412\u044b\u0441\u043e\u0442\u0430 \u0445\u043e\u043b\u0441\u0442\u0430"}),Object(o.jsx)("input",{onChange:function(e){return c(e.target.value)},className:"input",id:"line-height",type:"text",value:n})]})},d=n(4),l=n.n(d),f=n(6),j=function(e,t){var n=e.current,a=n.getContext("2d");a.lineWidth=t;var i=0,c=0,s=!1,r=null;n.addEventListener("mousedown",(function(e){s=!0,i=e.pageX-e.target.offsetLeft,c=e.pageY-e.target.offsetTop,a.beginPath(),a.moveTo(i,c),r=n.toDataURL()}),!1),n.addEventListener("mousemove",(function(e){s&&function(e,t){var s=new Image;s.src=r,s.onload=Object(f.a)(l.a.mark((function r(){return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:a.clearRect(0,0,n.width,n.height),a.drawImage(s,0,0,n.width,n.height),a.beginPath(),a.moveTo(i,c),a.lineTo(e,t),a.stroke();case 6:case"end":return r.stop()}}),r)})))}(e.pageX-e.target.offsetLeft,e.pageY-e.target.offsetTop)}),!1),n.addEventListener("mouseup",(function(){s=!1}),!1)};n(13);function v(){var e=Object(a.useState)(1),t=Object(r.a)(e,2),n=t[0],i=t[1],c=Object(a.useState)(800),s=Object(r.a)(c,2),d=s[0],l=s[1],f=Object(a.useState)(600),v=Object(r.a)(f,2),g=v[0],b=v[1],m=Object(a.useRef)(null);return Object(a.useEffect)((function(){j(m,n)}),[n,d,g]),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(h,{canvasWidth:d,canvasHeight:g,setLineWidth:i,setCanvasWidth:l,setCanvasHeight:b}),Object(o.jsx)(u,{canvasRef:m,width:d,height:g})]})}s.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.5c8d49fa.chunk.js.map