(function(e){function n(n){for(var c,a,o=n[0],i=n[1],f=n[2],h=0,l=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);d&&d(n);while(l.length)l.shift()();return u.push.apply(u,f||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,a=1;a<t.length;a++){var o=t[a];0!==r[o]&&(c=!1)}c&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var c={},a={app:0},r={app:0},u=[];function o(e){return i.p+"js/"+({administrator:"administrator",login:"login",register:"register",calendar:"calendar",client:"client",main:"main",nutritionist:"nutritionist"}[e]||e)+"."+{administrator:"6d67af25","chunk-28307a76":"5a269791","chunk-07709945":"44e61564","chunk-3c584e1f":"df995ed8","chunk-01fe169a":"ceb6e04d","chunk-01ffca2a":"e79467a7","chunk-1c433216":"297ab40c","chunk-1c5a7bc6":"a8823e54","chunk-2f89f15b":"f8af9be3","chunk-2fa2727d":"f9aa10b1","chunk-3feff7de":"a66e071f","chunk-15933bb2":"51858407","chunk-5e569e52":"89cec106","chunk-646769f2":"eaaf29e9","chunk-7fbfe265":"9f98d54e","chunk-bf3cdaec":"3e2d332f","chunk-eddfd4e4":"b61e8a93","chunk-f9e9ea36":"0d18499e","chunk-5562fe2c":"b2dedf07","chunk-558f1152":"00c17849","chunk-87da0d60":"90dbf0e2","chunk-87daf506":"6daa48b9","chunk-8f6873e4":"6184b323","chunk-8f8f04e8":"56a687dd","chunk-ff160f6e":"ca73a890","chunk-ff3b32b8":"7587f1aa",login:"937efbc0",register:"beac7843",calendar:"5d46e14c",client:"c2f86a51",main:"1d74c176",nutritionist:"2ac0d5e2"}[e]+".js"}function i(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-28307a76":1,"chunk-07709945":1,"chunk-3feff7de":1,"chunk-15933bb2":1,"chunk-5e569e52":1,"chunk-646769f2":1,"chunk-7fbfe265":1,"chunk-bf3cdaec":1,"chunk-eddfd4e4":1,"chunk-f9e9ea36":1,calendar:1,main:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=new Promise((function(n,t){for(var c="css/"+({administrator:"administrator",login:"login",register:"register",calendar:"calendar",client:"client",main:"main",nutritionist:"nutritionist"}[e]||e)+"."+{administrator:"31d6cfe0","chunk-28307a76":"ceec5a78","chunk-07709945":"e5a04aaf","chunk-3c584e1f":"31d6cfe0","chunk-01fe169a":"31d6cfe0","chunk-01ffca2a":"31d6cfe0","chunk-1c433216":"31d6cfe0","chunk-1c5a7bc6":"31d6cfe0","chunk-2f89f15b":"31d6cfe0","chunk-2fa2727d":"31d6cfe0","chunk-3feff7de":"80192c1b","chunk-15933bb2":"19a4323e","chunk-5e569e52":"19a4323e","chunk-646769f2":"19a4323e","chunk-7fbfe265":"19a4323e","chunk-bf3cdaec":"19a4323e","chunk-eddfd4e4":"19a4323e","chunk-f9e9ea36":"19a4323e","chunk-5562fe2c":"31d6cfe0","chunk-558f1152":"31d6cfe0","chunk-87da0d60":"31d6cfe0","chunk-87daf506":"31d6cfe0","chunk-8f6873e4":"31d6cfe0","chunk-8f8f04e8":"31d6cfe0","chunk-ff160f6e":"31d6cfe0","chunk-ff3b32b8":"31d6cfe0",login:"31d6cfe0",register:"31d6cfe0",calendar:"c778904b",client:"31d6cfe0",main:"1bbdaac2",nutritionist:"31d6cfe0"}[e]+".css",r=i.p+c,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var f=u[o],h=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(h===c||h===r))return n()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){f=l[o],h=f.getAttribute("data-href");if(h===c||h===r)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var c=n&&n.target&&n.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete a[e],d.parentNode.removeChild(d),t(u)},d.href=r;var s=document.getElementsByTagName("head")[0];s.appendChild(d)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=u);var f,h=document.createElement("script");h.charset="utf-8",h.timeout=120,i.nc&&h.setAttribute("nonce",i.nc),h.src=o(e);var l=new Error;f=function(n){h.onerror=h.onload=null,clearTimeout(d);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",l.name="ChunkLoadError",l.type=c,l.request=a,t[1](l)}r[e]=void 0}};var d=setTimeout((function(){f({type:"timeout",target:h})}),12e4);h.onerror=h.onload=f,document.head.appendChild(h)}return Promise.all(n)},i.m=e,i.c=c,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)i.d(t,c,function(n){return e[n]}.bind(null,c));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],h=f.push.bind(f);f.push=n,f=f.slice();for(var l=0;l<f.length;l++)n(f[l]);var d=h;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-app-bar",{attrs:{app:"",dark:"",fixed:""}},[t("v-toolbar-title",[e._v("Easy Nutrition")]),t("v-spacer"),t("v-toolbar-items",[t("v-btn",{attrs:{text:"",to:"/calendar"}},[e._v("Appointments")]),t("v-btn",{attrs:{text:"",to:"/roles"}},[e._v("Roles")]),t("v-btn",{attrs:{text:"",to:"/users"}},[e._v("Users")]),t("v-btn",{attrs:{text:"",to:"/subscriptions"}},[e._v("Subscriptions")]),t("v-btn",{attrs:{text:"",to:"/schedules"}},[e._v("Schedules")]),t("v-btn",{attrs:{text:"",to:"/experiences"}},[e._v("Experiences")]),t("v-btn",{attrs:{text:"",to:"/complaints"}},[e._v("Complaints")]),t("v-btn",{attrs:{text:"",to:"/diets"}},[e._v("Diets")]),t("v-btn",{attrs:{text:"",to:"/login"}},[e._v("Log Out")])],1)],1),t("v-main",[t("div",[t("h1",{attrs:{align:"center"}},[e._v("Welcome to EasyNutrition")])]),t("v-container",[t("router-view")],1)],1),t("v-footer",{attrs:{app:""}})],1)},r=[],u={name:"App",components:{},data:function(){return{}}},o=u,i=t("2877"),f=t("6544"),h=t.n(f),l=t("7496"),d=t("40dc"),s=t("8336"),p=t("a523"),k=t("553a"),m=t("f6c4"),b=t("2fa4"),v=t("2a7f"),g=Object(i["a"])(o,a,r,!1,null,null,null),P=g.exports;h()(g,{VApp:l["a"],VAppBar:d["a"],VBtn:s["a"],VContainer:p["a"],VFooter:k["a"],VMain:m["a"],VSpacer:b["a"],VToolbarItems:v["a"],VToolbarTitle:v["b"]});t("d3b7");var y=t("8c4f"),x=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("v-app-bar",{attrs:{app:"",dark:"",fixed:""}},[t("v-toolbar-title",[e._v("Easy Nutrition")]),t("v-spacer"),t("v-toolbar-items",[t("v-btn",{attrs:{text:"",to:"/login"}},[e._v("Sign In")]),t("v-btn",{attrs:{text:"",to:"/register"}},[e._v("Sign Up")])],1)],1),t("v-main",[t("v-container",[t("router-view")],1)],1),t("v-footer",{attrs:{app:""}})],1)},w=[],_={name:"Home",components:{},data:function(){return{}}},V=_,E=Object(i["a"])(V,x,w,!1,null,null,null),O=E.exports;h()(E,{VApp:l["a"],VAppBar:d["a"],VBtn:s["a"],VContainer:p["a"],VFooter:k["a"],VMain:m["a"],VSpacer:b["a"],VToolbarItems:v["a"],VToolbarTitle:v["b"]}),c["a"].use(y["a"]);var S=[{path:"/",name:"Home",component:O},{path:"/login",name:"Login",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("login")]).then(t.bind(null,"dd7b"))}},{path:"/main",name:"Main",component:function(){return t.e("main").then(t.bind(null,"7f94"))}},{path:"/register",name:"Register",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("register")]).then(t.bind(null,"7803"))}},{path:"/calendar",name:"Calendar",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-3feff7de"),t.e("calendar")]).then(t.bind(null,"45df"))}},{path:"/administrator",name:"Administrator",component:function(){return t.e("administrator").then(t.bind(null,"9c9a"))}},{path:"/client",name:"Client",component:function(){return t.e("client").then(t.bind(null,"18d3"))}},{path:"/nutritionist",name:"Nutritionist",component:function(){return t.e("nutritionist").then(t.bind(null,"1882"))}},{path:"/roles",name:"roles",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("chunk-3c584e1f"),t.e("chunk-3feff7de"),t.e("chunk-bf3cdaec")]).then(t.bind(null,"3d76"))}},{path:"/roles/new",name:"add-role",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("chunk-3c584e1f"),t.e("chunk-01fe169a")]).then(t.bind(null,"33ae"))}},{path:"/roles/:id",name:"edit-role",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("chunk-3c584e1f"),t.e("chunk-01ffca2a")]).then(t.bind(null,"17b8"))}},{path:"/users",name:"users",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("chunk-3c584e1f"),t.e("chunk-3feff7de"),t.e("chunk-eddfd4e4")]).then(t.bind(null,"7d9c"))}},{path:"/users/new",name:"add-user",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("chunk-3c584e1f"),t.e("chunk-5562fe2c")]).then(t.bind(null,"ecb4"))}},{path:"/users/:id",name:"edit-user",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("chunk-3c584e1f"),t.e("chunk-558f1152")]).then(t.bind(null,"65ec"))}},{path:"/subscriptions",name:"subscriptions",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("chunk-3c584e1f"),t.e("chunk-3feff7de"),t.e("chunk-7fbfe265")]).then(t.bind(null,"0f5b"))}},{path:"/subscriptions/new",name:"add-subscription",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("chunk-3c584e1f"),t.e("chunk-87da0d60")]).then(t.bind(null,"efc5"))}},{path:"/subscriptions/:id",name:"edit-subscription",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("chunk-3c584e1f"),t.e("chunk-87daf506")]).then(t.bind(null,"dffd"))}},{path:"/schedules",name:"schedules",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("chunk-3c584e1f"),t.e("chunk-3feff7de"),t.e("chunk-646769f2")]).then(t.bind(null,"89d0"))}},{path:"/schedules/new",name:"add-schedule",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("chunk-3c584e1f"),t.e("chunk-ff160f6e")]).then(t.bind(null,"a0a2"))}},{path:"/schedules/:id",name:"edit-schedule",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("chunk-3c584e1f"),t.e("chunk-ff3b32b8")]).then(t.bind(null,"8685"))}},{path:"/diets",name:"diets",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("chunk-3c584e1f"),t.e("chunk-3feff7de"),t.e("chunk-5e569e52")]).then(t.bind(null,"39c2"))}},{path:"/diets/new",name:"add-diet",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("chunk-3c584e1f"),t.e("chunk-2fa2727d")]).then(t.bind(null,"f54a"))}},{path:"/diets/:id",name:"edit-diet",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("chunk-3c584e1f"),t.e("chunk-2f89f15b")]).then(t.bind(null,"081c"))}},{path:"/complaints",name:"complaints",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("chunk-3c584e1f"),t.e("chunk-3feff7de"),t.e("chunk-15933bb2")]).then(t.bind(null,"6430"))}},{path:"/complaints/new",name:"add-complaint",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("chunk-3c584e1f"),t.e("chunk-1c433216")]).then(t.bind(null,"1055"))}},{path:"/complaints/:id",name:"edit-complaint",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("chunk-3c584e1f"),t.e("chunk-1c5a7bc6")]).then(t.bind(null,"d795"))}},{path:"/experiences",name:"experience",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("chunk-3c584e1f"),t.e("chunk-3feff7de"),t.e("chunk-f9e9ea36")]).then(t.bind(null,"2cce"))}},{path:"/experiences/new",name:"add-experience",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("chunk-3c584e1f"),t.e("chunk-8f8f04e8")]).then(t.bind(null,"89db"))}},{path:"/experiences/:id",name:"edit-experience",component:function(){return Promise.all([t.e("chunk-28307a76"),t.e("chunk-07709945"),t.e("chunk-3c584e1f"),t.e("chunk-8f6873e4")]).then(t.bind(null,"aeeb"))}}],T=new y["a"]({mode:"history",base:"/",routes:S}),j=T,A=t("f309");c["a"].use(A["a"]);var C=new A["a"]({});c["a"].config.productionTip=!1,new c["a"]({router:j,vuetify:C,render:function(e){return e(P)}}).$mount("#app")}});
//# sourceMappingURL=app.76809bed.js.map