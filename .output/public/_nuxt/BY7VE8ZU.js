import{_ as r}from"./DYukAyPS.js";import{a as m}from"./C2qxqNzf.js";import{z as u,o as t,c as f,a as n,C as i,B as k,J as s,t as d}from"./DSqohS_p.js";const y={class:"flex items-center justify-start"},h={__name:"SectionTitleLine",props:{icon:{type:String,default:null},title:{type:String,required:!0},main:Boolean,back:{type:Boolean,default:!1}},setup(e){const l=e,c=u(()=>l.back===!0);return(o,a)=>(t(),f("section",{class:s([{"pt-6":!e.main},"mb-6 flex items-center justify-between"])},[n("div",y,[e.icon&&e.main?(t(),i(m,{key:0,icon:e.icon,type:"light",class:"mr-3",onClick:a[0]||(a[0]=B=>c.value?o.$router.back():null),bg:""},null,8,["icon"])):e.icon?(t(),i(r,{key:1,path:e.icon,class:"mr-2",size:"20"},null,8,["path"])):k("",!0),n("h1",{class:s([e.main?"text-3xl":"text-2xl","leading-tight"])},d(e.title),3)])],2))}};export{h as _};