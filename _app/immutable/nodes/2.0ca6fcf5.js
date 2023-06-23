import{S as tt,i as nt,s as st,C as Hi,k as F,a as ae,l as L,m as B,h as A,c as le,n as E,p as Gt,b as Ie,J as $e,D as Vi,E as $i,F as Gi,g as fe,d as _e,K as ko,L as xo,o as hn,w as zi,M as Do,H as zt,N as Po,O as ji,q as ce,r as he,G as T,P as Mo,u as Ln,Q as Vs,y as ke,z as xe,A as De,B as Pe}from"../chunks/index.09846a6b.js";const qi=Symbol();const Oo=n=>({width:n&2,height:n&4}),$s=n=>({width:n[1],height:n[2]});function Fo(n){let e,t,s,i,r;const o=n[15].default,a=Hi(o,n,n[14],$s);return{c(){e=F("canvas"),t=ae(),a&&a.c(),this.h()},l(l){e=L(l,"CANVAS",{class:!0,width:!0,height:!0}),B(e).forEach(A),t=le(l),a&&a.l(l),this.h()},h(){var l,c,u;E(e,"class","pixelCanvas absolute bottom-0 left-0 right-0 top-0 m-auto border-2 border-gray-950 svelte-6ccob6"),E(e,"width",n[1]),E(e,"height",n[2]),Gt(e,"cursor",`url('${(l=n[0])==null?void 0:l.icon}') ${(c=n[0])==null?void 0:c.cursorHotspot.x} ${(u=n[0])==null?void 0:u.cursorHotspot.y}, default`)},m(l,c){Ie(l,e,c),n[16](e),Ie(l,t,c),a&&a.m(l,c),s=!0,i||(r=[$e(e,"mousedown",n[4]),$e(e,"mousemove",n[5]),$e(e,"mouseup",n[6]),$e(e,"mouseleave",n[7])],i=!0)},p(l,[c]){var u,h,d;(!s||c&2)&&E(e,"width",l[1]),(!s||c&4)&&E(e,"height",l[2]),c&1&&Gt(e,"cursor",`url('${(u=l[0])==null?void 0:u.icon}') ${(h=l[0])==null?void 0:h.cursorHotspot.x} ${(d=l[0])==null?void 0:d.cursorHotspot.y}, default`),a&&a.p&&(!s||c&16390)&&Vi(a,o,l,l[14],s?Gi(o,l[14],c,Oo):$i(l[14]),$s)},i(l){s||(fe(a,l),s=!0)},o(l){_e(a,l),s=!1},d(l){l&&A(e),n[16](null),l&&A(t),a&&a.d(l),i=!1,ko(r)}}}function Lo(n,e,t){let{$$slots:s={},$$scope:i}=e,{maxWidth:r=0}=e,{maxHeight:o=0}=e,{color:a="#000000"}=e,{tool:l=void 0}=e,{widthPixels:c}=e,{heightPixels:u}=e,h=c,d=u,f=1,p,g;const v=(C,y,S=a)=>{const G=Math.floor(C),j=Math.floor(y);0<=G&&G<c&&0<=j&&j<u&&g!=null&&(t(13,g.fillStyle=S,g),g.beginPath(),g.rect(G*f,j*f,f,f),g.fill())},R=(C,y,S=!0)=>{const G=Math.floor(C),j=Math.floor(y);if(!(0<=G&&G<c&&0<=j&&j<u)||g==null)return;S&&v(C,y),t(13,g.strokeStyle="#000000",g);let Ne=2;t(13,g.lineWidth=Ne,g),g.strokeRect(G*f,j*f,f,f)},M=()=>{g==null||g.clearRect(0,0,h,d)},J=()=>({setPixel:v,setMarker:R,clear:M,color:a});xo(qi,{setPixel:v,clear:M}),hn(async()=>{t(13,g=p.getContext("2d"))});const Z=(C,y)=>{const S=Math.floor(C/c),G=Math.floor(y/u);f=Math.max(Math.min(S,G),3),t(1,h=f*c),t(2,d=f*u)},X=C=>{const{offsetX:y,offsetY:S}=C;return{x:Math.floor(y/f)-(y%f?0:1),y:Math.floor(S/f)-(S%f?0:1)}},ee=C=>{const{x:y,y:S}=X(C);l==null||l.onMouseDown(y,S,J())},ct=C=>{const{x:y,y:S}=X(C);l==null||l.onMouseMove(y,S,J())},te=C=>{const{x:y,y:S}=X(C);l==null||l.onMouseUp(y,S,J())},ht=C=>{const{x:y,y:S}=X(C);l==null||l.onMouseLeave(y,S,J())};function ne(C){zi[C?"unshift":"push"](()=>{p=C,t(3,p)})}return n.$$set=C=>{"maxWidth"in C&&t(8,r=C.maxWidth),"maxHeight"in C&&t(9,o=C.maxHeight),"color"in C&&t(10,a=C.color),"tool"in C&&t(0,l=C.tool),"widthPixels"in C&&t(11,c=C.widthPixels),"heightPixels"in C&&t(12,u=C.heightPixels),"$$scope"in C&&t(14,i=C.$$scope)},n.$$.update=()=>{n.$$.dirty&9216&&g&&t(13,g.fillStyle=a,g),n.$$.dirty&768&&Z(r,o)},[l,h,d,p,ee,ct,te,ht,r,o,a,c,u,g,i,s,ne]}class Gs extends tt{constructor(e){super(),nt(this,e,Lo,Fo,st,{maxWidth:8,maxHeight:9,color:10,tool:0,widthPixels:11,heightPixels:12})}}const Bo="https://pixelpals-83a2d.firebaseio.com",Wo="world",Ct=150,zs=120,Uo="c",Ho=["FF00FF","9400D3","9370DB","7B68EE","FFB6C1","FF69B4","FF1493","FFB6AB","FFDAB9","FDE59F","#E9B5A3","F7C87C","D5A74F","CB9769","A06459","FF0000","FFA500","FFFF00","FFD700","B8860B","D2691E","8B4513","A0522D","A52A2A","800000","006400","008000","9ACD32","32CD32","00FF00","7FFF00","ADFF2F","00FA9A","00FFFF","00CED1","1E90FF","6495ED","4169E1","0000CD","191970","D3D3D3","A9A9A9","696969","708090","2F4F4F","FFFFFF","000000"];function Bn(n,e){return`${e*Ct+n}`}function js(n){const e=Number(n),t=e%Ct,s=Math.floor(e/Ct);return{x:t,y:s}}function Vo(n){const e=RegExp(`${n}=(.+?)(&|$)`).exec(location.search);return e==null?void 0:decodeURI(e[1])}function $o(n,e=300){let t;return(...s)=>{clearTimeout(t),t=setTimeout(()=>n.apply(this,s),e)}}const Go=n=>({maxWidth:n&1,maxHeight:n&2}),qs=n=>({maxWidth:n[0],maxHeight:n[1]});function zo(n){let e,t;const s=n[4].default,i=Hi(s,n,n[3],qs);return{c(){e=F("div"),i&&i.c(),this.h()},l(r){e=L(r,"DIV",{class:!0});var o=B(e);i&&i.l(o),o.forEach(A),this.h()},h(){E(e,"class","relative h-full min-h-[360px]")},m(r,o){Ie(r,e,o),i&&i.m(e,null),n[5](e),t=!0},p(r,[o]){i&&i.p&&(!t||o&11)&&Vi(i,s,r,r[3],t?Gi(s,r[3],o,Go):$i(r[3]),qs)},i(r){t||(fe(i,r),t=!0)},o(r){_e(i,r),t=!1},d(r){r&&A(e),i&&i.d(r),n[5](null)}}}function jo(n,e,t){let{$$slots:s={},$$scope:i}=e,r=0,o=0,a;const l=()=>{const{height:h,width:d}=a.getBoundingClientRect();t(1,o=h),t(0,r=d)},c=$o(l);hn(()=>(l(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c)}));function u(h){zi[h?"unshift":"push"](()=>{a=h,t(2,a)})}return n.$$set=h=>{"$$scope"in h&&t(3,i=h.$$scope)},[r,o,a,i,s,u]}class qo extends tt{constructor(e){super(),nt(this,e,jo,zo,st,{})}}/**
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
 */const Yi={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const _=function(n,e){if(!n)throw it(e)},it=function(n){return new Error("Firebase Database ("+Yi.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Ki=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Yo=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},is={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(t[u],t[h],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ki(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Yo(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new Ko;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),h!==64){const p=c<<6&192|h;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ko extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qi=function(n){const e=Ki(n);return is.encodeByteArray(e,!0)},jt=function(n){return Qi(n).replace(/\./g,"")},Wn=function(n){try{return is.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Qo(n){return Xi(void 0,n)}function Xi(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Xo(t)||(n[t]=Xi(n[t],e[t]));return n}function Xo(n){return n!=="__proto__"}/**
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
 */function Jo(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Zo=()=>Jo().__FIREBASE_DEFAULTS__,ea=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ta=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Wn(n[1]);return e&&JSON.parse(e)},Ji=()=>{try{return Zo()||ea()||ta()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},na=n=>{var e,t;return(t=(e=Ji())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},sa=n=>{const e=na(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Zi=()=>{var n;return(n=Ji())===null||n===void 0?void 0:n.config};/**
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
 */function ia(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[jt(JSON.stringify(t)),jt(JSON.stringify(o)),a].join(".")}/**
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
 */function ra(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function er(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ra())}function oa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tr(){return Yi.NODE_ADMIN===!0}function aa(){try{return typeof indexedDB=="object"}catch{return!1}}function la(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const ca="FirebaseError";class xt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=ca,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nr.prototype.create)}}class nr{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ha(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new xt(i,a,s)}}function ha(n,e){return n.replace(ua,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ua=/\{\$([^}]+)}/g;/**
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
 */function Et(n){return JSON.parse(n)}function W(n){return JSON.stringify(n)}/**
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
 */const sr=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Et(Wn(r[0])||""),t=Et(Wn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},da=function(n){const e=sr(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},fa=function(n){const e=sr(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ye(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ke(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ys(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function qt(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Un(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Ks(r)&&Ks(o)){if(!Un(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Ks(n){return n!==null&&typeof n=="object"}/**
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
 */function _a(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class pa{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function rs(n,e){return`${n} failed: ${e} argument `}/**
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
 */const ga=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,_(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},dn=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function rt(n){return n&&n._delegate?n._delegate:n}class wt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class ma{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new un;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(va(e))try{this.getOrInitializeService({instanceIdentifier:Re})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Re){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Re){return this.instances.has(e)}getOptions(e=Re){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ya(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Re){return this.component?this.component.multipleInstances?e:Re:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ya(n){return n===Re?void 0:n}function va(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ca{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ma(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var x;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(x||(x={}));const Ea={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},wa=x.INFO,Ia={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},ba=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Ia[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ir{constructor(e){this.name=e,this._logLevel=wa,this._logHandler=ba,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ea[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}const Sa=(n,e)=>e.some(t=>n instanceof t);let Qs,Xs;function Ta(){return Qs||(Qs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Na(){return Xs||(Xs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rr=new WeakMap,Hn=new WeakMap,or=new WeakMap,Tn=new WeakMap,os=new WeakMap;function Ra(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ve(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&rr.set(t,n)}).catch(()=>{}),os.set(e,n),e}function Aa(n){if(Hn.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Hn.set(n,e)}let Vn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Hn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||or.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ve(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ka(n){Vn=n(Vn)}function xa(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Nn(this),e,...t);return or.set(s,e.sort?e.sort():[e]),ve(s)}:Na().includes(n)?function(...e){return n.apply(Nn(this),e),ve(rr.get(this))}:function(...e){return ve(n.apply(Nn(this),e))}}function Da(n){return typeof n=="function"?xa(n):(n instanceof IDBTransaction&&Aa(n),Sa(n,Ta())?new Proxy(n,Vn):n)}function ve(n){if(n instanceof IDBRequest)return Ra(n);if(Tn.has(n))return Tn.get(n);const e=Da(n);return e!==n&&(Tn.set(n,e),os.set(e,n)),e}const Nn=n=>os.get(n);function Pa(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=ve(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ve(o.result),l.oldVersion,l.newVersion,ve(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Ma=["get","getKey","getAll","getAllKeys","count"],Oa=["put","add","delete","clear"],Rn=new Map;function Js(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Rn.get(e))return Rn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Oa.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ma.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Rn.set(e,r),r}ka(n=>({...n,get:(e,t,s)=>Js(e,t)||n.get(e,t,s),has:(e,t)=>!!Js(e,t)||n.has(e,t)}));/**
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
 */class Fa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(La(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function La(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $n="@firebase/app",Zs="0.9.12";/**
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
 */const Le=new ir("@firebase/app"),Ba="@firebase/app-compat",Wa="@firebase/analytics-compat",Ua="@firebase/analytics",Ha="@firebase/app-check-compat",Va="@firebase/app-check",$a="@firebase/auth",Ga="@firebase/auth-compat",za="@firebase/database",ja="@firebase/database-compat",qa="@firebase/functions",Ya="@firebase/functions-compat",Ka="@firebase/installations",Qa="@firebase/installations-compat",Xa="@firebase/messaging",Ja="@firebase/messaging-compat",Za="@firebase/performance",el="@firebase/performance-compat",tl="@firebase/remote-config",nl="@firebase/remote-config-compat",sl="@firebase/storage",il="@firebase/storage-compat",rl="@firebase/firestore",ol="@firebase/firestore-compat",al="firebase",ll="9.22.2";/**
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
 */const Gn="[DEFAULT]",cl={[$n]:"fire-core",[Ba]:"fire-core-compat",[Ua]:"fire-analytics",[Wa]:"fire-analytics-compat",[Va]:"fire-app-check",[Ha]:"fire-app-check-compat",[$a]:"fire-auth",[Ga]:"fire-auth-compat",[za]:"fire-rtdb",[ja]:"fire-rtdb-compat",[qa]:"fire-fn",[Ya]:"fire-fn-compat",[Ka]:"fire-iid",[Qa]:"fire-iid-compat",[Xa]:"fire-fcm",[Ja]:"fire-fcm-compat",[Za]:"fire-perf",[el]:"fire-perf-compat",[tl]:"fire-rc",[nl]:"fire-rc-compat",[sl]:"fire-gcs",[il]:"fire-gcs-compat",[rl]:"fire-fst",[ol]:"fire-fst-compat","fire-js":"fire-js",[al]:"fire-js-all"};/**
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
 */const Yt=new Map,zn=new Map;function hl(n,e){try{n.container.addComponent(e)}catch(t){Le.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Kt(n){const e=n.name;if(zn.has(e))return Le.debug(`There were multiple attempts to register component ${e}.`),!1;zn.set(e,n);for(const t of Yt.values())hl(t,n);return!0}function ul(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const dl={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ce=new nr("app","Firebase",dl);/**
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
 */class fl{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ce.create("app-deleted",{appName:this._name})}}/**
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
 */const _l=ll;function ar(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Gn,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ce.create("bad-app-name",{appName:String(i)});if(t||(t=Zi()),!t)throw Ce.create("no-options");const r=Yt.get(i);if(r){if(Un(t,r.options)&&Un(s,r.config))return r;throw Ce.create("duplicate-app",{appName:i})}const o=new Ca(i);for(const l of zn.values())o.addComponent(l);const a=new fl(t,s,o);return Yt.set(i,a),a}function pl(n=Gn){const e=Yt.get(n);if(!e&&n===Gn&&Zi())return ar();if(!e)throw Ce.create("no-app",{appName:n});return e}function ze(n,e,t){var s;let i=(s=cl[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Le.warn(a.join(" "));return}Kt(new wt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const gl="firebase-heartbeat-database",ml=1,It="firebase-heartbeat-store";let An=null;function lr(){return An||(An=Pa(gl,ml,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(It)}}}).catch(n=>{throw Ce.create("idb-open",{originalErrorMessage:n.message})})),An}async function yl(n){try{return await(await lr()).transaction(It).objectStore(It).get(cr(n))}catch(e){if(e instanceof xt)Le.warn(e.message);else{const t=Ce.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Le.warn(t.message)}}}async function ei(n,e){try{const s=(await lr()).transaction(It,"readwrite");await s.objectStore(It).put(e,cr(n)),await s.done}catch(t){if(t instanceof xt)Le.warn(t.message);else{const s=Ce.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Le.warn(s.message)}}}function cr(n){return`${n.name}!${n.options.appId}`}/**
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
 */const vl=1024,Cl=30*24*60*60*1e3;class El{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Il(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ti();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Cl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ti(),{heartbeatsToSend:t,unsentEntries:s}=wl(this._heartbeatsCache.heartbeats),i=jt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ti(){return new Date().toISOString().substring(0,10)}function wl(n,e=vl){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),ni(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ni(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class Il{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aa()?la().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ei(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ei(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ni(n){return jt(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function bl(n){Kt(new wt("platform-logger",e=>new Fa(e),"PRIVATE")),Kt(new wt("heartbeat",e=>new El(e),"PRIVATE")),ze($n,Zs,n),ze($n,Zs,"esm2017"),ze("fire-js","")}bl("");var Sl="firebase",Tl="9.22.2";/**
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
 */ze(Sl,Tl,"app");const si="@firebase/database",ii="0.14.4";/**
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
 */let hr="";function Nl(n){hr=n}/**
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
 */class Rl{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),W(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Et(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Al{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ye(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const ur=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Rl(e)}}catch{}return new Al},Me=ur("localStorage"),jn=ur("sessionStorage");/**
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
 */const je=new ir("@firebase/database"),kl=function(){let n=1;return function(){return n++}}(),dr=function(n){const e=ga(n),t=new pa;t.update(e);const s=t.digest();return is.encodeByteArray(s)},Dt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Dt.apply(null,s):typeof s=="object"?e+=W(s):e+=s,e+=" "}return e};let Fe=null,ri=!0;const xl=function(n,e){_(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(je.logLevel=x.VERBOSE,Fe=je.log.bind(je),e&&jn.set("logging_enabled",!0)):typeof n=="function"?Fe=n:(Fe=null,jn.remove("logging_enabled"))},z=function(...n){if(ri===!0&&(ri=!1,Fe===null&&jn.get("logging_enabled")===!0&&xl(!0)),Fe){const e=Dt.apply(null,n);Fe(e)}},Pt=function(n){return function(...e){z(n,...e)}},qn=function(...n){const e="FIREBASE INTERNAL ERROR: "+Dt(...n);je.error(e)},me=function(...n){const e=`FIREBASE FATAL ERROR: ${Dt(...n)}`;throw je.error(e),new Error(e)},K=function(...n){const e="FIREBASE WARNING: "+Dt(...n);je.warn(e)},Dl=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&K("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fr=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Pl=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Qe="[MIN_NAME]",Be="[MAX_NAME]",ot=function(n,e){if(n===e)return 0;if(n===Qe||e===Be)return-1;if(e===Qe||n===Be)return 1;{const t=oi(n),s=oi(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Ml=function(n,e){return n===e?0:n<e?-1:1},dt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+W(e))},as=function(n){if(typeof n!="object"||n===null)return W(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=W(e[s]),t+=":",t+=as(n[e[s]]);return t+="}",t},_r=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function Q(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const pr=function(n){_(!fr(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Ol=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Fl=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ll(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Bl=new RegExp("^-?(0*)\\d{1,10}$"),Wl=-2147483648,Ul=2147483647,oi=function(n){if(Bl.test(n)){const e=Number(n);if(e>=Wl&&e<=Ul)return e}return null},at=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw K("Exception was thrown by user callback.",t),e},Math.floor(0))}},Hl=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},gt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Vl{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){K(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class $l{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(z("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',K(e)}}class qe{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}qe.OWNER="owner";/**
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
 */const ls="5",gr="v",mr="s",yr="r",vr="f",Cr=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Er="ls",wr="p",Yn="ac",Ir="websocket",br="long_polling";/**
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
 */class Sr{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Me.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Me.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Gl(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Tr(n,e,t){_(typeof e=="string","typeof type must == string"),_(typeof t=="object","typeof params must == object");let s;if(e===Ir)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===br)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Gl(n)&&(t.ns=n.namespace);const i=[];return Q(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class zl{constructor(){this.counters_={}}incrementCounter(e,t=1){ye(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Qo(this.counters_)}}/**
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
 */const kn={},xn={};function cs(n){const e=n.toString();return kn[e]||(kn[e]=new zl),kn[e]}function jl(n,e){const t=n.toString();return xn[t]||(xn[t]=e()),xn[t]}/**
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
 */class ql{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&at(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ai="start",Yl="close",Kl="pLPCommand",Ql="pRTLPCB",Nr="id",Rr="pw",Ar="ser",Xl="cb",Jl="seg",Zl="ts",ec="d",tc="dframe",kr=1870,xr=30,nc=kr-xr,sc=25e3,ic=3e4;class Ge{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Pt(e),this.stats_=cs(t),this.urlFn=l=>(this.appCheckToken&&(l[Yn]=this.appCheckToken),Tr(t,br,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ql(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ic)),Pl(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hs((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ai)this.id=a,this.password=l;else if(o===Yl)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ai]="t",s[Ar]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Xl]=this.scriptTagHolder.uniqueCallbackIdentifier),s[gr]=ls,this.transportSessionId&&(s[mr]=this.transportSessionId),this.lastSessionId&&(s[Er]=this.lastSessionId),this.applicationId&&(s[wr]=this.applicationId),this.appCheckToken&&(s[Yn]=this.appCheckToken),typeof location<"u"&&location.hostname&&Cr.test(location.hostname)&&(s[yr]=vr);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ge.forceAllow_=!0}static forceDisallow(){Ge.forceDisallow_=!0}static isAvailable(){return Ge.forceAllow_?!0:!Ge.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ol()&&!Fl()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=W(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Qi(t),i=_r(s,nc);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[tc]="t",s[Nr]=e,s[Rr]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=W(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class hs{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=kl(),window[Kl+this.uniqueCallbackIdentifier]=e,window[Ql+this.uniqueCallbackIdentifier]=t,this.myIFrame=hs.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){z("frame writing exception"),a.stack&&z(a.stack),z(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||z("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Nr]=this.myID,e[Rr]=this.myPW,e[Ar]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xr+s.length<=kr;){const o=this.pendingSegs.shift();s=s+"&"+Jl+i+"="+o.seg+"&"+Zl+i+"="+o.ts+"&"+ec+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(sc)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{z("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const rc=16384,oc=45e3;let Qt=null;typeof MozWebSocket<"u"?Qt=MozWebSocket:typeof WebSocket<"u"&&(Qt=WebSocket);class se{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Pt(this.connId),this.stats_=cs(t),this.connURL=se.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[gr]=ls,typeof location<"u"&&location.hostname&&Cr.test(location.hostname)&&(o[yr]=vr),t&&(o[mr]=t),s&&(o[Er]=s),i&&(o[Yn]=i),r&&(o[wr]=r),Tr(e,Ir,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Me.set("previous_websocket_failure",!0);try{let s;tr(),this.mySock=new Qt(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){se.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Qt!==null&&!se.forceDisallow_}static previouslyFailed(){return Me.isInMemoryStorage||Me.get("previous_websocket_failure")===!0}markConnectionHealthy(){Me.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Et(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(_(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=W(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=_r(t,rc);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(oc))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}se.responsesRequiredToBeHealthy=2;se.healthyTimeout=3e4;/**
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
 */class bt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ge,se]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=se&&se.isAvailable();let s=t&&!se.previouslyFailed();if(e.webSocketOnly&&(t||K("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[se];else{const i=this.transports_=[];for(const r of bt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);bt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}bt.globalTransportInitialized_=!1;/**
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
 */const ac=6e4,lc=5e3,cc=10*1024,hc=100*1024,Dn="t",li="d",uc="s",ci="r",dc="e",hi="o",ui="a",di="n",fi="p",fc="h";class _c{constructor(e,t,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Pt("c:"+this.id+":"),this.transportManager_=new bt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=gt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>hc?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Dn in e){const t=e[Dn];t===ui?this.upgradeIfSecondaryHealthy_():t===ci?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===hi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=dt("t",e),s=dt("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:fi,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ui,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:di,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=dt("t",e),s=dt("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=dt(Dn,e);if(li in e){const s=e[li];if(t===fc){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===di){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===uc?this.onConnectionShutdown_(s):t===ci?this.onReset_(s):t===dc?qn("Server Error: "+s):t===hi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):qn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ls!==s&&K("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),gt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ac))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):gt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:fi,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Me.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Dr{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Pr{constructor(e){this.allowedEvents_=e,this.listeners_={},_(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){_(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Xt extends Pr{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!er()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Xt}getInitialEvent(e){return _(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const _i=32,pi=768;class k{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function N(){return new k("")}function w(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function be(n){return n.pieces_.length-n.pieceNum_}function D(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new k(n.pieces_,e)}function Mr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function pc(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Or(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Fr(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new k(e,0)}function U(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof k)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new k(t,0)}function b(n){return n.pieceNum_>=n.pieces_.length}function q(n,e){const t=w(n),s=w(e);if(t===null)return e;if(t===s)return q(D(n),D(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function us(n,e){if(be(n)!==be(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function ie(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(be(n)>be(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class gc{constructor(e,t){this.errorPrefix_=t,this.parts_=Or(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=dn(this.parts_[s]);Lr(this)}}function mc(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=dn(e),Lr(n)}function yc(n){const e=n.parts_.pop();n.byteLength_-=dn(e),n.parts_.length>0&&(n.byteLength_-=1)}function Lr(n){if(n.byteLength_>pi)throw new Error(n.errorPrefix_+"has a key path longer than "+pi+" bytes ("+n.byteLength_+").");if(n.parts_.length>_i)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_i+") or object contains a cycle "+Ae(n))}function Ae(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class ds extends Pr{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new ds}getInitialEvent(e){return _(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ft=1e3,vc=60*5*1e3,gi=30*1e3,Cc=1.3,Ec=3e4,wc="server_kill",mi=3;class ge extends Dr{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ge.nextPersistentConnectionId_++,this.log_=Pt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ft,this.maxReconnectDelay_=vc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!tr())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ds.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(W(r)),_(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new un,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),_(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ge.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ye(e,"w")){const s=Ke(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();K(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||fa(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=gi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=da(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),_(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+W(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):qn("Unrecognized action received from server: "+W(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){_(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ft,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ft,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Ec&&(this.reconnectDelay_=ft),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Cc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ge.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){_(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?z("getToken() completed but was canceled"):(z("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new _c(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{K(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(wc)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&K(h),l())}}}interrupt(e){z("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){z("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ys(this.interruptReasons_)&&(this.reconnectDelay_=ft,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>as(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new k(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){z("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=mi&&(this.reconnectDelay_=gi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){z("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=mi&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+hr.replace(/\./g,"-")]=1,er()?e["framework.cordova"]=1:oa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xt.getInstance().currentlyOnline();return Ys(this.interruptReasons_)&&e}}ge.nextPersistentConnectionId_=0;ge.nextConnectionId_=0;/**
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
 */class I{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new I(e,t)}}/**
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
 */class fn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new I(Qe,e),i=new I(Qe,t);return this.compare(s,i)!==0}minPost(){return I.MIN}}/**
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
 */let Ht;class Br extends fn{static get __EMPTY_NODE(){return Ht}static set __EMPTY_NODE(e){Ht=e}compare(e,t){return ot(e.name,t.name)}isDefinedOn(e){throw it("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return I.MIN}maxPost(){return new I(Be,Ht)}makePost(e,t){return _(typeof e=="string","KeyIndex indexValue must always be a string."),new I(e,Ht)}toString(){return".key"}}const Ye=new Br;/**
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
 */class Vt{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class V{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??V.RED,this.left=i??Y.EMPTY_NODE,this.right=r??Y.EMPTY_NODE}copy(e,t,s,i,r){return new V(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Y.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Y.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,V.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,V.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}V.RED=!0;V.BLACK=!1;class Ic{copy(e,t,s,i,r){return this}insert(e,t,s){return new V(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Y{constructor(e,t=Y.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Y(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,V.BLACK,null,null))}remove(e){return new Y(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,V.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Vt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Vt(this.root_,null,this.comparator_,!0,e)}}Y.EMPTY_NODE=new Ic;/**
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
 */function bc(n,e){return ot(n.name,e.name)}function fs(n,e){return ot(n,e)}/**
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
 */let Kn;function Sc(n){Kn=n}const Wr=function(n){return typeof n=="number"?"number:"+pr(n):"string:"+n},Ur=function(n){if(n.isLeafNode()){const e=n.val();_(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ye(e,".sv"),"Priority must be a string or number.")}else _(n===Kn||n.isEmpty(),"priority of unexpected type.");_(n===Kn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let yi;class H{constructor(e,t=H.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,_(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ur(this.priorityNode_)}static set __childrenNodeConstructor(e){yi=e}static get __childrenNodeConstructor(){return yi}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new H(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:H.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return b(e)?this:w(e)===".priority"?this.priorityNode_:H.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:H.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=w(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(_(s!==".priority"||be(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,H.__childrenNodeConstructor.EMPTY_NODE.updateChild(D(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Wr(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=pr(this.value_):e+=this.value_,this.lazyHash_=dr(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===H.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof H.__childrenNodeConstructor?-1:(_(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=H.VALUE_TYPE_ORDER.indexOf(t),r=H.VALUE_TYPE_ORDER.indexOf(s);return _(i>=0,"Unknown leaf type: "+t),_(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}H.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Hr,Vr;function Tc(n){Hr=n}function Nc(n){Vr=n}class Rc extends fn{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?ot(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return I.MIN}maxPost(){return new I(Be,new H("[PRIORITY-POST]",Vr))}makePost(e,t){const s=Hr(e);return new I(t,new H("[PRIORITY-POST]",s))}toString(){return".priority"}}const O=new Rc;/**
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
 */const Ac=Math.log(2);class kc{constructor(e){const t=r=>parseInt(Math.log(r)/Ac,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Jt=function(n,e,t,s){n.sort(e);const i=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new V(d,h.node,V.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=i(l,f),g=i(f+1,c);return h=n[f],d=t?t(h):h,new V(d,h.node,V.BLACK,p,g)}},r=function(l){let c=null,u=null,h=n.length;const d=function(p,g){const v=h-p,R=h;h-=p;const M=i(v+1,R),J=n[v],Z=t?t(J):J;f(new V(Z,J.node,g,null,M))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),v=Math.pow(2,l.count-(p+1));g?d(v,V.BLACK):(d(v,V.BLACK),d(v,V.RED))}return u},o=new kc(n.length),a=r(o);return new Y(s||e,a)};/**
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
 */let Pn;const Ve={};class pe{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return _(Ve&&O,"ChildrenNode.ts has not been loaded"),Pn=Pn||new pe({".priority":Ve},{".priority":O}),Pn}get(e){const t=Ke(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Y?t:null}hasIndex(e){return ye(this.indexSet_,e.toString())}addIndex(e,t){_(e!==Ye,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(I.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Jt(s,e.getCompare()):a=Ve;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new pe(u,c)}addToIndexes(e,t){const s=qt(this.indexes_,(i,r)=>{const o=Ke(this.indexSet_,r);if(_(o,"Missing index implementation for "+r),i===Ve)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(I.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Jt(a,o.getCompare())}else return Ve;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new I(e.name,a))),l.insert(e,e.node)}});return new pe(s,this.indexSet_)}removeFromIndexes(e,t){const s=qt(this.indexes_,i=>{if(i===Ve)return i;{const r=t.get(e.name);return r?i.remove(new I(e.name,r)):i}});return new pe(s,this.indexSet_)}}/**
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
 */let _t;class m{constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ur(this.priorityNode_),this.children_.isEmpty()&&_(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return _t||(_t=new m(new Y(fs),null,pe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||_t}updatePriority(e){return this.children_.isEmpty()?this:new m(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?_t:t}}getChild(e){const t=w(e);return t===null?this:this.getImmediateChild(t).getChild(D(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(_(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new I(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?_t:this.priorityNode_;return new m(i,o,r)}}updateChild(e,t){const s=w(e);if(s===null)return t;{_(w(e)!==".priority"||be(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(D(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(O,(o,a)=>{t[o]=a.val(e),s++,r&&m.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Wr(this.getPriority().val())+":"),this.forEachChild(O,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":dr(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new I(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new I(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new I(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,I.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,I.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Mt?-1:0}withIndex(e){if(e===Ye||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new m(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ye||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(O),i=t.getIterator(O);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ye?null:this.indexMap_.get(e.toString())}}m.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class xc extends m{constructor(){super(new Y(fs),m.EMPTY_NODE,pe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return m.EMPTY_NODE}isEmpty(){return!1}}const Mt=new xc;Object.defineProperties(I,{MIN:{value:new I(Qe,m.EMPTY_NODE)},MAX:{value:new I(Be,Mt)}});Br.__EMPTY_NODE=m.EMPTY_NODE;H.__childrenNodeConstructor=m;Sc(Mt);Nc(Mt);/**
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
 */const Dc=!0;function $(n,e=null){if(n===null)return m.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),_(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new H(t,$(e))}if(!(n instanceof Array)&&Dc){const t=[];let s=!1;if(Q(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=$(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new I(o,l)))}}),t.length===0)return m.EMPTY_NODE;const r=Jt(t,bc,o=>o.name,fs);if(s){const o=Jt(t,O.getCompare());return new m(r,$(e),new pe({".priority":o},{".priority":O}))}else return new m(r,$(e),pe.Default)}else{let t=m.EMPTY_NODE;return Q(n,(s,i)=>{if(ye(n,s)&&s.substring(0,1)!=="."){const r=$(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority($(e))}}Tc($);/**
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
 */class Pc extends fn{constructor(e){super(),this.indexPath_=e,_(!b(e)&&w(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?ot(e.name,t.name):r}makePost(e,t){const s=$(e),i=m.EMPTY_NODE.updateChild(this.indexPath_,s);return new I(t,i)}maxPost(){const e=m.EMPTY_NODE.updateChild(this.indexPath_,Mt);return new I(Be,e)}toString(){return Or(this.indexPath_,0).join("/")}}/**
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
 */class Mc extends fn{compare(e,t){const s=e.node.compareTo(t.node);return s===0?ot(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return I.MIN}maxPost(){return I.MAX}makePost(e,t){const s=$(e);return new I(t,s)}toString(){return".value"}}const Oc=new Mc;/**
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
 */function $r(n){return{type:"value",snapshotNode:n}}function Xe(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function St(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Tt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Fc(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class _s{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){_(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(St(t,a)):_(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Xe(t,s)):o.trackChildChange(Tt(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(O,(i,r)=>{t.hasChild(i)||s.trackChildChange(St(i,r))}),t.isLeafNode()||t.forEachChild(O,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Tt(i,r,o))}else s.trackChildChange(Xe(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?m.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Nt{constructor(e){this.indexedFilter_=new _s(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Nt.getStartPost_(e),this.endPost_=Nt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new I(t,s))||(s=m.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=m.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(m.EMPTY_NODE);const r=this;return t.forEachChild(O,(o,a)=>{r.matches(new I(o,a))||(i=i.updateImmediateChild(o,m.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Lc{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Nt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new I(t,s))||(s=m.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=m.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=m.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(m.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,m.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;_(a.numChildren()===this.limit_,"");const l=new I(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Tt(t,s,h)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(St(t,h));const g=a.updateImmediateChild(t,m.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Xe(d.name,d.node)),g.updateImmediateChild(d.name,d.node)):g}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(St(c.name,c.node)),r.trackChildChange(Xe(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,m.EMPTY_NODE)):e}}/**
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
 */class ps{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=O}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return _(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return _(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Qe}hasEnd(){return this.endSet_}getIndexEndValue(){return _(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return _(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Be}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return _(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===O}copy(){const e=new ps;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Bc(n){return n.loadsAllData()?new _s(n.getIndex()):n.hasLimit()?new Lc(n):new Nt(n)}function vi(n){const e={};if(n.isDefault())return e;let t;if(n.index_===O?t="$priority":n.index_===Oc?t="$value":n.index_===Ye?t="$key":(_(n.index_ instanceof Pc,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=W(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=W(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+W(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=W(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+W(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Ci(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==O&&(e.i=n.index_.toString()),e}/**
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
 */class Zt extends Dr{constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Pt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(_(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Zt.getListenId_(e,s),a={};this.listens_[o]=a;const l=vi(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),Ke(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=Zt.getListenId_(e,t);delete this.listens_[s]}get(e){const t=vi(e._queryParams),s=e._path.toString(),i=new un;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+_a(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Et(a.responseText)}catch{K("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&K("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Wc{constructor(){this.rootNode_=m.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function en(){return{value:null,children:new Map}}function Gr(n,e,t){if(b(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=w(e);n.children.has(s)||n.children.set(s,en());const i=n.children.get(s);e=D(e),Gr(i,e,t)}}function Qn(n,e,t){n.value!==null?t(e,n.value):Uc(n,(s,i)=>{const r=new k(e.toString()+"/"+s);Qn(i,r,t)})}function Uc(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class Hc{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Q(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Ei=10*1e3,Vc=30*1e3,$c=5*60*1e3;class Gc{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Hc(e);const s=Ei+(Vc-Ei)*Math.random();gt(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;Q(e,(i,r)=>{r>0&&ye(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),gt(this.reportStats_.bind(this),Math.floor(Math.random()*2*$c))}}/**
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
 */var re;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(re||(re={}));function zr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ms(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class tn{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=re.ACK_USER_WRITE,this.source=zr()}operationForChild(e){if(b(this.path)){if(this.affectedTree.value!=null)return _(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new k(e));return new tn(N(),t,this.revert)}}else return _(w(this.path)===e,"operationForChild called for unrelated child."),new tn(D(this.path),this.affectedTree,this.revert)}}/**
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
 */class Rt{constructor(e,t){this.source=e,this.path=t,this.type=re.LISTEN_COMPLETE}operationForChild(e){return b(this.path)?new Rt(this.source,N()):new Rt(this.source,D(this.path))}}/**
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
 */class We{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=re.OVERWRITE}operationForChild(e){return b(this.path)?new We(this.source,N(),this.snap.getImmediateChild(e)):new We(this.source,D(this.path),this.snap)}}/**
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
 */class At{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=re.MERGE}operationForChild(e){if(b(this.path)){const t=this.children.subtree(new k(e));return t.isEmpty()?null:t.value?new We(this.source,N(),t.value):new At(this.source,N(),t)}else return _(w(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new At(this.source,D(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Se{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(b(e))return this.isFullyInitialized()&&!this.filtered_;const t=w(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class zc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function jc(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Fc(o.childName,o.snapshotNode))}),pt(n,i,"child_removed",e,s,t),pt(n,i,"child_added",e,s,t),pt(n,i,"child_moved",r,s,t),pt(n,i,"child_changed",e,s,t),pt(n,i,"value",e,s,t),i}function pt(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>Yc(n,a,l)),o.forEach(a=>{const l=qc(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function qc(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Yc(n,e,t){if(e.childName==null||t.childName==null)throw it("Should only compare child_ events.");const s=new I(e.childName,e.snapshotNode),i=new I(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function _n(n,e){return{eventCache:n,serverCache:e}}function mt(n,e,t,s){return _n(new Se(e,t,s),n.serverCache)}function jr(n,e,t,s){return _n(n.eventCache,new Se(e,t,s))}function nn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ue(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Mn;const Kc=()=>(Mn||(Mn=new Y(Ml)),Mn);class P{constructor(e,t=Kc()){this.value=e,this.children=t}static fromObject(e){let t=new P(null);return Q(e,(s,i)=>{t=t.set(new k(s),i)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:N(),value:this.value};if(b(e))return null;{const s=w(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(D(e),t);return r!=null?{path:U(new k(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(b(e))return this;{const t=w(e),s=this.children.get(t);return s!==null?s.subtree(D(e)):new P(null)}}set(e,t){if(b(e))return new P(t,this.children);{const s=w(e),r=(this.children.get(s)||new P(null)).set(D(e),t),o=this.children.insert(s,r);return new P(this.value,o)}}remove(e){if(b(e))return this.children.isEmpty()?new P(null):new P(null,this.children);{const t=w(e),s=this.children.get(t);if(s){const i=s.remove(D(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new P(null):new P(this.value,r)}else return this}}get(e){if(b(e))return this.value;{const t=w(e),s=this.children.get(t);return s?s.get(D(e)):null}}setTree(e,t){if(b(e))return t;{const s=w(e),r=(this.children.get(s)||new P(null)).setTree(D(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new P(this.value,o)}}fold(e){return this.fold_(N(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(U(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,N(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(b(e))return null;{const r=w(e),o=this.children.get(r);return o?o.findOnPath_(D(e),U(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,N(),t)}foreachOnPath_(e,t,s){if(b(e))return this;{this.value&&s(t,this.value);const i=w(e),r=this.children.get(i);return r?r.foreachOnPath_(D(e),U(t,i),s):new P(null)}}foreach(e){this.foreach_(N(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(U(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class oe{constructor(e){this.writeTree_=e}static empty(){return new oe(new P(null))}}function yt(n,e,t){if(b(e))return new oe(new P(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=q(i,e);return r=r.updateChild(o,t),new oe(n.writeTree_.set(i,r))}else{const i=new P(t),r=n.writeTree_.setTree(e,i);return new oe(r)}}}function wi(n,e,t){let s=n;return Q(t,(i,r)=>{s=yt(s,U(e,i),r)}),s}function Ii(n,e){if(b(e))return oe.empty();{const t=n.writeTree_.setTree(e,new P(null));return new oe(t)}}function Xn(n,e){return He(n,e)!=null}function He(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(q(t.path,e)):null}function bi(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(O,(s,i)=>{e.push(new I(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new I(s,i.value))}),e}function Ee(n,e){if(b(e))return n;{const t=He(n,e);return t!=null?new oe(new P(t)):new oe(n.writeTree_.subtree(e))}}function Jn(n){return n.writeTree_.isEmpty()}function Je(n,e){return qr(N(),n.writeTree_,e)}function qr(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(_(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=qr(U(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(U(n,".priority"),s)),t}}/**
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
 */function pn(n,e){return Xr(e,n)}function Qc(n,e,t,s,i){_(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=yt(n.visibleWrites,e,t)),n.lastWriteId=s}function Xc(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Jc(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);_(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Zc(a,s.path)?i=!1:ie(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return eh(n),!0;if(s.snap)n.visibleWrites=Ii(n.visibleWrites,s.path);else{const a=s.children;Q(a,l=>{n.visibleWrites=Ii(n.visibleWrites,U(s.path,l))})}return!0}else return!1}function Zc(n,e){if(n.snap)return ie(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ie(U(n.path,t),e))return!0;return!1}function eh(n){n.visibleWrites=Yr(n.allWrites,th,N()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function th(n){return n.visible}function Yr(n,e,t){let s=oe.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)ie(t,o)?(a=q(t,o),s=yt(s,a,r.snap)):ie(o,t)&&(a=q(o,t),s=yt(s,N(),r.snap.getChild(a)));else if(r.children){if(ie(t,o))a=q(t,o),s=wi(s,a,r.children);else if(ie(o,t))if(a=q(o,t),b(a))s=wi(s,N(),r.children);else{const l=Ke(r.children,w(a));if(l){const c=l.getChild(D(a));s=yt(s,N(),c)}}}else throw it("WriteRecord should have .snap or .children")}}return s}function Kr(n,e,t,s,i){if(!s&&!i){const r=He(n.visibleWrites,e);if(r!=null)return r;{const o=Ee(n.visibleWrites,e);if(Jn(o))return t;if(t==null&&!Xn(o,N()))return null;{const a=t||m.EMPTY_NODE;return Je(o,a)}}}else{const r=Ee(n.visibleWrites,e);if(!i&&Jn(r))return t;if(!i&&t==null&&!Xn(r,N()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(ie(c.path,e)||ie(e,c.path))},a=Yr(n.allWrites,o,e),l=t||m.EMPTY_NODE;return Je(a,l)}}}function nh(n,e,t){let s=m.EMPTY_NODE;const i=He(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(O,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=Ee(n.visibleWrites,e);return t.forEachChild(O,(o,a)=>{const l=Je(Ee(r,new k(o)),a);s=s.updateImmediateChild(o,l)}),bi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Ee(n.visibleWrites,e);return bi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function sh(n,e,t,s,i){_(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=U(e,t);if(Xn(n.visibleWrites,r))return null;{const o=Ee(n.visibleWrites,r);return Jn(o)?i.getChild(t):Je(o,i.getChild(t))}}function ih(n,e,t,s){const i=U(e,t),r=He(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=Ee(n.visibleWrites,i);return Je(o,s.getNode().getImmediateChild(t))}else return null}function rh(n,e){return He(n.visibleWrites,e)}function oh(n,e,t,s,i,r,o){let a;const l=Ee(n.visibleWrites,e),c=He(l,N());if(c!=null)a=c;else if(t!=null)a=Je(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&u.length<i;)h(f,s)!==0&&u.push(f),f=d.getNext();return u}else return[]}function ah(){return{visibleWrites:oe.empty(),allWrites:[],lastWriteId:-1}}function sn(n,e,t,s){return Kr(n.writeTree,n.treePath,e,t,s)}function ys(n,e){return nh(n.writeTree,n.treePath,e)}function Si(n,e,t,s){return sh(n.writeTree,n.treePath,e,t,s)}function rn(n,e){return rh(n.writeTree,U(n.treePath,e))}function lh(n,e,t,s,i,r){return oh(n.writeTree,n.treePath,e,t,s,i,r)}function vs(n,e,t){return ih(n.writeTree,n.treePath,e,t)}function Qr(n,e){return Xr(U(n.treePath,e),n.writeTree)}function Xr(n,e){return{treePath:n,writeTree:e}}/**
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
 */class ch{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;_(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),_(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Tt(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,St(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Xe(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Tt(s,e.snapshotNode,i.oldSnap));else throw it("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class hh{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Jr=new hh;class Cs{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Se(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vs(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ue(this.viewCache_),r=lh(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function uh(n){return{filter:n}}function dh(n,e){_(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),_(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function fh(n,e,t,s,i){const r=new ch;let o,a;if(t.type===re.OVERWRITE){const c=t;c.source.fromUser?o=Zn(n,e,c.path,c.snap,s,i,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!b(c.path),o=on(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===re.MERGE){const c=t;c.source.fromUser?o=ph(n,e,c.path,c.children,s,i,r):(_(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=es(n,e,c.path,c.children,s,i,a,r))}else if(t.type===re.ACK_USER_WRITE){const c=t;c.revert?o=yh(n,e,c.path,s,i,r):o=gh(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===re.LISTEN_COMPLETE)o=mh(n,e,t.path,s,r);else throw it("Unknown operation type: "+t.type);const l=r.getChanges();return _h(e,o,l),{viewCache:o,changes:l}}function _h(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=nn(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push($r(nn(e)))}}function Zr(n,e,t,s,i,r){const o=e.eventCache;if(rn(s,t)!=null)return e;{let a,l;if(b(t))if(_(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ue(e),u=c instanceof m?c:m.EMPTY_NODE,h=ys(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=sn(s,Ue(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=w(t);if(c===".priority"){_(be(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=Si(s,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=D(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Si(s,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=vs(s,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return mt(e,a,o.isFullyInitialized()||b(t),n.filter.filtersNodes())}}function on(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(b(t))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,s);c=u.updateFullNode(l.getNode(),f,null)}else{const f=w(t);if(!l.isCompleteForPath(t)&&be(t)>1)return e;const p=D(t),v=l.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?c=u.updatePriority(l.getNode(),v):c=u.updateChild(l.getNode(),f,v,p,Jr,null)}const h=jr(e,c,l.isFullyInitialized()||b(t),u.filtersNodes()),d=new Cs(i,h,r);return Zr(n,h,t,i,d,a)}function Zn(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const u=new Cs(i,e,r);if(b(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=mt(e,c,!0,n.filter.filtersNodes());else{const h=w(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=mt(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=D(t),f=a.getNode().getImmediateChild(h);let p;if(b(d))p=s;else{const g=u.getCompleteChild(h);g!=null?Mr(d)===".priority"&&g.getChild(Fr(d)).isEmpty()?p=g:p=g.updateChild(d,s):p=m.EMPTY_NODE}if(f.equals(p))l=e;else{const g=n.filter.updateChild(a.getNode(),h,p,d,u,o);l=mt(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Ti(n,e){return n.eventCache.isCompleteForChild(e)}function ph(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=U(t,l);Ti(e,w(u))&&(a=Zn(n,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=U(t,l);Ti(e,w(u))||(a=Zn(n,a,u,c,i,r,o))}),a}function Ni(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function es(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;b(t)?c=s:c=new P(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),p=Ni(n,f,d);l=on(n,l,new k(h),p,i,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const p=e.serverCache.getNode().getImmediateChild(h),g=Ni(n,p,d);l=on(n,l,new k(h),g,i,r,o,a)}}),l}function gh(n,e,t,s,i,r,o){if(rn(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(b(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return on(n,e,t,l.getNode().getChild(t),i,r,a,o);if(b(t)){let c=new P(null);return l.getNode().forEachChild(Ye,(u,h)=>{c=c.set(new k(u),h)}),es(n,e,t,c,i,r,a,o)}else return e}else{let c=new P(null);return s.foreach((u,h)=>{const d=U(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),es(n,e,t,c,i,r,a,o)}}function mh(n,e,t,s,i){const r=e.serverCache,o=jr(e,r.getNode(),r.isFullyInitialized()||b(t),r.isFiltered());return Zr(n,o,t,s,Jr,i)}function yh(n,e,t,s,i,r){let o;if(rn(s,t)!=null)return e;{const a=new Cs(s,e,i),l=e.eventCache.getNode();let c;if(b(t)||w(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=sn(s,Ue(e));else{const h=e.serverCache.getNode();_(h instanceof m,"serverChildren would be complete if leaf node"),u=ys(s,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=w(t);let h=vs(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,D(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,m.EMPTY_NODE,D(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=sn(s,Ue(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||rn(s,N())!=null,mt(e,c,o,n.filter.filtersNodes())}}/**
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
 */class vh{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new _s(s.getIndex()),r=Bc(s);this.processor_=uh(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(m.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(m.EMPTY_NODE,a.getNode(),null),u=new Se(l,o.isFullyInitialized(),i.filtersNodes()),h=new Se(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=_n(h,u),this.eventGenerator_=new zc(this.query_)}get query(){return this.query_}}function Ch(n){return n.viewCache_.serverCache.getNode()}function Eh(n){return nn(n.viewCache_)}function wh(n,e){const t=Ue(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!b(e)&&!t.getImmediateChild(w(e)).isEmpty())?t.getChild(e):null}function Ri(n){return n.eventRegistrations_.length===0}function Ih(n,e){n.eventRegistrations_.push(e)}function Ai(n,e,t){const s=[];if(t){_(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function ki(n,e,t,s){e.type===re.MERGE&&e.source.queryId!==null&&(_(Ue(n.viewCache_),"We should always have a full cache before handling merges"),_(nn(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=fh(n.processor_,i,e,t,s);return dh(n.processor_,r.viewCache),_(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,eo(n,r.changes,r.viewCache.eventCache.getNode(),null)}function bh(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(O,(r,o)=>{s.push(Xe(r,o))}),t.isFullyInitialized()&&s.push($r(t.getNode())),eo(n,s,t.getNode(),e)}function eo(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return jc(n.eventGenerator_,e,t,i)}/**
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
 */let an;class to{constructor(){this.views=new Map}}function Sh(n){_(!an,"__referenceConstructor has already been defined"),an=n}function Th(){return _(an,"Reference.ts has not been loaded"),an}function Nh(n){return n.views.size===0}function Es(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return _(r!=null,"SyncTree gave us an op for an invalid query."),ki(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(ki(o,e,t,s));return r}}function no(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=sn(t,i?s:null),l=!1;a?l=!0:s instanceof m?(a=ys(t,s),l=!1):(a=m.EMPTY_NODE,l=!1);const c=_n(new Se(a,l,!1),new Se(s,i,!1));return new vh(e,c)}return o}function Rh(n,e,t,s,i,r){const o=no(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Ih(o,t),bh(o,t)}function Ah(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=Te(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(Ai(c,t,s)),Ri(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(Ai(l,t,s)),Ri(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Te(n)&&r.push(new(Th())(e._repo,e._path)),{removed:r,events:o}}function so(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function we(n,e){let t=null;for(const s of n.views.values())t=t||wh(s,e);return t}function io(n,e){if(e._queryParams.loadsAllData())return gn(n);{const s=e._queryIdentifier;return n.views.get(s)}}function ro(n,e){return io(n,e)!=null}function Te(n){return gn(n)!=null}function gn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ln;function kh(n){_(!ln,"__referenceConstructor has already been defined"),ln=n}function xh(){return _(ln,"Reference.ts has not been loaded"),ln}let Dh=1;class xi{constructor(e){this.listenProvider_=e,this.syncPointTree_=new P(null),this.pendingWriteTree_=ah(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function oo(n,e,t,s,i){return Qc(n.pendingWriteTree_,e,t,s,i),i?Ft(n,new We(zr(),e,t)):[]}function Oe(n,e,t=!1){const s=Xc(n.pendingWriteTree_,e);if(Jc(n.pendingWriteTree_,e)){let r=new P(null);return s.snap!=null?r=r.set(N(),!0):Q(s.children,o=>{r=r.set(new k(o),!0)}),Ft(n,new tn(s.path,r,t))}else return[]}function Ot(n,e,t){return Ft(n,new We(gs(),e,t))}function Ph(n,e,t){const s=P.fromObject(t);return Ft(n,new At(gs(),e,s))}function Mh(n,e){return Ft(n,new Rt(gs(),e))}function Oh(n,e,t){const s=Is(n,t);if(s){const i=bs(s),r=i.path,o=i.queryId,a=q(r,e),l=new Rt(ms(o),a);return Ss(n,r,l)}else return[]}function cn(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||ro(o,e))){const l=Ah(o,e,t,s);Nh(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>Te(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=Bh(d);for(let p=0;p<f.length;++p){const g=f[p],v=g.query,R=ho(n,g);n.listenProvider_.startListening(vt(v),kt(n,v),R.hashFn,R.onComplete)}}}!h&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(vt(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(mn(d));n.listenProvider_.stopListening(vt(d),f)}))}Wh(n,c)}return a}function ao(n,e,t,s){const i=Is(n,s);if(i!=null){const r=bs(i),o=r.path,a=r.queryId,l=q(o,e),c=new We(ms(a),l,t);return Ss(n,o,c)}else return[]}function Fh(n,e,t,s){const i=Is(n,s);if(i){const r=bs(i),o=r.path,a=r.queryId,l=q(o,e),c=P.fromObject(t),u=new At(ms(a),l,c);return Ss(n,o,u)}else return[]}function ts(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=q(d,i);r=r||we(f,p),o=o||Te(f)});let a=n.syncPointTree_.get(i);a?(o=o||Te(a),r=r||we(a,N())):(a=new to,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=m.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,p)=>{const g=we(p,N());g&&(r=r.updateImmediateChild(f,g))}));const c=ro(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=mn(e);_(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=Uh();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=pn(n.pendingWriteTree_,i);let h=Rh(a,e,t,u,r,l);if(!c&&!o&&!s){const d=io(a,e);h=h.concat(Hh(n,e,d))}return h}function ws(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=q(o,e),c=we(a,l);if(c)return c});return Kr(i,e,r,t,!0)}function Lh(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,u)=>{const h=q(c,t);s=s||we(u,h)});let i=n.syncPointTree_.get(t);i?s=s||we(i,N()):(i=new to,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new Se(s,!0,!1):null,a=pn(n.pendingWriteTree_,e._path),l=no(i,e,a,r?o.getNode():m.EMPTY_NODE,r);return Eh(l)}function Ft(n,e){return lo(e,n.syncPointTree_,null,pn(n.pendingWriteTree_,N()))}function lo(n,e,t,s){if(b(n.path))return co(n,e,t,s);{const i=e.get(N());t==null&&i!=null&&(t=we(i,N()));let r=[];const o=w(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=Qr(s,o);r=r.concat(lo(a,l,c,u))}return i&&(r=r.concat(Es(i,n,s,t))),r}}function co(n,e,t,s){const i=e.get(N());t==null&&i!=null&&(t=we(i,N()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Qr(s,o),u=n.operationForChild(o);u&&(r=r.concat(co(u,a,l,c)))}),i&&(r=r.concat(Es(i,n,s,t))),r}function ho(n,e){const t=e.query,s=kt(n,t);return{hashFn:()=>(Ch(e)||m.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Oh(n,t._path,s):Mh(n,t._path);{const r=Ll(i,t);return cn(n,t,null,r)}}}}function kt(n,e){const t=mn(e);return n.queryToTagMap.get(t)}function mn(n){return n._path.toString()+"$"+n._queryIdentifier}function Is(n,e){return n.tagToQueryMap.get(e)}function bs(n){const e=n.indexOf("$");return _(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new k(n.substr(0,e))}}function Ss(n,e,t){const s=n.syncPointTree_.get(e);_(s,"Missing sync point for query tag that we're tracking");const i=pn(n.pendingWriteTree_,e);return Es(s,t,i,null)}function Bh(n){return n.fold((e,t,s)=>{if(t&&Te(t))return[gn(t)];{let i=[];return t&&(i=so(t)),Q(s,(r,o)=>{i=i.concat(o)}),i}})}function vt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(xh())(n._repo,n._path):n}function Wh(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=mn(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Uh(){return Dh++}function Hh(n,e,t){const s=e._path,i=kt(n,e),r=ho(n,t),o=n.listenProvider_.startListening(vt(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)_(!Te(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!b(c)&&u&&Te(u))return[gn(u).query];{let d=[];return u&&(d=d.concat(so(u).map(f=>f.query))),Q(h,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(vt(u),kt(n,u))}}return o}/**
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
 */class Ts{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ts(t)}node(){return this.node_}}class Ns{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=U(this.path_,e);return new Ns(this.syncTree_,t)}node(){return ws(this.syncTree_,this.path_)}}const Vh=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Di=function(n,e,t){if(!n||typeof n!="object")return n;if(_(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return $h(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Gh(n[".sv"],e);_(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},$h=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:_(!1,"Unexpected server value: "+n)}},Gh=function(n,e,t){n.hasOwnProperty("increment")||_(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&_(!1,"Unexpected increment value: "+s);const i=e.node();if(_(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},zh=function(n,e,t,s){return Rs(e,new Ns(t,n),s)},uo=function(n,e,t){return Rs(n,new Ts(e),t)};function Rs(n,e,t){const s=n.getPriority().val(),i=Di(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Di(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new H(a,$(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new H(i))),o.forEachChild(O,(a,l)=>{const c=Rs(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class As{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function ks(n,e){let t=e instanceof k?e:new k(e),s=n,i=w(t);for(;i!==null;){const r=Ke(s.node.children,i)||{children:{},childCount:0};s=new As(i,s,r),t=D(t),i=w(t)}return s}function lt(n){return n.node.value}function fo(n,e){n.node.value=e,ns(n)}function _o(n){return n.node.childCount>0}function jh(n){return lt(n)===void 0&&!_o(n)}function yn(n,e){Q(n.node.children,(t,s)=>{e(new As(t,n,s))})}function po(n,e,t,s){t&&!s&&e(n),yn(n,i=>{po(i,e,!0,s)}),t&&s&&e(n)}function qh(n,e,t){let s=t?n:n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Lt(n){return new k(n.parent===null?n.name:Lt(n.parent)+"/"+n.name)}function ns(n){n.parent!==null&&Yh(n.parent,n.name,n)}function Yh(n,e,t){const s=jh(t),i=ye(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,ns(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,ns(n))}/**
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
 */const Kh=/[\[\].#$\/\u0000-\u001F\u007F]/,Qh=/[\[\].#$\u0000-\u001F\u007F]/,On=10*1024*1024,go=function(n){return typeof n=="string"&&n.length!==0&&!Kh.test(n)},mo=function(n){return typeof n=="string"&&n.length!==0&&!Qh.test(n)},Xh=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),mo(n)},Jh=function(n,e,t,s){s&&e===void 0||xs(rs(n,"value"),e,t)},xs=function(n,e,t){const s=t instanceof k?new gc(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ae(s));if(typeof e=="function")throw new Error(n+"contains a function "+Ae(s)+" with contents = "+e.toString());if(fr(e))throw new Error(n+"contains "+e.toString()+" "+Ae(s));if(typeof e=="string"&&e.length>On/3&&dn(e)>On)throw new Error(n+"contains a string greater than "+On+" utf8 bytes "+Ae(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(Q(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!go(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ae(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mc(s,o),xs(n,a,s),yc(s)}),i&&r)throw new Error(n+' contains ".value" child '+Ae(s)+" in addition to actual children.")}},yo=function(n,e,t,s){if(!(s&&t===void 0)&&!mo(t))throw new Error(rs(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Zh=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),yo(n,e,t,s)},eu=function(n,e){if(w(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},tu=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!go(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Xh(t))throw new Error(rs(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class nu{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ds(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!us(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function vo(n,e,t){Ds(n,t),Co(n,s=>us(s,e))}function ue(n,e,t){Ds(n,t),Co(n,s=>ie(s,e)||ie(e,s))}function Co(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(su(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function su(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Fe&&z("event: "+t.toString()),at(s)}}}/**
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
 */const iu="repo_interrupt",ru=25;class ou{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nu,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=en(),this.transactionQueueTree_=new As,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function au(n,e,t){if(n.stats_=cs(n.repoInfo_),n.forceRestClient_||Hl())n.server_=new Zt(n.repoInfo_,(s,i,r,o)=>{Pi(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Mi(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{W(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new ge(n.repoInfo_,e,(s,i,r,o)=>{Pi(n,s,i,r,o)},s=>{Mi(n,s)},s=>{cu(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=jl(n.repoInfo_,()=>new Gc(n.stats_,n.server_)),n.infoData_=new Wc,n.infoSyncTree_=new xi({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=Ot(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Ms(n,"connected",!1),n.serverSyncTree_=new xi({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);ue(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function lu(n){const t=n.infoData_.getNode(new k(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ps(n){return Vh({timestamp:lu(n)})}function Pi(n,e,t,s,i){n.dataUpdateCount++;const r=new k(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=qt(t,c=>$(c));o=Fh(n.serverSyncTree_,r,l,i)}else{const l=$(t);o=ao(n.serverSyncTree_,r,l,i)}else if(s){const l=qt(t,c=>$(c));o=Ph(n.serverSyncTree_,r,l)}else{const l=$(t);o=Ot(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Cn(n,r)),ue(n.eventQueue_,a,o)}function Mi(n,e){Ms(n,"connected",e),e===!1&&du(n)}function cu(n,e){Q(e,(t,s)=>{Ms(n,t,s)})}function Ms(n,e,t){const s=new k("/.info/"+e),i=$(t);n.infoData_.updateSnapshot(s,i);const r=Ot(n.infoSyncTree_,s,i);ue(n.eventQueue_,s,r)}function Eo(n){return n.nextWriteId_++}function hu(n,e,t){const s=Lh(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=$(i).withIndex(e._queryParams.getIndex());ts(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=Ot(n.serverSyncTree_,e._path,r);else{const a=kt(n.serverSyncTree_,e);o=ao(n.serverSyncTree_,e._path,r,a)}return ue(n.eventQueue_,e._path,o),cn(n.serverSyncTree_,e,t,null,!0),r},i=>(vn(n,"get for query "+W(e)+" failed: "+i),Promise.reject(new Error(i))))}function uu(n,e,t,s,i){vn(n,"set",{path:e.toString(),value:t,priority:s});const r=Ps(n),o=$(t,s),a=ws(n.serverSyncTree_,e),l=uo(o,a,r),c=Eo(n),u=oo(n.serverSyncTree_,e,l,c,!0);Ds(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||K("set at "+e+" failed: "+d);const g=Oe(n.serverSyncTree_,c,!p);ue(n.eventQueue_,e,g),pu(n,i,d,f)});const h=To(n,e);Cn(n,h),ue(n.eventQueue_,h,[])}function du(n){vn(n,"onDisconnectEvents");const e=Ps(n),t=en();Qn(n.onDisconnect_,N(),(i,r)=>{const o=zh(i,r,n.serverSyncTree_,e);Gr(t,i,o)});let s=[];Qn(t,N(),(i,r)=>{s=s.concat(Ot(n.serverSyncTree_,i,r));const o=To(n,i);Cn(n,o)}),n.onDisconnect_=en(),ue(n.eventQueue_,N(),s)}function fu(n,e,t){let s;w(e._path)===".info"?s=ts(n.infoSyncTree_,e,t):s=ts(n.serverSyncTree_,e,t),vo(n.eventQueue_,e._path,s)}function Oi(n,e,t){let s;w(e._path)===".info"?s=cn(n.infoSyncTree_,e,t):s=cn(n.serverSyncTree_,e,t),vo(n.eventQueue_,e._path,s)}function _u(n){n.persistentConnection_&&n.persistentConnection_.interrupt(iu)}function vn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),z(t,...e)}function pu(n,e,t,s){e&&at(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function wo(n,e,t){return ws(n.serverSyncTree_,e,t)||m.EMPTY_NODE}function Os(n,e=n.transactionQueueTree_){if(e||En(n,e),lt(e)){const t=bo(n,e);_(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&gu(n,Lt(e),t)}else _o(e)&&yn(e,t=>{Os(n,t)})}function gu(n,e,t){const s=t.map(c=>c.currentWriteId),i=wo(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];_(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=q(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{vn(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(Oe(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();En(n,ks(n.transactionQueueTree_,e)),Os(n,n.transactionQueueTree_),ue(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)at(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{K("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Cn(n,e)}},o)}function Cn(n,e){const t=Io(n,e),s=Lt(t),i=bo(n,t);return mu(n,i,s),s}function mu(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=q(t,l.path);let u=!1,h;if(_(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Oe(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ru)u=!0,h="maxretry",i=i.concat(Oe(n.serverSyncTree_,l.currentWriteId,!0));else{const d=wo(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){xs("transaction failed: Data returned ",f,l.path);let p=$(f);typeof f=="object"&&f!=null&&ye(f,".priority")||(p=p.updatePriority(d.getPriority()));const v=l.currentWriteId,R=Ps(n),M=uo(p,d,R);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=M,l.currentWriteId=Eo(n),o.splice(o.indexOf(v),1),i=i.concat(oo(n.serverSyncTree_,l.path,M,l.currentWriteId,l.applyLocally)),i=i.concat(Oe(n.serverSyncTree_,v,!0))}else u=!0,h="nodata",i=i.concat(Oe(n.serverSyncTree_,l.currentWriteId,!0))}ue(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}En(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)at(s[a]);Os(n,n.transactionQueueTree_)}function Io(n,e){let t,s=n.transactionQueueTree_;for(t=w(e);t!==null&&lt(s)===void 0;)s=ks(s,t),e=D(e),t=w(e);return s}function bo(n,e){const t=[];return So(n,e,t),t.sort((s,i)=>s.order-i.order),t}function So(n,e,t){const s=lt(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);yn(e,i=>{So(n,i,t)})}function En(n,e){const t=lt(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,fo(e,t.length>0?t:void 0)}yn(e,s=>{En(n,s)})}function To(n,e){const t=Lt(Io(n,e)),s=ks(n.transactionQueueTree_,e);return qh(s,i=>{Fn(n,i)}),Fn(n,s),po(s,i=>{Fn(n,i)}),t}function Fn(n,e){const t=lt(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(_(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(_(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Oe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?fo(e,void 0):t.length=r+1,ue(n.eventQueue_,Lt(e),i);for(let o=0;o<s.length;o++)at(s[o])}}/**
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
 */function yu(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function vu(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):K(`Invalid query segment '${t}' in query '${n}'`)}return e}const Fi=function(n,e){const t=Cu(n),s=t.namespace;t.domain==="firebase.com"&&me(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&me("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Dl();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Sr(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new k(t.pathString)}},Cu=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=yu(n.substring(u,h)));const d=vu(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class No{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+W(this.snapshot.exportVal())}}class Ro{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Ao{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return _(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Fs{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return b(this._path)?null:Mr(this._path)}get ref(){return new de(this._repo,this._path)}get _queryIdentifier(){const e=Ci(this._queryParams),t=as(e);return t==="{}"?"default":t}get _queryObject(){return Ci(this._queryParams)}isEqual(e){if(e=rt(e),!(e instanceof Fs))return!1;const t=this._repo===e._repo,s=us(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+pc(this._path)}}class de extends Fs{constructor(e,t){super(e,t,new ps,!1)}get parent(){const e=Fr(this._path);return e===null?null:new de(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ze{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new k(e),s=et(this.ref,e);return new Ze(this._node.getChild(t),s,O)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Ze(i,et(this.ref,s),O)))}hasChild(e){const t=new k(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Eu(n,e){return n=rt(n),n._checkNotDeleted("ref"),e!==void 0?et(n._root,e):n._root}function et(n,e){return n=rt(n),w(n._path)===null?Zh("child","path",e,!1):yo("child","path",e,!1),new de(n._repo,U(n._path,e))}function wu(n,e){n=rt(n),eu("set",n._path),Jh("set",e,n._path,!1);const t=new un;return uu(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Iu(n){n=rt(n);const e=new Ao(()=>{}),t=new wn(e);return hu(n._repo,n,t).then(s=>new Ze(s,new de(n._repo,n._path),n._queryParams.getIndex()))}class wn{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new No("value",this,new Ze(e.snapshotNode,new de(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ro(this,e,t):null}matches(e){return e instanceof wn?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Ls{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Ro(this,e,t):null}createEvent(e,t){_(e.childName!=null,"Child events should have a childName.");const s=et(new de(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new No(e.type,this,new Ze(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Ls?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function bu(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=t,c=(u,h)=>{Oi(n._repo,n,a),l(u,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new Ao(t,r||void 0),a=e==="value"?new wn(o):new Ls(e,o);return fu(n._repo,n,a),()=>Oi(n._repo,n,a)}function Su(n,e,t,s){return bu(n,"child_changed",e,t,s)}Sh(de);kh(de);/**
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
 */const Tu="FIREBASE_DATABASE_EMULATOR_HOST",ss={};let Nu=!1;function Ru(n,e,t,s){n.repoInfo_=new Sr(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),s&&(n.authTokenProvider_=s)}function Au(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||me("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),z("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Fi(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Tu]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Fi(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new qe(qe.OWNER):new $l(n.name,n.options,e);tu("Invalid Firebase Database URL",o),b(o.path)||me("Database URL must point to the root of a Firebase Database (not including a child path).");const h=xu(a,n,u,new Vl(n.name,t));return new Du(h,n)}function ku(n,e){const t=ss[e];(!t||t[n.key]!==n)&&me(`Database ${e}(${n.repoInfo_}) has already been deleted.`),_u(n),delete t[n.key]}function xu(n,e,t,s){let i=ss[e.name];i||(i={},ss[e.name]=i);let r=i[n.toURLString()];return r&&me("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new ou(n,Nu,t,s),i[n.toURLString()]=r,r}class Du{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(au(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new de(this._repo,N())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ku(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&me("Cannot call "+e+" on a deleted database.")}}function Pu(n=pl(),e){const t=ul(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=sa("database");s&&Mu(t,...s)}return t}function Mu(n,e,t,s={}){n=rt(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&me("Cannot call useEmulator() after instance has already been initialized.");const i=n._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&me('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new qe(qe.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:ia(s.mockUserToken,n.app.options.projectId);r=new qe(o)}Ru(i,e,t,r)}/**
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
 */function Ou(n){Nl(_l),Kt(new wt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Au(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),ze(si,ii,n),ze(si,ii,"esm2017")}ge.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ge.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Ou();let In;function Fu(n=Wo){const e={databaseURL:`${Bo}`},t=ar(e,"pixelpals"),s=Pu(t),i=Eu(s);In=et(i,n)}function Lu(){return Iu(In).then(n=>n.exists()?n.val().map(t=>t.toLowerCase()):void 0)}function Li(n,e){return wu(et(In,n),e)}function Bu(n){Su(In,n)}class Wu{constructor(){this._data=[]}getAllData(){return this._data}setAllData(e){this._data=e}setPixel(e,t){this._data[e]=t.toLowerCase()}getPixel(e){return this._data[e].toLowerCase()}}const $t=new Wu;function Uu(n,e,t){const{setPixel:s}=Do(qi);let{width:i}=e,{height:r}=e;const o=l=>{if(!l.exists()||l.key==null)return;const c=l.val(),u=Number(l.key),{x:h,y:d}=js(u);$t.setPixel(u,c),s(h,d,c)},a=(l,c,u)=>{l!=null&&l!=null&&l.forEach((h,d)=>{const{x:f,y:p}=js(d);s(f,p,h)})};return hn(async()=>{const l=Vo(Uo);Fu(l);const c=await Lu();c&&$t.setAllData(c),a(c),Bu(o)}),n.$$set=l=>{"width"in l&&t(0,i=l.width),"height"in l&&t(1,r=l.height)},n.$$.update=()=>{n.$$.dirty&3&&a($t.getAllData())},[i,r]}class Hu extends tt{constructor(e){super(),nt(this,e,Uu,null,st,{width:0,height:1})}}function Bi(n,e,t){const s=n.slice();return s[5]=e[t],s}function Wi(n){let e,t,s,i=n[5]+"",r,o,a,l,c,u,h;return{c(){e=F("button"),t=F("span"),s=ce("Select the color "),r=ce(i),o=ae(),this.h()},l(d){e=L(d,"BUTTON",{class:!0,"aria-current":!0,"aria-pressed":!0});var f=B(e);t=L(f,"SPAN",{class:!0});var p=B(t);s=he(p,"Select the color "),r=he(p,i),p.forEach(A),o=le(f),f.forEach(A),this.h()},h(){E(t,"class","sr-only"),E(e,"class",a="color relative h-6 w-6 shrink-0 cursor-pointer overflow-hidden rounded-sm "+(n[5]===n[0]&&"selected")+" hover:hover focus:hover border border-gray-800 svelte-nxaqpj"),E(e,"aria-current",l=n[5]===n[0]),E(e,"aria-pressed",c=n[5]===n[0]),Gt(e,"background",n[5])},m(d,f){Ie(d,e,f),T(e,t),T(t,s),T(t,r),T(e,o),u||(h=$e(e,"click",function(){Mo(n[2](n[5]))&&n[2](n[5]).apply(this,arguments)}),u=!0)},p(d,f){n=d,f&2&&i!==(i=n[5]+"")&&Ln(r,i),f&3&&a!==(a="color relative h-6 w-6 shrink-0 cursor-pointer overflow-hidden rounded-sm "+(n[5]===n[0]&&"selected")+" hover:hover focus:hover border border-gray-800 svelte-nxaqpj")&&E(e,"class",a),f&3&&l!==(l=n[5]===n[0])&&E(e,"aria-current",l),f&3&&c!==(c=n[5]===n[0])&&E(e,"aria-pressed",c),f&2&&Gt(e,"background",n[5])},d(d){d&&A(e),u=!1,h()}}}function Vu(n){let e,t=n[1],s=[];for(let i=0;i<t.length;i+=1)s[i]=Wi(Bi(n,t,i));return{c(){e=F("section");for(let i=0;i<s.length;i+=1)s[i].c();this.h()},l(i){e=L(i,"SECTION",{class:!0});var r=B(e);for(let o=0;o<s.length;o+=1)s[o].l(r);r.forEach(A),this.h()},h(){E(e,"class","flex flex-wrap justify-center gap-1 rounded bg-white p-2")},m(i,r){Ie(i,e,r);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null)},p(i,[r]){if(r&7){t=i[1];let o;for(o=0;o<t.length;o+=1){const a=Bi(i,t,o);s[o]?s[o].p(a,r):(s[o]=Wi(a),s[o].c(),s[o].m(e,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=t.length}},i:zt,o:zt,d(i){i&&A(e),Po(s,i)}}}function $u(n,e,t){let s;const i=ji();let{colors:r}=e,{activeColor:o}=e;const a=l=>()=>{i("color",{color:l}),t(0,o=l)};return n.$$set=l=>{"colors"in l&&t(3,r=l.colors),"activeColor"in l&&t(0,o=l.activeColor)},n.$$.update=()=>{n.$$.dirty&8&&t(1,s=r.map(l=>l.startsWith("#")?l.toLowerCase():`#${l.toLowerCase()}`))},[o,s,a,r]}class Gu extends tt{constructor(e){super(),nt(this,e,$u,Vu,st,{colors:3,activeColor:0})}}function zu(n){let e,t,s,i,r,o,a=n[0].name+"",l,c,u=n[0].keyTrigger+"",h,d,f,p,g;return{c(){e=F("button"),t=F("img"),i=ae(),r=F("span"),o=ce("Click to select "),l=ce(a),c=ce(" tool, or press "),h=ce(u),this.h()},l(v){e=L(v,"BUTTON",{class:!0,"aria-pressed":!0,"aria-current":!0});var R=B(e);t=L(R,"IMG",{src:!0,alt:!0}),i=le(R),r=L(R,"SPAN",{class:!0});var M=B(r);o=he(M,"Click to select "),l=he(M,a),c=he(M," tool, or press "),h=he(M,u),M.forEach(A),R.forEach(A),this.h()},h(){Vs(t.src,s=n[0].icon)||E(t,"src",s),E(t,"alt",""),E(r,"class","sr-only"),E(e,"class",d="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded border border-gray-800 "+(n[1]?"selected bg-gray-400":"bg-gray-300 hover:border-2 hover:bg-gray-200 focus:border-2 focus:bg-gray-200")+" svelte-85wnk6"),E(e,"aria-pressed",n[1]),E(e,"aria-current",f=n[1]?!0:void 0)},m(v,R){Ie(v,e,R),T(e,t),T(e,i),T(e,r),T(r,o),T(r,l),T(r,c),T(r,h),p||(g=$e(e,"click",n[2]),p=!0)},p(v,[R]){R&1&&!Vs(t.src,s=v[0].icon)&&E(t,"src",s),R&1&&a!==(a=v[0].name+"")&&Ln(l,a),R&1&&u!==(u=v[0].keyTrigger+"")&&Ln(h,u),R&2&&d!==(d="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded border border-gray-800 "+(v[1]?"selected bg-gray-400":"bg-gray-300 hover:border-2 hover:bg-gray-200 focus:border-2 focus:bg-gray-200")+" svelte-85wnk6")&&E(e,"class",d),R&2&&E(e,"aria-pressed",v[1]),R&2&&f!==(f=v[1]?!0:void 0)&&E(e,"aria-current",f)},i:zt,o:zt,d(v){v&&A(e),p=!1,g()}}}function ju(n,e,t){const s=ji();let{tool:i}=e,{selected:r=!1}=e;const o=()=>{s("tool",{tool:i})},a=l=>{l.key===i.keyTrigger&&o()};return hn(()=>(window.addEventListener("keyup",a),()=>{window.removeEventListener("keyup",a)})),n.$$set=l=>{"tool"in l&&t(0,i=l.tool),"selected"in l&&t(1,r=l.selected)},[i,r,o]}let Ui=class extends tt{constructor(e){super(),nt(this,e,ju,zu,st,{tool:0,selected:1})}};const Bs={NONE:0,PENCIL:1,COLOR_PICKER:2};class bn{constructor(){if(this.constructor===bn)throw new Error("Tool is an abstract class");this.name="Undefined",this.icon="Undefined",this.cursorHotspot={x:0,y:0},this.keyTrigger="Undefined",this.type=Bs.NONE,this.drawing=!1,this.dragging=!1}onMouseDown(e,t,s){this.drawing=!0}onMouseMove(e,t,s){this.drawing&&(this.dragging=!0)}onMouseUp(e,t,s){this.drawing&&(this.drawing=!1,this.dragging&&(this.dragging=!1))}onMouseLeave(e,t,s){s.clear()}}const qu=""+new URL("../assets/pencil.e3702aa4.svg",import.meta.url).href;class Yu extends bn{constructor(){super(),this.name="Pencil",this.keyTrigger="b",this.icon=qu,this.cursorHotspot={x:0,y:20},this.type=Bs.PENCIL,this.drawing=!1,this.dragging=!1}onMouseMove(e,t,s){if(this.drawing){this.dragging||(s.clear(),this.dragging=!0),s.setPixel(e,t);const i=Bn(e,t);Li(i,s.color)}else s.clear(),s.setMarker(e,t,!0)}onMouseUp(e,t,s){if(this.drawing)if(this.drawing=!1,this.dragging)this.dragging=!1;else{const i=Bn(e,t);Li(i,s.color)}s.clear()}}const Ku=""+new URL("../assets/colorPicker.058b2d23.svg",import.meta.url).href;class Qu extends bn{constructor(e){super(),this.name="ColorPicker",this.keyTrigger="c",this.icon=Ku,this.cursorHotspot={x:0,y:20},this.type=Bs.COLOR_PICKER,this.drawing=!1,this.dragging=!1,this.onColorChange=e}onMouseMove(e,t,s){this.drawing?this.dragging=!0:(s.clear(),s.setMarker(e,t,!1))}onMouseUp(e,t){if(this.drawing)if(this.drawing=!1,this.dragging)this.dragging=!1;else{const s=Bn(e,t),i=$t.getPixel(Number(s));this.onColorChange(i)}}}function Xu(n){let e,t;return e=new Hu({props:{height:n[10],width:n[9]}}),{c(){ke(e.$$.fragment)},l(s){xe(e.$$.fragment,s)},m(s,i){De(e,s,i),t=!0},p(s,i){const r={};i&1024&&(r.height=s[10]),i&512&&(r.width=s[9]),e.$set(r)},i(s){t||(fe(e.$$.fragment,s),t=!0)},o(s){_e(e.$$.fragment,s),t=!1},d(s){Pe(e,s)}}}function Ju(n){let e,t,s,i;return e=new Gs({props:{maxWidth:n[7],maxHeight:n[8],widthPixels:Ct,heightPixels:zs,$$slots:{default:[Xu,({width:r,height:o})=>({9:r,10:o}),({width:r,height:o})=>(r?512:0)|(o?1024:0)]},$$scope:{ctx:n}}}),s=new Gs({props:{maxWidth:n[7],maxHeight:n[8],color:n[0],tool:n[1],widthPixels:Ct,heightPixels:zs}}),{c(){ke(e.$$.fragment),t=ae(),ke(s.$$.fragment)},l(r){xe(e.$$.fragment,r),t=le(r),xe(s.$$.fragment,r)},m(r,o){De(e,r,o),Ie(r,t,o),De(s,r,o),i=!0},p(r,o){const a={};o&128&&(a.maxWidth=r[7]),o&256&&(a.maxHeight=r[8]),o&3584&&(a.$$scope={dirty:o,ctx:r}),e.$set(a);const l={};o&128&&(l.maxWidth=r[7]),o&256&&(l.maxHeight=r[8]),o&1&&(l.color=r[0]),o&2&&(l.tool=r[1]),s.$set(l)},i(r){i||(fe(e.$$.fragment,r),fe(s.$$.fragment,r),i=!0)},o(r){_e(e.$$.fragment,r),_e(s.$$.fragment,r),i=!1},d(r){Pe(e,r),r&&A(t),Pe(s,r)}}}function Zu(n){let e,t,s,i,r,o,a,l,c,u,h,d,f,p,g,v,R,M,J,Z,X,ee,ct,te,ht,ne,C;return M=new qo({props:{$$slots:{default:[Ju,({maxWidth:y,maxHeight:S})=>({7:y,8:S}),({maxWidth:y,maxHeight:S})=>(y?128:0)|(S?256:0)]},$$scope:{ctx:n}}}),ee=new Ui({props:{tool:n[2],selected:n[1].type===n[2].type}}),ee.$on("tool",n[5]),te=new Ui({props:{tool:n[3],selected:n[1].type===n[3].type}}),te.$on("tool",n[5]),ne=new Gu({props:{colors:Ho,activeColor:n[0]}}),ne.$on("color",n[4]),{c(){e=F("div"),t=F("header"),s=F("div"),i=F("h1"),r=ce("PixelPals"),o=ae(),a=F("h3"),l=ce("A collaborative pixel canvas"),c=ae(),u=F("div"),h=F("p"),d=ce("Made by "),f=F("a"),p=ce("eternalthinker"),g=ae(),v=F("main"),R=F("div"),ke(M.$$.fragment),J=ae(),Z=F("div"),X=F("section"),ke(ee.$$.fragment),ct=ae(),ke(te.$$.fragment),ht=ae(),ke(ne.$$.fragment),this.h()},l(y){e=L(y,"DIV",{class:!0});var S=B(e);t=L(S,"HEADER",{class:!0});var G=B(t);s=L(G,"DIV",{class:!0});var j=B(s);i=L(j,"H1",{class:!0});var Ne=B(i);r=he(Ne,"PixelPals"),Ne.forEach(A),o=le(j),a=L(j,"H3",{class:!0});var ut=B(a);l=he(ut,"A collaborative pixel canvas"),ut.forEach(A),j.forEach(A),c=le(G),u=L(G,"DIV",{class:!0});var Ws=B(u);h=L(Ws,"P",{class:!0});var Sn=B(h);d=he(Sn,"Made by "),f=L(Sn,"A",{class:!0,href:!0,target:!0});var Us=B(f);p=he(Us,"eternalthinker"),Us.forEach(A),Sn.forEach(A),Ws.forEach(A),G.forEach(A),g=le(S),v=L(S,"MAIN",{class:!0});var Bt=B(v);R=L(Bt,"DIV",{class:!0});var Hs=B(R);xe(M.$$.fragment,Hs),Hs.forEach(A),J=le(Bt),Z=L(Bt,"DIV",{class:!0});var Wt=B(Z);X=L(Wt,"SECTION",{class:!0});var Ut=B(X);xe(ee.$$.fragment,Ut),ct=le(Ut),xe(te.$$.fragment,Ut),Ut.forEach(A),ht=le(Wt),xe(ne.$$.fragment,Wt),Wt.forEach(A),Bt.forEach(A),S.forEach(A),this.h()},h(){E(i,"class","font-display text-4xl font-bold text-white"),E(a,"class","hidden pt-2 font-body text-lg text-white md:block"),E(s,"class","flex flex-grow items-center gap-4"),E(f,"class","underline hover:text-teal-400"),E(f,"href","https://github.com/eternalthinker"),E(f,"target","_blank"),E(h,"class","pt-2 font-body text-sm text-gray-100"),E(u,"class","flex-shrink"),E(t,"class","flex items-center justify-evenly gap-4 bg-gray-800 px-8 py-2"),E(R,"class","canvasBackground col-span-5"),E(X,"class","flex flex-wrap justify-center gap-2 rounded bg-white p-2"),E(Z,"class","sideBar flex flex-col justify-center gap-4 p-4"),E(v,"class","box-border grid h-full overflow-scroll px-10 md:grid-cols-6"),E(e,"class","flex h-full flex-col bg-gray-500")},m(y,S){Ie(y,e,S),T(e,t),T(t,s),T(s,i),T(i,r),T(s,o),T(s,a),T(a,l),T(t,c),T(t,u),T(u,h),T(h,d),T(h,f),T(f,p),T(e,g),T(e,v),T(v,R),De(M,R,null),T(v,J),T(v,Z),T(Z,X),De(ee,X,null),T(X,ct),De(te,X,null),T(Z,ht),De(ne,Z,null),C=!0},p(y,[S]){const G={};S&2435&&(G.$$scope={dirty:S,ctx:y}),M.$set(G);const j={};S&2&&(j.selected=y[1].type===y[2].type),ee.$set(j);const Ne={};S&2&&(Ne.selected=y[1].type===y[3].type),te.$set(Ne);const ut={};S&1&&(ut.activeColor=y[0]),ne.$set(ut)},i(y){C||(fe(M.$$.fragment,y),fe(ee.$$.fragment,y),fe(te.$$.fragment,y),fe(ne.$$.fragment,y),C=!0)},o(y){_e(M.$$.fragment,y),_e(ee.$$.fragment,y),_e(te.$$.fragment,y),_e(ne.$$.fragment,y),C=!1},d(y){y&&A(e),Pe(M),Pe(ee),Pe(te),Pe(ne)}}}function ed(n,e,t){let s="#ff0000";const i=new Yu,r=u=>t(0,s=u),o=new Qu(r);let a=i;return[s,a,i,o,({detail:u})=>{t(0,s=u.color)},({detail:u})=>{t(1,a=u.tool)}]}class sd extends tt{constructor(e){super(),nt(this,e,ed,Zu,st,{})}}export{sd as component};
