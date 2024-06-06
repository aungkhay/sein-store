import{A as ge,g as P,b as R,j as be,h as O,x as D,i as z,e as G,k as ke,V as M,z as I,f as S,y as F,m as Ce,a as Ve,o as Se,p as Ae,q as he,r as Ie,R as Pe,c as Ne,d as Le,s as xe,t as je,v as Te,w as $e,L as we}from"./VGrid.f433e209.js";import{ar as h,$ as N,p as y,m as v,e as g,g as f,q as A,i as U,v as Be,f as b,a as l,W as k,k as K,l as q,ab as w,X as _e,Y as Ee,Z as Re,aa as Oe}from"./index.f34aca30.js";const W=(()=>h.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}))(),Y=(()=>h.reduce((e,n)=>{const t="offset"+N(n);return e[t]={type:[String,Number],default:null},e},{}))(),H=(()=>h.reduce((e,n)=>{const t="order"+N(n);return e[t]={type:[String,Number],default:null},e},{}))(),B={col:Object.keys(W),offset:Object.keys(Y),order:Object.keys(H)};function De(e,n,t){let a=e;if(!(t==null||t===!1)){if(n){const s=n.replace(e,"");a+=`-${s}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const ze=["auto","start","end","center","baseline","stretch"],Ge=y({cols:{type:[Boolean,String,Number],default:!1},...W,offset:{type:[String,Number],default:null},...Y,order:{type:[String,Number],default:null},...H,alignSelf:{type:String,default:null,validator:e=>ze.includes(e)},...v(),...g()},"VCol"),st=f()({name:"VCol",props:Ge(),setup(e,n){let{slots:t}=n;const a=A(()=>{const s=[];let i;for(i in B)B[i].forEach(d=>{const r=e[d],u=De(i,d,r);u&&s.push(u)});const c=s.some(d=>d.startsWith("v-col-"));return s.push({"v-col":!c||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>{var s;return U(e.tag,{class:[a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}}),L=["start","end","center"],J=["space-between","space-around","space-evenly"];function x(e,n){return h.reduce((t,a)=>{const s=e+N(a);return t[s]=n(),t},{})}const Me=[...L,"baseline","stretch"],X=e=>Me.includes(e),Z=x("align",()=>({type:String,default:null,validator:X})),Fe=[...L,...J],Q=e=>Fe.includes(e),p=x("justify",()=>({type:String,default:null,validator:Q})),Ue=[...L,...J,"stretch"],ee=e=>Ue.includes(e),te=x("alignContent",()=>({type:String,default:null,validator:ee})),_={align:Object.keys(Z),justify:Object.keys(p),alignContent:Object.keys(te)},Ke={align:"align",justify:"justify",alignContent:"align-content"};function qe(e,n,t){let a=Ke[e];if(t!=null){if(n){const s=n.replace(e,"");a+=`-${s}`}return a+=`-${t}`,a.toLowerCase()}}const We=y({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:X},...Z,justify:{type:String,default:null,validator:Q},...p,alignContent:{type:String,default:null,validator:ee},...te,...v(),...g()},"VRow"),it=f()({name:"VRow",props:We(),setup(e,n){let{slots:t}=n;const a=A(()=>{const s=[];let i;for(i in _)_[i].forEach(c=>{const d=e[c],r=qe(i,c,d);r&&s.push(r)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>{var s;return U(e.tag,{class:["v-row",a.value,e.class],style:e.style},(s=t.default)==null?void 0:s.call(t))}}});const Ye=f()({name:"VCardActions",props:v(),setup(e,n){let{slots:t}=n;return Be({VBtn:{slim:!0,variant:"text"}}),b(()=>{var a;return l("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),He=y({opacity:[Number,String],...v(),...g()},"VCardSubtitle"),Je=f()({name:"VCardSubtitle",props:He(),setup(e,n){let{slots:t}=n;return b(()=>l(e.tag,{class:["v-card-subtitle",e.class],style:[{"--v-card-subtitle-opacity":e.opacity},e.style]},t)),{}}}),Xe=ge("v-card-title");const Ze=y({start:Boolean,end:Boolean,icon:k,image:String,text:String,...v(),...P(),...R(),...be(),...g(),...K(),...O({variant:"flat"})},"VAvatar"),E=f()({name:"VAvatar",props:Ze(),setup(e,n){let{slots:t}=n;const{themeClasses:a}=q(e),{colorClasses:s,colorStyles:i,variantClasses:c}=D(e),{densityClasses:d}=z(e),{roundedClasses:r}=G(e),{sizeClasses:u,sizeStyles:o}=ke(e);return b(()=>l(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,s.value,d.value,r.value,u.value,c.value,e.class],style:[i.value,o.value,e.style]},{default:()=>[t.default?l(S,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?l(M,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?l(I,{key:"icon",icon:e.icon},null):e.text,F(!1,"v-avatar")]})),{}}}),Qe=y({appendAvatar:String,appendIcon:k,prependAvatar:String,prependIcon:k,subtitle:[String,Number],title:[String,Number],...v(),...P()},"VCardItem"),pe=f()({name:"VCardItem",props:Qe(),setup(e,n){let{slots:t}=n;return b(()=>{var u;const a=!!(e.prependAvatar||e.prependIcon),s=!!(a||t.prepend),i=!!(e.appendAvatar||e.appendIcon),c=!!(i||t.append),d=!!(e.title!=null||t.title),r=!!(e.subtitle!=null||t.subtitle);return l("div",{class:["v-card-item",e.class],style:e.style},[s&&l("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?l(S,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):l(w,null,[e.prependAvatar&&l(E,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&l(I,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),l("div",{class:"v-card-item__content"},[d&&l(Xe,{key:"title"},{default:()=>{var o,m;return[(m=(o=t.title)==null?void 0:o.call(t))!=null?m:e.title]}}),r&&l(Je,{key:"subtitle"},{default:()=>{var o,m;return[(m=(o=t.subtitle)==null?void 0:o.call(t))!=null?m:e.subtitle]}}),(u=t.default)==null?void 0:u.call(t)]),c&&l("div",{key:"append",class:"v-card-item__append"},[t.append?l(S,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):l(w,null,[e.appendIcon&&l(I,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&l(E,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),et=y({opacity:[Number,String],...v(),...g()},"VCardText"),tt=f()({name:"VCardText",props:et(),setup(e,n){let{slots:t}=n;return b(()=>l(e.tag,{class:["v-card-text",e.class],style:[{"--v-card-text-opacity":e.opacity},e.style]},t)),{}}}),at=y({appendAvatar:String,appendIcon:k,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:k,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Ce(),...v(),...P(),..._e(),...Ve(),...Se(),...Ae(),...he(),...R(),...Ie(),...g(),...K(),...O({variant:"elevated"})},"VCard"),dt=f()({name:"VCard",directives:{Ripple:Pe},props:at(),setup(e,n){let{attrs:t,slots:a}=n;const{themeClasses:s}=q(e),{borderClasses:i}=Ne(e),{colorClasses:c,colorStyles:d,variantClasses:r}=D(e),{densityClasses:u}=z(e),{dimensionStyles:o}=Ee(e),{elevationClasses:m}=Le(e),{loaderClasses:ae}=xe(e),{locationStyles:ne}=je(e),{positionClasses:le}=Te(e),{roundedClasses:se}=G(e),C=$e(e,t),ie=A(()=>e.link!==!1&&C.isLink.value),V=A(()=>!e.disabled&&e.link!==!1&&(e.link||C.isClickable.value));return b(()=>{const de=ie.value?"a":e.tag,ce=!!(a.title||e.title!=null),re=!!(a.subtitle||e.subtitle!=null),ue=ce||re,oe=!!(a.append||e.appendAvatar||e.appendIcon),ve=!!(a.prepend||e.prependAvatar||e.prependIcon),fe=!!(a.image||e.image),me=ue||ve||oe,ye=!!(a.text||e.text!=null);return Re(l(de,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":V.value},s.value,i.value,c.value,u.value,m.value,ae.value,le.value,se.value,r.value,e.class],style:[d.value,o.value,ne.value,e.style],href:C.href.value,onClick:V.value&&C.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var j;return[fe&&l("div",{key:"image",class:"v-card__image"},[a.image?l(S,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):l(M,{key:"image-img",cover:!0,src:e.image},null)]),l(we,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),me&&l(pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),ye&&l(tt,{key:"text"},{default:()=>{var T,$;return[($=(T=a.text)==null?void 0:T.call(a))!=null?$:e.text]}}),(j=a.default)==null?void 0:j.call(a),a.actions&&l(Ye,null,{default:a.actions}),F(V.value,"v-card")]}}),[[Oe("ripple"),V.value&&e.ripple]])}),{}}});export{dt as V,it as a,st as b,Xe as c,tt as d,E as e};