import{S as nt,i as st,s as it,C as Bi,k as F,a as ae,l as L,m as B,h as R,c as le,n as I,b as Ie,J as Ge,D as Wi,E as Ui,F as Hi,g as ue,d as de,K as Ao,L as ko,o as hn,t as Gt,w as Vi,M as Po,H as zt,N as Do,O as $i,q as fe,r as _e,p as Us,G as S,P as Oo,u as Gi,y as Ae,z as ke,A as Pe,B as De}from"../chunks/index.c2d3ce40.js";const zi=Symbol();function Mo(n){let e,t,s,i,r;const o=n[15].default,a=Bi(o,n,n[14],null);return{c(){e=F("canvas"),t=ae(),a&&a.c(),this.h()},l(l){e=L(l,"CANVAS",{class:!0,width:!0,height:!0}),B(e).forEach(R),t=le(l),a&&a.l(l),this.h()},h(){I(e,"class","pixelCanvas absolute bottom-0 left-0 right-0 top-0 m-auto border-2 border-gray-950 svelte-6ccob6"),I(e,"width",n[0]),I(e,"height",n[1])},m(l,c){Ie(l,e,c),n[16](e),Ie(l,t,c),a&&a.m(l,c),s=!0,i||(r=[Ge(e,"mousedown",n[3]),Ge(e,"mousemove",n[4]),Ge(e,"mouseup",n[5]),Ge(e,"mouseleave",n[6])],i=!0)},p(l,[c]){(!s||c&1)&&I(e,"width",l[0]),(!s||c&2)&&I(e,"height",l[1]),a&&a.p&&(!s||c&16384)&&Wi(a,o,l,l[14],s?Hi(o,l[14],c,null):Ui(l[14]),null)},i(l){s||(ue(a,l),s=!0)},o(l){de(a,l),s=!1},d(l){l&&R(e),n[16](null),l&&R(t),a&&a.d(l),i=!1,Ao(r)}}}function Fo(n,e,t){let{$$slots:s={},$$scope:i}=e,{maxWidth:r=0}=e,{maxHeight:o=0}=e,{color:a="#000000"}=e,{tool:l=void 0}=e,{widthPixels:c}=e,{heightPixels:u}=e,h=c,d=u,f=1,p,g;const T=(v,y,N=a)=>{const D=Math.floor(v),O=Math.floor(y);0<=D&&D<c&&0<=O&&O<u&&g!=null&&(t(13,g.fillStyle=N,g),g.beginPath(),g.rect(D*f,O*f,f,f),g.fill())},j=(v,y,N=!0)=>{const D=Math.floor(v),O=Math.floor(y);if(!(0<=D&&D<c&&0<=O&&O<u)||g==null)return;N&&T(v,y),t(13,g.strokeStyle="#000000",g);let Ne=2;t(13,g.lineWidth=Ne,g),g.strokeRect(D*f,O*f,f,f)},G=()=>{g==null||g.clearRect(0,0,h,d)},J=()=>({setPixel:T,setMarker:j,clear:G,color:a});ko(zi,{setPixel:T,clear:G}),hn(async()=>{t(13,g=p.getContext("2d")),await Gt(),Z(),await Gt()});const Z=()=>{const v=Math.floor(r/c),y=Math.floor(o/u);f=Math.min(v,y),t(0,h=f*c),t(1,d=f*u)},X=(v,y)=>({x:Math.floor(v/f)-(v%f?0:1),y:Math.floor(y/f)-(y%f?0:1)}),ee=v=>{const{offsetX:y,offsetY:N}=v,{x:D,y:O}=X(y,N);l==null||l.onMouseDown(D,O,J())},ht=v=>{const{offsetX:y,offsetY:N}=v,{x:D,y:O}=X(y,N);l==null||l.onMouseMove(D,O,J())},te=v=>{const{offsetX:y,offsetY:N}=v,{x:D,y:O}=X(y,N);l==null||l.onMouseUp(D,O,J())},ut=v=>{const{offsetX:y,offsetY:N}=v,{x:D,y:O}=X(y,N);l==null||l.onMouseLeave(D,O,J())};function ne(v){Vi[v?"unshift":"push"](()=>{p=v,t(2,p)})}return n.$$set=v=>{"maxWidth"in v&&t(7,r=v.maxWidth),"maxHeight"in v&&t(8,o=v.maxHeight),"color"in v&&t(9,a=v.color),"tool"in v&&t(10,l=v.tool),"widthPixels"in v&&t(11,c=v.widthPixels),"heightPixels"in v&&t(12,u=v.heightPixels),"$$scope"in v&&t(14,i=v.$$scope)},n.$$.update=()=>{n.$$.dirty&8704&&g&&t(13,g.fillStyle=a,g)},[h,d,p,ee,ht,te,ut,r,o,a,l,c,u,g,i,s,ne]}class Hs extends nt{constructor(e){super(),st(this,e,Fo,Mo,it,{maxWidth:7,maxHeight:8,color:9,tool:10,widthPixels:11,heightPixels:12})}}const Lo=n=>({maxWidth:n&1,maxHeight:n&2}),Vs=n=>({maxWidth:n[0],maxHeight:n[1]});function Bo(n){let e,t;const s=n[4].default,i=Bi(s,n,n[3],Vs);return{c(){e=F("div"),i&&i.c(),this.h()},l(r){e=L(r,"DIV",{class:!0});var o=B(e);i&&i.l(o),o.forEach(R),this.h()},h(){I(e,"class","relative h-full")},m(r,o){Ie(r,e,o),i&&i.m(e,null),n[5](e),t=!0},p(r,[o]){i&&i.p&&(!t||o&11)&&Wi(i,s,r,r[3],t?Hi(s,r[3],o,Lo):Ui(r[3]),Vs)},i(r){t||(ue(i,r),t=!0)},o(r){de(i,r),t=!1},d(r){r&&R(e),i&&i.d(r),n[5](null)}}}function Wo(n,e,t){let{$$slots:s={},$$scope:i}=e,r=0,o=0,a;hn(()=>{const{height:c,width:u}=a.getBoundingClientRect();t(1,o=c),t(0,r=u)});function l(c){Vi[c?"unshift":"push"](()=>{a=c,t(2,a)})}return n.$$set=c=>{"$$scope"in c&&t(3,i=c.$$scope)},[r,o,a,i,s,l]}class Uo extends nt{constructor(e){super(),st(this,e,Wo,Bo,it,{})}}const Ho="https://pixelpals-83a2d.firebaseio.com",Vo="world",Et=150,$s=120,$o="c",Go=["FF00FF","9400D3","9370DB","7B68EE","FFB6C1","FF69B4","FF1493","FFB6AB","FFDAB9","FDE59F","#E9B5A3","F7C87C","D5A74F","CB9769","A06459","FF0000","FFA500","FFFF00","FFD700","B8860B","D2691E","8B4513","A0522D","A52A2A","800000","006400","008000","9ACD32","32CD32","00FF00","7FFF00","ADFF2F","00FA9A","00FFFF","00CED1","1E90FF","6495ED","4169E1","0000CD","191970","D3D3D3","A9A9A9","696969","708090","2F4F4F","FFFFFF","000000"];/**
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
 */const ji={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const _=function(n,e){if(!n)throw rt(e)},rt=function(n){return new Error("Firebase Database ("+ji.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const qi=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},zo=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ss={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(t[u],t[h],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(qi(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):zo(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new jo;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class jo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yi=function(n){const e=qi(n);return ss.encodeByteArray(e,!0)},jt=function(n){return Yi(n).replace(/\./g,"")},Fn=function(n){try{return ss.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qo(n){return Ki(void 0,n)}function Ki(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Yo(t)||(n[t]=Ki(n[t],e[t]));return n}function Yo(n){return n!=="__proto__"}/**
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
 */function Ko(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Qo=()=>Ko().__FIREBASE_DEFAULTS__,Xo=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Jo=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Fn(n[1]);return e&&JSON.parse(e)},Qi=()=>{try{return Qo()||Xo()||Jo()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Zo=n=>{var e,t;return(t=(e=Qi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},ea=n=>{const e=Zo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Xi=()=>{var n;return(n=Qi())===null||n===void 0?void 0:n.config};/**
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
 */class un{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function ta(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[jt(JSON.stringify(t)),jt(JSON.stringify(o)),a].join(".")}/**
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
 */function na(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ji(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(na())}function sa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zi(){return ji.NODE_ADMIN===!0}function ia(){try{return typeof indexedDB=="object"}catch{return!1}}function ra(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const oa="FirebaseError";class Pt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=oa,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,er.prototype.create)}}class er{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?aa(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Pt(i,a,s)}}function aa(n,e){return n.replace(la,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const la=/\{\$([^}]+)}/g;/**
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
 */function wt(n){return JSON.parse(n)}function W(n){return JSON.stringify(n)}/**
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
 */const tr=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=wt(Fn(r[0])||""),t=wt(Fn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},ca=function(n){const e=tr(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},ha=function(n){const e=tr(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ye(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Qe(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Gs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function qt(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Ln(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(zs(r)&&zs(o)){if(!Ln(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function zs(n){return n!==null&&typeof n=="object"}/**
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
 */function ua(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class da{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function is(n,e){return`${n} failed: ${e} argument `}/**
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
 */const fa=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,_(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},dn=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
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
 */function ot(n){return n&&n._delegate?n._delegate:n}class It{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Re="[DEFAULT]";/**
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
 */class _a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new un;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ga(e))try{this.getOrInitializeService({instanceIdentifier:Re})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Re){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Re){return this.instances.has(e)}getOptions(e=Re){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:pa(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Re){return this.component?this.component.multipleInstances?e:Re:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pa(n){return n===Re?void 0:n}function ga(n){return n.instantiationMode==="EAGER"}/**
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
 */class ma{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new _a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var A;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(A||(A={}));const ya={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},va=A.INFO,Ca={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},Ea=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Ca[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nr{constructor(e){this.name=e,this._logLevel=va,this._logHandler=Ea,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in A))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ya[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...e),this._logHandler(this,A.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...e),this._logHandler(this,A.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,A.INFO,...e),this._logHandler(this,A.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,A.WARN,...e),this._logHandler(this,A.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...e),this._logHandler(this,A.ERROR,...e)}}const wa=(n,e)=>e.some(t=>n instanceof t);let js,qs;function Ia(){return js||(js=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ba(){return qs||(qs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sr=new WeakMap,Bn=new WeakMap,ir=new WeakMap,Sn=new WeakMap,rs=new WeakMap;function Sa(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ve(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&sr.set(t,n)}).catch(()=>{}),rs.set(e,n),e}function Ta(n){if(Bn.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Bn.set(n,e)}let Wn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Bn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ir.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ve(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Na(n){Wn=n(Wn)}function Ra(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Tn(this),e,...t);return ir.set(s,e.sort?e.sort():[e]),ve(s)}:ba().includes(n)?function(...e){return n.apply(Tn(this),e),ve(sr.get(this))}:function(...e){return ve(n.apply(Tn(this),e))}}function xa(n){return typeof n=="function"?Ra(n):(n instanceof IDBTransaction&&Ta(n),wa(n,Ia())?new Proxy(n,Wn):n)}function ve(n){if(n instanceof IDBRequest)return Sa(n);if(Sn.has(n))return Sn.get(n);const e=xa(n);return e!==n&&(Sn.set(n,e),rs.set(e,n)),e}const Tn=n=>rs.get(n);function Aa(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=ve(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ve(o.result),l.oldVersion,l.newVersion,ve(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ka=["get","getKey","getAll","getAllKeys","count"],Pa=["put","add","delete","clear"],Nn=new Map;function Ys(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Nn.get(e))return Nn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Pa.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||ka.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Nn.set(e,r),r}Na(n=>({...n,get:(e,t,s)=>Ys(e,t)||n.get(e,t,s),has:(e,t)=>!!Ys(e,t)||n.has(e,t)}));/**
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
 */class Da{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Oa(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Oa(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Un="@firebase/app",Ks="0.9.12";/**
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
 */const Be=new nr("@firebase/app"),Ma="@firebase/app-compat",Fa="@firebase/analytics-compat",La="@firebase/analytics",Ba="@firebase/app-check-compat",Wa="@firebase/app-check",Ua="@firebase/auth",Ha="@firebase/auth-compat",Va="@firebase/database",$a="@firebase/database-compat",Ga="@firebase/functions",za="@firebase/functions-compat",ja="@firebase/installations",qa="@firebase/installations-compat",Ya="@firebase/messaging",Ka="@firebase/messaging-compat",Qa="@firebase/performance",Xa="@firebase/performance-compat",Ja="@firebase/remote-config",Za="@firebase/remote-config-compat",el="@firebase/storage",tl="@firebase/storage-compat",nl="@firebase/firestore",sl="@firebase/firestore-compat",il="firebase",rl="9.22.2";/**
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
 */const Hn="[DEFAULT]",ol={[Un]:"fire-core",[Ma]:"fire-core-compat",[La]:"fire-analytics",[Fa]:"fire-analytics-compat",[Wa]:"fire-app-check",[Ba]:"fire-app-check-compat",[Ua]:"fire-auth",[Ha]:"fire-auth-compat",[Va]:"fire-rtdb",[$a]:"fire-rtdb-compat",[Ga]:"fire-fn",[za]:"fire-fn-compat",[ja]:"fire-iid",[qa]:"fire-iid-compat",[Ya]:"fire-fcm",[Ka]:"fire-fcm-compat",[Qa]:"fire-perf",[Xa]:"fire-perf-compat",[Ja]:"fire-rc",[Za]:"fire-rc-compat",[el]:"fire-gcs",[tl]:"fire-gcs-compat",[nl]:"fire-fst",[sl]:"fire-fst-compat","fire-js":"fire-js",[il]:"fire-js-all"};/**
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
 */const Yt=new Map,Vn=new Map;function al(n,e){try{n.container.addComponent(e)}catch(t){Be.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Kt(n){const e=n.name;if(Vn.has(e))return Be.debug(`There were multiple attempts to register component ${e}.`),!1;Vn.set(e,n);for(const t of Yt.values())al(t,n);return!0}function ll(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const cl={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ce=new er("app","Firebase",cl);/**
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
 */class hl{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new It("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ce.create("app-deleted",{appName:this._name})}}/**
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
 */const ul=rl;function rr(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Hn,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ce.create("bad-app-name",{appName:String(i)});if(t||(t=Xi()),!t)throw Ce.create("no-options");const r=Yt.get(i);if(r){if(Ln(t,r.options)&&Ln(s,r.config))return r;throw Ce.create("duplicate-app",{appName:i})}const o=new ma(i);for(const l of Vn.values())o.addComponent(l);const a=new hl(t,s,o);return Yt.set(i,a),a}function dl(n=Hn){const e=Yt.get(n);if(!e&&n===Hn&&Xi())return rr();if(!e)throw Ce.create("no-app",{appName:n});return e}function je(n,e,t){var s;let i=(s=ol[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Be.warn(a.join(" "));return}Kt(new It(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const fl="firebase-heartbeat-database",_l=1,bt="firebase-heartbeat-store";let Rn=null;function or(){return Rn||(Rn=Aa(fl,_l,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(bt)}}}).catch(n=>{throw Ce.create("idb-open",{originalErrorMessage:n.message})})),Rn}async function pl(n){try{return await(await or()).transaction(bt).objectStore(bt).get(ar(n))}catch(e){if(e instanceof Pt)Be.warn(e.message);else{const t=Ce.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Be.warn(t.message)}}}async function Qs(n,e){try{const s=(await or()).transaction(bt,"readwrite");await s.objectStore(bt).put(e,ar(n)),await s.done}catch(t){if(t instanceof Pt)Be.warn(t.message);else{const s=Ce.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Be.warn(s.message)}}}function ar(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
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
 */const gl=1024,ml=30*24*60*60*1e3;class yl{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Cl(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xs();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=ml}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Xs(),{heartbeatsToSend:t,unsentEntries:s}=vl(this._heartbeatsCache.heartbeats),i=jt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Xs(){return new Date().toISOString().substring(0,10)}function vl(n,e=gl){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Js(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Js(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Cl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ia()?ra().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Js(n){return jt(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function El(n){Kt(new It("platform-logger",e=>new Da(e),"PRIVATE")),Kt(new It("heartbeat",e=>new yl(e),"PRIVATE")),je(Un,Ks,n),je(Un,Ks,"esm2017"),je("fire-js","")}El("");var wl="firebase",Il="9.22.2";/**
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
 */je(wl,Il,"app");const Zs="@firebase/database",ei="0.14.4";/**
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
 */let lr="";function bl(n){lr=n}/**
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
 */class Sl{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),W(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:wt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Tl{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ye(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const cr=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Sl(e)}}catch{}return new Tl},Oe=cr("localStorage"),$n=cr("sessionStorage");/**
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
 */const qe=new nr("@firebase/database"),Nl=function(){let n=1;return function(){return n++}}(),hr=function(n){const e=fa(n),t=new da;t.update(e);const s=t.digest();return ss.encodeByteArray(s)},Dt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Dt.apply(null,s):typeof s=="object"?e+=W(s):e+=s,e+=" "}return e};let Le=null,ti=!0;const Rl=function(n,e){_(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(qe.logLevel=A.VERBOSE,Le=qe.log.bind(qe),e&&$n.set("logging_enabled",!0)):typeof n=="function"?Le=n:(Le=null,$n.remove("logging_enabled"))},z=function(...n){if(ti===!0&&(ti=!1,Le===null&&$n.get("logging_enabled")===!0&&Rl(!0)),Le){const e=Dt.apply(null,n);Le(e)}},Ot=function(n){return function(...e){z(n,...e)}},Gn=function(...n){const e="FIREBASE INTERNAL ERROR: "+Dt(...n);qe.error(e)},me=function(...n){const e=`FIREBASE FATAL ERROR: ${Dt(...n)}`;throw qe.error(e),new Error(e)},K=function(...n){const e="FIREBASE WARNING: "+Dt(...n);qe.warn(e)},xl=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&K("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ur=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Al=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Xe="[MIN_NAME]",We="[MAX_NAME]",at=function(n,e){if(n===e)return 0;if(n===Xe||e===We)return-1;if(e===Xe||n===We)return 1;{const t=ni(n),s=ni(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},kl=function(n,e){return n===e?0:n<e?-1:1},ft=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+W(e))},os=function(n){if(typeof n!="object"||n===null)return W(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=W(e[s]),t+=":",t+=os(n[e[s]]);return t+="}",t},dr=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Q(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const fr=function(n){_(!ur(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Pl=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Dl=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ol(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Ml=new RegExp("^-?(0*)\\d{1,10}$"),Fl=-2147483648,Ll=2147483647,ni=function(n){if(Ml.test(n)){const e=Number(n);if(e>=Fl&&e<=Ll)return e}return null},lt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw K("Exception was thrown by user callback.",t),e},Math.floor(0))}},Bl=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},mt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
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
 */class Wl{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){K(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Ul{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(z("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',K(e)}}class Ye{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ye.OWNER="owner";/**
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
 */const as="5",_r="v",pr="s",gr="r",mr="f",yr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,vr="ls",Cr="p",zn="ac",Er="websocket",wr="long_polling";/**
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
 */class Ir{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Oe.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Oe.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Hl(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function br(n,e,t){_(typeof e=="string","typeof type must == string"),_(typeof t=="object","typeof params must == object");let s;if(e===Er)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===wr)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Hl(n)&&(t.ns=n.namespace);const i=[];return Q(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Vl{constructor(){this.counters_={}}incrementCounter(e,t=1){ye(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return qo(this.counters_)}}/**
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
 */const xn={},An={};function ls(n){const e=n.toString();return xn[e]||(xn[e]=new Vl),xn[e]}function $l(n,e){const t=n.toString();return An[t]||(An[t]=e()),An[t]}/**
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
 */class Gl{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&lt(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const si="start",zl="close",jl="pLPCommand",ql="pRTLPCB",Sr="id",Tr="pw",Nr="ser",Yl="cb",Kl="seg",Ql="ts",Xl="d",Jl="dframe",Rr=1870,xr=30,Zl=Rr-xr,ec=25e3,tc=3e4;class ze{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ot(e),this.stats_=ls(t),this.urlFn=l=>(this.appCheckToken&&(l[zn]=this.appCheckToken),br(t,wr,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Gl(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(tc)),Al(()=>{if(this.isClosed_)return;this.scriptTagHolder=new cs((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===si)this.id=a,this.password=l;else if(o===zl)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[si]="t",s[Nr]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Yl]=this.scriptTagHolder.uniqueCallbackIdentifier),s[_r]=as,this.transportSessionId&&(s[pr]=this.transportSessionId),this.lastSessionId&&(s[vr]=this.lastSessionId),this.applicationId&&(s[Cr]=this.applicationId),this.appCheckToken&&(s[zn]=this.appCheckToken),typeof location<"u"&&location.hostname&&yr.test(location.hostname)&&(s[gr]=mr);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ze.forceAllow_=!0}static forceDisallow(){ze.forceDisallow_=!0}static isAvailable(){return ze.forceAllow_?!0:!ze.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Pl()&&!Dl()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=W(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Yi(t),i=dr(s,Zl);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Jl]="t",s[Sr]=e,s[Tr]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=W(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class cs{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Nl(),window[jl+this.uniqueCallbackIdentifier]=e,window[ql+this.uniqueCallbackIdentifier]=t,this.myIFrame=cs.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){z("frame writing exception"),a.stack&&z(a.stack),z(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||z("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Sr]=this.myID,e[Tr]=this.myPW,e[Nr]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xr+s.length<=Rr;){const o=this.pendingSegs.shift();s=s+"&"+Kl+i+"="+o.seg+"&"+Ql+i+"="+o.ts+"&"+Xl+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(ec)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{z("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const nc=16384,sc=45e3;let Qt=null;typeof MozWebSocket<"u"?Qt=MozWebSocket:typeof WebSocket<"u"&&(Qt=WebSocket);class se{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ot(this.connId),this.stats_=ls(t),this.connURL=se.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[_r]=as,typeof location<"u"&&location.hostname&&yr.test(location.hostname)&&(o[gr]=mr),t&&(o[pr]=t),s&&(o[vr]=s),i&&(o[zn]=i),r&&(o[Cr]=r),br(e,Er,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Oe.set("previous_websocket_failure",!0);try{let s;Zi(),this.mySock=new Qt(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){se.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Qt!==null&&!se.forceDisallow_}static previouslyFailed(){return Oe.isInMemoryStorage||Oe.get("previous_websocket_failure")===!0}markConnectionHealthy(){Oe.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=wt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=W(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=dr(t,nc);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(sc))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}se.responsesRequiredToBeHealthy=2;se.healthyTimeout=3e4;/**
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
 */class St{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ze,se]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=se&&se.isAvailable();let s=t&&!se.previouslyFailed();if(e.webSocketOnly&&(t||K("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[se];else{const i=this.transports_=[];for(const r of St.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);St.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}St.globalTransportInitialized_=!1;/**
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
 */const ic=6e4,rc=5e3,oc=10*1024,ac=100*1024,kn="t",ii="d",lc="s",ri="r",cc="e",oi="o",ai="a",li="n",ci="p",hc="h";class uc{constructor(e,t,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ot("c:"+this.id+":"),this.transportManager_=new St(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=mt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ac?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>oc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(kn in e){const t=e[kn];t===ai?this.upgradeIfSecondaryHealthy_():t===ri?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===oi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ft("t",e),s=ft("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ci,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ai,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:li,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ft("t",e),s=ft("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ft(kn,e);if(ii in e){const s=e[ii];if(t===hc){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===li){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===lc?this.onConnectionShutdown_(s):t===ri?this.onReset_(s):t===cc?Gn("Server Error: "+s):t===oi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Gn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),as!==s&&K("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),mt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ic))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):mt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(rc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ci,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Oe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ar{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class kr{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){_(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Xt extends kr{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ji()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Xt}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const hi=32,ui=768;class x{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function b(){return new x("")}function C(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function be(n){return n.pieces_.length-n.pieceNum_}function k(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new x(n.pieces_,e)}function Pr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function dc(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Dr(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Or(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new x(e,0)}function U(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof x)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new x(t,0)}function w(n){return n.pieceNum_>=n.pieces_.length}function q(n,e){const t=C(n),s=C(e);if(t===null)return e;if(t===s)return q(k(n),k(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function hs(n,e){if(be(n)!==be(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ie(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(be(n)>be(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class fc{constructor(e,t){this.errorPrefix_=t,this.parts_=Dr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=dn(this.parts_[s]);Mr(this)}}function _c(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=dn(e),Mr(n)}function pc(n){const e=n.parts_.pop();n.byteLength_-=dn(e),n.parts_.length>0&&(n.byteLength_-=1)}function Mr(n){if(n.byteLength_>ui)throw new Error(n.errorPrefix_+"has a key path longer than "+ui+" bytes ("+n.byteLength_+").");if(n.parts_.length>hi)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+hi+") or object contains a cycle "+xe(n))}function xe(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class us extends kr{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new us}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const _t=1e3,gc=60*5*1e3,di=30*1e3,mc=1.3,yc=3e4,vc="server_kill",fi=3;class ge extends Ar{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ge.nextPersistentConnectionId_++,this.log_=Ot("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=_t,this.maxReconnectDelay_=gc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Zi())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");us.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(W(r)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new un,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ge.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ye(e,"w")){const s=Qe(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();K(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ha(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=di)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ca(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+W(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Gn("Unrecognized action received from server: "+W(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=_t,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=_t,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>yc&&(this.reconnectDelay_=_t),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ge.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){_(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?z("getToken() completed but was canceled"):(z("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new uc(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{K(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(vc)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&K(h),l())}}}interrupt(e){z("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){z("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Gs(this.interruptReasons_)&&(this.reconnectDelay_=_t,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>os(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new x(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){z("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=fi&&(this.reconnectDelay_=di,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){z("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=fi&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+lr.replace(/\./g,"-")]=1,Ji()?e["framework.cordova"]=1:sa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xt.getInstance().currentlyOnline();return Gs(this.interruptReasons_)&&e}}ge.nextPersistentConnectionId_=0;ge.nextConnectionId_=0;/**
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
 */class E{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new E(e,t)}}/**
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
 */class fn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new E(Xe,e),i=new E(Xe,t);return this.compare(s,i)!==0}minPost(){return E.MIN}}/**
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
 */let Vt;class Fr extends fn{static get __EMPTY_NODE(){return Vt}static set __EMPTY_NODE(e){Vt=e}compare(e,t){return at(e.name,t.name)}isDefinedOn(e){throw rt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return E.MIN}maxPost(){return new E(We,Vt)}makePost(e,t){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new E(e,Vt)}toString(){return".key"}}const Ke=new Fr;/**
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
 */class $t{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class V{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??V.RED,this.left=i??Y.EMPTY_NODE,this.right=r??Y.EMPTY_NODE}copy(e,t,s,i,r){return new V(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Y.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Y.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,V.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,V.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}V.RED=!0;V.BLACK=!1;class Cc{copy(e,t,s,i,r){return this}insert(e,t,s){return new V(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Y{constructor(e,t=Y.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Y(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,V.BLACK,null,null))}remove(e){return new Y(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,V.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new $t(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new $t(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new $t(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new $t(this.root_,null,this.comparator_,!0,e)}}Y.EMPTY_NODE=new Cc;/**
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
 */function Ec(n,e){return at(n.name,e.name)}function ds(n,e){return at(n,e)}/**
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
 */let jn;function wc(n){jn=n}const Lr=function(n){return typeof n=="number"?"number:"+fr(n):"string:"+n},Br=function(n){if(n.isLeafNode()){const e=n.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ye(e,".sv"),"Priority must be a string or number.")}else _(n===jn||n.isEmpty(),"priority of unexpected type.");_(n===jn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let _i;class H{constructor(e,t=H.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Br(this.priorityNode_)}static set __childrenNodeConstructor(e){_i=e}static get __childrenNodeConstructor(){return _i}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new H(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:H.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return w(e)?this:C(e)===".priority"?this.priorityNode_:H.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:H.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=C(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(_(s!==".priority"||be(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,H.__childrenNodeConstructor.EMPTY_NODE.updateChild(k(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Lr(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=fr(this.value_):e+=this.value_,this.lazyHash_=hr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===H.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof H.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=H.VALUE_TYPE_ORDER.indexOf(t),r=H.VALUE_TYPE_ORDER.indexOf(s);return _(i>=0,"Unknown leaf type: "+t),_(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}H.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Wr,Ur;function Ic(n){Wr=n}function bc(n){Ur=n}class Sc extends fn{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?at(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return E.MIN}maxPost(){return new E(We,new H("[PRIORITY-POST]",Ur))}makePost(e,t){const s=Wr(e);return new E(t,new H("[PRIORITY-POST]",s))}toString(){return".priority"}}const M=new Sc;/**
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
 */const Tc=Math.log(2);class Nc{constructor(e){const t=r=>parseInt(Math.log(r)/Tc,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Jt=function(n,e,t,s){n.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new V(d,h.node,V.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=i(l,f),g=i(f+1,c);return h=n[f],d=t?t(h):h,new V(d,h.node,V.BLACK,p,g)}},r=function(l){let c=null,u=null,h=n.length;const d=function(p,g){const T=h-p,j=h;h-=p;const G=i(T+1,j),J=n[T],Z=t?t(J):J;f(new V(Z,J.node,g,null,G))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),T=Math.pow(2,l.count-(p+1));g?d(T,V.BLACK):(d(T,V.BLACK),d(T,V.RED))}return u},o=new Nc(n.length),a=r(o);return new Y(s||e,a)};/**
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
 */let Pn;const $e={};class pe{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return _($e&&M,"ChildrenNode.ts has not been loaded"),Pn=Pn||new pe({".priority":$e},{".priority":M}),Pn}get(e){const t=Qe(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Y?t:null}hasIndex(e){return ye(this.indexSet_,e.toString())}addIndex(e,t){_(e!==Ke,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(E.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Jt(s,e.getCompare()):a=$e;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new pe(u,c)}addToIndexes(e,t){const s=qt(this.indexes_,(i,r)=>{const o=Qe(this.indexSet_,r);if(_(o,"Missing index implementation for "+r),i===$e)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(E.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Jt(a,o.getCompare())}else return $e;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new E(e.name,a))),l.insert(e,e.node)}});return new pe(s,this.indexSet_)}removeFromIndexes(e,t){const s=qt(this.indexes_,i=>{if(i===$e)return i;{const r=t.get(e.name);return r?i.remove(new E(e.name,r)):i}});return new pe(s,this.indexSet_)}}/**
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
 */let pt;class m{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Br(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pt||(pt=new m(new Y(ds),null,pe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pt}updatePriority(e){return this.children_.isEmpty()?this:new m(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?pt:t}}getChild(e){const t=C(e);return t===null?this:this.getImmediateChild(t).getChild(k(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(_(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new E(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?pt:this.priorityNode_;return new m(i,o,r)}}updateChild(e,t){const s=C(e);if(s===null)return t;{_(C(e)!==".priority"||be(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(k(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(M,(o,a)=>{t[o]=a.val(e),s++,r&&m.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Lr(this.getPriority().val())+":"),this.forEachChild(M,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":hr(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new E(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new E(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new E(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,E.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,E.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Mt?-1:0}withIndex(e){if(e===Ke||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new m(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ke||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(M),i=t.getIterator(M);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ke?null:this.indexMap_.get(e.toString())}}m.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Rc extends m{constructor(){super(new Y(ds),m.EMPTY_NODE,pe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return m.EMPTY_NODE}isEmpty(){return!1}}const Mt=new Rc;Object.defineProperties(E,{MIN:{value:new E(Xe,m.EMPTY_NODE)},MAX:{value:new E(We,Mt)}});Fr.__EMPTY_NODE=m.EMPTY_NODE;H.__childrenNodeConstructor=m;wc(Mt);bc(Mt);/**
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
 */const xc=!0;function $(n,e=null){if(n===null)return m.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new H(t,$(e))}if(!(n instanceof Array)&&xc){const t=[];let s=!1;if(Q(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=$(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new E(o,l)))}}),t.length===0)return m.EMPTY_NODE;const r=Jt(t,Ec,o=>o.name,ds);if(s){const o=Jt(t,M.getCompare());return new m(r,$(e),new pe({".priority":o},{".priority":M}))}else return new m(r,$(e),pe.Default)}else{let t=m.EMPTY_NODE;return Q(n,(s,i)=>{if(ye(n,s)&&s.substring(0,1)!=="."){const r=$(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority($(e))}}Ic($);/**
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
 */class Ac extends fn{constructor(e){super(),this.indexPath_=e,_(!w(e)&&C(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?at(e.name,t.name):r}makePost(e,t){const s=$(e),i=m.EMPTY_NODE.updateChild(this.indexPath_,s);return new E(t,i)}maxPost(){const e=m.EMPTY_NODE.updateChild(this.indexPath_,Mt);return new E(We,e)}toString(){return Dr(this.indexPath_,0).join("/")}}/**
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
 */class kc extends fn{compare(e,t){const s=e.node.compareTo(t.node);return s===0?at(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return E.MIN}maxPost(){return E.MAX}makePost(e,t){const s=$(e);return new E(t,s)}toString(){return".value"}}const Pc=new kc;/**
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
 */function Hr(n){return{type:"value",snapshotNode:n}}function Je(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Tt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Nt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Dc(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class fs{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){_(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Tt(t,a)):_(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Je(t,s)):o.trackChildChange(Nt(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(M,(i,r)=>{t.hasChild(i)||s.trackChildChange(Tt(i,r))}),t.isLeafNode()||t.forEachChild(M,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Nt(i,r,o))}else s.trackChildChange(Je(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?m.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Rt{constructor(e){this.indexedFilter_=new fs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Rt.getStartPost_(e),this.endPost_=Rt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new E(t,s))||(s=m.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=m.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(m.EMPTY_NODE);const r=this;return t.forEachChild(M,(o,a)=>{r.matches(new E(o,a))||(i=i.updateImmediateChild(o,m.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Oc{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Rt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new E(t,s))||(s=m.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=m.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=m.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(m.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,m.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;_(a.numChildren()===this.limit_,"");const l=new E(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Nt(t,s,h)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Tt(t,h));const g=a.updateImmediateChild(t,m.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Je(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Tt(c.name,c.node)),r.trackChildChange(Je(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,m.EMPTY_NODE)):e}}/**
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
 */class _s{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=M}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Xe}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:We}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===M}copy(){const e=new _s;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Mc(n){return n.loadsAllData()?new fs(n.getIndex()):n.hasLimit()?new Oc(n):new Rt(n)}function pi(n){const e={};if(n.isDefault())return e;let t;if(n.index_===M?t="$priority":n.index_===Pc?t="$value":n.index_===Ke?t="$key":(_(n.index_ instanceof Ac,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=W(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=W(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+W(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=W(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+W(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function gi(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==M&&(e.i=n.index_.toString()),e}/**
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
 */class Zt extends Ar{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Ot("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Zt.getListenId_(e,s),a={};this.listens_[o]=a;const l=pi(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Qe(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=Zt.getListenId_(e,t);delete this.listens_[s]}get(e){const t=pi(e._queryParams),s=e._path.toString(),i=new un;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ua(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=wt(a.responseText)}catch{K("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&K("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Fc{constructor(){this.rootNode_=m.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function en(){return{value:null,children:new Map}}function Vr(n,e,t){if(w(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=C(e);n.children.has(s)||n.children.set(s,en());const i=n.children.get(s);e=k(e),Vr(i,e,t)}}function qn(n,e,t){n.value!==null?t(e,n.value):Lc(n,(s,i)=>{const r=new x(e.toString()+"/"+s);qn(i,r,t)})}function Lc(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class Bc{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Q(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const mi=10*1e3,Wc=30*1e3,Uc=5*60*1e3;class Hc{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Bc(e);const s=mi+(Wc-mi)*Math.random();mt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Q(e,(i,r)=>{r>0&&ye(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),mt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Uc))}}/**
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
 */var re;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(re||(re={}));function $r(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ps(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function gs(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class tn{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=re.ACK_USER_WRITE,this.source=$r()}operationForChild(e){if(w(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new x(e));return new tn(b(),t,this.revert)}}else return _(C(this.path)===e,"operationForChild called for unrelated child."),new tn(k(this.path),this.affectedTree,this.revert)}}/**
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
 */class xt{constructor(e,t){this.source=e,this.path=t,this.type=re.LISTEN_COMPLETE}operationForChild(e){return w(this.path)?new xt(this.source,b()):new xt(this.source,k(this.path))}}/**
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
 */class Ue{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=re.OVERWRITE}operationForChild(e){return w(this.path)?new Ue(this.source,b(),this.snap.getImmediateChild(e)):new Ue(this.source,k(this.path),this.snap)}}/**
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
 */class At{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=re.MERGE}operationForChild(e){if(w(this.path)){const t=this.children.subtree(new x(e));return t.isEmpty()?null:t.value?new Ue(this.source,b(),t.value):new At(this.source,b(),t)}else return _(C(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new At(this.source,k(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Se{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(w(e))return this.isFullyInitialized()&&!this.filtered_;const t=C(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Vc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function $c(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Dc(o.childName,o.snapshotNode))}),gt(n,i,"child_removed",e,s,t),gt(n,i,"child_added",e,s,t),gt(n,i,"child_moved",r,s,t),gt(n,i,"child_changed",e,s,t),gt(n,i,"value",e,s,t),i}function gt(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>zc(n,a,l)),o.forEach(a=>{const l=Gc(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Gc(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function zc(n,e,t){if(e.childName==null||t.childName==null)throw rt("Should only compare child_ events.");const s=new E(e.childName,e.snapshotNode),i=new E(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function _n(n,e){return{eventCache:n,serverCache:e}}function yt(n,e,t,s){return _n(new Se(e,t,s),n.serverCache)}function Gr(n,e,t,s){return _n(n.eventCache,new Se(e,t,s))}function nn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function He(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Dn;const jc=()=>(Dn||(Dn=new Y(kl)),Dn);class P{constructor(e,t=jc()){this.value=e,this.children=t}static fromObject(e){let t=new P(null);return Q(e,(s,i)=>{t=t.set(new x(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:b(),value:this.value};if(w(e))return null;{const s=C(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(k(e),t);return r!=null?{path:U(new x(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(w(e))return this;{const t=C(e),s=this.children.get(t);return s!==null?s.subtree(k(e)):new P(null)}}set(e,t){if(w(e))return new P(t,this.children);{const s=C(e),r=(this.children.get(s)||new P(null)).set(k(e),t),o=this.children.insert(s,r);return new P(this.value,o)}}remove(e){if(w(e))return this.children.isEmpty()?new P(null):new P(null,this.children);{const t=C(e),s=this.children.get(t);if(s){const i=s.remove(k(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new P(null):new P(this.value,r)}else return this}}get(e){if(w(e))return this.value;{const t=C(e),s=this.children.get(t);return s?s.get(k(e)):null}}setTree(e,t){if(w(e))return t;{const s=C(e),r=(this.children.get(s)||new P(null)).setTree(k(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new P(this.value,o)}}fold(e){return this.fold_(b(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(U(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,b(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(w(e))return null;{const r=C(e),o=this.children.get(r);return o?o.findOnPath_(k(e),U(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,b(),t)}foreachOnPath_(e,t,s){if(w(e))return this;{this.value&&s(t,this.value);const i=C(e),r=this.children.get(i);return r?r.foreachOnPath_(k(e),U(t,i),s):new P(null)}}foreach(e){this.foreach_(b(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(U(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class oe{constructor(e){this.writeTree_=e}static empty(){return new oe(new P(null))}}function vt(n,e,t){if(w(e))return new oe(new P(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=q(i,e);return r=r.updateChild(o,t),new oe(n.writeTree_.set(i,r))}else{const i=new P(t),r=n.writeTree_.setTree(e,i);return new oe(r)}}}function yi(n,e,t){let s=n;return Q(t,(i,r)=>{s=vt(s,U(e,i),r)}),s}function vi(n,e){if(w(e))return oe.empty();{const t=n.writeTree_.setTree(e,new P(null));return new oe(t)}}function Yn(n,e){return Ve(n,e)!=null}function Ve(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(q(t.path,e)):null}function Ci(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(M,(s,i)=>{e.push(new E(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new E(s,i.value))}),e}function Ee(n,e){if(w(e))return n;{const t=Ve(n,e);return t!=null?new oe(new P(t)):new oe(n.writeTree_.subtree(e))}}function Kn(n){return n.writeTree_.isEmpty()}function Ze(n,e){return zr(b(),n.writeTree_,e)}function zr(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(_(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=zr(U(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(U(n,".priority"),s)),t}}/**
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
 */function pn(n,e){return Kr(e,n)}function qc(n,e,t,s,i){_(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=vt(n.visibleWrites,e,t)),n.lastWriteId=s}function Yc(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Kc(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);_(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Qc(a,s.path)?i=!1:ie(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Xc(n),!0;if(s.snap)n.visibleWrites=vi(n.visibleWrites,s.path);else{const a=s.children;Q(a,l=>{n.visibleWrites=vi(n.visibleWrites,U(s.path,l))})}return!0}else return!1}function Qc(n,e){if(n.snap)return ie(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ie(U(n.path,t),e))return!0;return!1}function Xc(n){n.visibleWrites=jr(n.allWrites,Jc,b()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Jc(n){return n.visible}function jr(n,e,t){let s=oe.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)ie(t,o)?(a=q(t,o),s=vt(s,a,r.snap)):ie(o,t)&&(a=q(o,t),s=vt(s,b(),r.snap.getChild(a)));else if(r.children){if(ie(t,o))a=q(t,o),s=yi(s,a,r.children);else if(ie(o,t))if(a=q(o,t),w(a))s=yi(s,b(),r.children);else{const l=Qe(r.children,C(a));if(l){const c=l.getChild(k(a));s=vt(s,b(),c)}}}else throw rt("WriteRecord should have .snap or .children")}}return s}function qr(n,e,t,s,i){if(!s&&!i){const r=Ve(n.visibleWrites,e);if(r!=null)return r;{const o=Ee(n.visibleWrites,e);if(Kn(o))return t;if(t==null&&!Yn(o,b()))return null;{const a=t||m.EMPTY_NODE;return Ze(o,a)}}}else{const r=Ee(n.visibleWrites,e);if(!i&&Kn(r))return t;if(!i&&t==null&&!Yn(r,b()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ie(c.path,e)||ie(e,c.path))},a=jr(n.allWrites,o,e),l=t||m.EMPTY_NODE;return Ze(a,l)}}}function Zc(n,e,t){let s=m.EMPTY_NODE;const i=Ve(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(M,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Ee(n.visibleWrites,e);return t.forEachChild(M,(o,a)=>{const l=Ze(Ee(r,new x(o)),a);s=s.updateImmediateChild(o,l)}),Ci(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ee(n.visibleWrites,e);return Ci(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function eh(n,e,t,s,i){_(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=U(e,t);if(Yn(n.visibleWrites,r))return null;{const o=Ee(n.visibleWrites,r);return Kn(o)?i.getChild(t):Ze(o,i.getChild(t))}}function th(n,e,t,s){const i=U(e,t),r=Ve(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Ee(n.visibleWrites,i);return Ze(o,s.getNode().getImmediateChild(t))}else return null}function nh(n,e){return Ve(n.visibleWrites,e)}function sh(n,e,t,s,i,r,o){let a;const l=Ee(n.visibleWrites,e),c=Ve(l,b());if(c!=null)a=c;else if(t!=null)a=Ze(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function ih(){return{visibleWrites:oe.empty(),allWrites:[],lastWriteId:-1}}function sn(n,e,t,s){return qr(n.writeTree,n.treePath,e,t,s)}function ms(n,e){return Zc(n.writeTree,n.treePath,e)}function Ei(n,e,t,s){return eh(n.writeTree,n.treePath,e,t,s)}function rn(n,e){return nh(n.writeTree,U(n.treePath,e))}function rh(n,e,t,s,i,r){return sh(n.writeTree,n.treePath,e,t,s,i,r)}function ys(n,e,t){return th(n.writeTree,n.treePath,e,t)}function Yr(n,e){return Kr(U(n.treePath,e),n.writeTree)}function Kr(n,e){return{treePath:n,writeTree:e}}/**
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
 */class oh{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;_(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),_(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Nt(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Tt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Je(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Nt(s,e.snapshotNode,i.oldSnap));else throw rt("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ah{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Qr=new ah;class vs{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Se(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ys(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:He(this.viewCache_),r=rh(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function lh(n){return{filter:n}}function ch(n,e){_(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function hh(n,e,t,s,i){const r=new oh;let o,a;if(t.type===re.OVERWRITE){const c=t;c.source.fromUser?o=Qn(n,e,c.path,c.snap,s,i,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!w(c.path),o=on(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===re.MERGE){const c=t;c.source.fromUser?o=dh(n,e,c.path,c.children,s,i,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Xn(n,e,c.path,c.children,s,i,a,r))}else if(t.type===re.ACK_USER_WRITE){const c=t;c.revert?o=ph(n,e,c.path,s,i,r):o=fh(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===re.LISTEN_COMPLETE)o=_h(n,e,t.path,s,r);else throw rt("Unknown operation type: "+t.type);const l=r.getChanges();return uh(e,o,l),{viewCache:o,changes:l}}function uh(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=nn(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Hr(nn(e)))}}function Xr(n,e,t,s,i,r){const o=e.eventCache;if(rn(s,t)!=null)return e;{let a,l;if(w(t))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=He(e),u=c instanceof m?c:m.EMPTY_NODE,h=ms(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=sn(s,He(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=C(t);if(c===".priority"){_(be(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Ei(s,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=k(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Ei(s,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=ys(s,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return yt(e,a,o.isFullyInitialized()||w(t),n.filter.filtersNodes())}}function on(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(w(t))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=C(t);if(!l.isCompleteForPath(t)&&be(t)>1)return e;const p=k(t),T=l.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?c=u.updatePriority(l.getNode(),T):c=u.updateChild(l.getNode(),f,T,p,Qr,null)}const h=Gr(e,c,l.isFullyInitialized()||w(t),u.filtersNodes()),d=new vs(i,h,r);return Xr(n,h,t,i,d,a)}function Qn(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const u=new vs(i,e,r);if(w(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=yt(e,c,!0,n.filter.filtersNodes());else{const h=C(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=yt(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=k(t),f=a.getNode().getImmediateChild(h);let p;if(w(d))p=s;else{const g=u.getCompleteChild(h);g!=null?Pr(d)===".priority"&&g.getChild(Or(d)).isEmpty()?p=g:p=g.updateChild(d,s):p=m.EMPTY_NODE}if(f.equals(p))l=e;else{const g=n.filter.updateChild(a.getNode(),h,p,d,u,o);l=yt(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function wi(n,e){return n.eventCache.isCompleteForChild(e)}function dh(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=U(t,l);wi(e,C(u))&&(a=Qn(n,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=U(t,l);wi(e,C(u))||(a=Qn(n,a,u,c,i,r,o))}),a}function Ii(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Xn(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;w(t)?c=s:c=new P(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=Ii(n,f,d);l=on(n,l,new x(h),p,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),g=Ii(n,p,d);l=on(n,l,new x(h),g,i,r,o,a)}}),l}function fh(n,e,t,s,i,r,o){if(rn(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(w(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return on(n,e,t,l.getNode().getChild(t),i,r,a,o);if(w(t)){let c=new P(null);return l.getNode().forEachChild(Ke,(u,h)=>{c=c.set(new x(u),h)}),Xn(n,e,t,c,i,r,a,o)}else return e}else{let c=new P(null);return s.foreach((u,h)=>{const d=U(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),Xn(n,e,t,c,i,r,a,o)}}function _h(n,e,t,s,i){const r=e.serverCache,o=Gr(e,r.getNode(),r.isFullyInitialized()||w(t),r.isFiltered());return Xr(n,o,t,s,Qr,i)}function ph(n,e,t,s,i,r){let o;if(rn(s,t)!=null)return e;{const a=new vs(s,e,i),l=e.eventCache.getNode();let c;if(w(t)||C(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=sn(s,He(e));else{const h=e.serverCache.getNode();_(h instanceof m,"serverChildren would be complete if leaf node"),u=ms(s,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=C(t);let h=ys(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,k(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,m.EMPTY_NODE,k(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=sn(s,He(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||rn(s,b())!=null,yt(e,c,o,n.filter.filtersNodes())}}/**
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
 */class gh{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new fs(s.getIndex()),r=Mc(s);this.processor_=lh(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(m.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(m.EMPTY_NODE,a.getNode(),null),u=new Se(l,o.isFullyInitialized(),i.filtersNodes()),h=new Se(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=_n(h,u),this.eventGenerator_=new Vc(this.query_)}get query(){return this.query_}}function mh(n){return n.viewCache_.serverCache.getNode()}function yh(n){return nn(n.viewCache_)}function vh(n,e){const t=He(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!w(e)&&!t.getImmediateChild(C(e)).isEmpty())?t.getChild(e):null}function bi(n){return n.eventRegistrations_.length===0}function Ch(n,e){n.eventRegistrations_.push(e)}function Si(n,e,t){const s=[];if(t){_(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Ti(n,e,t,s){e.type===re.MERGE&&e.source.queryId!==null&&(_(He(n.viewCache_),"We should always have a full cache before handling merges"),_(nn(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=hh(n.processor_,i,e,t,s);return ch(n.processor_,r.viewCache),_(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Jr(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Eh(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(M,(r,o)=>{s.push(Je(r,o))}),t.isFullyInitialized()&&s.push(Hr(t.getNode())),Jr(n,s,t.getNode(),e)}function Jr(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return $c(n.eventGenerator_,e,t,i)}/**
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
 */let an;class Zr{constructor(){this.views=new Map}}function wh(n){_(!an,"__referenceConstructor has already been defined"),an=n}function Ih(){return _(an,"Reference.ts has not been loaded"),an}function bh(n){return n.views.size===0}function Cs(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return _(r!=null,"SyncTree gave us an op for an invalid query."),Ti(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Ti(o,e,t,s));return r}}function eo(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=sn(t,i?s:null),l=!1;a?l=!0:s instanceof m?(a=ms(t,s),l=!1):(a=m.EMPTY_NODE,l=!1);const c=_n(new Se(a,l,!1),new Se(s,i,!1));return new gh(e,c)}return o}function Sh(n,e,t,s,i,r){const o=eo(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Ch(o,t),Eh(o,t)}function Th(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=Te(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(Si(c,t,s)),bi(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(Si(l,t,s)),bi(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Te(n)&&r.push(new(Ih())(e._repo,e._path)),{removed:r,events:o}}function to(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function we(n,e){let t=null;for(const s of n.views.values())t=t||vh(s,e);return t}function no(n,e){if(e._queryParams.loadsAllData())return gn(n);{const s=e._queryIdentifier;return n.views.get(s)}}function so(n,e){return no(n,e)!=null}function Te(n){return gn(n)!=null}function gn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ln;function Nh(n){_(!ln,"__referenceConstructor has already been defined"),ln=n}function Rh(){return _(ln,"Reference.ts has not been loaded"),ln}let xh=1;class Ni{constructor(e){this.listenProvider_=e,this.syncPointTree_=new P(null),this.pendingWriteTree_=ih(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function io(n,e,t,s,i){return qc(n.pendingWriteTree_,e,t,s,i),i?Lt(n,new Ue($r(),e,t)):[]}function Me(n,e,t=!1){const s=Yc(n.pendingWriteTree_,e);if(Kc(n.pendingWriteTree_,e)){let r=new P(null);return s.snap!=null?r=r.set(b(),!0):Q(s.children,o=>{r=r.set(new x(o),!0)}),Lt(n,new tn(s.path,r,t))}else return[]}function Ft(n,e,t){return Lt(n,new Ue(ps(),e,t))}function Ah(n,e,t){const s=P.fromObject(t);return Lt(n,new At(ps(),e,s))}function kh(n,e){return Lt(n,new xt(ps(),e))}function Ph(n,e,t){const s=ws(n,t);if(s){const i=Is(s),r=i.path,o=i.queryId,a=q(r,e),l=new xt(gs(o),a);return bs(n,r,l)}else return[]}function cn(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||so(o,e))){const l=Th(o,e,t,s);bh(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>Te(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=Mh(d);for(let p=0;p<f.length;++p){const g=f[p],T=g.query,j=lo(n,g);n.listenProvider_.startListening(Ct(T),kt(n,T),j.hashFn,j.onComplete)}}}!h&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(Ct(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(mn(d));n.listenProvider_.stopListening(Ct(d),f)}))}Fh(n,c)}return a}function ro(n,e,t,s){const i=ws(n,s);if(i!=null){const r=Is(i),o=r.path,a=r.queryId,l=q(o,e),c=new Ue(gs(a),l,t);return bs(n,o,c)}else return[]}function Dh(n,e,t,s){const i=ws(n,s);if(i){const r=Is(i),o=r.path,a=r.queryId,l=q(o,e),c=P.fromObject(t),u=new At(gs(a),l,c);return bs(n,o,u)}else return[]}function Jn(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=q(d,i);r=r||we(f,p),o=o||Te(f)});let a=n.syncPointTree_.get(i);a?(o=o||Te(a),r=r||we(a,b())):(a=new Zr,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=m.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,p)=>{const g=we(p,b());g&&(r=r.updateImmediateChild(f,g))}));const c=so(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=mn(e);_(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=Lh();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=pn(n.pendingWriteTree_,i);let h=Sh(a,e,t,u,r,l);if(!c&&!o&&!s){const d=no(a,e);h=h.concat(Bh(n,e,d))}return h}function Es(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=q(o,e),c=we(a,l);if(c)return c});return qr(i,e,r,t,!0)}function Oh(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const h=q(c,t);s=s||we(u,h)});let i=n.syncPointTree_.get(t);i?s=s||we(i,b()):(i=new Zr,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Se(s,!0,!1):null,a=pn(n.pendingWriteTree_,e._path),l=eo(i,e,a,r?o.getNode():m.EMPTY_NODE,r);return yh(l)}function Lt(n,e){return oo(e,n.syncPointTree_,null,pn(n.pendingWriteTree_,b()))}function oo(n,e,t,s){if(w(n.path))return ao(n,e,t,s);{const i=e.get(b());t==null&&i!=null&&(t=we(i,b()));let r=[];const o=C(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=Yr(s,o);r=r.concat(oo(a,l,c,u))}return i&&(r=r.concat(Cs(i,n,s,t))),r}}function ao(n,e,t,s){const i=e.get(b());t==null&&i!=null&&(t=we(i,b()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Yr(s,o),u=n.operationForChild(o);u&&(r=r.concat(ao(u,a,l,c)))}),i&&(r=r.concat(Cs(i,n,s,t))),r}function lo(n,e){const t=e.query,s=kt(n,t);return{hashFn:()=>(mh(e)||m.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Ph(n,t._path,s):kh(n,t._path);{const r=Ol(i,t);return cn(n,t,null,r)}}}}function kt(n,e){const t=mn(e);return n.queryToTagMap.get(t)}function mn(n){return n._path.toString()+"$"+n._queryIdentifier}function ws(n,e){return n.tagToQueryMap.get(e)}function Is(n){const e=n.indexOf("$");return _(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new x(n.substr(0,e))}}function bs(n,e,t){const s=n.syncPointTree_.get(e);_(s,"Missing sync point for query tag that we're tracking");const i=pn(n.pendingWriteTree_,e);return Cs(s,t,i,null)}function Mh(n){return n.fold((e,t,s)=>{if(t&&Te(t))return[gn(t)];{let i=[];return t&&(i=to(t)),Q(s,(r,o)=>{i=i.concat(o)}),i}})}function Ct(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Rh())(n._repo,n._path):n}function Fh(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=mn(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Lh(){return xh++}function Bh(n,e,t){const s=e._path,i=kt(n,e),r=lo(n,t),o=n.listenProvider_.startListening(Ct(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)_(!Te(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!w(c)&&u&&Te(u))return[gn(u).query];{let d=[];return u&&(d=d.concat(to(u).map(f=>f.query))),Q(h,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Ct(u),kt(n,u))}}return o}/**
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
 */class Ss{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ss(t)}node(){return this.node_}}class Ts{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=U(this.path_,e);return new Ts(this.syncTree_,t)}node(){return Es(this.syncTree_,this.path_)}}const Wh=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ri=function(n,e,t){if(!n||typeof n!="object")return n;if(_(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Uh(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Hh(n[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Uh=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:_(!1,"Unexpected server value: "+n)}},Hh=function(n,e,t){n.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&_(!1,"Unexpected increment value: "+s);const i=e.node();if(_(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Vh=function(n,e,t,s){return Ns(e,new Ts(t,n),s)},co=function(n,e,t){return Ns(n,new Ss(e),t)};function Ns(n,e,t){const s=n.getPriority().val(),i=Ri(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Ri(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new H(a,$(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new H(i))),o.forEachChild(M,(a,l)=>{const c=Ns(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Rs{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function xs(n,e){let t=e instanceof x?e:new x(e),s=n,i=C(t);for(;i!==null;){const r=Qe(s.node.children,i)||{children:{},childCount:0};s=new Rs(i,s,r),t=k(t),i=C(t)}return s}function ct(n){return n.node.value}function ho(n,e){n.node.value=e,Zn(n)}function uo(n){return n.node.childCount>0}function $h(n){return ct(n)===void 0&&!uo(n)}function yn(n,e){Q(n.node.children,(t,s)=>{e(new Rs(t,n,s))})}function fo(n,e,t,s){t&&!s&&e(n),yn(n,i=>{fo(i,e,!0,s)}),t&&s&&e(n)}function Gh(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Bt(n){return new x(n.parent===null?n.name:Bt(n.parent)+"/"+n.name)}function Zn(n){n.parent!==null&&zh(n.parent,n.name,n)}function zh(n,e,t){const s=$h(t),i=ye(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Zn(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Zn(n))}/**
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
 */const jh=/[\[\].#$\/\u0000-\u001F\u007F]/,qh=/[\[\].#$\u0000-\u001F\u007F]/,On=10*1024*1024,_o=function(n){return typeof n=="string"&&n.length!==0&&!jh.test(n)},po=function(n){return typeof n=="string"&&n.length!==0&&!qh.test(n)},Yh=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),po(n)},Kh=function(n,e,t,s){s&&e===void 0||As(is(n,"value"),e,t)},As=function(n,e,t){const s=t instanceof x?new fc(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+xe(s));if(typeof e=="function")throw new Error(n+"contains a function "+xe(s)+" with contents = "+e.toString());if(ur(e))throw new Error(n+"contains "+e.toString()+" "+xe(s));if(typeof e=="string"&&e.length>On/3&&dn(e)>On)throw new Error(n+"contains a string greater than "+On+" utf8 bytes "+xe(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Q(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!_o(o)))throw new Error(n+" contains an invalid key ("+o+") "+xe(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);_c(s,o),As(n,a,s),pc(s)}),i&&r)throw new Error(n+' contains ".value" child '+xe(s)+" in addition to actual children.")}},go=function(n,e,t,s){if(!(s&&t===void 0)&&!po(t))throw new Error(is(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Qh=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),go(n,e,t,s)},Xh=function(n,e){if(C(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Jh=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!_o(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Yh(t))throw new Error(is(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Zh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ks(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!hs(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function mo(n,e,t){ks(n,t),yo(n,s=>hs(s,e))}function ce(n,e,t){ks(n,t),yo(n,s=>ie(s,e)||ie(e,s))}function yo(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(eu(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function eu(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Le&&z("event: "+t.toString()),lt(s)}}}/**
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
 */const tu="repo_interrupt",nu=25;class su{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Zh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=en(),this.transactionQueueTree_=new Rs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function iu(n,e,t){if(n.stats_=ls(n.repoInfo_),n.forceRestClient_||Bl())n.server_=new Zt(n.repoInfo_,(s,i,r,o)=>{xi(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ai(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{W(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new ge(n.repoInfo_,e,(s,i,r,o)=>{xi(n,s,i,r,o)},s=>{Ai(n,s)},s=>{ou(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=$l(n.repoInfo_,()=>new Hc(n.stats_,n.server_)),n.infoData_=new Fc,n.infoSyncTree_=new Ni({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=Ft(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ds(n,"connected",!1),n.serverSyncTree_=new Ni({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);ce(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function ru(n){const t=n.infoData_.getNode(new x(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ps(n){return Wh({timestamp:ru(n)})}function xi(n,e,t,s,i){n.dataUpdateCount++;const r=new x(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=qt(t,c=>$(c));o=Dh(n.serverSyncTree_,r,l,i)}else{const l=$(t);o=ro(n.serverSyncTree_,r,l,i)}else if(s){const l=qt(t,c=>$(c));o=Ah(n.serverSyncTree_,r,l)}else{const l=$(t);o=Ft(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Cn(n,r)),ce(n.eventQueue_,a,o)}function Ai(n,e){Ds(n,"connected",e),e===!1&&cu(n)}function ou(n,e){Q(e,(t,s)=>{Ds(n,t,s)})}function Ds(n,e,t){const s=new x("/.info/"+e),i=$(t);n.infoData_.updateSnapshot(s,i);const r=Ft(n.infoSyncTree_,s,i);ce(n.eventQueue_,s,r)}function vo(n){return n.nextWriteId_++}function au(n,e,t){const s=Oh(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=$(i).withIndex(e._queryParams.getIndex());Jn(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Ft(n.serverSyncTree_,e._path,r);else{const a=kt(n.serverSyncTree_,e);o=ro(n.serverSyncTree_,e._path,r,a)}return ce(n.eventQueue_,e._path,o),cn(n.serverSyncTree_,e,t,null,!0),r},i=>(vn(n,"get for query "+W(e)+" failed: "+i),Promise.reject(new Error(i))))}function lu(n,e,t,s,i){vn(n,"set",{path:e.toString(),value:t,priority:s});const r=Ps(n),o=$(t,s),a=Es(n.serverSyncTree_,e),l=co(o,a,r),c=vo(n),u=io(n.serverSyncTree_,e,l,c,!0);ks(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||K("set at "+e+" failed: "+d);const g=Me(n.serverSyncTree_,c,!p);ce(n.eventQueue_,e,g),du(n,i,d,f)});const h=bo(n,e);Cn(n,h),ce(n.eventQueue_,h,[])}function cu(n){vn(n,"onDisconnectEvents");const e=Ps(n),t=en();qn(n.onDisconnect_,b(),(i,r)=>{const o=Vh(i,r,n.serverSyncTree_,e);Vr(t,i,o)});let s=[];qn(t,b(),(i,r)=>{s=s.concat(Ft(n.serverSyncTree_,i,r));const o=bo(n,i);Cn(n,o)}),n.onDisconnect_=en(),ce(n.eventQueue_,b(),s)}function hu(n,e,t){let s;C(e._path)===".info"?s=Jn(n.infoSyncTree_,e,t):s=Jn(n.serverSyncTree_,e,t),mo(n.eventQueue_,e._path,s)}function ki(n,e,t){let s;C(e._path)===".info"?s=cn(n.infoSyncTree_,e,t):s=cn(n.serverSyncTree_,e,t),mo(n.eventQueue_,e._path,s)}function uu(n){n.persistentConnection_&&n.persistentConnection_.interrupt(tu)}function vn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),z(t,...e)}function du(n,e,t,s){e&&lt(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Co(n,e,t){return Es(n.serverSyncTree_,e,t)||m.EMPTY_NODE}function Os(n,e=n.transactionQueueTree_){if(e||En(n,e),ct(e)){const t=wo(n,e);_(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&fu(n,Bt(e),t)}else uo(e)&&yn(e,t=>{Os(n,t)})}function fu(n,e,t){const s=t.map(c=>c.currentWriteId),i=Co(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];_(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=q(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{vn(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(Me(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();En(n,xs(n.transactionQueueTree_,e)),Os(n,n.transactionQueueTree_),ce(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)lt(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{K("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Cn(n,e)}},o)}function Cn(n,e){const t=Eo(n,e),s=Bt(t),i=wo(n,t);return _u(n,i,s),s}function _u(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=q(t,l.path);let u=!1,h;if(_(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Me(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=nu)u=!0,h="maxretry",i=i.concat(Me(n.serverSyncTree_,l.currentWriteId,!0));else{const d=Co(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){As("transaction failed: Data returned ",f,l.path);let p=$(f);typeof f=="object"&&f!=null&&ye(f,".priority")||(p=p.updatePriority(d.getPriority()));const T=l.currentWriteId,j=Ps(n),G=co(p,d,j);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=G,l.currentWriteId=vo(n),o.splice(o.indexOf(T),1),i=i.concat(io(n.serverSyncTree_,l.path,G,l.currentWriteId,l.applyLocally)),i=i.concat(Me(n.serverSyncTree_,T,!0))}else u=!0,h="nodata",i=i.concat(Me(n.serverSyncTree_,l.currentWriteId,!0))}ce(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}En(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)lt(s[a]);Os(n,n.transactionQueueTree_)}function Eo(n,e){let t,s=n.transactionQueueTree_;for(t=C(e);t!==null&&ct(s)===void 0;)s=xs(s,t),e=k(e),t=C(e);return s}function wo(n,e){const t=[];return Io(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Io(n,e,t){const s=ct(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);yn(e,i=>{Io(n,i,t)})}function En(n,e){const t=ct(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,ho(e,t.length>0?t:void 0)}yn(e,s=>{En(n,s)})}function bo(n,e){const t=Bt(Eo(n,e)),s=xs(n.transactionQueueTree_,e);return Gh(s,i=>{Mn(n,i)}),Mn(n,s),fo(s,i=>{Mn(n,i)}),t}function Mn(n,e){const t=ct(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(_(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(_(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Me(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ho(e,void 0):t.length=r+1,ce(n.eventQueue_,Bt(e),i);for(let o=0;o<s.length;o++)lt(s[o])}}/**
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
 */function pu(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function gu(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):K(`Invalid query segment '${t}' in query '${n}'`)}return e}const Pi=function(n,e){const t=mu(n),s=t.namespace;t.domain==="firebase.com"&&me(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&me("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||xl();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ir(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new x(t.pathString)}},mu=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=pu(n.substring(u,h)));const d=gu(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class So{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+W(this.snapshot.exportVal())}}class To{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class No{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return _(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ms{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return w(this._path)?null:Pr(this._path)}get ref(){return new he(this._repo,this._path)}get _queryIdentifier(){const e=gi(this._queryParams),t=os(e);return t==="{}"?"default":t}get _queryObject(){return gi(this._queryParams)}isEqual(e){if(e=ot(e),!(e instanceof Ms))return!1;const t=this._repo===e._repo,s=hs(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+dc(this._path)}}class he extends Ms{constructor(e,t){super(e,t,new _s,!1)}get parent(){const e=Or(this._path);return e===null?null:new he(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class et{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new x(e),s=tt(this.ref,e);return new et(this._node.getChild(t),s,M)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new et(i,tt(this.ref,s),M)))}hasChild(e){const t=new x(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function yu(n,e){return n=ot(n),n._checkNotDeleted("ref"),e!==void 0?tt(n._root,e):n._root}function tt(n,e){return n=ot(n),C(n._path)===null?Qh("child","path",e,!1):go("child","path",e,!1),new he(n._repo,U(n._path,e))}function vu(n,e){n=ot(n),Xh("set",n._path),Kh("set",e,n._path,!1);const t=new un;return lu(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Cu(n){n=ot(n);const e=new No(()=>{}),t=new wn(e);return au(n._repo,n,t).then(s=>new et(s,new he(n._repo,n._path),n._queryParams.getIndex()))}class wn{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new So("value",this,new et(e.snapshotNode,new he(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new To(this,e,t):null}matches(e){return e instanceof wn?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Fs{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new To(this,e,t):null}createEvent(e,t){_(e.childName!=null,"Child events should have a childName.");const s=tt(new he(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new So(e.type,this,new et(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Fs?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Eu(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=t,c=(u,h)=>{ki(n._repo,n,a),l(u,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new No(t,r||void 0),a=e==="value"?new wn(o):new Fs(e,o);return hu(n._repo,n,a),()=>ki(n._repo,n,a)}function wu(n,e,t,s){return Eu(n,"child_changed",e,t,s)}wh(he);Nh(he);/**
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
 */const Iu="FIREBASE_DATABASE_EMULATOR_HOST",es={};let bu=!1;function Su(n,e,t,s){n.repoInfo_=new Ir(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function Tu(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||me("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),z("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Pi(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Iu]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Pi(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Ye(Ye.OWNER):new Ul(n.name,n.options,e);Jh("Invalid Firebase Database URL",o),w(o.path)||me("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Ru(a,n,u,new Wl(n.name,t));return new xu(h,n)}function Nu(n,e){const t=es[e];(!t||t[n.key]!==n)&&me(`Database ${e}(${n.repoInfo_}) has already been deleted.`),uu(n),delete t[n.key]}function Ru(n,e,t,s){let i=es[e.name];i||(i={},es[e.name]=i);let r=i[n.toURLString()];return r&&me("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new su(n,bu,t,s),i[n.toURLString()]=r,r}class xu{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(iu(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new he(this._repo,b())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Nu(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&me("Cannot call "+e+" on a deleted database.")}}function Au(n=dl(),e){const t=ll(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=ea("database");s&&ku(t,...s)}return t}function ku(n,e,t,s={}){n=ot(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&me("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&me('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ye(Ye.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:ta(s.mockUserToken,n.app.options.projectId);r=new Ye(o)}Su(i,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
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
 */function Pu(n){bl(ul),Kt(new It("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Tu(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),je(Zs,ei,n),je(Zs,ei,"esm2017")}ge.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ge.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Pu();let In;function Du(n=Vo){const e={databaseURL:`${Ho}`},t=rr(e,"pixelpals"),s=Au(t),i=yu(s);In=tt(i,n)}function Ou(){return Cu(In).then(n=>n.exists()?n.val().map(t=>t.toLowerCase()):void 0)}function Di(n,e){return vu(tt(In,n),e)}function Mu(n){wu(In,n)}function ts(n,e){return`${e*Et+n}`}function Oi(n){const e=Number(n),t=e%Et,s=Math.floor(e/Et);return{x:t,y:s}}function Fu(n){const e=RegExp(`${n}=(.+?)(&|$)`).exec(location.search);return e==null?void 0:decodeURI(e[1])}class Lu{constructor(){this._data=[]}setAllData(e){this._data=e}setPixel(e,t){this._data[e]=t.toLowerCase()}getPixel(e){return this._data[e].toLowerCase()}}const ns=new Lu;function Bu(n){const{setPixel:e}=Po(zi),t=s=>{if(!s.exists()||s.key==null)return;const i=s.val(),r=Number(s.key),{x:o,y:a}=Oi(r);ns.setPixel(r,i),e(o,a,i)};return hn(async()=>{const s=Fu($o);Du(s),await Gt(),await Gt();const i=await Ou();i!=null&&(ns.setAllData(i),i.forEach((r,o)=>{const{x:a,y:l}=Oi(o);e(a,l,r)})),Mu(t)}),[]}class Wu extends nt{constructor(e){super(),st(this,e,Bu,null,it,{})}}function Mi(n,e,t){const s=n.slice();return s[5]=e[t],s}function Fi(n){let e,t,s,i=n[5]+"",r,o,a,l,c,u,h;return{c(){e=F("button"),t=F("span"),s=fe("Select the color "),r=fe(i),o=ae(),this.h()},l(d){e=L(d,"BUTTON",{class:!0,"aria-current":!0,"aria-pressed":!0});var f=B(e);t=L(f,"SPAN",{class:!0});var p=B(t);s=_e(p,"Select the color "),r=_e(p,i),p.forEach(R),o=le(f),f.forEach(R),this.h()},h(){I(t,"class","sr-only"),I(e,"class",a="color relative h-6 w-6 shrink-0 cursor-pointer overflow-hidden rounded-sm "+(n[5]===n[0]&&"selected")+" hover:hover focus:hover border border-gray-800 svelte-nxaqpj"),I(e,"aria-current",l=n[5]===n[0]),I(e,"aria-pressed",c=n[5]===n[0]),Us(e,"background",n[5])},m(d,f){Ie(d,e,f),S(e,t),S(t,s),S(t,r),S(e,o),u||(h=Ge(e,"click",function(){Oo(n[2](n[5]))&&n[2](n[5]).apply(this,arguments)}),u=!0)},p(d,f){n=d,f&2&&i!==(i=n[5]+"")&&Gi(r,i),f&3&&a!==(a="color relative h-6 w-6 shrink-0 cursor-pointer overflow-hidden rounded-sm "+(n[5]===n[0]&&"selected")+" hover:hover focus:hover border border-gray-800 svelte-nxaqpj")&&I(e,"class",a),f&3&&l!==(l=n[5]===n[0])&&I(e,"aria-current",l),f&3&&c!==(c=n[5]===n[0])&&I(e,"aria-pressed",c),f&2&&Us(e,"background",n[5])},d(d){d&&R(e),u=!1,h()}}}function Uu(n){let e,t=n[1],s=[];for(let i=0;i<t.length;i+=1)s[i]=Fi(Mi(n,t,i));return{c(){e=F("section");for(let i=0;i<s.length;i+=1)s[i].c();this.h()},l(i){e=L(i,"SECTION",{class:!0});var r=B(e);for(let o=0;o<s.length;o+=1)s[o].l(r);r.forEach(R),this.h()},h(){I(e,"class","flex flex-wrap justify-center gap-1 rounded bg-white p-2")},m(i,r){Ie(i,e,r);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null)},p(i,[r]){if(r&7){t=i[1];let o;for(o=0;o<t.length;o+=1){const a=Mi(i,t,o);s[o]?s[o].p(a,r):(s[o]=Fi(a),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},i:zt,o:zt,d(i){i&&R(e),Do(s,i)}}}function Hu(n,e,t){let s;const i=$i();let{colors:r}=e,{activeColor:o}=e;const a=l=>()=>{i("color",{color:l}),t(0,o=l)};return n.$$set=l=>{"colors"in l&&t(3,r=l.colors),"activeColor"in l&&t(0,o=l.activeColor)},n.$$.update=()=>{n.$$.dirty&8&&t(1,s=r.map(l=>l.startsWith("#")?l.toLowerCase():`#${l.toLowerCase()}`))},[o,s,a,r]}class Vu extends nt{constructor(e){super(),st(this,e,Hu,Uu,it,{colors:3,activeColor:0})}}const Fe={NONE:0,PENCIL:1,COLOR_PICKER:2};let Ro=class xo{constructor(){if(this.constructor===xo)throw new Error("Tool is an abstract class");this.name="Undefined",this.type=Fe.NONE,this.drawing=!1,this.dragging=!1}onMouseDown(e,t,s){this.drawing=!0}onMouseMove(e,t,s){this.drawing&&(this.dragging=!0)}onMouseUp(e,t,s){this.drawing&&(this.drawing=!1,this.dragging&&(this.dragging=!1))}onMouseLeave(e,t,s){s.clear()}};function $u(n){let e,t,s,i,r,o=n[0].name+"",a,l,c,u,h,d;return{c(){e=F("button"),t=F("i"),s=ae(),i=F("span"),r=fe("Select the "),a=fe(o),l=fe(" tool"),this.h()},l(f){e=L(f,"BUTTON",{class:!0,"aria-pressed":!0,"aria-current":!0});var p=B(e);t=L(p,"I",{class:!0}),B(t).forEach(R),s=le(p),i=L(p,"SPAN",{class:!0});var g=B(i);r=_e(g,"Select the "),a=_e(g,o),l=_e(g," tool"),g.forEach(R),p.forEach(R),this.h()},h(){I(t,"class",n[3]()+" text-black svelte-85wnk6"),I(i,"class","sr-only"),I(e,"class",c="h-10 w-10 rounded border border-gray-800 "+(n[1]?"selected bg-gray-400":"bg-gray-300 hover:border-2 hover:bg-gray-200 focus:border-2 focus:bg-gray-200")+" svelte-85wnk6"),I(e,"aria-pressed",n[1]),I(e,"aria-current",u=n[1]?!0:void 0)},m(f,p){Ie(f,e,p),S(e,t),S(e,s),S(e,i),S(i,r),S(i,a),S(i,l),h||(d=Ge(e,"click",n[2]),h=!0)},p(f,[p]){p&1&&o!==(o=f[0].name+"")&&Gi(a,o),p&2&&c!==(c="h-10 w-10 rounded border border-gray-800 "+(f[1]?"selected bg-gray-400":"bg-gray-300 hover:border-2 hover:bg-gray-200 focus:border-2 focus:bg-gray-200")+" svelte-85wnk6")&&I(e,"class",c),p&2&&I(e,"aria-pressed",f[1]),p&2&&u!==(u=f[1]?!0:void 0)&&I(e,"aria-current",u)},i:zt,o:zt,d(f){f&&R(e),h=!1,d()}}}function Gu(n,e,t){const s=$i();let{tool:i}=e,{selected:r=!1}=e;const o=()=>{s("tool",{tool:i})},a=()=>{switch(i.type){case Fe.PENCIL:return"fa-solid fa-pencil";case Fe.COLOR_PICKER:return"fa-solid fa-eye-dropper"}},c=(()=>{switch(i.type){case Fe.PENCIL:return"b";case Fe.COLOR_PICKER:return"c"}})(),u=h=>{h.key===c&&o()};return hn(()=>(window.addEventListener("keyup",u),()=>{window.removeEventListener("keyup",u)})),n.$$set=h=>{"tool"in h&&t(0,i=h.tool),"selected"in h&&t(1,r=h.selected)},[i,r,o,a]}class Li extends nt{constructor(e){super(),st(this,e,Gu,$u,it,{tool:0,selected:1})}}class zu extends Ro{constructor(){super(),this.name="Pencil",this.type=Fe.PENCIL,this.drawing=!1,this.dragging=!1}onMouseMove(e,t,s){if(this.drawing){this.dragging||(s.clear(),this.dragging=!0),s.setPixel(e,t);const i=ts(e,t);Di(i,s.color)}else s.clear(),s.setMarker(e,t,!0)}onMouseUp(e,t,s){if(this.drawing)if(this.drawing=!1,this.dragging)this.dragging=!1;else{const i=ts(e,t);Di(i,s.color)}s.clear()}}class ju extends Ro{constructor(e){super(),this.name="ColorPicker",this.type=Fe.COLOR_PICKER,this.drawing=!1,this.dragging=!1,this.onColorChange=e}onMouseMove(e,t,s){this.drawing?this.dragging=!0:(s.clear(),s.setMarker(e,t,!1))}onMouseUp(e,t){if(this.drawing)if(this.drawing=!1,this.dragging)this.dragging=!1;else{const s=ts(e,t),i=ns.getPixel(Number(s));this.onColorChange(i)}}}function qu(n){let e,t;return e=new Wu({}),{c(){Ae(e.$$.fragment)},l(s){ke(e.$$.fragment,s)},m(s,i){Pe(e,s,i),t=!0},i(s){t||(ue(e.$$.fragment,s),t=!0)},o(s){de(e.$$.fragment,s),t=!1},d(s){De(e,s)}}}function Yu(n){let e,t,s,i;return e=new Hs({props:{maxWidth:n[7],maxHeight:n[8],widthPixels:Et,heightPixels:$s,$$slots:{default:[qu]},$$scope:{ctx:n}}}),s=new Hs({props:{maxWidth:n[7],maxHeight:n[8],color:n[0],tool:n[1],widthPixels:Et,heightPixels:$s}}),{c(){Ae(e.$$.fragment),t=ae(),Ae(s.$$.fragment)},l(r){ke(e.$$.fragment,r),t=le(r),ke(s.$$.fragment,r)},m(r,o){Pe(e,r,o),Ie(r,t,o),Pe(s,r,o),i=!0},p(r,o){const a={};o&128&&(a.maxWidth=r[7]),o&256&&(a.maxHeight=r[8]),o&512&&(a.$$scope={dirty:o,ctx:r}),e.$set(a);const l={};o&128&&(l.maxWidth=r[7]),o&256&&(l.maxHeight=r[8]),o&1&&(l.color=r[0]),o&2&&(l.tool=r[1]),s.$set(l)},i(r){i||(ue(e.$$.fragment,r),ue(s.$$.fragment,r),i=!0)},o(r){de(e.$$.fragment,r),de(s.$$.fragment,r),i=!1},d(r){De(e,r),r&&R(t),De(s,r)}}}function Ku(n){let e,t,s,i,r,o,a,l,c,u,h,d,f,p,g,T,j,G,J,Z,X,ee,ht,te,ut,ne,v;return G=new Uo({props:{$$slots:{default:[Yu,({maxWidth:y,maxHeight:N})=>({7:y,8:N}),({maxWidth:y,maxHeight:N})=>(y?128:0)|(N?256:0)]},$$scope:{ctx:n}}}),ee=new Li({props:{tool:n[2],selected:n[1].type===n[2].type}}),ee.$on("tool",n[5]),te=new Li({props:{tool:n[3],selected:n[1].type===n[3].type}}),te.$on("tool",n[5]),ne=new Vu({props:{colors:Go,activeColor:n[0]}}),ne.$on("color",n[4]),{c(){e=F("div"),t=F("header"),s=F("div"),i=F("h1"),r=fe("PixelPals"),o=ae(),a=F("h3"),l=fe("A collaborative pixel canvas"),c=ae(),u=F("div"),h=F("p"),d=fe("Made by "),f=F("a"),p=fe("eternalthinker"),g=ae(),T=F("main"),j=F("div"),Ae(G.$$.fragment),J=ae(),Z=F("div"),X=F("section"),Ae(ee.$$.fragment),ht=ae(),Ae(te.$$.fragment),ut=ae(),Ae(ne.$$.fragment),this.h()},l(y){e=L(y,"DIV",{class:!0});var N=B(e);t=L(N,"HEADER",{class:!0});var D=B(t);s=L(D,"DIV",{class:!0});var O=B(s);i=L(O,"H1",{class:!0});var Ne=B(i);r=_e(Ne,"PixelPals"),Ne.forEach(R),o=le(O),a=L(O,"H3",{class:!0});var dt=B(a);l=_e(dt,"A collaborative pixel canvas"),dt.forEach(R),O.forEach(R),c=le(D),u=L(D,"DIV",{class:!0});var Ls=B(u);h=L(Ls,"P",{class:!0});var bn=B(h);d=_e(bn,"Made by "),f=L(bn,"A",{class:!0,href:!0,target:!0});var Bs=B(f);p=_e(Bs,"eternalthinker"),Bs.forEach(R),bn.forEach(R),Ls.forEach(R),D.forEach(R),g=le(N),T=L(N,"MAIN",{class:!0});var Wt=B(T);j=L(Wt,"DIV",{class:!0});var Ws=B(j);ke(G.$$.fragment,Ws),Ws.forEach(R),J=le(Wt),Z=L(Wt,"DIV",{class:!0});var Ut=B(Z);X=L(Ut,"SECTION",{class:!0});var Ht=B(X);ke(ee.$$.fragment,Ht),ht=le(Ht),ke(te.$$.fragment,Ht),Ht.forEach(R),ut=le(Ut),ke(ne.$$.fragment,Ut),Ut.forEach(R),Wt.forEach(R),N.forEach(R),this.h()},h(){I(i,"class","font-display text-4xl font-bold text-white"),I(a,"class","pt-2 font-body text-lg text-white"),I(s,"class","flex flex-grow items-center gap-4"),I(f,"class","underline hover:text-teal-400"),I(f,"href","https://github.com/eternalthinker"),I(f,"target","_blank"),I(h,"class","pt-2 font-body text-sm text-gray-100"),I(u,"class","flex-shrink"),I(t,"class","flex items-center justify-evenly bg-gray-800 px-8 py-2"),I(j,"class","canvasBackground col-span-5"),I(X,"class","flex flex-wrap justify-center gap-2 rounded bg-white p-2"),I(Z,"class","sideBar flex flex-col justify-center gap-4 p-4"),I(T,"class","box-border grid h-full flex-auto grid-cols-6 px-10"),I(e,"class","flex h-full flex-col bg-gray-500")},m(y,N){Ie(y,e,N),S(e,t),S(t,s),S(s,i),S(i,r),S(s,o),S(s,a),S(a,l),S(t,c),S(t,u),S(u,h),S(h,d),S(h,f),S(f,p),S(e,g),S(e,T),S(T,j),Pe(G,j,null),S(T,J),S(T,Z),S(Z,X),Pe(ee,X,null),S(X,ht),Pe(te,X,null),S(Z,ut),Pe(ne,Z,null),v=!0},p(y,[N]){const D={};N&899&&(D.$$scope={dirty:N,ctx:y}),G.$set(D);const O={};N&2&&(O.selected=y[1].type===y[2].type),ee.$set(O);const Ne={};N&2&&(Ne.selected=y[1].type===y[3].type),te.$set(Ne);const dt={};N&1&&(dt.activeColor=y[0]),ne.$set(dt)},i(y){v||(ue(G.$$.fragment,y),ue(ee.$$.fragment,y),ue(te.$$.fragment,y),ue(ne.$$.fragment,y),v=!0)},o(y){de(G.$$.fragment,y),de(ee.$$.fragment,y),de(te.$$.fragment,y),de(ne.$$.fragment,y),v=!1},d(y){y&&R(e),De(G),De(ee),De(te),De(ne)}}}function Qu(n,e,t){let s="#ff0000";const i=new zu,r=u=>t(0,s=u),o=new ju(r);let a=i;return[s,a,i,o,({detail:u})=>{t(0,s=u.color)},({detail:u})=>{t(1,a=u.tool)}]}class Ju extends nt{constructor(e){super(),st(this,e,Qu,Ku,it,{})}}export{Ju as component};
