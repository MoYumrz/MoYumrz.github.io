import{d as B,f as A,r as m,K as I,aM as V,c as r,a as i,i as t,j as n,M as w,N as K,O as $,G as h,m as P,s as j,o as c,k as l,t as d,l as g,aN as y,S as D,E as F,aO as R,q as Q,a2 as q,$ as G,a0 as J,_ as H}from"./index-DM1-aU-Q.js";import"./el-infinite-scroll-l0sNRNKZ.js";/* empty css                 */const U={class:"like"},W={class:"title"},X=["infinite-scroll-disabled"],Y={class:"item"},Z={key:0,class:"comment-like-item"},ee={class:"avatar"},te={class:"nickname-content-time"},se={class:"nickname"},ae={class:"time"},ne={key:1,class:"like-item"},le={class:"avatar"},oe={class:"nickname-content-time"},ie={class:"nickname"},ce={class:"time"},re={key:2,class:"favorite-item"},de={class:"avatar"},_e={class:"nickname-content-time"},ue={class:"nickname"},ve={class:"time"},me={key:0,class:"loading",style:{display:"flex","justify-content":"center",height:"50px"}},pe={key:1,class:"no-more-data",style:{display:"flex","justify-content":"center",height:"50px"}},fe=B({__name:"Like",setup(ke){A(()=>{x()});const u=m(!1),E=I(()=>v.value.current*v.value.pageSize>=T.value),O=I(()=>u.value||E.value),M=()=>{u.value=!0,v.value.current++,x(),u.value=!1},_=m([]),T=m(0),v=m({types:["COMMENT_LIKE","POST_LIKE","POST_FAVORITE"],current:1,pageSize:10}),x=async()=>{try{const s=await V(v.value);_.value=_.value.concat(s.data.data.records),T.value=s.data.data.total}catch(s){console.error(s)}},p=s=>{D.confirm("确定删除该通知吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{S(s)}).catch(()=>{F.info("已取消删除")})},S=async s=>{try{(await R(s)).data.code===200&&(_.value=_.value.filter(o=>o.notifyId!==s))}catch(a){console.error(a)}},z=s=>s?JSON.parse(s):"该评论已被删除",C=s=>s||"该文章已被删除";return(s,a)=>{const o=j,f=Q,k=q,L=G,b=J;return c(),r("div",U,[i("div",W,[t(o,{size:"large",tag:"b"},{default:n(()=>a[0]||(a[0]=[l(" 点赞收藏 ")])),_:1})]),_.value.length>0?w((c(),r("div",{key:0,class:"list","infinite-scroll-disabled":O.value},[(c(!0),r(K,null,$(_.value,e=>(c(),r("div",Y,[e.type==="COMMENT_LIKE"?(c(),r("div",Z,[i("div",ee,[t(f,{size:46,src:e.senderAvatar},null,8,["src"])]),i("div",te,[i("div",se,[t(o,{tag:"b"},{default:n(()=>[l(d(e.senderNickname),1)]),_:2},1024),t(o,null,{default:n(()=>[l(" 赞了我的评论【"+d(z(e.content))+"】 ",1)]),_:2},1024)]),i("div",ae,[t(o,{size:"small",type:"info"},{default:n(()=>[l(d(e.createdTime),1)]),_:2},1024),t(k,{underline:!1,icon:g(y),class:"delete",onClick:N=>p(e.notifyId)},{default:n(()=>a[1]||(a[1]=[l(" 删除该通知 ")])),_:2},1032,["icon","onClick"])])])])):e.type==="POST_LIKE"?(c(),r("div",ne,[i("div",le,[t(f,{size:46,src:e.senderAvatar},null,8,["src"])]),i("div",oe,[i("div",ie,[t(o,{tag:"b"},{default:n(()=>[l(d(e.senderNickname),1)]),_:2},1024),t(o,null,{default:n(()=>[l(" 赞了我的文章【"+d(C(e.title))+"】： ",1)]),_:2},1024)]),i("div",ce,[t(o,{size:"small",type:"info"},{default:n(()=>[l(d(e.createdTime),1)]),_:2},1024),t(k,{underline:!1,icon:g(y),class:"delete",onClick:N=>p(e.notifyId)},{default:n(()=>a[2]||(a[2]=[l(" 删除该通知 ")])),_:2},1032,["icon","onClick"])])])])):e.type==="POST_FAVORITE"?(c(),r("div",re,[i("div",de,[t(f,{size:46,src:e.senderAvatar},null,8,["src"])]),i("div",_e,[i("div",ue,[t(o,{tag:"b"},{default:n(()=>[l(d(e.senderNickname),1)]),_:2},1024),t(o,null,{default:n(()=>[l(" 收藏了我的文章【"+d(C(e.title))+"】： ",1)]),_:2},1024)]),i("div",ve,[t(o,{size:"small",type:"info"},{default:n(()=>[l(d(e.createdTime),1)]),_:2},1024),t(k,{underline:!1,icon:g(y),class:"delete",onClick:N=>p(e.notifyId)},{default:n(()=>a[3]||(a[3]=[l(" 删除该通知 ")])),_:2},1032,["icon","onClick"])])])])):h("",!0)]))),256)),u.value?(c(),r("div",me,[t(o,{type:"info"},{default:n(()=>a[4]||(a[4]=[l("正在加载中")])),_:1})])):h("",!0),E.value&&_.value.length>0?(c(),r("div",pe,[t(o,{type:"info"},{default:n(()=>a[5]||(a[5]=[l("已经到底了")])),_:1})])):h("",!0)],8,X)),[[b,M]]):(c(),P(L,{key:1,description:"暂时没有收到点赞和收藏"}))])}}}),Ee=H(fe,[["__scopeId","data-v-1a42322b"]]);export{Ee as default};
