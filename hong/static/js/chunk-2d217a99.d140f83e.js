(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217a99"],{c84b:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=Object(r["f"])("h1",null,"this is Detail components",-1);function o(e,t,n,o,a,u){var i=Object(r["w"])("child");return Object(r["p"])(),Object(r["d"])("div",null,[c,Object(r["f"])(i,{father:e.father,onSendToFather:e.sendToFather},null,8,["father","onSendToFather"])])}var a=Object(r["f"])("h1",null,"this is Child components",-1);function u(e,t,n,c,o,u){return Object(r["p"])(),Object(r["d"])("div",null,[a,Object(r["f"])("div",null,"父组件传递过来的数据："+Object(r["y"])(e.father),1),Object(r["f"])("button",{onClick:t[1]||(t[1]=function(){return e.sendToFather&&e.sendToFather.apply(e,arguments)})},"传值给父组件")])}var i=Object(r["g"])({name:"Child",props:{father:{type:String}},setup:function(e,t){console.log(e,e.father);var n=Object(r["u"])("我是子组件的数据"),c=function(){t.emit("sendToFather",n.value)};return Object(r["n"])((function(){t.emit("sendToFather",n.value)})),{childMsg:n,sendToFather:c}}});i.render=u;var h=i,l=Object(r["g"])({name:"Detail",components:{child:h},setup:function(){var e=Object(r["u"])("father"),t=function(e){console.log(e)};return{father:e,sendToFather:t}}});l.render=o;t["default"]=l}}]);
//# sourceMappingURL=chunk-2d217a99.d140f83e.js.map