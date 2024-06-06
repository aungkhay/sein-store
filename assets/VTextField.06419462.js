import{at as ol,au as al,av as eo,aw as ul,ax as ll,ay as cl,az as hl,aA as dl,aB as Ht,aC as fl,aD as fe,aE as ml,aF as gl,aG as pl,p as Kt,m as Le,g as _e,q as Y,f as ye,a as L,Z as vi,ac as Go,aH as le,k as Ti,aI as _l,a7 as Qo,E as Ei,W as hn,l as Wo,n as Ho,L as Ii,y as ce,t as yl,z as on,x as vl,ab as Jn,I as Zn,aJ as Tl,aK as El,R as tr,N as Il,s as no,K as Al,u as wl,a9 as Rl,B as Pl,A as Vl,F as ro,V as ii,aL as Cl,X as Sl,Y as bl,aM as Dl,aa as kl,aN as xl,aO as Nl}from"./index.5942cd68.js";import{d as Xo,e as Ml}from"./VAppBarTitle.c59f5fb0.js";import{B as Yo,M as Jo,z as Fl,o as Ol,b as Ll,s as Ul,e as ql,u as Bl,l as Zo,L as jl,f as $l,g as zl,i as Kl,I as Gl}from"./VGrid.49438ead.js";class er{constructor(t){let{x:e,y:r,width:s,height:o}=t;this.x=e,this.y=r,this.width=s,this.height=o}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function _f(n,t){return{x:{before:Math.max(0,t.left-n.left),after:Math.max(0,n.right-t.right)},y:{before:Math.max(0,t.top-n.top),after:Math.max(0,n.bottom-t.bottom)}}}function yf(n){return Array.isArray(n)?new er({x:n[0],y:n[1],width:0,height:0}):n.getBoundingClientRect()}function Ql(n){const t=n.getBoundingClientRect(),e=getComputedStyle(n),r=e.transform;if(r){let s,o,u,c,h;if(r.startsWith("matrix3d("))s=r.slice(9,-1).split(/, /),o=+s[0],u=+s[5],c=+s[12],h=+s[13];else if(r.startsWith("matrix("))s=r.slice(7,-1).split(/, /),o=+s[0],u=+s[3],c=+s[4],h=+s[5];else return new er(t);const f=e.transformOrigin,g=t.x-c-(1-o)*parseFloat(f),A=t.y-h-(1-u)*parseFloat(f.slice(f.indexOf(" ")+1)),R=o?t.width/o:n.offsetWidth+1,P=u?t.height/u:n.offsetHeight+1;return new er({x:g,y:A,width:R,height:P})}else return new er(t)}function Wl(n,t,e){if(typeof n.animate>"u")return{finished:Promise.resolve()};let r;try{r=n.animate(t,e)}catch{return{finished:Promise.resolve()}}return typeof r.finished>"u"&&(r.finished=new Promise(s=>{r.onfinish=()=>{s(r)}})),r}const Hl="cubic-bezier(0.4, 0, 0.2, 1)",vf="cubic-bezier(0.0, 0, 0.2, 1)",Tf="cubic-bezier(0.4, 0, 1, 1)";var io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var he,ta;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(v,m){function _(){}_.prototype=m.prototype,v.D=m.prototype,v.prototype=new _,v.prototype.constructor=v,v.C=function(y,T,I){for(var p=Array(arguments.length-2),X=2;X<arguments.length;X++)p[X-2]=arguments[X];return m.prototype[T].apply(y,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)y[T]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(T=0;16>T;++T)y[T]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=v.g[0],_=v.g[1],T=v.g[2];var I=v.g[3],p=m+(I^_&(T^I))+y[0]+3614090360&4294967295;m=_+(p<<7&4294967295|p>>>25),p=I+(T^m&(_^T))+y[1]+3905402710&4294967295,I=m+(p<<12&4294967295|p>>>20),p=T+(_^I&(m^_))+y[2]+606105819&4294967295,T=I+(p<<17&4294967295|p>>>15),p=_+(m^T&(I^m))+y[3]+3250441966&4294967295,_=T+(p<<22&4294967295|p>>>10),p=m+(I^_&(T^I))+y[4]+4118548399&4294967295,m=_+(p<<7&4294967295|p>>>25),p=I+(T^m&(_^T))+y[5]+1200080426&4294967295,I=m+(p<<12&4294967295|p>>>20),p=T+(_^I&(m^_))+y[6]+2821735955&4294967295,T=I+(p<<17&4294967295|p>>>15),p=_+(m^T&(I^m))+y[7]+4249261313&4294967295,_=T+(p<<22&4294967295|p>>>10),p=m+(I^_&(T^I))+y[8]+1770035416&4294967295,m=_+(p<<7&4294967295|p>>>25),p=I+(T^m&(_^T))+y[9]+2336552879&4294967295,I=m+(p<<12&4294967295|p>>>20),p=T+(_^I&(m^_))+y[10]+4294925233&4294967295,T=I+(p<<17&4294967295|p>>>15),p=_+(m^T&(I^m))+y[11]+2304563134&4294967295,_=T+(p<<22&4294967295|p>>>10),p=m+(I^_&(T^I))+y[12]+1804603682&4294967295,m=_+(p<<7&4294967295|p>>>25),p=I+(T^m&(_^T))+y[13]+4254626195&4294967295,I=m+(p<<12&4294967295|p>>>20),p=T+(_^I&(m^_))+y[14]+2792965006&4294967295,T=I+(p<<17&4294967295|p>>>15),p=_+(m^T&(I^m))+y[15]+1236535329&4294967295,_=T+(p<<22&4294967295|p>>>10),p=m+(T^I&(_^T))+y[1]+4129170786&4294967295,m=_+(p<<5&4294967295|p>>>27),p=I+(_^T&(m^_))+y[6]+3225465664&4294967295,I=m+(p<<9&4294967295|p>>>23),p=T+(m^_&(I^m))+y[11]+643717713&4294967295,T=I+(p<<14&4294967295|p>>>18),p=_+(I^m&(T^I))+y[0]+3921069994&4294967295,_=T+(p<<20&4294967295|p>>>12),p=m+(T^I&(_^T))+y[5]+3593408605&4294967295,m=_+(p<<5&4294967295|p>>>27),p=I+(_^T&(m^_))+y[10]+38016083&4294967295,I=m+(p<<9&4294967295|p>>>23),p=T+(m^_&(I^m))+y[15]+3634488961&4294967295,T=I+(p<<14&4294967295|p>>>18),p=_+(I^m&(T^I))+y[4]+3889429448&4294967295,_=T+(p<<20&4294967295|p>>>12),p=m+(T^I&(_^T))+y[9]+568446438&4294967295,m=_+(p<<5&4294967295|p>>>27),p=I+(_^T&(m^_))+y[14]+3275163606&4294967295,I=m+(p<<9&4294967295|p>>>23),p=T+(m^_&(I^m))+y[3]+4107603335&4294967295,T=I+(p<<14&4294967295|p>>>18),p=_+(I^m&(T^I))+y[8]+1163531501&4294967295,_=T+(p<<20&4294967295|p>>>12),p=m+(T^I&(_^T))+y[13]+2850285829&4294967295,m=_+(p<<5&4294967295|p>>>27),p=I+(_^T&(m^_))+y[2]+4243563512&4294967295,I=m+(p<<9&4294967295|p>>>23),p=T+(m^_&(I^m))+y[7]+1735328473&4294967295,T=I+(p<<14&4294967295|p>>>18),p=_+(I^m&(T^I))+y[12]+2368359562&4294967295,_=T+(p<<20&4294967295|p>>>12),p=m+(_^T^I)+y[5]+4294588738&4294967295,m=_+(p<<4&4294967295|p>>>28),p=I+(m^_^T)+y[8]+2272392833&4294967295,I=m+(p<<11&4294967295|p>>>21),p=T+(I^m^_)+y[11]+1839030562&4294967295,T=I+(p<<16&4294967295|p>>>16),p=_+(T^I^m)+y[14]+4259657740&4294967295,_=T+(p<<23&4294967295|p>>>9),p=m+(_^T^I)+y[1]+2763975236&4294967295,m=_+(p<<4&4294967295|p>>>28),p=I+(m^_^T)+y[4]+1272893353&4294967295,I=m+(p<<11&4294967295|p>>>21),p=T+(I^m^_)+y[7]+4139469664&4294967295,T=I+(p<<16&4294967295|p>>>16),p=_+(T^I^m)+y[10]+3200236656&4294967295,_=T+(p<<23&4294967295|p>>>9),p=m+(_^T^I)+y[13]+681279174&4294967295,m=_+(p<<4&4294967295|p>>>28),p=I+(m^_^T)+y[0]+3936430074&4294967295,I=m+(p<<11&4294967295|p>>>21),p=T+(I^m^_)+y[3]+3572445317&4294967295,T=I+(p<<16&4294967295|p>>>16),p=_+(T^I^m)+y[6]+76029189&4294967295,_=T+(p<<23&4294967295|p>>>9),p=m+(_^T^I)+y[9]+3654602809&4294967295,m=_+(p<<4&4294967295|p>>>28),p=I+(m^_^T)+y[12]+3873151461&4294967295,I=m+(p<<11&4294967295|p>>>21),p=T+(I^m^_)+y[15]+530742520&4294967295,T=I+(p<<16&4294967295|p>>>16),p=_+(T^I^m)+y[2]+3299628645&4294967295,_=T+(p<<23&4294967295|p>>>9),p=m+(T^(_|~I))+y[0]+4096336452&4294967295,m=_+(p<<6&4294967295|p>>>26),p=I+(_^(m|~T))+y[7]+1126891415&4294967295,I=m+(p<<10&4294967295|p>>>22),p=T+(m^(I|~_))+y[14]+2878612391&4294967295,T=I+(p<<15&4294967295|p>>>17),p=_+(I^(T|~m))+y[5]+4237533241&4294967295,_=T+(p<<21&4294967295|p>>>11),p=m+(T^(_|~I))+y[12]+1700485571&4294967295,m=_+(p<<6&4294967295|p>>>26),p=I+(_^(m|~T))+y[3]+2399980690&4294967295,I=m+(p<<10&4294967295|p>>>22),p=T+(m^(I|~_))+y[10]+4293915773&4294967295,T=I+(p<<15&4294967295|p>>>17),p=_+(I^(T|~m))+y[1]+2240044497&4294967295,_=T+(p<<21&4294967295|p>>>11),p=m+(T^(_|~I))+y[8]+1873313359&4294967295,m=_+(p<<6&4294967295|p>>>26),p=I+(_^(m|~T))+y[15]+4264355552&4294967295,I=m+(p<<10&4294967295|p>>>22),p=T+(m^(I|~_))+y[6]+2734768916&4294967295,T=I+(p<<15&4294967295|p>>>17),p=_+(I^(T|~m))+y[13]+1309151649&4294967295,_=T+(p<<21&4294967295|p>>>11),p=m+(T^(_|~I))+y[4]+4149444226&4294967295,m=_+(p<<6&4294967295|p>>>26),p=I+(_^(m|~T))+y[11]+3174756917&4294967295,I=m+(p<<10&4294967295|p>>>22),p=T+(m^(I|~_))+y[2]+718787259&4294967295,T=I+(p<<15&4294967295|p>>>17),p=_+(I^(T|~m))+y[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(T+(p<<21&4294967295|p>>>11))&4294967295,v.g[2]=v.g[2]+T&4294967295,v.g[3]=v.g[3]+I&4294967295}r.prototype.u=function(v,m){m===void 0&&(m=v.length);for(var _=m-this.blockSize,y=this.B,T=this.h,I=0;I<m;){if(T==0)for(;I<=_;)s(this,v,I),I+=this.blockSize;if(typeof v=="string"){for(;I<m;)if(y[T++]=v.charCodeAt(I++),T==this.blockSize){s(this,y),T=0;break}}else for(;I<m;)if(y[T++]=v[I++],T==this.blockSize){s(this,y),T=0;break}}this.h=T,this.o+=m},r.prototype.v=function(){var v=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;var _=8*this.o;for(m=v.length-8;m<v.length;++m)v[m]=_&255,_/=256;for(this.u(v),v=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)v[_++]=this.g[m]>>>y&255;return v};function o(v,m){var _=c;return Object.prototype.hasOwnProperty.call(_,v)?_[v]:_[v]=m(v)}function u(v,m){this.h=m;for(var _=[],y=!0,T=v.length-1;0<=T;T--){var I=v[T]|0;y&&I==m||(_[T]=I,y=!1)}this.g=_}var c={};function h(v){return-128<=v&&128>v?o(v,function(m){return new u([m|0],0>m?-1:0)}):new u([v|0],0>v?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return A;if(0>v)return D(f(-v));for(var m=[],_=1,y=0;v>=_;y++)m[y]=v/_|0,_*=4294967296;return new u(m,0)}function g(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return D(g(v.substring(1),m));if(0<=v.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=f(Math.pow(m,8)),y=A,T=0;T<v.length;T+=8){var I=Math.min(8,v.length-T),p=parseInt(v.substring(T,T+I),m);8>I?(I=f(Math.pow(m,I)),y=y.j(I).add(f(p))):(y=y.j(_),y=y.add(f(p)))}return y}var A=h(0),R=h(1),P=h(16777216);n=u.prototype,n.m=function(){if(k(this))return-D(this).m();for(var v=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);v+=(0<=y?y:4294967296+y)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b(this))return"0";if(k(this))return"-"+D(this).toString(v);for(var m=f(Math.pow(v,6)),_=this,y="";;){var T=K(_,m).g;_=O(_,T.j(m));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(v);if(_=T,b(_))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(v){return 0>v?0:v<this.g.length?this.g[v]:this.h};function b(v){if(v.h!=0)return!1;for(var m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function k(v){return v.h==-1}n.l=function(v){return v=O(this,v),k(v)?-1:b(v)?0:1};function D(v){for(var m=v.g.length,_=[],y=0;y<m;y++)_[y]=~v.g[y];return new u(_,~v.h).add(R)}n.abs=function(){return k(this)?D(this):this},n.add=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0,T=0;T<=m;T++){var I=y+(this.i(T)&65535)+(v.i(T)&65535),p=(I>>>16)+(this.i(T)>>>16)+(v.i(T)>>>16);y=p>>>16,I&=65535,p&=65535,_[T]=p<<16|I}return new u(_,_[_.length-1]&-2147483648?-1:0)};function O(v,m){return v.add(D(m))}n.j=function(v){if(b(this)||b(v))return A;if(k(this))return k(v)?D(this).j(D(v)):D(D(this).j(v));if(k(v))return D(this.j(D(v)));if(0>this.l(P)&&0>v.l(P))return f(this.m()*v.m());for(var m=this.g.length+v.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<v.g.length;T++){var I=this.i(y)>>>16,p=this.i(y)&65535,X=v.i(T)>>>16,nt=v.i(T)&65535;_[2*y+2*T]+=p*nt,$(_,2*y+2*T),_[2*y+2*T+1]+=I*nt,$(_,2*y+2*T+1),_[2*y+2*T+1]+=p*X,$(_,2*y+2*T+1),_[2*y+2*T+2]+=I*X,$(_,2*y+2*T+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new u(_,0)};function $(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function z(v,m){this.g=v,this.h=m}function K(v,m){if(b(m))throw Error("division by zero");if(b(v))return new z(A,A);if(k(v))return m=K(D(v),m),new z(D(m.g),D(m.h));if(k(m))return m=K(v,D(m)),new z(D(m.g),m.h);if(30<v.g.length){if(k(v)||k(m))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=m;0>=y.l(v);)_=q(_),y=q(y);var T=M(_,1),I=M(y,1);for(y=M(y,2),_=M(_,2);!b(y);){var p=I.add(y);0>=p.l(v)&&(T=T.add(_),I=p),y=M(y,1),_=M(_,1)}return m=O(v,T.j(m)),new z(T,m)}for(T=A;0<=v.l(m);){for(_=Math.max(1,Math.floor(v.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=f(_),p=I.j(m);k(p)||0<p.l(v);)_-=y,I=f(_),p=I.j(m);b(I)&&(I=R),T=T.add(I),v=O(v,p)}return new z(T,v)}n.A=function(v){return K(this,v).h},n.and=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&v.i(y);return new u(_,this.h&v.h)},n.or=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|v.i(y);return new u(_,this.h|v.h)},n.xor=function(v){for(var m=Math.max(this.g.length,v.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^v.i(y);return new u(_,this.h^v.h)};function q(v){for(var m=v.g.length+1,_=[],y=0;y<m;y++)_[y]=v.i(y)<<1|v.i(y-1)>>>31;return new u(_,v.h)}function M(v,m){var _=m>>5;m%=32;for(var y=v.g.length-_,T=[],I=0;I<y;I++)T[I]=0<m?v.i(I+_)>>>m|v.i(I+_+1)<<32-m:v.i(I+_);return new u(T,v.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ta=r,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=f,u.fromString=g,he=u}).apply(typeof io<"u"?io:typeof self<"u"?self:typeof window<"u"?window:{});var Qn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ea,na,an,ra,nr,si,ia,sa,oa;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,a,l){return i==Array.prototype||i==Object.prototype||(i[a]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qn=="object"&&Qn];for(var a=0;a<i.length;++a){var l=i[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,a){if(a)t:{var l=r;i=i.split(".");for(var d=0;d<i.length-1;d++){var E=i[d];if(!(E in l))break t;l=l[E]}i=i[i.length-1],d=l[i],a=a(d),a!=d&&a!=null&&t(l,i,{configurable:!0,writable:!0,value:a})}}function o(i,a){i instanceof String&&(i+="");var l=0,d=!1,E={next:function(){if(!d&&l<i.length){var w=l++;return{value:a(w,i[w]),done:!1}}return d=!0,{done:!0,value:void 0}}};return E[Symbol.iterator]=function(){return E},E}s("Array.prototype.values",function(i){return i||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function h(i){var a=typeof i;return a=a!="object"?a:i?Array.isArray(i)?"array":a:"null",a=="array"||a=="object"&&typeof i.length=="number"}function f(i){var a=typeof i;return a=="object"&&i!=null||a=="function"}function g(i,a,l){return i.call.apply(i.bind,arguments)}function A(i,a,l){if(!i)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var E=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(E,d),i.apply(a,E)}}return function(){return i.apply(a,arguments)}}function R(i,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:A,R.apply(null,arguments)}function P(i,a){var l=Array.prototype.slice.call(arguments,1);return function(){var d=l.slice();return d.push.apply(d,arguments),i.apply(this,d)}}function b(i,a){function l(){}l.prototype=a.prototype,i.aa=a.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(d,E,w){for(var S=Array(arguments.length-2),J=2;J<arguments.length;J++)S[J-2]=arguments[J];return a.prototype[E].apply(d,S)}}function k(i){const a=i.length;if(0<a){const l=Array(a);for(let d=0;d<a;d++)l[d]=i[d];return l}return[]}function D(i,a){for(let l=1;l<arguments.length;l++){const d=arguments[l];if(h(d)){const E=i.length||0,w=d.length||0;i.length=E+w;for(let S=0;S<w;S++)i[E+S]=d[S]}else i.push(d)}}class O{constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function $(i){return/^[\s\xa0]*$/.test(i)}function z(){var i=c.navigator;return i&&(i=i.userAgent)?i:""}function K(i){return K[" "](i),i}K[" "]=function(){};var q=z().indexOf("Gecko")!=-1&&!(z().toLowerCase().indexOf("webkit")!=-1&&z().indexOf("Edge")==-1)&&!(z().indexOf("Trident")!=-1||z().indexOf("MSIE")!=-1)&&z().indexOf("Edge")==-1;function M(i,a,l){for(const d in i)a.call(l,i[d],d,i)}function v(i,a){for(const l in i)a.call(void 0,i[l],l,i)}function m(i){const a={};for(const l in i)a[l]=i[l];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,a){let l,d;for(let E=1;E<arguments.length;E++){d=arguments[E];for(l in d)i[l]=d[l];for(let w=0;w<_.length;w++)l=_[w],Object.prototype.hasOwnProperty.call(d,l)&&(i[l]=d[l])}}function T(i){var a=1;i=i.split(":");const l=[];for(;0<a&&i.length;)l.push(i.shift()),a--;return i.length&&l.push(i.join(":")),l}function I(i){c.setTimeout(()=>{throw i},0)}function p(){var i=Mt;let a=null;return i.g&&(a=i.g,i.g=i.g.next,i.g||(i.h=null),a.next=null),a}class X{constructor(){this.h=this.g=null}add(a,l){const d=nt.get();d.set(a,l),this.h?this.h.next=d:this.g=d,this.h=d}}var nt=new O(()=>new Rt,i=>i.reset());class Rt{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let ct,ht=!1,Mt=new X,Ft=()=>{const i=c.Promise.resolve(void 0);ct=()=>{i.then(qt)}};var qt=()=>{for(var i;i=p();){try{i.h.call(i.g)}catch(l){I(l)}var a=nt;a.j(i),100>a.h&&(a.h++,i.next=a.g,a.g=i)}ht=!1};function _t(){this.s=this.s,this.C=this.C}_t.prototype.s=!1,_t.prototype.ma=function(){this.s||(this.s=!0,this.N())},_t.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function st(i,a){this.type=i,this.g=this.target=a,this.defaultPrevented=!1}st.prototype.h=function(){this.defaultPrevented=!0};var Sn=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var i=!1,a=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return i}();function ne(i,a){if(st.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,d=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=a,a=i.relatedTarget){if(q){t:{try{K(a.nodeName);var E=!0;break t}catch{}E=!1}E||(a=null)}}else l=="mouseover"?a=i.fromElement:l=="mouseout"&&(a=i.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Vr[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&ne.aa.h.call(this)}}b(ne,st);var Vr={2:"touch",3:"pen",4:"mouse"};ne.prototype.h=function(){ne.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var re="closure_listenable_"+(1e6*Math.random()|0),bu=0;function Du(i,a,l,d,E){this.listener=i,this.proxy=null,this.src=a,this.type=l,this.capture=!!d,this.ha=E,this.key=++bu,this.da=this.fa=!1}function bn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Dn(i){this.src=i,this.g={},this.h=0}Dn.prototype.add=function(i,a,l,d,E){var w=i.toString();i=this.g[w],i||(i=this.g[w]=[],this.h++);var S=Sr(i,a,d,E);return-1<S?(a=i[S],l||(a.fa=!1)):(a=new Du(a,this.src,w,!!d,E),a.fa=l,i.push(a)),a};function Cr(i,a){var l=a.type;if(l in i.g){var d=i.g[l],E=Array.prototype.indexOf.call(d,a,void 0),w;(w=0<=E)&&Array.prototype.splice.call(d,E,1),w&&(bn(a),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Sr(i,a,l,d){for(var E=0;E<i.length;++E){var w=i[E];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==d)return E}return-1}var br="closure_lm_"+(1e6*Math.random()|0),Dr={};function es(i,a,l,d,E){if(d&&d.once)return rs(i,a,l,d,E);if(Array.isArray(a)){for(var w=0;w<a.length;w++)es(i,a[w],l,d,E);return null}return l=Mr(l),i&&i[re]?i.K(a,l,f(d)?!!d.capture:!!d,E):ns(i,a,l,!1,d,E)}function ns(i,a,l,d,E,w){if(!a)throw Error("Invalid event type");var S=f(E)?!!E.capture:!!E,J=xr(i);if(J||(i[br]=J=new Dn(i)),l=J.add(a,l,d,S,w),l.proxy)return l;if(d=ku(),l.proxy=d,d.src=i,d.listener=l,i.addEventListener)Sn||(E=S),E===void 0&&(E=!1),i.addEventListener(a.toString(),d,E);else if(i.attachEvent)i.attachEvent(ss(a.toString()),d);else if(i.addListener&&i.removeListener)i.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return l}function ku(){function i(l){return a.call(i.src,i.listener,l)}const a=xu;return i}function rs(i,a,l,d,E){if(Array.isArray(a)){for(var w=0;w<a.length;w++)rs(i,a[w],l,d,E);return null}return l=Mr(l),i&&i[re]?i.L(a,l,f(d)?!!d.capture:!!d,E):ns(i,a,l,!0,d,E)}function is(i,a,l,d,E){if(Array.isArray(a))for(var w=0;w<a.length;w++)is(i,a[w],l,d,E);else d=f(d)?!!d.capture:!!d,l=Mr(l),i&&i[re]?(i=i.i,a=String(a).toString(),a in i.g&&(w=i.g[a],l=Sr(w,l,d,E),-1<l&&(bn(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete i.g[a],i.h--)))):i&&(i=xr(i))&&(a=i.g[a.toString()],i=-1,a&&(i=Sr(a,l,d,E)),(l=-1<i?a[i]:null)&&kr(l))}function kr(i){if(typeof i!="number"&&i&&!i.da){var a=i.src;if(a&&a[re])Cr(a.i,i);else{var l=i.type,d=i.proxy;a.removeEventListener?a.removeEventListener(l,d,i.capture):a.detachEvent?a.detachEvent(ss(l),d):a.addListener&&a.removeListener&&a.removeListener(d),(l=xr(a))?(Cr(l,i),l.h==0&&(l.src=null,a[br]=null)):bn(i)}}}function ss(i){return i in Dr?Dr[i]:Dr[i]="on"+i}function xu(i,a){if(i.da)i=!0;else{a=new ne(a,this);var l=i.listener,d=i.ha||i.src;i.fa&&kr(i),i=l.call(d,a)}return i}function xr(i){return i=i[br],i instanceof Dn?i:null}var Nr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mr(i){return typeof i=="function"?i:(i[Nr]||(i[Nr]=function(a){return i.handleEvent(a)}),i[Nr])}function yt(){_t.call(this),this.i=new Dn(this),this.M=this,this.F=null}b(yt,_t),yt.prototype[re]=!0,yt.prototype.removeEventListener=function(i,a,l,d){is(this,i,a,l,d)};function Pt(i,a){var l,d=i.F;if(d)for(l=[];d;d=d.F)l.push(d);if(i=i.M,d=a.type||a,typeof a=="string")a=new st(a,i);else if(a instanceof st)a.target=a.target||i;else{var E=a;a=new st(d,i),y(a,E)}if(E=!0,l)for(var w=l.length-1;0<=w;w--){var S=a.g=l[w];E=kn(S,d,!0,a)&&E}if(S=a.g=i,E=kn(S,d,!0,a)&&E,E=kn(S,d,!1,a)&&E,l)for(w=0;w<l.length;w++)S=a.g=l[w],E=kn(S,d,!1,a)&&E}yt.prototype.N=function(){if(yt.aa.N.call(this),this.i){var i=this.i,a;for(a in i.g){for(var l=i.g[a],d=0;d<l.length;d++)bn(l[d]);delete i.g[a],i.h--}}this.F=null},yt.prototype.K=function(i,a,l,d){return this.i.add(String(i),a,!1,l,d)},yt.prototype.L=function(i,a,l,d){return this.i.add(String(i),a,!0,l,d)};function kn(i,a,l,d){if(a=i.i.g[String(a)],!a)return!0;a=a.concat();for(var E=!0,w=0;w<a.length;++w){var S=a[w];if(S&&!S.da&&S.capture==l){var J=S.listener,ft=S.ha||S.src;S.fa&&Cr(i.i,S),E=J.call(ft,d)!==!1&&E}}return E&&!d.defaultPrevented}function os(i,a,l){if(typeof i=="function")l&&(i=R(i,l));else if(i&&typeof i.handleEvent=="function")i=R(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(i,a||0)}function as(i){i.g=os(()=>{i.g=null,i.i&&(i.i=!1,as(i))},i.l);const a=i.h;i.h=null,i.m.apply(null,a)}class Nu extends _t{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:as(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ze(i){_t.call(this),this.h=i,this.g={}}b(ze,_t);var us=[];function ls(i){M(i.g,function(a,l){this.g.hasOwnProperty(l)&&kr(a)},i),i.g={}}ze.prototype.N=function(){ze.aa.N.call(this),ls(this)},ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fr=c.JSON.stringify,Mu=c.JSON.parse,Fu=class{stringify(i){return c.JSON.stringify(i,void 0)}parse(i){return c.JSON.parse(i,void 0)}};function Or(){}Or.prototype.h=null;function cs(i){return i.h||(i.h=i.i())}function hs(){}var Ke={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Lr(){st.call(this,"d")}b(Lr,st);function Ur(){st.call(this,"c")}b(Ur,st);var ie={},ds=null;function xn(){return ds=ds||new yt}ie.La="serverreachability";function fs(i){st.call(this,ie.La,i)}b(fs,st);function Ge(i){const a=xn();Pt(a,new fs(a))}ie.STAT_EVENT="statevent";function ms(i,a){st.call(this,ie.STAT_EVENT,i),this.stat=a}b(ms,st);function Vt(i){const a=xn();Pt(a,new ms(a,i))}ie.Ma="timingevent";function gs(i,a){st.call(this,ie.Ma,i),this.size=a}b(gs,st);function Qe(i,a){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){i()},a)}function We(){this.g=!0}We.prototype.xa=function(){this.g=!1};function Ou(i,a,l,d,E,w){i.info(function(){if(i.g)if(w)for(var S="",J=w.split("&"),ft=0;ft<J.length;ft++){var W=J[ft].split("=");if(1<W.length){var vt=W[0];W=W[1];var Tt=vt.split("_");S=2<=Tt.length&&Tt[1]=="type"?S+(vt+"="+W+"&"):S+(vt+"=redacted&")}}else S=null;else S=w;return"XMLHTTP REQ ("+d+") [attempt "+E+"]: "+a+`
`+l+`
`+S})}function Lu(i,a,l,d,E,w,S){i.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+E+"]: "+a+`
`+l+`
`+w+" "+S})}function Ie(i,a,l,d){i.info(function(){return"XMLHTTP TEXT ("+a+"): "+qu(i,l)+(d?" "+d:"")})}function Uu(i,a){i.info(function(){return"TIMEOUT: "+a})}We.prototype.info=function(){};function qu(i,a){if(!i.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var d=l[i];if(!(2>d.length)){var E=d[1];if(Array.isArray(E)&&!(1>E.length)){var w=E[0];if(w!="noop"&&w!="stop"&&w!="close")for(var S=1;S<E.length;S++)E[S]=""}}}}return Fr(l)}catch{return a}}var Nn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ps={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},qr;function Mn(){}b(Mn,Or),Mn.prototype.g=function(){return new XMLHttpRequest},Mn.prototype.i=function(){return{}},qr=new Mn;function Gt(i,a,l,d){this.j=i,this.i=a,this.l=l,this.R=d||1,this.U=new ze(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _s}function _s(){this.i=null,this.g="",this.h=!1}var ys={},Br={};function jr(i,a,l){i.L=1,i.v=Un(Bt(a)),i.m=l,i.P=!0,vs(i,null)}function vs(i,a){i.F=Date.now(),Fn(i),i.A=Bt(i.v);var l=i.A,d=i.R;Array.isArray(d)||(d=[String(d)]),xs(l.i,"t",d),i.C=0,l=i.j.J,i.h=new _s,i.g=Ys(i.j,l?a:null,!i.m),0<i.O&&(i.M=new Nu(R(i.Y,i,i.g),i.O)),a=i.U,l=i.g,d=i.ca;var E="readystatechange";Array.isArray(E)||(E&&(us[0]=E.toString()),E=us);for(var w=0;w<E.length;w++){var S=es(l,E[w],d||a.handleEvent,!1,a.h||a);if(!S)break;a.g[S.key]=S}a=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,a)):(i.u="GET",i.g.ea(i.A,i.u,null,a)),Ge(),Ou(i.i,i.u,i.A,i.l,i.R,i.m)}Gt.prototype.ca=function(i){i=i.target;const a=this.M;a&&jt(i)==3?a.j():this.Y(i)},Gt.prototype.Y=function(i){try{if(i==this.g)t:{const Tt=jt(this.g);var a=this.g.Ba();const Re=this.g.Z();if(!(3>Tt)&&(Tt!=3||this.g&&(this.h.h||this.g.oa()||qs(this.g)))){this.J||Tt!=4||a==7||(a==8||0>=Re?Ge(3):Ge(2)),$r(this);var l=this.g.Z();this.X=l;e:if(Ts(this)){var d=qs(this.g);i="";var E=d.length,w=jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){se(this),He(this);var S="";break e}this.h.i=new c.TextDecoder}for(a=0;a<E;a++)this.h.h=!0,i+=this.h.i.decode(d[a],{stream:!(w&&a==E-1)});d.length=0,this.h.g+=i,this.C=0,S=this.h.g}else S=this.g.oa();if(this.o=l==200,Lu(this.i,this.u,this.A,this.l,this.R,Tt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var J,ft=this.g;if((J=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(J)){var W=J;break e}}W=null}if(l=W)Ie(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zr(this,l);else{this.o=!1,this.s=3,Vt(12),se(this),He(this);break t}}if(this.P){l=!0;let Dt;for(;!this.J&&this.C<S.length;)if(Dt=Bu(this,S),Dt==Br){Tt==4&&(this.s=4,Vt(14),l=!1),Ie(this.i,this.l,null,"[Incomplete Response]");break}else if(Dt==ys){this.s=4,Vt(15),Ie(this.i,this.l,S,"[Invalid Chunk]"),l=!1;break}else Ie(this.i,this.l,Dt,null),zr(this,Dt);if(Ts(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||S.length!=0||this.h.h||(this.s=1,Vt(16),l=!1),this.o=this.o&&l,!l)Ie(this.i,this.l,S,"[Invalid Chunked Response]"),se(this),He(this);else if(0<S.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+S.length),Xr(vt),vt.M=!0,Vt(11))}}else Ie(this.i,this.l,S,null),zr(this,S);Tt==4&&se(this),this.o&&!this.J&&(Tt==4?Qs(this.j,this):(this.o=!1,Fn(this)))}else il(this.g),l==400&&0<S.indexOf("Unknown SID")?(this.s=3,Vt(12)):(this.s=0,Vt(13)),se(this),He(this)}}}catch{}finally{}};function Ts(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function Bu(i,a){var l=i.C,d=a.indexOf(`
`,l);return d==-1?Br:(l=Number(a.substring(l,d)),isNaN(l)?ys:(d+=1,d+l>a.length?Br:(a=a.slice(d,d+l),i.C=d+l,a)))}Gt.prototype.cancel=function(){this.J=!0,se(this)};function Fn(i){i.S=Date.now()+i.I,Es(i,i.I)}function Es(i,a){if(i.B!=null)throw Error("WatchDog timer not null");i.B=Qe(R(i.ba,i),a)}function $r(i){i.B&&(c.clearTimeout(i.B),i.B=null)}Gt.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(Uu(this.i,this.A),this.L!=2&&(Ge(),Vt(17)),se(this),this.s=2,He(this)):Es(this,this.S-i)};function He(i){i.j.G==0||i.J||Qs(i.j,i)}function se(i){$r(i);var a=i.M;a&&typeof a.ma=="function"&&a.ma(),i.M=null,ls(i.U),i.g&&(a=i.g,i.g=null,a.abort(),a.ma())}function zr(i,a){try{var l=i.j;if(l.G!=0&&(l.g==i||Kr(l.h,i))){if(!i.K&&Kr(l.h,i)&&l.G==3){try{var d=l.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var E=d;if(E[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)zn(l),jn(l);else break t;Hr(l),Vt(18)}}else l.za=E[1],0<l.za-l.T&&37500>E[2]&&l.F&&l.v==0&&!l.C&&(l.C=Qe(R(l.Za,l),6e3));if(1>=ws(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else ae(l,11)}else if((i.K||l.g==i)&&zn(l),!$(a))for(E=l.Da.g.parse(a),a=0;a<E.length;a++){let W=E[a];if(l.T=W[0],W=W[1],l.G==2)if(W[0]=="c"){l.K=W[1],l.ia=W[2];const vt=W[3];vt!=null&&(l.la=vt,l.j.info("VER="+l.la));const Tt=W[4];Tt!=null&&(l.Aa=Tt,l.j.info("SVER="+l.Aa));const Re=W[5];Re!=null&&typeof Re=="number"&&0<Re&&(d=1.5*Re,l.L=d,l.j.info("backChannelRequestTimeoutMs_="+d)),d=l;const Dt=i.g;if(Dt){const Gn=Dt.g?Dt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gn){var w=d.h;w.g||Gn.indexOf("spdy")==-1&&Gn.indexOf("quic")==-1&&Gn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Gr(w,w.h),w.h=null))}if(d.D){const Yr=Dt.g?Dt.g.getResponseHeader("X-HTTP-Session-Id"):null;Yr&&(d.ya=Yr,tt(d.I,d.D,Yr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),d=l;var S=i;if(d.qa=Xs(d,d.J?d.ia:null,d.W),S.K){Rs(d.h,S);var J=S,ft=d.L;ft&&(J.I=ft),J.B&&($r(J),Fn(J)),d.g=S}else Ks(d);0<l.i.length&&$n(l)}else W[0]!="stop"&&W[0]!="close"||ae(l,7);else l.G==3&&(W[0]=="stop"||W[0]=="close"?W[0]=="stop"?ae(l,7):Wr(l):W[0]!="noop"&&l.l&&l.l.ta(W),l.v=0)}}Ge(4)}catch{}}var ju=class{constructor(i,a){this.g=i,this.map=a}};function Is(i){this.l=i||10,c.PerformanceNavigationTiming?(i=c.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function As(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function ws(i){return i.h?1:i.g?i.g.size:0}function Kr(i,a){return i.h?i.h==a:i.g?i.g.has(a):!1}function Gr(i,a){i.g?i.g.add(a):i.h=a}function Rs(i,a){i.h&&i.h==a?i.h=null:i.g&&i.g.has(a)&&i.g.delete(a)}Is.prototype.cancel=function(){if(this.i=Ps(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Ps(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let a=i.i;for(const l of i.g.values())a=a.concat(l.D);return a}return k(i.i)}function $u(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var a=[],l=i.length,d=0;d<l;d++)a.push(i[d]);return a}a=[],l=0;for(d in i)a[l++]=i[d];return a}function zu(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var a=[];i=i.length;for(var l=0;l<i;l++)a.push(l);return a}a=[],l=0;for(const d in i)a[l++]=d;return a}}}function Vs(i,a){if(i.forEach&&typeof i.forEach=="function")i.forEach(a,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,a,void 0);else for(var l=zu(i),d=$u(i),E=d.length,w=0;w<E;w++)a.call(void 0,d[w],l&&l[w],i)}var Cs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ku(i,a){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var d=i[l].indexOf("="),E=null;if(0<=d){var w=i[l].substring(0,d);E=i[l].substring(d+1)}else w=i[l];a(w,E?decodeURIComponent(E.replace(/\+/g," ")):"")}}}function oe(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof oe){this.h=i.h,On(this,i.j),this.o=i.o,this.g=i.g,Ln(this,i.s),this.l=i.l;var a=i.i,l=new Je;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Ss(this,l),this.m=i.m}else i&&(a=String(i).match(Cs))?(this.h=!1,On(this,a[1]||"",!0),this.o=Xe(a[2]||""),this.g=Xe(a[3]||"",!0),Ln(this,a[4]),this.l=Xe(a[5]||"",!0),Ss(this,a[6]||"",!0),this.m=Xe(a[7]||"")):(this.h=!1,this.i=new Je(null,this.h))}oe.prototype.toString=function(){var i=[],a=this.j;a&&i.push(Ye(a,bs,!0),":");var l=this.g;return(l||a=="file")&&(i.push("//"),(a=this.o)&&i.push(Ye(a,bs,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(Ye(l,l.charAt(0)=="/"?Wu:Qu,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",Ye(l,Xu)),i.join("")};function Bt(i){return new oe(i)}function On(i,a,l){i.j=l?Xe(a,!0):a,i.j&&(i.j=i.j.replace(/:$/,""))}function Ln(i,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);i.s=a}else i.s=null}function Ss(i,a,l){a instanceof Je?(i.i=a,Yu(i.i,i.h)):(l||(a=Ye(a,Hu)),i.i=new Je(a,i.h))}function tt(i,a,l){i.i.set(a,l)}function Un(i){return tt(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Xe(i,a){return i?a?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Ye(i,a,l){return typeof i=="string"?(i=encodeURI(i).replace(a,Gu),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Gu(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var bs=/[#\/\?@]/g,Qu=/[#\?:]/g,Wu=/[#\?]/g,Hu=/[#\?@]/g,Xu=/#/g;function Je(i,a){this.h=this.g=null,this.i=i||null,this.j=!!a}function Qt(i){i.g||(i.g=new Map,i.h=0,i.i&&Ku(i.i,function(a,l){i.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}n=Je.prototype,n.add=function(i,a){Qt(this),this.i=null,i=Ae(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(a),this.h+=1,this};function Ds(i,a){Qt(i),a=Ae(i,a),i.g.has(a)&&(i.i=null,i.h-=i.g.get(a).length,i.g.delete(a))}function ks(i,a){return Qt(i),a=Ae(i,a),i.g.has(a)}n.forEach=function(i,a){Qt(this),this.g.forEach(function(l,d){l.forEach(function(E){i.call(a,E,d,this)},this)},this)},n.na=function(){Qt(this);const i=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let d=0;d<a.length;d++){const E=i[d];for(let w=0;w<E.length;w++)l.push(a[d])}return l},n.V=function(i){Qt(this);let a=[];if(typeof i=="string")ks(this,i)&&(a=a.concat(this.g.get(Ae(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)a=a.concat(i[l])}return a},n.set=function(i,a){return Qt(this),this.i=null,i=Ae(this,i),ks(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[a]),this.h+=1,this},n.get=function(i,a){return i?(i=this.V(i),0<i.length?String(i[0]):a):a};function xs(i,a,l){Ds(i,a),0<l.length&&(i.i=null,i.g.set(Ae(i,a),k(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var d=a[l];const w=encodeURIComponent(String(d)),S=this.V(d);for(d=0;d<S.length;d++){var E=w;S[d]!==""&&(E+="="+encodeURIComponent(String(S[d]))),i.push(E)}}return this.i=i.join("&")};function Ae(i,a){return a=String(a),i.j&&(a=a.toLowerCase()),a}function Yu(i,a){a&&!i.j&&(Qt(i),i.i=null,i.g.forEach(function(l,d){var E=d.toLowerCase();d!=E&&(Ds(this,d),xs(this,E,l))},i)),i.j=a}function Ju(i,a){const l=new We;if(c.Image){const d=new Image;d.onload=P(Wt,l,"TestLoadImage: loaded",!0,a,d),d.onerror=P(Wt,l,"TestLoadImage: error",!1,a,d),d.onabort=P(Wt,l,"TestLoadImage: abort",!1,a,d),d.ontimeout=P(Wt,l,"TestLoadImage: timeout",!1,a,d),c.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=i}else a(!1)}function Zu(i,a){const l=new We,d=new AbortController,E=setTimeout(()=>{d.abort(),Wt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(i,{signal:d.signal}).then(w=>{clearTimeout(E),w.ok?Wt(l,"TestPingServer: ok",!0,a):Wt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(E),Wt(l,"TestPingServer: error",!1,a)})}function Wt(i,a,l,d,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),d(l)}catch{}}function tl(){this.g=new Fu}function el(i,a,l){const d=l||"";try{Vs(i,function(E,w){let S=E;f(E)&&(S=Fr(E)),a.push(d+w+"="+encodeURIComponent(S))})}catch(E){throw a.push(d+"type="+encodeURIComponent("_badmap")),E}}function Ze(i){this.l=i.Ub||null,this.j=i.eb||!1}b(Ze,Or),Ze.prototype.g=function(){return new qn(this.l,this.j)},Ze.prototype.i=function(i){return function(){return i}}({});function qn(i,a){yt.call(this),this.D=i,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(qn,yt),n=qn.prototype,n.open=function(i,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=a,this.readyState=1,en(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(a.body=i),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,tn(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,en(this)),this.g&&(this.readyState=3,en(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ns(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ns(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var a=i.value?i.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!i.done}))&&(this.response=this.responseText+=a)}i.done?tn(this):en(this),this.readyState==3&&Ns(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,tn(this))},n.Qa=function(i){this.g&&(this.response=i,tn(this))},n.ga=function(){this.g&&tn(this)};function tn(i){i.readyState=4,i.l=null,i.j=null,i.v=null,en(i)}n.setRequestHeader=function(i,a){this.u.append(i,a)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=a.next();return i.join(`\r
`)};function en(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(qn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Ms(i){let a="";return M(i,function(l,d){a+=d,a+=":",a+=l,a+=`\r
`}),a}function Qr(i,a,l){t:{for(d in l){var d=!1;break t}d=!0}d||(l=Ms(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):tt(i,a,l))}function it(i){yt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(it,yt);var nl=/^https?$/i,rl=["POST","PUT"];n=it.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,a,l,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);a=a?a.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():qr.g(),this.v=this.o?cs(this.o):cs(qr),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(i),!0),this.B=!1}catch(w){Fs(this,w);return}if(i=l||"",l=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var E in d)l.set(E,d[E]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const w of d.keys())l.set(w,d.get(w));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),E=c.FormData&&i instanceof c.FormData,!(0<=Array.prototype.indexOf.call(rl,a,void 0))||d||E||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,S]of l)this.g.setRequestHeader(w,S);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Us(this),this.u=!0,this.g.send(i),this.u=!1}catch(w){Fs(this,w)}};function Fs(i,a){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=a,i.m=5,Os(i),Bn(i)}function Os(i){i.A||(i.A=!0,Pt(i,"complete"),Pt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,Pt(this,"complete"),Pt(this,"abort"),Bn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Bn(this,!0)),it.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ls(this):this.bb())},n.bb=function(){Ls(this)};function Ls(i){if(i.h&&typeof u<"u"&&(!i.v[1]||jt(i)!=4||i.Z()!=2)){if(i.u&&jt(i)==4)os(i.Ea,0,i);else if(Pt(i,"readystatechange"),jt(i)==4){i.h=!1;try{const S=i.Z();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var d;if(d=S===0){var E=String(i.D).match(Cs)[1]||null;!E&&c.self&&c.self.location&&(E=c.self.location.protocol.slice(0,-1)),d=!nl.test(E?E.toLowerCase():"")}l=d}if(l)Pt(i,"complete"),Pt(i,"success");else{i.m=6;try{var w=2<jt(i)?i.g.statusText:""}catch{w=""}i.l=w+" ["+i.Z()+"]",Os(i)}}finally{Bn(i)}}}}function Bn(i,a){if(i.g){Us(i);const l=i.g,d=i.v[0]?()=>{}:null;i.g=null,i.v=null,a||Pt(i,"ready");try{l.onreadystatechange=d}catch{}}}function Us(i){i.I&&(c.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function jt(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var a=this.g.responseText;return i&&a.indexOf(i)==0&&(a=a.substring(i.length)),Mu(a)}};function qs(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function il(i){const a={};i=(i.g&&2<=jt(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<i.length;d++){if($(i[d]))continue;var l=T(i[d]);const E=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[E]||[];a[E]=w,w.push(l)}v(a,function(d){return d.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function nn(i,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||a}function Bs(i){this.Aa=0,this.i=[],this.j=new We,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=nn("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=nn("baseRetryDelayMs",5e3,i),this.cb=nn("retryDelaySeedMs",1e4,i),this.Wa=nn("forwardChannelMaxRetries",2,i),this.wa=nn("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Is(i&&i.concurrentRequestLimit),this.Da=new tl,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Bs.prototype,n.la=8,n.G=1,n.connect=function(i,a,l,d){Vt(0),this.W=i,this.H=a||{},l&&d!==void 0&&(this.H.OSID=l,this.H.OAID=d),this.F=this.X,this.I=Xs(this,null,this.W),$n(this)};function Wr(i){if(js(i),i.G==3){var a=i.U++,l=Bt(i.I);if(tt(l,"SID",i.K),tt(l,"RID",a),tt(l,"TYPE","terminate"),rn(i,l),a=new Gt(i,i.j,a),a.L=2,a.v=Un(Bt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=Ys(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Fn(a)}Hs(i)}function jn(i){i.g&&(Xr(i),i.g.cancel(),i.g=null)}function js(i){jn(i),i.u&&(c.clearTimeout(i.u),i.u=null),zn(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&c.clearTimeout(i.s),i.s=null)}function $n(i){if(!As(i.h)&&!i.s){i.s=!0;var a=i.Ga;ct||Ft(),ht||(ct(),ht=!0),Mt.add(a,i),i.B=0}}function sl(i,a){return ws(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=a.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=Qe(R(i.Ga,i,a),Ws(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const E=new Gt(this,this.j,i);let w=this.o;if(this.S&&(w?(w=m(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(E.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var d=this.i[l];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=zs(this,E,a),l=Bt(this.I),tt(l,"RID",i),tt(l,"CVER",22),this.D&&tt(l,"X-HTTP-Session-Id",this.D),rn(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(Ms(w)))+"&"+a:this.m&&Qr(l,this.m,w)),Gr(this.h,E),this.Ua&&tt(l,"TYPE","init"),this.P?(tt(l,"$req",a),tt(l,"SID","null"),E.T=!0,jr(E,l,null)):jr(E,l,a),this.G=2}}else this.G==3&&(i?$s(this,i):this.i.length==0||As(this.h)||$s(this))};function $s(i,a){var l;a?l=a.l:l=i.U++;const d=Bt(i.I);tt(d,"SID",i.K),tt(d,"RID",l),tt(d,"AID",i.T),rn(i,d),i.m&&i.o&&Qr(d,i.m,i.o),l=new Gt(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),a&&(i.i=a.D.concat(i.i)),a=zs(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Gr(i.h,l),jr(l,d,a)}function rn(i,a){i.H&&M(i.H,function(l,d){tt(a,d,l)}),i.l&&Vs({},function(l,d){tt(a,d,l)})}function zs(i,a,l){l=Math.min(i.i.length,l);var d=i.l?R(i.l.Na,i.l,i):null;t:{var E=i.i;let w=-1;for(;;){const S=["count="+l];w==-1?0<l?(w=E[0].g,S.push("ofs="+w)):w=0:S.push("ofs="+w);let J=!0;for(let ft=0;ft<l;ft++){let W=E[ft].g;const vt=E[ft].map;if(W-=w,0>W)w=Math.max(0,E[ft].g-100),J=!1;else try{el(vt,S,"req"+W+"_")}catch{d&&d(vt)}}if(J){d=S.join("&");break t}}}return i=i.i.splice(0,l),a.D=i,d}function Ks(i){if(!i.g&&!i.u){i.Y=1;var a=i.Fa;ct||Ft(),ht||(ct(),ht=!0),Mt.add(a,i),i.v=0}}function Hr(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=Qe(R(i.Fa,i),Ws(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Gs(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=Qe(R(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Vt(10),jn(this),Gs(this))};function Xr(i){i.A!=null&&(c.clearTimeout(i.A),i.A=null)}function Gs(i){i.g=new Gt(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var a=Bt(i.qa);tt(a,"RID","rpc"),tt(a,"SID",i.K),tt(a,"AID",i.T),tt(a,"CI",i.F?"0":"1"),!i.F&&i.ja&&tt(a,"TO",i.ja),tt(a,"TYPE","xmlhttp"),rn(i,a),i.m&&i.o&&Qr(a,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=Un(Bt(a)),l.m=null,l.P=!0,vs(l,i)}n.Za=function(){this.C!=null&&(this.C=null,jn(this),Hr(this),Vt(19))};function zn(i){i.C!=null&&(c.clearTimeout(i.C),i.C=null)}function Qs(i,a){var l=null;if(i.g==a){zn(i),Xr(i),i.g=null;var d=2}else if(Kr(i.h,a))l=a.D,Rs(i.h,a),d=1;else return;if(i.G!=0){if(a.o)if(d==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var E=i.B;d=xn(),Pt(d,new gs(d,l)),$n(i)}else Ks(i);else if(E=a.s,E==3||E==0&&0<a.X||!(d==1&&sl(i,a)||d==2&&Hr(i)))switch(l&&0<l.length&&(a=i.h,a.i=a.i.concat(l)),E){case 1:ae(i,5);break;case 4:ae(i,10);break;case 3:ae(i,6);break;default:ae(i,2)}}}function Ws(i,a){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*a}function ae(i,a){if(i.j.info("Error code "+a),a==2){var l=R(i.fb,i),d=i.Xa;const E=!d;d=new oe(d||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||On(d,"https"),Un(d),E?Ju(d.toString(),l):Zu(d.toString(),l)}else Vt(2);i.G=0,i.l&&i.l.sa(a),Hs(i),js(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),Vt(2)):(this.j.info("Failed to ping google.com"),Vt(1))};function Hs(i){if(i.G=0,i.ka=[],i.l){const a=Ps(i.h);(a.length!=0||i.i.length!=0)&&(D(i.ka,a),D(i.ka,i.i),i.h.i.length=0,k(i.i),i.i.length=0),i.l.ra()}}function Xs(i,a,l){var d=l instanceof oe?Bt(l):new oe(l);if(d.g!="")a&&(d.g=a+"."+d.g),Ln(d,d.s);else{var E=c.location;d=E.protocol,a=a?a+"."+E.hostname:E.hostname,E=+E.port;var w=new oe(null);d&&On(w,d),a&&(w.g=a),E&&Ln(w,E),l&&(w.l=l),d=w}return l=i.D,a=i.ya,l&&a&&tt(d,l,a),tt(d,"VER",i.la),rn(i,d),d}function Ys(i,a,l){if(a&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=i.Ca&&!i.pa?new it(new Ze({eb:l})):new it(i.pa),a.Ha(i.J),a}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Js(){}n=Js.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Kn(){}Kn.prototype.g=function(i,a){return new St(i,a)};function St(i,a){yt.call(this),this.g=new Bs(a),this.l=i,this.h=a&&a.messageUrlParams||null,i=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(i?i["X-WebChannel-Content-Type"]=a.messageContentType:i={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(i?i["X-WebChannel-Client-Profile"]=a.va:i={"X-WebChannel-Client-Profile":a.va}),this.g.S=i,(i=a&&a.Sb)&&!$(i)&&(this.g.m=i),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!$(a)&&(this.g.D=a,i=this.h,i!==null&&a in i&&(i=this.h,a in i&&delete i[a])),this.j=new we(this)}b(St,yt),St.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},St.prototype.close=function(){Wr(this.g)},St.prototype.o=function(i){var a=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=Fr(i),i=l);a.i.push(new ju(a.Ya++,i)),a.G==3&&$n(a)},St.prototype.N=function(){this.g.l=null,delete this.j,Wr(this.g),delete this.g,St.aa.N.call(this)};function Zs(i){Lr.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var a=i.__sm__;if(a){t:{for(const l in a){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,a=a!==null&&i in a?a[i]:void 0),this.data=a}else this.data=i}b(Zs,Lr);function to(){Ur.call(this),this.status=1}b(to,Ur);function we(i){this.g=i}b(we,Js),we.prototype.ua=function(){Pt(this.g,"a")},we.prototype.ta=function(i){Pt(this.g,new Zs(i))},we.prototype.sa=function(i){Pt(this.g,new to)},we.prototype.ra=function(){Pt(this.g,"b")},Kn.prototype.createWebChannel=Kn.prototype.g,St.prototype.send=St.prototype.o,St.prototype.open=St.prototype.m,St.prototype.close=St.prototype.close,oa=function(){return new Kn},sa=function(){return xn()},ia=ie,si={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Nn.NO_ERROR=0,Nn.TIMEOUT=8,Nn.HTTP_ERROR=6,nr=Nn,ps.COMPLETE="complete",ra=ps,hs.EventType=Ke,Ke.OPEN="a",Ke.CLOSE="b",Ke.ERROR="c",Ke.MESSAGE="d",yt.prototype.listen=yt.prototype.K,an=hs,na=Ze,it.prototype.listenOnce=it.prototype.L,it.prototype.getLastError=it.prototype.Ka,it.prototype.getLastErrorCode=it.prototype.Ba,it.prototype.getStatus=it.prototype.Z,it.prototype.getResponseJson=it.prototype.Oa,it.prototype.getResponseText=it.prototype.oa,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Ha,ea=it}).apply(typeof Qn<"u"?Qn:typeof self<"u"?self:typeof window<"u"?window:{});const so="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ue="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me=new dl("@firebase/firestore");function sn(){return me.logLevel}function N(n,...t){if(me.logLevel<=Ht.DEBUG){const e=t.map(Ai);me.debug(`Firestore (${Ue}): ${n}`,...e)}}function $t(n,...t){if(me.logLevel<=Ht.ERROR){const e=t.map(Ai);me.error(`Firestore (${Ue}): ${n}`,...e)}}function be(n,...t){if(me.logLevel<=Ht.WARN){const e=t.map(Ai);me.warn(`Firestore (${Ue}): ${n}`,...e)}}function Ai(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(n="Unexpected state"){const t=`FIRESTORE (${Ue}) INTERNAL ASSERTION FAILED: `+n;throw $t(t),new Error(t)}function Z(n,t){n||U()}function j(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends ul{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Xl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(It.UNAUTHENTICATED))}shutdown(){}}class Yl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Jl{constructor(t){this.t=t,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new de;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new de,t.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},c=h=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),u()};this.t.onInit(h=>c(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?c(h):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new de)}},0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new aa(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Z(t===null||typeof t=="string"),new It(t)}}class Zl{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class tc{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Zl(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ec{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nc{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.R;return this.R=o.token,N("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Z(typeof e.token=="string"),this.R=e.token,new ec(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=rc(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function H(n,t){return n<t?-1:n>t?1:0}function De(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new x(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return lt.fromMillis(Date.now())}static fromDate(t){return lt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new lt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?H(this.nanoseconds,t.nanoseconds):H(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.timestamp=t}static fromTimestamp(t){return new B(t)}static min(){return new B(new lt(0,0))}static max(){return new B(new lt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(t,e,r){e===void 0?e=0:e>t.length&&U(),r===void 0?r=t.length-e:r>t.length-e&&U(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return pn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof pn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),u=e.get(s);if(o<u)return-1;if(o>u)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class et extends pn{construct(t,e,r){return new et(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new et(e)}static emptyPath(){return new et([])}}const ic=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends pn{construct(t,e,r){return new gt(t,e,r)}static isValidIdentifier(t){return ic.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new x(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let u=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new x(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else c==="`"?(u=!u,s++):c!=="."||u?(r+=c,s++):(o(),s++)}if(o(),u)throw new x(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new gt(e)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(et.fromString(t))}static fromName(t){return new F(et.fromString(t).popFirst(5))}static empty(){return new F(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&et.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new et(t.slice()))}}function sc(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=B.fromTimestamp(r===1e9?new lt(e+1,0):new lt(e,r));return new Zt(s,F.empty(),t)}function oc(n){return new Zt(n.readTime,n.key,-1)}class Zt{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Zt(B.min(),F.empty(),-1)}static max(){return new Zt(B.max(),F.empty(),-1)}}function ac(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(n.documentKey,t.documentKey),e!==0?e:H(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function An(n){if(n.code!==V.FAILED_PRECONDITION||n.message!==uc)throw n;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new C((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof C?e:C.resolve(e)}catch(e){return C.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):C.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):C.reject(e)}static resolve(t){return new C((e,r)=>{e(t)})}static reject(t){return new C((e,r)=>{r(t)})}static waitFor(t){return new C((e,r)=>{let s=0,o=0,u=!1;t.forEach(c=>{++s,c.next(()=>{++o,u&&o===s&&e()},h=>r(h))}),u=!0,o===s&&e()})}static or(t){let e=C.resolve(!1);for(const r of t)e=e.next(s=>s?C.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new C((r,s)=>{const o=t.length,u=new Array(o);let c=0;for(let h=0;h<o;h++){const f=h;e(t[f]).next(g=>{u[f]=g,++c,c===o&&r(u)},g=>s(g))}})}static doWhile(t,e){return new C((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function cc(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function wn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}wi.oe=-1;function mr(n){return n==null}function ar(n){return n===0&&1/n==-1/0}function hc(n){return typeof n=="number"&&Number.isInteger(n)&&!ar(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function qe(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function la(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,e){this.comparator=t,this.root=e||mt.EMPTY}insert(t,e){return new rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(t){return new rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,mt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Wn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Wn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Wn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Wn(this.root,t,this.comparator,!0)}}class Wn{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class mt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r!=null?r:mt.RED,this.left=s!=null?s:mt.EMPTY,this.right=o!=null?o:mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new mt(t!=null?t:this.key,e!=null?e:this.value,r!=null?r:this.color,s!=null?s:this.left,o!=null?o:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return mt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return mt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const t=this.left.check();if(t!==this.right.check())throw U();return t+(this.isRed()?0:1)}}mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,r,s,o){return this}insert(t,e,r){return new mt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(t){this.comparator=t,this.data=new rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ao(this.data.getIterator())}getIteratorFrom(t){return new ao(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof pt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new pt(this.comparator);return e.data=t,e}}class ao{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t){this.fields=t,t.sort(gt.comparator)}static empty(){return new kt([])}unionWith(t){let e=new pt(gt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new kt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return De(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new ca("Invalid base64 string: "+o):o}}(t);return new wt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let u=0;u<s.length;++u)o+=String.fromCharCode(s[u]);return o}(t);return new wt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return H(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const dc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(n){if(Z(!!n),typeof n=="string"){let t=0;const e=dc.exec(n);if(Z(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:at(n.seconds),nanos:at(n.nanos)}}function at(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ge(n){return typeof n=="string"?wt.fromBase64String(n):wt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Pi(n){const t=n.mapValue.fields.__previous_value__;return Ri(t)?Pi(t):t}function _n(n){const t=te(n.mapValue.fields.__local_write_time__.timestampValue);return new lt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,e,r,s,o,u,c,h,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=h,this.useFetchStreams=f}}class yn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new yn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof yn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pe(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ri(n)?4:mc(n)?9007199254740991:10:U()}function Ut(n,t){if(n===t)return!0;const e=pe(n);if(e!==pe(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return _n(n).isEqual(_n(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const u=te(s.timestampValue),c=te(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return ge(s.bytesValue).isEqual(ge(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return at(s.geoPointValue.latitude)===at(o.geoPointValue.latitude)&&at(s.geoPointValue.longitude)===at(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return at(s.integerValue)===at(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const u=at(s.doubleValue),c=at(o.doubleValue);return u===c?ar(u)===ar(c):isNaN(u)&&isNaN(c)}return!1}(n,t);case 9:return De(n.arrayValue.values||[],t.arrayValue.values||[],Ut);case 10:return function(s,o){const u=s.mapValue.fields||{},c=o.mapValue.fields||{};if(oo(u)!==oo(c))return!1;for(const h in u)if(u.hasOwnProperty(h)&&(c[h]===void 0||!Ut(u[h],c[h])))return!1;return!0}(n,t);default:return U()}}function vn(n,t){return(n.values||[]).find(e=>Ut(e,t))!==void 0}function ke(n,t){if(n===t)return 0;const e=pe(n),r=pe(t);if(e!==r)return H(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return H(n.booleanValue,t.booleanValue);case 2:return function(o,u){const c=at(o.integerValue||o.doubleValue),h=at(u.integerValue||u.doubleValue);return c<h?-1:c>h?1:c===h?0:isNaN(c)?isNaN(h)?0:-1:1}(n,t);case 3:return uo(n.timestampValue,t.timestampValue);case 4:return uo(_n(n),_n(t));case 5:return H(n.stringValue,t.stringValue);case 6:return function(o,u){const c=ge(o),h=ge(u);return c.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,u){const c=o.split("/"),h=u.split("/");for(let f=0;f<c.length&&f<h.length;f++){const g=H(c[f],h[f]);if(g!==0)return g}return H(c.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,u){const c=H(at(o.latitude),at(u.latitude));return c!==0?c:H(at(o.longitude),at(u.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,u){const c=o.values||[],h=u.values||[];for(let f=0;f<c.length&&f<h.length;++f){const g=ke(c[f],h[f]);if(g)return g}return H(c.length,h.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,u){if(o===Hn.mapValue&&u===Hn.mapValue)return 0;if(o===Hn.mapValue)return 1;if(u===Hn.mapValue)return-1;const c=o.fields||{},h=Object.keys(c),f=u.fields||{},g=Object.keys(f);h.sort(),g.sort();for(let A=0;A<h.length&&A<g.length;++A){const R=H(h[A],g[A]);if(R!==0)return R;const P=ke(c[h[A]],f[g[A]]);if(P!==0)return P}return H(h.length,g.length)}(n.mapValue,t.mapValue);default:throw U()}}function uo(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return H(n,t);const e=te(n),r=te(t),s=H(e.seconds,r.seconds);return s!==0?s:H(e.nanos,r.nanos)}function xe(n){return oi(n)}function oi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=te(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return ge(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return F.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=oi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const u of r)o?o=!1:s+=",",s+=`${u}:${oi(e.fields[u])}`;return s+"}"}(n.mapValue):U()}function lo(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ai(n){return!!n&&"integerValue"in n}function Vi(n){return!!n&&"arrayValue"in n}function co(n){return!!n&&"nullValue"in n}function ho(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function rr(n){return!!n&&"mapValue"in n}function dn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return qe(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=dn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=dn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function mc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this.value=t}static empty(){return new bt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!rr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=dn(e)}setAll(t){let e=gt.emptyPath(),r={},s=[];t.forEach((u,c)=>{if(!e.isImmediateParentOf(c)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=c.popLast()}u?r[c.lastSegment()]=dn(u):s.push(c.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());rr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ut(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];rr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){qe(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new bt(dn(this.value))}}function ha(n){const t=[];return qe(n.fields,(e,r)=>{const s=new gt([e]);if(rr(r)){const o=ha(r.mapValue).fields;if(o.length===0)t.push(s);else for(const u of o)t.push(s.child(u))}else t.push(s)}),new kt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e,r,s,o,u,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new At(t,0,B.min(),B.min(),B.min(),bt.empty(),0)}static newFoundDocument(t,e,r,s){return new At(t,1,e,B.min(),r,s,0)}static newNoDocument(t,e){return new At(t,2,e,B.min(),B.min(),bt.empty(),0)}static newUnknownDocument(t,e){return new At(t,3,e,B.min(),B.min(),bt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t,e){this.position=t,this.inclusive=e}}function fo(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],u=n.position[s];if(o.field.isKeyField()?r=F.comparator(F.fromName(u.referenceValue),e.key):r=ke(u,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function mo(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Ut(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,e="asc"){this.field=t,this.dir=e}}function gc(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{}class ut extends da{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new _c(t,e,r):e==="array-contains"?new Tc(t,r):e==="in"?new Ec(t,r):e==="not-in"?new Ic(t,r):e==="array-contains-any"?new Ac(t,r):new ut(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new yc(t,r):new vc(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ke(e,this.value)):e!==null&&pe(this.value)===pe(e)&&this.matchesComparison(ke(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nt extends da{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Nt(t,e)}matches(t){return fa(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function fa(n){return n.op==="and"}function ma(n){return pc(n)&&fa(n)}function pc(n){for(const t of n.filters)if(t instanceof Nt)return!1;return!0}function ui(n){if(n instanceof ut)return n.field.canonicalString()+n.op.toString()+xe(n.value);if(ma(n))return n.filters.map(t=>ui(t)).join(",");{const t=n.filters.map(e=>ui(e)).join(",");return`${n.op}(${t})`}}function ga(n,t){return n instanceof ut?function(r,s){return s instanceof ut&&r.op===s.op&&r.field.isEqual(s.field)&&Ut(r.value,s.value)}(n,t):n instanceof Nt?function(r,s){return s instanceof Nt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,u,c)=>o&&ga(u,s.filters[c]),!0):!1}(n,t):void U()}function pa(n){return n instanceof ut?function(e){return`${e.field.canonicalString()} ${e.op} ${xe(e.value)}`}(n):n instanceof Nt?function(e){return e.op.toString()+" {"+e.getFilters().map(pa).join(" ,")+"}"}(n):"Filter"}class _c extends ut{constructor(t,e,r){super(t,e,r),this.key=F.fromName(r.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class yc extends ut{constructor(t,e){super(t,"in",e),this.keys=_a("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class vc extends ut{constructor(t,e){super(t,"not-in",e),this.keys=_a("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function _a(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>F.fromName(r.referenceValue))}class Tc extends ut{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Vi(e)&&vn(e.arrayValue,this.value)}}class Ec extends ut{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&vn(this.value.arrayValue,e)}}class Ic extends ut{constructor(t,e){super(t,"not-in",e)}matches(t){if(vn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!vn(this.value.arrayValue,e)}}class Ac extends ut{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Vi(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>vn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,e=null,r=[],s=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=u,this.endAt=c,this.ue=null}}function go(n,t=null,e=[],r=[],s=null,o=null,u=null){return new wc(n,t,e,r,s,o,u)}function Ci(n){const t=j(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ui(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),mr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>xe(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>xe(r)).join(",")),t.ue=e}return t.ue}function Si(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!gc(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ga(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!mo(n.startAt,t.startAt)&&mo(n.endAt,t.endAt)}function li(n){return F.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,e=null,r=[],s=[],o=null,u="F",c=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Rc(n,t,e,r,s,o,u,c){return new Be(n,t,e,r,s,o,u,c)}function bi(n){return new Be(n)}function po(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ya(n){return n.collectionGroup!==null}function fn(n){const t=j(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new pt(gt.comparator);return u.filters.forEach(h=>{h.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Tn(o,r))}),e.has(gt.keyField().canonicalString())||t.ce.push(new Tn(gt.keyField(),r))}return t.ce}function Ot(n){const t=j(n);return t.le||(t.le=Pc(t,fn(n))),t.le}function Pc(n,t){if(n.limitType==="F")return go(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Tn(s.field,o)});const e=n.endAt?new ur(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ur(n.startAt.position,n.startAt.inclusive):null;return go(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ci(n,t){const e=n.filters.concat([t]);return new Be(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function hi(n,t,e){return new Be(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function gr(n,t){return Si(Ot(n),Ot(t))&&n.limitType===t.limitType}function va(n){return`${Ci(Ot(n))}|lt:${n.limitType}`}function Pe(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>pa(s)).join(", ")}]`),mr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(u){return`${u.field.canonicalString()} (${u.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>xe(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>xe(s)).join(",")),`Target(${r})`}(Ot(n))}; limitType=${n.limitType})`}function pr(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):F.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of fn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(u,c,h){const f=fo(u,c,h);return u.inclusive?f<=0:f<0}(r.startAt,fn(r),s)||r.endAt&&!function(u,c,h){const f=fo(u,c,h);return u.inclusive?f>=0:f>0}(r.endAt,fn(r),s))}(n,t)}function Vc(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ta(n){return(t,e)=>{let r=!1;for(const s of fn(n)){const o=Cc(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Cc(n,t,e){const r=n.field.isKeyField()?F.comparator(t.key,e.key):function(o,u,c){const h=u.data.field(o),f=c.data.field(o);return h!==null&&f!==null?ke(h,f):U()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){qe(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return la(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=new rt(F.comparator);function zt(){return Sc}const Ea=new rt(F.comparator);function un(...n){let t=Ea;for(const e of n)t=t.insert(e.key,e);return t}function Ia(n){let t=Ea;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ue(){return mn()}function Aa(){return mn()}function mn(){return new je(n=>n.toString(),(n,t)=>n.isEqual(t))}const bc=new rt(F.comparator),Dc=new pt(F.comparator);function G(...n){let t=Dc;for(const e of n)t=t.add(e);return t}const kc=new pt(H);function xc(){return kc}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ar(t)?"-0":t}}function Ra(n){return{integerValue:""+n}}function Nc(n,t){return hc(t)?Ra(t):wa(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this._=void 0}}function Mc(n,t,e){return n instanceof lr?function(s,o){const u={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Ri(o)&&(o=Pi(o)),o&&(u.fields.__previous_value__=o),{mapValue:u}}(e,t):n instanceof En?Va(n,t):n instanceof In?Ca(n,t):function(s,o){const u=Pa(s,o),c=_o(u)+_o(s.Pe);return ai(u)&&ai(s.Pe)?Ra(c):wa(s.serializer,c)}(n,t)}function Fc(n,t,e){return n instanceof En?Va(n,t):n instanceof In?Ca(n,t):e}function Pa(n,t){return n instanceof cr?function(r){return ai(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class lr extends _r{}class En extends _r{constructor(t){super(),this.elements=t}}function Va(n,t){const e=Sa(t);for(const r of n.elements)e.some(s=>Ut(s,r))||e.push(r);return{arrayValue:{values:e}}}class In extends _r{constructor(t){super(),this.elements=t}}function Ca(n,t){let e=Sa(t);for(const r of n.elements)e=e.filter(s=>!Ut(s,r));return{arrayValue:{values:e}}}class cr extends _r{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function _o(n){return at(n.integerValue||n.doubleValue)}function Sa(n){return Vi(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Oc(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof En&&s instanceof En||r instanceof In&&s instanceof In?De(r.elements,s.elements,Ut):r instanceof cr&&s instanceof cr?Ut(r.Pe,s.Pe):r instanceof lr&&s instanceof lr}(n.transform,t.transform)}class Lc{constructor(t,e){this.version=t,this.transformResults=e}}class xt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new xt}static exists(t){return new xt(void 0,t)}static updateTime(t){return new xt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ir(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class yr{}function ba(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Di(n.key,xt.none()):new Rn(n.key,n.data,xt.none());{const e=n.data,r=bt.empty();let s=new pt(gt.comparator);for(let o of t.fields)if(!s.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?r.delete(o):r.set(o,u),s=s.add(o)}return new ve(n.key,r,new kt(s.toArray()),xt.none())}}function Uc(n,t,e){n instanceof Rn?function(s,o,u){const c=s.value.clone(),h=vo(s.fieldTransforms,o,u.transformResults);c.setAll(h),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ve?function(s,o,u){if(!ir(s.precondition,o))return void o.convertToUnknownDocument(u.version);const c=vo(s.fieldTransforms,o,u.transformResults),h=o.data;h.setAll(Da(s)),h.setAll(c),o.convertToFoundDocument(u.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()}(0,t,e)}function gn(n,t,e,r){return n instanceof Rn?function(o,u,c,h){if(!ir(o.precondition,u))return c;const f=o.value.clone(),g=To(o.fieldTransforms,h,u);return f.setAll(g),u.convertToFoundDocument(u.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof ve?function(o,u,c,h){if(!ir(o.precondition,u))return c;const f=To(o.fieldTransforms,h,u),g=u.data;return g.setAll(Da(o)),g.setAll(f),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(A=>A.field))}(n,t,e,r):function(o,u,c){return ir(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c}(n,t,e)}function qc(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=Pa(r.transform,s||null);o!=null&&(e===null&&(e=bt.empty()),e.set(r.field,o))}return e||null}function yo(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&De(r,s,(o,u)=>Oc(o,u))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Rn extends yr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ve extends yr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Da(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function vo(n,t,e){const r=new Map;Z(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],u=o.transform,c=t.data.field(o.field);r.set(o.field,Fc(u,c,e[s]))}return r}function To(n,t,e){const r=new Map;for(const s of n){const o=s.transform,u=e.data.field(s.field);r.set(s.field,Mc(o,u,t))}return r}class Di extends yr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Bc extends yr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Uc(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=gn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=gn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Aa();return this.mutations.forEach(s=>{const o=t.get(s.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(s.key)?null:c;const h=ba(u,c);h!==null&&r.set(s.key,h),u.isValidDocument()||u.convertToNoDocument(B.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),G())}isEqual(t){return this.batchId===t.batchId&&De(this.mutations,t.mutations,(e,r)=>yo(e,r))&&De(this.baseMutations,t.baseMutations,(e,r)=>yo(e,r))}}class ki{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Z(t.mutations.length===r.length);let s=function(){return bc}();const o=t.mutations;for(let u=0;u<o.length;u++)s=s.insert(o[u].key,r[u].version);return new ki(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ot,Q;function Kc(n){switch(n){default:return U();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function ka(n){if(n===void 0)return $t("GRPC error has no .code"),V.UNKNOWN;switch(n){case ot.OK:return V.OK;case ot.CANCELLED:return V.CANCELLED;case ot.UNKNOWN:return V.UNKNOWN;case ot.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case ot.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case ot.INTERNAL:return V.INTERNAL;case ot.UNAVAILABLE:return V.UNAVAILABLE;case ot.UNAUTHENTICATED:return V.UNAUTHENTICATED;case ot.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case ot.NOT_FOUND:return V.NOT_FOUND;case ot.ALREADY_EXISTS:return V.ALREADY_EXISTS;case ot.PERMISSION_DENIED:return V.PERMISSION_DENIED;case ot.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case ot.ABORTED:return V.ABORTED;case ot.OUT_OF_RANGE:return V.OUT_OF_RANGE;case ot.UNIMPLEMENTED:return V.UNIMPLEMENTED;case ot.DATA_LOSS:return V.DATA_LOSS;default:return U()}}(Q=ot||(ot={}))[Q.OK=0]="OK",Q[Q.CANCELLED=1]="CANCELLED",Q[Q.UNKNOWN=2]="UNKNOWN",Q[Q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Q[Q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Q[Q.NOT_FOUND=5]="NOT_FOUND",Q[Q.ALREADY_EXISTS=6]="ALREADY_EXISTS",Q[Q.PERMISSION_DENIED=7]="PERMISSION_DENIED",Q[Q.UNAUTHENTICATED=16]="UNAUTHENTICATED",Q[Q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Q[Q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Q[Q.ABORTED=10]="ABORTED",Q[Q.OUT_OF_RANGE=11]="OUT_OF_RANGE",Q[Q.UNIMPLEMENTED=12]="UNIMPLEMENTED",Q[Q.INTERNAL=13]="INTERNAL",Q[Q.UNAVAILABLE=14]="UNAVAILABLE",Q[Q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=new he([4294967295,4294967295],0);function Eo(n){const t=Gc().encode(n),e=new ta;return e.update(t),new Uint8Array(e.digest())}function Io(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new he([e,r],0),new he([s,o],0)]}class xi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new ln(`Invalid padding: ${e}`);if(r<0)throw new ln(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new ln(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new ln(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=he.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(he.fromNumber(r)));return s.compare(Qc)===1&&(s=new he([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Eo(t),[r,s]=Io(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,s,o);if(!this.de(u))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new xi(o,s,e);return r.forEach(c=>u.insert(c)),u}insert(t){if(this.Ie===0)return;const e=Eo(t),[r,s]=Io(e);for(let o=0;o<this.hashCount;o++){const u=this.Ee(r,s,o);this.Ae(u)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class ln extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Pn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new vr(B.min(),s,new rt(H),zt(),G())}}class Pn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Pn(r,e,G(),G(),G())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class xa{constructor(t,e){this.targetId=t,this.me=e}}class Na{constructor(t,e,r=wt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Ao{constructor(){this.fe=0,this.ge=Ro(),this.pe=wt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=G(),e=G(),r=G();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:U()}}),new Pn(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=Ro()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Wc{constructor(t){this.Le=t,this.Be=new Map,this.ke=zt(),this.qe=wo(),this.Qe=new rt(H)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:U()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(li(o))if(r===0){const u=new F(o.path);this.Ue(e,u,At.newNoDocument(u,B.min()))}else Z(r===1);else{const u=this.Ye(e);if(u!==r){const c=this.Ze(t),h=c?this.Xe(c,t,u):1;if(h!==0){this.je(e);const f=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let u,c;try{u=ge(r).toUint8Array()}catch(h){if(h instanceof ca)return be("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{c=new xi(u,s,o)}catch(h){return be(h instanceof ln?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const u=this.Le.tt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,u)=>{const c=this.Je(u);if(c){if(o.current&&li(c.target)){const h=new F(c.target.path);this.ke.get(h)!==null||this.it(u,h)||this.Ue(u,h,At.newNoDocument(h,t))}o.be&&(e.set(u,o.Ce()),o.ve())}});let r=G();this.qe.forEach((o,u)=>{let c=!0;u.forEachWhile(h=>{const f=this.Je(h);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(o))}),this.ke.forEach((o,u)=>u.setReadTime(t));const s=new vr(t,e,this.Qe,this.ke,r);return this.ke=zt(),this.qe=wo(),this.Qe=new rt(H),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Ao,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new pt(H),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||N("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ao),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function wo(){return new rt(F.comparator)}function Ro(){return new rt(F.comparator)}const Hc=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Xc=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Yc=(()=>({and:"AND",or:"OR"}))();class Jc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function di(n,t){return n.useProto3Json||mr(t)?t:{value:t}}function hr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ma(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Zc(n,t){return hr(n,t.toTimestamp())}function Lt(n){return Z(!!n),B.fromTimestamp(function(e){const r=te(e);return new lt(r.seconds,r.nanos)}(n))}function Ni(n,t){return fi(n,t).canonicalString()}function fi(n,t){const e=function(s){return new et(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Fa(n){const t=et.fromString(n);return Z(Ba(t)),t}function mi(n,t){return Ni(n.databaseId,t.path)}function Jr(n,t){const e=Fa(t);if(e.get(1)!==n.databaseId.projectId)throw new x(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new x(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new F(La(e))}function Oa(n,t){return Ni(n.databaseId,t)}function th(n){const t=Fa(n);return t.length===4?et.emptyPath():La(t)}function gi(n){return new et(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function La(n){return Z(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Po(n,t,e){return{name:mi(n,t),fields:e.value.mapValue.fields}}function eh(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:U()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(f,g){return f.useProto3Json?(Z(g===void 0||typeof g=="string"),wt.fromBase64String(g||"")):(Z(g===void 0||g instanceof Buffer||g instanceof Uint8Array),wt.fromUint8Array(g||new Uint8Array))}(n,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&function(f){const g=f.code===void 0?V.UNKNOWN:ka(f.code);return new x(g,f.message||"")}(u);e=new Na(r,s,o,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Jr(n,r.document.name),o=Lt(r.document.updateTime),u=r.document.createTime?Lt(r.document.createTime):B.min(),c=new bt({mapValue:{fields:r.document.fields}}),h=At.newFoundDocument(s,o,u,c),f=r.targetIds||[],g=r.removedTargetIds||[];e=new sr(f,g,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Jr(n,r.document),o=r.readTime?Lt(r.readTime):B.min(),u=At.newNoDocument(s,o),c=r.removedTargetIds||[];e=new sr([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Jr(n,r.document),o=r.removedTargetIds||[];e=new sr([],o,s,null)}else{if(!("filter"in t))return U();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,u=new zc(s,o),c=r.targetId;e=new xa(c,u)}}return e}function nh(n,t){let e;if(t instanceof Rn)e={update:Po(n,t.key,t.value)};else if(t instanceof Di)e={delete:mi(n,t.key)};else if(t instanceof ve)e={update:Po(n,t.key,t.data),updateMask:hh(t.fieldMask)};else{if(!(t instanceof Bc))return U();e={verify:mi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,u){const c=u.transform;if(c instanceof lr)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof En)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof In)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof cr)return{fieldPath:u.field.canonicalString(),increment:c.Pe};throw U()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Zc(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:U()}(n,t.precondition)),e}function rh(n,t){return n&&n.length>0?(Z(t!==void 0),n.map(e=>function(s,o){let u=s.updateTime?Lt(s.updateTime):Lt(o);return u.isEqual(B.min())&&(u=Lt(o)),new Lc(u,s.transformResults||[])}(e,t))):[]}function ih(n,t){return{documents:[Oa(n,t.path)]}}function sh(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Oa(n,s);const o=function(f){if(f.length!==0)return qa(Nt.create(f,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const u=function(f){if(f.length!==0)return f.map(g=>function(R){return{field:Ve(R.field),direction:uh(R.dir)}}(g))}(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=di(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function oh(n){let t=th(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Z(r===1);const g=e.from[0];g.allDescendants?s=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=function(A){const R=Ua(A);return R instanceof Nt&&ma(R)?R.getFilters():[R]}(e.where));let u=[];e.orderBy&&(u=function(A){return A.map(R=>function(b){return new Tn(Ce(b.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(R))}(e.orderBy));let c=null;e.limit&&(c=function(A){let R;return R=typeof A=="object"?A.value:A,mr(R)?null:R}(e.limit));let h=null;e.startAt&&(h=function(A){const R=!!A.before,P=A.values||[];return new ur(P,R)}(e.startAt));let f=null;return e.endAt&&(f=function(A){const R=!A.before,P=A.values||[];return new ur(P,R)}(e.endAt)),Rc(t,s,u,o,c,"F",h,f)}function ah(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ua(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ce(e.unaryFilter.field);return ut.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ce(e.unaryFilter.field);return ut.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ce(e.unaryFilter.field);return ut.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=Ce(e.unaryFilter.field);return ut.create(u,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(n):n.fieldFilter!==void 0?function(e){return ut.create(Ce(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Nt.create(e.compositeFilter.filters.map(r=>Ua(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(n):U()}function uh(n){return Hc[n]}function lh(n){return Xc[n]}function ch(n){return Yc[n]}function Ve(n){return{fieldPath:n.canonicalString()}}function Ce(n){return gt.fromServerFormat(n.fieldPath)}function qa(n){return n instanceof ut?function(e){if(e.op==="=="){if(ho(e.value))return{unaryFilter:{field:Ve(e.field),op:"IS_NAN"}};if(co(e.value))return{unaryFilter:{field:Ve(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ho(e.value))return{unaryFilter:{field:Ve(e.field),op:"IS_NOT_NAN"}};if(co(e.value))return{unaryFilter:{field:Ve(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ve(e.field),op:lh(e.op),value:e.value}}}(n):n instanceof Nt?function(e){const r=e.getFilters().map(s=>qa(s));return r.length===1?r[0]:{compositeFilter:{op:ch(e.op),filters:r}}}(n):U()}function hh(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ba(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t,e,r,s,o=B.min(),u=B.min(),c=wt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=h}withSequenceNumber(t){return new Xt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Xt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(t){this.ct=t}}function fh(n){const t=oh({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?hi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this._n=new gh}addToCollectionParentIndex(t,e){return this._n.add(e),C.resolve()}getCollectionParents(t,e){return C.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return C.resolve()}deleteFieldIndex(t,e){return C.resolve()}deleteAllFieldIndexes(t){return C.resolve()}createTargetIndexes(t,e){return C.resolve()}getDocumentsMatchingTarget(t,e){return C.resolve(null)}getIndexType(t,e){return C.resolve(0)}getFieldIndexes(t,e){return C.resolve([])}getNextCollectionGroupToUpdate(t){return C.resolve(null)}getMinOffset(t,e){return C.resolve(Zt.min())}getMinOffsetFromCollectionGroup(t,e){return C.resolve(Zt.min())}updateCollectionGroup(t,e,r){return C.resolve()}updateIndexEntries(t,e){return C.resolve()}}class gh{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new pt(et.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new pt(et.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Ne(0)}static Ln(){return new Ne(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.changes=new je(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,At.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?C.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&gn(r.mutation,s,kt.empty(),lt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,G()).next(()=>r))}getLocalViewOfDocuments(t,e,r=G()){const s=ue();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let u=un();return o.forEach((c,h)=>{u=u.insert(c,h.overlayedDocument)}),u}))}getOverlayedDocuments(t,e){const r=ue();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,G()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((u,c)=>{e.set(u,c)})})}computeViews(t,e,r,s){let o=zt();const u=mn(),c=function(){return mn()}();return e.forEach((h,f)=>{const g=r.get(f.key);s.has(f.key)&&(g===void 0||g.mutation instanceof ve)?o=o.insert(f.key,f):g!==void 0?(u.set(f.key,g.mutation.getFieldMask()),gn(g.mutation,f,g.mutation.getFieldMask(),lt.now())):u.set(f.key,kt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((f,g)=>u.set(f,g)),e.forEach((f,g)=>{var A;return c.set(f,new _h(g,(A=u.get(f))!==null&&A!==void 0?A:null))}),c))}recalculateAndSaveOverlays(t,e){const r=mn();let s=new rt((u,c)=>u-c),o=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(u=>{for(const c of u)c.keys().forEach(h=>{const f=e.get(h);if(f===null)return;let g=r.get(h)||kt.empty();g=c.applyToLocalView(f,g),r.set(h,g);const A=(s.get(c.batchId)||G()).add(h);s=s.insert(c.batchId,A)})}).next(()=>{const u=[],c=s.getReverseIterator();for(;c.hasNext();){const h=c.getNext(),f=h.key,g=h.value,A=Aa();g.forEach(R=>{if(!o.has(R)){const P=ba(e.get(R),r.get(R));P!==null&&A.set(R,P),o=o.add(R)}}),u.push(this.documentOverlayCache.saveOverlays(t,f,A))}return C.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(u){return F.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ya(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const u=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):C.resolve(ue());let c=-1,h=o;return u.next(f=>C.forEach(f,(g,A)=>(c<A.largestBatchId&&(c=A.largestBatchId),o.get(g)?C.resolve():this.remoteDocumentCache.getEntry(t,g).next(R=>{h=h.insert(g,R)}))).next(()=>this.populateOverlays(t,f,o)).next(()=>this.computeViews(t,h,f,G())).next(g=>({batchId:c,changes:Ia(g)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next(r=>{let s=un();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let u=un();return this.indexManager.getCollectionParents(t,o).next(c=>C.forEach(c,h=>{const f=function(A,R){return new Be(R,null,A.explicitOrderBy.slice(),A.filters.slice(),A.limit,A.limitType,A.startAt,A.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(g=>{g.forEach((A,R)=>{u=u.insert(A,R)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(u=>{o.forEach((h,f)=>{const g=f.getKey();u.get(g)===null&&(u=u.insert(g,At.newInvalidDocument(g)))});let c=un();return u.forEach((h,f)=>{const g=o.get(h);g!==void 0&&gn(g.mutation,f,kt.empty(),lt.now()),pr(e,f)&&(c=c.insert(h,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return C.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Lt(s.createTime)}}(e)),C.resolve()}getNamedQuery(t,e){return C.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:fh(s.bundledQuery),readTime:Lt(s.readTime)}}(e)),C.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(){this.overlays=new rt(F.comparator),this.hr=new Map}getOverlay(t,e){return C.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ue();return C.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),C.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),C.resolve()}getOverlaysForCollection(t,e,r){const s=ue(),o=e.length+1,u=new F(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const h=c.getNext().value,f=h.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return C.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new rt((f,g)=>f-g);const u=this.overlays.getIterator();for(;u.hasNext();){const f=u.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let g=o.get(f.largestBatchId);g===null&&(g=ue(),o=o.insert(f.largestBatchId,g)),g.set(f.getKey(),f)}}const c=ue(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((f,g)=>c.set(f,g)),!(c.size()>=s)););return C.resolve(c)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new $c(e,r));let o=this.hr.get(e);o===void 0&&(o=G(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.Pr=new pt(dt.Ir),this.Tr=new pt(dt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new dt(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new dt(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new F(new et([])),r=new dt(e,t),s=new dt(e,t+1),o=[];return this.Tr.forEachInRange([r,s],u=>{this.Ar(u),o.push(u.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new F(new et([])),r=new dt(e,t),s=new dt(e,t+1);let o=G();return this.Tr.forEachInRange([r,s],u=>{o=o.add(u.key)}),o}containsKey(t){const e=new dt(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class dt{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return F.comparator(t.key,e.key)||H(t.pr,e.pr)}static Er(t,e){return H(t.pr,e.pr)||F.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new pt(dt.Ir)}checkEmpty(t){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new jc(o,e,r,s);this.mutationQueue.push(u);for(const c of s)this.wr=this.wr.add(new dt(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return C.resolve(u)}lookupMutationBatch(t,e){return C.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.br(r),o=s<0?0:s;return C.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new dt(e,0),s=new dt(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,s],u=>{const c=this.Sr(u.pr);o.push(c)}),C.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new pt(H);return e.forEach(s=>{const o=new dt(s,0),u=new dt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,u],c=>{r=r.add(c.pr)})}),C.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;F.isDocumentKey(o)||(o=o.child(""));const u=new dt(new F(o),0);let c=new pt(H);return this.wr.forEachWhile(h=>{const f=h.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(h.pr)),!0)},u),C.resolve(this.Dr(c))}Dr(t){const e=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Z(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return C.forEach(e.mutations,s=>{const o=new dt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new dt(e,0),s=this.wr.firstAfterOrEqual(r);return C.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,C.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t){this.vr=t,this.docs=function(){return new rt(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,u=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return C.resolve(r?r.document.mutableCopy():At.newInvalidDocument(e))}getEntries(t,e){let r=zt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():At.newInvalidDocument(s))}),C.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=zt();const u=e.path,c=new F(u.child("")),h=this.docs.getIteratorFrom(c);for(;h.hasNext();){const{key:f,value:{document:g}}=h.getNext();if(!u.isPrefixOf(f.path))break;f.path.length>u.length+1||ac(oc(g),r)<=0||(s.has(g.key)||pr(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return C.resolve(o)}getAllFromCollectionGroup(t,e,r,s){U()}Fr(t,e){return C.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Ah(this)}getSize(t){return C.resolve(this.size)}}class Ah extends ph{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),C.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t){this.persistence=t,this.Mr=new je(e=>Ci(e),Si),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Mi,this.targetCount=0,this.Lr=Ne.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,s)=>e(s)),C.resolve()}getLastRemoteSnapshotVersion(t){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return C.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),C.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Ne(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,C.resolve()}updateTargetData(t,e){return this.qn(e),C.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,C.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Mr.forEach((u,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Mr.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),C.waitFor(o).next(()=>s)}getTargetCount(t){return C.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return C.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),C.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(u=>{o.push(s.markPotentiallyOrphaned(t,u))}),C.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),C.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return C.resolve(r)}containsKey(t,e){return C.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(t,e){this.Br={},this.overlays={},this.kr=new wi(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new wh(this),this.indexManager=new mh,this.remoteDocumentCache=function(s){return new Ih(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new dh(e),this.$r=new vh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Th,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new Eh(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){N("MemoryPersistence","Starting transaction:",t);const s=new Ph(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(t,e){return C.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class Ph extends lc{constructor(t){super(),this.currentSequenceNumber=t}}class Fi{constructor(t){this.persistence=t,this.zr=new Mi,this.jr=null}static Hr(t){return new Fi(t)}get Jr(){if(this.jr)return this.jr;throw U()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),C.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),C.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Jr,r=>{const s=F.fromPath(r);return this.Yr(t,s).next(o=>{o||e.removeEntry(s,B.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return C.or([()=>C.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=s}static Ki(t,e){let r=G(),s=G();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Oi(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return gl()?8:cc(pl())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ji(t,e).next(u=>{o.result=u}).next(()=>{if(!o.result)return this.Hi(t,e,s,r).next(u=>{o.result=u})}).next(()=>{if(o.result)return;const u=new Vh;return this.Ji(t,e,u).next(c=>{if(o.result=c,this.Ui)return this.Yi(t,e,u,c.size)})}).next(()=>o.result)}Yi(t,e,r,s){return r.documentReadCount<this.Wi?(sn()<=Ht.DEBUG&&N("QueryEngine","SDK will not create cache indexes for query:",Pe(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),C.resolve()):(sn()<=Ht.DEBUG&&N("QueryEngine","Query:",Pe(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(sn()<=Ht.DEBUG&&N("QueryEngine","The SDK decides to create cache indexes for query:",Pe(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ot(e))):C.resolve())}ji(t,e){if(po(e))return C.resolve(null);let r=Ot(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=hi(e,null,"F"),r=Ot(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const u=G(...o);return this.zi.getDocuments(t,u).next(c=>this.indexManager.getMinOffset(t,r).next(h=>{const f=this.Zi(e,c);return this.Xi(e,f,u,h.readTime)?this.ji(t,hi(e,null,"F")):this.es(t,f,e,h)}))})))}Hi(t,e,r,s){return po(e)||s.isEqual(B.min())?C.resolve(null):this.zi.getDocuments(t,r).next(o=>{const u=this.Zi(e,o);return this.Xi(e,u,r,s)?C.resolve(null):(sn()<=Ht.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Pe(e)),this.es(t,u,e,sc(s,-1)).next(c=>c))})}Zi(t,e){let r=new pt(Ta(t));return e.forEach((s,o)=>{pr(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(t,e,r){return sn()<=Ht.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",Pe(e)),this.zi.getDocumentsMatchingQuery(t,e,Zt.min(),r)}es(t,e,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(u=>{o=o.insert(u.key,u)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,e,r,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new rt(H),this.rs=new je(o=>Ci(o),Si),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new yh(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function bh(n,t,e,r){return new Sh(n,t,e,r)}async function ja(n,t){const e=j(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const u=[],c=[];let h=G();for(const f of s){u.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}for(const f of o){c.push(f.batchId);for(const g of f.mutations)h=h.add(g.key)}return e.localDocuments.getDocuments(r,h).next(f=>({us:f,removedBatchIds:u,addedBatchIds:c}))})})}function Dh(n,t){const e=j(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(c,h,f,g){const A=f.batch,R=A.keys();let P=C.resolve();return R.forEach(b=>{P=P.next(()=>g.getEntry(h,b)).next(k=>{const D=f.docVersions.get(b);Z(D!==null),k.version.compareTo(D)<0&&(A.applyToRemoteDocument(k,f),k.isValidDocument()&&(k.setReadTime(f.commitVersion),g.addEntry(k)))})}),P.next(()=>c.mutationQueue.removeMutationBatch(h,A))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let h=G();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(h=h.add(c.batch.mutations[f].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function $a(n){const t=j(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function kh(n,t){const e=j(n),r=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const u=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const c=[];t.targetChanges.forEach((g,A)=>{const R=s.get(A);if(!R)return;c.push(e.Qr.removeMatchingKeys(o,g.removedDocuments,A).next(()=>e.Qr.addMatchingKeys(o,g.addedDocuments,A)));let P=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(A)!==null?P=P.withResumeToken(wt.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):g.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(g.resumeToken,r)),s=s.insert(A,P),function(k,D,O){return k.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(R,P,g)&&c.push(e.Qr.updateTargetData(o,P))});let h=zt(),f=G();if(t.documentUpdates.forEach(g=>{t.resolvedLimboDocuments.has(g)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))}),c.push(xh(o,u,t.documentUpdates).next(g=>{h=g.cs,f=g.ls})),!r.isEqual(B.min())){const g=e.Qr.getLastRemoteSnapshotVersion(o).next(A=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));c.push(g)}return C.waitFor(c).next(()=>u.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,f)).next(()=>h)}).then(o=>(e.ns=s,o))}function xh(n,t,e){let r=G(),s=G();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let u=zt();return e.forEach((c,h)=>{const f=o.get(c);h.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),h.isNoDocument()&&h.version.isEqual(B.min())?(t.removeEntry(c,h.readTime),u=u.insert(c,h)):!f.isValidDocument()||h.version.compareTo(f.version)>0||h.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(h),u=u.insert(c,h)):N("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",h.version)}),{cs:u,ls:s}})}function Nh(n,t){const e=j(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Mh(n,t){const e=j(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Qr.getTargetData(r,t).next(o=>o?(s=o,C.resolve(s)):e.Qr.allocateTargetId(r).next(u=>(s=new Xt(t,u,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function pi(n,t,e){const r=j(n),s=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,u=>r.persistence.referenceDelegate.removeTarget(u,s))}catch(u){if(!wn(u))throw u;N("LocalStore",`Failed to update sequence numbers for target ${t}: ${u}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function Vo(n,t,e){const r=j(n);let s=B.min(),o=G();return r.persistence.runTransaction("Execute query","readwrite",u=>function(h,f,g){const A=j(h),R=A.rs.get(g);return R!==void 0?C.resolve(A.ns.get(R)):A.Qr.getTargetData(f,g)}(r,u,Ot(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(u,c.targetId).next(h=>{o=h})}).next(()=>r.ts.getDocumentsMatchingQuery(u,t,e?s:B.min(),e?o:G())).next(c=>(Fh(r,Vc(t),c),{documents:c,hs:o})))}function Fh(n,t,e){let r=n.ss.get(t)||B.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class Co{constructor(){this.activeTargetIds=xc()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Oh{constructor(){this.no=new Co,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Co,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){N("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xn=null;function Zr(){return Xn===null?Xn=function(){return 268435456+Math.round(2147483648*Math.random())}():Xn++,"0x"+Xn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="WebChannelConnection";class Bh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(e,r,s,o,u){const c=Zr(),h=this.vo(e,r.toUriEncodedString());N("RestConnection",`Sending RPC '${e}' ${c}:`,h,s);const f={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(f,o,u),this.Mo(e,h,f,s).then(g=>(N("RestConnection",`Received RPC '${e}' ${c}: `,g),g),g=>{throw be("RestConnection",`RPC '${e}' ${c} failed with error: `,g,"url: ",h,"request:",s),g})}xo(e,r,s,o,u,c){return this.Co(e,r,s,o,u)}Fo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ue}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,u)=>e[u]=o),s&&s.headers.forEach((o,u)=>e[u]=o)}vo(e,r){const s=Uh[e];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,s){const o=Zr();return new Promise((u,c)=>{const h=new ea;h.setWithCredentials(!0),h.listenOnce(ra.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case nr.NO_ERROR:const g=h.getResponseJson();N(Et,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(g)),u(g);break;case nr.TIMEOUT:N(Et,`RPC '${t}' ${o} timed out`),c(new x(V.DEADLINE_EXCEEDED,"Request time out"));break;case nr.HTTP_ERROR:const A=h.getStatus();if(N(Et,`RPC '${t}' ${o} failed with status:`,A,"response text:",h.getResponseText()),A>0){let R=h.getResponseJson();Array.isArray(R)&&(R=R[0]);const P=R==null?void 0:R.error;if(P&&P.status&&P.message){const b=function(D){const O=D.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(O)>=0?O:V.UNKNOWN}(P.status);c(new x(b,P.message))}else c(new x(V.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new x(V.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{N(Et,`RPC '${t}' ${o} completed.`)}});const f=JSON.stringify(s);N(Et,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",f,r,15)})}Oo(t,e,r){const s=Zr(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=oa(),c=sa(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(h.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(h.xmlHttpFactory=new na({})),this.Fo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const g=o.join("");N(Et,`Creating RPC '${t}' stream ${s}: ${g}`,h);const A=u.createWebChannel(g,h);let R=!1,P=!1;const b=new qh({lo:D=>{P?N(Et,`Not sending because RPC '${t}' stream ${s} is closed:`,D):(R||(N(Et,`Opening RPC '${t}' stream ${s} transport.`),A.open(),R=!0),N(Et,`RPC '${t}' stream ${s} sending:`,D),A.send(D))},ho:()=>A.close()}),k=(D,O,$)=>{D.listen(O,z=>{try{$(z)}catch(K){setTimeout(()=>{throw K},0)}})};return k(A,an.EventType.OPEN,()=>{P||(N(Et,`RPC '${t}' stream ${s} transport opened.`),b.mo())}),k(A,an.EventType.CLOSE,()=>{P||(P=!0,N(Et,`RPC '${t}' stream ${s} transport closed`),b.po())}),k(A,an.EventType.ERROR,D=>{P||(P=!0,be(Et,`RPC '${t}' stream ${s} transport errored:`,D),b.po(new x(V.UNAVAILABLE,"The operation could not be completed")))}),k(A,an.EventType.MESSAGE,D=>{var O;if(!P){const $=D.data[0];Z(!!$);const z=$,K=z.error||((O=z[0])===null||O===void 0?void 0:O.error);if(K){N(Et,`RPC '${t}' stream ${s} received error:`,K);const q=K.status;let M=function(_){const y=ot[_];if(y!==void 0)return ka(y)}(q),v=K.message;M===void 0&&(M=V.INTERNAL,v="Unknown error status: "+q+" with message "+K.message),P=!0,b.po(new x(M,v)),A.close()}else N(Et,`RPC '${t}' stream ${s} received:`,$),b.yo($)}}),k(c,ia.STAT_EVENT,D=>{D.stat===si.PROXY?N(Et,`RPC '${t}' stream ${s} detected buffering proxy`):D.stat===si.NOPROXY&&N(Et,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{b.fo()},0),b}}function ti(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(n){return new Jc(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(t,e,r=1e3,s=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-r);s>0&&N("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(t,e,r,s,o,u,c,h){this.oi=t,this.Go=r,this.zo=s,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=h,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new za(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===V.RESOURCE_EXHAUSTED?($t(e.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===e&&this.u_(r,s)},r=>{t(()=>{const s=new x(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return N("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jh extends Ka{constructor(t,e,r,s,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,u),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=eh(this.serializer,t),r=function(o){if(!("targetChange"in o))return B.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?B.min():u.readTime?Lt(u.readTime):B.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=gi(this.serializer),e.addTarget=function(o,u){let c;const h=u.target;if(c=li(h)?{documents:ih(o,h)}:{query:sh(o,h)._t},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=Ma(o,u.resumeToken);const f=di(o,u.expectedCount);f!==null&&(c.expectedCount=f)}else if(u.snapshotVersion.compareTo(B.min())>0){c.readTime=hr(o,u.snapshotVersion.toTimestamp());const f=di(o,u.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=ah(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=gi(this.serializer),e.removeTarget=t,this.i_(e)}}class $h extends Ka{constructor(t,e,r,s,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,u),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(Z(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=rh(t.writeResults,t.commitTime),r=Lt(t.commitTime);return this.listener.A_(r,e)}return Z(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=gi(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>nh(this.serializer,r))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zh extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new x(V.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Co(t,fi(e,r),s,o,u)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(V.UNKNOWN,o.toString())})}xo(t,e,r,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,c])=>this.connection.xo(t,fi(e,r),s,u,c,o)).catch(u=>{throw u.name==="FirebaseError"?(u.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new x(V.UNKNOWN,u.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Kh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?($t(e),this.y_=!1):N("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(u=>{r.enqueueAndForget(async()=>{Te(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=j(h);f.M_.add(4),await Vn(f),f.N_.set("Unknown"),f.M_.delete(4),await Er(f)}(this))})}),this.N_=new Kh(r,s)}}async function Er(n){if(Te(n))for(const t of n.x_)await t(!0)}async function Vn(n){for(const t of n.x_)await t(!1)}function Ga(n,t){const e=j(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),Bi(e)?qi(e):$e(e).Xo()&&Ui(e,t))}function Li(n,t){const e=j(n),r=$e(e);e.F_.delete(t),r.Xo()&&Qa(e,t),e.F_.size===0&&(r.Xo()?r.n_():Te(e)&&e.N_.set("Unknown"))}function Ui(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(B.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}$e(n).P_(t)}function Qa(n,t){n.L_.xe(t),$e(n).I_(t)}function qi(n){n.L_=new Wc({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),$e(n).start(),n.N_.w_()}function Bi(n){return Te(n)&&!$e(n).Zo()&&n.F_.size>0}function Te(n){return j(n).M_.size===0}function Wa(n){n.L_=void 0}async function Qh(n){n.N_.set("Online")}async function Wh(n){n.F_.forEach((t,e)=>{Ui(n,t)})}async function Hh(n,t){Wa(n),Bi(n)?(n.N_.D_(t),qi(n)):n.N_.set("Unknown")}async function Xh(n,t,e){if(n.N_.set("Online"),t instanceof Na&&t.state===2&&t.cause)try{await async function(s,o){const u=o.cause;for(const c of o.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,u),s.F_.delete(c),s.L_.removeTarget(c))}(n,t)}catch(r){N("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await dr(n,r)}else if(t instanceof sr?n.L_.Ke(t):t instanceof xa?n.L_.He(t):n.L_.We(t),!e.isEqual(B.min()))try{const r=await $a(n.localStore);e.compareTo(r)>=0&&await function(o,u){const c=o.L_.rt(u);return c.targetChanges.forEach((h,f)=>{if(h.resumeToken.approximateByteSize()>0){const g=o.F_.get(f);g&&o.F_.set(f,g.withResumeToken(h.resumeToken,u))}}),c.targetMismatches.forEach((h,f)=>{const g=o.F_.get(h);if(!g)return;o.F_.set(h,g.withResumeToken(wt.EMPTY_BYTE_STRING,g.snapshotVersion)),Qa(o,h);const A=new Xt(g.target,h,f,g.sequenceNumber);Ui(o,A)}),o.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){N("RemoteStore","Failed to raise snapshot:",r),await dr(n,r)}}async function dr(n,t,e){if(!wn(t))throw t;n.M_.add(1),await Vn(n),n.N_.set("Offline"),e||(e=()=>$a(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await Er(n)})}function Ha(n,t){return t().catch(e=>dr(n,e,t))}async function Ir(n){const t=j(n),e=ee(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;Yh(t);)try{const s=await Nh(t.localStore,r);if(s===null){t.v_.length===0&&e.n_();break}r=s.batchId,Jh(t,s)}catch(s){await dr(t,s)}Xa(t)&&Ya(t)}function Yh(n){return Te(n)&&n.v_.length<10}function Jh(n,t){n.v_.push(t);const e=ee(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function Xa(n){return Te(n)&&!ee(n).Zo()&&n.v_.length>0}function Ya(n){ee(n).start()}async function Zh(n){ee(n).V_()}async function td(n){const t=ee(n);for(const e of n.v_)t.d_(e.mutations)}async function ed(n,t,e){const r=n.v_.shift(),s=ki.from(r,t,e);await Ha(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ir(n)}async function nd(n,t){t&&ee(n).E_&&await async function(r,s){if(function(u){return Kc(u)&&u!==V.ABORTED}(s.code)){const o=r.v_.shift();ee(r).t_(),await Ha(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Ir(r)}}(n,t),Xa(n)&&Ya(n)}async function bo(n,t){const e=j(n);e.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");const r=Te(e);e.M_.add(3),await Vn(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Er(e)}async function rd(n,t){const e=j(n);t?(e.M_.delete(2),await Er(e)):t||(e.M_.add(2),await Vn(e),e.N_.set("Unknown"))}function $e(n){return n.B_||(n.B_=function(e,r,s){const o=j(e);return o.f_(),new jh(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:Qh.bind(null,n),To:Wh.bind(null,n),Ao:Hh.bind(null,n),h_:Xh.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),Bi(n)?qi(n):n.N_.set("Unknown")):(await n.B_.stop(),Wa(n))})),n.B_}function ee(n){return n.k_||(n.k_=function(e,r,s){const o=j(e);return o.f_(),new $h(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:Zh.bind(null,n),Ao:nd.bind(null,n),R_:td.bind(null,n),A_:ed.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await Ir(n)):(await n.k_.stop(),n.v_.length>0&&(N("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new de,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const u=Date.now()+r,c=new ji(t,e,u,s,o);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $i(n,t){if($t("AsyncQueue",`${t}: ${n}`),wn(n))return new x(V.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t){this.comparator=t?(e,r)=>t(e,r)||F.comparator(e.key,r.key):(e,r)=>F.comparator(e.key,r.key),this.keyedMap=un(),this.sortedSet=new rt(this.comparator)}static emptySet(t){return new Se(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Se)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Se;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this.q_=new rt(F.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):U():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Me{constructor(t,e,r,s,o,u,c,h,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=h,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,o){const u=[];return e.forEach(c=>{u.push({type:0,doc:c})}),new Me(t,e,Se.emptySet(e),u,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&gr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class sd{constructor(){this.queries=new je(t=>va(t),gr),this.onlineState="Unknown",this.z_=new Set}}async function od(n,t){const e=j(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.W_()&&t.G_()&&(r=2):(o=new id,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(s,!0);break;case 1:o.K_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(u){const c=$i(u,`Initialization of query '${Pe(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&zi(e)}async function ad(n,t){const e=j(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const u=o.U_.indexOf(t);u>=0&&(o.U_.splice(u,1),o.U_.length===0?s=t.G_()?0:1:!o.W_()&&t.G_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function ud(n,t){const e=j(n);let r=!1;for(const s of t){const o=s.query,u=e.queries.get(o);if(u){for(const c of u.U_)c.H_(s)&&(r=!0);u.K_=s}}r&&zi(e)}function ld(n,t,e){const r=j(n),s=r.queries.get(t);if(s)for(const o of s.U_)o.onError(e);r.queries.delete(t)}function zi(n){n.z_.forEach(t=>{t.next()})}var _i,ko;(ko=_i||(_i={})).J_="default",ko.Cache="cache";class cd{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Me(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=Me.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==_i.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t){this.key=t}}class Za{constructor(t){this.key=t}}class hd{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=G(),this.mutatedKeys=G(),this.Ia=Ta(t),this.Ta=new Se(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new Do,s=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,u=s,c=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((g,A)=>{const R=s.get(g),P=pr(this.query,A)?A:null,b=!!R&&this.mutatedKeys.has(R.key),k=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let D=!1;R&&P?R.data.isEqual(P.data)?b!==k&&(r.track({type:3,doc:P}),D=!0):this.Ra(R,P)||(r.track({type:2,doc:P}),D=!0,(h&&this.Ia(P,h)>0||f&&this.Ia(P,f)<0)&&(c=!0)):!R&&P?(r.track({type:0,doc:P}),D=!0):R&&!P&&(r.track({type:1,doc:R}),D=!0,(h||f)&&(c=!0)),D&&(P?(u=u.add(P),o=k?o.add(g):o.delete(g)):(u=u.delete(g),o=o.delete(g)))}),this.query.limit!==null)for(;u.size>this.query.limit;){const g=this.query.limitType==="F"?u.last():u.first();u=u.delete(g.key),o=o.delete(g.key),r.track({type:1,doc:g})}return{Ta:u,Aa:r,Xi:c,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const u=t.Aa.Q_();u.sort((g,A)=>function(P,b){const k=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return k(P)-k(b)}(g.type,A.type)||this.Ia(g.doc,A.doc)),this.Va(r),s=s!=null&&s;const c=e&&!s?this.ma():[],h=this.Pa.size===0&&this.current&&!s?1:0,f=h!==this.ha;return this.ha=h,u.length!==0||f?{snapshot:new Me(this.query,t.Ta,o,u,t.mutatedKeys,h===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Do,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=G(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new Za(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new Ja(r))}),e}pa(t){this.la=t.hs,this.Pa=G();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return Me.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class dd{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class fd{constructor(t){this.key=t,this.wa=!1}}class md{constructor(t,e,r,s,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.Sa={},this.ba=new je(c=>va(c),gr),this.Da=new Map,this.Ca=new Set,this.va=new rt(F.comparator),this.Fa=new Map,this.Ma=new Mi,this.xa={},this.Oa=new Map,this.Na=Ne.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function gd(n,t,e=!0){const r=su(n);let s;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.ya()):s=await tu(r,t,e,!0),s}async function pd(n,t){const e=su(n);await tu(e,t,!0,!1)}async function tu(n,t,e,r){const s=await Mh(n.localStore,Ot(t)),o=s.targetId,u=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let c;return r&&(c=await _d(n,t,o,u==="current",s.resumeToken)),n.isPrimaryClient&&e&&Ga(n.remoteStore,s),c}async function _d(n,t,e,r,s){n.Ba=(A,R,P)=>async function(k,D,O,$){let z=D.view.da(O);z.Xi&&(z=await Vo(k.localStore,D.query,!1).then(({documents:v})=>D.view.da(v,z)));const K=$&&$.targetChanges.get(D.targetId),q=$&&$.targetMismatches.get(D.targetId)!=null,M=D.view.applyChanges(z,k.isPrimaryClient,K,q);return No(k,D.targetId,M.fa),M.snapshot}(n,A,R,P);const o=await Vo(n.localStore,t,!0),u=new hd(t,o.hs),c=u.da(o.documents),h=Pn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=u.applyChanges(c,n.isPrimaryClient,h);No(n,e,f.fa);const g=new dd(t,e,u);return n.ba.set(t,g),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),f.snapshot}async function yd(n,t,e){const r=j(n),s=r.ba.get(t),o=r.Da.get(s.targetId);if(o.length>1)return r.Da.set(s.targetId,o.filter(u=>!gr(u,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await pi(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Li(r.remoteStore,s.targetId),yi(r,s.targetId)}).catch(An)):(yi(r,s.targetId),await pi(r.localStore,s.targetId,!0))}async function vd(n,t){const e=j(n),r=e.ba.get(t),s=e.Da.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Li(e.remoteStore,r.targetId))}async function Td(n,t,e){const r=Vd(n);try{const s=await function(u,c){const h=j(u),f=lt.now(),g=c.reduce((P,b)=>P.add(b.key),G());let A,R;return h.persistence.runTransaction("Locally write mutations","readwrite",P=>{let b=zt(),k=G();return h.os.getEntries(P,g).next(D=>{b=D,b.forEach((O,$)=>{$.isValidDocument()||(k=k.add(O))})}).next(()=>h.localDocuments.getOverlayedDocuments(P,b)).next(D=>{A=D;const O=[];for(const $ of c){const z=qc($,A.get($.key).overlayedDocument);z!=null&&O.push(new ve($.key,z,ha(z.value.mapValue),xt.exists(!0)))}return h.mutationQueue.addMutationBatch(P,f,O,c)}).next(D=>{R=D;const O=D.applyToLocalDocumentSet(A,k);return h.documentOverlayCache.saveOverlays(P,D.batchId,O)})}).then(()=>({batchId:R.batchId,changes:Ia(A)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(u,c,h){let f=u.xa[u.currentUser.toKey()];f||(f=new rt(H)),f=f.insert(c,h),u.xa[u.currentUser.toKey()]=f}(r,s.batchId,e),await Cn(r,s.changes),await Ir(r.remoteStore)}catch(s){const o=$i(s,"Failed to persist write");e.reject(o)}}async function eu(n,t){const e=j(n);try{const r=await kh(e.localStore,t);t.targetChanges.forEach((s,o)=>{const u=e.Fa.get(o);u&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?u.wa=!0:s.modifiedDocuments.size>0?Z(u.wa):s.removedDocuments.size>0&&(Z(u.wa),u.wa=!1))}),await Cn(e,r,t)}catch(r){await An(r)}}function xo(n,t,e){const r=j(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ba.forEach((o,u)=>{const c=u.view.j_(t);c.snapshot&&s.push(c.snapshot)}),function(u,c){const h=j(u);h.onlineState=c;let f=!1;h.queries.forEach((g,A)=>{for(const R of A.U_)R.j_(c)&&(f=!0)}),f&&zi(h)}(r.eventManager,t),s.length&&r.Sa.h_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Ed(n,t,e){const r=j(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Fa.get(t),o=s&&s.key;if(o){let u=new rt(F.comparator);u=u.insert(o,At.newNoDocument(o,B.min()));const c=G().add(o),h=new vr(B.min(),new Map,new rt(H),u,c);await eu(r,h),r.va=r.va.remove(o),r.Fa.delete(t),Ki(r)}else await pi(r.localStore,t,!1).then(()=>yi(r,t,e)).catch(An)}async function Id(n,t){const e=j(n),r=t.batch.batchId;try{const s=await Dh(e.localStore,t);ru(e,r,null),nu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Cn(e,s)}catch(s){await An(s)}}async function Ad(n,t,e){const r=j(n);try{const s=await function(u,c){const h=j(u);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let g;return h.mutationQueue.lookupMutationBatch(f,c).next(A=>(Z(A!==null),g=A.keys(),h.mutationQueue.removeMutationBatch(f,A))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,g,c)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,g)).next(()=>h.localDocuments.getDocuments(f,g))})}(r.localStore,t);ru(r,t,e),nu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Cn(r,s)}catch(s){await An(s)}}function nu(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function ru(n,t,e){const r=j(n);let s=r.xa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.xa[r.currentUser.toKey()]=s}}function yi(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||iu(n,r)})}function iu(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&(Li(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),Ki(n))}function No(n,t,e){for(const r of e)r instanceof Ja?(n.Ma.addReference(r.key,t),wd(n,r)):r instanceof Za?(N("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||iu(n,r.key)):U()}function wd(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(N("SyncEngine","New document in limbo: "+e),n.Ca.add(r),Ki(n))}function Ki(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new F(et.fromString(t)),r=n.Na.next();n.Fa.set(r,new fd(e)),n.va=n.va.insert(e,r),Ga(n.remoteStore,new Xt(Ot(bi(e.path)),r,"TargetPurposeLimboResolution",wi.oe))}}async function Cn(n,t,e){const r=j(n),s=[],o=[],u=[];r.ba.isEmpty()||(r.ba.forEach((c,h)=>{u.push(r.Ba(h,t,e).then(f=>{if((f||e)&&r.isPrimaryClient){const g=f&&!f.fromCache;r.sharedClientState.updateQueryState(h.targetId,g?"current":"not-current")}if(f){s.push(f);const g=Oi.Ki(h.targetId,f);o.push(g)}}))}),await Promise.all(u),r.Sa.h_(s),await async function(h,f){const g=j(h);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",A=>C.forEach(f,R=>C.forEach(R.qi,P=>g.persistence.referenceDelegate.addReference(A,R.targetId,P)).next(()=>C.forEach(R.Qi,P=>g.persistence.referenceDelegate.removeReference(A,R.targetId,P)))))}catch(A){if(!wn(A))throw A;N("LocalStore","Failed to update sequence numbers: "+A)}for(const A of f){const R=A.targetId;if(!A.fromCache){const P=g.ns.get(R),b=P.snapshotVersion,k=P.withLastLimboFreeSnapshotVersion(b);g.ns=g.ns.insert(R,k)}}}(r.localStore,o))}async function Rd(n,t){const e=j(n);if(!e.currentUser.isEqual(t)){N("SyncEngine","User change. New user:",t.toKey());const r=await ja(e.localStore,t);e.currentUser=t,function(o,u){o.Oa.forEach(c=>{c.forEach(h=>{h.reject(new x(V.CANCELLED,u))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Cn(e,r.us)}}function Pd(n,t){const e=j(n),r=e.Fa.get(t);if(r&&r.wa)return G().add(r.key);{let s=G();const o=e.Da.get(t);if(!o)return s;for(const u of o){const c=e.ba.get(u);s=s.unionWith(c.view.Ea)}return s}}function su(n){const t=j(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=eu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Pd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Ed.bind(null,t),t.Sa.h_=ud.bind(null,t.eventManager),t.Sa.ka=ld.bind(null,t.eventManager),t}function Vd(n){const t=j(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Id.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Ad.bind(null,t),t}class Mo{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Tr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return bh(this.persistence,new Ch,t.initialUser,this.serializer)}createPersistence(t){return new Rh(Fi.Hr,this.serializer)}createSharedClientState(t){return new Oh}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Cd{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xo(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rd.bind(null,this.syncEngine),await rd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new sd}()}createDatastore(t){const e=Tr(t.databaseInfo.databaseId),r=function(o){return new Bh(o)}(t.databaseInfo);return function(o,u,c,h){return new zh(o,u,c,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,u,c){return new Gh(r,s,o,u,c)}(this.localStore,this.datastore,t.asyncQueue,e=>xo(this.syncEngine,e,0),function(){return So.D()?new So:new Lh}())}createSyncEngine(t,e){return function(s,o,u,c,h,f,g){const A=new md(s,o,u,c,h,f);return g&&(A.La=!0),A}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=j(r);N("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Vn(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):$t("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=ua.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{N("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(N("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new de;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=$i(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ei(n,t){n.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await ja(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Fo(n,t){n.asyncQueue.verifyOperationInProgress();const e=await kd(n);N("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>bo(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>bo(t.remoteStore,s)),n._onlineComponents=t}function Dd(n){return n.name==="FirebaseError"?n.code===V.FAILED_PRECONDITION||n.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function kd(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await ei(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!Dd(e))throw e;be("Error using user provided cache. Falling back to memory cache: "+e),await ei(n,new Mo)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await ei(n,new Mo);return n._offlineComponents}async function ou(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await Fo(n,n._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await Fo(n,new Cd))),n._onlineComponents}function xd(n){return ou(n).then(t=>t.syncEngine)}async function Oo(n){const t=await ou(n),e=t.eventManager;return e.onListen=gd.bind(null,t.syncEngine),e.onUnlisten=yd.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=pd.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=vd.bind(null,t.syncEngine),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(n,t,e){if(!e)throw new x(V.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Nd(n,t,e,r){if(t===!0&&r===!0)throw new x(V.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Uo(n){if(!F.isDocumentKey(n))throw new x(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function qo(n){if(F.isDocumentKey(n))throw new x(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ar(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":U()}function Yt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ar(n);throw new x(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new x(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Nd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=au((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new x(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class wr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bo({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new x(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bo(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Xl;switch(r.type){case"firstParty":return new tc(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Lo.get(e);r&&(N("ComponentProvider","Removing Datastore"),Lo.delete(e),r.terminate())}(this),Promise.resolve()}}function Md(n,t,e,r={}){var s;const o=(n=Yt(n,wr))._getSettings(),u=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==u&&be("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:u,ssl:!1})),r.mockUserToken){let c,h;if(typeof r.mockUserToken=="string")c=r.mockUserToken,h=It.MOCK_USER;else{c=fl(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new x(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new It(f)}n._authCredentials=new Yl(new aa(c,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ee(this.firestore,t,this._query)}}class Ct{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ct(this.firestore,t,this._key)}}class Jt extends Ee{constructor(t,e,r){super(t,e,bi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ct(this.firestore,null,new F(t))}withConverter(t){return new Jt(this.firestore,t,this._path)}}function wf(n,t,...e){if(n=fe(n),uu("collection","path",t),n instanceof wr){const r=et.fromString(t,...e);return qo(r),new Jt(n,null,r)}{if(!(n instanceof Ct||n instanceof Jt))throw new x(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return qo(r),new Jt(n.firestore,null,r)}}function Fd(n,t,...e){if(n=fe(n),arguments.length===1&&(t=ua.newId()),uu("doc","path",t),n instanceof wr){const r=et.fromString(t,...e);return Uo(r),new Ct(n,null,new F(r))}{if(!(n instanceof Ct||n instanceof Jt))throw new x(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(et.fromString(t,...e));return Uo(r),new Ct(n.firestore,n instanceof Jt?n.converter:null,new F(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new za(this,"async_queue_retry"),this.hu=()=>{const e=ti();e&&N("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=ti();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=ti();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new de;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!wn(t))throw t;N("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const s=function(u){let c=u.message||"";return u.stack&&(c=u.stack.includes(u.message)?u.stack:u.message+`
`+u.stack),c}(r);throw $t("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=ji.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&U()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}function jo(n){return function(e,r){if(typeof e!="object"||e===null)return!1;const s=e;for(const o of r)if(o in s&&typeof s[o]=="function")return!0;return!1}(n,["next","error","complete"])}class Fe extends wr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new Od}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||cu(this),this._firestoreClient.terminate()}}function Rf(n,t){const e=typeof n=="object"?n:ll(),r=typeof n=="string"?n:t||"(default)",s=cl(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=hl("firestore");o&&Md(s,...o)}return s}function lu(n){return n._firestoreClient||cu(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function cu(n){var t,e,r;const s=n._freezeSettings(),o=function(c,h,f,g){return new fc(c,h,f,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,au(g.experimentalLongPollingOptions),g.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new bd(n._authCredentials,n._appCheckCredentials,n._queue,o),((e=s.localCache)===null||e===void 0?void 0:e._offlineComponentProvider)&&((r=s.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Oe(wt.fromBase64String(t))}catch(e){throw new x(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Oe(wt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return H(this._lat,t._lat)||H(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld=/^__.*__$/;class Ud{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new ve(t,this.data,this.fieldMask,e,this.fieldTransforms):new Rn(t,this.data,e,this.fieldTransforms)}}function du(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Wi{constructor(t,e,r,s,o,u){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new Wi(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.wu(t),s}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return fr(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(du(this.fu)&&Ld.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class qd{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Tr(t)}Fu(t,e,r,s=!1){return new Wi({fu:t,methodName:e,vu:r,path:gt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Hi(n){const t=n._freezeSettings(),e=Tr(n._databaseId);return new qd(n._databaseId,!!t.ignoreUndefinedProperties,e)}function fu(n,t,e,r,s,o={}){const u=n.Fu(o.merge||o.mergeFields?2:0,t,e,s);pu("Data must be an object, but it was:",u,r);const c=mu(r,u);let h,f;if(o.merge)h=new kt(u.fieldMask),f=u.fieldTransforms;else if(o.mergeFields){const g=[];for(const A of o.mergeFields){const R=jd(t,A,e);if(!u.contains(R))throw new x(V.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);zd(g,R)||g.push(R)}h=new kt(g),f=u.fieldTransforms.filter(A=>h.covers(A.field))}else h=null,f=u.fieldTransforms;return new Ud(new bt(c),h,f)}function Bd(n,t,e,r=!1){return Xi(e,n.Fu(r?4:3,t))}function Xi(n,t){if(gu(n=fe(n)))return pu("Unsupported field value:",t,n),mu(n,t);if(n instanceof hu)return function(r,s){if(!du(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,s){const o=[];let u=0;for(const c of r){let h=Xi(c,s.bu(u));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),u++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Nc(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=lt.fromDate(r);return{timestampValue:hr(s.serializer,o)}}if(r instanceof lt){const o=new lt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hr(s.serializer,o)}}if(r instanceof Qi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Oe)return{bytesValue:Ma(s.serializer,r._byteString)};if(r instanceof Ct){const o=s.databaseId,u=r.firestore._databaseId;if(!u.isEqual(o))throw s.Du(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ni(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Ar(r)}`)}(n,t)}function mu(n,t){const e={};return la(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):qe(n,(r,s)=>{const o=Xi(s,t.pu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function gu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof lt||n instanceof Qi||n instanceof Oe||n instanceof Ct||n instanceof hu)}function pu(n,t,e){if(!gu(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Ar(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function jd(n,t,e){if((t=fe(t))instanceof Gi)return t._internalPath;if(typeof t=="string")return _u(n,t);throw fr("Field path arguments must be of type string or ",n,!1,void 0,e)}const $d=new RegExp("[~\\*/\\[\\]]");function _u(n,t,e){if(t.search($d)>=0)throw fr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Gi(...t.split("."))._internalPath}catch{throw fr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function fr(n,t,e,r,s){const o=r&&!r.isEmpty(),u=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let h="";return(o||u)&&(h+=" (found",o&&(h+=` in field ${r}`),u&&(h+=` in document ${s}`),h+=")"),new x(V.INVALID_ARGUMENT,c+n+h)}function zd(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Ct(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Kd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Rr("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Kd extends yu{data(){return super.data()}}function Rr(n,t){return typeof t=="string"?_u(n,t):t instanceof Gi?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gd(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yi{}class vu extends Yi{}function Pf(n,t,...e){let r=[];t instanceof Yi&&r.push(t),r=r.concat(e),function(o){const u=o.filter(h=>h instanceof Ji).length,c=o.filter(h=>h instanceof Pr).length;if(u>1||u>0&&c>0)throw new x(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Pr extends vu{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Pr(t,e,r)}_apply(t){const e=this._parse(t);return Tu(t._query,e),new Ee(t.firestore,t.converter,ci(t._query,e))}_parse(t){const e=Hi(t.firestore);return function(o,u,c,h,f,g,A){let R;if(f.isKeyField()){if(g==="array-contains"||g==="array-contains-any")throw new x(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${g}' queries on documentId().`);if(g==="in"||g==="not-in"){zo(A,g);const P=[];for(const b of A)P.push($o(h,o,b));R={arrayValue:{values:P}}}else R=$o(h,o,A)}else g!=="in"&&g!=="not-in"&&g!=="array-contains-any"||zo(A,g),R=Bd(c,u,A,g==="in"||g==="not-in");return ut.create(f,g,R)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Vf(n,t,e){const r=t,s=Rr("where",n);return Pr._create(s,r,e)}class Ji extends Yi{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ji(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Nt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let u=s;const c=o.getFlattenedFilters();for(const h of c)Tu(u,h),u=ci(u,h)}(t._query,e),new Ee(t.firestore,t.converter,ci(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Zi extends vu{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Zi(t,e)}_apply(t){const e=function(s,o,u){if(s.startAt!==null)throw new x(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new x(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Tn(o,u)}(t._query,this._field,this._direction);return new Ee(t.firestore,t.converter,function(s,o){const u=s.explicitOrderBy.concat([o]);return new Be(s.path,s.collectionGroup,u,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function Cf(n,t="asc"){const e=t,r=Rr("orderBy",n);return Zi._create(r,e)}function $o(n,t,e){if(typeof(e=fe(e))=="string"){if(e==="")throw new x(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ya(t)&&e.indexOf("/")!==-1)throw new x(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(et.fromString(e));if(!F.isDocumentKey(r))throw new x(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return lo(n,new F(r))}if(e instanceof Ct)return lo(n,e._key);throw new x(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ar(e)}.`)}function zo(n,t){if(!Array.isArray(n)||n.length===0)throw new x(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Tu(n,t){const e=function(s,o){for(const u of s)for(const c of u.getFlattenedFilters())if(o.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new x(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new x(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Qd{convertValue(t,e="none"){switch(pe(t)){case 0:return null;case 1:return t.booleanValue;case 2:return at(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ge(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw U()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return qe(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new Qi(at(t.latitude),at(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Pi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(_n(t));default:return null}}convertTimestamp(t){const e=te(t);return new lt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=et.fromString(t);Z(Ba(r));const s=new yn(r.get(1),r.get(3)),o=new F(r.popFirst(5));return s.isEqual(e)||$t(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Iu extends yu{constructor(t,e,r,s,o,u){super(t,e,r,s,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new or(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Rr("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class or extends Iu{data(t={}){return super.data(t)}}class Wd{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new cn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new or(this._firestore,this._userDataWriter,r.key,r,new cn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let u=0;return s._snapshot.docChanges.map(c=>{const h=new or(s._firestore,s._userDataWriter,c.doc.key,c.doc,new cn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:h,oldIndex:-1,newIndex:u++}})}{let u=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>o||c.type!==3).map(c=>{const h=new or(s._firestore,s._userDataWriter,c.doc.key,c.doc,new cn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,g=-1;return c.type!==0&&(f=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),g=u.indexOf(c.doc.key)),{type:Hd(c.type),doc:h,oldIndex:f,newIndex:g}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Hd(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}class Au extends Qd{constructor(t){super(),this.firestore=t}convertBytes(t){return new Oe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Ct(this.firestore,null,e)}}function Sf(n,t,e){n=Yt(n,Ct);const r=Yt(n.firestore,Fe),s=Eu(n.converter,t,e);return ts(r,[fu(Hi(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,xt.none())])}function bf(n){return ts(Yt(n.firestore,Fe),[new Di(n._key,xt.none())])}function Df(n,t){const e=Yt(n.firestore,Fe),r=Fd(n),s=Eu(n.converter,t);return ts(e,[fu(Hi(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,xt.exists(!1))]).then(()=>r)}function kf(n,...t){var e,r,s;n=fe(n);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof t[u]!="object"||jo(t[u])||(o=t[u],u++);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(jo(t[u])){const A=t[u];t[u]=(e=A.next)===null||e===void 0?void 0:e.bind(A),t[u+1]=(r=A.error)===null||r===void 0?void 0:r.bind(A),t[u+2]=(s=A.complete)===null||s===void 0?void 0:s.bind(A)}let h,f,g;if(n instanceof Ct)f=Yt(n.firestore,Fe),g=bi(n._key.path),h={next:A=>{t[u]&&t[u](Xd(f,n,A))},error:t[u+1],complete:t[u+2]};else{const A=Yt(n,Ee);f=Yt(A.firestore,Fe),g=A._query;const R=new Au(f);h={next:P=>{t[u]&&t[u](new Wd(f,R,A,P))},error:t[u+1],complete:t[u+2]},Gd(n._query)}return function(R,P,b,k){const D=new Sd(k),O=new cd(P,D,b);return R.asyncQueue.enqueueAndForget(async()=>od(await Oo(R),O)),()=>{D.$a(),R.asyncQueue.enqueueAndForget(async()=>ad(await Oo(R),O))}}(lu(f),g,c,h)}function ts(n,t){return function(r,s){const o=new de;return r.asyncQueue.enqueueAndForget(async()=>Td(await xd(r),s,o)),o.promise}(lu(n),t)}function Xd(n,t,e){const r=e.docs.get(t._key),s=new Au(n);return new Iu(n,s,t._key,r,new cn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){Ue=s})(ml),ol(new al("firestore",(r,{instanceIdentifier:s,options:o})=>{const u=r.getProvider("app").getImmediate(),c=new Fe(new Jl(r.getProvider("auth-internal")),new nc(r.getProvider("app-check-internal")),function(f,g){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new x(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yn(f.options.projectId,g)}(u,s),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c},"PUBLIC").setMultipleInstances(!0)),eo(so,"4.6.3",t),eo(so,"4.6.3","esm2017")})();const ni=Symbol("Forwarded refs");function ri(n,t){let e=n;for(;e;){const r=Reflect.getOwnPropertyDescriptor(e,t);if(r)return r;e=Object.getPrototypeOf(e)}}function Yd(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return n[ni]=e,new Proxy(n,{get(s,o){if(Reflect.has(s,o))return Reflect.get(s,o);if(!(typeof o=="symbol"||o.startsWith("$")||o.startsWith("__"))){for(const u of e)if(u.value&&Reflect.has(u.value,o)){const c=Reflect.get(u.value,o);return typeof c=="function"?c.bind(u.value):c}}},has(s,o){if(Reflect.has(s,o))return!0;if(typeof o=="symbol"||o.startsWith("$")||o.startsWith("__"))return!1;for(const u of e)if(u.value&&Reflect.has(u.value,o))return!0;return!1},set(s,o,u){if(Reflect.has(s,o))return Reflect.set(s,o,u);if(typeof o=="symbol"||o.startsWith("$")||o.startsWith("__"))return!1;for(const c of e)if(c.value&&Reflect.has(c.value,o))return Reflect.set(c.value,o,u);return!1},getOwnPropertyDescriptor(s,o){var c,h;const u=Reflect.getOwnPropertyDescriptor(s,o);if(u)return u;if(!(typeof o=="symbol"||o.startsWith("$")||o.startsWith("__"))){for(const f of e){if(!f.value)continue;const g=(h=ri(f.value,o))!=null?h:"_"in f.value?ri((c=f.value._)==null?void 0:c.setupState,o):void 0;if(g)return g}for(const f of e){const g=f.value&&f.value[ni];if(!g)continue;const A=g.slice();for(;A.length;){const R=A.shift(),P=ri(R.value,o);if(P)return P;const b=R.value&&R.value[ni];b&&A.push(...b)}}}}})}const Jd=Kt({active:Boolean,disabled:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Le(),...Yo({transition:{component:Xo}})},"VCounter"),Zd=_e()({name:"VCounter",functional:!0,props:Jd(),setup(n,t){let{slots:e}=t;const r=Y(()=>n.max?`${n.value} / ${n.max}`:String(n.value));return ye(()=>L(Jo,{transition:n.transition},{default:()=>[vi(L("div",{class:["v-counter",{"text-error":n.max&&!n.disabled&&parseFloat(n.value)>parseFloat(n.max)},n.class],style:n.style},[e.default?e.default({counter:r.value,max:n.max,value:n.value}):r.value]),[[Go,n.active]])]})),{}}});const tf=Kt({text:String,onClick:le(),...Le(),...Ti()},"VLabel"),ef=_e()({name:"VLabel",props:tf(),setup(n,t){let{slots:e}=t;return ye(()=>{var r;return L("label",{class:["v-label",{"v-label--clickable":!!n.onClick},n.class],style:n.style,onClick:n.onClick},[n.text,(r=e.default)==null?void 0:r.call(e)])}),{}}}),nf=Kt({floating:Boolean,...Le()},"VFieldLabel"),Yn=_e()({name:"VFieldLabel",props:nf(),setup(n,t){let{slots:e}=t;return ye(()=>L(ef,{class:["v-field-label",{"v-field-label--floating":n.floating},n.class],style:n.style,"aria-hidden":n.floating||void 0},e)),{}}});function wu(n){const{t}=_l();function e(r){var h;let{name:s}=r;const o={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[s],u=n[`onClick:${s}`],c=u&&o?t(`$vuetify.input.${o}`,(h=n.label)!=null?h:""):void 0;return L(Fl,{icon:n[`${s}Icon`],"aria-label":c,onClick:u},null)}return{InputIcon:e}}const Ru=Kt({focused:Boolean,"onUpdate:focused":le()},"focus");function Pu(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Qo();const e=Ei(n,"focused"),r=Y(()=>({[`${t}--focused`]:e.value}));function s(){e.value=!0}function o(){e.value=!1}return{focusClasses:r,isFocused:e,focus:s,blur:o}}const rf=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Vu=Kt({appendInnerIcon:hn,bgColor:String,clearable:Boolean,clearIcon:{type:hn,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:hn,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:n=>rf.includes(n)},"onClick:clear":le(),"onClick:appendInner":le(),"onClick:prependInner":le(),...Le(),...Ol(),...Ll(),...Ti()},"VField"),Cu=_e()({name:"VField",inheritAttrs:!1,props:{id:String,...Ru(),...Vu()},emits:{"update:focused":n=>!0,"update:modelValue":n=>!0},setup(n,t){let{attrs:e,emit:r,slots:s}=t;const{themeClasses:o}=Wo(n),{loaderClasses:u}=Ul(n),{focusClasses:c,isFocused:h,focus:f,blur:g}=Pu(n),{InputIcon:A}=wu(n),{roundedClasses:R}=ql(n),{rtlClasses:P}=Ho(),b=Y(()=>n.dirty||n.active),k=Y(()=>!n.singleLine&&!!(n.label||s.label)),D=Ii(),O=Y(()=>n.id||`input-${D}`),$=Y(()=>`${O.value}-messages`),z=ce(),K=ce(),q=ce(),M=Y(()=>["plain","underlined"].includes(n.variant)),{backgroundColorClasses:v,backgroundColorStyles:m}=Bl(yl(n,"bgColor")),{textColorClasses:_,textColorStyles:y}=Zo(Y(()=>n.error||n.disabled?void 0:b.value&&h.value?n.color:n.baseColor));on(b,X=>{if(k.value){const nt=z.value.$el,Rt=K.value.$el;requestAnimationFrame(()=>{const ct=Ql(nt),ht=Rt.getBoundingClientRect(),Mt=ht.x-ct.x,Ft=ht.y-ct.y-(ct.height/2-ht.height/2),qt=ht.width/.75,_t=Math.abs(qt-ct.width)>1?{maxWidth:vl(qt)}:void 0,st=getComputedStyle(nt),Sn=getComputedStyle(Rt),ne=parseFloat(st.transitionDuration)*1e3||150,Vr=parseFloat(Sn.getPropertyValue("--v-field-label-scale")),re=Sn.getPropertyValue("color");nt.style.visibility="visible",Rt.style.visibility="hidden",Wl(nt,{transform:`translate(${Mt}px, ${Ft}px) scale(${Vr})`,color:re,..._t},{duration:ne,easing:Hl,direction:X?"normal":"reverse"}).finished.then(()=>{nt.style.removeProperty("visibility"),Rt.style.removeProperty("visibility")})})}},{flush:"post"});const T=Y(()=>({isActive:b,isFocused:h,controlRef:q,blur:g,focus:f}));function I(X){X.target!==document.activeElement&&X.preventDefault()}function p(X){var nt;X.key!=="Enter"&&X.key!==" "||(X.preventDefault(),X.stopPropagation(),(nt=n["onClick:clear"])==null||nt.call(n,new MouseEvent("click")))}return ye(()=>{var Mt,Ft,qt,_t;const X=n.variant==="outlined",nt=!!(s["prepend-inner"]||n.prependInnerIcon),Rt=!!(n.clearable||s.clear),ct=!!(s["append-inner"]||n.appendInnerIcon||Rt),ht=()=>s.label?s.label({...T.value,label:n.label,props:{for:O.value}}):n.label;return L("div",Zn({class:["v-field",{"v-field--active":b.value,"v-field--appended":ct,"v-field--center-affix":(Mt=n.centerAffix)!=null?Mt:!M.value,"v-field--disabled":n.disabled,"v-field--dirty":n.dirty,"v-field--error":n.error,"v-field--flat":n.flat,"v-field--has-background":!!n.bgColor,"v-field--persistent-clear":n.persistentClear,"v-field--prepended":nt,"v-field--reverse":n.reverse,"v-field--single-line":n.singleLine,"v-field--no-label":!ht(),[`v-field--variant-${n.variant}`]:!0},o.value,v.value,c.value,u.value,R.value,P.value,n.class],style:[m.value,n.style],onClick:I},e),[L("div",{class:"v-field__overlay"},null),L(jl,{name:"v-field",active:!!n.loading,color:n.error?"error":typeof n.loading=="string"?n.loading:n.color},{default:s.loader}),nt&&L("div",{key:"prepend",class:"v-field__prepend-inner"},[n.prependInnerIcon&&L(A,{key:"prepend-icon",name:"prependInner"},null),(Ft=s["prepend-inner"])==null?void 0:Ft.call(s,T.value)]),L("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(n.variant)&&k.value&&L(Yn,{key:"floating-label",ref:K,class:[_.value],floating:!0,for:O.value,style:y.value},{default:()=>[ht()]}),L(Yn,{ref:z,for:O.value},{default:()=>[ht()]}),(qt=s.default)==null?void 0:qt.call(s,{...T.value,props:{id:O.value,class:"v-field__input","aria-describedby":$.value},focus:f,blur:g})]),Rt&&L(Ml,{key:"clear"},{default:()=>[vi(L("div",{class:"v-field__clearable",onMousedown:st=>{st.preventDefault(),st.stopPropagation()}},[L($l,{defaults:{VIcon:{icon:n.clearIcon}}},{default:()=>[s.clear?s.clear({...T.value,props:{onKeydown:p,onFocus:f,onBlur:g,onClick:n["onClick:clear"]}}):L(A,{name:"clear",onKeydown:p,onFocus:f,onBlur:g},null)]})]),[[Go,n.dirty]])]}),ct&&L("div",{key:"append",class:"v-field__append-inner"},[(_t=s["append-inner"])==null?void 0:_t.call(s,T.value),n.appendInnerIcon&&L(A,{key:"append-icon",name:"appendInner"},null)]),L("div",{class:["v-field__outline",_.value],style:y.value},[X&&L(Jn,null,[L("div",{class:"v-field__outline__start"},null),k.value&&L("div",{class:"v-field__outline__notch"},[L(Yn,{ref:K,floating:!0,for:O.value},{default:()=>[ht()]})]),L("div",{class:"v-field__outline__end"},null)]),M.value&&k.value&&L(Yn,{ref:K,floating:!0,for:O.value},{default:()=>[ht()]})])])}),{controlRef:q}}});function sf(n){const t=Object.keys(Cu.props).filter(e=>!Tl(e)&&e!=="class"&&e!=="style");return El(n,t)}const of=Kt({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...Le(),...Yo({transition:{component:Xo,leaveAbsolute:!0,group:!0}})},"VMessages"),af=_e()({name:"VMessages",props:of(),setup(n,t){let{slots:e}=t;const r=Y(()=>tr(n.messages)),{textColorClasses:s,textColorStyles:o}=Zo(Y(()=>n.color));return ye(()=>L(Jo,{transition:n.transition,tag:"div",class:["v-messages",s.value,n.class],style:[o.value,n.style],role:"alert","aria-live":"polite"},{default:()=>[n.active&&r.value.map((u,c)=>L("div",{class:"v-messages__message",key:`${c}-${r.value}`},[e.message?e.message({message:u}):u]))]})),{}}}),uf=Symbol.for("vuetify:form");function lf(){return Il(uf,null)}const cf=Kt({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Ru()},"validation");function hf(n){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Qo(),e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ii();const r=Ei(n,"modelValue"),s=Y(()=>n.validationValue===void 0?r.value:n.validationValue),o=lf(),u=ce([]),c=no(!0),h=Y(()=>!!(tr(r.value===""?null:r.value).length||tr(s.value===""?null:s.value).length)),f=Y(()=>{var q;return!!((q=n.disabled)!=null?q:o==null?void 0:o.isDisabled.value)}),g=Y(()=>{var q;return!!((q=n.readonly)!=null?q:o==null?void 0:o.isReadonly.value)}),A=Y(()=>{var q;return(q=n.errorMessages)!=null&&q.length?tr(n.errorMessages).concat(u.value).slice(0,Math.max(0,+n.maxErrors)):u.value}),R=Y(()=>{var v,m;let q=((v=n.validateOn)!=null?v:o==null?void 0:o.validateOn.value)||"input";q==="lazy"&&(q="input lazy");const M=new Set((m=q==null?void 0:q.split(" "))!=null?m:[]);return{blur:M.has("blur")||M.has("input"),input:M.has("input"),submit:M.has("submit"),lazy:M.has("lazy")}}),P=Y(()=>{var q;return n.error||((q=n.errorMessages)==null?void 0:q.length)?!1:n.rules.length?c.value?u.value.length||R.value.lazy?null:!0:!u.value.length:!0}),b=no(!1),k=Y(()=>({[`${t}--error`]:P.value===!1,[`${t}--dirty`]:h.value,[`${t}--disabled`]:f.value,[`${t}--readonly`]:g.value})),D=Al("validation"),O=Y(()=>{var q;return(q=n.name)!=null?q:wl(e)});Rl(()=>{o==null||o.register({id:O.value,vm:D,validate:K,reset:$,resetValidation:z})}),Pl(()=>{o==null||o.unregister(O.value)}),Vl(async()=>{R.value.lazy||await K(!0),o==null||o.update(O.value,P.value,A.value)}),ro(()=>R.value.input,()=>{on(s,()=>{if(s.value!=null)K();else if(n.focused){const q=on(()=>n.focused,M=>{M||K(),q()})}})}),ro(()=>R.value.blur,()=>{on(()=>n.focused,q=>{q||K()})}),on([P,A],()=>{o==null||o.update(O.value,P.value,A.value)});async function $(){r.value=null,await ii(),await z()}async function z(){c.value=!0,R.value.lazy?u.value=[]:await K(!0)}async function K(){var v;let q=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const M=[];b.value=!0;for(const m of n.rules){if(M.length>=+((v=n.maxErrors)!=null?v:1))break;const y=await(typeof m=="function"?m:()=>m)(s.value);if(y!==!0){if(y!==!1&&typeof y!="string"){console.warn(`${y} is not a valid value. Rule functions must return boolean true or a string.`);continue}M.push(y||"")}}return u.value=M,b.value=!1,c.value=q,u.value}return{errorMessages:A,isDirty:h,isDisabled:f,isReadonly:g,isPristine:c,isValid:P,isValidating:b,reset:$,resetValidation:z,validate:K,validationClasses:k}}const Su=Kt({id:String,appendIcon:hn,centerAffix:{type:Boolean,default:!0},prependIcon:hn,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:n=>["horizontal","vertical"].includes(n)},"onClick:prepend":le(),"onClick:append":le(),...Le(),...zl(),...Cl(Sl(),["maxWidth","minWidth","width"]),...Ti(),...cf()},"VInput"),Ko=_e()({name:"VInput",props:{...Su()},emits:{"update:modelValue":n=>!0},setup(n,t){let{attrs:e,slots:r,emit:s}=t;const{densityClasses:o}=Kl(n),{dimensionStyles:u}=bl(n),{themeClasses:c}=Wo(n),{rtlClasses:h}=Ho(),{InputIcon:f}=wu(n),g=Ii(),A=Y(()=>n.id||`input-${g}`),R=Y(()=>`${A.value}-messages`),{errorMessages:P,isDirty:b,isDisabled:k,isReadonly:D,isPristine:O,isValid:$,isValidating:z,reset:K,resetValidation:q,validate:M,validationClasses:v}=hf(n,"v-input",A),m=Y(()=>({id:A,messagesId:R,isDirty:b,isDisabled:k,isReadonly:D,isPristine:O,isValid:$,isValidating:z,reset:K,resetValidation:q,validate:M})),_=Y(()=>{var y;return((y=n.errorMessages)==null?void 0:y.length)||!O.value&&P.value.length?P.value:n.hint&&(n.persistentHint||n.focused)?n.hint:n.messages});return ye(()=>{var X,nt,Rt,ct;const y=!!(r.prepend||n.prependIcon),T=!!(r.append||n.appendIcon),I=_.value.length>0,p=!n.hideDetails||n.hideDetails==="auto"&&(I||!!r.details);return L("div",{class:["v-input",`v-input--${n.direction}`,{"v-input--center-affix":n.centerAffix,"v-input--hide-spin-buttons":n.hideSpinButtons},o.value,c.value,h.value,v.value,n.class],style:[u.value,n.style]},[y&&L("div",{key:"prepend",class:"v-input__prepend"},[(X=r.prepend)==null?void 0:X.call(r,m.value),n.prependIcon&&L(f,{key:"prepend-icon",name:"prepend"},null)]),r.default&&L("div",{class:"v-input__control"},[(nt=r.default)==null?void 0:nt.call(r,m.value)]),T&&L("div",{key:"append",class:"v-input__append"},[n.appendIcon&&L(f,{key:"append-icon",name:"append"},null),(Rt=r.append)==null?void 0:Rt.call(r,m.value)]),p&&L("div",{class:"v-input__details"},[L(af,{id:R.value,active:I,messages:_.value},{message:r.message}),(ct=r.details)==null?void 0:ct.call(r,m.value)])])}),{reset:K,resetValidation:q,validate:M,isValid:$,errorMessages:P}}}),df=["color","file","time","date","datetime-local","week","month"],ff=Kt({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Su(),...Vu()},"VTextField"),xf=_e()({name:"VTextField",directives:{Intersect:Gl},inheritAttrs:!1,props:ff(),emits:{"click:control":n=>!0,"mousedown:control":n=>!0,"update:focused":n=>!0,"update:modelValue":n=>!0},setup(n,t){let{attrs:e,emit:r,slots:s}=t;const o=Ei(n,"modelValue"),{isFocused:u,focus:c,blur:h}=Pu(n),f=Y(()=>{var M;return typeof n.counterValue=="function"?n.counterValue(o.value):typeof n.counterValue=="number"?n.counterValue:((M=o.value)!=null?M:"").toString().length}),g=Y(()=>{if(e.maxlength)return e.maxlength;if(!(!n.counter||typeof n.counter!="number"&&typeof n.counter!="string"))return n.counter}),A=Y(()=>["plain","underlined"].includes(n.variant));function R(M,v){var m,_;!n.autofocus||!M||(_=(m=v[0].target)==null?void 0:m.focus)==null||_.call(m)}const P=ce(),b=ce(),k=ce(),D=Y(()=>df.includes(n.type)||n.persistentPlaceholder||u.value||n.active);function O(){var M;k.value!==document.activeElement&&((M=k.value)==null||M.focus()),u.value||c()}function $(M){r("mousedown:control",M),M.target!==k.value&&(O(),M.preventDefault())}function z(M){O(),r("click:control",M)}function K(M){M.stopPropagation(),O(),ii(()=>{o.value=null,Nl(n["onClick:clear"],M)})}function q(M){var m;const v=M.target;if(o.value=v.value,((m=n.modelModifiers)==null?void 0:m.trim)&&["text","search","password","tel","url"].includes(n.type)){const _=[v.selectionStart,v.selectionEnd];ii(()=>{v.selectionStart=_[0],v.selectionEnd=_[1]})}}return ye(()=>{const M=!!(s.counter||n.counter!==!1&&n.counter!=null),v=!!(M||s.details),[m,_]=Dl(e),{modelValue:y,...T}=Ko.filterProps(n),I=sf(n);return L(Ko,Zn({ref:P,modelValue:o.value,"onUpdate:modelValue":p=>o.value=p,class:["v-text-field",{"v-text-field--prefixed":n.prefix,"v-text-field--suffixed":n.suffix,"v-input--plain-underlined":A.value},n.class],style:n.style},m,T,{centerAffix:!A.value,focused:u.value}),{...s,default:p=>{let{id:X,isDisabled:nt,isDirty:Rt,isReadonly:ct,isValid:ht}=p;return L(Cu,Zn({ref:b,onMousedown:$,onClick:z,"onClick:clear":K,"onClick:prependInner":n["onClick:prependInner"],"onClick:appendInner":n["onClick:appendInner"],role:n.role},I,{id:X.value,active:D.value||Rt.value,dirty:Rt.value||n.dirty,disabled:nt.value,focused:u.value,error:ht.value===!1}),{...s,default:Mt=>{let{props:{class:Ft,...qt}}=Mt;const _t=vi(L("input",Zn({ref:k,value:o.value,onInput:q,autofocus:n.autofocus,readonly:ct.value,disabled:nt.value,name:n.name,placeholder:n.placeholder,size:1,type:n.type,onFocus:O,onBlur:h},qt,_),null),[[kl("intersect"),{handler:R},null,{once:!0}]]);return L(Jn,null,[n.prefix&&L("span",{class:"v-text-field__prefix"},[L("span",{class:"v-text-field__prefix__text"},[n.prefix])]),s.default?L("div",{class:Ft,"data-no-activator":""},[s.default(),_t]):xl(_t,{class:Ft}),n.suffix&&L("span",{class:"v-text-field__suffix"},[L("span",{class:"v-text-field__suffix__text"},[n.suffix])])])}})},details:v?p=>{var X;return L(Jn,null,[(X=s.details)==null?void 0:X.call(s,p),M&&L(Jn,null,[L("span",null,null),L(Zd,{active:n.persistentCounter||u.value,value:f.value,max:g.value,disabled:n.disabled},s.counter)])])}:void 0})}),Yd({},P,b,k)}});export{er as B,xf as V,kf as a,Df as b,wf as c,Fd as d,bf as e,Wl as f,Rf as g,vf as h,Hl as i,Tf as j,yf as k,_f as l,Yd as m,Ql as n,Cf as o,ef as p,Pf as q,Su as r,Sf as s,Ko as t,Pu as u,ff as v,lf as w,Vf as x};
