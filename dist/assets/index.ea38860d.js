import{r as aa,n as ea,aN as ra,c as s,x as r,j as d,L as da,a as i}from"./index.c9dd3956.js";/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var sa={bordered:!0,headerBordered:!1,hoverShadow:!1,loading:!1,shadow:!1,size:"medium",theme:"normal"};/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var w=aa.exports.forwardRef(function(a,P){var c,o,l=a.actions,v=a.avatar,S=a.bordered,u=a.children,H=a.className,t=a.cover,h=a.description,f=a.footer,N=a.header,j=a.headerBordered,z=a.hoverShadow,A=a.loading,B=a.shadow,D=a.size,F=a.style,m=a.subtitle,_=a.title,L=a.theme,C=a.status,E=ea(),e=E.classPrefix,I=ra(),n=L==="poster2",g=s("".concat(e,"-card"),H,(c={},r(c,I.SIZE.small,D==="small"),r(c,"".concat(e,"-card--bordered"),S),r(c,"".concat(e,"-card--shadow"),B),r(c,"".concat(e,"-card--shadow-hover"),z),c)),x=N||_||m||h||v||l&&!n||C&&n,y=s((o={},r(o,"".concat(e,"-card__header"),x),r(o,"".concat(e,"-card__title--bordered"),j),o)),R=s(r({},"".concat(e,"-card__title"),_)),T=s(r({},"".concat(e,"-card__subtitle"),m)),b=s(r({},"".concat(e,"-card__actions"),l)),Z=s(r({},"".concat(e,"-card__footer"),f)),$=s(r({},"".concat(e,"-card__cover"),t)),k=s(r({},"".concat(e,"-card__avatar"),v)),q=s(r({},"".concat(e,"-card__body"),u)),G=s(r({},"".concat(e,"-card__description"),h)),J=_?d("span",{className:R,children:_}):null,K=m?d("span",{className:T,children:m}):null,M=h?d("p",{className:G,children:h}):null,O=v&&d("div",{className:k,children:v}),Q=l&&!n&&d("div",{className:b,children:l}),U=l&&n&&d("div",{className:b,children:l}),V=C&&n&&d("div",{className:b,children:C}),W=function(){return N?d("div",{className:y,children:N}):i("div",{className:y,children:[i("div",{className:"".concat(e,"-card__header-wrapper"),children:[O,i("div",{children:[J,K,M]})]}),Q,V]})},X=t?d("div",{className:$,children:typeof t=="string"?d("img",{src:t,alt:""}):t}):null,Y=u&&d("div",{className:q,children:u}),p=f&&i("div",{className:Z,children:[d("div",{className:"".concat(e,"-card__footer-wrapper"),children:f}),U]});return A?d(da,{children:d("div",{className:g})}):i("div",{ref:P,className:g,style:F,children:[x?W():null,X,Y,p]})});w.displayName="Card";w.defaultProps=sa;/**
 * tdesign v0.42.4
 * (c) 2022 tdesign
 * @license MIT
 */var ta=w;export{ta as C};
