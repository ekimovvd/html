import{_ as y}from"./TheButton.1b18c39d.js";import{R as N,a as P,_ as q,b as j,c as O,d as K}from"./Consultation.53c41f75.js";import{k as p,j as Z,r as f,i as C,O as F,l as h,J as G,o as i,m as c,p as t,v as n,c as E,K as J,M as b,F as U,s as T,q as w,y as Q}from"./entry.3d3b967d.js";import{_ as z}from"./TheCards.d8c8588e.js";import{I as W,a as Y,b as X}from"./img-3.6847c1cb.js";import{_ as ee}from"./layout.3b8b4504.js";const te=""+new URL("cross.21a7dc13.svg",import.meta.url).href;const oe=p({components:{VueRecaptcha:N},emits:["close"],setup(e,{emit:a}){const s=Z({company:"",name:"",email:"",phone:""}),_=f(!1),r=f(!1),m=f(null),o=f(!1),d=C(()=>s.email?!String(s.email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/):!1),u=C(()=>!!(!s.name||!s.phone||d.value||!r.value||!_.value)),g=l=>{s.company=l},v=l=>{s.name=l},$=l=>{s.email=l},B=l=>{s.phone=l},x=l=>{_.value=l},L=()=>{setTimeout(()=>{R()},2e3)},V=async()=>{try{o.value=!0,await P({method:"POST",headers:{"content-type":"application/form-data"},data:s,url:"send_mail/send_demo.php"}).then(()=>{F().trackEvent({event:"send_form_order"}),L()})}catch{L()}},H=()=>{r.value=!0},M=()=>{console.log("error")},R=()=>{a("close")};return{form:s,approval:_,recaptcha:m,isRecaptcha:r,isSubmit:o,getEmailIsError:d,getSubmitDisabled:u,onChangeCompany:g,onChangeName:v,onChangeEmail:$,onChangePhone:B,onChangeApproval:x,onSubmit:V,onSuccess:H,onError:M,onClose:R}}}),se={class:"the-home-demo"},ne={class:"the-home-demo__container"},ae={key:0,class:"the-home-demo__content"},ie=t("h2",{class:"the-home-demo__title"},"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0434\u0435\u043C\u043E",-1),ce={class:"the-home-demo__form"},_e={class:"the-home-demo__footer"},re={key:1,class:"the-home-demo__success"},le={class:"the-home-demo__close"};function me(e,a,s,_,r,m){const o=q,d=j,u=O,g=y,v=G("vue-recaptcha");return i(),c("div",se,[t("div",ne,[e.isSubmit?(i(),c("h2",re," \u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430. ")):(i(),c("div",ae,[ie,t("div",ce,[n(o,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438/\u043E\u0442\u0435\u043B\u044F",value:e.form.company,onChange:e.onChangeCompany},null,8,["value","onChange"]),n(o,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F",value:e.form.name,onChange:e.onChangeName},null,8,["value","onChange"]),n(o,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443",value:e.form.email,error:e.getEmailIsError,onChange:e.onChangeEmail},null,8,["value","error","onChange"]),n(d,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",value:e.form.phone,onChange:e.onChangePhone},null,8,["value","onChange"])]),t("div",_e,[n(u,{label:"\u042F \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0423\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438",value:e.approval,onChange:e.onChangeApproval},null,8,["value","onChange"]),n(g,{class:"the-home-demo__btn",label:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",view:"default",disabled:e.getSubmitDisabled,onClick:e.onSubmit},null,8,["disabled","onClick"])]),n(v,{class:"the-home-demo__recaptcha",ref:"recaptcha",sitekey:"6LcP_AMkAAAAALxzoZ9oj-_BSUYGaKnqg5z4bjgk","load-recaptcha-script":!0,onVerify:e.onSuccess,onError:e.onError},null,8,["onVerify","onError"])]))]),t("button",le,[t("img",{class:"the-home-demo__close-img",src:te,alt:"close",onClick:a[0]||(a[0]=(...$)=>e.onClose&&e.onClose(...$))})])])}const he=h(oe,[["render",me]]),de=""+new URL("wave.b908f879.svg",import.meta.url).href,pe=""+new URL("hand.d5614c0c.png",import.meta.url).href,ue=""+new URL("mask.e9c1744e.png",import.meta.url).href,ge=""+new URL("rectangle.f8c642cf.png",import.meta.url).href,ve=""+new URL("triangle.6b67e160.svg",import.meta.url).href,fe=""+new URL("scroll.745c9501.svg",import.meta.url).href,be=""+new URL("touch.6a047811.svg",import.meta.url).href;const $e=p({setup(){const e=f(!1);return{getDemoIsShow:C(()=>e.value),onDemo:()=>{e.value=!0,document.documentElement.style.overflow="hidden"},onDemoClose:()=>{e.value=!1,document.documentElement.style.overflow="auto"},onLearnMore:()=>{document.querySelectorAll("#advantages")[0].scrollIntoView({behavior:"smooth"})}}}}),we={class:"the-home-introduction"},ke=b('<img class="the-home-introduction__wave" src="'+de+'" alt="wave"><img class="the-home-introduction__hand" src="'+pe+'" alt="hand"><img class="the-home-introduction__mask" src="'+ue+'" alt="mask"><img class="the-home-introduction__rectangle" src="'+ge+'" alt="rectangle"><img class="the-home-introduction__triangle" src="'+ve+'" alt="triangle">',5),Ce={class:"the-home-introduction__container"},ye={class:"the-home-introduction__info"},Le=t("h1",{class:"the-home-introduction__title"}," Druffle.me - \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0434\u0430\u0436 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u0438 \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u0438 \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u0433\u043E\u0441\u0442\u044F\u043C\u0438 \u0432 \u043E\u0442\u0435\u043B\u044F\u0445 ",-1),Re={class:"the-home-introduction__info-group"},Ue=t("div",{class:"the-home-introduction__scroll"},[t("img",{class:"the-home-introduction__scroll-img the-home-introduction__scroll-img--mouse",src:fe,alt:"scroll"}),t("img",{class:"the-home-introduction__scroll-img the-home-introduction__scroll-img--touch",src:be,alt:"touch"}),t("p",{class:"the-home-introduction__scroll-label"}," \u041A\u0440\u0443\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u0437 ")],-1);function Te(e,a,s,_,r,m){const o=y,d=he;return i(),c("div",we,[ke,t("div",Ce,[t("div",ye,[Le,t("div",Re,[n(o,{id:"01_03",label:"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0434\u0435\u043C\u043E",view:"default",onClick:e.onDemo},null,8,["onClick"]),n(o,{class:"the-home-introduction__info-btn",id:"01_04",label:"\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435",view:"outline",onClick:e.onLearnMore},null,8,["onClick"])]),Ue])]),e.getDemoIsShow?(i(),E(d,{key:0,class:"the-home-introduction__demo",onClose:e.onDemoClose},null,8,["onClose"])):J("",!0)])}const De=h($e,[["render",Te]]),D=""+new URL("service.72747d3d.svg",import.meta.url).href,I=""+new URL("guests.92149445.svg",import.meta.url).href,S=""+new URL("staff.4b40a0d5.svg",import.meta.url).href,A=""+new URL("system.002e065b.svg",import.meta.url).href,Ie=""+new URL("logo.4553ca1c.svg",import.meta.url).href;const Se=p({setup(){return{cardsTop:[{id:0,title:"\u0411\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433 \u043D\u0435 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043E",description:"\u0411\u0443\u043C\u0430\u0436\u043D\u044B\u0435 \u043D\u043E\u0441\u0438\u0442\u0435\u043B\u0438 \u0443\u0441\u0442\u0430\u0440\u0435\u043B\u0438 \u0438 \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0437\u0430\u0442\u0440\u0430\u0442 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0438 \u0434\u0435\u043D\u0435\u0433",img:D,alt:"service"},{id:1,title:"\u0413\u043E\u0441\u0442\u0438 \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043F\u0440\u043E\u0438\u043D\u0444\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u044B",description:"\u0413\u043E\u0441\u0442\u0438 \u043D\u0435 \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u0432\u0441\u0435\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u043E\u0431 \u0443\u0441\u043B\u0443\u0433\u0430\u0445 \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u044B",img:I,alt:"quests"},{id:2,title:"\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u044B \u043F\u0435\u0440\u0435\u0433\u0440\u0443\u0436\u0435\u043D",description:"\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u0440\u0435\u0441\u0435\u043F\u0448\u043D \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u043E \u043D\u0435 \u0443\u0441\u043F\u0435\u0432\u0430\u044E\u0442 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u0432\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u0433\u043E\u0441\u0442\u0435\u0439",img:S,alt:"staff"},{id:3,title:"\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C\u0438",description:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u044F \u0433\u043E\u0441\u0442\u0435\u0439 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0440\u0430\u0441\u0442\u0443\u0442, \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B \u043D\u0435 \u0432\u043E\u0432\u043B\u0435\u0447\u0435\u043D \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0438, \u0441\u043D\u0438\u0436\u0430\u0435\u0442\u0441\u044F \u043B\u043E\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u044C",img:A,alt:"system"}],cardsBottom:[{id:0,description:"\u0414\u043E 25% \u2013\xA0\u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0432\u044B\u0440\u0443\u0447\u043A\u0438 \u043E\u0442 \u0440\u0443\u043C-\u0441\u0435\u0440\u0432\u0438\u0441\u0430",img:D,alt:"service"},{id:1,description:"\u0414\u043E 60 \u0441\u0435\u043A\u0443\u043D\u0434 \u2013 \u0432\u0440\u0435\u043C\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0432\u0445\u043E\u0434\u044F\u0449\u0435\u0433\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0430",img:I,alt:"quests"},{id:2,description:"\u0414\u043E 20% \u2013\xA0\u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0447\u0435\u043A\u0430 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0433\u043E\u0441\u0442\u044F",img:S,alt:"staff"},{id:3,description:"\u0414\u043E 30+% \u2013\xA0\u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435 LTV \u043D\u0430 \u043E\u0434\u043D\u043E\u0433\u043E \u0433\u043E\u0441\u0442\u044F",img:A,alt:"system"}]}}}),Ae={class:"the-home-about"},Ee={class:"the-home-about__container"},ze=t("h2",{class:"the-home-about__title"}," \u0427\u0442\u043E \u043C\u0435\u0448\u0430\u0435\u0442 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u043F\u0440\u043E\u0434\u0430\u0432\u0430\u0442\u044C \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0447\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438? ",-1),Be={class:"the-home-about__cards"},xe=["src","alt"],Ve={class:"the-home-about__card-info"},He={class:"the-home-about__card-title"},Me={class:"the-home-about__card-label"},Ne=b('<h2 class="the-home-about__title the-home-about__title--platform"> \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 Druffle </h2><div class="the-home-about__platform"><img class="the-home-about__platform-logo" src="'+Ie+'" alt="Druffle"><div class="the-home-about__platform-info"><p class="the-home-about__platform-info-label"><span class="the-home-about__platform-info-title"> Druffle.me </span> \u2014 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0434\u0430\u0436 \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0447\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433, \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u0438 \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430 \u0438 \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u0438\u044F \u043B\u043E\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0433\u043E\u0441\u0442\u0435\u0439 </p></div></div>',2),Pe={class:"the-home-about__cards the-home-about__cards--bottom"},qe=["src","alt"],je={class:"the-home-about__card-info"},Oe={class:"the-home-about__card-label"};function Ke(e,a,s,_,r,m){return i(),c("div",Ae,[t("div",Ee,[ze,t("ul",Be,[(i(!0),c(U,null,T(e.cardsTop,o=>(i(),c("li",{class:"the-home-about__card",key:o.id},[t("img",{class:"the-home-about__card-img",src:o.img,alt:o.alt},null,8,xe),t("div",Ve,[t("h5",He,w(o.title),1),t("p",Me,w(o.description),1)])]))),128))]),Ne,t("ul",Pe,[(i(!0),c(U,null,T(e.cardsBottom,o=>(i(),c("li",{class:"the-home-about__card",key:o.id},[t("img",{class:"the-home-about__card-img",src:o.img,alt:o.alt},null,8,qe),t("div",je,[t("p",Oe,w(o.description),1)])]))),128))])])])}const Ze=h(Se,[["render",Ke]]),Fe=""+new URL("rhomb.aed29ffe.svg",import.meta.url).href,Ge=""+new URL("phones.6df1bd52.png",import.meta.url).href,Je=""+new URL("triangle.ed021519.svg",import.meta.url).href;const Qe=p({setup(){return{onLearnMore:()=>{document.querySelectorAll("#advantages")[0].scrollIntoView({behavior:"smooth"})}}}}),We={class:"the-home-marketing"},Ye={class:"the-home-marketing__container"},Xe={class:"the-home-marketing__info"},et=t("h2",{class:"the-home-marketing__title"}," \u041D\u0430\u0447\u0438\u043D\u0430\u0439\u0442\u0435 \u043F\u0440\u043E\u0434\u0430\u0432\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0447\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441 ",-1),tt=t("p",{class:"the-home-marketing__label"}," \u0423\u0437\u043D\u0430\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043E\u0431\u043E \u0432\u0441\u0435\u0445 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430\u0445 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B Druffle.me. \u0417\u0430\u043A\u0430\u0436\u0438\u0442\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u043F\u0438\u043B\u043E\u0442, \u0443\u043B\u0443\u0447\u0448\u0430\u0439\u0442\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0438\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 \u0438 \u043D\u0430\u0447\u043D\u0438\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0443\u044E \u043F\u0440\u0438\u0431\u044B\u043B\u044C \u0443\u0436\u0435 \u0437\u0430\u0432\u0442\u0440\u0430 ",-1),ot={class:"the-home-marketing__buttons"},st=t("img",{class:"the-home-marketing__rhomb",src:Fe,alt:"rhomb"},null,-1),nt=t("img",{class:"the-home-marketing__phones",src:Ge,alt:"phones"},null,-1),at=t("img",{class:"the-home-maarketing__triangle",src:Je,alt:"triangle"},null,-1);function it(e,a,s,_,r,m){const o=y;return i(),c("div",We,[t("div",Ye,[t("div",Xe,[et,tt,t("div",ot,[n(o,{id:"01_04",label:"\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435",view:"default",onClick:e.onLearnMore},null,8,["onClick"])])]),st,nt]),at])}const ct=h(Qe,[["render",it]]),_t=""+new URL("phone-1.08c934f5.png",import.meta.url).href,k=""+new URL("ellipse.0d35ff5b.png",import.meta.url).href,rt=""+new URL("rhomb.66a1af30.svg",import.meta.url).href,lt=""+new URL("phone-2.eb8df39f.png",import.meta.url).href,mt=""+new URL("phone-3.0fa60edc.png",import.meta.url).href,ht=""+new URL("wave-left.9fc37a1d.png",import.meta.url).href,dt=""+new URL("wave-right.60e18e85.png",import.meta.url).href,pt=""+new URL("triangle.037b645a.png",import.meta.url).href;const ut={},gt={class:"the-home-advantages",id:"advantages"},vt=b('<div class="the-home-advantages__container"><h2 class="the-home-advantages__title"> Druffle.me \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u0443\u0435\u0442, \u043E\u0442\u0435\u043B\u044C \u2014 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u043F\u0440\u0438\u0431\u044B\u043B\u044C </h2><div class="the-home-advantages__blocks"><div class="the-home-advantages__block the-home-advantages__block--one"><div class="the-home-advantages__info"><h5 class="the-home-advantages__info-title"> \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u0440\u0430\u0431\u043E\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430 </h5><p class="the-home-advantages__info-label"> \u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0432\u043E\u0438\u043C \u0433\u043E\u0441\u0442\u044F\u043C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u043E\u043D\u043B\u0430\u0439\u043D-\u0441\u0435\u0440\u0432\u0438\u0441, \u0432\u044B\u0431\u0438\u0440\u0430\u0442\u044C \u0438 \u0437\u0430\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0438 </p></div><div class="the-home-advantages__block-img"><img class="the-home-advantages__block-phone" src="'+_t+'" alt="phone"><img class="the-home-advantages__block-ellipse" src="'+k+'" alt="ellipse"></div><img class="the-home-advantages__block-rhomb" src="'+rt+'" alt="rhomb"></div><div class="the-home-advantages__block the-home-advantages__block--two"><div class="the-home-advantages__block-img"><img class="the-home-advantages__block-phone" src="'+lt+'" alt="phone"><img class="the-home-advantages__block-ellipse" src="'+k+'" alt="ellipse"></div><div class="the-home-advantages__info"><h5 class="the-home-advantages__info-title"> \u0423\u043B\u0443\u0447\u0448\u0430\u0439\u0442\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0441\u0442\u044C \u0433\u043E\u0441\u0442\u0435\u0439 </h5><p class="the-home-advantages__info-label"> \u0418\u043D\u0444\u043E\u0440\u043C\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u0438\u0445 \u0433\u043E\u0441\u0442\u0435\u0439 \u043E\u0431 \u0443\u0441\u043B\u0443\u0433\u0430\u0445 \u0432 \u0435\u0434\u0438\u043D\u043E\u043C web-\u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435 \u043D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u0432\u0441\u0435\u0433\u043E \u043F\u0435\u0440\u0438\u043E\u0434\u0430 \u043F\u0440\u0435\u0431\u044B\u0432\u0430\u043D\u0438\u044F </p></div></div><div class="the-home-advantages__block the-home-advantages__block--three"><div class="the-home-advantages__info"><h5 class="the-home-advantages__info-title"> \u041E\u0441\u0442\u0430\u0432\u0430\u0439\u0442\u0435\u0441\u044C \u043D\u0430 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0433\u043E\u0441\u0442\u044F\u043C\u0438 </h5><p class="the-home-advantages__info-label"> \u0413\u043E\u0441\u0442\u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E\u0442 \u0441\u0435\u0431\u044F \u0431\u043E\u043B\u0435\u0435 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E, \u043E\u0441\u0442\u0430\u0432\u0430\u044F\u0441\u044C \u043D\u0430 \u0441\u0432\u044F\u0437\u0438 \u0441 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u043E\u043C \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 WhatsApp \u0438\u043B\u0438 Telegram </p></div><div class="the-home-advantages__block-img"><img class="the-home-advantages__block-phone" src="'+mt+'" alt="phone"><img class="the-home-advantages__block-ellipse" src="'+k+'" alt="ellipse"></div></div></div></div><img class="the-home-advantages__wave the-home-advantages__wave--left" src="'+ht+'" alt="wave"><img class="the-home-advantages__wave the-home-advantages__wave--right" src="'+dt+'" alt="wave"><img class="the-home-advantages__triangle" src="'+pt+'" alt="triangle">',4),ft=[vt];function bt(e,a){return i(),c("div",gt,ft)}const $t=h(ut,[["render",bt]]),wt=""+new URL("laptop.460877c3.png",import.meta.url).href,kt=""+new URL("rhomb.66a1af30.svg",import.meta.url).href,Ct=""+new URL("wave.bf9275da.svg",import.meta.url).href,yt=""+new URL("triangle-big.415cc052.svg",import.meta.url).href;const Lt={},Rt={class:"the-home-optimization"},Ut=b('<div class="the-home-optimization__container"><img class="the-home-optimization__laptop" src="'+wt+'" alt="laptop"><div class="the-home-optimization__info"><h5 class="the-home-optimization__title"> \u041E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u043F\u0440\u044F\u043C\u044B\u0445 \u043F\u0440\u043E\u0434\u0430\u0436 </h5><p class="the-home-optimization__label"> \u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0440\u0430\u0441\u0442\u0443\u0449\u0438\u043C\u0438 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F\u043C\u0438 \u0441\u0432\u043E\u0438\u0445 \u0433\u043E\u0441\u0442\u0435\u0439 \u043F\u0443\u0442\u0435\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u043E\u0433\u043E \u0432\u043E\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430 \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0438 \u0443\u0441\u043B\u0443\u0433 \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u044B </p></div><img class="the-home-optimization__rhomb" src="'+kt+'" alt="rhomb"></div><img class="the-home-optimization__wave" src="'+Ct+'" alt="wave"><img class="the-home-optimization__triangle-big" src="'+yt+'" alt="triangle-big">',3),Tt=[Ut];function Dt(e,a){return i(),c("div",Rt,Tt)}const It=h(Lt,[["render",Dt]]);const St=p({setup(){return{events:[{id:0,description:"\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D \u0432\u044B\u0441\u0442\u0443\u043F\u0438\u043B \u043D\u0430 \u043A\u043E\u043D\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u0438 Hospitality Business: \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430\u043B \u043A\u043E\u043B\u043B\u0435\u0433\u0430\u043C \u043E \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0431\u0435\u0441\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0433\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u043E\u0433\u043E \u043E\u043F\u044B\u0442\u0430, \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044F\u0445 \u043E\u0442\u0435\u043B\u044C\u0435\u0440\u043E\u0432 \u0438 \u0442\u0443\u0440\u0438\u0441\u0442\u043E\u0432 \u043D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u0435",date:"31 \u043E\u043A\u0442\u044F\u0431\u0440\u044F 2022",img:W,alt:"img-1",href:"https://hotel.report/management/nastoyashhee-i-budushhee-servisa-v-otelyah-klassa-lyuks"},{id:1,description:"\u0415\u0432\u0433\u0435\u043D\u0438\u0439 \u0411\u0435\u043B\u044F\u043A\u043E\u0432 \u0432\u044B\u044F\u0441\u043D\u0438\u043B \u0443 CEO Druffle \u0410\u043B\u0435\u043A\u0441\u0435\u044F \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D\u0430, \u043A\u0430\u043A \u043E\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0431\u0438\u0437\u043D\u0435\u0441 \u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u043A \u043D\u043E\u0432\u043E\u0439 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438",date:"29 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F 2022",img:Y,alt:"img-2",href:"https://radiokp.ru/podcast/gost-v-studii/652861"},{id:2,description:"\u041A\u0430\u043A \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043E\u0442\u0434\u0430\u0447\u0443 \u043E\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430: \u043C\u043D\u0435\u043D\u0438\u0435 \u0410\u043B\u0435\u043A\u0441\u0435\u044F \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D\u0430",date:"14 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F 2022",img:X,alt:"img-3",href:"https://www.kp.ru/russia/sovety-turistam/kak-povysit-pribyl/"}],onCard:s=>{window.open(s.href,"_blank")}}}}),At={class:"the-home-events"},Et={class:"the-home-events__container"};function zt(e,a,s,_,r,m){const o=z;return i(),c("div",At,[t("div",Et,[n(o,{cards:e.events,view:"light",title:"\u041C\u0435\u0434\u0438\u0430\u0446\u0435\u043D\u0442\u0440","is-align":!0,onCard:e.onCard},null,8,["cards","onCard"])])])}const Bt=h(St,[["render",zt]]),xt=""+new URL("preview-1.48377b2b.png",import.meta.url).href,Vt=""+new URL("preview-2.8d457dab.jpg",import.meta.url).href,Ht=""+new URL("preview-3.cfc278aa.png",import.meta.url).href;const Mt=p({setup(){return{news:[{id:0,description:"\xAB\u042D\u0442\u043E \u043A\u043B\u044E\u0447 \u043A \u0443\u0441\u043F\u0435\u0445\u0443 \u043E\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430\xBB: \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430\u043B, \u043A\u0430\u043A \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0432\u044B\u0440\u0443\u0447\u043A\u0443 \u043E\u0442\u0435\u043B\u044F \u0441 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0430",date:"28 \u044F\u043D\u0432\u0430\u0440\u044F 2022",img:xt,alt:"preview-1",href:"https://www.kp.ru/russia/sovety-turistam/kak-povysit-pribyl/"},{id:1,description:"\u041A\u0430\u043A \u043D\u043E\u0432\u0430\u044F \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043C\u0435\u043D\u044F\u0435\u0442 \u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u044E \u0433\u043E\u0441\u0442\u0435\u043F\u0440\u0438\u0438\u043C\u0441\u0442\u0432\u0430 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438, \u043C\u043D\u0435\u043D\u0438\u0435 \u0410\u043B\u0435\u043A\u0441\u0435\u044F \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D\u0430",date:"19 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F 2022",img:Vt,alt:"preview-2",href:"https://www.kp.ru/daily/27446/4649911/"},{id:2,description:"\u041A\u0430\u043A \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C LTV. \u041A\u0435\u0439\u0441 \u0410\u043B\u0435\u043A\u0441\u0435\u044F \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D\u0430 \u043D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u043E\u0442\u0435\u043B\u044F Korston",date:"28 \u044F\u043D\u0432\u0430\u0440\u044F 2021",img:Ht,alt:"preview-3",href:"https://academyopen.ru/journal/432"}],onCard:s=>{window.open(s.href,"_blank")}}}}),Nt={class:"the-home-news"},Pt={class:"the-home-news__container"};function qt(e,a,s,_,r,m){const o=z;return i(),c("div",Nt,[t("div",Pt,[n(o,{cards:e.news,view:"light",title:"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438",onCard:e.onCard},null,8,["cards","onCard"])])])}const jt=h(Mt,[["render",qt]]),Ot={};function Kt(e,a){const s=De,_=Ze,r=ct,m=$t,o=It,d=K,u=Bt,g=jt,v=ee;return i(),E(v,null,{default:Q(()=>[n(s),n(_,{"data-aos":"fade-down","data-aos-once":"false"}),n(r,{"data-aos":"fade-down","data-aos-once":"false"}),n(m,{"data-aos":"fade-down","data-aos-once":"false"}),n(o,{"data-aos":"fade-up","data-aos-once":"false"}),n(d,{id:"consultation","data-aos":"fade","data-aos-once":"false"}),n(u,{"data-aos":"fade","data-aos-once":"false"}),n(g,{"data-aos":"fade","data-aos-once":"false"})]),_:1})}const Xt=h(Ot,[["render",Kt]]);export{Xt as default};