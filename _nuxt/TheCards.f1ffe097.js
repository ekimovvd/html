import{_ as N}from"./TheButton.1cd1559c.js";import{s as j,$ as O,f as R,v as W,l as A,a as X,x as F,o as z,b as H,e as $,t as P,y as I,h as T,w as q,F as Y,r as U,c as J}from"./entry.b2f4cfad.js";function K(a,x,n,p){const o=j();return a.params.createElements&&Object.keys(p).forEach(u=>{if(!n[u]&&n.auto===!0){let r=a.$el.children(`.${p[u]}`)[0];r||(r=o.createElement("div"),r.className=p[u],a.$el.append(r)),n[u]=r,x[u]=r}}),n}function k(a=""){return`.${a.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function Q({swiper:a,extendParams:x,on:n,emit:p}){const o="swiper-pagination";x({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${o}-bullet`,bulletActiveClass:`${o}-bullet-active`,modifierClass:`${o}-`,currentClass:`${o}-current`,totalClass:`${o}-total`,hiddenClass:`${o}-hidden`,progressbarFillClass:`${o}-progressbar-fill`,progressbarOppositeClass:`${o}-progressbar-opposite`,clickableClass:`${o}-clickable`,lockClass:`${o}-lock`,horizontalClass:`${o}-horizontal`,verticalClass:`${o}-vertical`,paginationDisabledClass:`${o}-disabled`}}),a.pagination={el:null,$el:null,bullets:[]};let u,r=0;function _(){return!a.params.pagination.el||!a.pagination.el||!a.pagination.$el||a.pagination.$el.length===0}function g(e,l){const{bulletActiveClass:d}=a.params.pagination;e[l]().addClass(`${d}-${l}`)[l]().addClass(`${d}-${l}-${l}`)}function c(){const e=a.rtl,l=a.params.pagination;if(_())return;const d=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,t=a.pagination.$el;let s;const f=a.params.loop?Math.ceil((d-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;if(a.params.loop?(s=Math.ceil((a.activeIndex-a.loopedSlides)/a.params.slidesPerGroup),s>d-1-a.loopedSlides*2&&(s-=d-a.loopedSlides*2),s>f-1&&(s-=f),s<0&&a.params.paginationType!=="bullets"&&(s=f+s)):typeof a.snapIndex<"u"?s=a.snapIndex:s=a.activeIndex||0,l.type==="bullets"&&a.pagination.bullets&&a.pagination.bullets.length>0){const i=a.pagination.bullets;let m,b,S;if(l.dynamicBullets&&(u=i.eq(0)[a.isHorizontal()?"outerWidth":"outerHeight"](!0),t.css(a.isHorizontal()?"width":"height",`${u*(l.dynamicMainBullets+4)}px`),l.dynamicMainBullets>1&&a.previousIndex!==void 0&&(r+=s-(a.previousIndex-a.loopedSlides||0),r>l.dynamicMainBullets-1?r=l.dynamicMainBullets-1:r<0&&(r=0)),m=Math.max(s-r,0),b=m+(Math.min(i.length,l.dynamicMainBullets)-1),S=(b+m)/2),i.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(v=>`${l.bulletActiveClass}${v}`).join(" ")),t.length>1)i.each(v=>{const h=O(v),C=h.index();C===s&&h.addClass(l.bulletActiveClass),l.dynamicBullets&&(C>=m&&C<=b&&h.addClass(`${l.bulletActiveClass}-main`),C===m&&g(h,"prev"),C===b&&g(h,"next"))});else{const v=i.eq(s),h=v.index();if(v.addClass(l.bulletActiveClass),l.dynamicBullets){const C=i.eq(m),E=i.eq(b);for(let B=m;B<=b;B+=1)i.eq(B).addClass(`${l.bulletActiveClass}-main`);if(a.params.loop)if(h>=i.length){for(let B=l.dynamicMainBullets;B>=0;B-=1)i.eq(i.length-B).addClass(`${l.bulletActiveClass}-main`);i.eq(i.length-l.dynamicMainBullets-1).addClass(`${l.bulletActiveClass}-prev`)}else g(C,"prev"),g(E,"next");else g(C,"prev"),g(E,"next")}}if(l.dynamicBullets){const v=Math.min(i.length,l.dynamicMainBullets+4),h=(u*v-u)/2-S*u,C=e?"right":"left";i.css(a.isHorizontal()?C:"top",`${h}px`)}}if(l.type==="fraction"&&(t.find(k(l.currentClass)).text(l.formatFractionCurrent(s+1)),t.find(k(l.totalClass)).text(l.formatFractionTotal(f))),l.type==="progressbar"){let i;l.progressbarOpposite?i=a.isHorizontal()?"vertical":"horizontal":i=a.isHorizontal()?"horizontal":"vertical";const m=(s+1)/f;let b=1,S=1;i==="horizontal"?b=m:S=m,t.find(k(l.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${b}) scaleY(${S})`).transition(a.params.speed)}l.type==="custom"&&l.renderCustom?(t.html(l.renderCustom(a,s+1,f)),p("paginationRender",t[0])):p("paginationUpdate",t[0]),a.params.watchOverflow&&a.enabled&&t[a.isLocked?"addClass":"removeClass"](l.lockClass)}function y(){const e=a.params.pagination;if(_())return;const l=a.virtual&&a.params.virtual.enabled?a.virtual.slides.length:a.slides.length,d=a.pagination.$el;let t="";if(e.type==="bullets"){let s=a.params.loop?Math.ceil((l-a.loopedSlides*2)/a.params.slidesPerGroup):a.snapGrid.length;a.params.freeMode&&a.params.freeMode.enabled&&!a.params.loop&&s>l&&(s=l);for(let f=0;f<s;f+=1)e.renderBullet?t+=e.renderBullet.call(a,f,e.bulletClass):t+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;d.html(t),a.pagination.bullets=d.find(k(e.bulletClass))}e.type==="fraction"&&(e.renderFraction?t=e.renderFraction.call(a,e.currentClass,e.totalClass):t=`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,d.html(t)),e.type==="progressbar"&&(e.renderProgressbar?t=e.renderProgressbar.call(a,e.progressbarFillClass):t=`<span class="${e.progressbarFillClass}"></span>`,d.html(t)),e.type!=="custom"&&p("paginationRender",a.pagination.$el[0])}function M(){a.params.pagination=K(a,a.originalParams.pagination,a.params.pagination,{el:"swiper-pagination"});const e=a.params.pagination;if(!e.el)return;let l=O(e.el);l.length!==0&&(a.params.uniqueNavElements&&typeof e.el=="string"&&l.length>1&&(l=a.$el.find(e.el),l.length>1&&(l=l.filter(d=>O(d).parents(".swiper")[0]===a.el))),e.type==="bullets"&&e.clickable&&l.addClass(e.clickableClass),l.addClass(e.modifierClass+e.type),l.addClass(a.isHorizontal()?e.horizontalClass:e.verticalClass),e.type==="bullets"&&e.dynamicBullets&&(l.addClass(`${e.modifierClass}${e.type}-dynamic`),r=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),e.type==="progressbar"&&e.progressbarOpposite&&l.addClass(e.progressbarOppositeClass),e.clickable&&l.on("click",k(e.bulletClass),function(t){t.preventDefault();let s=O(this).index()*a.params.slidesPerGroup;a.params.loop&&(s+=a.loopedSlides),a.slideTo(s)}),Object.assign(a.pagination,{$el:l,el:l[0]}),a.enabled||l.addClass(e.lockClass))}function V(){const e=a.params.pagination;if(_())return;const l=a.pagination.$el;l.removeClass(e.hiddenClass),l.removeClass(e.modifierClass+e.type),l.removeClass(a.isHorizontal()?e.horizontalClass:e.verticalClass),a.pagination.bullets&&a.pagination.bullets.removeClass&&a.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&l.off("click",k(e.bulletClass))}n("init",()=>{a.params.pagination.enabled===!1?D():(M(),y(),c())}),n("activeIndexChange",()=>{(a.params.loop||typeof a.snapIndex>"u")&&c()}),n("snapIndexChange",()=>{a.params.loop||c()}),n("slidesLengthChange",()=>{a.params.loop&&(y(),c())}),n("snapGridLengthChange",()=>{a.params.loop||(y(),c())}),n("destroy",()=>{V()}),n("enable disable",()=>{const{$el:e}=a.pagination;e&&e[a.enabled?"removeClass":"addClass"](a.params.pagination.lockClass)}),n("lock unlock",()=>{c()}),n("click",(e,l)=>{const d=l.target,{$el:t}=a.pagination;if(a.params.pagination.el&&a.params.pagination.hideOnClick&&t&&t.length>0&&!O(d).hasClass(a.params.pagination.bulletClass)){if(a.navigation&&(a.navigation.nextEl&&d===a.navigation.nextEl||a.navigation.prevEl&&d===a.navigation.prevEl))return;const s=t.hasClass(a.params.pagination.hiddenClass);p(s===!0?"paginationShow":"paginationHide"),t.toggleClass(a.params.pagination.hiddenClass)}});const G=()=>{a.$el.removeClass(a.params.pagination.paginationDisabledClass),a.pagination.$el&&a.pagination.$el.removeClass(a.params.pagination.paginationDisabledClass),M(),y(),c()},D=()=>{a.$el.addClass(a.params.pagination.paginationDisabledClass),a.pagination.$el&&a.pagination.$el.addClass(a.params.pagination.paginationDisabledClass),V()};Object.assign(a.pagination,{enable:G,disable:D,render:y,update:c,init:M,destroy:V})}const L={purple:"purple",light:"light"},Z=R({props:{cards:{type:Array,default:()=>[]},view:{type:String,default:"purple"},title:{type:String,default:"\u041C\u0430\u0441\u0442\u0435\u0440-\u043A\u043B\u0430\u0441\u0441\u044B"},isAlign:{type:Boolean,default:!1}},emits:["card"],setup(a,{emit:x}){const{view:n,isAlign:p}=W(a),o={modules:[Q],spaceBetween:15,breakpoints:{1440:{slidesPerView:3},1024:{slidesPerView:3},768:{slidesPerView:2},321:{slidesPerView:1}},pagination:!0},u=A(()=>`the-cards__preview--${n.value}`),r=A(()=>`the-cards__description--${n.value}`),_=A(()=>{switch(n.value){case L.purple:return"the-cards__title--white";case L.light:return"the-cards__title--black";default:return""}}),g=A(()=>p.value?"the-cards__card--align":""),c=A(()=>p.value?"the-cards__button--align":"");return{swiperOptions:o,getCardPreviewViewClass:u,getCardDescriptionViewClass:r,getTitleViewClass:_,getCardAlignViewClass:g,getButtonAlignViewClass:c,onCard:M=>{x("card",M)}}}}),w={class:"the-cards"},aa=["src"],ea={class:"the-cards__info"},la={class:"the-cards__date"},ta=$("div",{class:"swiper-pagination"},null,-1);function sa(a,x,n,p,o,u){const r=N,_=F("SwiperSlide"),g=F("Swiper");return z(),H("div",w,[$("h2",{class:I(["the-cards__title",a.getTitleViewClass])},P(a.title),3),T(g,{class:"the-cards__slider",modules:a.swiperOptions.modules,spaceBetween:a.swiperOptions.spaceBetween,breakpoints:a.swiperOptions.breakpoints,pagination:a.swiperOptions.pagination},{default:q(()=>[(z(!0),H(Y,null,U(a.cards,c=>(z(),J(_,{class:"the-cards__slide",key:c.id},{default:q(()=>[$("div",{class:I(["the-cards__card",a.getCardAlignViewClass])},[$("div",{class:I(["the-cards__preview",a.getCardPreviewViewClass])},[$("img",{class:"the-cards__preview-img",src:c.img,alt:"img"},null,8,aa)],2),$("div",ea,[$("p",la,P(c.date),1),$("p",{class:I(["the-cards__description",a.getCardDescriptionViewClass])},P(c.description),3)]),T(r,{class:I(["the-cards__button",a.getButtonAlignViewClass]),label:"\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435",view:"purple-outline",onClick:y=>a.onCard(c)},null,8,["class","onClick"])],2)]),_:2},1024))),128)),ta]),_:1},8,["modules","spaceBetween","breakpoints","pagination"])])}const oa=X(Z,[["render",sa]]);export{Q as P,oa as _};