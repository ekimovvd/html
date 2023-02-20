import{k as h,r as b,i as d,l as g,o as u,m,p as e,q as C,v as a,t as U,y as A,A as p,N as w,F as R,s as I,L as f,M as L}from"./entry.269d4e60.js";import{_ as $}from"./TheButton.b880ab61.js";import{_ as B}from"./TheApps.ede9f4fc.js";const T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTSURBVHgBxZO9DYMwEIXvWVGKVOnTW2ICyrTZIkUWIGWqsAGwAdRMARUjILlhAzyBj3NNA3bhrzhd9X5OOpBgjPk75wpZ73QMC6DVWn+JmSsOp4SM9YTzPomXoQgURYJP0UclwPXxS1shvcDldVsoBox5lvqIDEvhWMXKNRSIdO/glyHPaknyBvjQU7FPLcbPaS43z6VqTMA4TQ8AAAAASUVORK5CYII=",V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHySURBVHgBpZJLSBtRFIb/uRlSkmoyrV1ZbGV2grhoiy1IpV200EYs7UrbWqXShy400i5ctHbSB219ICKYKIpGXIivhbjwtfABKm5ENL7fGBXRZESdoIjjnfhCMosEP7hwzz33P+een8uAQvj0H7Ism+mWU+Lc7JdIcM3A+d+mhDDE3IPOlgs+9jtOEBkGVYdz1iyW8GmFJ+JA4GQZZoR/3iJlf96khN+8jkDhDDr8/RqfSVITYri53t+w578DHxbilzAnw4TBtGg8ry7l2OG7cQj98gFJr18g6dUD2Bv6oddpAZevOPvTE7wPOcBuiRWeID3CcjLAuNt65EPJA+2tUATdiTy7vPzPesHEiJYK7A45sLfohIYzwvjovjfHzKR/k9WeKo1MepeCxhiMa6bHqiMxA1yUagF/Ibgk7I3EeNWENHo+whXqTzD1QQ2GfiLvCJ6JWUh0sUYDDLHRcOaV+ph4imK6u70XDCEgSqept1kYe5YCaWwazYs7aOoY9um0vrmNTEsdllbcIHodrkZFQGztBhmPS4WGv41RQYCpx4Xkn02YX9rwHcmzj2J7FyKfWryF1rR68CW/wDoEQcyr7eccNY3whx3puFBlfR8+Jj4USbKlscgxtYpAUQoVlHfaCRZsAvWxiJ6JAehFqrFQrfkIhpPASeuP9KkAAAAASUVORK5CYII=";const S=h({setup(){const o=[{id:0,name:"Rus",img:T,value:"ru"},{id:1,name:"Eng",img:V,value:"en"}],t=b("ru");return{getLanguage:d(()=>o.find(l=>l.value===t.value)),onToggle:()=>{}}}}),E={class:"the-language"},Y=["src"],M={class:"the-language__toggle-label"};function Q(o,t,n,c,l,i){return u(),m("div",E,[e("button",{class:"the-language__toggle",onClick:t[0]||(t[0]=(...s)=>o.onToggle&&o.onToggle(...s))},[e("img",{class:"the-language__toggle-img",src:o.getLanguage.img,alt:"img"},null,8,Y),e("p",M,C(o.getLanguage.name),1)])])}const y=g(S,[["render",Q]]),D=""+new URL("logo.c35df9ee.svg",import.meta.url).href,W=""+new URL("close.27560a91.svg",import.meta.url).href;const N=h({emits:["close"],setup(o,{emit:t}){const n=[{id:0,name:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430",to:"/"},{id:1,name:"\u041C\u0435\u0434\u0438\u0430\u0446\u0435\u043D\u0442\u0440",to:"/"},{id:2,name:"\u041A\u0430\u0440\u044C\u0435\u0440\u0430",to:"/"},{id:3,name:"\u041F\u0440\u043E\u0434\u0443\u043A\u0442",to:"/"},{id:4,name:"FAQ",to:"/"}],c=[{id:0,name:"\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u043E\u0444\u0435\u0440\u0442\u044B",to:"/"},{id:2,name:"\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438",to:"/"}],l=[{id:0,to:"/",name:"info@druffle.me"},{id:1,to:"/",name:"+7 (495) 921-01-27 "}],i=()=>{t("close")};return{company:n,documents:c,links:l,onClose:i,onContactUs:()=>{i(),document.querySelectorAll("#consultation")[0].scrollIntoView({behavior:"smooth"})},onLogin:()=>{window.location.href="https://druffleapp.ru/login"}}}}),j={class:"the-menu"},P={class:"the-menu__container"},X={class:"the-menu__header"},O=e("img",{class:"the-menu__logo",src:D,alt:"Druffle"},null,-1),x=e("img",{class:"the-menu__close-img",src:W,alt:"close"},null,-1),z=[x],F={class:"the-menu__offer"},G={class:"the-menu__buttons"};function J(o,t,n,c,l,i){const s=$,_=y;return u(),m("div",j,[e("div",P,[e("div",X,[O,e("button",{class:"the-menu__close",onClick:t[0]||(t[0]=(...r)=>o.onClose&&o.onClose(...r))},z)]),e("div",F,[e("div",G,[a(s,{id:"01_01",label:"\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438",view:"default",onClick:o.onContactUs},null,8,["onClick"]),a(s,{id:"01_02",label:"\u0412\u043E\u0439\u0442\u0438",view:"outline",onClick:o.onLogin},null,8,["onClick"])]),a(_,{class:"the-menu__language"})])])])}const K=g(N,[["render",J]]),H=""+new URL("logo.0efdc3e4.svg",import.meta.url).href,q=""+new URL("burger.4f19f9a4.svg",import.meta.url).href;const Z=h({props:{view:{type:String,default:""}},setup(o){const{view:t}=U(o),n=b(!1),c=[{id:0,name:"\u041F\u0440\u043E\u0434\u0443\u043A\u0442",links:[{id:0,name:"\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430",to:"/"},{id:1,name:"\u041F\u0440\u043E\u0434\u0443\u043A\u0442",to:"/"},{id:2,name:"\u0420\u0435\u0448\u0435\u043D\u0438\u0435",to:"/"}]},{id:1,name:"\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F",links:[{id:0,name:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430",to:"/"},{id:1,name:"\u041C\u0435\u0434\u0438\u0430\u0446\u0435\u043D\u0442\u0440",to:"/"},{id:2,name:"\u041A\u0430\u0440\u044C\u0435\u0440\u0430",to:"/"},{id:3,name:"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B",to:"/"}]},{id:2,name:"\u041D\u043E\u0432\u043E\u0441\u0442\u0438",links:[{id:0,name:"\u041D\u043E\u0432\u043E\u0441\u0442\u044C 1",to:"/"},{id:1,name:"\u041D\u043E\u0432\u043E\u0441\u0442\u044C 2",to:"/"},{id:2,name:"\u041D\u043E\u0432\u043E\u0441\u0442\u044C 3",to:"/"}]}],l=d(()=>t.value?`the-navbar--${t.value}`:""),i=d(()=>n.value?"the-navbar__menu--visible":""),s=d(()=>n.value?"the-navbar__menu-wrapper--visible":"");return{links:c,getViewClass:l,getMenuVisibleClass:i,getMenuWrapperVisibleClass:s,onContactUs:()=>{document.querySelectorAll("#consultation")[0].scrollIntoView({behavior:"smooth"})},onMenu:()=>{document.documentElement.style.overflow=n.value?"auto":"hidden",n.value=!n.value},onLogin:()=>{window.location.href="https://druffleapp.ru/login"}}}}),ee={class:"the-navbar__container"},oe=e("img",{class:"the-navbar__logo-img",src:H,alt:"Druffle"},null,-1),te={class:"the-navbar__group"},ne={class:"the-navbar__links"},se=e("img",{class:"the-navbar__burger-img",src:q,alt:"burger"},null,-1),ae=[se];function le(o,t,n,c,l,i){const s=w,_=$,r=y,v=K;return u(),m("div",{class:p(["the-navbar",o.getViewClass])},[e("div",ee,[a(s,{class:"the-navbar__logo",to:"/"},{default:A(()=>[oe]),_:1}),e("div",te,[e("div",ne,[a(_,{id:"01_01",label:"\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F \u0441 \u043D\u0430\u043C\u0438",view:"default",onClick:o.onContactUs},null,8,["onClick"]),a(_,{id:"01_02",label:"\u0412\u043E\u0439\u0442\u0438",view:"outline",onClick:o.onLogin},null,8,["onClick"])]),a(r)]),e("button",{class:"the-navbar__burger",onClick:t[0]||(t[0]=(...k)=>o.onMenu&&o.onMenu(...k))},ae)]),a(v,{class:p(["the-navbar__menu",o.getMenuVisibleClass]),onClose:o.onMenu},null,8,["class","onClose"]),e("div",{class:p(["the-navbar__menu-wrapper",o.getMenuWrapperVisibleClass])},null,2)],2)}const Se=g(Z,[["render",le]]),_e=""+new URL("circles-left.43a00013.svg",import.meta.url).href,ce=""+new URL("circles-right.ccaad0a5.svg",import.meta.url).href,ie=""+new URL("logo.fb50b3d3.svg",import.meta.url).href;const re=h({setup(){return{documents:[{id:0,name:"\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u043F\u0443\u0431\u043B\u0438\u0447\u043D\u043E\u0439 \u043E\u0444\u0435\u0440\u0442\u044B",to:"/"},{id:2,name:"\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438",to:"/"}],company:[{id:0,name:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430",to:"/"},{id:1,name:"\u041C\u0435\u0434\u0438\u0430\u0446\u0435\u043D\u0442\u0440",to:"/"},{id:2,name:"\u041A\u0430\u0440\u044C\u0435\u0440\u0430",to:"/"},{id:3,name:"\u041F\u0440\u043E\u0434\u0443\u043A\u0442",to:"/"},{id:4,name:"FAQ",to:"/"}]}}}),ue={class:"the-footer"},me=e("img",{class:"the-footer__circles the-footer__circles--left",src:_e,alt:"circles-left"},null,-1),de=e("img",{class:"the-footer__circles the-footer__circles--right",src:ce,alt:"circles-right"},null,-1),he={class:"the-footer__container"},ge={class:"the-footer__group"},pe={class:"the-footer__logo"},Ae={class:"the-footer__logo-group"},fe=e("img",{class:"the-footer__logo-img",src:ie,alt:"Druffle"},null,-1),ve=e("p",{class:"the-footer__logo-label"},[f(" \xA9 Druffle.me\u2122 "),e("br"),f(" \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B. ")],-1),be={class:"the-footer__columns"},Ce={class:"the-footer__columns-group"},we={class:"the-footer__column"},$e=e("h5",{class:"the-footer__column-title"}," \u0423\u0441\u0442\u0430\u0432\u043D\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B ",-1),ye={class:"the-footer__list"},ke={class:"the-footer__company"},Ue=L('<div class="the-footer__company-group"><h5 class="the-footer__company-title">\u041A\u043E\u043C\u043F\u0430\u043D\u0438\u044F</h5><div class="the-footer__company-links"><p class="the-footer__company-label"> \u041E\u041E\u041E &quot;\u041D\u041F\u041E \u041F\u041A\u0420\u0412-\u0418\u043D\u043D\u043E\u043F\u043E\u043B\u0438\u0441&quot; (\u0431\u0440\u0435\u043D\u0434 Druffle.me) </p><a class="the-footer__company-label" href="#"> info@druffle.me </a><a class="the-footer__company-label" href="#"> +7 (495) 921-01-27 </a></div><p class="the-footer__company-address"> 129110, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0411\u0430\u043D\u043D\u044B\u0439 \u043F\u0435\u0440, \u0434. 9, \u044D\u0442\u0430\u0436 5 </p></div>',1),Re={class:"the-footer__company-block"},Ie=e("p",{class:"the-footer__company-block-label"}," 129110, \u0433. \u041C\u043E\u0441\u043A\u0432\u0430, \u0411\u0430\u043D\u043D\u044B\u0439 \u043F\u0435\u0440, \u0434. 9, \u044D\u0442\u0430\u0436 5 ",-1);function Le(o,t,n,c,l,i){const s=w,_=B;return u(),m("div",ue,[me,de,e("div",he,[e("div",ge,[e("div",pe,[e("div",Ae,[a(s,{class:"the-footer__logo-link",to:"/"},{default:A(()=>[fe]),_:1}),a(_,{class:"the-footer__logo-apps",view:"purple"})]),ve]),e("div",be,[e("div",Ce,[e("div",we,[$e,e("ul",ye,[(u(!0),m(R,null,I(o.documents,r=>(u(),m("li",{class:"the-footer__item",key:r.id},[a(s,{class:"the-footer__item-link",to:r.to},{default:A(()=>[f(C(r.name),1)]),_:2},1032,["to"])]))),128))])])]),e("div",ke,[Ue,e("div",Re,[Ie,a(_,{class:"the-footer__company-apps",view:"purple"})])])])])])])}const Ee=g(re,[["render",Le]]);export{Se as _,Ee as a};
