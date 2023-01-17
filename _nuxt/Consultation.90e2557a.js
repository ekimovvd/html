import{f as m,v as $,l as h,a as y,G as V,H as A,o as C,b,y as x,I as L,J as I,e as i,t as P,D as f,K as T,i as B,L as j,x as U,h as p,A as E}from"./entry.f21b63a8.js";import{_ as z}from"./TheButton.95ebb884.js";const D=m({props:{placeholder:{type:String,default:""},value:{type:String,default:""},error:{type:Boolean,default:!1}},emits:["change"],setup(e,{emit:t}){const{value:n,error:a}=$(e),r=h({get(){return n.value},set(o){t("change",o)}}),s=h(()=>a.value?"the-input--error":"");return{currentValue:r,getViewClass:s}}}),N=["placeholder"];function O(e,t,n,a,r,s){return V((C(),b("input",{class:x(["the-input",e.getViewClass]),type:"text",placeholder:e.placeholder,"onUpdate:modelValue":t[0]||(t[0]=o=>e.currentValue=o)},null,10,N)),[[A,e.currentValue]])}const H=y(D,[["render",O]]);const M=m({props:{placeholder:{type:String,default:""},value:{type:String,default:""},error:{type:Boolean,default:!1}},emits:["change"],setup(e,{emit:t}){const{value:n,error:a}=$(e),r=h({get(){return n.value},set(o){t("change",o)}}),s=h(()=>a.value?"the-input-phone--error":"");return{currentValue:r,getViewClass:s}}}),Z=["placeholder"];function q(e,t,n,a,r,s){const o=L("maska");return V((C(),b("input",{class:x(["the-input-phone",e.getViewClass]),type:"text",placeholder:e.placeholder,"data-maska":"+7 ### ###-##-##","onUpdate:modelValue":t[0]||(t[0]=c=>e.currentValue=c)},null,10,Z)),[[o],[A,e.currentValue]])}const G=y(M,[["render",q]]);const K=m({props:{label:{type:String,default:""},value:{type:Boolean,default:!1}},emits:["change"],setup(e,{emit:t}){const{value:n}=$(e);return{currentValue:h({get(){return n.value},set(r){t("change",r)}})}}}),J={class:"the-checkbox"},Y={class:"the-checkbox__label"},F=i("span",{class:"the-checkbox__span"},null,-1);function Q(e,t,n,a,r,s){return C(),b("label",J,[V(i("input",{class:"the-checkbox__input",type:"checkbox","onUpdate:modelValue":t[0]||(t[0]=o=>e.currentValue=o)},null,512),[[I,e.currentValue]]),i("p",Y,P(e.label),1),F])}const W=y(K,[["render",Q]]);function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},S.apply(this,arguments)}var X=function(){var t=!1,n=[],a=function(){if(!t){t=!0;for(var c=0,d=n.length;c<d;c++)n[c]()}},r=function(c){if(!t){n.push(c);return}c()},s={resolved:function(){return t},resolve:a,promise:{then:r}};return s},R=Object.prototype.hasOwnProperty;function ee(){var e=X();return{notify:function(){e.resolve()},wait:function(){return e.promise},render:function(n,a,r){this.wait().then(function(){r(window.grecaptcha.render(n,a))})},reset:function(n){typeof n>"u"||(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.reset(n)}))},execute:function(n){typeof n>"u"||(this.assertLoaded(),this.wait().then(function(){return window.grecaptcha.execute(n)}))},checkRecaptchaLoad:function(){R.call(window,"grecaptcha")&&R.call(window.grecaptcha,"render")&&this.notify()},assertLoaded:function(){if(!e.resolved())throw new Error("ReCAPTCHA has not been loaded")}}}var _=ee();typeof window<"u"&&(window.vueRecaptchaApiLoaded=_.notify);var te=m({name:"VueRecaptcha",props:{sitekey:{type:String,required:!0},theme:{type:String},badge:{type:String},type:{type:String},size:{type:String},tabindex:{type:String},loadRecaptchaScript:{type:Boolean,default:!0},recaptchaScriptId:{type:String,default:"__RECAPTCHA_SCRIPT"},recaptchaHost:{type:String,default:"www.google.com"},language:{type:String,default:""}},emits:["render","verify","expired","error"],setup:function(t,n){var a=n.slots,r=n.emit,s=f(null),o=f(null),c=function(g){r("verify",g)},d=function(){r("expired")},v=function(){r("error")};return T(function(){if(_.checkRecaptchaLoad(),t.loadRecaptchaScript&&!document.getElementById(t.recaptchaScriptId)){var l=document.createElement("script");l.id=t.recaptchaScriptId,l.src="https://"+t.recaptchaHost+"/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit&hl="+t.language,l.async=!0,l.defer=!0,document.head.appendChild(l)}var g=S({},t,{callback:c,"expired-callback":d,"error-callback":v}),w=s.value,k=a.default?w.children[0]:w;_.render(k,g,function(u){o.value=u,r("render",u)})}),{root:s,widgetId:o,reset:function(){_.reset(o.value)},execute:function(){_.execute(o.value)}}},render:function(){var t=this.$slots.default,n;return typeof t=="function"?n=t():n=t,B("div",{ref:"root"},n)}});const ne=""+new URL("polygon.dac67156.svg",import.meta.url).href,oe=""+new URL("triangle.9ded91d1.svg",import.meta.url).href,ae=""+new URL("vector.3e848f19.svg",import.meta.url).href;const re=m({components:{VueRecaptcha:te},setup(){const e=j({company:"",name:"",email:"",phone:"+7 999 999-99-99"}),t=f(!1),n=f(!1),a=f(null),r=h(()=>e.email?!String(e.email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/):!1),s=h(()=>!(e.name&&e.phone&&!r.value&&n.value));return{form:e,approval:t,recaptcha:a,getEmailIsError:r,getSubmitDisabled:s,onChangeCompany:u=>{e.company=u},onChangeName:u=>{e.name=u},onChangeEmail:u=>{e.email=u},onChangePhone:u=>{e.phone=u},onChangeApproval:u=>{t.value=u},onSubmit:()=>{a.value.reset()},onSuccess:()=>{n.value=!0},onError:()=>{console.log("error")}}}}),se={class:"the-home-consultation"},ce=i("img",{class:"the-home-consultation__polygon",src:ne,alt:"polygon"},null,-1),le=i("img",{class:"the-home-consultation__triangle",src:oe,alt:"triangle"},null,-1),ue=i("img",{class:"the-home-consultation__vector",src:ae,alt:"vector"},null,-1),ie={class:"the-home-consultation__container"},pe={class:"the-home-consultation__wrapper"},he=i("h2",{class:"the-home-consultation__title"},[E(" \u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 "),i("br"),E(" \u043D\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0443\u044E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E ")],-1),de={class:"the-home-consultation__form"},_e={class:"the-home-consultation__footer"};function fe(e,t,n,a,r,s){const o=H,c=G,d=W,v=z,l=U("vue-recaptcha");return C(),b("div",se,[ce,le,ue,i("div",ie,[i("div",pe,[he,i("div",de,[p(o,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438/\u043E\u0442\u0435\u043B\u044F",value:e.form.company,onChange:e.onChangeCompany},null,8,["value","onChange"]),p(o,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F",value:e.form.name,onChange:e.onChangeName},null,8,["value","onChange"]),p(o,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443",value:e.form.email,error:e.getEmailIsError,onChange:e.onChangeEmail},null,8,["value","error","onChange"]),p(c,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",value:e.form.phone,onChange:e.onChangePhone},null,8,["value","onChange"])]),i("div",_e,[p(d,{label:"\u042F \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0423\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438",value:e.approval,onChange:e.onChangeApproval},null,8,["value","onChange"]),p(v,{class:"the-home-consultation__btn",label:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",view:"default",disabled:e.getSubmitDisabled,onClick:e.onSubmit},null,8,["disabled","onClick"])]),p(l,{ref:"recaptcha",sitekey:"6LcP_AMkAAAAALxzoZ9oj-_BSUYGaKnqg5z4bjgk","load-recaptcha-script":!0,onVerify:e.onSuccess,onError:e.onError},null,8,["onVerify","onError"])])])])}const ge=y(re,[["render",fe]]);export{ge as _};
