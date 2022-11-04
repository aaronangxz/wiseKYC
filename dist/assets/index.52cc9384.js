var H=Object.defineProperty,J=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var D=(e,c,a)=>c in e?H(e,c,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[c]=a,$=(e,c)=>{for(var a in c||(c={}))Q.call(c,a)&&D(e,a,c[a]);if(T)for(var a of T(c))U.call(c,a)&&D(e,a,c[a]);return e},E=(e,c)=>J(e,L(c));import{r as X,Z as q,q as Y,p as ee,n as G,c as K,x as i,j as ae,ac as N,an as ce,y as te,$ as ne,R as x}from"./index.78e91abf.js";/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var re={defaultChecked:void 0,size:"medium"},oe={closable:!1,icon:void 0,shape:"square",size:"medium",theme:"default",variant:"dark"};/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var se=["content","onClick","disabled","children","className","size","onChange"];function I(e,c){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);c&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,t)}return a}function S(e){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?I(Object(a),!0).forEach(function(t){i(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var w=X.exports.forwardRef(function(e,c){var a,t=e.content,n=e.onClick,g=n===void 0?N:n,f=e.disabled,b=e.children,o=e.className,u=e.size,O=e.onChange,m=q(e,se),P=Y(e,"checked",O),d=ee(P,2),h=d[0],y=d[1],v=G(),l=v.classPrefix,s="".concat(l,"-tag"),k={large:"".concat(l,"-size-l"),small:"".concat(l,"-size-s")},j=K(s,k[u],o,"".concat(s,"--default"),"".concat(s,"--check"),"".concat(s,"--").concat(u),(a={},i(a,"".concat(s,"--disabled"),f),i(a,"".concat(s,"--checked"),h),a));return ae("span",E($({},S(S({ref:c,className:j},m),{},{onClick:function(p){f||(y(!h),g({e:p}))}})),{children:b||t}))});w.displayName="CheckTag";w.defaultProps=re;/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var le=["theme","size","shape","variant","closable","maxWidth","icon","content","onClick","onClose","className","style","disabled","children"];function W(e,c){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);c&&(t=t.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),a.push.apply(a,t)}return a}function R(e){for(var c=1;c<arguments.length;c++){var a=arguments[c]!=null?arguments[c]:{};c%2?W(Object(a),!0).forEach(function(t){i(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var z=ce(function(e,c){var a,t=e.theme,n=e.size,g=e.shape,f=e.variant,b=e.closable,o=e.maxWidth,u=e.icon,O=e.content,m=e.onClick,P=m===void 0?N:m,d=e.onClose,h=d===void 0?N:d,y=e.className,v=e.style,l=e.disabled,s=e.children,k=q(e,le),j=G(),C=j.classPrefix,p=te({CloseIcon:ne}),M=p.CloseIcon,r="".concat(C,"-tag"),A={large:"".concat(C,"-size-l"),small:"".concat(C,"-size-s")},V=K(r,"".concat(r,"--").concat(t),"".concat(r,"--").concat(f),"".concat(r,"--").concat(n),"".concat(r,"--").concat(g),(a={},i(a,"".concat(r,"--ellipsis"),!!o),i(a,"".concat(r,"--disabled"),l),a),A[n],y),Z=x.createElement(M,{onClick:function(_){l||h({e:_})},className:"".concat(r,"__icon-close")}),B=x.createElement("span",R({ref:c,className:V,onClick:function(_){l||P({e:_})},style:o?R({maxWidth:typeof o=="number"?"".concat(o,"px"):o},v):v},k),u,x.createElement("span",{className:o?"".concat(r,"--text"):void 0},s||O),b&&Z);return B},{CheckTag:w});z.displayName="Tag";z.defaultProps=oe;/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var fe=z;export{w as C,fe as T};
