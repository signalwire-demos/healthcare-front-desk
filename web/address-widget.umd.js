(function($,Te){typeof exports=="object"&&typeof module<"u"?Te(exports):typeof define=="function"&&define.amd?define(["exports"],Te):($=typeof globalThis<"u"?globalThis:$||self,Te($.SignalWireAddressWidget={}))})(this,(function($){"use strict";var u_=Object.defineProperty;var h_=($,Te,At)=>Te in $?u_($,Te,{enumerable:!0,configurable:!0,writable:!0,value:At}):$[Te]=At;var ie=($,Te,At)=>h_($,typeof Te!="symbol"?Te+"":Te,At);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ws,Pe,Zt,st;const Te=globalThis,At=Te.ShadowRoot&&(Te.ShadyCSS===void 0||Te.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,sn=Symbol(),Ls=new WeakMap;let Ns=class{constructor(t,i,r){if(this._$cssResult$=!0,r!==sn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=i}get styleSheet(){let t=this.o;const i=this.t;if(At&&t===void 0){const r=i!==void 0&&i.length===1;r&&(t=Ls.get(i)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Ls.set(i,t))}return t}toString(){return this.cssText}};const Fs=e=>new Ns(typeof e=="string"?e:e+"",void 0,sn),Le=(e,...t)=>{const i=e.length===1?e[0]:t.reduce((r,n,s)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[s+1],e[0]);return new Ns(i,e,sn)},Ll=(e,t)=>{if(At)e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(const i of t){const r=document.createElement("style"),n=Te.litNonce;n!==void 0&&r.setAttribute("nonce",n),r.textContent=i.cssText,e.appendChild(r)}},Us=At?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(const r of t.cssRules)i+=r.cssText;return Fs(i)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Nl,defineProperty:Fl,getOwnPropertyDescriptor:Ul,getOwnPropertyNames:Vl,getOwnPropertySymbols:Bl,getPrototypeOf:Hl}=Object,It=globalThis,Vs=It.trustedTypes,zl=Vs?Vs.emptyScript:"",Wl=It.reactiveElementPolyfillSupport,ki=(e,t)=>e,nr={toAttribute(e,t){switch(t){case Boolean:e=e?zl:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},an=(e,t)=>!Nl(e,t),Bs={attribute:!0,type:String,converter:nr,reflect:!1,useDefault:!1,hasChanged:an};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),It.litPropertyMetadata??(It.litPropertyMetadata=new WeakMap);let ri=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,i=Bs){if(i.state&&(i.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((i=Object.create(i)).wrapped=!0),this.elementProperties.set(t,i),!i.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(t,r,i);n!==void 0&&Fl(this.prototype,t,n)}}static getPropertyDescriptor(t,i,r){const{get:n,set:s}=Ul(this.prototype,t)??{get(){return this[i]},set(a){this[i]=a}};return{get:n,set(a){const o=n?.call(this);s?.call(this,a),this.requestUpdate(t,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Bs}static _$Ei(){if(this.hasOwnProperty(ki("elementProperties")))return;const t=Hl(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ki("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ki("properties"))){const i=this.properties,r=[...Vl(i),...Bl(i)];for(const n of r)this.createProperty(n,i[n])}const t=this[Symbol.metadata];if(t!==null){const i=litPropertyMetadata.get(t);if(i!==void 0)for(const[r,n]of i)this.elementProperties.set(r,n)}this._$Eh=new Map;for(const[i,r]of this.elementProperties){const n=this._$Eu(i,r);n!==void 0&&this._$Eh.set(n,i)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const n of r)i.unshift(Us(n))}else t!==void 0&&i.push(Us(t));return i}static _$Eu(t,i){const r=i.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,i=this.constructor.elementProperties;for(const r of i.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ll(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,i,r){this._$AK(t,r)}_$ET(t,i){const r=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,r);if(n!==void 0&&r.reflect===!0){const s=(r.converter?.toAttribute!==void 0?r.converter:nr).toAttribute(i,r.type);this._$Em=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,i){const r=this.constructor,n=r._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const s=r.getPropertyOptions(n),a=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:nr;this._$Em=n;const o=a.fromAttribute(i,s.type);this[n]=o??this._$Ej?.get(n)??o,this._$Em=null}}requestUpdate(t,i,r,n=!1,s){if(t!==void 0){const a=this.constructor;if(n===!1&&(s=this[t]),r??(r=a.getPropertyOptions(t)),!((r.hasChanged??an)(s,i)||r.useDefault&&r.reflect&&s===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,i,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,i,{useDefault:r,reflect:n,wrapped:s},a){r&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,a??i??this[t]),s!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(i=void 0),this._$AL.set(t,i)),n===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(i){Promise.reject(i)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[n,s]of r){const{wrapped:a}=s,o=this[n];a!==!0||this._$AL.has(n)||o===void 0||this.C(n,void 0,s,o)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(i)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(i)}willUpdate(t){}_$AE(t){this._$EO?.forEach(i=>i.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(i=>this._$ET(i,this[i]))),this._$EM()}updated(t){}firstUpdated(t){}};ri.elementStyles=[],ri.shadowRootOptions={mode:"open"},ri[ki("elementProperties")]=new Map,ri[ki("finalized")]=new Map,Wl?.({ReactiveElement:ri}),(It.reactiveElementVersions??(It.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ti=globalThis,Hs=e=>e,sr=Ti.trustedTypes,zs=sr?sr.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ws="$lit$",Rt=`lit$${Math.random().toFixed(9).slice(2)}$`,js="?"+Rt,jl=`<${js}>`,Ft=document,$i=()=>Ft.createComment(""),Ei=e=>e===null||typeof e!="object"&&typeof e!="function",on=Array.isArray,Gl=e=>on(e)||typeof e?.[Symbol.iterator]=="function",cn=`[ 	
\f\r]`,xi=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gs=/-->/g,qs=/>/g,Ut=RegExp(`>|${cn}(?:([^\\s"'>=/]+)(${cn}*=${cn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ks=/'/g,Ys=/"/g,Xs=/^(?:script|style|textarea|title)$/i,ql=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),x=ql(1),Vt=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),Js=new WeakMap,Bt=Ft.createTreeWalker(Ft,129);function Zs(e,t){if(!on(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return zs!==void 0?zs.createHTML(t):t}const Kl=(e,t)=>{const i=e.length-1,r=[];let n,s=t===2?"<svg>":t===3?"<math>":"",a=xi;for(let o=0;o<i;o++){const c=e[o];let l,u,p=-1,m=0;for(;m<c.length&&(a.lastIndex=m,u=a.exec(c),u!==null);)m=a.lastIndex,a===xi?u[1]==="!--"?a=Gs:u[1]!==void 0?a=qs:u[2]!==void 0?(Xs.test(u[2])&&(n=RegExp("</"+u[2],"g")),a=Ut):u[3]!==void 0&&(a=Ut):a===Ut?u[0]===">"?(a=n??xi,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,l=u[1],a=u[3]===void 0?Ut:u[3]==='"'?Ys:Ks):a===Ys||a===Ks?a=Ut:a===Gs||a===qs?a=xi:(a=Ut,n=void 0);const w=a===Ut&&e[o+1].startsWith("/>")?" ":"";s+=a===xi?c+jl:p>=0?(r.push(l),c.slice(0,p)+Ws+c.slice(p)+Rt+w):c+Rt+(p===-2?o:w)}return[Zs(e,s+(e[i]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class Ai{constructor({strings:t,_$litType$:i},r){let n;this.parts=[];let s=0,a=0;const o=t.length-1,c=this.parts,[l,u]=Kl(t,i);if(this.el=Ai.createElement(l,r),Bt.currentNode=this.el.content,i===2||i===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(n=Bt.nextNode())!==null&&c.length<o;){if(n.nodeType===1){if(n.hasAttributes())for(const p of n.getAttributeNames())if(p.endsWith(Ws)){const m=u[a++],w=n.getAttribute(p).split(Rt),E=/([.?@])?(.*)/.exec(m);c.push({type:1,index:s,name:E[2],strings:w,ctor:E[1]==="."?Xl:E[1]==="?"?Jl:E[1]==="@"?Zl:ar}),n.removeAttribute(p)}else p.startsWith(Rt)&&(c.push({type:6,index:s}),n.removeAttribute(p));if(Xs.test(n.tagName)){const p=n.textContent.split(Rt),m=p.length-1;if(m>0){n.textContent=sr?sr.emptyScript:"";for(let w=0;w<m;w++)n.append(p[w],$i()),Bt.nextNode(),c.push({type:2,index:++s});n.append(p[m],$i())}}}else if(n.nodeType===8)if(n.data===js)c.push({type:2,index:s});else{let p=-1;for(;(p=n.data.indexOf(Rt,p+1))!==-1;)c.push({type:7,index:s}),p+=Rt.length-1}s++}}static createElement(t,i){const r=Ft.createElement("template");return r.innerHTML=t,r}}function ni(e,t,i=e,r){if(t===Vt)return t;let n=r!==void 0?i._$Co?.[r]:i._$Cl;const s=Ei(t)?void 0:t._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),s===void 0?n=void 0:(n=new s(e),n._$AT(e,i,r)),r!==void 0?(i._$Co??(i._$Co=[]))[r]=n:i._$Cl=n),n!==void 0&&(t=ni(e,n._$AS(e,t.values),n,r)),t}class Yl{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:r}=this._$AD,n=(t?.creationScope??Ft).importNode(i,!0);Bt.currentNode=n;let s=Bt.nextNode(),a=0,o=0,c=r[0];for(;c!==void 0;){if(a===c.index){let l;c.type===2?l=new Ii(s,s.nextSibling,this,t):c.type===1?l=new c.ctor(s,c.name,c.strings,this,t):c.type===6&&(l=new Ql(s,this,t)),this._$AV.push(l),c=r[++o]}a!==c?.index&&(s=Bt.nextNode(),a++)}return Bt.currentNode=Ft,n}p(t){let i=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,i),i+=r.strings.length-2):r._$AI(t[i])),i++}}class Ii{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,r,n){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return i!==void 0&&t?.nodeType===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=ni(this,t,i),Ei(t)?t===z||t==null||t===""?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==Vt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Gl(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==z&&Ei(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ft.createTextNode(t)),this._$AH=t}$(t){const{values:i,_$litType$:r}=t,n=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Ai.createElement(Zs(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(i);else{const s=new Yl(n,this),a=s.u(this.options);s.p(i),this.T(a),this._$AH=s}}_$AC(t){let i=Js.get(t.strings);return i===void 0&&Js.set(t.strings,i=new Ai(t)),i}k(t){on(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let r,n=0;for(const s of t)n===i.length?i.push(r=new Ii(this.O($i()),this.O($i()),this,this.options)):r=i[n],r._$AI(s),n++;n<i.length&&(this._$AR(r&&r._$AB.nextSibling,n),i.length=n)}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t!==this._$AB;){const r=Hs(t).nextSibling;Hs(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ar{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,r,n,s){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=i,this._$AM=n,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=z}_$AI(t,i=this,r,n){const s=this.strings;let a=!1;if(s===void 0)t=ni(this,t,i,0),a=!Ei(t)||t!==this._$AH&&t!==Vt,a&&(this._$AH=t);else{const o=t;let c,l;for(t=s[0],c=0;c<s.length-1;c++)l=ni(this,o[r+c],i,c),l===Vt&&(l=this._$AH[c]),a||(a=!Ei(l)||l!==this._$AH[c]),l===z?t=z:t!==z&&(t+=(l??"")+s[c+1]),this._$AH[c]=l}a&&!n&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Xl extends ar{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}class Jl extends ar{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==z)}}class Zl extends ar{constructor(t,i,r,n,s){super(t,i,r,n,s),this.type=5}_$AI(t,i=this){if((t=ni(this,t,i,0)??z)===Vt)return;const r=this._$AH,n=t===z&&r!==z||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==z&&(r===z||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ql{constructor(t,i,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){ni(this,t)}}const ed=Ti.litHtmlPolyfillSupport;ed?.(Ai,Ii),(Ti.litHtmlVersions??(Ti.litHtmlVersions=[])).push("3.3.2");const td=(e,t,i)=>{const r=i?.renderBefore??t;let n=r._$litPart$;if(n===void 0){const s=i?.renderBefore??null;r._$litPart$=n=new Ii(t.insertBefore($i(),s),s,void 0,i??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ri=globalThis;let Mi=class extends ri{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var i;const t=super.createRenderRoot();return(i=this.renderOptions).renderBefore??(i.renderBefore=t.firstChild),t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=td(i,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Vt}};Mi._$litElement$=!0,Mi.finalized=!0,Ri.litElementHydrateSupport?.({LitElement:Mi});const id=Ri.litElementPolyfillSupport;id?.({LitElement:Mi}),(Ri.litElementVersions??(Ri.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rd=e=>(t,i)=>{i!==void 0?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nd={attribute:!0,type:String,converter:nr,reflect:!1,hasChanged:an},sd=(e=nd,t,i)=>{const{kind:r,metadata:n}=i;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),r==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(i.name,e),r==="accessor"){const{name:a}=i;return{set(o){const c=t.get.call(this);t.set.call(this,o),this.requestUpdate(a,c,e,!0,o)},init(o){return o!==void 0&&this.C(a,void 0,e,o),o}}}if(r==="setter"){const{name:a}=i;return function(o){const c=this[a];t.call(this,o),this.requestUpdate(a,c,e,!0,o)}}throw Error("Unsupported decorator location: "+r)};function W(e){return(t,i)=>typeof i=="object"?sd(e,t,i):((r,n,s)=>{const a=n.hasOwnProperty(s);return n.constructor.createProperty(s,r),a?Object.getOwnPropertyDescriptor(n,s):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Q(e){return W({...e,state:!0,attribute:!1})}const ad=Le`
  :host {
    /* Brand palette (locked) */
    --sw-address-accent: #f72a72;
    --sw-address-accent-strong: #f72a72;
    --sw-address-accent-glow: 0 4px 40px rgba(247, 42, 114, 0.08);
    --sw-address-accent-glow-strong: 0 0 20px rgba(247, 42, 114, 0.25);
    --sw-address-brand-blue: #044ef4;
    --sw-address-brand-purple: #601be6;
    --sw-address-positive: #40e0d0;
    --sw-address-warning: #ffd700;
    --sw-address-danger: #ef4444;

    /* Surfaces — dark theme defaults */
    --sw-address-bg-page: #0e0e18;
    --sw-address-bg-surface: #181a28;
    --sw-address-bg-raised: #222436;
    --sw-address-bg-overlay: rgba(14, 14, 24, 0.94);
    --sw-address-bg-subtle: rgba(255, 255, 255, 0.03);

    /* Foreground — dark theme defaults */
    --sw-address-fg-default: #f0f0f4;
    --sw-address-fg-secondary: #e8e8ec;
    --sw-address-fg-muted: #a0a0aa;
    --sw-address-fg-subtle: #73737e;
    --sw-address-fg-on-color: #ffffff;
    --sw-address-fg-headings: #f0f0f4;

    /* Borders */
    --sw-address-border: rgba(255, 255, 255, 0.12);
    --sw-address-border-strong: rgba(255, 255, 255, 0.15);

    /* Typography */
    --sw-address-font-heading: 'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      sans-serif;
    --sw-address-font-body: 'Lexend', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --sw-address-font-code: 'JetBrains Mono', 'SF Mono', 'Menlo', 'Monaco', monospace;
    --sw-address-letter-spacing-eyebrow: 0.14em;

    /* Shape & motion */
    --sw-address-radius: 12px;
    --sw-address-radius-sm: 8px;
    --sw-address-radius-pill: 100px;
    --sw-address-ease: cubic-bezier(0.2, 0.8, 0.2, 1);
    --sw-address-duration-enter: 240ms;
    --sw-address-duration-exit: 200ms;
    --sw-address-duration-fast: 150ms;

    /* Layout */
    --sw-address-transcript-width: 340px;
    --sw-address-drawer-width: 440px;
    --sw-address-gutter: 16px;

    /* Stacking. Match the design-system z-index ladder but bump to the top
       so we sit above host-page overlays without the consumer having to fight. */
    --sw-address-z-launcher: 9999;
    --sw-address-z-overlay: 2147483000;

    /* Shadows */
    --sw-address-shadow-md: 0 4px 16px rgba(0, 0, 0, 0.5);
    --sw-address-shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.6);
  }

  :host([theme='light']) {
    --sw-address-accent-glow: 0 4px 40px rgba(247, 42, 114, 0.05);
    --sw-address-accent-glow-strong: 0 0 20px rgba(247, 42, 114, 0.15);

    --sw-address-bg-page: #fafbfc;
    --sw-address-bg-surface: #f3f4f6;
    --sw-address-bg-raised: #e8eaf0;
    --sw-address-bg-overlay: rgba(250, 251, 252, 0.94);
    --sw-address-bg-subtle: rgba(0, 0, 0, 0.02);

    --sw-address-fg-default: #1a1a18;
    --sw-address-fg-secondary: #3a3a38;
    --sw-address-fg-muted: #737371;
    --sw-address-fg-subtle: #a8a8a6;
    --sw-address-fg-on-color: #ffffff;
    --sw-address-fg-headings: #070c2d;

    --sw-address-border: rgba(0, 0, 0, 0.1);
    --sw-address-border-strong: rgba(0, 0, 0, 0.18);

    --sw-address-shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);
    --sw-address-shadow-lg: 0 16px 48px rgba(0, 0, 0, 0.12);
  }
`,od=Le`
  :host {
    all: initial;
    display: block;
    font-family: var(--sw-address-font-body);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: var(--sw-address-fg-default);
    text-align: start;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }

  /* iOS Safari: suppress the delay + zoom on double-tap for any
     interactive widget surface. Single-tap still fires click immediately. */
  :host button,
  :host [role='button'],
  :host a,
  :host [part='launcher'],
  :host [part='overlay'],
  :host [part='close'],
  :host [part='hangup'] {
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
  }
`,cd=Le`
  :host {
    /* sw-call-media + sw-call-controls + sw-self-media share this palette. */
    --sw-color-primary: var(--sw-address-brand-blue);
    --sw-color-primary-hover: #0342cf;
    --sw-color-danger: var(--sw-address-danger);
    --sw-color-danger-hover: #b91c1c;
    --sw-color-background: var(--sw-address-bg-page);
    --sw-color-surface: var(--sw-address-bg-raised);
    --sw-color-surface-hover: var(--sw-address-border-strong);
    --sw-color-text: var(--sw-address-fg-default);
    --sw-color-text-muted: var(--sw-address-fg-muted);
    --sw-color-border: var(--sw-address-border);
    --sw-color-active: var(--sw-address-danger);

    --sw-border-radius: var(--sw-address-radius);
    --sw-font-family: var(--sw-address-font-body);

    /* Spacing scale mapped from our address tokens. */
    --sw-space-1: 4px;
    --sw-space-2: 8px;
    --sw-space-3: 12px;
    --sw-space-4: 16px;
    --sw-space-6: 24px;
  }
`,ln="data-signalwire-address-fonts",ld="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Lexend:wght@300;400;500;600&display=swap",dd=["https://fonts.googleapis.com","https://fonts.gstatic.com"];let Qs=!1;function ud(){if(Qs||typeof document>"u"||(Qs=!0,document.head.querySelector(`link[${ln}]`)))return;for(const t of dd){if(document.head.querySelector(`link[rel="preconnect"][href="${t}"]`))continue;const i=document.createElement("link");i.rel="preconnect",i.href=t,t.includes("gstatic")&&(i.crossOrigin="anonymous"),i.setAttribute(ln,"preconnect"),document.head.appendChild(i)}const e=document.createElement("link");e.rel="stylesheet",e.href=ld,e.setAttribute(ln,"stylesheet"),document.head.appendChild(e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hd=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ea={CHILD:2},ta=e=>(...t)=>({_$litDirective$:e,values:t});class ia{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,r){this._$Ct=t,this._$AM=i,this._$Ci=r}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Di=(e,t)=>{const i=e._$AN;if(i===void 0)return!1;for(const r of i)r._$AO?.(t,!1),Di(r,t);return!0},or=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while(i?.size===0)},ra=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),gd(t)}};function pd(e){this._$AN!==void 0?(or(this),this._$AM=e,ra(this)):this._$AM=e}function fd(e,t=!1,i=0){const r=this._$AH,n=this._$AN;if(n!==void 0&&n.size!==0)if(t)if(Array.isArray(r))for(let s=i;s<r.length;s++)Di(r[s],!1),or(r[s]);else r!=null&&(Di(r,!1),or(r));else Di(this,e)}const gd=e=>{e.type==ea.CHILD&&(e._$AP??(e._$AP=fd),e._$AQ??(e._$AQ=pd))};class vd extends ia{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,r){super._$AT(t,i,r),ra(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(Di(this,t),or(this))}setValue(t){if(hd(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const si=()=>new md;class md{}const dn=new WeakMap,ai=ta(class extends vd{render(e){return z}update(e,[t]){const i=t!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),z}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let i=dn.get(t);i===void 0&&(i=new WeakMap,dn.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?dn.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),bd=Le`
  .launcher {
    font-family: var(--sw-address-font-body);
    font-size: 15px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 0;
    padding: 12px 22px;
    border-radius: var(--sw-address-radius-pill);
    background: var(--sw-address-accent);
    color: var(--sw-address-fg-on-color);
    border: 1px solid transparent;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 44px;
    box-shadow: var(--sw-address-accent-glow);
    transition:
      transform var(--sw-address-duration-fast) var(--sw-address-ease),
      box-shadow var(--sw-address-duration-fast) var(--sw-address-ease),
      filter var(--sw-address-duration-fast) var(--sw-address-ease);
    -webkit-tap-highlight-color: transparent;
    user-select: none;
  }

  .launcher:hover {
    box-shadow: var(--sw-address-accent-glow-strong);
    transform: translateY(-1px);
    filter: brightness(1.04);
  }

  .launcher:active {
    transform: translateY(0);
    filter: brightness(0.96);
  }

  .launcher:focus-visible {
    outline: 2px solid var(--sw-address-brand-blue);
    outline-offset: 3px;
  }

  .launcher:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .launcher[hidden] {
    display: none;
  }

  /* Simple talk-bubble SVG icon shown to the left of the label by default.
     Hidden when a slotted child is present so the consumer's own content
     stays uncrowded. */
  .launcher .launcher-icon {
    width: 18px;
    height: 18px;
    flex: 0 0 auto;
    display: block;
  }

  /* Hide our icon if the host slotted their own content in. */
  .launcher.has-slot .launcher-icon {
    display: none;
  }
`,_d=x`<svg
  class="launcher-icon"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <path
    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
  />
</svg>`;function yd(e){return x`
    <button
      part="launcher"
      class="launcher"
      type="button"
      aria-label=${e.label}
      ?hidden=${e.hidden}
      @click=${e.open}
    >
      ${_d}
      <span class="launcher-label"><slot>${e.label}</slot></span>
    </button>
  `}const wd=Le`
  /* Panel presentation: a corner window instead of a viewport takeover.
     Only the geometry changes — the dialog is still in the top layer, still
     modal, still focus-trapped, so behaviour is identical to immersive. */
  .overlay[data-presentation='panel'] {
    width: var(--sw-address-panel-width, 400px);
    height: var(--sw-address-panel-height, 640px);
    max-width: calc(100vw - 32px);
    max-height: calc(100vh - 32px);
    inset: auto;
    border-radius: var(--sw-address-radius);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
    overflow: hidden;
  }
  .overlay[data-presentation='panel'][data-position='bottom-right'] {
    bottom: 16px;
    right: 16px;
  }
  .overlay[data-presentation='panel'][data-position='bottom-left'] {
    bottom: 16px;
    left: 16px;
  }
  .overlay[data-presentation='panel'][data-position='top-right'] {
    top: 16px;
    right: 16px;
  }
  .overlay[data-presentation='panel'][data-position='top-left'] {
    top: 16px;
    left: 16px;
  }

  /* Phone: a corner window is not a window. Full-screen regardless of
     presentation, matching what the reference chat widget did under 640px. */
  @media (max-width: 640px) {
    .overlay[data-presentation='panel'] {
      width: 100vw;
      height: 100vh;
      height: 100dvh;
      max-width: none;
      max-height: none;
      inset: 0;
      border-radius: 0;
    }
  }

  /* Overlay root is a native <dialog> so showModal() puts it on the browser's
     top layer. Top-layer elements escape every containing block + stacking
     context on the host page by spec: ancestor transform / filter /
     backdrop-filter / will-change / contain / z-index can no longer clip or
     cap the overlay. This is the only way to reliably embed a full-viewport
     modal on an unknown host page. */
  .overlay {
    /* Reset <dialog> UA defaults (centered auto-margin, border, padding,
       max-width/height, text-align) so we get the full-viewport behavior
       we had with the div-based overlay. The text-align reset is
       load-bearing: some browsers' UA stylesheet applies text-align to
       <dialog>, and without an explicit reset here a host page that sets
       text-align on any ancestor of the custom element still leaks into
       our transcript + shared-content text. The :host all:initial rule
       covers the host element, but <dialog> has its own UA defaults. */
    padding: 0;
    margin: 0;
    border: none;
    max-width: none;
    max-height: none;
    text-align: start;
    width: 100vw;
    height: 100vh;
    position: fixed;
    inset: 0;
    overflow: hidden;
    z-index: var(--sw-address-z-overlay);
    background: var(--sw-address-bg-page);
    color: var(--sw-address-fg-default);
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    transform-origin: var(--enter-x, 50%) var(--enter-y, 50%);
    transform: scale(0.08);
    opacity: 0;
    will-change: transform, opacity;
    animation: overlay-enter var(--sw-address-duration-enter) var(--sw-address-ease) forwards;
  }

  /* Dialogs are display:none when closed. When opened via showModal() or
     when the open attribute is present, the dialog paints; :modal toggles
     modal styling if anyone wants to override. Animation runs either way. */
  .overlay:not([open]) {
    display: none;
  }

  /* ::backdrop inherits from its originating element, so our brand tokens
     reach it. Paint a matching overlay backdrop for the brief moments when
     the dialog content isn't yet fully covering the viewport (animation
     start, odd pointer-events edge cases). */
  .overlay::backdrop {
    background: var(--sw-address-bg-overlay, rgba(14, 14, 24, 0.94));
    animation: backdrop-enter var(--sw-address-duration-enter) var(--sw-address-ease) forwards;
  }

  .overlay[data-state='exiting']::backdrop {
    animation: backdrop-exit var(--sw-address-duration-exit) var(--sw-address-ease) forwards;
  }

  @keyframes backdrop-enter {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes backdrop-exit {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .overlay[data-state='exiting'] {
    animation: overlay-exit var(--sw-address-duration-exit) var(--sw-address-ease) forwards;
  }

  @keyframes overlay-enter {
    0% {
      transform: scale(0.08);
      opacity: 0;
      filter: blur(8px);
    }
    60% {
      opacity: 1;
      filter: blur(0);
    }
    100% {
      transform: scale(1);
      opacity: 1;
      filter: blur(0);
    }
  }

  @keyframes overlay-exit {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0.08);
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .overlay {
      animation-duration: 1ms;
    }
    .overlay[data-state='exiting'] {
      animation-duration: 1ms;
    }
  }

  /* Focus-trap sentinels — invisible focusable elements that catch tab/shift-tab
     leaving the overlay and warp back to the start/end. */
  .focus-sentinel {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    opacity: 0;
  }

  /* Top-right floating close button. Always reachable, minimal ornament.
     Duplicates ESC + hangup but never hurts on small screens. */
  .close-button {
    position: absolute;
    top: max(16px, env(safe-area-inset-top, 16px));
    right: max(16px, env(safe-area-inset-right, 16px));
    z-index: 2;
    width: 40px;
    height: 40px;
    border-radius: var(--sw-address-radius-pill);
    background: var(--sw-address-bg-raised);
    color: var(--sw-address-fg-default);
    border: 1px solid var(--sw-address-border);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    transition:
      background var(--sw-address-duration-fast) var(--sw-address-ease),
      transform var(--sw-address-duration-fast) var(--sw-address-ease);
  }

  .close-button:hover {
    background: var(--sw-address-border-strong);
    transform: rotate(90deg);
  }

  .close-button:focus-visible {
    outline: 2px solid var(--sw-address-brand-blue);
    outline-offset: 3px;
  }

  .close-button svg {
    width: 18px;
    height: 18px;
    display: block;
  }

  /* Body layout. Desktop + video mode: flex row so the transcript (when
     visible) claims the right sidebar and pushes the video-frame
     narrower instead of overlaying it — that keeps the local self-view
     in the bottom-right of the video area clear of the chat bubbles.
     Mobile and explicit stacked layouts switch to flex column: video
     anchored top, transcript filling below, controls dock reserved at
     the bottom via padding. */
  .overlay-body {
    position: relative;
    inset: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  @media (max-width: 767px) {
    .overlay-body {
      flex-direction: column;
      padding-bottom: calc(68px + max(16px, env(safe-area-inset-bottom, 16px)));
    }
  }

  .overlay-body[data-stacked='true'] {
    flex-direction: column;
    padding-bottom: calc(68px + max(16px, env(safe-area-inset-bottom, 16px)));
  }
`,Sd=x`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>`;function Cd(e){return x`
    <dialog
      part="overlay"
      class="overlay"
      data-state=${e.state}
      data-presentation=${e.presentation??"immersive"}
      data-position=${e.position??"bottom-right"}
      aria-label=${e.ariaLabel??"Call in progress"}
    >
      <div
        class="focus-sentinel"
        tabindex="0"
        @focus=${t=>na(t,"start")}
      ></div>
      <button
        part="close"
        class="close-button"
        type="button"
        aria-label="Close call"
        @click=${e.close}
      >
        ${Sd}
      </button>
      <div class="overlay-body" data-stacked=${String(e.stacked)}>${e.body}</div>
      <div
        class="focus-sentinel"
        tabindex="0"
        @focus=${t=>na(t,"end")}
      ></div>
    </dialog>
  `}function na(e,t){const r=e.currentTarget.closest(".overlay");if(!r)return;const n=r.querySelector(".overlay-body");if(!n)return;const s=Array.from(n.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(c=>c.offsetParent!==null||c.getClientRects().length>0),a=r.querySelector(".close-button");if(a&&s.push(a),s.length===0)return;(t==="start"?s[s.length-1]:s[0]).focus()}function un(){if(typeof document>"u")return"";const e=document.body.style.overflow;return document.body.style.overflow="hidden",e}function sa(e){typeof document>"u"||(document.body.style.overflow=e)}function kd(e){const t=e.left+e.width/2,i=e.top+e.height/2;return{"--enter-x":`${t}px`,"--enter-y":`${i}px`}}const Td="https://mcdn.signalwire.com/images/v2/social_generic.png",$d=Le`
  .video-frame {
    position: relative;
    flex: 1 1 0;
    min-width: 0;
    min-height: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(12px, 3vw, 32px);
    /* Leave room at the bottom for the floating controls dock. */
    padding-bottom: clamp(96px, 14vh, 140px);
  }

  .video-frame-inner {
    position: relative;
    width: 100%;
    max-width: min(100%, 1280px);
    aspect-ratio: 16 / 9;
    border-radius: var(--sw-address-radius);
    overflow: hidden;
    background: #000;
    box-shadow:
      0 1px 0 rgba(255, 255, 255, 0.03) inset,
      var(--sw-address-shadow-lg);
  }

  /* Ring layer — absolute-positioned outline that pulses per state.
     Sits above the frame via ::after so it animates without shifting the
     video. Single element repurposed across states to keep DOM lean. */
  .video-frame-inner::after {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    pointer-events: none;
    box-shadow: 0 0 0 0 transparent;
    transition: box-shadow 400ms var(--sw-address-ease);
    border: 1px solid rgba(255, 255, 255, 0.06);
  }

  .video-frame-inner[data-ring='ai-speaking']::after {
    animation: ring-pulse-positive 2.2s ease-in-out infinite;
    border-color: rgba(64, 224, 208, 0.55);
  }

  .video-frame-inner[data-ring='network-warning']::after {
    animation: ring-pulse-warning 1.6s ease-in-out infinite;
    border-color: rgba(255, 215, 0, 0.55);
  }

  .video-frame-inner[data-ring='reconnecting']::after {
    animation: ring-shimmer-recover 1.2s ease-in-out infinite;
    border-color: rgba(247, 42, 114, 0.7);
  }

  @keyframes ring-pulse-positive {
    0%,
    100% {
      box-shadow: 0 0 0 0 rgba(64, 224, 208, 0);
    }
    50% {
      box-shadow: 0 0 28px 2px rgba(64, 224, 208, 0.35);
    }
  }

  @keyframes ring-pulse-warning {
    0%,
    100% {
      box-shadow: 0 0 0 0 rgba(255, 215, 0, 0);
    }
    50% {
      box-shadow: 0 0 24px 2px rgba(255, 215, 0, 0.35);
    }
  }

  @keyframes ring-shimmer-recover {
    0% {
      box-shadow: 0 0 0 0 rgba(247, 42, 114, 0.6);
    }
    50% {
      box-shadow: 0 0 32px 3px rgba(247, 42, 114, 0.45);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(247, 42, 114, 0.0);
    }
  }

  /* Poster layer — shown when there is no call yet. */
  .poster {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    background: var(--sw-address-bg-surface);
    padding: 5% 8%;
    gap: 20px;
    isolation: isolate;
  }

  .poster::before {
    /* Soft breathing fuchsia glow behind the poster image. */
    content: '';
    position: absolute;
    inset: 10%;
    background: radial-gradient(
      closest-side,
      rgba(247, 42, 114, 0.22) 0%,
      rgba(247, 42, 114, 0.06) 55%,
      rgba(247, 42, 114, 0) 80%
    );
    filter: blur(12px);
    animation: poster-breathe 4s ease-in-out infinite;
    z-index: 0;
  }

  .poster img {
    position: relative;
    z-index: 1;
    max-width: 80%;
    max-height: 70%;
    object-fit: contain;
    user-select: none;
    -webkit-user-drag: none;
  }

  .poster-label {
    position: relative;
    z-index: 1;
    font-family: var(--sw-address-font-code);
    font-size: 12px;
    letter-spacing: var(--sw-address-letter-spacing-eyebrow);
    text-transform: uppercase;
    color: var(--sw-address-fg-muted);
  }

  @keyframes poster-breathe {
    0%,
    100% {
      transform: scale(1);
      opacity: 0.85;
    }
    50% {
      transform: scale(1.06);
      opacity: 1;
    }
  }

  /* Remote video: fill the rounded frame with letterboxed contain so
     16:9 / 4:3 / portrait sources all render fully without crop. The
     frame itself has aspect-ratio 16/9; object-fit handles the rest. */
  .remote-video {
    display: block;
    width: 100%;
    height: 100%;
    background: #000;
    object-fit: contain;
  }

  @media (max-width: 767px) {
    /* Anchor to the top of the flex column — no centering, no bottom
       padding; the overlay-body flex layout takes care of reserving
       space for the controls dock. */
    .video-frame {
      flex: 0 0 auto;
      display: block;
      padding: 0;
      padding-bottom: 0;
      height: auto;
    }
    .video-frame-inner {
      width: 100%;
      border-radius: 0;
      box-shadow: none;
    }
  }

  /* Local-preview overlay. Bottom-right corner of the video frame,
     ~22% wide with a 16:9 aspect ratio. Mirrored for the natural
     front-camera reading experience. Hidden when the caller opted out via
     showLocalVideo=false. */
  .local-preview {
    position: absolute;
    right: 3%;
    bottom: 3%;
    width: 22%;
    min-width: 120px;
    max-width: 220px;
    aspect-ratio: 16 / 9;
    border-radius: var(--sw-address-radius-sm);
    overflow: hidden;
    background: #000;
    border: 1px solid rgba(255, 255, 255, 0.14);
    box-shadow: var(--sw-address-shadow-md);
    z-index: 2;
    pointer-events: none;
  }

  .local-preview video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Mirror so users see a front-facing reflection. */
    transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    display: block;
  }

  .local-preview[hidden] {
    display: none;
  }

  @media (max-width: 767px) {
    .local-preview {
      right: 8px;
      bottom: 8px;
      width: 28%;
      min-width: 96px;
      max-width: 160px;
    }
  }

  /* Desktop + layout="stacked": the overlay body is flex-column (like
     audio-only and mobile), but the video is still present. We shrink it
     so the transcript that flows underneath has room to breathe. */
  @media (min-width: 768px) {
    :host-context(.overlay-body[data-stacked='true']) .video-frame,
    .overlay-body[data-stacked='true'] .video-frame {
      flex: 0 0 auto;
      display: block;
      padding: clamp(16px, 2.5vw, 28px);
      padding-bottom: 0;
      height: auto;
    }
    .overlay-body[data-stacked='true'] .video-frame-inner {
      max-width: 720px;
      max-height: 48vh;
      margin: 0 auto;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .video-frame-inner[data-ring]::after {
      animation: none !important;
    }
    .poster::before {
      animation: none !important;
    }
  }

  /* Audio-only mode. When the caller opted out of video, we don't render
     the 16:9 frame at all. An optional custom poster becomes a centered
     image at the top of the stacked overlay body; absence of a poster
     collapses the visual area entirely so the overlay shows just the
     controls and any transcript / content drawer. */
  .audio-poster {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(24px, 6vw, 48px);
    padding-bottom: 0;
    position: relative;
  }

  .audio-poster img {
    max-width: min(420px, 70%);
    max-height: 35vh;
    object-fit: contain;
    user-select: none;
    -webkit-user-drag: none;
    filter: drop-shadow(var(--sw-address-accent-glow));
  }

  @media (max-width: 767px) {
    .audio-poster img {
      max-width: 70%;
      max-height: 28vh;
    }
  }
`,hn=e=>x`<audio
  ${ai(e)}
  autoplay
  playsinline
  aria-hidden="true"
  style="display:none"
></audio>`;function Ed(e){if(!e.videoEnabled)return e.poster?x`
      <div part="video-frame" class="audio-poster">
        <img src=${e.poster} alt="" />
      </div>
      ${hn(e.audioRef)}
    `:x`${hn(e.audioRef)}`;const t=e.poster??Td;return x`
    <div part="video-frame" class="video-frame">
      <div class="video-frame-inner" data-ring=${e.ring}>
        ${e.call?x`<video
              class="remote-video"
              part="video"
              ${ai(e.remoteVideoRef)}
              autoplay
              playsinline
              muted
              disablepictureinpicture
            ></video>`:x`<div class="poster">
              <img src=${t} alt="" />
              <div class="poster-label">Connecting call</div>
            </div>`}
        <!-- Local self-preview. Shown only when the call is active and
             the caller didn't opt out via showLocalVideo=false. The video
             element is always in the DOM (hidden) so AddressWidget's
             localStream$ subscription can attach to the ref as soon as
             the stream becomes available. -->
        <div
          class="local-preview"
          part="local-preview"
          ?hidden=${!e.call||!e.showLocalVideo}
          aria-hidden="true"
        >
          <video
            ${ai(e.localVideoRef)}
            autoplay
            playsinline
            muted
            disablepictureinpicture
          ></video>
        </div>
      </div>
      ${hn(e.audioRef)}
    </div>
  `}const xd=Le`
  .controls-dock {
    position: absolute;
    bottom: max(20px, env(safe-area-inset-bottom, 20px));
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px;
    border-radius: var(--sw-address-radius-pill);
    background: var(--sw-address-bg-raised);
    border: 1px solid var(--sw-address-border);
    box-shadow: var(--sw-address-shadow-md);
    backdrop-filter: blur(12px);
    max-width: calc(100% - 32px);
  }

  /* Split button: primary (toggle mute) on left, chevron trigger on right,
     with a subtle divider between them. */
  .split {
    display: inline-flex;
    align-items: stretch;
    border-radius: var(--sw-address-radius-pill);
    overflow: hidden;
    background: var(--sw-address-bg-subtle);
    border: 1px solid var(--sw-address-border);
  }

  .split[data-muted='true'] {
    background: rgba(239, 68, 68, 0.18);
    border-color: rgba(239, 68, 68, 0.45);
  }

  .btn {
    font: inherit;
    background: transparent;
    color: var(--sw-address-fg-default);
    border: none;
    cursor: pointer;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition:
      background var(--sw-address-duration-fast) var(--sw-address-ease),
      color var(--sw-address-duration-fast) var(--sw-address-ease);
  }
  .btn:hover {
    background: rgba(255, 255, 255, 0.06);
  }
  .btn:focus-visible {
    outline: 2px solid var(--sw-address-brand-blue);
    outline-offset: 2px;
    z-index: 1;
  }
  .btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .btn-primary {
    width: 48px;
    height: 48px;
    border-radius: var(--sw-address-radius-pill) 0 0 var(--sw-address-radius-pill);
  }

  .btn-primary svg {
    width: 20px;
    height: 20px;
    display: block;
  }

  .btn-chevron {
    width: 26px;
    border-radius: 0 var(--sw-address-radius-pill) var(--sw-address-radius-pill) 0;
    border-left: 1px solid var(--sw-address-border);
    color: var(--sw-address-fg-muted);
  }

  .btn-chevron svg {
    width: 14px;
    height: 14px;
    display: block;
    transition: transform var(--sw-address-duration-fast) var(--sw-address-ease);
  }

  /* Switch-to-text — a turquoise pill matching the composer's Call button, so
     the two medium-switches read as one consistent, self-explaining affordance
     in both directions. Turquoise (the brand's positive signal) keeps it
     distinct from the red End pill beside it. Collapses to an icon-only circle
     on a phone, where the floating dock is tight. */
  .btn-switch {
    position: relative; /* anchor for the tooltip */
    height: 48px;
    padding: 0 16px;
    border-radius: var(--sw-address-radius-pill);
    border: 1px solid var(--sw-address-positive);
    background: color-mix(in srgb, var(--sw-address-positive) 12%, var(--sw-address-bg-raised));
    color: var(--sw-address-positive);
    font-family: var(--sw-address-font-body);
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }
  .btn-switch:hover:not(:disabled) {
    background: color-mix(in srgb, var(--sw-address-positive) 22%, var(--sw-address-bg-raised));
  }
  .btn-switch:focus-visible {
    outline: 2px solid var(--sw-address-brand-blue);
    outline-offset: 2px;
    z-index: 1;
  }
  .btn-switch:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .btn-switch svg {
    width: 18px;
    height: 18px;
    display: block;
  }

  /* Our own tooltip — native ones are slow, unstyled and dead on touch. An
     inverse surface so it pops against the dark video behind the dock in
     either theme. Centred above the pill; the dock isn't clipped, so it
     shows in full. Hover AND keyboard focus. */
  .btn-switch[data-tooltip]::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    width: max-content;
    max-width: 220px;
    padding: 7px 10px;
    border-radius: 8px;
    background: var(--sw-address-fg-default);
    color: var(--sw-address-bg-surface);
    font-family: var(--sw-address-font-body);
    font-size: 12px;
    font-weight: 500;
    line-height: 1.35;
    text-align: center;
    white-space: normal;
    box-shadow: var(--sw-address-shadow-md);
    opacity: 0;
    transform: translateX(-50%) translateY(4px);
    pointer-events: none;
    transition:
      opacity var(--sw-address-duration-fast) var(--sw-address-ease),
      transform var(--sw-address-duration-fast) var(--sw-address-ease);
    z-index: 20;
  }
  .btn-switch[data-tooltip]::before {
    content: '';
    position: absolute;
    bottom: calc(100% + 7px);
    left: 50%;
    border: 5px solid transparent;
    border-top-color: var(--sw-address-fg-default);
    opacity: 0;
    transform: translateX(-50%) translateY(4px);
    pointer-events: none;
    transition:
      opacity var(--sw-address-duration-fast) var(--sw-address-ease),
      transform var(--sw-address-duration-fast) var(--sw-address-ease);
    z-index: 20;
  }
  .btn-switch[data-tooltip]:hover::after,
  .btn-switch[data-tooltip]:hover::before,
  .btn-switch[data-tooltip]:focus-visible::after,
  .btn-switch[data-tooltip]:focus-visible::before {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  @media (prefers-reduced-motion: reduce) {
    .btn-switch[data-tooltip]::after,
    .btn-switch[data-tooltip]::before {
      transition: none;
    }
  }

  .btn-hangup {
    height: 48px;
    padding: 0 22px;
    border-radius: var(--sw-address-radius-pill);
    background: var(--sw-address-danger);
    color: var(--sw-address-fg-on-color);
    font-weight: 600;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .btn-hangup:hover {
    background: #b91c1c;
  }
  .btn-hangup svg {
    width: 18px;
    height: 18px;
  }

  /* Popover dropdown. Uses the native Popover API for light-dismiss and
     top-layer rendering; positioning is done in JS because CSS Anchor
     Positioning isn't universal yet. top and left are set imperatively
     right after showPopover() fires. */
  [popover] {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 6px;
    border: 1px solid var(--sw-address-border);
    border-radius: var(--sw-address-radius-sm);
    background: var(--sw-address-bg-raised);
    color: var(--sw-address-fg-default);
    box-shadow: var(--sw-address-shadow-lg);
    min-width: 220px;
    max-width: 320px;
    font-family: var(--sw-address-font-body);
    font-size: 13px;
    color-scheme: dark;
  }
  :host([theme='light']) [popover] {
    color-scheme: light;
  }

  .menu-header {
    padding: 8px 10px 4px;
    font-family: var(--sw-address-font-code);
    font-size: 10px;
    letter-spacing: var(--sw-address-letter-spacing-eyebrow);
    text-transform: uppercase;
    color: var(--sw-address-fg-muted);
  }

  .menu-item {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100%;
    padding: 8px 10px;
    border-radius: 6px;
    background: transparent;
    color: var(--sw-address-fg-default);
    border: none;
    text-align: left;
    cursor: pointer;
    font: inherit;
  }
  .menu-item:hover {
    background: var(--sw-address-bg-subtle);
  }
  .menu-item[data-active='true']::before {
    content: '';
    display: inline-block;
    flex: 0 0 auto;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--sw-address-accent);
  }
  .menu-item[data-active='false']::before {
    content: '';
    flex: 0 0 auto;
    width: 6px;
    height: 6px;
  }
  .menu-empty {
    padding: 12px 10px;
    color: var(--sw-address-fg-muted);
    font-style: italic;
  }

  @media (max-width: 480px) {
    .controls-dock {
      gap: 8px;
      padding: 6px;
    }
    .btn-hangup {
      padding: 0 14px;
    }
    .btn-hangup .hangup-label {
      display: none;
    }
    /* Icon-only on a phone, the same way End drops its label, so the floating
       dock stays within a 360px screen. */
    .btn-switch {
      width: 48px;
      padding: 0;
      gap: 0;
      justify-content: center;
    }
    .btn-switch-label {
      display: none;
    }
  }
`,Ad=x`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
  <line x1="12" y1="19" x2="12" y2="23" />
  <line x1="8" y1="23" x2="16" y2="23" />
</svg>`,Id=x`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <line x1="1" y1="1" x2="23" y2="23" />
  <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" />
  <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" />
  <line x1="12" y1="19" x2="12" y2="23" />
  <line x1="8" y1="23" x2="16" y2="23" />
</svg>`,Rd=x`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <polygon points="23 7 16 12 23 17 23 7" />
  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
</svg>`,Md=x`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10" />
  <line x1="1" y1="1" x2="23" y2="23" />
</svg>`,Dd=x`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" transform="scale(-1,1) translate(-24,0) rotate(135 12 12)" />
</svg>`,aa=x`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <polyline points="18 15 12 9 6 15" />
</svg>`,Od=x`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
</svg>`;function oa(e,t,i,r,n){return x`
    <div
      id=${e}
      popover
      @toggle=${s=>Nd(s,e)}
    >
      <div class="menu-header">${t}</div>
      ${i.length===0?x`<div class="menu-empty">No devices detected</div>`:i.map(s=>x`<button
              class="menu-item"
              type="button"
              data-active=${String(Pd(s,r))}
              @click=${a=>{n(s),Fd(a)}}
              title=${s.label||s.deviceId}
            >
              <span>${s.label||"Device "+s.deviceId.slice(0,6)}</span>
            </button>`)}
    </div>
  `}function Pd(e,t){return t?e.deviceId===t:e.deviceId==="default"}function Ld(e,t){const i=t.getBoundingClientRect(),r=e.getBoundingClientRect(),n=8,s=8;let a=i.top-r.height-n;a<s&&(a=i.bottom+n);let o=i.right-r.width;o<s&&(o=s),o+r.width>window.innerWidth-s&&(o=window.innerWidth-r.width-s),e.style.top=`${a}px`,e.style.left=`${o}px`}function Nd(e,t){const i=e,r=e.currentTarget;if(i.newState!=="open"){r.style.top="",r.style.left="";return}const s=r.getRootNode().querySelector(`[popovertarget="${t}"]`);s&&Ld(r,s)}function Fd(e){e.currentTarget.closest("[popover]")?.hidePopover?.()}function Ud(e){const t=e.call!==null;return x`
    <div part="controls" class="controls-dock" data-active=${String(t)}>
      <div class="split" data-muted=${String(e.audioMuted)}>
        <button
          class="btn btn-primary"
          type="button"
          aria-label=${e.audioMuted?"Unmute microphone":"Mute microphone"}
          aria-pressed=${String(e.audioMuted)}
          ?disabled=${!t}
          @click=${e.onToggleAudio}
          title=${e.audioMuted?"Unmute":"Mute"}
        >
          ${e.audioMuted?Id:Ad}
        </button>
        <button
          class="btn btn-chevron"
          type="button"
          aria-label="Select microphone"
          aria-haspopup="menu"
          popovertarget="sw-address-mic-menu"
          popovertargetaction="toggle"
          ?disabled=${!e.client}
          title="Select microphone"
        >
          ${aa}
        </button>
      </div>
      ${oa("sw-address-mic-menu","Microphone",e.audioInputDevices,e.selectedAudioInputId,e.onSelectAudioDevice)}

      ${e.videoEnabled?x`
            <div class="split" data-muted=${String(e.videoMuted)}>
              <button
                class="btn btn-primary"
                type="button"
                aria-label=${e.videoMuted?"Turn camera on":"Turn camera off"}
                aria-pressed=${String(e.videoMuted)}
                ?disabled=${!t}
                @click=${e.onToggleVideo}
                title=${e.videoMuted?"Turn camera on":"Turn camera off"}
              >
                ${e.videoMuted?Md:Rd}
              </button>
              <button
                class="btn btn-chevron"
                type="button"
                aria-label="Select camera"
                aria-haspopup="menu"
                popovertarget="sw-address-cam-menu"
                popovertargetaction="toggle"
                ?disabled=${!e.client}
                title="Select camera"
              >
                ${aa}
              </button>
            </div>
            ${oa("sw-address-cam-menu","Camera",e.videoInputDevices,e.selectedVideoInputId,e.onSelectVideoDevice)}
          `:z}

      ${e.onSwitchToChat?x`
            <button
              part="switch-to-chat"
              class="btn-switch"
              type="button"
              aria-label="Switch to text chat"
              data-tooltip="Switch to a text-only chat — type instead of talking"
              ?disabled=${!t}
              @click=${e.onSwitchToChat}
            >
              ${Od}<span class="btn-switch-label">Chat</span>
            </button>
          `:z}

      <button
        part="hangup"
        class="btn-hangup"
        type="button"
        aria-label="End call"
        @click=${e.onHangup}
      >
        ${Dd}
        <span class="hangup-label">End</span>
      </button>
    </div>
  `}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class pn extends ia{constructor(t){if(super(t),this.it=z,t.type!==ea.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===z||t==null)return this._t=void 0,this.it=t;if(t===Vt)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}pn.directiveName="unsafeHTML",pn.resultType=1;const ca=ta(pn);function fn(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ht=fn();function la(e){Ht=e}var Oi={exec:()=>null};function X(e,t=""){let i=typeof e=="string"?e:e.source;const r={replace:(n,s)=>{let a=typeof s=="string"?s:s.source;return a=a.replace(Ae.caret,"$1"),i=i.replace(n,a),r},getRegex:()=>new RegExp(i,t)};return r}var Ae={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},Vd=/^(?:[ \t]*(?:\n|$))+/,Bd=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Hd=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Pi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,zd=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,gn=/(?:[*+-]|\d{1,9}[.)])/,da=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,ua=X(da).replace(/bull/g,gn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Wd=X(da).replace(/bull/g,gn).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),vn=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,jd=/^[^\n]+/,mn=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Gd=X(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",mn).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),qd=X(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,gn).getRegex(),cr="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",bn=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Kd=X("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",bn).replace("tag",cr).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ha=X(vn).replace("hr",Pi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",cr).getRegex(),Yd=X(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",ha).getRegex(),_n={blockquote:Yd,code:Bd,def:Gd,fences:Hd,heading:zd,hr:Pi,html:Kd,lheading:ua,list:qd,newline:Vd,paragraph:ha,table:Oi,text:jd},pa=X("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Pi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",cr).getRegex(),Xd={..._n,lheading:Wd,table:pa,paragraph:X(vn).replace("hr",Pi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",pa).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",cr).getRegex()},Jd={..._n,html:X(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",bn).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Oi,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:X(vn).replace("hr",Pi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",ua).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Zd=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Qd=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,fa=/^( {2,}|\\)\n(?!\s*$)/,eu=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,lr=/[\p{P}\p{S}]/u,yn=/[\s\p{P}\p{S}]/u,ga=/[^\s\p{P}\p{S}]/u,tu=X(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,yn).getRegex(),va=/(?!~)[\p{P}\p{S}]/u,iu=/(?!~)[\s\p{P}\p{S}]/u,ru=/(?:[^\s\p{P}\p{S}]|~)/u,nu=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,ma=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,su=X(ma,"u").replace(/punct/g,lr).getRegex(),au=X(ma,"u").replace(/punct/g,va).getRegex(),ba="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",ou=X(ba,"gu").replace(/notPunctSpace/g,ga).replace(/punctSpace/g,yn).replace(/punct/g,lr).getRegex(),cu=X(ba,"gu").replace(/notPunctSpace/g,ru).replace(/punctSpace/g,iu).replace(/punct/g,va).getRegex(),lu=X("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ga).replace(/punctSpace/g,yn).replace(/punct/g,lr).getRegex(),du=X(/\\(punct)/,"gu").replace(/punct/g,lr).getRegex(),uu=X(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),hu=X(bn).replace("(?:-->|$)","-->").getRegex(),pu=X("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",hu).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),dr=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,fu=X(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",dr).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),_a=X(/^!?\[(label)\]\[(ref)\]/).replace("label",dr).replace("ref",mn).getRegex(),ya=X(/^!?\[(ref)\](?:\[\])?/).replace("ref",mn).getRegex(),gu=X("reflink|nolink(?!\\()","g").replace("reflink",_a).replace("nolink",ya).getRegex(),wn={_backpedal:Oi,anyPunctuation:du,autolink:uu,blockSkip:nu,br:fa,code:Qd,del:Oi,emStrongLDelim:su,emStrongRDelimAst:ou,emStrongRDelimUnd:lu,escape:Zd,link:fu,nolink:ya,punctuation:tu,reflink:_a,reflinkSearch:gu,tag:pu,text:eu,url:Oi},vu={...wn,link:X(/^!?\[(label)\]\((.*?)\)/).replace("label",dr).getRegex(),reflink:X(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",dr).getRegex()},Sn={...wn,emStrongRDelimAst:cu,emStrongLDelim:au,url:X(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},mu={...Sn,br:X(fa).replace("{2,}","*").getRegex(),text:X(Sn.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ur={normal:_n,gfm:Xd,pedantic:Jd},Li={normal:wn,gfm:Sn,breaks:mu,pedantic:vu},bu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},wa=e=>bu[e];function lt(e,t){if(t){if(Ae.escapeTest.test(e))return e.replace(Ae.escapeReplace,wa)}else if(Ae.escapeTestNoEncode.test(e))return e.replace(Ae.escapeReplaceNoEncode,wa);return e}function Sa(e){try{e=encodeURI(e).replace(Ae.percentDecode,"%")}catch{return null}return e}function Ca(e,t){const i=e.replace(Ae.findPipe,(s,a,o)=>{let c=!1,l=a;for(;--l>=0&&o[l]==="\\";)c=!c;return c?"|":" |"}),r=i.split(Ae.splitPipe);let n=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;n<r.length;n++)r[n]=r[n].trim().replace(Ae.slashPipe,"|");return r}function Ni(e,t,i){const r=e.length;if(r===0)return"";let n=0;for(;n<r&&e.charAt(r-n-1)===t;)n++;return e.slice(0,r-n)}function _u(e,t){if(e.indexOf(t[1])===-1)return-1;let i=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])i++;else if(e[r]===t[1]&&(i--,i<0))return r;return i>0?-2:-1}function ka(e,t,i,r,n){const s=t.href,a=t.title||null,o=e[1].replace(n.other.outputLinkReplace,"$1");r.state.inLink=!0;const c={type:e[0].charAt(0)==="!"?"image":"link",raw:i,href:s,title:a,text:o,tokens:r.inlineTokens(o)};return r.state.inLink=!1,c}function yu(e,t,i){const r=e.match(i.other.indentCodeCompensation);if(r===null)return t;const n=r[1];return t.split(`
`).map(s=>{const a=s.match(i.other.beginningSpace);if(a===null)return s;const[o]=a;return o.length>=n.length?s.slice(n.length):s}).join(`
`)}var hr=class{constructor(e){ie(this,"options");ie(this,"rules");ie(this,"lexer");this.options=e||Ht}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const i=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?i:Ni(i,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const i=t[0],r=yu(i,t[3]||"",this.rules);return{type:"code",raw:i,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let i=t[2].trim();if(this.rules.other.endingHash.test(i)){const r=Ni(i,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(i=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Ni(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let i=Ni(t[0],`
`).split(`
`),r="",n="";const s=[];for(;i.length>0;){let a=!1;const o=[];let c;for(c=0;c<i.length;c++)if(this.rules.other.blockquoteStart.test(i[c]))o.push(i[c]),a=!0;else if(!a)o.push(i[c]);else break;i=i.slice(c);const l=o.join(`
`),u=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${l}`:l,n=n?`${n}
${u}`:u;const p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,s,!0),this.lexer.state.top=p,i.length===0)break;const m=s.at(-1);if(m?.type==="code")break;if(m?.type==="blockquote"){const w=m,E=w.raw+`
`+i.join(`
`),_=this.blockquote(E);s[s.length-1]=_,r=r.substring(0,r.length-w.raw.length)+_.raw,n=n.substring(0,n.length-w.text.length)+_.text;break}else if(m?.type==="list"){const w=m,E=w.raw+`
`+i.join(`
`),_=this.list(E);s[s.length-1]=_,r=r.substring(0,r.length-m.raw.length)+_.raw,n=n.substring(0,n.length-w.raw.length)+_.raw,i=E.substring(s.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:s,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let i=t[1].trim();const r=i.length>1,n={type:"list",raw:"",ordered:r,start:r?+i.slice(0,-1):"",loose:!1,items:[]};i=r?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=r?i:"[*+-]");const s=this.rules.other.listItemRegex(i);let a=!1;for(;e;){let c=!1,l="",u="";if(!(t=s.exec(e))||this.rules.block.hr.test(e))break;l=t[0],e=e.substring(l.length);let p=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,k=>" ".repeat(3*k.length)),m=e.split(`
`,1)[0],w=!p.trim(),E=0;if(this.options.pedantic?(E=2,u=p.trimStart()):w?E=t[1].length+1:(E=t[2].search(this.rules.other.nonSpaceChar),E=E>4?1:E,u=p.slice(E),E+=t[1].length),w&&this.rules.other.blankLine.test(m)&&(l+=m+`
`,e=e.substring(m.length+1),c=!0),!c){const k=this.rules.other.nextBulletRegex(E),f=this.rules.other.hrRegex(E),g=this.rules.other.fencesBeginRegex(E),b=this.rules.other.headingBeginRegex(E),y=this.rules.other.htmlBeginRegex(E);for(;e;){const T=e.split(`
`,1)[0];let D;if(m=T,this.options.pedantic?(m=m.replace(this.rules.other.listReplaceNesting,"  "),D=m):D=m.replace(this.rules.other.tabCharGlobal,"    "),g.test(m)||b.test(m)||y.test(m)||k.test(m)||f.test(m))break;if(D.search(this.rules.other.nonSpaceChar)>=E||!m.trim())u+=`
`+D.slice(E);else{if(w||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||g.test(p)||b.test(p)||f.test(p))break;u+=`
`+m}!w&&!m.trim()&&(w=!0),l+=T+`
`,e=e.substring(T.length+1),p=D.slice(E)}}n.loose||(a?n.loose=!0:this.rules.other.doubleBlankLine.test(l)&&(a=!0));let _=null,A;this.options.gfm&&(_=this.rules.other.listIsTask.exec(u),_&&(A=_[0]!=="[ ] ",u=u.replace(this.rules.other.listReplaceTask,""))),n.items.push({type:"list_item",raw:l,task:!!_,checked:A,loose:!1,text:u,tokens:[]}),n.raw+=l}const o=n.items.at(-1);if(o)o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd();else return;n.raw=n.raw.trimEnd();for(let c=0;c<n.items.length;c++)if(this.lexer.state.top=!1,n.items[c].tokens=this.lexer.blockTokens(n.items[c].text,[]),!n.loose){const l=n.items[c].tokens.filter(p=>p.type==="space"),u=l.length>0&&l.some(p=>this.rules.other.anyLine.test(p.raw));n.loose=u}if(n.loose)for(let c=0;c<n.items.length;c++)n.items[c].loose=!0;return n}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const i=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",n=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:i,raw:t[0],href:r,title:n}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const i=Ca(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),n=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],s={type:"table",raw:t[0],header:[],align:[],rows:[]};if(i.length===r.length){for(const a of r)this.rules.other.tableAlignRight.test(a)?s.align.push("right"):this.rules.other.tableAlignCenter.test(a)?s.align.push("center"):this.rules.other.tableAlignLeft.test(a)?s.align.push("left"):s.align.push(null);for(let a=0;a<i.length;a++)s.header.push({text:i[a],tokens:this.lexer.inline(i[a]),header:!0,align:s.align[a]});for(const a of n)s.rows.push(Ca(a,s.header.length).map((o,c)=>({text:o,tokens:this.lexer.inline(o),header:!1,align:s.align[c]})));return s}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const i=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:i,tokens:this.lexer.inline(i)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const i=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(i)){if(!this.rules.other.endAngleBracket.test(i))return;const s=Ni(i.slice(0,-1),"\\");if((i.length-s.length)%2===0)return}else{const s=_u(t[2],"()");if(s===-2)return;if(s>-1){const o=(t[0].indexOf("!")===0?5:4)+t[1].length+s;t[2]=t[2].substring(0,s),t[0]=t[0].substring(0,o).trim(),t[3]=""}}let r=t[2],n="";if(this.options.pedantic){const s=this.rules.other.pedanticHrefTitle.exec(r);s&&(r=s[1],n=s[3])}else n=t[3]?t[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(i)?r=r.slice(1):r=r.slice(1,-1)),ka(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:n&&n.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let i;if((i=this.rules.inline.reflink.exec(e))||(i=this.rules.inline.nolink.exec(e))){const r=(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," "),n=t[r.toLowerCase()];if(!n){const s=i[0].charAt(0);return{type:"text",raw:s,text:s}}return ka(i,n,i[0],this.lexer,this.rules)}}emStrong(e,t,i=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!r||r[3]&&i.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!i||this.rules.inline.punctuation.exec(i)){const s=[...r[0]].length-1;let a,o,c=s,l=0;const u=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,t=t.slice(-1*e.length+s);(r=u.exec(t))!=null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){c+=o;continue}else if((r[5]||r[6])&&s%3&&!((s+o)%3)){l+=o;continue}if(c-=o,c>0)continue;o=Math.min(o,o+c+l);const p=[...r[0]][0].length,m=e.slice(0,s+r.index+p+o);if(Math.min(s,o)%2){const E=m.slice(1,-1);return{type:"em",raw:m,text:E,tokens:this.lexer.inlineTokens(E)}}const w=m.slice(2,-2);return{type:"strong",raw:m,text:w,tokens:this.lexer.inlineTokens(w)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let i=t[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(i),n=this.rules.other.startingSpaceChar.test(i)&&this.rules.other.endingSpaceChar.test(i);return r&&n&&(i=i.substring(1,i.length-1)),{type:"codespan",raw:t[0],text:i}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let i,r;return t[2]==="@"?(i=t[1],r="mailto:"+i):(i=t[1],r=i),{type:"link",raw:t[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let i,r;if(t[2]==="@")i=t[0],r="mailto:"+i;else{let n;do n=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(n!==t[0]);i=t[0],t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:i,href:r,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const i=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:i}}}},mt=class Os{constructor(t){ie(this,"tokens");ie(this,"options");ie(this,"state");ie(this,"tokenizer");ie(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||Ht,this.options.tokenizer=this.options.tokenizer||new hr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const i={other:Ae,block:ur.normal,inline:Li.normal};this.options.pedantic?(i.block=ur.pedantic,i.inline=Li.pedantic):this.options.gfm&&(i.block=ur.gfm,this.options.breaks?i.inline=Li.breaks:i.inline=Li.gfm),this.tokenizer.rules=i}static get rules(){return{block:ur,inline:Li}}static lex(t,i){return new Os(i).lex(t)}static lexInline(t,i){return new Os(i).inlineTokens(t)}lex(t){t=t.replace(Ae.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let i=0;i<this.inlineQueue.length;i++){const r=this.inlineQueue[i];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,i=[],r=!1){for(this.options.pedantic&&(t=t.replace(Ae.tabCharGlobal,"    ").replace(Ae.spaceLine,""));t;){let n;if(this.options.extensions?.block?.some(a=>(n=a.call({lexer:this},t,i))?(t=t.substring(n.raw.length),i.push(n),!0):!1))continue;if(n=this.tokenizer.space(t)){t=t.substring(n.raw.length);const a=i.at(-1);n.raw.length===1&&a!==void 0?a.raw+=`
`:i.push(n);continue}if(n=this.tokenizer.code(t)){t=t.substring(n.raw.length);const a=i.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=`
`+n.raw,a.text+=`
`+n.text,this.inlineQueue.at(-1).src=a.text):i.push(n);continue}if(n=this.tokenizer.fences(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.heading(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.hr(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.blockquote(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.list(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.html(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.def(t)){t=t.substring(n.raw.length);const a=i.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=`
`+n.raw,a.text+=`
`+n.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(t)){t=t.substring(n.raw.length),i.push(n);continue}if(n=this.tokenizer.lheading(t)){t=t.substring(n.raw.length),i.push(n);continue}let s=t;if(this.options.extensions?.startBlock){let a=1/0;const o=t.slice(1);let c;this.options.extensions.startBlock.forEach(l=>{c=l.call({lexer:this},o),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(s=t.substring(0,a+1))}if(this.state.top&&(n=this.tokenizer.paragraph(s))){const a=i.at(-1);r&&a?.type==="paragraph"?(a.raw+=`
`+n.raw,a.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):i.push(n),r=s.length!==t.length,t=t.substring(n.raw.length);continue}if(n=this.tokenizer.text(t)){t=t.substring(n.raw.length);const a=i.at(-1);a?.type==="text"?(a.raw+=`
`+n.raw,a.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):i.push(n);continue}if(t){const a="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(a);break}else throw new Error(a)}}return this.state.top=!0,i}inline(t,i=[]){return this.inlineQueue.push({src:t,tokens:i}),i}inlineTokens(t,i=[]){let r=t,n=null;if(this.tokens.links){const o=Object.keys(this.tokens.links);if(o.length>0)for(;(n=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)o.includes(n[0].slice(n[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(n=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,n.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(n=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,n.index)+"["+"a".repeat(n[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let s=!1,a="";for(;t;){s||(a=""),s=!1;let o;if(this.options.extensions?.inline?.some(l=>(o=l.call({lexer:this},t,i))?(t=t.substring(o.raw.length),i.push(o),!0):!1))continue;if(o=this.tokenizer.escape(t)){t=t.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.tag(t)){t=t.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.link(t)){t=t.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(o.raw.length);const l=i.at(-1);o.type==="text"&&l?.type==="text"?(l.raw+=o.raw,l.text+=o.text):i.push(o);continue}if(o=this.tokenizer.emStrong(t,r,a)){t=t.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.codespan(t)){t=t.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.br(t)){t=t.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.del(t)){t=t.substring(o.raw.length),i.push(o);continue}if(o=this.tokenizer.autolink(t)){t=t.substring(o.raw.length),i.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(t))){t=t.substring(o.raw.length),i.push(o);continue}let c=t;if(this.options.extensions?.startInline){let l=1/0;const u=t.slice(1);let p;this.options.extensions.startInline.forEach(m=>{p=m.call({lexer:this},u),typeof p=="number"&&p>=0&&(l=Math.min(l,p))}),l<1/0&&l>=0&&(c=t.substring(0,l+1))}if(o=this.tokenizer.inlineText(c)){t=t.substring(o.raw.length),o.raw.slice(-1)!=="_"&&(a=o.raw.slice(-1)),s=!0;const l=i.at(-1);l?.type==="text"?(l.raw+=o.raw,l.text+=o.text):i.push(o);continue}if(t){const l="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return i}},pr=class{constructor(e){ie(this,"options");ie(this,"parser");this.options=e||Ht}space(e){return""}code({text:e,lang:t,escaped:i}){const r=(t||"").match(Ae.notSpaceStart)?.[0],n=e.replace(Ae.endingNewline,"")+`
`;return r?'<pre><code class="language-'+lt(r)+'">'+(i?n:lt(n,!0))+`</code></pre>
`:"<pre><code>"+(i?n:lt(n,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,i=e.start;let r="";for(let a=0;a<e.items.length;a++){const o=e.items[a];r+=this.listitem(o)}const n=t?"ol":"ul",s=t&&i!==1?' start="'+i+'"':"";return"<"+n+s+`>
`+r+"</"+n+`>
`}listitem(e){let t="";if(e.task){const i=this.checkbox({checked:!!e.checked});e.loose?e.tokens[0]?.type==="paragraph"?(e.tokens[0].text=i+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=i+" "+lt(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:i+" ",text:i+" ",escaped:!0}):t+=i+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",i="";for(let n=0;n<e.header.length;n++)i+=this.tablecell(e.header[n]);t+=this.tablerow({text:i});let r="";for(let n=0;n<e.rows.length;n++){const s=e.rows[n];i="";for(let a=0;a<s.length;a++)i+=this.tablecell(s[a]);r+=this.tablerow({text:i})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),i=e.header?"th":"td";return(e.align?`<${i} align="${e.align}">`:`<${i}>`)+t+`</${i}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${lt(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:i}){const r=this.parser.parseInline(i),n=Sa(e);if(n===null)return r;e=n;let s='<a href="'+e+'"';return t&&(s+=' title="'+lt(t)+'"'),s+=">"+r+"</a>",s}image({href:e,title:t,text:i,tokens:r}){r&&(i=this.parser.parseInline(r,this.parser.textRenderer));const n=Sa(e);if(n===null)return lt(i);e=n;let s=`<img src="${e}" alt="${i}"`;return t&&(s+=` title="${lt(t)}"`),s+=">",s}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:lt(e.text)}},Cn=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},bt=class Ps{constructor(t){ie(this,"options");ie(this,"renderer");ie(this,"textRenderer");this.options=t||Ht,this.options.renderer=this.options.renderer||new pr,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Cn}static parse(t,i){return new Ps(i).parse(t)}static parseInline(t,i){return new Ps(i).parseInline(t)}parse(t,i=!0){let r="";for(let n=0;n<t.length;n++){const s=t[n];if(this.options.extensions?.renderers?.[s.type]){const o=s,c=this.options.extensions.renderers[o.type].call({parser:this},o);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(o.type)){r+=c||"";continue}}const a=s;switch(a.type){case"space":{r+=this.renderer.space(a);continue}case"hr":{r+=this.renderer.hr(a);continue}case"heading":{r+=this.renderer.heading(a);continue}case"code":{r+=this.renderer.code(a);continue}case"table":{r+=this.renderer.table(a);continue}case"blockquote":{r+=this.renderer.blockquote(a);continue}case"list":{r+=this.renderer.list(a);continue}case"html":{r+=this.renderer.html(a);continue}case"paragraph":{r+=this.renderer.paragraph(a);continue}case"text":{let o=a,c=this.renderer.text(o);for(;n+1<t.length&&t[n+1].type==="text";)o=t[++n],c+=`
`+this.renderer.text(o);i?r+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):r+=c;continue}default:{const o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return r}parseInline(t,i=this.renderer){let r="";for(let n=0;n<t.length;n++){const s=t[n];if(this.options.extensions?.renderers?.[s.type]){const o=this.options.extensions.renderers[s.type].call({parser:this},s);if(o!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){r+=o||"";continue}}const a=s;switch(a.type){case"escape":{r+=i.text(a);break}case"html":{r+=i.html(a);break}case"link":{r+=i.link(a);break}case"image":{r+=i.image(a);break}case"strong":{r+=i.strong(a);break}case"em":{r+=i.em(a);break}case"codespan":{r+=i.codespan(a);break}case"br":{r+=i.br(a);break}case"del":{r+=i.del(a);break}case"text":{r+=i.text(a);break}default:{const o='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(o),"";throw new Error(o)}}}return r}},fr=(ws=class{constructor(e){ie(this,"options");ie(this,"block");this.options=e||Ht}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?mt.lex:mt.lexInline}provideParser(){return this.block?bt.parse:bt.parseInline}},ie(ws,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),ws),wu=class{constructor(...e){ie(this,"defaults",fn());ie(this,"options",this.setOptions);ie(this,"parse",this.parseMarkdown(!0));ie(this,"parseInline",this.parseMarkdown(!1));ie(this,"Parser",bt);ie(this,"Renderer",pr);ie(this,"TextRenderer",Cn);ie(this,"Lexer",mt);ie(this,"Tokenizer",hr);ie(this,"Hooks",fr);this.use(...e)}walkTokens(e,t){let i=[];for(const r of e)switch(i=i.concat(t.call(this,r)),r.type){case"table":{const n=r;for(const s of n.header)i=i.concat(this.walkTokens(s.tokens,t));for(const s of n.rows)for(const a of s)i=i.concat(this.walkTokens(a.tokens,t));break}case"list":{const n=r;i=i.concat(this.walkTokens(n.items,t));break}default:{const n=r;this.defaults.extensions?.childTokens?.[n.type]?this.defaults.extensions.childTokens[n.type].forEach(s=>{const a=n[s].flat(1/0);i=i.concat(this.walkTokens(a,t))}):n.tokens&&(i=i.concat(this.walkTokens(n.tokens,t)))}}return i}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(i=>{const r={...i};if(r.async=this.defaults.async||r.async||!1,i.extensions&&(i.extensions.forEach(n=>{if(!n.name)throw new Error("extension name required");if("renderer"in n){const s=t.renderers[n.name];s?t.renderers[n.name]=function(...a){let o=n.renderer.apply(this,a);return o===!1&&(o=s.apply(this,a)),o}:t.renderers[n.name]=n.renderer}if("tokenizer"in n){if(!n.level||n.level!=="block"&&n.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const s=t[n.level];s?s.unshift(n.tokenizer):t[n.level]=[n.tokenizer],n.start&&(n.level==="block"?t.startBlock?t.startBlock.push(n.start):t.startBlock=[n.start]:n.level==="inline"&&(t.startInline?t.startInline.push(n.start):t.startInline=[n.start]))}"childTokens"in n&&n.childTokens&&(t.childTokens[n.name]=n.childTokens)}),r.extensions=t),i.renderer){const n=this.defaults.renderer||new pr(this.defaults);for(const s in i.renderer){if(!(s in n))throw new Error(`renderer '${s}' does not exist`);if(["options","parser"].includes(s))continue;const a=s,o=i.renderer[a],c=n[a];n[a]=(...l)=>{let u=o.apply(n,l);return u===!1&&(u=c.apply(n,l)),u||""}}r.renderer=n}if(i.tokenizer){const n=this.defaults.tokenizer||new hr(this.defaults);for(const s in i.tokenizer){if(!(s in n))throw new Error(`tokenizer '${s}' does not exist`);if(["options","rules","lexer"].includes(s))continue;const a=s,o=i.tokenizer[a],c=n[a];n[a]=(...l)=>{let u=o.apply(n,l);return u===!1&&(u=c.apply(n,l)),u}}r.tokenizer=n}if(i.hooks){const n=this.defaults.hooks||new fr;for(const s in i.hooks){if(!(s in n))throw new Error(`hook '${s}' does not exist`);if(["options","block"].includes(s))continue;const a=s,o=i.hooks[a],c=n[a];fr.passThroughHooks.has(s)?n[a]=l=>{if(this.defaults.async)return Promise.resolve(o.call(n,l)).then(p=>c.call(n,p));const u=o.call(n,l);return c.call(n,u)}:n[a]=(...l)=>{let u=o.apply(n,l);return u===!1&&(u=c.apply(n,l)),u}}r.hooks=n}if(i.walkTokens){const n=this.defaults.walkTokens,s=i.walkTokens;r.walkTokens=function(a){let o=[];return o.push(s.call(this,a)),n&&(o=o.concat(n.call(this,a))),o}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return mt.lex(e,t??this.defaults)}parser(e,t){return bt.parse(e,t??this.defaults)}parseMarkdown(e){return(i,r)=>{const n={...r},s={...this.defaults,...n},a=this.onError(!!s.silent,!!s.async);if(this.defaults.async===!0&&n.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof i>"u"||i===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof i!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(i)+", string expected"));s.hooks&&(s.hooks.options=s,s.hooks.block=e);const o=s.hooks?s.hooks.provideLexer():e?mt.lex:mt.lexInline,c=s.hooks?s.hooks.provideParser():e?bt.parse:bt.parseInline;if(s.async)return Promise.resolve(s.hooks?s.hooks.preprocess(i):i).then(l=>o(l,s)).then(l=>s.hooks?s.hooks.processAllTokens(l):l).then(l=>s.walkTokens?Promise.all(this.walkTokens(l,s.walkTokens)).then(()=>l):l).then(l=>c(l,s)).then(l=>s.hooks?s.hooks.postprocess(l):l).catch(a);try{s.hooks&&(i=s.hooks.preprocess(i));let l=o(i,s);s.hooks&&(l=s.hooks.processAllTokens(l)),s.walkTokens&&this.walkTokens(l,s.walkTokens);let u=c(l,s);return s.hooks&&(u=s.hooks.postprocess(u)),u}catch(l){return a(l)}}}onError(e,t){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const r="<p>An error occurred:</p><pre>"+lt(i.message+"",!0)+"</pre>";return t?Promise.resolve(r):r}if(t)return Promise.reject(i);throw i}}},zt=new wu;function K(e,t){return zt.parse(e,t)}K.options=K.setOptions=function(e){return zt.setOptions(e),K.defaults=zt.defaults,la(K.defaults),K},K.getDefaults=fn,K.defaults=Ht,K.use=function(...e){return zt.use(...e),K.defaults=zt.defaults,la(K.defaults),K},K.walkTokens=function(e,t){return zt.walkTokens(e,t)},K.parseInline=zt.parseInline,K.Parser=bt,K.parser=bt.parse,K.Renderer=pr,K.TextRenderer=Cn,K.Lexer=mt,K.lexer=mt.lex,K.Tokenizer=hr,K.Hooks=fr,K.parse=K,K.options,K.setOptions,K.use,K.walkTokens,K.parseInline,bt.parse,mt.lex;/*! @license DOMPurify 3.4.0 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.0/LICENSE */const{entries:Ta,setPrototypeOf:$a,isFrozen:Su,getPrototypeOf:Cu,getOwnPropertyDescriptor:ku}=Object;let{freeze:Ie,seal:je,create:Fi}=Object,{apply:kn,construct:Tn}=typeof Reflect<"u"&&Reflect;Ie||(Ie=function(t){return t}),je||(je=function(t){return t}),kn||(kn=function(t,i){for(var r=arguments.length,n=new Array(r>2?r-2:0),s=2;s<r;s++)n[s-2]=arguments[s];return t.apply(i,n)}),Tn||(Tn=function(t){for(var i=arguments.length,r=new Array(i>1?i-1:0),n=1;n<i;n++)r[n-1]=arguments[n];return new t(...r)});const Ui=Me(Array.prototype.forEach),Tu=Me(Array.prototype.lastIndexOf),Ea=Me(Array.prototype.pop),Vi=Me(Array.prototype.push),$u=Me(Array.prototype.splice),gr=Me(String.prototype.toLowerCase),$n=Me(String.prototype.toString),En=Me(String.prototype.match),oi=Me(String.prototype.replace),Eu=Me(String.prototype.indexOf),xu=Me(String.prototype.trim),tt=Me(Object.prototype.hasOwnProperty),Re=Me(RegExp.prototype.test),Bi=Au(TypeError);function Me(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var i=arguments.length,r=new Array(i>1?i-1:0),n=1;n<i;n++)r[n-1]=arguments[n];return kn(e,t,r)}}function Au(e){return function(){for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return Tn(e,i)}}function j(e,t){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:gr;$a&&$a(e,null);let r=t.length;for(;r--;){let n=t[r];if(typeof n=="string"){const s=i(n);s!==n&&(Su(t)||(t[r]=s),n=s)}e[n]=!0}return e}function Iu(e){for(let t=0;t<e.length;t++)tt(e,t)||(e[t]=null);return e}function dt(e){const t=Fi(null);for(const[i,r]of Ta(e))tt(e,i)&&(Array.isArray(r)?t[i]=Iu(r):r&&typeof r=="object"&&r.constructor===Object?t[i]=dt(r):t[i]=r);return t}function Hi(e,t){for(;e!==null;){const r=ku(e,t);if(r){if(r.get)return Me(r.get);if(typeof r.value=="function")return Me(r.value)}e=Cu(e)}function i(){return null}return i}const xa=Ie(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),xn=Ie(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),An=Ie(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ru=Ie(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),In=Ie(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),Mu=Ie(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Aa=Ie(["#text"]),Ia=Ie(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),Rn=Ie(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ra=Ie(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),vr=Ie(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Du=je(/\{\{[\w\W]*|[\w\W]*\}\}/gm),Ou=je(/<%[\w\W]*|[\w\W]*%>/gm),Pu=je(/\$\{[\w\W]*/gm),Lu=je(/^data-[\-\w.\u00B7-\uFFFF]+$/),Nu=je(/^aria-[\-\w]+$/),Ma=je(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Fu=je(/^(?:\w+script|data):/i),Uu=je(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Da=je(/^html$/i),Vu=je(/^[a-z][.\w]*(-[.\w]+)+$/i);var Oa=Object.freeze({__proto__:null,ARIA_ATTR:Nu,ATTR_WHITESPACE:Uu,CUSTOM_ELEMENT:Vu,DATA_ATTR:Lu,DOCTYPE_NAME:Da,ERB_EXPR:Ou,IS_ALLOWED_URI:Ma,IS_SCRIPT_OR_DATA:Fu,MUSTACHE_EXPR:Du,TMPLIT_EXPR:Pu});const zi={element:1,text:3,progressingInstruction:7,comment:8,document:9},Bu=function(){return typeof window>"u"?null:window},Hu=function(t,i){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let r=null;const n="data-tt-policy-suffix";i&&i.hasAttribute(n)&&(r=i.getAttribute(n));const s="dompurify"+(r?"#"+r:"");try{return t.createPolicy(s,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+s+" could not be created."),null}},Pa=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function La(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Bu();const t=U=>La(U);if(t.version="3.4.0",t.removed=[],!e||!e.document||e.document.nodeType!==zi.document||!e.Element)return t.isSupported=!1,t;let{document:i}=e;const r=i,n=r.currentScript,{DocumentFragment:s,HTMLTemplateElement:a,Node:o,Element:c,NodeFilter:l,NamedNodeMap:u=e.NamedNodeMap||e.MozNamedAttrMap,HTMLFormElement:p,DOMParser:m,trustedTypes:w}=e,E=c.prototype,_=Hi(E,"cloneNode"),A=Hi(E,"remove"),k=Hi(E,"nextSibling"),f=Hi(E,"childNodes"),g=Hi(E,"parentNode");if(typeof a=="function"){const U=i.createElement("template");U.content&&U.content.ownerDocument&&(i=U.content.ownerDocument)}let b,y="";const{implementation:T,createNodeIterator:D,createDocumentFragment:G,getElementsByTagName:O}=i,{importNode:ee}=r;let L=Pa();t.isSupported=typeof Ta=="function"&&typeof g=="function"&&T&&T.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:J,ERB_EXPR:Ze,TMPLIT_EXPR:pt,DATA_ATTR:Qi,ARIA_ATTR:Ss,IS_SCRIPT_OR_DATA:Xr,ATTR_WHITESPACE:ve,CUSTOM_ELEMENT:Qe}=Oa;let{IS_ALLOWED_URI:$t}=Oa,oe=null;const Ve=j({},[...xa,...xn,...An,...In,...Aa]);let me=null;const at=j({},[...Ia,...Rn,...Ra,...vr]);let te=Object.seal(Fi(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ft=null,Et=null;const et=Object.seal(Fi(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let er=!0,Qt=!0,ei=!1,Jr=!0,ot=!1,tr=!0,ti=!1,Cs=!1,ks=!1,yi=!1,Zr=!1,Qr=!1,bl=!0,_l=!1;const n_="user-content-";let Ts=!0,ir=!1,wi={},gt=null;const $s=j({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let yl=null;const wl=j({},["audio","video","img","source","image","track"]);let Es=null;const Sl=j({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),en="http://www.w3.org/1998/Math/MathML",tn="http://www.w3.org/2000/svg",vt="http://www.w3.org/1999/xhtml";let Si=vt,xs=!1,As=null;const s_=j({},[en,tn,vt],$n);let rn=j({},["mi","mo","mn","ms","mtext"]),nn=j({},["annotation-xml"]);const a_=j({},["title","style","font","a","script"]);let rr=null;const o_=["application/xhtml+xml","text/html"],c_="text/html";let be=null,Ci=null;const l_=i.createElement("form"),Cl=function(d){return d instanceof RegExp||d instanceof Function},Is=function(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Ci&&Ci===d)){if((!d||typeof d!="object")&&(d={}),d=dt(d),rr=o_.indexOf(d.PARSER_MEDIA_TYPE)===-1?c_:d.PARSER_MEDIA_TYPE,be=rr==="application/xhtml+xml"?$n:gr,oe=tt(d,"ALLOWED_TAGS")?j({},d.ALLOWED_TAGS,be):Ve,me=tt(d,"ALLOWED_ATTR")?j({},d.ALLOWED_ATTR,be):at,As=tt(d,"ALLOWED_NAMESPACES")?j({},d.ALLOWED_NAMESPACES,$n):s_,Es=tt(d,"ADD_URI_SAFE_ATTR")?j(dt(Sl),d.ADD_URI_SAFE_ATTR,be):Sl,yl=tt(d,"ADD_DATA_URI_TAGS")?j(dt(wl),d.ADD_DATA_URI_TAGS,be):wl,gt=tt(d,"FORBID_CONTENTS")?j({},d.FORBID_CONTENTS,be):$s,ft=tt(d,"FORBID_TAGS")?j({},d.FORBID_TAGS,be):dt({}),Et=tt(d,"FORBID_ATTR")?j({},d.FORBID_ATTR,be):dt({}),wi=tt(d,"USE_PROFILES")?d.USE_PROFILES:!1,er=d.ALLOW_ARIA_ATTR!==!1,Qt=d.ALLOW_DATA_ATTR!==!1,ei=d.ALLOW_UNKNOWN_PROTOCOLS||!1,Jr=d.ALLOW_SELF_CLOSE_IN_ATTR!==!1,ot=d.SAFE_FOR_TEMPLATES||!1,tr=d.SAFE_FOR_XML!==!1,ti=d.WHOLE_DOCUMENT||!1,yi=d.RETURN_DOM||!1,Zr=d.RETURN_DOM_FRAGMENT||!1,Qr=d.RETURN_TRUSTED_TYPE||!1,ks=d.FORCE_BODY||!1,bl=d.SANITIZE_DOM!==!1,_l=d.SANITIZE_NAMED_PROPS||!1,Ts=d.KEEP_CONTENT!==!1,ir=d.IN_PLACE||!1,$t=d.ALLOWED_URI_REGEXP||Ma,Si=d.NAMESPACE||vt,rn=d.MATHML_TEXT_INTEGRATION_POINTS||rn,nn=d.HTML_INTEGRATION_POINTS||nn,te=d.CUSTOM_ELEMENT_HANDLING||Fi(null),d.CUSTOM_ELEMENT_HANDLING&&Cl(d.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(te.tagNameCheck=d.CUSTOM_ELEMENT_HANDLING.tagNameCheck),d.CUSTOM_ELEMENT_HANDLING&&Cl(d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(te.attributeNameCheck=d.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),d.CUSTOM_ELEMENT_HANDLING&&typeof d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(te.allowCustomizedBuiltInElements=d.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ot&&(Qt=!1),Zr&&(yi=!0),wi&&(oe=j({},Aa),me=Fi(null),wi.html===!0&&(j(oe,xa),j(me,Ia)),wi.svg===!0&&(j(oe,xn),j(me,Rn),j(me,vr)),wi.svgFilters===!0&&(j(oe,An),j(me,Rn),j(me,vr)),wi.mathMl===!0&&(j(oe,In),j(me,Ra),j(me,vr))),et.tagCheck=null,et.attributeCheck=null,d.ADD_TAGS&&(typeof d.ADD_TAGS=="function"?et.tagCheck=d.ADD_TAGS:(oe===Ve&&(oe=dt(oe)),j(oe,d.ADD_TAGS,be))),d.ADD_ATTR&&(typeof d.ADD_ATTR=="function"?et.attributeCheck=d.ADD_ATTR:(me===at&&(me=dt(me)),j(me,d.ADD_ATTR,be))),d.ADD_URI_SAFE_ATTR&&j(Es,d.ADD_URI_SAFE_ATTR,be),d.FORBID_CONTENTS&&(gt===$s&&(gt=dt(gt)),j(gt,d.FORBID_CONTENTS,be)),d.ADD_FORBID_CONTENTS&&(gt===$s&&(gt=dt(gt)),j(gt,d.ADD_FORBID_CONTENTS,be)),Ts&&(oe["#text"]=!0),ti&&j(oe,["html","head","body"]),oe.table&&(j(oe,["tbody"]),delete ft.tbody),d.TRUSTED_TYPES_POLICY){if(typeof d.TRUSTED_TYPES_POLICY.createHTML!="function")throw Bi('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof d.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Bi('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');b=d.TRUSTED_TYPES_POLICY,y=b.createHTML("")}else b===void 0&&(b=Hu(w,n)),b!==null&&typeof y=="string"&&(y=b.createHTML(""));Ie&&Ie(d),Ci=d}},kl=j({},[...xn,...An,...Ru]),Tl=j({},[...In,...Mu]),d_=function(d){let C=g(d);(!C||!C.tagName)&&(C={namespaceURI:Si,tagName:"template"});const R=gr(d.tagName),ae=gr(C.tagName);return As[d.namespaceURI]?d.namespaceURI===tn?C.namespaceURI===vt?R==="svg":C.namespaceURI===en?R==="svg"&&(ae==="annotation-xml"||rn[ae]):!!kl[R]:d.namespaceURI===en?C.namespaceURI===vt?R==="math":C.namespaceURI===tn?R==="math"&&nn[ae]:!!Tl[R]:d.namespaceURI===vt?C.namespaceURI===tn&&!nn[ae]||C.namespaceURI===en&&!rn[ae]?!1:!Tl[R]&&(a_[R]||!kl[R]):!!(rr==="application/xhtml+xml"&&As[d.namespaceURI]):!1},ct=function(d){Vi(t.removed,{element:d});try{g(d).removeChild(d)}catch{A(d)}},ii=function(d,C){try{Vi(t.removed,{attribute:C.getAttributeNode(d),from:C})}catch{Vi(t.removed,{attribute:null,from:C})}if(C.removeAttribute(d),d==="is")if(yi||Zr)try{ct(C)}catch{}else try{C.setAttribute(d,"")}catch{}},$l=function(d){let C=null,R=null;if(ks)d="<remove></remove>"+d;else{const pe=En(d,/^[\r\n\t ]+/);R=pe&&pe[0]}rr==="application/xhtml+xml"&&Si===vt&&(d='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+d+"</body></html>");const ae=b?b.createHTML(d):d;if(Si===vt)try{C=new m().parseFromString(ae,rr)}catch{}if(!C||!C.documentElement){C=T.createDocument(Si,"template",null);try{C.documentElement.innerHTML=xs?y:ae}catch{}}const xe=C.body||C.documentElement;return d&&R&&xe.insertBefore(i.createTextNode(R),xe.childNodes[0]||null),Si===vt?O.call(C,ti?"html":"body")[0]:ti?C.documentElement:xe},El=function(d){return D.call(d.ownerDocument||d,d,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},Rs=function(d){return d instanceof p&&(typeof d.nodeName!="string"||typeof d.textContent!="string"||typeof d.removeChild!="function"||!(d.attributes instanceof u)||typeof d.removeAttribute!="function"||typeof d.setAttribute!="function"||typeof d.namespaceURI!="string"||typeof d.insertBefore!="function"||typeof d.hasChildNodes!="function")},Ms=function(d){return typeof o=="function"&&d instanceof o};function xt(U,d,C){Ui(U,R=>{R.call(t,d,C,Ci)})}const xl=function(d){let C=null;if(xt(L.beforeSanitizeElements,d,null),Rs(d))return ct(d),!0;const R=be(d.nodeName);if(xt(L.uponSanitizeElement,d,{tagName:R,allowedTags:oe}),tr&&d.hasChildNodes()&&!Ms(d.firstElementChild)&&Re(/<[/\w!]/g,d.innerHTML)&&Re(/<[/\w!]/g,d.textContent)||tr&&d.namespaceURI===vt&&R==="style"&&Ms(d.firstElementChild)||d.nodeType===zi.progressingInstruction||tr&&d.nodeType===zi.comment&&Re(/<[/\w]/g,d.data))return ct(d),!0;if(ft[R]||!(et.tagCheck instanceof Function&&et.tagCheck(R))&&!oe[R]){if(!ft[R]&&Il(R)&&(te.tagNameCheck instanceof RegExp&&Re(te.tagNameCheck,R)||te.tagNameCheck instanceof Function&&te.tagNameCheck(R)))return!1;if(Ts&&!gt[R]){const ae=g(d)||d.parentNode,xe=f(d)||d.childNodes;if(xe&&ae){const pe=xe.length;for(let Be=pe-1;Be>=0;--Be){const We=_(xe[Be],!0);We.__removalCount=(d.__removalCount||0)+1,ae.insertBefore(We,k(d))}}}return ct(d),!0}return d instanceof c&&!d_(d)||(R==="noscript"||R==="noembed"||R==="noframes")&&Re(/<\/no(script|embed|frames)/i,d.innerHTML)?(ct(d),!0):(ot&&d.nodeType===zi.text&&(C=d.textContent,Ui([J,Ze,pt],ae=>{C=oi(C,ae," ")}),d.textContent!==C&&(Vi(t.removed,{element:d.cloneNode()}),d.textContent=C)),xt(L.afterSanitizeElements,d,null),!1)},Al=function(d,C,R){if(Et[C]||bl&&(C==="id"||C==="name")&&(R in i||R in l_))return!1;if(!(Qt&&!Et[C]&&Re(Qi,C))){if(!(er&&Re(Ss,C))){if(!(et.attributeCheck instanceof Function&&et.attributeCheck(C,d))){if(!me[C]||Et[C]){if(!(Il(d)&&(te.tagNameCheck instanceof RegExp&&Re(te.tagNameCheck,d)||te.tagNameCheck instanceof Function&&te.tagNameCheck(d))&&(te.attributeNameCheck instanceof RegExp&&Re(te.attributeNameCheck,C)||te.attributeNameCheck instanceof Function&&te.attributeNameCheck(C,d))||C==="is"&&te.allowCustomizedBuiltInElements&&(te.tagNameCheck instanceof RegExp&&Re(te.tagNameCheck,R)||te.tagNameCheck instanceof Function&&te.tagNameCheck(R))))return!1}else if(!Es[C]){if(!Re($t,oi(R,ve,""))){if(!((C==="src"||C==="xlink:href"||C==="href")&&d!=="script"&&Eu(R,"data:")===0&&yl[d])){if(!(ei&&!Re(Xr,oi(R,ve,"")))){if(R)return!1}}}}}}}return!0},Il=function(d){return d!=="annotation-xml"&&En(d,Qe)},Rl=function(d){xt(L.beforeSanitizeAttributes,d,null);const{attributes:C}=d;if(!C||Rs(d))return;const R={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:me,forceKeepAttr:void 0};let ae=C.length;for(;ae--;){const xe=C[ae],{name:pe,namespaceURI:Be,value:We}=xe,Nt=be(pe),Ds=We;let ke=pe==="value"?Ds:xu(Ds);if(R.attrName=Nt,R.attrValue=ke,R.keepAttr=!0,R.forceKeepAttr=void 0,xt(L.uponSanitizeAttribute,d,R),ke=R.attrValue,_l&&(Nt==="id"||Nt==="name")&&(ii(pe,d),ke=n_+ke),tr&&Re(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,ke)){ii(pe,d);continue}if(Nt==="attributename"&&En(ke,"href")){ii(pe,d);continue}if(R.forceKeepAttr)continue;if(!R.keepAttr){ii(pe,d);continue}if(!Jr&&Re(/\/>/i,ke)){ii(pe,d);continue}ot&&Ui([J,Ze,pt],Ol=>{ke=oi(ke,Ol," ")});const Dl=be(d.nodeName);if(!Al(Dl,Nt,ke)){ii(pe,d);continue}if(b&&typeof w=="object"&&typeof w.getAttributeType=="function"&&!Be)switch(w.getAttributeType(Dl,Nt)){case"TrustedHTML":{ke=b.createHTML(ke);break}case"TrustedScriptURL":{ke=b.createScriptURL(ke);break}}if(ke!==Ds)try{Be?d.setAttributeNS(Be,pe,ke):d.setAttribute(pe,ke),Rs(d)?ct(d):Ea(t.removed)}catch{ii(pe,d)}}xt(L.afterSanitizeAttributes,d,null)},Ml=function(d){let C=null;const R=El(d);for(xt(L.beforeSanitizeShadowDOM,d,null);C=R.nextNode();)xt(L.uponSanitizeShadowNode,C,null),xl(C),Rl(C),C.content instanceof s&&Ml(C.content);xt(L.afterSanitizeShadowDOM,d,null)};return t.sanitize=function(U){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},C=null,R=null,ae=null,xe=null;if(xs=!U,xs&&(U="<!-->"),typeof U!="string"&&!Ms(U))if(typeof U.toString=="function"){if(U=U.toString(),typeof U!="string")throw Bi("dirty is not a string, aborting")}else throw Bi("toString is not a function");if(!t.isSupported)return U;if(Cs||Is(d),t.removed=[],typeof U=="string"&&(ir=!1),ir){if(U.nodeName){const We=be(U.nodeName);if(!oe[We]||ft[We])throw Bi("root node is forbidden and cannot be sanitized in-place")}}else if(U instanceof o)C=$l("<!---->"),R=C.ownerDocument.importNode(U,!0),R.nodeType===zi.element&&R.nodeName==="BODY"||R.nodeName==="HTML"?C=R:C.appendChild(R);else{if(!yi&&!ot&&!ti&&U.indexOf("<")===-1)return b&&Qr?b.createHTML(U):U;if(C=$l(U),!C)return yi?null:Qr?y:""}C&&ks&&ct(C.firstChild);const pe=El(ir?U:C);for(;ae=pe.nextNode();)xl(ae),Rl(ae),ae.content instanceof s&&Ml(ae.content);if(ir)return U;if(yi){if(ot){C.normalize();let We=C.innerHTML;Ui([J,Ze,pt],Nt=>{We=oi(We,Nt," ")}),C.innerHTML=We}if(Zr)for(xe=G.call(C.ownerDocument);C.firstChild;)xe.appendChild(C.firstChild);else xe=C;return(me.shadowroot||me.shadowrootmode)&&(xe=ee.call(r,xe,!0)),xe}let Be=ti?C.outerHTML:C.innerHTML;return ti&&oe["!doctype"]&&C.ownerDocument&&C.ownerDocument.doctype&&C.ownerDocument.doctype.name&&Re(Da,C.ownerDocument.doctype.name)&&(Be="<!DOCTYPE "+C.ownerDocument.doctype.name+`>
`+Be),ot&&Ui([J,Ze,pt],We=>{Be=oi(Be,We," ")}),b&&Qr?b.createHTML(Be):Be},t.setConfig=function(){let U=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Is(U),Cs=!0},t.clearConfig=function(){Ci=null,Cs=!1},t.isValidAttribute=function(U,d,C){Ci||Is({});const R=be(U),ae=be(d);return Al(R,ae,C)},t.addHook=function(U,d){typeof d=="function"&&Vi(L[U],d)},t.removeHook=function(U,d){if(d!==void 0){const C=Tu(L[U],d);return C===-1?void 0:$u(L[U],C,1)[0]}return Ea(L[U])},t.removeHooks=function(U){L[U]=[]},t.removeAllHooks=function(){L=Pa()},t}var zu=La();const Wu={ALLOWED_TAGS:["a","abbr","b","blockquote","br","code","div","em","figure","figcaption","h1","h2","h3","h4","h5","h6","hr","i","img","li","ol","p","pre","q","small","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul"],ALLOWED_ATTR:["class","href","src","alt","title","target","rel"],ALLOWED_URI_REGEXP:/^(?:(?:https?|mailto|tel):|data:image\/(?:png|jpe?g|gif|webp|svg\+xml);base64,)/i,FORBID_TAGS:["script","style","iframe","object","embed","form","input","textarea","button"],FORBID_ATTR:["style"],ALLOW_DATA_ATTR:!1};function Na(e){const t=zu.sanitize(e,Wu);return ju(String(t))}function ju(e){return e.replace(/<a\b([^>]*?\btarget=["']_blank["'][^>]*?)>/gi,(t,i)=>/\brel=/i.test(i)?t:`<a${i} rel="noopener noreferrer">`)}var Fa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ua(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Mn={exports:{}},Va;function Gu(){return Va||(Va=1,(function(e){var t=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var i=(function(r){var n=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,a={},o={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function f(g){return g instanceof c?new c(g.type,f(g.content),g.alias):Array.isArray(g)?g.map(f):g.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(f){return Object.prototype.toString.call(f).slice(8,-1)},objId:function(f){return f.__id||Object.defineProperty(f,"__id",{value:++s}),f.__id},clone:function f(g,b){b=b||{};var y,T;switch(o.util.type(g)){case"Object":if(T=o.util.objId(g),b[T])return b[T];y={},b[T]=y;for(var D in g)g.hasOwnProperty(D)&&(y[D]=f(g[D],b));return y;case"Array":return T=o.util.objId(g),b[T]?b[T]:(y=[],b[T]=y,g.forEach(function(G,O){y[O]=f(G,b)}),y);default:return g}},getLanguage:function(f){for(;f;){var g=n.exec(f.className);if(g)return g[1].toLowerCase();f=f.parentElement}return"none"},setLanguage:function(f,g){f.className=f.className.replace(RegExp(n,"gi"),""),f.classList.add("language-"+g)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(y){var f=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(y.stack)||[])[1];if(f){var g=document.getElementsByTagName("script");for(var b in g)if(g[b].src==f)return g[b]}return null}},isActive:function(f,g,b){for(var y="no-"+g;f;){var T=f.classList;if(T.contains(g))return!0;if(T.contains(y))return!1;f=f.parentElement}return!!b}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(f,g){var b=o.util.clone(o.languages[f]);for(var y in g)b[y]=g[y];return b},insertBefore:function(f,g,b,y){y=y||o.languages;var T=y[f],D={};for(var G in T)if(T.hasOwnProperty(G)){if(G==g)for(var O in b)b.hasOwnProperty(O)&&(D[O]=b[O]);b.hasOwnProperty(G)||(D[G]=T[G])}var ee=y[f];return y[f]=D,o.languages.DFS(o.languages,function(L,J){J===ee&&L!=f&&(this[L]=D)}),D},DFS:function f(g,b,y,T){T=T||{};var D=o.util.objId;for(var G in g)if(g.hasOwnProperty(G)){b.call(g,G,g[G],y||G);var O=g[G],ee=o.util.type(O);ee==="Object"&&!T[D(O)]?(T[D(O)]=!0,f(O,b,null,T)):ee==="Array"&&!T[D(O)]&&(T[D(O)]=!0,f(O,b,G,T))}}},plugins:{},highlightAll:function(f,g){o.highlightAllUnder(document,f,g)},highlightAllUnder:function(f,g,b){var y={callback:b,container:f,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",y),y.elements=Array.prototype.slice.apply(y.container.querySelectorAll(y.selector)),o.hooks.run("before-all-elements-highlight",y);for(var T=0,D;D=y.elements[T++];)o.highlightElement(D,g===!0,y.callback)},highlightElement:function(f,g,b){var y=o.util.getLanguage(f),T=o.languages[y];o.util.setLanguage(f,y);var D=f.parentElement;D&&D.nodeName.toLowerCase()==="pre"&&o.util.setLanguage(D,y);var G=f.textContent,O={element:f,language:y,grammar:T,code:G};function ee(J){O.highlightedCode=J,o.hooks.run("before-insert",O),O.element.innerHTML=O.highlightedCode,o.hooks.run("after-highlight",O),o.hooks.run("complete",O),b&&b.call(O.element)}if(o.hooks.run("before-sanity-check",O),D=O.element.parentElement,D&&D.nodeName.toLowerCase()==="pre"&&!D.hasAttribute("tabindex")&&D.setAttribute("tabindex","0"),!O.code){o.hooks.run("complete",O),b&&b.call(O.element);return}if(o.hooks.run("before-highlight",O),!O.grammar){ee(o.util.encode(O.code));return}if(g&&r.Worker){var L=new Worker(o.filename);L.onmessage=function(J){ee(J.data)},L.postMessage(JSON.stringify({language:O.language,code:O.code,immediateClose:!0}))}else ee(o.highlight(O.code,O.grammar,O.language))},highlight:function(f,g,b){var y={code:f,grammar:g,language:b};if(o.hooks.run("before-tokenize",y),!y.grammar)throw new Error('The language "'+y.language+'" has no grammar.');return y.tokens=o.tokenize(y.code,y.grammar),o.hooks.run("after-tokenize",y),c.stringify(o.util.encode(y.tokens),y.language)},tokenize:function(f,g){var b=g.rest;if(b){for(var y in b)g[y]=b[y];delete g.rest}var T=new p;return m(T,T.head,f),u(f,T,g,T.head,0),E(T)},hooks:{all:{},add:function(f,g){var b=o.hooks.all;b[f]=b[f]||[],b[f].push(g)},run:function(f,g){var b=o.hooks.all[f];if(!(!b||!b.length))for(var y=0,T;T=b[y++];)T(g)}},Token:c};r.Prism=o;function c(f,g,b,y){this.type=f,this.content=g,this.alias=b,this.length=(y||"").length|0}c.stringify=function f(g,b){if(typeof g=="string")return g;if(Array.isArray(g)){var y="";return g.forEach(function(ee){y+=f(ee,b)}),y}var T={type:g.type,content:f(g.content,b),tag:"span",classes:["token",g.type],attributes:{},language:b},D=g.alias;D&&(Array.isArray(D)?Array.prototype.push.apply(T.classes,D):T.classes.push(D)),o.hooks.run("wrap",T);var G="";for(var O in T.attributes)G+=" "+O+'="'+(T.attributes[O]||"").replace(/"/g,"&quot;")+'"';return"<"+T.tag+' class="'+T.classes.join(" ")+'"'+G+">"+T.content+"</"+T.tag+">"};function l(f,g,b,y){f.lastIndex=g;var T=f.exec(b);if(T&&y&&T[1]){var D=T[1].length;T.index+=D,T[0]=T[0].slice(D)}return T}function u(f,g,b,y,T,D){for(var G in b)if(!(!b.hasOwnProperty(G)||!b[G])){var O=b[G];O=Array.isArray(O)?O:[O];for(var ee=0;ee<O.length;++ee){if(D&&D.cause==G+","+ee)return;var L=O[ee],J=L.inside,Ze=!!L.lookbehind,pt=!!L.greedy,Qi=L.alias;if(pt&&!L.pattern.global){var Ss=L.pattern.toString().match(/[imsuy]*$/)[0];L.pattern=RegExp(L.pattern.source,Ss+"g")}for(var Xr=L.pattern||L,ve=y.next,Qe=T;ve!==g.tail&&!(D&&Qe>=D.reach);Qe+=ve.value.length,ve=ve.next){var $t=ve.value;if(g.length>f.length)return;if(!($t instanceof c)){var oe=1,Ve;if(pt){if(Ve=l(Xr,Qe,f,Ze),!Ve||Ve.index>=f.length)break;var ft=Ve.index,me=Ve.index+Ve[0].length,at=Qe;for(at+=ve.value.length;ft>=at;)ve=ve.next,at+=ve.value.length;if(at-=ve.value.length,Qe=at,ve.value instanceof c)continue;for(var te=ve;te!==g.tail&&(at<me||typeof te.value=="string");te=te.next)oe++,at+=te.value.length;oe--,$t=f.slice(Qe,at),Ve.index-=Qe}else if(Ve=l(Xr,0,$t,Ze),!Ve)continue;var ft=Ve.index,Et=Ve[0],et=$t.slice(0,ft),er=$t.slice(ft+Et.length),Qt=Qe+$t.length;D&&Qt>D.reach&&(D.reach=Qt);var ei=ve.prev;et&&(ei=m(g,ei,et),Qe+=et.length),w(g,ei,oe);var Jr=new c(G,J?o.tokenize(Et,J):Et,Qi,Et);if(ve=m(g,ei,Jr),er&&m(g,ve,er),oe>1){var ot={cause:G+","+ee,reach:Qt};u(f,g,b,ve.prev,Qe,ot),D&&ot.reach>D.reach&&(D.reach=ot.reach)}}}}}}function p(){var f={value:null,prev:null,next:null},g={value:null,prev:f,next:null};f.next=g,this.head=f,this.tail=g,this.length=0}function m(f,g,b){var y=g.next,T={value:b,prev:g,next:y};return g.next=T,y.prev=T,f.length++,T}function w(f,g,b){for(var y=g.next,T=0;T<b&&y!==f.tail;T++)y=y.next;g.next=y,y.prev=g,f.length-=T}function E(f){for(var g=[],b=f.head.next;b!==f.tail;)g.push(b.value),b=b.next;return g}if(!r.document)return r.addEventListener&&(o.disableWorkerMessageHandler||r.addEventListener("message",function(f){var g=JSON.parse(f.data),b=g.language,y=g.code,T=g.immediateClose;r.postMessage(o.highlight(y,o.languages[b],b)),T&&r.close()},!1)),o;var _=o.util.currentScript();_&&(o.filename=_.src,_.hasAttribute("data-manual")&&(o.manual=!0));function A(){o.manual||o.highlightAll()}if(!o.manual){var k=document.readyState;k==="loading"||k==="interactive"&&_&&_.defer?document.addEventListener("DOMContentLoaded",A):window.requestAnimationFrame?window.requestAnimationFrame(A):window.setTimeout(A,16)}return o})(t);e.exports&&(e.exports=i),typeof Fa<"u"&&(Fa.Prism=i),i.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},i.languages.markup.tag.inside["attr-value"].inside.entity=i.languages.markup.entity,i.languages.markup.doctype.inside["internal-subset"].inside=i.languages.markup,i.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(i.languages.markup.tag,"addInlined",{value:function(n,s){var a={};a["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:i.languages[s]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};o["language-"+s]={pattern:/[\s\S]+/,inside:i.languages[s]};var c={};c[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:o},i.languages.insertBefore("markup","cdata",c)}}),Object.defineProperty(i.languages.markup.tag,"addAttribute",{value:function(r,n){i.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:i.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),i.languages.html=i.languages.markup,i.languages.mathml=i.languages.markup,i.languages.svg=i.languages.markup,i.languages.xml=i.languages.extend("markup",{}),i.languages.ssml=i.languages.xml,i.languages.atom=i.languages.xml,i.languages.rss=i.languages.xml,(function(r){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+n.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var s=r.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))})(i),i.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},i.languages.javascript=i.languages.extend("clike",{"class-name":[i.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),i.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,i.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:i.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:i.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:i.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:i.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:i.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),i.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:i.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),i.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),i.languages.markup&&(i.languages.markup.tag.addInlined("script","javascript"),i.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),i.languages.js=i.languages.javascript,(function(){if(typeof i>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",n=function(_,A){return"✖ Error "+_+" while fetching file: "+A},s="✖ Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},o="data-src-status",c="loading",l="loaded",u="failed",p="pre[data-src]:not(["+o+'="'+l+'"]):not(['+o+'="'+c+'"])';function m(_,A,k){var f=new XMLHttpRequest;f.open("GET",_,!0),f.onreadystatechange=function(){f.readyState==4&&(f.status<400&&f.responseText?A(f.responseText):f.status>=400?k(n(f.status,f.statusText)):k(s))},f.send(null)}function w(_){var A=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(_||"");if(A){var k=Number(A[1]),f=A[2],g=A[3];return f?g?[k,Number(g)]:[k,void 0]:[k,k]}}i.hooks.add("before-highlightall",function(_){_.selector+=", "+p}),i.hooks.add("before-sanity-check",function(_){var A=_.element;if(A.matches(p)){_.code="",A.setAttribute(o,c);var k=A.appendChild(document.createElement("CODE"));k.textContent=r;var f=A.getAttribute("data-src"),g=_.language;if(g==="none"){var b=(/\.(\w+)$/.exec(f)||[,"none"])[1];g=a[b]||b}i.util.setLanguage(k,g),i.util.setLanguage(A,g);var y=i.plugins.autoloader;y&&y.loadLanguages(g),m(f,function(T){A.setAttribute(o,l);var D=w(A.getAttribute("data-range"));if(D){var G=T.split(/\r\n?|\n/g),O=D[0],ee=D[1]==null?G.length:D[1];O<0&&(O+=G.length),O=Math.max(0,Math.min(O-1,G.length)),ee<0&&(ee+=G.length),ee=Math.max(0,Math.min(ee,G.length)),T=G.slice(O,ee).join(`
`),A.hasAttribute("data-start")||A.setAttribute("data-start",String(O+1))}k.textContent=T,i.highlightElement(k)},function(T){A.setAttribute(o,u),k.textContent=T})}}),i.plugins.fileHighlight={highlight:function(A){for(var k=(A||document).querySelectorAll(p),f=0,g;g=k[f++];)i.highlightElement(g)}};var E=!1;i.fileHighlight=function(){E||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),E=!0),i.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(Mn)),Mn.exports}var qu=Gu();const Dn=Ua(qu);Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,i){var r={};r["language-"+i]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[i]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var n={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};n["language-"+i]={pattern:/[\s\S]+/,inside:Prism.languages[i]};var s={};s[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:n},Prism.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var i=e.languages.markup;i&&(i.tag.addInlined("style","css"),i.tag.addAttribute("style","css"))})(Prism),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript;var Ba={},Ha;function Ku(){return Ha||(Ha=1,(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism)),Ba}Ku(),Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json;var za={},Wa;function Yu(){return Wa||(Wa=1,Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python),za}Yu(),(function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",i={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},r={bash:i,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:r},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:i}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:r},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:r.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:r.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},i.inside=e.languages.bash;for(var n=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],s=r.variable[1].inside,a=0;a<n.length;a++)s[n[a]]=e.languages.bash[n[a]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism),Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},variable:[{pattern:/@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,greedy:!0},/@[\w.$]+/],string:{pattern:/(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,greedy:!0,lookbehind:!0},identifier:{pattern:/(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,greedy:!0,lookbehind:!0,inside:{punctuation:/^`|`$/}},function:/\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,boolean:/\b(?:FALSE|NULL|TRUE)\b/i,number:/\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,operator:/[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},(function(e){var t=/[*&][^\s[\]{},]+/,i=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,r="(?:"+i.source+"(?:[ 	]+"+t.source+")?|"+t.source+"(?:[ 	]+"+i.source+")?)",n=/(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g,function(){return/[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source}),s=/"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;function a(o,c){c=(c||"").replace(/m/g,"")+"m";var l=/([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<value>>/g,function(){return o});return RegExp(l,c)}e.languages.yaml={scalar:{pattern:RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g,function(){return r})),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g,function(){return r}).replace(/<<key>>/g,function(){return"(?:"+n+"|"+s+")"})),lookbehind:!0,greedy:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:a(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),lookbehind:!0,alias:"number"},boolean:{pattern:a(/false|true/.source,"i"),lookbehind:!0,alias:"important"},null:{pattern:a(/null|~/.source,"i"),lookbehind:!0,alias:"important"},string:{pattern:a(s),lookbehind:!0,greedy:!0},number:{pattern:a(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,"i"),lookbehind:!0},tag:i,important:t,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},e.languages.yml=e.languages.yaml})(Prism),(function(e){var t=/(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;function i(u){return u=u.replace(/<inner>/g,function(){return t}),RegExp(/((?:^|[^\\])(?:\\{2})*)/.source+"(?:"+u+")")}var r=/(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,n=/\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g,function(){return r}),s=/\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;e.languages.markdown=e.languages.extend("markup",{}),e.languages.insertBefore("markdown","prolog",{"front-matter-block":{pattern:/(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,lookbehind:!0,greedy:!0,inside:{punctuation:/^---|---$/,"front-matter":{pattern:/\S+(?:\s+\S+)*/,alias:["yaml","language-yaml"],inside:e.languages.yaml}}},blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},table:{pattern:RegExp("^"+n+s+"(?:"+n+")*","m"),inside:{"table-data-rows":{pattern:RegExp("^("+n+s+")(?:"+n+")*$"),lookbehind:!0,inside:{"table-data":{pattern:RegExp(r),inside:e.languages.markdown},punctuation:/\|/}},"table-line":{pattern:RegExp("^("+n+")"+s+"$"),lookbehind:!0,inside:{punctuation:/\||:?-{3,}:?/}},"table-header-row":{pattern:RegExp("^"+n+"$"),inside:{"table-header":{pattern:RegExp(r),alias:"important",inside:e.languages.markdown},punctuation:/\|/}}}},code:[{pattern:/((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,lookbehind:!0,alias:"keyword"},{pattern:/^```[\s\S]*?^```$/m,greedy:!0,inside:{"code-block":{pattern:/^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,lookbehind:!0},"code-language":{pattern:/^(```).+/,lookbehind:!0},punctuation:/```/}}],title:[{pattern:/\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:i(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^..)[\s\S]+(?=..$)/,lookbehind:!0,inside:{}},punctuation:/\*\*|__/}},italic:{pattern:i(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^.)[\s\S]+(?=.$)/,lookbehind:!0,inside:{}},punctuation:/[*_]/}},strike:{pattern:i(/(~~?)(?:(?!~)<inner>)+\2/.source),lookbehind:!0,greedy:!0,inside:{content:{pattern:/(^~~?)[\s\S]+(?=\1$)/,lookbehind:!0,inside:{}},punctuation:/~~?/}},"code-snippet":{pattern:/(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,lookbehind:!0,greedy:!0,alias:["code","keyword"]},url:{pattern:i(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),lookbehind:!0,greedy:!0,inside:{operator:/^!/,content:{pattern:/(^\[)[^\]]+(?=\])/,lookbehind:!0,inside:{}},variable:{pattern:/(^\][ \t]?\[)[^\]]+(?=\]$)/,lookbehind:!0},url:{pattern:/(^\]\()[^\s)]+/,lookbehind:!0},string:{pattern:/(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,lookbehind:!0}}}}),["url","bold","italic","strike"].forEach(function(u){["url","bold","italic","strike","code-snippet"].forEach(function(p){u!==p&&(e.languages.markdown[u].inside.content.inside[p]=e.languages.markdown[p])})}),e.hooks.add("after-tokenize",function(u){if(u.language!=="markdown"&&u.language!=="md")return;function p(m){if(!(!m||typeof m=="string"))for(var w=0,E=m.length;w<E;w++){var _=m[w];if(_.type!=="code"){p(_.content);continue}var A=_.content[1],k=_.content[3];if(A&&k&&A.type==="code-language"&&k.type==="code-block"&&typeof A.content=="string"){var f=A.content.replace(/\b#/g,"sharp").replace(/\b\+\+/g,"pp");f=(/[a-z][\w-]*/i.exec(f)||[""])[0].toLowerCase();var g="language-"+f;k.alias?typeof k.alias=="string"?k.alias=[k.alias,g]:k.alias.push(g):k.alias=[g]}}}p(u.tokens)}),e.hooks.add("wrap",function(u){if(u.type==="code-block"){for(var p="",m=0,w=u.classes.length;m<w;m++){var E=u.classes[m],_=/language-(.+)/.exec(E);if(_){p=_[1];break}}var A=e.languages[p];if(A)u.content=e.highlight(l(u.content),A,p);else if(p&&p!=="none"&&e.plugins.autoloader){var k="md-"+new Date().valueOf()+"-"+Math.floor(Math.random()*1e16);u.attributes.id=k,e.plugins.autoloader.loadLanguages(p,function(){var f=document.getElementById(k);f&&(f.innerHTML=e.highlight(f.textContent,e.languages[p],p))})}}});var a=RegExp(e.languages.markup.tag.pattern.source,"gi"),o={amp:"&",lt:"<",gt:">",quot:'"'},c=String.fromCodePoint||String.fromCharCode;function l(u){var p=u.replace(a,"");return p=p.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi,function(m,w){if(w=w.toLowerCase(),w[0]==="#"){var E;return w[1]==="x"?E=parseInt(w.slice(2),16):E=Number(w.slice(1)),c(E)}else{var _=o[w];return _||m}}),p}e.languages.md=e.languages.markdown})(Prism);const Xu={js:"javascript",ts:"typescript",py:"python",shell:"bash",sh:"bash",yml:"yaml",md:"markdown",html:"markup",xml:"markup"};function Ju(e){if(!e)return null;const t=e.toLowerCase();return Xu[t]??t}function ja(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function Ga(e,t){const i=Ju(t);if(!i||!Dn.languages[i])return ja(e);try{return Dn.highlight(e,Dn.languages[i],i)}catch{return ja(e)}}const Zu=`
  .code-block {
    display: block;
    padding: 14px 16px;
    background: #1e1e1f;
    color: #d4d4d8;
    font-family: var(--sw-address-font-code);
    font-size: 13px;
    line-height: 1.7;
    border-radius: var(--sw-address-radius-sm);
    border: 1px solid rgba(255, 255, 255, 0.07);
    overflow-x: auto;
    white-space: pre;
  }
  .code-block .token.comment,
  .code-block .token.prolog,
  .code-block .token.doctype,
  .code-block .token.cdata { color: #898995; font-style: italic; }
  .code-block .token.punctuation { color: #d4d4d8; }
  .code-block .token.property,
  .code-block .token.tag,
  .code-block .token.boolean,
  .code-block .token.number,
  .code-block .token.constant,
  .code-block .token.symbol,
  .code-block .token.deleted { color: #ff6da0; }
  .code-block .token.selector,
  .code-block .token.attr-name,
  .code-block .token.string,
  .code-block .token.char,
  .code-block .token.builtin,
  .code-block .token.inserted { color: #40E0D0; }
  .code-block .token.operator,
  .code-block .token.entity,
  .code-block .token.url,
  .code-block .language-css .token.string,
  .code-block .style .token.string { color: #FFD700; }
  .code-block .token.atrule,
  .code-block .token.attr-value,
  .code-block .token.keyword { color: #6e9eff; }
  .code-block .token.function,
  .code-block .token.class-name { color: #40E0D0; }
  .code-block .token.regex,
  .code-block .token.important,
  .code-block .token.variable { color: #FFD700; }
`;K.setOptions({gfm:!0,breaks:!1}),K.use({renderer:{code({text:e,lang:t}){const i=(t||"").trim().split(/\s+/)[0],r=Ga(e,i||void 0),n=i?`<span class="code-block-lang">${i}</span>`:"";return`<div class="code-block" data-language="${i||"text"}">${n}<pre><code>${r}</code></pre></div>`}}});function qa(e){if(!e)return"";const t=K.parse(e,{async:!1});return Na(t)}const Qu=Le`
  .transcript {
    position: relative;
    flex: 0 0 var(--sw-address-transcript-width);
    width: var(--sw-address-transcript-width);
    max-width: 100%;
    background: var(--sw-address-bg-surface);
    border-left: 1px solid var(--sw-address-border);
    display: flex;
    flex-direction: column;
    min-height: 0;
    z-index: 2;
  }

  .transcript-header {
    padding: 18px var(--sw-address-gutter) 12px;
    border-bottom: 1px solid var(--sw-address-border);
    font-family: var(--sw-address-font-code);
    font-size: 11px;
    letter-spacing: var(--sw-address-letter-spacing-eyebrow);
    text-transform: uppercase;
    color: var(--sw-address-fg-muted);
    flex: 0 0 auto;
  }

  .transcript-body {
    flex: 1 1 auto;
    overflow-y: auto;
    padding: 16px var(--sw-address-gutter) 16px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-behavior: smooth;
  }

  .bubble {
    max-width: 84%;
    padding: 10px 14px;
    border-radius: 14px;
    font-size: 14px;
    line-height: 1.5;
    color: var(--sw-address-fg-default);
    background: var(--sw-address-bg-raised);
    word-wrap: break-word;
    overflow-wrap: anywhere;
    /* Pin text-align: host pages often set text-align on marketing
       sections and that inherits through the shadow DOM. Bubbles must
       read left-aligned regardless of embedding context. */
    text-align: start;
  }

  .bubble[data-speaker='ai'] {
    align-self: flex-start;
    border-left: 2px solid var(--sw-address-positive);
    border-top-left-radius: 4px;
  }

  .bubble[data-speaker='user'] {
    align-self: flex-end;
    border-right: 2px solid var(--sw-address-accent);
    border-top-right-radius: 4px;
  }

  .bubble[data-state='partial'] {
    opacity: 0.7;
    font-style: italic;
  }

  /* "Agent is composing" — an AI-side bubble holding three bouncing dots.
     Matches .bubble + .bubble[data-speaker='ai'] geometry so the real reply
     appears to land in the same spot the dots occupied. */
  .typing {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 13px 14px;
    border-radius: 14px;
    border-top-left-radius: 4px;
    border-left: 2px solid var(--sw-address-positive);
    background: var(--sw-address-bg-raised);
  }

  .typing-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--sw-address-fg-muted);
    animation: typing-bounce 1.2s ease-in-out infinite;
  }
  .typing-dot:nth-child(2) {
    animation-delay: 0.15s;
  }
  .typing-dot:nth-child(3) {
    animation-delay: 0.3s;
  }

  @keyframes typing-bounce {
    0%,
    60%,
    100% {
      transform: translateY(0);
      opacity: 0.35;
    }
    30% {
      transform: translateY(-4px);
      opacity: 0.9;
    }
  }

  .bubble[data-state='partial']::after {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    margin-left: 6px;
    border-radius: 50%;
    background: currentColor;
    animation: bubble-dot 1.1s ease-in-out infinite;
    vertical-align: middle;
    opacity: 0.6;
  }

  @keyframes bubble-dot {
    0%,
    100% {
      transform: scale(0.6);
      opacity: 0.3;
    }
    50% {
      transform: scale(1);
      opacity: 0.9;
    }
  }

  /* Coach insight: full-width row dropped inline by an ai_sidecar
     insight event. Turquoise-edged so it pops against user/AI bubbles
     without aligning to either side. Brand notes turquoise = positive
     active state, and coaching guidance fits that. */
  .insight {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 10px 14px;
    background: color-mix(in srgb, var(--sw-address-positive) 10%, var(--sw-address-bg-raised));
    border: 1px solid var(--sw-address-border);
    border-left: 3px solid var(--sw-address-positive);
    border-radius: 10px;
    color: var(--sw-address-fg-default);
    font-family: var(--sw-address-font-body);
    text-align: start;
    animation: insight-pulse 1.2s ease-out 1;
  }

  .insight-eyebrow {
    font-family: var(--sw-address-font-code);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--sw-address-positive);
  }

  .insight-text {
    font-size: 14px;
    line-height: 1.45;
    word-wrap: break-word;
    overflow-wrap: anywhere;
  }

  @keyframes insight-pulse {
    0% {
      box-shadow: 0 0 0 0 color-mix(in srgb, var(--sw-address-positive) 35%, transparent);
    }
    70% {
      box-shadow: 0 0 0 6px transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .insight {
      animation: none;
    }
  }

  /* Avatar column beside an agent reply. */
  .bubble-row {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    align-self: flex-start;
    max-width: 92%;
  }
  .bubble-row .bubble {
    /* The row owns the alignment now; the bubble fills what is left. */
    align-self: auto;
    max-width: 100%;
  }
  .avatar {
    /* Top of the reply, not vertically centred: a long answer would float
       the avatar into the middle of its own paragraph. */
    align-self: flex-start;
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
    /* Something behind a transparent PNG, plus a rim so a light avatar still
       reads as a circle against the panel. */
    background: var(--sw-address-bg-raised);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.08);
  }
  .avatar img {
    width: 100%;
    height: 100%;
    /* contain, not cover: scaled down whole rather than cropped, so a
       character or logo keeps its head and its margins. */
    object-fit: contain;
    display: block;
  }

  /* Markdown inside a chat bubble. Chat replies are markdown — lists,
     tables and fenced code are the normal case, not the exception — and
     without these they rendered as an unstyled run of text. */
  .bubble-md > *:first-child { margin-top: 0; }
  .bubble-md > *:last-child { margin-bottom: 0; }
  .bubble-md p { margin: 0 0 8px; }
  .bubble-md ul,
  .bubble-md ol { margin: 0 0 8px; padding-left: 20px; }
  .bubble-md li { margin: 2px 0; }
  .bubble-md h1,
  .bubble-md h2,
  .bubble-md h3 {
    font-family: var(--sw-address-font-heading);
    font-size: 15px;
    font-weight: 600;
    margin: 10px 0 6px;
    color: var(--sw-address-fg-headings);
  }
  .bubble-md a {
    color: var(--sw-address-accent);
    text-decoration: underline;
  }
  .bubble-md blockquote {
    margin: 6px 0;
    padding-left: 10px;
    border-left: 2px solid var(--sw-address-positive);
    color: var(--sw-address-fg-muted);
  }
  /* Inline code: a chip, not a block. */
  .bubble-md code {
    font-family: var(--sw-address-font-code);
    font-size: 12px;
    padding: 1px 5px;
    border-radius: 4px;
    background: var(--sw-address-bg-subtle);
  }
  /* Fenced block: dark in both themes, matching the content drawer, because
     a code palette that flips with the page theme reads as a bug. */
  .bubble-md .code-block {
    position: relative;
    margin: 8px 0;
    border-radius: 6px;
    background: #1e1e1f;
    border: 1px solid var(--sw-address-border);
    overflow: hidden;
  }
  .bubble-md .code-block-lang {
    display: block;
    padding: 4px 10px;
    font-family: var(--sw-address-font-code);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--sw-address-fg-muted);
    background: #2a2a2e;
  }
  .bubble-md .code-block pre {
    margin: 0;
    padding: 10px;
    overflow-x: auto;
    max-height: 300px;
  }
  .bubble-md .code-block code {
    background: none;
    padding: 0;
    font-size: 12px;
    line-height: 1.5;
    color: #d4d4d8;
  }
  /* Tables scroll rather than widening the bubble. */
  .bubble-md table {
    display: block;
    max-width: 100%;
    overflow-x: auto;
    border-collapse: collapse;
    font-size: 13px;
    margin: 8px 0;
  }
  .bubble-md th,
  .bubble-md td {
    border: 1px solid var(--sw-address-border);
    padding: 4px 8px;
    text-align: left;
  }
  .bubble-md img { max-width: 100%; border-radius: 6px; }

  /* Conversation status line (currently only the chat idle-timeout notice).
     Deliberately quiet — muted, centred, no accent edge. It is not a turn and
     must not read like one, and it is not a warning either: the conversation
     ending on idle is ordinary. Gold is reserved for actual warnings per the
     brand rules, so this stays neutral. */
  .notice {
    align-self: center;
    max-width: 85%;
    padding: 6px 12px;
    background: var(--sw-address-bg-raised);
    border: 1px solid var(--sw-address-border);
    border-radius: var(--sw-address-radius-sm);
    color: var(--sw-address-fg-muted);
    font-family: var(--sw-address-font-body);
    font-size: 12px;
    line-height: 1.45;
    text-align: center;
    word-wrap: break-word;
    overflow-wrap: anywhere;
  }

  /* Content chip: minimized placeholder for a display_content push.
     Fuchsia-edged card that reads as a callable button. */
  .content-chip {
    align-self: stretch;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    background: var(--sw-address-bg-raised);
    border: 1px solid var(--sw-address-border);
    border-left: 2px solid var(--sw-address-accent);
    border-radius: 10px;
    color: var(--sw-address-fg-default);
    font-family: var(--sw-address-font-body);
    text-align: start;
    cursor: pointer;
    transition:
      background var(--sw-address-duration-fast) var(--sw-address-ease),
      border-color var(--sw-address-duration-fast) var(--sw-address-ease);
  }

  .content-chip:hover {
    background: var(--sw-address-bg-subtle);
    border-color: var(--sw-address-accent);
  }

  .content-chip:focus-visible {
    outline: 2px solid var(--sw-address-brand-blue);
    outline-offset: 2px;
  }

  .content-chip[data-open='true'] {
    background: var(--sw-address-bg-subtle);
    border-color: var(--sw-address-accent);
  }

  .content-chip-icon {
    flex: 0 0 auto;
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background: var(--sw-address-bg-subtle);
    color: var(--sw-address-accent);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--sw-address-font-code);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.02em;
  }

  .content-chip-body {
    flex: 1 1 auto;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .content-chip-title {
    font-size: 13px;
    font-weight: 500;
    color: var(--sw-address-fg-default);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .content-chip-preview {
    font-family: var(--sw-address-font-code);
    font-size: 11px;
    color: var(--sw-address-fg-muted);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .content-chip-open {
    flex: 0 0 auto;
    color: var(--sw-address-fg-muted);
    display: inline-flex;
    align-items: center;
  }

  .content-chip-open svg {
    width: 14px;
    height: 14px;
    display: block;
  }

  /* Mobile: width goes to 100% and flex shifts to grow instead of the
     fixed sidebar width. The overlay-body flips to column direction via
     its own media query, so the transcript flows below the video. */
  @media (max-width: 767px) {
    .transcript {
      width: 100%;
      flex: 1 1 0;
      min-height: 120px;
      border-left: none;
      border-top: 1px solid var(--sw-address-border);
    }
    .bubble {
      max-width: 92%;
    }
  }

  /* Explicit stacked layout — same shape as the mobile rules above, but
     triggered by the stacked attribute regardless of screen size. */
  .transcript[data-stacked='true'] {
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    flex: 1 1 0;
    min-height: 120px;
    border-left: none;
    border-top: 1px solid var(--sw-address-border);
  }

  @media (prefers-reduced-motion: reduce) {
    .transcript {
      transition: none;
    }
    .bubble[data-state='partial']::after {
      animation: none;
    }
    /* Hold the dots steady but still visible, so the indicator reads as
       present without motion. */
    .typing-dot {
      animation: none;
      opacity: 0.5;
    }
  }
`;function eh(e,t,i,r){const n=e.speaker==="ai"?"bubble bubble-ai":"bubble bubble-user",s=e.medium==="chat"&&e.state==="complete",a=i&&e.speaker==="ai"?x`<div class="avatar" aria-hidden="true">
          <img src=${i} alt="" @error=${()=>r?.()} />
        </div>`:z,o=x`<div
    part=${n}
    class="bubble"
    data-speaker=${e.speaker}
    data-state=${e.state}
    data-medium=${e.medium??"voice"}
    data-key=${t}
  >
    ${s?x`<div class="bubble-md">${ca(qa(e.text))}</div>`:e.text}
  </div>`;return a===z?o:x`<div class="bubble-row" data-key=${t}>${a}${o}</div>`}const th=x`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <polyline points="9 18 15 12 9 6" />
</svg>`;function ih(e){switch(e){case"code":return"</>";case"markdown":return"MD";case"html":return"{}";case"text":default:return"T"}}function rh(e,t){return x`<div
    part="insight"
    class="insight"
    role="status"
    aria-live="polite"
    data-key=${t}
  >
    <span class="insight-eyebrow">${e.label??"Coach"}</span>
    <span class="insight-text">${e.text}</span>
  </div>`}function nh(e,t){return x`<div
    part="notice"
    class="notice"
    role="status"
    aria-live="polite"
    data-key=${t}
  >
    ${e.text}
  </div>`}function sh(e,t,i,r){const n=e.id===i,s=e.format==="code"?`Shared code${e.language?` (${e.language})`:""}`:e.title;return x`<button
    part="content-chip"
    class="content-chip"
    type="button"
    data-key=${t}
    data-format=${e.format}
    data-open=${String(n)}
    aria-label=${`Open shared ${e.format}: ${e.title}`}
    aria-expanded=${String(n)}
    @click=${()=>r(e.id)}
  >
    <span class="content-chip-icon" aria-hidden="true">${ih(e.format)}</span>
    <span class="content-chip-body">
      <span class="content-chip-title">${s}</span>
      <span class="content-chip-preview">${e.preview}</span>
    </span>
    <span class="content-chip-open" aria-hidden="true">${th}</span>
  </button>`}function ah(e){return x`
    <aside
      part="transcript"
      class="transcript"
      data-visible=${String(e.visible)}
      data-stacked=${String(e.stacked)}
      aria-hidden=${String(!1)}
      aria-label="Call transcript"
    >
      <header class="transcript-header">Transcript</header>
      <div class="transcript-body" ${ai(e.scrollRef)}>
        ${e.entries.map((t,i)=>t.kind==="bubble"?eh(t,i,e.avatarUrl,e.onAvatarError):t.kind==="content"?sh(t,i,e.openContentId,e.onContentClick):t.kind==="notice"?nh(t,i):rh(t,i))}
        ${e.awaiting?oh(e.avatarUrl):z}
      </div>
    </aside>
  `}function oh(e){const t=x`<div
    part="typing"
    class="typing"
    role="status"
    aria-label="Assistant is typing"
  >
    <span class="typing-dot"></span>
    <span class="typing-dot"></span>
    <span class="typing-dot"></span>
  </div>`;return e?x`<div class="bubble-row">
    <div class="avatar" aria-hidden="true"><img src=${e} alt="" /></div>
    ${t}
  </div>`:t}function Ka(e){e&&(e.scrollTop=e.scrollHeight)}function ch(){return si()}const lh=Le`
  ${Fs(Zu)}

  .content-drawer {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: var(--sw-address-drawer-width);
    max-width: calc(100% - 32px);
    background: var(--sw-address-bg-raised);
    color: var(--sw-address-fg-default);
    border-left: 2px solid var(--sw-address-accent);
    box-shadow: var(--sw-address-shadow-lg);
    z-index: 4;
    display: flex;
    flex-direction: column;
    transform: translateX(110%);
    transition: transform var(--sw-address-duration-enter) var(--sw-address-ease);
  }

  .content-drawer[data-visible='true'] {
    transform: translateX(0);
  }

  .content-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 18px 14px;
    border-bottom: 1px solid var(--sw-address-border);
    gap: 12px;
    flex: 0 0 auto;
  }

  .content-drawer-title {
    font-family: var(--sw-address-font-code);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: var(--sw-address-letter-spacing-eyebrow);
    text-transform: uppercase;
    color: var(--sw-address-accent);
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .content-drawer-actions {
    display: inline-flex;
    gap: 6px;
    align-items: center;
    flex: 0 0 auto;
  }

  .content-drawer-iconbutton {
    width: 32px;
    height: 32px;
    border-radius: var(--sw-address-radius-sm);
    background: transparent;
    color: var(--sw-address-fg-muted);
    border: 1px solid transparent;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    transition:
      background var(--sw-address-duration-fast) var(--sw-address-ease),
      color var(--sw-address-duration-fast) var(--sw-address-ease),
      border-color var(--sw-address-duration-fast) var(--sw-address-ease);
  }

  .content-drawer-iconbutton:hover {
    background: var(--sw-address-bg-subtle);
    color: var(--sw-address-fg-default);
    border-color: var(--sw-address-border);
  }

  .content-drawer-iconbutton:focus-visible {
    outline: 2px solid var(--sw-address-brand-blue);
    outline-offset: 2px;
  }

  .content-drawer-iconbutton svg {
    width: 16px;
    height: 16px;
    display: block;
  }

  .content-drawer-copied {
    color: var(--sw-address-positive) !important;
  }

  .content-drawer-body {
    flex: 1 1 auto;
    overflow-y: auto;
    padding: 18px;
    font-family: var(--sw-address-font-body);
    font-size: 15px;
    line-height: 1.6;
    /* Lock left-aligned: text-align inherits, and embedding hosts often
       have text-align:center on marketing sections. Without this pin,
       markdown paragraphs and code blocks render centered when the
       widget is embedded in such a section. */
    text-align: start;
  }

  .content-drawer-body > :first-child {
    margin-top: 0;
  }
  .content-drawer-body > :last-child {
    margin-bottom: 0;
  }

  .content-drawer-body p {
    margin: 0 0 12px;
  }

  .content-drawer-body h1,
  .content-drawer-body h2,
  .content-drawer-body h3,
  .content-drawer-body h4 {
    font-family: var(--sw-address-font-heading);
    color: var(--sw-address-fg-headings);
    line-height: 1.2;
    margin: 16px 0 8px;
  }

  .content-drawer-body h1 {
    font-size: 22px;
  }
  .content-drawer-body h2 {
    font-size: 18px;
  }
  .content-drawer-body h3 {
    font-size: 16px;
  }

  .content-drawer-body a {
    color: var(--sw-address-accent);
    text-decoration: underline;
  }

  .content-drawer-body code {
    font-family: var(--sw-address-font-code);
    font-size: 0.9em;
    background: var(--sw-address-bg-subtle);
    padding: 1px 5px;
    border-radius: 4px;
  }

  .content-drawer-body pre {
    margin: 12px 0;
  }

  .content-drawer-body pre code {
    background: transparent;
    padding: 0;
  }

  .content-drawer-text {
    font-family: var(--sw-address-font-body);
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  @media (max-width: 767px) {
    .content-drawer {
      top: auto;
      left: 0;
      right: 0;
      bottom: 0;
      width: auto;
      max-width: none;
      max-height: 70vh;
      border-left: none;
      border-top: 2px solid var(--sw-address-accent);
      transform: translateY(110%);
    }
    .content-drawer[data-visible='true'] {
      transform: translateY(0);
    }
  }

  /* Stacked layout (audio-only or layout="stacked"): the drawer lives
     inside the .chat-region wrapper rendered by AddressWidget, which
     becomes the positioned ancestor. The drawer absolute-overlays the
     transcript for the lifetime of the content push — close it and the
     transcript underneath is intact. */
  .content-drawer[data-stacked='true'] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    min-height: 0;
    border-left: none;
    border-top: none;
    transform: none;
    transition: none;
    z-index: 5;
    box-shadow: var(--sw-address-shadow-lg);
  }

  @media (prefers-reduced-motion: reduce) {
    .content-drawer {
      transition: none;
    }
  }
`,dh=x`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
</svg>`,uh=x`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>`;function hh(e){switch(e.format){case"markdown":return qa(e.content);case"html":return Na(e.content);case"code":{const t=Ga(e.content,e.language);return`<pre class="code-block" data-language="${e.language??"text"}"><code>${t}</code></pre>`}case"text":default:return""}}async function ph(e,t){try{await navigator.clipboard.writeText(e),t.classList.add("content-drawer-copied"),setTimeout(()=>t.classList.remove("content-drawer-copied"),1400)}catch(i){console.warn("[address-widget] clipboard write failed",i)}}function fh(e){const{content:t,visible:i,onClose:r}=e,n=t?.title??"Shared",s=t?hh(t):"";return x`
    <section
      part="content-drawer"
      class="content-drawer"
      data-visible=${String(i)}
      data-stacked=${String(e.stacked)}
      aria-hidden=${String(!i)}
      aria-label=${`Shared content${t?.title?`: ${t.title}`:""}`}
    >
      <header part="content-drawer-header" class="content-drawer-header">
        <span class="content-drawer-title">${n}</span>
        <div class="content-drawer-actions">
          <button
            class="content-drawer-iconbutton"
            type="button"
            aria-label="Copy to clipboard"
            title="Copy"
            @click=${a=>{t&&ph(t.content,a.currentTarget)}}
          >
            ${dh}
          </button>
          <button
            part="close"
            class="content-drawer-iconbutton"
            type="button"
            aria-label="Close shared content"
            title="Close"
            @click=${r}
          >
            ${uh}
          </button>
        </div>
      </header>
      <div part="content-drawer-body" class="content-drawer-body">
        ${t?t.format==="text"?x`<div class="content-drawer-text">${t.content}</div>`:x`${ca(s)}`:x`<p class="content-drawer-text">No content.</p>`}
      </div>
    </section>
  `}class Ya{constructor(){this._entries=[],this._aiPartial=null,this._userPartial=null,this._lastSpoken=null,this.medium="voice",this.onUpdate=()=>{}}getHistory(){const t=[...this._entries];return this._aiPartial&&this._userPartial?this._lastSpoken==="user"?t.push(this._aiPartial,this._userPartial):t.push(this._userPartial,this._aiPartial):this._aiPartial?t.push(this._aiPartial):this._userPartial&&t.push(this._userPartial),t}get hasAny(){return this._entries.length>0||this._aiPartial!==null||this._userPartial!==null}get lastSpoken(){return this._lastSpoken}reset(){this._entries=[],this._aiPartial=null,this._userPartial=null,this._lastSpoken=null,this.onUpdate()}onUserPartial(t,i){t&&(this._userPartial={kind:"bubble",speaker:"user",text:t,state:"partial"},this._lastSpoken="user",this.onUpdate())}onUserComplete(t,i){if(!t){this._userPartial&&(this._userPartial=null,this.onUpdate());return}this._entries.push({kind:"bubble",speaker:"user",text:t,state:"complete",medium:this.medium,ts:Date.now()}),this._userPartial=null,this._lastSpoken="user",this.onUpdate()}onAiChunk(t,i){t&&(this._aiPartial?this._aiPartial.text=`${this._aiPartial.text} ${t}`.replace(/\s+/g," ").trim():this._aiPartial={kind:"bubble",speaker:"ai",text:t,state:"partial"},this._lastSpoken="ai",this.onUpdate())}onAiComplete(t,i){if(this._aiPartial){const r=t.length>0?t:this._aiPartial.text;this._entries.push({kind:"bubble",speaker:"ai",text:r,state:"complete",medium:this.medium,ts:Date.now()}),this._aiPartial=null}else t.length>0&&this._entries.push({kind:"bubble",speaker:"ai",text:t,state:"complete",medium:this.medium,ts:Date.now()});this._lastSpoken=i?"user":"ai",this.onUpdate()}pushContent(t){this._entries.push({kind:"content",...t}),this.onUpdate()}pushInsight(t){this._entries.push({kind:"insight",...t}),this.onUpdate()}pushNotice(t){t&&(this._entries.push({kind:"notice",text:t,ts:Date.now()}),this.onUpdate())}replaceWithTranscript(t){this._entries=t.filter(i=>typeof i.text=="string"&&i.text.trim()).map(i=>({kind:"bubble",speaker:i.role==="user"?"user":"ai",text:i.text,state:"complete",medium:"chat",ts:i.ts})),this._aiPartial=null,this._userPartial=null,this._lastSpoken=null,this.onUpdate()}loadSnapshot(t){this._entries=t.filter(i=>{if(i.kind==="content"||i.kind==="insight"||i.kind==="notice")return!0;if(i.kind!=="bubble"||i.state!=="complete"||typeof i.text!="string")return!1;const r=i.text.trim();return!(!r||r==="undefined"||r==="null")}),this._aiPartial=null,this._userPartial=null,this._lastSpoken=null,this.onUpdate()}getCommittedEntries(){return[...this._entries]}}const gh=Le`
  .banner {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    font-family: var(--sw-address-font-body);
    font-size: 13px;
    line-height: 1.4;
    border-bottom: 1px solid var(--sw-address-border);
  }
  .banner[data-level='info'] {
    background: var(--sw-address-bg-subtle);
    color: var(--sw-address-fg-default);
  }
  .banner[data-level='warning'] {
    background: color-mix(in srgb, var(--sw-address-warning, #ffd700) 12%, var(--sw-address-bg-surface));
    color: var(--sw-address-fg-default);
    border-bottom-color: var(--sw-address-warning, #ffd700);
  }
  .banner[data-level='success'] {
    background: color-mix(in srgb, var(--sw-address-positive) 12%, var(--sw-address-bg-surface));
    color: var(--sw-address-fg-default);
    border-bottom-color: var(--sw-address-positive);
  }
  .banner[data-level='error'] {
    background: color-mix(in srgb, var(--sw-address-accent) 14%, var(--sw-address-bg-surface));
    color: var(--sw-address-fg-default);
    border-bottom-color: var(--sw-address-accent);
  }
  .banner-text {
    flex: 1 1 auto;
  }
  .banner-dismiss {
    flex: 0 0 auto;
    background: transparent;
    border: none;
    color: var(--sw-address-fg-muted);
    cursor: pointer;
    padding: 2px 6px;
    border-radius: var(--sw-address-radius-sm);
    font-size: 18px;
    line-height: 1;
  }
  .banner-dismiss:hover {
    background: var(--sw-address-bg-subtle);
    color: var(--sw-address-fg-default);
  }
  .banner-dismiss:focus-visible {
    outline: 2px solid var(--sw-address-brand-blue);
    outline-offset: 2px;
  }
`;function vh(e){const{message:t}=e;return t?x`
    <div
      part="banner"
      class="banner"
      data-level=${t.level}
      role=${t.level==="error"?"alert":"status"}
      aria-live=${t.level==="error"?"assertive":"polite"}
    >
      <span class="banner-text">${t.text}</span>
      ${t.dismissible?x`<button
            class="banner-dismiss"
            type="button"
            aria-label="Dismiss notification"
            @click=${e.onDismiss}
          >
            ×
          </button>`:null}
    </div>
  `:x``}const mh=Le`
  /* ─────────────────────────────────────────────────────────────────
     Modal
     ───────────────────────────────────────────────────────────────── */
  .consent-modal {
    padding: 0;
    margin: 0;
    border: none;
    max-width: none;
    max-height: none;
    background: transparent;
    color: var(--sw-address-fg-default);
    width: 100vw;
    height: 100vh;
    position: fixed;
    inset: 0;
    overflow: hidden;
    z-index: var(--sw-address-z-overlay);
    display: grid;
    place-items: center;
  }
  .consent-modal::backdrop {
    background: rgba(0, 0, 0, 0.55);
  }
  .consent-modal:not([open]) {
    display: none;
  }
  .consent-card {
    width: min(440px, calc(100vw - 32px));
    background: var(--sw-address-bg-surface);
    color: var(--sw-address-fg-default);
    border: 1px solid var(--sw-address-border);
    border-radius: var(--sw-address-radius);
    padding: 24px;
    box-shadow: var(--sw-address-shadow-lg);
    font-family: var(--sw-address-font-body);
    text-align: start;
    animation: consent-enter 220ms var(--sw-address-ease, ease-out) both;
  }
  @keyframes consent-enter {
    from { transform: translateY(8px) scale(0.96); opacity: 0; }
    to   { transform: translateY(0)    scale(1);    opacity: 1; }
  }
  .consent-title {
    margin: 0 0 10px;
    font-family: var(--sw-address-font-heading);
    font-size: 18px;
    font-weight: 600;
    color: var(--sw-address-fg-headings);
  }
  .consent-body {
    margin: 0 0 18px;
    font-size: 14px;
    line-height: 1.55;
    color: var(--sw-address-fg-muted);
  }
  .consent-toggles {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 14px;
  }
  .consent-device {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 10px;
    font-size: 12px;
    color: var(--sw-address-fg-muted);
  }
  .consent-device select {
    font: inherit;
    font-size: 13px;
    padding: 6px 8px;
    border: 1px solid var(--sw-address-border);
    border-radius: var(--sw-address-radius-sm);
    background: var(--sw-address-bg-raised);
    color: var(--sw-address-fg-default);
  }
  .consent-device select:focus-visible {
    outline: 2px solid var(--sw-address-brand-blue);
    outline-offset: 2px;
  }
  .mic-meter {
    margin-top: 6px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .mic-meter__bar {
    height: 6px;
    border-radius: 3px;
    background: var(--sw-address-bg-raised);
    border: 1px solid var(--sw-address-border);
    overflow: hidden;
  }
  .mic-meter__fill {
    height: 100%;
    /* Turquoise: the brand's positive-state colour, and this is the one
       genuinely positive signal on the screen — the microphone works. */
    background: var(--sw-address-positive);
    transition: width 60ms linear;
  }
  /* Gold is the warning role. Reserved for exactly this: a microphone that
     is connected and producing nothing, which the visitor can still fix. */
  .mic-meter[data-silent='true'] .mic-meter__bar {
    border-color: var(--sw-address-warning);
  }
  .mic-meter[data-silent='true'] .mic-meter__hint {
    color: var(--sw-address-warning);
  }
  .mic-meter__hint {
    font-size: 11px;
    line-height: 1.4;
    color: var(--sw-address-fg-muted);
  }
  .mic-meter--error {
    font-size: 11px;
    line-height: 1.4;
    color: var(--sw-address-warning);
  }
  @media (prefers-reduced-motion: reduce) {
    .mic-meter__fill {
      transition: none;
    }
  }
  .consent-toggle {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 10px;
    background: var(--sw-address-bg-raised);
    border: 1px solid var(--sw-address-border);
    border-radius: var(--sw-address-radius-sm);
    font-size: 14px;
    cursor: pointer;
  }
  .consent-toggle input[type='checkbox'] {
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: var(--sw-address-positive);
  }
  .consent-toggle[data-disabled='true'] {
    opacity: 0.7;
    cursor: not-allowed;
  }
  .consent-toggle[data-disabled='true'] input {
    cursor: not-allowed;
  }
  .consent-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
  .consent-btn {
    font: inherit;
    padding: 8px 16px;
    border-radius: var(--sw-address-radius-pill);
    border: 1px solid var(--sw-address-border);
    background: var(--sw-address-bg-raised);
    color: var(--sw-address-fg-default);
    cursor: pointer;
    transition: background var(--sw-address-duration-fast) var(--sw-address-ease);
  }
  .consent-btn:hover {
    background: var(--sw-address-bg-subtle);
  }
  .consent-btn[data-primary='true'] {
    background: var(--sw-address-accent);
    border-color: var(--sw-address-accent);
    color: #fff;
  }
  .consent-btn[data-primary='true']:hover {
    filter: brightness(1.08);
  }
  .consent-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .consent-btn:focus-visible {
    outline: 2px solid var(--sw-address-brand-blue);
    outline-offset: 2px;
  }
  .consent-foot {
    margin: 14px 0 0;
    font-size: 12px;
    color: var(--sw-address-fg-muted);
  }
  .consent-foot a {
    color: var(--sw-address-accent);
    text-decoration: none;
  }
  .consent-foot a:hover {
    text-decoration: underline;
  }

  /* ─────────────────────────────────────────────────────────────────
     "Recorded demo" badge (in-call) and pre-call edit link.
     Intentionally low-key — no red, no pulsing dot, no warning-light
     pattern. Just a quiet pill that says what's going on. The pre-call
     modal and edit link are where the consent decision lives; this
     badge is reinforcement, not alarm.
     ───────────────────────────────────────────────────────────────── */
  .consent-badge {
    position: absolute;
    top: max(16px, env(safe-area-inset-top, 16px));
    left: max(16px, env(safe-area-inset-left, 16px));
    z-index: 3;
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    background: rgba(0, 0, 0, 0.45);
    color: rgba(255, 255, 255, 0.85);
    font-family: var(--sw-address-font-body);
    font-size: 11px;
    border-radius: var(--sw-address-radius-pill);
    backdrop-filter: blur(8px);
    pointer-events: none;
  }
  @media (prefers-reduced-motion: reduce) {
    .consent-card { animation: none; }
  }

`;function bh(e){if(!e.micCheck)return z;if(e.micError)return x`<div class="mic-meter mic-meter--error" role="status">
      Can't open that microphone. Pick another, or check your browser's
      microphone permission.
    </div>`;const t=Math.round(Math.min(1,Math.max(0,e.micLevel))*100);return x`
    <div class="mic-meter" data-silent=${String(e.micSilent)}>
      <div
        class="mic-meter__bar"
        role="meter"
        aria-label="Microphone input level"
        aria-valuenow=${t}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div class="mic-meter__fill" style=${`width:${t}%`}></div>
      </div>
      <div class="mic-meter__hint">
        ${e.micSilent?x`<strong>No sound detected.</strong> Say something \u2014 if the bar
              stays flat, this microphone isn't picking anything up.`:x`Say something to check your microphone.`}
      </div>
    </div>
  `}function _h(e){const i=e.draft.audio;return x`
    <dialog
      part="consent-modal"
      class="consent-modal"
      ${ai(e.dialogRef)}
      aria-labelledby="sw-consent-title"
      @cancel=${r=>{r.preventDefault(),e.onCancel()}}
    >
      <div class="consent-card">
        <h2 id="sw-consent-title" class="consent-title">Call recording</h2>
        <p class="consent-body">
          This call is recorded. Audio and transcripts are used to improve our AI and
          customer support experience, and aren't shared or sold to third parties.
        </p>
        <div class="consent-toggles">
          <label class="consent-toggle" data-disabled=${String(!0)}>
            <input
              type="checkbox"
              .checked=${e.draft.audio}
              ?disabled=${!0}
              @change=${r=>e.onDraftChange("audio",r.target.checked)}
            />
            <span>Share audio <em style="opacity:0.7;font-style:normal">(required)</em></span>
          </label>
          <label class="consent-toggle">
            <input
              type="checkbox"
              .checked=${e.draft.train}
              @change=${r=>e.onDraftChange("train",r.target.checked)}
            />
            <span>Allow my audio to help train future AI features</span>
          </label>
          ${e.showCameraOption?x`<label class="consent-toggle">
                <input
                  type="checkbox"
                  .checked=${e.draft.camera}
                  @change=${r=>e.onDraftChange("camera",r.target.checked)}
                />
                <span
                  >Share my camera
                  <em style="opacity:0.7;font-style:normal"
                    >(recorded; not used to train AI)</em
                  ></span
                >
              </label>`:z}
        </div>
        ${e.audioDevices.length>0&&e.draft.audio?x`<div class="consent-device">
              <label for="sw-consent-mic">Microphone</label>
              <select
                id="sw-consent-mic"
                .value=${e.draft.audioDeviceId??""}
                @change=${r=>{const n=r.target.value;e.onDraftChange("audioDeviceId",n||null)}}
              >
                <option value="">Browser default</option>
                ${e.audioDevices.map((r,n)=>x`<option value=${r.deviceId}>${r.label||`Microphone ${n+1}`}</option>`)}
              </select>
              ${bh(e)}
            </div>`:z}
        ${e.showCameraOption&&e.videoDevices.length>0&&e.draft.camera?x`<div class="consent-device">
              <label for="sw-consent-cam">Camera</label>
              <select
                id="sw-consent-cam"
                .value=${e.draft.videoDeviceId??""}
                @change=${r=>{const n=r.target.value;e.onDraftChange("videoDeviceId",n||null)}}
              >
                <option value="">Browser default</option>
                ${e.videoDevices.map((r,n)=>x`<option value=${r.deviceId}>${r.label||`Camera ${n+1}`}</option>`)}
              </select>
            </div>`:z}
        <div class="consent-actions">
          <button class="consent-btn" type="button" @click=${e.onCancel}>Cancel</button>
          <button
            class="consent-btn"
            data-primary="true"
            type="button"
            ?disabled=${!i}
            @click=${e.onAccept}
          >
            Start call
          </button>
        </div>
      </div>
    </dialog>
  `}function yh(e){if(!e.show)return z;const t=e.camera?"Recorded demo · audio + video":"Recorded demo · audio";return x`<span part="consent-badge" class="consent-badge" aria-label=${t}
    >${t}</span
  >`}function wh(){return si()}var On=function(e,t){return On=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(i[n]=r[n])},On(e,t)};function Ne(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");On(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}function Sh(e,t,i,r){function n(s){return s instanceof i?s:new i(function(a){a(s)})}return new(i||(i=Promise))(function(s,a){function o(u){try{l(r.next(u))}catch(p){a(p)}}function c(u){try{l(r.throw(u))}catch(p){a(p)}}function l(u){u.done?s(u.value):n(u.value).then(o,c)}l((r=r.apply(e,t||[])).next())})}function Xa(e,t){var i={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,n,s,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=o(0),a.throw=o(1),a.return=o(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function o(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(i=0)),i;)try{if(r=1,n&&(s=l[0]&2?n.return:l[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,l[1])).done)return s;switch(n=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,n=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(s=i.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){i=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){i.label=l[1];break}if(l[0]===6&&i.label<s[1]){i.label=s[1],s=l;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(l);break}s[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(u){l=[6,u],n=0}finally{r=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function ci(e){var t=typeof Symbol=="function"&&Symbol.iterator,i=t&&e[t],r=0;if(i)return i.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function it(e,t){var i=typeof Symbol=="function"&&e[Symbol.iterator];if(!i)return e;var r=i.call(e),n,s=[],a;try{for(;(t===void 0||t-- >0)&&!(n=r.next()).done;)s.push(n.value)}catch(o){a={error:o}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(a)throw a.error}}return s}function rt(e,t,i){if(i||arguments.length===2)for(var r=0,n=t.length,s;r<n;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}function li(e){return this instanceof li?(this.v=e,this):new li(e)}function Ch(e,t,i){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=i.apply(e,t||[]),n,s=[];return n=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),o("next"),o("throw"),o("return",a),n[Symbol.asyncIterator]=function(){return this},n;function a(w){return function(E){return Promise.resolve(E).then(w,p)}}function o(w,E){r[w]&&(n[w]=function(_){return new Promise(function(A,k){s.push([w,_,A,k])>1||c(w,_)})},E&&(n[w]=E(n[w])))}function c(w,E){try{l(r[w](E))}catch(_){m(s[0][3],_)}}function l(w){w.value instanceof li?Promise.resolve(w.value.v).then(u,p):m(s[0][2],w)}function u(w){c("next",w)}function p(w){c("throw",w)}function m(w,E){w(E),s.shift(),s.length&&c(s[0][0],s[0][1])}}function kh(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],i;return t?t.call(e):(e=typeof ci=="function"?ci(e):e[Symbol.iterator](),i={},r("next"),r("throw"),r("return"),i[Symbol.asyncIterator]=function(){return this},i);function r(s){i[s]=e[s]&&function(a){return new Promise(function(o,c){a=e[s](a),n(o,c,a.done,a.value)})}}function n(s,a,o,c){Promise.resolve(c).then(function(l){s({value:l,done:o})},a)}}typeof SuppressedError=="function"&&SuppressedError;function ce(e){return typeof e=="function"}function mr(e){var t=function(r){Error.call(r),r.stack=new Error().stack},i=e(t);return i.prototype=Object.create(Error.prototype),i.prototype.constructor=i,i}var Pn=mr(function(e){return function(i){e(this),this.message=i?i.length+` errors occurred during unsubscription:
`+i.map(function(r,n){return n+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=i}});function br(e,t){if(e){var i=e.indexOf(t);0<=i&&e.splice(i,1)}}var di=(function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,i,r,n,s;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var o=ci(a),c=o.next();!c.done;c=o.next()){var l=c.value;l.remove(this)}}catch(_){t={error:_}}finally{try{c&&!c.done&&(i=o.return)&&i.call(o)}finally{if(t)throw t.error}}else a.remove(this);var u=this.initialTeardown;if(ce(u))try{u()}catch(_){s=_ instanceof Pn?_.errors:[_]}var p=this._finalizers;if(p){this._finalizers=null;try{for(var m=ci(p),w=m.next();!w.done;w=m.next()){var E=w.value;try{Qa(E)}catch(_){s=s??[],_ instanceof Pn?s=rt(rt([],it(s)),it(_.errors)):s.push(_)}}}catch(_){r={error:_}}finally{try{w&&!w.done&&(n=m.return)&&n.call(m)}finally{if(r)throw r.error}}}if(s)throw new Pn(s)}},e.prototype.add=function(t){var i;if(t&&t!==this)if(this.closed)Qa(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(i=this._finalizers)!==null&&i!==void 0?i:[]).push(t)}},e.prototype._hasParent=function(t){var i=this._parentage;return i===t||Array.isArray(i)&&i.includes(t)},e.prototype._addParent=function(t){var i=this._parentage;this._parentage=Array.isArray(i)?(i.push(t),i):i?[i,t]:t},e.prototype._removeParent=function(t){var i=this._parentage;i===t?this._parentage=null:Array.isArray(i)&&br(i,t)},e.prototype.remove=function(t){var i=this._finalizers;i&&br(i,t),t instanceof e&&t._removeParent(this)},e.EMPTY=(function(){var t=new e;return t.closed=!0,t})(),e})(),Ja=di.EMPTY;function Za(e){return e instanceof di||e&&"closed"in e&&ce(e.remove)&&ce(e.add)&&ce(e.unsubscribe)}function Qa(e){ce(e)?e():e.unsubscribe()}var Th={Promise:void 0},$h={setTimeout:function(e,t){for(var i=[],r=2;r<arguments.length;r++)i[r-2]=arguments[r];return setTimeout.apply(void 0,rt([e,t],it(i)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function eo(e){$h.setTimeout(function(){throw e})}function Wi(){}function _r(e){e()}var Ln=(function(e){Ne(t,e);function t(i){var r=e.call(this)||this;return r.isStopped=!1,i?(r.destination=i,Za(i)&&i.add(r)):r.destination=Ah,r}return t.create=function(i,r,n){return new ui(i,r,n)},t.prototype.next=function(i){this.isStopped||this._next(i)},t.prototype.error=function(i){this.isStopped||(this.isStopped=!0,this._error(i))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(i){this.destination.next(i)},t.prototype._error=function(i){try{this.destination.error(i)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t})(di),Eh=(function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var i=this.partialObserver;if(i.next)try{i.next(t)}catch(r){yr(r)}},e.prototype.error=function(t){var i=this.partialObserver;if(i.error)try{i.error(t)}catch(r){yr(r)}else yr(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(i){yr(i)}},e})(),ui=(function(e){Ne(t,e);function t(i,r,n){var s=e.call(this)||this,a;return ce(i)||!i?a={next:i??void 0,error:r??void 0,complete:n??void 0}:a=i,s.destination=new Eh(a),s}return t})(Ln);function yr(e){eo(e)}function xh(e){throw e}var Ah={closed:!0,next:Wi,error:xh,complete:Wi},Nn=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function Wt(e){return e}function wr(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return to(e)}function to(e){return e.length===0?Wt:e.length===1?e[0]:function(i){return e.reduce(function(r,n){return n(r)},i)}}var he=(function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var i=new e;return i.source=this,i.operator=t,i},e.prototype.subscribe=function(t,i,r){var n=this,s=Rh(t)?t:new ui(t,i,r);return _r(function(){var a=n,o=a.operator,c=a.source;s.add(o?o.call(s,c):c?n._subscribe(s):n._trySubscribe(s))}),s},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(i){t.error(i)}},e.prototype.forEach=function(t,i){var r=this;return i=io(i),new i(function(n,s){var a=new ui({next:function(o){try{t(o)}catch(c){s(c),a.unsubscribe()}},error:s,complete:n});r.subscribe(a)})},e.prototype._subscribe=function(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)},e.prototype[Nn]=function(){return this},e.prototype.pipe=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];return to(t)(this)},e.prototype.toPromise=function(t){var i=this;return t=io(t),new t(function(r,n){var s;i.subscribe(function(a){return s=a},function(a){return n(a)},function(){return r(s)})})},e.create=function(t){return new e(t)},e})();function io(e){var t;return(t=e??Th.Promise)!==null&&t!==void 0?t:Promise}function Ih(e){return e&&ce(e.next)&&ce(e.error)&&ce(e.complete)}function Rh(e){return e&&e instanceof Ln||Ih(e)&&Za(e)}function Mh(e){return ce(e?.lift)}function le(e){return function(t){if(Mh(t))return t.lift(function(i){try{return e(i,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function ne(e,t,i,r,n){return new Dh(e,t,i,r,n)}var Dh=(function(e){Ne(t,e);function t(i,r,n,s,a,o){var c=e.call(this,i)||this;return c.onFinalize=a,c.shouldUnsubscribe=o,c._next=r?function(l){try{r(l)}catch(u){i.error(u)}}:e.prototype._next,c._error=s?function(l){try{s(l)}catch(u){i.error(u)}finally{this.unsubscribe()}}:e.prototype._error,c._complete=n?function(){try{n()}catch(l){i.error(l)}finally{this.unsubscribe()}}:e.prototype._complete,c}return t.prototype.unsubscribe=function(){var i;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;e.prototype.unsubscribe.call(this),!r&&((i=this.onFinalize)===null||i===void 0||i.call(this))}},t})(Ln),ro={schedule:function(e){var t=requestAnimationFrame,i=cancelAnimationFrame,r=t(function(n){i=void 0,e(n)});return new di(function(){return i?.(r)})},requestAnimationFrame:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return requestAnimationFrame.apply(void 0,rt([],it(e)))},cancelAnimationFrame:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return cancelAnimationFrame.apply(void 0,rt([],it(e)))},delegate:void 0},Oh=mr(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),hi=(function(e){Ne(t,e);function t(){var i=e.call(this)||this;return i.closed=!1,i.currentObservers=null,i.observers=[],i.isStopped=!1,i.hasError=!1,i.thrownError=null,i}return t.prototype.lift=function(i){var r=new no(this,this);return r.operator=i,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new Oh},t.prototype.next=function(i){var r=this;_r(function(){var n,s;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var a=ci(r.currentObservers),o=a.next();!o.done;o=a.next()){var c=o.value;c.next(i)}}catch(l){n={error:l}}finally{try{o&&!o.done&&(s=a.return)&&s.call(a)}finally{if(n)throw n.error}}}})},t.prototype.error=function(i){var r=this;_r(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=i;for(var n=r.observers;n.length;)n.shift().error(i)}})},t.prototype.complete=function(){var i=this;_r(function(){if(i._throwIfClosed(),!i.isStopped){i.isStopped=!0;for(var r=i.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var i;return((i=this.observers)===null||i===void 0?void 0:i.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(i){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,i)},t.prototype._subscribe=function(i){return this._throwIfClosed(),this._checkFinalizedStatuses(i),this._innerSubscribe(i)},t.prototype._innerSubscribe=function(i){var r=this,n=this,s=n.hasError,a=n.isStopped,o=n.observers;return s||a?Ja:(this.currentObservers=null,o.push(i),new di(function(){r.currentObservers=null,br(o,i)}))},t.prototype._checkFinalizedStatuses=function(i){var r=this,n=r.hasError,s=r.thrownError,a=r.isStopped;n?i.error(s):a&&i.complete()},t.prototype.asObservable=function(){var i=new he;return i.source=this,i},t.create=function(i,r){return new no(i,r)},t})(he),no=(function(e){Ne(t,e);function t(i,r){var n=e.call(this)||this;return n.destination=i,n.source=r,n}return t.prototype.next=function(i){var r,n;(n=(r=this.destination)===null||r===void 0?void 0:r.next)===null||n===void 0||n.call(r,i)},t.prototype.error=function(i){var r,n;(n=(r=this.destination)===null||r===void 0?void 0:r.error)===null||n===void 0||n.call(r,i)},t.prototype.complete=function(){var i,r;(r=(i=this.destination)===null||i===void 0?void 0:i.complete)===null||r===void 0||r.call(i)},t.prototype._subscribe=function(i){var r,n;return(n=(r=this.source)===null||r===void 0?void 0:r.subscribe(i))!==null&&n!==void 0?n:Ja},t})(hi),Ph=(function(e){Ne(t,e);function t(i){var r=e.call(this)||this;return r._value=i,r}return Object.defineProperty(t.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),t.prototype._subscribe=function(i){var r=e.prototype._subscribe.call(this,i);return!r.closed&&i.next(this._value),r},t.prototype.getValue=function(){var i=this,r=i.hasError,n=i.thrownError,s=i._value;if(r)throw n;return this._throwIfClosed(),s},t.prototype.next=function(i){e.prototype.next.call(this,this._value=i)},t})(hi),Fn={now:function(){return(Fn.delegate||Date).now()},delegate:void 0},Un=(function(e){Ne(t,e);function t(i,r,n){i===void 0&&(i=1/0),r===void 0&&(r=1/0),n===void 0&&(n=Fn);var s=e.call(this)||this;return s._bufferSize=i,s._windowTime=r,s._timestampProvider=n,s._buffer=[],s._infiniteTimeWindow=!0,s._infiniteTimeWindow=r===1/0,s._bufferSize=Math.max(1,i),s._windowTime=Math.max(1,r),s}return t.prototype.next=function(i){var r=this,n=r.isStopped,s=r._buffer,a=r._infiniteTimeWindow,o=r._timestampProvider,c=r._windowTime;n||(s.push(i),!a&&s.push(o.now()+c)),this._trimBuffer(),e.prototype.next.call(this,i)},t.prototype._subscribe=function(i){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(i),n=this,s=n._infiniteTimeWindow,a=n._buffer,o=a.slice(),c=0;c<o.length&&!i.closed;c+=s?1:2)i.next(o[c]);return this._checkFinalizedStatuses(i),r},t.prototype._trimBuffer=function(){var i=this,r=i._bufferSize,n=i._timestampProvider,s=i._buffer,a=i._infiniteTimeWindow,o=(a?1:2)*r;if(r<1/0&&o<s.length&&s.splice(0,s.length-o),!a){for(var c=n.now(),l=0,u=1;u<s.length&&s[u]<=c;u+=2)l=u;l&&s.splice(0,l+1)}},t})(hi),Lh=(function(e){Ne(t,e);function t(i,r){return e.call(this)||this}return t.prototype.schedule=function(i,r){return this},t})(di),so={setInterval:function(e,t){for(var i=[],r=2;r<arguments.length;r++)i[r-2]=arguments[r];return setInterval.apply(void 0,rt([e,t],it(i)))},clearInterval:function(e){return clearInterval(e)},delegate:void 0},Vn=(function(e){Ne(t,e);function t(i,r){var n=e.call(this,i,r)||this;return n.scheduler=i,n.work=r,n.pending=!1,n}return t.prototype.schedule=function(i,r){var n;if(r===void 0&&(r=0),this.closed)return this;this.state=i;var s=this.id,a=this.scheduler;return s!=null&&(this.id=this.recycleAsyncId(a,s,r)),this.pending=!0,this.delay=r,this.id=(n=this.id)!==null&&n!==void 0?n:this.requestAsyncId(a,this.id,r),this},t.prototype.requestAsyncId=function(i,r,n){return n===void 0&&(n=0),so.setInterval(i.flush.bind(i,this),n)},t.prototype.recycleAsyncId=function(i,r,n){if(n===void 0&&(n=0),n!=null&&this.delay===n&&this.pending===!1)return r;r!=null&&so.clearInterval(r)},t.prototype.execute=function(i,r){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(i,r);if(n)return n;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(i,r){var n=!1,s;try{this.work(i)}catch(a){n=!0,s=a||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),s},t.prototype.unsubscribe=function(){if(!this.closed){var i=this,r=i.id,n=i.scheduler,s=n.actions;this.work=this.state=this.scheduler=null,this.pending=!1,br(s,this),r!=null&&(this.id=this.recycleAsyncId(n,r,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},t})(Lh),Nh=1,Bn,Hn={};function ao(e){return e in Hn?(delete Hn[e],!0):!1}var oo={setImmediate:function(e){var t=Nh++;return Hn[t]=!0,Bn||(Bn=Promise.resolve()),Bn.then(function(){return ao(t)&&e()}),t},clearImmediate:function(e){ao(e)}},Fh=oo.setImmediate,Uh=oo.clearImmediate,co={setImmediate:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Fh.apply(void 0,rt([],it(e)))},clearImmediate:function(e){return Uh(e)},delegate:void 0},Vh=(function(e){Ne(t,e);function t(i,r){var n=e.call(this,i,r)||this;return n.scheduler=i,n.work=r,n}return t.prototype.requestAsyncId=function(i,r,n){return n===void 0&&(n=0),n!==null&&n>0?e.prototype.requestAsyncId.call(this,i,r,n):(i.actions.push(this),i._scheduled||(i._scheduled=co.setImmediate(i.flush.bind(i,void 0))))},t.prototype.recycleAsyncId=function(i,r,n){var s;if(n===void 0&&(n=0),n!=null?n>0:this.delay>0)return e.prototype.recycleAsyncId.call(this,i,r,n);var a=i.actions;r!=null&&((s=a[a.length-1])===null||s===void 0?void 0:s.id)!==r&&(co.clearImmediate(r),i._scheduled===r&&(i._scheduled=void 0))},t})(Vn),lo=(function(){function e(t,i){i===void 0&&(i=e.now),this.schedulerActionCtor=t,this.now=i}return e.prototype.schedule=function(t,i,r){return i===void 0&&(i=0),new this.schedulerActionCtor(this,t).schedule(r,i)},e.now=Fn.now,e})(),zn=(function(e){Ne(t,e);function t(i,r){r===void 0&&(r=lo.now);var n=e.call(this,i,r)||this;return n.actions=[],n._active=!1,n}return t.prototype.flush=function(i){var r=this.actions;if(this._active){r.push(i);return}var n;this._active=!0;do if(n=i.execute(i.state,i.delay))break;while(i=r.shift());if(this._active=!1,n){for(;i=r.shift();)i.unsubscribe();throw n}},t})(lo),Bh=(function(e){Ne(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.flush=function(i){this._active=!0;var r=this._scheduled;this._scheduled=void 0;var n=this.actions,s;i=i||n.shift();do if(s=i.execute(i.state,i.delay))break;while((i=n[0])&&i.id===r&&n.shift());if(this._active=!1,s){for(;(i=n[0])&&i.id===r&&n.shift();)i.unsubscribe();throw s}},t})(zn),uo=new Bh(Vh),ji=new zn(Vn),Hh=ji,zh=(function(e){Ne(t,e);function t(i,r){var n=e.call(this,i,r)||this;return n.scheduler=i,n.work=r,n}return t.prototype.requestAsyncId=function(i,r,n){return n===void 0&&(n=0),n!==null&&n>0?e.prototype.requestAsyncId.call(this,i,r,n):(i.actions.push(this),i._scheduled||(i._scheduled=ro.requestAnimationFrame(function(){return i.flush(void 0)})))},t.prototype.recycleAsyncId=function(i,r,n){var s;if(n===void 0&&(n=0),n!=null?n>0:this.delay>0)return e.prototype.recycleAsyncId.call(this,i,r,n);var a=i.actions;r!=null&&r===i._scheduled&&((s=a[a.length-1])===null||s===void 0?void 0:s.id)!==r&&(ro.cancelAnimationFrame(r),i._scheduled=void 0)},t})(Vn),Wh=(function(e){Ne(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.flush=function(i){this._active=!0;var r;i?r=i.id:(r=this._scheduled,this._scheduled=void 0);var n=this.actions,s;i=i||n.shift();do if(s=i.execute(i.state,i.delay))break;while((i=n[0])&&i.id===r&&n.shift());if(this._active=!1,s){for(;(i=n[0])&&i.id===r&&n.shift();)i.unsubscribe();throw s}},t})(zn),ho=new Wh(zh),jt=new he(function(e){return e.complete()});function po(e){return e&&ce(e.schedule)}function Wn(e){return e[e.length-1]}function fo(e){return ce(Wn(e))?e.pop():void 0}function Gi(e){return po(Wn(e))?e.pop():void 0}function jh(e,t){return typeof Wn(e)=="number"?e.pop():t}var go=(function(e){return e&&typeof e.length=="number"&&typeof e!="function"});function vo(e){return ce(e?.then)}function mo(e){return ce(e[Nn])}function bo(e){return Symbol.asyncIterator&&ce(e?.[Symbol.asyncIterator])}function _o(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Gh(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var yo=Gh();function wo(e){return ce(e?.[yo])}function So(e){return Ch(this,arguments,function(){var i,r,n,s;return Xa(this,function(a){switch(a.label){case 0:i=e.getReader(),a.label=1;case 1:a.trys.push([1,,9,10]),a.label=2;case 2:return[4,li(i.read())];case 3:return r=a.sent(),n=r.value,s=r.done,s?[4,li(void 0)]:[3,5];case 4:return[2,a.sent()];case 5:return[4,li(n)];case 6:return[4,a.sent()];case 7:return a.sent(),[3,2];case 8:return[3,10];case 9:return i.releaseLock(),[7];case 10:return[2]}})})}function Co(e){return ce(e?.getReader)}function _e(e){if(e instanceof he)return e;if(e!=null){if(mo(e))return qh(e);if(go(e))return Kh(e);if(vo(e))return Yh(e);if(bo(e))return ko(e);if(wo(e))return Xh(e);if(Co(e))return Jh(e)}throw _o(e)}function qh(e){return new he(function(t){var i=e[Nn]();if(ce(i.subscribe))return i.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Kh(e){return new he(function(t){for(var i=0;i<e.length&&!t.closed;i++)t.next(e[i]);t.complete()})}function Yh(e){return new he(function(t){e.then(function(i){t.closed||(t.next(i),t.complete())},function(i){return t.error(i)}).then(null,eo)})}function Xh(e){return new he(function(t){var i,r;try{for(var n=ci(e),s=n.next();!s.done;s=n.next()){var a=s.value;if(t.next(a),t.closed)return}}catch(o){i={error:o}}finally{try{s&&!s.done&&(r=n.return)&&r.call(n)}finally{if(i)throw i.error}}t.complete()})}function ko(e){return new he(function(t){Zh(e,t).catch(function(i){return t.error(i)})})}function Jh(e){return ko(So(e))}function Zh(e,t){var i,r,n,s;return Sh(this,void 0,void 0,function(){var a,o;return Xa(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),i=kh(e),c.label=1;case 1:return[4,i.next()];case 2:if(r=c.sent(),!!r.done)return[3,4];if(a=r.value,t.next(a),t.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return o=c.sent(),n={error:o},[3,11];case 6:return c.trys.push([6,,9,10]),r&&!r.done&&(s=i.return)?[4,s.call(i)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(n)throw n.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function _t(e,t,i,r,n){r===void 0&&(r=0),n===void 0&&(n=!1);var s=t.schedule(function(){i(),n?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(s),!n)return s}function Sr(e,t){return t===void 0&&(t=0),le(function(i,r){i.subscribe(ne(r,function(n){return _t(r,e,function(){return r.next(n)},t)},function(){return _t(r,e,function(){return r.complete()},t)},function(n){return _t(r,e,function(){return r.error(n)},t)}))})}function To(e,t){return t===void 0&&(t=0),le(function(i,r){r.add(e.schedule(function(){return i.subscribe(r)},t))})}function Qh(e,t){return _e(e).pipe(To(t),Sr(t))}function ep(e,t){return _e(e).pipe(To(t),Sr(t))}function tp(e,t){return new he(function(i){var r=0;return t.schedule(function(){r===e.length?i.complete():(i.next(e[r++]),i.closed||this.schedule())})})}function ip(e,t){return new he(function(i){var r;return _t(i,t,function(){r=e[yo](),_t(i,t,function(){var n,s,a;try{n=r.next(),s=n.value,a=n.done}catch(o){i.error(o);return}a?i.complete():i.next(s)},0,!0)}),function(){return ce(r?.return)&&r.return()}})}function $o(e,t){if(!e)throw new Error("Iterable cannot be null");return new he(function(i){_t(i,t,function(){var r=e[Symbol.asyncIterator]();_t(i,t,function(){r.next().then(function(n){n.done?i.complete():i.next(n.value)})},0,!0)})})}function rp(e,t){return $o(So(e),t)}function np(e,t){if(e!=null){if(mo(e))return Qh(e,t);if(go(e))return tp(e,t);if(vo(e))return ep(e,t);if(bo(e))return $o(e,t);if(wo(e))return ip(e,t);if(Co(e))return rp(e,t)}throw _o(e)}function Se(e,t){return t?np(e,t):_e(e)}function Cr(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=Gi(e);return Se(e,i)}function sp(e,t){var i=ce(e)?e:function(){return e},r=function(n){return n.error(i())};return new he(r)}var kr=mr(function(e){return function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}});function Eo(e,t){return new Promise(function(i,r){var n=!1,s;e.subscribe({next:function(a){s=a,n=!0},error:r,complete:function(){n?i(s):r(new kr)}})})}function Fe(e,t){return new Promise(function(i,r){var n=new ui({next:function(s){i(s),n.unsubscribe()},error:r,complete:function(){r(new kr)}});e.subscribe(n)})}function xo(e){return e instanceof Date&&!isNaN(e)}var jn=mr(function(e){return function(i){i===void 0&&(i=null),e(this),this.message="Timeout has occurred",this.name="TimeoutError",this.info=i}});function qi(e,t){var i=xo(e)?{first:e}:typeof e=="number"?{each:e}:e,r=i.first,n=i.each,s=i.with,a=s===void 0?ap:s,o=i.scheduler,c=o===void 0?ji:o,l=i.meta,u=l===void 0?null:l;if(r==null&&n==null)throw new TypeError("No timeout provided.");return le(function(p,m){var w,E,_=null,A=0,k=function(f){E=_t(m,c,function(){try{w.unsubscribe(),_e(a({meta:u,lastValue:_,seen:A})).subscribe(m)}catch(g){m.error(g)}},f)};w=p.subscribe(ne(m,function(f){E?.unsubscribe(),A++,m.next(_=f),n>0&&k(n)},void 0,void 0,function(){E?.closed||E?.unsubscribe(),_=null})),!A&&k(r!=null?typeof r=="number"?r:+r-c.now():n)})}function ap(e){throw new jn(e)}function S(e,t){return le(function(i,r){var n=0;i.subscribe(ne(r,function(s){r.next(e.call(t,s,n++))}))})}var op=Array.isArray;function cp(e,t){return op(t)?e.apply(void 0,rt([],it(t))):e(t)}function lp(e){return S(function(t){return cp(e,t)})}var dp=Array.isArray,up=Object.getPrototypeOf,hp=Object.prototype,pp=Object.keys;function fp(e){if(e.length===1){var t=e[0];if(dp(t))return{args:t,keys:null};if(gp(t)){var i=pp(t);return{args:i.map(function(r){return t[r]}),keys:i}}}return{args:e,keys:null}}function gp(e){return e&&typeof e=="object"&&up(e)===hp}function vp(e,t){return e.reduce(function(i,r,n){return i[r]=t[n],i},{})}function Ao(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=Gi(e),r=fo(e),n=fp(e),s=n.args,a=n.keys;if(s.length===0)return Se([],i);var o=new he(mp(s,i,a?function(c){return vp(a,c)}:Wt));return r?o.pipe(lp(r)):o}function mp(e,t,i){return i===void 0&&(i=Wt),function(r){Io(t,function(){for(var n=e.length,s=new Array(n),a=n,o=n,c=function(u){Io(t,function(){var p=Se(e[u],t),m=!1;p.subscribe(ne(r,function(w){s[u]=w,m||(m=!0,o--),o||r.next(i(s.slice()))},function(){--a||r.complete()}))},r)},l=0;l<n;l++)c(l)},r)}}function Io(e,t,i){e?_t(i,e,t):t()}function bp(e,t,i,r,n,s,a,o){var c=[],l=0,u=0,p=!1,m=function(){p&&!c.length&&!l&&t.complete()},w=function(_){return l<r?E(_):c.push(_)},E=function(_){l++;var A=!1;_e(i(_,u++)).subscribe(ne(t,function(k){t.next(k)},function(){A=!0},void 0,function(){if(A)try{l--;for(var k=function(){var f=c.shift();a||E(f)};c.length&&l<r;)k();m()}catch(f){t.error(f)}}))};return e.subscribe(ne(t,w,function(){p=!0,m()})),function(){}}function Gn(e,t,i){return i===void 0&&(i=1/0),ce(t)?Gn(function(r,n){return S(function(s,a){return t(r,s,n,a)})(_e(e(r,n)))},i):(typeof t=="number"&&(i=t),le(function(r,n){return bp(r,n,e,i)}))}function Ro(e){return e===void 0&&(e=1/0),Gn(Wt,e)}function _p(){return Ro(1)}function Mo(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return _p()(Se(e,Gi(e)))}function Gt(e){return new he(function(t){_e(e()).subscribe(t)})}function pi(e,t,i){e===void 0&&(e=0),i===void 0&&(i=Hh);var r=-1;return t!=null&&(po(t)?i=t:r=t),new he(function(n){var s=xo(e)?+e-i.now():e;s<0&&(s=0);var a=0;return i.schedule(function(){n.closed||(n.next(a++),0<=r?this.schedule(void 0,r):n.complete())},s)})}function Tr(e,t){return e===void 0&&(e=0),t===void 0&&(t=ji),e<0&&(e=0),pi(e,e,t)}function yt(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=Gi(e),r=jh(e,1/0),n=e;return n.length?n.length===1?_e(n[0]):Ro(r)(Se(n,i)):jt}var yp=new he(Wi),wp=Array.isArray;function Sp(e){return e.length===1&&wp(e[0])?e[0]:e}function N(e,t){return le(function(i,r){var n=0;i.subscribe(ne(r,function(s){return e.call(t,s,n++)&&r.next(s)}))})}function $r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e=Sp(e),e.length===1?_e(e[0]):new he(Cp(e))}function Cp(e){return function(t){for(var i=[],r=function(s){i.push(_e(e[s]).subscribe(ne(t,function(a){if(i){for(var o=0;o<i.length;o++)o!==s&&i[o].unsubscribe();i=null}t.next(a)})))},n=0;i&&!t.closed&&n<e.length;n++)r(n)}}function kp(e){return le(function(t,i){var r=!1,n=null,s=null,a=!1,o=function(){if(s?.unsubscribe(),s=null,r){r=!1;var l=n;n=null,i.next(l)}a&&i.complete()},c=function(){s=null,a&&i.complete()};t.subscribe(ne(i,function(l){r=!0,n=l,s||_e(e(l)).subscribe(s=ne(i,o,c))},function(){a=!0,(!r||!s||s.closed)&&i.complete()}))})}function Tp(e,t){return t===void 0&&(t=ji),kp(function(){return pi(e,t)})}function qt(e){return le(function(t,i){var r=null,n=!1,s;r=t.subscribe(ne(i,void 0,void 0,function(a){s=_e(e(a,qt(e)(t))),r?(r.unsubscribe(),r=null,s.subscribe(i)):n=!0})),n&&(r.unsubscribe(),r=null,s.subscribe(i))})}function Do(e,t,i,r,n){return function(s,a){var o=i,c=t,l=0;s.subscribe(ne(a,function(u){var p=l++;c=o?e(c,u,p):(o=!0,u),r&&a.next(c)},n&&(function(){o&&a.next(c),a.complete()})))}}function $p(e,t){return le(Do(e,t,arguments.length>=2,!1,!0))}var Ep=function(e,t){return e.push(t),e};function xp(){return le(function(e,t){$p(Ep,[])(e).subscribe(t)})}function Oo(e,t){return t===void 0&&(t=ji),le(function(i,r){var n=null,s=null,a=null,o=function(){if(n){n.unsubscribe(),n=null;var l=s;s=null,r.next(l)}};function c(){var l=a+e,u=t.now();if(u<l){n=this.schedule(void 0,l-u),r.add(n);return}o()}i.subscribe(ne(r,function(l){s=l,a=t.now(),n||(n=t.schedule(c,e),r.add(n))},function(){o(),r.complete()},void 0,function(){s=n=null}))})}function ye(e){return e<=0?function(){return jt}:le(function(t,i){var r=0;t.subscribe(ne(i,function(n){++r<=e&&(i.next(n),e<=r&&i.complete())}))})}function P(e,t){return t===void 0&&(t=Wt),e=e??Ap,le(function(i,r){var n,s=!0;i.subscribe(ne(r,function(a){var o=t(a);(s||!e(n,o))&&(s=!1,n=o,r.next(a))}))})}function Ap(e,t){return e===t}function qn(e,t){return le(function(i,r){var n=0,s=null,a=!1;i.subscribe(ne(r,function(o){s||(s=ne(r,void 0,function(){s=null,a&&r.complete()}),_e(e(o,n++)).subscribe(s))},function(){a=!0,!s&&r.complete()}))})}function Po(e,t){return le(Do(e,t,arguments.length>=2,!0))}function ut(e){e===void 0&&(e={});var t=e.connector,i=t===void 0?function(){return new hi}:t,r=e.resetOnError,n=r===void 0?!0:r,s=e.resetOnComplete,a=s===void 0?!0:s,o=e.resetOnRefCountZero,c=o===void 0?!0:o;return function(l){var u,p,m,w=0,E=!1,_=!1,A=function(){p?.unsubscribe(),p=void 0},k=function(){A(),u=m=void 0,E=_=!1},f=function(){var g=u;k(),g?.unsubscribe()};return le(function(g,b){w++,!_&&!E&&A();var y=m=m??i();b.add(function(){w--,w===0&&!_&&!E&&(p=Kn(f,c))}),y.subscribe(b),!u&&w>0&&(u=new ui({next:function(T){return y.next(T)},error:function(T){_=!0,A(),p=Kn(k,n,T),y.error(T)},complete:function(){E=!0,A(),p=Kn(k,a),y.complete()}}),_e(g).subscribe(u))})(l)}}function Kn(e,t){for(var i=[],r=2;r<arguments.length;r++)i[r-2]=arguments[r];if(t===!0){e();return}if(t!==!1){var n=new ui({next:function(){n.unsubscribe(),e()}});return _e(t.apply(void 0,rt([],it(i)))).subscribe(n)}}function Ge(e,t,i){var r,n=!1;return r=e,ut({connector:function(){return new Un(r,t,i)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:n})}function Er(e){return N(function(t,i){return e<=i})}function Ip(e){return le(function(t,i){var r=!1,n=0;t.subscribe(ne(i,function(s){return(r||(r=!e(s,n++)))&&i.next(s)}))})}function Rp(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=Gi(e);return le(function(r,n){(i?Mo(e,r,i):Mo(e,r)).subscribe(n)})}function wt(e,t){return le(function(i,r){var n=null,s=0,a=!1,o=function(){return a&&!n&&r.complete()};i.subscribe(ne(r,function(c){n?.unsubscribe();var l=0,u=s++;_e(e(c,u)).subscribe(n=ne(r,function(p){return r.next(t?t(c,p,u,l++):p)},function(){n=null,o()}))},function(){a=!0,o()}))})}function v(e){return le(function(t,i){_e(e).subscribe(ne(i,function(){return i.complete()},Wi)),!i.closed&&t.subscribe(i)})}function fe(e,t,i){var r=ce(e)||t||i?{next:e,error:t,complete:i}:e;return r?le(function(n,s){var a;(a=r.subscribe)===null||a===void 0||a.call(r);var o=!0;n.subscribe(ne(s,function(c){var l;(l=r.next)===null||l===void 0||l.call(r,c),s.next(c)},function(){var c;o=!1,(c=r.complete)===null||c===void 0||c.call(r),s.complete()},function(c){var l;o=!1,(l=r.error)===null||l===void 0||l.call(r,c),s.error(c)},function(){var c,l;o&&((c=r.unsubscribe)===null||c===void 0||c.call(r)),(l=r.finalize)===null||l===void 0||l.call(r)}))}):Wt}function Lo(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var i=fo(e);return le(function(r,n){for(var s=e.length,a=new Array(s),o=e.map(function(){return!1}),c=!1,l=function(p){_e(e[p]).subscribe(ne(n,function(m){a[p]=m,!c&&!o[p]&&(o[p]=!0,(c=o.every(Wt))&&(o=null))},Wi))},u=0;u<s;u++)l(u);r.subscribe(ne(n,function(p){if(c){var m=rt([p],it(a));n.next(i?i.apply(void 0,rt([],it(m))):m)}}))})}var xr={exports:{}},Mp=xr.exports,No;function Dp(){return No||(No=1,(function(e){(function(t,i){e.exports?e.exports=i():t.log=i()})(Mp,function(){var t=function(){},i="undefined",r=typeof window!==i&&typeof window.navigator!==i&&/Trident\/|MSIE /.test(window.navigator.userAgent),n=["trace","debug","info","warn","error"],s={},a=null;function o(_,A){var k=_[A];if(typeof k.bind=="function")return k.bind(_);try{return Function.prototype.bind.call(k,_)}catch{return function(){return Function.prototype.apply.apply(k,[_,arguments])}}}function c(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function l(_){return _==="debug"&&(_="log"),typeof console===i?!1:_==="trace"&&r?c:console[_]!==void 0?o(console,_):console.log!==void 0?o(console,"log"):t}function u(){for(var _=this.getLevel(),A=0;A<n.length;A++){var k=n[A];this[k]=A<_?t:this.methodFactory(k,_,this.name)}if(this.log=this.debug,typeof console===i&&_<this.levels.SILENT)return"No console available for logging"}function p(_){return function(){typeof console!==i&&(u.call(this),this[_].apply(this,arguments))}}function m(_,A,k){return l(_)||p.apply(this,arguments)}function w(_,A){var k=this,f,g,b,y="loglevel";typeof _=="string"?y+=":"+_:typeof _=="symbol"&&(y=void 0);function T(L){var J=(n[L]||"silent").toUpperCase();if(!(typeof window===i||!y)){try{window.localStorage[y]=J;return}catch{}try{window.document.cookie=encodeURIComponent(y)+"="+J+";"}catch{}}}function D(){var L;if(!(typeof window===i||!y)){try{L=window.localStorage[y]}catch{}if(typeof L===i)try{var J=window.document.cookie,Ze=encodeURIComponent(y),pt=J.indexOf(Ze+"=");pt!==-1&&(L=/^([^;]+)/.exec(J.slice(pt+Ze.length+1))[1])}catch{}return k.levels[L]===void 0&&(L=void 0),L}}function G(){if(!(typeof window===i||!y)){try{window.localStorage.removeItem(y)}catch{}try{window.document.cookie=encodeURIComponent(y)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function O(L){var J=L;if(typeof J=="string"&&k.levels[J.toUpperCase()]!==void 0&&(J=k.levels[J.toUpperCase()]),typeof J=="number"&&J>=0&&J<=k.levels.SILENT)return J;throw new TypeError("log.setLevel() called with invalid level: "+L)}k.name=_,k.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},k.methodFactory=A||m,k.getLevel=function(){return b??g??f},k.setLevel=function(L,J){return b=O(L),J!==!1&&T(b),u.call(k)},k.setDefaultLevel=function(L){g=O(L),D()||k.setLevel(L,!1)},k.resetLevel=function(){b=null,G(),u.call(k)},k.enableAll=function(L){k.setLevel(k.levels.TRACE,L)},k.disableAll=function(L){k.setLevel(k.levels.SILENT,L)},k.rebuild=function(){if(a!==k&&(f=O(a.getLevel())),u.call(k),a===k)for(var L in s)s[L].rebuild()},f=O(a?a.getLevel():"WARN");var ee=D();ee!=null&&(b=O(ee)),u.call(k)}a=new w,a.getLogger=function(A){if(typeof A!="symbol"&&typeof A!="string"||A==="")throw new TypeError("You must supply a name when creating a logger.");var k=s[A];return k||(k=s[A]=new w(A,a.methodFactory)),k};var E=typeof window!==i?window.log:void 0;return a.noConflict=function(){return typeof window!==i&&window.log===a&&(window.log=E),a},a.getLoggers=function(){return s},a.default=a,a})})(xr)),xr.exports}var Op=Dp();const Pp=Ua(Op),Lp=1e3,Fo=600,Uo=6e3,Np=300*1e3,Fp=1e4,Up=12e3,Vp=15e3,Bp=100,Hp=3e3,zp=1500,Wp=0,Vo="sw:preferences",jp="sat:refresh",Bo="/api/fabric/subscriber/devices/token",Ho="/api/fabric/subscriber/devices/refresh",Ar=900,Yn=3e4,zo=3,Gp=1e3,Wo=5,qp=1e3,Kp=3e4,jo=5e3,Yp=3e4,Xp=3e4,Ir=-32003,Go=-32602,Xn=-32002,Jp=["NotAllowedError","SecurityError","PermissionDeniedError"],Zp=["NotReadableError","TrackStartError"],Qp=1e3,ef=10,tf=2e3,rf=3,nf=.05,sf=4,af=30,of=3,cf=3e3,lf=1e4,df=1e4,uf=3,hf=5e3,pf=2e3,ff=1e4,gf=3e3,vf=5e3,mf=3,bf=1e4,_f=5e3,yf=100,qo=33,wf=.03,Sf=250,Cf=!0,kf=!0,Tf="sw:device:audioinput",$f="sw:device:audiooutput",Ef="sw:device:videoinput",xf=!1,Af=!0,If=!0,Rf=!0,Mf=150,Df=300,Of=!0,Pf=!0,Lf=!0,Nf=!1,Ff=51e4;var fi=class extends Error{constructor(e,t){super(`Unexpected Error${e?` at ${e}`:""}`,t),this.at=e,this.name="UnexpectedError"}},ht=class extends Error{constructor(e="Not Implemented",t){super(e,t),this.reason=e,this.name="UnimplementedError"}},Mt=class extends Error{constructor(e="Invalid Credentials",t){super(e,t),this.reason=e,this.name="InvalidCredentialsError"}},Ko=class extends Error{constructor(e,t){super(e,t),this.name="WebSocketConnectionError"}},Yo=class extends Error{constructor(e,t){super(e,t),this.name="TransportConnectionError"}},Uf=class extends Error{constructor(e,t){super(e,t),this.name="WebSocketTimeoutError"}},Vf=class extends Error{constructor(e,t){super(e,t),this.name="RequestTimeoutError"}},Rr=class extends Error{constructor(e,t,i){super(`RPC request ${e} timed out after ${t}ms`,i),this.requestId=e,this.timeoutMs=t,this.name="RPCTimeoutError"}},Jn=class extends Error{constructor(e=null,t){super("Error handling authorization state update",{...t,cause:t?.cause??(e instanceof Error?e:void 0)}),this.error=e,this.name="AuthStateHandlerError"}},Zn=class extends Error{constructor(e="localStorage",t){super(`${e} is not available in this environment`,t),this.storageType=e,this.name="StorageNotAvailableError"}},Bf=class extends Error{constructor(e,t){super(`Failed to serialize value for key "${e}": ${t.message}`,{cause:t}),this.key=e,this.originalError=t,this.name="SerializationError"}},Hf=class extends Error{constructor(e,t){super(`Failed to deserialize value for key "${e}": ${t.message}`,{cause:t}),this.key=e,this.originalError=t,this.name="DeserializationError"}},Qn=class extends Error{constructor(e,t){super(`Failed to write to storage for key "${e}": ${t.message}`,{cause:t}),this.key=e,this.originalError=t,this.name="StorageWriteError"}},zf=class extends Error{constructor(e,t){super(`Failed to read from storage "${e}": ${t.message}`,{cause:t}),this.key=e,this.originalError=t,this.name="StorageReadError"}},Y=class extends Error{constructor(e,t){super(`Dependency ${e} is not set or available.`,t),this.description=e,this.name="DependencyError"}},Xo=class extends Error{constructor(e,t=null,i="outbound",r){super(e,{...r,cause:r?.cause??(t instanceof Error?t:void 0)}),this.message=e,this.error=t,this.direction=i,this.name="CallCreateError"}},Wf=class extends Error{constructor(e,t){super(`Call "${e}" has no self member context yet: selfId/nodeId have not been received from the server`,t),this.callId=e,this.name="CallNotReadyError"}},jf=class extends Error{constructor(e,t){super(`Participant "${e}" has no call context yet: its member state (call_id/node_id) has not been received from the server`,t),this.memberId=e,this.name="ParticipantNotReadyError"}},St=class extends Error{constructor(e,t,i,r,n){super(t,r),this.code=e,this.data=i,this.requestId=n,this.name="JSONRPCError"}},Mr=class extends Error{constructor(e,t){super(e,t),this.message=e,this.name="InvalidParams"}},Jo=class extends Error{constructor(e,t){super(e,t),this.message=e,this.name="ConversationError"}},Gf=class extends Error{constructor(e=null,t){super("Error handling Verto invite",{...t,cause:t?.cause??(e instanceof Error?e:void 0)}),this.error=e,this.name="VertoInviteHandlerError"}},qf=class extends Error{constructor(e=null,t){super("Error handling Verto attach",{...t,cause:t?.cause??(e instanceof Error?e:void 0)}),this.error=e,this.name="VertoAttachHandlerError"}},Dr=class extends Error{constructor(e,t){super(e,t),this.name="ValidationError"}},Zo=class extends Error{constructor(e){super("Failed to send Verto pong - call may disconnect",{cause:e instanceof Error?e:void 0}),this.originalError=e,this.name="VertoPongError"}},Kf=class extends Error{constructor(e){super("Failed to parse incoming WebSocket message",{cause:e instanceof Error?e:void 0}),this.originalError=e,this.name="MessageParseError"}},Qo=class extends Error{constructor(e,t){super(`Collection fetch failed during ${e}`,{cause:t instanceof Error?t:void 0}),this.operation=e,this.originalError=t,this.name="CollectionFetchError"}},Yf=class extends Error{constructor(e,t){super(`Timed out waiting for the ${e} connection to be established`,{cause:t}),this.leg=e,this.originalError=t,this.name="AuxiliaryLegTimeoutError"}},Or=class extends Error{constructor(e){super(`The ${e} leg was removed before it finished connecting`),this.leg=e,this.name="AuxiliaryLegCancelledError"}},qe=class extends Error{constructor(e,t,i){super(`Media track ${e} failed for ${t}`,{cause:i instanceof Error?i:void 0}),this.operation=e,this.kind=t,this.originalError=i,this.name="MediaTrackError"}};function ec(e){return e instanceof Error&&Jp.includes(e.name)}function Xf(e){return e instanceof Error&&Zp.includes(e.name)}var Dt=class extends Error{constructor(e,t,i,r=!1){super(`Media access ${ec(i)?"denied":"failed"} for ${e} (${t})`,{cause:i instanceof Error?i:void 0}),this.operation=e,this.media=t,this.originalError=i,this.fatal=r,this.name="MediaAccessError"}get denied(){return ec(this.originalError)}},Jf=class extends Error{constructor(e,t){super(`A screen share is already active on this call (${e}). Call stopScreenShare() before starting another one.`,t),this.screenShareId=e,this.name="ScreenShareAlreadyActiveError"}},Pr=class extends Error{constructor(e,t="Failed to initialize DPoP key pair"){super(t,{cause:e instanceof Error?e:void 0}),this.originalError=e,this.name="DPoPInitError"}},Zf=class extends Error{constructor(e,t){super(`Preflight test failed during ${e}`,{cause:t instanceof Error?t:void 0}),this.phase=e,this.originalError=t,this.name="PreflightError"}},tc=class extends Error{constructor(e,t){super(e,{cause:t instanceof Error?t:void 0}),this.originalError=t,this.name="DeviceTokenError"}},Kt=class extends Error{constructor(e,t){super(e,{cause:t instanceof Error?t:void 0}),this.originalError=t,this.name="TokenRefreshError"}};const Qf=()=>new Date().toISOString(),gi=Pp.getLogger("signalwire"),eg=gi.methodFactory;gi.methodFactory=(e,t,i)=>{const r=eg(e,t,i);return function(...n){const s=[Qf(),"-",...n];r.apply(void 0,s)}};const tg=gi.levels.WARN;gi.setLevel(tg);let ic=null;const ig=e=>{ic=e};let Lr={};const rg=e=>{if(e==null){Lr={};return}Lr={...Lr,...e}},ng=e=>{gi.setLevel(e)},es=()=>ic??gi,sg=e=>e!=null&&typeof e=="object"&&"method"in e?e.method!=="signalwire.ping":!0,ag=e=>{const{logWsTraffic:t}=Lr;if(!t)return;const i=es();let r;if("raw"in e)try{r=JSON.parse(e.raw)}catch{i.debug(`[WebSocket] ${e.type.toUpperCase()}: non-JSON message`);return}else({payload:r}=e);const n=sg(r)?JSON.stringify(r,null,2):r;i.debug(`${e.type.toUpperCase()}: 
`,n,`
`)},q=()=>{const e=es();return new Proxy(e,{get(t,i,r){if(i==="wsTraffic")return ag;const n=es(),s=Reflect.get(n,i);return typeof s=="function"?s.bind(n):s}})};function se(){return N(e=>e!=null)}const He=(e,t,i)=>{const r=t.split(".");let n=e;for(const s of r)if(n&&typeof n=="object"&&s in n)n=n[s];else return i;return n===void 0?i:n};function og(e,t){return wr(N(e),S(t))}function ue(e,t){return wr(og(e,i=>He(i,t)),N(i=>i!==void 0))}const rc=q();function nc(){return S(e=>{if(e.error)throw rc.error("[throwOnRPCError] RPC error response:",{code:e.error.code,message:e.error.message,data:e.error.data}),new St(e.error.code,e.error.message,e.error.data);return rc.debug("[throwOnRPCError] RPC successful response:",e),e})}class Ki extends Error{}Ki.prototype.name="InvalidTokenError";function cg(e){return decodeURIComponent(atob(e).replace(/(.)/g,(t,i)=>{let r=i.charCodeAt(0).toString(16).toUpperCase();return r.length<2&&(r="0"+r),"%"+r}))}function lg(e){let t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return cg(t)}catch{return atob(t)}}function dg(e,t){if(typeof e!="string")throw new Ki("Invalid token specified: must be a string");t||(t={});const i=t.header===!0?0:1,r=e.split(".")[i];if(typeof r!="string")throw new Ki(`Invalid token specified: missing part #${i+1}`);let n;try{n=lg(r)}catch(s){throw new Ki(`Invalid token specified: invalid base64 for part #${i+1} (${s.message})`)}try{return JSON.parse(n)}catch(s){throw new Ki(`Invalid token specified: invalid json for part #${i+1} (${s.message})`)}}const Ce=[];for(let e=0;e<256;++e)Ce.push((e+256).toString(16).slice(1));function ug(e,t=0){return(Ce[e[t+0]]+Ce[e[t+1]]+Ce[e[t+2]]+Ce[e[t+3]]+"-"+Ce[e[t+4]]+Ce[e[t+5]]+"-"+Ce[e[t+6]]+Ce[e[t+7]]+"-"+Ce[e[t+8]]+Ce[e[t+9]]+"-"+Ce[e[t+10]]+Ce[e[t+11]]+Ce[e[t+12]]+Ce[e[t+13]]+Ce[e[t+14]]+Ce[e[t+15]]).toLowerCase()}const hg=new Uint8Array(16);function pg(){return crypto.getRandomValues(hg)}function Nr(e,t,i){return crypto.randomUUID?crypto.randomUUID():fg(e)}function fg(e,t,i){e=e||{};const r=e.random??e.rng?.()??pg();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,ug(r)}var Z=class{constructor(){this.subscriptions=[],this.subjects=[],this._destroyed$=new hi}destroy(){this._observableCache?.clear(),this.subscriptions.forEach(e=>e.unsubscribe()),this.subjects.forEach(e=>e.complete()),this._destroyed$.next(),this._destroyed$.complete()}cachedObservable(e,t){this._observableCache??(this._observableCache=new Map);let i=this._observableCache.get(e);return i||(i=t(),this._observableCache.set(e,i)),i}publicCachedObservable(e,t){const i=`public:${e}`;this._observableCache??(this._observableCache=new Map);let r=this._observableCache.get(i);return r||(r=t().pipe(Sr(uo)),this._observableCache.set(i,r)),r}deferEmission(e){return e.pipe(Sr(uo))}subscribeTo(e,t){const i=e.subscribe(t);this.subscriptions.push(i)}createSubject(){const e=new hi;return this.subjects.push(e),e}createReplaySubject(e,t){const i=new Un(e,t);return this.subjects.push(i),i}createBehaviorSubject(e){const t=new Ph(e);return this.subjects.push(t),t}get destroyed$(){return this._destroyed$.asObservable()}};const gg=10,vg=100,mg=1,bg=({delayLimit:e=Number.MAX_SAFE_INTEGER,initialDelay:t=vg,variation:i=mg})=>{if(t<0)throw new Dr("initialDelay must be gte 0");if(e<0)throw new Dr("upperDelayLimit must be gte 0");if(i<0)throw new Dr("variation must be gte 0");if(t>e)throw new Dr("initialDelay must be lte delayLimit");let r=Math.min(t,e);return()=>{if(r===e)return e;const n=r;return r=Math.min(r+i,e),n}},_g=async({asyncCallable:e,maxRetries:t=gg,delayFn:i,validator:r,expectedErrorHandler:n})=>{let s=t-1,a=0;const o=async()=>{try{let c;return a<=0?c=await e():c=await new Promise((l,u)=>setTimeout(()=>{e().then(l).catch(u)},a)),s&&r?.(c),c}catch(c){if(s-- >0&&!n?.(c))return a=i?.()??0,q().debug(`Retrying request: ${t-s} of ${t}`),o();throw c}};return o()},vi=q(),ts={method:"GET",headers:{Accept:"application/json"}},Fr={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}};var sc=(Pe=class extends Z{constructor(t,i,r={}){super(),this.baseURL=t,this.getCredential=i,this._responses$=this.createSubject(),this._errors$=this.createSubject(),this._status$=this.createBehaviorSubject("idle"),this.maxRetries=r.maxRetries??Pe.defaultMaxRetries,this.retryDelayMin=r.retryDelayMin??Pe.defaultRetryDelayMinMs,this.retryDelayMax=r.retryDelayMax??Pe.defaultRetryDelayMaxMs,this.requestTimeout=r.requestTimeout??Pe.defaultRequestTimeoutMs}get status$(){return this._status$.asObservable()}get status(){return this._status$.value}get responses$(){return this._responses$.asObservable()}get errors$(){return this._errors$.asObservable()}async request(t){this._status$.next("requesting");try{const i=await this.executeWithRetry(t);return this._status$.next("success"),this._responses$.next(i),i}catch(i){vi.error("[HTTPRequestController] Request error:",i),this._status$.next("error");const r=i instanceof Error?i:new Error("HTTP request failed",{cause:i});throw this._errors$.next(r),r}}async executeWithRetry(t){const i=Math.ceil((this.retryDelayMax-this.retryDelayMin)/Math.max(this.maxRetries-1,1)),r=bg({initialDelay:this.retryDelayMin,variation:i,delayLimit:this.retryDelayMax});return _g({asyncCallable:async()=>this.executeRequest(t),maxRetries:this.maxRetries,delayFn:r,validator:n=>{if(n.status>=500&&n.status<600)throw new fi(`Server error: ${n.status} ${n.statusText}`)}})}async executeRequest(t){const i=this.buildURL(t.url),r=this.buildHeaders(t.headers),n=t.timeout??this.requestTimeout;vi.debug("[HTTPRequestController] Executing request:",{method:t.method,url:i,headers:Object.keys(r).reduce((o,c)=>(o[c]=c==="Authorization"?`${r[c].substring(0,20)}...`:r[c],o),{}),body:this.sanitizeBody(t.body)});const s=new AbortController,a=setTimeout(()=>s.abort(),n);try{const o=await fetch(i,{method:t.method,headers:r,body:t.body,signal:s.signal});clearTimeout(a);const c=await this.convertResponse(o);return vi.debug("[HTTPRequestController] Response received:",{status:o.status,statusText:o.statusText,headers:[...o.headers.entries()],body:c.body?c.body.substring(0,200):"(empty)"}),c}catch(o){throw clearTimeout(a),o instanceof Error&&o.name==="AbortError"?new Vf(`Request timeout after ${n}ms`,{cause:o}):(vi.error("[HTTPRequestController] Request failed:",o),o)}}buildURL(t){const i=typeof t=="string"?t:t.toString();return i.startsWith("http://")||i.startsWith("https://")?i:`${this.baseURL.endsWith("/")?this.baseURL.slice(0,-1):this.baseURL}${i.startsWith("/")?i:`/${i}`}`}buildHeaders(t){const i={...t??{}},r=this.getCredential();return r.token?(i.Authorization=`Bearer ${r.token}`,vi.debug("[HTTPRequestController] Using Bearer token auth, token length:",r.token.length)):vi.warn("[HTTPRequestController] No credentials available for authentication"),i}sanitizeBody(t){if(!t||typeof t!="string")return t?"(non-string body)":void 0;try{const i={...JSON.parse(t)};for(const r of Object.keys(i))Pe.SENSITIVE_BODY_FIELDS.has(r)&&typeof i[r]=="string"&&(i[r]=`${i[r].substring(0,20)}...[redacted]`);return JSON.stringify(i)}catch{return t.length>200?`${t.substring(0,200)}...`:t}}async convertResponse(t){const i={};t.headers.forEach((n,s)=>{i[s]=n});const r=await t.text();return{status:t.status,statusText:t.statusText,headers:i,body:r,ok:t.ok,url:t.url}}},Pe.defaultMaxRetries=3,Pe.defaultRetryDelayMinMs=1e3,Pe.defaultRetryDelayMaxMs=3e4,Pe.defaultRequestTimeoutMs=3e4,Pe.SENSITIVE_BODY_FIELDS=new Set(["dpop_token","token","jwt_token"]),Pe);const yg=5,wg=(e,t)=>({deviceId:e.deviceId,label:e.label,groupId:e.groupId,kind:t});var Sg=class{constructor(){this._stacks={audioinput:[],audiooutput:[],videoinput:[]}}push(e,t){const i=wg(t,e),r=this._stacks[e];if(r.length>0&&r[0].deviceId===i.deviceId)return;const n=r.filter(s=>s.deviceId!==i.deviceId);this._stacks[e]=[i,...n].slice(0,yg)}pop(e){const t=this._stacks[e];if(t.length===0)return;const[i,...r]=t;return this._stacks[e]=r,i}findInHistory(e,t){const i=this._stacks[e];for(const r of i){const n=t.find(a=>a.deviceId===r.deviceId);if(n)return n;const s=t.find(a=>a.groupId===r.groupId&&a.label===r.label);if(s)return s}}getHistory(e){return this._stacks[e]}clear(){this._stacks.audioinput=[],this._stacks.audiooutput=[],this._stacks.videoinput=[]}};function Ke(e){return e*1e3}function Ye(e){return Math.round(e/100)/10}const ac=q();var h=class Pl{static get instance(){return this._instance??(this._instance=new Pl),this._instance}constructor(){this.deviceDebounceTime=zp,this.devicePollingInterval=Wp,this.reconnectCallsTimeout=Np,this.connectionTimeout=Fp,this.reconnectDelayMin=Bp,this.reconnectDelayMax=Hp,this.disableUdpIceServers=!1,this.relayOnly=!1,this.iceCandidateTimeout=Fo,this.iceGatheringTimeout=Uo,this.defaultSignalWireOptions={skipConnection:!1,skipRegister:!1,reconnectAttachedCalls:!1,skipDeviceMonitoring:!1,savePreferences:!1},this.receiveVideo=!1,this.receiveAudio=!0,this.preferredAudioInput=null,this.preferredAudioOutput=null,this.preferredVideoInput=null,this.inviteSubscribeScreenshare=["video.room.screenshare"],this.inviteSubscribeAdditionalDevice=[],this.inviteSubscribeMainDevice=["track","destroy","member.updated.videoMuted","layout.changed","room.subscribed","member.updated.audioMuted","media.connected","room.updated","call.joined"],this.userVariables={},this.statsPollingInterval=Qp,this.statsBaselineSamples=ef,this.statsNoPacketThreshold=tf,this.statsRttSpikeMultiplier=rf,this.statsPacketLossThreshold=nf,this.statsJitterSpikeMultiplier=sf,this.statsHistorySize=af,this.keyframeMaxBurst=of,this.keyframeBurstWindow=cf,this.keyframeCooldown=lf,this.reinviteDebounceTime=df,this.reinviteMaxAttempts=uf,this.reinviteTimeout=hf,this.recoveryDebounceTime=pf,this.recoveryCooldown=ff,this.iceDisconnectedGracePeriod=gf,this.iceRestartTimeout=vf,this.maxRecoveryAttempts=mf,this.enableRelayFallback=Of,this.enableNetworkChangeDetection=Pf,this.enableServerHangupInterception=Lf,this.persistDeviceSelection=Cf,this.syncDevicesToActiveCalls=kf,this.autoMuteVideoOnHidden=xf,this.refreshDevicesOnVisible=Af,this.checkConnectionOnVisible=If,this.defaultAudioConstraints=void 0,this.defaultVideoConstraints=void 0,this.stereoAudio=Nf,this.enableAutoDegradation=Rf,this.degradationBitrateThreshold=Mf,this.degradationRecoveryThreshold=Df,this.preferredVideoCodecs=[],this.preferredAudioCodecs=[]}get preferredMediaOptions(){return{receiveVideo:this.receiveVideo,receiveAudio:this.receiveAudio,inputAudioDeviceConstraints:this.inputAudioDeviceConstraints,inputVideoDeviceConstraints:this.inputVideoDeviceConstraints}}get inputAudioDeviceConstraints(){return this._inputAudioDeviceConstraints}set inputAudioDeviceConstraints(t){this._inputAudioDeviceConstraints=t}get inputVideoDeviceConstraints(){return this._inputVideoDeviceConstraints}set inputVideoDeviceConstraints(t){this._inputVideoDeviceConstraints=t}};const Cg=["connectionTimeout","reconnectCallsTimeout","reconnectDelayMin","reconnectDelayMax","iceCandidateTimeout","iceGatheringTimeout","deviceDebounceTime","devicePollingInterval","statsPollingInterval","statsBaselineSamples","statsNoPacketThreshold","statsRttSpikeMultiplier","statsPacketLossThreshold","statsJitterSpikeMultiplier","statsHistorySize","keyframeMaxBurst","keyframeBurstWindow","keyframeCooldown","reinviteDebounceTime","reinviteMaxAttempts","reinviteTimeout","recoveryDebounceTime","recoveryCooldown","iceDisconnectedGracePeriod","iceRestartTimeout","maxRecoveryAttempts","degradationBitrateThreshold","degradationRecoveryThreshold"],kg=["receiveVideo","receiveAudio","disableUdpIceServers","relayOnly","enableRelayFallback","enableNetworkChangeDetection","enableServerHangupInterception","persistDeviceSelection","syncDevicesToActiveCalls","autoMuteVideoOnHidden","refreshDevicesOnVisible","checkConnectionOnVisible","stereoAudio","enableAutoDegradation"];function Tg(){const e=h.instance;return{connectionTimeout:e.connectionTimeout,reconnectCallsTimeout:e.reconnectCallsTimeout,reconnectDelayMin:e.reconnectDelayMin,reconnectDelayMax:e.reconnectDelayMax,relayHost:e.relayHost,receiveVideo:e.receiveVideo,receiveAudio:e.receiveAudio,disableUdpIceServers:e.disableUdpIceServers,relayOnly:e.relayOnly,iceCandidateTimeout:e.iceCandidateTimeout,iceGatheringTimeout:e.iceGatheringTimeout,deviceDebounceTime:e.deviceDebounceTime,devicePollingInterval:e.devicePollingInterval,iceServers:e.iceServers,userVariables:e.userVariables,statsPollingInterval:e.statsPollingInterval,statsBaselineSamples:e.statsBaselineSamples,statsNoPacketThreshold:e.statsNoPacketThreshold,statsRttSpikeMultiplier:e.statsRttSpikeMultiplier,statsPacketLossThreshold:e.statsPacketLossThreshold,statsJitterSpikeMultiplier:e.statsJitterSpikeMultiplier,statsHistorySize:e.statsHistorySize,keyframeMaxBurst:e.keyframeMaxBurst,keyframeBurstWindow:e.keyframeBurstWindow,keyframeCooldown:e.keyframeCooldown,reinviteDebounceTime:e.reinviteDebounceTime,reinviteMaxAttempts:e.reinviteMaxAttempts,reinviteTimeout:e.reinviteTimeout,recoveryDebounceTime:e.recoveryDebounceTime,recoveryCooldown:e.recoveryCooldown,iceDisconnectedGracePeriod:e.iceDisconnectedGracePeriod,iceRestartTimeout:e.iceRestartTimeout,maxRecoveryAttempts:e.maxRecoveryAttempts,enableRelayFallback:e.enableRelayFallback,enableNetworkChangeDetection:e.enableNetworkChangeDetection,enableServerHangupInterception:e.enableServerHangupInterception,persistDeviceSelection:e.persistDeviceSelection,syncDevicesToActiveCalls:e.syncDevicesToActiveCalls,autoMuteVideoOnHidden:e.autoMuteVideoOnHidden,refreshDevicesOnVisible:e.refreshDevicesOnVisible,checkConnectionOnVisible:e.checkConnectionOnVisible,stereoAudio:e.stereoAudio,enableAutoDegradation:e.enableAutoDegradation,degradationBitrateThreshold:e.degradationBitrateThreshold,degradationRecoveryThreshold:e.degradationRecoveryThreshold,preferredVideoCodecs:e.preferredVideoCodecs,preferredAudioCodecs:e.preferredAudioCodecs}}function $g(e){const t=h.instance;for(const i of Cg)e[i]!==void 0&&(t[i]=e[i]);for(const i of kg)e[i]!==void 0&&(t[i]=e[i]);e.relayHost!==void 0&&(t.relayHost=e.relayHost),e.iceServers!==void 0&&(t.iceServers=e.iceServers),e.userVariables!==void 0&&(t.userVariables=e.userVariables),e.preferredVideoCodecs!==void 0&&(t.preferredVideoCodecs=e.preferredVideoCodecs),e.preferredAudioCodecs!==void 0&&(t.preferredAudioCodecs=e.preferredAudioCodecs)}var Eg=class{constructor(){this._storage=null}enableSavePreferences(e){this._storage=e,this._loadFromStorage()}get connectionTimeout(){return Ye(h.instance.connectionTimeout)}set connectionTimeout(e){h.instance.connectionTimeout=Ke(e),this._saveToStorage()}get reconnectCallsTimeout(){return Ye(h.instance.reconnectCallsTimeout)}set reconnectCallsTimeout(e){h.instance.reconnectCallsTimeout=Ke(e),this._saveToStorage()}get reconnectDelayMin(){return Ye(h.instance.reconnectDelayMin)}set reconnectDelayMin(e){h.instance.reconnectDelayMin=Ke(e),this._saveToStorage()}get reconnectDelayMax(){return Ye(h.instance.reconnectDelayMax)}set reconnectDelayMax(e){h.instance.reconnectDelayMax=Ke(e),this._saveToStorage()}get relayHost(){return h.instance.relayHost??""}set relayHost(e){h.instance.relayHost=e,this._saveToStorage()}get receiveVideo(){return h.instance.receiveVideo}set receiveVideo(e){h.instance.receiveVideo=e,this._saveToStorage()}get receiveAudio(){return h.instance.receiveAudio}set receiveAudio(e){h.instance.receiveAudio=e,this._saveToStorage()}get preferredAudioInput(){return h.instance.preferredAudioInput}set preferredAudioInput(e){h.instance.preferredAudioInput=e}get preferredAudioOutput(){return h.instance.preferredAudioOutput}set preferredAudioOutput(e){h.instance.preferredAudioOutput=e}get preferredVideoInput(){return h.instance.preferredVideoInput}set preferredVideoInput(e){h.instance.preferredVideoInput=e}get inputAudioConstraints(){return h.instance.inputAudioDeviceConstraints}set inputAudioConstraints(e){h.instance.inputAudioDeviceConstraints=e}get inputVideoConstraints(){return h.instance.inputVideoDeviceConstraints}set inputVideoConstraints(e){h.instance.inputVideoDeviceConstraints=e}get deviceDebounceTime(){return Ye(h.instance.deviceDebounceTime)}set deviceDebounceTime(e){h.instance.deviceDebounceTime=Ke(e),this._saveToStorage()}get devicePollingInterval(){return Ye(h.instance.devicePollingInterval)}set devicePollingInterval(e){h.instance.devicePollingInterval=Ke(e),this._saveToStorage()}get disableUdpIceServers(){return h.instance.disableUdpIceServers}set disableUdpIceServers(e){h.instance.disableUdpIceServers=e,this._saveToStorage()}get relayOnly(){return h.instance.relayOnly}set relayOnly(e){h.instance.relayOnly=e,this._saveToStorage()}get iceCandidateTimeout(){return Ye(h.instance.iceCandidateTimeout)}set iceCandidateTimeout(e){h.instance.iceCandidateTimeout=Ke(e),this._saveToStorage()}get iceGatheringTimeout(){return Ye(h.instance.iceGatheringTimeout)}set iceGatheringTimeout(e){h.instance.iceGatheringTimeout=Ke(e),this._saveToStorage()}get iceServers(){return h.instance.iceServers}set iceServers(e){h.instance.iceServers=e,this._saveToStorage()}get userVariables(){return h.instance.userVariables}set userVariables(e){h.instance.userVariables=e,this._saveToStorage()}get statsPollingInterval(){return h.instance.statsPollingInterval}set statsPollingInterval(e){h.instance.statsPollingInterval=e,this._saveToStorage()}get statsBaselineSamples(){return h.instance.statsBaselineSamples}set statsBaselineSamples(e){h.instance.statsBaselineSamples=e,this._saveToStorage()}get statsNoPacketThreshold(){return h.instance.statsNoPacketThreshold}set statsNoPacketThreshold(e){h.instance.statsNoPacketThreshold=e,this._saveToStorage()}get statsRttSpikeMultiplier(){return h.instance.statsRttSpikeMultiplier}set statsRttSpikeMultiplier(e){h.instance.statsRttSpikeMultiplier=e,this._saveToStorage()}get statsPacketLossThreshold(){return h.instance.statsPacketLossThreshold}set statsPacketLossThreshold(e){h.instance.statsPacketLossThreshold=e,this._saveToStorage()}get statsJitterSpikeMultiplier(){return h.instance.statsJitterSpikeMultiplier}set statsJitterSpikeMultiplier(e){h.instance.statsJitterSpikeMultiplier=e,this._saveToStorage()}get statsHistorySize(){return h.instance.statsHistorySize}set statsHistorySize(e){h.instance.statsHistorySize=e,this._saveToStorage()}get keyframeMaxBurst(){return h.instance.keyframeMaxBurst}set keyframeMaxBurst(e){h.instance.keyframeMaxBurst=e,this._saveToStorage()}get keyframeBurstWindow(){return h.instance.keyframeBurstWindow}set keyframeBurstWindow(e){h.instance.keyframeBurstWindow=e,this._saveToStorage()}get keyframeCooldown(){return h.instance.keyframeCooldown}set keyframeCooldown(e){h.instance.keyframeCooldown=e,this._saveToStorage()}get reinviteDebounceTime(){return h.instance.reinviteDebounceTime}set reinviteDebounceTime(e){h.instance.reinviteDebounceTime=e,this._saveToStorage()}get reinviteMaxAttempts(){return h.instance.reinviteMaxAttempts}set reinviteMaxAttempts(e){h.instance.reinviteMaxAttempts=e,this._saveToStorage()}get reinviteTimeout(){return h.instance.reinviteTimeout}set reinviteTimeout(e){h.instance.reinviteTimeout=e,this._saveToStorage()}get recoveryDebounceTime(){return Ye(h.instance.recoveryDebounceTime)}set recoveryDebounceTime(e){h.instance.recoveryDebounceTime=Ke(e),this._saveToStorage()}get recoveryCooldown(){return Ye(h.instance.recoveryCooldown)}set recoveryCooldown(e){h.instance.recoveryCooldown=Ke(e),this._saveToStorage()}get iceDisconnectedGracePeriod(){return Ye(h.instance.iceDisconnectedGracePeriod)}set iceDisconnectedGracePeriod(e){h.instance.iceDisconnectedGracePeriod=Ke(e),this._saveToStorage()}get iceRestartTimeout(){return Ye(h.instance.iceRestartTimeout)}set iceRestartTimeout(e){h.instance.iceRestartTimeout=Ke(e),this._saveToStorage()}get maxRecoveryAttempts(){return h.instance.maxRecoveryAttempts}set maxRecoveryAttempts(e){h.instance.maxRecoveryAttempts=e,this._saveToStorage()}get enableRelayFallback(){return h.instance.enableRelayFallback}set enableRelayFallback(e){h.instance.enableRelayFallback=e,this._saveToStorage()}get enableNetworkChangeDetection(){return h.instance.enableNetworkChangeDetection}set enableNetworkChangeDetection(e){h.instance.enableNetworkChangeDetection=e,this._saveToStorage()}get enableServerHangupInterception(){return h.instance.enableServerHangupInterception}set enableServerHangupInterception(e){h.instance.enableServerHangupInterception=e,this._saveToStorage()}get persistDeviceSelection(){return h.instance.persistDeviceSelection}set persistDeviceSelection(e){h.instance.persistDeviceSelection=e,this._saveToStorage()}get syncDevicesToActiveCalls(){return h.instance.syncDevicesToActiveCalls}set syncDevicesToActiveCalls(e){h.instance.syncDevicesToActiveCalls=e,this._saveToStorage()}get autoMuteVideoOnHidden(){return h.instance.autoMuteVideoOnHidden}set autoMuteVideoOnHidden(e){h.instance.autoMuteVideoOnHidden=e,this._saveToStorage()}get refreshDevicesOnVisible(){return h.instance.refreshDevicesOnVisible}set refreshDevicesOnVisible(e){h.instance.refreshDevicesOnVisible=e,this._saveToStorage()}get checkConnectionOnVisible(){return h.instance.checkConnectionOnVisible}set checkConnectionOnVisible(e){h.instance.checkConnectionOnVisible=e,this._saveToStorage()}get defaultAudioConstraints(){return h.instance.defaultAudioConstraints}set defaultAudioConstraints(e){h.instance.defaultAudioConstraints=e}get defaultVideoConstraints(){return h.instance.defaultVideoConstraints}set defaultVideoConstraints(e){h.instance.defaultVideoConstraints=e}get stereoAudio(){return h.instance.stereoAudio}set stereoAudio(e){h.instance.stereoAudio=e,this._saveToStorage()}get enableAutoDegradation(){return h.instance.enableAutoDegradation}set enableAutoDegradation(e){h.instance.enableAutoDegradation=e,this._saveToStorage()}get degradationBitrateThreshold(){return h.instance.degradationBitrateThreshold}set degradationBitrateThreshold(e){h.instance.degradationBitrateThreshold=e,this._saveToStorage()}get degradationRecoveryThreshold(){return h.instance.degradationRecoveryThreshold}set degradationRecoveryThreshold(e){h.instance.degradationRecoveryThreshold=e,this._saveToStorage()}get preferredVideoCodecs(){return h.instance.preferredVideoCodecs}set preferredVideoCodecs(e){h.instance.preferredVideoCodecs=e,this._saveToStorage()}get preferredAudioCodecs(){return h.instance.preferredAudioCodecs}set preferredAudioCodecs(e){h.instance.preferredAudioCodecs=e,this._saveToStorage()}_saveToStorage(){if(!this._storage)return;const e=Tg();this._storage.setItem(Vo,e,"local").catch(t=>{ac.error(`[ClientPreferences] Failed to save preferences: ${String(t)}`)})}_loadFromStorage(){this._storage&&this._storage.getItem(Vo,"local").then(e=>{e&&$g(e)}).catch(e=>{ac.error(`[ClientPreferences] Failed to load preferences: ${String(e)}`)})}};function ze(e){return e instanceof Error?e:new Error(String(e))}const Xe=q(),oc={audioinput:Tf,audiooutput:$f,videoinput:Ef},xg={audioinput:[],audiooutput:[],videoinput:[]},cc={audioinput:null,audiooutput:null,videoinput:null};var Ag=class extends Z{constructor(e,t){super(),this.webRTCApiProvider=e,this.deviceChangeHandler=()=>{Xe.debug("[DeviceController] Device change detected"),this.enumerateDevices()},this._devicesState$=this.createBehaviorSubject(xg),this._selectedDevicesState$=this.createBehaviorSubject(cc),this._errors$=this.createReplaySubject(1),this._deviceHistory=new Sg,this._deviceRecovered$=this.createSubject(),this._audioInputDisabled$=this.createBehaviorSubject(!1),this._videoInputDisabled$=this.createBehaviorSubject(!1),this._lastAudioInputBeforeDisable=null,this._lastVideoInputBeforeDisable=null,this._persistedDevices={},this._storageManager=t,this.init()}setStorageManager(e){this._storageManager=e,this.loadPersistedDevices()}get selectedAudioInputDeviceConstraints(){return this._audioInputDisabled$.value?!1:this.deviceInfoToConstraints(this.selectedAudioInputDevice)}get selectedVideoInputDeviceConstraints(){return this._videoInputDisabled$.value?!1:this.deviceInfoToConstraints(this.selectedVideoInputDevice)}deviceInfoToConstraints(e){if(!e?.deviceId||e.deviceId.trim()==="")return{};const t=e.kind==="audioinput"?this.audioInputDevices:this.videoInputDevices,i=t.find(r=>r.deviceId===e.deviceId)??t.find(r=>r.label===e.label);return i?{deviceId:{exact:i.deviceId}}:{}}get errors$(){return this.cachedObservable("errors$",()=>this._errors$.asObservable().pipe(v(this.destroyed$)))}get deviceRecovered$(){return this._deviceRecovered$.asObservable().pipe(v(this.destroyed$))}get videoInputDisabled$(){return this.cachedObservable("videoInputDisabled$",()=>this._videoInputDisabled$.asObservable().pipe(P(),v(this.destroyed$)))}get audioInputDisabled$(){return this.cachedObservable("audioInputDisabled$",()=>this._audioInputDisabled$.asObservable().pipe(P(),v(this.destroyed$)))}get videoInputDisabled(){return this._videoInputDisabled$.value}get audioInputDisabled(){return this._audioInputDisabled$.value}get audioInputDevices$(){return this.cachedObservable("audioInputDevices$",()=>this._devicesState$.pipe(S(e=>e.audioinput),P(),v(this.destroyed$)))}get audioOutputDevices$(){return this.cachedObservable("audioOutputDevices$",()=>this._devicesState$.pipe(S(e=>e.audiooutput),P(),v(this.destroyed$)))}get videoInputDevices$(){return this.cachedObservable("videoInputDevices$",()=>this._devicesState$.pipe(S(e=>e.videoinput),P(),v(this.destroyed$)))}get selectedAudioInputDevice$(){return this.cachedObservable("selectedAudioInputDevice$",()=>this._selectedDevicesState$.asObservable().pipe(S(e=>e.audioinput),P(),v(this.destroyed$),fe(e=>Xe.debug("[DeviceController] Selected audio input device changed:",e))))}get selectedAudioOutputDevice$(){return this.cachedObservable("selectedAudioOutputDevice$",()=>this._selectedDevicesState$.asObservable().pipe(S(e=>e.audiooutput),P(),v(this.destroyed$),fe(e=>Xe.debug("[DeviceController] Selected audio output device changed:",e))))}get selectedVideoInputDevice$(){return this.cachedObservable("selectedVideoInputDevice$",()=>this._selectedDevicesState$.asObservable().pipe(S(e=>e.videoinput),P(),v(this.destroyed$),fe(e=>Xe.debug("[DeviceController] Selected video input device changed:",e))))}get selectedAudioInputDevice(){return this._audioInputDisabled$.value?null:this._selectedDevicesState$.value.audioinput}get selectedAudioOutputDevice(){return this._selectedDevicesState$.value.audiooutput}get selectedVideoInputDevice(){return this._videoInputDisabled$.value?null:this._selectedDevicesState$.value.videoinput}get audioInputDevices(){return this._devicesState$.value.audioinput}get audioOutputDevices(){return this._devicesState$.value.audiooutput}get videoInputDevices(){return this._devicesState$.value.videoinput}disableAudioInput(){this._audioInputDisabled$.value||(this._lastAudioInputBeforeDisable=this._selectedDevicesState$.value.audioinput,this._audioInputDisabled$.next(!0),this._selectedDevicesState$.next({...this._selectedDevicesState$.value,audioinput:null}))}enableAudioInput(){if(this._audioInputDisabled$.value){this._audioInputDisabled$.next(!1);const e=this._lastAudioInputBeforeDisable??this.audioInputDevices[0];this._selectedDevicesState$.next({...this._selectedDevicesState$.value,audioinput:e}),this._lastAudioInputBeforeDisable=null}}disableVideoInput(){this._videoInputDisabled$.value||(this._lastVideoInputBeforeDisable=this._selectedDevicesState$.value.videoinput,this._videoInputDisabled$.next(!0),this._selectedDevicesState$.next({...this._selectedDevicesState$.value,videoinput:null}))}enableVideoInput(){if(this._videoInputDisabled$.value){this._videoInputDisabled$.next(!1);const e=this._lastVideoInputBeforeDisable??this.videoInputDevices[0];this._selectedDevicesState$.next({...this._selectedDevicesState$.value,videoinput:e}),this._lastVideoInputBeforeDisable=null}}selectAudioInputDevice(e){this._audioInputDisabled$.value&&e&&this._audioInputDisabled$.next(!1);const t=this._selectedDevicesState$.value.audioinput;t&&t.deviceId!==e?.deviceId&&this._deviceHistory.push("audioinput",t),this._selectedDevicesState$.next({...this._selectedDevicesState$.value,audioinput:e}),e&&this.persistDeviceSelection("audioinput",e)}selectVideoInputDevice(e){Xe.debug("[DeviceController] Setting selected video input device:",e),this._videoInputDisabled$.value&&e&&this._videoInputDisabled$.next(!1);const t=this._selectedDevicesState$.value.videoinput;t&&t.deviceId!==e?.deviceId&&this._deviceHistory.push("videoinput",t),this._selectedDevicesState$.next({...this._selectedDevicesState$.value,videoinput:e}),e&&this.persistDeviceSelection("videoinput",e)}selectAudioOutputDevice(e){const t=this._selectedDevicesState$.value.audiooutput;t&&t.deviceId!==e?.deviceId&&this._deviceHistory.push("audiooutput",t),this._selectedDevicesState$.next({...this._selectedDevicesState$.value,audiooutput:e}),e&&this.persistDeviceSelection("audiooutput",e)}init(){this.loadPersistedDevices(),this.subscribeTo(this._devicesState$.pipe(Oo(h.instance.deviceDebounceTime)),e=>{const t=this._selectedDevicesState$.value,i=this._audioInputDisabled$.value?null:this.resolveDevice("audioinput",e.audioinput,t.audioinput,h.instance.preferredAudioInput),r=this.resolveDevice("audiooutput",e.audiooutput,t.audiooutput,h.instance.preferredAudioOutput),n=this._videoInputDisabled$.value?null:this.resolveDevice("videoinput",e.videoinput,t.videoinput,h.instance.preferredVideoInput);if(i!==t.audioinput||r!==t.audiooutput||n!==t.videoinput){const s=h.instance.syncDevicesToActiveCalls;this._selectedDevicesState$.next({audioinput:s||!t.audioinput?i:t.audioinput,audiooutput:s||!t.audiooutput?r:t.audiooutput,videoinput:s||!t.videoinput?n:t.videoinput})}}),this.enumerateDevices()}resolveDevice(e,t,i,r){if(t.length===0)return null;if(i){if(t.find(c=>c.deviceId===i.deviceId))return i;const s=t.filter(c=>c.label===i.label);if(s.length===1)return s[0];if(s.length>1){const c=s.find(l=>l.groupId===i.groupId);return c||(this.emitDeviceRecovered(e,i,null,"ambiguous_match"),null)}const a=this._deviceHistory.findInHistory(e,t);if(a)return Xe.debug(`[DeviceController] Device disappeared, falling back to history: ${a.label}`),this.emitDeviceRecovered(e,i,a,"device_disconnected"),a;const o=(r?t.find(c=>c.deviceId===r.deviceId||c.label===r.label):void 0)??t[0];return this.emitDeviceRecovered(e,i,o,"fallback_to_default"),o}const n=this._persistedDevices[e];if(n){const s=this.resolvePersistedDevice(e,n,t);if(s)return s}if(r){const s=t.find(a=>a.deviceId===r.deviceId||a.label===r.label);if(s)return s}return t[0]}resolvePersistedDevice(e,t,i){const r=i.find(a=>a.deviceId===t.deviceId);if(r)return r;const n=i.find(a=>a.groupId===t.groupId&&a.label===t.label);if(n)return n;const s=i.filter(a=>a.label===t.label);return s.length===1?s[0]:null}emitDeviceRecovered(e,t,i,r){try{this._deviceRecovered$.next({kind:e,previousDevice:t,newDevice:i,reason:r})}catch{}}async persistDeviceSelection(e,t){if(!this._storageManager||!h.instance.persistDeviceSelection)return;const i={deviceId:t.deviceId,label:t.label,kind:t.kind,groupId:t.groupId};try{await this._storageManager.setItem(oc[e],i,"local")}catch(r){Xe.error(`[DeviceController] Failed to persist device selection for ${e}:`,r)}}async loadPersistedDevices(){if(!(!this._storageManager||!h.instance.persistDeviceSelection))for(const e of["audioinput","audiooutput","videoinput"])try{const t=await this._storageManager.getItem(oc[e],"local");t&&(this._persistedDevices={...this._persistedDevices,[e]:t})}catch(t){Xe.error(`[DeviceController] Failed to load persisted device for ${e}:`,t)}}async clearDeviceState(){this._deviceHistory.clear(),this._persistedDevices={},this._lastAudioInputBeforeDisable=null,this._lastVideoInputBeforeDisable=null,this._audioInputDisabled$.next(!1),this._videoInputDisabled$.next(!1),this._selectedDevicesState$.next(cc),await this.enumerateDevices()}enableDeviceMonitoring(){this.disableDeviceMonitoring(),this.webRTCApiProvider.mediaDevices.addEventListener("devicechange",this.deviceChangeHandler),h.instance.devicePollingInterval>0&&(this._devicesPoolingSubscription=Tr(h.instance.devicePollingInterval).subscribe(()=>{Xe.debug("[DeviceController] Polling devices due to interval"),this.enumerateDevices()})),this.enumerateDevices()}disableDeviceMonitoring(){this.webRTCApiProvider.mediaDevices.removeEventListener("devicechange",this.deviceChangeHandler),this._devicesPoolingSubscription&&(this._devicesPoolingSubscription.unsubscribe(),this._devicesPoolingSubscription=void 0)}async enumerateDevices(){try{const e=(await this.webRTCApiProvider.mediaDevices.enumerateDevices()).reduce((t,i)=>{const r=i.kind;return{...t,[r]:[...t[r],i]}},{audioinput:[],audiooutput:[],videoinput:[]});this._devicesState$.next(e),Xe.debug("[DeviceController] Devices enumerated:",{audioInputs:e.audioinput.length,audioOutputs:e.audiooutput.length,videoInputs:e.videoinput.length})}catch(e){Xe.error("[DeviceController] Failed to enumerate devices:",e),this._errors$.next(ze(e))}}async getDeviceCapabilities(e){if(e.kind==="audiooutput")return null;try{const t=this.deviceInfoToConstraints(e),i=await this.webRTCApiProvider.mediaDevices.getUserMedia({audio:e.kind==="audioinput"?t:!1,video:e.kind==="videoinput"?t:!1}),r=(e.kind==="audioinput"?i.getAudioTracks()[0]:i.getVideoTracks()[0]).getCapabilities();return i.getTracks().forEach(n=>n.stop()),r}catch(t){throw Xe.error("[DeviceController] Failed to get device capabilities:",t),this._errors$.next(ze(t)),t}}async isValidDevice(e){if(!e||e.kind==="audiooutput")return!1;try{return await this.getDeviceCapabilities(e)!==null}catch{return!1}}destroy(){this.disableDeviceMonitoring(),super.destroy()}},lc=class{constructor(){if(typeof localStorage>"u")throw new Zn("localStorage");if(typeof sessionStorage>"u")throw new Zn("sessionStorage");try{const e="__storage_test__";localStorage.setItem(e,"test"),localStorage.removeItem(e)}catch(e){throw q().error("LocalStorage is not accessible:",e),new Zn("localStorage")}}storage(e){return e==="local"?localStorage:sessionStorage}async setItem(e,t,i="session"){return this.storage(i).setItem(e,t),Promise.resolve()}async getItem(e,t="session"){return Promise.resolve(this.storage(t).getItem(e))}async removeItem(e,t="session"){return this.storage(t).removeItem(e),Promise.resolve()}async clear(e="session"){const t=this.storage(e),i=[];for(let r=0;r<t.length;r++){const n=t.key(r);n?.startsWith("sw:")&&i.push(n)}for(const r of i)t.removeItem(r);return Promise.resolve()}},Ig=class{constructor(e=new lc){this.storageImpl=e}serialize(e,t){if(e==null)return null;try{return JSON.stringify(e)}catch(i){throw new Bf(t??"unknown",i)}}async setItem(e,t,i="session"){const r=this.serialize(t,e);try{await this.storageImpl.setItem(e,r,i)}catch(n){throw new Qn(e,n)}}async getItem(e,t="session"){let i;try{i=await this.storageImpl.getItem(e,t)}catch(r){throw new zf(e,r)}if(!i)return null;try{return JSON.parse(i)}catch(r){throw new Hf(e,r)}}async removeItem(e,t="session"){try{await this.storageImpl.removeItem(e,t)}catch(i){throw new Qn(e,i)}}async clearAll(){try{await this.storageImpl.clear("local"),await this.storageImpl.clear("session")}catch(e){throw new Qn("clearAll",e)}}},Rg=class{constructor(){this.persistSession=!1,this._webSocketConstructor=typeof WebSocket<"u"?WebSocket:void 0,this._baseURL=this.apiHost,this._credential={}}get userId(){return this.user.id}get user(){if(!this._user)throw new Y("User");return this._user}set user(e){this._user=e}get storage(){return this._storageManager||(this._storageImpl??(this._storageImpl=new lc),this._storageManager=new Ig(this._storageImpl)),this._storageManager}get http(){return this._httpRequestController??(this._httpRequestController=new sc(this._baseURL,()=>this._credential)),this._httpRequestController}get conversationManager(){if(!this._conversationManager)throw new Y("ConversationsManager");return this._conversationManager}set conversationManager(e){this._conversationManager=e}get WebSocket(){if(!this._webSocketConstructor)throw new Y("WebSocket constructor");return this._webSocketConstructor}set WebSocket(e){this._webSocketConstructor=e}get deviceController(){return this._deviceController??(this._deviceController=new Ag(this.webRTCApiProvider,this.storage)),this._deviceController}get webRTCApiProvider(){if(!this._webRTCApiProvider){if(typeof RTCPeerConnection>"u"||typeof navigator>"u")throw new Y("WebRTCApiProvider: RTCPeerConnection or navigator.mediaDevices is not available. Please provide a custom webRTCApiProvider in SignalWireOptions.");this._webRTCApiProvider={RTCPeerConnection,mediaDevices:navigator.mediaDevices}}return this._webRTCApiProvider}set webRTCApiProvider(e){this._webRTCApiProvider=e,this._deviceController=void 0}get authorizationStateKey(){return`sw:${this.userId}:as`}get protocolKey(){return`sw:${this.userId}:pt`}get attachedCallsKey(){return`sw:${this.userId}:att`}getUserFromAddressId(){return this.user.addresses[0]?.id??""}set baseURL(e){this._baseURL=e,this._httpRequestController=void 0}get credential(){return this._credential}set credential(e){this._credential=e}set storageImpl(e){this._storageImpl=e,this._storageManager=void 0}set ch(e){if(!e)return;const t=e.indexOf(".");t!==-1&&(this._host=e.substring(0,t),this._domain=e.substring(t+1)),this._baseURL=this.apiHost,this._httpRequestController=void 0}get relayHost(){return`wss://${this._host??"puc"}.${this._domain??"signalwire.com"}`}get apiHost(){return`https://fabric.${this._domain??"signalwire.com"}`}};const Ot=q(),Mg="sw-dpop",Dg=1,Pt="keys",is="dpop-keypair",Ur=e=>{const t=new Uint8Array(e);let i="";for(const r of t)i+=String.fromCharCode(r);return btoa(i).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")},dc=e=>Ur(new TextEncoder().encode(e).buffer),uc=async e=>{if(e.kty!=="RSA")throw new Error(`Unsupported key type for JWK Thumbprint: ${e.kty}. Only RSA is supported.`);const t=JSON.stringify({e:e.e,kty:e.kty,n:e.n});return Ur(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t)))};async function rs(){return new Promise((e,t)=>{const i=indexedDB.open(Mg,Dg);i.onupgradeneeded=()=>{const r=i.result;r.objectStoreNames.contains(Pt)||r.createObjectStore(Pt)},i.onsuccess=()=>e(i.result),i.onerror=()=>t(i.error??new Error("Failed to open IndexedDB"))})}async function Og(){try{const e=await rs();return await new Promise((t,i)=>{const r=e.transaction(Pt,"readonly"),n=r.objectStore(Pt).get(is);n.onsuccess=()=>t(n.result??null),n.onerror=()=>i(n.error??new Error("Failed to load key pair from IndexedDB")),r.oncomplete=()=>e.close()})}catch(e){return Ot.warn("[DPoP] Failed to load key pair from IndexedDB:",e),null}}async function Pg(e){try{const t=await rs();await new Promise((i,r)=>{const n=t.transaction(Pt,"readwrite");n.objectStore(Pt).put(e,is),n.oncomplete=()=>{t.close(),i()},n.onerror=()=>{t.close(),r(n.error??new Error("Failed to save key pair to IndexedDB"))}})}catch(t){Ot.warn("[DPoP] Failed to save key pair to IndexedDB:",t)}}async function hc(){try{const e=await rs();await new Promise((t,i)=>{const r=e.transaction(Pt,"readwrite");r.objectStore(Pt).delete(is),r.oncomplete=()=>{e.close(),t()},r.onerror=()=>{e.close(),i(r.error??new Error("Failed to delete key pair from IndexedDB"))}})}catch(e){Ot.warn("[DPoP] Failed to delete key pair from IndexedDB:",e)}}var Lg=class{constructor(){this._keyPair=null,this._publicJwk=null,this._fingerprint=null,this._initialized=!1}async init(){if(this._initialized)return this.fingerprint;const e=await Og();if(e)try{const t=new TextEncoder().encode("dpop-key-check");return await crypto.subtle.sign("RSASSA-PKCS1-v1_5",e.privateKey,t),this._keyPair=e,this._publicJwk=await crypto.subtle.exportKey("jwk",e.publicKey),this._fingerprint=await uc(this._publicJwk),this._initialized=!0,Ot.debug("[DPoP] Key pair restored from IndexedDB, fingerprint:",this._fingerprint),this._fingerprint}catch(t){Ot.warn("[DPoP] Stored key pair unusable, generating new one:",t),await hc()}return Ot.debug("[DPoP] Generating RSA key pair"),this._keyPair=await crypto.subtle.generateKey({name:"RSASSA-PKCS1-v1_5",modulusLength:2048,publicExponent:new Uint8Array([1,0,1]),hash:"SHA-256"},!1,["sign","verify"]),this._publicJwk=await crypto.subtle.exportKey("jwk",this._keyPair.publicKey),this._fingerprint=await uc(this._publicJwk),this._initialized=!0,await Pg(this._keyPair),Ot.debug("[DPoP] Key pair generated and persisted, fingerprint:",this._fingerprint),this._fingerprint}get fingerprint(){if(!this._fingerprint)throw new Pr("CryptoController not initialized. Call init() first.");return this._fingerprint}get initialized(){return this._initialized}async createHttpProof(e){const t={jti:crypto.randomUUID(),htm:e.method,htu:e.uri,iat:Math.floor(Date.now()/1e3)};return e.accessToken&&(t.ath=Ur(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(e.accessToken)))),this.signProof(t)}async createRpcProof(e){const t={jti:crypto.randomUUID(),rpc:"request",mth:e.method,iat:Math.floor(Date.now()/1e3)};return this.signProof(t)}destroy(){this._keyPair=null,this._publicJwk=null,this._fingerprint=null,this._initialized=!1,hc(),Ot.debug("[DPoP] Controller destroyed")}get publicJwk(){if(!this._publicJwk)throw new Pr("CryptoController not initialized. Call init() first.");return this._publicJwk}get privateKey(){if(!this._keyPair)throw new Pr("CryptoController not initialized. Call init() first.");return this._keyPair.privateKey}async signProof(e){const t={typ:"dpop+jwt",alg:"RS256",jwk:this.publicJwk},i=`${dc(JSON.stringify(t))}.${dc(JSON.stringify(e))}`;return`${i}.${Ur(await crypto.subtle.sign("RSASSA-PKCS1-v1_5",this.privateKey,new TextEncoder().encode(i)))}`}};const mi=q();function pc(){return typeof window<"u"&&typeof window.addEventListener=="function"}function fc(){if(typeof navigator>"u")return;const{connection:e}=navigator;return e?.effectiveType??void 0}function gc(){if(!(typeof navigator>"u"))return navigator.connection??void 0}var Ng=class extends Z{constructor(){super(),this._isOnline$=this.createBehaviorSubject(typeof navigator<"u"?navigator.onLine:!0),this._networkChange$=this.createSubject(),this._onOnline=this.handleOnline.bind(this),this._onOffline=this.handleOffline.bind(this),this._onConnectionChange=this.handleConnectionChange.bind(this),this._listenersAttached=!1,this.attachListeners()}get isOnline$(){return this._isOnline$.asObservable().pipe(v(this._destroyed$))}get isOnline(){return this._isOnline$.value}get networkChange$(){return this._networkChange$.asObservable().pipe(v(this._destroyed$))}destroy(){this.removeListeners(),super.destroy()}attachListeners(){if(!pc()){mi.debug("NetworkMonitor: no browser environment detected, skipping event listeners");return}window.addEventListener("online",this._onOnline),window.addEventListener("offline",this._onOffline);const e=gc();e&&e.addEventListener("change",this._onConnectionChange),this._listenersAttached=!0,mi.debug("NetworkMonitor: event listeners attached")}removeListeners(){if(this._listenersAttached){if(pc()){window.removeEventListener("online",this._onOnline),window.removeEventListener("offline",this._onOffline);const e=gc();e&&e.removeEventListener("change",this._onConnectionChange)}this._listenersAttached=!1,mi.debug("NetworkMonitor: event listeners removed")}}handleOnline(){mi.info("NetworkMonitor: browser went online"),this._isOnline$.next(!0),this._networkChange$.next({type:"online",timestamp:Date.now(),networkType:fc()})}handleOffline(){mi.info("NetworkMonitor: browser went offline"),this._isOnline$.next(!1),this._networkChange$.next({type:"offline",timestamp:Date.now()})}handleConnectionChange(){const e=fc();mi.info(`NetworkMonitor: connection changed — effectiveType=${e??"unknown"}`),this._networkChange$.next({type:"connection_change",timestamp:Date.now(),networkType:e})}};function vc(e){if(typeof RTCRtpSender>"u"||typeof RTCRtpSender.getCapabilities!="function")return[];const t=RTCRtpSender.getCapabilities(e);if(!t)return[];const i=new Set,r=[];for(const n of t.codecs){const s=Fg(n.mimeType);s&&!i.has(s)&&(i.add(s),r.push(s))}return r}function Fg(e){const t=e.indexOf("/");return t>=0?e.substring(t+1):e}function Ug(){return typeof globalThis>"u"?!1:"RTCRtpScriptTransform"in globalThis||"MediaStreamTrackProcessor"in globalThis}function Vg(){return typeof HTMLMediaElement>"u"?!1:"setSinkId"in HTMLMediaElement.prototype}function Bg(){return typeof RTCRtpSender>"u"?!1:typeof RTCRtpSender.prototype.setParameters=="function"}function mc(e){const t=e?.mediaDevices??bc(),i=typeof t?.getUserMedia=="function",r=typeof t?.getDisplayMedia=="function",n={webrtc:e?typeof e.RTCPeerConnection=="function":typeof globalThis<"u"&&"RTCPeerConnection"in globalThis,getUserMedia:i,getDisplayMedia:r,screenShare:r,screenShareAudio:Hg(),simulcast:Bg(),insertableStreams:Ug(),audioOutputSelection:Vg(),videoCodecs:vc("video"),audioCodecs:vc("audio")};return Object.freeze(n)}function Hg(){if(typeof navigator>"u")return!1;const e=bc();return!e||typeof e.getDisplayMedia!="function"?!1:navigator.userAgent.includes("Chrome/")}function bc(){return typeof navigator<"u"?navigator.mediaDevices:null}const Vr=q(),zg=10,Wg=1e4,jg=5e3,Gg=5e3;var qg=class extends Z{constructor(e,t,i,r,n,s={}){super(),this.deviceController=e,this.iceServers=t,this.isConnected=i,this.transportRttMs=r,this.dialFn=n,this._options={duration:s.duration??zg,skipMediaTest:s.skipMediaTest??!1,audioDevice:s.audioDevice,videoDevice:s.videoDevice}}async run(e){const t=[];try{const i=this.testSignaling();i.reachable||t.push("WebSocket not connected");const r=await this.testDevices();r.audioInput.working||t.push("Audio input device not working"),r.videoInput.working||t.push("Video input device not working");const n=await this.testIceConnectivity();n.type==="failed"?t.push("No ICE connectivity (neither STUN nor TURN reachable)"):n.type==="relay"&&t.push("Only TURN relay connectivity available (no direct path)"),n.turnReachable||t.push("TURN servers not reachable");let s=null;if(!this._options.skipMediaTest)try{s=await this.testMediaBandwidth(e)}catch(a){Vr.warn("[PreflightRunner] Media bandwidth test failed:",a),t.push("Media bandwidth test failed")}return{ok:i.reachable&&n.type!=="failed"&&r.audioInput.working,signaling:i,connectivity:n,bandwidth:s,devices:r,warnings:t}}catch(i){throw Vr.error("[PreflightRunner] Preflight test failed:",i),new Zf("preflight",i instanceof Error?i:new Error(String(i)))}finally{this.destroy()}}testSignaling(){return{reachable:this.isConnected,rttMs:this.transportRttMs}}async testDevices(){const e=this._options.audioDevice??this.deviceController.selectedAudioInputDevice,t=this._options.videoDevice??this.deviceController.selectedVideoInputDevice,i=this.deviceController.selectedAudioOutputDevice;let r=!1,n=!1,s;try{const a={};e?a.audio={deviceId:{exact:e.deviceId}}:a.audio=!0,t?a.video={deviceId:{exact:t.deviceId}}:a.video=!0,s=await Promise.race([navigator.mediaDevices.getUserMedia(a),new Promise((o,c)=>setTimeout(()=>c(new Error("getUserMedia timeout")),Gg))]);for(const o of s.getTracks())o.kind==="audio"&&o.readyState==="live"&&(r=!0),o.kind==="video"&&o.readyState==="live"&&(n=!0)}catch(a){Vr.warn("[PreflightRunner] Device test failed:",a)}finally{s&&s.getTracks().forEach(a=>a.stop())}return{audioInput:{working:r,device:e},videoInput:{working:n,device:t},audioOutput:{available:!!i,device:i}}}async testIceConnectivity(){let e;try{e=new RTCPeerConnection({iceServers:this.iceServers});const t=e,i=new Set,r=Date.now(),n=new Promise(p=>{const m=setTimeout(p,Wg);t.onicecandidate=w=>{if(w.candidate){const E=w.candidate.candidate;E.includes("typ host")&&i.add("host"),E.includes("typ srflx")&&i.add("srflx"),E.includes("typ relay")&&i.add("relay")}else clearTimeout(m),p()}});e.createDataChannel("preflight-test");const s=await e.createOffer();await e.setLocalDescription(s),await n;const a=Date.now()-r,o=i.has("srflx"),c=i.has("relay"),l=i.has("host");let u="failed";return l||o?u="direct":c&&(u="relay"),{type:u,turnReachable:c,stunReachable:o,rttMs:a}}catch(t){return Vr.warn("[PreflightRunner] ICE connectivity test failed:",t),{type:"failed",turnReachable:!1,stunReachable:!1,rttMs:0}}finally{e&&e.close()}}async testMediaBandwidth(e){let t;try{t=await this.dialFn(e,{audio:!0,video:!1}),await Fe(t.status$.pipe(N(a=>a==="connected"),ye(1),qi(jg)));const i=this._options.duration*1e3;await new Promise(a=>setTimeout(a,i));const r=t.networkMetrics;let n=0,s=0;if(r.length>0){const a=r[r.length-1];a.availableOutgoingBitrate!==void 0&&(n=Math.round(a.availableOutgoingBitrate/1e3));const o=a.audio.packetsReceived+a.video.packetsReceived;i>0&&o>0&&(s=n)}return{uploadKbps:n,downloadKbps:s}}finally{if(t)try{await t.hangup()}catch{}}}destroy(){super.destroy()}};const Br=q();function Kg(){try{return typeof document<"u"&&typeof document.addEventListener=="function"&&typeof document.visibilityState=="string"}catch{return!1}}function _c(){try{if(typeof document<"u"&&typeof document.visibilityState=="string")return document.visibilityState==="visible"?"visible":"hidden"}catch{}return"visible"}var Yg=class extends Z{constructor(){super(),this._visibility$=this.createBehaviorSubject(_c()),this._visibilityChange$=this.createSubject(),this._hasVisibilityApi=Kg(),this._boundHandler=this._handleVisibilityChange.bind(this),this._hasVisibilityApi?(document.addEventListener("visibilitychange",this._boundHandler),Br.debug("VisibilityController: listening for visibilitychange events")):Br.debug("VisibilityController: document visibility API not available, defaulting to visible")}get visibility$(){return this._visibility$.pipe(v(this._destroyed$))}get visibility(){return this._visibility$.value}get visibilityChange$(){return this._visibilityChange$.pipe(v(this._destroyed$))}destroy(){this._hasVisibilityApi&&(document.removeEventListener("visibilitychange",this._boundHandler),Br.debug("VisibilityController: removed visibilitychange listener")),super.destroy()}_handleVisibilityChange(){const e=_c(),t=this._visibility$.value;if(e===t)return;this._visibility$.next(e);const i={from:t,to:e,timestamp:Date.now()};this._visibilityChange$.next(i),Br.debug("VisibilityController: visibility changed",{from:t,to:e})}},Xg=class extends Z{constructor(e,t){super(),this.fromPath=e,this.http=t,this.fetched$=Gt(()=>Se(this.fetch())).pipe(Ge(1),v(this.destroyed$))}async fetch(){const e=await this.http.request({url:this.fromPath,method:"GET",headers:{Accept:"application/json"}});if(e.ok&&e.body){const t=JSON.parse(e.body);return this.populateInstance(t),!0}return!1}},yc=class extends Xg{constructor(e){super("/api/fabric/subscriber/info",e)}populateInstance(e){this.id=e.id,this.email=e.email,this.firstName=e.first_name,this.lastName=e.last_name,this.displayName=e.display_name,this.jobTitle=e.job_title,this.timeZone=e.time_zone,this.country=e.country,this.region=e.region,this.companyName=e.company_name,this.pushNotificationKey=e.push_notification_key,this.appSettings=e.app_settings?{displayName:e.app_settings.display_name,scopes:e.app_settings.scopes}:void 0,this.addresses=e.fabric_addresses,this.satClaims=e.sat_claims}};const bi=e=>({jsonrpc:"2.0",id:e.id??Nr(),...e}),wc=e=>({jsonrpc:"2.0",...e}),Jg={major:4,minor:0,revision:0},Zg=e=>bi({method:"signalwire.connect",params:{version:Jg,event_acks:!0,...e}}),Qg=e=>{const{dpop_token:t,...i}=e;return bi({method:"signalwire.reauthenticate",params:{authentication:i,...t?{dpop_token:t}:{}}})},ev=(e,t)=>wc({id:e,result:{timestamp:Date.now()/1e3}}),ns=({method:e,params:t})=>bi({method:e,params:t}),tv={id:"callID",destinationNumber:"destination_number",remoteCallerName:"remote_caller_id_name",remoteCallerNumber:"remote_caller_id_number",callerName:"caller_id_name",callerNumber:"caller_id_number",fromCallAddressId:"from_fabric_address_id"},iv=new Set(["remoteSdp","localStream","remoteStream"]),rv=e=>{if(!Object.prototype.hasOwnProperty.call(e,"dialogParams"))return e;const t=e.dialogParams,i=Object.entries(t).reduce((r,[n,s])=>{if(iv.has(n))return r;const a=tv[n]??n;return{...r,[a]:s}},{});return{...e,dialogParams:i}},Yt=e=>(t={})=>bi({method:e,params:rv(t)}),Sc=e=>bi({method:"webrtc.verto",params:e}),nv=Yt("verto.invite"),sv=Yt("verto.bye"),Hr=Yt("verto.modify"),Cc=Yt("verto.info"),av=Yt("verto.answer"),ov=Yt("verto.subscribe"),cv=Yt("verto.pong"),lv={NORMAL_CLEARING:"16",USER_BUSY:"17",MEDIA_TIMEOUT:"804"},dv=e=>wc({id:e,result:{}});function kc(e){const t=new Set;let i=e;for(;i instanceof Error&&!t.has(i);){if(t.add(i),i instanceof St)return i;i=i.error??i.cause}}function uv(e){const t=kc(e);return t!==void 0&&(t.code===Ir||t.code===Xn)}function hv(e){return kc(e)?.code===Ir}const Lt=q();var pv=class{constructor(e,t,i,r,n){this.storage=e,this.deviceController=t,this.reconnectCallsTimeout=i,this.attachKey=r,this.credentialRecovered=n,this.writeQueue=Promise.resolve()}async detachAll(){await this.mutate(e=>({}))}setSession(e){this.session=e}async readAttached(){try{return await this.storage.getItem(this.attachKey)??{}}catch(e){return Lt.warn("[AttachManager] Failed to retrieve attached calls from storage",e),{}}}async writeAttached(e){try{await this.storage.setItem(this.attachKey,e)}catch(t){Lt.warn("[AttachManager] Failed to write attached calls to storage",t)}}async mutate(e){const t=this.writeQueue.then(async()=>{const i=await e(await this.readAttached());await this.writeAttached(i)});return this.writeQueue=t.catch(()=>{}),t}async attach(e){if(!e.to){Lt.warn("[AttachManager] Skip attach for calls with no destination");return}const t=this.buildAttachment(e,e.to);await this.mutate(i=>({...i,[e.id]:t}))}async refresh(e){if(!e.to)return;const t=e.to;await this.mutate(i=>Object.hasOwn(i,e.id)?{...i,[e.id]:this.buildAttachment(e,t)}:i)}buildAttachment(e,t){return{nodeId:e.nodeId,destination:t,mediaDirections:e.mediaDirections,audioInputDevice:e.mediaDirections.audio!=="inactive"?this.deviceController.selectedAudioInputDevice:null,videoInputDevice:e.mediaDirections.video!=="inactive"?this.deviceController.selectedVideoInputDevice:null,attachedAt:Date.now()}}async detach(e){await this.mutate(t=>{const{[e.id]:i,...r}=t;return r})}async flush(){await this.mutate(()=>({}))}async reattachCalls(){const e=await this.readAttached();await this.detachExpired();for(const[t,i]of Object.entries(e)){const{destination:r}=i,n=this.buildCallOptions(i);let s=!1,a=!1;for(let o=1;o<=3;o++)try{await this.session.createOutboundCall(r,{callId:t,...n}),Lt.info(`[AttachManager] Reattached call ${t} (attempt ${o})`),s=!0;break}catch(c){if(Lt.warn(`[AttachManager] Reattach attempt ${o}/3 failed for call ${t}:`,c),hv(c)){a=!0,Lt.warn(`[AttachManager] Reattach of ${t} was refused on credentials; not retrying.`);break}o<3&&await new Promise(l=>setTimeout(l,(o+1)*1e3))}s||(this.credentialRecovered()&&!a?(Lt.warn(`[AttachManager] Reattach of ${t} was denied after a verified reauthentication, removing reference`),await this.detach({id:t,mediaDirections:i.mediaDirections})):Lt.warn(`[AttachManager] Reattach failed for call ${t}; keeping the reference (credential refused or never proven good)`))}}buildCallOptions(e){const{audio:t,video:i}=e.mediaDirections,{audioInputDevice:r,videoInputDevice:n,nodeId:s}=e,a=t.includes("recv"),o=i.includes("recv"),c=t.includes("send"),l=i.includes("send");return{nodeId:s,receiveAudio:a,receiveVideo:o,inputAudioDeviceConstraints:c?{audio:!0,...this.deviceController.deviceInfoToConstraints(r)}:void 0,inputVideoDeviceConstraints:l?{video:!0,...this.deviceController.deviceInfoToConstraints(n)}:void 0,reattach:!0}}async consumePendingAttachment(e){const t=await this.readAttached();if(Object.hasOwn(t,e))return this.buildCallOptions(t[e])}async detachExpired(){const e=Date.now(),t=this.reconnectCallsTimeout;await this.mutate(i=>{const r={...i};let n=!1;for(const[s,a]of Object.entries(i))e-a.attachedAt>t&&(delete r[s],n=!0);return n?r:i})}};const Xt={on:!1,off:!1},ss={muteAudio:Xt,muteVideo:Xt,deaf:Xt,raisehand:Xt,microphoneVolume:!1,microphoneSensitivity:!1,speakerVolume:!1,position:!1,meta:!1,remove:!1,audioFlags:!1,denoise:!1,lowbitrate:!1},Tc={self:ss,member:ss,end:!1,setLayout:!1,sendDigit:!1,vmutedHide:Xt,lock:Xt,device:!1,screenshare:!1};function _i(e){return e.length===0?Xt:{on:e.some(t=>!t.endsWith(".off")),off:e.some(t=>!t.endsWith(".on"))}}function $c(e,t,i,r){return e.filter(n=>n===t||n===`${t}.${i}`||n.startsWith(`${t}.${i}.${r}`))}function Ct(e,t,i,r){return e.some(n=>n===t||i!==null&&n===`${t}.${i}`||n.startsWith(`${t}.${i?`${i}.`:""}${r}`))}function Ec(e,t){return e.filter(i=>i.startsWith(t)||i===t).length===0?ss:{muteAudio:_i($c(e,t,"mute","audio")),muteVideo:_i($c(e,t,"mute","video")),deaf:_i(e.filter(i=>i===t||i.startsWith(`${t}.deaf`))),raisehand:_i(e.filter(i=>i===t||i.startsWith(`${t}.raisehand`))),microphoneVolume:Ct(e,t,"microphone","volume"),microphoneSensitivity:Ct(e,t,"microphone","sensitivity"),speakerVolume:Ct(e,t,"speaker","volume"),position:Ct(e,t,null,"position"),meta:Ct(e,t,null,"meta"),remove:Ct(e,t,null,"remove"),audioFlags:Ct(e,t,null,"audioflags"),denoise:Ct(e,t,null,"denoise"),lowbitrate:Ct(e,t,null,"lowbitrate")}}function fv(e){return e.length===0?Tc:{self:Ec(e,"self"),member:Ec(e,"member"),end:e.some(t=>t==="end"),setLayout:e.some(t=>t.startsWith("layout")),sendDigit:e.some(t=>t.startsWith("digit")),vmutedHide:_i(e.filter(t=>t.startsWith("vmuted"))),lock:_i(e.filter(t=>t.startsWith("lock"))),device:e.some(t=>t==="device"),screenshare:e.some(t=>t==="screenshare")}}var gv=class extends Z{constructor(...e){super(...e),this._state$=this.createBehaviorSubject(Tc)}updateFromRaw(e){const t=fv(e);this._state$.next(t)}get self$(){return this.cachedObservable("self$",()=>this._state$.pipe(S(e=>e.self),P()))}get self(){return this._state$.value.self}get member$(){return this.cachedObservable("member$",()=>this._state$.pipe(S(e=>e.member),P()))}get member(){return this._state$.value.member}get end$(){return this.cachedObservable("end$",()=>this._state$.pipe(S(e=>e.end),P()))}get end(){return this._state$.value.end}get setLayout$(){return this.cachedObservable("setLayout$",()=>this._state$.pipe(S(e=>e.setLayout),P()))}get setLayout(){return this._state$.value.setLayout}get sendDigit$(){return this.cachedObservable("sendDigit$",()=>this._state$.pipe(S(e=>e.sendDigit),P()))}get sendDigit(){return this._state$.value.sendDigit}get vmutedHide$(){return this.cachedObservable("vmutedHide$",()=>this._state$.pipe(S(e=>e.vmutedHide),P()))}get vmutedHide(){return this._state$.value.vmutedHide}get lock$(){return this.cachedObservable("lock$",()=>this._state$.pipe(S(e=>e.lock),P()))}get lock(){return this._state$.value.lock}get device$(){return this.cachedObservable("device$",()=>this._state$.pipe(S(e=>e.device),P()))}get device(){return this._state$.value.device}get screenshare$(){return this.cachedObservable("screenshare$",()=>this._state$.pipe(S(e=>e.screenshare),P()))}get screenshare(){return this._state$.value.screenshare}get state$(){return this._state$.asObservable()}get state(){return this._state$.value}};function vv(e){return e?"call.undeaf":"call.deaf"}function mv(e){return e?"call.lowerhand":"call.raisehand"}const kt=q(),bv={};var xc=class extends Z{constructor(e,t,i){super(),this.callExecuteMethod=t,this.deviceController=i,this._state$=this.createBehaviorSubject(bv),this.id=e}upnext(e){this._state$.next({...this._state$.value,...e})}get name$(){return this.cachedObservable("name$",()=>this._state$.pipe(S(e=>e.name),P()))}get type$(){return this.cachedObservable("type$",()=>this._state$.pipe(S(e=>e.type),P()))}get handraised$(){return this.cachedObservable("handraised$",()=>this._state$.pipe(S(e=>e.handraised),P()))}get visible$(){return this.cachedObservable("visible$",()=>this._state$.pipe(S(e=>e.visible),P()))}get audioMuted$(){return this.cachedObservable("audioMuted$",()=>this._state$.pipe(S(e=>e.audio_muted),P()))}get videoMuted$(){return this.cachedObservable("videoMuted$",()=>this._state$.pipe(S(e=>e.video_muted),P()))}get deaf$(){return this.cachedObservable("deaf$",()=>this._state$.pipe(S(e=>e.deaf),P()))}get inputVolume$(){return this.cachedObservable("inputVolume$",()=>this._state$.pipe(S(e=>e.input_volume),P()))}get outputVolume$(){return this.cachedObservable("outputVolume$",()=>this._state$.pipe(S(e=>e.output_volume),P()))}get inputSensitivity$(){return this.cachedObservable("inputSensitivity$",()=>this._state$.pipe(S(e=>e.input_sensitivity),P()))}get echoCancellation$(){return this.cachedObservable("echoCancellation$",()=>this._state$.pipe(S(e=>e.echo_cancellation),P()))}get autoGain$(){return this.cachedObservable("autoGain$",()=>this._state$.pipe(S(e=>e.auto_gain),P()))}get noiseSuppression$(){return this.cachedObservable("noiseSuppression$",()=>this._state$.pipe(S(e=>e.noise_suppression),P()))}get lowbitrate$(){return this.cachedObservable("lowbitrate$",()=>this._state$.pipe(S(e=>e.lowbitrate),P()))}get denoise$(){return this.cachedObservable("denoise$",()=>this._state$.pipe(S(e=>e.denoise),P()))}get meta$(){return this.cachedObservable("meta$",()=>this._state$.pipe(S(e=>e.meta),P()))}get userId$(){return this.cachedObservable("userId$",()=>this._state$.pipe(S(e=>e.subscriber_id),P()))}get addressId$(){return this.cachedObservable("addressId$",()=>this._state$.pipe(S(e=>e.address_id),P()))}get nodeId$(){return this.cachedObservable("nodeId$",()=>this._state$.pipe(S(e=>e.node_id),P()))}get isTalking$(){return this.cachedObservable("isTalking$",()=>this._state$.pipe(S(e=>e.talking),P()))}get isTalking(){return this._state$.value.talking??!1}get position$(){return this.cachedObservable("position$",()=>this._state$.pipe(S(e=>e.position),P()))}get position(){return this._state$.value.position}get isAudience(){return this._state$.value.isAudience??!1}get name(){return this._state$.value.name}get type(){return this._state$.value.type}get handraised(){return this._state$.value.handraised??!1}get visible(){return this._state$.value.visible??!1}get audioMuted(){return this._state$.value.audio_muted??!1}get videoMuted(){return this._state$.value.video_muted??!1}get deaf(){return this._state$.value.deaf??!1}get inputVolume(){return this._state$.value.input_volume}get outputVolume(){return this._state$.value.output_volume}get inputSensitivity(){return this._state$.value.input_sensitivity}get echoCancellation(){return this._state$.value.echo_cancellation??!1}get autoGain(){return this._state$.value.auto_gain??!1}get noiseSuppression(){return this._state$.value.noise_suppression??!1}get lowbitrate(){return this._state$.value.lowbitrate??!1}get denoise(){return this._state$.value.denoise??!1}get meta(){return this._state$.value.meta}get userId(){return this._state$.value.subscriber_id}get addressId(){return this._state$.value.address_id}get nodeId(){return this._state$.value.node_id}get callId(){return this._state$.value.call_id}get value(){return this._state$.value}get target(){const{call_id:e,node_id:t}=this._state$.value;if(!e||!t)throw new jf(this.id);return{member_id:this.id,call_id:e,node_id:t}}async executeMethod(e,t){return this.callExecuteMethod(this.target,e,t)}async toggleDeaf(){await this.executeMethod(vv(this.deaf),{})}async toggleHandraise(){await this.executeMethod(mv(this.handraised),{})}async mute(){await this.executeMethod("call.mute",{channels:["audio"]})}async unmute(){await this.executeMethod("call.unmute",{channels:["audio"]})}async toggleMute(){return this.audioMuted?this.unmute():this.mute()}async muteVideo(){await this.executeMethod("call.mute",{channels:["video"]})}async unmuteVideo(){await this.executeMethod("call.unmute",{channels:["video"]})}async toggleMuteVideo(){return this.videoMuted?this.unmuteVideo():this.muteVideo()}async toggleEchoCancellation(){await this.executeMethod("call.audioflags.set",{echo_cancellation:!this.echoCancellation,auto_gain:this.autoGain,noise_suppression:this.noiseSuppression})}async toggleAudioInputAutoGain(){await this.executeMethod("call.audioflags.set",{echo_cancellation:this.echoCancellation,auto_gain:!this.autoGain,noise_suppression:this.noiseSuppression})}async toggleNoiseSuppression(){await this.executeMethod("call.audioflags.set",{echo_cancellation:this.echoCancellation,auto_gain:this.autoGain,noise_suppression:!this.noiseSuppression})}async toggleLowbitrate(){await this.executeMethod("call.lowbitrate.set",{lowbitrate:!this.lowbitrate})}async setAudioInputSensitivity(e){await this.executeMethod("call.microphone.sensitivity.set",{sensitivity:e})}async setAudioInputVolume(e){await this.executeMethod("call.microphone.volume.set",{volume:e})}async setAudioOutputVolume(e){await this.executeMethod("call.speaker.volume.set",{volume:e})}async setPosition(e){await this.executeMethod("call.member.position.set",{targets:[{target:this.target,position:e}]})}async remove(){await this.executeMethod("call.member.remove",{targets:[this.target]})}async end(){await this.executeMethod("call.end",{})}async setMeta(e){throw new ht}async updateMeta(e){throw new ht}destroy(){this.callExecuteMethod=void 0,super.destroy()}},Ac=class extends xc{constructor(e,t,i,r){super(e,t,r),this.vertoManager=i,this._studioAudio$=this.createBehaviorSubject(!1),this.capabilities=new gv}destroy(){this.capabilities.destroy(),super.destroy()}get studioAudio$(){return this._studioAudio$.asObservable()}get studioAudio(){return this._studioAudio$.value}async enableStudioAudio(){this._studioAudio$.value||(this._studioAudio$.next(!0),await this.executeMethod("call.audioflags.set",{echo_cancellation:!1,auto_gain:!1,noise_suppression:!1}))}async disableStudioAudio(){this._studioAudio$.value&&(this._studioAudio$.next(!1),await this.executeMethod("call.audioflags.set",{echo_cancellation:!0,auto_gain:!0,noise_suppression:!0}))}async startScreenShare(e){try{await this.vertoManager.addScreenMedia(e)}catch(t){throw t instanceof Or?kt.debug("[Participant.startScreenShare] Screen share cancelled before connecting."):kt.error("[Participant.startScreenShare] Screen share error:",t),t}}get screenShareStatus$(){return this.vertoManager.screenShareStatus$}get screenShareStatus(){return this.vertoManager.screenShareStatus}async stopScreenShare(){return this.vertoManager.removeScreenMedia()}async addAdditionalDevice(e){try{await this.vertoManager.addInputDevice(e)}catch(t){throw t instanceof Or?kt.debug("[Participant.addAdditionalDevice] Device removed before connecting."):kt.error("[Participant.addAdditionalDevice] Additional device error:",t),t}}async removeAdditionalDevice(e){return this.vertoManager.removeInputDevices(e)}async addAudioInputDevice({constraints:e,stream:t}={}){const i=e??t?void 0:!0;return this.vertoManager.addMainInputDevices({audio:i,inputAudioDeviceConstraints:e,inputAudioStream:t})}async addVideoInputDevice({constraints:e,stream:t}={}){const i=e??t?void 0:!0;return this.vertoManager.addMainInputDevices({video:i,inputVideoDeviceConstraints:e,inputVideoStream:t})}async addInputDevices(e={}){await this.vertoManager.addMainInputDevices(e)}selectAudioInputDevice(e,t={}){this.deviceController.selectAudioInputDevice(e),t.savePreference&&(h.instance.preferredAudioInput=e)}async setAudioInputDeviceConstraints(e){return this.vertoManager.updateMediaConstraints({audio:e})}async setInputDevicesConstraints(e){return this.vertoManager.updateMediaConstraints(e)}selectVideoInputDevice(e,t={}){this.deviceController.selectVideoInputDevice(e),t.savePreference&&(h.instance.preferredVideoInput=e)}async setVideoInputDeviceConstraints(e){return this.vertoManager.updateMediaConstraints({video:e})}selectAudioOutputDevice(e,t={}){this.deviceController.selectAudioOutputDevice(e),t.savePreference&&(h.instance.preferredAudioOutput=e)}exitStudioModeIfActive(){this._studioAudio$.value&&(kt.debug("[SelfParticipant] Exiting studio audio mode due to individual flag toggle"),this._studioAudio$.next(!1))}async toggleEchoCancellation(){this.exitStudioModeIfActive(),await super.toggleEchoCancellation()}async toggleAudioInputAutoGain(){this.exitStudioModeIfActive(),await super.toggleAudioInputAutoGain()}async toggleNoiseSuppression(){this.exitStudioModeIfActive(),await super.toggleNoiseSuppression()}async mute(){try{await super.mute()}catch(e){kt.warn("[Participant.toggleAudioInput] Server Error while muting audio input, proceeding with local toggle anyway",e)}finally{this.vertoManager.muteMainAudioInputDevice()}}async unmute(){try{await super.unmute()}catch(e){kt.warn("[Participant.toggleAudioInput] Server Error while unmuting audio input, proceeding with local toggle anyway",e)}finally{await this.vertoManager.unmuteMainAudioInputDevice()}}async muteVideo(){try{await super.muteVideo()}catch(e){kt.warn("[Participant.toggleVideoInput] Server Error while muting video input, proceeding with local toggle anyway",e)}finally{this.vertoManager.muteMainVideoInputDevice()}}async unmuteVideo(){try{await super.unmuteVideo()}catch(e){kt.warn("[Participant.toggleVideoInput] Server Error while unmuting video input, proceeding with local toggle anyway",e)}finally{await this.vertoManager.unmuteMainVideoInputDevice()}}};const Ic=e=>e instanceof Ac;function ge(e){return typeof e=="object"&&e!==null}function B(e,t){return t in e}function as(e){return ge(e)&&B(e,"jsonrpc")&&e.jsonrpc==="2.0"&&B(e,"id")&&typeof e.id=="string"&&B(e,"method")&&typeof e.method=="string"}function os(e){return ge(e)&&B(e,"jsonrpc")&&e.jsonrpc==="2.0"&&B(e,"id")&&typeof e.id=="string"&&(B(e,"result")||B(e,"error"))}function _v(e){return ge(e)&&B(e,"jsonrpc")&&e.jsonrpc==="2.0"&&B(e,"id")&&typeof e.id=="string"&&(B(e,"error")&&ge(e.error)&&B(e.error,"code")&&B(e.error,"message")||B(e,"result")&&ge(e.result)&&B(e.result,"code")&&e.result.code!=="200"&&B(e.result,"message"))}function $e(e){return t=>Rc(t)&&t.event_type===e}function cs(e){return as(e)&&e.method==="signalwire.event"&&ge(e.params)&&B(e.params,"event_type")}function Rc(e){return ge(e)&&B(e,"event_type")&&typeof e.event_type=="string"&&B(e,"params")}function yv(e){return Rc(e)&&(Sv(e)||Cv(e)||Mc(e)||Dc(e)||kv(e)||Tv(e)||$v(e)||Oc(e)||Pc(e)||Lc(e)||Nc(e)||ls(e)||zr(e)||Fc(e)||Uc(e))}const wv=$e("signalwire.authorization.state"),zr=$e("webrtc.message"),Sv=$e("call.joined"),Cv=$e("call.left"),Mc=$e("call.updated"),Dc=$e("call.state"),kv=$e("call.play"),Tv=$e("call.connect"),$v=$e("room.updated"),Oc=$e("member.updated"),Pc=$e("member.joined"),Lc=$e("member.left"),Nc=$e("member.talking"),ls=$e("layout.changed"),Fc=$e("conversation.message"),Uc=$e("conversation.message.updated");function Vc(e){return ge(e)&&B(e,"room_session")&&B(e,"call_id")&&B(e,"member_id")&&B(e,"capabilities")}function Ev(e){return ge(e)&&B(e,"room_id")&&B(e,"room_session_id")&&B(e,"layout")}const Ue=q(),xv={};var Av=class extends Z{constructor(e,t={}){super(),this.webRtcCallSession=e,this.options=t,this.callIds=new Set,this.roomSessionIds=new Set,this._participants$=this.createBehaviorSubject({}),this._self$=this.createBehaviorSubject(null),this._sessionState$=this.createBehaviorSubject(xv),this.initSubscriptions()}get participants$(){return this.cachedObservable("participants$",()=>this._participants$.asObservable().pipe(S(e=>Object.values(e))))}get participants(){return Object.values(this._participants$.value)}get self$(){return this.cachedObservable("self$",()=>this._self$.asObservable().pipe(se()))}isRoomSessionIdValid(e){return this.roomSessionIds.has(e)}addCallId(e){this.callIds.add(e)}isCallIdValid(e){return this.callIds.has(e)}get recording$(){return this.cachedObservable("recording$",()=>this._sessionState$.pipe(S(e=>e.recording),P(),se()))}get recordings$(){return this.cachedObservable("recordings$",()=>this._sessionState$.pipe(S(e=>e.recordings),P(),se()))}get streaming$(){return this.cachedObservable("streaming$",()=>this._sessionState$.pipe(S(e=>e.streaming),P(),se()))}get streams$(){return this.cachedObservable("streams$",()=>this._sessionState$.pipe(S(e=>e.streams),P(),se()))}get playbacks$(){return this.cachedObservable("playbacks$",()=>this._sessionState$.pipe(S(e=>e.playbacks),P(),se()))}get raiseHandPriority$(){return this.cachedObservable("raiseHandPriority$",()=>this._sessionState$.pipe(S(e=>e.prioritize_handraise),P(),se()))}get locked$(){return this.cachedObservable("locked$",()=>this._sessionState$.pipe(S(e=>e.locked),P(),se()))}get meta$(){return this.cachedObservable("meta$",()=>this._sessionState$.pipe(S(e=>e.meta),P(),se()))}get capabilities$(){return this.cachedObservable("capabilities$",()=>this._sessionState$.pipe(S(e=>e.capabilities),P(),se()))}get layout$(){return this.cachedObservable("layout$",()=>this._sessionState$.pipe(S(e=>e.layout_name),P(),se()))}get layouts$(){return this.cachedObservable("layouts$",()=>this._sessionState$.pipe(S(e=>e.layouts),P(),se()))}get layoutLayers$(){return this.cachedObservable("layoutLayers$",()=>this._sessionState$.pipe(S(e=>e.layout_layers),P(),se()))}get self(){return this._self$.value}get layoutLayers(){return this._sessionState$.value.layout_layers??[]}get recording(){return this._sessionState$.value.recording??!1}get streaming(){return this._sessionState$.value.streaming??!1}get raiseHandPriority(){return this._sessionState$.value.prioritize_handraise??!1}get locked(){return this._sessionState$.value.locked??!1}get meta(){return this._sessionState$.value.meta??{}}get layout(){return this._sessionState$.value.layout_name}get layouts(){return this._sessionState$.value.layouts??[]}get capabilities(){return this._sessionState$.value.capabilities??[]}isSessionEvent(e){return this.callIds.has(e)||this.roomSessionIds.has(e)}initSubscriptions(){this.subscribeTo(this.callJoinedEvent$,e=>{Ue.debug("[CallEventsManager] Handling call.joined event for call/session IDs:",{callId:e.call_id,roomSessionId:e.room_session_id});const t=e.room_session,i=e.capabilities;this.selfId=this.selfId??e.member_id,this.originCallId=this.originCallId??e.origin_call_id,this.callIds.add(e.call_id),this.roomSessionIds.add(e.room_session_id),this._sessionState$.next({...this._sessionState$.value,recording:t.recording,recordings:t.recordings,streaming:t.streaming,streams:t.streams,playbacks:t.playbacks,prioritize_handraise:t.prioritize_handraise,locked:t.locked,meta:t.meta,capabilities:i}),this.updateParticipants(t.members),this._self$.value?.capabilities.updateFromRaw(i),this._self$.value?.capabilities.setLayout&&this.updateLayouts()}),this.subscribeTo(this.memberUpdates$,e=>{Ue.debug("[CallEventsManager] Handling member update event for member ID:",e),this.upsertParticipant(e)}),this.subscribeTo(this.webRtcCallSession.memberLeft$,e=>{Ue.debug("[CallEventsManager] Handling member.left event for member ID:",e.member.member_id);const t={...this._participants$.value};e.member.member_id in t?(delete t[e.member.member_id],this._participants$.next(t)):Ue.warn(`[CallEventsManager] Received member.left event for unknown member ID: ${e.member.member_id}`)}),this.subscribeTo(this.webRtcCallSession.callUpdated$,e=>{Ue.debug("[CallEventsManager] Handling call.updated event:",e);const t=e.room_session;this._sessionState$.next({...this._sessionState$.value,recording:t.recording,recordings:t.recordings,streaming:t.streaming,streams:t.streams,playbacks:t.playbacks,prioritize_handraise:t.prioritize_handraise,locked:t.locked,meta:t.meta})}),this.subscribeTo(this.layoutChangedEvent$,e=>{Ue.debug("[CallEventsManager] Handling layout.changed event:",e),this._sessionState$.next({...this._sessionState$.value,layout_name:e.id,layout_layers:e.layers}),this.updateParticipantPositions(e)})}updateParticipantPositions(e){Object.keys(this._participants$.value).length>0&&!e.layers.some(t=>!!t.member_id)&&Ue.warn("[CallEventsManager] No layers with member_id found in layout.changed event. Nothing to update."),e.layers.filter(t=>!!t.member_id).filter(t=>t.member_id in this._participants$.value?!0:(Ue.warn(`[CallEventsManager] Skipping layout layer for unknown member_id: ${t.member_id}`),!1)).map(t=>(this._participants$.value[t.member_id].upnext({position:t}),this._participants$.value[t.member_id])).forEach(t=>{Ic(t)&&this._self$.next(t),this._participants$.next({...this._participants$.value,[t.id]:t})})}updateLayouts(){this.selfId&&this.webRtcCallSession.executeMethod(this.selfId,"call.layout.list",{}).then(e=>{const t=e.result?.layouts;if(!t){Ue.warn("[CallEventsManager] Layout list response carried no layouts; keeping current layouts");return}this._sessionState$.next({...this._sessionState$.value,layouts:t})}).catch(e=>{Ue.error("[CallEventsManager] Error fetching layouts:",e)})}updateParticipants(e){e.forEach(t=>this.upsertParticipant(t))}upsertParticipant(e){if(!(e.member_id in this._participants$.value)){const r=this.webRtcCallSession.createParticipant(e.member_id,this.selfId);this._participants$.next({...this._participants$.value,[e.member_id]:r})}const t=this._participants$.value[e.member_id],i=t.value;Ue.debug("[CallEventsManager] Updating participant:",e.member_id,{oldValue:i,newValue:e}),t.upnext({...i,...e}),Ic(t)&&this._self$.next(t),this._participants$.next(this._participants$.value)}get callJoinedEvent$(){return this.cachedObservable("callJoinedEvent$",()=>this.webRtcCallSession.callEvent$.pipe(N(Vc),fe(e=>{Ue.debug("[CallEventsManager] Call joined event:",e)})))}get layoutChangedEvent$(){return this.cachedObservable("layoutChangedEvent$",()=>this.webRtcCallSession.callEvent$.pipe(ue(Ev,"layout"),fe(e=>{Ue.debug("[CallEventsManager] Layout changed event:",e)})))}get memberUpdates$(){return this.cachedObservable("memberUpdates$",()=>yt(this.webRtcCallSession.memberJoined$,this.webRtcCallSession.memberUpdated$,this.webRtcCallSession.memberTalking$).pipe(S(e=>e.member),fe(e=>{Ue.debug("[CallEventsManager] Member update event:",e)})))}destroy(){Object.values(this._participants$.value).forEach(e=>{e.destroy()}),this._participants$.next({}),this._self$.next(null),this.callIds.clear(),this.roomSessionIds.clear(),this.selfId=void 0,this.originCallId=void 0,this.webRtcCallSession=void 0,this.callSession=void 0,super.destroy()}};const Wr=q();async function ds(e,t,i,r){if(!r)return{stream:await e.getUserMedia(t),fallbackLevel:"default"};const n=typeof t[i]=="object"?t[i]:{};try{const s={...t,[i]:{...n,deviceId:{exact:r}}};return{stream:await e.getUserMedia(s),fallbackLevel:"exact"}}catch(s){if(!Bc(s))throw s;Wr.debug(`[ConstraintFallbackHelper] Exact constraint failed for ${i}, trying preferred`,{deviceId:r})}try{const s={...t,[i]:{...n,deviceId:r}};return{stream:await e.getUserMedia(s),fallbackLevel:"preferred"}}catch(s){if(!Bc(s))throw s;Wr.debug(`[ConstraintFallbackHelper] Preferred constraint failed for ${i}, trying default`,{deviceId:r})}try{const s={...t,[i]:{...n}};if(typeof s[i]=="object"){const{deviceId:o,...c}=s[i];s[i]=c}const a=await e.getUserMedia(s);return Wr.warn(`[ConstraintFallbackHelper] Fell back to browser default for ${i}`,{requestedDeviceId:r}),{stream:a,fallbackLevel:"default"}}catch(s){throw Wr.error(`[ConstraintFallbackHelper] All fallback levels exhausted for ${i}`,{deviceId:r,error:s}),s}}function Bc(e){return e instanceof Error?e.name==="OverconstrainedError"||e.name==="ConstraintNotSatisfiedError":!1}const Iv=new Set(["sendrecv","sendonly","recvonly","inactive"]);function Rv(e){const t={audio:"inactive",video:"inactive"};if(!e)return t;const i=e.split(/\r?\n/);let r=null,n=null;for(const s of i)if(s.startsWith("m="))r&&(t[r]=n??"sendrecv"),s.startsWith("m=audio")?r="audio":s.startsWith("m=video")?r="video":r=null,n=null;else if(r&&s.startsWith("a=")){const a=s.substring(2).trim();Iv.has(a)&&(n=a)}return r&&(t[r]=n??"sendrecv"),t}function Hc(e){if(!e)return!1;const t=e.split(`\r
`),i=[];let r=-1;for(const n of t)if(n.startsWith("m="))r+=1,i[r]=0;else if(n.startsWith("a=candidate:")){const s=/\styp\s+(host|srflx|prflx|relay)/.exec(n);s&&s[1]!=="host"&&(i[r]+=1)}return!i.length||i.every(n=>n>0)}function Mv(e,t=[],i=[]){if(!e||t.length===0&&i.length===0)return e;const r=Pv(e),n=[r[0]];for(let s=1;s<r.length;s++){const a=r[s],o=a.split(/\r?\n/)[0];o.startsWith("m=video")&&t.length>0?n.push(zc(a,t)):o.startsWith("m=audio")&&i.length>0?n.push(zc(a,i)):n.push(a)}return n.join("")}function Dv(e,t=Ff){if(!e)return e;const i=Lv(e);if(i===null)return e;const r=e.split(/\r?\n/),n=[],s=`a=fmtp:${i} `;let a=!1;for(const o of r)o.startsWith(s)?(a=!0,n.push(Nv(o,t))):n.push(o);if(!a){const o=`a=rtpmap:${i} `,c=[];for(const l of n)c.push(l),l.startsWith(o)&&c.push(`a=fmtp:${i} stereo=1;sprop-stereo=1;maxaveragebitrate=${t}`);return c.join(`\r
`)}return n.join(`\r
`)}function Ov(e,t=[],i=[]){return Mv(e,i,t)}function Pv(e){return e.split(/(?=m=)/)}function zc(e,t){const i=e.split(/\r?\n/),r=i[0].split(" ");if(r.length<4)return e;const n=r.slice(3),s=new Map;for(const u of i){const p=/^a=rtpmap:(\d+)\s+([^\s/]+)/.exec(u);p&&s.set(p[1],p[2])}const a=t.map(u=>u.toUpperCase()),o=[],c=[];for(const u of n){const p=s.get(u)?.toUpperCase()??"";a.indexOf(p)>=0?o.push(u):c.push(u)}o.sort((u,p)=>{const m=s.get(u)?.toUpperCase()??"",w=s.get(p)?.toUpperCase()??"";return a.indexOf(m)-a.indexOf(w)});const l=[...o,...c];return[[...r.slice(0,3),...l].join(" "),...i.slice(1)].join(`\r
`)}function Lv(e){const t=/a=rtpmap:(\d+)\s+opus\/48000/i.exec(e);return t?t[1]:null}function Nv(e,t){let i=e;return i.includes("stereo=")||(i+=";stereo=1"),i.includes("sprop-stereo=")||(i+=";sprop-stereo=1"),i.includes("maxaveragebitrate=")||(i+=`;maxaveragebitrate=${t}`),i}const De=q();var Fv=class extends Z{constructor(e,t,i={}){super(),this.peerConnection=e,this.peerConnectionControllerNegotiating$=t,this.onicegatheringstatechangeHandler=()=>{const{iceGatheringState:r}=this.peerConnection;De.debug(`[ICEGatheringController] ICE gathering state changed to: ${r}`),r==="gathering"&&this._iceCandidatesState.next({state:"gathering",validSDP:!1})},this.onicecandidateHandler=r=>{De.debug("[ICEGatheringController] ICE candidate event received:",r.candidate),this.removeTimer("iceCandidateTimer"),r.candidate?this.iceCandidateTimer=setTimeout(()=>{this.peerConnection.iceGatheringState!=="complete"&&(De.warn("[ICEGatheringController] ICE candidate timeout, using current SDP"),this.handleICECandidateTimeout())},this.iceCandidateTimeout):(De.debug("[ICEGatheringController] ICE gathering completed: null candidate received"),this.removeTimer("iceGatheringTimer"),this.handleICEGatheringComplete())},this._iceCandidatesState=this.createBehaviorSubject({state:"new",validSDP:!1}),this.iceCandidateTimeout=i.iceCandidateTimeout??Fo,this.iceGatheringTimeout=i.iceGatheringTimeout??Uo,this.relayOnly=i.relayOnly??!1,this.setupEventListeners(),this.subscribeTo(this.peerConnectionControllerNegotiating$.pipe(N(r=>r)),r=>{r&&(this.setupEventListeners(),this.iceGatheringTimer=setTimeout(()=>{this.peerConnection.iceGatheringState!=="complete"&&(De.warn("[ICEGatheringController] ICE gathering timeout, using current SDP"),this.handleICEGatheringTimeout())},this.iceGatheringTimeout))})}setupEventListeners(){this.peerConnection.removeEventListener("icecandidate",this.onicecandidateHandler),this.peerConnection.addEventListener("icecandidate",this.onicecandidateHandler),this.peerConnection.removeEventListener("icegatheringstatechange",this.onicegatheringstatechangeHandler),this.peerConnection.addEventListener("icegatheringstatechange",this.onicegatheringstatechangeHandler)}get iceCandidatesState$(){return this._iceCandidatesState.pipe(Lo(this.peerConnectionControllerNegotiating$),N(([e,t])=>t),S(([e,t])=>e.state))}get hasValidLocalDescriptionSDP(){const e=this.peerConnection.localDescription?.sdp;return Hc(e??"")}get isRelayOnly(){return this.relayOnly}setRelayOnly(e){this.relayOnly=e}handleICEGatheringComplete(){De.debug("[ICEGatheringController] Handling ICE gathering complete"),De.debug(`[ICEGatheringController] Checking ICE gathering state: ${this.peerConnection.iceGatheringState}`),De.debug("[ICEGatheringController] ICE gathering complete"),this._iceCandidatesState.next({state:"complete",validSDP:this.hasValidLocalDescriptionSDP}),this.stopGathering()}stopGathering(){this.peerConnection.removeEventListener("icegatheringstatechange",this.onicegatheringstatechangeHandler),this.peerConnection.removeEventListener("icecandidate",this.onicecandidateHandler),this.clearAllTimers()}handleICEGatheringTimeout(){this.removeTimer("iceGatheringTimer");const e=this.hasValidLocalDescriptionSDP;e?(De.debug("[ICEGatheringController] Local SDP is valid"),this._iceCandidatesState.next({state:"timeout",validSDP:e}),this.stopGathering()):De.debug(`### ICE gathering timeout
`,this.peerConnection.localDescription?.sdp)}handleICECandidateTimeout(){this.iceCandidateTimer&&this.removeTimer("iceCandidateTimer"),De.warn("[ICEGatheringController] ICE candidate timeout");const e=this.hasValidLocalDescriptionSDP;!e&&!this.relayOnly?this.restartICEGatheringWithRelayOnly():(De.debug("[ICEGatheringController] Using current SDP due to ICE candidate timeout"),this._iceCandidatesState.next({state:"timeout",validSDP:e}),this.stopGathering())}restartICEGatheringWithRelayOnly(){De.debug("[ICEGatheringController] Restarting ICE gathering with relay-only candidates"),this.relayOnly=!0,this.peerConnection.setConfiguration({...this.peerConnection.getConfiguration(),iceTransportPolicy:"relay"}),this.peerConnection.restartIce()}removeTimer(e){this[e]&&(clearTimeout(this[e]),this[e]=void 0)}clearAllTimers(){De.debug("[ICEGatheringController] Clearing all timers"),this.removeTimer("iceGatheringTimer"),this.removeTimer("iceCandidateTimer")}removeEventListeners(){this.peerConnection.removeEventListener("icegatheringstatechange",this.onicegatheringstatechangeHandler),this.peerConnection.removeEventListener("icecandidate",this.onicecandidateHandler)}destroy(){De.debug("[ICEGatheringController] Destroying ICEGatheringController"),this.clearAllTimers(),this.removeEventListeners(),super.destroy()}};const us=q();var Uv=class extends Z{constructor(e={}){super(),this._inputSource=null,this._inputStream=null,this._lastSpokeAt=0,this._gain$=this.createBehaviorSubject(1),this._pttMultiplier=1,this._audioContext=(e.audioContextFactory??(()=>new AudioContext))(),this._gainNode=this._audioContext.createGain(),this._analyser=this._audioContext.createAnalyser(),this._analyser.fftSize=2048,this._analyser.smoothingTimeConstant=.3,this._analyserBuffer=new Uint8Array(new ArrayBuffer(this._analyser.fftSize)),this._destination=this._audioContext.createMediaStreamDestination(),this._gainNode.connect(this._analyser),this._analyser.connect(this._destination),this._speakingThreshold=e.speakingThreshold??wf,this._speakingHoldMs=e.speakingHoldMs??Sf,this._pollIntervalMs=e.pollIntervalMs??qo;const t=e.initialGain??1;this._gain$.next(t),this.applyEffectiveGain()}get gain$(){return this._gain$.asObservable()}get gain(){return this._gain$.value}get outputTrack(){const[e]=this._destination.stream.getAudioTracks();return e}get level$(){return this.deferEmission(Tr(this._pollIntervalMs,ho).pipe(S(()=>this.computeLevel())))}get speaking$(){return this.deferEmission(this.level$.pipe(S(e=>this.evaluateSpeaking(e)),P()))}setGain(e){const t=Math.max(0,Math.min(2,e));this._gain$.next(t),this.applyEffectiveGain()}setPTTActive(e){this._pttMultiplier=e?1:0,this.applyEffectiveGain()}applyEffectiveGain(){this._gainNode.gain.value=this._gain$.value*this._pttMultiplier}setInputTrack(e){if(this._inputSource){try{this._inputSource.disconnect()}catch(t){us.debug("[LocalAudioPipeline] input disconnect warning:",t)}this._inputSource=null}this._inputStream&&(this._inputStream=null),e&&(this._inputStream=new MediaStream([e]),this._inputSource=this._audioContext.createMediaStreamSource(this._inputStream),this._inputSource.connect(this._gainNode),this._audioContext.state==="suspended"&&this._audioContext.resume().catch(t=>{us.warn("[LocalAudioPipeline] AudioContext resume failed:",t)}))}destroy(){if(this._inputSource){try{this._inputSource.disconnect()}catch{}this._inputSource=null}try{this._gainNode.disconnect(),this._analyser.disconnect()}catch{}this._audioContext.close().catch(e=>{us.debug("[LocalAudioPipeline] audio context close warning:",e)}),super.destroy()}computeLevel(){if(!this._inputSource)return 0;this._analyser.getByteTimeDomainData(this._analyserBuffer);let e=0;for(const t of this._analyserBuffer){const i=(t-128)/128;e+=i*i}return Math.sqrt(e/this._analyserBuffer.length)}evaluateSpeaking(e){const t=Date.now();return e>=this._speakingThreshold?(this._lastSpokeAt=t,!0):t-this._lastSpokeAt<this._speakingHoldMs}};const Tt=q();var Vv=class extends Z{constructor(e){super(),this.options=e,this.mediaTrackEndedHandler=t=>{this._mediaTrackEnded$.next(t)},this._localStream$=this.createBehaviorSubject(null),this._localAudioTracks$=this.createBehaviorSubject([]),this._localVideoTracks$=this.createBehaviorSubject([]),this._mediaTrackEnded$=this.createSubject(),this._trackOrigins=new WeakMap}get localStream$(){return this._localStream$.asObservable().pipe(v(this.destroyed$))}get localAudioTracks$(){return this._localAudioTracks$.asObservable().pipe(v(this.destroyed$))}get localVideoTracks$(){return this._localVideoTracks$.asObservable().pipe(v(this.destroyed$))}get mediaTrackEnded$(){return this._mediaTrackEnded$.asObservable().pipe(v(this.destroyed$))}get localStream(){return this._localStream$.value}get localAudioTracks(){return this._localAudioTracks$.value}get localVideoTracks(){return this._localVideoTracks$.value}tagTracks(e,t){for(const i of e)this._trackOrigins.set(i,t)}setTrackOrigin(e,t){this._trackOrigins.set(e,t)}getTrackOrigin(e){return this._trackOrigins.get(e)}isDeviceCapture(e){return this._trackOrigins.get(e)==="device"}async buildLocalStream(){Tt.debug("[LocalStreamController] Building local media stream.");let e;if(this.options.inputAudioStream??this.options.inputVideoStream){const t=[...this.options.inputAudioStream?.getTracks()??[],...this.options.inputVideoStream?.getTracks()??[]];e=new MediaStream(t),this.tagTracks(t,"application")}else if(this.options.propose==="screenshare"){const t=this.options.screenShareAudio??!1;Tt.debug("[LocalStreamController] Requesting display media for screen sharing with audio:",t),e=await this.options.getDisplayMedia({video:!0,audio:t}),Tt.debug("[LocalStreamController] Screen share media obtained:",e),this.tagTracks(e.getTracks(),"display")}else{const t={audio:this.options.inputAudioDeviceConstraints,video:this.options.inputVideoDeviceConstraints};Tt.debug("[LocalStreamController] Requesting user media with constraints:",t),e=await this.options.getUserMedia(t),Tt.debug("[LocalStreamController] User media obtained:",e),this.tagTracks(e.getTracks(),"device")}return this._localStream$.next(e),this._localAudioTracks$.next(e.getAudioTracks()),this._localVideoTracks$.next(e.getVideoTracks()),e}addTrack(e,t="device"){const i=this._localStream$.value??new MediaStream;return this._trackOrigins.set(e,t),e.addEventListener("ended",this.mediaTrackEndedHandler),i.addTrack(e),this._localStream$.next(i),e.kind==="video"?this._localVideoTracks$.next(i.getVideoTracks()):this._localAudioTracks$.next(i.getAudioTracks()),Tt.debug(`[LocalStreamController] ${e.kind} track added:`,e.id),i}removeTrack(e){const t=this._localStream$.value,i=t?.getTracks().find(r=>r.id===e);if(!i){Tt.debug(`[LocalStreamController] track not found: ${e}`);return}return i.removeEventListener("ended",this.mediaTrackEndedHandler),t?.removeTrack(i),i.stop(),this._localStream$.next(t),i.kind==="video"?this._localVideoTracks$.next(t?.getVideoTracks()??[]):this._localAudioTracks$.next(t?.getAudioTracks()??[]),Tt.debug(`[LocalStreamController] ${i.kind} track removed:`,e),i}getOrCreateLocalStream(){return this._localStream$.value??new MediaStream}setLocalStream(e){this._localStream$.next(e)}addTrackEndedListener(e){e.addEventListener("ended",this.mediaTrackEndedHandler)}updateOptions(e){this.options={...this.options,...e}}stopAllTracks(){this._localStream$.value?.getTracks().forEach(e=>{Tt.debug(`[LocalStreamController] Stopping local track: ${e.kind}`),e.removeEventListener("ended",this.mediaTrackEndedHandler),e.stop()})}destroy(){this.stopAllTracks(),super.destroy()}};const Ee=q(),Wc=(e,t)=>e&&t?"sendrecv":e&&!t?"sendonly":!e&&t?"recvonly":"inactive";var Bv=class extends Z{constructor(e){super(),this.peerConnection=e.peerConnection,this.options=e}get useAddTransceivers(){return typeof this.peerConnection.addTransceiver=="function"}get useAddTrack(){return typeof this.peerConnection.addTrack=="function"}get useAddStream(){return typeof this.peerConnection.addStream=="function"&&!this.useAddTransceivers&&!this.useAddTrack}get propose(){return this.options.propose}get isAdditionalDevice(){return this.propose==="additional-device"}get isScreenShare(){return this.propose==="screenshare"}get isSimulcast(){return!!this.options.simulcast}get isSFU(){return!!this.options.sfu}get receiveVideo(){return!!this.options.receiveVideo}get receiveAudio(){return!!this.options.receiveAudio}get localStream(){return this.options.localStreamController.localStream}get inputAudioDeviceConstraints(){return this.options.getInputAudioDeviceConstraints()}get inputVideoDeviceConstraints(){return this.options.getInputVideoDeviceConstraints()}get audioDirection(){if(this.isAdditionalDevice)return"sendonly";const{localStream:e}=this,t=e?.getAudioTracks().some(n=>n.enabled),i=!!this.inputAudioDeviceConstraints,r=!!this.receiveAudio;return Wc(t||i,r)}get videoDirection(){if(this.isAdditionalDevice||this.isScreenShare)return"sendonly";if(this.isSFU)return"recvonly";const{localStream:e}=this,t=e?.getVideoTracks().some(n=>n.enabled),i=!!this.inputVideoDeviceConstraints,r=!!this.receiveVideo;return Wc(t||i,r)}get sendEncodings(){if(this.isSimulcast)return["0","1","2"].map(e=>({active:!0,rid:e,scaleResolutionDownBy:Number(e)*6||1}))}getConstraintsFor(e){const t=e==="audio"?this.inputAudioDeviceConstraints:this.inputVideoDeviceConstraints;return typeof t=="boolean"?{}:t}transceiverByKind(e){return this.peerConnection.getTransceivers().filter(t=>e==="both"||t.receiver.track.kind===e)}get audioTransceivers(){return this.transceiverByKind("audio")}get videoTransceivers(){return this.transceiverByKind("video")}async setupTransceiverSender(e,t,i){const r=e.kind==="audio",n=r?this.audioDirection:this.videoDirection,s={direction:n,sendEncodings:r?void 0:this.sendEncodings,streams:n==="recvonly"?void 0:[t]};Ee.debug(`[TransceiverController] Setting up transceiver sender for local ${e.kind} track:`,{transceiver:i,transceiverParams:s}),s.direction&&["sendonly","sendrecv"].includes(s.direction)&&(i?(await i.sender.replaceTrack(e),i.direction=s.direction,s.streams?.some(a=>!!a)&&(Ee.debug(`[TransceiverController] Setting streams for transceiver sender for local ${e.kind} track:`,s.streams),i.sender.setStreams(...s.streams))):(Ee.debug(`[TransceiverController] Adding new transceiver for local ${e.kind} track:`,e.id),this.peerConnection.addTransceiver(e,s)))}stopTrackSender(e,t={updateTransceiverDirection:!1}){try{const i=this.transceiverByKind(e);for(const r of i)if(r.sender.track?.readyState==="live"){const n=r.sender.track.id;r.sender.track.stop(),this.options.localStreamController.removeTrack(n),t.updateTransceiverDirection&&(r.direction="inactive")}}catch(i){Ee.error("[TransceiverController] stopTrackSender error",e,i),this.options.onError?.(new qe("stopTrackSender",e,i))}}async restoreTrackSender(e){try{Ee.debug("[TransceiverController] restoreTrackSender called",e);const t={},i=this.transceiverByKind(e);for(const n of i){const{track:s}=n.sender;if(!s||s.readyState==="ended"){const a=s?.kind??n.receiver.track.kind;(a==="audio"||a==="video")&&(t[a]=this.getConstraintsFor(a))}}if(Ee.debug("[TransceiverController] restoreTrackSender constraints:",t),Object.keys(t).length===0){Ee.warn("[TransceiverController] restoreTrackSender: no tracks need restoration",e);return}const r=(await this.options.getUserMedia(t)).getTracks();Ee.debug("[TransceiverController] restoreTrackSender new tracks:",r);for(const n of r){this.options.localStreamController.addTrack(n);const s=n.kind,a=this.transceiverByKind(s)[0];a.direction=s==="audio"?this.audioDirection:this.videoDirection,Ee.debug("[TransceiverController] restoreTrackSender setting direction for",s,a.direction),await a.sender.replaceTrack(n)}}catch(t){Ee.error("[TransceiverController] restoreTrackSender error",e,t),this.options.onError?.(new qe("restoreTrackSender",e,t))}}async replaceSenderTrack(e,t){const i=e==="audio"?this.audioTransceivers:this.videoTransceivers;for(const r of i)await r.sender.replaceTrack(t)}async setupRemoteTransceivers(e){if(e!=="answer"){for(const t of["audio","video"]){const i=t==="audio"?this.audioTransceivers:this.videoTransceivers;for(const r of i){const n=t==="audio"?this.audioDirection:this.videoDirection;["inactive","recvonly"].includes(n)&&(r.direction=n,await r.sender.replaceTrack(null),r.sender.setStreams())}}if(this.videoDirection==="recvonly"&&this.isSFU&&this.useAddTransceivers){const{msStreamsNumber:t=5}=this.options;for(let i=0;i<Number(t);i++)this.peerConnection.addTransceiver("video",{direction:"recvonly"})}}}async updateSendersConstraints(e,t){if(!t)return this.stopTrackSender(e),!1;const i=this.peerConnection.getSenders().filter(n=>n.track?.kind===e&&n.track.readyState==="live");let r=i.length>0;for(const n of i){const{track:s}=n;if(s){if(!this.options.localStreamController.isDeviceCapture(s)){Ee.debug(`[TransceiverController] Skipping ${e} constraints for a non-device track (origin: ${this.options.localStreamController.getTrackOrigin(s)??"unrecorded"}), track ${s.id}`),r=!1;continue}const a={...s.getConstraints(),...t};try{await s.applyConstraints(a),Ee.debug(`[TransceiverController] Updated ${e} sender constraints:`,a),Ee.debug(`[TransceiverController] Updated ${e} sender constraints:`,s.getConstraints())}catch(o){Ee.warn(`[TransceiverController] applyConstraints failed for ${e} track ${s.id}, attempting track replacement fallback:`,o);try{await this.replaceTrackFallback(n,s,e,a)}catch(c){Ee.warn(`[TransceiverController] Track replacement fallback also failed for ${e} track:`,c),this.options.onError?.(new qe("updateSendersConstraints",e,c)),r=!1}}}}return r}async replaceTrackFallback(e,t,i,r){const{deviceId:n}=t.getSettings(),{stream:s,fallbackLevel:a}=await ds({getUserMedia:this.options.getUserMedia},{[i]:r},i,n),o=s.getTracks().find(l=>l.kind===i);if(!o)throw s.getTracks().forEach(l=>l.stop()),new qe("replaceTrackFallback",i,new Error("getUserMedia returned no track of the requested kind"));try{await e.replaceTrack(o)}catch(l){throw s.getTracks().forEach(u=>u.stop()),l}const c=t.id;this.options.localStreamController.removeTrack(c),t.stop(),this.options.localStreamController.addTrack(o),Ee.debug(`[TransceiverController] Track replacement fallback succeeded for ${i} (deviceId fallback level: ${a}). New track: ${o.id}`)}getMediaDirections(){return this.peerConnection.connectionState==="connected"?this.peerConnection.getTransceivers().reduce((e,t)=>({...e,[t.receiver.track.kind]:t.direction}),{audio:"inactive",video:"inactive"}):{audio:this.audioDirection,video:this.videoDirection}}updatePeerConnection(e){this.peerConnection=e}updateOptions(e){this.options={...this.options,...e}}};const M=q();var jc=class extends Z{constructor(e={},t,i){super(),this.options=e,this.firstSDPExchangeCompleted=!1,this.negotiationNeeded$=this.createSubject(),this.localDescription$=Gt(()=>Se(this.init())).pipe(wt(()=>this.iceGatheringController.iceCandidatesState$.pipe(N(n=>!["new","gathering"].includes(n)),fe(()=>{this.negotiationEnded()}),N(()=>this.shouldEmitLocalDescription),S(()=>this.peerConnection?.localDescription),se(),fe(n=>{n.type==="answer"&&(this._type="offer")}))),Ge(1),v(this.destroyed$)),this.connectionTimeout=3e3,this.oniceconnectionstatechangeHandler=()=>{if(this.peerConnection){const{iceConnectionState:n}=this.peerConnection;M.debug(`[RTCPeerConnectionController] ICE connection state changed to: ${n}`),this._iceConnectionState$.next(this.peerConnection.iceConnectionState)}},this.onconnectionstatechangeHandler=()=>{if(this.peerConnection){const{connectionState:n}=this.peerConnection;M.debug(`[RTCPeerConnectionController] Connection state changed to: ${n}`),n==="connected"&&this.removeConnectionTimer(),this._connectionState$.next(this.peerConnection.connectionState)}},this.onsignalingstatechangeHandler=()=>{M.debug(`[RTCPeerConnectionController] Signaling state changed to: ${this.peerConnection?.signalingState}`)},this.onicegatheringstatechangeHandler=()=>{this.peerConnection&&this._iceGatheringState$.next(this.peerConnection.iceGatheringState)},this.onnegotiationneededHandler=n=>{M.debug("[RTCPeerConnectionController] Negotiation needed event received.",n),this.negotiationNeeded$.next()},this.updateSelectedInputDevice=async(n,s)=>{const{localStream:a}=this;if(!a){M.warn("[RTCPeerConnectionController] No local stream available to update input device.");return}const o=a.getTracks().find(l=>l.kind===n);if(!o){M.debug(`[RTCPeerConnectionController] No ${n} track to switch.`);return}if(!s){M.debug(`[RTCPeerConnectionController] ${n} input device selected: none`),this.stopTrackSender(n);return}const c={...o.getConstraints(),...this.deviceController.deviceInfoToConstraints(s)};try{const l=await this.acquireInputTrack(n,c,s,o);await this.attachInputTrack(n,l,o),M.debug(`[RTCPeerConnectionController] ${n} input device selected:`,s.label,l.id)}catch(l){M.error(`[RTCPeerConnectionController] Failed to select ${n} input device:`,l),this._errors$.next(new qe("updateSelectedInputDevice",n,l))}},this._isNegotiating$=this.createBehaviorSubject(!1),this._memberId=null,this._nodeId=null,this._iceConnectionState$=this.createReplaySubject(1),this._connectionState$=this.createReplaySubject(1),this._signalingState$=this.createReplaySubject(1),this._iceGatheringState$=this.createReplaySubject(1),this._errors$=this.createReplaySubject(1),this._iceCandidates$=this.createReplaySubject(1),this._localMediaSettled$=this.createReplaySubject(1),this._initialized$=this.createReplaySubject(1),this._remoteDescription$=this.createReplaySubject(1),this._remoteStream$=this.createBehaviorSubject(null),this._remoteOfferMediaDirections=null,this._localAudioPipeline=null,this.deviceController=i??{},this.id=e.callId??Nr(),this._type=t?"answer":"offer",this.sdpInit=t?{type:"offer",sdp:t}:void 0,this._remoteOfferMediaDirections=t?Rv(t):null;const r=this._remoteOfferMediaDirections?{audio:this._remoteOfferMediaDirections.audio.includes("recv"),video:this._remoteOfferMediaDirections.video.includes("recv"),receiveAudio:this._remoteOfferMediaDirections.audio.includes("send"),receiveVideo:this._remoteOfferMediaDirections.video.includes("send")}:{};this.options={...e,audio:e.audio??r.audio,video:e.video??r.video,receiveAudio:e.receiveAudio??r.receiveAudio??h.instance.receiveAudio,receiveVideo:e.receiveVideo??r.receiveVideo??h.instance.receiveVideo},this.localStreamController=new Vv({propose:this.propose,inputAudioStream:this.options.inputAudioStream,inputVideoStream:this.options.inputVideoStream,inputAudioDeviceConstraints:this.inputAudioDeviceConstraints,inputVideoDeviceConstraints:this.inputVideoDeviceConstraints,screenShareAudio:this.options.screenShareAudio,getUserMedia:async n=>this.getUserMedia(n),getDisplayMedia:async n=>this.getDisplayMedia(n)})}get iceGatheringController(){if(!this._iceGatheringController)throw new Y("ICEGatheringController is not initialized");return this._iceGatheringController}get shouldEmitLocalDescription(){if(!this.peerConnection)return!1;const{localDescription:e,signalingState:t}=this.peerConnection;return!e||!Hc(e.sdp)?!1:e.type==="offer"&&t==="have-local-offer"||e.type==="answer"&&t==="stable"}removeConnectionTimer(){this.connectionTimer&&(clearTimeout(this.connectionTimer),this.connectionTimer=void 0)}setMemberId(e){this._memberId=e}get memberId(){return this._memberId}setNodeId(e){this._nodeId=e}get nodeId(){return this._nodeId}stopTrackSender(e,t={updateTransceiverDirection:!1}){const i=e==="audio"||e==="both";i&&this._localAudioPipeline&&this.stopRawAudioInputForPipeline(),i?e==="both"?this.transceiverController?.stopTrackSender("video",t):this._localAudioPipeline||this.transceiverController?.stopTrackSender(e,t):this.transceiverController?.stopTrackSender(e,t)}stopRawAudioInputForPipeline(){const e=this.localStreamController.localAudioTracks;for(const t of e)t.readyState==="live"&&this.localStreamController.removeTrack(t.id);this._localAudioPipeline?.setInputTrack(null)}get isNegotiating$(){return this._isNegotiating$.asObservable()}get isNegotiating(){return this._isNegotiating$.value}updateMediaDevicesOptions(e){this.options={...this.options,...e}}get iceGatheringState$(){return this.cachedObservable("iceGatheringState$",()=>this._iceGatheringState$.asObservable().pipe(v(this.destroyed$)))}get mediaTrackEnded$(){return this.cachedObservable("mediaTrackEnded$",()=>this.localStreamController.mediaTrackEnded$.pipe(v(this.destroyed$)))}get errors$(){return this.cachedObservable("errors$",()=>this._errors$.asObservable().pipe(v(this.destroyed$)))}get iceCandidates$(){return this.cachedObservable("iceCandidates$",()=>this._iceCandidates$.asObservable().pipe(v(this.destroyed$)))}get initialized$(){return this.cachedObservable("initialized$",()=>this._initialized$.asObservable().pipe(N(e=>e),v(this.destroyed$)))}get remoteDescription$(){return this.cachedObservable("remoteDescription$",()=>this._remoteDescription$.asObservable().pipe(v(this.destroyed$)))}get localMediaSettled$(){return this.cachedObservable("localMediaSettled$",()=>this._localMediaSettled$.asObservable().pipe(v(this.destroyed$)))}get localStream$(){return this.cachedObservable("localStream$",()=>this.localStreamController.localStream$.pipe(v(this.destroyed$)))}get remoteStream$(){return this.cachedObservable("remoteStream$",()=>this._remoteStream$.asObservable().pipe(v(this.destroyed$)))}get localAudioTracks$(){return this.cachedObservable("localAudioTracks$",()=>this.localStreamController.localAudioTracks$.pipe(v(this.destroyed$)))}get localVideoTracks$(){return this.cachedObservable("localVideoTracks$",()=>this.localStreamController.localVideoTracks$.pipe(v(this.destroyed$)))}get iceConnectionState$(){return this.cachedObservable("iceConnectionState$",()=>this._iceConnectionState$.asObservable().pipe(v(this.destroyed$)))}get connectionState$(){return this.cachedObservable("connectionState$",()=>this._connectionState$.asObservable().pipe(v(this.destroyed$)))}get signalingState$(){return this.cachedObservable("signalingState$",()=>this._signalingState$.asObservable().pipe(v(this.destroyed$)))}get type(){return this._type}get propose(){return this.options.propose??"main"}get connectionState(){return this.peerConnection?.connectionState}get isAdditionalDevice(){return this.propose==="additional-device"}get isMainDevice(){return this.propose==="main"}get isScreenShare(){return this.propose==="screenshare"}get iceServers(){if(!this.options.disableUdpIceServers)return this.options.iceServers??[];const e="transport=tcp";return(this.options.iceServers??[]).map(t=>{const i=Array.isArray(t.urls)?t.urls:[t.urls];return{...t,urls:i.filter(r=>r.includes(e))}})}get rtcConfiguration(){const{iceServers:e,...t}=this.options;return{bundlePolicy:"max-compat",iceCandidatePoolSize:10,iceServers:this.iceServers,iceTransportPolicy:this.options.relayOnly?"relay":"all",sdpSemantics:"unified-plan",...t}}get receiveVideo(){return!!this.options.receiveVideo}get receiveAudio(){return!!this.options.receiveAudio}get localStream(){return this.localStreamController.localStream}get remoteStream(){return this._remoteStream$.value}get inputAudioDeviceConstraints(){if(this.options.audio===!1&&!this.options.inputAudioDeviceConstraints)return!1;const e=this.deviceController.selectedAudioInputDeviceConstraints;return e===!1?!1:{...typeof this.options.inputAudioDeviceConstraints=="object"?this.options.inputAudioDeviceConstraints:{},...typeof e=="object"?e:{}}}get inputVideoDeviceConstraints(){if(!this.options.video&&!this.options.inputVideoDeviceConstraints)return!1;const e=this.deviceController.selectedVideoInputDeviceConstraints;return e===!1?!1:{...typeof this.options.inputVideoDeviceConstraints=="object"?this.options.inputVideoDeviceConstraints:{},...typeof e=="object"?e:{}}}get WebRTCPeerConnectionConstructor(){return this.options.webRTCApiProvider?.RTCPeerConnection??RTCPeerConnection}get offerOptions(){const e={iceRestart:this.firstSDPExchangeCompleted?!0:void 0};switch(this.propose){case"screenshare":case"additional-device":return{...e,offerToReceiveAudio:!1,offerToReceiveVideo:!1};case"main":default:return{...e,offerToReceiveAudio:this.options.receiveAudio??!0,offerToReceiveVideo:this.options.receiveVideo??!!this.inputVideoDeviceConstraints}}}get answerOptions(){return{iceRestart:this.firstSDPExchangeCompleted?!0:void 0}}async init(){return this.initPromise??(this.initPromise=this.doInit()),this.initPromise}async doInit(){try{if(this.setupPeerConnection(),this.subscribeTo(this.negotiationNeeded$.pipe(Tp(0),qn(async()=>this.startNegotiation())),{next:()=>{M.debug("[RTCPeerConnectionController] Start Negotiation completed successfully")},error:e=>{M.error("[RTCPeerConnectionController] Start Negotiation error:",e),this._errors$.next(ze(e))}}),this.subscribeTo(yt(this.deviceController.selectedAudioInputDevice$.pipe(S(e=>["audio",e])),this.deviceController.selectedVideoInputDevice$.pipe(S(e=>["video",e]))).pipe(Ip(()=>!this.localStreamController.localStream)),async([e,t])=>{M.debug("[RTCPeerConnectionController] Selected input device changed for:",{kind:e,deviceInfo:t}),await this.updateSelectedInputDevice(e,t)}),this.type==="answer"&&this.sdpInit)await this.setupRemoteTracks(),this._initialized$.next(!0),this.setupEventListeners(),this._isNegotiating$.next(!0),await this._setRemoteDescription(this.sdpInit);else{if(!await this.setupTrackHandling())return;this._initialized$.next(!0)}}catch(e){M.error("[RTCPeerConnectionController] Initialization error:",e),this._errors$.next(ze(e)),this.destroy()}}setupPeerConnection(){this.peerConnection=new this.WebRTCPeerConnectionConstructor(this.rtcConfiguration),this.peerConnection.addEventListener("negotiationneeded",this.onnegotiationneededHandler),this._iceGatheringController=new Fv(this.peerConnection,this.isNegotiating$,{iceCandidateTimeout:this.options.iceCandidateTimeout,iceGatheringTimeout:this.options.iceGatheringTimeout,relayOnly:this.options.relayOnly}),this.transceiverController=new Bv({peerConnection:this.peerConnection,propose:this.propose,simulcast:this.options.simulcast,sfu:this.options.sfu,msStreamsNumber:this.options.msStreamsNumber,receiveAudio:this.receiveAudio,receiveVideo:this.receiveVideo,localStreamController:this.localStreamController,getInputAudioDeviceConstraints:()=>this.inputAudioDeviceConstraints,getInputVideoDeviceConstraints:()=>this.inputVideoDeviceConstraints,getUserMedia:async e=>this.getUserMedia(e),onError:e=>{this._errors$.next(e)}})}async startNegotiation(){if(this.isNegotiating){M.debug("[RTCPeerConnectionController] Negotiation already in progress, skipping.");return}if(this.setupEventListeners(),this.type==="answer"){M.debug("[RTCPeerConnectionController] This is an answer type still, skipping offer creation.");return}this._isNegotiating$.next(!0),M.debug("[RTCPeerConnectionController] Starting negotiation.");try{const{offerOptions:e}=this;M.debug("[RTCPeerConnectionController] Creating offer with options:",e),await this.createOffer(e)}catch(e){M.error("[RTCPeerConnectionController] Error during negotiation:",e),this._errors$.next(ze(e))}}async createOffer(e){if(!this.peerConnection)throw new Y("RTCPeerConnection is not initialized");const t=await this.peerConnection.createOffer(e);await this.setLocalDescription(t)}async updateAnswerStatus({status:e,sdp:t}){let i=e!=="failed";try{e==="received"&&t&&(M.debug("[RTCPeerConnectionController] Received answer SDP:",t),await this._setRemoteDescription({type:"answer",sdp:t}))}catch(r){M.error("[RTCPeerConnectionController] Error updating answer status:",r),this._errors$.next(ze(r)),i=!1}finally{i?this.readyToConnect():this.iceGatheringController.restartICEGatheringWithRelayOnly()}}async updateOfferStatus({status:e,sdp:t}){switch(e){case"received":this._type="answer",this.sdpInit={type:"offer",sdp:t},await this.handleOfferReceived();break;case"failed":M.error("[RTCPeerConnectionController] Offer failed to be processed by remote.");break}}async acceptInbound(e){if(e){const{audio:i,video:r,receiveAudio:n,receiveVideo:s,fallbackToReceiveOnly:a}=e;this.options={...this.options,...i!==void 0?{audio:i}:{},...r!==void 0?{video:r}:{},...n!==void 0?{receiveAudio:n}:{},...s!==void 0?{receiveVideo:s}:{},...a!==void 0?{fallbackToReceiveOnly:a}:{}},this.transceiverController?.updateOptions({receiveAudio:this.receiveAudio,receiveVideo:this.receiveVideo}),this.localStreamController.updateOptions({inputAudioDeviceConstraints:this.inputAudioDeviceConstraints,inputVideoDeviceConstraints:this.inputVideoDeviceConstraints})}if(!await this.setupLocalTracks()){M.debug("[RTCPeerConnectionController] Inbound answer abandoned; the connection went away.");return}const{answerOptions:t}=this;M.debug("[RTCPeerConnectionController] Creating inbound answer with options:",t),await this.createAnswer(t)}async handleOfferReceived(){if(!this.sdpInit)throw new Y("SDP initialization parameters are not set");this._isNegotiating$.next(!0),await this._setRemoteDescription(this.sdpInit);const{answerOptions:e}=this;M.debug("[RTCPeerConnectionController] Creating answer with options:",e),await this.createAnswer(e)}readyToConnect(){this.firstSDPExchangeCompleted=!0,this.connectionTimer=setTimeout(()=>{this.removeConnectionTimer(),this.peerConnection?.connectionState!=="connected"&&(M.debug("[RTCPeerConnectionController] Connection timeout, restarting ICE gathering with relay only."),this.iceGatheringController.restartICEGatheringWithRelayOnly())},this.connectionTimeout)}async setRemoteDescriptionBefore(e=""){return Promise.resolve(e)}async setLocalDescription(e){const t=await this.setLocalDescriptionBefore(e.sdp);return this.peerConnection?.setLocalDescription({...e,sdp:t})}async setLocalDescriptionBefore(e=""){let t=e;const i=this.options.preferredAudioCodecs??h.instance.preferredAudioCodecs,r=this.options.preferredVideoCodecs??h.instance.preferredVideoCodecs,n=this.options.stereo??h.instance.stereoAudio;return(i.length>0||r.length>0)&&(t=Ov(t,i,r),M.debug("[RTCPeerConnectionController] Applied codec preferences to SDP",{preferredAudioCodecs:i,preferredVideoCodecs:r})),n&&(t=Dv(t),M.debug("[RTCPeerConnectionController] Applied stereo Opus to SDP")),Promise.resolve(t)}async createAnswer(e){if(!this.peerConnection)throw new Y("RTCPeerConnection is not initialized");const t=await this.peerConnection.createAnswer(e);await this.setLocalDescription(t)}setupEventListeners(){if(!this.peerConnection)throw new Y("RTCPeerConnection is not initialized");this._iceConnectionState$.next(this.peerConnection.iceConnectionState),this._connectionState$.next(this.peerConnection.connectionState),this._signalingState$.next(this.peerConnection.signalingState),this._iceGatheringState$.next(this.peerConnection.iceGatheringState),this._remoteDescription$.next(this.peerConnection.remoteDescription),this.peerConnection.removeEventListener("icegatheringstatechange",this.onicegatheringstatechangeHandler),this.peerConnection.addEventListener("icegatheringstatechange",this.onicegatheringstatechangeHandler),this.peerConnection.removeEventListener("iceconnectionstatechange",this.oniceconnectionstatechangeHandler),this.peerConnection.addEventListener("iceconnectionstatechange",this.oniceconnectionstatechangeHandler),this.peerConnection.removeEventListener("connectionstatechange",this.onconnectionstatechangeHandler),this.peerConnection.addEventListener("connectionstatechange",this.onconnectionstatechangeHandler),this.peerConnection.removeEventListener("signalingstatechange",this.onsignalingstatechangeHandler),this.peerConnection.addEventListener("signalingstatechange",this.onsignalingstatechangeHandler)}negotiationEnded(){this._isNegotiating$.next(!1)}async triggerIceRestart(e){if(!this.peerConnection)throw new Y("RTCPeerConnection is not initialized");const t=e&&!this.options.relayOnly;if(t)try{this.peerConnection.setConfiguration({...this.peerConnection.getConfiguration(),iceTransportPolicy:"relay"}),M.debug("[RTCPeerConnectionController] ICE transport policy set to relay-only")}catch(i){M.warn("[RTCPeerConnectionController] Failed to set relay-only policy:",i)}this.setupEventListeners(),this._isNegotiating$.next(!0),M.debug(`[RTCPeerConnectionController] Triggering ICE restart${e?" (relay-only)":""}.`);try{const i=await this.peerConnection.createOffer({iceRestart:!0});await this.setLocalDescription(i)}catch(i){throw M.error("[RTCPeerConnectionController] ICE restart offer failed:",i),this._errors$.next(ze(i)),this.negotiationEnded(),t&&this.restoreIceTransportPolicy(),i}t&&Fe($r(this._iceGatheringState$.pipe(N(i=>i==="complete"),ye(1)),pi(bf).pipe(S(()=>"timeout")))).then(()=>this.restoreIceTransportPolicy()).catch(i=>{M.warn("[RTCPeerConnectionController] Error waiting for ICE gathering to complete:",i),this.restoreIceTransportPolicy()})}restoreIceTransportPolicy(){try{this.peerConnection?.setConfiguration({...this.peerConnection.getConfiguration(),iceTransportPolicy:this.options.relayOnly?"relay":"all"}),M.debug("[RTCPeerConnectionController] ICE transport policy restored")}catch(e){M.warn("[RTCPeerConnectionController] Failed to restore ICE transport policy:",e)}}async setupTrackHandling(){if(!this.peerConnection)throw new Y("RTCPeerConnection is not initialized");return await this.setupLocalTracks()?(await this.setupRemoteTracks(),!0):!1}async setupLocalTracks(){if(M.debug("[RTCPeerConnectionController] Setting up local tracks/transceivers."),this.hasNoLocalMediaToSend()){if(!this.receiveAudio&&!this.receiveVideo)throw new Mr("Call requests no media: enable audio/video or receiveAudio/receiveVideo");return M.debug("[RTCPeerConnectionController] No local media requested; negotiating receive-only."),this.setupReceiveOnlyTransceivers(),this._localMediaSettled$.next(),!0}let e;try{e=this.localStream??await this.localStreamController.buildLocalStream()}catch(t){return this.handleLocalMediaFailure(t),this._localMediaSettled$.next(),!0}if(!this.peerConnection||this.peerConnection.signalingState==="closed")return M.debug("[RTCPeerConnectionController] Local media arrived after teardown; releasing it."),e.getTracks().forEach(t=>t.stop()),!1;if(this._localMediaSettled$.next(),this.transceiverController?.useAddStream??!1)return M.warn("[RTCPeerConnectionController] Using deprecated addStream API to add local stream."),this.peerConnection.addStream(e),this.isNegotiating||(M.debug("[RTCPeerConnectionController] Forcing negotiationneeded after local tracks setup."),this.negotiationNeeded$.next()),!0;for(const t of["audio","video"]){const i=(t==="audio"?e.getAudioTracks():e.getVideoTracks()).map((r,n)=>({index:n,track:r}));for(const{index:r,track:n}of i)if(this.localStreamController.addTrackEndedListener(n),this.transceiverController?.useAddTransceivers??!1){const s=(t==="audio"?this.transceiverController?.audioTransceivers:this.transceiverController?.videoTransceivers)??[];await this.transceiverController?.setupTransceiverSender(n,e,s[r])}else M.debug(`[RTCPeerConnectionController] Using addTrack for local ${t} track:`,n.id),this.peerConnection.addTrack(n,e)}return!0}hasNoLocalMediaToSend(){const e=!!(this.options.inputAudioStream??this.options.inputVideoStream);return this.propose==="main"&&!this.localStream&&!e&&!this.inputAudioDeviceConstraints&&!this.inputVideoDeviceConstraints}get requestedMediaKinds(){const e=!!this.inputAudioDeviceConstraints,t=!!this.inputVideoDeviceConstraints;return e&&t?"audiovideo":t?"video":"audio"}handleLocalMediaFailure(e){if(this.propose==="screenshare")throw new Dt("startScreenShare","screen",e,!1);if(this.propose==="additional-device")throw new Dt("addInputDevice",this.requestedMediaKinds,e,!1);const t=this.receiveAudio||this.receiveVideo;if(!((this.options.fallbackToReceiveOnly??!0)&&t))throw new Dt("acquireLocalMedia",this.requestedMediaKinds,e,!0);M.warn("[RTCPeerConnectionController] Local media unavailable; continuing receive-only:",e),this._errors$.next(new Dt("acquireLocalMedia",this.requestedMediaKinds,e,!1)),this.setupReceiveOnlyTransceivers()}setupReceiveOnlyTransceivers(){this.type==="offer"&&((this.transceiverController?.useAddTransceivers??!1)&&(this.peerConnection?.addTransceiver("audio",{direction:this.receiveAudio?"recvonly":"inactive"}),this.peerConnection?.addTransceiver("video",{direction:this.receiveVideo?"recvonly":"inactive"})),this.isNegotiating||this.negotiationNeeded$.next())}async getUserMedia(e){return(this.options.webRTCApiProvider?.mediaDevices??navigator.mediaDevices).getUserMedia(e)}async getDisplayMedia(e){const t=this.options.webRTCApiProvider?.mediaDevices??navigator.mediaDevices;if(!t.getDisplayMedia)throw new Y("getDisplayMedia is not supported by the current WebRTC provider");return t.getDisplayMedia(e)}async setupRemoteTracks(){if(!this.peerConnection)throw new Y("RTCPeerConnection is not initialized");this.peerConnection.ontrack=e=>{if(M.debug("[RTCPeerConnectionController] Remote track received:",e.track.kind),e.streams[0])this._remoteStream$.next(e.streams[0]);else{const t=this._remoteStream$.value?.getTracks()??[],i=new MediaStream([...t,e.track]);this._remoteStream$.next(i)}},await this.transceiverController?.setupRemoteTransceivers(this.type)}async restoreTrackSender(e){const t=e==="audio"||e==="both";t&&this._localAudioPipeline&&await this.restoreRawAudioInputForPipeline(),t?e==="both"?await this.transceiverController?.restoreTrackSender("video"):this._localAudioPipeline||await this.transceiverController?.restoreTrackSender(e):await this.transceiverController?.restoreTrackSender(e)}async restoreRawAudioInputForPipeline(){if(!this._localAudioPipeline)return;const e=this.transceiverController?.getConstraintsFor("audio")??{};let t;try{t=await this.getUserMedia({audio:e})}catch(r){M.error("[RTCPeerConnectionController] Failed to re-acquire mic for pipeline restore:",r),this._errors$.next(new qe("restoreAudioPipelineInput","audio",r));return}const i=t.getAudioTracks().at(0);i&&(this.localStreamController.addTrack(i),this._localAudioPipeline.setInputTrack(i))}async acquireInputTrack(e,t,i,r){try{return await this.captureTrack(e,t,i.deviceId)}catch(n){if(!Xf(n))throw n;M.warn(`[RTCPeerConnectionController] ${e} device is held exclusively; releasing the current capture to retry:`,n);const s=r.getSettings().deviceId;this.stopTrackSender(e);try{return await this.captureTrack(e,t,i.deviceId)}catch(a){throw await this.restorePreviousInputTrack(e,t,s,r),a}}}async captureTrack(e,t,i){const{stream:r,fallbackLevel:n}=await ds({getUserMedia:async a=>this.getUserMedia(a)},{[e]:t},e,i),s=r.getTracks().find(a=>a.kind===e);if(!s)throw r.getTracks().forEach(a=>a.stop()),new qe("updateSelectedInputDevice",e,new Error("getUserMedia returned no track of the requested kind"));return n!=="exact"&&M.warn(`[RTCPeerConnectionController] ${e} device acquired at fallback level '${n}'; the capture may not be the requested device.`),s}async restorePreviousInputTrack(e,t,i,r){try{const n=await this.captureTrack(e,t,i);await this.attachInputTrack(e,n,r)}catch(n){M.error(`[RTCPeerConnectionController] Failed to restore the previous ${e} device:`,n)}}async attachInputTrack(e,t,i){const r=e==="audio"&&this._localAudioPipeline;if(!r)try{await this.transceiverController?.replaceSenderTrack(e,t)}catch(n){throw t.stop(),n}this.localStreamController.removeTrack(i.id),this.localStreamController.addTrack(t),r&&this._localAudioPipeline?.setInputTrack(t)}ensureLocalAudioPipeline(){if(this._localAudioPipeline)return this._localAudioPipeline;if(!this.peerConnection)return null;try{this._localAudioPipeline=new Uv}catch(e){return M.warn("[RTCPeerConnectionController] Failed to create LocalAudioPipeline:",e),null}return this.subscribeTo(this.localStreamController.localAudioTracks$,()=>{this.applyLocalAudioPipelineToSender()}),this.applyLocalAudioPipelineToSender(),this._localAudioPipeline}get localAudioPipeline(){return this._localAudioPipeline}async applyLocalAudioPipelineToSender(){if(!this._localAudioPipeline||!this.peerConnection)return;const e=this.localStreamController.localAudioTracks.at(0);this._localAudioPipeline.setInputTrack(e??null);const t=this.transceiverController?.audioTransceivers.at(0)?.sender??this.peerConnection.getSenders().find(i=>i.track?.kind==="audio");if(!(!t||!e))try{this.localStreamController.setTrackOrigin(this._localAudioPipeline.outputTrack,"processed"),await t.replaceTrack(this._localAudioPipeline.outputTrack)}catch(i){M.warn("[RTCPeerConnectionController] Failed to route audio sender through pipeline:",i)}}addLocalTrack(e){if(!this.peerConnection){const t=new Y("RTCPeerConnection is not initialized");throw this._errors$.next(t),t}try{const t=this.localStreamController.addTrack(e);this.peerConnection.addTrack(e,t),M.debug(`[RTCPeerConnectionController] ${e.kind} track added:`,e.id)}catch(t){throw M.error(`[RTCPeerConnectionController] Failed to add ${e.kind} track:`,t),this._errors$.next(new qe("addLocalTrack",e.kind,t)),t}}removeLocalTrack(e){if(!this.peerConnection){const i=new Y("RTCPeerConnection is not initialized");throw this._errors$.next(i),i}const t=this.peerConnection.getSenders().find(i=>i.track?.id===e);if(!t){M.debug(`[RTCPeerConnectionController] track not found: ${e}`);return}try{this.peerConnection.removeTrack(t),this.localStreamController.removeTrack(e),M.debug(`[RTCPeerConnectionController] ${t.track?.kind} track removed:`,e)}catch(i){throw M.error(`[RTCPeerConnectionController] Failed to remove ${t.track?.kind} track:`,i),this._errors$.next(new qe("removeLocalTrack",t.track?.kind??"unknown",i)),i}}setLocalTrack(e){const t=[...e.kind==="audio"?this.localStreamController.localAudioTracks:this.localStreamController.localVideoTracks];for(const i of t)this.removeLocalTrack(i.id);this.addLocalTrack(e)}async updateSendersConstraints(e,t){return e==="audio"&&this._localAudioPipeline?t?this.applyPipelineSourceConstraints(t):(this.stopTrackSender("audio"),!1):await this.transceiverController?.updateSendersConstraints(e,t)??!1}async applyPipelineSourceConstraints(e){const t=this._localAudioPipeline,i=this.localStreamController.localAudioTracks.at(0);if(!t||!i)return M.debug("[RTCPeerConnectionController] No pipeline input to constrain."),!1;if(!this.localStreamController.isDeviceCapture(i))return M.debug(`[RTCPeerConnectionController] Skipping audio constraints for a non-device pipeline input (origin: ${this.localStreamController.getTrackOrigin(i)??"unrecorded"}).`),!1;const r={...i.getConstraints(),...e};try{return await i.applyConstraints(r),M.debug("[RTCPeerConnectionController] Pipeline input constraints updated:",r),!0}catch(n){M.warn("[RTCPeerConnectionController] applyConstraints failed on the pipeline input, re-acquiring:",n)}try{const{stream:n}=await ds({getUserMedia:async a=>this.getUserMedia(a)},{audio:r},"audio",i.getSettings().deviceId),s=n.getAudioTracks().at(0);if(!s)throw n.getTracks().forEach(a=>a.stop()),new Error("getUserMedia returned no audio track");return this.localStreamController.removeTrack(i.id),this.localStreamController.addTrack(s),t.setInputTrack(s),!0}catch(n){return M.warn("[RTCPeerConnectionController] Failed to re-acquire the pipeline input for constraints:",n),this._errors$.next(new qe("updateSendersConstraints","audio",n)),!1}}destroy(){M.debug(`[RTCPeerConnectionController] Destroying RTCPeerConnectionController. ${this.propose}`),this.removeConnectionTimer(),this._iceGatheringController?.destroy(),this._localAudioPipeline?.destroy(),this._localAudioPipeline=null,this.localStreamController.destroy(),this.transceiverController?.destroy(),this.peerConnection&&(this.stopRemoteTracks(),this.removeAllListeners(),this.peerConnection.close(),this.peerConnection=void 0),super.destroy()}removeAllListeners(){this.peerConnection&&(this.peerConnection.removeEventListener("icegatheringstatechange",this.onicegatheringstatechangeHandler),this.peerConnection.removeEventListener("iceconnectionstatechange",this.oniceconnectionstatechangeHandler),this.peerConnection.removeEventListener("connectionstatechange",this.onconnectionstatechangeHandler),this.peerConnection.removeEventListener("signalingstatechange",this.onsignalingstatechangeHandler),this.peerConnection.removeEventListener("negotiationneeded",this.onnegotiationneededHandler))}stopRemoteTracks(){this._remoteStream$.value?.getTracks().forEach(e=>{M.debug(`[RTCPeerConnectionController] Stopping remote track: ${e.kind}`),e.stop()})}get mediaDirections(){return this.transceiverController?.getMediaDirections()??this._remoteOfferMediaDirections??{audio:"inactive",video:"inactive"}}async _setRemoteDescription(e){if(!this.peerConnection)throw new Y("RTCPeerConnection is not initialized");const t=await this.setRemoteDescriptionBefore(e.sdp),i={...e,sdp:t};return M.debug("[RTCPeerConnectionController] Setting remote description:",i),this.peerConnection.setRemoteDescription(i)}};function hs(e){return ge(e)&&B(e,"jsonrpc")&&e.jsonrpc==="2.0"&&B(e,"id")}function Gc(e){if(!hs(e))return!1;const t=e;return t.method==="verto.invite"&&ge(t.params)&&B(t.params,"sdp")&&B(t.params,"callID")}function Hv(e){return hs(e)?e.method==="verto.bye":!1}function qc(e){return hs(e)?e.method==="verto.attach":!1}function zv(e){return ge(e)&&B(e,"jsonrpc")&&e.jsonrpc==="2.0"&&B(e,"method")&&e.method==="verto.answer"&&ge(e.params)&&B(e.params,"callID")}function Wv(e){return ge(e)&&B(e,"jsonrpc")&&e.jsonrpc==="2.0"&&B(e,"method")&&e.method==="verto.media"&&ge(e.params)&&B(e.params,"callID")&&B(e.params,"sdp")}function jv(e){return ge(e)&&B(e,"jsonrpc")&&e.jsonrpc==="2.0"&&B(e,"method")&&e.method==="verto.mediaParams"&&ge(e.params)&&B(e.params,"mediaParams")}function Gv(e){return ge(e)&&B(e,"jsonrpc")&&e.jsonrpc==="2.0"&&B(e,"method")&&e.method==="verto.ping"}function Kc(e){return ge(e)&&B(e,"callID")&&typeof e.callID=="string"}const F=q();function qv(e){return e.isInvite&&!e.reattach&&!e.explicitNodeId?"":e.currentNodeId??""}function Kv(e){let t=e;for(;t!==null&&typeof t=="object";){const i=t,r=i.error;if(r!==null&&typeof r=="object"){const s=r,a=typeof s.code=="string"||typeof s.code=="number"?String(s.code):void 0;if(a!==void 0&&!/^2\d\d$/.test(a))return{code:a,message:typeof s.message=="string"?s.message:void 0}}const n=typeof i.code=="string"||typeof i.code=="number"?String(i.code):void 0;if(n!==void 0&&!/^2\d\d$/.test(n))return{code:n,message:typeof i.message=="string"?i.message:void 0};t=i.result!==null&&typeof i.result=="object"?i.result:null}return null}var Yv=class extends Z{constructor(e){super(),this.callSession=e}destroy(){this.callSession=void 0,super.destroy()}},Xv=class extends Yv{constructor(e,t,i,r,n={}){super(e),this.webRtcCallSession=e,this.attachManager=t,this.deviceController=i,this.webRTCApiProvider=r,this._rtcPeerConnections$=this.createBehaviorSubject([]),this._selfId$=this.createBehaviorSubject(null),this._signalingStatus$=this.createReplaySubject(1),this._screenShareStatus$=this.createBehaviorSubject("none"),this._rtcPeerConnectionsMap=new Map,this._legErrors$=this.createSubject(),this._nodeId$=this.createBehaviorSubject(n.nodeId??null),this.onError=n.onError,this.onModifyFailed=n.onModifyFailed,this.initSubscriptions(),this.initMainPeerConnection()}async hold(){const e=Hr({sessid:this.webRtcCallSession.id,dialogParams:{callID:this.webRtcCallSession.id},action:"hold"});try{await this.executeVerto(e)}catch(t){throw F.warn("[WebRTCManager] Call might already be disconnected, error sending Verto hold:",t),t}}async unhold(){const e=Hr({sessid:this.webRtcCallSession.id,dialogParams:{callID:this.webRtcCallSession.id},action:"unhold"});try{await this.executeVerto(e)}catch(t){throw F.warn("[WebRTCManager] Call might already be disconnected, error sending Verto unhold:",t),t}}get mediaDirections(){return this.mainPeerConnection.mediaDirections}get rtcPeerConnections$(){return this._rtcPeerConnections$.asObservable()}get rtcPeerConnections(){return this._rtcPeerConnections$.value}get nodeId$(){return this._nodeId$.asObservable()}get selfId$(){return this._selfId$.asObservable()}get localMediaSettled$(){return this.mainPeerConnection.localMediaSettled$}get localStream(){return this._rtcPeerConnectionsMap.get(this.webRtcCallSession.id)?.localStream??null}get remoteStream(){return this._rtcPeerConnectionsMap.get(this.webRtcCallSession.id)?.remoteStream??null}get nodeId(){return this._nodeId$.value}get screenShareStatus(){return this._screenShareStatus$.value}get screenShareStatus$(){return this._screenShareStatus$.asObservable()}get mainPeerConnection(){const e=this._rtcPeerConnectionsMap.get(this.webRtcCallSession.id);if(!e)throw new Y("Main peer connection not found");return e}get signalingStatus$(){return this.cachedObservable("signalingStatus$",()=>yt(this._signalingStatus$.asObservable(),this.mainPeerConnection.connectionState$.pipe(N(e=>["connected","disconnected","failed"].includes(e)))))}initSubscriptions(){this.subscribeTo(this.callJoinedEvent$,e=>{const t=e.room_session.members.find(i=>i.call_id===e.call_id)?.node_id;t&&this.setNodeIdIfNull(t),e.member_id&&this.setSelfIdIfNull(e.member_id)}),this.subscribeTo(this.vertoMedia$,e=>{F.debug("[WebRTCManager] Received Verto media event (early media SDP):",e);const{sdp:t,callID:i}=e;this.emitMainSignalingStatus(i,"ringing"),this._rtcPeerConnectionsMap.get(i)?.updateAnswerStatus({status:"received",sdp:t})}),this.subscribeTo(this.vertoAnswer$,e=>{F.debug("[WebRTCManager] Received Verto answer event:",e);const{sdp:t,callID:i}=e;this.emitMainSignalingStatus(i,"connecting"),this._rtcPeerConnectionsMap.get(i)?.updateAnswerStatus({status:"received",sdp:t})}),this.subscribeTo(this.vertoMediaParams$,e=>{F.debug("[WebRTCManager] Received Verto mediaParams event:",e);const{mediaParams:t,callID:i}=e,r=this._rtcPeerConnectionsMap.get(i),{audio:n,video:s}=t;if(!r){F.warn(`[WebRTCManager] Ignoring server-pushed media params for unknown leg ${i}`);return}this.applyServerMediaParams(r,n,s)}),this.subscribeTo(this.vertoPing$,e=>{this.attachManager.refresh(this.buildAttachableCall()),this.sendVertoPong(e)})}reportLegError(e,t,i){const r=t?.propose,n=t?.id,s=!!t&&!t?.isMainDevice;this.onError?.(e,{...i?.fatal===!1||s?{fatal:!1}:{},...r?{leg:r}:{},...n?{legId:n}:{}}),n&&this._legErrors$.next({legId:n,error:e})}legError$(e){return this._legErrors$.pipe(N(t=>t.legId===e),S(t=>{throw t.error}))}async applyServerMediaParams(e,t,i){const r=[];let n=!0;if(t)try{n=await e.updateSendersConstraints("audio",t)&&n}catch(s){n=!1,r.push(ze(s))}if(i)try{n=await e.updateSendersConstraints("video",i)&&n}catch(s){n=!1,r.push(ze(s))}this.webRtcCallSession.emitMediaParamsUpdated({audio:t,video:i,timestamp:Date.now(),applied:n});for(const s of r)F.warn("[WebRTCManager] Error applying server-pushed media params:",s),this.reportLegError(s,e,{fatal:!1})}setNodeIdIfNull(e){!this._nodeId$.value&&e&&(F.debug(`[WebRTCManager] Early node_id set: ${e}`),this._nodeId$.next(e))}setSelfIdIfNull(e){!this._selfId$.value&&e&&(F.debug(`[WebRTCManager] Early selfId set: ${e}`),this._selfId$.next(e))}async sendVertoPong(e){try{const t=cv({...e});await this.executeVerto(t)}catch(t){F.warn("[WebRTCManager] Call might disconnect, error sending Verto pong:",t),this.onError?.(new Zo(t))}}async updateMediaConstraints(e={}){const{audio:t,video:i}=e;let r=!0;try{t&&(r=await this.mainPeerConnection.updateSendersConstraints("audio",t)&&r),i&&(r=await this.mainPeerConnection.updateSendersConstraints("video",i)&&r)}catch(n){throw F.warn("[WebRTCManager] Error updating media constraints:",n),this.reportLegError(ze(n),this.mainPeerConnection),n}return r}get selfId(){return this._selfId$.value}buildAttachableCall(e,t){return{nodeId:t??this.nodeId??void 0,id:e??this.webRtcCallSession.id,to:this.webRtcCallSession.to,mediaDirections:this.webRtcCallSession.mediaDirections}}requestKeyframe(){try{const e=this.mainPeerConnection.peerConnection;if(!e){F.warn("[WebRTCManager] No peer connection for keyframe request");return}const t=e.getReceivers().find(i=>i.track.kind==="video");if(!t){F.warn("[WebRTCManager] No video receiver for keyframe request");return}typeof t.requestKeyFrame=="function"?(t.requestKeyFrame(),F.debug("[WebRTCManager] Keyframe requested via RTCRtpReceiver.requestKeyFrame()")):F.debug("[WebRTCManager] requestKeyFrame() not supported, skipping")}catch(e){F.warn("[WebRTCManager] Keyframe request failed (non-fatal):",e)}}async requestIceRestart(e){try{const t=this.mainPeerConnection;if(!t.peerConnection){F.warn("[WebRTCManager] No peer connection for ICE restart");return}await t.triggerIceRestart(e),F.info(`[WebRTCManager] ICE restart initiated${e?" (relay-only)":""}`)}catch(t){throw F.error("[WebRTCManager] ICE restart failed:",t),t}}async requestIceRestartAll(e){const t=Array.from(this._rtcPeerConnectionsMap.entries());for(const[i,r]of t)try{if(!r.peerConnection){F.debug(`[WebRTCManager] No peer connection for leg ${i}, skipping ICE restart`);continue}await r.triggerIceRestart(e),F.info(`[WebRTCManager] ICE restart initiated for leg ${i}${e?" (relay-only)":""}`)}catch(n){F.warn(`[WebRTCManager] ICE restart failed for leg ${i}:`,n)}}requestKeyframeAll(){for(const[e,t]of this._rtcPeerConnectionsMap){if(t.isScreenShare){F.debug(`[WebRTCManager] Skipping keyframe for send-only screen share leg ${e}`);continue}try{const i=t.peerConnection;if(!i)continue;const r=i.getReceivers().find(n=>n.track.kind==="video");if(!r)continue;typeof r.requestKeyFrame=="function"&&(r.requestKeyFrame(),F.debug(`[WebRTCManager] Keyframe requested for leg ${e}`))}catch(i){F.warn(`[WebRTCManager] Keyframe request failed for leg ${e} (non-fatal):`,i)}}}get callJoinedEvent$(){return this.webRtcCallSession.callEvent$.pipe(N(Vc),v(this.destroyed$))}get vertoMedia$(){return this.webRtcCallSession.webrtcMessages$.pipe(ue(Wv,"params"),v(this.destroyed$))}get vertoAnswer$(){return this.cachedObservable("vertoAnswer$",()=>this.webRtcCallSession.webrtcMessages$.pipe(ue(zv,"params"),v(this.destroyed$)))}get vertoMediaParams$(){return this.cachedObservable("vertoMediaParams$",()=>this.webRtcCallSession.webrtcMessages$.pipe(ue(jv,"params"),v(this.destroyed$)))}get vertoBye$(){return this.cachedObservable("vertoBye$",()=>this.webRtcCallSession.webrtcMessages$.pipe(ue(Hv,"params"),v(this.destroyed$)))}get vertoAttach$(){return this.cachedObservable("vertoAttach$",()=>this.webRtcCallSession.webrtcMessages$.pipe(ue(qc,"params"),v(this.destroyed$)))}get vertoPing$(){return this.cachedObservable("vertoPing$",()=>this.webRtcCallSession.webrtcMessages$.pipe(ue(Gv,"params"),v(this.destroyed$)))}async sendCallControl(e,t){const i=await this.executeVerto(Cc({dialogParams:{callID:this.webRtcCallSession.id},command:{method:e,params:t}})),r=Kv(i);if(r)throw new St(Number.parseInt(r.code,10)||0,`Call control "${e}" failed (code ${r.code})${r.message?`: ${r.message}`:""}`,void 0);return i}async executeVerto(e,t={}){const i={callID:t.callID??this.webRtcCallSession.id,node_id:t.node_id??this._nodeId$.value??"",message:e,subscribe:t.subscribe},r=Sc(i),n=await this.webRtcCallSession.execute(r),s=e.method==="verto.info"?{fatal:!1}:void 0,a=He(n,"result.result"),o=n.error??a?.error;if(o){const c=new St(o.code,o.message,o.data);if(e.method==="verto.invite"||e.method==="verto.answer")throw c;this.reportLegError(c,this._rtcPeerConnectionsMap.get(i.callID),s)}return n}async sendLocalDescription(e,t){const i=e.method,r=this.getSendLocalSDPOptionalParams(t,e);try{const n=await this.executeVerto(e,r);switch(i){case"verto.invite":this.processInviteResponse(n,t);break;case"verto.modify":await this.processModifyResponse(n,t);break;default:}}catch(n){if(i==="verto.answer")throw n;F.error(`[WebRTCManager] Error sending Verto ${i}:`,n),this.reportLegError(ze(n),t),i==="verto.modify"&&this.onModifyFailed?.()}}async processModifyResponse(e,t){if(!e.error){const i=He(e,"result.result.result.action"),r=He(e,"result.result.result.sdp");if(i==="updateMedia"&&r)try{await t.updateAnswerStatus({status:"received",sdp:r})}catch(n){F.warn("[WebRTCManager] Error processing modify response:",n);const s=n instanceof Error?n:new Error(String(n),{cause:n});this.reportLegError(s,t)}}}emitMainSignalingStatus(e,t){const i=this._rtcPeerConnectionsMap.get(e);if(!i){const r=new Y(`Cannot emit signaling status, RTCPeerConnectionController not found for callID: ${e}`);F.error("[WebRTCManager] Failed to emit signaling status:",{callId:e,status:t,signalingError:r}),this.reportLegError(r,null,{fatal:!1});return}i.isMainDevice&&this._signalingStatus$.next(t)}processInviteResponse(e,t){if(He(e,"result.result.result.message")==="CALL CREATED"){this.emitMainSignalingStatus(t.id,"trying");const i=He(e,"result.node_id")??null,r=He(e,"result.result.result.memberID")??null,n=He(e,"result.result.result.callID");F.debug("[WebRTCManager] Verto invite response:",{callId:n,memberId:r,response:e}),t.setMemberId(r),t.setNodeId(i),t.isMainDevice&&(this._selfId$.next(r),this._nodeId$.next(i),this.attachManager.attach(this.buildAttachableCall(n,i??void 0))),n&&this.webRtcCallSession.addCallId(n),F.info("[WebRTCManager] Verto invite successful"),F.debug(`[WebRTCManager] nodeid: ${this._nodeId$.value}, selfId: ${this._selfId$.value}`)}else F.error("[WebRTCManager] Verto invite failed:",e),this.reportLegError(new Error("Verto invite failed: unexpected response"),t)}get RTCPeerConnectionConfig(){return{iceServers:this.webRtcCallSession.clientSession.iceServers??h.instance.iceServers,relayOnly:h.instance.relayOnly||h.instance.disableUdpIceServers,disableUdpIceServers:h.instance.disableUdpIceServers,iceCandidateTimeout:h.instance.iceCandidateTimeout,iceGatheringTimeout:h.instance.iceGatheringTimeout}}initMainPeerConnection(){const{options:e}=this.webRtcCallSession,t=new jc({propose:"main",callId:this.webRtcCallSession.id,audio:e.audio,video:e.video,inputAudioDeviceConstraints:e.inputAudioDeviceConstraints,inputVideoDeviceConstraints:e.inputVideoDeviceConstraints,inputAudioStream:e.inputAudioStream,inputVideoStream:e.inputVideoStream,receiveAudio:e.receiveAudio,receiveVideo:e.receiveVideo,fallbackToReceiveOnly:e.fallbackToReceiveOnly,webRTCApiProvider:this.webRTCApiProvider,preferredVideoCodecs:e.preferredVideoCodecs,preferredAudioCodecs:e.preferredAudioCodecs,stereo:e.stereo,...this.RTCPeerConnectionConfig},e.initOffer,this.deviceController);this.setupLocalDescriptionHandler(t),this.setupVertoByeHandler(),this.setupVertoAttachHandler(),this.initObservables(t),this._rtcPeerConnectionsMap.set(t.id,t),this._rtcPeerConnections$.next(Array.from(this._rtcPeerConnectionsMap.values())),this.subscribeTo(t.errors$,i=>{this.reportLegError(i,t)}),e.initOffer&&this.handleInboundAnswer(t)}async handleInboundAnswer(e){F.debug("[WebRTCManager] Waiting for inbound call to be accepted or rejected");const t=await Fe($r(this.vertoBye$,this.webRtcCallSession.answered$).pipe(v(this.destroyed$))).catch(()=>null);if(t===null){F.debug("[WebRTCManager] Inbound answer handler aborted (destroyed).");return}if(Kc(t))F.info("[WebRTCManager] Inbound call ended by remote before answer."),this.callSession?.destroy();else if(t){F.debug("[WebRTCManager] Inbound call accepted, creating SDP answer");const i=this.webRtcCallSession.answerMediaOptions;try{await e.acceptInbound(i)}catch(r){F.error("[WebRTCManager] Error creating inbound answer:",r),this.reportLegError(ze(r),e)}}else{F.info("[WebRTCManager] Inbound call rejected by user.");try{await this.bye("USER_BUSY")}finally{this._signalingStatus$.next("disconnected"),this.callSession?.destroy()}}}setupVertoAttachHandler(){this.subscribeTo(this.vertoAttach$,async e=>{F.debug("[WebRTCManager] Received Verto attach event for existing call:",e);const{callID:t}=e;await this.attachManager.attach({nodeId:this.nodeId??void 0,id:t,to:e.callee_id_number,mediaDirections:{audio:"sendrecv",video:"inactive"}})})}initObservables(e){this.mediaDirections$=e.connectionState$.pipe(N(t=>t==="connected"),S(()=>e.mediaDirections),Rp(e.mediaDirections),v(this.destroyed$)),this.localStream$=e.localStream$.pipe(se(),v(this.destroyed$)),this.remoteStream$=e.remoteStream$.pipe(se(),v(this.destroyed$))}setupLocalDescriptionHandler(e){this.subscribeTo(e.localDescription$.pipe(N(t=>t!==null),v(this.destroyed$)),t=>{const{type:i,sdp:r}=t,n=this.dialogParams(e),s=!e.firstSDPExchangeCompleted;if(i==="answer"){const a=av({dialogParams:n,sdp:r});this.sendLocalDescriptionOnceAccepted(a,e)}else if(s){const a=nv({dialogParams:n,sdp:r});this.sendLocalDescription(a,e)}else{const a=Hr({dialogParams:n,sdp:r,action:"updateMedia"});this.sendLocalDescription(a,e)}})}setupVertoByeHandler(){this.subscribeTo(this.vertoBye$,()=>{this._signalingStatus$.next("disconnected"),this.attachManager.detach(this.buildAttachableCall()),this.callSession?.destroy()})}getSendLocalSDPOptionalParams(e,t){let i;return e.firstSDPExchangeCompleted||(i=[],e.isMainDevice?i.push(...h.instance.inviteSubscribeMainDevice):e.isAdditionalDevice?i.push(...h.instance.inviteSubscribeAdditionalDevice):e.isScreenShare&&i.push(...h.instance.inviteSubscribeScreenshare)),{callID:e.id,node_id:qv({isInvite:Gc(t),reattach:this.webRtcCallSession.options.reattach===!0,explicitNodeId:this.webRtcCallSession.options.nodeId,currentNodeId:e.nodeId??this._nodeId$.value}),subscribe:i}}async sendLocalDescriptionOnceAccepted(e,t){F.debug("[WebRTCManager] Waiting for call to be accepted or ended before sending answer");const i=await Fe($r(this.vertoBye$,this.webRtcCallSession.answered$).pipe(v(this.destroyed$))).catch(()=>null);if(i===null){F.debug("[WebRTCManager] Destroyed while waiting for call acceptance");return}if(Kc(i))F.info("[WebRTCManager] Call ended before answer was sent."),this.callSession?.destroy();else if(i){F.debug("[WebRTCManager] Call accepted, sending answer");try{this.emitMainSignalingStatus(t.id,"connecting"),await this.sendLocalDescription(e,t),await t.updateAnswerStatus({status:"sent"}),await this.attachManager.attach(this.buildAttachableCall())}catch(r){F.error("[WebRTCManager] Error sending Verto answer:",r),this.reportLegError(ze(r),t),await t.updateAnswerStatus({status:"failed"})}}else{F.info("[WebRTCManager] Call was not accepted, sending verto.bye.");try{await this.bye("USER_BUSY")}finally{this._signalingStatus$.next("disconnected"),this.callSession?.destroy()}}}dialogParams(e){const t=e.memberId??this._selfId$.value??void 0,i=e.propose==="main"&&!e.firstSDPExchangeCompleted&&this.webRtcCallSession.options.reattach;return{id:e.isMainDevice?this.webRtcCallSession.id:e.id,destinationNumber:this.webRtcCallSession.to??this.webRtcCallSession.from,attach:i,reattaching:i,callerName:this.webRtcCallSession.fromName,callerNumber:this.webRtcCallSession.from,remoteCallerName:this.webRtcCallSession.toName,remoteCallerNumber:this.webRtcCallSession.to,userVariables:{memberCallId:this.webRtcCallSession.id,memberId:t,...this.webRtcCallSession.userVariables},screenShare:e.isScreenShare,additionalDevice:e.isAdditionalDevice,pingSupported:!0,version:Lp}}muteMainAudioInputDevice(){return this.mainPeerConnection.stopTrackSender("audio")}muteMainVideoInputDevice(){return this.mainPeerConnection.stopTrackSender("video")}async unmuteMainAudioInputDevice(){return this.mainPeerConnection.restoreTrackSender("audio")}async unmuteMainVideoInputDevice(){return this.mainPeerConnection.restoreTrackSender("video")}ensureLocalAudioPipeline(){return this.mainPeerConnection.ensureLocalAudioPipeline()}get localAudioPipeline(){return this.mainPeerConnection.localAudioPipeline}async addInputDevice(e={audio:!1,video:!0}){return this.initAdditionalPeerConnection("additional-device",e)}async addMainInputDevices(e={audio:!0}){let t;const{mediaDirections:i}=this.mainPeerConnection;if((e.audio??e.inputAudioDeviceConstraints??(e.inputAudioStream&&i.audio.startsWith("send")))&&(t="audio"),(e.video??e.inputVideoDeviceConstraints??(e.inputVideoStream&&!i.video.startsWith("send")))&&(t=t==="audio"?"both":"video"),t)this.mainPeerConnection.updateMediaDevicesOptions(e),await this.mainPeerConnection.restoreTrackSender(t);else{const r=new Mr("No valid device to be added");throw this.reportLegError(r,this.mainPeerConnection),r}}async addScreenMedia(e={}){await this.initAdditionalPeerConnection("screenshare",{audio:!1,screenShareAudio:e.audio??!1})}async initAdditionalPeerConnection(e,t){const i=e==="screenshare";if(i&&this._screenShareId&&this._rtcPeerConnectionsMap.has(this._screenShareId))throw new Jf(this._screenShareId);let r,n=null;try{i&&this._screenShareStatus$.next("starting"),n=new jc({...t,...this.RTCPeerConnectionConfig,propose:e,webRTCApiProvider:this.webRTCApiProvider},void 0,this.deviceController),this.setupLocalDescriptionHandler(n),i&&(this._screenShareId=n.id),this._rtcPeerConnectionsMap.set(n.id,n),this._rtcPeerConnections$.next(Array.from(this._rtcPeerConnectionsMap.values())),this.subscribeTo(n.errors$,a=>{r??(r=a),this.reportLegError(a,n)});const s=n;return await Fe(yt(s.localMediaSettled$.pipe(ye(1),wt(()=>s.connectionState$.pipe(N(a=>a==="connected"),ye(1),qi(Vp)))),this.legError$(s.id)).pipe(v(yt(this.destroyed$,s.destroyed$)))),i&&this._screenShareStatus$.next("started"),F.info(`[WebRTCManager] Additional peer connection connected (${e}).`),n.id}catch(s){const a=s instanceof Or,o=s instanceof kr&&!r;if(!a&&!o&&F.warn("[WebRTCManager] Error initializing additional peer connection:",s),n&&this._rtcPeerConnectionsMap.has(n.id)&&(n.destroy(),this._rtcPeerConnectionsMap.delete(n.id),this._rtcPeerConnections$.next(Array.from(this._rtcPeerConnectionsMap.values()))),i&&(this._screenShareId=void 0,this._screenShareStatus$.next("none")),a)throw F.debug("[WebRTCManager] Additional peer connection removed before connecting."),s;if(r)throw r instanceof Dt&&r.originalError instanceof Error?r.originalError:r;if(s instanceof kr){F.debug("[WebRTCManager] Additional peer connection aborted before connecting.");return}throw s instanceof jn?new Yf(e,s):s instanceof Error?s:new Error(String(s),{cause:s})}}async removeInputDevices(e){return this.removeAdditionalPeerConnection(e)}removeMainInputDevice(e={removeAudio:!1,removeVideo:!0}){let t;if(e.removeAudio&&(t="audio"),e.removeVideo&&(t=t==="audio"?"both":"video"),t)return this.mainPeerConnection.stopTrackSender(t,{updateTransceiverDirection:!0})}async removeScreenMedia(){if(!["starting","started"].includes(this._screenShareStatus$.value)){F.warn("[WebRTCManager] No active screen share to stop.");return}if(!this._screenShareId){F.debug("[WebRTCManager] No screen share peer connection found.");return}this._screenShareStatus$.next("stopping"),await this.removeAdditionalPeerConnection(this._screenShareId),this._screenShareId=void 0,this._screenShareStatus$.next("none")}async removeAdditionalPeerConnection(e){const t=this._rtcPeerConnectionsMap.get(e);try{t&&await this.executeVertoBye(t)}finally{t&&t.connectionState!=="connected"&&this._legErrors$.next({legId:e,error:new Or(t.propose)}),t?.destroy(),this._rtcPeerConnectionsMap.delete(e),this._rtcPeerConnections$.next(Array.from(this._rtcPeerConnectionsMap.values()))}}async executeVertoBye(e,t){try{const i=t?{cause:t,causeCode:lv[t]}:{};await this.executeVerto(sv({...i,dialogParams:this.dialogParams(e)}),{callID:e.id,node_id:e.nodeId??void 0})}catch(i){throw F.warn("[WebRTCManager] Call might already be disconnected, error sending Verto bye:",i),i}}async bye(e){this.attachManager.detach(this.buildAttachableCall());const t=this._rtcPeerConnectionsMap.get(this.webRtcCallSession.id);t&&await this.executeVertoBye(t,e)}async sendDigits(e){const t=Cc({sessid:this.webRtcCallSession.id,dialogParams:{callID:this.webRtcCallSession.id},dtmf:e});try{await this.executeVerto(t)}catch(i){throw F.warn("[WebRTCManager] Error sending DTMF digits:",i),i}}async transfer(e){const t=Hr({...e,dialogParams:this.dialogParams(this.mainPeerConnection),action:"transfer"});try{F.debug("[WebRTCManager] Transferring call with options:",e),await this.executeVerto(t)}catch(i){throw F.error("[WebRTCManager] Error transferring call:",i),i}}destroy(){this._rtcPeerConnectionsMap.forEach(e=>{e.destroy()}),this._rtcPeerConnectionsMap.clear(),this._rtcPeerConnections$.complete(),super.destroy()}};const Yc=q();var Jv=class extends Z{constructor(e={}){super(),this._source=null,this._stream=null,this._audioContext=(e.audioContextFactory??(()=>new AudioContext))(),this._analyser=this._audioContext.createAnalyser(),this._analyser.fftSize=2048,this._analyser.smoothingTimeConstant=.3,this._analyserBuffer=new Uint8Array(new ArrayBuffer(this._analyser.fftSize)),this._pollIntervalMs=e.pollIntervalMs??qo}get level$(){return this.deferEmission(Tr(this._pollIntervalMs,ho).pipe(S(()=>this.computeLevel())))}setStream(e){if(this._source){try{this._source.disconnect()}catch(t){Yc.debug("[RemoteAudioMeter] source disconnect warning:",t)}this._source=null,this._stream=null}!e||e.getAudioTracks().length===0||(this._stream=new MediaStream(e.getAudioTracks()),this._source=this._audioContext.createMediaStreamSource(this._stream))}destroy(){if(this._source){try{this._source.disconnect()}catch{}this._source=null}this._audioContext.close().catch(e=>{Yc.debug("[RemoteAudioMeter] audio context close warning:",e)}),super.destroy()}computeLevel(){if(!this._source)return 0;this._analyser.getByteTimeDomainData(this._analyserBuffer);let e=0;for(const t of this._analyserBuffer){const i=(t-128)/128;e+=i*i}return Math.sqrt(e/this._analyserBuffer.length)}};const Yi=q(),Zv=1e3,Qv=10,em=2e3,tm=3e3,im=3,rm=5,nm=5,sm=10,am=4,om=30;function cm(e,t){const i=e+t;return i===0?0:e/i*100}function lm(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="inbound-rtp"}function dm(e){return typeof e=="object"&&e!==null&&"type"in e&&e.type==="candidate-pair"}var um=class extends Z{constructor(e,t={}){super(),this.peerConnection=e,this.running=!1,this.lastAudioPacketsReceived=0,this.lastAudioPacketChangeTime=0,this.lastVideoPacketsReceived=0,this.lastVideoPacketChangeTime=0,this.lastRoundTripTime=0,this.lastAvailableOutgoingBitrate=void 0,this._sample$=this.createReplaySubject(1),this._baseline$=this.createBehaviorSubject({rtt:0,jitter:0,ready:!1}),this._networkIssues$=this.createBehaviorSubject([]),this._networkMetrics$=this.createBehaviorSubject([]),this.pollingIntervalMs=t.pollingIntervalMs??Zv,this.baselineSampleCount=t.baselineSamples??Qv,this.noAudioPacketThresholdMs=t.noAudioPacketThresholdMs??em,this.noVideoPacketThresholdMs=t.noVideoPacketThresholdMs??tm,this.rttSpikeWarningMultiplier=t.rttSpikeWarningMultiplier??im,this.rttSpikeCriticalMultiplier=t.rttSpikeCriticalMultiplier??rm,this.packetLossWarningPercent=t.packetLossWarningPercent??nm,this.packetLossCriticalPercent=t.packetLossCriticalPercent??sm,this.jitterSpikeMultiplier=t.jitterSpikeMultiplier??am,this.historyWindowSeconds=t.historyWindowSeconds??om}get networkIssues$(){return this._networkIssues$.asObservable()}get networkIssues(){return[...this._networkIssues$.value]}get isNetworkHealthy$(){return this.cachedObservable("isNetworkHealthy$",()=>this._networkIssues$.pipe(S(e=>e.length===0),P(),v(this.destroyed$)))}get isNetworkHealthy(){return this._networkIssues$.value.length===0}get networkMetrics$(){return this._networkMetrics$.asObservable()}get networkMetrics(){return[...this._networkMetrics$.value]}get criticalIssue$(){return this.cachedObservable("criticalIssue$",()=>this._networkIssues$.pipe(Gn(e=>Se(e.filter(t=>t.severity==="critical"))),v(this.destroyed$)))}get sample$(){return this._sample$.asObservable()}start(){if(this.running)return;this.running=!0;const e=Date.now();this.lastAudioPacketChangeTime=e,this.lastVideoPacketChangeTime=e,Yi.debug("[RTCStatsMonitor] Starting stats monitoring"),this.subscribeTo(Tr(this.pollingIntervalMs).pipe(N(()=>this.running),wt(()=>Se(this.peerConnection.getStats()).pipe(qt(t=>(Yi.warn("[RTCStatsMonitor] Failed to get stats:",t),jt)))),N(()=>this.running),S(t=>this.extractSample(t))),t=>this._sample$.next(t)),this.subscribeTo(this._sample$.pipe(ye(this.baselineSampleCount),xp(),S(t=>({rtt:t.reduce((i,r)=>i+r.roundTripTime,0)/t.length,jitter:t.reduce((i,r)=>i+r.audioJitter,0)/t.length,ready:!0}))),t=>{Yi.debug(`[RTCStatsMonitor] Baseline established: rtt=${t.rtt.toFixed(1)}ms, jitter=${t.jitter.toFixed(1)}ms`),this._baseline$.next(t)}),this.subscribeTo(this._sample$.pipe(Po((t,i)=>({prev:t.current,current:i}),{prev:null,current:null}),N(t=>t.current!==null)),({prev:t,current:i})=>{const r=i.timestamp;this.updatePacketTracking(i,r);const n=this.detectIssues(i,t,r);this._networkIssues$.next(n)}),this.subscribeTo(this._sample$.pipe(Po((t,i)=>{const r=i.timestamp-this.historyWindowSeconds*1e3,n={timestamp:i.timestamp,audio:{packetsReceived:i.audioPacketsReceived,packetsLost:i.audioPacketsLost,jitter:i.audioJitter},video:{packetsReceived:i.videoPacketsReceived,packetsLost:i.videoPacketsLost},roundTripTime:i.roundTripTime,availableOutgoingBitrate:i.availableOutgoingBitrate};return[...t.filter(s=>s.timestamp>r),n]},[])),t=>this._networkMetrics$.next(t))}stop(){this.running&&(this.running=!1,Yi.debug("[RTCStatsMonitor] Stopping stats monitoring"))}destroy(){Yi.debug("[RTCStatsMonitor] Destroying RTCStatsMonitor"),this.stop(),super.destroy()}extractSample(e){let t=0,i=0,r=0,n=0,s=0,a=0,o;return e.forEach(c=>{lm(c)&&(c.kind==="audio"?(t+=c.packetsReceived??0,i+=c.packetsLost??0,r=Math.max(r,(c.jitter??0)*1e3)):(n+=c.packetsReceived??0,s+=c.packetsLost??0)),dm(c)&&c.state==="succeeded"&&c.nominated&&(a=c.currentRoundTripTime?c.currentRoundTripTime*1e3:this.lastRoundTripTime,o=c.availableOutgoingBitrate??this.lastAvailableOutgoingBitrate)}),{audioPacketsReceived:t,audioPacketsLost:i,audioJitter:r,videoPacketsReceived:n,videoPacketsLost:s,roundTripTime:a,availableOutgoingBitrate:o,timestamp:Date.now()}}updatePacketTracking(e,t){e.audioPacketsReceived!==this.lastAudioPacketsReceived&&(this.lastAudioPacketsReceived=e.audioPacketsReceived,this.lastAudioPacketChangeTime=t),e.videoPacketsReceived!==this.lastVideoPacketsReceived&&(this.lastVideoPacketsReceived=e.videoPacketsReceived,this.lastVideoPacketChangeTime=t),e.roundTripTime>0&&(this.lastRoundTripTime=e.roundTripTime),e.availableOutgoingBitrate!==void 0&&(this.lastAvailableOutgoingBitrate=e.availableOutgoingBitrate)}detectIssues(e,t,i){const r=[],n=this._baseline$.value,s=i-this.lastAudioPacketChangeTime;s>this.noAudioPacketThresholdMs&&r.push({type:"no_inbound_audio",severity:"critical",timestamp:i,value:s,threshold:this.noAudioPacketThresholdMs});const a=i-this.lastVideoPacketChangeTime;if(a>this.noVideoPacketThresholdMs&&r.push({type:"no_inbound_video",severity:"warning",timestamp:i,value:a,threshold:this.noVideoPacketThresholdMs}),n.ready){const o=e.roundTripTime,c=n.rtt;if(c>0){const p=o/c;p>this.rttSpikeCriticalMultiplier?r.push({type:"high_rtt",severity:"critical",timestamp:i,value:o,threshold:c*this.rttSpikeCriticalMultiplier}):p>this.rttSpikeWarningMultiplier&&r.push({type:"high_rtt",severity:"warning",timestamp:i,value:o,threshold:c*this.rttSpikeWarningMultiplier})}const l=e.audioJitter,u=n.jitter;u>0&&l/u>this.jitterSpikeMultiplier&&r.push({type:"high_jitter",severity:"warning",timestamp:i,value:l,threshold:u*this.jitterSpikeMultiplier})}if(t){const o=Math.max(0,e.audioPacketsReceived-t.audioPacketsReceived),c=Math.max(0,e.audioPacketsLost-t.audioPacketsLost),l=Math.max(0,e.videoPacketsReceived-t.videoPacketsReceived),u=Math.max(0,e.videoPacketsLost-t.videoPacketsLost),p=o+l,m=cm(c+u,p);m>this.packetLossCriticalPercent?r.push({type:"high_packet_loss",severity:"critical",timestamp:i,value:m,threshold:this.packetLossCriticalPercent}):m>this.packetLossWarningPercent&&r.push({type:"high_packet_loss",severity:"warning",timestamp:i,value:m,threshold:this.packetLossWarningPercent})}return r}};const re=q(),hm=2e3,pm=1e4,fm=3e3,gm=5e3,vm=3,mm=3,bm=3e3,_m=1e4,ym=150,wm=300,Sm=5,Cm=new Set(["high_rtt","high_jitter","high_packet_loss"]);var km=class extends Z{constructor(e,t,i={}){super(),this._recoveryState$=this.createBehaviorSubject("idle"),this._recoveryEvent$=this.createSubject(),this._bandwidthConstrained$=this.createBehaviorSubject(!1),this._hasPacketLoss$=this.createBehaviorSubject(!1),this._trigger$=this.createSubject(),this._attemptCount=0,this._keyframeBurstCount=0,this._keyframeBurstStart=0,this._keyframeCooldownUntil=0,this._cooldownUntil=0,this._pipelineStop$=this.createSubject(),this._callbacks=e,this._inputs=t,this._config={debounceTimeMs:i.debounceTimeMs??hm,cooldownMs:i.cooldownMs??pm,iceGracePeriodMs:i.iceGracePeriodMs??fm,iceRestartTimeoutMs:i.iceRestartTimeoutMs??gm,maxAttempts:i.maxAttempts??vm,enableRelayFallback:i.enableRelayFallback??!0,keyframeMaxBurst:i.keyframeMaxBurst??mm,keyframeBurstWindowMs:i.keyframeBurstWindowMs??bm,keyframeCooldownMs:i.keyframeCooldownMs??_m,degradationBitrateThreshold:i.degradationBitrateThreshold??ym,degradationRecoveryThreshold:i.degradationRecoveryThreshold??wm,enableAutoDegradation:i.enableAutoDegradation??!0,packetLossRecoveryDelaySec:i.packetLossRecoveryDelaySec??Sm},this.initPipeline(),this.initDegradationRecoveryPipeline()}get recoveryState$(){return this._recoveryState$.asObservable().pipe(v(this._destroyed$))}get recoveryState(){return this._recoveryState$.value}get recoveryEvent$(){return this._recoveryEvent$.asObservable().pipe(v(this._destroyed$))}get bandwidthConstrained$(){return this._bandwidthConstrained$.asObservable().pipe(v(this._destroyed$))}get bandwidthConstrained(){return this._bandwidthConstrained$.value}pushTrigger(e){this._trigger$.next(e)}async requestIceRestart(){if(this._recoveryState$.value==="recovering"){re.info("CallRecoveryManager: manual ICE restart skipped — recovery already in progress");return}re.info("CallRecoveryManager: manual ICE restart requested"),this.transitionTo("recovering"),await this.executeIceRestart(!1),this.startCooldown()}requestKeyframe(){this.executeKeyframe("manual request")}reset(){re.info("CallRecoveryManager: resetting counters"),this._attemptCount=0,this._keyframeBurstCount=0,this._keyframeBurstStart=0,this._keyframeCooldownUntil=0,this._cooldownUntil=0,this.transitionTo("idle")}notifyModifyFailed(){(this._recoveryState$.value==="cooldown"||this._recoveryState$.value==="idle")&&(re.info("CallRecoveryManager: verto.modify failed — re-entering recovery"),this._cooldownUntil=0,this.transitionTo("idle"),this.pushTrigger({source:"network",detail:"modify_failed_during_recovery"}))}reportBandwidth(e){if(!this._config.enableAutoDegradation)return;const t=this._bandwidthConstrained$.value;!t&&e<this._config.degradationBitrateThreshold?(this._bandwidthConstrained$.next(!0),this._callbacks.disableVideo(),this.emitEvent({action:"video_disabled",reason:`bandwidth ${e}kbps below threshold ${this._config.degradationBitrateThreshold}kbps`,timestamp:Date.now()}),re.warn(`CallRecoveryManager: disabling video — bandwidth ${e}kbps < ${this._config.degradationBitrateThreshold}kbps`)):t&&e>=this._config.degradationRecoveryThreshold&&(this._bandwidthConstrained$.next(!1),this._callbacks.enableVideo(),this.emitEvent({action:"video_restored",reason:`bandwidth ${e}kbps recovered above ${this._config.degradationRecoveryThreshold}kbps`,timestamp:Date.now()}),re.info(`CallRecoveryManager: restoring video — bandwidth ${e}kbps >= ${this._config.degradationRecoveryThreshold}kbps`))}reportNetworkIssues(e){const t=e.some(i=>i.type==="high_packet_loss");t!==this._hasPacketLoss$.value&&this._hasPacketLoss$.next(t)}handleWebSocketReconnect(){const e=this._callbacks.getPeerConnectionState();e==="connected"||e==="completed"?(re.info("CallRecoveryManager: signal-only reconnect — peer connection still alive"),this.emitEvent({action:"signal_reconnect",reason:"WebSocket reconnected, peer connection still connected",timestamp:Date.now()})):(re.info("CallRecoveryManager: full reconnect — peer connection also down"),this.emitEvent({action:"full_reconnect",reason:"WebSocket reconnected, peer connection not connected — ICE restart needed",timestamp:Date.now()}),this.pushTrigger({source:"network",detail:"full_reconnect_after_ws"})),this.reset()}destroy(){this._pipelineStop$.next(),this._pipelineStop$.complete(),super.destroy()}initPipeline(){this.subscribeTo(this._trigger$.pipe(fe(()=>{this._recoveryState$.value==="idle"&&this.transitionTo("debouncing")}),Oo(this._config.debounceTimeMs),Lo(this._inputs.signalingReady$),N(([,e])=>this.passGateChecks(e)),S(([e])=>e),qn(e=>this.executeTieredRecovery(e)),v(yt(this._destroyed$,this._pipelineStop$))),{next:()=>{},error:e=>{re.error("CallRecoveryManager: pipeline error",e),this.transitionTo("idle")}})}initDegradationRecoveryPipeline(){if(!this._config.enableAutoDegradation)return;const e=this._config.packetLossRecoveryDelaySec*1e3;this.subscribeTo(Ao([this._bandwidthConstrained$,this._hasPacketLoss$]).pipe(wt(([t,i])=>t&&!i?pi(e):jt),v(this._destroyed$)),()=>{this._bandwidthConstrained$.next(!1),this._callbacks.enableVideo(),this.emitEvent({action:"video_restored",reason:`no packet loss for ${this._config.packetLossRecoveryDelaySec}s — restoring video`,timestamp:Date.now()}),re.info(`CallRecoveryManager: restoring video — no packet loss for ${this._config.packetLossRecoveryDelaySec}s`)})}passGateChecks(e){return this._callbacks.isNegotiating()?(re.debug("CallRecoveryManager: gate blocked — negotiation in progress"),this.transitionTo("idle"),!1):e?this._callbacks.isCallConnected()?this.isCooldownActive()?(re.debug("CallRecoveryManager: gate blocked — cooldown active"),this.transitionTo("cooldown"),!1):!0:(re.debug("CallRecoveryManager: gate blocked — call not connected"),this.transitionTo("idle"),!1):(re.debug("CallRecoveryManager: gate blocked — signaling not ready"),this.transitionTo("idle"),!1)}isCooldownActive(){return Date.now()<this._cooldownUntil}executeTieredRecovery(e){return this.transitionTo("recovering"),re.info(`CallRecoveryManager: starting tiered recovery — source=${e.source} detail=${e.detail}`),Se(this.runTiers(e)).pipe(fe(()=>this.startCooldown()),qt(t=>(re.error("CallRecoveryManager: tiered recovery failed",t),this.startCooldown(),jt)))}async runTiers(e){if(this.executeKeyframe(e.detail),e.issueType&&Cm.has(e.issueType)){re.debug(`CallRecoveryManager: degradation-only issue (${e.issueType}) — Tier 1 only, skipping ICE restart`);return}this._attemptCount<this._config.maxAttempts&&await this.executeIceRestart(!1)||this._config.enableRelayFallback&&this._attemptCount<this._config.maxAttempts&&await this.executeIceRestart(!0)||this._attemptCount>=this._config.maxAttempts&&(this.emitEvent({action:"max_attempts_reached",reason:`all ${this._config.maxAttempts} recovery attempts exhausted`,attempt:this._attemptCount,maxAttempts:this._config.maxAttempts,timestamp:Date.now()}),re.warn("CallRecoveryManager: max recovery attempts reached"))}executeKeyframe(e){const t=Date.now();if(t<this._keyframeCooldownUntil){re.debug("CallRecoveryManager: keyframe request skipped — cooldown active");return}if(t-this._keyframeBurstStart>this._config.keyframeBurstWindowMs&&(this._keyframeBurstCount=0,this._keyframeBurstStart=t),this._keyframeBurstCount>=this._config.keyframeMaxBurst){this._keyframeCooldownUntil=t+this._config.keyframeCooldownMs,re.debug(`CallRecoveryManager: keyframe burst limit reached (${this._config.keyframeMaxBurst}), cooldown until ${this._keyframeCooldownUntil}`);return}this._keyframeBurstCount+=1,this._callbacks.requestKeyframe(),this.emitEvent({action:"keyframe_requested",reason:e,timestamp:t}),re.debug(`CallRecoveryManager: keyframe requested (burst ${this._keyframeBurstCount}/${this._config.keyframeMaxBurst})`)}async executeIceRestart(e){this._attemptCount+=1;const t=e?"Tier 3 (relay-only)":"Tier 2 (standard)";re.info(`CallRecoveryManager: ${t} ICE restart — attempt ${this._attemptCount}/${this._config.maxAttempts}`),this.emitEvent({action:"reinvite_started",reason:`${t} ICE restart`,attempt:this._attemptCount,maxAttempts:this._config.maxAttempts,timestamp:Date.now()});try{return await this.withTimeout(this._callbacks.requestIceRestart(e),this._config.iceRestartTimeoutMs)?(this.emitEvent({action:"reinvite_succeeded",reason:`${t} ICE restart succeeded`,attempt:this._attemptCount,maxAttempts:this._config.maxAttempts,timestamp:Date.now()}),re.info(`CallRecoveryManager: ${t} ICE restart succeeded`),this._attemptCount=0,!0):(this.emitEvent({action:"reinvite_failed",reason:`${t} ICE restart returned false`,attempt:this._attemptCount,maxAttempts:this._config.maxAttempts,timestamp:Date.now()}),re.warn(`CallRecoveryManager: ${t} ICE restart failed`),!1)}catch{return this.emitEvent({action:"reinvite_timeout",reason:`${t} ICE restart timed out after ${this._config.iceRestartTimeoutMs}ms`,attempt:this._attemptCount,maxAttempts:this._config.maxAttempts,timestamp:Date.now()}),re.warn(`CallRecoveryManager: ${t} ICE restart timed out`),!1}}async withTimeout(e,t){return new Promise((i,r)=>{const n=setTimeout(()=>{r(new Error(`Timeout after ${t}ms`))},t);e.then(s=>{clearTimeout(n),i(s)},s=>{clearTimeout(n),r(s instanceof Error?s:new Error(String(s)))})})}transitionTo(e){const t=this._recoveryState$.value;t!==e&&(re.debug(`CallRecoveryManager: state ${t} -> ${e}`),this._recoveryState$.next(e))}startCooldown(){this._cooldownUntil=Date.now()+this._config.cooldownMs,this.transitionTo("cooldown"),this._cooldownSubscription&&this._cooldownSubscription.unsubscribe(),this._cooldownSubscription=pi(this._config.cooldownMs).pipe(ye(1),v(this._destroyed$),N(()=>this._recoveryState$.value==="cooldown")).subscribe(()=>this.transitionTo("idle"))}emitEvent(e){this._recoveryEvent$.next(e)}},Tm=class{constructor(e,t,i){this.executeMethod=e,this.vertoManager=t,this.deviceController=i}createSelfParticipant(e){return new Ac(e,this.executeMethod,this.vertoManager,this.deviceController)}createParticipant(e){return new xc(e,this.executeMethod,this.deviceController)}};const $m=93.2,Em=.024,xm=2.5,Am=0,Im=100,Rm=1,Mm=5,Dm=4,Om=3.5,Pm=3,Lm=2;function Nm(e,t,i){const r=$m-(e/2+t)*Em-i*xm,n=Math.min(Im,Math.max(Am,r)),s=1+.035*n+n*(n-60)*(100-n)*7e-6;return Math.min(Mm,Math.max(Rm,s))}function Fm(e){return e>=Dm?"excellent":e>=Om?"good":e>=Pm?"fair":e>=Lm?"poor":"critical"}function Um(e){const t=He(e,"result.result");return t&&typeof t=="object"&&"result"in t?t:e}const de=q(),Vm=5/3,Bm=e=>{if(!e)return{};try{const t=new URL(`destination:${e}`),i={};return t.searchParams.forEach((r,n)=>{i[n]=r}),i}catch(t){return de.warn(`Failed to parse destination URI: ${e}`,t),{}}};var Hm=class extends Z{constructor(e,t,i,r){super(),this.clientSession=e,this.options=t,this.address=r,this._errors$=this.createReplaySubject(1),this._lastMergedStatus="new",this._answered$=this.createReplaySubject(),this._holdState=!1,this._userVariables$=this.createBehaviorSubject({...h.instance.userVariables}),this._networkIssues$=this.createBehaviorSubject([]),this._networkMetrics$=this.createBehaviorSubject([]),this._isNetworkHealthy$=this.createBehaviorSubject(!0),this._qualityScore$=this.createBehaviorSubject(5),this._qualityLevel$=this.createBehaviorSubject("excellent"),this._recoveryState$=this.createBehaviorSubject("idle"),this._recoveryEvent$=this.createSubject(),this._bandwidthConstrained$=this.createBehaviorSubject(!1),this._mediaParamsUpdated$=this.createSubject(),this._customSubscriptions=new Map,this._pushToTalkEnabled=!1,this._remoteAudioMeter=null,this.id=t.callId??Nr(),this.to=t.to,this._userVariables$.next({...this._userVariables$.value,...Bm(t.to),...t.userVariables}),this.subscribeTo(this.webrtcMessages$,o=>{const c=He(o,"params.userVariables");c&&this._userVariables$.next({...this._userVariables$.value,...c})});const n=i.initializeManagers(this);this.vertoManager=n.vertoManager,this.callEventsManager=n.callEventsManager,t.initOffer?(this._status$=this.createBehaviorSubject("ringing"),this._lastMergedStatus="ringing"):this._status$=this.createBehaviorSubject("new");const{deviceController:s,networkChange$:a}=i;this._networkChange$=a,this.participantFactory=new Tm(this.executeMethod.bind(this),this.vertoManager,s),this.subscribeTo(yt(this._status$.asObservable(),this.vertoManager.signalingStatus$).pipe(P(),v(this._destroyed$)),o=>{this._lastMergedStatus=o,o==="connected"&&!this._statsMonitor?this.initResilienceSubsystems():o==="disconnected"?(this._statsMonitor?.destroy(),this._statsMonitor=void 0):(o==="destroyed"||o==="failed")&&this.stopResilienceSubsystems()})}get errors$(){return this.deferEmission(this._errors$.asObservable())}emitError(e){this._status$.value==="destroyed"||this._status$.value==="failed"||(this._errors$.next(e),e.fatal&&this._status$.value!=="disconnecting"&&(this._status$.next("failed"),this.vertoManager.bye().catch(t=>{de.debug("[Call] fatal-teardown bye failed (signaling likely already dead):",t)}),this.destroy()))}notifyModifyFailed(){this._recoveryManager?.notifyModifyFailed()}get direction(){return this.options.initOffer?"inbound":"outbound"}get address$(){return this.deferEmission(Se([this.address])).pipe(v(this._destroyed$))}get fromName(){return this.options.fromName}get from(){return this.options.from}get toName(){return this.options.toName}async toggleIncomingVideo(){throw new ht}async toggleIncomingAudio(){throw new ht}addCallId(e){this.callEventsManager.addCallId(e)}get capabilities(){return this.callEventsManager.capabilities}get participants(){return this.callEventsManager.participants}get self(){return this.callEventsManager.self}async toggleLock(){const e=this.locked?"call.unlock":"call.lock";await this.executeMethod(this.callSelf,e,{})}async toggleHold(){this._holdState?await this.vertoManager.unhold():await this.vertoManager.hold(),this._holdState=!this._holdState}async startRecording(){throw new ht}async startStreaming(){throw new ht}async setMeta(e){throw new ht}async updateMeta(e){throw new ht}get layoutLayers$(){return this.deferEmission(this.callEventsManager.layoutLayers$).pipe(v(this._destroyed$))}get layoutLayers(){return this.callEventsManager.layoutLayers}async executeMethod(e,t,i){const r=this.callSelf;if(typeof e=="string"&&e!==r.member_id)throw new Mr(`Target member ID ${e} does not match call's self member ID ${r.member_id}`);if(this.clientSession.callControl==="in-dialog")return this.executeMethodInDialog(e,t,i);const n={...i,self:r,target:typeof e=="string"?r:e},s=bi({method:t,params:n});try{const a=await this.clientSession.execute(s);if(_v(a))throw new St(parseInt(a.result?.code??"0"),`Error response from method ${t}: ${a.result?.code} ${a.result?.message}`,void 0,void 0,s.id);return a}catch(a){throw de.error(`[Call] Error executing method ${t} with params`,n,a),a}}async executeMethodInDialog(e,t,i){const r={...i};if(t==="call.member.position.set")r.targets=(i.targets??[]).map(n=>({call_id:n.target?.call_id??n.call_id,position:n.position}));else{const n=typeof e=="object"?{call_id:e.call_id,member_id:e.member_id}:{call_id:this.id,member_id:e};t==="call.member.remove"?r.targets=[n]:r.target=n}return this.sendCommand(t,r)}async sendCommand(e,t={}){return Um(await this.vertoManager.sendCallControl(e,t))}get callSelf(){const e=this.nodeId,t=this.vertoManager.selfId;if(!e||!t)throw new Wf(this.id);return{node_id:e,call_id:this.id,member_id:t}}get status$(){return this.publicCachedObservable("status$",()=>yt(this._status$.asObservable(),this.vertoManager.signalingStatus$).pipe(P(),fe(e=>{this._lastMergedStatus=e})))}get participants$(){return this.deferEmission(this.callEventsManager.participants$).pipe(v(this._destroyed$))}get self$(){return this.deferEmission(this.callEventsManager.self$).pipe(v(this._destroyed$))}get recording$(){return this.deferEmission(this.callEventsManager.recording$).pipe(v(this._destroyed$))}get streaming$(){return this.deferEmission(this.callEventsManager.streaming$).pipe(v(this._destroyed$))}get raiseHandPriority$(){return this.deferEmission(this.callEventsManager.raiseHandPriority$).pipe(v(this._destroyed$))}get locked$(){return this.deferEmission(this.callEventsManager.locked$).pipe(v(this._destroyed$))}get meta$(){return this.deferEmission(this.callEventsManager.meta$).pipe(v(this._destroyed$))}get capabilities$(){return this.deferEmission(this.callEventsManager.capabilities$).pipe(v(this._destroyed$))}get layout$(){return this.deferEmission(this.callEventsManager.layout$).pipe(v(this._destroyed$))}get status(){return this._lastMergedStatus}get recording(){return this.callEventsManager.recording}get streaming(){return this.callEventsManager.streaming}get raiseHandPriority(){return this.callEventsManager.raiseHandPriority}get locked(){return this.callEventsManager.locked}get meta(){return this.callEventsManager.meta}get layout(){return this.callEventsManager.layout}get layouts$(){return this.deferEmission(this.callEventsManager.layouts$).pipe(v(this._destroyed$))}get layouts(){return this.callEventsManager.layouts}get localStream$(){return this.deferEmission(this.vertoManager.localStream$).pipe(v(this._destroyed$))}get localStream(){return this.vertoManager.localStream}get remoteStream$(){return this.deferEmission(this.vertoManager.remoteStream$).pipe(v(this._destroyed$))}get remoteStream(){return this.vertoManager.remoteStream}get userVariables$(){return this.deferEmission(this._userVariables$.asObservable())}get userVariables(){return{...this._userVariables$.value}}set userVariables(e){this._userVariables$.next({...this._userVariables$.value,...e})}get networkIssues$(){return this.deferEmission(this._networkIssues$.asObservable())}get networkIssues(){return this._networkIssues$.value}get isNetworkHealthy$(){return this.deferEmission(this._isNetworkHealthy$.asObservable())}get isNetworkHealthy(){return this._isNetworkHealthy$.value}get networkMetrics$(){return this.deferEmission(this._networkMetrics$.asObservable())}get networkMetrics(){return this._networkMetrics$.value}get qualityScore$(){return this.deferEmission(this._qualityScore$.asObservable())}get qualityLevel$(){return this.deferEmission(this._qualityLevel$.asObservable())}get recoveryState$(){return this.deferEmission(this._recoveryState$.asObservable())}get recoveryEvent$(){return this.deferEmission(this._recoveryEvent$.asObservable())}get bandwidthConstrained$(){return this.deferEmission(this._bandwidthConstrained$.asObservable())}get mediaParamsUpdated$(){return this.deferEmission(this._mediaParamsUpdated$.asObservable())}emitMediaParamsUpdated(e){this._mediaParamsUpdated$.next(e)}requestKeyframe(){this.vertoManager.requestKeyframe?.()}async requestIceRestart(){await this.vertoManager.requestIceRestart?.()}initResilienceSubsystems(){const e=this.rtcPeerConnection;if(de.debug(`[Call] initResilienceSubsystems: pc=${e?"exists":"undefined"}, connectionState=${e?.connectionState}`),!e){de.warn("[Call] No peer connection available, skipping resilience init");return}try{const t=h.instance;this._statsMonitor=new um(e,{pollingIntervalMs:t.statsPollingInterval,baselineSamples:t.statsBaselineSamples,noAudioPacketThresholdMs:t.statsNoPacketThreshold,rttSpikeWarningMultiplier:t.statsRttSpikeMultiplier,rttSpikeCriticalMultiplier:t.statsRttSpikeMultiplier*Vm,packetLossWarningPercent:t.statsPacketLossThreshold*100,packetLossCriticalPercent:t.statsPacketLossThreshold*200,jitterSpikeMultiplier:t.statsJitterSpikeMultiplier,historyWindowSeconds:t.statsHistorySize}),this._recoveryManager=new km({requestKeyframe:()=>{try{this.vertoManager.requestKeyframeAll?this.vertoManager.requestKeyframeAll():this.vertoManager.requestKeyframe?.()}catch{}},requestIceRestart:async i=>{try{this.vertoManager.requestIceRestartAll?await this.vertoManager.requestIceRestartAll(i):await this.vertoManager.requestIceRestart?.(i)}catch{return!1}return this.waitForPeerConnectionConnected()},disableVideo:()=>{try{this.vertoManager.muteMainVideoInputDevice(),de.debug("[Call] Recovery manager disabled video")}catch{de.debug("[Call] Recovery manager failed to disable video")}},enableVideo:()=>{this.vertoManager.unmuteMainVideoInputDevice().catch(()=>{de.debug("[Call] Recovery manager failed to enable video")})},isNegotiating:()=>this.vertoManager.mainPeerConnection.isNegotiating,isCallConnected:()=>this._lastMergedStatus==="connected",getPeerConnectionState:()=>e.connectionState},{signalingReady$:this.clientSession.authenticated$},{debounceTimeMs:t.recoveryDebounceTime,cooldownMs:t.recoveryCooldown,iceGracePeriodMs:t.iceDisconnectedGracePeriod,iceRestartTimeoutMs:t.iceRestartTimeout,maxAttempts:t.maxRecoveryAttempts,enableRelayFallback:t.enableRelayFallback,keyframeMaxBurst:t.keyframeMaxBurst,keyframeBurstWindowMs:t.keyframeBurstWindow,keyframeCooldownMs:t.keyframeCooldown}),this.subscribeTo(this._statsMonitor.networkIssues$,i=>{this._networkIssues$.next(i),this._recoveryManager?.reportNetworkIssues(i)}),this.subscribeTo(this._statsMonitor.isNetworkHealthy$,i=>{this._isNetworkHealthy$.next(i)}),this.subscribeTo(this._statsMonitor.networkMetrics$,i=>{if(this._networkMetrics$.next(i),i.length>0){const r=i[i.length-1],n=r.audio.packetsReceived+r.video.packetsReceived,s=r.audio.packetsLost+r.video.packetsLost,a=n+s>0?s/(n+s)*100:0,o=Nm(r.roundTripTime,r.audio.jitter,a);this._qualityScore$.next(o),this._qualityLevel$.next(Fm(o)),r.availableOutgoingBitrate!==void 0&&this._recoveryManager?.reportBandwidth(r.availableOutgoingBitrate/1e3)}}),this.subscribeTo(this._statsMonitor.criticalIssue$,i=>{this._recoveryManager?.pushTrigger({source:"stats",detail:`${i.type}: ${i.severity}`,issueType:i.type})}),this.subscribeTo(this._recoveryManager.recoveryState$,i=>{this._recoveryState$.next(i)}),this.subscribeTo(this._recoveryManager.recoveryEvent$,i=>{this._recoveryEvent$.next(i),i.action==="max_attempts_reached"&&(de.warn("[Call] All recovery attempts exhausted, terminating call"),this.emitError({kind:"network",fatal:!0,error:new Error("Call recovery failed: all attempts exhausted"),callId:this.id}))}),this.subscribeTo(this._recoveryManager.bandwidthConstrained$,i=>{this._bandwidthConstrained$.next(i)}),this._networkChange$&&this.subscribeTo(this._networkChange$,i=>{i.type==="offline"?this._recoveryManager?.pushTrigger({source:"network",detail:"browser went offline"}):i.type==="online"&&this._recoveryManager?.handleWebSocketReconnect()}),this.subscribeTo(this.clientSession.authenticated$.pipe(Er(1),N(Boolean)),()=>{de.debug("[Call] WebSocket reconnected — notifying recovery manager"),this._recoveryManager?.handleWebSocketReconnect()}),this._statsMonitor.start(),de.debug("[Call] Resilience subsystems initialized for call",this.id)}catch(t){de.warn("[Call] Failed to initialize resilience subsystems:",t)}}async waitForPeerConnectionConnected(){const e=this.rtcPeerConnection;if(!e)return!1;const t=Date.now()+_f;for(;;){const i=e.connectionState;if(i==="connected")return!0;if(i==="failed"||i==="closed"||Date.now()>=t)return!1;await new Promise(r=>setTimeout(r,yf))}}stopResilienceSubsystems(){try{this._statsMonitor?.destroy(),this._recoveryManager?.destroy()}catch{}this._statsMonitor=void 0,this._recoveryManager=void 0}createParticipant(e,t){return e===(t??this.vertoManager.selfId)?this.participantFactory.createSelfParticipant(e):this.participantFactory.createParticipant(e)}get mediaDirections$(){return this.deferEmission(this.vertoManager.mediaDirections$).pipe(v(this._destroyed$))}get mediaDirections(){return this.vertoManager.mediaDirections}get participantsId$(){return this.cachedObservable("participantsId$",()=>this.participants$.pipe(S(e=>e.map(t=>t.id))))}async execute(e,t){return this.clientSession.execute(e,t)}get selfId$(){return this.vertoManager.selfId$}get localMediaSettled$(){return this.vertoManager.localMediaSettled$}get selfId(){return this.vertoManager.selfId}get nodeId$(){return this.vertoManager.nodeId$}get nodeId(){return this.vertoManager.nodeId}isCallSessionEvent(e){try{de.debug("[Call] Checking if event is for this call session:",e);const t=He(e,"params.params.callID")??He(e,"params.call_id"),i=He(e,"params.room_session_id");return de.debug(`[Call] Extracted session identifiers callID: ${t} and roomSessionID: ${i} from event:`),t===this.id||!!t&&this.callEventsManager.isCallIdValid(t)||!!i&&this.callEventsManager.isRoomSessionIdValid(i)}catch(t){return de.error("[Call] Error checking if event is for this call session:",t),!1}}get callSessionEvents$(){return this.cachedObservable("callSessionEvents$",()=>this.clientSession.signalingEvent$.pipe(N(e=>this.isCallSessionEvent(e)),fe(e=>{de.debug("[Call] Received call session event:",e)}),v(this.destroyed$),ut()))}get callUpdated$(){return this.publicCachedObservable("callUpdated$",()=>this.callSessionEvents$.pipe(ue(Mc,"params"),v(this.destroyed$)))}get memberJoined$(){return this.publicCachedObservable("memberJoined$",()=>this.callSessionEvents$.pipe(ue(Pc,"params"),v(this.destroyed$)))}get memberLeft$(){return this.publicCachedObservable("memberLeft$",()=>this.callSessionEvents$.pipe(ue(Lc,"params"),v(this.destroyed$)))}get memberUpdated$(){return this.publicCachedObservable("memberUpdated$",()=>this.callSessionEvents$.pipe(ue(Oc,"params"),v(this.destroyed$)))}get memberTalking$(){return this.publicCachedObservable("memberTalking$",()=>this.callSessionEvents$.pipe(ue(Nc,"params"),v(this.destroyed$)))}get callStates$(){return this.publicCachedObservable("callStates$",()=>this.callSessionEvents$.pipe(ue(Dc,"params"),v(this.destroyed$)))}get layoutUpdates$(){return this.publicCachedObservable("layoutUpdates$",()=>this.callSessionEvents$.pipe(ue(ls,"params"),v(this.destroyed$)))}get rtcPeerConnection(){return this.vertoManager.mainPeerConnection.peerConnection}get signalingEvent$(){return this.publicCachedObservable("signalingEvent$",()=>this.callEvent$.pipe(S(e=>JSON.parse(JSON.stringify(e)))))}subscribe(e){const t=this._customSubscriptions.get(e);if(t)return t;const i=this.callSessionEvents$.pipe(N(r=>r.event_type===e),S(r=>JSON.parse(JSON.stringify(r))),v(this._destroyed$));return this._sendVertoSubscribe(e).then(()=>{this._customSubscriptions.set(e,i)},r=>{this._customSubscriptions.delete(e),de.warn(`[Call] verto.subscribe for '${e}' failed, not caching:`,r)}),this._customSubscriptions.set(e,i),i}get webrtcMessages$(){return this.cachedObservable("webrtcMessages$",()=>this.callSessionEvents$.pipe(ue(zr,"params"),fe(e=>de.debug("[Call] Event is a WebRTC message event:",e)),v(this.destroyed$),ut()))}get callEvent$(){return this.cachedObservable("callEvent$",()=>this.callSessionEvents$.pipe(ue(yv,"params"),fe(e=>de.debug("[Call] Event is a call event:",e)),v(this.destroyed$),ut()))}get layoutEvent$(){return this.cachedObservable("layoutEvent$",()=>this.callEvent$.pipe(ue(ls,"params")))}async hangup(){this._status$.next("disconnecting");try{await this.vertoManager.bye()}finally{this.destroy()}}async sendDigits(e){return this.vertoManager.sendDigits(e)}answer(e){this._answerMediaOptions=e,this._answered$.next(!0)}get answerMediaOptions(){return this._answerMediaOptions}reject(){this._answered$.next(!1)}get answered$(){return this.deferEmission(this._answered$.asObservable())}async setLayout(e,t){if(!this.layouts.includes(e))throw new Mr(`Layout ${e} is not available in the current call layouts: ${this.layouts.join(", ")}`);const i=[];for(const[n,s]of Object.entries(t??{})){const a=this.participants.find(o=>o.id===n);if(!a){de.warn(`[Call] setLayout: member ${n} not found in participants; skipping position ${s}`);continue}a.target,i.push([a,s])}const r=await Fe(this.selfId$.pipe(N(n=>n!==null)));await this.executeMethod(r,"call.layout.set",{layout:e});for(const[n,s]of i)await n.setPosition(s)}async transfer(e){return this.vertoManager.transfer(e)}setLocalMicrophoneGain(e){const t=this.vertoManager.ensureLocalAudioPipeline();if(!t){de.warn("[Call] setLocalMicrophoneGain: audio pipeline unavailable");return}const i=Math.max(0,Math.min(200,e));t.setGain(i/100)}get localMicrophoneGain$(){const e=this.vertoManager.ensureLocalAudioPipeline();return e?this.publicCachedObservable("localMicrophoneGain$",()=>e.gain$.pipe(S(t=>t*100),v(this._destroyed$))):Cr(100).pipe(v(this._destroyed$))}get localAudioLevel$(){const e=this.vertoManager.ensureLocalAudioPipeline();return e?this.publicCachedObservable("localAudioLevel$",()=>e.level$.pipe(v(this._destroyed$),ut())):Cr(0).pipe(v(this._destroyed$))}get localSpeaking$(){const e=this.vertoManager.ensureLocalAudioPipeline();return e?this.publicCachedObservable("localSpeaking$",()=>e.speaking$.pipe(v(this._destroyed$),ut())):Cr(!1).pipe(v(this._destroyed$))}enablePushToTalk(){const e=this.vertoManager.ensureLocalAudioPipeline();if(!e){de.warn("[Call] enablePushToTalk: audio pipeline unavailable");return}e.setPTTActive(!1),this._pushToTalkEnabled=!0}disablePushToTalk(){this.vertoManager.localAudioPipeline?.setPTTActive(!0),this._pushToTalkEnabled=!1}setPushToTalkActive(e){this._pushToTalkEnabled&&this.vertoManager.localAudioPipeline?.setPTTActive(e)}async setEchoCancellation(e){return this.vertoManager.updateMediaConstraints({audio:{echoCancellation:e}})}async setNoiseSuppression(e){return this.vertoManager.updateMediaConstraints({audio:{noiseSuppression:e}})}async setAutoGainControl(e){return this.vertoManager.updateMediaConstraints({audio:{autoGainControl:e}})}get remoteAudioLevel$(){return this.publicCachedObservable("remoteAudioLevel$",()=>{this._remoteAudioMeter??(this._remoteAudioMeter=new Jv);const e=this._remoteAudioMeter;return this.subscribeTo(this.vertoManager.remoteStream$,t=>{e.setStream(t)}),e.level$.pipe(v(this._destroyed$),ut())})}destroy(){this._status$.value!=="destroyed"&&(this._status$.next("destroyed"),this.stopResilienceSubsystems(),this._remoteAudioMeter?.destroy(),this._remoteAudioMeter=null,this.vertoManager.destroy(),this.callEventsManager.destroy(),super.destroy())}async _sendVertoSubscribe(e){const t=ov({sessid:this.id,eventChannel:[e]}),i={callID:this.id,node_id:this.vertoManager.nodeId??"",message:t};await this.clientSession.execute(Sc(i))}};function zm(e){return e instanceof Rr?"timeout":e instanceof St?"signaling":e instanceof qe||e instanceof Dt?"media":e instanceof Ko||e instanceof Yo?"network":"internal"}const Wm=new Set([Ir,Xn,Go]);function jm(e){return e instanceof Zo||e instanceof qe?!1:e instanceof Dt?e.fatal:!(e instanceof Rr||e instanceof St&&Wm.has(e.code))}var Gm=class{constructor(e,t,i,r,n){this.sessionManager=e,this.deviceController=t,this.attachManager=i,this.webRTCApiProvider=r,this.networkChange$=n}createCall(e,t){return new Hm(this.sessionManager,t,{initializeManagers:i=>({vertoManager:new Xv(i,this.attachManager,this.deviceController,this.webRTCApiProvider,{nodeId:t.nodeId,onError:(r,n)=>{const s={kind:zm(r),fatal:n?.fatal??jm(r),error:r,callId:i.id,...n?.leg?{leg:n.leg}:{},...n?.legId?{legId:n.legId}:{}};i.emitError(s)},onModifyFailed:()=>{i.notifyModifyFailed()}}),callEventsManager:new Av(i)}),deviceController:this.deviceController,networkChange$:this.networkChange$},e)}};const ps=q();var Xc=class{constructor(e,t,i){this.endpoint=e,this.http=i,this.filter=r=>!0,this.mapper=r=>r,this.nextUrl=`${this.endpoint}?${t}`}async next(){if(!this.nextUrl)return this.hasMore=!1,[];const e=await this.http.request({...ts,url:this.nextUrl});if(e.ok&&e.body){const t=JSON.parse(e.body);return this.nextUrl=t.links.next,this.hasMore=!!this.nextUrl,t.data.filter(this.filter).map(this.mapper)}return ps.error("Failed to fetch entity"),[]}async id(e){const t=await this.http.request({...ts,url:`${this.endpoint}/${String(e)}`});if(t.ok&&t.body)return JSON.parse(t.body)}},Jc=class extends Z{constructor(e,t,i){super(),this.fetchController=e,this.update$=t,this.onError=i,this.collectionData=new Map,this.observablesRegistry=new Map,this.upsertData=r=>{if(!r.id)return;const n=this.collectionData.get(r.id)??{},s={},a=new Set([...Object.keys(n),...Object.keys(r)]);for(const o of a){const c=n[o],l=r[o];l!==void 0&&c!==void 0&&typeof c=="object"&&c!==null&&!Array.isArray(c)&&typeof l=="object"&&l!==null&&!Array.isArray(l)?s[o]={...c,...l}:l!==void 0?s[o]=l:s[o]=c}this.collectionData.set(r.id,s),this.observablesRegistry.get(r.id)?.next(s),this._values$.next(Array.from(this.collectionData.values()))},this._loading$=this.createBehaviorSubject(!1),this._values$=this.createReplaySubject(1),this._hasMore$=this.createBehaviorSubject(!0),this.subscribeTo(this.update$,this.upsertData),this.hasMore$=Gt(()=>Se(this.init())).pipe(wt(()=>this._hasMore$),P(),Ge(1),v(this.destroyed$))}get loading$(){return this._loading$.asObservable()}get loading(){return this._loading$.value}get values$(){return this._values$.asObservable()}get hasMore(){return this.fetchController.hasMore??!0}get updated$(){return this.cachedObservable("updated$",()=>this._loading$.pipe(P(),Er(1),N(e=>!e),S(()=>{}),v(this.destroyed$)))}get values(){return Array.from(this.collectionData.values())}async init(){if(this.fetchController.hasMore===!1){this._hasMore$.next(!1);return}await this.fetchMore()}async fetchMore(){try{this._loading$.next(!0),(await this.fetchController.next()).forEach(this.upsertData),this._hasMore$.next(this.fetchController.hasMore??!1),this._loading$.next(!1)}catch(e){ps.error("Failed to fetch initial collection data",e),this._hasMore$.next(this.fetchController.hasMore??!1),this._loading$.next(!1),this.onError?.(new Qo("fetchMore",e))}}async tryFetch(e,t){try{this._loading$.next(!0);const i=await this.fetchController[e]?.(t);return this._loading$.next(!1),i&&this.upsertData(i),i}catch(i){ps.error(`Failed to fetch data for (${String(e)}:${String(t)}) :`,i),this._loading$.next(!1),this.onError?.(new Qo(`tryFetch(${String(e)})`,i))}}get$(e){if(!this.observablesRegistry.has(e)){this.observablesRegistry.set(e,new Un(1));const t=this.collectionData.get(e);t?this.observablesRegistry.get(e)?.next(t):this.tryFetch("id",e)}return this.observablesRegistry.get(e)?.asObservable()}async find$(e,t){const i=Array.from(this.collectionData.values()).find(r=>r[e]===t)??await this.tryFetch(e,t);return i?this.get$(i.id):void 0}loadMore(){this.fetchController.hasMore!==!1&&this.fetchMore()}destroy(){this.observablesRegistry.forEach(e=>e.complete()),this.observablesRegistry.clear(),super.destroy()}},Zc=class{constructor(e,t=r=>!!r,i=r=>r){this.originalCollection=e,this.filter=t,this.mapper=i}get loading$(){return this.originalCollection.loading$}get loading(){return this.originalCollection.loading}get hasMore$(){return this.originalCollection.hasMore$}get hasMore(){return this.originalCollection.hasMore}get values(){return this.originalCollection.values.filter(this.filter).map(this.mapper)}get values$(){return this._values$??(this._values$=this.originalCollection.values$.pipe(S(e=>e.filter(this.filter).map(this.mapper))))}get$(e){const t=this.originalCollection.get$(e);return t&&t.pipe(wr(N(this.filter),S(this.mapper)))}async find$(e,t){const i=await this.originalCollection.find$(e,t);return i&&i.pipe(wr(N(this.filter),S(this.mapper)))}loadMore(){this.originalCollection.loadMore()}destroy(){this.originalCollection.destroy()}},Qc=class extends Z{constructor(e,t,i){super(),this.addressId=e,this.conversationManager=t,this.addressProvider=i,this.initConversationMessages=async()=>(this._conversationMessages=this._conversationMessages??await this.conversationManager.getConversationMessageCollection(this.id),this._conversationMessages.hasMore&&this._conversationMessages.loadMore(),this._conversationMessages),this.textMessages$=Gt(this.initConversationMessages).pipe(S(()=>this.textMessage),Ge(1),v(this.destroyed$)),this.history$=Gt(this.initConversationMessages).pipe(S(()=>this.history),Ge(1),v(this.destroyed$)),this._state$=this.createBehaviorSubject(null)}upnext(e){const t={...this._state$.value,...e};this._state$.next(t)}get state(){return this._state$.value}get id(){return this.addressId}get name(){if(!this._state$.value)throw new Y("state not initialized");return this._state$.value.name}get createdAt(){if(!this._state$.value)throw new Y("state not initialized");return this._state$.value.created_at}get defaultChannel(){return this.type==="room"?this.channels.video:this.channels.audio}get displayName$(){return this.cachedObservable("displayName$",()=>this._state$.pipe(se(),S(e=>e.display_name),v(this.destroyed$)))}get displayName(){if(!this._state$.value)throw new Y("state not initialized");return this._state$.value.display_name}get previewUrl$(){return this.cachedObservable("previewUrl$",()=>this._state$.pipe(se(),S(e=>e.preview_url),v(this.destroyed$)))}get previewUrl(){if(!this._state$.value)throw new Y("state not initialized");return this._state$.value.preview_url}get coverUrl$(){return this.cachedObservable("coverUrl$",()=>this._state$.pipe(se(),Ge(1),S(e=>e.cover_url),v(this.destroyed$)))}get coverUrl(){if(!this._state$.value)throw new Y("state not initialized");return this._state$.value.cover_url}get resourceId$(){return this.cachedObservable("resourceId$",()=>this._state$.pipe(se(),Ge(1),S(e=>e.resource_id),v(this.destroyed$)))}get resourceId(){if(!this._state$.value)throw new Y("state not initialized");return this._state$.value.resource_id}get type$(){return this.cachedObservable("type$",()=>this._state$.pipe(se(),Ge(1),S(e=>e.type),v(this.destroyed$)))}get type(){if(!this._state$.value)throw new Y("state not initialized");return this._state$.value.type}get channels$(){return this.cachedObservable("channels$",()=>this._state$.pipe(se(),Ge(1),S(e=>e.channels),v(this.destroyed$)))}get channels(){if(!this._state$.value)throw new Y("state not initialized");return this._state$.value.channels}get locked(){if(!this._state$.value)throw new Y("state not initialized");return this._state$.value.locked}get locked$(){return this.cachedObservable("locked$",()=>this._state$.pipe(se(),Ge(1),S(e=>e.locked),v(this.destroyed$)))}async sendText(e){return this.conversationManager.sendText(e,this.id)}get textMessage(){if(this._conversationMessages)return this._textMessages$=this._textMessages$??new Zc(this._conversationMessages,e=>e.subtype==="chat",e=>({id:e.id,text:e.text,created:e.ts,fromAddress$:this.addressProvider.get$(e.from_fabric_address_id)})),this._textMessages$}get history(){if(this._conversationMessages)return this._history$=this._history$??new Zc(this._conversationMessages,e=>e.subtype==="log",e=>({id:e.id,kind:e.kind,status:e.details.status,started:e.details.start_time,ended:e.details.end_time,fromAddress$:this.addressProvider.get$(e.from_fabric_address_id)})),this._history$}get activity$(){throw new ht}get activity(){throw new ht}};const Jt=q(),qm=e=>{if(Jt.debug("isRPCConnectResult check:",e),!e||typeof e!="object")return!1;const t=e,i=typeof t.identity=="string"&&typeof t.protocol=="string"&&typeof t.authorization=="object"&&typeof t.authorization.jti=="string"&&typeof t.authorization.project_id=="string"&&typeof t.authorization.fabric_subscriber=="object";return Jt.debug("isRPCConnectResult check result:",i),i};var Km=(Zt=class{constructor(t,i,r){this.id=Nr(),Jt.debug(`[PendingRPC(${this.id}) request:${t.id}: method:${t.method}] Creating PendingRPC`),this.request=t;const n=r?.timeoutMs??Zt.defaultTimeoutMs,s=r?.signal;this.promise=new Promise((a,o)=>{if(s?.aborted){o(new DOMException("The operation was aborted","AbortError"));return}let c=!1;const l=$r(i.pipe(N(u=>u.id===t.id),ye(1)),new he(u=>{const p=setTimeout(()=>{u.error(new Rr(t.id,n))},n);return()=>clearTimeout(p)}),s?new he(u=>{const p=()=>{u.error(new DOMException("The operation was aborted","AbortError"))};return s.addEventListener("abort",p),()=>s.removeEventListener("abort",p)}):yp).subscribe({next:u=>{if(c=!0,u.error){const p=new St(u.error.code,u.error.message,u.error.data,void 0,t.id);Jt.debug(`[PendingRPC(${this.id}) request:${t.id}] Rejecting promise with RPC error:`,p),o(p)}else Jt.debug(`[PendingRPC(${this.id}) request:${t.id}] Resolving promise with response:`,u),a(u);l.unsubscribe()},error:u=>{Jt.debug(`[PendingRPC(${this.id}) request:${t.id}] Rejecting promise with error:`,u),c=!0,o(u),l.unsubscribe()},complete:()=>{Jt.debug(`[PendingRPC(${this.id}) request:${t.id}] Observable completed`),c||o(new Rr(t.id,n)),l.unsubscribe()}})})}async then(t,i){return this.promise.then(t,i)}async catch(t){return this.promise.catch(t)}async finally(t){return this.promise.finally(t)}},Zt.defaultTimeoutMs=5e3,Zt);const H=q();function Ym(e){return e.fatal||!(e.error instanceof Dt)}async function Xm(e,t){return Fe(yt(e.localMediaSettled$.pipe(ye(1),wt(()=>e.selfId$.pipe(N(i=>!!i),ye(1),qi(t)))),e.errors$.pipe(N(Ym),ye(1),wt(i=>sp(()=>i.error)))))}const Jm=e=>{const t=e.to?.split("?")[0],i=e.from?.startsWith("subscriber://")?e.from.replace("subscriber://",""):e.from,r=t??i;if(!r)throw new fi("Error building Address name");return r};var Zm=class extends Z{constructor(e,t,i,r,n,s,a,o,c){super(),this.getCredential=e,this.transport=t,this.storage=i,this.authorizationStateKey=r,this.attachManager=s,this.dpopManager=o,this.agent="signalwire-js/4.0.0",this.eventAcks=!0,this.authorizationState$=this.createReplaySubject(1),this.connectVersion={major:4,minor:0,revision:0},this.callControl="routed",this._authorization$=this.createBehaviorSubject(void 0),this._errors$=this.createReplaySubject(1),this._authState$=this.createBehaviorSubject({kind:"unauthenticated"}),this._wasClientBound=!1,this._userInfo$=this.createBehaviorSubject(null),this._calls$=this.createBehaviorSubject({}),this._iceServers$=this.createBehaviorSubject([]),s.setSession(this),this.callFactory=new Gm(this,n,s,a,c),this.initialized$=Gt(()=>Se(this.init())).pipe(Ge(1),v(this.destroyed$))}get incomingCalls$(){return this.cachedObservable("incomingCalls$",()=>this.calls$.pipe(S(e=>e.filter(t=>t.direction==="inbound"))))}get incomingCalls(){return Object.values(this._calls$.value).filter(e=>e.direction==="inbound")}get userInfo$(){return this._userInfo$.asObservable()}get userInfo(){return this._userInfo$.value}get calls$(){return this.cachedObservable("calls$",()=>this._calls$.pipe(S(e=>Object.values(e))))}get calls(){return Object.values(this._calls$.value)}get iceServers(){return this._iceServers$.value}get authorization$(){return this._authorization$.asObservable()}get authorization(){return this._authorization$.value}get errors$(){return this._errors$.asObservable()}get authenticated$(){return this._authState$.pipe(S(e=>e.kind==="authenticated"),P())}get authenticated(){return this._authState$.value.kind==="authenticated"}get clientBound(){return this._wasClientBound}get authState(){return this._authState$.value}setDirectory(e){this._directory=e}async execute(e,t){try{return await this.transport.execute(e,t)}catch(i){throw H.debug("[Session] Execute Error",i),this._errors$.next(i instanceof Error?i:new Error(String(i),{cause:i})),i}}send(e){this.transport.send(e)}async init(){return await this.loadAuthorizationStateFromStorage(),this.setupMessageHandlers(),!0}setupMessageHandlers(){H.debug("[Session] Setting up message handlers"),this.subscribeTo(this.authStateEvent$,async e=>{H.debug("[Session] Authorization state event received:",e);try{await this.updateAuthorizationStateInStorage(e.authorization_state)}catch(t){H.error("[Session] Failed to handle authorization state update:",t),this._errors$.next(new Jn(t))}}),this.subscribeTo(this.transport.connectionStatus$.pipe(N(e=>e==="disconnected"||e==="reconnecting")),()=>{this._authState$.value.kind==="authenticated"&&this._authState$.next({kind:"unauthenticated"})}),this.subscribeTo(this.transport.connectionStatus$.pipe(N(e=>e==="connected"),qn(()=>(H.debug("[Session] Connection established, initiating authentication"),Se(this.authenticate()).pipe(qt(e=>(this.handleAuthenticationError(e).catch(t=>{H.error("[Session] Error handling authentication failure:",t)}),jt)))))),void 0),this.subscribeTo(this.vertoInvite$,async e=>{H.debug("[Session] Verto invite received:",e);try{await this.createInboundCall(e)}catch(t){H.error("[Session] Error handling Verto invite:",t),this._errors$.next(new Gf(t))}}),this.subscribeTo(this.vertoAttach$,async e=>{H.debug("[Session] Verto attach received:",e);try{await this.handleVertoAttach(e)}catch(t){H.error("[Session] Error handling Verto attach:",t),this._errors$.next(new qf(t))}})}async loadAuthorizationStateFromStorage(){try{const e=await this.storage.getItem(this.authorizationStateKey);this.authorizationState$.next(e??void 0)}catch(e){H.error("Failed to retrieve authorization state from storage:",e),this.authorizationState$.next(void 0)}}async updateAuthorizationStateInStorage(e){if(!e){H.debug("[Session] Removing authorization state from storage");try{await this.storage.removeItem(this.authorizationStateKey),this.authorizationState$.next(void 0)}catch(t){throw H.error("Failed to remove authorization state from storage:",t),t}return}try{H.debug("[Session] Updating authorization state in storage"),await this.storage.setItem(this.authorizationStateKey,e),this.authorizationState$.next(e)}catch(t){throw H.error("Failed to retrieve authorization state from storage:",t),t}}get authStateEvent$(){return this.cachedObservable("authStateEvent$",()=>this.signalingEvent$.pipe(fe(e=>{H.debug("[Session] Received incoming message:",e)}),ue(wv,"params"),fe(e=>{H.debug("[Session] Authorization state event received:",e.authorization_state)})))}get signalingEvent$(){return this.cachedObservable("signalingEvent$",()=>this.transport.incomingEvent$.pipe(ue(cs,"params"),ut()))}get vertoInvite$(){return this.cachedObservable("vertoInvite$",()=>this.signalingEvent$.pipe(N(zr),N(e=>Gc(e.params)),S(e=>({node_id:e.node_id,...e.params.params}))))}get vertoAttach$(){return this.cachedObservable("vertoAttach$",()=>this.signalingEvent$.pipe(N(zr),N(e=>qc(e.params)),S(e=>({node_id:e.node_id,...e.params.params}))))}get contexts(){return[]}get eventing(){return[]}get topics(){return[]}get authentication(){const e=this.getCredential();if(!e.token)throw new Y("Credential token is undefined");return{jwt_token:e.token}}async connect(){await Fe(this.initialized$),await this.transport.connect(),await Fe(this.authenticated$.pipe(v(this.destroyed$),N(Boolean),ye(1),qi({first:15e3})))}async handleAuthenticationError(e){H.error("Authentication error:",e);const t=e instanceof St&&(e.code===Ir||e.code===Go||e.code===Xn),i=await Fe(this.authorizationState$.pipe(ye(1)))!==void 0;t&&i?(H.debug("[Session] Recoverable auth error — cleaning up stored state and reconnecting fresh"),await this.discardResumeStateAndReconnect()):this._errors$.next(e)}async discardResumeStateAndReconnect(){try{await this.cleanupStoredConnectionParams()}catch(e){H.error("Failed to cleanup stored connection params:",e)}finally{this.transport.reconnect()}}async cleanupStoredConnectionParams(){await this.transport.setProtocol(void 0),await this.updateAuthorizationStateInStorage(void 0),this._authorization$.next(void 0)}async teardownSessionState(){await this.cleanupStoredConnectionParams(),await this.attachManager.detachAll()}async updateAuthState(e){try{await this.storage.setItem(this.authorizationStateKey,e)}catch(t){H.error("Failed to update authorization state in storage:",t),this._errors$.next(new Jn(t))}}async reauthenticate(e,t,i){H.debug("[Session] Re-authenticating session");try{let r=t;if(!r&&this.dpopManager?.initialized)try{r=await this.dpopManager.createRpcProof({method:"signalwire.reauthenticate"})}catch(s){if(this.clientBound)throw s;H.warn("[Session] Failed to create DPoP proof for reauthenticate:",s)}const n=Qg({project:this._authorization$.value?.project_id??"",jwt_token:e,...r?{dpop_token:r}:{}});await Eo(Se(this.transport.execute(n)).pipe(nc(),ye(1),qt(s=>{throw H.error("[Session] Re-authentication RPC failed:",s),s}))),i?.clientBound&&(this._wasClientBound=!0),H.debug("[Session] Re-authentication successful, updating stored auth state")}catch(r){throw H.error("[Session] Re-authentication failed:",r),this._errors$.next(new Jn(r)),r}}async authenticate(){H.debug("[Session] Starting authentication process");const e=await Fe(Ao({protocol:this.transport.protocol$,authorization_state:this.authorizationState$}).pipe(ye(1)));H.debug(`[Session] Persisted params:
`,{protocol:e.protocol,authStateLength:e.authorization_state?.length});const t=e.authorization_state&&e.protocol,i=this.getCredential().token,r=t&&i;let n;if(r)H.debug("[Session] Reconnecting with stored jwt_token + authorization_state");else{const o=this.getCredential(),c=o.expiry_at!==void 0&&o.expiry_at<=Date.now()+Yp;this.onBeforeReconnect&&(this.clientBound||c)&&(H.debug("[Session] Refreshing credentials before fresh connect"),await this.onBeforeReconnect())}if(this.dpopManager?.initialized)try{n=await this.dpopManager.createRpcProof({method:"signalwire.connect"})}catch(o){if(this.clientBound)throw o;H.warn("[Session] Failed to create DPoP proof for connect, proceeding without:",o)}const s=Zg({authentication:r?{jwt_token:i}:this.authentication,version:this.connectVersion,agent:this.agent,contexts:this.contexts,eventing:this.eventing,topics:this.topics,event_acks:this.eventAcks,...n?{dpop_token:n}:{},...r?{authorization_state:e.authorization_state,protocol:e.protocol}:{}}),a=await Eo(Se(this.transport.execute(s)).pipe(nc(),S(o=>o.result),N(qm),fe(()=>{H.debug("[Session] Response passed filter, processing authentication result")}),ye(1),qt(o=>{throw H.error("[Session] Authentication RPC failed:",o),o})));H.debug("[Session] Processing authentication result:",{hasProtocol:!!a.protocol,hasAuthorization:!!a.authorization,hasIceServers:!!a.ice_servers}),a.protocol&&await this.transport.setProtocol(a.protocol),this._authorization$.next(a.authorization),a.authorization.cnf?.jkt&&(this._wasClientBound=!0),this._iceServers$.next(a.ice_servers??[]),this._authState$.next({kind:"authenticated"}),H.debug("[Session] Authentication completed successfully")}async disconnect(){this.transport.disconnect(),this._authState$.next({kind:"unauthenticated"}),await this.teardownSessionState()}async createInboundCall(e){const t=await this.createCall({nodeId:e.node_id,callId:e.callID,initOffer:e.sdp,toName:e.callee_id_name,to:e.callee_id_number,fromName:e.caller_id_name,from:e.caller_id_number,displayDirection:e.display_direction,userVariables:e.userVariables});this._calls$.next({[`${t.id}`]:t,...this._calls$.value})}async handleVertoAttach(e){const{callID:t}=e;if(t in this._calls$.value){H.debug(`[Session] Verto attach for existing call ${t}, deferring to per-call handler`);return}const i=await this.attachManager.consumePendingAttachment(t);H.debug(`[Session] Creating reattached call for callID: ${t}`);const r=await this.createCall({nodeId:e.node_id,callId:t,toName:e.callee_id_name,to:e.callee_id_number,fromName:e.caller_id_name,from:e.caller_id_number,reattach:!0,...i});this._calls$.next({[`${r.id}`]:r,...this._calls$.value})}async createOutboundCall(e,t={}){const i=e instanceof Qc?e.defaultChannel:e;let r;try{return r=await this.createCall({to:i,...t}),await Xm(r,Up),this._calls$.next({[`${r.id}`]:r,...this._calls$.value}),r}catch(n){H.error("[Session] Error creating outbound call:",n),r?.destroy();const s=new Xo(n instanceof jn?"Call create timeout":"Call creation failed",n,"outbound");throw this._errors$.next(s),s}}async createCall(e={}){try{const t=Jm(e);let i;try{if(!this._directory)throw new Y("Directory not initialized");const n=await this._directory.findAddressIdByURI(t);if(!n)throw new Y(`Address name: ${t} not found`);if(i=this._directory.get(n),!i)throw new Y(`Address ID: ${n} not found`)}catch{H.warn(`[Session] Directory lookup failed for ${t}, proceeding with raw URI`)}const r=this.callFactory.createCall(i,{...e});return this.subscribeTo(r.status$.pipe(N(n=>n==="destroyed"),ye(1)),()=>{const{[`${r.id}`]:n,...s}=this._calls$.value;this._calls$.next(s)}),r}catch(t){throw H.error("[Session] Error creating call session:",t),new Xo("Call create error",t,e.initOffer?"inbound":"outbound")}}destroy(){for(const e of Object.values(this._calls$.value))e.hangup();super.destroy()}},Qm=class{constructor(e){this.clientSessionManager=e}get authenticated$(){return this.clientSessionManager.authenticated$}get authenticated(){return this.clientSessionManager.authenticated}get clientBound(){return this.clientSessionManager.clientBound}get signalingEvent$(){return this.clientSessionManager.signalingEvent$}get iceServers(){return this.clientSessionManager.iceServers}get callControl(){return this.clientSessionManager.callControl}async execute(e,t){return this.clientSessionManager.execute(e,t)}get incomingCalls$(){return this.clientSessionManager.incomingCalls$}get incomingCalls(){return this.clientSessionManager.incomingCalls}get calls$(){return this.clientSessionManager.calls$}get calls(){return this.clientSessionManager.calls}};const eb=e=>typeof e=="string",fs=q();var tb=class extends Xc{constructor(e,t){super(`/api/fabric/conversations/${e}/messages`,"page_size=100",t),this.groupId=e}},ib=class extends Jc{constructor(e,t,i,r){super(new tb(e,i),t,r)}},rb=class{constructor(e,t,i,r){this.clientSession=e,this.http=t,this.getUserAddressId=i,this.onError=r,this.groupIds=new Map}async join(e){const t=this.getUserAddressId();try{const i=await this.http.request({...Fr,url:"/api/fabric/conversations/join",body:JSON.stringify({from_fabric_address_id:t,fabric_address_ids:[e,t]})});if(i.ok&&i.body){const r=JSON.parse(i.body);if(eb(r.group_id))return this.groupIds.set(e,r.group_id),r.group_id}throw new Jo("Join Failed - Unexpected response")}catch(i){throw fs.error("[ConversationsManager] Failed to join conversation:",i),i}}async getConversationMessageCollection(e){const t=this.groupIds.get(e)??await this.join(e);return Promise.resolve(new ib(t,this.clientSession.signalingEvent$.pipe(ue(Fc,"params"),fe(i=>fs.debug("[ConversationsManager ] Conversation Event:",i)),S(i=>({...i}))),this.http,this.onError))}async sendText(e,t){const i=this.groupIds.get(t)??await this.join(t),r=this.getUserAddressId();try{if((await this.http.request({...Fr,url:"/api/fabric/messages",body:JSON.stringify({group_id:i,from_fabric_address_id:r,text:e})})).ok)return;throw new Jo("Send Text Failed - Unexpected response")}catch(n){throw fs.error("[ConversationsManager] Failed to send text message:",n),n}}};const Oe=q();function jr(e){return e.expires_at?e.expires_at:e.expires_in?Math.floor(Date.now()/1e3)+e.expires_in:(Oe.warn("[DeviceToken] Could not determine token expiry, using default"),Math.floor(Date.now()/1e3)+Ar)}function el(e){return e.expires_in?e.expires_in:e.expires_at?Math.max(e.expires_at-Math.floor(Date.now()/1e3),1):Ar}var nb=class extends Z{constructor(e,t,i,r){super(),this.dpopManager=e,this.http=t,this.errorHandler=i,this.getCredential=r,this._currentToken$=this.createBehaviorSubject(null),this._refreshInProgress=!1,this._paused=!1,this._effectiveExpireIn=Ar,this.subscribeTo(this._currentToken$.pipe(N(Boolean),wt(n=>{const s=jr(n),a=Math.max(s*1e3-Date.now()-Yn,1e3);return Oe.debug(`[DeviceToken] Scheduling Client Bound SAT refresh in ${a}ms`),pi(a)})),()=>{this.executeRefresh()})}get effectiveExpireIn(){return this._effectiveExpireIn}async activate(e,t,i){const{satClaims:r}=e;if(!r?.scope?.includes(jp))return Oe.debug("[DeviceToken] No sat:refresh scope, skipping Client Bound SAT activation"),{activated:!1,reason:"no-scope"};this._session=t,this._updateCredential=i;try{const n=this._currentToken$.value;if(n&&this.isTokenFresh(n)){Oe.debug("[DeviceToken] Reusing cached Client Bound SAT — skipping /devices/token");const o=await this.dpopManager.createRpcProof({method:"signalwire.reauthenticate"});return await t.reauthenticate(n.token,o,{clientBound:!0}),i({token:n.token}),{activated:!0}}const s=await this.obtainToken();!s.expires_at&&!s.expires_in&&r.expires_at&&(s.expires_at=r.expires_at),this._effectiveExpireIn=el(s);const a=await this.dpopManager.createRpcProof({method:"signalwire.reauthenticate"});return await t.reauthenticate(s.token,a,{clientBound:!0}),i({token:s.token}),Oe.info("[DeviceToken] Client Bound SAT activated successfully"),this.emitCurrentToken(s),{activated:!0}}catch(n){return Oe.error("[DeviceToken] Failed to activate Client Bound SAT:",n),this.errorHandler(new Pr(n,"Failed to activate Client Bound SAT")),{activated:!1,reason:"endpoint-failed"}}}emitCurrentToken(e){const t=e.expires_at?e:{...e,expires_at:jr(e)};this._currentToken$.next(t)}isTokenFresh(e){return jr(e)*1e3-Date.now()>Yn}async obtainToken(){const e=await this.dpopManager.createHttpProof({method:"POST",uri:Bo}),t=await this.http().request({url:Bo,...Fr,body:JSON.stringify({dpop_token:e,expire_in:Ar})});if(!t.ok||!t.body)throw new tc(`Failed to obtain device token: ${t.status} ${t.statusText}`);const i=JSON.parse(t.body);if(!i.token)throw new tc("Device token response missing token field");return i}async refreshToken(e,t,i){Oe.debug("[DeviceToken] Refreshing Client Bound SAT");const r=await this.dpopManager.createHttpProof({method:"POST",uri:Ho,accessToken:t}),n=await this.http().request({url:Ho,...Fr,body:JSON.stringify({dpop_token:r,expire_in:this._effectiveExpireIn})});if(!n.ok||!n.body)throw new Kt(`Failed to refresh device token: ${n.status} ${n.statusText}`);const s=JSON.parse(n.body);if(!s.token)throw new Kt("Device token refresh response missing token field");!s.expires_at&&!s.expires_in&&(s.expires_in=this._effectiveExpireIn),this._effectiveExpireIn=el(s);const a=await this.dpopManager.createRpcProof({method:"signalwire.reauthenticate"});return await e.reauthenticate(s.token,a),i({token:s.token}),Oe.info("[DeviceToken] Client Bound SAT refreshed successfully"),s}async executeRefresh(){if(this._paused){Oe.debug("[DeviceToken] Manager paused, skipping refresh");return}if(this._refreshInProgress){Oe.debug("[DeviceToken] Refresh already in progress, skipping");return}const e=this._session,t=this._updateCredential;if(!e||!t){Oe.warn("[DeviceToken] Cannot refresh: session or updateCredential not set");return}if(!e.authenticated){Oe.debug("[DeviceToken] Session not authenticated, deferring refresh");return}this._refreshInProgress=!0;try{const i=this.getCredential().token;if(!i)throw new Kt("No current token available for refresh");const r=await this.retryRefresh(e,i,t);this.emitCurrentToken(r)}catch(i){Oe.error("[DeviceToken] Automatic Client Bound SAT refresh failed:",i),this.errorHandler(i instanceof Kt?i:new Kt("Automatic token refresh failed",i))}finally{this._refreshInProgress=!1}}async retryRefresh(e,t,i){let r;for(let n=0;n<zo;n++)try{return await this.refreshToken(e,t,i)}catch(s){if(r=s,n<zo-1){const a=Gp*Math.pow(2,n);Oe.warn(`[DeviceToken] Refresh attempt ${n+1} failed, retrying in ${a}ms`),await new Promise(o=>setTimeout(o,a))}}throw r instanceof Error?r:new Kt("All refresh retries exhausted",r)}refreshNowIfDue(){const e=this._currentToken$.value;e&&jr(e)*1e3-Date.now()<=Yn&&(Oe.debug("[DeviceToken] Resume: cached SAT past refresh window; refreshing now"),this.executeRefresh())}pause(){this._paused=!0}resume(){this._paused=!1}destroy(){super.destroy()}};const nt=q(),sb=(e,t,i,r)=>new nb(e,t,i,r);var ab=class extends Z{constructor(e,t){super(),this.deps=t,this._activating=!1,this._activationGeneration=0,this._developerRefreshInProgress=!1,e?.initialized&&(this._deviceTokenManager=(t.deviceTokenManagerFactory??sb)(e,t.http,i=>t.notifier.onError(i),()=>t.store.read()))}get clientBoundSATAvailable(){return this._deviceTokenManager!==void 0}get developerRefreshArmed(){return this._developerTimerId!==void 0}scheduleDeveloperRefresh(e,t,i=0){this._activeProvider=e,this._developerTimerId!==void 0&&clearTimeout(this._developerTimerId);const r=i===0?Math.max(t-Date.now()-jo,1e3):Math.min(qp*Math.pow(2,i)*(.5+Math.random()*.5),Kp);this._developerTimerId=setTimeout(()=>{this._developerTimerId=void 0,this.executeDeveloperRefresh(e,t,i)},r)}async executeDeveloperRefresh(e,t,i){if(this._developerRefreshInProgress){nt.debug("[Coordinator] Developer refresh already in progress; skipping");return}this._developerRefreshInProgress=!0;try{const r=await this.refreshCredential(e);this.deps.store.write(r),this.deps.store.persist(r);try{await this.deps.notifier.onCredentialRefreshed(r)}catch(n){nt.warn("[Coordinator] onCredentialRefreshed rejected (non-fatal):",n)}nt.info("[Coordinator] Credentials refreshed successfully."),r.expiry_at&&this.scheduleDeveloperRefresh(e,r.expiry_at,0)}catch(r){const n=i+1;nt.error(`[Coordinator] Credential refresh failed (attempt ${n}/${Wo}):`,r),this.deps.notifier.onError(r instanceof Error?r:new Error(String(r),{cause:r})),n<Wo?this.scheduleDeveloperRefresh(e,t,n):(nt.error("[Coordinator] Credential refresh exhausted all retries. Disconnecting."),this.deps.notifier.onError(new Kt("Credential refresh failed after max retries")),this.deps.notifier.onRefreshExhausted())}finally{this._developerRefreshInProgress=!1}}forceRefreshIfDue(){if(this._developerTimerId!==void 0&&this._activeProvider){const e=this.deps.store.read().expiry_at;e!==void 0&&Date.now()>=e-jo&&(nt.debug("[Coordinator] Resume: credential past refresh window; forcing refresh"),clearTimeout(this._developerTimerId),this._developerTimerId=void 0,this.executeDeveloperRefresh(this._activeProvider,e,0));return}this._deviceTokenManager?.refreshNowIfDue()}syncExpiryFromAuthorization(e,t){const i=e?.fabric_subscriber?.expires_at;if(!i)return;const r=i*1e3,n=this.deps.store.read();if(n.expiry_at===r)return;nt.debug(`[Coordinator] Correcting credential expiry from server authorization: ${new Date(r).toISOString()}`);const s={...n,expiry_at:r};this.deps.store.write(s),this.deps.store.persist(s),t?.refresh&&this.scheduleDeveloperRefresh(t,r)}async refreshCredential(e){if(this._refreshInFlight)return this._refreshInFlight;if(!e.refresh)throw new Mt("Credential provider does not support refresh");const t=e.refresh();this._refreshInFlight=t;const i=()=>{this._refreshInFlight===t&&(this._refreshInFlight=void 0)};return t.then(i,i),t}cancelDeveloperRefresh(){this._developerTimerId!==void 0&&(clearTimeout(this._developerTimerId),this._developerTimerId=void 0)}suspend(){this.cancelDeveloperRefresh(),this._deviceTokenManager?.pause()}async activate(e,t){if(this._activating){nt.debug("[Coordinator] activate() in flight; ignoring re-entrant call");return}if(!this._deviceTokenManager)return;this._deviceTokenManager.resume();const i=++this._activationGeneration;this._activating=!0;try{const r=await this.withActivationTimeout(this._deviceTokenManager.activate(e,t,n=>this.deps.store.merge(n)));if(i!==this._activationGeneration){nt.debug("[Coordinator] activate() result discarded (preempted by newer activation)");return}if(r.activated){this.cancelDeveloperRefresh(),nt.debug("[Coordinator] Developer refresh disabled — Client Bound SAT owns refresh");return}nt.warn(`[SignalWire] [SW-REFRESH-FALLBACK] Client Bound SAT declined (reason=${r.reason}); using developer-provided refresh handler.`),this.deps.notifier.onWarning({code:"credential_refresh_fallback",source:"CredentialProvider",reason:r.reason,message:`Client Bound SAT activation declined (${r.reason}); using developer-provided refresh.`})}finally{this._activating=!1}}destroy(){this.cancelDeveloperRefresh(),this._deviceTokenManager?.destroy(),this._deviceTokenManager=void 0,super.destroy()}async withActivationTimeout(e){return new Promise(t=>{const i=setTimeout(()=>{this._deviceTokenManager?.pause(),t({activated:!1,reason:"activation-timeout"})},Xp);e.then(r=>{clearTimeout(i),t(r)},r=>{clearTimeout(i),this.deps.notifier.onError(r instanceof Error?r:new Error(String(r))),t({activated:!1,reason:"endpoint-failed"})})})}};const gs=q(),ob=1e3;function cb(){try{if(typeof navigator<"u"&&navigator.userAgent)return navigator.userAgent}catch{}return"unknown"}var lb=class extends Z{constructor(e){super(),this._events=[],this._calls=[],this._deviceChanges=[],this._eventRecorded$=this.createSubject(),this._sdkVersion=e.sdkVersion,this._maxEvents=e.maxEvents??ob,gs.debug("DiagnosticsCollector initialized",{sdkVersion:this._sdkVersion,maxEvents:this._maxEvents})}get eventRecorded$(){return this._eventRecorded$.asObservable()}record(e,t,i){const r={timestamp:Date.now(),category:e,event:t,...i!==void 0?{details:i}:{}};this._events=this._appendToBuffer(this._events,r),this._eventRecorded$.next(r)}recordDeviceChange(e,t){const i={timestamp:Date.now(),category:"device",event:e,...t!==void 0?{details:t}:{}};this._deviceChanges=this._appendToBuffer(this._deviceChanges,i),this._events=this._appendToBuffer(this._events,i),this._eventRecorded$.next(i)}recordCallSummary(e){this._calls=this._appendCallToBuffer(this._calls,e),this.record("call","call_summary",{callId:e.callId,direction:e.direction,duration:e.duration,finalStatus:e.finalStatus})}export(){return{sdkVersion:this._sdkVersion,userAgent:cb(),exportedAt:Date.now(),events:[...this._events],calls:[...this._calls],deviceChanges:[...this._deviceChanges]}}clear(){this._events=[],this._calls=[],this._deviceChanges=[],gs.debug("DiagnosticsCollector buffers cleared")}destroy(){gs.debug("DiagnosticsCollector destroyed"),super.destroy()}_appendToBuffer(e,t){const i=[...e,t];return i.length>this._maxEvents?i.slice(i.length-this._maxEvents):i}_appendCallToBuffer(e,t){const i=[...e,t];return i.length>this._maxEvents?i.slice(i.length-this._maxEvents):i}};const tl=e=>(e?.length??0)===0,db=e=>{e.pipe(ye(1)).subscribe()},ub=q();var hb=class extends Xc{constructor(e){super("/api/fabric/addresses","sort_by=name&sort_order=asc",e)}async name(e){const t=await this.http.request({...ts,url:`${this.endpoint}?name=${encodeURIComponent(e)}`});if(t.ok&&t.body){const i=JSON.parse(t.body);if(!tl(i.data))return i.data[0]}ub.error("Failed to fetch addresses")}},pb=class extends Jc{constructor(e,t,i){super(new hb(t),e,i)}},fb=class extends Z{constructor(e,t,i,r){super(),this.http=e,this.conversationManager=i,this.onError=r,this.addNewAddress=n=>{const s=new Qc(n,this.conversationManager,this),a=this._statesCollection.get$(n)?.pipe(se(),S(o=>(s.upnext(o),s)));a&&(db(a),this._observableRegistry.set(n,a)),this._addressesInstances.set(n,s)},this._addresses$=this.createBehaviorSubject([]),this._addressesInstances=new Map,this._observableRegistry=new Map,this._statesCollection=new pb(t.signalingEvent$.pipe(ue(Uc,"params"),S(n=>({}))),this.http,this.onError),this.initSubscriptions()}get loading(){return this._statesCollection.loading}initSubscriptions(){this.subscribeTo(this._statesCollection.updated$,()=>{const e=Array.from(this._addressesInstances.values().map(i=>i.id)),t=this._statesCollection.values.filter(i=>!e.includes(i.id));tl(t)||(t.forEach(i=>this.addNewAddress(i.id)),this._addresses$.next(Array.from(this._addressesInstances.values())))})}get addresses$(){return this._addresses$.asObservable()}get addresses(){return this._addresses$.value}get hasMore$(){return this._statesCollection.hasMore$}get loading$(){return this._statesCollection.loading$}loadMore(){this._statesCollection.hasMore&&this._statesCollection.loadMore()}get$(e){return this._observableRegistry.has(e)||this.addNewAddress(e),this._observableRegistry.get(e)}get(e){return this._addressesInstances.get(e)}async findAddressIdByURI(e){let t=this._addressesInstances.values().find(i=>i.name===e)?.id;if(!t){const i=await this._statesCollection.find$("name",e);if(i){const r=await Fe(i);this.addNewAddress(r.id),t=r.id}}return t}};const il=q();var gb=(st=class extends Z{constructor(t,i,r,n={}){super(),this.WebSocketConstructor=t,this.endpoint=i,this.outgoingMessages$=r,this.messageQueue=[],this.shouldReconnect=!1,this.boundHandleOpen=()=>this.handleOpen(),this.boundHandleClose=s=>this.handleClose(s),this.boundHandleError=()=>this.handleError(),this.boundHandleMessage=s=>this.handleMessage(s),this._status$=this.createBehaviorSubject("disconnected"),this._incomingMessages$=this.createSubject(),this._errors$=this.createReplaySubject(1),this.reconnectDelayMin=n.reconnectDelayMin??st.DEFAULT_RECONNECT_DELAY_MIN_MS,this.reconnectDelayMax=n.reconnectDelayMax??st.DEFAULT_RECONNECT_DELAY_MAX_MS,this.connectionTimeout=n.connectionTimeout??st.DEFAULT_CONNECTION_TIMEOUT_MS,this.currentReconnectDelay=this.reconnectDelayMin,this.subscriptions.push(this.outgoingMessages$.subscribe(s=>{this.send(s)}))}get status$(){return this._status$.asObservable()}get incomingMessages$(){return this._incomingMessages$.asObservable()}get errors$(){return this._errors$.asObservable()}connect(){this._status$.value==="connecting"||this._status$.value==="connected"||(this.shouldReconnect=!0,this._status$.next("connecting"),this.createWebSocket())}disconnect(){this.shouldReconnect=!1,this.clearReconnectTimer(),this.clearConnectionTimeout();const t=this._status$.value;t==="connected"||t==="connecting"||t==="reconnecting"?this.socket?(this._status$.next("disconnecting"),this.socket.close()):this._status$.next("disconnected"):this._status$.next("disconnected")}reconnect(){this.shouldReconnect=!0,this._status$.next("reconnecting"),this.scheduleReconnection()}send(t){this._status$.value==="connected"&&this.socket?.readyState===1?(il.wsTraffic({type:"send",raw:t}),this.socket.send(t)):this.messageQueue.push(t)}createWebSocket(){try{this.closeExistingSocket(),this.socket=new this.WebSocketConstructor(this.endpoint),this.setupWebSocketListeners(),this.startConnectionTimeout()}catch(t){const i=t instanceof Error?t:new fi("Failed to create WebSocket");this._errors$.next(i),this.handleConnectionError()}}closeExistingSocket(){if(!this.socket)return;const t=this.socket;this.socket=void 0,this.removeWebSocketListeners(t);try{t.close()}catch{}}setupWebSocketListeners(){this.socket&&(this.socket.addEventListener("open",this.boundHandleOpen),this.socket.addEventListener("close",this.boundHandleClose),this.socket.addEventListener("error",this.boundHandleError),this.socket.addEventListener("message",this.boundHandleMessage))}removeWebSocketListeners(t){try{t.removeEventListener("open",this.boundHandleOpen),t.removeEventListener("close",this.boundHandleClose),t.removeEventListener("error",this.boundHandleError),t.removeEventListener("message",this.boundHandleMessage)}catch{}}handleOpen(){this.clearConnectionTimeout(),this._status$.next("connected"),this.currentReconnectDelay=this.reconnectDelayMin,this.flushMessageQueue()}handleClose(t){this.clearConnectionTimeout(),this.shouldReconnect?(this._status$.next("reconnecting"),this.scheduleReconnection()):this._status$.next("disconnected")}handleError(){const t=new Ko("WebSocket connection error");this._errors$.next(t),this.handleConnectionError()}handleMessage(t){il.wsTraffic({type:"recv",raw:t.data}),this._incomingMessages$.next(t)}handleConnectionError(){this.reconnect()}scheduleReconnection(){this.clearReconnectTimer();const t=this.currentReconnectDelay*(.5+Math.random()*.5);this.reconnectTimer=setTimeout(()=>{this.shouldReconnect&&(this._status$.next("connecting"),this.createWebSocket(),this.increaseReconnectDelay())},t)}increaseReconnectDelay(){this.currentReconnectDelay=Math.min(this.currentReconnectDelay*2,this.reconnectDelayMax)}startConnectionTimeout(){this.clearConnectionTimeout(),this.connectionTimeoutTimer=setTimeout(()=>{if(this._status$.value==="connecting"){const t=new Uf("WebSocket connection timeout");this._errors$.next(t),this.socket&&this.socket.close()}},this.connectionTimeout)}clearConnectionTimeout(){this.connectionTimeoutTimer&&(clearTimeout(this.connectionTimeoutTimer),this.connectionTimeoutTimer=void 0)}clearReconnectTimer(){this.reconnectTimer&&(clearTimeout(this.reconnectTimer),this.reconnectTimer=void 0)}flushMessageQueue(){for(;this.messageQueue.length>0&&this.socket?.readyState===1;){const t=this.messageQueue.shift();t!==void 0&&this.socket.send(t)}}},st.DEFAULT_RECONNECT_DELAY_MIN_MS=1e3,st.DEFAULT_RECONNECT_DELAY_MAX_MS=3e4,st.DEFAULT_CONNECTION_TIMEOUT_MS=1e4,st);function vb(e){return as(e)&&e.method==="signalwire.ping"}const we=q();var mb=class extends Z{constructor(e,t,i,r,n){super(),this.storage=e,this.protocolKey=t,this.onError=n,this.protocol$=this.createReplaySubject(1),this.isConnecting=!1,this.isConnected=!1,this.ackEvent=()=>fe(s=>{if(cs(s))try{we.debug("[Transport] Sending event ack",{eventId:s.id}),this.send(dv(s.id))}catch(a){we.error("[Transport] Failed to send event acknowledgment:",a)}}),this.replySignalwirePing=()=>N(s=>{if(vb(s)){try{we.debug("[Transport] Received ping, sending pong",{pingId:s.id}),this.send(ev(s.id))}catch(a){we.error("[Transport] Failed to send ping response:",a)}return!1}return!0}),this.discardStaleEvents=()=>N(s=>{if(!cs(s))return!0;const a=s.params.event_channel;if(!a)return!0;if(s.params.event_type.startsWith("conversation."))return we.debug(`[Transport] Received conversation event: ${s.params.event_type} (event_channel: ${a})`),!0;const o=this._currentProtocol;if(!o)return!0;if(!a.includes(o)){const c=s.params.event_type;return we.warn(`[Transport] Discarding stale event: ${c} (event_channel does not match current protocol)`),!1}return!0}),this._outgoingMessages$=this.createSubject(),this._webSocketConnections=new gb(i,r,this._outgoingMessages$.asObservable(),{connectionTimeout:h.instance.connectionTimeout,reconnectDelayMin:h.instance.reconnectDelayMin,reconnectDelayMax:h.instance.reconnectDelayMax}),this.subscribeTo(this._webSocketConnections.errors$,s=>{this.onError?.(s)}),this.initialized$=Gt(()=>Se(this._init())).pipe(Ge(1),v(this.destroyed$)),this._jsonRPCMessage$=this._webSocketConnections.incomingMessages$.pipe(S(s=>{try{return JSON.parse(s.data)}catch(a){return we.error("[Transport] Failed to parse incoming message:",a),this.onError?.(new Kf(a)),null}}),N(s=>s!==null&&(os(s)||as(s))),qt(s=>(we.error("[Transport] Message processing error:",s),this.onError?.(s instanceof Error?s:new Error(String(s),{cause:s})),jt)),ut(),v(this.destroyed$)),this._jsonRPCResponse$=this._jsonRPCMessage$.pipe(N(os)),this._incomingEvent$=this._jsonRPCMessage$.pipe(this.ackEvent(),this.replySignalwirePing(),N(s=>!os(s)),this.discardStaleEvents(),ut(),v(this.destroyed$))}async setProtocol(e){this._currentProtocol=e,this.protocol$.next(e),await this._updateProtocolInStorage(e)}get incomingEvent$(){return this._incomingEvent$}get connectionStatus$(){return this._webSocketConnections.status$}async connect(){return this.isConnecting||this.isConnected?(we.warn("[Transport] Already connecting or connected"),Promise.resolve()):new Promise((e,t)=>{this.isConnecting=!0,this.subscribeTo(this.initialized$,()=>{this._webSocketConnections.connect();const i=this._webSocketConnections.status$.pipe(N(r=>r==="connected"||r==="disconnected"),ye(1),qi(1e4)).subscribe({next:r=>{if(r==="connected")this.isConnecting=!1,this.isConnected=!0,we.debug("[Transport] Connection established"),e();else{this.isConnecting=!1;const n=new Yo("Failed to connect");we.error("[Transport] Connection failed"),this.onError?.(n),t(n)}},error:r=>{this.isConnecting=!1,we.error("[Transport] Connection error:",r),this.onError?.(r instanceof Error?r:new Error(String(r),{cause:r})),t(r)}});this.subscriptions.push(i),this.subscribeTo(this._webSocketConnections.status$.pipe(N(r=>r==="disconnected")),()=>{we.debug("[Transport] Disconnected"),this.isConnected=!1})})})}reconnect(){this._webSocketConnections.reconnect()}async execute(e,t){return this.send(e),new Km(e,this._jsonRPCResponse$,t).promise}send(e){const t=JSON.stringify(e);this._outgoingMessages$.next(t)}disconnect(){we.debug("[Transport] Disconnecting"),this.isConnected=!1,this.isConnecting=!1,this._webSocketConnections.disconnect()}destroy(){we.debug("[Transport] Destroying"),this.disconnect(),super.destroy(),this._webSocketConnections.destroy()}async _loadProtocolFromStorage(){try{const e=await this.storage.getItem(this.protocolKey);this._currentProtocol=e??void 0,this.protocol$.next(e??void 0)}catch(e){throw we.error("Failed to retrieve protocol from storage:",e),e}}async _updateProtocolInStorage(e){if(!e){try{await this.storage.removeItem(this.protocolKey)}catch(t){throw we.error("Failed to remove protocol from storage:",t),t}return}try{const t=await this.storage.getItem(this.protocolKey);(!t||t!==e)&&await this.storage.setItem(this.protocolKey,e)}catch(t){throw we.error("Failed to update protocol in storage:",t),t}}async _init(){return await this._loadProtocolFromStorage(),!0}};const V=q(),vs="sw:client_bound",bb=e=>{if(typeof e=="string"){const t=e.indexOf("?");if(t!==-1){const i=e.substring(t+1),r=new URLSearchParams(i).get("channel");if(r==="video")return{audio:!0,video:!0,receiveVideo:!0};if(r==="audio")return{audio:!0,video:!1}}}return{}};var _b=class extends Z{constructor(e,t={}){super(),this.preferences=new Eg,this._user$=this.createBehaviorSubject(void 0),this._directory$=this.createBehaviorSubject(void 0),this._credentialRecovered=!1,this._isConnected$=this.createBehaviorSubject(!1),this._isRegistered$=this.createBehaviorSubject(!1),this._errors$=this.createReplaySubject(1),this._warnings$=this.createReplaySubject(10),this._options={},this._deps=new Rg,this._credentialProvider=e,this._options={...h.instance.defaultSignalWireOptions,...t},this._options.storageImplementation&&(this._deps.storageImpl=this._options.storageImplementation),this._options.persistSession&&(this._deps.persistSession=!0),this._options.webSocketConstructor&&(this._deps.WebSocket=this._options.webSocketConstructor),this._options.savePreferences&&this.preferences.enableSavePreferences(this._deps.storage),this._options.webRTCApiProvider&&(this._deps.webRTCApiProvider=this._options.webRTCApiProvider),this._options.logger!==void 0&&ig(this._options.logger),this._options.logLevel&&ng(this._options.logLevel),this._options.debug&&rg(this._options.debug),this._deviceController=this._deps.deviceController,this._options.skipDeviceMonitoring||this._deviceController.enableDeviceMonitoring(),this.subscribeTo(this._deviceController.errors$,i=>{this._errors$.next(i)}),this.initResilienceSubsystems(),this.resolveCredentials().then(()=>{this.init().catch(i=>{V.error("[SignalWire] Initialization error:",i),this._deps.storage.removeItem("sw:cached_credential"),this._deps.storage.removeItem("sw:cached_credential","local"),this._errors$.next(i instanceof Error?i:new Error(String(i),{cause:i}))})}).catch(i=>{V.error("[SignalWire] Initialization error:",i),this._errors$.next(i instanceof Error?i:new Error(String(i),{cause:i}))})}createRefreshHttpController(){return new sc(this._deps.apiHost,()=>this._deps.credential)}async initDPoP(){if(this._dpopManager?.initialized)return this._dpopManager.fingerprint;try{this._dpopManager=new Lg;const e=await this._dpopManager.init();return V.debug("[SignalWire] DPoP initialized, fingerprint available"),e}catch(e){V.warn("[SignalWire] DPoP initialization failed, proceeding without DPoP:",e),this._dpopManager=void 0;return}}async resolveCredentials(){const e=await this.initDPoP();if(this._refreshCoordinator=new ab(this._dpopManager,{http:()=>((!this._refreshHttp||this._refreshHttpHost!==this._deps.apiHost)&&(this._refreshHttp?.destroy(),this._refreshHttp=this.createRefreshHttpController(),this._refreshHttpHost=this._deps.apiHost),this._refreshHttp),notifier:{onError:t=>this._errors$.next(t),onWarning:t=>this._warnings$.next(t),onRefreshExhausted:()=>void this.disconnect(),onCredentialRefreshed:async t=>this.reauthenticateLiveSession(t)},store:{read:()=>this._deps.credential,write:t=>{this._deps.credential=t},merge:t=>{this._deps.credential={...this._deps.credential,...t},this.persistCredential(this._deps.credential)},persist:t=>this.persistCredential(t)}}),this._credentialProvider)return this.validateCredentials(this._credentialProvider,void 0,e);for(const t of this._deps.persistSession?["local","session"]:["session"])try{const i=await this._deps.storage.getItem("sw:cached_credential",t);if(i?.token)return V.debug(`[SignalWire] Using cached credential from ${t}Storage`),await this.validateCredentials(void 0,i)}catch{}throw new Mt("No credential provider and no cached session. Provide a CredentialProvider or enable persistSession with a prior login.")}async validateCredentials(e,t,i){const r=i??(this._dpopManager?.initialized?this._dpopManager.fingerprint:void 0),n=t??(e?await e.authenticate(r?{fingerprint:r}:void 0):void 0);if(!n)throw new Mt("No credentials available.");if(n.token)try{const s=dg(n.token,{header:!0});this._deps.ch=s.ch}catch(s){throw V.error("[SignalWire] Invalid JWT token provided in credentials:",s),new Mt("Invalid JWT token provided in credentials.",{cause:s})}if(!n.token&&!n.authorizationState)throw V.error("[SignalWire] No valid authentication credentials provided."),new Mt("No valid authentication credentials provided.");if(!this._deps.persistSession&&n.expiry_at&&n.expiry_at<Date.now())throw V.error("[SignalWire] Provided credentials have expired."),new Mt("Provided credentials have expired.");n.expiry_at&&e?.refresh?this._refreshCoordinator?.scheduleDeveloperRefresh(e,n.expiry_at):n.expiry_at&&!e?.refresh&&(V.warn(`[SignalWire] [SW-NO-REFRESH-HANDLER] Credential has expiry_at=${n.expiry_at} but no refresh handler. Session will terminate at expiry unless the SAT has 'sat:refresh' scope.`),this._warnings$.next({code:"credential_no_refresh_handler",source:"CredentialProvider",message:"Credential has expiry_at but no refresh handler. Session will terminate at expiry unless the SAT carries 'sat:refresh' scope.",expiresAt:n.expiry_at})),this._deps.credential=n,this.persistCredential(n),await this.reauthenticateLiveSession(n)}async reauthenticateLiveSession(e){if(!(!this.isConnected||!this._clientSession.authenticated||!e.token))try{await this._clientSession.reauthenticate(e.token),V.info("[SignalWire] Session refreshed with new credentials.")}catch(t){V.error("[SignalWire] Failed to refresh session with new credentials:",t),this._errors$.next(t instanceof Error?t:new Error(String(t),{cause:t}))}}async recoverAndRetry(e){if(!await this.remintAndReauthenticate())return{ok:!1};try{const t=await e();return this._credentialRecovered=!0,{ok:!0,value:t}}catch(t){return V.warn("[SignalWire] Reauthentication was accepted but the operation is still refused:",t),{ok:!1,error:t}}}async remintAndReauthenticate(){const e=this._credentialProvider;if(!e)return!1;const{clientBound:t}=this._clientSession;if(!t&&!e.refresh)return V.debug("[SignalWire] [SW-NO-REFRESH-HANDLER] Unbound session with no refresh handler; cannot re-mint."),!1;try{const i=t?await e.authenticate(this._dpopManager?.initialized?{fingerprint:this._dpopManager.fingerprint}:void 0):await this.remintCredential(e);return i.token?(await this._clientSession.reauthenticate(i.token),this._deps.credential=i,this.persistCredential(i),i.expiry_at&&e.refresh&&this._refreshCoordinator?.scheduleDeveloperRefresh(e,i.expiry_at),!0):(V.warn("[SignalWire] Re-minted credential has no token; keeping the current one."),!1)}catch(i){return V.warn("[SignalWire] Re-mint recovery failed:",i),!1}}async remintCredential(e){if(this._refreshCoordinator)return this._refreshCoordinator.refreshCredential(e);if(!e.refresh)throw new Mt("Credential provider does not support refresh");return e.refresh()}async refreshCredentialForReconnect(){if(this._credentialProvider)try{let e;if(this._clientSession?.clientBound??await this.wasClientBound())V.debug("[SignalWire] Re-minting client-bound base SAT before reconnect"),e=await this._credentialProvider.authenticate(this._dpopManager?.initialized?{fingerprint:this._dpopManager.fingerprint}:void 0);else if(this._credentialProvider.refresh)V.debug("[SignalWire] Refreshing unbound credential before reconnect"),e=await this.remintCredential(this._credentialProvider);else{V.warn("[SignalWire] [SW-NO-REFRESH-HANDLER] Token expired on reconnect but no refresh handler; reconnecting with the existing token.");return}if(!e.token){V.warn("[SignalWire] Re-minted credential has no token; keeping the existing credential for reconnect.");return}this._deps.credential=e,this.persistCredential(e),e.expiry_at&&this._credentialProvider.refresh&&this._refreshCoordinator?.scheduleDeveloperRefresh(this._credentialProvider,e.expiry_at),V.debug("[SignalWire] Credential refreshed successfully for reconnect")}catch(e){throw V.error("[SignalWire] Failed to refresh credentials for reconnect:",e),this._errors$.next(e instanceof Error?e:new Error(String(e),{cause:e})),e}}persistCredential(e){e.token&&(this._deps.storage.setItem("sw:cached_credential",e),this._deps.persistSession&&this._deps.storage.setItem("sw:cached_credential",e,"local"))}persistClientBoundMarker(e){const t=this._deps.persistSession?["session","local"]:["session"];for(const i of t)e?this._deps.storage.setItem(vs,!0,i):this._deps.storage.removeItem(vs,i)}async wasClientBound(){const e=this._deps.persistSession?["local","session"]:["session"];for(const t of e)try{if(await this._deps.storage.getItem(vs,t))return!0}catch{}return!1}async init(){if(this._user$.next(new yc(this._deps.http)),this._options.skipConnection||await this.connect(),!this._options.reconnectAttachedCalls&&this._attachManager&&await this._attachManager.flush(),!this._options.skipRegister)try{await this.register()}catch(e){V.error("[SignalWire] Registration failed:",e),this._errors$.next(e instanceof Error?e:new Error(String(e),{cause:e}))}this.handleAttachments()}async handleAttachments(){if(!this._attachManager){V.error("[SignalWire] AttachManager not initialized");return}if(this._options.reconnectAttachedCalls)try{await this._attachManager.reattachCalls()}catch(e){V.error("[SignalWire] Failed to reattach calls:",e),this._errors$.next(e instanceof Error?e:new Error(String(e),{cause:e}))}finally{this._credentialRecovered=!1}}async fetchUserOrRecover(){const e=async i=>{if(!await Fe(i.fetched$))throw new fi("Failed to fetch user information - fetched$ emitted false");this._deps.user=i},t=this._user$.value;if(!t)throw new fi("User not initialized before connect");try{await e(t)}catch(i){V.error(`[SignalWire] Failed to fetch user information: ${i instanceof Error?i.message:"Unknown error"}. This usually means the user token is invalid or expired. Re-minting the credential and retrying.`);try{await this.refreshCredentialForReconnect();const r=new yc(this._deps.http);await e(r),this._user$.next(r)}catch(r){throw new fi("Error fetching user information",{cause:r})}}}async connect(){await this.teardownTransportAndSession(),await this.fetchUserOrRecover();const e=r=>{this._errors$.next(r)};this._transport=new mb(this._deps.storage,this._deps.protocolKey,this._deps.WebSocket,h.instance.relayHost??this._deps.relayHost,e),this._attachManager=new pv(this._deps.storage,this._deps.deviceController,h.instance.reconnectCallsTimeout,this._deps.attachedCallsKey,()=>this._credentialRecovered),this._clientSession=new Zm(()=>this._deps.credential,this._transport,this._deps.storage,this._deps.authorizationStateKey,this._deps.deviceController,this._attachManager,this._deps.webRTCApiProvider,this._dpopManager,this._networkMonitor?.networkChange$),this._publicSession=new Qm(this._clientSession),this._clientSession.callControl=this._options.callControl??"routed",this._clientSession.onBeforeReconnect=async()=>this.refreshCredentialForReconnect(),this.subscribeTo(this._clientSession.errors$,r=>{this._errors$.next(r)}),this.subscribeTo(this._clientSession.authorization$,r=>{this._refreshCoordinator?.syncExpiryFromAuthorization(r,this._credentialProvider),this.persistClientBoundMarker(!!r?.cnf?.jkt)}),await this._clientSession.connect(),await this._refreshCoordinator?.activate(this._deps.user,this._clientSession),this.subscribeTo(this._clientSession.authenticated$.pipe(Er(1),N(Boolean)),async()=>{try{await this._refreshCoordinator?.activate(this._deps.user,this._clientSession)}catch(r){V.error("[SignalWire] Refresh re-arm after reconnect failed (non-fatal):",r),this._errors$.next(r instanceof Error?r:new Error(String(r),{cause:r}))}try{V.debug("[SignalWire] Re-registering user after reconnect"),await this.register(),V.debug("[SignalWire] User re-registered successfully after reconnect")}catch(r){V.error("[SignalWire] Re-registration failed after reconnect:",r),this._errors$.next(r instanceof Error?r:new Error(String(r),{cause:r}))}});const t=new rb(this._clientSession,this._deps.http,()=>this._deps.getUserFromAddressId(),e),i=new fb(this._deps.http,this._clientSession,t,e);this._directory$.next(i),this._clientSession.setDirectory(i),this._isConnected$.next(!0),this._diagnosticsCollector?.record("connection","connected"),this.subscribeTo(this._clientSession.authenticated$.pipe(Er(2),N(Boolean)),()=>{this._diagnosticsCollector?.record("connection","reconnected")})}get user$(){return this.deferEmission(this._user$.asObservable())}get user(){return this._user$.value}get directory$(){return this.deferEmission(this._directory$.asObservable())}get directory(){return this._directory$.value}get isRegistered$(){return this.deferEmission(this._isRegistered$.asObservable())}get isRegistered(){return this._isRegistered$.value}get isConnected(){return this._isConnected$.value}get isConnected$(){return this.deferEmission(this._isConnected$.asObservable())}get ready$(){return this.publicCachedObservable("ready$",()=>this._isConnected$.pipe(wt(e=>e?this._clientSession.authenticated$:Cr(!1))))}get errors$(){return this.deferEmission(this._errors$.asObservable())}get warnings$(){return this.deferEmission(this._warnings$.asObservable())}get platformCapabilities(){return this._platformCapabilities??(this._platformCapabilities=mc(this._options.webRTCApiProvider)),this._platformCapabilities}get deviceRecovered$(){return this.deferEmission(this._deviceController.deviceRecovered$)}exportDiagnostics(){const e={audioInput:this.audioInputDevices,audioOutput:this.audioOutputDevices,videoInput:this.videoInputDevices},t={sdkVersion:"unknown",userAgent:typeof navigator<"u"?navigator.userAgent:"unknown",capabilities:this.platformCapabilities,events:[],calls:[],deviceChanges:[],devices:e};if(!this._diagnosticsCollector)return t;const i=this._diagnosticsCollector.export();return{...t,sdkVersion:i.sdkVersion,userAgent:i.userAgent,events:i.events,calls:i.calls,deviceChanges:i.deviceChanges,devices:e}}initResilienceSubsystems(){try{this._platformCapabilities=mc(this._options.webRTCApiProvider)}catch(e){V.warn("[SignalWire] Failed to detect platform capabilities:",e)}try{this._networkMonitor=new Ng}catch(e){V.warn("[SignalWire] Failed to initialize NetworkMonitor:",e)}try{this._visibilityController=new Yg,this.subscribeTo(this._visibilityController.visibilityChange$.pipe(N(e=>e.to==="visible")),()=>{try{this._refreshCoordinator?.forceRefreshIfDue()}catch(e){V.warn("[SignalWire] Resume credential revalidation failed (non-fatal):",e)}}),this.subscribeTo(this._visibilityController.visibilityChange$.pipe(N(e=>e.to==="visible"&&h.instance.refreshDevicesOnVisible)),()=>{V.debug("[SignalWire] Page visible, re-enumerating devices");try{this._deviceController.disableDeviceMonitoring(),this._deviceController.enableDeviceMonitoring()}catch{}})}catch(e){V.warn("[SignalWire] Failed to initialize VisibilityController:",e)}try{this._diagnosticsCollector=new lb({sdkVersion:"4.0.0-rc.3"})}catch(e){V.warn("[SignalWire] Failed to initialize DiagnosticsCollector:",e)}}async disconnect(){this._refreshCoordinator?.suspend(),this._diagnosticsCollector?.record("connection","disconnected"),await this.teardownTransportAndSession(),this._isConnected$.next(!1)}async teardownTransportAndSession(){const e=this._clientSession,t=this._transport;if(e){try{await e.disconnect()}catch(i){V.warn("[SignalWire] Error disconnecting previous session:",i)}e.destroy()}t&&t.destroy(),this._clientSession=void 0,this._publicSession=void 0,this._transport=void 0,this._attachManager=void 0}async waitAuthentication(){await Fe(this.ready$.pipe(N(e=>e===!0)))}async register(){try{await this.waitAuthentication(),await this._transport.execute(ns({method:"subscriber.online",params:{}})),this._isRegistered$.next(!0);return}catch(e){if(!this._deps.credential.token)throw this._errors$.next(e instanceof Error?e:new Error(String(e),{cause:e})),e;V.debug("[SignalWire] Failed to register user, attempting credential recovery...");const t=await this.recoverAndRetry(async()=>{await this._transport.execute(ns({method:"subscriber.online",params:{}}))});if(t.ok){V.debug("[SignalWire] Recovery restored registration"),this._isRegistered$.next(!0);return}const i=t.error??e,r=new Mt("Failed to register user, and credential recovery also failed. Please check your credentials.",{cause:i instanceof Error?i:new Error(String(i),{cause:i})});throw this._errors$.next(r),r}}async unregister(){try{await this._transport.execute(ns({method:"subscriber.offline",params:{}})),this._isRegistered$.next(!1)}catch(e){throw V.error("[SignalWire] Failed to unregister user:",e),this._errors$.next(e instanceof Error?e:new Error(String(e),{cause:e})),e}}async dial(e,t={}){const i={...h.instance.preferredMediaOptions,...bb(e),...t};await this.waitAuthentication(),V.debug("[SignalWire] Dialing with options:",i);try{return await this._clientSession.createOutboundCall(e,i)}catch(r){if(!uv(r))throw r;V.debug("[SignalWire] Dial hit a recoverable auth error; recovering the session and retrying");const n=await this.recoverAndRetry(async()=>(await this.waitAuthentication(),this._clientSession.createOutboundCall(e,i)));if(n.ok)return n.value;throw n.error??r}}async preflight(e,t){const i=this._clientSession.iceServers??h.instance.iceServers??[],r=this._isConnected$.value;return new qg(this._deviceController,i,r,0,async(n,s)=>this.dial(n,s),t).run(e)}get session(){return this._publicSession}get audioInputDevices$(){return this.deferEmission(this._deviceController.audioInputDevices$)}get audioInputDevices(){return this._deviceController.audioInputDevices}get audioOutputDevices$(){return this.deferEmission(this._deviceController.audioOutputDevices$)}get audioOutputDevices(){return this._deviceController.audioOutputDevices}get videoInputDevices$(){return this.deferEmission(this._deviceController.videoInputDevices$)}get videoInputDevices(){return this._deviceController.videoInputDevices}get selectedAudioInputDevice$(){return this.deferEmission(this._deviceController.selectedAudioInputDevice$)}get selectedAudioOutputDevice$(){return this.deferEmission(this._deviceController.selectedAudioOutputDevice$)}get selectedVideoInputDevice$(){return this.deferEmission(this._deviceController.selectedVideoInputDevice$)}get selectedAudioInputDevice(){return this._deviceController.selectedAudioInputDevice}get selectedAudioOutputDevice(){return this._deviceController.selectedAudioOutputDevice}get selectedVideoInputDevice(){return this._deviceController.selectedVideoInputDevice}get selectedAudioInputDeviceConstraints(){return this._deviceController.selectedAudioInputDeviceConstraints}get selectedVideoInputDeviceConstraints(){return this._deviceController.selectedVideoInputDeviceConstraints}deviceInfoToConstraints(e){return this._deviceController.deviceInfoToConstraints(e)}selectAudioInputDevice(e){this._deviceController.selectAudioInputDevice(e)}selectVideoInputDevice(e){this._deviceController.selectVideoInputDevice(e)}selectAudioOutputDevice(e){this._deviceController.selectAudioOutputDevice(e)}async applySelectedAudioOutputDevice(e){const t=this._deviceController.selectedAudioOutputDevice;if(!t?.deviceId)return!1;const i=e;if(typeof i.setSinkId!="function")return V.warn("[SignalWire] setSinkId not supported on this element / browser"),!1;try{return await i.setSinkId(t.deviceId),!0}catch(r){return V.warn("[SignalWire] Failed to apply audio output device:",r),!1}}enableDeviceMonitoring(){this._deviceController.enableDeviceMonitoring()}disableDeviceMonitoring(){this._deviceController.disableDeviceMonitoring()}async getDeviceCapabilities(e){return this._deviceController.getDeviceCapabilities(e)}async isValidDevice(e){return this._deviceController.isValidDevice(e)}setStorageManager(e){this._deviceController.setStorageManager(e)}async clearDeviceState(){return this._deviceController.clearDeviceState()}async enumerateDevices(){return this._deviceController.enumerateDevices()}disableAudioInput(){this._deviceController.disableAudioInput()}enableAudioInput(){this._deviceController.enableAudioInput()}disableVideoInput(){this._deviceController.disableVideoInput()}enableVideoInput(){this._deviceController.enableVideoInput()}get videoInputDisabled$(){return this.deferEmission(this._deviceController.videoInputDisabled$)}get audioInputDisabled$(){return this.deferEmission(this._deviceController.audioInputDisabled$)}get videoInputDisabled(){return this._deviceController.videoInputDisabled}get audioInputDisabled(){return this._deviceController.audioInputDisabled}async requestMediaPermissions(e={audio:!0,video:!0}){const t={audio:e.audio??!1,video:e.video??!1};let i=!1,r=!1,n,s;try{const a=(await this._deps.webRTCApiProvider.mediaDevices.getUserMedia(t)).getTracks();for(const o of a){const c=o.getSettings();o.kind==="audio"?(i=!0,c.deviceId&&(n=this.audioInputDevices.find(l=>l.deviceId===c.deviceId))):o.kind==="video"&&(r=!0,c.deviceId&&(s=this.videoInputDevices.find(l=>l.deviceId===c.deviceId))),o.stop()}}catch(a){V.warn("[SignalWire] Media permission request failed:",a)}if(await this._deviceController.enumerateDevices(),i&&n){const a=n.deviceId;n=this.audioInputDevices.find(o=>o.deviceId===a)??n}if(r&&s){const a=s.deviceId;s=this.videoInputDevices.find(o=>o.deviceId===a)??s}return i&&n&&!this.selectedAudioInputDevice&&this.selectAudioInputDevice(n),r&&s&&!this.selectedVideoInputDevice&&this.selectVideoInputDevice(s),{audio:i,video:r,selectedAudioDevice:n,selectedVideoDevice:s}}async resetToDefaults(){await this._deps.storage.clearAll();const e=h.instance;e.preferredAudioInput=null,e.preferredAudioOutput=null,e.preferredVideoInput=null,await this._deviceController.clearDeviceState()}destroy(){this._refreshCoordinator?.destroy(),this._refreshCoordinator=void 0,this._refreshHttp?.destroy(),this._refreshHttp=void 0,this._dpopManager?.destroy();const e=this._clientSession;e?.teardownSessionState(),this._transport?.destroy(),e?.destroy();try{this._networkMonitor?.destroy()}catch{}try{this._visibilityController?.destroy()}catch{}try{this._diagnosticsCollector?.destroy()}catch{}this._networkMonitor=void 0,this._visibilityController=void 0,this._diagnosticsCollector=void 0,super.destroy()}};q();var yb=class{constructor(e){this.credentials=e}async authenticate(){return Promise.resolve(this.credentials)}};(()=>{if(typeof window<"u"){const e=new CustomEvent("signalwire:js:ready",{detail:{version:"4.0.0-rc.3"}});window.dispatchEvent(e)}})();async function rl(e,t={}){if(!e)throw new Error("[address-widget] token is required");const i=new yb({token:e}),r=t.debug?{trace:(...o)=>console.log("[sw][trace]",...o),debug:(...o)=>console.log("[sw][debug]",...o),info:(...o)=>console.log("[sw][info]",...o),warn:(...o)=>console.warn("[sw][warn]",...o),error:(...o)=>console.error("[sw][error]",...o)}:void 0,n=new _b(i,{reconnectAttachedCalls:!0,persistSession:!0,...t.debug?{logger:r,debug:{logWsTraffic:!0}}:{}});async function s({destination:o,audio:c=!0,video:l=!0,receiveVideo:u,inputAudioDeviceConstraints:p,userVariables:m,nodeId:w}){if(!o)throw new Error("[address-widget] destination is required");if(m&&Object.keys(m).length>0){const _=n.preferences;_.userVariables={..._.userVariables??{},...m}}return await n.dial(o,{audio:c,video:l,receiveAudio:!0,receiveVideo:u??l,...c&&p?{inputAudioDeviceConstraints:p}:{},...w?{nodeId:w}:{}})}function a(){try{n.destroy?.()}catch{}}return{client:n,dial:s,disconnect:a}}const nl=3600,wb=3e4;function Sb(e,t,i){return!Number.isFinite(t)||t<=0||!Number.isFinite(e)?!1:Math.max(0,i-e)>=t*1e3}class Xi extends Error{constructor(t,i){super(i),this.name="GatewayError",this.status=t}get isAuthFailure(){return this.status===401||this.status===403}}class Cb{constructor(t){this.handle=null,this.gatewayUrl=t.gatewayUrl,this.key=t.key,this.debug=t.debug||!1,this.userMetadata=t.userMetadata}getHandle(){return this.handle}setHandle(t){this.handle=t}trace(...t){this.debug&&console.log("[address-widget][chat]",...t)}withMetadata(t){if(!this.userMetadata)return t;let i;try{i=this.userMetadata()}catch{return t}return!i||Object.keys(i).length===0?t:{...t,user_meta_data:i}}async post(t){const i=this.handle?{...t,handle:this.handle}:t;this.trace("->",t.method,this.handle?"(with handle)":"(new)");let r;try{r=await fetch(this.gatewayUrl,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.key}`},body:JSON.stringify(i)})}catch(s){throw new Xi(0,s instanceof Error?s.message:"network error")}const n=r.headers.get("X-Chat-Handle");if(n&&(this.handle=n,this.trace("<- minted handle")),!r.ok){let s=`HTTP ${r.status}`;try{const a=await r.json();a&&a.error&&(s=a.error)}catch{}throw new Xi(r.status,s)}return r}async start(){const i=await(await this.post(this.withMetadata({method:"start"}))).json();return{greeting:i.greeting??null,status:i.status,timeout:typeof i.timeout=="number"?i.timeout:null}}async chat(t){const r=await(await this.post(this.withMetadata({method:"chat",message:t}))).json();if(r.error)throw new Xi(200,r.error.message||"chat failed");const n=r.result||{};return{text:n.response||"",timestamp:n.server_time||new Date().toISOString(),metadata:n.metadata,user_event:n.user_event}}async log(){const i=await(await this.post({method:"log"})).json();return{messages:Array.isArray(i.messages)?i.messages:[],timeout:typeof i.timeout=="number"?i.timeout:null,lastActivityMs:typeof i.last_activity=="number"?i.last_activity*1e3:null}}async end(){if(!this.handle)return!1;try{return(await(await this.post({method:"end"})).json()).status==="ended"}finally{this.handle=null}}}const kb="This conversation timed out. Your next message will start a new one.";class Tb{constructor(t,i){this.client=null,this._restored=!1,this._started=!1,this._resumed=!1,this._expired=!1,this._active=!1,this._lastActivityMs=Date.now(),this._reportedTimeout=null,this._pollTimer=null,this._boundCheck=()=>this._checkExpiry(),this.opts=t,this.cb=i,t.gatewayUrl&&t.key&&(this.client=new Cb({gatewayUrl:t.gatewayUrl,key:t.key,debug:t.debug,userMetadata:t.userMetadata}))}get isActive(){return this._active}get resumed(){return this._resumed}get expired(){return this._expired}get showEndButton(){return this.opts.persistence!==!1}get isConfigured(){return this.client!==null}get currentHandle(){return this._active?this.client?.getHandle()??null:null}get storageKey(){return this.opts.storageKey||"sw-chat-handle"}readHandle(){if(this.opts.persistence===!1)return null;try{return sessionStorage.getItem(this.storageKey)}catch{return null}}writeHandle(t){if(this.opts.persistence!==!1)try{t?sessionStorage.setItem(this.storageKey,t):sessionStorage.removeItem(this.storageKey)}catch{}}async restore(){if(!this.client||this._restored)return;this._restored=!0;const t=this.opts.alwaysNew?null:this.readHandle();if(t){this.cb.onLoading(!0),this.cb.onError(null);try{if(await this.resumeWith(t))return;this.writeHandle(null),this.cb.onLoading(!1)}catch(i){this._restored=!1,this.cb.onLoading(!1),this.cb.onError(this.opts.connectionError||(i instanceof Error?i.message:"Failed to restore conversation"))}}}async resumeWith(t){const i=this.client;i.setHandle(t);try{const{messages:r,timeout:n,lastActivityMs:s}=await i.log();return this._reportedTimeout=n,r.length===0?!1:(this._resumed=!0,this._started=!0,this._lastActivityMs=s??Date.now(),this._expired=!1,this._active=!0,this.cb.onRestored(r.map(a=>({role:a.role,text:a.content,ts:a.timestamp?a.timestamp*1e3:Date.now()}))),this.cb.onLoading(!1),this.cb.onResumed(),this.startExpiryWatch(),!0)}catch(r){if(r instanceof Xi&&r.isAuthFailure)return!1;throw r}}async ensureStarted(){if(!(!this.client||this._started)){this._started=!0,this.cb.onLoading(!0),this.cb.onError(null);try{await this.openConversation(!1)}catch(t){this._started=!1,this.cb.onLoading(!1),this.cb.onError(this.opts.connectionError||(t instanceof Error?t.message:"Failed to start conversation"))}}}async adoptHandle(t){if(this.client){this._restored=!0,this._started=!0,this.client.setHandle(t),this.writeHandle(t),this.cb.onLoading(!0),this.cb.onError(null);try{await this.openConversation(!0)}catch(i){this._started=!1,this.cb.onLoading(!1),this.cb.onError(this.opts.connectionError||(i instanceof Error?i.message:"Failed to open chat"))}}}async openConversation(t){const i=this.client;this.cb.onAwaitingReply?.(!0),t||i.setHandle(null);const{greeting:r,timeout:n}=await i.start();this._reportedTimeout=n,this.writeHandle(i.getHandle()),this._resumed=!1,this._lastActivityMs=Date.now(),this._expired=!1,this._active=!0,this.cb.onLoading(!1),r&&this.cb.onAssistant(r),this.startExpiryWatch()}async send(t){const i=this.client,r=t.trim();if(!(!i||!r)){this.cb.onUser(r),this.cb.onAwaitingReply?.(!0),this.cb.onLoading(!0),this.cb.onError(null);try{const n=await i.chat(r);this.writeHandle(i.getHandle()),this._lastActivityMs=Date.now(),this._expired=!1,this._active=!0,this.cb.onLoading(!1),this.cb.onAssistant(n.text,n.user_event),this.startExpiryWatch()}catch(n){n instanceof Xi&&n.isAuthFailure&&(this.writeHandle(null),i.setHandle(null),this._started=!1,this._restored=!0),this.cb.onLoading(!1),this.cb.onError(n instanceof Error?n.message:"Failed to send message")}}}async end(){const t=this.client;if(t)try{await t.end()}catch{}finally{this.writeHandle(null),this._started=!1,this._restored=!0,this._resumed=!1,this._expired=!1,this._active=!1,this.stopExpiryWatch()}}async handleClose(t){t&&await this.end()}detach(){this.writeHandle(null),this.client?.setHandle(null),this._started=!1,this._restored=!0,this._resumed=!1,this._expired=!1,this._active=!1,this.stopExpiryWatch()}startExpiryWatch(){this.stopExpiryWatch();const t=this.effectiveTimeout();!t||t<=0||!this._active||this._expired||(this._pollTimer=window.setInterval(this._boundCheck,wb),document.addEventListener("visibilitychange",this._boundCheck),window.addEventListener("focus",this._boundCheck),this._boundCheck())}stopExpiryWatch(){this._pollTimer!==null&&(window.clearInterval(this._pollTimer),this._pollTimer=null),document.removeEventListener("visibilitychange",this._boundCheck),window.removeEventListener("focus",this._boundCheck)}effectiveTimeout(){return this._reportedTimeout??this.opts.timeoutSeconds??nl}_checkExpiry(){if(!this._active||this._expired)return;const t=this.effectiveTimeout();Sb(this._lastActivityMs,t,Date.now())&&(this._expired=!0,this.writeHandle(null),this.client?.setHandle(null),this._started=!1,this.stopExpiryWatch(),this.cb.onNotice(this.opts.timeoutNotice||kb))}destroy(){this.stopExpiryWatch()}}const $b=6,Eb=Le`
  .composer {
    flex: 0 0 auto;
    display: flex;
    align-items: flex-end;
    gap: 8px;
    padding: 12px var(--sw-address-gutter);
    background: var(--sw-address-bg-surface);
    border-top: 1px solid var(--sw-address-border);
  }

  .composer-input {
    flex: 1 1 auto;
    min-width: 0;
    /* One row to start; grows to MAX_ROWS then scrolls. */
    min-height: 44px;
    max-height: 140px;
    padding: 11px 16px;
    resize: none;
    overflow-y: auto;
    border: 1px solid var(--sw-address-border);
    border-radius: 22px;
    background: var(--sw-address-bg-raised);
    color: var(--sw-address-fg-default);
    font-family: var(--sw-address-font-body);
    /* 16px minimum — smaller makes iOS Safari zoom the page on focus. */
    font-size: 16px;
    line-height: 1.4;
    transition: border-color var(--sw-address-duration-fast) var(--sw-address-ease);
  }

  .composer-input::placeholder {
    color: var(--sw-address-fg-muted);
  }

  .composer-input:focus {
    outline: none;
    border-color: var(--sw-address-brand-blue);
  }

  .composer-input:focus-visible {
    outline: 2px solid var(--sw-address-brand-blue);
    outline-offset: 1px;
  }

  .composer-input:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Escalate to voice. A turquoise pill so it reads as the medium-switch
     affordance and explains itself with a label — turquoise is the brand's
     positive/active signal, kept distinct from the fuchsia Send and the red
     End so all three stay legible side by side. Collapses to an icon-only
     circle on a phone, where a labelled pill will not fit beside the input. */
  .composer-call {
    position: relative; /* anchor for the tooltip */
    flex: 0 0 auto;
    height: 48px;
    padding: 0 16px;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    border: 1px solid var(--sw-address-positive);
    border-radius: var(--sw-address-radius-pill);
    background: color-mix(in srgb, var(--sw-address-positive) 12%, var(--sw-address-bg-surface));
    color: var(--sw-address-positive);
    font-family: var(--sw-address-font-body);
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    cursor: pointer;
    transition: background var(--sw-address-duration-fast) var(--sw-address-ease);
  }

  .composer-call:hover {
    background: color-mix(in srgb, var(--sw-address-positive) 22%, var(--sw-address-bg-surface));
  }

  .composer-call:focus-visible {
    outline: 2px solid var(--sw-address-brand-blue);
    outline-offset: 2px;
  }

  .composer-call svg {
    width: 18px;
    height: 18px;
    display: block;
  }

  /* Our own tooltip — the native one is slow, unstyled and dead on touch.
     An inverse surface (fg-on-bg) so it pops against the dock in either
     theme. Right-anchored because the pill lives at the composer's right
     edge; it grows leftward and can't run off-screen. Shows on hover AND
     keyboard focus. */
  .composer-call[data-tooltip]::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: calc(100% + 10px);
    right: 0;
    width: max-content;
    max-width: 220px;
    padding: 7px 10px;
    border-radius: 8px;
    background: var(--sw-address-fg-default);
    color: var(--sw-address-bg-surface);
    font-family: var(--sw-address-font-body);
    font-size: 12px;
    font-weight: 500;
    line-height: 1.35;
    text-align: left;
    white-space: normal;
    box-shadow: var(--sw-address-shadow-md);
    opacity: 0;
    transform: translateY(4px);
    pointer-events: none;
    transition:
      opacity var(--sw-address-duration-fast) var(--sw-address-ease),
      transform var(--sw-address-duration-fast) var(--sw-address-ease);
    z-index: 20;
  }
  .composer-call[data-tooltip]::before {
    content: '';
    position: absolute;
    bottom: calc(100% + 5px);
    right: 18px;
    border: 5px solid transparent;
    border-top-color: var(--sw-address-fg-default);
    opacity: 0;
    transform: translateY(4px);
    pointer-events: none;
    transition:
      opacity var(--sw-address-duration-fast) var(--sw-address-ease),
      transform var(--sw-address-duration-fast) var(--sw-address-ease);
    z-index: 20;
  }
  .composer-call[data-tooltip]:hover::after,
  .composer-call[data-tooltip]:hover::before,
  .composer-call[data-tooltip]:focus-visible::after,
  .composer-call[data-tooltip]:focus-visible::before {
    opacity: 1;
    transform: translateY(0);
  }

  /* 48px minimum touch target per the mobile-first rule. Fuchsia because
     sending is the emphasis action in this dock, matching the launcher. */
  .composer-send {
    flex: 0 0 auto;
    width: 48px;
    height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    background: var(--sw-address-accent);
    color: #fff;
    cursor: pointer;
    transition:
      transform var(--sw-address-duration-fast) var(--sw-address-ease),
      opacity var(--sw-address-duration-fast) var(--sw-address-ease);
  }

  .composer-send:hover:not(:disabled) {
    transform: scale(1.05);
  }

  .composer-send:focus-visible {
    outline: 2px solid var(--sw-address-brand-blue);
    outline-offset: 2px;
  }

  .composer-send:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .composer-send svg {
    width: 20px;
    height: 20px;
    display: block;
  }

  /* End the conversation. Danger-coloured because it is destructive and
     irreversible — matches the call dock's End rather than the neutral
     switch button beside it. */
  .composer-end {
    flex: 0 0 auto;
    width: 48px;
    height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--sw-address-border);
    border-radius: 50%;
    background: var(--sw-address-bg-raised);
    color: var(--sw-address-fg-muted);
    cursor: pointer;
    transition: color var(--sw-address-duration-fast) var(--sw-address-ease);
  }
  .composer-end:hover {
    color: var(--sw-address-danger);
    border-color: var(--sw-address-danger);
  }
  .composer-end:focus-visible {
    outline: 2px solid var(--sw-address-brand-blue);
    outline-offset: 2px;
  }
  .composer-end svg {
    width: 18px;
    height: 18px;
    display: block;
  }

  /* Phone: three 48px controls plus an input do not fit on one row at
     360px, and shrinking the touch targets is not an option (48px minimum).
     So the buttons keep their size and the input takes a row of its own. */
  @media (max-width: 480px) {
    .composer {
      flex-wrap: wrap;
      gap: 8px;
    }
    .composer-input {
      order: -1;
      flex: 1 1 100%;
      min-width: 100%;
    }
    .composer-send {
      margin-left: auto;
    }
    /* Icon-only on a phone: the button row already carries send + end, and a
       labelled pill would push them off a 360px width. */
    .composer-call {
      width: 48px;
      padding: 0;
      gap: 0;
      justify-content: center;
    }
    .composer-call-label {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .composer-input,
    .composer-send {
      transition: none;
    }
    .composer-send:hover:not(:disabled) {
      transform: none;
    }
    .composer-call[data-tooltip]::after,
    .composer-call[data-tooltip]::before {
      transition: none;
      transform: none;
    }
  }
`,xb=x`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
</svg>`,Ab=x`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <line x1="18" y1="6" x2="6" y2="18" />
  <line x1="6" y1="6" x2="18" y2="18" />
</svg>`,Ib=x`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <line x1="22" y1="2" x2="11" y2="13" />
  <polygon points="22 2 15 22 11 13 2 9 22 2" />
</svg>`;function sl(e){e.style.height="auto";const i=(parseFloat(getComputedStyle(e).lineHeight)||22)*$b;e.style.height=`${Math.min(e.scrollHeight,i)}px`}function al(e,t){if(!t)return;const i=t.value.trim();!i||e.busy||(t.value="",sl(t),e.onSend(i))}function ol(e){return x`
    <form
      part="composer"
      class="composer"
      @submit=${t=>{t.preventDefault(),al(e,e.inputRef.value)}}
    >
      <textarea
        ${ai(e.inputRef)}
        part="composer-input"
        class="composer-input"
        rows="1"
        aria-label="Message"
        .placeholder=${e.placeholder}
        ?disabled=${e.busy}
        @input=${t=>sl(t.target)}
        @keydown=${t=>{t.key==="Enter"&&!t.shiftKey&&!t.isComposing&&(t.preventDefault(),al(e,e.inputRef.value))}}
      ></textarea>
      <button
        part="composer-send"
        class="composer-send"
        type="submit"
        aria-label="Send message"
        title="Send"
        ?disabled=${e.busy}
      >
        ${Ib}
      </button>
      ${e.onEnd?x`
            <button
              part="composer-end"
              class="composer-end"
              type="button"
              aria-label="End conversation"
              title="End conversation"
              @click=${e.onEnd}
            >
              ${Ab}
            </button>
          `:""}
      ${e.onSwitchToVoice?x`
            <button
              part="switch-to-voice"
              class="composer-call"
              type="button"
              aria-label="Switch to a voice call"
              data-tooltip="Switch to a voice call — talk instead of typing"
              @click=${e.onSwitchToVoice}
            >
              ${xb}<span class="composer-call-label">Call</span>
            </button>
          `:""}
    </form>
  `}const Rb=Le`
  .picker {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 28px;
    padding: 32px var(--sw-address-gutter);
    text-align: center;
  }

  .picker-heading {
    font-family: var(--sw-address-font-heading);
    font-size: 22px;
    font-weight: 600;
    color: var(--sw-address-fg-headings);
    margin: 0;
  }

  .picker-options {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* Both choices weighted equally: neither medium is the "real" one, and
     making one primary would answer the question the screen is asking. */
  .picker-option {
    width: 148px;
    min-height: 132px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    padding: 20px 16px;
    background: var(--sw-address-bg-raised);
    border: 1px solid var(--sw-address-border);
    border-radius: var(--sw-address-radius);
    color: var(--sw-address-fg-default);
    font-family: var(--sw-address-font-body);
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition:
      border-color var(--sw-address-duration-fast) var(--sw-address-ease),
      transform var(--sw-address-duration-fast) var(--sw-address-ease);
  }

  .picker-option:hover {
    border-color: var(--sw-address-positive);
    transform: translateY(-2px);
  }

  .picker-option:focus-visible {
    outline: 2px solid var(--sw-address-brand-blue);
    outline-offset: 2px;
  }

  .picker-option svg {
    width: 28px;
    height: 28px;
    display: block;
    color: var(--sw-address-positive);
  }

  .picker-note {
    margin: 0;
    max-width: 30ch;
    font-family: var(--sw-address-font-body);
    font-size: 13px;
    line-height: 1.5;
    color: var(--sw-address-fg-muted);
  }

  @media (max-width: 767px) {
    .picker-option {
      width: 132px;
      min-height: 118px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .picker-option {
      transition: none;
    }
    .picker-option:hover {
      transform: none;
    }
  }
`,Mb=x`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
  <line x1="12" y1="19" x2="12" y2="23" />
</svg>`,Db=x`<svg
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  aria-hidden="true"
>
  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
</svg>`;function Ob(e){return x`
    <div part="picker" class="picker" role="group" aria-label="Choose how to talk">
      <h2 class="picker-heading">How do you want to talk?</h2>
      <div class="picker-options">
        ${e.voiceAvailable?x`
              <button
                part="picker-voice"
                class="picker-option"
                type="button"
                @click=${e.onVoice}
              >
                ${Mb}
                <span>Talk</span>
              </button>
            `:""}
        ${e.chatAvailable?x`
              <button
                part="picker-chat"
                class="picker-option"
                type="button"
                @click=${e.onChat}
              >
                ${Db}
                <span>Type</span>
              </button>
            `:""}
      </div>
      <p class="picker-note">
        You can switch either way later without repeating yourself.
      </p>
    </div>
  `}const Pb=["ai.partial_result","ai.speech_detect","ai.response_utterance","ai.completion","user_event","ai.sidecar","ai.transcribe.utterance"];function cl(e){return e.replace(/\s*\{confidence=[\d.]+\}\s*/g,"").trim()}function ll(e){const t=/\s*~[A-Z]+\(.*?\)-;\s*/i.exec(e);if(!t)return e.trim();const i=e.slice(0,t.index).trim(),r=e.slice(t.index+t[0].length).trim();return(i||r).trim()}function Lb(e){const t=e;return t.params&&typeof t.params=="object"?t.params:e}function Gr(e){if(typeof e!="string")return"";const t=e.trim();return!t||t==="undefined"||t==="null"?"":e}function Nb(e){return e===!0||e==="true"}function Fb(e,t,i){switch(e){case"ai.partial_result":{i.onUserPartial?.(Gr(t.text),Nb(t.barged));break}case"ai.speech_detect":{const r=cl(Gr(t.text)),n=t.type!==void 0&&t.type!=="normal";i.onUserComplete?.(r,n);break}case"ai.response_utterance":{const r=ll(Gr(t.utterance??t.text));i.onAiChunk?.(r,!1);break}case"ai.completion":{const r=ll(Gr(t.text));i.onAiComplete?.(r,t.type==="barged");break}case"user_event":{const r=t;if(typeof r.type!="string"){const n=r.params;if(n&&typeof n=="object"&&typeof n.type=="string"){i.onUserEvent?.(n);return}}i.onUserEvent?.(r);break}case"ai.sidecar":{let r=t;r.sidecar_event&&typeof r.sidecar_event=="object"&&typeof r.sidecar_event.type=="string"&&(r=r.sidecar_event),i.onSidecarEvent?.(r);break}case"ai.transcribe.utterance":{const r=t.utterance;if(!r||typeof r.content!="string")break;const n=cl(r.content);if(!n)break;const s=typeof r.role=="string"?r.role:"";i.onTranscribeUtterance?.(s,n);break}}}function dl(e,t){const i=[];for(const r of Pb){const n=e.subscribe(r).subscribe({next:s=>{try{Fb(r,Lb(s),t)}catch(a){console.warn(`[address-widget] handler for ${r} threw`,a)}},error:s=>{console.warn(`[address-widget] subscription error on ${r}`,s)}});i.push(n)}return()=>{for(const r of i)try{r.unsubscribe()}catch{}}}function Ub(){if(typeof navigator>"u")return;const e=navigator.userAgentData?.platform;if(e)return e;const t=navigator.userAgent||"";if(/\b(iPhone|iPad|iPod)\b/.test(t))return"iOS";if(/\bAndroid\b/.test(t))return"Android";if(/\bMac OS X\b/.test(t)||/\bMacintosh\b/.test(t))return"macOS";if(/\bWindows\b/.test(t))return"Windows";if(/\bCrOS\b/.test(t))return"ChromeOS";if(/\bLinux\b/.test(t))return"Linux"}function Vb(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone||void 0}catch{return}}function ul(e){if(!(typeof window>"u"||typeof window.matchMedia!="function"))try{return window.matchMedia(e).matches}catch{return}}const hl="swaw:consent";function pl(){try{if(typeof localStorage<"u")return localStorage}catch{}return null}function Bb(e){const t=pl();if(!t)return null;try{const i=t.getItem(hl);if(!i)return null;const r=JSON.parse(i);return typeof r.audio!="boolean"||typeof r.ts!="string"||typeof r.version!="number"||r.version!==e?null:{audio:r.audio,train:typeof r.train=="boolean"?r.train:!0,camera:typeof r.camera=="boolean"?r.camera:!0,audioDeviceId:typeof r.audioDeviceId=="string"?r.audioDeviceId:null,videoDeviceId:typeof r.videoDeviceId=="string"?r.videoDeviceId:null,ts:r.ts,version:r.version}}catch{return null}}function ms(e,t,i=!0,r=!0,n=null,s=null){const a={audio:e,train:i,camera:r,audioDeviceId:n,videoDeviceId:s,ts:new Date().toISOString(),version:t},o=pl();if(o)try{o.setItem(hl,JSON.stringify(a))}catch{}return a}const Hb=.002,zb=3;class Wb{constructor(t){this.opts=t,this._stream=null,this._ctx=null,this._raf=null,this._stopped=!1,this._silentSince=null,this._smoothed=0,this.silent=!1}async start(){try{if(this._stream=await navigator.mediaDevices.getUserMedia({audio:this.opts.deviceId?{deviceId:this.opts.deviceId}:!0,video:!1}),this._stopped){this._releaseStream();return}const t=window.AudioContext??window.webkitAudioContext;if(!t)return;this._ctx=new t;const i=this._ctx.createMediaStreamSource(this._stream),r=this._ctx.createAnalyser();r.fftSize=512,i.connect(r);const n=new Float32Array(r.fftSize),s=()=>{if(this._stopped||!this._ctx)return;r.getFloatTimeDomainData(n);let a=0;for(let l=0;l<n.length;l++)a+=n[l]*n[l];const o=Math.sqrt(a/n.length);this._trackSilence(o);const c=Math.min(1,Math.sqrt(o)*3);this._smoothed=c>this._smoothed?c:this._smoothed+(c-this._smoothed)*.15,this.opts.onLevel(this._smoothed),this._raf=requestAnimationFrame(s)};this._raf=requestAnimationFrame(s)}catch(t){this.opts.onError?.(t)}}_trackSilence(t){if(t>Hb){this._silentSince=null,this.silent=!1;return}const i=Date.now();if(this._silentSince===null){this._silentSince=i;return}!this.silent&&i-this._silentSince>zb*1e3&&(this.silent=!0)}_releaseStream(){if(this._stream){for(const t of this._stream.getTracks())t.stop();this._stream=null}}stop(){this._stopped=!0,this._raf!==null&&(cancelAnimationFrame(this._raf),this._raf=null),this._releaseStream(),this._ctx&&(this._ctx.close().catch(()=>{}),this._ctx=null)}}const Ji="swaw:last",fl="swaw:chat/",gl="swaw:content/",jb=360*1e3;function qr(){try{if(typeof sessionStorage<"u")return sessionStorage}catch{}return null}function Kr(e){const t=qr();if(!t)return null;try{const i=t.getItem(e);return i?JSON.parse(i):null}catch{return null}}function bs(e,t){const i=qr();if(i)try{i.setItem(e,JSON.stringify(t))}catch{}}function Zi(e){const t=qr();if(t)try{t.removeItem(e)}catch{}}function vl(){const e=Kr(Ji);if(!e)return null;const{widgetId:t,callId:i,destination:r,savedAt:n}=e;return typeof t!="string"||typeof i!="string"||typeof r!="string"||typeof n!="number"||Date.now()-n>jb?null:{widgetId:t,callId:i,destination:r,savedAt:n}}function ml(e){bs(Ji,{...e,savedAt:Date.now()})}function Gb(){Zi(Ji)}function _s(e,t){return`${fl}${e}/${t}`}function ys(e,t){return`${gl}${e}/${t}`}function qb(e,t){return Kr(_s(e,t))}function Kb(e,t,i){bs(_s(e,t),i)}function Yb(e,t){return Kr(ys(e,t))}function Xb(e,t,i){bs(ys(e,t),i)}function Yr(e,t){Zi(_s(e,t)),Zi(ys(e,t));const i=Kr(Ji);i?.widgetId===e&&i?.callId===t&&Zi(Ji)}function Jb(e){const t=qr();if(!t)return;const i=vl(),r=i?.widgetId===e?i.callId:null,n=`${fl}${e}/`,s=`${gl}${e}/`,a=[];for(let o=0;o<t.length;o++){const c=t.key(o);c&&(c.startsWith(n)||c.startsWith(s))&&c.slice(c.lastIndexOf("/")+1)!==r&&a.push(c)}for(const o of a)Zi(o)}var Zb=Object.defineProperty,Qb=Object.getOwnPropertyDescriptor,I=(e,t,i,r)=>{for(var n=r>1?void 0:r?Qb(t,i):t,s=e.length-1,a;s>=0;s--)(a=e[s])&&(n=(r?a(t,i,n):a(n))||n);return r&&n&&Zb(t,i,n),n};const Je={fromAttribute(e){return e===null?!0:e!=="false"&&e!=="0"},toAttribute(e){return e?null:"false"}};$.AddressWidget=class extends Mi{constructor(){super(...arguments),this.token="",this.destination="",this.label="Start call",this.theme="dark",this.video=!0,this.audio=!0,this.poster=null,this.layout="auto",this.mode="voice",this.defaultMode="voice",this.presentation="immersive",this.position="bottom-right",this.gatewayUrl="",this.chatKey="",this.avatarUrl=null,this.chatPlaceholder="Type a message...",this.typeToTalk=!1,this.typeToTalkPlaceholder="Or type…",this.chatAutoOpen=!0,this.chatPersistence=!0,this.chatStorageKey="sw-chat-handle",this.chatAlwaysNew=!1,this.chatEndOnClose=!1,this.chatTimeoutSeconds=nl,this.showLocalVideo=!0,this.echoCancellation=!0,this.noiseSuppression=!0,this.autoGainControl=!0,this.inputVolume=null,this.autoIdentify=!0,this.widgetId="",this.autoReattach=!0,this.nodeId=null,this.debug=!1,this.micCheck=!0,this.consentRequired=!0,this.consentVersion=2,this._overlayState="closed",this._chatVersion=0,this._contentHistory=new Map,this._openContentId=null,this._error=null,this._call=null,this._ring="none",this._audioMuted=!1,this._videoMuted=!1,this._audioInputDevices=[],this._videoInputDevices=[],this._selectedAudioInputId=null,this._selectedVideoInputId=null,this._banner=null,this._activeMedium="voice",this._chatBusy=!1,this._chatAwaitingReply=!1,this._picking=!1,this._consent=null,this._consentModalOpen=!1,this._consentDraft={audio:!0,train:!0,camera:!0,audioDeviceId:null,videoDeviceId:null},this._micLevel=0,this._micSilent=!1,this._micError=!1,this._micMeter=null,this._deadMicWarned=!1,this._consentAudioDevices=[],this._consentVideoDevices=[],this._consentBypassGate=!1,this._mediumBypassGate=!1,this._switchingMedium=!1,this._switchTarget=null,this._chatAutoOpened=!1,this._chatRestoreAttempted=!1,this._avatarBroken=!1,this._contentOrder=[],this._userVariables={},this._client=null,this._chat=new Ya,this._transcribeChat=new Ya,this._chatSession=null,this._pendingChatHandoff=null,this._handoffNonce=null,this._composerRef=si(),this._unwireEvents=null,this._previouslyFocused=null,this._previousBodyOverflow="",this._transcriptRef=ch(),this._audioRef=si(),this._remoteVideoRef=si(),this._consentModalRef=wh(),this._localVideoRef=si(),this._deviceSubs=[],this._selfObserverSub=null,this._selfSubs=[],this._self=null,this._firehoseSubs=[],this._pendingAutoOpen=null,this._reattaching=!1}set userVariablesAttr(t){if(t==null||t===""){this._userVariables={};return}if(typeof t=="string")try{this._userVariables=JSON.parse(t)}catch{console.warn("[address-widget] user-variables attribute is not valid JSON"),this._userVariables={}}else this._userVariables=t}_chatEnabled(){return(this.mode==="chat"||this.mode==="both")&&!!this.gatewayUrl&&!!this.chatKey}_ensureChatSession(){return this._chatSession?this._chatSession:this._chatEnabled()?(this._chatSession=new Tb({gatewayUrl:this.gatewayUrl,key:this.chatKey,debug:this.debug,storageKey:this.chatStorageKey,persistence:this.chatPersistence,alwaysNew:this.chatAlwaysNew,timeoutSeconds:this.chatTimeoutSeconds,connectionError:void 0,userMetadata:()=>this._buildChatVariables()},{onUser:t=>{this._chat.medium="chat",this._chat.onUserComplete(t,!1),this._scheduleTranscriptScroll()},onAssistant:(t,i)=>{this._chat.medium="chat",this._chat.onAiComplete(t,!1),this._scheduleTranscriptScroll(),i&&this._handleUserEvent(i)},onRestored:t=>{this._chat.medium="chat",this._chat.replaceWithTranscript(t),this._scheduleTranscriptScroll()},onNotice:t=>{this._chat.pushNotice(t),this._scheduleTranscriptScroll(),this._activeMedium==="chat"&&this._forgetLastMedium()},onAwaitingReply:t=>{this._chatAwaitingReply=t},onLoading:t=>{this._chatBusy=t,t||(this._chatAwaitingReply=!1,this._refocusComposer())},onError:t=>{this._error=t},onResumed:()=>{this._activeMedium="chat",this._rememberLastMedium("chat"),this.chatAutoOpen&&!this._chatAutoOpened&&(this._chatAutoOpened=!0,this.open())}}),this._chatSession):null}_mintHandoffNonceVars(){if(!this._chatEnabled())return this._handoffNonce=null,{};let t;try{t=typeof crypto?.randomUUID=="function"?crypto.randomUUID():Array.from(crypto.getRandomValues(new Uint8Array(16))).map(i=>i.toString(16).padStart(2,"0")).join("")}catch{return this._handoffNonce=null,{}}return this._handoffNonce=t,{handoff_nonce:t}}_canSwitchToChat(){return this.mode==="both"&&this._activeMedium==="voice"&&this._chatEnabled()&&!!this._handoffNonce&&!!this._call}async switchToChat(){const t=this._handoffNonce;if(!t||!this._chatEnabled())return;this._switchTarget="chat",this._switchingMedium=!0;const i=this.gatewayUrl.replace(/\/+$/,"")+"/handoff";let r="";try{const n=await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nonce:t})});if(!n.ok)throw new Error(`HTTP ${n.status}`);const s=await n.json();r=typeof s.handle=="string"?s.handle:""}catch(n){console.warn("[address-widget] handoff redemption failed",n)}if(!r){this._switchingMedium=!1,this._switchTarget=null,this._showBanner({level:"warning",text:"Couldn't switch to text — staying on the call.",dismissible:!0});return}this._handoffNonce=null,await this._handleChatHandoff({type:"chat_handoff",handle:r})}async _handleChatHandoff(t){const i=typeof t.handle=="string"?t.handle:"";if(!i){console.warn("[address-widget] chat_handoff without a handle",t);return}const r=this._ensureChatSession();if(!r){console.warn("[address-widget] chat_handoff received but chat is not configured (needs gateway-url and chat-key)"),this._showBanner({level:"warning",text:"Text chat is not available here.",dismissible:!0});return}this._switchTarget="chat",this._switchingMedium=!0;try{await this._teardown(),this._activeMedium="chat",this._chat.medium="chat",this._rememberLastMedium("chat"),this._banner=null,await r.adoptHandle(i)}finally{this._switchingMedium=!1,this._switchTarget=null}this._refocusComposer()}_takeChatHandoffVars(){const t=this._pendingChatHandoff??this._chatSession?.currentHandle;return this._pendingChatHandoff=null,t?{chat_handle:t}:{}}async switchToVoice(){if(this._activeMedium!=="chat")return;if(!this.token||!this.destination){this._surfaceError("Voice is not configured for this widget.");return}const t=this._chatSession,i=t?.currentHandle??null;if(this._switchTarget="voice",i)try{const r=await fetch(this.gatewayUrl.replace(/\/+$/,"")+"/escalate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({handle:i})});if(!r.ok)throw new Error(`HTTP ${r.status}`)}catch(r){console.warn("[address-widget] chat leg capture failed",r)}this._pendingChatHandoff=i,t?.detach(),this._activeMedium="voice",this._chat.medium="voice",this._mediumBypassGate=!0,this._overlayState="closed",await this.open()}_typeToTalkAvailable(){return this.typeToTalk&&this._activeMedium==="voice"&&!!this.gatewayUrl&&!!this._handoffNonce&&!!this._call}async _sendTypedMessage(t){const i=this._handoffNonce;if(!i||!t.trim())return;const r=this.gatewayUrl.replace(/\/+$/,"")+"/say";try{const n=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nonce:i,text:t.trim()})});if(!n.ok)throw new Error(`HTTP ${n.status}`)}catch(n){console.warn("[address-widget] typed message failed",n),this._showBanner({level:"warning",text:"That message may not have been delivered.",dismissible:!0})}}_maybeRestoreChat(){this._chatRestoreAttempted||this._chatEnabled()&&(this._chatRestoreAttempted=!0,this._activeMedium=this._leadMedium(),this._ensureChatSession()?.restore())}get _lastMediumKey(){return`swaw:medium/${this.widgetId}`}_rememberLastMedium(t){try{sessionStorage.setItem(this._lastMediumKey,t)}catch{}}_forgetLastMedium(){try{sessionStorage.removeItem(this._lastMediumKey)}catch{}}async _endChat(){await this._chatSession?.end(),this._forgetLastMedium(),this._chat.reset(),await this.close()}_sendChatMessage(t){const i=this._ensureChatSession();i&&(this._activeMedium="chat",i.send(t))}_refocusComposer(){this._activeMedium==="chat"&&setTimeout(()=>this._composerRef.value?.focus(),0)}_scheduleTranscriptScroll(){this.updateComplete.then(()=>Ka(this._transcriptRef.value))}connectedCallback(){if(super.connectedCallback(),ud(),this._chat.onUpdate=()=>{this._chatVersion++,this._persistChat()},this._transcribeChat.onUpdate=()=>{this._chatVersion++},this._activeMedium=this._leadMedium(),!this.widgetId)try{const t=document.querySelectorAll("signalwire-address"),i=Array.prototype.indexOf.call(t,this);this.widgetId=i>=0?`address-widget-${i}`:"address-widget-0"}catch{this.widgetId="address-widget-0"}Jb(this.widgetId),this._consent=Bb(this.consentVersion),this._consent&&(this._consentDraft={audio:this._consent.audio,train:this._consent.train,camera:this._consent.camera,audioDeviceId:this._consent.audioDeviceId,videoDeviceId:this._consent.videoDeviceId}),this.autoReattach&&this._attemptReattach()}disconnectedCallback(){super.disconnectedCallback(),this._teardown(),this._stopMicMeter(),sa(this._previousBodyOverflow),this._removeEscHandler(),this._visibilityHandler&&(document.removeEventListener("visibilitychange",this._visibilityHandler),this._visibilityHandler=void 0),this._bannerTimer&&(clearTimeout(this._bannerTimer),this._bannerTimer=void 0),this._chatSession?.destroy()}updated(){this._maybeRestoreChat(),Ka(this._transcriptRef.value),this._syncDialogOpen(),this._syncConsentDialogOpen()}_openConsentModal(){this._consent?this._consentDraft={audio:this._consent.audio,train:this._consent.train,camera:this._consent.camera,audioDeviceId:this._consent.audioDeviceId,videoDeviceId:this._consent.videoDeviceId}:this._consentDraft={audio:!0,train:!0,camera:!0,audioDeviceId:null,videoDeviceId:null},this._consentModalOpen=!0,this._refreshConsentDevices().then(()=>this._startMicMeter())}async _refreshConsentDevices(){try{const t=await navigator.mediaDevices.enumerateDevices();this._consentAudioDevices=t.filter(i=>i.kind==="audioinput"),this._consentVideoDevices=t.filter(i=>i.kind==="videoinput"),this._traceDevices("consent:enumerate",{audio:$.AddressWidget._describeDevices(this._consentAudioDevices),video:$.AddressWidget._describeDevices(this._consentVideoDevices),permission:await this._micPermissionState()})}catch(t){this._consentAudioDevices=[],this._consentVideoDevices=[],this._traceDevices("consent:enumerate:failed",{error:String(t)})}}_wireDeadMicDetection(t){this._deadMicSub?.unsubscribe(),this._deadMicSub=void 0,this._deadMicWarned=!1;const i=t;if(!i.localAudioLevel$)return;let r=null,n=!1;this._deadMicSub=i.localAudioLevel$.subscribe(s=>{if(n=!0,this._audioMuted||this._deadMicWarned){r=null;return}if(s>.005){r=null;return}const a=Date.now();if(r===null){r=a;return}n&&a-r>5e3&&(this._deadMicWarned=!0,this._traceDevices("deadmic:warned",{selected:this._selectedAudioInputId,consent:this._consent?.audioDeviceId??null}),this._showBanner({level:"warning",text:"We're not hearing anything from your microphone. Use the mic menu to pick a different one.",dismissible:!0}))})}_dismissDeadMic(){this._deadMicWarned=!1,this._banner?.level==="warning"&&(this._banner=null)}_startMicMeter(){if(this._stopMicMeter(),!this.micCheck||!this._consentModalOpen||!this._consentDraft.audio)return;this._micError=!1,this._micSilent=!1,this._micLevel=0;const t=new Wb({deviceId:this._consentDraft.audioDeviceId,onLevel:i=>{Math.abs(i-this._micLevel)>.01&&(this._micLevel=i),t.silent!==this._micSilent&&(this._micSilent=t.silent)},onError:i=>{this._micError=!0,this._traceDevices("meter:error",{error:String(i)})}});this._micMeter=t,t.start().then(()=>{this._consentModalOpen&&this._refreshConsentDevices()})}_stopMicMeter(){this._micMeter?.stop(),this._micMeter=null,this._micLevel=0,this._micSilent=!1}async _micPermissionState(){try{const t=navigator.permissions;return t?(await t.query({name:"microphone"})).state:"unsupported"}catch{return"unknown"}}_cancelConsentModal(){this._consentModalOpen=!1,this._stopMicMeter()}async _acceptConsent(){if(!this._consentDraft.audio)return;const t=ms(this._consentDraft.audio,this.consentVersion,this._consentDraft.train,this._consentDraft.camera,this._consentDraft.audioDeviceId,this._consentDraft.videoDeviceId);this._consent=t,this._consentModalOpen=!1,this._stopMicMeter(),this.onConsentGiven?.(t),this.dispatchEvent(new CustomEvent("signalwire-address:consent-given",{detail:t,bubbles:!0,composed:!0})),this._consentBypassGate=!0,await this.open()}_syncConsentDialogOpen(){const t=this._consentModalRef.value;if(t){if(this._consentModalOpen&&!t.open)try{t.showModal()}catch{t.setAttribute("open","")}else if(!this._consentModalOpen&&t.open)try{t.close()}catch{t.removeAttribute("open")}}}_syncDialogOpen(){const t=this.shadowRoot?.querySelector("dialog.overlay");if(!t)return;if((this._overlayState==="entering"||this._overlayState==="open")&&!t.open){try{t.showModal()}catch{t.setAttribute("open","")}t.dataset.swCancelBound||(t.dataset.swCancelBound="1",t.addEventListener("cancel",r=>{r.preventDefault(),this.close()}))}}async open(){if(this._overlayState!=="closed"||this._reattaching)return;if(this._shouldAskMedium()){this._picking=!0,await this._openOverlay();return}if(this._leadMedium()==="chat"){const n=this._ensureChatSession();if(!n){this._surfaceError("Chat is not configured. Set `gateway-url` and `chat-key`.");return}this._activeMedium="chat",this._openOverlay(),await n.ensureStarted(),this._refocusComposer();return}if(!this.token){this._surfaceError("Missing token. Configure the `token` attribute or mount option.");return}if(!this.destination){this._surfaceError("Missing destination. Configure the `destination` attribute.");return}if(this.consentRequired&&!this._consentBypassGate){this._openConsentModal();return}this._consentBypassGate=!1;const t={...this._buildAutoVariables("voice"),...this._takeChatHandoffVars(),...this._mintHandoffNonceVars(),...this._userVariables},i={setUserVariables:n=>Object.assign(t,n)};this.dispatchEvent(new CustomEvent("signalwire-address:beforedial",{detail:i,bubbles:!0,composed:!0,cancelable:!0}))&&(await this._openOverlay(),this._startCall(t))}async _chooseVoice(){this._picking=!1,this._mediumBypassGate=!0,this._activeMedium="voice",this._chat.medium="voice",this._overlayState="closed",await this.open()}async _chooseChat(){const t=this._ensureChatSession();if(!t){this._surfaceError("Chat is not configured. Set `gateway-url` and `chat-key`.");return}this._picking=!1,this._mediumBypassGate=!0,this._activeMedium="chat",this._rememberLastMedium("chat"),this._chat.medium="chat",await t.ensureStarted(),this._refocusComposer()}_leadMedium(){return this._chatSession?.isActive||this.mode==="chat"||this.mode==="both"&&this.defaultMode==="chat"&&this._chatEnabled()?"chat":"voice"}_shouldAskMedium(){return this._mediumBypassGate||this._chatSession?.isActive?!1:this.mode==="both"&&this.defaultMode==="ask"&&this._chatEnabled()&&!!this.token&&!!this.destination}async _openOverlay(){this._previouslyFocused=document.activeElement??null,this._previousBodyOverflow=un(),this._applyOriginFromLauncher(),this._overlayState="entering",this._installEscHandler(),await this.updateComplete,requestAnimationFrame(()=>{this._overlayState==="entering"&&(this._overlayState="open")})}async close(){if(this._overlayState==="closed"||this._overlayState==="exiting")return;this._picking=!1,this._mediumBypassGate=!1,this._overlayState="exiting";const t=this._call;await this._teardown(),await this._awaitAnimation();const i=this.shadowRoot?.querySelector("dialog.overlay");if(i?.open)try{i.close()}catch{i.removeAttribute("open")}this._overlayState="closed";const r=t?.id??null;this._contentHistory.clear(),this._contentOrder=[],this._openContentId=null,this._banner=null,this._bannerTimer&&(clearTimeout(this._bannerTimer),this._bannerTimer=void 0),this.chatEndOnClose&&await this._chatSession?.handleClose(!0),this._chatSession?.isActive||this._chat.reset(),this._transcribeChat.reset(),r?Yr(this.widgetId,r):Gb(),this._chatVersion++,this._error=null,this._ring="none",this._removeEscHandler(),sa(this._previousBodyOverflow),this._previousBodyOverflow="",this._previouslyFocused?.focus?.(),this._previouslyFocused=null,t&&this.dispatchEvent(new CustomEvent("signalwire-address:call-left",{detail:{call:t},bubbles:!0,composed:!0}))}async hangup(){if(this._forgetLastMedium(),await this._chatSession?.end(),this._call)try{await this._call.hangup()}catch(t){console.warn("[address-widget] hangup error (ignoring)",t)}await this.close()}async _startCall(t){try{this._client=await rl(this.token,{debug:this.debug});const i=this.audio?{echoCancellation:this.echoCancellation,noiseSuppression:this.noiseSuppression,autoGainControl:this.autoGainControl,...this._consent?.audioDeviceId?{deviceId:this._consent.audioDeviceId}:{}}:void 0,r=this.consentRequired&&this._consent?this.video&&this._consent.camera:this.video,n=await this._client.dial({destination:this.destination,audio:this.audio,video:r,receiveVideo:this.video,inputAudioDeviceConstraints:i,userVariables:t,...this.nodeId?{nodeId:this.nodeId}:{}});this._call=n,this._traceGrantedTrack(n),ml({widgetId:this.widgetId,callId:n.id,destination:this.destination}),this._wireCallStateObservables(n),this._unwireEvents=dl(n,{onUserPartial:(s,a)=>this._chat.onUserPartial(s,a),onUserComplete:(s,a)=>this._chat.onUserComplete(s,a),onAiChunk:(s,a)=>{this._chat.onAiChunk(s,a),this._startAiSpeakingRing()},onAiComplete:(s,a)=>{this._chat.onAiComplete(s,a),this._stopAiSpeakingRing()},onUserEvent:s=>this._handleUserEvent(s),onSidecarEvent:s=>this._handleSidecarEvent(s),onTranscribeUtterance:(s,a)=>{s==="local-caller"?this._transcribeChat.onAiComplete(a,!1):this._transcribeChat.onUserComplete(a,!1)}}),this._rememberLastMedium("voice"),this.dispatchEvent(new CustomEvent("signalwire-address:call-joined",{detail:{call:n},bubbles:!0,composed:!0})),this._switchTarget=null}catch(i){console.error("[address-widget] call failed to start",i),this._surfaceError(i instanceof Error?i.message:"Unable to start the call. Please try again.")}}_wireCallStateObservables(t){this._remoteStreamSub?.unsubscribe(),this._remoteStreamSub=t.remoteStream$.subscribe(n=>{const s=this._audioRef.value,a=this._remoteVideoRef.value;s&&(n?(s.srcObject!==n&&(s.srcObject=n),s.play?.().catch(()=>{})):s.srcObject=null),a&&(n?(a.srcObject!==n&&(a.srcObject=n),a.play?.().catch(()=>{})):a.srcObject=null)}),this._localStreamSub?.unsubscribe(),this._localStreamSub=t.localStream$.subscribe(n=>{const s=this._localVideoRef.value;s&&(n?(s.srcObject!==n&&(s.srcObject=n),s.play?.().catch(()=>{})):s.srcObject=null)}),this._selfObserverSub?.unsubscribe();for(const n of this._selfSubs)n.unsubscribe();if(this._selfSubs=[],this._self=null,t.self$&&(this._selfObserverSub=t.self$.subscribe(n=>{for(const s of this._selfSubs)s.unsubscribe();if(this._selfSubs=[],this._self=n??null,!n){this._audioMuted=!1,this._videoMuted=!1;return}this._selfSubs.push(n.audioMuted$.subscribe(s=>{this._audioMuted=s===!0})),this._selfSubs.push(n.videoMuted$.subscribe(s=>{this._videoMuted=s===!0}))})),this.inputVolume!=null&&this.audio){const n=Math.max(0,Math.min(200,Number(this.inputVolume))),s=t;let a=!1;this._localGainSub?.unsubscribe(),this._localGainSub=t.localStream$.subscribe(o=>{if(o&&!a){a=!0;try{s.setLocalMicrophoneGain(n)}catch(c){console.warn("[address-widget] setLocalMicrophoneGain failed:",c)}}})}this._wireDeviceObservables(),this._applyConsentDeviceSelection(),this._wireDeadMicDetection(t);const i=()=>{const n=t.recoveryState,s=t.networkIssues??[],a=s.some(c=>c.severity==="critical"),o=s.length>0;n&&n!=="idle"?this._ring="reconnecting":a||o?this._ring="network-warning":this._aiChunkTimer?this._ring="ai-speaking":this._ring="none"};t.recoveryState$&&t.recoveryState$.subscribe(i),t.networkIssues$&&t.networkIssues$.subscribe(i),t.status$&&t.status$.subscribe(n=>{if(n==="disconnected"||n==="destroyed"){if(this._switchingMedium)return;this.close()}}),this._recoveryEventSub?.unsubscribe();const r=t.recoveryEvent$;r&&(this._recoveryEventSub=r.subscribe(n=>{switch(n.action){case"reinvite_started":case"call_recovering":this._showBanner({level:"warning",text:"Reconnecting…"});break;case"reinvite_succeeded":case"call_recovered":this._showBanner({level:"success",text:"Connection restored",dismissible:!0},3e3);break;case"max_attempts_reached":case"call_recovery_failed":this._showBanner({level:"error",text:"Connection lost",dismissible:!1}),this._call&&Yr(this.widgetId,this._call.id),this.close();break;case"video_disabled":this._showBanner({level:"info",text:"Video paused to maintain audio quality",dismissible:!0},5e3);break;case"video_restored":this._showBanner({level:"success",text:"Video restored",dismissible:!0},3e3);break}}));for(const n of this._firehoseSubs)try{n.unsubscribe()}catch{}if(this._firehoseSubs=[],this.debug){const n=t;n.callEvent$&&this._firehoseSubs.push(n.callEvent$.subscribe(s=>{console.log("[address-widget][firehose][callEvent$]",s)})),n.signalingEvent$&&this._firehoseSubs.push(n.signalingEvent$.subscribe(s=>{console.log("[address-widget][firehose][signalingEvent$]",s)}))}}async _traceGrantedTrack(t){if(this.debug)try{const i=t;if(!i.localStream$)return;let r=!1;const n=i.localStream$.subscribe(s=>{if(r||!s)return;r=!0;const a=s.getAudioTracks()[0];this._traceDevices("granted:audioTrack",{requested:this._consent?.audioDeviceId??"(browser default)",granted:a?.getSettings?.().deviceId??"(none)",label:a?.label??"(none)",enabled:a?.enabled,muted:a?.muted,readyState:a?.readyState}),queueMicrotask(()=>n.unsubscribe())})}catch(i){this._traceDevices("granted:audioTrack:failed",{error:String(i)})}}_traceDevices(t,i){this.debug&&console.log(`[address-widget][devices] ${t}`,i)}static _describeDevices(t){return{count:t.length,labelled:t.filter(i=>!!i.label).length,entries:t.map(i=>({id:i.deviceId?i.deviceId.slice(0,12):"(empty)",label:i.label||"(blank)"}))}}_wireDeviceObservables(){for(const i of this._deviceSubs)i.unsubscribe();this._deviceSubs=[];const t=this._client?.client;if(!t){this._traceDevices("wire:skipped",{reason:"no client"});return}this._traceDevices("wire:start",{consentAudioDeviceId:this._consent?.audioDeviceId??null,consentVideoDeviceId:this._consent?.videoDeviceId??null}),this._deviceSubs.push(t.audioInputDevices$.subscribe(i=>{this._audioInputDevices=i,this._traceDevices("audioInputDevices$",$.AddressWidget._describeDevices(i))})),this._deviceSubs.push(t.videoInputDevices$.subscribe(i=>{this._videoInputDevices=i,this._traceDevices("videoInputDevices$",$.AddressWidget._describeDevices(i))})),this._deviceSubs.push(t.selectedAudioInputDevice$.subscribe(i=>{this._selectedAudioInputId=i?.deviceId??null,this._traceDevices("selectedAudioInputDevice$",{id:i?.deviceId??null,label:i?.label??null,matchesConsent:(i?.deviceId??null)===(this._consent?.audioDeviceId??null)})})),this._deviceSubs.push(t.selectedVideoInputDevice$.subscribe(i=>{this._selectedVideoInputId=i?.deviceId??null,this._traceDevices("selectedVideoInputDevice$",{id:i?.deviceId??null,label:i?.label??null})}))}_toggleAudio(){const t=this._self??this._call?.self;if(!t)return;const i=this._audioMuted;this._audioMuted=!i;const r=i?t.unmute():t.mute();Promise.resolve(r).catch(n=>{console.warn("[address-widget] audio toggle error (ignored — local fallback applied):",n)})}_toggleVideo(){const t=this._self??this._call?.self;if(!t)return;const i=this._videoMuted;this._videoMuted=!i;const r=i?t.unmuteVideo():t.muteVideo();Promise.resolve(r).catch(n=>{console.warn("[address-widget] video toggle error (ignored — local fallback applied):",n)})}async _applyConsentDeviceSelection(){const t=this._client?.client;if(!t||!this._consent)return;const i=this._consent.audioDeviceId,r=this._consent.videoDeviceId;if(!i&&!r)return;const n=await this._awaitDeviceLists();if(i){const s=n.audio.find(a=>a.deviceId===i);if(s)try{t.selectAudioInputDevice(s),this._traceDevices("consent:applied:audio",{id:s.deviceId,label:s.label})}catch(a){this._traceDevices("consent:apply:audio:failed",{error:String(a)})}else this._traceDevices("consent:stale:audio",{wanted:i}),this._forgetStoredDevice("audio")}if(r){const s=n.video.find(a=>a.deviceId===r);if(s)try{t.selectVideoInputDevice(s),this._traceDevices("consent:applied:video",{id:s.deviceId,label:s.label})}catch(a){this._traceDevices("consent:apply:video:failed",{error:String(a)})}else this._traceDevices("consent:stale:video",{wanted:r}),this._forgetStoredDevice("video")}}async _awaitDeviceLists(t=2e3){const i=Date.now()+t;for(;Date.now()<i;){const r=this._audioInputDevices,n=this._videoInputDevices;if(r.some(s=>s.label)||n.some(s=>s.label))break;await new Promise(s=>setTimeout(s,100))}return{audio:this._audioInputDevices,video:this._videoInputDevices}}_forgetStoredDevice(t){if(!this._consent)return;const i={...this._consent,...t==="audio"?{audioDeviceId:null}:{videoDeviceId:null}};this._consent=i,ms(i.audio,this.consentVersion,i.train,i.camera,i.audioDeviceId,i.videoDeviceId)}_rememberDeviceChoice(t,i){if(!this._consent||(t==="audio"?this._consent.audioDeviceId:this._consent.videoDeviceId)===i)return;const r={...this._consent,...t==="audio"?{audioDeviceId:i}:{videoDeviceId:i}};this._consent=r,ms(r.audio,this.consentVersion,r.train,r.camera,r.audioDeviceId,r.videoDeviceId),this._traceDevices("choice:persisted",{kind:t,deviceId:i})}_selectAudioDevice(t){this._client?.client.selectAudioInputDevice(t),this._rememberDeviceChoice("audio",t.deviceId),this._dismissDeadMic()}_selectVideoDevice(t){this._client?.client.selectVideoInputDevice(t),this._rememberDeviceChoice("video",t.deviceId)}_startAiSpeakingRing(){this._ring="ai-speaking",this._aiChunkTimer&&clearTimeout(this._aiChunkTimer),this._aiChunkTimer=setTimeout(()=>{this._aiChunkTimer=void 0,this._ring==="ai-speaking"&&(this._ring="none")},1500)}_stopAiSpeakingRing(){this._aiChunkTimer&&(clearTimeout(this._aiChunkTimer),this._aiChunkTimer=void 0),this._ring==="ai-speaking"&&(this._ring="none")}_handleUserEvent(t){if(t.type==="chat_handoff"&&this._handleChatHandoff(t),t.type==="display_content"){const i=t,r=i,n=[i];r.data&&typeof r.data=="object"&&n.push(r.data),r.payload&&typeof r.payload=="object"&&n.push(r.payload),r.body&&typeof r.body=="object"&&n.push(r.body);let s=null;for(const a of n){const o=a.content;if(typeof o!="string")continue;const c=typeof a.format=="string"?a.format:"text";s={type:"display_content",content:o,format:c,title:typeof a.title=="string"?a.title:void 0,language:typeof a.language=="string"?a.language:void 0};break}if(s){const a=`c-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`;this._contentHistory.set(a,s),this._contentOrder.push(a),this._openContentId=a;const o={id:a,title:s.title??this._defaultChipTitle(s),preview:this._buildPreview(s),format:s.format,language:s.language};this._chat.pushContent(o),this._transcribeChat.pushContent(o),this._persistContent()}else console.warn("[address-widget] display_content payload rejected — shape unexpected",t)}this.onEvent?.(t),this.dispatchEvent(new CustomEvent("signalwire-address:event",{detail:t,bubbles:!0,composed:!0}))}_handleSidecarEvent(t){if(t.type==="insight"){const i=typeof t.raw=="string"?t.raw:"";if(i){const r=typeof t.tick_id=="number"?t.tick_id:void 0,n={text:i,tickId:r,ts:Date.now()};this._chat.pushInsight(n),this._transcribeChat.pushInsight(n)}}else if(t.type==="tool_result"){const i=typeof t.name=="string"?t.name:"";if(i&&i!=="sidecar_skip"){const r=typeof t.response=="string"?t.response:"";let n=r;try{const c=JSON.parse(r);c&&typeof c=="object"&&typeof c.response=="string"&&(n=c.response)}catch{}const s=n?`${i}: ${n}`:i,a=typeof t.tick_id=="number"?t.tick_id:void 0,o={text:s,label:"Tool",tickId:a,ts:Date.now()};this._chat.pushInsight(o),this._transcribeChat.pushInsight(o)}}else t.type==="error"&&console.warn("[address-widget] sidecar error:",t);this.onSidecarEvent?.(t),this.dispatchEvent(new CustomEvent("signalwire-address:sidecar",{detail:t,bubbles:!0,composed:!0}))}_defaultChipTitle(t){switch(t.format){case"code":return t.language?`Code (${t.language})`:"Code";case"markdown":return"Markdown";case"html":return"HTML";case"text":default:return"Shared"}}_buildPreview(t){const i=(t.content||"").replace(/\s+/g," ").trim(),r=72;return i.length>r?i.slice(0,r-1)+"…":i}async _attemptReattach(){const t=vl();if(!t||t.widgetId!==this.widgetId||!this.token)return;this._reattaching=!0;let i;try{i=await rl(this.token,{debug:this.debug})}catch{Yr(this.widgetId,t.callId),this._reattaching=!1;return}const r=Date.now()+5e3;let n=null;for(;Date.now()<r&&(n=(i.client.session?.calls??[]).find(l=>l.to===t.destination)??null,!n);)await new Promise(l=>setTimeout(l,250));if(!n){try{i.disconnect()}catch{}Yr(this.widgetId,t.callId),this._reattaching=!1;return}const s=qb(this.widgetId,t.callId);s&&this._chat.loadSnapshot(s);const a=Yb(this.widgetId,t.callId);if(a){this._contentHistory.clear(),this._contentOrder=[];for(const{id:c,payload:l}of a)this._contentHistory.set(c,l),this._contentOrder.push(c)}this._client=i,this._call=n,this._persistChat(),this._persistContent(),ml({widgetId:this.widgetId,callId:t.callId,destination:this.destination});const o=()=>{this._previousBodyOverflow=un(),this._overlayState="entering",this._installEscHandler(),requestAnimationFrame(()=>{this._overlayState==="entering"&&(this._overlayState="open")}),this._showBanner({level:"success",text:"Reconnected to call",dismissible:!0},4e3),this.updateComplete.then(()=>{this._call&&(this._wireCallStateObservables(this._call),this._unwireEvents=dl(this._call,{onUserPartial:(c,l)=>this._chat.onUserPartial(c,l),onUserComplete:(c,l)=>this._chat.onUserComplete(c,l),onAiChunk:(c,l)=>{this._chat.onAiChunk(c,l),this._startAiSpeakingRing()},onAiComplete:(c,l)=>{this._chat.onAiComplete(c,l),this._stopAiSpeakingRing()},onUserEvent:c=>this._handleUserEvent(c),onSidecarEvent:c=>this._handleSidecarEvent(c),onTranscribeUtterance:(c,l)=>{c==="local-caller"?this._transcribeChat.onAiComplete(l,!1):this._transcribeChat.onUserComplete(l,!1)}}))})};this._reattaching=!1,document.visibilityState==="visible"?o():(this._pendingAutoOpen=o,this._visibilityHandler=()=>{if(document.visibilityState==="visible"&&this._pendingAutoOpen){const c=this._pendingAutoOpen;this._pendingAutoOpen=null,this._visibilityHandler&&(document.removeEventListener("visibilitychange",this._visibilityHandler),this._visibilityHandler=void 0),c()}},document.addEventListener("visibilitychange",this._visibilityHandler))}_persistChat(){this._call&&Kb(this.widgetId,this._call.id,this._chat.getCommittedEntries())}_persistContent(){if(!this._call)return;const t=this._contentOrder.map(i=>{const r=this._contentHistory.get(i);return r?{id:i,payload:r}:null}).filter(i=>i!==null);Xb(this.widgetId,this._call.id,t)}_showBanner(t,i){this._bannerTimer&&(clearTimeout(this._bannerTimer),this._bannerTimer=void 0),this._banner=t,i&&i>0&&(this._bannerTimer=setTimeout(()=>{this._banner=null,this._bannerTimer=void 0},i))}_surfaceError(t){this._error=t,this._switchTarget=null,this._overlayState==="closed"&&(this._previouslyFocused=document.activeElement??null,this._previousBodyOverflow=un(),this._applyOriginFromLauncher(),this._overlayState="entering",this._installEscHandler(),requestAnimationFrame(()=>{this._overlayState==="entering"&&(this._overlayState="open")}))}async _teardown(){if(this._deadMicSub?.unsubscribe(),this._deadMicSub=void 0,this._deadMicWarned=!1,this._unwireEvents){try{this._unwireEvents()}catch{}this._unwireEvents=null}if(this._remoteStreamSub){try{this._remoteStreamSub.unsubscribe()}catch{}this._remoteStreamSub=void 0}if(this._localStreamSub){try{this._localStreamSub.unsubscribe()}catch{}this._localStreamSub=void 0}if(this._localGainSub){try{this._localGainSub.unsubscribe()}catch{}this._localGainSub=void 0}if(this._recoveryEventSub){try{this._recoveryEventSub.unsubscribe()}catch{}this._recoveryEventSub=void 0}for(const n of this._firehoseSubs)try{n.unsubscribe()}catch{}this._firehoseSubs=[];const t=this._localVideoRef.value;t&&(t.srcObject=null);const i=this._remoteVideoRef.value;i&&(i.srcObject=null),this._selfObserverSub?.unsubscribe(),this._selfObserverSub=null;for(const n of this._selfSubs)try{n.unsubscribe()}catch{}this._selfSubs=[],this._self=null;for(const n of this._deviceSubs)try{n.unsubscribe()}catch{}this._deviceSubs=[],this._audioMuted=!1,this._videoMuted=!1,this._audioInputDevices=[],this._videoInputDevices=[],this._selectedAudioInputId=null,this._selectedVideoInputId=null;const r=this._audioRef.value;if(r&&(r.srcObject=null),this._call){try{await this._call.hangup()}catch{}this._call=null}if(this._client){try{this._client.disconnect()}catch{}this._client=null}this._aiChunkTimer&&(clearTimeout(this._aiChunkTimer),this._aiChunkTimer=void 0)}_installEscHandler(){this._escHandler=t=>{t.key==="Escape"&&(t.preventDefault(),this.close())},window.addEventListener("keydown",this._escHandler,{capture:!0})}_removeEscHandler(){this._escHandler&&(window.removeEventListener("keydown",this._escHandler,{capture:!0}),this._escHandler=void 0)}_applyOriginFromLauncher(){const t=this.shadowRoot?.querySelector(".launcher");if(!t)return;const i=t.getBoundingClientRect(),r=kd(i);for(const[n,s]of Object.entries(r))this.style.setProperty(n,s)}_isStacked(){return this.layout==="stacked"||!this.video||this._activeMedium==="chat"}_buildAutoVariables(t){const i=this.autoIdentify?this._buildMetadata():{};if(this._consent){const r=i;r.consent={audio:this._consent.audio,train:this._consent.train,given_at:this._consent.ts,version:this._consent.version},this._consent.train||(r.no_training=!0)}return{...this.autoIdentify?{capabilities:this._buildCapabilities(t),metadata:i}:this._consent?{metadata:i}:{}}}_buildChatVariables(){return{...this._buildAutoVariables("chat"),...this._userVariables}}_buildCapabilities(t="voice"){return{widget:"signalwire-address",version:"0.4.1",medium:t,display_content:{formats:["text","markdown","code","html"],persistent:!0,copyable:!0},transcript:!0,video:this.video,audio:this.audio,self_preview:this.video&&this.showLocalVideo,chat_handoff:this._chatEnabled()}}_buildMetadata(){const t={widget:{version:"0.4.1",opened_at:new Date().toISOString(),theme:this.theme,layout:this.layout,audio_only:!this.video}};if(typeof window>"u"||typeof navigator>"u")return t;const i={url:window.location?.href,title:document?.title};return document?.referrer&&(i.referrer=document.referrer),t.page=i,t.client={user_agent:navigator.userAgent,platform:Ub(),language:navigator.language,languages:Array.isArray(navigator.languages)?[...navigator.languages]:void 0,timezone:Vb(),timezone_offset_minutes:-new Date().getTimezoneOffset(),viewport:{width:window.innerWidth,height:window.innerHeight},device_pixel_ratio:window.devicePixelRatio,touch:"ontouchstart"in window||(navigator.maxTouchPoints??0)>0,online:navigator.onLine,cookies_enabled:navigator.cookieEnabled,hardware_concurrency:navigator.hardwareConcurrency,prefers_dark:ul("(prefers-color-scheme: dark)"),prefers_reduced_motion:ul("(prefers-reduced-motion: reduce)")},t}async _awaitAnimation(){const t=this.shadowRoot?.querySelector("dialog.overlay");t&&await new Promise(i=>{const r=()=>{t.removeEventListener("animationend",r),i()};t.addEventListener("animationend",r,{once:!0}),setTimeout(r,300)})}_renderBody(){if(this._error)return x`<div class="error-card">
        <h3>Could not connect</h3>
        <p>${this._error}</p>
      </div>`;const t=this._chat.getHistory(),i=this._transcribeChat.getHistory(),n=t.some(l=>l.kind==="bubble")?t:i,s=this._chatAwaitingReply&&this._activeMedium==="chat",a=n.length>0||s,o=this._openContentId!==null?this._contentHistory.get(this._openContentId)??null:null,c=o!==null;return x`
      ${yh({show:this.consentRequired&&this._consent!==null,camera:this.video&&(this._consent?.camera??!1)})}
      ${vh({message:this._banner,onDismiss:()=>{this._banner=null,this._bannerTimer&&(clearTimeout(this._bannerTimer),this._bannerTimer=void 0)}})}
      ${this._picking?Ob({voiceAvailable:!!this.token&&!!this.destination,chatAvailable:this._chatEnabled(),onVoice:()=>void this._chooseVoice(),onChat:()=>void this._chooseChat()}):this._switchTarget&&!this._error?this._renderSwitching():x`
      ${this._activeMedium==="voice"?Ed({call:this._call,ring:this._ring,audioRef:this._audioRef,remoteVideoRef:this._remoteVideoRef,localVideoRef:this._localVideoRef,videoEnabled:this.video,poster:this.poster,showLocalVideo:this.showLocalVideo}):z}
      ${this._activeMedium==="voice"?Ud({call:this._call,client:this._client,audioMuted:this._audioMuted,videoMuted:this._videoMuted,videoEnabled:this.video,audioInputDevices:this._audioInputDevices,videoInputDevices:this._videoInputDevices,selectedAudioInputId:this._selectedAudioInputId,selectedVideoInputId:this._selectedVideoInputId,onToggleAudio:()=>this._toggleAudio(),onToggleVideo:()=>this._toggleVideo(),onHangup:()=>this.hangup(),onSelectAudioDevice:l=>this._selectAudioDevice(l),onSelectVideoDevice:l=>this._selectVideoDevice(l),onSwitchToChat:this._canSwitchToChat()?()=>void this.switchToChat():void 0}):z}
      <div class="chat-region" data-stacked=${String(this._isStacked())}>
        ${a?ah({entries:n,visible:!0,awaiting:s,stacked:this._isStacked(),scrollRef:this._transcriptRef,avatarUrl:this._avatarBroken?null:this.avatarUrl,onAvatarError:()=>{this._avatarBroken=!0},openContentId:this._openContentId,onContentClick:l=>{this._openContentId=l}}):z}
        ${c?fh({content:o,visible:!0,stacked:this._isStacked(),onClose:()=>{this._openContentId=null}}):z}
      </div>
      ${this._activeMedium==="chat"?ol({placeholder:this.chatPlaceholder,busy:this._chatBusy,onSend:l=>this._sendChatMessage(l),inputRef:this._composerRef,onSwitchToVoice:this.mode==="both"&&this.token&&this.destination?()=>void this.switchToVoice():void 0,onEnd:()=>void this._endChat()}):this._typeToTalkAvailable()?ol({placeholder:this.typeToTalkPlaceholder,busy:!1,onSend:l=>void this._sendTypedMessage(l),inputRef:this._composerRef}):z}
        `}
      <span hidden data-chat-version=${this._chatVersion}></span>
    `}_renderSwitching(){const t=this._switchTarget==="voice",i=t?x`<svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>`:x`<svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>`;return x`
      <div part="switching" class="switching" role="status" aria-live="polite">
        <div class="switching-spinner"><div class="switching-icon">${i}</div></div>
        <div class="switching-label">${t?"Switching to a voice call":"Switching to text chat"}</div>
        <div class="switching-sub">${t?"Connecting you now — hang tight.":"Bringing your conversation across."}</div>
      </div>
    `}render(){const t=this._overlayState;return x`
      ${yd({label:this.label,open:()=>this.open(),hidden:t!=="closed"})}
      ${t!=="closed"?Cd({close:()=>this.close(),state:t,stacked:this._isStacked(),presentation:this.presentation,position:this.position,ariaLabel:`Call ${this.destination||"SignalWire address"}`,body:this._renderBody()}):z}
      ${this.consentRequired?_h({open:this._consentModalOpen,draft:this._consentDraft,showCameraOption:this.video,audioDevices:this._consentAudioDevices,videoDevices:this._consentVideoDevices,micCheck:this.micCheck,micLevel:this._micLevel,micSilent:this._micSilent,micError:this._micError,dialogRef:this._consentModalRef,onDraftChange:(i,r)=>{this._consentDraft={...this._consentDraft,[i]:r},i==="audioDeviceId"?this._startMicMeter():i==="audio"&&(r?this._startMicMeter():this._stopMicMeter())},onAccept:()=>{this._acceptConsent()},onCancel:()=>this._cancelConsentModal()}):z}
    `}},$.AddressWidget.styles=[ad,od,cd,bd,wd,$d,xd,Qu,lh,gh,mh,Eb,Rb,Le`
      :host {
        display: inline-block;
        position: relative;
      }

      /* Chat region: a wrapper for the transcript + content drawer. In
         non-stacked mode it uses display:contents so its children behave
         like direct flex children of overlay-body (preserves the old
         sidebar + right-slide-drawer layout). In stacked mode it becomes
         a flex-column that claims the middle of overlay-body, giving the
         content drawer a positioned ancestor to absolute-overlay against. */
      .chat-region {
        display: contents;
      }

      .chat-region[data-stacked='true'] {
        display: flex;
        flex-direction: column;
        position: relative;
        flex: 1 1 0;
        min-height: 0;
      }

      /* Error card shown inside the overlay if dial/connect fails. */
      .error-card {
        max-width: 420px;
        margin: auto;
        padding: 24px;
        background: var(--sw-address-bg-raised);
        border: 1px solid var(--sw-address-border);
        border-radius: var(--sw-address-radius);
        color: var(--sw-address-fg-default);
        text-align: left;
        font-family: var(--sw-address-font-body);
      }
      .error-card h3 {
        font-family: var(--sw-address-font-heading);
        font-size: 18px;
        margin: 0 0 8px;
        color: var(--sw-address-fg-headings);
      }
      .error-card p {
        margin: 0;
        font-size: 14px;
        color: var(--sw-address-fg-muted);
        line-height: 1.6;
      }

      /* Medium-switch transition. Claims the whole body and centres one
         indicator so the old surface is cleared and the change of medium is
         unmistakable while the new one loads. Turquoise per the brand's
         positive/active role. */
      .switching {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 18px;
        padding: 32px;
        text-align: center;
        font-family: var(--sw-address-font-body);
        color: var(--sw-address-fg-default);
      }
      .switching-spinner {
        position: relative;
        width: 56px;
        height: 56px;
      }
      .switching-spinner::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 50%;
        border: 3px solid color-mix(in srgb, var(--sw-address-positive) 22%, transparent);
        border-top-color: var(--sw-address-positive);
        animation: switching-spin 0.9s linear infinite;
      }
      .switching-icon {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--sw-address-positive);
      }
      .switching-icon svg {
        width: 24px;
        height: 24px;
        display: block;
      }
      .switching-label {
        font-size: 16px;
        font-weight: 600;
      }
      .switching-sub {
        font-size: 13px;
        color: var(--sw-address-fg-muted);
        max-width: 30ch;
      }
      @keyframes switching-spin {
        to {
          transform: rotate(360deg);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .switching-spinner::before {
          animation: none;
        }
      }
    `],I([W({type:String,reflect:!1})],$.AddressWidget.prototype,"token",2),I([W({type:String,reflect:!0})],$.AddressWidget.prototype,"destination",2),I([W({type:String,reflect:!0})],$.AddressWidget.prototype,"label",2),I([W({type:String,reflect:!0})],$.AddressWidget.prototype,"theme",2),I([W({reflect:!0,converter:Je})],$.AddressWidget.prototype,"video",2),I([W({reflect:!0,converter:Je})],$.AddressWidget.prototype,"audio",2),I([W({type:String,reflect:!0})],$.AddressWidget.prototype,"poster",2),I([W({type:String,reflect:!0})],$.AddressWidget.prototype,"layout",2),I([W({type:String,reflect:!0})],$.AddressWidget.prototype,"mode",2),I([W({attribute:"default-mode",reflect:!0})],$.AddressWidget.prototype,"defaultMode",2),I([W({type:String,reflect:!0})],$.AddressWidget.prototype,"presentation",2),I([W({type:String,reflect:!0})],$.AddressWidget.prototype,"position",2),I([W({attribute:"gateway-url",reflect:!0})],$.AddressWidget.prototype,"gatewayUrl",2),I([W({attribute:"chat-key",reflect:!1})],$.AddressWidget.prototype,"chatKey",2),I([W({attribute:"avatar-url",reflect:!0})],$.AddressWidget.prototype,"avatarUrl",2),I([W({attribute:"chat-placeholder",reflect:!0})],$.AddressWidget.prototype,"chatPlaceholder",2),I([W({attribute:"type-to-talk",reflect:!0,type:Boolean})],$.AddressWidget.prototype,"typeToTalk",2),I([W({attribute:"type-to-talk-placeholder",reflect:!0})],$.AddressWidget.prototype,"typeToTalkPlaceholder",2),I([W({attribute:"chat-auto-open",reflect:!0,converter:Je})],$.AddressWidget.prototype,"chatAutoOpen",2),I([W({attribute:"chat-persistence",reflect:!0,converter:Je})],$.AddressWidget.prototype,"chatPersistence",2),I([W({attribute:"chat-storage-key",reflect:!0})],$.AddressWidget.prototype,"chatStorageKey",2),I([W({attribute:"chat-always-new",reflect:!0,type:Boolean})],$.AddressWidget.prototype,"chatAlwaysNew",2),I([W({attribute:"chat-end-on-close",reflect:!0,type:Boolean})],$.AddressWidget.prototype,"chatEndOnClose",2),I([W({attribute:"chat-timeout-seconds",type:Number,reflect:!0})],$.AddressWidget.prototype,"chatTimeoutSeconds",2),I([W({attribute:"show-local-video",reflect:!0,converter:Je})],$.AddressWidget.prototype,"showLocalVideo",2),I([W({attribute:"echo-cancellation",reflect:!0,converter:Je})],$.AddressWidget.prototype,"echoCancellation",2),I([W({attribute:"noise-suppression",reflect:!0,converter:Je})],$.AddressWidget.prototype,"noiseSuppression",2),I([W({attribute:"auto-gain-control",reflect:!0,converter:Je})],$.AddressWidget.prototype,"autoGainControl",2),I([W({attribute:"input-volume",type:Number,reflect:!0})],$.AddressWidget.prototype,"inputVolume",2),I([W({attribute:"auto-identify",reflect:!0,converter:Je})],$.AddressWidget.prototype,"autoIdentify",2),I([W({attribute:"widget-id",reflect:!0})],$.AddressWidget.prototype,"widgetId",2),I([W({attribute:"auto-reattach",reflect:!0,converter:Je})],$.AddressWidget.prototype,"autoReattach",2),I([W({attribute:"node-id",reflect:!0})],$.AddressWidget.prototype,"nodeId",2),I([W({type:Boolean,reflect:!0})],$.AddressWidget.prototype,"debug",2),I([W({attribute:"mic-check",reflect:!0,converter:Je})],$.AddressWidget.prototype,"micCheck",2),I([W({attribute:"consent-required",reflect:!0,converter:Je})],$.AddressWidget.prototype,"consentRequired",2),I([W({attribute:"consent-version",type:Number,reflect:!0})],$.AddressWidget.prototype,"consentVersion",2),I([W({attribute:"user-variables",reflect:!1})],$.AddressWidget.prototype,"userVariablesAttr",1),I([Q()],$.AddressWidget.prototype,"_overlayState",2),I([Q()],$.AddressWidget.prototype,"_chatVersion",2),I([Q()],$.AddressWidget.prototype,"_openContentId",2),I([Q()],$.AddressWidget.prototype,"_error",2),I([Q()],$.AddressWidget.prototype,"_call",2),I([Q()],$.AddressWidget.prototype,"_ring",2),I([Q()],$.AddressWidget.prototype,"_audioMuted",2),I([Q()],$.AddressWidget.prototype,"_videoMuted",2),I([Q()],$.AddressWidget.prototype,"_audioInputDevices",2),I([Q()],$.AddressWidget.prototype,"_videoInputDevices",2),I([Q()],$.AddressWidget.prototype,"_selectedAudioInputId",2),I([Q()],$.AddressWidget.prototype,"_selectedVideoInputId",2),I([Q()],$.AddressWidget.prototype,"_banner",2),I([Q()],$.AddressWidget.prototype,"_activeMedium",2),I([Q()],$.AddressWidget.prototype,"_chatBusy",2),I([Q()],$.AddressWidget.prototype,"_chatAwaitingReply",2),I([Q()],$.AddressWidget.prototype,"_picking",2),I([Q()],$.AddressWidget.prototype,"_consent",2),I([Q()],$.AddressWidget.prototype,"_consentModalOpen",2),I([Q()],$.AddressWidget.prototype,"_consentDraft",2),I([Q()],$.AddressWidget.prototype,"_micLevel",2),I([Q()],$.AddressWidget.prototype,"_micSilent",2),I([Q()],$.AddressWidget.prototype,"_micError",2),I([Q()],$.AddressWidget.prototype,"_consentAudioDevices",2),I([Q()],$.AddressWidget.prototype,"_consentVideoDevices",2),I([Q()],$.AddressWidget.prototype,"_switchTarget",2),I([Q()],$.AddressWidget.prototype,"_avatarBroken",2),$.AddressWidget=I([rd("signalwire-address")],$.AddressWidget);const e_="0.4.1";function t_(e){if(typeof e=="string"){const t=document.querySelector(e);if(!t)throw new Error(`[address-widget] no element matches selector "${e}"`);return t}return e}function i_(e,t){const i=t_(e),r=document.createElement("signalwire-address");for(t.token!==void 0&&(r.token=t.token),t.destination!==void 0&&(r.destination=t.destination),t.label!==void 0&&(r.label=t.label),t.theme!==void 0&&(r.theme=t.theme),t.video!==void 0&&(r.video=t.video),t.audio!==void 0&&(r.audio=t.audio),t.poster!==void 0&&(r.poster=t.poster),t.layout!==void 0&&(r.layout=t.layout),t.showLocalVideo!==void 0&&(r.showLocalVideo=t.showLocalVideo),t.echoCancellation!==void 0&&(r.echoCancellation=t.echoCancellation),t.noiseSuppression!==void 0&&(r.noiseSuppression=t.noiseSuppression),t.autoGainControl!==void 0&&(r.autoGainControl=t.autoGainControl),t.inputVolume!==void 0&&(r.inputVolume=t.inputVolume),t.autoIdentify!==void 0&&(r.autoIdentify=t.autoIdentify),t.nodeId!==void 0&&(r.nodeId=t.nodeId),t.debug!==void 0&&(r.debug=t.debug),t.widgetId!==void 0&&(r.widgetId=t.widgetId),t.autoReattach!==void 0&&(r.autoReattach=t.autoReattach),t.mode!==void 0&&(r.mode=t.mode),t.defaultMode!==void 0&&(r.defaultMode=t.defaultMode),t.presentation!==void 0&&(r.presentation=t.presentation),t.position!==void 0&&(r.position=t.position),t.gatewayUrl!==void 0&&(r.gatewayUrl=t.gatewayUrl),t.chatKey!==void 0&&(r.chatKey=t.chatKey),t.avatarUrl!==void 0&&(r.avatarUrl=t.avatarUrl),t.chatPlaceholder!==void 0&&(r.chatPlaceholder=t.chatPlaceholder),t.typeToTalk!==void 0&&(r.typeToTalk=t.typeToTalk),t.typeToTalkPlaceholder!==void 0&&(r.typeToTalkPlaceholder=t.typeToTalkPlaceholder),t.chatPersistence!==void 0&&(r.chatPersistence=t.chatPersistence),t.chatAutoOpen!==void 0&&(r.chatAutoOpen=t.chatAutoOpen),t.chatStorageKey!==void 0&&(r.chatStorageKey=t.chatStorageKey),t.chatAlwaysNew!==void 0&&(r.chatAlwaysNew=t.chatAlwaysNew),t.chatEndOnClose!==void 0&&(r.chatEndOnClose=t.chatEndOnClose),t.chatTimeoutSeconds!==void 0&&(r.chatTimeoutSeconds=t.chatTimeoutSeconds),t.userVariables!==void 0&&(r.userVariablesAttr=t.userVariables),t.onEvent!==void 0&&(r.onEvent=t.onEvent),t.onSidecarEvent!==void 0&&(r.onSidecarEvent=t.onSidecarEvent),t.micCheck!==void 0&&(r.micCheck=t.micCheck),t.consentRequired!==void 0&&(r.consentRequired=t.consentRequired),t.consentVersion!==void 0&&(r.consentVersion=t.consentVersion),t.onConsentGiven!==void 0&&(r.onConsentGiven=t.onConsentGiven);i.firstChild;)r.appendChild(i.firstChild);return i.appendChild(r),r}async function r_(e){try{await e.close()}catch{}e.parentElement?.removeChild(e)}$.VERSION=e_,$.mount=i_,$.unmount=r_,Object.defineProperty($,Symbol.toStringTag,{value:"Module"})}));
//# sourceMappingURL=address-widget.umd.js.map
