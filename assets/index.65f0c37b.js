import{R as _,j as t,c as d,a as e,a2 as p}from"./index.78e91abf.js";import{C as h}from"./index.c0200148.js";import{d as n}from"./dayjs.min.d4750822.js";import{D as b}from"./DateRangePicker.8da2f798.js";import"./index.52cc9384.js";import"./index.84cb235f.js";/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var D=b;const w="_boardPanelDark_ropmm_1",v="_boardTitle_ropmm_4",u="_boardItemLeft_ropmm_5",C="_boardItemDesc_ropmm_6",k="_trendColorUp_ropmm_7",f="_trendColorDown_ropmm_8",g="_boardItemBottom_ropmm_9",Y="_trendIconUp_ropmm_12",N="_trendIconDown_ropmm_13",B="_boardItem_ropmm_5",L="_boardItemIcon_ropmm_37",M="_trendIcon_ropmm_12";var r={boardPanelDark:w,boardTitle:v,boardItemLeft:u,boardItemDesc:C,trendColorUp:k,trendColorDown:f,boardItemBottom:g,trendIconUp:Y,trendIconDown:N,boardItem:B,boardItemIcon:L,trendIcon:M},x=(o=>(o[o.up=0]="up",o[o.down=1]="down",o))(x||{});const U=({trend:o,trendNum:a})=>e("div",{className:d({[r.trendColorUp]:o===0,[r.trendColorDown]:o===1}),children:[t("div",{className:d(r.trendIcon,{[r.trendIconUp]:o===0,[r.trendIconDown]:o===1}),children:o===0?e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M4.5 8L8 4.5L11.5 8",stroke:"currentColor",strokeWidth:"1.5"}),t("path",{d:"M8 5V12",stroke:"currentColor",strokeWidth:"1.5"})]}):e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("path",{d:"M11.5 8L8 11.5L4.5 8",stroke:"currentColor",strokeWidth:"1.5"}),t("path",{d:"M8 11L8 4",stroke:"currentColor",strokeWidth:"1.5"})]})}),a]}),P=({title:o,count:a,desc:m,trend:s,trendNum:c,Icon:l,dark:i,border:I})=>t(h,{title:t("div",{className:r.boardTitle,children:o}),headerBordered:!0,className:d({[r.boardPanelDark]:i}),bordered:I,footer:e("div",{className:r.boardItemBottom,children:[e("div",{className:r.boardItemDesc,children:[m,t(U,{trend:s,trendNum:c})]}),t(p,{className:r.boardItemIcon})]}),children:e("div",{className:r.boardItem,children:[t("div",{className:r.boardItemLeft,children:a}),t("div",{className:r.boardItemRight,children:l})]})});var $=_.memo(P);const R=[n().subtract(7,"day").format("YYYY-MM-DD"),n().subtract(1,"day").format("YYYY-MM-DD")],A=o=>t(D,{mode:"date",placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"],value:R,format:"YYYY-MM-DD",onChange:a=>o(a)});export{$ as B,x as E,A as L,U as T};