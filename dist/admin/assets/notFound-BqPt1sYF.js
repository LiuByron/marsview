import{a,u,j as t}from"./index-DMqIlrkt.js";const r=window.antd.Result,c=window.antd.Button;function d(){const e=a(),{projectId:n,env:s}=u(),o=()=>{e(`/project/${s}/${n}/welcome`)};return t.jsx(r,{status:404,title:"无法找到该页面",subTitle:"当前页面路径不存在，请检查路由地址是否正确或页面是否发布",extra:t.jsx(c,{type:"primary",onClick:o,children:"返回首页"})})}export{d as default};
