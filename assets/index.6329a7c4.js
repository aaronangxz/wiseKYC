var J=Object.defineProperty,L=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var D=(e,t,a)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,$=(e,t)=>{for(var a in t||(t={}))U.call(t,a)&&D(e,a,t[a]);if(T)for(var a of T(t))X.call(t,a)&&D(e,a,t[a]);return e},E=(e,t)=>L(e,Q(t));import{r as Y,$ as q,q as Z,p as ee,n as G,c as K,x as i,j as ae,ad as N,ao as te,y as ce,a0 as ne,R as x}from"./index.c8b54c1d.js";/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var re={defaultChecked:void 0,size:"medium"},oe={closable:!1,icon:void 0,shape:"square",size:"medium",theme:"default",variant:"dark"};/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var se=["content","onClick","disabled","children","className","size","onChange"];function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,c)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?I(Object(a),!0).forEach(function(c){i(e,c,a[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach(function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(a,c))})}return e}var w=Y.exports.forwardRef(function(e,t){var a,c=e.content,n=e.onClick,g=n===void 0?N:n,f=e.disabled,b=e.children,o=e.className,u=e.size,O=e.onChange,m=q(e,se),P=Z(e,"checked",O),d=ee(P,2),h=d[0],y=d[1],v=G(),l=v.classPrefix,s="".concat(l,"-tag"),k={large:"".concat(l,"-size-l"),small:"".concat(l,"-size-s")},j=K(s,k[u],o,"".concat(s,"--default"),"".concat(s,"--check"),"".concat(s,"--").concat(u),(a={},i(a,"".concat(s,"--disabled"),f),i(a,"".concat(s,"--checked"),h),a));return ae("span",E($({},S(S({ref:t,className:j},m),{},{onClick:function(p){f||(y(!h),g({e:p}))}})),{children:b||c}))});w.displayName="CheckTag";w.defaultProps=re;/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var le=["theme","size","shape","variant","closable","maxWidth","icon","content","onClick","onClose","className","style","disabled","children"];function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,c)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?W(Object(a),!0).forEach(function(c){i(e,c,a[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(Object(a)).forEach(function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(a,c))})}return e}var z=te(function(e,t){var a,c=e.theme,n=e.size,g=e.shape,f=e.variant,b=e.closable,o=e.maxWidth,u=e.icon,O=e.content,m=e.onClick,P=m===void 0?N:m,d=e.onClose,h=d===void 0?N:d,y=e.className,v=e.style,l=e.disabled,s=e.children,k=q(e,le),j=G(),C=j.classPrefix,p=ce({CloseIcon:ne}),M=p.CloseIcon,r="".concat(C,"-tag"),A={large:"".concat(C,"-size-l"),small:"".concat(C,"-size-s")},V=K(r,"".concat(r,"--").concat(c),"".concat(r,"--").concat(f),"".concat(r,"--").concat(n),"".concat(r,"--").concat(g),(a={},i(a,"".concat(r,"--ellipsis"),!!o),i(a,"".concat(r,"--disabled"),l),a),A[n],y),B=x.createElement(M,{onClick:function(_){l||h({e:_})},className:"".concat(r,"__icon-close")}),F=x.createElement("span",R({ref:t,className:V,onClick:function(_){l||P({e:_})},style:o?R({maxWidth:typeof o=="number"?"".concat(o,"px"):o},v):v},k),u,x.createElement("span",{className:o?"".concat(r,"--text"):void 0},s||O),b&&B);return F},{CheckTag:w});z.displayName="Tag";z.defaultProps=oe;/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var fe=z;export{w as C,fe as T};
