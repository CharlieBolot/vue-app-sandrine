(function(e){function t(t){for(var o,a,i=t[0],c=t[1],s=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&d.push(r[a][0]),r[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);p&&p(t);while(d.length)d.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},u=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a76ba12a"}[e]+".js"}function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=a(e);var s=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+u+")",s.name="ChunkLoadError",s.type=o,s.request=u,n[1](s)}r[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-app/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),e.$root.authenticated?n("router-link",{attrs:{to:"/page",replace:""},nativeOn:{click:function(t){return e.logout()}}},[e._v("Logout")]):e._e()],1),n("router-view",{on:{authenticated:e.setAuthenticated}})],1)},u=[],a=(n("ac1f"),n("5319"),{name:"App",data:function(){return{mockAccount:{username:"admin",password:"admin"}}},mounted:function(){this.authenticated||this.$router.replace({name:"Home"})},methods:{setAuthenticated:function(e){this.$root.authenticated=e},logout:function(){this.$root.authenticated=!1}}}),i=a,c=(n("034f"),n("2877")),s=Object(c["a"])(i,r,u,!1,null,null,null),l=s.exports,p=(n("d3b7"),n("8c4f")),d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("h1",[e._v(" Bienvenu dans mon application")]),o("form",{attrs:{id:"pass"}},[o("h2",[e._v("Connexion :")]),e._v(" Login : "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.input.username,expression:"input.username"}],attrs:{type:"text",name:"page",placeholder:"login"},domProps:{value:e.input.username},on:{input:function(t){t.target.composing||e.$set(e.input,"username",t.target.value)}}}),o("br"),e._v(" Mot de passe : "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.input.password,expression:"input.password"}],staticStyle:{"margin-top":"15px"},attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:e.input.password},on:{input:function(t){t.target.composing||e.$set(e.input,"password",t.target.value)}}}),o("br"),o("button",{staticStyle:{"margin-top":"15px"},attrs:{type:"submit"},on:{click:function(t){return e.login()}}},[e._v("Valider")])]),o("test",{attrs:{count:"0"}}),o("h3",[e._v("Et voici les boutons de couleur :")]),o("couleur",{attrs:{couleur:"#ABfDDD",btn:"clique sur moi !"},on:{newcouleur:e.$event}}),o("couleur",{attrs:{couleur:"#ABCDED",btn:"non ici !"},on:{newcouleur:e.$event}}),o("couleur",{attrs:{couleur:"#AABCCA",btn:"mais non là !"},on:{newcouleur:e.$event}})],1)},f=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"test"},[n("h1",[e._v("Test de boutton ")]),n("button",{on:{click:function(t){e.count++}}},[e._v("Vous m'avez cliqué "+e._s(e.count)+" fois.")])])},h=[],v=(n("a9e3"),{name:"test",props:{count:Number}}),g=v,b=Object(c["a"])(g,m,h,!1,null,null,null),w=b.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("button",{style:{backgroundColor:e.couleur,"border-radius":e.radius},on:{click:e.changefond,mouseover:e.changeform,mouseleave:e.reviens}},[e._v(" "+e._s(e.btn)+" ")])])},y=[],$=(n("25f0"),{name:"couleur",props:{btn:String,couleur:String,radius:String},data:function(){return{}},methods:{changefond:function(){this.couleur="#".concat((16777215*Math.random()<<0).toString(16)),this.btn="Recommence !",this.radius="5%",this.$emit("newcouleur",this.couleur,this.btn,this.radius)},changeform:function(){this.couleur="#".concat((16777210*Math.random()<<0).toString(16)),this.$emit("newcouleur",this.couleur,this.btn)},reviens:function(){this.btn="Reviens ici tout de suite !",this.radius="35%",this.$emit("newcouleur",this.btn,this.radius)}}}),k=$,A=Object(c["a"])(k,_,y,!1,null,null,null),x=A.exports,j={name:"home",components:{test:w,couleur:x},data:function(){return{input:{username:"",password:""}}},methods:{login:function(){""!==this.input.username&&""!==this.input.password?this.input.username===this.$parent.mockAccount.username&&this.input.password===this.$parent.mockAccount.password?(this.$emit("authenticated",!0),this.$router.replace({name:"page"})):alert("L'identifiant et/ou le mdp est incorrect"):alert("Veuillez entrer un mdp et un identifiant")},goBack:function(){return window.history.length>1?this.$router.go(-1):this.$router.push("/")}}},O=j,C=Object(c["a"])(O,d,f,!1,null,null,null),P=C.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"page"}},[n("h1",[e._v("Ma page")]),n("p",[e._v(" C'est MA Page ! ")]),n("button",{attrs:{type:"button"},on:{click:function(t){return e.home()}}},[e._v("Déconnexion")]),n("test",{attrs:{count:"0"}}),n("h3",[e._v("Test bouton couleur ")]),n("couleur",{attrs:{couleur:"#fffAAA",btn:"vas-y clique !"},on:{newcouleur:e.$event}}),n("couleur",{attrs:{couleur:"#fffBBB",btn:"sinon là"},on:{newcouleur:e.$event}}),n("couleur",{attrs:{couleur:"#fffCCC",btn:"ou ici !"},on:{newcouleur:e.$event}})],1)},E=[],B={name:"page",components:{test:w,couleur:x},data:function(){return{}},methods:{home:function(){this.$emit("authenticated",!1),this.$router.replace({name:"Home"})}}},M=B,T=(n("d6a0"),Object(c["a"])(M,S,E,!1,null,"abf374f4",null)),D=T.exports;o["a"].use(p["a"]);var N=[{path:"/",redirect:{name:"Home"}},{path:"/home",name:"Home",component:P},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/page",name:"page",component:D,beforeEnter:function(e,t,n){console.log(q.app.$root.authenticated),q.app.$root.authenticated?(console.log("test"),n()):n("/home")}}],q=new p["a"]({routes:N}),H=q,L=n("9483");Object(L["a"])("".concat("/vue-app/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({router:H,data:{authenticated:!1},render:function(e){return e(l)}}).$mount("#app")},"66e7":function(e,t,n){},"85ec":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d6a0:function(e,t,n){"use strict";var o=n("66e7"),r=n.n(o);r.a}});
//# sourceMappingURL=app.84ecc663.js.map