import{r as T,n as N,j as c,c as h,a as g,ao as J,o as K,p as O,ab as Q,R as s,x as n,C as U,ad as S}from"./index.c8b54c1d.js";/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var M=T.exports.forwardRef(function(e,v){var i=e.children,t=e.className,o=e.style,r=e.action,a=e.content,d=N(),m=d.classPrefix,_=r&&c("ul",{className:"".concat(m,"-list-item__action"),children:r});return c("li",{ref:v,className:h("".concat(m,"-list-item"),t),style:o,children:g("div",{className:"".concat(m,"-list-item-main"),children:[i||a,_]})})});M.displayName="ListItem";/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var z=T.exports.forwardRef(function(e,v){var i=e.title,t=e.image,o=e.description,r=N(),a=r.classPrefix,d=function(){return t&&typeof t=="string"?c("div",{className:"".concat(a,"-list-item__meta-avatar"),children:c("img",{src:t,alt:""})}):c("div",{className:"".concat(a,"-list-item__meta-avatar"),children:t})};return g("div",{ref:v,className:"".concat(a,"-list-item__meta"),children:[t&&d(),g("div",{className:"".concat(a,"-list-item__meta-content"),children:[c("h3",{className:"".concat(a,"-list-item__meta-title"),children:i}),c("div",{className:"".concat(a,"-list-item__meta-description"),children:c("p",{children:o})})]})]})});z.displayName="ListItemMeta";/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var V={layout:"horizontal",size:"medium",split:!1,stripe:!1};/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var L=J(function(e,v){var i,t,o=e.header,r=e.footer,a=e.asyncLoading,d=e.size,m=e.split,_=e.stripe,I=e.layout,H=e.children,j=e.className,y=e.onLoadMore,k=y===void 0?S:y,x=e.onScroll,w=x===void 0?S:x,A=e.style,$=N(),l=$.classPrefix,B=K("list"),E=O(B,2),P=E[0],C=E[1],b=function(f){a==="load-more"&&k({e:f})},D=function(f){var u=f.currentTarget,R=u.scrollTop,q=u.offsetHeight,F=u.scrollHeight,G=F-R-q;w({e:f,scrollTop:R,scrollBottom:G})},W=Q(a)?s.createElement("div",{className:h("".concat(l,"-list__load"),(i={},n(i,"".concat(l,"-list__load--loading"),a==="loading"),n(i,"".concat(l,"-list__load--load-more"),a==="load-more"),i)),onClick:b},a==="loading"&&s.createElement("div",null,s.createElement(U,{loading:!0}),s.createElement("span",null,C(P.loadingText))),a==="load-more"&&s.createElement("span",null,C(P.loadingMoreText))):a;return s.createElement("div",{ref:v,style:A,onScroll:D,className:h("".concat(l,"-list"),j,(t={},n(t,"".concat(l,"-list--split"),m),n(t,"".concat(l,"-list--stripe"),_),n(t,"".concat(l,"-list--vertical-action"),I==="vertical"),n(t,"".concat(l,"-size-s"),d==="small"),n(t,"".concat(l,"-size-l"),d==="large"),t))},o&&s.createElement("div",{className:"".concat(l,"-list__header")},o),s.createElement("ul",{className:"".concat(l,"-list__inner")},H),a&&W,r&&s.createElement("div",{className:"".concat(l,"-list__footer")},r))},{ListItem:M,ListItemMeta:z});L.displayName="List";L.defaultProps=V;/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var Y=L;export{Y as L};
