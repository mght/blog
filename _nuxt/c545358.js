(window.webpackJsonp=window.webpackJsonp||[]).push([[8,5],{301:function(t,e,n){"use strict";n.r(e);n(49),n(62);var l={name:"CodeEditor",data:function(){return{id:null}},methods:{init:function(){this.$el.contentWindow.postMessage({fromParent:!0,action:"language",data:this.language},"*"),this.$el.contentWindow.postMessage({fromParent:!0,action:"update",data:this.code.replace(/__BREAK__/g,"\n")},"*")}},props:{language:{type:String,default:"html"},code:{type:String,default:""}}},o=n(18),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("iframe",{staticClass:"codeeditor block h-96 w-full",attrs:{src:"https://yj639.csb.app/"},on:{load:t.init}})}),[],!1,null,null,null);e.default=component.exports},317:function(t,e,n){"use strict";n.r(e);var l={layout:"home"},o=n(18),component=Object(o.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("CodeEditor",{staticClass:"block h-96",attrs:{language:"html",code:"<h1>Hello world!!!</h1>"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CodeEditor:n(301).default})}}]);