import{_ as T}from"./C3z8ikX4.js";import{z as n,al as v,k as q,o as a,C as c,w as m,B as s,c as u,J as i,t as b,a7 as B,O as F,r as V,G as $,N as D,a as g,d as j,n as z,a5 as I,P as S}from"./DSqohS_p.js";import{h as L,_ as p}from"./DYukAyPS.js";const H={__name:"BaseButton",props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},href:{type:String,default:null},target:{type:String,default:null},to:{type:[String,Object],default:null},type:{type:String,default:null},color:{type:String,default:"white"},as:{type:String,default:null},small:Boolean,outline:Boolean,active:Boolean,disabled:Boolean,roundedFull:Boolean},setup(e){const t=e,o=n(()=>t.as?t.as:t.to?v:t.href?"a":"button"),d=n(()=>o.value==="button"?t.type??"button":null),y=n(()=>t.small&&t.icon?"px-1":"px-2"),f=n(()=>{const r=["inline-flex","cursor-pointer","justify-center","items-center","whitespace-nowrap","focus:outline-none","transition-colors","focus:ring","duration-150","border",t.roundedFull?"rounded-full":"rounded",t.active?"ring ring-black dark:ring-white":"ring-blue-700",L(t.color,t.outline,!t.disabled)];return t.small?r.push("text-sm",t.roundedFull?"px-3 py-1":"p-1"):r.push("py-2",t.roundedFull?"px-6":"px-3"),t.disabled&&r.push("cursor-not-allowed",t.outline?"opacity-50":"opacity-70"),r});return(r,x)=>{const h=T;return o.value===q(v)?(a(),c(h,{key:0,class:i(f.value),type:d.value,to:e.to,target:e.target,disabled:e.disabled},{default:m(()=>[e.icon?(a(),c(p,{key:0,path:e.icon},null,8,["path"])):s("",!0),e.label?(a(),u("span",{key:1,class:i(y.value)},b(e.label),3)):s("",!0)]),_:1},8,["class","type","to","target","disabled"])):(a(),c(B(o.value),{key:1,class:i(f.value),href:e.href,type:d.value,to:e.to,target:e.target,disabled:e.disabled},{default:m(()=>[e.icon?(a(),c(p,{key:0,path:e.icon},null,8,["path"])):s("",!0),e.label?(a(),u("span",{key:1,class:i(y.value)},b(e.label),3)):s("",!0)]),_:1},8,["class","href","type","to","target","disabled"]))}}},O={key:0,class:"flex items-stretch border-b border-gray-100 dark:border-slate-800"},E={key:0,class:"searchbar_wrapper py-2 px-2"},G={key:1,class:"text-center py-24 text-gray-500 dark:text-slate-400"},J=g("p",null,"Nothing's here…",-1),M=[J],P={key:3,class:"p-6 border-t border-gray-100 dark:border-slate-800"},K={__name:"CardBox",props:{title:{type:String,default:null},icon:{type:String,default:null},headerIcon:{type:String,default:null},rounded:{type:String,default:"rounded-xl"},flex:{type:String,default:"flex-col"},hasTable:Boolean,hasSearchbar:Boolean,empty:Boolean,form:Boolean,hoverable:Boolean,modal:Boolean},emits:["header-icon-click","submit","search-toggle","search-string"],setup(e,{emit:t}){const o=e,d=t,y=n(()=>o.form?"form":"div"),f=F(),r=n(()=>f.footer&&!!f.footer()),x=n(()=>{const l=[o.rounded,o.flex,o.modal?"dark:bg-slate-900":"dark:bg-slate-900/70"];return o.hoverable&&l.push("hover:shadow-lg transition-shadow duration-500"),l}),h=V({query:"",searching:!1}),w=l=>{d("search-string",l)};$(()=>h.query,l=>{w(l)}),n(()=>o.headerIcon??D);const C=l=>{d("submit",l)};return(l,k)=>(a(),c(B(y.value),{class:i([x.value,"bg-white flex"]),onSubmit:C},{default:m(()=>[e.title?(a(),u("header",O,[g("div",{class:i(["flex items-center py-3 grow font-bold",[e.icon?"px-4":"px-6"]])},[e.icon?(a(),c(p,{key:0,path:e.icon,class:"mr-3"},null,8,["path"])):s("",!0),j(" "+b(e.title),1)],2),e.hasSearchbar?(a(),u("div",E,[z(g("input",{type:"text",class:"py-2 px-2 rounded-md text-sm text-black-700 dark:text-slate-700",placeholder:"Поиск...","onUpdate:modelValue":k[0]||(k[0]=N=>h.query=N)},null,512),[[I,h.query]])])):s("",!0)])):s("",!0),e.empty?(a(),u("div",G,M)):(a(),u("div",{key:2,class:i(["flex-1",{"p-6":!e.hasTable}])},[S(l.$slots,"default")],2)),r.value?(a(),u("div",P,[S(l.$slots,"footer")])):s("",!0)]),_:3},40,["class"]))}};export{K as _,H as a};