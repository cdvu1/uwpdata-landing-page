(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,a,t){e.exports=t(45)},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){e.exports=t.p+"static/media/New_patch.dbc541e1.png"},30:function(e,a,t){e.exports=t.p+"static/media/ben.8ff1459a.jpeg"},31:function(e,a,t){e.exports=t.p+"static/media/godwin.66d5880f.jpeg"},32:function(e,a,t){e.exports=t.p+"static/media/maggie.ec979e64.jpeg"},33:function(e,a,t){e.exports=t.p+"static/media/cece.a87a2e71.jpg"},34:function(e,a,t){e.exports=t.p+"static/media/access-control.af78362a.png"},35:function(e,a,t){e.exports=t.p+"static/media/admin.8da082b6.jpg"},36:function(e,a,t){e.exports=t.p+"static/media/research.83d6ec93.png"},45:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(19),i=t.n(l),r=(t(27),t(5)),s=t(6),o=t(8),m=t(7),d=t(9),u=(t(28),t(12)),v=t(10),p={home:"/",api:"/api",data:"/data"},E=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"home"},c.a.createElement("div",{className:"uwpd-header"},"UWPD'S MISSION"),c.a.createElement("div",{className:"uwpd"},c.a.createElement("div",{className:"uwpd-logo"},c.a.createElement("img",{src:t(29)})),c.a.createElement("div",{className:"uwpd-mission"},"\u201cAlthough no campus is free from crime, we are committed to partnering together with you to create a safe place to live, work, and study.\u201d")),c.a.createElement("div",{className:"team"},c.a.createElement("div",{className:"team-header"},"MEET THE TEAM"),c.a.createElement("div",{className:"team-cards"},c.a.createElement("div",null,c.a.createElement("img",{src:t(30)}),c.a.createElement("div",{className:"team-item-name"},"Ben Walchenbach"),c.a.createElement("div",null,"University of Washington"),c.a.createElement("div",null,"Incoming Security Engineer")),c.a.createElement("div",null,c.a.createElement("img",{src:t(31)}),c.a.createElement("div",{className:"team-item-name"},"Godwin Vincent"),c.a.createElement("div",null,"University of Washington"),c.a.createElement("div",null,"Incoming Security Analyst")),c.a.createElement("div",null,c.a.createElement("img",{src:t(32)}),c.a.createElement("div",{className:"team-item-name"},"Maggie Tsang"),c.a.createElement("div",null,"University of Washington"),c.a.createElement("div",null,"Incoming Project Manager")),c.a.createElement("div",null,c.a.createElement("img",{src:t(33)}),c.a.createElement("div",{className:"team-item-name"},"Cecilia Vu"),c.a.createElement("div",null,"University of Washington"),c.a.createElement("div",null,"Incoming Software Engineer")))))}}]),a}(n.Component),h=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"api"},c.a.createElement("div",{className:"api-header"},"MEET THE API"),c.a.createElement("div",{className:"api-cards"},c.a.createElement("div",null,c.a.createElement("img",{src:t(34)}),c.a.createElement("div",{className:"card-title"},"Access Controlled"),c.a.createElement("div",null,"Allows for access to only parts of the data that can be shared, can be used internally and externally")),c.a.createElement("div",null,c.a.createElement("img",{src:t(35)}),c.a.createElement("div",{className:"card-title"},"Administation"),c.a.createElement("div",null,"Grant and revoke access with an easy to use front end, where one can see everyone that has access to the data")),c.a.createElement("div",null,c.a.createElement("img",{src:t(36)}),c.a.createElement("div",{className:"card-title"},"Empower Research"),c.a.createElement("div",null,"Will allow future groups to leverage this API for even more research to better protect the UW community"))))}}]),a}(n.Component),g=function(e){function a(){return Object(r.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"data"},"Tableau visual here")}}]),a}(n.Component),f=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={curr:"home"},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("div",{className:"nav"},c.a.createElement(u.b,{className:"nav-home nav-item nav-item-selected",to:p.home,onClick:function(){console.log("clicked");var e=document.querySelector(".nav-item-selected");console.log(e),e.classList.remove("nav-item-selected"),document.querySelector(".nav-home").classList.add("nav-item-selected")}},"Home"),c.a.createElement(u.b,{className:"nav-api nav-item",to:p.api,onClick:function(){console.log("clicked");var e=document.querySelector(".nav-item-selected");console.log(e),e.classList.remove("nav-item-selected"),document.querySelector(".nav-api").classList.add("nav-item-selected")}},"Meet the API"),c.a.createElement(u.b,{className:"nav-data nav-item",to:p.data,onClick:function(){console.log("clicked");var e=document.querySelector(".nav-item-selected");console.log(e),e.classList.remove("nav-item-selected"),document.querySelector(".nav-data").classList.add("nav-item-selected")}},"Visualization")),c.a.createElement("div",{className:"header"},c.a.createElement("span",{className:"header-1"},"UWP"),c.a.createElement("span",{className:"header-2"},"Data")),c.a.createElement("div",{className:"header-description"},"An easy to use, informative, access controlled API for enabling visualizations and other research from UWPD data.")),c.a.createElement(v.c,null,c.a.createElement(v.a,{exact:!0,path:p.home,component:E}),c.a.createElement(v.a,{path:p.api,component:h}),c.a.createElement(v.a,{path:p.data,component:g}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.260dbc36.chunk.js.map