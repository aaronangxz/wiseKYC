import{r as c,I as S,_ as I,j as t,R as y,aW as u,aX as i,a as d,c as k,f}from"./index.c9dd3956.js";import{u as g,E as h,L}from"./index.e85bbc08.js";import{E as a,B as v,T as R}from"./index.7d8ce42a.js";import{M as z,a as A,g as U,S as E,b as D,c as T}from"./MiddleChart.module.0854cd43.js";import{C as p}from"./index.ea38860d.js";import{R as x,T as O}from"./index.bb503879.js";import"./DateRangePicker.be2e0df6.js";import"./index.0eb94466.js";import"./index.ac38e4b8.js";import"./useDebounce.f089a54d.js";import"./formModel.7b98fc82.js";import"./index.4c631de1.js";function C(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,o)}return n}function N(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?C(Object(n),!0).forEach(function(o){I(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var K={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M3.5 1c-.48 0-1 .34-1 .92v12.16c0 .58.52.92 1 .92h9c.48 0 1-.34 1-.92V5.7a1 1 0 00-.3-.71L9.5 1.3a1 1 0 00-.7-.3H3.5zm5 1v4.01h4V14h-9V2h5zm1 .7l2.3 2.31H9.5v-2.3z",fillOpacity:.9}}]},j=c.exports.forwardRef(function(e,r){return c.exports.createElement(S,N(N({},e),{},{id:"file",ref:r,icon:K}))});j.displayName="FileIcon";function _(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),n.push.apply(n,o)}return n}function b(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?_(Object(n),!0).forEach(function(o){I(e,o,n[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))})}return e}var H={tag:"svg",attrs:{fill:"none",viewBox:"0 0 16 16",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M6 1c.53 0 1.02.12 1.46.35l-.63.8a2.24 2.24 0 00-3.08 2.1c0 1.23.98 2.22 2.2 2.25v1A3.25 3.25 0 016 1zM.54 9.44c1.65-.78 3.48-1.21 5.41-1.22v1c-1.77 0-3.44.4-4.95 1.1V12h1.86v1H.5a.5.5 0 01-.5-.5v-2.2c0-.36.2-.7.54-.86z"}},{tag:"path",attrs:{fill:"currentColor",d:"M10 8.31a3.25 3.25 0 110-6.5 3.25 3.25 0 010 6.5zm0-1a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5zM16 11.52c0-.37-.2-.72-.54-.87a12.83 12.83 0 00-10.92 0 .96.96 0 00-.54.87V14c0 .28.22.5.5.5h11a.5.5 0 00.5-.5v-2.48zm-1 .01v1.97H5v-1.97a11.83 11.83 0 0110 0z"}}]},B=c.exports.forwardRef(function(e,r){return c.exports.createElement(S,b(b({},e),{},{id:"usergroup",ref:r,icon:H}))});B.displayName="UsergroupIcon";const W="_iconWrap_4z8yj_1",$="_svgIcon_4z8yj_13",V="_paneLineChart_4z8yj_17",F="_paneBarChart_4z8yj_25";var s={iconWrap:W,svgIcon:$,paneLineChart:V,paneBarChart:F};const G=c.exports.memo(()=>{const e=g(z);return t("div",{className:s.paneBarChart,children:t(h,{option:e,notMerge:!0,lazyUpdate:!0,style:{height:36}})})}),X=c.exports.memo(()=>t("div",{className:s.paneLineChart,children:t(h,{option:A,notMerge:!0,lazyUpdate:!0,style:{height:56}})})),q=[{title:"Toal Applications",count:"28,425",trend:a.up,trendNum:"20.5%",Icon:t(X,{})},{title:"Total Flagged Applications",count:"768",trend:a.down,trendNum:"20.5%",Icon:t(G,{})},{title:"Suspicious Users",count:"1126",trend:a.down,trendNum:"20.5%",Icon:t("div",{className:s.iconWrap,children:t(B,{className:s.svgIcon})})},{title:"Manual Approval",count:"527",trend:a.down,trendNum:"20.5%",Icon:t("div",{className:s.iconWrap,children:t(j,{className:s.svgIcon})})}],J=()=>t(u,{gutter:[16,16],children:q.map((e,r)=>t(i,{xs:6,xl:3,children:t(v,{title:e.title,trend:e.trend,trendNum:e.trendNum,count:e.count,desc:"Since Last Week",Icon:e.Icon,dark:r===0})},e.title))});var Q=y.memo(J);const Y=U(),Z=D(),ee=()=>{const[e,r]=c.exports.useState(Y),n=w=>{const M=U(w);r(M)},o=g(e,{placeholderColor:["legend.textStyle.color","xAxis.axisLabel.color","yAxis.axisLabel.color"],borderColor:["series.0.itemStyle.borderColor","series.1.itemStyle.borderColor"]}),l=g(Z,{placeholderColor:["legend.textStyle.color"],containerColor:["series.0.itemStyle.borderColor"],textColor:["label.color","label.color"]});return d(u,{gutter:[16,16],className:E.middleChartPanel,children:[t(i,{xs:12,xl:9,children:t(p,{title:"Application Rate",subtitle:"(per day)",headerBordered:!0,actions:L(n),children:t(h,{option:o,notMerge:!0,lazyUpdate:!0})})}),t(i,{xs:12,xl:3,children:t(p,{title:"Success Rate",headerBordered:!0,subtitle:"This Week",children:t(h,{option:l,notMerge:!0,lazyUpdate:!0})})})]})};var te=y.memo(ee);const re=[{growUp:2398,productName:"North Korea",count:7059,date:"2022-10-17"},{growUp:2234,productName:"Singapore",count:6437,date:"2021-10-31"},{growUp:123,productName:"Cayman Islands",count:4221,date:"2021-10-22"},{growUp:323,productName:"Nigeria",count:3317,date:"2021-10-01"},{growUp:-333,productName:"Venezuela",count:3015,date:"2021-10-02"},{growUp:-29,productName:"Romania",count:2015,date:"2021-10-07"}],ne=[{growUp:1220,productName:"High Risk Score",count:3015,date:"2021-10-31"},{growUp:-1324,productName:"Suspicious Patterns",count:2015,date:"2021-10-01"},{growUp:6,productName:"High Likelihood of Fraud",count:1815,date:"2021-10-11"},{growUp:-3,productName:"Incomplete Documents",count:1015,date:"2021-10-21"},{growUp:-42,productName:"High Debt",count:445,date:"2021-10-19"},{growUp:-31,productName:"Low Credit Score",count:2015,date:"2021-10-12"}],oe="_rankListPanel_1yaxr_1",ae="_rankIndex_1yaxr_4",ie="_rankIndexTop_1yaxr_16";var m={rankListPanel:oe,rankIndex:ae,rankIndexTop:ie};const P=d(x.Group,{defaultValue:"recent_week",children:[t(x.Button,{value:"recent_week",children:"This Week"}),t(x.Button,{value:"recent_month",children:"Past 3 Months"})]}),ce=[{align:"center",colKey:"index",title:"Rank",width:100,fixed:"left",cell:({rowIndex:e})=>t("span",{className:k(m.rankIndex,{[m.rankIndexTop]:e<3}),children:e+1})},{align:"left",ellipsis:!0,colKey:"productName",title:"Country",width:150},{align:"center",colKey:"growUp",width:100,title:"Change",cell:({row:e})=>t(R,{trend:e.growUp<0?a.down:a.up,trendNum:Math.abs(e.growUp)})},{align:"center",colKey:"count",title:"Total",width:100},{align:"center",colKey:"date",width:140,title:"Latest"},{align:"center",colKey:"operation",fixed:"right",title:"Action",width:100,cell:({row:e})=>t(f,{variant:"text",theme:"primary",onClick:()=>console.log(e),children:"View"})}],le=[{align:"center",colKey:"index",title:"Rank",width:100,fixed:"left",cell:({rowIndex:e})=>t("span",{className:k(m.rankIndex,{[m.rankIndexTop]:e<3}),children:e+1})},{align:"left",ellipsis:!0,colKey:"productName",title:"Reason",width:200},{align:"center",colKey:"growUp",width:100,title:"Change",cell:({row:e})=>t(R,{trend:e.growUp<0?a.down:a.up,trendNum:Math.abs(e.growUp)})},{align:"center",colKey:"count",title:"Total",width:100},{align:"center",colKey:"date",width:140,title:"Latest"},{align:"center",colKey:"operation",title:"Action",fixed:"right",width:80,cell:({row:e})=>t(f,{variant:"text",theme:"primary",onClick:()=>console.log(e),children:"View"})}],se=()=>d(u,{gutter:[16,16],className:m.rankListPanel,children:[t(i,{xs:12,xl:6,span:12,children:t(p,{title:"Highest Risk",subtitle:"By country",actions:P,headerBordered:!0,children:t(O,{columns:ce,rowKey:"productName",size:"medium",data:re})})}),t(i,{xs:12,xl:6,span:12,children:t(p,{title:"Most Common Risk",actions:P,headerBordered:!0,children:t(O,{columns:le,rowKey:"productName",size:"medium",data:ne})})})]});var de=y.memo(se);const pe="_overviewPanel_cd6c7_1";var ue={overviewPanel:pe};const he=T(),me=()=>{const[e,r]=c.exports.useState(he),n=l=>{const w=T(l);r(w)},o=g(e,{placeholderColor:["legend.textStyle.color","xAxis.axisLabel.color","yAxis.axisLabel.color"]});return t("div",{className:ue.overviewPanel,children:d(u,{children:[t(i,{xs:12,xl:9,span:12,children:t(p,{title:"  Overall Detections ",subtitle:"(case)",actions:L(n),headerBordered:!0,children:t(h,{option:o,notMerge:!0,lazyUpdate:!0,style:{height:351}})})}),t(i,{xs:12,xl:3,span:12,children:t(p,{actions:t(f,{children:"Export"}),headerBordered:!0,children:d(u,{children:[t(i,{xl:12,xs:6,span:12,children:t(v,{title:"High Risk",count:"1726",trend:a.down,trendNum:"20.3%",desc:"Since Last Week",border:!1})}),t(i,{xl:12,xs:6,span:12,children:t(v,{title:"Medium Risk",count:"1126",trend:a.down,trendNum:"20.5%",desc:"Since Last Week",border:!1})})]})})})]})})};var ge=y.memo(me);const ye=()=>d("div",{style:{overflowX:"hidden"},children:[t(Q,{}),t(te,{}),t(de,{}),t(ge,{})]});var ke=c.exports.memo(ye);export{ke as default};
