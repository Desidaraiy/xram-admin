import{_ as T}from"./BY7VE8ZU.js";import{_ as C}from"./sfjfEMc_.js";import{a as N,_ as j}from"./DJfxPBq4.js";import{I as J,j as p,z as D,G as $,o as k,c as h,a as m,b as l,J as I,t as L,B as q,g as z,h as A,i as E,f as M,r as O,w as n,_ as R,k as H,m as K,n as Q,v as W,q as x}from"./DSqohS_p.js";import{a as S,_ as X}from"./DTQ49aZk.js";import{_ as Y}from"./byDhHAzm.js";import{_ as Z}from"./C2qxqNzf.js";import"./DYukAyPS.js";import"./C3z8ikX4.js";const ee={class:"flex items-stretch justify-start relative"},te={class:"inline-flex"},le=["accept"],ae={key:0},oe={class:"inline-flex px-4 py-2 justify-center bg-gray-100 dark:bg-slate-800 border-gray-200 dark:border-slate-700 border rounded-r"},ne={__name:"FormFilePicker",props:{modelValue:{type:[Object,File,Array],default:null},label:{type:String,default:"Upload"},icon:{type:String,default:J},accept:{type:String,default:null},color:{type:String,default:"info"}},emits:["update:modelValue"],setup(i,{emit:v}){const b=i,y=v,_=p(null),s=p(b.modelValue),c=D(()=>b.modelValue);$(c,e=>{s.value=e,e||(_.value.input.value=null)});const d=e=>{const V=e.target.files||e.dataTransfer.files;s.value=V[0],y("update:modelValue",s.value)};return(e,V)=>(k(),h("div",ee,[m("label",te,[l(S,{as:"a",label:i.label,icon:i.icon,color:i.color,class:I({"rounded-r-none":s.value})},null,8,["label","icon","color","class"]),m("input",{ref_key:"root",ref:_,type:"file",class:"absolute top-0 left-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1",accept:i.accept,onInput:d},null,40,le)]),s.value?(k(),h("div",ae,[m("span",oe,L(s.value.name),1)])):q("",!0)]))}},se={class:"grid grid-cols-1 w-full gap-4"},re={class:"flex flex-row justify-start items-center m-2"},be={__name:"new",setup(i){const v=z(),b=A(),y=p([]);E(()=>{v.query.groupid&&y.value.push(v.query.groupid)});const _=M(),s=p(null),c=p(null),d=p([]),e=O({action_url:"",token:_.userToken,text:"",title:"",to_all:!0,groups_id:[],date_start:"",date_end:"",redirect:!1}),V=async()=>{let o=new FormData;if(c.value===null){alert("Не выбран графический файл");return}else o.append("preview",c.value);if(e.redirect===!1&&s.value===null){alert("Не выбран графический файл");return}else o.append("picture",s.value);if(e.action_url==""){alert("Не введена ссылка");return}if(e.text==""){alert("Не введен текст");return}if(e.title==""){alert("Не введено название");return}if(e.date_start==""||e.date_end==""){alert("Не введены даты");return}o.append("action_url",e.action_url),o.append("text",e.text),o.append("date_start",e.date_start),o.append("date_end",e.date_end),o.append("redirect",F(e.redirect)),o.append("token",e.token),o.append("title",e.title);const t=x+"add-advertising";await $fetch(t,{method:"POST",body:o}).then(async r=>{r.message==="ok"?(await P(r.advertise.id),b.back(),_.getAdvertsList()):alert("Ошибка: Графический файл "+r.picture)}),o=new FormData},P=async o=>{console.log("set visibility",o);let t;const r={token:e.token,advertising_id:o};e.to_all?(r.to_all=1,r.users_id=[],t=x+"advertising-to-users"):(r.to_all=0,r.groups_id=e.groups_id,t=x+"advertising-to-groups"),await $fetch(t,{method:"POST",body:r}).then(g=>{console.log(g)})};$(d,()=>{e.to_all=d.value.length===0,e.groups_id=d.value});function F(o){return o===!0?1:0}return(o,t)=>{const r=T,g=C,u=N,f=j,w=ne,U=S,G=Y,B=R;return k(),h("div",null,[l(B,{name:"authenticated"},{default:n(()=>[l(Z,null,{default:n(()=>[l(r,{icon:H(K),title:"Добавить объявление",back:!0,main:""},null,8,["icon"]),m("div",se,[l(X,{title:"Информация",form:""},{default:n(()=>[l(u,{label:"Группы"},{default:n(()=>[l(g,{modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=a=>d.value=a),"pre-selected-groups":y.value},null,8,["modelValue","pre-selected-groups"])]),_:1}),l(u,{label:"Текст для предварительного просмотра (10-25 символов)"},{default:n(()=>[l(f,{modelValue:e.title,"onUpdate:modelValue":t[1]||(t[1]=a=>e.title=a),placeholder:"Текст",type:"text"},null,8,["modelValue"])]),_:1}),l(u,{label:"Текст для кнопки перехода (10-25 символов)"},{default:n(()=>[l(f,{modelValue:e.text,"onUpdate:modelValue":t[2]||(t[2]=a=>e.text=a),placeholder:"Текст",type:"text"},null,8,["modelValue"])]),_:1}),l(u,{label:"Ссылка для перехода"},{default:n(()=>[l(f,{modelValue:e.action_url,"onUpdate:modelValue":t[3]||(t[3]=a=>e.action_url=a),placeholder:"https://...",type:"text"},null,8,["modelValue"])]),_:1}),l(u,{label:"Дата, с которой будет видно объявление"},{default:n(()=>[l(f,{modelValue:e.date_start,"onUpdate:modelValue":t[4]||(t[4]=a=>e.date_start=a),placeholder:"Дата",type:"date"},null,8,["modelValue"])]),_:1}),l(u,{label:"Дата, в которую объявление будет скрыто"},{default:n(()=>[l(f,{modelValue:e.date_end,"onUpdate:modelValue":t[5]||(t[5]=a=>e.date_end=a),placeholder:"Дата",type:"date"},null,8,["modelValue"])]),_:1}),l(u,{label:"Без полноразмерной картинки "},{default:n(()=>[Q(m("input",{type:"checkbox","onUpdate:modelValue":t[6]||(t[6]=a=>e.redirect=a)},null,512),[[W,e.redirect]])]),_:1}),l(u,{label:"Картинка для отображения в сторис (1080х1920, вертикаль, JPG, PNG, JPEG)"},{default:n(()=>[l(w,{modelValue:s.value,"onUpdate:modelValue":t[7]||(t[7]=a=>s.value=a),label:"Загрузить картинку",color:"success"},null,8,["modelValue"])]),_:1}),l(u,{label:"Миниатюра (500х500 JPG, PNG, JPEG)"},{default:n(()=>[l(w,{modelValue:c.value,"onUpdate:modelValue":t[8]||(t[8]=a=>c.value=a),label:"Загрузить картинку",color:"success"},null,8,["modelValue"])]),_:1})]),_:1})]),m("div",re,[l(G,null,{default:n(()=>[l(U,{color:"info",label:"Отмена",to:"/advertising"}),l(U,{color:"success",label:"Создать объявление",onClick:t[9]||(t[9]=a=>V())})]),_:1})])]),_:1})]),_:1})])}}};export{be as default};
