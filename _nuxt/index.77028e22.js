import{k as d,t as B,i as T,l as h,o as a,c as y,y as L,O as H,L as $,q as v,A as M,N as P,m as _,p as t,v as s,M as b,F as R,s as C,j as O,r as k,P as D,J as A}from"./entry.623ff58b.js";import{_ as U}from"./TheButton.de17cb6a.js";import{_ as N}from"./TheInput.21b1f0d3.js";import{R as j,a as q,_ as F,b as Z}from"./axios.78509fda.js";import{_ as G,a as K,b as J}from"./vector.5860e4c9.js";import{_ as W}from"./TheCards.ebd5e3d5.js";import{_ as Y}from"./layout.8be21441.js";const Q=d({props:{label:{type:String,default:""},view:{type:String,default:"default"},to:{type:String,default:"/"}},setup(e){const{view:n}=B(e);return{getLinkViewClass:T(()=>n.value?`the-link--${n.value}`:"")}}});function X(e,n,i,c,r,l){const o=P;return a(),y(o,{class:M(["the-link",e.getLinkViewClass]),to:e.to},{default:L(()=>[H(e.$slots,"left"),$(" "+v(e.label),1)]),_:3},8,["class","to"])}const E=h(Q,[["render",X]]),ee=""+new URL("wave.b908f879.svg",import.meta.url).href,te=""+new URL("hand.d5614c0c.png",import.meta.url).href,oe=""+new URL("mask.e9c1744e.png",import.meta.url).href,se=""+new URL("rectangle.f8c642cf.png",import.meta.url).href,ne=""+new URL("triangle.6b67e160.svg",import.meta.url).href,ae=""+new URL("scroll.745c9501.svg",import.meta.url).href,ie=""+new URL("touch.6a047811.svg",import.meta.url).href;const _e=d({setup(){return{onLearnMore:()=>{document.querySelectorAll("#advantages")[0].scrollIntoView({behavior:"smooth"})}}}}),ce={class:"the-home-introduction"},re=b('<img class="the-home-introduction__wave" src="'+ee+'" alt="wave"><img class="the-home-introduction__hand" src="'+te+'" alt="hand"><img class="the-home-introduction__mask" src="'+oe+'" alt="mask"><img class="the-home-introduction__rectangle" src="'+se+'" alt="rectangle"><img class="the-home-introduction__triangle" src="'+ne+'" alt="triangle">',5),le={class:"the-home-introduction__container"},he={class:"the-home-introduction__info"},me=t("h1",{class:"the-home-introduction__title"}," \u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0434\u0430\u0436 \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0447\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 ",-1),pe={class:"the-home-introduction__info-group"},de=t("div",{class:"the-home-introduction__scroll"},[t("img",{class:"the-home-introduction__scroll-img the-home-introduction__scroll-img--mouse",src:ae,alt:"scroll"}),t("img",{class:"the-home-introduction__scroll-img the-home-introduction__scroll-img--touch",src:ie,alt:"touch"}),t("p",{class:"the-home-introduction__scroll-label"}," \u041A\u0440\u0443\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u0437 ")],-1);function ue(e,n,i,c,r,l){const o=E,p=U;return a(),_("div",ce,[re,t("div",le,[t("div",he,[me,t("div",pe,[s(o,{id:"01_03",label:"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0434\u0435\u043C\u043E",view:"default",to:"/registration"}),s(p,{class:"the-home-introduction__info-btn",id:"01_04",label:"\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432\u0438\u0434\u0435\u043E",view:"outline",onClick:e.onLearnMore},null,8,["onClick"])]),de])])])}const ge=h(_e,[["render",ue]]),ve=""+new URL("logo.4553ca1c.svg",import.meta.url).href;const fe=d({setup(){return{}}}),$e={class:"the-home-opportunities"},be=b('<div class="the-home-opportunities__container"><h2 class="the-home-opportunities__title">\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 Druffle?</h2><div class="the-home-opportunities__group"><img class="the-home-opportunities__logo" src="'+ve+'" alt="Druffle"><div class="the-home-opportunities__info"><p class="the-home-opportunities__info-label"><span class="the-home-opportunities__info-title"> Druffle.me </span> \u2014 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0431\u0435\u0441\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0433\u043E \u0433\u043E\u0441\u0442\u0435\u0432\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0438\u0441\u0430, \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0434\u0430\u0436 \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0447\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433, \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430 \u0438 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u043B\u043E\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0433\u043E\u0441\u0442\u0435\u0439 </p></div></div></div>',1),we=[be];function ke(e,n,i,c,r,l){return a(),_("div",$e,we)}const ye=h(fe,[["render",ke]]),Le=""+new URL("indicators.35dc3cd8.svg",import.meta.url).href,Re=""+new URL("showcase.a8f0b39e.svg",import.meta.url).href,Ce=""+new URL("icon1.f81408ee.svg",import.meta.url).href,Ue=""+new URL("icon2.37dcea96.svg",import.meta.url).href,xe=""+new URL("icon3.56c004f7.svg",import.meta.url).href,Se=""+new URL("icon4.b099d5a2.svg",import.meta.url).href;const Ie=d({setup(){return{banners:[{id:0,label:"\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043F\u0440\u043E\u0434\u0430\u0436\u0438 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u043E\u0442\u0435\u043B\u044F \u0438 \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0438",img:Le},{id:1,label:"\u041E\u0446\u0438\u0444\u0440\u043E\u0432\u0430\u0442\u044C \u0432\u0441\u044E \u0438\u043D\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0443 \u0438 \u043D\u0430\u0431\u043E\u0440 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u043E\u0442\u0435\u043B\u044F \u0432 \u0435\u0434\u0438\u043D\u0443\u044E \u043E\u043D\u043B\u0430\u0439\u043D-\u0432\u0438\u0442\u0440\u0438\u043D\u0443",img:Re}],cards:[{id:0,label:"\u041E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0446\u0435\u0441\u0441 \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u044F \u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430\u043C\u0438 \u0433\u043E\u0441\u0442\u0435\u0439",img:Ce},{id:1,label:"\u041F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0441\u0442\u044C \u0433\u043E\u0441\u0442\u0435\u0439 \u043E\u0431\u043E \u0432\u0441\u0435\u0445 \u0443\u0441\u043B\u0443\u0433\u0430\u0445 \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u043E\u0442\u0435\u043B\u044F",img:Ue},{id:2,label:'\u0421\u043D\u0438\u0437\u0438\u0442\u044C \u043D\u0430\u0433\u0440\u0443\u0437\u043A\u0443 \u043D\u0430 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432 \u0440\u0435\u0441\u0435\u043F\u0448\u043D, \u0441\u043E\u043A\u0440\u0430\u0442\u0438\u0442\u044C \u0432\u0440\u0435\u043C\u044F "\u0440\u0435\u0430\u043A\u0446\u0438\u0438" \u043D\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u044B',img:xe},{id:3,label:"\u0423\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0438 \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0438 \u0441 \u0433\u043E\u0441\u0442\u044F\u043C\u0438 \u043E\u0442\u0435\u043B\u044F",img:Se}]}}}),Te={class:"the-home-help"},Ae={class:"the-home-help__container"},Ve=t("h2",{class:"the-home-help__title"},"Druffle \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u041E\u0442\u0435\u043B\u044E",-1),ze={class:"the-home-help__banners"},Ee=["src"],Be={class:"the-home-help__banner-label"},He={class:"the-home-help__cards"},Me=["src"],Pe={class:"the-home-help__card-label"};function Oe(e,n,i,c,r,l){return a(),_("div",Te,[t("div",Ae,[Ve,t("div",ze,[(a(!0),_(R,null,C(e.banners,o=>(a(),_("div",{class:"the-home-help__banner",key:o.id},[t("img",{class:"the-home-help__banner-img",src:o.img,alt:"img"},null,8,Ee),t("p",Be,v(o.label),1)]))),128))]),t("div",He,[(a(!0),_(R,null,C(e.cards,o=>(a(),_("div",{class:"the-home-help__card",key:o.id},[t("img",{class:"the-home-help__card-img",src:o.img,alt:""},null,8,Me),t("p",Pe,v(o.label),1)]))),128))])])])}const De=h(Ie,[["render",Oe]]),Ne=""+new URL("Icon1.f53629e8.svg",import.meta.url).href,je=""+new URL("Icon2.51103c75.svg",import.meta.url).href,qe=""+new URL("Icon3.837c461c.svg",import.meta.url).href,Fe=""+new URL("Icon4.b959cccb.svg",import.meta.url).href;const Ze=d({setup(){return{cards:[{id:0,text:"\u0414\u043E",label:"\u2014 \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0432\u044B\u0440\u0443\u0447\u043A\u0443 \u043E\u0442 \u0440\u0443\u043C-\u0441\u0435\u0440\u0432\u0438\u0441\u0430",span:"25%",img:Ne},{id:1,text:"\u0414\u043E",label:"\u2014 \u0432\u0440\u0435\u043C\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0432\u0445\u043E\u0434\u044F\u0449\u0435\u0433\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0430",span:"60 \u0441\u0435\u043A\u0443\u043D\u0434",img:je},{id:2,text:"\u0414\u043E",label:"\u2014 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0441\u0440\u0435\u0434\u043D\u0438\u0439 \u0447\u0435\u043A \u043D\u0430 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0433\u043E\u0441\u0442\u044F",span:"20%",img:qe},{id:3,text:"\u0414\u043E",label:"\u2014 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u0432\u044B\u0440\u0443\u0447\u043A\u0443 \u043D\u0430 \u043E\u0434\u043D\u043E\u0433\u043E \u0433\u043E\u0441\u0442\u044F",span:"30+%",img:Fe}]}}}),Ge={class:"the-home-result"},Ke={class:"the-home-result__container"},Je=t("h2",{class:"the-home-result__title"}," \u041A\u0430\u043A\u0438\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442 \u041E\u0442\u0435\u043B\u044C? ",-1),We={class:"the-home-result__cards"},Ye=["src"],Qe={class:"the-home-result__card-label"},Xe={class:"the-home-result__card-span"};function et(e,n,i,c,r,l){return a(),_("div",Ge,[t("div",Ke,[Je,t("div",We,[(a(!0),_(R,null,C(e.cards,o=>(a(),_("div",{class:"the-home-result__card",key:o.id},[t("img",{class:"the-home-result__card-img",src:o.img,alt:"img"},null,8,Ye),t("p",Qe,[$(v(o.text)+" ",1),t("span",Xe,v(o.span),1),$(" "+v(o.label),1)])]))),128))])])])}const tt=h(Ze,[["render",et]]),ot=""+new URL("laptop.460877c3.png",import.meta.url).href,st=""+new URL("rhomb.66a1af30.svg",import.meta.url).href,nt=""+new URL("wave.bf9275da.svg",import.meta.url).href,at=""+new URL("triangle-big.415cc052.svg",import.meta.url).href;const it={},_t={class:"the-home-optimization"},ct=b('<div class="the-home-optimization__container"><img class="the-home-optimization__laptop" src="'+ot+'" alt="laptop"><div class="the-home-optimization__info"><h5 class="the-home-optimization__title"> \u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439 \u043F\u0440\u043E\u0434\u0430\u0436 </h5><p class="the-home-optimization__label"> \u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0440\u0430\u0441\u0442\u0443\u0449\u0438\u043C\u0438 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F\u043C\u0438 \u0441\u0432\u043E\u0438\u0445 \u0433\u043E\u0441\u0442\u0435\u0439 \u043F\u0443\u0442\u0435\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u043E\u0433\u043E \u0432\u043E\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430 \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0438 \u0443\u0441\u043B\u0443\u0433 \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u044B </p></div><img class="the-home-optimization__rhomb" src="'+st+'" alt="rhomb"></div><img class="the-home-optimization__wave" src="'+nt+'" alt="wave"><img class="the-home-optimization__triangle-big" src="'+at+'" alt="triangle-big">',3),rt=[ct];function lt(e,n){return a(),_("div",_t,rt)}const ht=h(it,[["render",lt]]),mt=""+new URL("rhomb.aed29ffe.svg",import.meta.url).href,pt=""+new URL("employee.44ae7e76.png",import.meta.url).href,dt=""+new URL("triangle.ed021519.svg",import.meta.url).href;const ut=d({setup(){return{onLearnMore:()=>{document.querySelectorAll("#advantages")[0].scrollIntoView({behavior:"smooth"})}}}}),gt={class:"the-home-marketing"},vt={class:"the-home-marketing__container"},ft={class:"the-home-marketing__info"},$t=t("h2",{class:"the-home-marketing__title"}," \u041D\u0430\u0447\u0438\u043D\u0430\u0439\u0442\u0435 \u043F\u0440\u043E\u0434\u0430\u0432\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0447\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441 ",-1),bt=t("p",{class:"the-home-marketing__label"}," \u0423\u0437\u043D\u0430\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043E\u0431\u043E \u0432\u0441\u0435\u0445 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430\u0445 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B Druffle.me. \u0417\u0430\u043A\u0430\u0436\u0438\u0442\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u043F\u0438\u043B\u043E\u0442, \u0443\u043B\u0443\u0447\u0448\u0430\u0439\u0442\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0438\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 \u0438 \u043D\u0430\u0447\u043D\u0438\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0443\u044E \u043F\u0440\u0438\u0431\u044B\u043B\u044C \u0443\u0436\u0435 \u0437\u0430\u0432\u0442\u0440\u0430 ",-1),wt={class:"the-home-marketing__buttons"},kt=b('<img class="the-home-marketing__rhomb" src="'+mt+'" alt="rhomb"><img class="the-home-marketing__employee" src="'+pt+'" alt="phones"><div class="the-home-marketing__banner"><h4 class="the-home-marketing__banner-title"> \u0410\u0440\u0442\u0435\u043C \u041A\u0440\u0430\u0432\u0447\u0435\u043D\u043A\u043E </h4><p class="the-home-marketing__banner-label"> \u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u043F\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044E \u0431\u0438\u0437\u043D\u0435\u0441\u0430 </p></div>',3),yt=t("img",{class:"the-home-maarketing__triangle",src:dt,alt:"triangle"},null,-1);function Lt(e,n,i,c,r,l){const o=U;return a(),_("div",gt,[t("div",vt,[t("div",ft,[$t,bt,t("div",wt,[s(o,{id:"01_04",label:"\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435",view:"default",onClick:e.onLearnMore},null,8,["onClick"])])]),kt]),yt])}const Rt=h(ut,[["render",Lt]]),Ct=""+new URL("phone-1.08c934f5.png",import.meta.url).href,S=""+new URL("ellipse.0d35ff5b.png",import.meta.url).href,Ut=""+new URL("rhomb.66a1af30.svg",import.meta.url).href,xt=""+new URL("phone-2.eb8df39f.png",import.meta.url).href,St=""+new URL("phone-3.0fa60edc.png",import.meta.url).href,It=""+new URL("wave-left.9fc37a1d.png",import.meta.url).href,Tt=""+new URL("wave-right.60e18e85.png",import.meta.url).href,At=""+new URL("triangle.037b645a.png",import.meta.url).href;const Vt={},zt={class:"the-home-advantages",id:"advantages"},Et=b('<div class="the-home-advantages__container"><h2 class="the-home-advantages__title">\u041A\u0430\u043A \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 Druffle?</h2><div class="the-home-advantages__blocks"><div class="the-home-advantages__block the-home-advantages__block--one"><div class="the-home-advantages__info"><h5 class="the-home-advantages__info-title"> \u0423\u043F\u0440\u043E\u0441\u0442\u0438\u0442\u0435 \u0440\u0430\u0431\u043E\u0442\u0443 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430\u043C </h5><p class="the-home-advantages__info-label"> \u0412\u0430\u0448\u0438 \u0433\u043E\u0441\u0442\u0438 \u0441\u043C\u043E\u0433\u0443\u0442 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u044B\u0431\u0438\u0440\u0430\u0442\u044C \u0438 \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0438, \u043D\u0435 \u043F\u043E\u043A\u0438\u0434\u0430\u044F \u0441\u0432\u043E\u0435\u0433\u043E \u043D\u043E\u043C\u0435\u0440\u0430 </p></div><div class="the-home-advantages__block-img"><img class="the-home-advantages__block-phone" src="'+Ct+'" alt="phone"><img class="the-home-advantages__block-ellipse" src="'+S+'" alt="ellipse"></div><img class="the-home-advantages__block-rhomb" src="'+Ut+'" alt="rhomb"></div><div class="the-home-advantages__block the-home-advantages__block--two"><div class="the-home-advantages__block-img"><img class="the-home-advantages__block-phone" src="'+xt+'" alt="phone"><img class="the-home-advantages__block-ellipse" src="'+S+'" alt="ellipse"></div><div class="the-home-advantages__info"><h5 class="the-home-advantages__info-title"> \u041E\u0446\u0438\u0444\u0440\u0443\u0439\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0438 \u043E\u0442\u0435\u043B\u044F </h5><p class="the-home-advantages__info-label"> \u0417\u0430\u043A\u0430\u0437 \u0435\u0434\u044B \u0432 \u043D\u043E\u043C\u0435\u0440, \u0443\u0441\u043B\u0443\u0433\u0438 \u043F\u0440\u0430\u0447\u0435\u0447\u043D\u043E\u0439, \u0431\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0440\u0435\u0441\u0442\u043E\u0440\u0430\u043D\u0430 \u0438 \u0441\u043F\u0430 \u2014 \u0441\u0442\u0430\u043D\u0443\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0433\u043E\u0441\u0442\u044E \u0432 \u0435\u0433\u043E \u0441\u043C\u0430\u0440\u0442\u0444\u043E\u043D\u0435 </p></div></div><div class="the-home-advantages__block the-home-advantages__block--three"><div class="the-home-advantages__info"><h5 class="the-home-advantages__info-title"> \u041E\u0441\u0442\u0430\u0432\u0430\u0439\u0442\u0435\u0441\u044C \u043D\u0430 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0433\u043E\u0441\u0442\u044F\u043C\u0438 </h5><p class="the-home-advantages__info-label"> \u0413\u043E\u0441\u0442\u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E\u0442 \u0441\u0435\u0431\u044F \u0431\u043E\u043B\u0435\u0435 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E, \u043E\u0441\u0442\u0430\u0432\u0430\u044F\u0441\u044C \u043D\u0430 \u0441\u0432\u044F\u0437\u0438 \u0441 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u043E\u043C \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 WhatsApp \u0438\u043B\u0438 Telegram </p></div><div class="the-home-advantages__block-img"><img class="the-home-advantages__block-phone" src="'+St+'" alt="phone"><img class="the-home-advantages__block-ellipse" src="'+S+'" alt="ellipse"></div></div></div></div><img class="the-home-advantages__wave the-home-advantages__wave--left" src="'+It+'" alt="wave"><img class="the-home-advantages__wave the-home-advantages__wave--right" src="'+Tt+'" alt="wave"><img class="the-home-advantages__triangle" src="'+At+'" alt="triangle">',4),Bt=[Et];function Ht(e,n){return a(),_("div",zt,Bt)}const Mt=h(Vt,[["render",Ht]]);const Pt=d({components:{VueRecaptcha:j},setup(){const e=O({company:"",name:"",email:"",phone:""}),n=k(!1),i=k(!1),c=k(null),r=k(!1),l=T(()=>e.email?!String(e.email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/):!1),o=T(()=>!!(!e.name||!e.phone||l.value||!i.value||!n.value)),p=m=>{e.company=m},u=m=>{e.name=m},g=m=>{e.email=m},f=m=>{e.phone=m},x=m=>{n.value=m},w=()=>{e.company="",e.name="",e.email="",e.phone="",n.value=!1,i.value=!1,c.value.reset()};return{form:e,approval:n,recaptcha:c,isRecaptcha:i,isSubmit:r,getEmailIsError:l,getSubmitDisabled:o,onChangeCompany:p,onChangeName:u,onChangeEmail:g,onChangePhone:f,onChangeApproval:x,onSubmit:async()=>{try{r.value=!0,await q({method:"POST",headers:{"content-type":"application/form-data"},data:e,url:"send_mail/send.php"}).then(()=>{D().trackEvent({event:"send_form_order"}),w()})}catch{w()}},onSuccess:()=>{i.value=!0},onError:()=>{console.log("error")}}}}),Ot={class:"the-home-consultation"},Dt=t("img",{class:"the-home-consultation__polygon",src:G,alt:"polygon"},null,-1),Nt=t("img",{class:"the-home-consultation__triangle",src:K,alt:"triangle"},null,-1),jt=t("img",{class:"the-home-consultation__vector",src:J,alt:"vector"},null,-1),qt={class:"the-home-consultation__container"},Ft={class:"the-home-consultation__wrapper"},Zt=t("h2",{class:"the-home-consultation__title"},[$(" \u041E\u0441\u0442\u0430\u043B\u0438\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B? "),t("br"),$(" \u0417\u0430\u043F\u0438\u0448\u0438\u0442\u0435\u0441\u044C \u043D\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0443\u044E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E! \u041C\u044B \u0432\u0430\u043C \u043F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438\u043C! ")],-1),Gt={class:"the-home-consultation__form"},Kt={class:"the-home-consultation__footer"};function Jt(e,n,i,c,r,l){const o=N,p=F,u=Z,g=U,f=A("vue-recaptcha");return a(),_("div",Ot,[Dt,Nt,jt,t("div",qt,[t("div",Ft,[Zt,t("div",Gt,[s(o,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438/\u043E\u0442\u0435\u043B\u044F",value:e.form.company,onChange:e.onChangeCompany},null,8,["value","onChange"]),s(o,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F",value:e.form.name,onChange:e.onChangeName},null,8,["value","onChange"]),s(o,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443",value:e.form.email,error:e.getEmailIsError,onChange:e.onChangeEmail},null,8,["value","error","onChange"]),s(p,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",value:e.form.phone,onChange:e.onChangePhone},null,8,["value","onChange"])]),t("div",Kt,[s(u,{label:"\u042F \u0441\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 \u0423\u0441\u043B\u043E\u0432\u0438\u044F\u043C\u0438",value:e.approval,onChange:e.onChangeApproval},null,8,["value","onChange"]),e.isSubmit?(a(),y(g,{key:1,class:"the-home-consultation__btn",label:"\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430",view:"outline"})):(a(),y(g,{key:0,class:"the-home-consultation__btn",label:"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443",view:"default",disabled:e.getSubmitDisabled,onClick:e.onSubmit},null,8,["disabled","onClick"]))]),s(f,{class:"the-home-consultation__recaptcha",ref:"recaptcha",sitekey:"6LcP_AMkAAAAALxzoZ9oj-_BSUYGaKnqg5z4bjgk","load-recaptcha-script":!0,onVerify:e.onSuccess,onError:e.onError},null,8,["onVerify","onError"])])])])}const Wt=h(Pt,[["render",Jt]]),Yt=""+new URL("expert.983ea641.png",import.meta.url).href,Qt=""+new URL("triangle.40e71af8.svg",import.meta.url).href,Xt=""+new URL("polygon.aaacfb7e.svg",import.meta.url).href,eo=""+new URL("rectangle.1f383b69.png",import.meta.url).href;const to={},oo={class:"the-home-expert"},so={class:"the-home-expert__container"},no={class:"the-home-expert__content"},ao=t("h2",{class:"the-home-expert__title"}," \u0412\u0430\u0448 \u043B\u0438\u0447\u043D\u044B\u0439 \u041E\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043C\u0430\u0440\u043A\u0435\u0442\u043E\u043B\u043E\u0433 ",-1),io=t("p",{class:"the-home-expert__label"}," \u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0443\u044E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E \u043E\u0442 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0430 \u043F\u043E \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0443 \u0440\u043E\u0441\u0442\u0430 \u2013 \u0410\u043B\u0435\u043A\u0441\u0435\u044F \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0412\u0430\u0448\u0435\u043C\u0443 \u043E\u0442\u0435\u043B\u044E: - \u041F\u0440\u043E\u0432\u0435\u0434\u0443 \u0430\u043D\u0430\u043B\u0438\u0437 \u0432\u0430\u0448\u0435\u0433\u043E \u041E\u0442\u0435\u043B\u044F - \u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0430\u044E \u0433\u0438\u043F\u043E\u0442\u0435\u0437\u044B \u0434\u043B\u044F \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F - \u0421\u0440\u0430\u0432\u043D\u044E \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0433\u0438\u043F\u043E\u0442\u0435\u0437 - \u041F\u043E\u043C\u043E\u0433\u0443 \u043E\u0446\u0435\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B - \u041F\u043E\u0441\u0442\u0440\u043E\u044E \u043F\u043B\u0430\u043D \u043F\u043E \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u0433\u043E \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u044F ",-1),_o={class:"the-home-expert__buttons"},co=t("img",{class:"the-home-expert__img",src:Yt,alt:"img"},null,-1),ro=t("img",{class:"the-home-expert__triangle",src:Qt,alt:"img"},null,-1),lo=t("img",{class:"the-home-expert__polygon",src:Xt,alt:"img"},null,-1),ho=t("img",{class:"the-home-expert__rectangle",src:eo,alt:"img"},null,-1);function mo(e,n){const i=U,c=E;return a(),_("div",oo,[t("div",so,[t("div",no,[ao,io,t("div",_o,[s(i,{class:"the-home-expert__button",label:"\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F",view:"outline"}),s(c,{class:"the-home-expert__link",label:"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",view:"outline",to:"expert"})])])]),co,ro,lo,ho])}const po=h(to,[["render",mo]]),z=""+new URL("forbes.c47cbdef.svg",import.meta.url).href,I=""+new URL("rb.8b7697dc.svg",import.meta.url).href;const uo=d({props:{},setup(e,{emit:n}){return{swiperOptions:{spaceBetween:15,breakpoints:{1440:{slidesPerView:5},1024:{slidesPerView:4},768:{slidesPerView:3},321:{slidesPerView:2}}},images:[{id:0,src:z},{id:1,src:I},{id:2,src:I},{id:3,src:I},{id:4,src:z}]}}}),go={class:"the-home-media"},vo={class:"the-home-media__container"},fo=t("h2",{class:"the-home-media__title"},"\u0421\u041C\u0418 \u043F\u0438\u0448\u0443\u0442 \u043E \u043D\u0430\u0441",-1),$o=["src"];function bo(e,n,i,c,r,l){const o=A("SwiperSlide"),p=A("Swiper");return a(),_("div",go,[t("div",vo,[fo,s(p,{class:"the-home-media__slider",modules:e.swiperOptions.modules,spaceBetween:e.swiperOptions.spaceBetween,breakpoints:e.swiperOptions.breakpoints},{default:L(()=>[(a(!0),_(R,null,C(e.images,u=>(a(),y(o,{class:"the-home-media__slide",key:u.id},{default:L(()=>[t("img",{src:u.src,alt:"img"},null,8,$o)]),_:2},1024))),128))]),_:1},8,["modules","spaceBetween","breakpoints"])])])}const wo=h(uo,[["render",bo]]),ko=""+new URL("img-1.d178ecf5.jpg",import.meta.url).href,yo=""+new URL("img-2.3b3b32a8.png",import.meta.url).href,Lo=""+new URL("img-3.85613de1.jpg",import.meta.url).href,Ro=""+new URL("preview-1.48377b2b.png",import.meta.url).href,Co=""+new URL("preview-2.8d457dab.jpg",import.meta.url).href,Uo=""+new URL("preview-3.cfc278aa.png",import.meta.url).href;const xo=d({setup(){return{events:[{id:0,description:"\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D \u0432\u044B\u0441\u0442\u0443\u043F\u0438\u043B \u043D\u0430 \u043A\u043E\u043D\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u0438 Hospitality Business: \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430\u043B \u043A\u043E\u043B\u043B\u0435\u0433\u0430\u043C \u043E \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0431\u0435\u0441\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0433\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u043E\u0433\u043E \u043E\u043F\u044B\u0442\u0430, \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044F\u0445 \u043E\u0442\u0435\u043B\u044C\u0435\u0440\u043E\u0432 \u0438 \u0442\u0443\u0440\u0438\u0441\u0442\u043E\u0432 \u043D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u0435",date:"31 \u043E\u043A\u0442\u044F\u0431\u0440\u044F 2022",img:ko,alt:"img-1",href:"https://hotel.report/management/nastoyashhee-i-budushhee-servisa-v-otelyah-klassa-lyuks"},{id:1,description:"\u0415\u0432\u0433\u0435\u043D\u0438\u0439 \u0411\u0435\u043B\u044F\u043A\u043E\u0432 \u0432\u044B\u044F\u0441\u043D\u0438\u043B \u0443 CEO Druffle \u0410\u043B\u0435\u043A\u0441\u0435\u044F \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D\u0430, \u043A\u0430\u043A \u043E\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0431\u0438\u0437\u043D\u0435\u0441 \u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u043A \u043D\u043E\u0432\u043E\u0439 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438",date:"29 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F 2022",img:yo,alt:"img-2",href:"https://radiokp.ru/podcast/gost-v-studii/652861"},{id:2,description:"\u041A\u0430\u043A \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043E\u0442\u0434\u0430\u0447\u0443 \u043E\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430: \u043C\u043D\u0435\u043D\u0438\u0435 \u0410\u043B\u0435\u043A\u0441\u0435\u044F \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D\u0430",date:"14 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F 2022",img:Lo,alt:"img-3",href:"https://www.kp.ru/russia/sovety-turistam/kak-povysit-pribyl/"}],news:[{id:0,description:"\xAB\u042D\u0442\u043E \u043A\u043B\u044E\u0447 \u043A \u0443\u0441\u043F\u0435\u0445\u0443 \u043E\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430\xBB: \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430\u043B, \u043A\u0430\u043A \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0432\u044B\u0440\u0443\u0447\u043A\u0443 \u043E\u0442\u0435\u043B\u044F \u0441 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0430",date:"28 \u044F\u043D\u0432\u0430\u0440\u044F 2022",img:Ro,alt:"preview-1",href:"https://www.kp.ru/russia/sovety-turistam/kak-povysit-pribyl/"},{id:1,description:"\u041A\u0430\u043A \u043D\u043E\u0432\u0430\u044F \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043C\u0435\u043D\u044F\u0435\u0442 \u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u044E \u0433\u043E\u0441\u0442\u0435\u043F\u0440\u0438\u0438\u043C\u0441\u0442\u0432\u0430 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438, \u043C\u043D\u0435\u043D\u0438\u0435 \u0410\u043B\u0435\u043A\u0441\u0435\u044F \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D\u0430",date:"19 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F 2022",img:Co,alt:"preview-2",href:"https://www.kp.ru/daily/27446/4649911/"},{id:2,description:"\u041A\u0430\u043A \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C LTV. \u041A\u0435\u0439\u0441 \u0410\u043B\u0435\u043A\u0441\u0435\u044F \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D\u0430 \u043D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u043E\u0442\u0435\u043B\u044F Korston",date:"28 \u044F\u043D\u0432\u0430\u0440\u044F 2021",img:Uo,alt:"preview-3",href:"https://academyopen.ru/journal/432"}],onCard:c=>{window.open(c.href,"_blank")}}}}),So={class:"the-home-media-and-news"},Io={class:"the-home-media-and-news__container"},To=t("h2",{class:"the-home-media-and-news__title"},"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438",-1);function Ao(e,n,i,c,r,l){const o=W;return a(),_("div",So,[t("div",Io,[To,s(o,{class:"the-home-media-and-news__events",cards:e.events,view:"light",onCard:e.onCard},null,8,["cards","onCard"]),s(o,{cards:e.news,view:"light",onCard:e.onCard},null,8,["cards","onCard"])])])}const Vo=h(xo,[["render",Ao]]),zo={},Eo={class:"home-page"};function Bo(e,n){const i=ge,c=ye,r=De,l=tt,o=ht,p=Rt,u=Mt,g=Wt,f=po,x=wo,w=Vo,V=Y;return a(),_("div",Eo,[s(V,null,{default:L(()=>[s(i),s(c,{"data-aos":"fade","data-aos-once":"false"}),s(r,{"data-aos":"fade","data-aos-once":"false"}),s(l,{"data-aos":"fade","data-aos-once":"false"}),s(o,{"data-aos":"fade","data-aos-once":"false"}),s(p,{"data-aos":"fade","data-aos-once":"false"}),s(u,{"data-aos":"fade","data-aos-once":"false"}),s(g,{id:"consultation","data-aos":"fade","data-aos-once":"false"}),s(f,{"data-aos":"fade","data-aos-once":"false"}),s(x,{"data-aos":"fade","data-aos-once":"false"}),s(w,{"data-aos":"fade","data-aos-once":"false"})]),_:1})])}const Go=h(zo,[["render",Bo]]);export{Go as default};