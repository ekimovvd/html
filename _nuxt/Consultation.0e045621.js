import{f as _,v as g,l as v,a as h,G as C,H as f,o as p,b as i,I as y,e as o,t as $,J as b,D as V,h as c,A as d}from"./entry.7db84674.js";import{_ as k}from"./TheButton.283ea1ee.js";const S=_({props:{placeholder:{type:String,default:""},value:{type:String,default:""}},emits:["change"],setup(e,{emit:n}){const{value:s}=g(e);return{currentValue:v({get(){return s.value},set(l){n("change",l)}})}}}),T=["placeholder"];function w(e,n,s,r,l,u){return C((p(),i("input",{class:"the-input",type:"text",placeholder:e.placeholder,"onUpdate:modelValue":n[0]||(n[0]=a=>e.currentValue=a)},null,8,T)),[[f,e.currentValue]])}const x=h(S,[["render",w]]);const N=_({props:{label:{type:String,default:""},value:{type:Boolean,default:!1}},emits:["change"],setup(e,{emit:n}){const{value:s}=g(e);return{currentValue:v({get(){return s.value},set(l){n("change",l)}})}}}),B={class:"the-checkbox"},U={class:"the-checkbox__label"},A=o("span",{class:"the-checkbox__span"},null,-1);function E(e,n,s,r,l,u){return p(),i("label",B,[C(o("input",{class:"the-checkbox__input",type:"checkbox","onUpdate:modelValue":n[0]||(n[0]=a=>e.currentValue=a)},null,512),[[y,e.currentValue]]),o("p",U,$(e.label),1),A])}const R=h(N,[["render",E]]),D=""+new URL("polygon.dac67156.svg",import.meta.url).href,I=""+new URL("triangle.9ded91d1.svg",import.meta.url).href,L=""+new URL("vector.3e848f19.svg",import.meta.url).href;const P=_({setup(){const e=b({company:"",name:"",email:"",phone:""}),n=V(!1);return{form:e,approval:n,onChangeCompany:t=>{e.company=t},onChangeName:t=>{e.name=t},onChangeEmail:t=>{e.email=t},onChangePhone:t=>{e.phone=t},onChangeApproval:t=>{n.value=t},onSubmit:()=>{console.log(e)}}}}),M={class:"the-home-consultation"},G=o("img",{class:"the-home-consultation__polygon",src:D,alt:"polygon"},null,-1),H=o("img",{class:"the-home-consultation__triangle",src:I,alt:"triangle"},null,-1),J=o("img",{class:"the-home-consultation__vector",src:L,alt:"vector"},null,-1),j={class:"the-home-consultation__container"},q={class:"the-home-consultation__wrapper"},z=o("h2",{class:"the-home-consultation__title"},[d(" \u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 "),o("br"),d(" \u043D\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0443\u044E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E ")],-1),F={class:"the-home-consultation__form"},K={class:"the-home-consultation__footer"};function O(e,n,s,r,l,u){const a=x,m=R,t=k;return p(),i("div",M,[G,H,J,o("div",j,[o("div",q,[z,o("div",F,[c(a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438/\u043E\u0442\u0435\u043B\u044F",value:e.form.company,onChange:e.onChangeCompany},null,8,["value","onChange"]),c(a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F",value:e.form.name,onChange:e.onChangeName},null,8,["value","onChange"]),c(a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443",value:e.form.email,onChange:e.onChangeEmail},null,8,["value","onChange"]),c(a,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",value:e.form.phone,onChange:e.onChangePhone},null,8,["value","onChange"])]),o("div",K,[c(m,{label:"\u042F \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0423\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438",value:e.approval,onChange:e.onChangeApproval},null,8,["value","onChange"]),c(t,{class:"the-home-consultation__btn",label:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",view:"default",onClick:e.onSubmit},null,8,["onClick"])])])])])}const X=h(P,[["render",O]]);export{X as _};
