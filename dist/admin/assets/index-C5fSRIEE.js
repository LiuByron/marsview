import{j as e}from"./index-DMqIlrkt.js";import{u as T,d as n,M as W,l as C}from"./index-DUu9Owj8.js";import{S as H,R as P,U,D as $,i as q}from"./index-DIp_nWSI.js";import{F as z}from"./context-V_gTMpak.js";import"./_commonjsHelpers-BosuxZz1.js";import"./immer-DZPz5TFl.js";import"./PlusOutlined-CrNRbnjj.js";import"./objectSpread2-C4CkhkJ7.js";import"./PlusOutlined-B9smaIDR.js";import"./react-is.production.min-CLjjaI41.js";import"./UploadOutlined-Bwd-S4oa.js";import"./UploadOutlined-B7yj2_9n.js";import"./MinusOutlined-BwcU5aKC.js";import"./MinusOutlined-BZaTcxGD.js";import"./UserOutlined-D3qSKySR.js";const G="_formWrap_t69c4_1",J="_searchBox_t69c4_8",K="_toggleAll_t69c4_11",D={formWrap:G,searchBox:J,toggleAll:K},Q=window.React,X=window.React.forwardRef,Y=window.React.useEffect,Z=window.React.useImperativeHandle,tt=window.React.useRef,f=window.React.useState,u=window.antd.Button,S=window.antd.Form,et=window.antd.Space,st=({id:i,type:ot,config:r,elements:a,onSearch:x,onChange:p,onReset:c},_)=>{var y;const[o]=S.useForm(),h=tt(null),[l,b]=f(!1),[A,w]=f(!1),[V,F]=f(!0),{formData:j,setFormData:v}=T(t=>({formData:t.page.formData,setFormData:t.setFormData}));Y(()=>{setTimeout(()=>{var t;((t=h.current)==null?void 0:t.offsetTop)>=32&&a.length>0?w(!0):w(!1)},500)},[a]);const k=()=>{const t=o.getFieldsValue();x&&x(n(a,t))},E=()=>{o.resetFields(),c&&c();const t=o.getFieldsValue();c&&c(n(a,t))},B=(t,s)=>{const d=n(a,s);p==null||p(d),v({name:i,value:d})};Z(_,()=>({show(){F(!0)},hide(){F(!1)},reset(){o.resetFields()},submit(){o.submit()},init(t={}){const s=n(a,t);o.setFieldsValue(s),v({name:i,value:s})},getFormData(t){var s;return t&&typeof t=="string"?(s=j[i])==null?void 0:s[t]:j[i]}}));const I=t=>{const s=o.getFieldsValue(),d=n(a,s),m=r.events.find(N=>N.eventName===t);C(m==null?void 0:m.actions,d)},O=()=>{b(!l)},{submitText:g,resetText:R}=r.props.form||{},L=r.props.bulkActionList||[],M=q;return V&&e.jsx(z.Provider,{value:o,children:e.jsxs(S,{form:o,layout:"inline",style:r.style,onValuesChange:B,children:[e.jsxs("div",{className:D.formWrap,style:l?{}:{height:32,overflow:"hidden"},children:[e.jsx(W,{elements:a}),e.jsx("div",{ref:h})]}),e.jsxs(et,{style:{alignItems:"baseline"},children:[g?e.jsx(u,{type:"primary",icon:e.jsx(H,{}),onClick:k,children:g}):null,R?e.jsx(u,{type:"default",icon:e.jsx(P,{}),onClick:E,children:R}):null,L.length>0&&e.jsx("div",{className:D.action,children:(y=r.props.bulkActionList)==null?void 0:y.map((t,s)=>e.jsx(u,{type:t.type,danger:t.danger,icon:t.icon?Q.createElement(M[t.icon]):null,onClick:()=>I(t.eventName),children:t.text},`bulkAction${s}`))}),A&&e.jsx(u,{type:"link",icon:l?e.jsx(U,{}):e.jsx($,{}),onClick:O,children:l?"收起":"展开"})]})]})})},jt=X(st);export{jt as SearchForm};
