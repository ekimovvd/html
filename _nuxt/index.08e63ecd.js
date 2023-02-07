import{k as d,o as s,l as _,m as t,p,q as w,i as g,t as u,I as T,r as y,F as v,s as b,c as h,v as m,y as R}from"./entry.3f7cc95e.js";import{_ as k}from"./TheButton.50643ea6.js";import{_ as x}from"./layout.8861c6f6.js";const C={},I={class:"the-media-introduction"},O=t("h2",{class:"the-media-introduction__title"},"\u041C\u0435\u0434\u0438\u0430\u0446\u0435\u043D\u0442\u0440",-1),M=t("p",{class:"the-media-introduction__label"}," \u041F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438, \u043F\u0440\u0435\u0441\u0441-\u0440\u0435\u043B\u0438\u0437\u044B \u0438 \u043C\u0435\u0434\u0438\u0430-\u0440\u0435\u0441\u0443\u0440\u0441\u044B. \u041C\u044B \u0440\u0430\u0434\u044B \u043E\u0431\u0449\u0430\u0442\u044C\u0441\u044F \u0441\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430\u043C\u0438 \u043C\u0430\u0441\u0441\u043E\u0432\u043E\u0439 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438 \u0438 \u0433\u043E\u0442\u043E\u0432\u044B \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E\u0431 \u043E\u0442\u0440\u0430\u0441\u043B\u0438 ",-1),D=[O,M];function F(e,o){return s(),_("div",I,D)}const S=d(C,[["render",F]]);const U=p({props:{tab:{type:Object,required:!0},tabActive:{type:Number,required:!0}},emits:["tab"],setup(e,{emit:o}){const{tab:n,tabActive:i}=w(e);return{getViewClass:g(()=>n.value.id===i.value?"the-media-tab--active":""),onTab:()=>{o("tab",n.value.id)}}}});function B(e,o,n,i,c,r){return s(),_("button",{class:T(["the-media-tab",e.getViewClass]),onClick:o[0]||(o[0]=(...a)=>e.onTab&&e.onTab(...a))},u(e.tab.label),3)}const L=d(U,[["render",B]]);const E=p({setup(){const e=y(6);return{tabActive:e,tabs:[{id:0,label:"\u041F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435"},{id:1,label:"\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438"},{id:2,label:"\u041A\u0435\u0439\u0441\u044B"},{id:3,label:"\u0421\u043E\u0431\u044B\u0442\u0438\u044F"},{id:4,label:"\u0422\u0435\u043D\u0434\u0435\u043D\u0446\u0438\u0438"},{id:5,label:"\u0418\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F"},{id:6,label:"\u041F\u0440\u0435\u0441\u0441-\u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B"}],onTab:i=>{e.value=i}}}}),Q={class:"the-media-tabs"};function P(e,o,n,i,c,r){const a=L;return s(),_("div",Q,[(s(!0),_(v,null,b(e.tabs,l=>(s(),h(a,{key:l.id,tab:l,tabActive:e.tabActive,onTab:e.onTab},null,8,["tab","tabActive","onTab"]))),128))])}const X=d(E,[["render",P]]),V=""+new URL("download.6d824332.png",import.meta.url).href;const W=p({setup(){return{onDownload:()=>{console.log("Download")}}}}),j=t("img",{class:"the-media-download__img",src:V,alt:"icon"},null,-1),Y=t("div",{class:"the-media-download__info"},[t("h4",{class:"the-media-download__title"},"\u0421\u043A\u0430\u0447\u0430\u0442\u044C \u043F\u0440\u0435\u0441\u0441-\u043A\u0438\u0442"),t("p",{class:"the-media-download__label"},"2,50 \u041C\u0412, PDF")],-1),K=[j,Y];function N(e,o,n,i,c,r){return s(),_("button",{class:"the-media-download",onClick:o[0]||(o[0]=(...a)=>e.onDownload&&e.onDownload(...a))},K)}const H=d(W,[["render",N]]),z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARgSURBVHgB1Zo9bBxFFMf/M7tOESJhEJIlRKQLFgo0uTuJyhQ+N2mQUOgoiOxLQKKLm7QkoUKiiTskAsakgS4COpB8KUKTYu9SEBAyWSlSFEtWbEVJCjszk/fGt8ld7sN7u7O3ez/pvLu3a3v+eh/7Zt4IOGR1Kaj4npw3MBUYUaGvpiFQ6nrIIDRChHTSksCdp0pfr/9YbcIRAikhETXpyVP0hxbBApIR0lAaSqmVtOISC9oX4l0QMDW4xKApBS5/+n15DQkYWVBmQnoJ1ZReqH9bDUf5pdiCVpeDae+hdwHCLGOcCHFZPVWXyBV3Yj0e56HVL4KStyfX6bSEfIhtrQMFrX4eVDxtxSQNeFfsKEmivhueNOSwm2tnW4skJkD+YphpHguPadhDAy3UtkyAAkKWqg6yVF8L2ZjZd7NCwmPjMfa71yPIZrO9QsTMMOwY6RXSM8YeQTY155fNRqHk+XasXXTFUDs938EEIYReOH2l2oiuuyzUdrWJQptuKz0X9NOZYAkpXW3m+Cv2M064BLv6WVCLrv3nd6Q8R4VhKk6en7XHjRsPcOu3TTza2sM4aFupwefWQvzOITEVOGL2g9fx8dfvofzRDA4d9pA1nVaygqSWmRScJ0jQh1++g9m515A1WslTfLSCKNXNIyOOvHEIc2eOksXepfMpZIWQdoIJ4bLEOX3lxIHPZBlfSumqD4Va+ol4fDi+jlZfxT9/bqH16yZc4knUpDTjrwo4UXB8sRs6jS8hylJKUUZORPF18vzbTuLL0EqTpB8l5MzM8SM2zc/V30olTAhM+z3rZjnC8cXiOL5u0ycBJYmCwW74/idv2vhKQuEERSRNvD4Kxt4Thb/J3W4lTOk+rzUXJY5ut4XskqiEhD453U7aKjst9/99TELuY5OOaTAQoW+UbgkpnVXao/B4axc3f7mHu8FDOEGblq8Fmt5+52BsRHHC6TmFe/VA03FyOY8mRhpjY+PGdrs43YVrlEbDZkdajdwWDpathlXbruJkEIaS2+IP5WP7aVvrNTsFzwB2r5s/38PGX9vIEiFMg49WkPRwjRQ6FZRVnAxCKbPCR1sp8LoWzcsbSEk0cHav37/6L+07JTZkjGbUynxRKQhziRq9NaTgj2/+x9RhmVmcDIRamC9OO7h6trlOL6caJogoGUTX3cUpW2nC0FovdF53CeJYMtArmBCoYuNtAGHndz3TB61wkc2IgsNj1EpffPn7HkHcbWYzkvpYXec8IDF2jP06430neGxGLbt9s0i0xYT97g2csXIPUxldR8Gg/mp92PaZWG19WvteFzm3KDvcbGhbP97Gi6WgRAt46yKnma1NAEPcrJNYiyQ2prSu5pHSOTXz/44jhkmyeWks1jJUW2p60dc7+qdxSLxMzy1MKpPOCSGcTt+TColIvwHQJg0sw8j5pFbjgIfQa7QccC2pkAinjZR2RqTmmT4mIcp23bzfFk2YHRLfJAs36X13/aANSaPwDMNY+MOwwwEgAAAAAElFTkSuQmCC";const J=p({props:{material:{type:Object,required:!0}},setup(){return{}}}),G={class:"the-media-material"},Z={class:"the-media-material__preview"},q=["src"],ee=t("a",{class:"the-media-material__preview-link",href:"#"},[t("img",{class:"the-media-material__preview-link-img",src:z,alt:"play"})],-1),te={class:"the-media-material__info"},oe={class:"the-media-material__date"},se={class:"the-media-material__title"};function ae(e,o,n,i,c,r){return s(),_("div",G,[t("div",Z,[t("img",{class:"the-media-material__preview-img",src:e.material.preview,alt:"img"},null,8,q),ee]),t("div",te,[t("p",oe,u(e.material.date),1),t("h4",se,u(e.material.label),1)])])}const ne=d(J,[["render",ae]]),A=""+new URL("preview-1.c299868d.png",import.meta.url).href,$=""+new URL("preview-2.18a4787d.png",import.meta.url).href,ie=""+new URL("preview-3.bd03355b.png",import.meta.url).href;const _e=p({setup(){return{materials:[{id:0,date:"21 \u044F\u043D\u0432\u0430\u0440\u044F 2021",label:"\u041F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",preview:A},{id:1,date:"21 \u044F\u043D\u0432\u0430\u0440\u044F 2021",label:"\u042D\u043A\u0441\u043F\u0435\u0440\u0442 Forbes for Business \u2014 \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D",preview:$},{id:2,date:"21 \u044F\u043D\u0432\u0430\u0440\u044F 2021",label:"\u041F\u043E\u043B\u0443\u0447\u0430\u0439\u0442\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u043D\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438",preview:$},{id:3,date:"21 \u044F\u043D\u0432\u0430\u0440\u044F 2021",label:"\u042D\u043A\u0441\u043F\u0435\u0440\u0442 Forbes for Business \u2014 \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D",preview:ie},{id:4,date:"21 \u044F\u043D\u0432\u0430\u0440\u044F 2021",label:"\u042D\u043A\u0441\u043F\u0435\u0440\u0442 Forbes for Business \u2014 \u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u0414\u043E\u0431\u0440\u0443\u0441\u0438\u043D",preview:A}]}}}),ce={class:"the-media-materials"},re=t("h2",{class:"the-media-materials__title"},"\u0412\u0438\u0434\u0435\u043E",-1),de={class:"the-media-materials__list"};function le(e,o,n,i,c,r){const a=H,l=ne;return s(),_("div",ce,[re,t("div",de,[m(a),(s(!0),_(v,null,b(e.materials,f=>(s(),h(l,{key:f.id,material:f},null,8,["material"]))),128))])])}const pe=d(_e,[["render",le]]);const me=p({props:{photo:{type:Object,required:!0}}}),ue={class:"the-media-photo"},he={class:"the-media-photo__preview"},ve=["src"],be={class:"the-media-photo__info"},fe={class:"the-media-photo__date"},Ae={class:"the-media-photo__label"};function $e(e,o,n,i,c,r){const a=k;return s(),_("div",ue,[t("div",he,[t("img",{class:"the-media-photo__preview-img",src:e.photo.img,alt:"alt"},null,8,ve)]),t("div",be,[t("p",fe,u(e.photo.date),1),t("h4",Ae,u(e.photo.label),1),m(a,{class:"the-media-photo__button",label:"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",view:"purple-outline"})])])}const we=d(me,[["render",$e]]),ge=""+new URL("preview-1.a48e7060.png",import.meta.url).href,Te=""+new URL("preview-3.d3f3311c.png",import.meta.url).href,ye=""+new URL("preview-2.accb335e.png",import.meta.url).href;const Re=p({setup(){return{photos:[{id:0,date:"4 \u043C\u0430\u0440\u0442\u0430 2021",label:"\u0424\u043E\u0442\u043E\u0433\u0430\u043B\u0435\u0440\u0435\u044F",img:ge},{id:1,date:"28 \u044F\u043D\u0432\u0430\u0440\u044F 2021",label:"\u0424\u043E\u0442\u043E\u0433\u0430\u043B\u0435\u0440\u0435\u044F 3",img:ye},{id:2,date:"21 \u044F\u043D\u0432\u0430\u0440\u044F 2021",label:"\u0424\u043E\u0442\u043E\u0433\u0430\u043B\u0435\u0440\u0435\u044F 2",img:Te}]}}}),ke={class:"the-media-photos"},xe={class:"the-media-photos__container"},Ce=t("h2",{class:"the-media-photos__title"},"\u0424\u043E\u0442\u043E",-1),Ie={class:"the-media-photos__list"};function Oe(e,o,n,i,c,r){const a=we;return s(),_("div",ke,[t("div",xe,[Ce,t("div",Ie,[(s(!0),_(v,null,b(e.photos,l=>(s(),h(a,{key:l.id,photo:l},null,8,["photo"]))),128))])])])}const Me=d(Re,[["render",Oe]]);const De={},Fe={class:"media"},Se={class:"media__container"};function Ue(e,o){const n=S,i=X,c=pe,r=Me,a=x;return s(),h(a,null,{default:R(()=>[t("div",Fe,[t("div",Se,[m(n),m(i),m(c,{"data-aos":"fade","data-aos-once":"false"})]),m(r,{"data-aos":"fade","data-aos-once":"false"})])]),_:1})}const Qe=d(De,[["render",Ue]]);export{Qe as default};
