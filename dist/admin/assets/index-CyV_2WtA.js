import{j as f}from"./index-DMqIlrkt.js";import{u as w,a as y,g as v,E as C,C as R}from"./createLoading-D0resD77.js";import{u as g,h as b}from"./index-DUu9Owj8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./immer-DZPz5TFl.js";var E=function(e,l){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)l.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(n[t[a]]=e[t[a]]);return n};const p=window.React,j=window.React.useEffect,O=window.React.useImperativeHandle,T=window.React.forwardRef;var x=T(function(e,l){var n=e.chartRef,t=e.style,a=t===void 0?{height:"inherit"}:t,i=e.className,u=e.loading,c=e.loadingTemplate,m=e.errorTemplate,d=E(e,["chartRef","style","className","loading","loadingTemplate","errorTemplate"]),s=w(y,d),r=s.chart,o=s.container;return j(function(){v(n,r.current)},[r.current]),O(l,function(){return{getChart:function(){return r.current}}}),p.createElement(C,{errorTemplate:m},u&&p.createElement(R,{loadingTemplate:c,theme:e.theme}),p.createElement("div",{className:i,style:a,ref:o}))});const S=x,I=window.React.forwardRef,_=window.React.useEffect,$=window.React.useImperativeHandle,h=window.React.useState,N=window.antd.Spin,D=({config:e},l)=>{var s;const[n,t]=h([]),[a,i]=h(!0),[u,c]=h(!0),m=g(r=>r.page.variableData);_(()=>{d({})},[e.api,((s=e.api)==null?void 0:s.sourceType)=="variable"?m:""]);const d=r=>{i(!0),b(e.api,r).then(o=>{(o==null?void 0:o.ret)===0&&(Array.isArray(o.data)?t(o.data):(console.error("[ColumnChart]","data数据格式错误，请检查"),t([]))),i(!1)})};return $(l,()=>({show(){c(!0)},hide(){c(!1)},update:r=>{d(r)}})),u&&f.jsx("div",{style:e.style,children:f.jsx(N,{spinning:a,size:"large",wrapperClassName:"spin-loading",children:f.jsx(S,{...e.props,color:e.props.seriesField?e.props.color:e.props.color[0],data:n})})})},B=I(D);export{B as ColumnChart};
