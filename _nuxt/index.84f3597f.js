import{a as _,t as u,b as s,c as r,w as l,o as c,e as p}from"./entry.a34add29.js";import{_ as y}from"./layout.07b75bb5.js";_({props:{blocksData:{type:Array,default:()=>[]}},setup(e){const{blocksData:t}=u(e),a=s(()=>t.value.find(n=>n.blockType==="h2").text),o=s(()=>t.value.find(n=>n.blockType==="text").text);return{getTitle:a,getText:o}}});_({props:{blocksData:{type:Array,default:()=>[]}},setup(e){const{blocksData:t}=u(e);return{getList:s(()=>t.value.find(o=>o.blockType==="list").items)}}});_({props:{label:{type:String,default:""}}});_({props:{blocksData:{type:Array,default:()=>[]}},setup(e){const{blocksData:t}=u(e);return{getImage:s(()=>t.value.find(o=>o.blockType==="image"))}}});_({props:{blocksData:{type:Array,default:()=>[]}},setup(e){const{blocksData:t}=u(e),a=s(()=>t.value.find(n=>n.blockType==="html").html),o=s(()=>t.value.find(n=>n.blockType==="video").text);return{getHtml:a,getVideoText:o}}});_({props:{blocksData:{type:Array,default:()=>[]}},setup(e){const{blocksData:t}=u(e);return{getText:s(()=>t.value.find(o=>o.blockType==="colored-text").text)}}});_({props:{blocksData:{type:Array,default:()=>[]}}});_({props:{blocksData:{type:Array,default:()=>[]}},setup(e){const{blocksData:t}=u(e);return{getQuote:s(()=>t.value.find(o=>o.blockType==="quote"))}}});_({props:{blocksData:{type:Array,default:()=>[]}},setup(e){const{blocksData:t}=u(e);return{getAuthors:s(()=>t.value.find(n=>n.blockType==="author").items),onAuthorImg:({blockFilePath:n})=>`https://druffle-app.a-local.ru/${n}`}}});const d=p("div",null,null,-1),v={__name:"index",setup(e){return(t,a)=>{const o=y;return c(),r(o,null,{default:l(()=>[d]),_:1})}}};export{v as default};