var He=Object.defineProperty,We=Object.defineProperties;var Ue=Object.getOwnPropertyDescriptors;var _e=Object.getOwnPropertySymbols;var Ve=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable;var Se=(e,n,r)=>n in e?He(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,me=(e,n)=>{for(var r in n||(n={}))Ve.call(n,r)&&Se(e,r,n[r]);if(_e)for(var r of _e(n))Ze.call(n,r)&&Se(e,r,n[r]);return e},Oe=(e,n)=>We(e,Ue(n));import{r as s,n as De,o as Ge,p as R,y as Je,Z as Pe,R as H,j as t,W as Ye,a as m,A as Xe,c as W,V as Qe,x as S,$ as et,ac as ne,bn as tt,q as rt,bo as at,aD as Ee,ad as ae,bp as nt,F as Re,f as k,d as P,u as ot}from"./index.34d1656d.js";import{I as lt,f as ke}from"./formModel.da1c7115.js";import{E as ct}from"./error-circle-filled.bf66643a.js";import{F as $}from"./index.06b5a7b7.js";import{S as U}from"./index.0ccb1d89.js";import{C as Fe}from"./common.module.d7e709a7.js";import{S as je}from"./index.ef7ca40c.js";import"./useDebounce.1d1f4390.js";import"./index.d3db1da0.js";import"./delete.bbb46098.js";import"./index.b2e2c0d2.js";import"./DateRangePicker.7e253f63.js";import"./dayjs.min.b6555e23.js";import"./index.a18a5925.js";/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var st={close:!1,maxLine:0,theme:"info"};/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var it=["message","title","operation","theme","icon","close","maxLine","onClose","className","onClosed"];function we(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,a)}return r}function ut(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?we(Object(r),!0).forEach(function(a){S(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):we(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}var dt=200,xe=s.exports.forwardRef(function(e,n){var r=De(),a=r.classPrefix,l=Ge("alert"),o=R(l,2),c=o[0],b=o[1],p=Je({CloseIcon:et,InfoCircleFilledIcon:lt,CheckCircleFilledIcon:ke,ErrorCircleFilledIcon:ct}),K=p.CloseIcon,h=p.InfoCircleFilledIcon,O=p.CheckCircleFilledIcon,I=p.ErrorCircleFilledIcon,E=e.message,j=e.title,F=e.operation,N=e.theme,d=e.icon,f=e.close,y=e.maxLine,C=e.onClose,V=e.className,Z=e.onClosed,G=Z===void 0?ne:Z,J=Pe(e,it),w=H.useState(!1),Y=R(w,2),oe=Y[0],X=Y[1],le=H.useState(!1),L=R(le,2),z=L[0],Q=L[1],ee={success:O,info:h,error:I,warning:I},ce=function(v){X(!0),C==null||C({e:v})},se=function(){Q(!z)},te=function(){return H.isValidElement(d)?d:H.createElement(ee[N]||ee.info)},ie=function(){return+y>0&&Array.isArray(E)?m("div",{className:"".concat(a,"-alert__description"),children:[E.map(function(v,B){return z?t("div",{children:v},B):B<y?t("div",{children:v},B):!0}),+y>0?t("div",{className:"".concat(a,"-alert__collapse"),onClick:se,children:b(z?c.collapseText:c.expandText)}):null]}):t("div",{className:"".concat(a,"-alert__description"),children:E})},M=function(){return t("div",{className:"".concat(a,"-alert__close"),onClick:ce,children:typeof f=="boolean"?t(K,{}):Qe(f)})},A=s.exports.useRef();return t(Ye,{in:!oe,unmountOnExit:!0,classNames:{exitActive:"".concat(a,"-alert--closing")},nodeRef:A,timeout:dt,onExited:G,children:m("div",Oe(me({},ut({ref:Xe(n,A),className:W("".concat(a,"-alert"),"".concat(a,"-alert--").concat(N),V)},J)),{children:[t("div",{className:"".concat(a,"-alert__icon"),children:te()}),m("div",{className:"".concat(a,"-alert__content"),children:[j?t("div",{className:"".concat(a,"-alert__title"),children:j}):null,m("div",{className:"".concat(a,"-alert__message"),children:[ie(),F?t("div",{className:"".concat(a,"-alert__operation"),children:F}):null]})]}),f?M():null]}))})});xe.displayName="Alert";xe.defaultProps=st;/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var mt=xe;/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var pt=`
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important
`,g;function Ie(e){var n,r,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;g||(g=document.createElement("textarea"),document.body.appendChild(g));var o=tt(e),c=o.paddingSize,b=o.borderSize,p=o.boxSizing,K=o.sizingStyle;g.setAttribute("style","".concat(K,";").concat(pt)),g.value=e.value||e.placeholder||"";var h=g.scrollHeight,O={},I=p==="border-box",E=p==="content-box";I?h+=b:E&&(h-=c),g.value="";var j=g.scrollHeight-c;(n=g)===null||n===void 0||(r=n.parentNode)===null||r===void 0||r.removeChild(g),g=null;var F=function(f){var y=j*f;return I&&(y=y+c+b),y};if(a!==null){var N=F(a);h=Math.max(N,h),O.minHeight="".concat(N,"px")}return l!==null&&(h=Math.min(F(l),h)),O.height="".concat(h,"px"),O}/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var vt={allowInputOverMax:!1,autofocus:!1,autosize:!1,placeholder:void 0,readonly:!1};/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var ht=["disabled","maxlength","maxcharacter","className","readonly","autofocus","style","onKeydown","onKeypress","onKeyup","autosize","status","tips","allowInputOverMax"];function Ne(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),r.push.apply(r,a)}return r}function pe(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?Ne(Object(r),!0).forEach(function(a){S(e,a,r[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ne(Object(r)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))})}return e}var ge=s.exports.forwardRef(function(e,n){var r,a,l=e.disabled,o=e.maxlength,c=e.maxcharacter,b=e.className,p=e.readonly,K=e.autofocus,h=e.style,O=e.onKeydown,I=O===void 0?ne:O,E=e.onKeypress,j=E===void 0?ne:E,F=e.onKeyup,N=F===void 0?ne:F,d=e.autosize,f=e.status,y=e.tips,C=e.allowInputOverMax,V=Pe(e,ht),Z=rt(e,"value",e.onChange),G=R(Z,2),J=G[0],w=J===void 0?"":J,Y=G[1],oe=s.exports.useState(!1),X=R(oe,2),le=X[0],L=X[1],z=s.exports.useState(!1),Q=R(z,2),ee=Q[0],ce=Q[1],se=s.exports.useState({}),te=R(se,2),ie=te[0],M=te[1],A=s.exports.useRef(!1),D=typeof c!="undefined",v=s.exports.useRef(),B=s.exports.useRef(),ue=s.exports.useMemo(function(){return at(w)},[w]),de=s.exports.useMemo(function(){var i=Ee(String(w),C?1/0:c);return ae(i)==="object"?i.length:i},[w,C,c]),Be=De(),x=Be.classPrefix,Te=Object.keys(V).filter(function(i){return!/^on[A-Z]/.test(i)}),$e=Te.reduce(function(i,u){return Object.assign(i,S({},u,e[u]))},{}),Ke=Object.keys(V).filter(function(i){return/^on[A-Z]/.test(i)}),Le=Ke.reduce(function(i,u){return Object.assign(i,S({},u,function(_){l||(u==="onFocus"&&L(!0),u==="onBlur"&&L(!1),e[u](_.currentTarget.value,{e:_}))})),i},{}),ze=W("".concat(x,"-textarea__inner"),b,(r={},S(r,"".concat(x,"-is-").concat(f),f),S(r,"".concat(x,"-is-disabled"),l),S(r,"".concat(x,"-is-focused"),le),S(r,"".concat(x,"-resize-none"),ae(d)==="object"),r)),re=s.exports.useCallback(function(){d===!0?M(Ie(v.current)):ae(d)==="object"&&M(Ie(v.current,d==null?void 0:d.minRows,d==null?void 0:d.maxRows))},[d]);s.exports.useEffect(function(){re()},[v==null?void 0:v.current]);function be(i){var u=i.target,_=u.value;if(!C&&!A.current&&(_=nt(_,o),c&&c>=0)){var Ce=Ee(_,c);_=ae(Ce)==="object"&&Ce.characters}Y(_,{e:i})}function Me(){A.current=!0}function qe(i){A.current&&(A.current=!1,be(i))}var ye=function(u,_){return m("span",{className:"".concat(x,"-textarea__limit"),children:[ee&&C?m("span",{className:"".concat(x,"-textarea__tips--warning"),children:[" ",u]}):"".concat(u),"/".concat(_)]})};return s.exports.useEffect(function(){d===!1&&M({height:"auto",minHeight:"auto"})},[re,d]),s.exports.useEffect(function(){re()},[re,w]),s.exports.useEffect(function(){C&&ce(!!(o&&ue>o)||!!(c&&de>c))},[C,de,ue,c,o]),s.exports.useImperativeHandle(n,function(){return{currentElement:B.current,textareaElement:v.current}}),m("div",{style:h,ref:B,className:W("".concat(x,"-textarea"),b),children:[t("textarea",me({},pe(pe(pe({},$e),Le),{},{value:w,style:ie,className:ze,readOnly:p,autoFocus:K,disabled:l,onChange:be,onKeyDown:function(u){return I(u.currentTarget.value,{e:u})},onKeyPress:function(u){return j(u.currentTarget.value,{e:u})},onKeyUp:function(u){return N(u.currentTarget.value,{e:u})},onCompositionStart:Me,onCompositionEnd:qe,ref:v}))),D&&ye(de,c),!D&&o&&ye(ue,o),y?t("div",{className:W("".concat(x,"-textarea__tips"),(a={},S(a,"".concat(x,"-textarea__tips--normal"),!f),S(a,"".concat(x,"-textarea__tips--").concat(f),f),a)),children:y}):null]})});ge.displayName="Textarea";ge.defaultProps=vt;/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var ft=ge;const xt="_alertBox_123fr_1";var gt={alertBox:xt};const{FormItem:ve}=$,{Option:Ae}=U,bt=["1. Dispute requests require approval from Risk & Compliance Department."," 2. Please select the appropriate urgency level with supporting reason."," 3. Contact Risk On-Call at 13300001111 for live support."],yt=[{label:"Incorrect flagging",value:"A"},{label:"Alter KYC Parameters",value:"B"},{label:"Manual Override",value:"C"}],Ct=[{label:"Low",value:"A"},{label:"Medium",value:"B"},{label:"High",value:"C"}];var _t=s.exports.memo(e=>{const{callback:n}=e,r=()=>{n("next")};return m(Re,{children:[t("div",{className:gt.alertBox,children:t(mt,{theme:"error",message:bt,title:"Note:",maxLine:0})}),m($,{labelWidth:100,children:[t(ve,{label:"Reason",name:"name",rules:[{required:!0,message:"Select Reason",type:"error"}],children:t(U,{value:"A",placeholder:"Select Reason",children:yt.map(a=>{const{label:l,value:o}=a;return t(Ae,{label:l,value:o},o)})})}),t(ve,{label:"Urgency",name:"type",rules:[{required:!0,message:"Select Urgency",type:"error"}],children:t(U,{value:"A",placeholder:"Select Urgency",children:Ct.map(a=>{const{label:l,value:o}=a;return t(Ae,{label:l,value:o},o)})})}),t(ve,{children:t(k,{type:"submit",onClick:()=>r(),children:"Submit"})})]})]})});const{FormItem:T}=$;var St=s.exports.memo(e=>{const{current:n,callback:r,steps:a=[]}=e,l=()=>{r("next")},o=()=>{r("back")};return m($,{labelWidth:100,children:[t(T,{label:"Name",name:"invoice",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u53D1\u7968\u62AC\u5934",type:"error"}],children:t(P,{placeholder:"Applicant Name"})}),t(T,{label:"Case ID",name:"taxpayerId",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u7EB3\u7A0E\u4EBA\u8BC6\u522B\u53F7",type:"error"}],children:t(P,{placeholder:"Case ID"})}),t(T,{label:"Justification",name:"address",children:t(P,{placeholder:"Justification"})}),t(T,{label:"Risk Level",name:"bank",children:t(P,{placeholder:"Risk Level"})}),t(T,{label:"Department",name:"bankCount",children:t(P,{placeholder:"Department"})}),m(T,{children:[n>0&&t(k,{style:{margin:"0 8px"},onClick:()=>o(),children:"\u4E0A\u4E00\u6B65"}),n<a.length-1&&t(k,{type:"submit",onClick:()=>l(),children:"\u4E0B\u4E00\u6B65"})]})]})});const{FormItem:q}=$,{Option:Ot}=U,Et=[{label:"me@wisenance.com",value:"0"},{label:"yuu@wisenance.com",value:"1"},{label:"heyy@wisenance.com",value:"2"},{label:"hoho@wisenance.com",value:"3"},{label:"hehe@wisenance.com",value:"4"}];var Ft=s.exports.memo(e=>{const{current:n,callback:r,steps:a}=e,l=()=>{r("next")},o=()=>{r("back")};return m($,{labelWidth:100,children:[t(q,{label:"Dispute Item",name:"receiver",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u8D27\u4EBA",type:"error"}],children:t(P,{placeholder:"Dispute Item"})}),t(q,{label:"Dispute Data",name:"receiverPhone",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u8D27\u4EBA\u624B\u673A\u53F7",type:"error"}],children:t(P,{placeholder:"Dispute Data"})}),t(q,{label:"Analyst",name:"receiverAddress",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6536\u8D27\u5730\u5740",type:"error"}],children:t(U,{value:"3",placeholder:"Analyst",children:Et.map(c=>{const{label:b,value:p}=c;return t(Ot,{label:b,value:p},p)})})}),t(q,{label:"Remarks",name:"taxpayerId",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8BE6\u7EC6\u5730\u5740",type:"error"}],children:t(ft,{placeholder:"Remarks",value:"\u54C8\u54C8\u54C8"})}),m(q,{children:[n>0&&t(k,{style:{margin:"0 8px"},onClick:()=>o(),children:"\u4E0A\u4E00\u6B65"}),n<a.length-1&&t(k,{type:"submit",onClick:()=>l(),children:"\u4E0B\u4E00\u6B65"})]})]})});const wt="_stepFourWrapper_27q4d_1",It="_icon_27q4d_4",Nt="_title_27q4d_8";var he={stepFourWrapper:wt,icon:It,title:Nt},At=s.exports.memo(e=>{const n=ot(),{callback:r}=e,a=()=>{r("first")},l=()=>{n("/detail/advanced")};return t("div",{className:he.stepFourWrapper,children:m("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[t(ke,{className:he.icon}),t("div",{className:he.title,children:"Dispute Submitted"}),t("p",{children:"Ticket will be processed within 24 hours."}),m("div",{className:"tdesign-demo-block-column",style:{marginTop:"20px"},children:[t(k,{theme:"primary",variant:"base",onClick:a,children:"Apply Again"}),t(k,{theme:"default",variant:"base",style:{marginLeft:"15px"},onClick:l,children:"View Progress"})]})]})})});const{StepItem:Dt}=je,fe=[{title:"Submit Dispute",content:"\u7533\u8BF7\u63D0\u4EA4\u5DF2\u4E8E12\u670821\u65E5\u63D0\u4EA4",component:_t},{title:"Verification",content:"\u9884\u8BA11\uFF5E3\u4E2A\u5DE5\u4F5C\u65E5",component:St},{title:"Authorization",content:"\u7535\u5B50\u53D1\u7968\u5F00\u51FA\u540E7\u4E2A\u5DE5\u4F5C\u65E5\u5185\u8054\u7CFB",component:Ft},{title:"Complete",content:"",component:At}];var Vt=s.exports.memo(()=>{const[e,n]=H.useState(0),r=fe[e].component,a=()=>{n(e+1)},l=()=>{n(e-1)},o=c=>{switch(c){case"back":l();break;case"next":a();break;case"first":n(0);break}};return t("div",{className:W(Fe.pageWithPadding,Fe.pageWithColor),children:m(Re,{children:[t(je,{current:e,children:fe.map(c=>t(Dt,{title:c.title},c.title))}),t("div",{style:{marginTop:"52px"},children:t(r,{steps:fe,current:e,callback:o})})]})})});export{Vt as default};
