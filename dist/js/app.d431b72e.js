(function(){"use strict";var t={3158:function(t,e,o){var n=o(9242),a=o(3396);const i={class:"body"};function s(t,e,o,s,l,r){const u=(0,a.up)("HeaderTop"),c=(0,a.up)("router-view"),d=(0,a.up)("ModalLogin");return(0,a.wg)(),(0,a.iD)("div",i,[(0,a.Wm)(u,{onShowLogin:r.showLoginModal,onLogOut:r.logout},null,8,["onShowLogin","onLogOut"]),(0,a.Wm)(c),(0,a.wy)((0,a.Wm)(d,{onShowModal:r.showLoginModal,onLogIn:r.doLogin},null,8,["onShowModal","onLogIn"]),[[n.F8,l.showModal]])])}var l=o(7139);const r={class:"header"},u=(0,a.Uk)("Home"),c=(0,a.Uk)("News"),d=(0,a.Uk)("Feedback"),h=(0,a.Uk)("Users");function p(t,e,o,i,s,p){const m=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(m,{class:"btn",to:"/"},{default:(0,a.w5)((()=>[u])),_:1}),(0,a.Wm)(m,{class:"btn",to:"/news"},{default:(0,a.w5)((()=>[c])),_:1}),(0,a.Wm)(m,{class:"btn",to:"/feedback"},{default:(0,a.w5)((()=>[d])),_:1}),(0,a.wy)((0,a.Wm)(m,{class:"btn",to:"/user"},{default:(0,a.w5)((()=>[h])),_:1},512),[[n.F8,t.$store.state.user.isAuth]]),(0,a.wy)((0,a._)("button",{class:"btn coloure-green brl brr",onClick:e[0]||(e[0]=e=>t.$emit("logOut"))},(0,l.zw)(t.$store.state.user.profile.name),513),[[n.F8,t.$store.state.user.isAuth]]),(0,a.wy)((0,a._)("button",{class:"btn coloure-green brl brr",onClick:e[1]||(e[1]=e=>t.$emit("showLogin"))},"LOGIN",512),[[n.F8,!t.$store.state.user.isAuth]])])}var m={name:"Header-top"},f=o(89);const w=(0,f.Z)(m,[["render",p]]);var b=w;const v={class:"box glass-box"};function g(t,e,o,i,s,l){return(0,a.wg)(),(0,a.iD)("div",{class:"back",onClick:e[4]||(e[4]=(0,n.iM)((e=>t.$emit("showModal")),["self"]))},[(0,a._)("div",v,[(0,a._)("button",{class:"btn coloure-green",onClick:e[0]||(e[0]=e=>t.$emit("showModal"))},"X"),(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>s.email=t),name:"email",placeholder:"email"},null,512),[[n.nr,s.email]]),(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>s.password=t),name:"password",placeholder:"password"},null,512),[[n.nr,s.password]]),(0,a.wy)((0,a._)("p",null,"Не верный логин или пароль",512),[[n.F8,s.loginFail]]),(0,a._)("button",{class:"btn bottom coloure-green",onClick:e[3]||(e[3]=e=>t.$emit("logIn",{email:this.email,password:this.password}))},"LOGIN")])])}var y={name:"modal-login",data(){return{email:"",password:"",loginFail:!1}},methods:{}};const _=(0,f.Z)(y,[["render",g],["__scopeId","data-v-62b9bf22"]]);var k=_,L=o(6265),$=o.n(L),x=o(65);const F={state:()=>({password:"",isAuth:"",email:"",login:"",loginFail:!1,profile:[]}),getters:{},mutations:{setPassword(t,e){t.password=e},setIsAuth(t,e){t.isAuth=e},setEmail(t,e){t.email=e},setLogin(t,e){t.login=e},setLoginFail(t,e){t.loginFail=e},setProfile(t,e){t.profile=e}},actions:{},namespaced:!0},V={state:()=>({host:"laravel.diakov.xyz"}),getters:{getHost:t=>t.host},mutations:{setProfile(t,e){t.profile=e}},actions:{},namespaced:!0};var M=(0,x.MT)({modules:{user:F,main:V}}),O={components:{ModalLogin:k,HeaderTop:b},data(){return{showModal:!1}},methods:{showLoginModal(){this.showModal=!this.showModal},async doLogin(t){await $().post(`http://${M.state.main.host}/api/v1/login`,{email:t.email,password:t.password}).then((t=>this.info=t)).catch((function(t){console.log(t.response.data.errors)})),"true"==this.info.data.login?(this.$store.commit("user/setIsAuth",!0),this.$store.commit("user/setEmail",this.info.data.profile.email),this.$store.commit("user/setLogin",this.info.data.profile.login),this.$store.commit("user/setProfile",this.info.data.profile),this.$store.commit("user/loginFail",!1),this.showModal=!1):this.$store.commit("user/loginFail",!0)},async logout(){await $().post(`http://${M.state.main.host}/api/v1/logout`).then((t=>this.info=t)),this.$store.commit("user/setLogin",""),this.$store.commit("user/setProfile",[]),this.$store.commit("user/setEmail",""),this.$store.commit("user/setIsAuth",!1)}}};const T=(0,f.Z)(O,[["render",s]]);var A=T;const D=(0,a._)("h3",null,"Simple SPA Admin for GB LARAVEL API",-1),U=[D];function P(t,e,o,n,i,s){return(0,a.wg)(),(0,a.iD)("div",null,U)}var C={};const I=(0,f.Z)(C,[["render",P]]);var N=I;const R={class:"header"};function W(t,e,o,i,s,l){const r=(0,a.up)("TableList");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",R,[(0,a._)("div",null,[(0,a._)("button",{class:"btn coloure-green",onClick:e[0]||(e[0]=(...t)=>l.addLine&&l.addLine(...t))},"Своя"),(0,a.wy)((0,a._)("input",{class:"input",type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>s.valForTable=t)},null,512),[[n.nr,s.valForTable]])]),(0,a._)("div",null,[(0,a._)("button",{class:"btn coloure-green brl",onClick:e[2]||(e[2]=(...t)=>l.getNews&&l.getNews(...t))},"Получить новости"),(0,a.wy)((0,a._)("input",{class:"input brr",type:"text","onUpdate:modelValue":e[3]||(e[3]=t=>s.textValue=t),onInput:e[4]||(e[4]=(...t)=>l.check&&l.check(...t))},null,544),[[n.nr,s.textValue]])])]),(0,a.Wm)(r,{table:s.table,onRemoveRecord:l.removeRecord},null,8,["table","onRemoveRecord"])],64)}const S={class:"table"},Z={class:"table-title"},H={class:"title"},j={class:"title"},z={class:""},E={class:""},G=["onClick"];function Y(t,e,o,i,s,r){return(0,a.wg)(),(0,a.iD)("div",S,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.table,(e=>((0,a.wg)(),(0,a.iD)("div",{key:e.id,class:"tr glass-box"},[(0,a._)("div",Z,[(0,a._)("div",H,(0,l.zw)(e.id),1),(0,a._)("div",j,(0,l.zw)(e.title),1),(0,a._)("div",z,(0,l.zw)(e.created_at.slice(0,-11)),1)]),(0,a._)("div",E,(0,l.zw)(e.text),1),(0,a.wy)((0,a._)("button",{class:"btn coloure-green",onClick:o=>t.$emit("removeRecord",e.id)},"удалить",8,G),[[n.F8,t.$store.state.user.isAuth]])])))),128))])}var B={name:"table-list",props:{table:{type:Array}}};const K=(0,f.Z)(B,[["render",Y],["__scopeId","data-v-40ccdb26"]]);var X=K,q={components:{TableList:X},data(){return{value:0,textValue:0,valForTable:"",table:[],info:""}},methods:{async getNews(){let t=0==this.textValue?"all":this.textValue;await $().get(`http://${M.state.main.host}/api/v1/news`,{params:{count:t}}).then((t=>this.info=t)),this.table=this.info.data},check(){isNaN(this.textValue)&&(this.textValue=this.textValue.slice(0,-1),alert("только числа!!"))},addLine(){let t=new Date,e={id:Date.now(),title:this.valForTable,date:t.toLocaleString()};this.table.push(e)},async removeRecord(t){await $()["delete"](`http://${M.state.main.host}/api/v1/news`,{params:{id:t}}).then((t=>this.info=t));for(let[e]in this.table)this.table[e].id==t&&this.table.splice(e,1)}}};const J=(0,f.Z)(q,[["render",W]]);var Q=J;function tt(t,e,o,n,i,s){const l=(0,a.up)("TableList");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(l,{table:i.table},null,8,["table"])])}var et={components:{TableList:X},data(){return{value:0,textValue:0,valForTable:"",table:[],info:""}},mounted(){this.getFeedack()},methods:{async getFeedack(){let t=0==this.textValue?"all":this.textValue;await $().get(`http://${M.state.main.host}/api/v1/feedback`,{params:{count:t}}).then((t=>this.info=t)),this.table=this.info.data},check(){isNaN(this.textValue)&&(this.textValue=this.textValue.slice(0,-1),alert("только числа!!"))},addLine(){let t=new Date,e={id:Date.now(),title:this.valForTable,date:t.toLocaleString()};this.table.push(e)},async removeRecord(t){await $()["delete"](`http://${M.state.main.host}/api/v1/feedback`,{params:{id:t}}).then((t=>this.info=t));for(let[e]in this.table)this.table[e].id==t&&this.table.splice(e,1)}}};const ot=(0,f.Z)(et,[["render",tt]]);var nt=ot;const at=(0,a._)("h3",null,"User profile page",-1);function it(t,e,o,i,s,l){return(0,a.wg)(),(0,a.iD)("div",null,[at,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>s.profile.name=t),placeholder:"name"},null,512),[[n.nr,s.profile.name]]),(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=t=>s.profile.email=t),placeholder:"email"},null,512),[[n.nr,s.profile.email]]),(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>s.profile.phone=t),placeholder:"phone"},null,512),[[n.nr,s.profile.phone]]),(0,a._)("button",{onClick:e[3]||(e[3]=(...t)=>l.putProfile&&l.putProfile(...t))},"Update")])}var st={data(){return{profile:this.$store.state.user.profile}},methods:{goToMain(){this.$store.state.user.isAuth||this.$router.push("/")},async putProfile(){await $().put(`http://${M.state.main.host}/api/v1/profile`,{id:this.profile.id,name:this.profile.name,email:this.profile.email,phone:this.profile.phone})}},mounted(){this.goToMain()}};const lt=(0,f.Z)(st,[["render",it]]);var rt=lt,ut=o(678);const ct=[{path:"/",component:N},{path:"/news",component:Q},{path:"/feedback",component:nt},{path:"/user",component:rt}],dt=(0,ut.p7)({history:(0,ut.PO)(),routes:ct});var ht=dt;(0,n.ri)(A).use(ht).use(M).mount("#app")}},e={};function o(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,n,a,i){if(!n){var s=1/0;for(c=0;c<t.length;c++){n=t[c][0],a=t[c][1],i=t[c][2];for(var l=!0,r=0;r<n.length;r++)(!1&i||s>=i)&&Object.keys(o.O).every((function(t){return o.O[t](n[r])}))?n.splice(r--,1):(l=!1,i<s&&(s=i));if(l){t.splice(c--,1);var u=a();void 0!==u&&(e=u)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[n,a,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var a,i,s=n[0],l=n[1],r=n[2],u=0;if(s.some((function(e){return 0!==t[e]}))){for(a in l)o.o(l,a)&&(o.m[a]=l[a]);if(r)var c=r(o)}for(e&&e(n);u<s.length;u++)i=s[u],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(c)},n=self["webpackChunkvuetest"]=self["webpackChunkvuetest"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(3158)}));n=o.O(n)})();
//# sourceMappingURL=app.d431b72e.js.map