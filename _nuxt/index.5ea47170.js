import{_ as k}from"./TheButton.c000bb58.js";import{f as h,a as c,o as a,b as i,e as t,h as s,B as d,F as g,r as v,t as p,c as C,w as T}from"./entry.73296d40.js";import{_ as I}from"./Consultation.2a2bed47.js";import{_ as L}from"./TheCards.f5bda81a.js";import{_ as z}from"./layout.6fc3b19f.js";const j=""+new URL("wave.b908f879.svg",import.meta.url).href,B=""+new URL("hand.d5614c0c.png",import.meta.url).href,D=""+new URL("mask.e9c1744e.png",import.meta.url).href,S=""+new URL("rectangle.f8c642cf.png",import.meta.url).href,H=""+new URL("triangle.6b67e160.svg",import.meta.url).href,M=""+new URL("scroll.745c9501.svg",import.meta.url).href,A=""+new URL("touch.6a047811.svg",import.meta.url).href;const V=h({setup(){return{onSignUpForDemo:()=>{window.open("https://calendly.com/artemkravchenko/40min?month=2023-01","_blank")},onLearnMore:()=>{document.querySelectorAll("#advantages")[0].scrollIntoView({behavior:"smooth"})}}}}),N={class:"the-home-introduction"},F=d('<img class="the-home-introduction__wave" src="'+j+'" alt="wave"><img class="the-home-introduction__hand" src="'+B+'" alt="hand"><img class="the-home-introduction__mask" src="'+D+'" alt="mask"><img class="the-home-introduction__rectangle" src="'+S+'" alt="rectangle"><img class="the-home-introduction__triangle" src="'+H+'" alt="triangle">',5),q={class:"the-home-introduction__container"},E={class:"the-home-introduction__info"},O=t("h1",{class:"the-home-introduction__title"}," \u041F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0431\u0435\u0441\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0433\u043E \u0433\u043E\u0441\u0442\u0435\u0432\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0438 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0434\u0430\u0436 \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0447\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 ",-1),P={class:"the-home-introduction__info-group"},K=t("div",{class:"the-home-introduction__scroll"},[t("img",{class:"the-home-introduction__scroll-img the-home-introduction__scroll-img--mouse",src:M,alt:"scroll"}),t("img",{class:"the-home-introduction__scroll-img the-home-introduction__scroll-img--touch",src:A,alt:"touch"}),t("p",{class:"the-home-introduction__scroll-label"}," \u041A\u0440\u0443\u0442\u0438\u0442\u0435 \u0432\u043D\u0438\u0437 ")],-1);function Q(e,n,_,r,l,m){const o=k;return a(),i("div",N,[F,t("div",q,[t("div",E,[O,t("div",P,[s(o,{label:"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0434\u0435\u043C\u043E",view:"default",onClick:e.onSignUpForDemo},null,8,["onClick"]),s(o,{class:"the-home-introduction__info-btn",label:"\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435",view:"outline",onClick:e.onLearnMore},null,8,["onClick"])]),K])])])}const W=c(V,[["render",Q]]),f=""+new URL("service.72747d3d.svg",import.meta.url).href,b=""+new URL("guests.92149445.svg",import.meta.url).href,w=""+new URL("staff.4b40a0d5.svg",import.meta.url).href,$=""+new URL("system.002e065b.svg",import.meta.url).href,G=""+new URL("logo.4553ca1c.svg",import.meta.url).href;const J=h({setup(){return{cardsTop:[{id:0,title:"\u0411\u0440\u043E\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0443\u0441\u043B\u0443\u0433 \u043D\u0435 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043E",description:"\u0411\u0443\u043C\u0430\u0436\u043D\u044B\u0435 \u043D\u043E\u0441\u0438\u0442\u0435\u043B\u0438 \u0443\u0441\u0442\u0430\u0440\u0435\u043B\u0438 \u0438 \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u0434\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0445 \u0437\u0430\u0442\u0440\u0430\u0442 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0438 \u0434\u0435\u043D\u0435\u0433",img:f,alt:"service"},{id:1,title:"\u0413\u043E\u0441\u0442\u0438 \u043D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043F\u0440\u043E\u0438\u043D\u0444\u043E\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u044B",description:"\u0413\u043E\u0441\u0442\u0438 \u043D\u0435 \u043E\u0431\u043B\u0430\u0434\u0430\u044E\u0442 \u0432\u0441\u0435\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u043E\u0431 \u0443\u0441\u043B\u0443\u0433\u0430\u0445 \u043D\u0430 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u044B",img:b,alt:"quests"},{id:2,title:"\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u044B \u043F\u0435\u0440\u0435\u0433\u0440\u0443\u0436\u0435\u043D",description:"\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u0440\u0435\u0441\u0435\u043F\u0448\u043D \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u043E \u043D\u0435 \u0443\u0441\u043F\u0435\u0432\u0430\u044E\u0442 \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0442\u044C \u0432\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u0433\u043E\u0441\u0442\u0435\u0439",img:w,alt:"staff"},{id:3,title:"\u041E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0434\u0430\u0436\u0430\u043C\u0438",description:"\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u044F \u0433\u043E\u0441\u0442\u0435\u0439 \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0440\u0430\u0441\u0442\u0443\u0442, \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B \u043D\u0435 \u0432\u043E\u0432\u043B\u0435\u0447\u0435\u043D \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0438, \u0441\u043D\u0438\u0436\u0430\u0435\u0442\u0441\u044F \u043B\u043E\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u044C",img:$,alt:"system"}],cardsBottom:[{id:0,description:"\u0414\u043E 25% \u2013\xA0\u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0432\u044B\u0440\u0443\u0447\u043A\u0438 \u043E\u0442 \u0440\u0443\u043C-\u0441\u0435\u0440\u0432\u0438\u0441\u0430",img:f,alt:"service"},{id:1,description:"\u0414\u043E 60 \u0441\u0435\u043A\u0443\u043D\u0434 \u2013 \u0432\u0440\u0435\u043C\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0432\u0445\u043E\u0434\u044F\u0449\u0435\u0433\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0430",img:b,alt:"quests"},{id:2,description:"\u0414\u043E 20% \u2013\xA0\u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435 \u0441\u0440\u0435\u0434\u043D\u0435\u0433\u043E \u0447\u0435\u043A\u0430 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0433\u043E\u0441\u0442\u044F",img:w,alt:"staff"},{id:3,description:"\u0414\u043E 30+% \u2013\xA0\u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435 LTV \u043D\u0430 \u043E\u0434\u043D\u043E\u0433\u043E \u0433\u043E\u0441\u0442\u044F",img:$,alt:"system"}]}}}),X={class:"the-home-about"},Y={class:"the-home-about__container"},Z=t("h2",{class:"the-home-about__title"}," \u0427\u0442\u043E \u043C\u0435\u0448\u0430\u0435\u0442 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E \u043F\u0440\u043E\u0434\u0430\u0432\u0430\u0442\u044C \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0447\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438? ",-1),tt={class:"the-home-about__cards"},et=["src","alt"],ot={class:"the-home-about__card-info"},st={class:"the-home-about__card-title"},at={class:"the-home-about__card-label"},nt=d('<h2 class="the-home-about__title the-home-about__title--platform"> \u0412\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0438 Druffle </h2><div class="the-home-about__platform"><img class="the-home-about__platform-logo" src="'+G+'" alt="Druffle"><div class="the-home-about__platform-info"><p class="the-home-about__platform-info-label"><span class="the-home-about__platform-info-title"> Druffle.me </span> \u2014 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0431\u0435\u0441\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0433\u043E \u0433\u043E\u0441\u0442\u0435\u0432\u043E\u0433\u043E \u0441\u0435\u0440\u0432\u0438\u0441\u0430, \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0434\u0430\u0436 \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0447\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433, \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430 \u0438 \u043F\u043E\u0432\u044B\u0448\u0435\u043D\u0438\u044F \u043B\u043E\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0438 \u0433\u043E\u0441\u0442\u0435\u0439 </p></div></div>',2),it={class:"the-home-about__cards the-home-about__cards--bottom"},_t=["src","alt"],ct={class:"the-home-about__card-info"},rt={class:"the-home-about__card-label"};function lt(e,n,_,r,l,m){return a(),i("div",X,[t("div",Y,[Z,t("ul",tt,[(a(!0),i(g,null,v(e.cardsTop,o=>(a(),i("li",{class:"the-home-about__card",key:o.id},[t("img",{class:"the-home-about__card-img",src:o.img,alt:o.alt},null,8,et),t("div",ot,[t("h5",st,p(o.title),1),t("p",at,p(o.description),1)])]))),128))]),nt,t("ul",it,[(a(!0),i(g,null,v(e.cardsBottom,o=>(a(),i("li",{class:"the-home-about__card",key:o.id},[t("img",{class:"the-home-about__card-img",src:o.img,alt:o.alt},null,8,_t),t("div",ct,[t("p",rt,p(o.description),1)])]))),128))])])])}const mt=c(J,[["render",lt]]),ht=""+new URL("rhomb.aed29ffe.svg",import.meta.url).href,dt=""+new URL("phones.6df1bd52.png",import.meta.url).href,pt=""+new URL("triangle.ed021519.svg",import.meta.url).href;const ut=h({setup(){return{onLearnMore:()=>{document.querySelectorAll("#advantages")[0].scrollIntoView({behavior:"smooth"})}}}}),gt={class:"the-home-marketing"},vt={class:"the-home-marketing__container"},ft={class:"the-home-marketing__info"},bt=t("h2",{class:"the-home-marketing__title"}," \u041D\u0430\u0447\u0438\u043D\u0430\u0439\u0442\u0435 \u043F\u0440\u043E\u0434\u0430\u0432\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0447\u043D\u044B\u0445 \u0443\u0441\u043B\u0443\u0433 \u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441 ",-1),wt=t("p",{class:"the-home-marketing__label"}," \u0423\u0437\u043D\u0430\u0439\u0442\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u043E\u0431\u043E \u0432\u0441\u0435\u0445 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430\u0445 \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B Druffle.me. \u0417\u0430\u043A\u0430\u0436\u0438\u0442\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u043F\u0438\u043B\u043E\u0442, \u0443\u043B\u0443\u0447\u0448\u0430\u0439\u0442\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u0438\u0439 \u0441\u0435\u0440\u0432\u0438\u0441 \u0438 \u043D\u0430\u0447\u043D\u0438\u0442\u0435 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0443\u044E \u043F\u0440\u0438\u0431\u044B\u043B\u044C \u0443\u0436\u0435 \u0437\u0430\u0432\u0442\u0440\u0430 ",-1),$t={class:"the-home-marketing__buttons"},kt=t("img",{class:"the-home-marketing__rhomb",src:ht,alt:"rhomb"},null,-1),Lt=t("img",{class:"the-home-marketing__phones",src:dt,alt:"phones"},null,-1),yt=t("img",{class:"the-home-maarketing__triangle",src:pt,alt:"triangle"},null,-1);function Ut(e,n,_,r,l,m){const o=k;return a(),i("div",gt,[t("div",vt,[t("div",ft,[bt,wt,t("div",$t,[s(o,{label:"\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435",view:"default",onClick:e.onLearnMore},null,8,["onClick"])])]),kt,Lt]),yt])}const Rt=c(ut,[["render",Ut]]),xt=""+new URL("phone-1.08c934f5.png",import.meta.url).href,u=""+new URL("ellipse.0d35ff5b.png",import.meta.url).href,Ct=""+new URL("rhomb.66a1af30.svg",import.meta.url).href,Tt=""+new URL("phone-2.eb8df39f.png",import.meta.url).href,It=""+new URL("phone-3.0fa60edc.png",import.meta.url).href,zt=""+new URL("wave-left.9fc37a1d.png",import.meta.url).href,jt=""+new URL("wave-right.60e18e85.png",import.meta.url).href,Bt=""+new URL("triangle.037b645a.png",import.meta.url).href;const Dt={},St={class:"the-home-advantages",id:"advantages"},Ht=d('<div class="the-home-advantages__container"><h2 class="the-home-advantages__title"> Druffle.me \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u0443\u0435\u0442, \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u0430 \u2014 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u043F\u0440\u0438\u0431\u044B\u043B\u044C </h2><div class="the-home-advantages__blocks"><div class="the-home-advantages__block the-home-advantages__block--one"><div class="the-home-advantages__info"><h5 class="the-home-advantages__info-title"> \u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u0440\u0430\u0431\u043E\u0442\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430 </h5><p class="the-home-advantages__info-label"> \u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0441\u0432\u043E\u0438\u043C \u0433\u043E\u0441\u0442\u044F\u043C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0443\u0434\u043E\u0431\u043D\u044B\u0439 \u043E\u043D\u043B\u0430\u0439\u043D-\u0441\u0435\u0440\u0432\u0438\u0441, \u0432\u044B\u0431\u0438\u0440\u0430\u0442\u044C \u0438 \u0437\u0430\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0438 </p></div><div class="the-home-advantages__block-img"><img class="the-home-advantages__block-phone" src="'+xt+'" alt="phone"><img class="the-home-advantages__block-ellipse" src="'+u+'" alt="ellipse"></div><img class="the-home-advantages__block-rhomb" src="'+Ct+'" alt="rhomb"></div><div class="the-home-advantages__block the-home-advantages__block--two"><div class="the-home-advantages__block-img"><img class="the-home-advantages__block-phone" src="'+Tt+'" alt="phone"><img class="the-home-advantages__block-ellipse" src="'+u+'" alt="ellipse"></div><div class="the-home-advantages__info"><h5 class="the-home-advantages__info-title"> \u0423\u043B\u0443\u0447\u0448\u0430\u0439\u0442\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0441\u0442\u044C \u0433\u043E\u0441\u0442\u0435\u0439 </h5><p class="the-home-advantages__info-label"> \u0418\u043D\u0444\u043E\u0440\u043C\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u0438\u0445 \u0433\u043E\u0441\u0442\u0435\u0439 \u043E\u0431 \u0443\u0441\u043B\u0443\u0433\u0430\u0445 \u0432 \u0435\u0434\u0438\u043D\u043E\u043C web-\u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0435 \u043D\u0430 \u043F\u0440\u043E\u0442\u044F\u0436\u0435\u043D\u0438\u0438 \u0432\u0441\u0435\u0433\u043E \u043F\u0435\u0440\u0438\u043E\u0434\u0430 \u043F\u0440\u0435\u0431\u044B\u0432\u0430\u043D\u0438\u044F </p></div></div><div class="the-home-advantages__block the-home-advantages__block--three"><div class="the-home-advantages__info"><h5 class="the-home-advantages__info-title"> \u041E\u0441\u0442\u0430\u0432\u0430\u0439\u0442\u0435\u0441\u044C \u043D\u0430 \u0441\u0432\u044F\u0437\u0438 \u0441 \u0433\u043E\u0441\u0442\u044F\u043C\u0438 </h5><p class="the-home-advantages__info-label"> \u0413\u043E\u0441\u0442\u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E\u0442 \u0441\u0435\u0431\u044F \u0431\u043E\u043B\u0435\u0435 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E, \u043E\u0441\u0442\u0430\u0432\u0430\u044F\u0441\u044C \u043D\u0430 \u0441\u0432\u044F\u0437\u0438 \u0441 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u043E\u043C \u0447\u0435\u0440\u0435\u0437 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 WhatsApp \u0438\u043B\u0438 Telegram </p></div><div class="the-home-advantages__block-img"><img class="the-home-advantages__block-phone" src="'+It+'" alt="phone"><img class="the-home-advantages__block-ellipse" src="'+u+'" alt="ellipse"></div></div></div></div><img class="the-home-advantages__wave the-home-advantages__wave--left" src="'+zt+'" alt="wave"><img class="the-home-advantages__wave the-home-advantages__wave--right" src="'+jt+'" alt="wave"><img class="the-home-advantages__triangle" src="'+Bt+'" alt="triangle">',4),Mt=[Ht];function At(e,n){return a(),i("div",St,Mt)}const Vt=c(Dt,[["render",At]]),Nt=""+new URL("laptop.460877c3.png",import.meta.url).href,Ft=""+new URL("rhomb.66a1af30.svg",import.meta.url).href,qt=""+new URL("wave.bf9275da.svg",import.meta.url).href,Et=""+new URL("triangle-big.415cc052.svg",import.meta.url).href;const Ot={},Pt={class:"the-home-optimization"},Kt=d('<div class="the-home-optimization__container"><img class="the-home-optimization__laptop" src="'+Nt+'" alt="laptop"><div class="the-home-optimization__info"><h5 class="the-home-optimization__title"> \u041E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u0443\u0439\u0442\u0435 \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u043F\u0440\u044F\u043C\u044B\u0445 \u043F\u0440\u043E\u0434\u0430\u0436 </h5><p class="the-home-optimization__label"> \u0423\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0440\u0430\u0441\u0442\u0443\u0449\u0438\u043C\u0438 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F\u043C\u0438 \u0441\u0432\u043E\u0438\u0445 \u0433\u043E\u0441\u0442\u0435\u0439 \u043F\u0443\u0442\u0435\u043C \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u043E\u0433\u043E \u0432\u043E\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0430 \u0432 \u043F\u0440\u043E\u0434\u0430\u0436\u0438 \u0443\u0441\u043B\u0443\u0433 \u0433\u043E\u0441\u0442\u0438\u043D\u0438\u0446\u044B </p></div><img class="the-home-optimization__rhomb" src="'+Ft+'" alt="rhomb"></div><img class="the-home-optimization__wave" src="'+qt+'" alt="wave"><img class="the-home-optimization__triangle-big" src="'+Et+'" alt="triangle-big">',3),Qt=[Kt];function Wt(e,n){return a(),i("div",Pt,Qt)}const Gt=c(Ot,[["render",Wt]]),Jt=""+new URL("img-1.b4224ffb.jpg",import.meta.url).href,Xt=""+new URL("img-2.c18d886c.png",import.meta.url).href,Yt=""+new URL("img-3.ccfa3dce.jpg",import.meta.url).href;const Zt=h({setup(){return{events:[{id:0,description:"\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D \u0432\u044B\u0441\u0442\u0443\u043F\u0438\u043B \u043D\u0430 \u043A\u043E\u043D\u0444\u0435\u0440\u0435\u043D\u0446\u0438\u0438 Hospitality Business: \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430\u043B \u043A\u043E\u043B\u043B\u0435\u0433\u0430\u043C \u043E \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0438 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439 \u0431\u0435\u0441\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0433\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0441\u043A\u043E\u0433\u043E \u043E\u043F\u044B\u0442\u0430, \u043F\u043E\u0442\u0440\u0435\u0431\u043D\u043E\u0441\u0442\u044F\u0445 \u043E\u0442\u0435\u043B\u044C\u0435\u0440\u043E\u0432 \u0438 \u0442\u0443\u0440\u0438\u0441\u0442\u043E\u0432 \u043D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u0435",date:"31 \u043E\u043A\u0442\u044F\u0431\u0440\u044F 2022",img:Jt,alt:"img-1",href:"https://globalhospitalityclub.ru/session/31-oktjabrja-2022/sessija-1-kommunikacii/marketing-vpechatlenij-strong-ilja-konoplev-strong-osnovatel-servisa-podderzhki-marketinga-dlja-fitnes-klubov-i-kurortov-zdorovyj-marketing/\xA0"},{id:1,description:"\u0415\u0432\u0433\u0435\u043D\u0438\u0439 \u0411\u0435\u043B\u044F\u043A\u043E\u0432 \u0432\u044B\u044F\u0441\u043D\u0438\u043B \u0443 CEO Druffle \u0410\u043B\u0435\u043A\u0441\u0435\u044F \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D\u0430, \u043A\u0430\u043A \u043E\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u0431\u0438\u0437\u043D\u0435\u0441 \u0430\u0434\u0430\u043F\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044F \u043A \u043D\u043E\u0432\u043E\u0439 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u043E\u0439 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438",date:"29 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F 2022",img:Xt,alt:"img-2",href:"https://radiokp.ru/podcast/gost-v-studii/652861"},{id:2,description:"\u041A\u0430\u043A \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043E\u0442\u0434\u0430\u0447\u0443 \u043E\u0442 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0430\u0446\u0438\u0438 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430: \u043C\u043D\u0435\u043D\u0438\u0435 \u0410\u043B\u0435\u043A\u0441\u0435\u044F \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D\u0430",date:"14 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F 2022",img:Yt,alt:"img-3",href:"https://www.kp.ru/russia/sovety-turistam/kak-povysit-pribyl/"}],onCard:_=>{window.open(_.href,"_blank")}}}}),te={class:"the-home-events"},ee={class:"the-home-events__container"};function oe(e,n,_,r,l,m){const o=L;return a(),i("div",te,[t("div",ee,[s(o,{cards:e.events,view:"light",title:"\u041C\u0435\u0434\u0438\u0430\u0446\u0435\u043D\u0442\u0440","is-align":!0,onCard:e.onCard},null,8,["cards","onCard"])])])}const se=c(Zt,[["render",oe]]),ae=""+new URL("preview-1.2ab25b90.png",import.meta.url).href,ne=""+new URL("preview-2.e3753fe3.jpg",import.meta.url).href,ie=""+new URL("preview-3.d3f3311c.png",import.meta.url).href;const _e=h({setup(){return{news:[{id:0,description:"\xAB\u042D\u0442\u043E \u043A\u043B\u044E\u0447 \u043A \u0443\u0441\u043F\u0435\u0445\u0443 \u043E\u0442\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0431\u0438\u0437\u043D\u0435\u0441\u0430\xBB: \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u0430\u043B, \u043A\u0430\u043A \u043F\u043E\u0432\u044B\u0441\u0438\u0442\u044C \u0432\u044B\u0440\u0443\u0447\u043A\u0443 \u043E\u0442\u0435\u043B\u044F \u0441 \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043A\u043B\u0438\u0435\u043D\u0442\u0430",date:"28 \u044F\u043D\u0432\u0430\u0440\u044F 2022",img:ae,alt:"preview-1",href:"https://www.kp.ru/russia/sovety-turistam/kak-povysit-pribyl/"},{id:1,description:"\u041A\u0430\u043A \u043D\u043E\u0432\u0430\u044F \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u043C\u0435\u043D\u044F\u0435\u0442 \u0438\u043D\u0434\u0443\u0441\u0442\u0440\u0438\u044E \u0433\u043E\u0441\u0442\u0435\u043F\u0440\u0438\u0438\u043C\u0441\u0442\u0432\u0430 \u0432 \u0420\u043E\u0441\u0441\u0438\u0438, \u043C\u043D\u0435\u043D\u0438\u0435 \u0410\u043B\u0435\u043A\u0441\u0435\u044F \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D\u0430",date:"19 \u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F 2022",img:ne,alt:"preview-2",href:"https://www.kp.ru/daily/27446/4649911/"},{id:2,description:"\u041A\u0430\u043A \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0443\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C LTV. \u041A\u0435\u0439\u0441 \u0410\u043B\u0435\u043A\u0441\u0435\u044F \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D\u0430 \u043D\u0430 \u043F\u0440\u0438\u043C\u0435\u0440\u0435 \u043E\u0442\u0435\u043B\u044F Korston",date:"28 \u044F\u043D\u0432\u0430\u0440\u044F 2021",img:ie,alt:"preview-3",href:"https://academyopen.ru/journal/432"}],onCard:_=>{window.open(_.href,"_blank")}}}}),ce={class:"the-home-news"},re={class:"the-home-news__container"};function le(e,n,_,r,l,m){const o=L;return a(),i("div",ce,[t("div",re,[s(o,{cards:e.news,view:"light",title:"\u041D\u043E\u0432\u043E\u0441\u0442\u0438 \u0438 \u043F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438",onCard:e.onCard},null,8,["cards","onCard"])])])}const me=c(_e,[["render",le]]),he={};function de(e,n){const _=W,r=mt,l=Rt,m=Vt,o=Gt,y=I,U=se,R=me,x=z;return a(),C(x,null,{default:T(()=>[s(_),s(r,{"data-aos":"fade-down","data-aos-once":"false"}),s(l,{"data-aos":"fade-down","data-aos-once":"false"}),s(m,{"data-aos":"fade-down","data-aos-once":"false"}),s(o,{"data-aos":"fade-up","data-aos-once":"false"}),s(y,{id:"consultation","data-aos":"fade","data-aos-once":"false"}),s(U,{"data-aos":"fade","data-aos-once":"false"}),s(R,{"data-aos":"fade","data-aos-once":"false"})]),_:1})}const be=c(he,[["render",de]]);export{be as default};
