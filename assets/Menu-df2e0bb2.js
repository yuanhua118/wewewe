/* empty css             *//* empty css                     *//* empty css                  */import{d as B,M as E,J as S,o as t,e as u,w as a,c as r,Q as _,a as $,O as p,P as i,g as C,l as V,c5 as k,m as O,_ as N}from"./index-36069e73.js";const R=B({__name:"Menu",props:{datas:{type:Object,default:()=>{}},mode:{type:String,default:"horizontal"}},emits:["select"],setup(c,{emit:m}){const h=m,n=c;E(()=>{if(location.hash){const e=document.getElementById(decodeURIComponent(location.hash).replace("#",""));console.log("====",e,decodeURIComponent(location.hash).replace("#","")),e.scrollIntoView({behavior:"smooth",block:"start"})}});const s=S(""),b=(e,l)=>{s.value=e,console.log(e,l,n.datas[e[0]])},f=(e,l)=>{console.log("closeMenu",e,l)},g=()=>{window.history.pushState({},"",`#${n.datas[s.value].label}`),console.log("====",`${n.datas[s.value].label}`),document.getElementById(`${n.datas[s.value].label}`).scrollIntoView({behavior:"smooth",block:"start"})};function x(){console.log("select",...arguments),g(),h("select",...arguments)}return(e,l)=>{const M=V,v=k,I=O;return t(),u(I,{"default-active":"0","unique-opened":!0,collapse:!1,ellipsis:!1,class:"menu",mode:c.mode,onOpen:b,onClose:f,onSelect:x},{default:a(()=>[(t(!0),r(i,null,_(c.datas,(o,d)=>(t(),u(v,{index:`${d}`},{title:a(()=>[$("span",null,p(o==null?void 0:o.label),1)]),default:a(()=>[(t(!0),r(i,null,_(o==null?void 0:o.children,(w,y)=>(t(),u(M,{index:`${d}_${y}`},{default:a(()=>[C(p(w.label),1)]),_:2},1032,["index"]))),256))]),_:2},1032,["index"]))),256))]),_:1},8,["mode"])}}});const D=N(R,[["__scopeId","data-v-ba6805c0"]]);export{D as _};
