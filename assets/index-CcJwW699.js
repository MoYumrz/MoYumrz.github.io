import{_ as x,o as p,c as v,a as n,d as C,u as M,b as V,e as B,f as H,w as D,r as k,g as R,h as U,E as y,i as e,j as t,k as d,t as c,l as a,m as b,n as G,p as T,q as j,s as E,v as q,x as F,y as L,z as J,A as O,B as P,C as K,D as Q,F as W,G as X,H as Y,I as Z,J as e1}from"./index-DM1-aU-Q.js";import{F as t1}from"./Fan-CzI0pRrR.js";const s1={},n1={t:"1733064839414",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"14051",width:"200",height:"200"};function a1(h,l){return p(),v("svg",n1,l[0]||(l[0]=[n("path",{d:"M847.644444 1024H150.755556c-48.355556-5.688889-88.177778-42.666667-93.866667-93.866667V93.866667C62.577778 45.511111 102.4 5.688889 150.755556 0h466.488888l327.111112 327.111111v605.866667c-8.533333 48.355556-48.355556 85.333333-96.711112 91.022222z m0-696.888889h-184.888888c-25.6-2.844444-45.511111-22.755556-45.511112-45.511111V93.866667H196.266667c-25.6-2.844444-45.511111 17.066667-45.511111 42.666666v748.088889c5.688889 22.755556 22.755556 42.666667 45.511111 45.511111h605.866666c25.6-2.844444 45.511111-22.755556 45.511111-45.511111V327.111111z m-139.377777 512H241.777778c-25.6 0-45.511111-19.911111-45.511111-45.511111 0-25.6 19.911111-45.511111 45.511111-45.511111h466.488889c25.6 0 45.511111 19.911111 45.511111 45.511111 0 22.755556-19.911111 45.511111-45.511111 45.511111zM241.777778 557.511111h233.244444c25.6 0 45.511111 19.911111 45.511111 45.511111 0 25.6-19.911111 45.511111-45.511111 45.511111H241.777778c-25.6 0-45.511111-19.911111-45.511111-45.511111 0-22.755556 19.911111-45.511111 45.511111-45.511111z m466.488889-91.022222H241.777778c-25.6 0-45.511111-19.911111-45.511111-45.511111 0-25.6 19.911111-45.511111 45.511111-45.511111h466.488889c25.6 0 45.511111 19.911111 45.511111 45.511111 0 22.755556-19.911111 45.511111-45.511111 45.511111z",fill:"#3f9eff","p-id":"14052"},null,-1)]))}const o1=x(s1,[["render",a1]]),l1={},r1={t:"1735226533688",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"16294",width:"200",height:"200"};function u1(h,l){return p(),v("svg",r1,l[0]||(l[0]=[n("path",{d:"M545.18272 342.68672a234.21952 234.21952 0 1 0-275.79904 231.37792v300.0832a35.13344 35.13344 0 1 0 70.26688 0V576a235.13088 235.13088 0 0 0 205.53216-233.31328zM310.9632 507.29984a164.61824 164.61824 0 1 1 163.95264-164.61312 164.46976 164.46976 0 0 1-163.95264 164.61312z m434.47808-59.08992V165.14048a35.13344 35.13344 0 1 0-70.26688 0v284.48256a234.24512 234.24512 0 1 0 70.26688-1.41312z m-30.44864 397.72672a164.61312 164.61312 0 1 1 163.95776-164.61824 164.46464 164.46464 0 0 1-163.95776 164.61312z",fill:"#4A4A4A","p-id":"16295"},null,-1),n("path",{d:"M502.2464 724.51072h-395.4176a35.28704 35.28704 0 0 1 0-70.56896h395.4176a35.28704 35.28704 0 0 1 0 70.56896z m420.01408-328.13568a34.95424 34.95424 0 0 1-24.42752-9.92256L710.10816 204.2368l-172.3904 174.08a35.21536 35.21536 0 1 1-49.85344-49.75104l187.008-188.84096a49.3312 49.3312 0 0 1 69.21728-0.67584l202.5984 196.67456a35.38432 35.38432 0 0 1 0.83968 49.88928 34.98496 34.98496 0 0 1-25.2672 10.76224z",fill:"#FF7214","p-id":"16296"},null,-1)]))}const d1=x(l1,[["render",u1]]),i1={class:"user-info"},c1={class:"avatar"},_1={class:"info"},f1={class:"name-follow-edit"},p1={key:0},m1={key:1},v1={class:"userid"},x1={class:"signature"},h1={class:"gender"},g1={class:"data"},I1={class:"fans"},y1={class:"subscribe"},w1={class:"like"},z1=C({__name:"UserInfo",setup(h){const l=M(),g=V(),o=B();H(()=>{I().then(()=>{o.authentication&&_()})}),D(()=>g.params.userId,()=>{I().then(()=>{o.authentication&&_()})});const r=k({avatar:"",email:"",fanCount:0,followCount:0,gender:"",likesCount:0,nickname:"",signature:"",userId:0,username:""}),I=async()=>{try{const u=await R(Number(g.params.userId));r.value=u.data.data}catch(u){l.push("/404"),console.error(u)}},i=k(!1),w=async()=>{try{const s=(await G(Number(r.value.userId))).data;s.code==200?(i.value=!0,y.success("关注成功")):y.error(s.msg)}catch(u){console.error(u)}},m=async()=>{try{const s=(await T(Number(r.value.userId))).data;s.code==200?(i.value=!1,y.success("取消关注")):y.error(s.msg)}catch(u){console.error(u)}},_=async()=>{try{const s=(await U(Number(r.value.userId))).data;s.code==200?i.value=s.data:y.error(s.msg)}catch(u){console.error(u)}};return(u,s)=>{const N=j,f=E,z=q,$=F,S=L;return p(),v("div",i1,[n("div",c1,[e(N,{size:120,src:r.value.avatar},null,8,["src"])]),n("div",_1,[n("div",f1,[e(f,{size:"large",tag:"b",style:{color:"#333"}},{default:t(()=>[d(c(r.value.nickname),1)]),_:1}),r.value.userId!==a(o).userInfo.userId?(p(),v("div",p1,[i.value?(p(),b(z,{key:1,type:"default",plain:"",onClick:s[1]||(s[1]=A=>m().then(()=>I())),style:{width:"86px",height:"34px"}},{default:t(()=>s[3]||(s[3]=[d("已关注")])),_:1})):(p(),b(z,{key:0,type:"primary",plain:"",onClick:s[0]||(s[0]=A=>w().then(()=>I())),style:{width:"86px",height:"34px"}},{default:t(()=>s[2]||(s[2]=[d("关注")])),_:1}))])):(p(),v("div",m1,[e(z,{type:"primary",plain:"",style:{width:"86px",height:"34px"}},{default:t(()=>s[4]||(s[4]=[d("编辑")])),_:1})]))]),n("div",v1,[e(f,{size:"small",type:"info"},{default:t(()=>s[5]||(s[5]=[d("用户ID:")])),_:1}),e(f,{size:"small",type:"info",style:{"margin-left":"8px"}},{default:t(()=>[d(c(r.value.userId),1)]),_:1})]),n("div",x1,[e($,null,{default:t(()=>[e(o1)]),_:1}),e(f,{style:{"margin-left":"8px"}},{default:t(()=>[d(c(r.value.signature?r.value.signature:"系统默认签名，该用户什么都没有留下~"),1)]),_:1})]),n("div",h1,[e($,null,{default:t(()=>[e(d1)]),_:1}),e(f,{style:{"margin-left":"8px"}},{default:t(()=>[d(c(r.value.gender),1)]),_:1})]),e(S,{style:{"margin-top":"20px","margin-bottom":"20px"}}),n("div",g1,[n("div",I1,[e(f,{style:{color:"#333","font-size":"20px"}},{default:t(()=>[d(c(r.value.fanCount),1)]),_:1}),e(f,{type:"info",style:{"margin-left":"8px"}},{default:t(()=>s[6]||(s[6]=[d("粉丝")])),_:1})]),n("div",y1,[e(f,{style:{color:"#333","font-size":"20px"}},{default:t(()=>[d(c(r.value.followCount),1)]),_:1}),e(f,{type:"info",style:{"margin-left":"8px"}},{default:t(()=>s[7]||(s[7]=[d("关注")])),_:1})]),n("div",w1,[e(f,{style:{color:"#333","font-size":"20px"}},{default:t(()=>[d(c(r.value.likesCount),1)]),_:1}),e(f,{type:"info",style:{"margin-left":"8px"}},{default:t(()=>s[8]||(s[8]=[d("点赞")])),_:1})])])])])}}}),C1=x(z1,[["__scopeId","data-v-4bae29b5"]]),$1={},k1={t:"1736426050162",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2445",width:"200",height:"200"};function b1(h,l){return p(),v("svg",k1,l[0]||(l[0]=[n("path",{d:"M529.066667 910.933333c-10.666667 0-21.333333-4.266667-29.866667-12.8L172.8 571.733333c-93.866667-93.866667-93.866667-247.466667 0-343.466666 93.866667-93.866667 247.466667-93.866667 343.466667 0l12.8 12.8 12.8-12.8c93.866667-93.866667 247.466667-93.866667 343.466666 0 44.8 44.8 70.4 106.666667 70.4 170.666666s-25.6 125.866667-70.4 170.666667L558.933333 898.133333c-8.533333 8.533333-19.2 12.8-29.866666 12.8z m-183.466667-667.733333c-42.666667 0-81.066667 17.066667-110.933333 46.933333-61.866667 61.866667-61.866667 160 0 221.866667l294.4 294.4L825.6 512c29.866667-29.866667 46.933333-68.266667 46.933333-110.933333s-17.066667-81.066667-46.933333-110.933334c-29.866667-29.866667-68.266667-46.933333-110.933333-46.933333s-81.066667 17.066667-110.933334 46.933333l-42.666666 42.666667c-17.066667 17.066667-42.666667 17.066667-59.733334 0l-42.666666-42.666667c-32-29.866667-72.533333-46.933333-113.066667-46.933333z","p-id":"2446"},null,-1)]))}const M1=x($1,[["render",b1]]),V1={class:"menu"},B1={class:"menu-title"},E1={key:0},F1=C({__name:"Menu",setup(h){const l=B(),g=M(),o=V(),r=()=>{l.logout(),g.go(0)};return(I,i)=>{const w=E,m=F,_=Y,u=L,s=Z;return p(),v("div",V1,[n("div",B1,[e(w,{size:"large",tag:"b"},{default:t(()=>i[0]||(i[0]=[d(" 个人中心 ")])),_:1})]),e(s,{"default-active":a(o).fullPath,class:"el-menu-vertical-demo",router:""},{default:t(()=>[e(_,{index:"/accountCenter/postList/"+a(o).params.userId},{default:t(()=>[e(m,null,{default:t(()=>[e(a(J))]),_:1}),n("span",null,c(a(l).userInfo.userId==a(o).params.userId?"我的发帖":"发帖"),1)]),_:1},8,["index"]),e(_,{index:"/accountCenter/commentList/"+a(o).params.userId},{default:t(()=>[e(m,null,{default:t(()=>[e(a(O))]),_:1}),n("span",null,c(a(l).userInfo.userId==a(o).params.userId?"我的评论":"评论"),1)]),_:1},8,["index"]),e(u,{style:{margin:"0"}}),e(_,{index:"/accountCenter/favoriteList/"+a(o).params.userId},{default:t(()=>[e(m,null,{default:t(()=>[e(a(P))]),_:1}),n("span",null,c(a(l).userInfo.userId==a(o).params.userId?"我的收藏":"收藏"),1)]),_:1},8,["index"]),e(_,{index:"/accountCenter/fanList/"+a(o).params.userId},{default:t(()=>[e(m,null,{default:t(()=>[e(t1)]),_:1}),n("span",null,c(a(l).userInfo.userId==a(o).params.userId?"我的粉丝":"粉丝"),1)]),_:1},8,["index"]),e(_,{index:"/accountCenter/followList/"+a(o).params.userId},{default:t(()=>[e(m,null,{default:t(()=>[e(M1)]),_:1}),n("span",null,c(a(l).userInfo.userId==a(o).params.userId?"我的关注":"关注"),1)]),_:1},8,["index"]),a(l).userInfo.userId==a(o).params.userId?(p(),v("div",E1,[e(u,{style:{margin:"0"}}),e(_,{index:"/accountCenter/views/"+a(o).params.userId},{default:t(()=>[e(m,null,{default:t(()=>[e(a(K))]),_:1}),i[1]||(i[1]=n("span",null,"浏览记录",-1))]),_:1},8,["index"]),e(_,{index:"/accountCenter/edit/"+a(o).params.userId},{default:t(()=>[e(m,null,{default:t(()=>[e(a(Q))]),_:1}),i[2]||(i[2]=n("span",null,"资料编辑",-1))]),_:1},8,["index"]),e(_,{onClick:r},{default:t(()=>[e(m,null,{default:t(()=>[e(a(W))]),_:1}),i[3]||(i[3]=n("span",null,"退出登录",-1))]),_:1})])):X("",!0)]),_:1},8,["default-active"])])}}}),L1=x(F1,[["__scopeId","data-v-e1861c11"]]),N1={class:"account-center"},S1={class:"container"},A1={class:"user-info"},H1={class:"menu-content"},D1={class:"content"},R1=C({__name:"index",setup(h){return(l,g)=>{const o=e1("RouterView");return p(),v("div",N1,[n("div",S1,[n("div",A1,[e(C1)]),n("div",H1,[n("div",null,[e(L1)]),n("div",D1,[e(o)])])])])}}}),T1=x(R1,[["__scopeId","data-v-b2157f63"]]);export{T1 as default};
