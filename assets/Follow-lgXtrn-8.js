import{d as z,f as C,r as v,K as y,aM as L,c as r,a as c,i as s,j as n,M as S,N as T,O as F,G as g,m as O,s as V,o as l,k as i,t as k,l as j,aN as D,S as I,E as $,aO as A,q as Q,a2 as q,$ as G,a0 as K,_ as R}from"./index-DM1-aU-Q.js";import"./el-infinite-scroll-l0sNRNKZ.js";/* empty css                 */const W={class:"follow"},H={class:"title"},J=["infinite-scroll-disabled"],P={class:"item"},U={class:"avatar"},X={class:"nickname-time"},Y={class:"nickname"},Z={class:"time"},ee={key:0,class:"loading",style:{display:"flex","justify-content":"center",height:"50px"}},te={key:1,class:"no-more-data",style:{display:"flex","justify-content":"center",height:"50px"}},ae=z({__name:"Follow",setup(se){C(()=>{m()});const d=v(!1),f=y(()=>u.value.current*u.value.pageSize>=p.value),x=y(()=>d.value||f.value),h=()=>{d.value=!0,u.value.current++,m(),d.value=!1},o=v([]),p=v(0),u=v({types:["FOLLOW"],current:1,pageSize:10}),m=async()=>{try{const t=await L(u.value);o.value=o.value.concat(t.data.data.records),p.value=t.data.data.total}catch(t){console.error(t)}},E=t=>{I.confirm("确定删除该通知吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{w(t)}).catch(()=>{$.info("已取消删除")})},w=async t=>{try{(await A(t)).data.code===200&&(o.value=o.value.filter(a=>a.notifyId!==t))}catch(e){console.error(e)}};return(t,e)=>{const a=V,B=Q,N=q,b=G,M=K;return l(),r("div",W,[c("div",H,[s(a,{size:"large",tag:"b"},{default:n(()=>e[0]||(e[0]=[i(" 关注我的 ")])),_:1})]),o.value.length>0?S((l(),r("div",{key:0,class:"list","infinite-scroll-disabled":x.value},[(l(!0),r(T,null,F(o.value,_=>(l(),r("div",P,[c("div",U,[s(B,{size:46,src:_.senderAvatar},null,8,["src"])]),c("div",X,[c("div",Y,[s(a,{tag:"b"},{default:n(()=>[i(k(_.senderNickname),1)]),_:2},1024),s(a,null,{default:n(()=>e[1]||(e[1]=[i(" 关注了我 ")])),_:1})]),c("div",Z,[s(a,{size:"small",type:"info"},{default:n(()=>[i(k(_.createdTime),1)]),_:2},1024),s(N,{underline:!1,icon:j(D),class:"delete",onClick:oe=>E(_.notifyId)},{default:n(()=>e[2]||(e[2]=[i(" 删除该通知 ")])),_:2},1032,["icon","onClick"])])])]))),256)),d.value?(l(),r("div",ee,[s(a,{type:"info"},{default:n(()=>e[3]||(e[3]=[i("正在加载中")])),_:1})])):g("",!0),f.value&&o.value.length>0?(l(),r("div",te,[s(a,{type:"info"},{default:n(()=>e[4]||(e[4]=[i("已经到底了")])),_:1})])):g("",!0)],8,J)),[[M,h]]):(l(),O(b,{key:1,description:"暂时没有收到关注"}))])}}}),re=R(ae,[["__scopeId","data-v-e88b349e"]]);export{re as default};
