import{a4 as r}from"./index-DM1-aU-Q.js";function u(e){return r({url:"/user/comment",method:"post",data:e})}function m(e){return r({url:"/user/comment/page",method:"get",params:e})}function o(e){return r({url:"/user/comment/"+e,method:"delete"})}function a(e,t){return r({url:"/user/comment/getByUserId/"+e,method:"get",params:{pageSize:t.pageSize,current:t.current}})}export{u as a,a as g,m as p,o as r};
