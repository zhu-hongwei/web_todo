(function(t){function e(e){for(var o,a,i=e[0],u=e[1],l=e[2],s=0,f=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},c={app:0},r=[];function a(t){return i.p+"static/js/"+({}[t]||t)+"."+{"chunk-2d217a99":"d140f83e","chunk-2d22d746":"f659a7b6"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=c[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=c[t]=[e,o]}));e.push(n[2]=o);var r,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=a(t);var l=new Error;r=function(e){u.onerror=u.onload=null,clearTimeout(s);var n=c[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}c[t]=void 0}};var s=setTimeout((function(){r({type:"timeout",target:u})}),12e4);u.onerror=u.onload=r,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2d46":function(t,e,n){},3685:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function c(t,e){var n=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])(n)}n("6f5b");const r={};r.render=c;var a=r,i=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),u=Object(o["G"])("data-v-485083a6");Object(o["s"])("data-v-485083a6");var l={class:"home"};Object(o["q"])();var s=u((function(t,e,n,c,r,a){var i=Object(o["w"])("nav-header"),u=Object(o["w"])("nav-main"),s=Object(o["w"])("nav-footer");return Object(o["p"])(),Object(o["d"])("div",l,[Object(o["f"])(i,{onAdd:t.add},null,8,["onAdd"]),Object(o["f"])(u,{list:t.list,onDel:t.del,onTapListItem:t.tapListItem},null,8,["list","onDel","onTapListItem"]),Object(o["f"])(s,{list:t.list,onClear:t.clear},null,8,["list","onClear"]),Object(o["f"])("button",{class:"about",onClick:e[1]||(e[1]=function(){return t.goto&&t.goto.apply(t,arguments)})},"about")])})),d=Object(o["G"])("data-v-0859f524");Object(o["s"])("data-v-0859f524");var f={class:"input-box"};Object(o["q"])();var b=d((function(t,e,n,c,r,a){return Object(o["p"])(),Object(o["d"])("div",f,[Object(o["D"])(Object(o["f"])("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.value=e}),onKeydown:e[2]||(e[2]=Object(o["E"])((function(){return t.push_a_list_item&&t.push_a_list_item.apply(t,arguments)}),["enter"]))},null,544),[[o["B"],t.value]])])})),p=Object(o["g"])({name:"navHeader",setup:function(t,e){var n=Object(o["u"])(""),c=function(){e.emit("add",n.value),console.log(n.value),n.value=""};return{value:n,push_a_list_item:c}}});n("a0d2");p.render=b,p.__scopeId="data-v-0859f524";var v=p,O=Object(o["G"])("data-v-d14bbf6e");Object(o["s"])("data-v-d14bbf6e");var j={class:"list"},m={class:"list-item-title"};Object(o["q"])();var h=O((function(t,e,n,c,r,a){return Object(o["p"])(),Object(o["d"])("div",j,[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(t.list,(function(e,n){return Object(o["p"])(),Object(o["d"])("div",{class:["list-item",{list_item_done:t.isDone}],key:n},[Object(o["f"])("span",null,[Object(o["D"])(Object(o["f"])("input",{class:"Checkbox",id:"check1",type:"checkbox","onUpdate:modelValue":function(t){return e.done=t}},null,8,["onUpdate:modelValue"]),[[o["A"],e.done]]),Object(o["f"])("label",{for:"check1",onClick:Object(o["F"])((function(o){return t.tapListItem(e,n)}),["stop"])},null,8,["onClick"]),Object(o["f"])("span",m,Object(o["y"])(e.title),1)]),Object(o["f"])("button",{class:"del",onClick:Object(o["F"])((function(o){return t.del(e,n)}),["stop"])},"移除",8,["onClick"])],2)})),128))])})),y=Object(o["g"])({name:"navMain",props:{list:{type:Array,required:!0}},emits:["del","tapListItem"],setup:function(t,e){var n=Object(o["u"])(!1),c=function(t,o){n.value=!0,e.emit("tapListItem",o)},r=function(t,n){e.emit("del",n)};return{isDone:n,tapListItem:c,del:r}}});n("bcc5");y.render=h,y.__scopeId="data-v-d14bbf6e";var g=y,_=Object(o["G"])("data-v-4fa28956");Object(o["s"])("data-v-4fa28956");var k={class:"h_footer"},w={class:"h_footer_tip"},I={key:0,class:"but-box"};Object(o["q"])();var L=_((function(t,e,n,c,r,a){return Object(o["p"])(),Object(o["d"])("div",k,[Object(o["f"])("div",w," 已完成 "+Object(o["y"])(t.done)+" / 全部 "+Object(o["y"])(t.list.length),1),t.done>0?(Object(o["p"])(),Object(o["d"])("div",I,[Object(o["f"])("button",{onClick:e[1]||(e[1]=function(){return t.clear&&t.clear.apply(t,arguments)})},"clear has done")])):Object(o["e"])("",!0)])})),x=(n("4de4"),Object(o["g"])({name:"navFooter",props:{list:{type:Array,required:!0}},setup:function(t,e){var n=Object(o["b"])((function(){var e=t.list.filter((function(t){return t.done}));return e.length})),c=function(){console.log("clear");var n=t.list.filter((function(t){return!1===t.done}));e.emit("clear",n)};return{done:n,clear:c}}}));n("d782");x.render=L,x.__scopeId="data-v-4fa28956";var C=x,T=n("5502"),P=Object(o["g"])({name:"Home",components:{NavHeader:v,NavMain:g,NavFooter:C},setup:function(t,e){var n=Object(T["b"])(),c=Object(i["d"])();console.log("home router",c);var r=Object(i["c"])();console.log("home route",r);var a=Object(o["u"])(""),u=Object(o["b"])((function(){return n.state.list})),l=function(t){a.value=t,console.log(t),n.commit("addOneTodo",{title:a.value,done:!1})},s=function(t){console.log(t),n.commit("delOneTodo",t)},d=function(t){console.log(t),n.commit("tapListItem",t)},f=function(t){n.commit("clear",t)},b=function(){c.push({name:"About",params:{name:"name",num:1}})};return{value:a,list:u,add:l,tapListItem:d,del:s,clear:f,goto:b}}});n("8b1a");P.render=s,P.__scopeId="data-v-485083a6";var A=P,q=[{path:"/",name:"Home",component:A},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/detail",name:"Detail",component:function(){return n.e("chunk-2d217a99").then(n.bind(null,"c84b"))}}],D=Object(i["a"])({history:Object(i["b"])(""),routes:q}),M=D,S=(n("a434"),Object(T["a"])({state:{list:[{title:"eat food",done:!1},{title:"drink",done:!1},{title:"code",done:!0}]},mutations:{addOneTodo:function(t,e){t.list.push(e)},delOneTodo:function(t,e){t.list.splice(e,1)},tapListItem:function(t,e){},clear:function(t,e){t.list=e}},actions:{},modules:{}}));Object(o["c"])(a).use(S).use(M).mount("#app")},"6f5b":function(t,e,n){"use strict";n("3685")},"773e":function(t,e,n){},"8b1a":function(t,e,n){"use strict";n("d809")},a0d2:function(t,e,n){"use strict";n("a418")},a418:function(t,e,n){},bcc5:function(t,e,n){"use strict";n("773e")},d782:function(t,e,n){"use strict";n("2d46")},d809:function(t,e,n){}});
//# sourceMappingURL=app.9d56fe1a.js.map