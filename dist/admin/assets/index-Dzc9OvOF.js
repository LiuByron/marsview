import{j as v}from"./index-DMqIlrkt.js";import{u as D,i as F,h as j,b as w}from"./index-DUu9Owj8.js";import{F as C}from"./context-V_gTMpak.js";import"./_commonjsHelpers-BosuxZz1.js";import"./immer-DZPz5TFl.js";const E=window.antd.Form,V=window.antd.Select,W=window.React.forwardRef,A=window.React.useContext,p=window.React.useEffect,H=window.React.useImperativeHandle,d=window.React.useState,N=({config:e,onChange:n},h)=>{var b;const[x,i]=d([]),o=A(C),[y,u]=d(!0),[R,r]=d(!1),S=D(a=>a.page.variableData);p(()=>{var s;const a=(s=e.props.formItem)==null?void 0:s.name,t=e.props.defaultValue;a&&!F(t)&&(o==null||o.setFieldValue(a,t))},[e.props.defaultValue]),p(()=>{r(e.props.formWrap.disabled||!1)},[e.props.formWrap.disabled]),p(()=>{m({})},[e.api,((b=e.api)==null?void 0:b.sourceType)=="variable"?S:""]);const m=a=>{j(e.api,a).then(t=>{if((t==null?void 0:t.ret)===0)if(!Array.isArray(t.data))console.error("[select]","data数据格式错误，请检查"),i([]);else{let s=[];e.props.field.label==="label"&&e.props.field.value==="value"?(s=t.data,(typeof t.data[0]=="string"||typeof t.data[0]=="number")&&(s=t.data.map(l=>({label:l,value:l})))):s=t.data.map(l=>{const c=l[e.props.field.label||"label"],f=l[e.props.field.value||"value"];return{label:w(c)?c:"-",value:w(f)?f:""}}),i(s)}})};H(h,()=>({show(){u(!0)},hide(){u(!1)},enable(){r(!1)},disable(){r(!0)},update:a=>{m(a)}}));const I=a=>{n&&n({[e.props.formItem.name]:a})};return y&&v.jsx(E.Item,{...e.props.formItem,children:v.jsx(V,{...e.props.formWrap,disabled:R,variant:e.props.formWrap.variant||void 0,options:x,style:e.style,onChange:a=>I(a)})})},k=W(N);export{k as Select};
