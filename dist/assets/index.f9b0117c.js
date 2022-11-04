import{r as aa,n as ea,aO as ra,c as s,x as r,j as d,C as da,a as i}from"./index.c8b54c1d.js";/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var sa={bordered:!0,headerBordered:!1,hoverShadow:!1,loading:!1,shadow:!1,size:"medium",theme:"normal"};/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var w=aa.exports.forwardRef(function(a,P){var c,o,l=a.actions,v=a.avatar,S=a.bordered,u=a.children,H=a.className,t=a.cover,h=a.description,f=a.footer,N=a.header,j=a.headerBordered,z=a.hoverShadow,A=a.loading,B=a.shadow,D=a.size,F=a.style,m=a.subtitle,_=a.title,E=a.theme,C=a.status,I=ea(),e=I.classPrefix,L=ra(),n=E==="poster2",g=s("".concat(e,"-card"),H,(c={},r(c,L.SIZE.small,D==="small"),r(c,"".concat(e,"-card--bordered"),S),r(c,"".concat(e,"-card--shadow"),B),r(c,"".concat(e,"-card--shadow-hover"),z),c)),x=N||_||m||h||v||l&&!n||C&&n,y=s((o={},r(o,"".concat(e,"-card__header"),x),r(o,"".concat(e,"-card__title--bordered"),j),o)),O=s(r({},"".concat(e,"-card__title"),_)),R=s(r({},"".concat(e,"-card__subtitle"),m)),b=s(r({},"".concat(e,"-card__actions"),l)),T=s(r({},"".concat(e,"-card__footer"),f)),Z=s(r({},"".concat(e,"-card__cover"),t)),$=s(r({},"".concat(e,"-card__avatar"),v)),k=s(r({},"".concat(e,"-card__body"),u)),q=s(r({},"".concat(e,"-card__description"),h)),G=_?d("span",{className:O,children:_}):null,J=m?d("span",{className:R,children:m}):null,K=h?d("p",{className:q,children:h}):null,M=v&&d("div",{className:$,children:v}),Q=l&&!n&&d("div",{className:b,children:l}),U=l&&n&&d("div",{className:b,children:l}),V=C&&n&&d("div",{className:b,children:C}),W=function(){return N?d("div",{className:y,children:N}):i("div",{className:y,children:[i("div",{className:"".concat(e,"-card__header-wrapper"),children:[M,i("div",{children:[G,J,K]})]}),Q,V]})},X=t?d("div",{className:Z,children:typeof t=="string"?d("img",{src:t,alt:""}):t}):null,Y=u&&d("div",{className:k,children:u}),p=f&&i("div",{className:T,children:[d("div",{className:"".concat(e,"-card__footer-wrapper"),children:f}),U]});return A?d(da,{children:d("div",{className:g})}):i("div",{ref:P,className:g,style:F,children:[x?W():null,X,Y,p]})});w.displayName="Card";w.defaultProps=sa;/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var ta=w;export{ta as C};
