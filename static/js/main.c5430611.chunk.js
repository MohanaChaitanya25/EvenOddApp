(this["webpackJsonpeven-odd-app"]=this["webpackJsonpeven-odd-app"]||[]).push([[0],{12:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),a=t(3),s=t.n(a),o=t(4),d=t(5),i=t(7),u=t(6),p=(t(12),t(0)),O=function(e){Object(i.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(o.a)(this,t);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=n.call.apply(n,[this].concat(r))).state={count:0},e.getEvenOrOdd=function(){return e.state.count%2===0?"Even":"Odd"},e.getRandNum=function(){return parseInt(100*Math.random())},e.increment=function(){var n=e.getRandNum();e.setState((function(e){return{count:e.count+n}}))},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this.state.count;return Object(p.jsx)("div",{className:"evenOddApp-bg-container",children:Object(p.jsxs)("div",{className:"evenOddApp-container",children:[Object(p.jsxs)("h1",{className:"evenOddApp-count-heading",children:["Count ",e]}),Object(p.jsxs)("p",{className:"evenOddApp-count-para",children:["Count is ",this.getEvenOrOdd()]}),Object(p.jsx)("button",{type:"button",onClick:this.increment,className:"increment-btn",children:"Increment"}),Object(p.jsx)("p",{className:"evenOddApp-para",children:"Increase By Random Number Between 0 to 100"})]})})}}]),t}(c.Component),j=O,b=(t(14),function(){return Object(p.jsx)(j,{})});s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(b,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c5430611.chunk.js.map