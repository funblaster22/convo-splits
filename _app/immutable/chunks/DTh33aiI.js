var jn=Array.isArray,nn=Array.prototype.indexOf,Bn=Array.from,Un=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,rn=Object.getOwnPropertyDescriptors,Vn=Object.prototype,Gn=Array.prototype,en=Object.getPrototypeOf;const $n=()=>{};function Kn(t){return t()}function Tt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,gt=4,j=8,it=16,D=32,B=64,$=128,m=256,K=512,p=1024,R=2048,P=4096,b=8192,tt=16384,sn=32768,At=65536,Zn=1<<17,ln=1<<19,kt=1<<20,dt=Symbol("$state"),zn=Symbol("legacy props"),Wn=Symbol("");function Dt(t){return t===this.v}function an(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function It(t){return!an(t,this.v)}function un(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function on(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function fn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function _n(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Xn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Jn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Qn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function tr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function vn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let nt=!1;function nr(){nt=!0}const rr=1,er=2,sr=4,lr=8,ar=16,ur=1,or=2,fr=4,ir=8,_r=16,cr=1,vr=2,pn="[",hn="[!",dn="]",Rt={},pr=Symbol();function St(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let i=null;function Et(t){i=t}function hr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},nt&&!n&&(i.l={s:null,u:null,r1:[],r2:_t(!1)})}function dr(t){const n=i;if(n!==null){const a=n.e;if(a!==null){var r=f,e=u;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];X(l.effect),W(l.reaction),Lt(l.fn)}}finally{X(r),W(e)}}i=n.p,n.m=!0}return{}}function rt(){return!nt||i!==null&&i.l===null}function _t(t,n){var r={f:0,v:t,reactions:null,equals:Dt,rv:0,wv:0};return r}function Er(t){return xt(_t(t))}function En(t,n=!1){var e;const r=_t(t);return n||(r.equals=It),nt&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function yr(t,n=!1){return xt(En(t,n))}function xt(t){return u!==null&&!A&&u.f&y&&(w===null?Nn([t]):w.push(t)),t}function wr(t,n){return yn(t,Yn(()=>tn(t))),n}function yn(t,n){return u!==null&&!A&&rt()&&u.f&(y|it)&&(w===null||!w.includes(t))&&vn(),wn(t,n)}function wn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Kt(),Ot(t,R),rt()&&f!==null&&f.f&p&&!(f.f&(D|B))&&(g===null?bn([t]):g.push(t))),n}function Ot(t,n){var r=t.reactions;if(r!==null)for(var e=rt(),s=r.length,l=0;l<s;l++){var a=r[l],_=a.f;_&R||!e&&a===f||(T(a,n),_&(p|m)&&(_&y?Ot(a,P):st(a)))}}let q=!1;function mr(t){q=t}let k;function M(t){if(t===null)throw St(),Rt;return k=t}function Tr(){return M(F(k))}function gr(t){if(q){if(F(k)!==null)throw St(),Rt;k=t}}function Ar(){for(var t=0,n=k;;){if(n.nodeType===8){var r=n.data;if(r===dn){if(t===0)return n;t-=1}else(r===pn||r===hn)&&(t+=1)}var e=F(n);n.remove(),n=e}}var yt,mn,Ct,Nt;function kr(){if(yt===void 0){yt=window,mn=document;var t=Element.prototype,n=Node.prototype;Ct=ht(n,"firstChild").get,Nt=ht(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function lt(t=""){return document.createTextNode(t)}function at(t){return Ct.call(t)}function F(t){return Nt.call(t)}function Dr(t,n){if(!q)return at(t);var r=at(k);if(r===null)r=k.appendChild(lt());else if(n&&r.nodeType!==3){var e=lt();return r==null||r.before(e),M(e),e}return M(r),r}function Ir(t,n){if(!q){var r=at(t);return r instanceof Comment&&r.data===""?F(r):r}return k}function Rr(t,n=1,r=!1){let e=q?k:t;for(var s;n--;)s=e,e=F(e);if(!q)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=lt();return e===null?s==null||s.after(a):e.before(a),M(a),a}return M(e),e}function Sr(t){t.textContent=""}function bt(t){var n=y|R,r=u!==null&&u.f&y?u:null;return f===null||r!==null&&r.f&m?n|=m:f.f|=kt,{ctx:i,deps:null,effects:null,equals:Dt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function xr(t){const n=bt(t);return n.equals=It,n}function qt(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)x(n[r])}}function Tn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function gn(t){var n,r=f;X(Tn(t));try{qt(t),n=zt(t)}finally{X(r)}return n}function Pt(t){var n=gn(t),r=(I||t.f&m)&&t.deps!==null?P:p;T(t,r),t.equals(n)||(t.v=n,t.wv=Kt())}function Ft(t){f===null&&u===null&&fn(),u!==null&&u.f&m&&f===null&&on(),ct&&un()}function An(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function L(t,n,r,e=!0){var s=(t&B)!==0,l=f,a={ctx:i,deps:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,wv:0};if(r){var _=C;try{wt(!0),vt(a),a.f|=sn}catch(O){throw x(a),O}finally{wt(_)}}else n!==null&&st(a);var E=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(kt|$))===0;if(!E&&!s&&e&&(l!==null&&An(a,l),u!==null&&u.f&y)){var c=u;(c.effects??(c.effects=[])).push(a)}return a}function Or(t){const n=L(j,null,!1);return T(n,p),n.teardown=t,n}function Cr(t){Ft();var n=f!==null&&(f.f&D)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Lt(t);return e}}function Nr(t){return Ft(),kn(t)}function br(t){const n=L(B,t,!0);return(r={})=>new Promise(e=>{r.outro?Rn(n,()=>{x(n),e(void 0)}):(x(n),e(void 0))})}function Lt(t){return L(gt,t,!1)}function kn(t){return L(j,t,!0)}function qr(t,n=[],r=bt){const e=n.map(r);return Dn(()=>t(...e.map(tn)))}function Dn(t,n=0){return L(j|it|n,t,!0)}function Pr(t,n=!0){return L(j|D,t,!0,n)}function Mt(t){var n=t.teardown;if(n!==null){const r=ct,e=u;mt(!0),W(null);try{n.call(null)}finally{mt(r),W(e)}}}function Yt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;x(r,n),r=e}}function In(t){for(var n=t.first;n!==null;){var r=n.next;n.f&D||x(n),n=r}}function x(t,n=!0){var r=!1;if((n||t.f&ln)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:F(e);e.remove(),e=l}r=!0}Yt(t,n&&!r),Q(t,0),T(t,tt);var a=t.transitions;if(a!==null)for(const E of a)E.stop();Mt(t);var _=t.parent;_!==null&&_.first!==null&&Ht(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ht(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Rn(t,n){var r=[];jt(t,r,!0),Sn(r,()=>{x(t),n&&n()})}function Sn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function jt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&At)!==0||(e.f&D)!==0;jt(e,n,l?r:!1),e=s}}}function Fr(t){Bt(t,!0)}function Bt(t,n){if(t.f&b){t.f^=b,t.f&p||(t.f^=p),U(t)&&(T(t,R),st(t));for(var r=t.first;r!==null;){var e=r.next,s=(r.f&At)!==0||(r.f&D)!==0;Bt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const xn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let Z=!1,z=!1,ut=[],ot=[];function Ut(){Z=!1;const t=ut.slice();ut=[],Tt(t)}function Vt(){z=!1;const t=ot.slice();ot=[],Tt(t)}function Lr(t){Z||(Z=!0,queueMicrotask(Ut)),ut.push(t)}function Mr(t){z||(z=!0,xn(Vt)),ot.push(t)}function On(){Z&&Ut(),z&&Vt()}const Gt=0,Cn=1;let V=!1,G=Gt,Y=!1,H=null,C=!1,ct=!1;function wt(t){C=t}function mt(t){ct=t}let S=[],N=0;let u=null,A=!1;function W(t){u=t}let f=null;function X(t){f=t}let w=null;function Nn(t){w=t}let v=null,d=0,g=null;function bn(t){g=t}let $t=1,J=0,I=!1;function Kt(){return++$t}function U(t){var c;var n=t.f;if(n&R)return!0;if(n&P){var r=t.deps,e=(n&m)!==0;if(r!==null){var s,l,a=(n&K)!==0,_=e&&f!==null&&!I,E=r.length;if(a||_){for(s=0;s<E;s++)l=r[s],(a||!((c=l==null?void 0:l.reactions)!=null&&c.includes(t)))&&(l.reactions??(l.reactions=[])).push(t);a&&(t.f^=K)}for(s=0;s<E;s++)if(l=r[s],U(l)&&Pt(l),l.wv>t.wv)return!0}(!e||f!==null&&!I)&&T(t,p)}return!1}function qn(t,n){for(var r=n;r!==null;){if(r.f&$)try{r.fn(t);return}catch{r.f^=$}r=r.parent}throw V=!1,t}function Pn(t){return(t.f&tt)===0&&(t.parent===null||(t.parent.f&$)===0)}function et(t,n,r,e){if(V){if(r===null&&(V=!1),Pn(n))throw t;return}r!==null&&(V=!0);{qn(t,n);return}}function Zt(t,n,r=0){var e=t.reactions;if(e!==null)for(var s=0;s<e.length;s++){var l=e[s];l.f&y?Zt(l,n,r+1):n===l&&(r===0?T(l,R):l.f&p&&T(l,P),st(l))}}function zt(t){var pt;var n=v,r=d,e=g,s=u,l=I,a=w,_=i,E=A,c=t.f;v=null,d=0,g=null,u=c&(D|B)?null:t,I=(c&m)!==0&&(!C||s===null||E),w=null,Et(t.ctx),A=!1,J++;try{var O=(0,t.fn)(),h=t.deps;if(v!==null){var o;if(Q(t,d),h!==null&&d>0)for(h.length=d+v.length,o=0;o<v.length;o++)h[d+o]=v[o];else t.deps=h=v;if(!I)for(o=d;o<h.length;o++)((pt=h[o]).reactions??(pt.reactions=[])).push(t)}else h!==null&&d<h.length&&(Q(t,d),h.length=d);if(rt()&&g!==null&&!(t.f&(y|P|R)))for(o=0;o<g.length;o++)Zt(g[o],t);return s!==null&&J++,O}finally{v=n,d=r,g=e,u=s,I=l,w=a,Et(_),A=E}}function Fn(t,n){let r=n.reactions;if(r!==null){var e=nn.call(r,t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(T(n,P),n.f&(m|K)||(n.f^=K),qt(n),Q(n,0))}function Q(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Fn(t,r[e])}function vt(t){var n=t.f;if(!(n&tt)){T(t,p);var r=f,e=i;f=t;try{n&it?In(t):Yt(t),Mt(t);var s=zt(t);t.teardown=typeof s=="function"?s:null,t.wv=$t;var l=t.deps,a}catch(_){et(_,t,r,e||t.ctx)}finally{f=r}}}function Wt(){if(N>1e3){N=0;try{_n()}catch(t){if(H!==null)et(t,H,null);else throw t}}N++}function Xt(t){var n=t.length;if(n!==0){Wt();var r=C;C=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];Jt(s,l),Ln(l)}}finally{C=r}}}function Ln(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(tt|b)))try{U(e)&&(vt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ht(e):e.fn=null))}catch(s){et(s,e,null,e.ctx)}}}function Mn(){if(Y=!1,N>1001)return;const t=S;S=[],Xt(t),Y||(N=0,H=null)}function st(t){G===Gt&&(Y||(Y=!0,queueMicrotask(Mn))),H=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(B|D)){if(!(r&p))return;n.f^=p}}S.push(n)}function Jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&D)!==0,a=l&&(s&p)!==0,_=r.next;if(!a&&!(s&b))if(s&j){if(l)r.f^=p;else{var E=u;try{u=r,U(r)&&vt(r)}catch(o){et(o,r,null,r.ctx)}finally{u=E}}var c=r.first;if(c!==null){r=c;continue}}else s&gt&&e.push(r);if(_===null){let o=r.parent;for(;o!==null;){if(t===o)break t;var O=o.next;if(O!==null){r=O;continue t}o=o.parent}}r=_}for(var h=0;h<e.length;h++)c=e[h],n.push(c),Jt(c,n)}function Qt(t){var n=G,r=S;try{Wt();const s=[];G=Cn,S=s,Y=!1,Xt(r);var e=t==null?void 0:t();return On(),(S.length>0||s.length>0)&&Qt(),N=0,H=null,e}finally{G=n,S=r}}async function Yr(){await Promise.resolve(),Qt()}function tn(t){var n=t.f,r=(n&y)!==0;if(u!==null&&!A){w!==null&&w.includes(t)&&cn();var e=u.deps;t.rv<J&&(t.rv=J,v===null&&e!==null&&e[d]===t?d++:v===null?v=[t]:(!I||!v.includes(t))&&v.push(t))}else if(r&&t.deps===null&&t.effects===null){var s=t,l=s.parent;l!==null&&!(l.f&m)&&(s.f^=m)}return r&&(s=t,U(s)&&Pt(s)),t.v}function Yn(t){var n=A;try{return A=!0,t()}finally{A=n}}const Hn=-7169;function T(t,n){t.f=t.f&Hn|n}function Hr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(dt in t)ft(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&dt in r&&ft(r)}}}function ft(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ft(t[e],n)}catch{}const r=en(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=rn(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{yt as $,an as A,hr as B,Ir as C,qr as D,At as E,dr as F,Dr as G,hn as H,gr as I,Rr as J,x as K,Mr as L,Wn as M,kn as N,yr as O,wr as P,mn as Q,xr as R,lt as S,at as T,pr as U,f as V,cr as W,vr as X,W as Y,X as Z,u as _,Yn as a,Lr as a0,jn as a1,kr as a2,pn as a3,F as a4,Rt as a5,dn as a6,St as a7,Xn as a8,Sr as a9,or as aA,D as aB,B as aC,ur as aD,_r as aE,Qt as aF,Er as aG,Yr as aH,Bn as aa,br as ab,sr as ac,b as ad,rr as ae,wn as af,er as ag,_t as ah,lr as ai,jt as aj,Sn as ak,ar as al,dt as am,Vn as an,Gn as ao,tr as ap,ht as aq,Qn as ar,en as as,Lt as at,Jn as au,Zn as av,fr as aw,It as ax,ir as ay,zn as az,Tr as b,i as c,Dn as d,mr as e,Fr as f,Pr as g,q as h,k as i,Un as j,tn as k,nt as l,En as m,$n as n,yn as o,Rn as p,Nr as q,Ar as r,M as s,Or as t,Cr as u,Tt as v,Kn as w,Hr as x,bt as y,nr as z};
