import{d as S,f as j,r as c,e as G,g as M,c as y,a as p,i as t,j as l,b as L,s as O,a5 as P,o as _,k as u,m as T,l as $,a6 as J,E as d,a7 as q,x as D,a8 as F,a9 as H,aa as K,ab as Q,ac as W,v as X,_ as Y}from"./index-DM1-aU-Q.js";/* empty css                    */const Z={class:"edit"},ee={class:"title"},ae={class:"content"},te=["src"],oe={style:{width:"100%","text-align":"center"}},le=S({__name:"Edit",setup(se){const v=L();j(()=>{R()});const a=c({userId:Number(v.params.userId),avatar:"",nickname:"",email:"",gender:"男",signature:""}),E=()=>{a.value.avatar!==g.value?h():x()},f=c(),g=c(""),b="http://8.138.191.204:8080/user/upload",w=G(),V={authentication:w.authentication},h=()=>{var o;(o=f.value)==null||o.submit()},I=(o,e)=>{a.value.avatar=o.data,x()},k=(o,e)=>{d.error(o.message)},U=(o,e)=>{e.forEach(n=>n.raw.type!=="image/jpeg"&&n.raw.type!=="image/png"&&n.raw.type!=="image/x-icon"?(d.error("分区图标必须是JPG、PNG或ICO格式!"),!1):n.raw.size/1024/1024>2?(d.error("头像图片大小不能超过 2MB!"),!1):(a.value.avatar=URL.createObjectURL(e[0].raw),!0))},R=async()=>{try{const o=await M(Number(v.params.userId));a.value=o.data.data,g.value=a.value.avatar}catch(o){console.error(o)}},x=async()=>{try{const o=await q(a.value);o.data.code===200?(d.success("修改资料成功"),w.setUserInfo(a.value)):d.error(o.data.msg)}catch(o){console.error(o)}};return(o,e)=>{const n=O,B=D,N=F,r=H,i=K,m=Q,z=W,A=X,C=P;return _(),y("div",Z,[p("div",ee,[t(n,{size:"large",tag:"b"},{default:l(()=>e[4]||(e[4]=[u("资料编辑")])),_:1})]),p("div",ae,[t(C,{model:a.value,"label-width":"auto",size:"large"},{default:l(()=>[t(r,{label:"头像"},{default:l(()=>[t(N,{ref_key:"uploadRef",ref:f,class:"avatar-uploader","show-file-list":!1,headers:V,action:b,"auto-upload":!1,"on-success":I,"on-error":k,"on-change":U},{default:l(()=>[a.value.avatar?(_(),y("img",{key:0,src:a.value.avatar,class:"avatar"},null,8,te)):(_(),T(B,{key:1,class:"avatar-uploader-icon"},{default:l(()=>[t($(J))]),_:1}))]),_:1},512)]),_:1}),t(r,{label:"昵称"},{default:l(()=>[t(i,{modelValue:a.value.nickname,"onUpdate:modelValue":e[0]||(e[0]=s=>a.value.nickname=s),maxlength:"20","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(r,{label:"邮箱"},{default:l(()=>[t(i,{modelValue:a.value.email,"onUpdate:modelValue":e[1]||(e[1]=s=>a.value.email=s)},null,8,["modelValue"])]),_:1}),t(r,{label:"性别"},{default:l(()=>[t(z,{modelValue:a.value.gender,"onUpdate:modelValue":e[2]||(e[2]=s=>a.value.gender=s)},{default:l(()=>[t(m,{value:"男"},{default:l(()=>e[5]||(e[5]=[u("男")])),_:1}),t(m,{value:"女"},{default:l(()=>e[6]||(e[6]=[u("女")])),_:1}),t(m,{value:"保密"},{default:l(()=>e[7]||(e[7]=[u("保密")])),_:1})]),_:1},8,["modelValue"])]),_:1}),t(r,{label:"个性签名"},{default:l(()=>[t(i,{modelValue:a.value.signature,"onUpdate:modelValue":e[3]||(e[3]=s=>a.value.signature=s),autosize:{minRows:5,maxRows:10},resize:"none",type:"textarea",placeholder:"系统默认签名，该用户什么都没有留下~",maxlength:"48","show-word-limit":""},null,8,["modelValue"])]),_:1}),t(r,null,{default:l(()=>[p("div",oe,[t(A,{type:"primary",onClick:E,plain:"",style:{width:"86px",height:"34px"}},{default:l(()=>e[8]||(e[8]=[u("保存")])),_:1})])]),_:1})]),_:1},8,["model"])])])}}}),ue=Y(le,[["__scopeId","data-v-adaa117e"]]);export{ue as default};
