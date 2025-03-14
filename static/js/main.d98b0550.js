/*! For license information please see main.d98b0550.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:u,ref:c,props:o,_owner:s.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}function y(){}function x(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var b=x.prototype=new y;b.constructor=x,m(b,v.prototype),b.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,k={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,i)&&!E.hasOwnProperty(i)&&(o[i]=t[i]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===o[i]&&(o[i]=l[i]);return{$$typeof:n,type:e,key:a,ref:s,props:o,_owner:k.current}}function P(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===o?"."+T(l,0):o,w(a)?(i="",null!=e&&(i=e.replace(j,"$&/")+"/"),_(a,t,i,"",(function(e){return e}))):null!=a&&(P(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(j,"$&/")+"/")+e)),t.push(a)),1;if(l=0,o=""===o?".":o+":",w(e))for(var u=0;u<e.length;u++){var c=o+T(s=e[u],u);l+=_(s,t,i,c,a)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)l+=_(s=s.value,t,i,c=o+T(s,u++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function L(e,t,n){if(null==e)return e;var r=[],i=0;return _(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var A={current:null},z={transition:null},M={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:z,ReactCurrentOwner:k};function O(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:L,forEach:function(e,t,n){L(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return L(e,(function(){t++})),t},toArray:function(e){return L(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=a,t.PureComponent=x,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M,t.act=O,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=m({},e.props),o=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=k.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)S.call(t,u)&&!E.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];i.children=l}return{$$typeof:n,type:e.type,key:o,ref:a,props:i,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=z.transition;z.transition={};try{e()}finally{z.transition=t}},t.unstable_act=O,t.useCallback=function(e,t){return A.current.useCallback(e,t)},t.useContext=function(e){return A.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return A.current.useDeferredValue(e)},t.useEffect=function(e,t){return A.current.useEffect(e,t)},t.useId=function(){return A.current.useId()},t.useImperativeHandle=function(e,t,n){return A.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return A.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return A.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return A.current.useMemo(e,t)},t.useReducer=function(e,t,n){return A.current.useReducer(e,t,n)},t.useRef=function(e){return A.current.useRef(e)},t.useState=function(e){return A.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return A.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return A.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<o(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,a=i>>>1;r<a;){var s=2*(r+1)-1,l=e[s],u=s+1,c=e[u];if(0>o(l,n))u<i&&0>o(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[s]=n,r=s);else{if(!(u<i&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var u=[],c=[],d=1,f=null,h=3,p=!1,m=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(c);null!==t;){if(null===t.callback)i(c);else{if(!(t.startTime<=e))break;i(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(g=!1,b(e),!m)if(null!==r(u))m=!0,z(S);else{var t=r(c);null!==t&&M(w,t.startTime-e)}}function S(e,n){m=!1,g&&(g=!1,y(P),P=-1),p=!0;var o=h;try{for(b(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!_());){var a=f.callback;if("function"===typeof a){f.callback=null,h=f.priorityLevel;var s=a(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof s?f.callback=s:f===r(u)&&i(u),b(n)}else i(u);f=r(u)}if(null!==f)var l=!0;else{var d=r(c);null!==d&&M(w,d.startTime-n),l=!1}return l}finally{f=null,h=o,p=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,E=!1,C=null,P=-1,j=5,T=-1;function _(){return!(t.unstable_now()-T<j)}function L(){if(null!==C){var e=t.unstable_now();T=e;var n=!0;try{n=C(!0,e)}finally{n?k():(E=!1,C=null)}}else E=!1}if("function"===typeof x)k=function(){x(L)};else if("undefined"!==typeof MessageChannel){var R=new MessageChannel,A=R.port2;R.port1.onmessage=L,k=function(){A.postMessage(null)}}else k=function(){v(L,0)};function z(e){C=e,E||(E=!0,k())}function M(e,n){P=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,z(S))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,i,o){var a=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?a+o:a:o=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:o,expirationTime:s=o+s,sortIndex:-1},o>a?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(g?(y(P),P=-1):g=!0,M(w,o-a))):(e.sortIndex=s,n(u,e),m||p||(m=!0,z(S))),e},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var u=o[l];if(!s(u))return!1;var c=e[u],d=t[u];if(!1===(i=n?n.call(r,c,d,u):void 0)||void 0===i&&c!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),i=n(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(s[e]=t,e=0;e<t.length;e++)a.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,h={},p={};function m(e,t,n,r,i,o,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new m(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new m(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new m(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new m(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new m(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function x(e,t,n,r){var i=g.hasOwnProperty(t)?g[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!d.call(p,e)||!d.call(h,e)&&(f.test(e)?p[e]=!0:(h[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),S=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),j=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),A=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var z=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var M=Symbol.iterator;function O(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=M&&e[M]||e["@@iterator"])?e:null}var N,D=Object.assign;function $(e){if(void 0===N)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);N=t&&t[1]||""}return"\n"+N+e}var V=!1;function I(e,t){if(!e||V)return"";V=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var i=u.stack.split("\n"),o=r.stack.split("\n"),a=i.length-1,s=o.length-1;1<=a&&0<=s&&i[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(i[a]!==o[s]){if(1!==a||1!==s)do{if(a--,0>--s||i[a]!==o[s]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=s);break}}}finally{V=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?$(e):""}function F(e){switch(e.tag){case 5:return $(e.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return e=I(e.type,!1);case 11:return e=I(e.type.render,!1);case 1:return e=I(e.type,!0);default:return""}}function B(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case k:return"Fragment";case S:return"Portal";case C:return"Profiler";case E:return"StrictMode";case _:return"Suspense";case L:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case j:return(e.displayName||"Context")+".Consumer";case P:return(e._context.displayName||"Context")+".Provider";case T:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case R:return null!==(t=e.displayName||null)?t:B(e.type)||"Memo";case A:t=e._payload,e=e._init;try{return B(e(t))}catch(n){}}return null}function U(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return B(t);case 8:return t===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function W(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Y(e){e._valueTracker||(e._valueTracker=function(e){var t=W(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=W(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function G(e,t){var n=t.checked;return D({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&x(e,"checked",t,!1)}function J(e,t){X(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Z(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return D({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ie(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function oe(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ae(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function le(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?se(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var he={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},pe=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||he.hasOwnProperty(e)&&he[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(he).forEach((function(e){pe.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),he[t]=he[e]}))}));var ve=D({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function xe(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Se=null,ke=null,Ee=null;function Ce(e){if(e=xi(e)){if("function"!==typeof Se)throw Error(o(280));var t=e.stateNode;t&&(t=wi(t),Se(e.stateNode,e.type,t))}}function Pe(e){ke?Ee?Ee.push(e):Ee=[e]:ke=e}function je(){if(ke){var e=ke,t=Ee;if(Ee=ke=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function Te(e,t){return e(t)}function _e(){}var Le=!1;function Re(e,t,n){if(Le)return e(t,n);Le=!0;try{return Te(e,t,n)}finally{Le=!1,(null!==ke||null!==Ee)&&(_e(),je())}}function Ae(e,t){var n=e.stateNode;if(null===n)return null;var r=wi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var ze=!1;if(c)try{var Me={};Object.defineProperty(Me,"passive",{get:function(){ze=!0}}),window.addEventListener("test",Me,Me),window.removeEventListener("test",Me,Me)}catch(ce){ze=!1}function Oe(e,t,n,r,i,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ne=!1,De=null,$e=!1,Ve=null,Ie={onError:function(e){Ne=!0,De=e}};function Fe(e,t,n,r,i,o,a,s,l){Ne=!1,De=null,Oe.apply(Ie,arguments)}function Be(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ue(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(Be(e)!==e)throw Error(o(188))}function We(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Be(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return He(i),e;if(a===r)return He(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=a;break}if(l===r){s=!0,r=i,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=i;break}if(l===r){s=!0,r=a,n=i;break}l=l.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Ye(e):null}function Ye(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ye(e);if(null!==t)return t;e=e.sibling}return null}var Ke=i.unstable_scheduleCallback,Qe=i.unstable_cancelCallback,Ge=i.unstable_shouldYield,qe=i.unstable_requestPaint,Xe=i.unstable_now,Je=i.unstable_getCurrentPriorityLevel,Ze=i.unstable_ImmediatePriority,et=i.unstable_UserBlockingPriority,tt=i.unstable_NormalPriority,nt=i.unstable_LowPriority,rt=i.unstable_IdlePriority,it=null,ot=null;var at=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(st(e)/lt|0)|0},st=Math.log,lt=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=268435455&n;if(0!==a){var s=a&~i;0!==s?r=dt(s):0!==(o&=a)&&(r=dt(o))}else 0!==(a=n&~i)?r=dt(a):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(o=t&-t)||16===i&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-at(t)),r|=e[n],t&=~i;return r}function ht(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function pt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-at(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-at(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var xt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,St,kt,Et,Ct,Pt=!1,jt=[],Tt=null,_t=null,Lt=null,Rt=new Map,At=new Map,zt=[],Mt="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ot(e,t){switch(e){case"focusin":case"focusout":Tt=null;break;case"dragenter":case"dragleave":_t=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":Rt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":At.delete(t.pointerId)}}function Nt(e,t,n,r,i,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},null!==t&&(null!==(t=xi(t))&&St(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Dt(e){var t=yi(e.target);if(null!==t){var n=Be(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ue(n)))return e.blockedOn=t,void Ct(e.priority,(function(){kt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function $t(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xi(n))&&St(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function Vt(e,t,n){$t(e)&&n.delete(t)}function It(){Pt=!1,null!==Tt&&$t(Tt)&&(Tt=null),null!==_t&&$t(_t)&&(_t=null),null!==Lt&&$t(Lt)&&(Lt=null),Rt.forEach(Vt),At.forEach(Vt)}function Ft(e,t){e.blockedOn===t&&(e.blockedOn=null,Pt||(Pt=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,It)))}function Bt(e){function t(t){return Ft(t,e)}if(0<jt.length){Ft(jt[0],e);for(var n=1;n<jt.length;n++){var r=jt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Tt&&Ft(Tt,e),null!==_t&&Ft(_t,e),null!==Lt&&Ft(Lt,e),Rt.forEach(t),At.forEach(t),n=0;n<zt.length;n++)(r=zt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&null===(n=zt[0]).blockedOn;)Dt(n),null===n.blockedOn&&zt.shift()}var Ut=b.ReactCurrentBatchConfig,Ht=!0;function Wt(e,t,n,r){var i=xt,o=Ut.transition;Ut.transition=null;try{xt=1,Kt(e,t,n,r)}finally{xt=i,Ut.transition=o}}function Yt(e,t,n,r){var i=xt,o=Ut.transition;Ut.transition=null;try{xt=4,Kt(e,t,n,r)}finally{xt=i,Ut.transition=o}}function Kt(e,t,n,r){if(Ht){var i=Gt(e,t,n,r);if(null===i)Hr(e,t,r,Qt,n),Ot(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return Tt=Nt(Tt,e,t,n,r,i),!0;case"dragenter":return _t=Nt(_t,e,t,n,r,i),!0;case"mouseover":return Lt=Nt(Lt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Rt.set(o,Nt(Rt.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,At.set(o,Nt(At.get(o)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(Ot(e,r),4&t&&-1<Mt.indexOf(e)){for(;null!==i;){var o=xi(i);if(null!==o&&wt(o),null===(o=Gt(e,t,n,r))&&Hr(e,t,r,Qt,n),o===i)break;i=o}null!==i&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Qt=null;function Gt(e,t,n,r){if(Qt=null,null!==(e=yi(e=we(r))))if(null===(t=Be(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ue(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qt=e,null}function qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Je()){case Ze:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Jt=null,Zt=null;function en(){if(Zt)return Zt;var e,t,n=Jt,r=n.length,i="value"in Xt?Xt.value:Xt.textContent,o=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[o-t];t++);return Zt=i.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function on(e){function t(t,n,r,i,o){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return D(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var an,sn,ln,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=on(un),dn=D({},un,{view:0,detail:0}),fn=on(dn),hn=D({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ln&&(ln&&"mousemove"===e.type?(an=e.screenX-ln.screenX,sn=e.screenY-ln.screenY):sn=an=0,ln=e),an)},movementY:function(e){return"movementY"in e?e.movementY:sn}}),pn=on(hn),mn=on(D({},hn,{dataTransfer:0})),gn=on(D({},dn,{relatedTarget:0})),vn=on(D({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=D({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xn=on(yn),bn=on(D({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function En(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=kn[e])&&!!t[e]}function Cn(){return En}var Pn=D({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?Sn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),jn=on(Pn),Tn=on(D({},hn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),_n=on(D({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),Ln=on(D({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Rn=D({},hn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),An=on(Rn),zn=[9,13,27,32],Mn=c&&"CompositionEvent"in window,On=null;c&&"documentMode"in document&&(On=document.documentMode);var Nn=c&&"TextEvent"in window&&!On,Dn=c&&(!Mn||On&&8<On&&11>=On),$n=String.fromCharCode(32),Vn=!1;function In(e,t){switch(e){case"keyup":return-1!==zn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Bn=!1;var Un={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Un[e.type]:"textarea"===t}function Wn(e,t,n,r){Pe(r),0<(t=Yr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yn=null,Kn=null;function Qn(e){$r(e,0)}function Gn(e){if(K(bi(e)))return e}function qn(e,t){if("change"===e)return t}var Xn=!1;if(c){var Jn;if(c){var Zn="oninput"in document;if(!Zn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Zn="function"===typeof er.oninput}Jn=Zn}else Jn=!1;Xn=Jn&&(!document.documentMode||9<document.documentMode)}function tr(){Yn&&(Yn.detachEvent("onpropertychange",nr),Kn=Yn=null)}function nr(e){if("value"===e.propertyName&&Gn(Kn)){var t=[];Wn(t,Kn,e,we(e)),Re(Qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Yn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ir(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gn(Kn)}function or(e,t){if("click"===e)return Gn(t)}function ar(e,t){if("input"===e||"change"===e)return Gn(t)}var sr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function lr(e,t){if(sr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!d.call(t,i)||!sr(e[i],t[i]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=Q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Q((e=t.contentWindow).document)}return t}function hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function pr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&hr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=void 0===r.end?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=cr(n,o);var a=cr(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,xr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;xr||null==gr||gr!==Q(r)||("selectionStart"in(r=gr)&&hr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&lr(yr,r)||(yr=r,0<(r=Yr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},kr={},Er={};function Cr(e){if(kr[e])return kr[e];if(!Sr[e])return e;var t,n=Sr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Er)return kr[e]=n[t];return e}c&&(Er=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);var Pr=Cr("animationend"),jr=Cr("animationiteration"),Tr=Cr("animationstart"),_r=Cr("transitionend"),Lr=new Map,Rr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(e,t){Lr.set(e,t),l(t,[e])}for(var zr=0;zr<Rr.length;zr++){var Mr=Rr[zr];Ar(Mr.toLowerCase(),"on"+(Mr[0].toUpperCase()+Mr.slice(1)))}Ar(Pr,"onAnimationEnd"),Ar(jr,"onAnimationIteration"),Ar(Tr,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(_r,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Or="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));function Dr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,a,s,l,u){if(Fe.apply(this,arguments),Ne){if(!Ne)throw Error(o(198));var c=De;Ne=!1,De=null,$e||($e=!0,Ve=c)}}(r,t,void 0,e),e.currentTarget=null}function $r(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&i.isPropagationStopped())break e;Dr(i,s,u),o=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,u=s.currentTarget,s=s.listener,l!==o&&i.isPropagationStopped())break e;Dr(i,s,u),o=l}}}if($e)throw e=Ve,$e=!1,Ve=null,e}function Vr(e,t){var n=t[mi];void 0===n&&(n=t[mi]=new Set);var r=e+"__bubble";n.has(r)||(Ur(t,e,2,!1),n.add(r))}function Ir(e,t,n){var r=0;t&&(r|=4),Ur(n,e,r,t)}var Fr="_reactListening"+Math.random().toString(36).slice(2);function Br(e){if(!e[Fr]){e[Fr]=!0,a.forEach((function(t){"selectionchange"!==t&&(Nr.has(t)||Ir(t,!1,e),Ir(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Fr]||(t[Fr]=!0,Ir("selectionchange",!1,t))}}function Ur(e,t,n,r){switch(qt(t)){case 1:var i=Wt;break;case 4:i=Yt;break;default:i=Kt}n=i.bind(null,t,n,e),i=void 0,!ze||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,i){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===i||8===s.nodeType&&s.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==s;){if(null===(a=yi(s)))return;if(5===(l=a.tag)||6===l){r=o=a;continue e}s=s.parentNode}}r=r.return}Re((function(){var r=o,i=we(n),a=[];e:{var s=Lr.get(e);if(void 0!==s){var l=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":l=jn;break;case"focusin":u="focus",l=gn;break;case"focusout":u="blur",l=gn;break;case"beforeblur":case"afterblur":l=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=pn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=_n;break;case Pr:case jr:case Tr:l=vn;break;case _r:l=Ln;break;case"scroll":l=fn;break;case"wheel":l=An;break;case"copy":case"cut":case"paste":l=xn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Tn}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==s?s+"Capture":null:s;c=[];for(var h,p=r;null!==p;){var m=(h=p).stateNode;if(5===h.tag&&null!==m&&(h=m,null!==f&&(null!=(m=Ae(p,f))&&c.push(Wr(p,m,h)))),d)break;p=p.return}0<c.length&&(s=new l(s,u,null,n,i),a.push({event:s,listeners:c}))}}if(0===(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===be||!(u=n.relatedTarget||n.fromElement)||!yi(u)&&!u[pi])&&(l||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?yi(u):null)&&(u!==(d=Be(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=pn,m="onMouseLeave",f="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=Tn,m="onPointerLeave",f="onPointerEnter",p="pointer"),d=null==l?s:bi(l),h=null==u?s:bi(u),(s=new c(m,p+"leave",l,n,i)).target=d,s.relatedTarget=h,m=null,yi(i)===r&&((c=new c(f,p+"enter",u,n,i)).target=h,c.relatedTarget=d,m=c),d=m,l&&u)e:{for(f=u,p=0,h=c=l;h;h=Kr(h))p++;for(h=0,m=f;m;m=Kr(m))h++;for(;0<p-h;)c=Kr(c),p--;for(;0<h-p;)f=Kr(f),h--;for(;p--;){if(c===f||null!==f&&c===f.alternate)break e;c=Kr(c),f=Kr(f)}c=null}else c=null;null!==l&&Qr(a,s,l,c,!1),null!==u&&null!==d&&Qr(a,d,u,c,!0)}if("select"===(l=(s=r?bi(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===l&&"file"===s.type)var g=qn;else if(Hn(s))if(Xn)g=ar;else{g=ir;var v=rr}else(l=s.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===s.type||"radio"===s.type)&&(g=or);switch(g&&(g=g(e,r))?Wn(a,g,n,i):(v&&v(e,s,r),"focusout"===e&&(v=s._wrapperState)&&v.controlled&&"number"===s.type&&ee(s,"number",s.value)),v=r?bi(r):window,e){case"focusin":(Hn(v)||"true"===v.contentEditable)&&(gr=v,vr=r,yr=null);break;case"focusout":yr=vr=gr=null;break;case"mousedown":xr=!0;break;case"contextmenu":case"mouseup":case"dragend":xr=!1,br(a,n,i);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":br(a,n,i)}var y;if(Mn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Bn?In(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Dn&&"ko"!==n.locale&&(Bn||"onCompositionStart"!==x?"onCompositionEnd"===x&&Bn&&(y=en()):(Jt="value"in(Xt=i)?Xt.value:Xt.textContent,Bn=!0)),0<(v=Yr(r,x)).length&&(x=new bn(x,e,null,n,i),a.push({event:x,listeners:v}),y?x.data=y:null!==(y=Fn(n))&&(x.data=y))),(y=Nn?function(e,t){switch(e){case"compositionend":return Fn(t);case"keypress":return 32!==t.which?null:(Vn=!0,$n);case"textInput":return(e=t.data)===$n&&Vn?null:e;default:return null}}(e,n):function(e,t){if(Bn)return"compositionend"===e||!Mn&&In(e,t)?(e=en(),Zt=Jt=Xt=null,Bn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Yr(r,"onBeforeInput")).length&&(i=new bn("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=y))}$r(a,t)}))}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yr(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,o=i.stateNode;5===i.tag&&null!==o&&(i=o,null!=(o=Ae(e,n))&&r.unshift(Wr(e,o,i)),null!=(o=Ae(e,t))&&r.push(Wr(e,o,i))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Qr(e,t,n,r,i){for(var o=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(null!==l&&l===r)break;5===s.tag&&null!==u&&(s=u,i?null!=(l=Ae(n,o))&&a.unshift(Wr(n,l,s)):i||null!=(l=Ae(n,o))&&a.push(Wr(n,l,s))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Gr=/\r\n?/g,qr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(Gr,"\n").replace(qr,"")}function Jr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(o(425))}function Zr(){}var ei=null,ti=null;function ni(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ri="function"===typeof setTimeout?setTimeout:void 0,ii="function"===typeof clearTimeout?clearTimeout:void 0,oi="function"===typeof Promise?Promise:void 0,ai="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oi?function(e){return oi.resolve(null).then(e).catch(si)}:ri;function si(e){setTimeout((function(){throw e}))}function li(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void Bt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);Bt(t)}function ui(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ci(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),fi="__reactFiber$"+di,hi="__reactProps$"+di,pi="__reactContainer$"+di,mi="__reactEvents$"+di,gi="__reactListeners$"+di,vi="__reactHandles$"+di;function yi(e){var t=e[fi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pi]||n[fi]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ci(e);null!==e;){if(n=e[fi])return n;e=ci(e)}return t}n=(e=n).parentNode}return null}function xi(e){return!(e=e[fi]||e[pi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function bi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wi(e){return e[hi]||null}var Si=[],ki=-1;function Ei(e){return{current:e}}function Ci(e){0>ki||(e.current=Si[ki],Si[ki]=null,ki--)}function Pi(e,t){ki++,Si[ki]=e.current,e.current=t}var ji={},Ti=Ei(ji),_i=Ei(!1),Li=ji;function Ri(e,t){var n=e.type.contextTypes;if(!n)return ji;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,o={};for(i in n)o[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ai(e){return null!==(e=e.childContextTypes)&&void 0!==e}function zi(){Ci(_i),Ci(Ti)}function Mi(e,t,n){if(Ti.current!==ji)throw Error(o(168));Pi(Ti,t),Pi(_i,n)}function Oi(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(o(108,U(e)||"Unknown",i));return D({},n,r)}function Ni(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ji,Li=Ti.current,Pi(Ti,e),Pi(_i,_i.current),!0}function Di(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Oi(e,t,Li),r.__reactInternalMemoizedMergedChildContext=e,Ci(_i),Ci(Ti),Pi(Ti,e)):Ci(_i),Pi(_i,n)}var $i=null,Vi=!1,Ii=!1;function Fi(e){null===$i?$i=[e]:$i.push(e)}function Bi(){if(!Ii&&null!==$i){Ii=!0;var e=0,t=xt;try{var n=$i;for(xt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}$i=null,Vi=!1}catch(i){throw null!==$i&&($i=$i.slice(e+1)),Ke(Ze,Bi),i}finally{xt=t,Ii=!1}}return null}var Ui=[],Hi=0,Wi=null,Yi=0,Ki=[],Qi=0,Gi=null,qi=1,Xi="";function Ji(e,t){Ui[Hi++]=Yi,Ui[Hi++]=Wi,Wi=e,Yi=t}function Zi(e,t,n){Ki[Qi++]=qi,Ki[Qi++]=Xi,Ki[Qi++]=Gi,Gi=e;var r=qi;e=Xi;var i=32-at(r)-1;r&=~(1<<i),n+=1;var o=32-at(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,qi=1<<32-at(t)+i|n<<i|r,Xi=o+e}else qi=1<<o|n<<i|r,Xi=e}function eo(e){null!==e.return&&(Ji(e,1),Zi(e,1,0))}function to(e){for(;e===Wi;)Wi=Ui[--Hi],Ui[Hi]=null,Yi=Ui[--Hi],Ui[Hi]=null;for(;e===Gi;)Gi=Ki[--Qi],Ki[Qi]=null,Xi=Ki[--Qi],Ki[Qi]=null,qi=Ki[--Qi],Ki[Qi]=null}var no=null,ro=null,io=!1,oo=null;function ao(e,t){var n=Ru(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function so(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ui(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Gi?{id:qi,overflow:Xi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Ru(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function lo(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function uo(e){if(io){var t=ro;if(t){var n=t;if(!so(e,t)){if(lo(e))throw Error(o(418));t=ui(n.nextSibling);var r=no;t&&so(e,t)?ao(r,n):(e.flags=-4097&e.flags|2,io=!1,no=e)}}else{if(lo(e))throw Error(o(418));e.flags=-4097&e.flags|2,io=!1,no=e}}}function co(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function fo(e){if(e!==no)return!1;if(!io)return co(e),io=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ni(e.type,e.memoizedProps)),t&&(t=ro)){if(lo(e))throw ho(),Error(o(418));for(;t;)ao(e,t),t=ui(t.nextSibling)}if(co(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ui(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ui(e.stateNode.nextSibling):null;return!0}function ho(){for(var e=ro;e;)e=ui(e.nextSibling)}function po(){ro=no=null,io=!1}function mo(e){null===oo?oo=[e]:oo.push(e)}var go=b.ReactCurrentBatchConfig;function vo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var i=r,a=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===a?t.ref:(t=function(e){var t=i.refs;null===e?delete t[a]:t[a]=e},t._stringRef=a,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xo(e){return(0,e._init)(e._payload)}function bo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=zu(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Du(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===k?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===A&&xo(o)===t.type)?((r=i(t,n.props)).ref=vo(e,t,n),r.return=e,r):((r=Mu(n.type,n.key,n.props,null,e.mode,r)).ref=vo(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=$u(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Ou(n,e.mode,r,o)).return=e,t):((t=i(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Du(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Mu(t.type,t.key,t.props,null,e.mode,n)).ref=vo(e,null,t),n.return=e,n;case S:return(t=$u(t,e.mode,n)).return=e,t;case A:return f(e,(0,t._init)(t._payload),n)}if(te(t)||O(t))return(t=Ou(t,e.mode,n,null)).return=e,t;yo(e,t)}return null}function h(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===i?u(e,t,n,r):null;case S:return n.key===i?c(e,t,n,r):null;case A:return h(e,t,(i=n._init)(n._payload),r)}if(te(n)||O(n))return null!==i?null:d(e,t,n,r,null);yo(e,n)}return null}function p(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case S:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case A:return p(e,t,n,(0,r._init)(r._payload),i)}if(te(r)||O(r))return d(t,e=e.get(n)||null,r,i,null);yo(t,r)}return null}function m(i,o,s,l){for(var u=null,c=null,d=o,m=o=0,g=null;null!==d&&m<s.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var v=h(i,d,s[m],l);if(null===v){null===d&&(d=g);break}e&&d&&null===v.alternate&&t(i,d),o=a(v,o,m),null===c?u=v:c.sibling=v,c=v,d=g}if(m===s.length)return n(i,d),io&&Ji(i,m),u;if(null===d){for(;m<s.length;m++)null!==(d=f(i,s[m],l))&&(o=a(d,o,m),null===c?u=d:c.sibling=d,c=d);return io&&Ji(i,m),u}for(d=r(i,d);m<s.length;m++)null!==(g=p(d,i,m,s[m],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),o=a(g,o,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach((function(e){return t(i,e)})),io&&Ji(i,m),u}function g(i,s,l,u){var c=O(l);if("function"!==typeof c)throw Error(o(150));if(null==(l=c.call(l)))throw Error(o(151));for(var d=c=null,m=s,g=s=0,v=null,y=l.next();null!==m&&!y.done;g++,y=l.next()){m.index>g?(v=m,m=null):v=m.sibling;var x=h(i,m,y.value,u);if(null===x){null===m&&(m=v);break}e&&m&&null===x.alternate&&t(i,m),s=a(x,s,g),null===d?c=x:d.sibling=x,d=x,m=v}if(y.done)return n(i,m),io&&Ji(i,g),c;if(null===m){for(;!y.done;g++,y=l.next())null!==(y=f(i,y.value,u))&&(s=a(y,s,g),null===d?c=y:d.sibling=y,d=y);return io&&Ji(i,g),c}for(m=r(i,m);!y.done;g++,y=l.next())null!==(y=p(m,i,g,y.value,u))&&(e&&null!==y.alternate&&m.delete(null===y.key?g:y.key),s=a(y,s,g),null===d?c=y:d.sibling=y,d=y);return e&&m.forEach((function(e){return t(i,e)})),io&&Ji(i,g),c}return function e(r,o,a,l){if("object"===typeof a&&null!==a&&a.type===k&&null===a.key&&(a=a.props.children),"object"===typeof a&&null!==a){switch(a.$$typeof){case w:e:{for(var u=a.key,c=o;null!==c;){if(c.key===u){if((u=a.type)===k){if(7===c.tag){n(r,c.sibling),(o=i(c,a.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===A&&xo(u)===c.type){n(r,c.sibling),(o=i(c,a.props)).ref=vo(r,c,a),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}a.type===k?((o=Ou(a.props.children,r.mode,l,a.key)).return=r,r=o):((l=Mu(a.type,a.key,a.props,null,r.mode,l)).ref=vo(r,o,a),l.return=r,r=l)}return s(r);case S:e:{for(c=a.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===a.containerInfo&&o.stateNode.implementation===a.implementation){n(r,o.sibling),(o=i(o,a.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=$u(a,r.mode,l)).return=r,r=o}return s(r);case A:return e(r,o,(c=a._init)(a._payload),l)}if(te(a))return m(r,o,a,l);if(O(a))return g(r,o,a,l);yo(r,a)}return"string"===typeof a&&""!==a||"number"===typeof a?(a=""+a,null!==o&&6===o.tag?(n(r,o.sibling),(o=i(o,a)).return=r,r=o):(n(r,o),(o=Du(a,r.mode,l)).return=r,r=o),s(r)):n(r,o)}}var wo=bo(!0),So=bo(!1),ko=Ei(null),Eo=null,Co=null,Po=null;function jo(){Po=Co=Eo=null}function To(e){var t=ko.current;Ci(ko),e._currentValue=t}function _o(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Lo(e,t){Eo=e,Po=Co=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(xs=!0),e.firstContext=null)}function Ro(e){var t=e._currentValue;if(Po!==e)if(e={context:e,memoizedValue:t,next:null},null===Co){if(null===Eo)throw Error(o(308));Co=e,Eo.dependencies={lanes:0,firstContext:e}}else Co=Co.next=e;return t}var Ao=null;function zo(e){null===Ao?Ao=[e]:Ao.push(e)}function Mo(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,zo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Oo(e,r)}function Oo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var No=!1;function Do(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $o(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Io(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Tl)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Oo(e,n)}return null===(i=r.interleaved)?(t.next=t,zo(r)):(t.next=i.next,i.next=t),r.interleaved=t,Oo(e,n)}function Fo(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Bo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?i=o=a:o=o.next=a,n=n.next}while(null!==n);null===o?i=o=t:o=o.next=t}else i=o=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Uo(e,t,n,r){var i=e.updateQueue;No=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,u=l.next;l.next=null,null===a?o=u:a.next=u,a=l;var c=e.alternate;null!==c&&((s=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(null!==o){var d=i.baseState;for(a=0,c=u=l=null,s=o;;){var f=s.lane,h=s.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:h,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var p=e,m=s;switch(f=t,h=n,m.tag){case 1:if("function"===typeof(p=m.payload)){d=p.call(h,d,f);break e}d=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null===(f="function"===typeof(p=m.payload)?p.call(h,d,f):p)||void 0===f)break e;d=D({},d,f);break e;case 2:No=!0}}null!==s.callback&&0!==s.lane&&(e.flags|=64,null===(f=i.effects)?i.effects=[s]:f.push(s))}else h={eventTime:h,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=h,l=d):c=c.next=h,a|=f;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(f=s).next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}if(null===c&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===o&&(i.shared.lanes=0);Nl|=a,e.lanes=a,e.memoizedState=d}}function Ho(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!==typeof i)throw Error(o(191,i));i.call(r)}}}var Wo={},Yo=Ei(Wo),Ko=Ei(Wo),Qo=Ei(Wo);function Go(e){if(e===Wo)throw Error(o(174));return e}function qo(e,t){switch(Pi(Qo,t),Pi(Ko,e),Pi(Yo,Wo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:le(null,"");break;default:t=le(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ci(Yo),Pi(Yo,t)}function Xo(){Ci(Yo),Ci(Ko),Ci(Qo)}function Jo(e){Go(Qo.current);var t=Go(Yo.current),n=le(t,e.type);t!==n&&(Pi(Ko,e),Pi(Yo,n))}function Zo(e){Ko.current===e&&(Ci(Yo),Ci(Ko))}var ea=Ei(0);function ta(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var na=[];function ra(){for(var e=0;e<na.length;e++)na[e]._workInProgressVersionPrimary=null;na.length=0}var ia=b.ReactCurrentDispatcher,oa=b.ReactCurrentBatchConfig,aa=0,sa=null,la=null,ua=null,ca=!1,da=!1,fa=0,ha=0;function pa(){throw Error(o(321))}function ma(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!sr(e[n],t[n]))return!1;return!0}function ga(e,t,n,r,i,a){if(aa=a,sa=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ia.current=null===e||null===e.memoizedState?Za:es,e=n(r,i),da){a=0;do{if(da=!1,fa=0,25<=a)throw Error(o(301));a+=1,ua=la=null,t.updateQueue=null,ia.current=ts,e=n(r,i)}while(da)}if(ia.current=Ja,t=null!==la&&null!==la.next,aa=0,ua=la=sa=null,ca=!1,t)throw Error(o(300));return e}function va(){var e=0!==fa;return fa=0,e}function ya(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ua?sa.memoizedState=ua=e:ua=ua.next=e,ua}function xa(){if(null===la){var e=sa.alternate;e=null!==e?e.memoizedState:null}else e=la.next;var t=null===ua?sa.memoizedState:ua.next;if(null!==t)ua=t,la=e;else{if(null===e)throw Error(o(310));e={memoizedState:(la=e).memoizedState,baseState:la.baseState,baseQueue:la.baseQueue,queue:la.queue,next:null},null===ua?sa.memoizedState=ua=e:ua=ua.next=e}return ua}function ba(e,t){return"function"===typeof t?t(e):t}function wa(e){var t=xa(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=la,i=r.baseQueue,a=n.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(null!==i){a=i.next,r=r.baseState;var l=s=null,u=null,c=a;do{var d=c.lane;if((aa&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(l=u=f,s=r):u=u.next=f,sa.lanes|=d,Nl|=d}c=c.next}while(null!==c&&c!==a);null===u?s=r:u.next=l,sr(r,t.memoizedState)||(xs=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{a=i.lane,sa.lanes|=a,Nl|=a,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Sa(e){var t=xa(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);sr(a,t.memoizedState)||(xs=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function ka(){}function Ea(e,t){var n=sa,r=xa(),i=t(),a=!sr(r.memoizedState,i);if(a&&(r.memoizedState=i,xs=!0),r=r.queue,Na(ja.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||null!==ua&&1&ua.memoizedState.tag){if(n.flags|=2048,Ra(9,Pa.bind(null,n,r,i,t),void 0,null),null===_l)throw Error(o(349));0!==(30&aa)||Ca(n,t,i)}return i}function Ca(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Pa(e,t,n,r){t.value=n,t.getSnapshot=r,Ta(t)&&_a(e)}function ja(e,t,n){return n((function(){Ta(t)&&_a(e)}))}function Ta(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!sr(e,n)}catch(r){return!0}}function _a(e){var t=Oo(e,1);null!==t&&nu(t,e,1,-1)}function La(e){var t=ya();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},t.queue=e,e=e.dispatch=Qa.bind(null,sa,e),[t.memoizedState,e]}function Ra(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=sa.updateQueue)?(t={lastEffect:null,stores:null},sa.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Aa(){return xa().memoizedState}function za(e,t,n,r){var i=ya();sa.flags|=e,i.memoizedState=Ra(1|t,n,void 0,void 0===r?null:r)}function Ma(e,t,n,r){var i=xa();r=void 0===r?null:r;var o=void 0;if(null!==la){var a=la.memoizedState;if(o=a.destroy,null!==r&&ma(r,a.deps))return void(i.memoizedState=Ra(t,n,o,r))}sa.flags|=e,i.memoizedState=Ra(1|t,n,o,r)}function Oa(e,t){return za(8390656,8,e,t)}function Na(e,t){return Ma(2048,8,e,t)}function Da(e,t){return Ma(4,2,e,t)}function $a(e,t){return Ma(4,4,e,t)}function Va(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Ia(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ma(4,4,Va.bind(null,t,e),n)}function Fa(){}function Ba(e,t){var n=xa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ua(e,t){var n=xa();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ma(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ha(e,t,n){return 0===(21&aa)?(e.baseState&&(e.baseState=!1,xs=!0),e.memoizedState=n):(sr(n,t)||(n=mt(),sa.lanes|=n,Nl|=n,e.baseState=!0),t)}function Wa(e,t){var n=xt;xt=0!==n&&4>n?n:4,e(!0);var r=oa.transition;oa.transition={};try{e(!1),t()}finally{xt=n,oa.transition=r}}function Ya(){return xa().memoizedState}function Ka(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ga(e))qa(t,n);else if(null!==(n=Mo(e,t,n,r))){nu(n,e,r,eu()),Xa(n,t,r)}}function Qa(e,t,n){var r=tu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ga(e))qa(t,i);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=o(a,n);if(i.hasEagerState=!0,i.eagerState=s,sr(s,a)){var l=t.interleaved;return null===l?(i.next=i,zo(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(u){}null!==(n=Mo(e,t,i,r))&&(nu(n,e,r,i=eu()),Xa(n,t,r))}}function Ga(e){var t=e.alternate;return e===sa||null!==t&&t===sa}function qa(e,t){da=ca=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xa(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Ja={readContext:Ro,useCallback:pa,useContext:pa,useEffect:pa,useImperativeHandle:pa,useInsertionEffect:pa,useLayoutEffect:pa,useMemo:pa,useReducer:pa,useRef:pa,useState:pa,useDebugValue:pa,useDeferredValue:pa,useTransition:pa,useMutableSource:pa,useSyncExternalStore:pa,useId:pa,unstable_isNewReconciler:!1},Za={readContext:Ro,useCallback:function(e,t){return ya().memoizedState=[e,void 0===t?null:t],e},useContext:Ro,useEffect:Oa,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,za(4194308,4,Va.bind(null,t,e),n)},useLayoutEffect:function(e,t){return za(4194308,4,e,t)},useInsertionEffect:function(e,t){return za(4,2,e,t)},useMemo:function(e,t){var n=ya();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ya();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ka.bind(null,sa,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},ya().memoizedState=e},useState:La,useDebugValue:Fa,useDeferredValue:function(e){return ya().memoizedState=e},useTransition:function(){var e=La(!1),t=e[0];return e=Wa.bind(null,e[1]),ya().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=sa,i=ya();if(io){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===_l)throw Error(o(349));0!==(30&aa)||Ca(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Oa(ja.bind(null,r,a,e),[e]),r.flags|=2048,Ra(9,Pa.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=ya(),t=_l.identifierPrefix;if(io){var n=Xi;t=":"+t+"R"+(n=(qi&~(1<<32-at(qi)-1)).toString(32)+n),0<(n=fa++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=ha++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},es={readContext:Ro,useCallback:Ba,useContext:Ro,useEffect:Na,useImperativeHandle:Ia,useInsertionEffect:Da,useLayoutEffect:$a,useMemo:Ua,useReducer:wa,useRef:Aa,useState:function(){return wa(ba)},useDebugValue:Fa,useDeferredValue:function(e){return Ha(xa(),la.memoizedState,e)},useTransition:function(){return[wa(ba)[0],xa().memoizedState]},useMutableSource:ka,useSyncExternalStore:Ea,useId:Ya,unstable_isNewReconciler:!1},ts={readContext:Ro,useCallback:Ba,useContext:Ro,useEffect:Na,useImperativeHandle:Ia,useInsertionEffect:Da,useLayoutEffect:$a,useMemo:Ua,useReducer:Sa,useRef:Aa,useState:function(){return Sa(ba)},useDebugValue:Fa,useDeferredValue:function(e){var t=xa();return null===la?t.memoizedState=e:Ha(t,la.memoizedState,e)},useTransition:function(){return[Sa(ba)[0],xa().memoizedState]},useMutableSource:ka,useSyncExternalStore:Ea,useId:Ya,unstable_isNewReconciler:!1};function ns(e,t){if(e&&e.defaultProps){for(var n in t=D({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:D({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var is={isMounted:function(e){return!!(e=e._reactInternals)&&Be(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),i=tu(e),o=Vo(r,i);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Io(e,o,i))&&(nu(t,e,i,r),Fo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),i=tu(e),o=Vo(r,i);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=Io(e,o,i))&&(nu(t,e,i,r),Fo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),i=Vo(n,r);i.tag=2,void 0!==t&&null!==t&&(i.callback=t),null!==(t=Io(e,i,r))&&(nu(t,e,r,n),Fo(t,e,r))}};function os(e,t,n,r,i,o,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,a):!t.prototype||!t.prototype.isPureReactComponent||(!lr(n,r)||!lr(i,o))}function as(e,t,n){var r=!1,i=ji,o=t.contextType;return"object"===typeof o&&null!==o?o=Ro(o):(i=Ai(t)?Li:Ti.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ri(e,i):ji),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=is,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ss(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&is.enqueueReplaceState(t,t.state,null)}function ls(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Do(e);var o=t.contextType;"object"===typeof o&&null!==o?i.context=Ro(o):(o=Ai(t)?Li:Ti.current,i.context=Ri(e,o)),i.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rs(e,t,o,n),i.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(t=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&is.enqueueReplaceState(i,i.state,null),Uo(e,n,i,r),i.state=e.memoizedState),"function"===typeof i.componentDidMount&&(e.flags|=4194308)}function us(e,t){try{var n="",r=t;do{n+=F(r),r=r.return}while(r);var i=n}catch(o){i="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:i,digest:null}}function cs(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ds(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var fs="function"===typeof WeakMap?WeakMap:Map;function hs(e,t,n){(n=Vo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hl||(Hl=!0,Wl=r),ds(0,t)},n}function ps(e,t,n){(n=Vo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ds(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){ds(0,t),"function"!==typeof r&&(null===Yl?Yl=new Set([this]):Yl.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ms(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fs;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Cu.bind(null,e,t,n),t.then(e,e))}function gs(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vs(e,t,n,r,i){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Vo(-1,1)).tag=2,Io(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var ys=b.ReactCurrentOwner,xs=!1;function bs(e,t,n,r){t.child=null===e?So(t,null,n,r):wo(t,e.child,n,r)}function ws(e,t,n,r,i){n=n.render;var o=t.ref;return Lo(t,i),r=ga(e,t,n,r,o,i),n=va(),null===e||xs?(io&&n&&eo(t),t.flags|=1,bs(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hs(e,t,i))}function Ss(e,t,n,r,i){if(null===e){var o=n.type;return"function"!==typeof o||Au(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Mu(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,ks(e,t,o,r,i))}if(o=e.child,0===(e.lanes&i)){var a=o.memoizedProps;if((n=null!==(n=n.compare)?n:lr)(a,r)&&e.ref===t.ref)return Hs(e,t,i)}return t.flags|=1,(e=zu(o,r)).ref=t.ref,e.return=t,t.child=e}function ks(e,t,n,r,i){if(null!==e){var o=e.memoizedProps;if(lr(o,r)&&e.ref===t.ref){if(xs=!1,t.pendingProps=r=o,0===(e.lanes&i))return t.lanes=e.lanes,Hs(e,t,i);0!==(131072&e.flags)&&(xs=!0)}}return Ps(e,t,n,r,i)}function Es(e,t,n){var r=t.pendingProps,i=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Pi(zl,Al),Al|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Pi(zl,Al),Al|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Pi(zl,Al),Al|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Pi(zl,Al),Al|=r;return bs(e,t,i,n),t.child}function Cs(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ps(e,t,n,r,i){var o=Ai(n)?Li:Ti.current;return o=Ri(t,o),Lo(t,i),n=ga(e,t,n,r,o,i),r=va(),null===e||xs?(io&&r&&eo(t),t.flags|=1,bs(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Hs(e,t,i))}function js(e,t,n,r,i){if(Ai(n)){var o=!0;Ni(t)}else o=!1;if(Lo(t,i),null===t.stateNode)Us(e,t),as(t,n,r),ls(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,s=t.memoizedProps;a.props=s;var l=a.context,u=n.contextType;"object"===typeof u&&null!==u?u=Ro(u):u=Ri(t,u=Ai(n)?Li:Ti.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof a.getSnapshotBeforeUpdate;d||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==r||l!==u)&&ss(t,a,r,u),No=!1;var f=t.memoizedState;a.state=f,Uo(t,r,a,i),l=t.memoizedState,s!==r||f!==l||_i.current||No?("function"===typeof c&&(rs(t,n,c,r),l=t.memoizedState),(s=No||os(t,n,s,r,f,l,u))?(d||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=s):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,$o(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:ns(t.type,s),a.props=u,d=t.pendingProps,f=a.context,"object"===typeof(l=n.contextType)&&null!==l?l=Ro(l):l=Ri(t,l=Ai(n)?Li:Ti.current);var h=n.getDerivedStateFromProps;(c="function"===typeof h||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s!==d||f!==l)&&ss(t,a,r,l),No=!1,f=t.memoizedState,a.state=f,Uo(t,r,a,i);var p=t.memoizedState;s!==d||f!==p||_i.current||No?("function"===typeof h&&(rs(t,n,h,r),p=t.memoizedState),(u=No||os(t,n,u,r,f,p,l)||!1)?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,p,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,p,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=l,r=u):("function"!==typeof a.componentDidUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ts(e,t,n,r,o,i)}function Ts(e,t,n,r,i,o){Cs(e,t);var a=0!==(128&t.flags);if(!r&&!a)return i&&Di(t,n,!1),Hs(e,t,o);r=t.stateNode,ys.current=t;var s=a&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,s,o)):bs(e,t,s,o),t.memoizedState=r.state,i&&Di(t,n,!0),t.child}function _s(e){var t=e.stateNode;t.pendingContext?Mi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Mi(0,t.context,!1),qo(e,t.containerInfo)}function Ls(e,t,n,r,i){return po(),mo(i),t.flags|=256,bs(e,t,n,r),t.child}var Rs,As,zs,Ms,Os={dehydrated:null,treeContext:null,retryLane:0};function Ns(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ds(e,t,n){var r,i=t.pendingProps,a=ea.current,s=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&a)),r?(s=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(a|=1),Pi(ea,1&a),null===e)return uo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(l=i.children,e=i.fallback,s?(i=t.mode,s=t.child,l={mode:"hidden",children:l},0===(1&i)&&null!==s?(s.childLanes=0,s.pendingProps=l):s=Nu(l,i,0,null),e=Ou(e,i,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Ns(n),t.memoizedState=Os,e):$s(t,l));if(null!==(a=e.memoizedState)&&null!==(r=a.dehydrated))return function(e,t,n,r,i,a,s){if(n)return 256&t.flags?(t.flags&=-257,Vs(e,t,s,r=cs(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Nu({mode:"visible",children:r.children},i,0,null),(a=Ou(a,i,s,null)).flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,s),t.child.memoizedState=Ns(s),t.memoizedState=Os,a);if(0===(1&t.mode))return Vs(e,t,s,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var l=r.dgst;return r=l,Vs(e,t,s,r=cs(a=Error(o(419)),r,void 0))}if(l=0!==(s&e.childLanes),xs||l){if(null!==(r=_l)){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|s))?0:i)&&i!==a.retryLane&&(a.retryLane=i,Oo(e,i),nu(r,e,i,-1))}return mu(),Vs(e,t,s,r=cs(Error(o(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=ju.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,ro=ui(i.nextSibling),no=t,io=!0,oo=null,null!==e&&(Ki[Qi++]=qi,Ki[Qi++]=Xi,Ki[Qi++]=Gi,qi=e.id,Xi=e.overflow,Gi=t),t=$s(t,r.children),t.flags|=4096,t)}(e,t,l,i,r,a,n);if(s){s=i.fallback,l=t.mode,r=(a=e.child).sibling;var u={mode:"hidden",children:i.children};return 0===(1&l)&&t.child!==a?((i=t.child).childLanes=0,i.pendingProps=u,t.deletions=null):(i=zu(a,u)).subtreeFlags=14680064&a.subtreeFlags,null!==r?s=zu(r,s):(s=Ou(s,l,n,null)).flags|=2,s.return=t,i.return=t,i.sibling=s,t.child=i,i=s,s=t.child,l=null===(l=e.child.memoizedState)?Ns(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~n,t.memoizedState=Os,i}return e=(s=e.child).sibling,i=zu(s,{mode:"visible",children:i.children}),0===(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function $s(e,t){return(t=Nu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Vs(e,t,n,r){return null!==r&&mo(r),wo(t,e.child,null,n),(e=$s(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Is(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),_o(e.return,t,n)}function Fs(e,t,n,r,i){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Bs(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(bs(e,t,r.children,n),0!==(2&(r=ea.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Is(e,n,t);else if(19===e.tag)Is(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Pi(ea,r),0===(1&t.mode))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ta(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Fs(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ta(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Fs(t,!0,n,null,o);break;case"together":Fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Us(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Nl|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=zu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=zu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Ws(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ys(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ks(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ys(t),null;case 1:case 17:return Ai(t.type)&&zi(),Ys(t),null;case 3:return r=t.stateNode,Xo(),Ci(_i),Ci(Ti),ra(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fo(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(au(oo),oo=null))),As(e,t),Ys(t),null;case 5:Zo(t);var i=Go(Qo.current);if(n=t.type,null!==e&&null!=t.stateNode)zs(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Ys(t),null}if(e=Go(Yo.current),fo(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[fi]=t,r[hi]=a,e=0!==(1&t.mode),n){case"dialog":Vr("cancel",r),Vr("close",r);break;case"iframe":case"object":case"embed":Vr("load",r);break;case"video":case"audio":for(i=0;i<Or.length;i++)Vr(Or[i],r);break;case"source":Vr("error",r);break;case"img":case"image":case"link":Vr("error",r),Vr("load",r);break;case"details":Vr("toggle",r);break;case"input":q(r,a),Vr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Vr("invalid",r);break;case"textarea":ie(r,a),Vr("invalid",r)}for(var l in ye(n,a),i=null,a)if(a.hasOwnProperty(l)){var u=a[l];"children"===l?"string"===typeof u?r.textContent!==u&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,u,e),i=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==a.suppressHydrationWarning&&Jr(r.textContent,u,e),i=["children",""+u]):s.hasOwnProperty(l)&&null!=u&&"onScroll"===l&&Vr("scroll",r)}switch(n){case"input":Y(r),Z(r,a,!0);break;case"textarea":Y(r),ae(r);break;case"select":case"option":break;default:"function"===typeof a.onClick&&(r.onclick=Zr)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{l=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=se(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=l.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),"select"===n&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[fi]=t,e[hi]=r,Rs(e,t,!1,!1),t.stateNode=e;e:{switch(l=xe(n,r),n){case"dialog":Vr("cancel",e),Vr("close",e),i=r;break;case"iframe":case"object":case"embed":Vr("load",e),i=r;break;case"video":case"audio":for(i=0;i<Or.length;i++)Vr(Or[i],e);i=r;break;case"source":Vr("error",e),i=r;break;case"img":case"image":case"link":Vr("error",e),Vr("load",e),i=r;break;case"details":Vr("toggle",e),i=r;break;case"input":q(e,r),i=G(e,r),Vr("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=D({},r,{value:void 0}),Vr("invalid",e);break;case"textarea":ie(e,r),i=re(e,r),Vr("invalid",e)}for(a in ye(n,i),u=i)if(u.hasOwnProperty(a)){var c=u[a];"style"===a?ge(e,c):"dangerouslySetInnerHTML"===a?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===a?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==a&&"suppressHydrationWarning"!==a&&"autoFocus"!==a&&(s.hasOwnProperty(a)?null!=c&&"onScroll"===a&&Vr("scroll",e):null!=c&&x(e,a,c,l))}switch(n){case"input":Y(e),Z(e,r,!1);break;case"textarea":Y(e),ae(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(a=r.value)?ne(e,!!r.multiple,a,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof i.onClick&&(e.onclick=Zr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ys(t),null;case 6:if(e&&null!=t.stateNode)Ms(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=Go(Qo.current),Go(Yo.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[fi]=t,(a=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Jr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Jr(r.nodeValue,n,0!==(1&e.mode))}a&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fi]=t,t.stateNode=r}return Ys(t),null;case 13:if(Ci(ea),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(io&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))ho(),po(),t.flags|=98560,a=!1;else if(a=fo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[fi]=t}else po(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ys(t),a=!1}else null!==oo&&(au(oo),oo=null),a=!0;if(!a)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ea.current)?0===Ml&&(Ml=3):mu())),null!==t.updateQueue&&(t.flags|=4),Ys(t),null);case 4:return Xo(),As(e,t),null===e&&Br(t.stateNode.containerInfo),Ys(t),null;case 10:return To(t.type._context),Ys(t),null;case 19:if(Ci(ea),null===(a=t.memoizedState))return Ys(t),null;if(r=0!==(128&t.flags),null===(l=a.rendering))if(r)Ws(a,!1);else{if(0!==Ml||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(l=ta(e))){for(t.flags|=128,Ws(a,!1),null!==(r=l.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(a=n).flags&=14680066,null===(l=a.alternate)?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=l.childLanes,a.lanes=l.lanes,a.child=l.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=l.memoizedProps,a.memoizedState=l.memoizedState,a.updateQueue=l.updateQueue,a.type=l.type,e=l.dependencies,a.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Pi(ea,1&ea.current|2),t.child}e=e.sibling}null!==a.tail&&Xe()>Bl&&(t.flags|=128,r=!0,Ws(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ta(l))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Ws(a,!0),null===a.tail&&"hidden"===a.tailMode&&!l.alternate&&!io)return Ys(t),null}else 2*Xe()-a.renderingStartTime>Bl&&1073741824!==n&&(t.flags|=128,r=!0,Ws(a,!1),t.lanes=4194304);a.isBackwards?(l.sibling=t.child,t.child=l):(null!==(n=a.last)?n.sibling=l:t.child=l,a.last=l)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Xe(),t.sibling=null,n=ea.current,Pi(ea,r?1&n|2:1&n),t):(Ys(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Al)&&(Ys(t),6&t.subtreeFlags&&(t.flags|=8192)):Ys(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Qs(e,t){switch(to(t),t.tag){case 1:return Ai(t.type)&&zi(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xo(),Ci(_i),Ci(Ti),ra(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zo(t),null;case 13:if(Ci(ea),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));po()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ci(ea),null;case 4:return Xo(),null;case 10:return To(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Rs=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},As=function(){},zs=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Go(Yo.current);var o,a=null;switch(n){case"input":i=G(e,i),r=G(e,r),a=[];break;case"select":i=D({},i,{value:void 0}),r=D({},r,{value:void 0}),a=[];break;case"textarea":i=re(e,i),r=re(e,r),a=[];break;default:"function"!==typeof i.onClick&&"function"===typeof r.onClick&&(e.onclick=Zr)}for(c in ye(n,r),n=null,i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&null!=i[c])if("style"===c){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(s.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var u=r[c];if(l=null!=i?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(null!=u||null!=l))if("style"===c)if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(a||(a=[]),a.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,l=l?l.__html:void 0,null!=u&&l!==u&&(a=a||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(a=a||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(s.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Vr("scroll",e),a||l===u||(a=[])):(a=a||[]).push(c,u))}n&&(a=a||[]).push("style",n);var c=a;(t.updateQueue=c)&&(t.flags|=4)}},Ms=function(e,t,n,r){n!==r&&(t.flags|=4)};var Gs=!1,qs=!1,Xs="function"===typeof WeakSet?WeakSet:Set,Js=null;function Zs(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Eu(e,t,r)}else n.current=null}function el(e,t,n){try{n()}catch(r){Eu(e,t,r)}}var tl=!1;function nl(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,void 0!==o&&el(t,n,o)}i=i.next}while(i!==r)}}function rl(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function il(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function ol(e){var t=e.alternate;null!==t&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fi],delete t[hi],delete t[mi],delete t[gi],delete t[vi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function al(e){return 5===e.tag||3===e.tag||4===e.tag}function sl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||al(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ll(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zr));else if(4!==r&&null!==(e=e.child))for(ll(e,t,n),e=e.sibling;null!==e;)ll(e,t,n),e=e.sibling}function ul(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(ul(e,t,n),e=e.sibling;null!==e;)ul(e,t,n),e=e.sibling}var cl=null,dl=!1;function fl(e,t,n){for(n=n.child;null!==n;)hl(e,t,n),n=n.sibling}function hl(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(it,n)}catch(s){}switch(n.tag){case 5:qs||Zs(n,t);case 6:var r=cl,i=dl;cl=null,fl(e,t,n),dl=i,null!==(cl=r)&&(dl?(e=cl,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cl.removeChild(n.stateNode));break;case 18:null!==cl&&(dl?(e=cl,n=n.stateNode,8===e.nodeType?li(e.parentNode,n):1===e.nodeType&&li(e,n),Bt(e)):li(cl,n.stateNode));break;case 4:r=cl,i=dl,cl=n.stateNode.containerInfo,dl=!0,fl(e,t,n),cl=r,dl=i;break;case 0:case 11:case 14:case 15:if(!qs&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,void 0!==a&&(0!==(2&o)||0!==(4&o))&&el(n,t,a),i=i.next}while(i!==r)}fl(e,t,n);break;case 1:if(!qs&&(Zs(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Eu(n,t,s)}fl(e,t,n);break;case 21:fl(e,t,n);break;case 22:1&n.mode?(qs=(r=qs)||null!==n.memoizedState,fl(e,t,n),qs=r):fl(e,t,n);break;default:fl(e,t,n)}}function pl(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xs),t.forEach((function(t){var r=Tu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function ml(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 5:cl=l.stateNode,dl=!1;break e;case 3:case 4:cl=l.stateNode.containerInfo,dl=!0;break e}l=l.return}if(null===cl)throw Error(o(160));hl(a,s,i),cl=null,dl=!1;var u=i.alternate;null!==u&&(u.return=null),i.return=null}catch(c){Eu(i,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gl(t,e),t=t.sibling}function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ml(t,e),vl(e),4&r){try{nl(3,e,e.return),rl(3,e)}catch(g){Eu(e,e.return,g)}try{nl(5,e,e.return)}catch(g){Eu(e,e.return,g)}}break;case 1:ml(t,e),vl(e),512&r&&null!==n&&Zs(n,n.return);break;case 5:if(ml(t,e),vl(e),512&r&&null!==n&&Zs(n,n.return),32&e.flags){var i=e.stateNode;try{fe(i,"")}catch(g){Eu(e,e.return,g)}}if(4&r&&null!=(i=e.stateNode)){var a=e.memoizedProps,s=null!==n?n.memoizedProps:a,l=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===l&&"radio"===a.type&&null!=a.name&&X(i,a),xe(l,s);var c=xe(l,a);for(s=0;s<u.length;s+=2){var d=u[s],f=u[s+1];"style"===d?ge(i,f):"dangerouslySetInnerHTML"===d?de(i,f):"children"===d?fe(i,f):x(i,d,f,c)}switch(l){case"input":J(i,a);break;case"textarea":oe(i,a);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var p=a.value;null!=p?ne(i,!!a.multiple,p,!1):h!==!!a.multiple&&(null!=a.defaultValue?ne(i,!!a.multiple,a.defaultValue,!0):ne(i,!!a.multiple,a.multiple?[]:"",!1))}i[hi]=a}catch(g){Eu(e,e.return,g)}}break;case 6:if(ml(t,e),vl(e),4&r){if(null===e.stateNode)throw Error(o(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(g){Eu(e,e.return,g)}}break;case 3:if(ml(t,e),vl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Bt(t.containerInfo)}catch(g){Eu(e,e.return,g)}break;case 4:default:ml(t,e),vl(e);break;case 13:ml(t,e),vl(e),8192&(i=e.child).flags&&(a=null!==i.memoizedState,i.stateNode.isHidden=a,!a||null!==i.alternate&&null!==i.alternate.memoizedState||(Fl=Xe())),4&r&&pl(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(qs=(c=qs)||d,ml(t,e),qs=c):ml(t,e),vl(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Js=e,d=e.child;null!==d;){for(f=Js=d;null!==Js;){switch(p=(h=Js).child,h.tag){case 0:case 11:case 14:case 15:nl(4,h,h.return);break;case 1:Zs(h,h.return);var m=h.stateNode;if("function"===typeof m.componentWillUnmount){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Eu(r,n,g)}}break;case 5:Zs(h,h.return);break;case 22:if(null!==h.memoizedState){wl(f);continue}}null!==p?(p.return=h,Js=p):wl(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{i=f.stateNode,c?"function"===typeof(a=i.style).setProperty?a.setProperty("display","none","important"):a.display="none":(l=f.stateNode,s=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,l.style.display=me("display",s))}catch(g){Eu(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Eu(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ml(t,e),vl(e),4&r&&pl(e);case 21:}}function vl(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(al(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(fe(i,""),r.flags&=-33),ul(e,sl(e),i);break;case 3:case 4:var a=r.stateNode.containerInfo;ll(e,sl(e),a);break;default:throw Error(o(161))}}catch(s){Eu(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function yl(e,t,n){Js=e,xl(e,t,n)}function xl(e,t,n){for(var r=0!==(1&e.mode);null!==Js;){var i=Js,o=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||Gs;if(!a){var s=i.alternate,l=null!==s&&null!==s.memoizedState||qs;s=Gs;var u=qs;if(Gs=a,(qs=l)&&!u)for(Js=i;null!==Js;)l=(a=Js).child,22===a.tag&&null!==a.memoizedState?Sl(i):null!==l?(l.return=a,Js=l):Sl(i);for(;null!==o;)Js=o,xl(o,t,n),o=o.sibling;Js=i,Gs=s,qs=u}bl(e)}else 0!==(8772&i.subtreeFlags)&&null!==o?(o.return=i,Js=o):bl(e)}}function bl(e){for(;null!==Js;){var t=Js;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:qs||rl(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!qs)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ns(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;null!==a&&Ho(t,a,r);break;case 3:var s=t.updateQueue;if(null!==s){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ho(t,s,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&Bt(f)}}}break;default:throw Error(o(163))}qs||512&t.flags&&il(t)}catch(h){Eu(t,t.return,h)}}if(t===e){Js=null;break}if(null!==(n=t.sibling)){n.return=t.return,Js=n;break}Js=t.return}}function wl(e){for(;null!==Js;){var t=Js;if(t===e){Js=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Js=n;break}Js=t.return}}function Sl(e){for(;null!==Js;){var t=Js;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rl(4,t)}catch(l){Eu(t,n,l)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){Eu(t,i,l)}}var o=t.return;try{il(t)}catch(l){Eu(t,o,l)}break;case 5:var a=t.return;try{il(t)}catch(l){Eu(t,a,l)}}}catch(l){Eu(t,t.return,l)}if(t===e){Js=null;break}var s=t.sibling;if(null!==s){s.return=t.return,Js=s;break}Js=t.return}}var kl,El=Math.ceil,Cl=b.ReactCurrentDispatcher,Pl=b.ReactCurrentOwner,jl=b.ReactCurrentBatchConfig,Tl=0,_l=null,Ll=null,Rl=0,Al=0,zl=Ei(0),Ml=0,Ol=null,Nl=0,Dl=0,$l=0,Vl=null,Il=null,Fl=0,Bl=1/0,Ul=null,Hl=!1,Wl=null,Yl=null,Kl=!1,Ql=null,Gl=0,ql=0,Xl=null,Jl=-1,Zl=0;function eu(){return 0!==(6&Tl)?Xe():-1!==Jl?Jl:Jl=Xe()}function tu(e){return 0===(1&e.mode)?1:0!==(2&Tl)&&0!==Rl?Rl&-Rl:null!==go.transition?(0===Zl&&(Zl=mt()),Zl):0!==(e=xt)?e:e=void 0===(e=window.event)?16:qt(e.type)}function nu(e,t,n,r){if(50<ql)throw ql=0,Xl=null,Error(o(185));vt(e,n,r),0!==(2&Tl)&&e===_l||(e===_l&&(0===(2&Tl)&&(Dl|=n),4===Ml&&su(e,Rl)),ru(e,r),1===n&&0===Tl&&0===(1&t.mode)&&(Bl=Xe()+500,Vi&&Bi()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-at(o),s=1<<a,l=i[a];-1===l?0!==(s&n)&&0===(s&r)||(i[a]=ht(s,t)):l<=t&&(e.expiredLanes|=s),o&=~s}}(e,t);var r=ft(e,e===_l?Rl:0);if(0===r)null!==n&&Qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Qe(n),1===t)0===e.tag?function(e){Vi=!0,Fi(e)}(lu.bind(null,e)):Fi(lu.bind(null,e)),ai((function(){0===(6&Tl)&&Bi()})),n=null;else{switch(bt(r)){case 1:n=Ze;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=_u(n,iu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function iu(e,t){if(Jl=-1,Zl=0,0!==(6&Tl))throw Error(o(327));var n=e.callbackNode;if(Su()&&e.callbackNode!==n)return null;var r=ft(e,e===_l?Rl:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var i=Tl;Tl|=2;var a=pu();for(_l===e&&Rl===t||(Ul=null,Bl=Xe()+500,fu(e,t));;)try{yu();break}catch(l){hu(e,l)}jo(),Cl.current=a,Tl=i,null!==Ll?t=0:(_l=null,Rl=0,t=Ml)}if(0!==t){if(2===t&&(0!==(i=pt(e))&&(r=i,t=ou(e,i))),1===t)throw n=Ol,fu(e,0),su(e,r),ru(e,Xe()),n;if(6===t)su(e,r);else{if(i=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!sr(o(),i))return!1}catch(s){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)&&(2===(t=gu(e,r))&&(0!==(a=pt(e))&&(r=a,t=ou(e,a))),1===t))throw n=Ol,fu(e,0),su(e,r),ru(e,Xe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wu(e,Il,Ul);break;case 3:if(su(e,r),(130023424&r)===r&&10<(t=Fl+500-Xe())){if(0!==ft(e,0))break;if(((i=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ri(wu.bind(null,e,Il,Ul),t);break}wu(e,Il,Ul);break;case 4:if(su(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-at(r);a=1<<s,(s=t[s])>i&&(i=s),r&=~a}if(r=i,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*El(r/1960))-r)){e.timeoutHandle=ri(wu.bind(null,e,Il,Ul),r);break}wu(e,Il,Ul);break;default:throw Error(o(329))}}}return ru(e,Xe()),e.callbackNode===n?iu.bind(null,e):null}function ou(e,t){var n=Vl;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=Il,Il=n,null!==t&&au(t)),e}function au(e){null===Il?Il=e:Il.push.apply(Il,e)}function su(e,t){for(t&=~$l,t&=~Dl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-at(t),r=1<<n;e[n]=-1,t&=~r}}function lu(e){if(0!==(6&Tl))throw Error(o(327));Su();var t=ft(e,0);if(0===(1&t))return ru(e,Xe()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=pt(e);0!==r&&(t=r,n=ou(e,r))}if(1===n)throw n=Ol,fu(e,0),su(e,t),ru(e,Xe()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,Il,Ul),ru(e,Xe()),null}function uu(e,t){var n=Tl;Tl|=1;try{return e(t)}finally{0===(Tl=n)&&(Bl=Xe()+500,Vi&&Bi())}}function cu(e){null!==Ql&&0===Ql.tag&&0===(6&Tl)&&Su();var t=Tl;Tl|=1;var n=jl.transition,r=xt;try{if(jl.transition=null,xt=1,e)return e()}finally{xt=r,jl.transition=n,0===(6&(Tl=t))&&Bi()}}function du(){Al=zl.current,Ci(zl)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ii(n)),null!==Ll)for(n=Ll.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&zi();break;case 3:Xo(),Ci(_i),Ci(Ti),ra();break;case 5:Zo(r);break;case 4:Xo();break;case 13:case 19:Ci(ea);break;case 10:To(r.type._context);break;case 22:case 23:du()}n=n.return}if(_l=e,Ll=e=zu(e.current,null),Rl=Al=t,Ml=0,Ol=null,$l=Dl=Nl=0,Il=Vl=null,null!==Ao){for(t=0;t<Ao.length;t++)if(null!==(r=(n=Ao[t]).interleaved)){n.interleaved=null;var i=r.next,o=n.pending;if(null!==o){var a=o.next;o.next=i,r.next=a}n.pending=r}Ao=null}return e}function hu(e,t){for(;;){var n=Ll;try{if(jo(),ia.current=Ja,ca){for(var r=sa.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}ca=!1}if(aa=0,ua=la=sa=null,da=!1,fa=0,Pl.current=null,null===n||null===n.return){Ml=1,Ol=t,Ll=null;break}e:{var a=e,s=n.return,l=n,u=t;if(t=Rl,l.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=l,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=gs(s);if(null!==p){p.flags&=-257,vs(p,s,l,0,t),1&p.mode&&ms(a,c,t),u=c;var m=(t=p).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){ms(a,c,t),mu();break e}u=Error(o(426))}else if(io&&1&l.mode){var v=gs(s);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vs(v,s,l,0,t),mo(us(u,l));break e}}a=u=us(u,l),4!==Ml&&(Ml=2),null===Vl?Vl=[a]:Vl.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t,Bo(a,hs(0,u,t));break e;case 1:l=u;var y=a.type,x=a.stateNode;if(0===(128&a.flags)&&("function"===typeof y.getDerivedStateFromError||null!==x&&"function"===typeof x.componentDidCatch&&(null===Yl||!Yl.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t,Bo(a,ps(a,l,t));break e}}a=a.return}while(null!==a)}bu(n)}catch(b){t=b,Ll===n&&null!==n&&(Ll=n=n.return);continue}break}}function pu(){var e=Cl.current;return Cl.current=Ja,null===e?Ja:e}function mu(){0!==Ml&&3!==Ml&&2!==Ml||(Ml=4),null===_l||0===(268435455&Nl)&&0===(268435455&Dl)||su(_l,Rl)}function gu(e,t){var n=Tl;Tl|=2;var r=pu();for(_l===e&&Rl===t||(Ul=null,fu(e,t));;)try{vu();break}catch(i){hu(e,i)}if(jo(),Tl=n,Cl.current=r,null!==Ll)throw Error(o(261));return _l=null,Rl=0,Ml}function vu(){for(;null!==Ll;)xu(Ll)}function yu(){for(;null!==Ll&&!Ge();)xu(Ll)}function xu(e){var t=kl(e.alternate,e,Al);e.memoizedProps=e.pendingProps,null===t?bu(e):Ll=t,Pl.current=null}function bu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ks(n,t,Al)))return void(Ll=n)}else{if(null!==(n=Qs(n,t)))return n.flags&=32767,void(Ll=n);if(null===e)return Ml=6,void(Ll=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ll=t);Ll=t=e}while(null!==t);0===Ml&&(Ml=5)}function wu(e,t,n){var r=xt,i=jl.transition;try{jl.transition=null,xt=1,function(e,t,n,r){do{Su()}while(null!==Ql);if(0!==(6&Tl))throw Error(o(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-at(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}(e,a),e===_l&&(Ll=_l=null,Rl=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Kl||(Kl=!0,_u(tt,(function(){return Su(),null}))),a=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||a){a=jl.transition,jl.transition=null;var s=xt;xt=1;var l=Tl;Tl|=4,Pl.current=null,function(e,t){if(ei=Ht,hr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(w){n=null;break e}var s=0,l=-1,u=-1,c=0,d=0,f=e,h=null;t:for(;;){for(var p;f!==n||0!==i&&3!==f.nodeType||(l=s+i),f!==a||0!==r&&3!==f.nodeType||(u=s+r),3===f.nodeType&&(s+=f.nodeValue.length),null!==(p=f.firstChild);)h=f,f=p;for(;;){if(f===e)break t;if(h===n&&++c===i&&(l=s),h===a&&++d===r&&(u=s),null!==(p=f.nextSibling))break;h=(f=h).parentNode}f=p}n=-1===l||-1===u?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ti={focusedElem:e,selectionRange:n},Ht=!1,Js=t;null!==Js;)if(e=(t=Js).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Js=e;else for(;null!==Js;){t=Js;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,v=m.memoizedState,y=t.stateNode,x=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:ns(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(o(163))}}catch(w){Eu(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Js=e;break}Js=t.return}m=tl,tl=!1}(e,n),gl(n,e),pr(ti),Ht=!!ei,ti=ei=null,e.current=n,yl(n,e,i),qe(),Tl=l,xt=s,jl.transition=a}else e.current=n;if(Kl&&(Kl=!1,Ql=e,Gl=i),a=e.pendingLanes,0===a&&(Yl=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(it,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Hl)throw Hl=!1,e=Wl,Wl=null,e;0!==(1&Gl)&&0!==e.tag&&Su(),a=e.pendingLanes,0!==(1&a)?e===Xl?ql++:(ql=0,Xl=e):ql=0,Bi()}(e,t,n,r)}finally{jl.transition=i,xt=r}return null}function Su(){if(null!==Ql){var e=bt(Gl),t=jl.transition,n=xt;try{if(jl.transition=null,xt=16>e?16:e,null===Ql)var r=!1;else{if(e=Ql,Ql=null,Gl=0,0!==(6&Tl))throw Error(o(331));var i=Tl;for(Tl|=4,Js=e.current;null!==Js;){var a=Js,s=a.child;if(0!==(16&Js.flags)){var l=a.deletions;if(null!==l){for(var u=0;u<l.length;u++){var c=l[u];for(Js=c;null!==Js;){var d=Js;switch(d.tag){case 0:case 11:case 15:nl(8,d,a)}var f=d.child;if(null!==f)f.return=d,Js=f;else for(;null!==Js;){var h=(d=Js).sibling,p=d.return;if(ol(d),d===c){Js=null;break}if(null!==h){h.return=p,Js=h;break}Js=p}}}var m=a.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Js=a}}if(0!==(2064&a.subtreeFlags)&&null!==s)s.return=a,Js=s;else e:for(;null!==Js;){if(0!==(2048&(a=Js).flags))switch(a.tag){case 0:case 11:case 15:nl(9,a,a.return)}var y=a.sibling;if(null!==y){y.return=a.return,Js=y;break e}Js=a.return}}var x=e.current;for(Js=x;null!==Js;){var b=(s=Js).child;if(0!==(2064&s.subtreeFlags)&&null!==b)b.return=s,Js=b;else e:for(s=x;null!==Js;){if(0!==(2048&(l=Js).flags))try{switch(l.tag){case 0:case 11:case 15:rl(9,l)}}catch(S){Eu(l,l.return,S)}if(l===s){Js=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,Js=w;break e}Js=l.return}}if(Tl=i,Bi(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(it,e)}catch(S){}r=!0}return r}finally{xt=n,jl.transition=t}}return!1}function ku(e,t,n){e=Io(e,t=hs(0,t=us(n,t),1),1),t=eu(),null!==e&&(vt(e,1,t),ru(e,t))}function Eu(e,t,n){if(3===e.tag)ku(e,e,n);else for(;null!==t;){if(3===t.tag){ku(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Yl||!Yl.has(r))){t=Io(t,e=ps(t,e=us(n,e),1),1),e=eu(),null!==t&&(vt(t,1,e),ru(t,e));break}}t=t.return}}function Cu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,_l===e&&(Rl&n)===n&&(4===Ml||3===Ml&&(130023424&Rl)===Rl&&500>Xe()-Fl?fu(e,0):$l|=n),ru(e,t)}function Pu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Oo(e,t))&&(vt(e,t,n),ru(e,n))}function ju(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Pu(e,n)}function Tu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Pu(e,n)}function _u(e,t){return Ke(e,t)}function Lu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ru(e,t,n,r){return new Lu(e,t,n,r)}function Au(e){return!(!(e=e.prototype)||!e.isReactComponent)}function zu(e,t){var n=e.alternate;return null===n?((n=Ru(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Mu(e,t,n,r,i,a){var s=2;if(r=e,"function"===typeof e)Au(e)&&(s=1);else if("string"===typeof e)s=5;else e:switch(e){case k:return Ou(n.children,i,a,t);case E:s=8,i|=8;break;case C:return(e=Ru(12,n,t,2|i)).elementType=C,e.lanes=a,e;case _:return(e=Ru(13,n,t,i)).elementType=_,e.lanes=a,e;case L:return(e=Ru(19,n,t,i)).elementType=L,e.lanes=a,e;case z:return Nu(n,i,a,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case P:s=10;break e;case j:s=9;break e;case T:s=11;break e;case R:s=14;break e;case A:s=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Ru(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Ou(e,t,n,r){return(e=Ru(7,e,r,t)).lanes=n,e}function Nu(e,t,n,r){return(e=Ru(22,e,r,t)).elementType=z,e.lanes=n,e.stateNode={isHidden:!1},e}function Du(e,t,n){return(e=Ru(6,e,null,t)).lanes=n,e}function $u(e,t,n){return(t=Ru(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Vu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Iu(e,t,n,r,i,o,a,s,l){return e=new Vu(e,t,n,s,l),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Ru(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Do(o),e}function Fu(e){if(!e)return ji;e:{if(Be(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ai(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Ai(n))return Oi(e,n,t)}return t}function Bu(e,t,n,r,i,o,a,s,l){return(e=Iu(n,r,!0,e,0,o,0,s,l)).context=Fu(null),n=e.current,(o=Vo(r=eu(),i=tu(n))).callback=void 0!==t&&null!==t?t:null,Io(n,o,i),e.current.lanes=i,vt(e,i,r),ru(e,r),e}function Uu(e,t,n,r){var i=t.current,o=eu(),a=tu(i);return n=Fu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Vo(o,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Io(i,t,a))&&(nu(e,i,a,o),Fo(e,i,a)),a}function Hu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Wu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Yu(e,t){Wu(e,t),(e=e.alternate)&&Wu(e,t)}kl=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||_i.current)xs=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return xs=!1,function(e,t,n){switch(t.tag){case 3:_s(t),po();break;case 5:Jo(t);break;case 1:Ai(t.type)&&Ni(t);break;case 4:qo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Pi(ko,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Pi(ea,1&ea.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ds(e,t,n):(Pi(ea,1&ea.current),null!==(e=Hs(e,t,n))?e.sibling:null);Pi(ea,1&ea.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Bs(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),Pi(ea,ea.current),r)break;return null;case 22:case 23:return t.lanes=0,Es(e,t,n)}return Hs(e,t,n)}(e,t,n);xs=0!==(131072&e.flags)}else xs=!1,io&&0!==(1048576&t.flags)&&Zi(t,Yi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Us(e,t),e=t.pendingProps;var i=Ri(t,Ti.current);Lo(t,n),i=ga(null,t,r,e,i,n);var a=va();return t.flags|=1,"object"===typeof i&&null!==i&&"function"===typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ai(r)?(a=!0,Ni(t)):a=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Do(t),i.updater=is,t.stateNode=i,i._reactInternals=t,ls(t,r,e,n),t=Ts(null,t,r,!0,a,n)):(t.tag=0,io&&a&&eo(t),bs(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Us(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"===typeof e)return Au(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===T)return 11;if(e===R)return 14}return 2}(r),e=ns(r,e),i){case 0:t=Ps(null,t,r,e,n);break e;case 1:t=js(null,t,r,e,n);break e;case 11:t=ws(null,t,r,e,n);break e;case 14:t=Ss(null,t,r,ns(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,Ps(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 1:return r=t.type,i=t.pendingProps,js(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 3:e:{if(_s(t),null===e)throw Error(o(387));r=t.pendingProps,i=(a=t.memoizedState).element,$o(e,t),Uo(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Ls(e,t,r,n,i=us(Error(o(423)),t));break e}if(r!==i){t=Ls(e,t,r,n,i=us(Error(o(424)),t));break e}for(ro=ui(t.stateNode.containerInfo.firstChild),no=t,io=!0,oo=null,n=So(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(po(),r===i){t=Hs(e,t,n);break e}bs(e,t,r,n)}t=t.child}return t;case 5:return Jo(t),null===e&&uo(t),r=t.type,i=t.pendingProps,a=null!==e?e.memoizedProps:null,s=i.children,ni(r,i)?s=null:null!==a&&ni(r,a)&&(t.flags|=32),Cs(e,t),bs(e,t,s,n),t.child;case 6:return null===e&&uo(t),null;case 13:return Ds(e,t,n);case 4:return qo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):bs(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,ws(e,t,r,i=t.elementType===r?i:ns(r,i),n);case 7:return bs(e,t,t.pendingProps,n),t.child;case 8:case 12:return bs(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,Pi(ko,r._currentValue),r._currentValue=s,null!==a)if(sr(a.value,s)){if(a.children===i.children&&!_i.current){t=Hs(e,t,n);break e}}else for(null!==(a=t.child)&&(a.return=t);null!==a;){var l=a.dependencies;if(null!==l){s=a.child;for(var u=l.firstContext;null!==u;){if(u.context===r){if(1===a.tag){(u=Vo(-1,n&-n)).tag=2;var c=a.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}a.lanes|=n,null!==(u=a.alternate)&&(u.lanes|=n),_o(a.return,n,t),l.lanes|=n;break}u=u.next}}else if(10===a.tag)s=a.type===t.type?null:a.child;else if(18===a.tag){if(null===(s=a.return))throw Error(o(341));s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),_o(s,n,t),s=a.sibling}else s=a.child;if(null!==s)s.return=a;else for(s=a;null!==s;){if(s===t){s=null;break}if(null!==(a=s.sibling)){a.return=s.return,s=a;break}s=s.return}a=s}bs(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Lo(t,n),r=r(i=Ro(i)),t.flags|=1,bs(e,t,r,n),t.child;case 14:return i=ns(r=t.type,t.pendingProps),Ss(e,t,r,i=ns(r.type,i),n);case 15:return ks(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ns(r,i),Us(e,t),t.tag=1,Ai(r)?(e=!0,Ni(t)):e=!1,Lo(t,n),as(t,r,i),ls(t,r,i,n),Ts(null,t,r,!0,e,n);case 19:return Bs(e,t,n);case 22:return Es(e,t,n)}throw Error(o(156,t.tag))};var Ku="function"===typeof reportError?reportError:function(e){console.error(e)};function Qu(e){this._internalRoot=e}function Gu(e){this._internalRoot=e}function qu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Ju(){}function Zu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if("function"===typeof i){var s=i;i=function(){var e=Hu(a);s.call(e)}}Uu(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"===typeof r){var o=r;r=function(){var e=Hu(a);o.call(e)}}var a=Bu(t,r,e,0,null,!1,0,"",Ju);return e._reactRootContainer=a,e[pi]=a.current,Br(8===e.nodeType?e.parentNode:e),cu(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"===typeof r){var s=r;r=function(){var e=Hu(l);s.call(e)}}var l=Iu(e,0,!1,null,0,!1,0,"",Ju);return e._reactRootContainer=l,e[pi]=l.current,Br(8===e.nodeType?e.parentNode:e),cu((function(){Uu(t,l,n,r)})),l}(n,t,e,i,r);return Hu(a)}Gu.prototype.render=Qu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Uu(e,t,null,null)},Gu.prototype.unmount=Qu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){Uu(null,e,null,null)})),t[pi]=null}},Gu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Et();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&0!==t&&t<zt[n].priority;n++);zt.splice(n,0,e),0===n&&Dt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),ru(t,Xe()),0===(6&Tl)&&(Bl=Xe()+500,Bi()))}break;case 13:cu((function(){var t=Oo(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),Yu(e,1)}},St=function(e){if(13===e.tag){var t=Oo(e,134217728);if(null!==t)nu(t,e,134217728,eu());Yu(e,134217728)}},kt=function(e){if(13===e.tag){var t=tu(e),n=Oo(e,t);if(null!==n)nu(n,e,t,eu());Yu(e,t)}},Et=function(){return xt},Ct=function(e,t){var n=xt;try{return xt=e,t()}finally{xt=n}},Se=function(e,t,n){switch(t){case"input":if(J(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=wi(r);if(!i)throw Error(o(90));K(r),J(r,i)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Te=uu,_e=cu;var ec={usingClientEntryPoint:!1,Events:[xi,bi,wi,Pe,je,uu]},tc={findFiberByHostInstance:yi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=We(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{it=rc.inject(nc),ot=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!qu(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:S,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!qu(e))throw Error(o(299));var n=!1,r="",i=Ku;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Iu(e,1,!1,null,0,n,0,r,i),e[pi]=t.current,Br(8===e.nodeType?e.parentNode:e),new Qu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=We(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Xu(t))throw Error(o(200));return Zu(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!qu(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,i=!1,a="",s=Ku;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onRecoverableError&&(s=n.onRecoverableError)),t=Bu(t,null,e,1,null!=n?n:null,i,0,a,s),e[pi]=t.current,Br(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Gu(t)},t.render=function(e,t,n){if(!Xu(t))throw Error(o(200));return Zu(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xu(e))throw Error(o(40));return!!e._reactRootContainer&&(cu((function(){Zu(null,null,e,!1,(function(){e._reactRootContainer=null,e[pi]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xu(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Zu(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,i){if(1&i&&(r=this(r)),8&i)return r;if("object"===typeof r&&r){if(4&i&&r.__esModule)return r;if(16&i&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&i&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,n.d(o,a),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0,(()=>{"use strict";var e,t=n(43),r=n.t(t,2),i=n(391),o=n(950),a=n.t(o,2);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const l="popstate";function u(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function c(e,t){return{usr:e.state,key:e.key,idx:t}}function d(e,t,n,r){return void 0===n&&(n=null),s({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?h(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function f(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function h(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function p(t,n,r,i){void 0===i&&(i={});let{window:o=document.defaultView,v5Compat:a=!1}=i,h=o.history,p=e.Pop,m=null,g=v();function v(){return(h.state||{idx:null}).idx}function y(){p=e.Pop;let t=v(),n=null==t?null:t-g;g=t,m&&m({action:p,location:b.location,delta:n})}function x(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"===typeof e?e:f(e);return n=n.replace(/ $/,"%20"),u(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==g&&(g=0,h.replaceState(s({},h.state,{idx:g}),""));let b={get action(){return p},get location(){return t(o,h)},listen(e){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(l,y),m=e,()=>{o.removeEventListener(l,y),m=null}},createHref:e=>n(o,e),createURL:x,encodeLocation(e){let t=x(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){p=e.Push;let i=d(b.location,t,n);r&&r(i,t),g=v()+1;let s=c(i,g),l=b.createHref(i);try{h.pushState(s,"",l)}catch(u){if(u instanceof DOMException&&"DataCloneError"===u.name)throw u;o.location.assign(l)}a&&m&&m({action:p,location:b.location,delta:1})},replace:function(t,n){p=e.Replace;let i=d(b.location,t,n);r&&r(i,t),g=v();let o=c(i,g),s=b.createHref(i);h.replaceState(o,"",s),a&&m&&m({action:p,location:b.location,delta:0})},go:e=>h.go(e)};return b}var m;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(m||(m={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function g(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function v(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function y(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function x(e,t){let n=y(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function b(e,t,n,r){let i;void 0===r&&(r=!1),"string"===typeof e?i=h(e):(i=s({},e),u(!i.pathname||!i.pathname.includes("?"),v("?","pathname","search",i)),u(!i.pathname||!i.pathname.includes("#"),v("#","pathname","hash",i)),u(!i.search||!i.search.includes("#"),v("#","search","hash",i)));let o,a=""===e||""===i.pathname,l=a?"/":i.pathname;if(null==l)o=n;else{let e=t.length-1;if(!r&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}o=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:i=""}="string"===typeof e?h(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:S(r),hash:k(i)}}(i,o),d=l&&"/"!==l&&l.endsWith("/"),f=(a||"."===l)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!f||(c.pathname+="/"),c}const w=e=>e.join("/").replace(/\/\/+/g,"/"),S=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",k=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;const E=["post","put","patch","delete"],C=(new Set(E),["get",...E]);new Set(C),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}const j=t.createContext(null);const T=t.createContext(null);const _=t.createContext(null);const L=t.createContext({outlet:null,matches:[],isDataRoute:!1});function R(){return null!=t.useContext(_)}function A(){return R()||u(!1),t.useContext(_).location}function z(e){t.useContext(T).static||t.useLayoutEffect(e)}function M(){let{isDataRoute:e}=t.useContext(L);return e?function(){let{router:e}=$(N.UseNavigateStable),n=V(D.UseNavigateStable),r=t.useRef(!1);z((()=>{r.current=!0}));let i=t.useCallback((function(t,i){void 0===i&&(i={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,P({fromRouteId:n},i)))}),[e,n]);return i}():function(){R()||u(!1);let e=t.useContext(j),{basename:n,future:r,navigator:i}=t.useContext(T),{matches:o}=t.useContext(L),{pathname:a}=A(),s=JSON.stringify(x(o,r.v7_relativeSplatPath)),l=t.useRef(!1);return z((()=>{l.current=!0})),t.useCallback((function(t,r){if(void 0===r&&(r={}),!l.current)return;if("number"===typeof t)return void i.go(t);let o=b(t,JSON.parse(s),a,"path"===r.relative);null==e&&"/"!==n&&(o.pathname="/"===o.pathname?n:w([n,o.pathname])),(r.replace?i.replace:i.push)(o,r.state,r)}),[n,i,s,a,e])}()}function O(e,n){let{relative:r}=void 0===n?{}:n,{future:i}=t.useContext(T),{matches:o}=t.useContext(L),{pathname:a}=A(),s=JSON.stringify(x(o,i.v7_relativeSplatPath));return t.useMemo((()=>b(e,JSON.parse(s),a,"path"===r)),[e,s,a,r])}t.Component;var N=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(N||{}),D=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(D||{});function $(e){let n=t.useContext(j);return n||u(!1),n}function V(e){let n=function(){let e=t.useContext(L);return e||u(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||u(!1),r.route.id}function I(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}r.startTransition;function F(n){let{basename:r="/",children:i=null,location:o,navigationType:a=e.Pop,navigator:s,static:l=!1,future:c}=n;R()&&u(!1);let d=r.replace(/^\/*/,"/"),f=t.useMemo((()=>({basename:d,navigator:s,static:l,future:P({v7_relativeSplatPath:!1},c)})),[d,c,s,l]);"string"===typeof o&&(o=h(o));let{pathname:p="/",search:m="",hash:v="",state:y=null,key:x="default"}=o,b=t.useMemo((()=>{let e=g(p,d);return null==e?null:{location:{pathname:e,search:m,hash:v,state:y,key:x},navigationType:a}}),[d,p,m,v,y,x,a]);return null==b?null:t.createElement(T.Provider,{value:f},t.createElement(_.Provider,{children:i,value:b}))}new Promise((()=>{}));t.Component;function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function U(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const H=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(Ch){}new Map;const W=r.startTransition;a.flushSync,r.useId;function Y(e){let{basename:n,children:r,future:i,window:o}=e,a=t.useRef();var s;null==a.current&&(a.current=(void 0===(s={window:o,v5Compat:!0})&&(s={}),p((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return d("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:f(t)}),null,s)));let l=a.current,[u,c]=t.useState({action:l.action,location:l.location}),{v7_startTransition:h}=i||{},m=t.useCallback((e=>{h&&W?W((()=>c(e))):c(e)}),[c,h]);return t.useLayoutEffect((()=>l.listen(m)),[l,m]),t.useEffect((()=>I(i)),[i]),t.createElement(F,{basename:n,children:r,location:u.location,navigationType:u.action,navigator:l,future:i})}const K="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,Q=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,G=t.forwardRef((function(e,n){let r,{onClick:i,relative:o,reloadDocument:a,replace:s,state:l,target:c,to:d,preventScrollReset:h,viewTransition:p}=e,m=U(e,H),{basename:v}=t.useContext(T),y=!1;if("string"===typeof d&&Q.test(d)&&(r=d,K))try{let e=new URL(window.location.href),t=d.startsWith("//")?new URL(e.protocol+d):new URL(d),n=g(t.pathname,v);t.origin===e.origin&&null!=n?d=n+t.search+t.hash:y=!0}catch(Ch){}let x=function(e,n){let{relative:r}=void 0===n?{}:n;R()||u(!1);let{basename:i,navigator:o}=t.useContext(T),{hash:a,pathname:s,search:l}=O(e,{relative:r}),c=s;return"/"!==i&&(c="/"===s?i:w([i,s])),o.createHref({pathname:c,search:l,hash:a})}(d,{relative:o}),b=function(e,n){let{target:r,replace:i,state:o,preventScrollReset:a,relative:s,viewTransition:l}=void 0===n?{}:n,u=M(),c=A(),d=O(e,{relative:s});return t.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let n=void 0!==i?i:f(c)===f(d);u(e,{replace:n,state:o,preventScrollReset:a,relative:s,viewTransition:l})}}),[c,u,d,i,o,r,e,a,s,l])}(d,{replace:s,state:l,target:c,preventScrollReset:h,relative:o,viewTransition:p});return t.createElement("a",B({},m,{href:r||x,onClick:y||a?i:function(e){i&&i(e),e.defaultPrevented||b(e)},ref:n,target:c}))}));var q,X;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(q||(q={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(X||(X={}));const J="undefined"!==typeof document,Z=J?t.useLayoutEffect:t.useEffect;function ee(){const e=(0,t.useRef)(!1);return Z((()=>(e.current=!0,()=>{e.current=!1})),[]),e}const te=e=>e;class ne{constructor(){this.order=[],this.scheduled=new Set}add(e){if(!this.scheduled.has(e))return this.scheduled.add(e),this.order.push(e),!0}remove(e){const t=this.order.indexOf(e);-1!==t&&(this.order.splice(t,1),this.scheduled.delete(e))}clear(){this.order.length=0,this.scheduled.clear()}}const re=["prepare","read","update","preRender","render","postRender"];const{schedule:ie,cancel:oe,state:ae,steps:se}=function(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=re.reduce(((e,t)=>(e[t]=function(e){let t=new ne,n=new ne,r=0,i=!1,o=!1;const a=new WeakSet,s={schedule:function(e){const o=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i,s=o?t:n;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&a.add(e),s.add(e)&&o&&i&&(r=t.order.length),e},cancel:e=>{n.remove(e),a.delete(e)},process:l=>{if(i)o=!0;else{if(i=!0,[t,n]=[n,t],n.clear(),r=t.order.length,r)for(let n=0;n<r;n++){const r=t.order[n];r(l),a.has(r)&&(s.schedule(r),e())}i=!1,o&&(o=!1,s.process(l))}}};return s}((()=>n=!0)),e)),{}),a=e=>o[e].process(i),s=()=>{const o=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(o-i.timestamp,40),1),i.timestamp=o,i.isProcessing=!0,re.forEach(a),i.isProcessing=!1,n&&t&&(r=!1,e(s))},l=re.reduce(((t,a)=>{const l=o[a];return t[a]=function(t){let o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,i.isProcessing||e(s)),l.schedule(t,o,a)},t}),{});return{schedule:l,cancel:e=>re.forEach((t=>o[t].cancel(e))),state:i,steps:o}}("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:te,!0);const le=(0,t.createContext)(null);function ue(e){const n=(0,t.useRef)(null);return null===n.current&&(n.current=e()),n.current}class ce extends t.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function de(e){let{children:n,isPresent:r}=e;const i=(0,t.useId)(),o=(0,t.useRef)(null),a=(0,t.useRef)({width:0,height:0,top:0,left:0});return(0,t.useInsertionEffect)((()=>{const{width:e,height:t,top:n,left:s}=a.current;if(r||!o.current||!e||!t)return;o.current.dataset.motionPopId=i;const l=document.createElement("style");return document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`\n          [data-motion-pop-id="${i}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            top: ${n}px !important;\n            left: ${s}px !important;\n          }\n        `),()=>{document.head.removeChild(l)}}),[r]),t.createElement(ce,{isPresent:r,childRef:o,sizeRef:a},t.cloneElement(n,{ref:o}))}const fe=e=>{let{children:n,initial:r,isPresent:i,onExitComplete:o,custom:a,presenceAffectsLayout:s,mode:l}=e;const u=ue(he),c=(0,t.useId)(),d=(0,t.useMemo)((()=>({id:c,initial:r,isPresent:i,custom:a,onExitComplete:e=>{u.set(e,!0);for(const t of u.values())if(!t)return;o&&o()},register:e=>(u.set(e,!1),()=>u.delete(e))})),s?void 0:[i]);return(0,t.useMemo)((()=>{u.forEach(((e,t)=>u.set(t,!1)))}),[i]),t.useEffect((()=>{!i&&!u.size&&o&&o()}),[i]),"popLayout"===l&&(n=t.createElement(de,{isPresent:i},n)),t.createElement(le.Provider,{value:d},n)};function he(){return new Map}const pe=(0,t.createContext)({});let me=te,ge=te;const ve=e=>e.key||"";const ye=e=>{let{children:n,custom:r,initial:i=!0,onExitComplete:o,exitBeforeEnter:a,presenceAffectsLayout:s=!0,mode:l="sync"}=e;ge(!a,"Replace exitBeforeEnter with mode='wait'");const u=(0,t.useContext)(pe).forceRender||function(){const e=ee(),[n,r]=(0,t.useState)(0),i=(0,t.useCallback)((()=>{e.current&&r(n+1)}),[n]);return[(0,t.useCallback)((()=>ie.postRender(i)),[i]),n]}()[0],c=ee(),d=function(e){const n=[];return t.Children.forEach(e,(e=>{(0,t.isValidElement)(e)&&n.push(e)})),n}(n);let f=d;const h=(0,t.useRef)(new Map).current,p=(0,t.useRef)(f),m=(0,t.useRef)(new Map).current,g=(0,t.useRef)(!0);var v;if(Z((()=>{g.current=!1,function(e,t){e.forEach((e=>{const n=ve(e);t.set(n,e)}))}(d,m),p.current=f})),v=()=>{g.current=!0,m.clear(),h.clear()},(0,t.useEffect)((()=>()=>v()),[]),g.current)return t.createElement(t.Fragment,null,f.map((e=>t.createElement(fe,{key:ve(e),isPresent:!0,initial:!!i&&void 0,presenceAffectsLayout:s,mode:l},e))));f=[...f];const y=p.current.map(ve),x=d.map(ve),b=y.length;for(let t=0;t<b;t++){const e=y[t];-1!==x.indexOf(e)||h.has(e)||h.set(e,void 0)}return"wait"===l&&h.size&&(f=[]),h.forEach(((e,n)=>{if(-1!==x.indexOf(n))return;const i=m.get(n);if(!i)return;const a=y.indexOf(n);let g=e;if(!g){const e=()=>{h.delete(n);const e=Array.from(m.keys()).filter((e=>!x.includes(e)));if(e.forEach((e=>m.delete(e))),p.current=d.filter((t=>{const r=ve(t);return r===n||e.includes(r)})),!h.size){if(!1===c.current)return;u(),o&&o()}};g=t.createElement(fe,{key:ve(i),isPresent:!1,onExitComplete:e,custom:r,presenceAffectsLayout:s,mode:l},i),h.set(n,g)}f.splice(a,0,g)})),f=f.map((e=>{const n=e.key;return h.has(n)?e:t.createElement(fe,{key:ve(e),isPresent:!0,presenceAffectsLayout:s,mode:l},e)})),t.createElement(t.Fragment,null,h.size?f:f.map((e=>(0,t.cloneElement)(e))))};var xe=function(){return xe=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},xe.apply(this,arguments)};Object.create;function be(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var we=n(324),Se=n.n(we),ke="-ms-",Ee="-moz-",Ce="-webkit-",Pe="comm",je="rule",Te="decl",_e="@keyframes",Le=Math.abs,Re=String.fromCharCode,Ae=Object.assign;function ze(e){return e.trim()}function Me(e,t){return(e=t.exec(e))?e[0]:e}function Oe(e,t,n){return e.replace(t,n)}function Ne(e,t,n){return e.indexOf(t,n)}function De(e,t){return 0|e.charCodeAt(t)}function $e(e,t,n){return e.slice(t,n)}function Ve(e){return e.length}function Ie(e){return e.length}function Fe(e,t){return t.push(e),e}function Be(e,t){return e.filter((function(e){return!Me(e,t)}))}var Ue=1,He=1,We=0,Ye=0,Ke=0,Qe="";function Ge(e,t,n,r,i,o,a,s){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Ue,column:He,length:a,return:"",siblings:s}}function qe(e,t){return Ae(Ge("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Xe(e){for(;e.root;)e=qe(e.root,{children:[e]});Fe(e,e.siblings)}function Je(){return Ke=Ye>0?De(Qe,--Ye):0,He--,10===Ke&&(He=1,Ue--),Ke}function Ze(){return Ke=Ye<We?De(Qe,Ye++):0,He++,10===Ke&&(He=1,Ue++),Ke}function et(){return De(Qe,Ye)}function tt(){return Ye}function nt(e,t){return $e(Qe,e,t)}function rt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function it(e){return Ue=He=1,We=Ve(Qe=e),Ye=0,[]}function ot(e){return Qe="",e}function at(e){return ze(nt(Ye-1,ut(91===e?e+2:40===e?e+1:e)))}function st(e){for(;(Ke=et())&&Ke<33;)Ze();return rt(e)>2||rt(Ke)>3?"":" "}function lt(e,t){for(;--t&&Ze()&&!(Ke<48||Ke>102||Ke>57&&Ke<65||Ke>70&&Ke<97););return nt(e,tt()+(t<6&&32==et()&&32==Ze()))}function ut(e){for(;Ze();)switch(Ke){case e:return Ye;case 34:case 39:34!==e&&39!==e&&ut(Ke);break;case 40:41===e&&ut(e);break;case 92:Ze()}return Ye}function ct(e,t){for(;Ze()&&e+Ke!==57&&(e+Ke!==84||47!==et()););return"/*"+nt(t,Ye-1)+"*"+Re(47===e?e:Ze())}function dt(e){for(;!rt(et());)Ze();return nt(e,Ye)}function ft(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ht(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Te:return e.return=e.return||e.value;case Pe:return"";case _e:return e.return=e.value+"{"+ft(e.children,r)+"}";case je:if(!Ve(e.value=e.props.join(",")))return""}return Ve(n=ft(e.children,r))?e.return=e.value+"{"+n+"}":""}function pt(e,t,n){switch(function(e,t){return 45^De(e,0)?(((t<<2^De(e,0))<<2^De(e,1))<<2^De(e,2))<<2^De(e,3):0}(e,t)){case 5103:return Ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ce+e+e;case 4789:return Ee+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ce+e+Ee+e+ke+e+e;case 5936:switch(De(e,t+11)){case 114:return Ce+e+ke+Oe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ce+e+ke+Oe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ce+e+ke+Oe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ce+e+ke+e+e;case 6165:return Ce+e+ke+"flex-"+e+e;case 5187:return Ce+e+Oe(e,/(\w+).+(:[^]+)/,Ce+"box-$1$2"+ke+"flex-$1$2")+e;case 5443:return Ce+e+ke+"flex-item-"+Oe(e,/flex-|-self/g,"")+(Me(e,/flex-|baseline/)?"":ke+"grid-row-"+Oe(e,/flex-|-self/g,""))+e;case 4675:return Ce+e+ke+"flex-line-pack"+Oe(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ce+e+ke+Oe(e,"shrink","negative")+e;case 5292:return Ce+e+ke+Oe(e,"basis","preferred-size")+e;case 6060:return Ce+"box-"+Oe(e,"-grow","")+Ce+e+ke+Oe(e,"grow","positive")+e;case 4554:return Ce+Oe(e,/([^-])(transform)/g,"$1"+Ce+"$2")+e;case 6187:return Oe(Oe(Oe(e,/(zoom-|grab)/,Ce+"$1"),/(image-set)/,Ce+"$1"),e,"")+e;case 5495:case 3959:return Oe(e,/(image-set\([^]*)/,Ce+"$1$`$1");case 4968:return Oe(Oe(e,/(.+:)(flex-)?(.*)/,Ce+"box-pack:$3"+ke+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ce+e+e;case 4200:if(!Me(e,/flex-|baseline/))return ke+"grid-column-align"+$e(e,t)+e;break;case 2592:case 3360:return ke+Oe(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,Me(e.props,/grid-\w+-end/)}))?~Ne(e+(n=n[t].value),"span",0)?e:ke+Oe(e,"-start","")+e+ke+"grid-row-span:"+(~Ne(n,"span",0)?Me(n,/\d+/):+Me(n,/\d+/)-+Me(e,/\d+/))+";":ke+Oe(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return Me(e.props,/grid-\w+-start/)}))?e:ke+Oe(Oe(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Oe(e,/(.+)-inline(.+)/,Ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ve(e)-1-t>6)switch(De(e,t+1)){case 109:if(45!==De(e,t+4))break;case 102:return Oe(e,/(.+:)(.+)-([^]+)/,"$1"+Ce+"$2-$3$1"+Ee+(108==De(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ne(e,"stretch",0)?pt(Oe(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Oe(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,i,o,a,s){return ke+n+":"+r+s+(i?ke+n+"-span:"+(o?a:+a-+r)+s:"")+e}));case 4949:if(121===De(e,t+6))return Oe(e,":",":"+Ce)+e;break;case 6444:switch(De(e,45===De(e,14)?18:11)){case 120:return Oe(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ce+(45===De(e,14)?"inline-":"")+"box$3$1"+Ce+"$2$3$1"+ke+"$2box$3")+e;case 100:return Oe(e,":",":"+ke)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Oe(e,"scroll-","scroll-snap-")+e}return e}function mt(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Te:return void(e.return=pt(e.value,e.length,n));case _e:return ft([qe(e,{value:Oe(e.value,"@","@"+Ce)})],r);case je:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(Me(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Xe(qe(e,{props:[Oe(t,/:(read-\w+)/,":-moz-$1")]})),Xe(qe(e,{props:[t]})),Ae(e,{props:Be(n,r)});break;case"::placeholder":Xe(qe(e,{props:[Oe(t,/:(plac\w+)/,":"+Ce+"input-$1")]})),Xe(qe(e,{props:[Oe(t,/:(plac\w+)/,":-moz-$1")]})),Xe(qe(e,{props:[Oe(t,/:(plac\w+)/,ke+"input-$1")]})),Xe(qe(e,{props:[t]})),Ae(e,{props:Be(n,r)})}return""}))}}function gt(e){return ot(vt("",null,null,null,[""],e=it(e),0,[0],e))}function vt(e,t,n,r,i,o,a,s,l){for(var u=0,c=0,d=a,f=0,h=0,p=0,m=1,g=1,v=1,y=0,x="",b=i,w=o,S=r,k=x;g;)switch(p=y,y=Ze()){case 40:if(108!=p&&58==De(k,d-1)){-1!=Ne(k+=Oe(at(y),"&","&\f"),"&\f",Le(u?s[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=at(y);break;case 9:case 10:case 13:case 32:k+=st(p);break;case 92:k+=lt(tt()-1,7);continue;case 47:switch(et()){case 42:case 47:Fe(xt(ct(Ze(),tt()),t,n,l),l);break;default:k+="/"}break;case 123*m:s[u++]=Ve(k)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+c:-1==v&&(k=Oe(k,/\f/g,"")),h>0&&Ve(k)-d&&Fe(h>32?bt(k+";",r,n,d-1,l):bt(Oe(k," ","")+";",r,n,d-2,l),l);break;case 59:k+=";";default:if(Fe(S=yt(k,t,n,u,c,i,s,x,b=[],w=[],d,o),o),123===y)if(0===c)vt(k,t,S,S,b,o,d,s,w);else switch(99===f&&110===De(k,3)?100:f){case 100:case 108:case 109:case 115:vt(e,S,S,r&&Fe(yt(e,S,S,0,0,i,s,x,i,b=[],d,w),w),i,w,d,s,r?b:w);break;default:vt(k,S,S,S,[""],w,0,s,w)}}u=c=h=0,m=v=1,x=k="",d=a;break;case 58:d=1+Ve(k),h=p;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==Je())continue;switch(k+=Re(y),y*m){case 38:v=c>0?1:(k+="\f",-1);break;case 44:s[u++]=(Ve(k)-1)*v,v=1;break;case 64:45===et()&&(k+=at(Ze())),f=et(),c=d=Ve(x=k+=dt(tt())),y++;break;case 45:45===p&&2==Ve(k)&&(m=0)}}return o}function yt(e,t,n,r,i,o,a,s,l,u,c,d){for(var f=i-1,h=0===i?o:[""],p=Ie(h),m=0,g=0,v=0;m<r;++m)for(var y=0,x=$e(e,f+1,f=Le(g=a[m])),b=e;y<p;++y)(b=ze(g>0?h[y]+" "+x:Oe(x,/&\f/g,h[y])))&&(l[v++]=b);return Ge(e,t,n,0===i?je:s,l,u,c,d)}function xt(e,t,n,r){return Ge(e,t,n,Pe,Re(Ke),$e(e,2,-2),0,r)}function bt(e,t,n,r,i){return Ge(e,t,n,Te,$e(e,0,r),$e(e,r+1,-1),r,i)}var wt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},St="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",kt="active",Et="data-styled-version",Ct="6.1.15",Pt="/*!sc*/\n",jt="undefined"!=typeof window&&"HTMLElement"in window,Tt=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),_t={},Lt=(new Set,Object.freeze([])),Rt=Object.freeze({});function At(e,t,n){return void 0===n&&(n=Rt),e.theme!==n.theme&&e.theme||t||n.theme}var zt=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Mt=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ot=/(^-|-$)/g;function Nt(e){return e.replace(Mt,"-").replace(Ot,"")}var Dt=/(a)(d)/gi,$t=function(e){return String.fromCharCode(e+(e>25?39:97))};function Vt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=$t(t%52)+n;return($t(t%52)+n).replace(Dt,"$1-$2")}var It,Ft=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Bt=function(e){return Ft(5381,e)};function Ut(e){return Vt(Bt(e)>>>0)}function Ht(e){return e.displayName||e.name||"Component"}function Wt(e){return"string"==typeof e&&!0}var Yt="function"==typeof Symbol&&Symbol.for,Kt=Yt?Symbol.for("react.memo"):60115,Qt=Yt?Symbol.for("react.forward_ref"):60112,Gt={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},qt={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jt=((It={})[Qt]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},It[Kt]=Xt,It);function Zt(e){return("type"in(t=e)&&t.type.$$typeof)===Kt?Xt:"$$typeof"in e?Jt[e.$$typeof]:Gt;var t}var en=Object.defineProperty,tn=Object.getOwnPropertyNames,nn=Object.getOwnPropertySymbols,rn=Object.getOwnPropertyDescriptor,on=Object.getPrototypeOf,an=Object.prototype;function sn(e,t,n){if("string"!=typeof t){if(an){var r=on(t);r&&r!==an&&sn(e,r,n)}var i=tn(t);nn&&(i=i.concat(nn(t)));for(var o=Zt(e),a=Zt(t),s=0;s<i.length;++s){var l=i[s];if(!(l in qt||n&&n[l]||a&&l in a||o&&l in o)){var u=rn(t,l);try{en(e,l,u)}catch(e){}}}}return e}function ln(e){return"function"==typeof e}function un(e){return"object"==typeof e&&"styledComponentId"in e}function cn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function dn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function fn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function hn(e,t,n){if(void 0===n&&(n=!1),!n&&!fn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=hn(e[r],t[r]);else if(fn(t))for(var r in t)e[r]=hn(e[r],t[r]);return e}function pn(e,t){Object.defineProperty(e,"toString",{value:t})}function mn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var gn=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw mn(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var o=r;o<i;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),s=(o=0,t.length);o<s;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,o=r;o<i;o++)t+="".concat(this.tag.getRule(o)).concat(Pt);return t},e}(),vn=new Map,yn=new Map,xn=1,bn=function(e){if(vn.has(e))return vn.get(e);for(;yn.has(xn);)xn++;var t=xn++;return vn.set(e,t),yn.set(t,e),t},wn=function(e,t){xn=t+1,vn.set(e,t),yn.set(t,e)},Sn="style[".concat(St,"][").concat(Et,'="').concat(Ct,'"]'),kn=new RegExp("^".concat(St,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),En=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},Cn=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Pt),i=[],o=0,a=r.length;o<a;o++){var s=r[o].trim();if(s){var l=s.match(kn);if(l){var u=0|parseInt(l[1],10),c=l[2];0!==u&&(wn(c,u),En(e,c,l[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(s)}}},Pn=function(e){for(var t=document.querySelectorAll(Sn),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(St)!==kt&&(Cn(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function jn(){return n.nc}var Tn=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(St,"]")));return t[t.length-1]}(n),o=void 0!==i?i.nextSibling:null;r.setAttribute(St,kt),r.setAttribute(Et,Ct);var a=jn();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},_n=function(){function e(e){this.element=Tn(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw mn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Ln=function(){function e(e){this.element=Tn(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Rn=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),An=jt,zn={isServer:!jt,useCSSOMInjection:!Tt},Mn=function(){function e(e,t,n){void 0===e&&(e=Rt),void 0===t&&(t={});var r=this;this.options=xe(xe({},zn),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&jt&&An&&(An=!1,Pn(this)),pn(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return yn.get(e)}(n);if(void 0===i)return"continue";var o=e.names.get(i),a=t.getGroup(n);if(void 0===o||!o.size||0===a.length)return"continue";var s="".concat(St,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==o&&o.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(Pt)},o=0;o<n;o++)i(o);return r}(r)}))}return e.registerId=function(e){return bn(e)},e.prototype.rehydrate=function(){!this.server&&jt&&Pn(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(xe(xe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Rn(n):t?new _n(n):new Ln(n)}(this.options),new gn(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(bn(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(bn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(bn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),On=/&/g,Nn=/^\s*\/\/.*$/gm;function Dn(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Dn(e.children,t)),e}))}function $n(e){var t,n,r,i=void 0===e?Rt:e,o=i.options,a=void 0===o?Rt:o,s=i.plugins,l=void 0===s?Lt:s,u=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},c=l.slice();c.push((function(e){e.type===je&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(On,n).replace(r,u))})),a.prefix&&c.push(mt),c.push(ht);var d=function(e,i,o,s){void 0===i&&(i=""),void 0===o&&(o=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(Nn,""),u=gt(o||i?"".concat(o," ").concat(i," { ").concat(l," }"):l);a.namespace&&(u=Dn(u,a.namespace));var d,f=[];return ft(u,function(e){var t=Ie(e);return function(n,r,i,o){for(var a="",s=0;s<t;s++)a+=e[s](n,r,i,o)||"";return a}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=l.length?l.reduce((function(e,t){return t.name||mn(15),Ft(e,t.name)}),5381).toString():"",d}var Vn=new Mn,In=$n(),Fn=t.createContext({shouldForwardProp:void 0,styleSheet:Vn,stylis:In}),Bn=(Fn.Consumer,t.createContext(void 0));function Un(){return(0,t.useContext)(Fn)}function Hn(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],i=n[1],o=Un().styleSheet,a=(0,t.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),s=(0,t.useMemo)((function(){return $n({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)((function(){Se()(r,e.stylisPlugins)||i(e.stylisPlugins)}),[e.stylisPlugins]);var l=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}}),[e.shouldForwardProp,a,s]);return t.createElement(Fn.Provider,{value:l},t.createElement(Bn.Provider,{value:s},e.children))}var Wn=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=In);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,pn(this,(function(){throw mn(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=In),this.name+e.hash},e}(),Yn=function(e){return e>="A"&&e<="Z"};function Kn(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Yn(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Qn=function(e){return null==e||!1===e||""===e},Gn=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Qn(o)&&(Array.isArray(o)&&o.isCss||ln(o)?r.push("".concat(Kn(i),":"),o,";"):fn(o)?r.push.apply(r,be(be(["".concat(i," {")],Gn(o),!1),["}"],!1)):r.push("".concat(Kn(i),": ").concat((t=i,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in wt||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function qn(e,t,n,r){return Qn(e)?[]:un(e)?[".".concat(e.styledComponentId)]:ln(e)?!ln(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:qn(e(t),t,n,r):e instanceof Wn?n?(e.inject(n,r),[e.getName(r)]):[e]:fn(e)?Gn(e):Array.isArray(e)?Array.prototype.concat.apply(Lt,e.map((function(e){return qn(e,t,n,r)}))):[e.toString()];var i}function Xn(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ln(n)&&!un(n))return!1}return!0}var Jn=Bt(Ct),Zn=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Xn(e),this.componentId=t,this.baseHash=Ft(Jn,t),this.baseStyle=n,Mn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=cn(r,this.staticRulesId);else{var i=dn(qn(this.rules,e,t,n)),o=Vt(Ft(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=n(i,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}r=cn(r,o),this.staticRulesId=o}else{for(var s=Ft(this.baseHash,n.hash),l="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)l+=c;else if(c){var d=dn(qn(c,e,t,n));s=Ft(s,d+u),l+=d}}if(l){var f=Vt(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(l,".".concat(f),void 0,this.componentId)),r=cn(r,f)}}return r},e}(),er=t.createContext(void 0);er.Consumer;function tr(e){var n=t.useContext(er),r=(0,t.useMemo)((function(){return function(e,t){if(!e)throw mn(14);if(ln(e))return e(t);if(Array.isArray(e)||"object"!=typeof e)throw mn(8);return t?xe(xe({},t),e):e}(e.theme,n)}),[e.theme,n]);return e.children?t.createElement(er.Provider,{value:r},e.children):null}var nr={};new Set;function rr(e,n,r){var i=un(e),o=e,a=!Wt(e),s=n.attrs,l=void 0===s?Lt:s,u=n.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":Nt(e);nr[n]=(nr[n]||0)+1;var r="".concat(n,"-").concat(Ut(Ct+n+nr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,d=n.displayName,f=void 0===d?function(e){return Wt(e)?"styled.".concat(e):"Styled(".concat(Ht(e),")")}(e):d,h=n.displayName&&n.componentId?"".concat(Nt(n.displayName),"-").concat(n.componentId):n.componentId||c,p=i&&o.attrs?o.attrs.concat(l).filter(Boolean):l,m=n.shouldForwardProp;if(i&&o.shouldForwardProp){var g=o.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new Zn(r,h,i?o.componentStyle:void 0);function x(e,n){return function(e,n,r){var i=e.attrs,o=e.componentStyle,a=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,u=e.target,c=t.useContext(er),d=Un(),f=e.shouldForwardProp||d.shouldForwardProp,h=At(n,c,a)||Rt,p=function(e,t,n){for(var r,i=xe(xe({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var a=ln(r=e[o])?r(i):r;for(var s in a)i[s]="className"===s?cn(i[s],a[s]):"style"===s?xe(xe({},i[s]),a[s]):a[s]}return t.className&&(i.className=cn(i.className,t.className)),i}(i,n,h),m=p.as||u,g={};for(var v in p)void 0===p[v]||"$"===v[0]||"as"===v||"theme"===v&&p.theme===h||("forwardedAs"===v?g.as=p.forwardedAs:f&&!f(v,m)||(g[v]=p[v]));var y=function(e,t){var n=Un();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,p),x=cn(s,l);return y&&(x+=" "+y),p.className&&(x+=" "+p.className),g[Wt(m)&&!zt.has(m)?"class":"className"]=x,r&&(g.ref=r),(0,t.createElement)(m,g)}(b,e,n)}x.displayName=f;var b=t.forwardRef(x);return b.attrs=p,b.componentStyle=y,b.displayName=f,b.shouldForwardProp=m,b.foldedComponentIds=i?cn(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=h,b.target=i?o.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)hn(e,i[r],!0);return e}({},o.defaultProps,e):e}}),pn(b,(function(){return".".concat(b.styledComponentId)})),a&&sn(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function ir(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var or=function(e){return Object.assign(e,{isCss:!0})};function ar(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ln(e)||fn(e))return or(qn(ir(Lt,be([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?qn(r):or(qn(ir(r,t)))}function sr(e,t,n){if(void 0===n&&(n=Rt),!t)throw mn(1,t);var r=function(r){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,ar.apply(void 0,be([r],i,!1)))};return r.attrs=function(r){return sr(e,t,xe(xe({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return sr(e,t,xe(xe({},n),r))},r}var lr=function(e){return sr(rr,e)},ur=lr;zt.forEach((function(e){ur[e]=lr(e)}));var cr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Xn(e),Mn.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(dn(qn(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Mn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=jn(),r=dn([n&&'nonce="'.concat(n,'"'),"".concat(St,'="true"'),"".concat(Et,'="').concat(Ct,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw mn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw mn(2);var r=e.instance.toString();if(!r)return[];var i=((n={})[St]="",n[Et]=Ct,n.dangerouslySetInnerHTML={__html:r},n),o=jn();return o&&(i.nonce=o),[t.createElement("style",xe({},i,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Mn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw mn(2);return t.createElement(Hn,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw mn(3)}})(),"__sc-".concat(St,"__");const dr=(0,t.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),fr=(0,t.createContext)({}),hr=(0,t.createContext)({strict:!1}),pr=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),mr="data-"+pr("framerAppearId");function gr(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}function vr(e){return"string"===typeof e||Array.isArray(e)}function yr(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}const xr=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],br=["initial",...xr];function wr(e){return yr(e.animate)||br.some((t=>vr(e[t])))}function Sr(e){return Boolean(wr(e)||e.variants)}function kr(e){const{initial:n,animate:r}=function(e,t){if(wr(e)){const{initial:t,animate:n}=e;return{initial:!1===t||vr(t)?t:void 0,animate:vr(n)?n:void 0}}return!1!==e.inherit?t:{}}(e,(0,t.useContext)(fr));return(0,t.useMemo)((()=>({initial:n,animate:r})),[Er(n),Er(r)])}function Er(e){return Array.isArray(e)?e.join(" "):e}const Cr={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Pr={};for(const n in Cr)Pr[n]={isEnabled:e=>Cr[n].some((t=>!!e[t]))};const jr=(0,t.createContext)({}),Tr=Symbol.for("motionComponentSymbol");function _r(e){let{preloadedFeatures:n,createVisualElement:r,useRender:i,useVisualState:o,Component:a}=e;n&&function(e){for(const t in e)Pr[t]={...Pr[t],...e[t]}}(n);const s=(0,t.forwardRef)((function(e,s){let l;const u={...(0,t.useContext)(dr),...e,layoutId:Lr(e)},{isStatic:c}=u,d=kr(e),f=o(e,c);if(!c&&J){d.visualElement=function(e,n,r,i){const{visualElement:o}=(0,t.useContext)(fr),a=(0,t.useContext)(hr),s=(0,t.useContext)(le),l=(0,t.useContext)(dr).reducedMotion,u=(0,t.useRef)();i=i||a.renderer,!u.current&&i&&(u.current=i(e,{visualState:n,parent:o,props:r,presenceContext:s,blockInitialAnimation:!!s&&!1===s.initial,reducedMotionConfig:l}));const c=u.current;(0,t.useInsertionEffect)((()=>{c&&c.update(r,s)}));const d=(0,t.useRef)(Boolean(r[mr]&&!window.HandoffComplete));return Z((()=>{c&&(c.render(),d.current&&c.animationState&&c.animationState.animateChanges())})),(0,t.useEffect)((()=>{c&&(c.updateFeatures(),!d.current&&c.animationState&&c.animationState.animateChanges(),d.current&&(d.current=!1,window.HandoffComplete=!0))})),c}(a,f,u,r);const e=(0,t.useContext)(jr),i=(0,t.useContext)(hr).strict;d.visualElement&&(l=d.visualElement.loadFeatures(u,i,n,e))}return t.createElement(fr.Provider,{value:d},l&&d.visualElement?t.createElement(l,{visualElement:d.visualElement,...u}):null,i(a,e,function(e,n,r){return(0,t.useCallback)((t=>{t&&e.mount&&e.mount(t),n&&(t?n.mount(t):n.unmount()),r&&("function"===typeof r?r(t):gr(r)&&(r.current=t))}),[n])}(f,d.visualElement,s),f,c,d.visualElement))}));return s[Tr]=a,s}function Lr(e){let{layoutId:n}=e;const r=(0,t.useContext)(pe).id;return r&&void 0!==n?r+"-"+n:n}function Rr(e){function t(t){return _r(e(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}))}if("undefined"===typeof Proxy)return t;const n=new Map;return new Proxy(t,{get:(e,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}const Ar=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function zr(e){return"string"===typeof e&&!e.includes("-")&&!!(Ar.indexOf(e)>-1||/[A-Z]/.test(e))}const Mr={};const Or=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Nr=new Set(Or);function Dr(e,t){let{layout:n,layoutId:r}=t;return Nr.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!Mr[e]||"opacity"===e)}const $r=e=>Boolean(e&&e.getVelocity),Vr={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ir=Or.length;const Fr=e=>t=>"string"===typeof t&&t.startsWith(e),Br=Fr("--"),Ur=Fr("var(--"),Hr=(e,t)=>t&&"number"===typeof e?t.transform(e):e,Wr=(e,t,n)=>Math.min(Math.max(n,e),t),Yr={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},Kr={...Yr,transform:e=>Wr(0,1,e)},Qr={...Yr,default:1},Gr=e=>Math.round(1e5*e)/1e5,qr=/(-)?([\d]*\.?[\d])+/g,Xr=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Jr=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Zr(e){return"string"===typeof e}const ei=e=>({test:t=>Zr(t)&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),ti=ei("deg"),ni=ei("%"),ri=ei("px"),ii=ei("vh"),oi=ei("vw"),ai={...ni,parse:e=>ni.parse(e)/100,transform:e=>ni.transform(100*e)},si={...Yr,transform:Math.round},li={borderWidth:ri,borderTopWidth:ri,borderRightWidth:ri,borderBottomWidth:ri,borderLeftWidth:ri,borderRadius:ri,radius:ri,borderTopLeftRadius:ri,borderTopRightRadius:ri,borderBottomRightRadius:ri,borderBottomLeftRadius:ri,width:ri,maxWidth:ri,height:ri,maxHeight:ri,size:ri,top:ri,right:ri,bottom:ri,left:ri,padding:ri,paddingTop:ri,paddingRight:ri,paddingBottom:ri,paddingLeft:ri,margin:ri,marginTop:ri,marginRight:ri,marginBottom:ri,marginLeft:ri,rotate:ti,rotateX:ti,rotateY:ti,rotateZ:ti,scale:Qr,scaleX:Qr,scaleY:Qr,scaleZ:Qr,skew:ti,skewX:ti,skewY:ti,distance:ri,translateX:ri,translateY:ri,translateZ:ri,x:ri,y:ri,z:ri,perspective:ri,transformPerspective:ri,opacity:Kr,originX:ai,originY:ai,originZ:ri,zIndex:si,fillOpacity:Kr,strokeOpacity:Kr,numOctaves:si};function ui(e,t,n,r){const{style:i,vars:o,transform:a,transformOrigin:s}=e;let l=!1,u=!1,c=!0;for(const d in t){const e=t[d];if(Br(d)){o[d]=e;continue}const n=li[d],r=Hr(e,n);if(Nr.has(d)){if(l=!0,a[d]=r,!c)continue;e!==(n.default||0)&&(c=!1)}else d.startsWith("origin")?(u=!0,s[d]=r):i[d]=r}if(t.transform||(l||r?i.transform=function(e,t,n,r){let{enableHardwareAcceleration:i=!0,allowTransformNone:o=!0}=t,a="";for(let s=0;s<Ir;s++){const t=Or[s];void 0!==e[t]&&(a+=`${Vr[t]||t}(${e[t]}) `)}return i&&!e.z&&(a+="translateZ(0)"),a=a.trim(),r?a=r(e,n?"":a):o&&n&&(a="none"),a}(e.transform,n,c,r):i.transform&&(i.transform="none")),u){const{originX:e="50%",originY:t="50%",originZ:n=0}=s;i.transformOrigin=`${e} ${t} ${n}`}}const ci=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function di(e,t,n){for(const r in t)$r(t[r])||Dr(r,n)||(e[r]=t[r])}function fi(e,n,r){const i={};return di(i,e.style||{},e),Object.assign(i,function(e,n,r){let{transformTemplate:i}=e;return(0,t.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return ui(e,n,{enableHardwareAcceleration:!r},i),Object.assign({},e.vars,e.style)}),[n])}(e,n,r)),e.transformValues?e.transformValues(i):i}function hi(e,t,n){const r={},i=fi(e,t,n);return e.drag&&!1!==e.dragListener&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const pi=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function mi(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||pi.has(e)}let gi=e=>!mi(e);try{(vi=require("@emotion/is-prop-valid").default)&&(gi=e=>e.startsWith("on")?!mi(e):vi(e))}catch(Ph){}var vi;function yi(e,t,n){return"string"===typeof e?e:ri.transform(t+n*e)}const xi={offset:"stroke-dashoffset",array:"stroke-dasharray"},bi={offset:"strokeDashoffset",array:"strokeDasharray"};function wi(e,t,n,r,i){let{attrX:o,attrY:a,attrScale:s,originX:l,originY:u,pathLength:c,pathSpacing:d=1,pathOffset:f=0,...h}=t;if(ui(e,h,n,i),r)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:p,style:m,dimensions:g}=e;p.transform&&(g&&(m.transform=p.transform),delete p.transform),g&&(void 0!==l||void 0!==u||m.transform)&&(m.transformOrigin=function(e,t,n){return`${yi(t,e.x,e.width)} ${yi(n,e.y,e.height)}`}(g,void 0!==l?l:.5,void 0!==u?u:.5)),void 0!==o&&(p.x=o),void 0!==a&&(p.y=a),void 0!==s&&(p.scale=s),void 0!==c&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const o=i?xi:bi;e[o.offset]=ri.transform(-r);const a=ri.transform(t),s=ri.transform(n);e[o.array]=`${a} ${s}`}(p,c,d,f,!1)}const Si=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),ki=e=>"string"===typeof e&&"svg"===e.toLowerCase();function Ei(e,n,r,i){const o=(0,t.useMemo)((()=>{const t={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return wi(t,n,{enableHardwareAcceleration:!1},ki(i),e.transformTemplate),{...t.attrs,style:{...t.style}}}),[n]);if(e.style){const t={};di(t,e.style,e),o.style={...t,...o.style}}return o}function Ci(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(n,r,i,o,a)=>{let{latestValues:s}=o;const l=(zr(n)?Ei:hi)(r,s,a,n),u=function(e,t,n){const r={};for(const i in e)"values"===i&&"object"===typeof e.values||(gi(i)||!0===n&&mi(i)||!t&&!mi(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(r,"string"===typeof n,e),c={...u,...l,ref:i},{children:d}=r,f=(0,t.useMemo)((()=>$r(d)?d.get():d),[d]);return(0,t.createElement)(n,{...c,children:f})}}function Pi(e,t,n,r){let{style:i,vars:o}=t;Object.assign(e.style,i,r&&r.getProjectionStyles(n));for(const a in o)e.style.setProperty(a,o[a])}const ji=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Ti(e,t,n,r){Pi(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(ji.has(i)?i:pr(i),t.attrs[i])}function _i(e,t){const{style:n}=e,r={};for(const i in n)($r(n[i])||t.style&&$r(t.style[i])||Dr(i,e))&&(r[i]=n[i]);return r}function Li(e,t){const n=_i(e,t);for(const r in e)if($r(e[r])||$r(t[r])){n[-1!==Or.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r]=e[r]}return n}function Ri(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return"function"===typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),"string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t&&(t=t(void 0!==n?n:e.custom,r,i)),t}const Ai=e=>Array.isArray(e),zi=e=>Ai(e)?e[e.length-1]||0:e;function Mi(e){const t=$r(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const Oi=e=>(n,r)=>{const i=(0,t.useContext)(fr),o=(0,t.useContext)(le),a=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:i,createRenderState:o,onMount:a}=e;const s={latestValues:Ni(t,n,r,i),renderState:o()};return a&&(s.mount=e=>a(t,e,s)),s}(e,n,i,o);return r?a():ue(a)};function Ni(e,t,n,r){const i={},o=r(e,{});for(const f in o)i[f]=Mi(o[f]);let{initial:a,animate:s}=e;const l=wr(e),u=Sr(e);t&&u&&!l&&!1!==e.inherit&&(void 0===a&&(a=t.initial),void 0===s&&(s=t.animate));let c=!!n&&!1===n.initial;c=c||!1===a;const d=c?s:a;if(d&&"boolean"!==typeof d&&!yr(d)){(Array.isArray(d)?d:[d]).forEach((t=>{const n=Ri(e,t);if(!n)return;const{transitionEnd:r,transition:o,...a}=n;for(const e in a){let t=a[e];if(Array.isArray(t)){t=t[c?t.length-1:0]}null!==t&&(i[e]=t)}for(const e in r)i[e]=r[e]}))}return i}const Di={useVisualState:Oi({scrapeMotionValuesFromProps:Li,createRenderState:Si,onMount:(e,t,n)=>{let{renderState:r,latestValues:i}=n;ie.read((()=>{try{r.dimensions="function"===typeof t.getBBox?t.getBBox():t.getBoundingClientRect()}catch(Ch){r.dimensions={x:0,y:0,width:0,height:0}}})),ie.render((()=>{wi(r,i,{enableHardwareAcceleration:!1},ki(t.tagName),e.transformTemplate),Ti(t,r)}))}})},$i={useVisualState:Oi({scrapeMotionValuesFromProps:_i,createRenderState:ci})};function Vi(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Ii=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function Fi(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"page";return{point:{x:e[t+"X"],y:e[t+"Y"]}}}function Bi(e,t,n,r){return Vi(e,t,(e=>t=>Ii(t)&&e(t,Fi(t)))(n),r)}const Ui=(e,t)=>n=>t(e(n)),Hi=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(Ui)};function Wi(e){let t=null;return()=>{const n=()=>{t=null};return null===t&&(t=e,n)}}const Yi=Wi("dragHorizontal"),Ki=Wi("dragVertical");function Qi(e){let t=!1;if("y"===e)t=Ki();else if("x"===e)t=Yi();else{const e=Yi(),n=Ki();e&&n?t=()=>{e(),n()}:(e&&e(),n&&n())}return t}function Gi(){const e=Qi(!0);return!e||(e(),!1)}class qi{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Xi(e,t){const n="pointer"+(t?"enter":"leave"),r="onHover"+(t?"Start":"End");return Bi(e.current,n,((n,i)=>{if("touch"===n.pointerType||Gi())return;const o=e.getProps();e.animationState&&o.whileHover&&e.animationState.setActive("whileHover",t),o[r]&&ie.update((()=>o[r](n,i)))}),{passive:!e.getProps()[r]})}const Ji=(e,t)=>!!t&&(e===t||Ji(e,t.parentElement));function Zi(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Fi(n))}const eo=new WeakMap,to=new WeakMap,no=e=>{const t=eo.get(e.target);t&&t(e)},ro=e=>{e.forEach(no)};function io(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;to.has(r)||to.set(r,{});const i=to.get(r),o=JSON.stringify(n);return i[o]||(i[o]=new IntersectionObserver(ro,{root:t,...n})),i[o]}(t);return eo.set(e,n),r.observe(e),()=>{eo.delete(e),r.unobserve(e)}}const oo={some:0,all:1};const ao={inView:{Feature:class extends qi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,o={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:oo[r]};return io(this.node.current,o,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),o=t?n:r;o&&o(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends qi{constructor(){super(...arguments),this.removeStartListeners=te,this.removeEndListeners=te,this.removeAccessibleListeners=te,this.startPointerPress=(e,t)=>{if(this.isPressing)return;this.removeEndListeners();const n=this.node.getProps(),r=Bi(window,"pointerup",((e,t)=>{if(!this.checkPressEnd())return;const{onTap:n,onTapCancel:r,globalTapTarget:i}=this.node.getProps();ie.update((()=>{i||Ji(this.node.current,e.target)?n&&n(e,t):r&&r(e,t)}))}),{passive:!(n.onTap||n.onPointerUp)}),i=Bi(window,"pointercancel",((e,t)=>this.cancelPress(e,t)),{passive:!(n.onTapCancel||n.onPointerCancel)});this.removeEndListeners=Hi(r,i),this.startPress(e,t)},this.startAccessiblePress=()=>{const e=Vi(this.node.current,"keydown",(e=>{if("Enter"!==e.key||this.isPressing)return;this.removeEndListeners(),this.removeEndListeners=Vi(this.node.current,"keyup",(e=>{"Enter"===e.key&&this.checkPressEnd()&&Zi("up",((e,t)=>{const{onTap:n}=this.node.getProps();n&&ie.update((()=>n(e,t)))}))})),Zi("down",((e,t)=>{this.startPress(e,t)}))})),t=Vi(this.node.current,"blur",(()=>{this.isPressing&&Zi("cancel",((e,t)=>this.cancelPress(e,t)))}));this.removeAccessibleListeners=Hi(e,t)}}startPress(e,t){this.isPressing=!0;const{onTapStart:n,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),n&&ie.update((()=>n(e,t)))}checkPressEnd(){this.removeEndListeners(),this.isPressing=!1;return this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!Gi()}cancelPress(e,t){if(!this.checkPressEnd())return;const{onTapCancel:n}=this.node.getProps();n&&ie.update((()=>n(e,t)))}mount(){const e=this.node.getProps(),t=Bi(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),n=Vi(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Hi(t,n)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}},focus:{Feature:class extends qi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(Ch){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Hi(Vi(this.node.current,"focus",(()=>this.onFocus())),Vi(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends qi{mount(){this.unmount=Hi(Xi(this.node,!0),Xi(this.node,!1))}unmount(){}}}};function so(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function lo(e,t,n){const r=e.getProps();return Ri(r,t,void 0!==n?n:r.custom,function(e){const t={};return e.values.forEach(((e,n)=>t[n]=e.get())),t}(e),function(e){const t={};return e.values.forEach(((e,n)=>t[n]=e.getVelocity())),t}(e))}const uo=e=>1e3*e,co=e=>e/1e3,fo=!1,ho=e=>Array.isArray(e)&&"number"===typeof e[0];function po(e){return Boolean(!e||"string"===typeof e&&go[e]||ho(e)||Array.isArray(e)&&e.every(po))}const mo=e=>{let[t,n,r,i]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${i})`},go={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:mo([0,.65,.55,1]),circOut:mo([.55,0,1,.45]),backIn:mo([.31,.01,.66,-.59]),backOut:mo([.33,1.53,.69,.99])};function vo(e){if(e)return ho(e)?mo(e):Array.isArray(e)?e.map(vo):go[e]}const yo=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function xo(e,t,n,r){if(e===t&&n===r)return te;const i=t=>function(e,t,n,r,i){let o,a,s=0;do{a=t+(n-t)/2,o=yo(a,r,i)-e,o>0?n=a:t=a}while(Math.abs(o)>1e-7&&++s<12);return a}(t,0,1,e,n);return e=>0===e||1===e?e:yo(i(e),t,r)}const bo=xo(.42,0,1,1),wo=xo(0,0,.58,1),So=xo(.42,0,.58,1),ko=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Eo=e=>t=>1-e(1-t),Co=e=>1-Math.sin(Math.acos(e)),Po=Eo(Co),jo=ko(Co),To=xo(.33,1.53,.69,.99),_o=Eo(To),Lo=ko(_o),Ro={linear:te,easeIn:bo,easeInOut:So,easeOut:wo,circIn:Co,circInOut:jo,circOut:Po,backIn:_o,backInOut:Lo,backOut:To,anticipate:e=>(e*=2)<1?.5*_o(e):.5*(2-Math.pow(2,-10*(e-1)))},Ao=e=>{if(Array.isArray(e)){ge(4===e.length,"Cubic bezier arrays must contain four numerical values.");const[t,n,r,i]=e;return xo(t,n,r,i)}return"string"===typeof e?(ge(void 0!==Ro[e],`Invalid easing type '${e}'`),Ro[e]):e},zo=(e,t)=>n=>Boolean(Zr(n)&&Jr.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),Mo=(e,t,n)=>r=>{if(!Zr(r))return r;const[i,o,a,s]=r.match(qr);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(a),alpha:void 0!==s?parseFloat(s):1}},Oo={...Yr,transform:e=>Math.round((e=>Wr(0,255,e))(e))},No={test:zo("rgb","red"),parse:Mo("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:i=1}=e;return"rgba("+Oo.transform(t)+", "+Oo.transform(n)+", "+Oo.transform(r)+", "+Gr(Kr.transform(i))+")"}};const Do={test:zo("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:No.transform},$o={test:zo("hsl","hue"),parse:Mo("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+ni.transform(Gr(n))+", "+ni.transform(Gr(r))+", "+Gr(Kr.transform(i))+")"}},Vo={test:e=>No.test(e)||Do.test(e)||$o.test(e),parse:e=>No.test(e)?No.parse(e):$o.test(e)?$o.parse(e):Do.parse(e),transform:e=>Zr(e)?e:e.hasOwnProperty("red")?No.transform(e):$o.transform(e)},Io=(e,t,n)=>-n*e+n*t+e;function Fo(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}const Bo=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},Uo=[Do,No,$o];function Ho(e){const t=(e=>Uo.find((t=>t.test(e))))(e);ge(Boolean(t),`'${e}' is not an animatable color. Use the equivalent color code instead.`);let n=t.parse(e);return t===$o&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:i}=e;t/=360,n/=100,r/=100;let o=0,a=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,i=2*r-e;o=Fo(i,e,t+1/3),a=Fo(i,e,t),s=Fo(i,e,t-1/3)}else o=a=s=r;return{red:Math.round(255*o),green:Math.round(255*a),blue:Math.round(255*s),alpha:i}}(n)),n}const Wo=(e,t)=>{const n=Ho(e),r=Ho(t),i={...n};return e=>(i.red=Bo(n.red,r.red,e),i.green=Bo(n.green,r.green,e),i.blue=Bo(n.blue,r.blue,e),i.alpha=Io(n.alpha,r.alpha,e),No.transform(i))};const Yo={regex:/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,countKey:"Vars",token:"${v}",parse:te},Ko={regex:Xr,countKey:"Colors",token:"${c}",parse:Vo.parse},Qo={regex:qr,countKey:"Numbers",token:"${n}",parse:Yr.parse};function Go(e,t){let{regex:n,countKey:r,token:i,parse:o}=t;const a=e.tokenised.match(n);a&&(e["num"+r]=a.length,e.tokenised=e.tokenised.replace(n,i),e.values.push(...a.map(o)))}function qo(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&Go(n,Yo),Go(n,Ko),Go(n,Qo),n}function Xo(e){return qo(e).values}function Jo(e){const{values:t,numColors:n,numVars:r,tokenised:i}=qo(e),o=t.length;return e=>{let t=i;for(let i=0;i<o;i++)t=i<r?t.replace(Yo.token,e[i]):i<r+n?t.replace(Ko.token,Vo.transform(e[i])):t.replace(Qo.token,Gr(e[i]));return t}}const Zo=e=>"number"===typeof e?0:e;const ea={test:function(e){var t,n;return isNaN(e)&&Zr(e)&&((null===(t=e.match(qr))||void 0===t?void 0:t.length)||0)+((null===(n=e.match(Xr))||void 0===n?void 0:n.length)||0)>0},parse:Xo,createTransformer:Jo,getAnimatableNone:function(e){const t=Xo(e);return Jo(e)(t.map(Zo))}},ta=(e,t)=>n=>`${n>0?t:e}`;function na(e,t){return"number"===typeof e?n=>Io(e,t,n):Vo.test(e)?Wo(e,t):e.startsWith("var(")?ta(e,t):oa(e,t)}const ra=(e,t)=>{const n=[...e],r=n.length,i=e.map(((e,n)=>na(e,t[n])));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}},ia=(e,t)=>{const n={...e,...t},r={};for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=na(e[i],t[i]));return e=>{for(const t in r)n[t]=r[t](e);return n}},oa=(e,t)=>{const n=ea.createTransformer(t),r=qo(e),i=qo(t);return r.numVars===i.numVars&&r.numColors===i.numColors&&r.numNumbers>=i.numNumbers?Hi(ra(r.values,i.values),n):(me(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),ta(e,t))},aa=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r},sa=(e,t)=>n=>Io(e,t,n);function la(e,t,n){const r=[],i=n||function(e){return"number"===typeof e?sa:"string"===typeof e?Vo.test(e)?Wo:oa:Array.isArray(e)?ra:"object"===typeof e?ia:sa}(e[0]),o=e.length-1;for(let a=0;a<o;a++){let n=i(e[a],e[a+1]);if(t){const e=Array.isArray(t)?t[a]||te:t;n=Hi(e,n)}r.push(n)}return r}function ua(e,t){let{clamp:n=!0,ease:r,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=e.length;if(ge(o===t.length,"Both input and output ranges must be the same length"),1===o)return()=>t[0];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const a=la(t,r,i),s=a.length,l=t=>{let n=0;if(s>1)for(;n<e.length-2&&!(t<e[n+1]);n++);const r=aa(e[n],e[n+1],t);return a[n](r)};return n?t=>l(Wr(e[0],e[o-1],t)):l}function ca(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=aa(0,t,r);e.push(Io(n,1,i))}}(t,e.length-1),t}function da(e){let{duration:t=300,keyframes:n,times:r,ease:i="easeInOut"}=e;const o=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(Ao):Ao(i),a={done:!1,value:n[0]},s=function(e,t){return e.map((e=>e*t))}(r&&r.length===n.length?r:ca(n),t),l=ua(s,n,{ease:Array.isArray(o)?o:(u=n,c=o,u.map((()=>c||So)).splice(0,u.length-1))});var u,c;return{calculatedDuration:t,next:e=>(a.value=l(e),a.done=e>=t,a)}}function fa(e,t){return t?e*(1e3/t):0}function ha(e,t,n){const r=Math.max(t-5,0);return fa(n-e(r),t-r)}const pa=.001;function ma(e){let t,n,{duration:r=800,bounce:i=.25,velocity:o=0,mass:a=1}=e;me(r<=uo(10),"Spring duration must be 10 seconds or less");let s=1-i;s=Wr(.05,1,s),r=Wr(.01,10,co(r)),s<1?(t=e=>{const t=e*s,n=t*r,i=t-o,a=va(e,s),l=Math.exp(-n);return pa-i/a*l},n=e=>{const n=e*s*r,i=n*o+o,a=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),u=va(Math.pow(e,2),s);return(-t(e)+pa>0?-1:1)*((i-a)*l)/u}):(t=e=>Math.exp(-e*r)*((e-o)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(o-e)));const l=function(e,t,n){let r=n;for(let i=1;i<ga;i++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=uo(r),isNaN(l))return{stiffness:100,damping:10,duration:r};{const e=Math.pow(l,2)*a;return{stiffness:e,damping:2*s*Math.sqrt(a*e),duration:r}}}const ga=12;function va(e,t){return e*Math.sqrt(1-t*t)}const ya=["duration","bounce"],xa=["stiffness","damping","mass"];function ba(e,t){return t.some((t=>void 0!==e[t]))}function wa(e){let{keyframes:t,restDelta:n,restSpeed:r,...i}=e;const o=t[0],a=t[t.length-1],s={done:!1,value:o},{stiffness:l,damping:u,mass:c,duration:d,velocity:f,isResolvedFromDuration:h}=function(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!ba(e,xa)&&ba(e,ya)){const n=ma(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}({...i,velocity:-co(i.velocity||0)}),p=f||0,m=u/(2*Math.sqrt(l*c)),g=a-o,v=co(Math.sqrt(l/c)),y=Math.abs(g)<5;let x;if(r||(r=y?.01:2),n||(n=y?.005:.5),m<1){const e=va(v,m);x=t=>{const n=Math.exp(-m*v*t);return a-n*((p+m*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)x=e=>a-Math.exp(-v*e)*(g+(p+v*g)*e);else{const e=v*Math.sqrt(m*m-1);x=t=>{const n=Math.exp(-m*v*t),r=Math.min(e*t,300);return a-n*((p+m*v*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}return{calculatedDuration:h&&d||null,next:e=>{const t=x(e);if(h)s.done=e>=d;else{let i=p;0!==e&&(i=m<1?ha(x,e,t):0);const o=Math.abs(i)<=r,l=Math.abs(a-t)<=n;s.done=o&&l}return s.value=s.done?a:t,s}}}function Sa(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:s,min:l,max:u,restDelta:c=.5,restSpeed:d}=e;const f=t[0],h={done:!1,value:f},p=e=>void 0===l?u:void 0===u||Math.abs(l-e)<Math.abs(u-e)?l:u;let m=r*n;const g=f+m,v=void 0===s?g:s(g);v!==g&&(m=v-f);const y=e=>-m*Math.exp(-e/i),x=e=>v+y(e),b=e=>{const t=y(e),n=x(e);h.done=Math.abs(t)<=c,h.value=h.done?v:n};let w,S;const k=e=>{(e=>void 0!==l&&e<l||void 0!==u&&e>u)(h.value)&&(w=e,S=wa({keyframes:[h.value,p(h.value)],velocity:ha(x,e,h.value),damping:o,stiffness:a,restDelta:c,restSpeed:d}))};return k(0),{calculatedDuration:null,next:e=>{let t=!1;return S||void 0!==w||(t=!0,b(e),k(e)),void 0!==w&&e>w?S.next(e-w):(!t&&b(e),h)}}}const ka=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:()=>ie.update(t,!0),stop:()=>oe(t),now:()=>ae.isProcessing?ae.timestamp:performance.now()}};function Ea(e){let t=0;let n=e.next(t);for(;!n.done&&t<2e4;)t+=50,n=e.next(t);return t>=2e4?1/0:t}const Ca={decay:Sa,inertia:Sa,tween:da,keyframes:da,spring:wa};function Pa(e){let t,n,{autoplay:r=!0,delay:i=0,driver:o=ka,keyframes:a,type:s="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:c="loop",onPlay:d,onStop:f,onComplete:h,onUpdate:p,...m}=e,g=1,v=!1;const y=()=>{n=new Promise((e=>{t=e}))};let x;y();const b=Ca[s]||da;let w;b!==da&&"number"!==typeof a[0]&&(w=ua([0,100],a,{clamp:!1}),a=[0,100]);const S=b({...m,keyframes:a});let k;"mirror"===c&&(k=b({...m,keyframes:[...a].reverse(),velocity:-(m.velocity||0)}));let E="idle",C=null,P=null,j=null;null===S.calculatedDuration&&l&&(S.calculatedDuration=Ea(S));const{calculatedDuration:T}=S;let _=1/0,L=1/0;null!==T&&(_=T+u,L=_*(l+1)-u);let R=0;const A=e=>{if(null===P)return;g>0&&(P=Math.min(P,e)),g<0&&(P=Math.min(e-L/g,P)),R=null!==C?C:Math.round(e-P)*g;const t=R-i*(g>=0?1:-1),n=g>=0?t<0:t>L;R=Math.max(t,0),"finished"===E&&null===C&&(R=L);let r=R,o=S;if(l){const e=Math.min(R,L)/_;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,l+1);Boolean(t%2)&&("reverse"===c?(n=1-n,u&&(n-=u/_)):"mirror"===c&&(o=k)),r=Wr(0,1,n)*_}const s=n?{done:!1,value:a[0]}:o.next(r);w&&(s.value=w(s.value));let{done:d}=s;n||null===T||(d=g>=0?R>=L:R<=0);const f=null===C&&("finished"===E||"running"===E&&d);return p&&p(s.value),f&&O(),s},z=()=>{x&&x.stop(),x=void 0},M=()=>{E="idle",z(),t(),y(),P=j=null},O=()=>{E="finished",h&&h(),z(),t()},N=()=>{if(v)return;x||(x=o(A));const e=x.now();d&&d(),null!==C?P=e-C:P&&"finished"!==E||(P=e),"finished"===E&&y(),j=P,C=null,E="running",x.start()};r&&N();const D={then:(e,t)=>n.then(e,t),get time(){return co(R)},set time(e){e=uo(e),R=e,null===C&&x&&0!==g?P=x.now()-e/g:C=e},get duration(){const e=null===S.calculatedDuration?Ea(S):S.calculatedDuration;return co(e)},get speed(){return g},set speed(e){e!==g&&x&&(g=e,D.time=co(R))},get state(){return E},play:N,pause:()=>{E="paused",C=R},stop:()=>{v=!0,"idle"!==E&&(E="idle",f&&f(),M())},cancel:()=>{null!==j&&A(j),M()},complete:()=>{E="finished"},sample:e=>(P=0,A(e))};return D}const ja=function(e){let t;return()=>(void 0===t&&(t=e()),t)}((()=>Object.hasOwnProperty.call(Element.prototype,"animate"))),Ta=new Set(["opacity","clipPath","filter","transform","backgroundColor"]);function _a(e,t,n){let{onUpdate:r,onComplete:i,...o}=n;if(!(ja()&&Ta.has(t)&&!o.repeatDelay&&"mirror"!==o.repeatType&&0!==o.damping&&"inertia"!==o.type))return!1;let a,s,l=!1,u=!1;const c=()=>{s=new Promise((e=>{a=e}))};c();let{keyframes:d,duration:f=300,ease:h,times:p}=o;if(((e,t)=>"spring"===t.type||"backgroundColor"===e||!po(t.ease))(t,o)){const e=Pa({...o,repeat:0,delay:0});let t={done:!1,value:d[0]};const n=[];let r=0;for(;!t.done&&r<2e4;)t=e.sample(r),n.push(t.value),r+=10;p=void 0,d=n,f=r-10,h="linear"}const m=function(e,t,n){let{delay:r=0,duration:i,repeat:o=0,repeatType:a="loop",ease:s,times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const u={[t]:n};l&&(u.offset=l);const c=vo(s);return Array.isArray(c)&&(u.easing=c),e.animate(u,{delay:r,duration:i,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:o+1,direction:"reverse"===a?"alternate":"normal"})}(e.owner.current,t,d,{...o,duration:f,ease:h,times:p}),g=()=>{u=!1,m.cancel()},v=()=>{u=!0,ie.update(g),a(),c()};m.onfinish=()=>{u||(e.set(function(e,t){let{repeat:n,repeatType:r="loop"}=t;return e[n&&"loop"!==r&&n%2===1?0:e.length-1]}(d,o)),i&&i(),v())};return{then:(e,t)=>s.then(e,t),attachTimeline:e=>(m.timeline=e,m.onfinish=null,te),get time(){return co(m.currentTime||0)},set time(e){m.currentTime=uo(e)},get speed(){return m.playbackRate},set speed(e){m.playbackRate=e},get duration(){return co(f)},play:()=>{l||(m.play(),oe(g))},pause:()=>m.pause(),stop:()=>{if(l=!0,"idle"===m.playState)return;const{currentTime:t}=m;if(t){const n=Pa({...o,autoplay:!1});e.setWithVelocity(n.sample(t-10).value,n.sample(t).value,10)}v()},complete:()=>{u||m.finish()},cancel:v}}const La={type:"spring",stiffness:500,damping:25,restSpeed:10},Ra={type:"keyframes",duration:.8},Aa={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},za=(e,t)=>{let{keyframes:n}=t;return n.length>2?Ra:Nr.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:La:Aa},Ma=(e,t)=>"zIndex"!==e&&(!("number"!==typeof t&&!Array.isArray(t))||!("string"!==typeof t||!ea.test(t)&&"0"!==t||t.startsWith("url("))),Oa=new Set(["brightness","contrast","saturate","opacity"]);function Na(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(qr)||[];if(!r)return e;const i=n.replace(r,"");let o=Oa.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const Da=/([a-z-]*)\(.*?\)/g,$a={...ea,getAnimatableNone:e=>{const t=e.match(Da);return t?t.map(Na).join(" "):e}},Va={...li,color:Vo,backgroundColor:Vo,outlineColor:Vo,fill:Vo,stroke:Vo,borderColor:Vo,borderTopColor:Vo,borderRightColor:Vo,borderBottomColor:Vo,borderLeftColor:Vo,filter:$a,WebkitFilter:$a},Ia=e=>Va[e];function Fa(e,t){let n=Ia(e);return n!==$a&&(n=ea),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Ba=e=>/^0[^.\s]+$/.test(e);function Ua(e){return"number"===typeof e?0===e:null!==e?"none"===e||"0"===e||Ba(e):void 0}function Ha(e,t){return e[t]||e.default||e}const Wa=!1,Ya=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return i=>{const o=Ha(r,e)||{},a=o.delay||r.delay||0;let{elapsed:s=0}=r;s-=uo(a);const l=function(e,t,n,r){const i=Ma(t,n);let o;o=Array.isArray(n)?[...n]:[null,n];const a=void 0!==r.from?r.from:e.get();let s;const l=[];for(let u=0;u<o.length;u++)null===o[u]&&(o[u]=0===u?a:o[u-1]),Ua(o[u])&&l.push(u),"string"===typeof o[u]&&"none"!==o[u]&&"0"!==o[u]&&(s=o[u]);if(i&&l.length&&s)for(let u=0;u<l.length;u++)o[l[u]]=Fa(t,s);return o}(t,e,n,o),u=l[0],c=l[l.length-1],d=Ma(e,u),f=Ma(e,c);me(d===f,`You are trying to animate ${e} from "${u}" to "${c}". ${u} is not an animatable value - to enable this animation set ${u} to a value animatable to ${c} via the \`style\` property.`);let h={keyframes:l,velocity:t.getVelocity(),ease:"easeOut",...o,delay:-s,onUpdate:e=>{t.set(e),o.onUpdate&&o.onUpdate(e)},onComplete:()=>{i(),o.onComplete&&o.onComplete()}};if(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:i,staggerDirection:o,repeat:a,repeatType:s,repeatDelay:l,from:u,elapsed:c,...d}=e;return!!Object.keys(d).length}(o)||(h={...h,...za(e,h)}),h.duration&&(h.duration=uo(h.duration)),h.repeatDelay&&(h.repeatDelay=uo(h.repeatDelay)),!d||!f||fo||!1===o.type||Wa)return function(e){let{keyframes:t,delay:n,onUpdate:r,onComplete:i}=e;const o=()=>(r&&r(t[t.length-1]),i&&i(),{time:0,speed:1,duration:0,play:te,pause:te,stop:te,then:e=>(e(),Promise.resolve()),cancel:te,complete:te});return n?Pa({keyframes:[0,1],duration:0,delay:n,onComplete:o}):o()}(fo?{...h,delay:0}:h);if(!r.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const n=_a(t,e,h);if(n)return n}return Pa(h)}};function Ka(e){return Boolean($r(e)&&e.add)}const Qa=e=>/^\-?\d*\.?\d+$/.test(e);function Ga(e,t){-1===e.indexOf(t)&&e.push(t)}function qa(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Xa{constructor(){this.subscriptions=[]}add(e){return Ga(this.subscriptions,e),()=>qa(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){const r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ja={current:void 0};class Za{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};var r;this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t.prev=t.current,t.current=e;const{delta:r,timestamp:i}=ae;t.lastUpdated!==i&&(t.timeDelta=r,t.lastUpdated=i,ie.postRender(t.scheduleVelocityCheck)),t.prev!==t.current&&t.events.change&&t.events.change.notify(t.current),t.events.velocityChange&&t.events.velocityChange.notify(t.getVelocity()),n&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.scheduleVelocityCheck=()=>ie.postRender(this.velocityCheck),this.velocityCheck=e=>{let{timestamp:t}=e;t!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=e,this.canTrackVelocity=(r=this.current,!isNaN(parseFloat(r))),this.owner=n.owner}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Xa);const n=this.events[e].add(t);return"change"===e?()=>{n(),ie.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=e,this.timeDelta=n}jump(e){this.updateAndNotify(e),this.prev=e,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Ja.current&&Ja.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?fa(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function es(e,t){return new Za(e,t)}const ts=e=>t=>t.test(e),ns=[Yr,ri,ni,ti,oi,ii,{test:e=>"auto"===e,parse:e=>e}],rs=e=>ns.find(ts(e)),is=[...ns,Vo,ea],os=e=>is.find(ts(e));function as(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,es(n))}function ss(e,t){const n=lo(e,t);let{transitionEnd:r={},transition:i={},...o}=n?e.makeTargetAnimatable(n,!1):{};o={...o,...r};for(const a in o){as(e,a,zi(o[a]))}}function ls(e,t){if(!t)return;return(t[e]||t.default||t).from}function us(e,t){let{protectedKeys:n,needsAnimating:r}=e;const i=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,i}function cs(e,t){const n=e.get();if(!Array.isArray(t))return n!==t;for(let r=0;r<t.length;r++)if(t[r]!==n)return!0}function ds(e,t){let{delay:n=0,transitionOverride:r,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:o=e.getDefaultTransition(),transitionEnd:a,...s}=e.makeTargetAnimatable(t);const l=e.getValue("willChange");r&&(o=r);const u=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const d in s){const t=e.getValue(d),r=s[d];if(!t||void 0===r||c&&us(c,d))continue;const i={delay:n,elapsed:0,...Ha(o||{},d)};if(window.HandoffAppearAnimations){const n=e.getProps()[mr];if(n){const e=window.HandoffAppearAnimations(n,d,t,ie);null!==e&&(i.elapsed=e,i.isHandoff=!0)}}let a=!i.isHandoff&&!cs(t,r);if("spring"===i.type&&(t.getVelocity()||i.velocity)&&(a=!1),t.animation&&(a=!1),a)continue;t.start(Ya(d,t,r,e.shouldReduceMotion&&Nr.has(d)?{type:!1}:i));const f=t.animation;Ka(l)&&(l.add(d),f.then((()=>l.remove(d)))),u.push(f)}return a&&Promise.all(u).then((()=>{a&&ss(e,a)})),u}function fs(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=lo(e,t,n.custom);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all(ds(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:o=0,staggerChildren:a,staggerDirection:s}=i;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=arguments.length>5?arguments[5]:void 0;const a=[],s=(e.variantChildren.size-1)*r,l=1===i?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r};return Array.from(e.variantChildren).sort(hs).forEach(((e,r)=>{e.notify("AnimationStart",t),a.push(fs(e,t,{...o,delay:n+l(r)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(a)}(e,t,o+r,a,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){const[e,t]="beforeChildren"===s?[o,a]:[a,o];return e().then((()=>t()))}return Promise.all([o(),a(n.delay)])}function hs(e,t){return e.sortNodePosition(t)}const ps=[...xr].reverse(),ms=xr.length;function gs(e){return t=>Promise.all(t.map((t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map((t=>fs(e,t,r)));n=Promise.all(i)}else if("string"===typeof t)n=fs(e,t,r);else{const i="function"===typeof t?lo(e,t,r.custom):t;n=Promise.all(ds(e,i,r))}return n.then((()=>e.notify("AnimationComplete",t)))}(e,n,r)})))}function vs(e){let t=gs(e);const n={animate:xs(!0),whileInView:xs(),whileHover:xs(),whileTap:xs(),whileDrag:xs(),whileFocus:xs(),exit:xs()};let r=!0;const i=(t,n)=>{const r=lo(e,n);if(r){const{transition:e,transitionEnd:n,...i}=r;t={...t,...i,...n}}return t};function o(o,a){const s=e.getProps(),l=e.getVariantContext(!0)||{},u=[],c=new Set;let d={},f=1/0;for(let t=0;t<ms;t++){const h=ps[t],p=n[h],m=void 0!==s[h]?s[h]:l[h],g=vr(m),v=h===a?p.isActive:null;!1===v&&(f=t);let y=m===l[h]&&m!==s[h]&&g;if(y&&r&&e.manuallyAnimateOnMount&&(y=!1),p.protectedKeys={...d},!p.isActive&&null===v||!m&&!p.prevProp||yr(m)||"boolean"===typeof m)continue;let x=ys(p.prevProp,m)||h===a&&p.isActive&&!y&&g||t>f&&g,b=!1;const w=Array.isArray(m)?m:[m];let S=w.reduce(i,{});!1===v&&(S={});const{prevResolvedValues:k={}}=p,E={...k,...S},C=e=>{x=!0,c.has(e)&&(b=!0,c.delete(e)),p.needsAnimating[e]=!0};for(const e in E){const t=S[e],n=k[e];if(d.hasOwnProperty(e))continue;let r=!1;r=Ai(t)&&Ai(n)?!so(t,n):t!==n,r?void 0!==t?C(e):c.add(e):void 0!==t&&c.has(e)?C(e):p.protectedKeys[e]=!0}p.prevProp=m,p.prevResolvedValues=S,p.isActive&&(d={...d,...S}),r&&e.blockInitialAnimation&&(x=!1),!x||y&&!b||u.push(...w.map((e=>({animation:e,options:{type:h,...o}}))))}if(c.size){const t={};c.forEach((n=>{const r=e.getBaseTarget(n);void 0!==r&&(t[n]=r)})),u.push({animation:t})}let h=Boolean(u.length);return!r||!1!==s.initial&&s.initial!==s.animate||e.manuallyAnimateOnMount||(h=!1),r=!1,h?t(u):Promise.resolve()}return{animateChanges:o,setActive:function(t,r,i){var a;if(n[t].isActive===r)return Promise.resolve();null===(a=e.variantChildren)||void 0===a||a.forEach((e=>{var n;return null===(n=e.animationState)||void 0===n?void 0:n.setActive(t,r)})),n[t].isActive=r;const s=o(i,t);for(const e in n)n[e].protectedKeys={};return s},setAnimateFunction:function(n){t=n(e)},getState:()=>n}}function ys(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!so(t,e)}function xs(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}let bs=0;const ws={animation:{Feature:class extends qi{constructor(e){super(e),e.animationState||(e.animationState=vs(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();this.unmount(),yr(e)&&(this.unmount=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){}}},exit:{Feature:class extends qi{constructor(){super(...arguments),this.id=bs++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t,custom:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const i=this.node.animationState.setActive("exit",!e,{custom:null!==n&&void 0!==n?n:this.node.getProps().custom});t&&!e&&i.then((()=>t(this.id)))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}}},Ss=(e,t)=>Math.abs(e-t);class ks{constructor(e,t){let{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=Ps(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Ss(e.x,t.x),r=Ss(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:r}=e,{timestamp:i}=ae;this.history.push({...r,timestamp:i});const{onStart:o,onMove:a}=this.handlers;t||(o&&o(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Es(t,this.transformPagePoint),ie.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const o=Ps("pointercancel"===e.type?this.lastMoveEventInfo:Es(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,o),r&&r(e,o)},!Ii(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;const o=Es(Fi(e),this.transformPagePoint),{point:a}=o,{timestamp:s}=ae;this.history=[{...a,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,Ps(o,this.history)),this.removeListeners=Hi(Bi(this.contextWindow,"pointermove",this.handlePointerMove),Bi(this.contextWindow,"pointerup",this.handlePointerUp),Bi(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),oe(this.updatePoint)}}function Es(e,t){return t?{point:t(e.point)}:e}function Cs(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ps(e,t){let{point:n}=e;return{point:n,delta:Cs(n,Ts(t)),offset:Cs(n,js(t)),velocity:_s(t,.1)}}function js(e){return e[0]}function Ts(e){return e[e.length-1]}function _s(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Ts(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>uo(t)));)n--;if(!r)return{x:0,y:0};const o=co(i.timestamp-r.timestamp);if(0===o)return{x:0,y:0};const a={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function Ls(e){return e.max-e.min}function Rs(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.01;return Math.abs(e-t)<=n}function As(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=Io(t.min,t.max,e.origin),e.scale=Ls(n)/Ls(t),(Rs(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=Io(n.min,n.max,e.origin)-e.originPoint,(Rs(e.translate)||isNaN(e.translate))&&(e.translate=0)}function zs(e,t,n,r){As(e.x,t.x,n.x,r?r.originX:void 0),As(e.y,t.y,n.y,r?r.originY:void 0)}function Ms(e,t,n){e.min=n.min+t.min,e.max=e.min+Ls(t)}function Os(e,t,n){e.min=t.min-n.min,e.max=e.min+Ls(t)}function Ns(e,t,n){Os(e.x,t.x,n.x),Os(e.y,t.y,n.y)}function Ds(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function $s(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const Vs=.35;function Is(e,t,n){return{min:Fs(e,t),max:Fs(e,n)}}function Fs(e,t){return"number"===typeof e?e:e[t]||0}function Bs(e){return[e("x"),e("y")]}function Us(e){let{top:t,left:n,right:r,bottom:i}=e;return{x:{min:n,max:r},y:{min:t,max:i}}}function Hs(e){return void 0===e||1===e}function Ws(e){let{scale:t,scaleX:n,scaleY:r}=e;return!Hs(t)||!Hs(n)||!Hs(r)}function Ys(e){return Ws(e)||Ks(e)||e.z||e.rotate||e.rotateX||e.rotateY}function Ks(e){return Qs(e.x)||Qs(e.y)}function Qs(e){return e&&"0%"!==e}function Gs(e,t,n){return n+t*(e-n)}function qs(e,t,n,r,i){return void 0!==i&&(e=Gs(e,i,r)),Gs(e,n,r)+t}function Xs(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=qs(e.min,t,n,r,i),e.max=qs(e.max,t,n,r,i)}function Js(e,t){let{x:n,y:r}=t;Xs(e.x,n.translate,n.scale,n.originPoint),Xs(e.y,r.translate,r.scale,r.originPoint)}function Zs(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function el(e,t){e.min=e.min+t,e.max=e.max+t}function tl(e,t,n){let[r,i,o]=n;const a=void 0!==t[o]?t[o]:.5,s=Io(e.min,e.max,a);Xs(e,t[r],t[i],s,t.scale)}const nl=["x","scaleX","originX"],rl=["y","scaleY","originY"];function il(e,t){tl(e.x,t,nl),tl(e.y,t,rl)}function ol(e,t){return Us(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const al=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null},sl=new WeakMap;class ll{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:r}=this.getProps();this.panSession=new ks(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Fi(e,"page").point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Qi(n),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Bs((e=>{let t=this.getAxisMotionValue(e).get()||0;if(ni.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=Ls(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),i&&ie.update((()=>i(e,t)),!1,!0);const{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:o}=this.getProps();if(!n&&!this.openGlobalLock)return;const{offset:a}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(a),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,a),this.updateAxis("y",t.point,a),this.visualElement.render(),o&&o(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>Bs((e=>{var t;return"paused"===this.getAnimationState(e)&&(null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.play())}))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:al(this.visualElement)})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:i}=this.getProps();i&&ie.update((()=>i(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!ul(e,r,this.currentDirection))return;const i=this.getAxisMotionValue(e);let o=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(o=function(e,t,n){let{min:r,max:i}=t;return void 0!==r&&e<r?e=n?Io(r,e,n.min):Math.max(e,r):void 0!==i&&e>i&&(e=n?Io(i,e,n.max):Math.min(e,i)),e}(o,this.constraints[e],this.elastic[e])),i.set(o)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(e=this.visualElement.projection)||void 0===e?void 0:e.layout,i=this.constraints;t&&gr(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!t||!r)&&function(e,t){let{top:n,left:r,bottom:i,right:o}=t;return{x:Ds(e.x,r,o),y:Ds(e.y,n,i)}}(r.layoutBox,t),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Vs;return!1===e?e=0:!0===e&&(e=Vs),{x:Is(e,"left","right"),y:Is(e,"top","bottom")}}(n),i!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Bs((e=>{this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(r.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!gr(e))return!1;const n=e.current;ge(null!==n,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");const{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const i=function(e,t,n){const r=ol(e,n),{scroll:i}=t;return i&&(el(r.x,i.offset.x),el(r.y,i.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let o=function(e,t){return{x:$s(e.x,t.x),y:$s(e.y,t.y)}}(r.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(o));this.hasMutatedConstraints=!!e,e&&(o=Us(e))}return o}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),s=this.constraints||{},l=Bs((a=>{if(!ul(a,t,this.currentDirection))return;let l=s&&s[a]||{};o&&(l={min:0,max:0});const u=r?200:1e6,c=r?40:1e7,d={type:"inertia",velocity:n?e[a]:0,bounceStiffness:u,bounceDamping:c,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(a,d)}));return Promise.all(l).then(a)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return n.start(Ya(e,n,0,t))}stopAnimation(){Bs((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){Bs((e=>{var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.pause()}))}getAnimationState(e){var t;return null===(t=this.getAxisMotionValue(e).animation)||void 0===t?void 0:t.state}getAxisMotionValue(e){const t="_drag"+e.toUpperCase(),n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){Bs((t=>{const{drag:n}=this.getProps();if(!ul(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:o}=r.layout.layoutBox[t];i.set(e[t]-Io(n,o,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!gr(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Bs((e=>{const t=this.getAxisMotionValue(e);if(t){const n=t.get();r[e]=function(e,t){let n=.5;const r=Ls(e),i=Ls(t);return i>r?n=aa(t.min,t.max-r,e.min):r>i&&(n=aa(e.min,e.max-i,t.min)),Wr(0,1,n)}({min:n,max:n},this.constraints[e])}}));const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),Bs((t=>{if(!ul(t,e,null))return;const n=this.getAxisMotionValue(t),{min:i,max:o}=this.constraints[t];n.set(Io(i,o,r[t]))}))}addListeners(){if(!this.visualElement.current)return;sl.set(this.visualElement,this);const e=Bi(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();gr(e)&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),t();const i=Vi(window,"resize",(()=>this.scalePositionWithinConstraints())),o=n.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(Bs((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{i(),e(),r(),o&&o()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:o=Vs,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:o,dragMomentum:a}}}function ul(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const cl=e=>(t,n)=>{e&&ie.update((()=>e(t,n)))};const dl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function fl(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const hl={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!ri.test(e))return e;e=parseFloat(e)}return`${fl(e,t.target.x)}% ${fl(e,t.target.y)}%`}},pl={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const i=e,o=ea.parse(e);if(o.length>5)return i;const a=ea.createTransformer(e),s="number"!==typeof o[0]?1:0,l=r.x.scale*n.x,u=r.y.scale*n.y;o[0+s]/=l,o[1+s]/=u;const c=Io(l,u,.5);return"number"===typeof o[2+s]&&(o[2+s]/=c),"number"===typeof o[3+s]&&(o[3+s]/=c),a(o)}};class ml extends t.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;var o;o=vl,Object.assign(Mr,o),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",(()=>{this.safeToRemove()})),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),dl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,o=n.projection;return o?(o.isPresent=i,r||e.layoutDependency!==t||void 0===t?o.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?o.promote():o.relegate()||ie.postRender((()=>{const e=o.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),queueMicrotask((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function gl(e){const[n,r]=function(){const e=(0,t.useContext)(le);if(null===e)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=e,o=(0,t.useId)();return(0,t.useEffect)((()=>i(o)),[]),!n&&r?[!1,()=>r&&r(o)]:[!0]}(),i=(0,t.useContext)(pe);return t.createElement(ml,{...e,layoutGroup:i,switchLayoutGroup:(0,t.useContext)(jr),isPresent:n,safeToRemove:r})}const vl={borderRadius:{...hl,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:hl,borderTopRightRadius:hl,borderBottomLeftRadius:hl,borderBottomRightRadius:hl,boxShadow:pl},yl=["TopLeft","TopRight","BottomLeft","BottomRight"],xl=yl.length,bl=e=>"string"===typeof e?parseFloat(e):e,wl=e=>"number"===typeof e||ri.test(e);function Sl(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const kl=Cl(0,.5,Po),El=Cl(.5,.95,te);function Cl(e,t,n){return r=>r<e?0:r>t?1:n(aa(e,t,r))}function Pl(e,t){e.min=t.min,e.max=t.max}function jl(e,t){Pl(e.x,t.x),Pl(e.y,t.y)}function Tl(e,t,n,r,i){return e=Gs(e-=t,1/n,r),void 0!==i&&(e=Gs(e,1/i,r)),e}function _l(e,t,n,r,i){let[o,a,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;ni.test(t)&&(t=parseFloat(t),t=Io(a.min,a.max,t/100)-a.min);if("number"!==typeof t)return;let s=Io(o.min,o.max,r);e===o&&(s-=t),e.min=Tl(e.min,t,n,s,i),e.max=Tl(e.max,t,n,s,i)}(e,t[o],t[a],t[s],t.scale,r,i)}const Ll=["x","scaleX","originX"],Rl=["y","scaleY","originY"];function Al(e,t,n,r){_l(e.x,t,Ll,n?n.x:void 0,r?r.x:void 0),_l(e.y,t,Rl,n?n.y:void 0,r?r.y:void 0)}function zl(e){return 0===e.translate&&1===e.scale}function Ml(e){return zl(e.x)&&zl(e.y)}function Ol(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Nl(e){return Ls(e.x)/Ls(e.y)}class Dl{constructor(){this.members=[]}add(e){Ga(this.members,e),e.scheduleRender()}remove(e){if(qa(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function $l(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y;if((i||o)&&(r=`translate3d(${i}px, ${o}px, 0) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:e,rotateX:t,rotateY:i}=n;e&&(r+=`rotate(${e}deg) `),t&&(r+=`rotateX(${t}deg) `),i&&(r+=`rotateY(${i}deg) `)}const a=e.x.scale*t.x,s=e.y.scale*t.y;return 1===a&&1===s||(r+=`scale(${a}, ${s})`),r||"none"}const Vl=(e,t)=>e.depth-t.depth;class Il{constructor(){this.children=[],this.isDirty=!1}add(e){Ga(this.children,e),this.isDirty=!0}remove(e){qa(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(Vl),this.isDirty=!1,this.children.forEach(e)}}const Fl=["","X","Y","Z"],Bl={visibility:"hidden"};let Ul=0;const Hl={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Wl(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:i,resetTransform:o}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null===n||void 0===n?void 0:n();this.id=Ul++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Hl.totalNodes=Hl.resolvedTargetDeltas=Hl.recalculatedProjection=0,this.nodes.forEach(Ql),this.nodes.forEach(tu),this.nodes.forEach(nu),this.nodes.forEach(Gl),function(e){window.MotionDebug&&window.MotionDebug.record(e)}(Hl)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new Il)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Xa),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var r;this.isSVG=(r=e)instanceof SVGElement&&"svg"!==r.tagName,this.instance=e;const{layoutId:i,layout:o,visualElement:a}=this.options;if(a&&!a.current&&a.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(o||i)&&(this.isLayoutDirty=!0),t){let n;const r=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=function(e,t){const n=performance.now(),r=i=>{let{timestamp:o}=i;const a=o-n;a>=t&&(oe(r),e(a-t))};return ie.read(r,!0),()=>oe(r)}(r,250),dl.hasAnimatedSinceResize&&(dl.hasAnimatedSinceResize=!1,this.nodes.forEach(eu))}))}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&a&&(i||o)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n,hasRelativeTargetChanged:r,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const o=this.options.transition||a.getDefaultTransition()||lu,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=a.getProps(),u=!this.targetLayout||!Ol(this.targetLayout,i)||r,c=!n&&r;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||c||n&&(u||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,c);const e={...Ha(o,"layout"),onPlay:s,onComplete:l};(a.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||eu(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,oe(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(ru),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(Xl);this.isUpdating||this.nodes.forEach(Jl),this.isUpdating=!1,this.nodes.forEach(Zl),this.nodes.forEach(Yl),this.nodes.forEach(Kl),this.clearAllSnapshots();const e=performance.now();ae.delta=Wr(0,1e3/60,e-ae.timestamp),ae.timestamp=e,ae.isProcessing=!0,se.update.process(ae),se.preRender.process(ae),se.render.process(ae),ae.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask((()=>this.update())))}clearAllSnapshots(){this.nodes.forEach(ql),this.sharedNodes.forEach(iu)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ie.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ie.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t&&(this.scroll={animationId:this.root.animationId,phase:e,isRoot:i(this.instance),offset:r(this.instance)})}resetTransform(){if(!o)return;const e=this.isLayoutDirty||this.shouldResetTransform,t=this.projectionDelta&&!Ml(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,i=r!==this.prevTransformTemplateValue;e&&(t||Ys(this.latestValues)||i)&&(o(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),du((r=n).x),du(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox(),{scroll:n}=this.root;return n&&(el(t.x,n.offset.x),el(t.y,n.offset.y)),t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};jl(t,e);for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:i,options:o}=r;if(r!==this.root&&i&&o.layoutScroll){if(i.isRoot){jl(t,e);const{scroll:n}=this.root;n&&(el(t.x,-n.offset.x),el(t.y,-n.offset.y))}el(t.x,i.offset.x),el(t.y,i.offset.y)}}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};jl(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&il(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),Ys(e.latestValues)&&il(n,e.latestValues)}return Ys(this.latestValues)&&il(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};jl(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!Ys(e.latestValues))continue;Ws(e.latestValues)&&e.updateSnapshot();const r={x:{min:0,max:0},y:{min:0,max:0}};jl(r,e.measurePageBox()),Al(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return Ys(this.latestValues)&&Al(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ae.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t;const n=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=n.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=n.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=n.isSharedProjectionDirty);const r=Boolean(this.resumingFrom)||this!==n;if(!(e||r&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty)||this.attemptToResolveRelativeTarget))return;const{layout:i,layoutId:o}=this.options;if(this.layout&&(i||o)){if(this.resolvedRelativeTargetAt=ae.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Ns(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),jl(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var a,s,l;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),a=this.target,s=this.relativeTarget,l=this.relativeParent.target,Ms(a.x,s.x,l.x),Ms(a.y,s.y,l.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):jl(this.target,this.layout.layoutBox),Js(this.target,this.targetDelta)):jl(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Ns(this.relativeTargetOrigin,this.target,e.target),jl(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Hl.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!Ws(this.parent.latestValues)&&!Ks(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var e;const t=this.getLead(),n=Boolean(this.resumingFrom)||this!==t;let r=!0;if((this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty))&&(r=!1),n&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(r=!1),this.resolvedRelativeTargetAt===ae.timestamp&&(r=!1),r)return;const{layout:i,layoutId:o}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!i&&!o)return;jl(this.layoutCorrected,this.layout.layoutBox);const a=this.treeScale.x,s=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=n.length;if(!i)return;let o,a;t.x=t.y=1;for(let s=0;s<i;s++){o=n[s],a=o.projectionDelta;const i=o.instance;i&&i.style&&"contents"===i.style.display||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&il(e,{x:-o.scroll.offset.x,y:-o.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,Js(e,a)),r&&Ys(o.latestValues)&&il(e,o.latestValues))}t.x=Zs(t.x),t.y=Zs(t.y)}(this.layoutCorrected,this.treeScale,this.path,n),!t.layout||t.target||1===this.treeScale.x&&1===this.treeScale.y||(t.target=t.layout.layoutBox);const{target:l}=t;if(!l)return void(this.projectionTransform&&(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionTransform="none",this.scheduleRender()));this.projectionDelta||(this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}});const u=this.projectionTransform;zs(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=$l(this.projectionDelta,this.treeScale),this.projectionTransform===u&&this.treeScale.x===a&&this.treeScale.y===s||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),Hl.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.scheduleRender&&this.options.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const a={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),u=!l||l.members.length<=1,c=Boolean(s&&!u&&!0===this.options.crossfade&&!this.path.some(su));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;ou(o.x,e.x,n),ou(o.y,e.y,n),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ns(a,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){au(e.x,t.x,n.x,r),au(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,a,n),d&&function(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),jl(d,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,n,r,i,o){i?(e.opacity=Io(0,void 0!==n.opacity?n.opacity:1,kl(r)),e.opacityExit=Io(void 0!==t.opacity?t.opacity:1,0,El(r))):o&&(e.opacity=Io(void 0!==t.opacity?t.opacity:1,void 0!==n.opacity?n.opacity:1,r));for(let a=0;a<xl;a++){const i=`border${yl[a]}Radius`;let o=Sl(t,i),s=Sl(n,i);void 0===o&&void 0===s||(o||(o=0),s||(s=0),0===o||0===s||wl(o)===wl(s)?(e[i]=Math.max(Io(bl(o),bl(s),r),0),(ni.test(s)||ni.test(o))&&(e[i]+="%")):e[i]=s)}(t.rotate||n.rotate)&&(e.rotate=Io(t.rotate||0,n.rotate||0,r))}(i,r,this.latestValues,n,c,u)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(oe(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ie.update((()=>{dl.hasAnimatedSinceResize=!0,this.currentAnimation=function(e,t,n){const r=$r(e)?e:es(e);return r.start(Ya("",r,t,n)),r.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onComplete:()=>{e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&fu(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=Ls(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=Ls(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}jl(t,n),il(t,i),zs(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Dl);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){var e;const{layoutId:t}=this.options;return t&&(null===(e=this.getStack())||void 0===e?void 0:e.lead)||this}getPrevLead(){var e;const{layoutId:t}=this.options;return t?null===(e=this.getStack())||void 0===e?void 0:e.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.rotate||n.rotateX||n.rotateY||n.rotateZ)&&(t=!0),!t)return;const r={};for(let i=0;i<Fl.length;i++){const t="rotate"+Fl[i];n[t]&&(r[t]=n[t],e.setStaticValue(t,0))}e.render();for(const i in r)e.setStaticValue(i,r[i]);e.scheduleRender()}getProjectionStyles(e){var t,n;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Bl;const r={visibility:""},i=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,r.opacity="",r.pointerEvents=Mi(null===e||void 0===e?void 0:e.pointerEvents)||"",r.transform=i?i(this.latestValues,""):"none",r;const o=this.getLead();if(!this.projectionDelta||!this.layout||!o.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=Mi(null===e||void 0===e?void 0:e.pointerEvents)||""),this.hasProjected&&!Ys(this.latestValues)&&(t.transform=i?i({},""):"none",this.hasProjected=!1),t}const a=o.animationValues||o.latestValues;this.applyTransformsToTarget(),r.transform=$l(this.projectionDeltaWithTransform,this.treeScale,a),i&&(r.transform=i(a,r.transform));const{x:s,y:l}=this.projectionDelta;r.transformOrigin=`${100*s.origin}% ${100*l.origin}% 0`,o.animationValues?r.opacity=o===this?null!==(n=null!==(t=a.opacity)&&void 0!==t?t:this.latestValues.opacity)&&void 0!==n?n:1:this.preserveOpacity?this.latestValues.opacity:a.opacityExit:r.opacity=o===this?void 0!==a.opacity?a.opacity:"":void 0!==a.opacityExit?a.opacityExit:0;for(const u in Mr){if(void 0===a[u])continue;const{correct:e,applyTo:t}=Mr[u],n="none"===r.transform?a[u]:e(a[u],o);if(t){const e=t.length;for(let i=0;i<e;i++)r[t[i]]=n}else r[u]=n}return this.options.layoutId&&(r.pointerEvents=o===this?Mi(null===e||void 0===e?void 0:e.pointerEvents)||"":"none"),r}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>{var t;return null===(t=e.currentAnimation)||void 0===t?void 0:t.stop()})),this.root.nodes.forEach(Xl),this.root.sharedNodes.clear()}}}function Yl(e){e.updateLayout()}function Kl(e){var t;const n=(null===(t=e.resumeFrom)||void 0===t?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=e.layout,{animationType:i}=e.options,o=n.source!==e.layout.source;"size"===i?Bs((e=>{const r=o?n.measuredBox[e]:n.layoutBox[e],i=Ls(r);r.min=t[e].min,r.max=r.min+i})):fu(i,n.layoutBox,t)&&Bs((r=>{const i=o?n.measuredBox[r]:n.layoutBox[r],a=Ls(t[r]);i.max=i.min+a,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+a)}));const a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};zs(a,t,n.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};o?zs(s,e.applyTransform(r,!0),n.measuredBox):zs(s,t,n.layoutBox);const l=!Ml(a);let u=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:i,layout:o}=r;if(i&&o){const a={x:{min:0,max:0},y:{min:0,max:0}};Ns(a,n.layoutBox,i.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};Ns(s,t,o.layoutBox),Ol(a,s)||(u=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=a,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:t,snapshot:n,delta:s,layoutDelta:a,hasLayoutChanged:l,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function Ql(e){Hl.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function Gl(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function ql(e){e.clearSnapshot()}function Xl(e){e.clearMeasurements()}function Jl(e){e.isLayoutDirty=!1}function Zl(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function eu(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function tu(e){e.resolveTargetDelta()}function nu(e){e.calcProjection()}function ru(e){e.resetRotation()}function iu(e){e.removeLeadSnapshot()}function ou(e,t,n){e.translate=Io(t.translate,0,n),e.scale=Io(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function au(e,t,n,r){e.min=Io(t.min,n.min,r),e.max=Io(t.max,n.max,r)}function su(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const lu={duration:.45,ease:[.4,0,.1,1]},uu=e=>"undefined"!==typeof navigator&&navigator.userAgent.toLowerCase().includes(e),cu=uu("applewebkit/")&&!uu("chrome/")?Math.round:te;function du(e){e.min=cu(e.min),e.max=cu(e.max)}function fu(e,t,n){return"position"===e||"preserve-aspect"===e&&!Rs(Nl(t),Nl(n),.2)}const hu=Wl({attachResizeListener:(e,t)=>Vi(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),pu={current:void 0},mu=Wl({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!pu.current){const e=new hu({});e.mount(window),e.setOptions({layoutScroll:!0}),pu.current=e}return pu.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),gu={pan:{Feature:class extends qi{constructor(){super(...arguments),this.removePointerDownListener=te}onPointerDown(e){this.session=new ks(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:al(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:cl(e),onStart:cl(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&ie.update((()=>r(e,t)))}}}mount(){this.removePointerDownListener=Bi(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends qi{constructor(e){super(e),this.removeGroupControls=te,this.removeListeners=te,this.controls=new ll(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||te}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:mu,MeasureLayout:gl}},vu=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function yu(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;ge(n<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);const[r,i]=function(e){const t=vu.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const e=o.trim();return Qa(e)?parseFloat(e):e}return Ur(i)?yu(i,t,n+1):i}const xu=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),bu=e=>xu.has(e),wu=e=>e===Yr||e===ri,Su=(e,t)=>parseFloat(e.split(", ")[t]),ku=(e,t)=>(n,r)=>{let{transform:i}=r;if("none"===i||!i)return 0;const o=i.match(/^matrix3d\((.+)\)$/);if(o)return Su(o[1],t);{const t=i.match(/^matrix\((.+)\)$/);return t?Su(t[1],e):0}},Eu=new Set(["x","y","z"]),Cu=Or.filter((e=>!Eu.has(e)));const Pu={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:ku(4,13),y:ku(5,14)};Pu.translateX=Pu.x,Pu.translateY=Pu.y;const ju=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};t={...t},r={...r};const i=Object.keys(t).filter(bu);let o=[],a=!1;const s=[];if(i.forEach((i=>{const l=e.getValue(i);if(!e.hasValue(i))return;let u=n[i],c=rs(u);const d=t[i];let f;if(Ai(d)){const e=d.length,t=null===d[0]?1:0;u=d[t],c=rs(u);for(let n=t;n<e&&null!==d[n];n++)f?ge(rs(d[n])===f,"All keyframes must be of the same type"):(f=rs(d[n]),ge(f===c||wu(c)&&wu(f),"Keyframes must be of the same dimension as the current value"))}else f=rs(d);if(c!==f)if(wu(c)&&wu(f)){const e=l.get();"string"===typeof e&&l.set(parseFloat(e)),"string"===typeof d?t[i]=parseFloat(d):Array.isArray(d)&&f===ri&&(t[i]=d.map(parseFloat))}else(null===c||void 0===c?void 0:c.transform)&&(null===f||void 0===f?void 0:f.transform)&&(0===u||0===d)?0===u?l.set(f.transform(u)):t[i]=c.transform(d):(a||(o=function(e){const t=[];return Cu.forEach((n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))})),t.length&&e.render(),t}(e),a=!0),s.push(i),r[i]=void 0!==r[i]?r[i]:t[i],l.jump(d))})),s.length){const n=s.indexOf("height")>=0?window.pageYOffset:null,i=((e,t,n)=>{const r=t.measureViewportBox(),i=t.current,o=getComputedStyle(i),{display:a}=o,s={};"none"===a&&t.setStaticValue("display",e.display||"block"),n.forEach((e=>{s[e]=Pu[e](r,o)})),t.render();const l=t.measureViewportBox();return n.forEach((n=>{const r=t.getValue(n);r&&r.jump(s[n]),e[n]=Pu[n](l,o)})),e})(t,e,s);return o.length&&o.forEach((t=>{let[n,r]=t;e.getValue(n).set(r)})),e.render(),J&&null!==n&&window.scrollTo({top:n}),{target:i,transitionEnd:r}}return{target:t,transitionEnd:r}};function Tu(e,t,n,r){return(e=>Object.keys(e).some(bu))(t)?ju(e,t,n,r):{target:t,transitionEnd:r}}const _u=(e,t,n,r)=>{const i=function(e,t,n){let{...r}=t;const i=e.current;if(!(i instanceof Element))return{target:r,transitionEnd:n};n&&(n={...n}),e.values.forEach((e=>{const t=e.get();if(!Ur(t))return;const n=yu(t,i);n&&e.set(n)}));for(const o in r){const e=r[o];if(!Ur(e))continue;const t=yu(e,i);t&&(r[o]=t,n||(n={}),void 0===n[o]&&(n[o]=e))}return{target:r,transitionEnd:n}}(e,t,r);return Tu(e,t=i.target,n,r=i.transitionEnd)},Lu={current:null},Ru={current:!1};const Au=new WeakMap,zu=Object.keys(Pr),Mu=zu.length,Ou=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],Nu=br.length;class Du{constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:i,visualState:o}=e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ie.render(this.render,!1,!0);const{latestValues:s,renderState:l}=o;this.latestValues=s,this.baseTarget={...s},this.initialValues=n.initial?{...s}:{},this.renderState=l,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.isControllingVariants=wr(n),this.isVariantNode=Sr(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:u,...c}=this.scrapeMotionValuesFromProps(n,{});for(const d in c){const e=c[d];void 0!==s[d]&&$r(e)&&(e.set(s[d],!1),Ka(u)&&u.add(d))}}scrapeMotionValuesFromProps(e,t){return{}}mount(e){this.current=e,Au.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),Ru.current||function(){if(Ru.current=!0,J)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Lu.current=e.matches;e.addListener(t),t()}else Lu.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Lu.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Au.delete(this.current),this.projection&&this.projection.unmount(),oe(this.notifyUpdate),oe(this.render),this.valueSubscriptions.forEach((e=>e())),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features)this.features[e].unmount();this.current=null}bindToMotionValue(e,t){const n=Nr.has(e),r=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&ie.update(this.notifyUpdate,!1,!0),n&&this.projection&&(this.projection.isTransformDirty=!0)})),i=t.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(e,(()=>{r(),i()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}loadFeatures(e,t,n,r){let i,o,{children:a,...s}=e;for(let l=0;l<Mu;l++){const e=zu[l],{isEnabled:t,Feature:n,ProjectionNode:r,MeasureLayout:a}=Pr[e];r&&(i=r),t(s)&&(!this.features[e]&&n&&(this.features[e]=new n(this)),a&&(o=a))}if(("html"===this.type||"svg"===this.type)&&!this.projection&&i){this.projection=new i(this.latestValues,this.parent&&this.parent.projection);const{layoutId:e,layout:t,drag:n,dragConstraints:o,layoutScroll:a,layoutRoot:l}=s;this.projection.setOptions({layoutId:e,layout:t,alwaysMeasureLayout:Boolean(n)||o&&gr(o),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:"string"===typeof t?t:"both",initialPromotionConfig:r,layoutScroll:a,layoutRoot:l})}return o}updateFeatures(){for(const e in this.features){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}makeTargetAnimatable(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return this.makeTargetAnimatableFromInstance(e,this.props,t)}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Ou.length;n++){const t=Ou[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){const{willChange:r}=t;for(const i in t){const o=t[i],a=n[i];if($r(o))e.addValue(i,o),Ka(r)&&r.add(i);else if($r(a))e.addValue(i,es(o,{owner:e})),Ka(r)&&r.remove(i);else if(a!==o)if(e.hasValue(i)){const t=e.getValue(i);!t.hasAnimated&&t.set(o)}else{const t=e.getStaticValue(i);e.addValue(i,es(void 0!==t?t:o,{owner:e}))}}for(const i in n)void 0===t[i]&&e.removeValue(i);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0])return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const e=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(e.initial=this.props.initial),e}const e={};for(let t=0;t<Nu;t++){const n=br[t],r=this.props[n];(vr(r)||!1===r)&&(e[n]=r)}return e}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){t!==this.values.get(e)&&(this.removeValue(e),this.bindToMotionValue(e,t)),this.values.set(e,t),this.latestValues[e]=t.get()}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=es(t,{owner:this}),this.addValue(e,n)),n}readValue(e){var t;return void 0===this.latestValues[e]&&this.current?null!==(t=this.getBaseTargetFromProps(this.props,e))&&void 0!==t?t:this.readValueFromInstance(this.current,e,this.options):this.latestValues[e]}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:n}=this.props,r="string"===typeof n||"object"===typeof n?null===(t=Ri(this.props,n))||void 0===t?void 0:t[e]:void 0;if(n&&void 0!==r)return r;const i=this.getBaseTargetFromProps(this.props,e);return void 0===i||$r(i)?void 0!==this.initialValues[e]&&void 0===r?void 0:this.baseTarget[e]:i}on(e,t){return this.events[e]||(this.events[e]=new Xa),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}}class $u extends Du{sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}makeTargetAnimatableFromInstance(e,t,n){let{transition:r,transitionEnd:i,...o}=e,{transformValues:a}=t,s=function(e,t,n){const r={};for(const i in e){const e=ls(i,t);if(void 0!==e)r[i]=e;else{const e=n.getValue(i);e&&(r[i]=e.get())}}return r}(o,r||{},this);if(a&&(i&&(i=a(i)),o&&(o=a(o)),s&&(s=a(s))),n){!function(e,t,n){var r,i;const o=Object.keys(t).filter((t=>!e.hasValue(t))),a=o.length;if(a)for(let s=0;s<a;s++){const a=o[s],l=t[a];let u=null;Array.isArray(l)&&(u=l[0]),null===u&&(u=null!==(i=null!==(r=n[a])&&void 0!==r?r:e.readValue(a))&&void 0!==i?i:t[a]),void 0!==u&&null!==u&&("string"===typeof u&&(Qa(u)||Ba(u))?u=parseFloat(u):!os(u)&&ea.test(l)&&(u=Fa(a,l)),e.addValue(a,es(u,{owner:e})),void 0===n[a]&&(n[a]=u),null!==u&&e.setBaseTarget(a,u))}}(this,o,s);const e=_u(this,o,s,i);i=e.transitionEnd,o=e.target}return{transition:r,transitionEnd:i,...o}}}class Vu extends $u{constructor(){super(...arguments),this.type="html"}readValueFromInstance(e,t){if(Nr.has(t)){const e=Ia(t);return e&&e.default||0}{const r=(n=e,window.getComputedStyle(n)),i=(Br(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof i?i.trim():i}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return ol(e,n)}build(e,t,n,r){ui(e,t,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,t){return _i(e,t)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;$r(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}renderInstance(e,t,n,r){Pi(e,t,n,r)}}class Iu extends $u{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Nr.has(t)){const e=Ia(t);return e&&e.default||0}return t=ji.has(t)?t:pr(t),e.getAttribute(t)}measureInstanceViewportBox(){return{x:{min:0,max:0},y:{min:0,max:0}}}scrapeMotionValuesFromProps(e,t){return Li(e,t)}build(e,t,n,r){wi(e,t,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,n,r){Ti(e,t,0,r)}mount(e){this.isSVGTag=ki(e.tagName),super.mount(e)}}const Fu=(e,t)=>zr(e)?new Iu(t,{enableHardwareAcceleration:!1}):new Vu(t,{enableHardwareAcceleration:!0}),Bu={...ws,...ao,...gu,...{layout:{ProjectionNode:mu,MeasureLayout:gl}}},Uu=Rr(((e,t)=>function(e,t,n,r){let{forwardMotionProps:i=!1}=t;return{...zr(e)?Di:$i,preloadedFeatures:n,useRender:Ci(i),createVisualElement:r,Component:e}}(e,t,Bu,Fu)));var Hu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Wu=t.createContext&&t.createContext(Hu),Yu=function(){return Yu=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},Yu.apply(this,arguments)},Ku=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function Qu(e){return e&&e.map((function(e,n){return t.createElement(e.tag,Yu({key:n},e.attr),Qu(e.child))}))}function Gu(e){return function(n){return t.createElement(qu,Yu({attr:Yu({},e.attr)},n),Qu(e.child))}}function qu(e){var n=function(n){var r,i=e.attr,o=e.size,a=e.title,s=Ku(e,["attr","size","title"]),l=o||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",Yu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,s,{className:r,style:Yu(Yu({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&t.createElement("title",null,a),e.children)};return void 0!==Wu?t.createElement(Wu.Consumer,null,(function(e){return n(e)})):n(Hu)}function Xu(e){return Gu({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function Ju(e){return Gu({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function Zu(e){return Gu({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}}]})(e)}function ec(e){return Gu({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function tc(e){return Gu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function nc(e){return Gu({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}}]})(e)}function rc(e){return Gu({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}}]})(e)}function ic(e){return Gu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"}}]})(e)}function oc(e){return Gu({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"}}]})(e)}function ac(e){return Gu({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"}}]})(e)}function sc(e){return Gu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"}}]})(e)}function lc(e){return Gu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}function uc(e){return Gu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"}}]})(e)}function cc(e){return Gu({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"}}]})(e)}function dc(e){return Gu({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(e)}function fc(e){return Gu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"}}]})(e)}function hc(e){return Gu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"}}]})(e)}function pc(e){return Gu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}function mc(e){return Gu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"}}]})(e)}function gc(e){return Gu({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}}]})(e)}function vc(e){return Gu({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z"}}]})(e)}function yc(e){return Gu({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}const xc=ur(Uu.section)`
  padding: 80px 0;
  position: relative;
  overflow: hidden;
`,bc={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut",when:"beforeChildren",staggerChildren:.2}},exit:{opacity:0,y:-50,transition:{duration:.4}}},wc=ur(Uu.div)`
  background-color: ${e=>e.theme.cardBackground};
  border-radius: 10px;
  box-shadow: ${e=>e.theme.boxShadow};
  padding: 25px;
  margin-bottom: 30px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
`,Sc={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}},kc=ur.button`
  display: inline-block;
  background-color: ${e=>e.outlined?"transparent":e.theme.primary};
  color: ${e=>e.outlined?e.theme.primary:"#fff"};
  border: 2px solid ${e=>e.theme.primary};
  padding: 10px 25px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.outlined?e.theme.primary:e.theme.accent};
    color: #fff;
    transform: translateY(-3px);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,Ec=ur.div`
  text-align: center;
  margin-bottom: 60px;
  
  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    display: inline-block;
    position: relative;
    margin-bottom: 20px;
    color: ${e=>e.theme.text};
  }
  
  h2::after {
    content: '';
    position: absolute;
    display: block;
    width: 50px;
    height: 3px;
    background: ${e=>e.theme.primary};
    bottom: -10px;
    left: calc(50% - 25px);
  }
  
  p {
    color: ${e=>e.theme.textLight};
    font-size: 1.1rem;
  }
`,Cc=ur.div`
  width: 100%;
  height: 10px;
  background-color: ${e=>e.theme.secondary};
  border-radius: 5px;
  margin-bottom: 20px;
  overflow: hidden;
`,Pc=ur(Uu.div)`
  height: 100%;
  background-color: ${e=>e.theme.primary};
  border-radius: 5px;
  width: ${e=>e.percentage}%;
`,jc=(ur.div`
  margin-bottom: 20px;
`,ur.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid ${e=>e.theme.border};
  border-radius: 5px;
  font-size: 16px;
  background-color: ${e=>e.theme.cardBackground};
  color: ${e=>e.theme.text};
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.primary};
    box-shadow: 0 0 0 2px rgba(5, 99, 187, 0.2);
  }
`,ur.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid ${e=>e.theme.border};
  border-radius: 5px;
  font-size: 16px;
  background-color: ${e=>e.theme.cardBackground};
  color: ${e=>e.theme.text};
  transition: all 0.3s ease;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.theme.primary};
    box-shadow: 0 0 0 2px rgba(5, 99, 187, 0.2);
  }
`,ur.div`
  position: relative;
  padding-left: 40px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 10px;
    height: 100%;
    width: 2px;
    background: ${e=>e.theme.primary};
  }
`),Tc=ur(Uu.div)`
  position: relative;
  margin-bottom: 40px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: -36px;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid ${e=>e.theme.primary};
    background: ${e=>e.theme.cardBackground};
  }
`,_c=ur.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${e=>e.theme.secondary};
    color: ${e=>e.theme.primary};
    font-size: 20px;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: ${e=>e.theme.primary};
      color: #fff;
      transform: translateY(-3px);
    }
  }
`,Lc=ur.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`,Rc=ur.span`
  display: inline-block;
  padding: 5px 12px;
  background-color: ${e=>e.theme.secondary};
  color: ${e=>e.theme.text};
  border-radius: 50px;
  font-size: 14px;
  margin-right: 10px;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.theme.primary};
    color: #fff;
  }
`;var Ac=n(579);const zc=ur.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${e=>e.theme.primary+"33"} 0%, ${e=>e.theme.secondary} 100%);
    opacity: 0.15;
    z-index: -1;
  }
  
  /* Educational motion background elements */
  .edu-element {
    position: absolute;
    opacity: 0.15;
    z-index: -1;
    transition: all 0.5s ease;
  }
  
  .edu-element-1 {
    top: 10%;
    left: 5%;
    width: 80px;
    height: 80px;
    border: 3px solid ${e=>e.theme.primary};
    border-radius: 50%;
    animation: float 8s infinite ease-in-out;
    box-shadow: 0 0 15px ${e=>e.theme.primary+"40"};
  }
  
  .edu-element-2 {
    bottom: 15%;
    right: 10%;
    width: 120px;
    height: 120px;
    background: ${e=>e.theme.primary+"20"};
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    animation: spin 15s infinite linear;
    box-shadow: 0 0 20px ${e=>e.theme.primary+"30"};
  }
  
  .edu-element-3 {
    top: 40%;
    right: 15%;
    width: 60px;
    height: 60px;
    background: ${e=>e.theme.accent+"20"};
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
    animation: float 10s infinite ease-in-out;
    box-shadow: 0 0 15px ${e=>e.theme.accent+"40"};
  }
  
  .edu-element-4 {
    bottom: 30%;
    left: 15%;
    width: 100px;
    height: 100px;
    border: 2px dashed ${e=>e.theme.secondary};
    transform: rotate(45deg);
    animation: spin 20s infinite linear reverse;
  }
  
  .edu-element-5 {
    top: 20%;
    right: 30%;
    width: 40px;
    height: 40px;
    background: ${e=>e.theme.secondary+"30"};
    border-radius: 8px;
    animation: float 12s infinite ease-in-out;
    animation-delay: 2s;
  }
  
  .edu-element-6 {
    bottom: 40%;
    left: 30%;
    width: 70px;
    height: 70px;
    border: 2px solid ${e=>e.theme.accent+"40"};
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    animation: morphing 15s infinite ease-in-out alternate;
  }
  
  /* New educational elements */
  .edu-element-7 {
    top: 65%;
    right: 25%;
    width: 50px;
    height: 50px;
    background: ${e=>e.theme.primary+"20"};
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    animation: float 9s infinite ease-in-out;
    animation-delay: 1s;
    box-shadow: 0 0 15px ${e=>e.theme.primary+"30"};
  }
  
  .edu-element-8 {
    top: 15%;
    left: 40%;
    width: 30px;
    height: 30px;
    background: ${e=>e.theme.secondary+"25"};
    clip-path: circle(50% at 50% 50%);
    animation: pulse 6s infinite ease-in-out;
  }
  
  .edu-element-9 {
    bottom: 20%;
    right: 40%;
    width: 90px;
    height: 25px;
    background: ${e=>e.theme.accent+"15"};
    border-radius: 15px;
    animation: float 11s infinite ease-in-out;
    animation-delay: 3s;
  }
  
  .edu-element-10 {
    top: 50%;
    left: 20%;
    width: 45px;
    height: 45px;
    border: 2px solid ${e=>e.theme.primary+"30"};
    transform: rotate(45deg);
    animation: spin 25s infinite linear;
    opacity: 0.1;
  }
  
  /* Code-like elements */
  .code-element {
    position: absolute;
    font-family: monospace;
    color: ${e=>e.theme.primary+"20"};
    font-size: 14px;
    opacity: 0.1;
    z-index: -1;
    white-space: nowrap;
    overflow: hidden;
  }
  
  .code-element-1 {
    top: 25%;
    left: 10%;
    animation: typing 8s steps(30, end) infinite;
  }
  
  .code-element-2 {
    bottom: 35%;
    right: 5%;
    animation: typing 10s steps(40, end) infinite;
    animation-delay: 2s;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  @keyframes morphing {
    0% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
    25% {
      border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
    }
    50% {
      border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
    }
    75% {
      border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
    }
    100% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.1;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.2;
    }
  }
  
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  &:hover .edu-element {
    opacity: 0.2;
  }
  
  &:hover .code-element {
    opacity: 0.15;
  }
`,Mc=ur.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  
  @media (max-width: 992px) {
    flex-direction: column-reverse;
    gap: 40px;
  }
`,Oc=ur.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,Nc=ur.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 100%;
    height: auto;
    max-height: 500px;
    border-radius: 10px;
    box-shadow: ${e=>e.theme.boxShadow};
    transition: all 0.3s ease;
  }
`,Dc=ur(Uu.p)`
  font-size: 1.2rem;
  color: ${e=>e.theme.primary};
  margin-bottom: 20px;
  font-weight: 500;
`,$c=ur(Uu.h1)`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 3rem;
  }
  
  @media (max-width: 576px) {
    font-size: 2.5rem;
  }
`,Vc=ur(Uu.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: ${e=>e.theme.textLight};
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
  
  span {
    color: ${e=>e.theme.primary};
  }
`,Ic=ur(Uu.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 30px;
  max-width: 600px;
`,Fc=ur(Uu.div)`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 15px;
  }
`,Bc=ur(kc)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  padding: 12px 25px;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`,Uc=ur(Uu.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${e=>e.theme.textLight};
  
  p {
    margin-bottom: 10px;
    font-size: 14px;
  }
  
  .mouse {
    width: 30px;
    height: 50px;
    border: 2px solid ${e=>e.theme.textLight};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    padding-top: 10px;
  }
  
  .wheel {
    width: 4px;
    height: 8px;
    background-color: ${e=>e.theme.primary};
    border-radius: 2px;
    animation: scroll 1.5s infinite;
  }
  
  @keyframes scroll {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(15px);
      opacity: 0;
    }
  }
`,Hc=()=>{const e={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return(0,Ac.jsxs)(zc,{id:"home",children:[(0,Ac.jsx)("div",{className:"edu-element edu-element-1"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-2"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-3"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-4"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-5"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-6"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-7"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-8"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-9"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-10"}),(0,Ac.jsx)("div",{className:"code-element code-element-1",children:"function learnDevelopment() { return success; }"}),(0,Ac.jsx)("div",{className:"code-element code-element-2",children:"const skills = ['React', 'Node.js', 'Java', 'C++'];"}),(0,Ac.jsx)(Lc,{children:(0,Ac.jsxs)(Mc,{children:[(0,Ac.jsx)(Oc,{children:(0,Ac.jsxs)(Uu.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},initial:"hidden",animate:"visible",children:[(0,Ac.jsx)(Dc,{variants:e,children:"Hello, my name is"}),(0,Ac.jsx)($c,{variants:e,children:"Jayeeta Mal"}),(0,Ac.jsxs)(Vc,{variants:e,children:["I'm a ",(0,Ac.jsx)("span",{children:"Frontend Developer"})]}),(0,Ac.jsx)(Ic,{variants:e,children:"A Computer Technology student with skills in programming, web development, and database management. Currently seeking internship opportunities to apply theoretical knowledge in real-world scenarios and develop hands-on skills in the tech industry."}),(0,Ac.jsxs)(Fc,{variants:e,children:[(0,Ac.jsxs)(Bc,{as:"a",href:"#projects",children:["View My Work ",(0,Ac.jsx)(nc,{})]}),(0,Ac.jsxs)(Bc,{as:"a",href:"/Resume.pdf",download:"Jayeeta_Mal_Resume.pdf",target:"_blank",rel:"noopener noreferrer",primary:!0,children:["Download CV ",(0,Ac.jsx)(sc,{})]}),(0,Ac.jsxs)(Bc,{as:"a",href:"#contact",outlined:!0,children:["Contact Me ",(0,Ac.jsx)(lc,{})]})]}),(0,Ac.jsxs)(_c,{variants:e,children:[(0,Ac.jsx)(Uu.a,{href:"https://github.com/jayeeta-mal",target:"_blank",rel:"noopener noreferrer",whileHover:{y:-5,color:e=>e.primary},transition:{type:"spring",stiffness:300},children:(0,Ac.jsx)(Xu,{})}),(0,Ac.jsx)(Uu.a,{href:"https://www.linkedin.com/in/jayeeta-mal/",target:"_blank",rel:"noopener noreferrer",whileHover:{y:-5,color:e=>e.primary},transition:{type:"spring",stiffness:300},children:(0,Ac.jsx)(Zu,{})}),(0,Ac.jsx)(Uu.a,{href:"mailto:jayeetamal7@gmail.com",target:"_blank",rel:"noopener noreferrer",whileHover:{y:-5,color:e=>e.primary},transition:{type:"spring",stiffness:300},children:(0,Ac.jsx)(lc,{})})]})]})}),(0,Ac.jsx)(Nc,{children:(0,Ac.jsx)(Uu.img,{src:"/portfolio/images/image.png",alt:"Image",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.5},whileHover:{scale:1.05}})})]})}),(0,Ac.jsxs)(Uc,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:1.5,duration:.5},children:[(0,Ac.jsx)("p",{children:"Scroll down"}),(0,Ac.jsx)("div",{className:"mouse",children:(0,Ac.jsx)("div",{className:"wheel"})})]})]})};const Wc=new WeakMap;let Yc;function Kc(e){let{target:t,contentRect:n,borderBoxSize:r}=e;var i;null===(i=Wc.get(t))||void 0===i||i.forEach((e=>{e({target:t,contentSize:n,get size(){return function(e,t){if(t){const{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(t,r)}})}))}function Qc(e){e.forEach(Kc)}function Gc(e,t){Yc||"undefined"!==typeof ResizeObserver&&(Yc=new ResizeObserver(Qc));const n=function(e,t,n){var r;if("string"===typeof e){let i=document;t&&(ge(Boolean(t.current),"Scope provided, but no element detected."),i=t.current),n?(null!==(r=n[e])&&void 0!==r||(n[e]=i.querySelectorAll(e)),e=n[e]):e=i.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e);return n.forEach((e=>{let n=Wc.get(e);n||(n=new Set,Wc.set(e,n)),n.add(t),null===Yc||void 0===Yc||Yc.observe(e)})),()=>{n.forEach((e=>{const n=Wc.get(e);null===n||void 0===n||n.delete(t),(null===n||void 0===n?void 0:n.size)||null===Yc||void 0===Yc||Yc.unobserve(e)}))}}const qc=new Set;let Xc;function Jc(e){return qc.add(e),Xc||(Xc=()=>{const e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};qc.forEach((e=>e(t)))},window.addEventListener("resize",Xc)),()=>{qc.delete(e),!qc.size&&Xc&&(Xc=void 0)}}const Zc={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function ed(e,t,n,r){const i=n[t],{length:o,position:a}=Zc[t],s=i.current,l=n.time;i.current=e["scroll"+a],i.scrollLength=e["scroll"+o]-e["client"+o],i.offset.length=0,i.offset[0]=0,i.offset[1]=i.scrollLength,i.progress=aa(0,i.scrollLength,i.current);const u=r-l;i.velocity=u>50?0:fa(i.current-s,u)}const td={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},nd={start:0,center:.5,end:1};function rd(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=0;if(void 0!==nd[e]&&(e=nd[e]),"string"===typeof e){const t=parseFloat(e);e.endsWith("px")?r=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?r=t/100*document.documentElement.clientWidth:e.endsWith("vh")?r=t/100*document.documentElement.clientHeight:e=t}return"number"===typeof e&&(r=t*e),n+r}const id=[0,0];function od(e,t,n,r){let i=Array.isArray(e)?e:id,o=0,a=0;return"number"===typeof e?i=[e,e]:"string"===typeof e&&(i=(e=e.trim()).includes(" ")?e.split(" "):[e,nd[e]?e:"0"]),o=rd(i[0],n,r),a=rd(i[1],t),o-a}const ad={x:0,y:0};function sd(e,t,n){let{offset:r=td.All}=n;const{target:i=e,axis:o="y"}=n,a="y"===o?"height":"width",s=i!==e?function(e,t){const n={x:0,y:0};let r=e;for(;r&&r!==t;)if(r instanceof HTMLElement)n.x+=r.offsetLeft,n.y+=r.offsetTop,r=r.offsetParent;else if("svg"===r.tagName){const e=r.getBoundingClientRect();r=r.parentElement;const t=r.getBoundingClientRect();n.x+=e.left-t.left,n.y+=e.top-t.top}else{if(!(r instanceof SVGGraphicsElement))break;{const{x:e,y:t}=r.getBBox();n.x+=e,n.y+=t;let i=null,o=r.parentNode;for(;!i;)"svg"===o.tagName&&(i=o),o=r.parentNode;r=i}}return n}(i,e):ad,l=i===e?{width:e.scrollWidth,height:e.scrollHeight}:function(e){return"getBBox"in e&&"svg"!==e.tagName?e.getBBox():{width:e.clientWidth,height:e.clientHeight}}(i),u={width:e.clientWidth,height:e.clientHeight};t[o].offset.length=0;let c=!t[o].interpolate;const d=r.length;for(let f=0;f<d;f++){const e=od(r[f],u[a],l[a],s[o]);c||e===t[o].interpolatorOffsets[f]||(c=!0),t[o].offset[f]=e}c&&(t[o].interpolate=ua(t[o].offset,ca(r)),t[o].interpolatorOffsets=[...t[o].offset]),t[o].progress=t[o].interpolate(t[o].current)}function ld(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return{measure:()=>function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,n=arguments.length>2?arguments[2]:void 0;if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let r=t;for(;r&&r!==e;)n.x.targetOffset+=r.offsetLeft,n.y.targetOffset+=r.offsetTop,r=r.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight}(e,r.target,n),update:t=>{!function(e,t,n){ed(e,"x",t,n),ed(e,"y",t,n),t.time=n}(e,n,t),(r.offset||r.target)&&sd(e,n,r)},notify:()=>t(n)}}const ud=new WeakMap,cd=new WeakMap,dd=new WeakMap,fd=e=>e===document.documentElement?window:e;function hd(e){let{container:t=document.documentElement,...n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=dd.get(t);r||(r=new Set,dd.set(t,r));const i=ld(t,e,{time:0,x:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0},y:{current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}},n);if(r.add(i),!ud.has(t)){const e=()=>{for(const e of r)e.measure()},n=()=>{for(const e of r)e.update(ae.timestamp)},i=()=>{for(const e of r)e.notify()},o=()=>{ie.read(e,!1,!0),ie.read(n,!1,!0),ie.update(i,!1,!0)};ud.set(t,o);const a=fd(t);window.addEventListener("resize",o,{passive:!0}),t!==document.documentElement&&cd.set(t,function(e,t){return"function"===typeof e?Jc(e):Gc(e,t)}(t,o)),a.addEventListener("scroll",o,{passive:!0})}const o=ud.get(t);return ie.read(o,!1,!0),()=>{var e;oe(o);const n=dd.get(t);if(!n)return;if(n.delete(i),n.size)return;const r=ud.get(t);ud.delete(t),r&&(fd(t).removeEventListener("scroll",r),null===(e=cd.get(t))||void 0===e||e(),window.removeEventListener("resize",r))}}function pd(e,t){me(Boolean(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}const md=()=>({scrollX:es(0),scrollY:es(0),scrollXProgress:es(0),scrollYProgress:es(0)});function gd(){let{container:e,target:n,layoutEffect:r=!0,...i}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const o=ue(md);return(r?Z:t.useEffect)((()=>(pd("target",n),pd("container",e),hd((e=>{let{x:t,y:n}=e;o.scrollX.set(t.current),o.scrollXProgress.set(t.progress),o.scrollY.set(n.current),o.scrollYProgress.set(n.progress)}),{...i,container:(null===e||void 0===e?void 0:e.current)||void 0,target:(null===n||void 0===n?void 0:n.current)||void 0}))),[e,n,JSON.stringify(i.offset)]),o}const vd=e=>(e=>e&&"object"===typeof e&&e.mix)(e)?e.mix:void 0;function yd(e,n){const r=function(e){const n=ue((()=>es(e))),{isStatic:r}=(0,t.useContext)(dr);if(r){const[,r]=(0,t.useState)(e);(0,t.useEffect)((()=>n.on("change",r)),[])}return n}(n()),i=()=>r.set(n());return i(),Z((()=>{const t=()=>ie.update(i,!1,!0),n=e.map((e=>e.on("change",t)));return()=>{n.forEach((e=>e())),oe(i)}})),r}function xd(e,t,n,r){if("function"===typeof e)return function(e){Ja.current=[],e();const t=yd(Ja.current,e);return Ja.current=void 0,t}(e);const i="function"===typeof t?t:function(){const e=!Array.isArray(arguments.length<=0?void 0:arguments[0]),t=e?0:-1,n=0+t<0||arguments.length<=0+t?void 0:arguments[0+t],r=2+t<0||arguments.length<=2+t?void 0:arguments[2+t],i=3+t<0||arguments.length<=3+t?void 0:arguments[3+t],o=ua(1+t<0||arguments.length<=1+t?void 0:arguments[1+t],r,{mixer:vd(r[0]),...i});return e?o(n):o}(t,n,r);return Array.isArray(e)?bd(e,i):bd([e],(e=>{let[t]=e;return i(t)}))}function bd(e,t){const n=ue((()=>[]));return yd(e,(()=>{n.length=0;const r=e.length;for(let t=0;t<r;t++)n[t]=e[t].get();return t(n)}))}var wd=Object.defineProperty,Sd=(e,t,n)=>((e,t,n)=>t in e?wd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!==typeof t?t+"":t,n),kd=new Map,Ed=new WeakMap,Cd=0,Pd=void 0;function jd(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>`${t}_${"root"===t?function(e){return e?(Ed.has(e)||(Cd+=1,Ed.set(e,Cd.toString())),Ed.get(e)):"0"}(e.root):e[t]}`)).toString()}function Td(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:Pd;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const i=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}const{id:i,observer:o,elements:a}=function(e){const t=jd(e);let n=kd.get(t);if(!n){const r=new Map;let i;const o=new IntersectionObserver((t=>{t.forEach((t=>{var n;const o=t.isIntersecting&&i.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((e=>{e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},kd.set(t,n)}return n}(n),s=a.get(e)||[];return a.has(e)||a.set(e,s),s.push(t),o.observe(e),function(){s.splice(s.indexOf(t),1),0===s.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),kd.delete(i))}}t.Component;function _d(){let{threshold:e,delay:n,trackVisibility:r,rootMargin:i,root:o,triggerOnce:a,skip:s,initialInView:l,fallbackInView:u,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var d;const[f,h]=t.useState(null),p=t.useRef(c),[m,g]=t.useState({inView:!!l,entry:void 0});p.current=c,t.useEffect((()=>{if(s||!f)return;let t;return t=Td(f,((e,n)=>{g({inView:e,entry:n}),p.current&&p.current(e,n),n.isIntersecting&&a&&t&&(t(),t=void 0)}),{root:o,rootMargin:i,threshold:e,trackVisibility:r,delay:n},u),()=>{t&&t()}}),[Array.isArray(e)?e.toString():e,f,o,i,a,s,r,u,n]);const v=null==(d=m.entry)?void 0:d.target,y=t.useRef(void 0);f||!v||a||s||y.current===v||(y.current=v,g({inView:!!l,entry:void 0}));const x=[h,m.inView,m.entry];return x.ref=x[0],x.inView=x[1],x.entry=x[2],x}const Ld=ur(xc)`
  background-color: ${e=>e.theme.background};
  position: relative;
  overflow: hidden;
  
  /* Educational motion background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${e=>e.theme.primary+"10"} 0%, ${e=>e.theme.secondary+"05"} 100%);
    z-index: 0;
  }
  
  /* Animated educational elements */
  .edu-element {
    position: absolute;
    opacity: 0.15;
    z-index: 0;
    transition: all 0.5s ease;
  }
  
  .edu-element-1 {
    top: 10%;
    left: 5%;
    width: 80px;
    height: 80px;
    border: 3px solid ${e=>e.theme.primary};
    border-radius: 50%;
    animation: float 8s infinite ease-in-out;
    box-shadow: 0 0 15px ${e=>e.theme.primary+"40"};
  }
  
  .edu-element-2 {
    bottom: 15%;
    right: 10%;
    width: 120px;
    height: 120px;
    background: ${e=>e.theme.primary+"20"};
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    animation: spin 15s infinite linear;
    box-shadow: 0 0 20px ${e=>e.theme.primary+"30"};
  }
  
  .edu-element-3 {
    top: 40%;
    right: 15%;
    width: 60px;
    height: 60px;
    background: ${e=>e.theme.accent+"20"};
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
    animation: float 10s infinite ease-in-out;
    box-shadow: 0 0 15px ${e=>e.theme.accent+"40"};
  }
  
  .edu-element-4 {
    bottom: 30%;
    left: 15%;
    width: 100px;
    height: 100px;
    border: 2px dashed ${e=>e.theme.secondary};
    transform: rotate(45deg);
    animation: spin 20s infinite linear reverse;
  }
  
  .edu-element-5 {
    top: 20%;
    right: 30%;
    width: 40px;
    height: 40px;
    background: ${e=>e.theme.secondary+"30"};
    border-radius: 8px;
    animation: float 12s infinite ease-in-out;
    animation-delay: 2s;
  }
  
  .edu-element-6 {
    bottom: 40%;
    left: 30%;
    width: 70px;
    height: 70px;
    border: 2px solid ${e=>e.theme.accent+"40"};
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    animation: morphing 15s infinite ease-in-out alternate;
  }
  
  /* New educational elements */
  .edu-element-7 {
    top: 65%;
    right: 25%;
    width: 50px;
    height: 50px;
    background: ${e=>e.theme.primary+"20"};
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    animation: float 9s infinite ease-in-out;
    animation-delay: 1s;
    box-shadow: 0 0 15px ${e=>e.theme.primary+"30"};
  }
  
  .edu-element-8 {
    top: 15%;
    left: 40%;
    width: 30px;
    height: 30px;
    background: ${e=>e.theme.secondary+"25"};
    clip-path: circle(50% at 50% 50%);
    animation: pulse 6s infinite ease-in-out;
  }
  
  .edu-element-9 {
    bottom: 20%;
    right: 40%;
    width: 90px;
    height: 25px;
    background: ${e=>e.theme.accent+"15"};
    border-radius: 15px;
    animation: float 11s infinite ease-in-out;
    animation-delay: 3s;
  }
  
  .edu-element-10 {
    top: 50%;
    left: 20%;
    width: 45px;
    height: 45px;
    border: 2px solid ${e=>e.theme.primary+"30"};
    transform: rotate(45deg);
    animation: spin 25s infinite linear;
    opacity: 0.1;
  }
  
  /* Code-like elements */
  .code-element {
    position: absolute;
    font-family: monospace;
    color: ${e=>e.theme.primary+"20"};
    font-size: 14px;
    opacity: 0.1;
    z-index: 0;
    white-space: nowrap;
    overflow: hidden;
  }
  
  .code-element-1 {
    top: 25%;
    left: 10%;
    animation: typing 8s steps(30, end) infinite;
  }
  
  .code-element-2 {
    bottom: 35%;
    right: 5%;
    animation: typing 10s steps(40, end) infinite;
    animation-delay: 2s;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  @keyframes morphing {
    0% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
    25% {
      border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
    }
    50% {
      border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
    }
    75% {
      border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
    }
    100% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.1;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.2;
    }
  }
  
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  &:hover .edu-element {
    opacity: 0.2;
  }
  
  &:hover .code-element {
    opacity: 0.15;
  }
`,Rd=ur.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`,Ad=ur.div`
  flex: 1;
  min-width: 300px;
  position: relative;
  z-index: 1;
  
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    box-shadow: ${e=>e.theme.boxShadow};
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
    }
  }
  
  @media (max-width: 992px) {
    display: flex;
    justify-content: center;
    
    img {
      max-width: 300px;
    }
  }
`,zd=ur.div`
  flex: 2;
  min-width: 300px;
  position: relative;
  z-index: 1;
`,Md=ur.h3`
  font-size: 2rem;
  margin-bottom: 20px;
  color: ${e=>e.theme.text};
  
  span {
    color: ${e=>e.theme.primary};
  }
`,Od=ur.div`
  margin-bottom: 30px;
  
  p {
    margin-bottom: 15px;
    line-height: 1.8;
  }
`,Nd=ur.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`,Dd=ur.div`
  display: flex;
  align-items: center;
  width: 50%;
  margin-bottom: 15px;
  
  @media (max-width: 576px) {
    width: 100%;
  }
  
  svg {
    color: ${e=>e.theme.primary};
    margin-right: 10px;
    font-size: 18px;
  }
  
  span {
    font-weight: 500;
  }
`,$d=ur.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 15px;
  }
`,Vd=ur.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 60px;
`,Id=ur(Uu(wc))`
  flex: 1;
  min-width: 200px;
  text-align: center;
  padding: 30px 20px;
  
  svg {
    font-size: 40px;
    color: ${e=>e.theme.primary};
    margin-bottom: 15px;
  }
  
  h4 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: ${e=>e.theme.text};
  }
  
  p {
    color: ${e=>e.theme.textLight};
    font-size: 1rem;
  }
`,Fd=(ur(Uu.div)`
  background-color: ${e=>e.theme.cardBackground};
  border-radius: 10px;
  padding: 25px;
  box-shadow: ${e=>e.theme.boxShadow};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .certificate-icon {
    font-size: 40px;
    color: ${e=>e.theme.primary};
    margin-bottom: 15px;
  }
  
  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: ${e=>e.theme.text};
  }
  
  p {
    color: ${e=>e.theme.textLight};
    font-size: 0.9rem;
  }
`,()=>{const[e,t]=_d({threshold:.2,triggerOnce:!0}),{scrollYProgress:n}=gd(),r=xd(n,[0,1],[.8,1]);return(0,Ac.jsxs)(Ld,{id:"about",variants:bc,initial:"hidden",animate:t?"visible":"hidden",exit:"exit",ref:e,children:[(0,Ac.jsx)("div",{className:"edu-element edu-element-1"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-2"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-3"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-4"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-5"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-6"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-7"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-8"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-9"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-10"}),(0,Ac.jsx)("div",{className:"code-element code-element-1",children:"function learnDevelopment() { return success; }"}),(0,Ac.jsx)("div",{className:"code-element code-element-2",children:"const skills = ['React', 'Node.js', 'Java', 'C++'];"}),(0,Ac.jsxs)(Lc,{children:[(0,Ac.jsxs)(Ec,{children:[(0,Ac.jsx)(Uu.h2,{variants:Sc,children:"About Me"}),(0,Ac.jsx)(Uu.p,{variants:Sc,children:"Here you will find more information about me, what I do, and my current skills"})]}),(0,Ac.jsxs)(Rd,{children:[(0,Ac.jsx)(Ad,{children:(0,Ac.jsx)(Uu.img,{src:"/images/image1.jpeg",alt:"Traditional Saree",style:{scale:r},initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:.2}})}),(0,Ac.jsx)(zd,{children:(0,Ac.jsxs)(Uu.div,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:.3},children:[(0,Ac.jsxs)(Md,{children:["I'm ",(0,Ac.jsx)("span",{children:"Jayeeta Mal"}),", a Frontend Developer"]}),(0,Ac.jsxs)(Od,{children:[(0,Ac.jsx)("p",{children:"A Computer Technology student with skills in programming, web development, and database management. Currently seeking internship opportunities to apply theoretical knowledge in real-world scenarios and develop hands-on skills in the tech industry."}),(0,Ac.jsx)("p",{children:"I am a Computer Technology student with a strong foundation in programming languages, web development, and database management. I am currently pursuing a Diploma in Computer Technology and actively seeking internship opportunities."}),(0,Ac.jsx)("p",{children:"My goal is to apply my theoretical knowledge in real-world scenarios and develop hands-on skills in the tech industry. I am eager to learn from industry professionals and contribute to projects using technical skills, data structure, and algorithms."}),(0,Ac.jsxs)("p",{children:[(0,Ac.jsx)("b",{children:"Hobbies:"})," Singing, Listening Music, Travelling"]})]}),(0,Ac.jsxs)(Nd,{children:[(0,Ac.jsxs)(Dd,{children:[(0,Ac.jsx)(yc,{}),(0,Ac.jsx)("span",{children:"Name: "})," \xa0 Jayeeta Mal"]}),(0,Ac.jsxs)(Dd,{children:[(0,Ac.jsx)(lc,{}),(0,Ac.jsx)("span",{children:"Email: "})," \xa0 jayeetamal7@gmail.com"]}),(0,Ac.jsxs)(Dd,{children:[(0,Ac.jsx)(dc,{}),(0,Ac.jsx)("span",{children:"Location: "})," \xa0 West Bengal, India"]}),(0,Ac.jsxs)(Dd,{children:[(0,Ac.jsx)(oc,{}),(0,Ac.jsx)("span",{children:"Age: "})," \xa0 20 Years"]}),(0,Ac.jsxs)(Dd,{children:[(0,Ac.jsx)(cc,{}),(0,Ac.jsx)("span",{children:"Degree: "})," \xa0 Diploma in Computer Technology"]}),(0,Ac.jsxs)(Dd,{children:[(0,Ac.jsx)(ac,{}),(0,Ac.jsx)("span",{children:"Status: "})," \xa0 Fresher - Seeking Internships"]})]}),(0,Ac.jsxs)($d,{children:[(0,Ac.jsxs)(kc,{as:"a",href:"/Resume.pdf",download:"Jayeeta_Mal_Resume.pdf",target:"_blank",rel:"noopener noreferrer",children:["Download CV ",(0,Ac.jsx)(sc,{style:{marginLeft:"8px"}})]}),(0,Ac.jsxs)(kc,{as:"a",href:"#contact",outlined:!0,children:["Contact Me ",(0,Ac.jsx)(lc,{style:{marginLeft:"8px"}})]})]})]})})]}),(0,Ac.jsxs)(Vd,{children:[(0,Ac.jsxs)(Id,{variants:Sc,whileHover:{y:-10,transition:{duration:.3}},children:[(0,Ac.jsx)(ac,{}),(0,Ac.jsx)("h4",{children:"5+"}),(0,Ac.jsx)("p",{children:"Projects Completed"})]}),(0,Ac.jsxs)(Id,{variants:Sc,whileHover:{y:-10,transition:{duration:.3}},children:[(0,Ac.jsx)(yc,{}),(0,Ac.jsx)("h4",{children:"5+"}),(0,Ac.jsx)("p",{children:"Happy Clients"})]}),(0,Ac.jsxs)(Id,{variants:Sc,whileHover:{y:-10,transition:{duration:.3}},children:[(0,Ac.jsx)(cc,{}),(0,Ac.jsx)("h4",{children:"1+"}),(0,Ac.jsx)("p",{children:"Years of Web Development Experience"})]})]})]})]})}),Bd=ur(xc)`
  background-color: ${e=>e.theme.background};
  position: relative;
  overflow: hidden;
  
  /* Educational motion background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, ${e=>e.theme.primary+"10"} 0%, ${e=>e.theme.secondary+"05"} 100%);
    z-index: 0;
  }
  
  /* Animated educational elements */
  .edu-element {
    position: absolute;
    opacity: 0.15;
    z-index: 0;
    transition: all 0.5s ease;
  }
  
  .edu-element-1 {
    top: 10%;
    left: 5%;
    width: 80px;
    height: 80px;
    border: 3px solid ${e=>e.theme.primary};
    border-radius: 50%;
    animation: float 8s infinite ease-in-out;
    box-shadow: 0 0 15px ${e=>e.theme.primary+"40"};
  }
  
  .edu-element-2 {
    bottom: 15%;
    right: 10%;
    width: 120px;
    height: 120px;
    background: ${e=>e.theme.primary+"20"};
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    animation: spin 15s infinite linear;
    box-shadow: 0 0 20px ${e=>e.theme.primary+"30"};
  }
  
  .edu-element-3 {
    top: 40%;
    right: 15%;
    width: 60px;
    height: 60px;
    background: ${e=>e.theme.accent+"20"};
    clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
    animation: float 10s infinite ease-in-out;
    box-shadow: 0 0 15px ${e=>e.theme.accent+"40"};
  }
  
  .edu-element-4 {
    bottom: 30%;
    left: 15%;
    width: 100px;
    height: 100px;
    border: 2px dashed ${e=>e.theme.secondary};
    transform: rotate(45deg);
    animation: spin 20s infinite linear reverse;
  }
  
  .edu-element-5 {
    top: 20%;
    right: 30%;
    width: 40px;
    height: 40px;
    background: ${e=>e.theme.secondary+"30"};
    border-radius: 8px;
    animation: float 12s infinite ease-in-out;
    animation-delay: 2s;
  }
  
  .edu-element-6 {
    bottom: 40%;
    left: 30%;
    width: 70px;
    height: 70px;
    border: 2px solid ${e=>e.theme.accent+"40"};
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    animation: morphing 15s infinite ease-in-out alternate;
  }
  
  /* New educational elements */
  .edu-element-7 {
    top: 65%;
    right: 25%;
    width: 50px;
    height: 50px;
    background: ${e=>e.theme.primary+"20"};
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    animation: float 9s infinite ease-in-out;
    animation-delay: 1s;
    box-shadow: 0 0 15px ${e=>e.theme.primary+"30"};
  }
  
  .edu-element-8 {
    top: 15%;
    left: 40%;
    width: 30px;
    height: 30px;
    background: ${e=>e.theme.secondary+"25"};
    clip-path: circle(50% at 50% 50%);
    animation: pulse 6s infinite ease-in-out;
  }
  
  .edu-element-9 {
    bottom: 20%;
    right: 40%;
    width: 90px;
    height: 25px;
    background: ${e=>e.theme.accent+"15"};
    border-radius: 15px;
    animation: float 11s infinite ease-in-out;
    animation-delay: 3s;
  }
  
  .edu-element-10 {
    top: 50%;
    left: 20%;
    width: 45px;
    height: 45px;
    border: 2px solid ${e=>e.theme.primary+"30"};
    transform: rotate(45deg);
    animation: spin 25s infinite linear;
    opacity: 0.1;
  }
  
  /* Code-like elements */
  .code-element {
    position: absolute;
    font-family: monospace;
    color: ${e=>e.theme.primary+"20"};
    font-size: 14px;
    opacity: 0.1;
    z-index: 0;
    white-space: nowrap;
    overflow: hidden;
  }
  
  .code-element-1 {
    top: 25%;
    left: 10%;
    animation: typing 8s steps(30, end) infinite;
  }
  
  .code-element-2 {
    bottom: 35%;
    right: 5%;
    animation: typing 10s steps(40, end) infinite;
    animation-delay: 2s;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  @keyframes morphing {
    0% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
    25% {
      border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
    }
    50% {
      border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
    }
    75% {
      border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
    }
    100% {
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.1;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.2;
    }
  }
  
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }
  
  &:hover .edu-element {
    opacity: 0.2;
  }
  
  &:hover .code-element {
    opacity: 0.15;
  }
`,Ud=ur(Uu.div)`
  background-color: ${e=>e.theme.cardBackground};
  border-radius: 10px;
  padding: 25px;
  box-shadow: ${e=>e.theme.boxShadow};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .certificate-icon {
    font-size: 40px;
    color: ${e=>e.theme.primary};
    margin-bottom: 15px;
  }
  
  h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: ${e=>e.theme.text};
  }
  
  p {
    color: ${e=>e.theme.textLight};
    font-size: 0.9rem;
  }
`,Hd={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1,delayChildren:.3}}},Wd=()=>{const[e,t]=_d({threshold:.2,triggerOnce:!0}),{scrollYProgress:n}=gd();xd(n,[0,1],[.8,1]);return(0,Ac.jsxs)(Bd,{id:"about",variants:bc,initial:"hidden",animate:t?"visible":"hidden",exit:"exit",ref:e,children:[(0,Ac.jsx)("div",{className:"edu-element edu-element-1"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-2"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-3"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-4"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-5"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-6"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-7"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-8"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-9"}),(0,Ac.jsx)("div",{className:"edu-element edu-element-10"}),(0,Ac.jsx)("div",{className:"code-element code-element-1",children:"function learnDevelopment() { return success; }"}),(0,Ac.jsx)("div",{className:"code-element code-element-2",children:"const skills = ['React', 'Node.js', 'Java', 'C++'];"}),(0,Ac.jsxs)(Lc,{children:[(0,Ac.jsxs)(Uu.div,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:.5},style:{marginTop:"60px"},children:[(0,Ac.jsxs)(Ec,{children:[(0,Ac.jsx)(Uu.h2,{variants:Sc,children:"Achievements & Certificates"}),(0,Ac.jsx)(Uu.p,{variants:Sc,children:"Professional development and recognition"})]}),(0,Ac.jsxs)(Uu.div,{variants:Hd,initial:"hidden",animate:"visible",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"20px",marginTop:"30px"},children:[(0,Ac.jsxs)(Ud,{variants:Sc,children:[(0,Ac.jsx)("div",{className:"certificate-icon",children:(0,Ac.jsx)(cc,{})}),(0,Ac.jsx)("h4",{children:"Certificate course on C++"}),(0,Ac.jsx)("p",{children:"May '22 \u2013 Jul '22"})]}),(0,Ac.jsxs)(Ud,{variants:Sc,children:[(0,Ac.jsx)("div",{className:"certificate-icon",children:(0,Ac.jsx)(cc,{})}),(0,Ac.jsx)("h4",{children:"Certificate course on Full Stack Web Development"}),(0,Ac.jsx)("p",{children:"Jul '22 \u2013 Mar '23"})]}),(0,Ac.jsxs)(Ud,{variants:Sc,children:[(0,Ac.jsx)("div",{className:"certificate-icon",children:(0,Ac.jsx)(cc,{})}),(0,Ac.jsx)("h4",{children:"Certificate course on Core JAVA"}),(0,Ac.jsx)("p",{children:"Apr '23 \u2013 Oct '23"})]}),(0,Ac.jsxs)(Ud,{variants:Sc,children:[(0,Ac.jsx)("div",{className:"certificate-icon",children:(0,Ac.jsx)(cc,{})}),(0,Ac.jsx)("h4",{children:"Technical Executive: AI/ML at MLSA \u2013 KIIT"}),(0,Ac.jsx)("p",{children:"Mar '25 \u2013 Present"})]})]})]}),(0,Ac.jsxs)(Uu.div,{initial:{opacity:0,y:20},animate:t?{opacity:1,y:0}:{opacity:0,y:20},transition:{duration:.5,delay:.6},style:{marginTop:"60px"},children:[(0,Ac.jsxs)(Ec,{children:[(0,Ac.jsx)(Uu.h2,{variants:Sc,children:"Subjects of Interest"}),(0,Ac.jsx)(Uu.p,{variants:Sc,children:"Academic areas I'm passionate about"})]}),(0,Ac.jsxs)(Uu.div,{variants:Hd,initial:"hidden",animate:"visible",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"20px",marginTop:"30px"},children:[(0,Ac.jsxs)(Ud,{variants:Sc,children:[(0,Ac.jsx)("div",{className:"certificate-icon",children:(0,Ac.jsx)(ac,{})}),(0,Ac.jsx)("h4",{children:"Theory of Computation (Automata)"}),(0,Ac.jsx)("p",{children:"Formal languages, automata theory, and computational models"})]}),(0,Ac.jsxs)(Ud,{variants:Sc,children:[(0,Ac.jsx)("div",{className:"certificate-icon",children:(0,Ac.jsx)(cc,{})}),(0,Ac.jsx)("h4",{children:"Database Management System"}),(0,Ac.jsx)("p",{children:"Relational databases, SQL, and data modeling"})]}),(0,Ac.jsxs)(Ud,{variants:Sc,children:[(0,Ac.jsx)("div",{className:"certificate-icon",children:(0,Ac.jsx)(ac,{})}),(0,Ac.jsx)("h4",{children:"Data Structure"}),(0,Ac.jsx)("p",{children:"Algorithms, complexity analysis, and efficient data organization"})]})]})]})]})]})},Yd=ur(xc)`
  background-color: ${e=>e.theme.secondary};
`,Kd=ur(jc)`
  margin-top: 50px;
`,Qd=ur(Tc)`
  background-color: ${e=>e.theme.cardBackground};
  border-radius: 10px;
  padding: 25px;
  box-shadow: ${e=>e.theme.boxShadow};
`,Gd=ur.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`,qd=ur.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${e=>e.theme.primary+"20"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex-shrink: 0;
  
  svg {
    color: ${e=>e.theme.primary};
    font-size: 20px;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 15px;
  }
`,Xd=ur.h3`
  font-size: 1.5rem;
  margin-bottom: 5px;
  color: ${e=>e.theme.text};
`,Jd=ur.h4`
  font-size: 1.2rem;
  color: ${e=>e.theme.primary};
  margin-bottom: 10px;
`,Zd=ur.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  
  div {
    display: flex;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 5px;
    color: ${e=>e.theme.textLight};
    
    svg {
      margin-right: 5px;
      font-size: 14px;
    }
  }
`,ef=ur.div`
  p {
    margin-bottom: 15px;
    line-height: 1.8;
  }
  
  ul {
    margin-left: 20px;
    margin-bottom: 0;
    
    li {
      margin-bottom: 8px;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        left: -15px;
        top: 10px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: ${e=>e.theme.primary};
      }
    }
  }
`,tf=()=>{const[e,t]=_d({threshold:.1,triggerOnce:!0}),n={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return(0,Ac.jsx)(Yd,{id:"experience",variants:bc,initial:"hidden",animate:t?"visible":"hidden",exit:"exit",ref:e,children:(0,Ac.jsxs)(Lc,{children:[(0,Ac.jsxs)(Ec,{children:[(0,Ac.jsx)(Uu.h2,{variants:n,children:"Work Experience"}),(0,Ac.jsx)(Uu.p,{variants:n,children:"My professional journey and career highlights"})]}),(0,Ac.jsx)(Kd,{children:(0,Ac.jsx)(Uu.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},initial:"hidden",animate:t?"visible":"hidden",children:[{id:3,title:"Capstone Project Lead",company:"Budge Budge Institute of Technology",location:"West Bengal, India",period:"Jan 2025 - Present",description:"",achievements:["Capstone Project: A Web Application on attendance management system","Got guidance from my mentor","Mentored team members on web development best practices"]}].map((e=>(0,Ac.jsxs)(Qd,{variants:n,children:[(0,Ac.jsxs)(Gd,{children:[(0,Ac.jsx)(qd,{children:(0,Ac.jsx)(ic,{})}),(0,Ac.jsxs)("div",{children:[(0,Ac.jsx)(Xd,{children:e.title}),(0,Ac.jsx)(Jd,{children:e.company}),(0,Ac.jsxs)(Zd,{children:[(0,Ac.jsxs)("div",{children:[(0,Ac.jsx)(oc,{}),(0,Ac.jsx)("span",{children:e.period})]}),(0,Ac.jsxs)("div",{children:[(0,Ac.jsx)(dc,{}),(0,Ac.jsx)("span",{children:e.location})]})]})]})]}),(0,Ac.jsxs)(ef,{children:[(0,Ac.jsx)("p",{children:e.description}),(0,Ac.jsx)("ul",{children:e.achievements.map(((e,t)=>(0,Ac.jsx)("li",{children:e},t)))})]})]},e.id)))})})]})})},nf=ur(xc)`
  background-color: ${e=>e.theme.background};
`,rf=ur(jc)`
  margin-top: 50px;
`,of=ur(Tc)`
  background-color: ${e=>e.theme.cardBackground};
  border-radius: 10px;
  padding: 25px;
  box-shadow: ${e=>e.theme.boxShadow};
`,af=ur.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`,sf=ur.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${e=>e.theme.primary+"20"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex-shrink: 0;
  
  svg {
    color: ${e=>e.theme.primary};
    font-size: 20px;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 15px;
  }
`,lf=ur.h3`
  font-size: 1.5rem;
  margin-bottom: 5px;
  color: ${e=>e.theme.text};
`,uf=ur.h4`
  font-size: 1.2rem;
  color: ${e=>e.theme.primary};
  margin-bottom: 10px;
`,cf=ur.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 15px;
  
  div {
    display: flex;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 5px;
    color: ${e=>e.theme.textLight};
    
    svg {
      margin-right: 5px;
      font-size: 14px;
    }
  }
`,df=ur.div`
  p {
    margin-bottom: 15px;
    line-height: 1.8;
  }
  
  ul {
    margin-left: 20px;
    margin-bottom: 0;
    
    li {
      margin-bottom: 8px;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        left: -15px;
        top: 10px;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: ${e=>e.theme.primary};
      }
    }
  }
`,ff=()=>{const[e,t]=_d({threshold:.1,triggerOnce:!0}),n={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.5}}};return(0,Ac.jsx)(nf,{id:"education",variants:bc,initial:"hidden",animate:t?"visible":"hidden",exit:"exit",ref:e,children:(0,Ac.jsxs)(Lc,{children:[(0,Ac.jsxs)(Ec,{children:[(0,Ac.jsx)(Uu.h2,{variants:n,children:"Education"}),(0,Ac.jsx)(Uu.p,{variants:n,children:"My academic background and qualifications"})]}),(0,Ac.jsx)(rf,{children:(0,Ac.jsx)(Uu.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2}}},initial:"hidden",animate:t?"visible":"hidden",children:[{id:1,degree:"Diploma in Computer Science and Engineering",institution:"Budge Budge Institute of Technology",location:"West Bengal, India",period:"2022-2025",description:"Pursuing Diploma in Computer Science and Engineering with a focus on Web Development. Maintaining a CGPA of 9.7/10.",achievements:["College topper in Computer Science and Engineering","Member of the college's tech club","Developing a attendance management system as a final year capstone project","Mentored peers in web development concepts"]},{id:2,degree:"Higher Secondary Education (10th)",institution:"Gotalahat Sashibhusan High School",location:"West Bengal, India",period:"2022",description:"Completed Higher Secondary Education with a focus on Arts. Scored 93% in board examinations.",achievements:["School topper in Arts field","Participated in various cultural activities"]},{id:3,degree:"Secondary Education (10th)",institution:"Sevanagar Ballika Vidyalaya",location:"West Bengal, India",period:"2021",description:"Completed Secondary Education with a focus on Science and Mathematics. Scored 72% in board examinations.",achievements:["School topper in Science field","Participated in various cultural activities"]}].map((e=>(0,Ac.jsxs)(of,{variants:n,children:[(0,Ac.jsxs)(af,{children:[(0,Ac.jsx)(sf,{children:(0,Ac.jsx)(cc,{})}),(0,Ac.jsxs)("div",{children:[(0,Ac.jsx)(lf,{children:e.degree}),(0,Ac.jsx)(uf,{children:e.institution}),(0,Ac.jsxs)(cf,{children:[(0,Ac.jsxs)("div",{children:[(0,Ac.jsx)(oc,{}),(0,Ac.jsx)("span",{children:e.period})]}),(0,Ac.jsxs)("div",{children:[(0,Ac.jsx)(dc,{}),(0,Ac.jsx)("span",{children:e.location})]})]})]})]}),(0,Ac.jsxs)(df,{children:[(0,Ac.jsx)("p",{children:e.description}),(0,Ac.jsx)("ul",{children:e.achievements.map(((e,t)=>(0,Ac.jsx)("li",{children:e},t)))})]})]},e.id)))})})]})})},hf=ur(xc)`
  background-color: ${e=>e.theme.secondary};
`,pf=ur.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`,mf=ur(wc)`
  flex: 1;
  min-width: 300px;
  
  @media (max-width: 768px) {
    min-width: 100%;
  }
`,gf=ur.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`,vf=ur.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${e=>e.theme.primary+"20"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  
  svg {
    color: ${e=>e.theme.primary};
    font-size: 18px;
  }
`,yf=ur.h3`
  font-size: 1.3rem;
  color: ${e=>e.theme.text};
  margin: 0;
`,xf=ur.div`
  margin-bottom: 20px;
  
  &:last-child {
    margin-bottom: 0;
  }
`,bf=ur.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,wf=ur.h4`
  font-size: 1rem;
  font-weight: 500;
  color: ${e=>e.theme.text};
  margin: 0;
`,Sf=ur.span`
  font-size: 0.9rem;
  color: ${e=>e.theme.primary};
  font-weight: 600;
`,kf=(ur.div`
  margin-top: 50px;
`,ur.h3`
  font-size: 1.5rem;
  margin-bottom: 25px;
  text-align: center;
  color: ${e=>e.theme.text};
`,ur.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`,()=>{const[e,t]=_d({threshold:.1,triggerOnce:!0}),n=[{id:1,title:"Frontend Development",icon:(0,Ac.jsx)(ac,{}),skills:[{name:"HTML/CSS",percentage:90},{name:"JavaScript",percentage:85},{name:"React",percentage:80},{name:"Bootstrap",percentage:85}]},{id:2,title:"Tools & Technologies",icon:(0,Ac.jsx)(vc,{}),skills:[{name:"Git",percentage:85},{name:"VS Code",percentage:90},{name:"XAMPP",percentage:70}]},{id:3,title:"Programming Languages",icon:(0,Ac.jsx)(ac,{}),skills:[{name:"C",percentage:85},{name:"Java",percentage:80},{name:"SQL",percentage:70}]},{id:4,title:"CommunicationLanguages",icon:(0,Ac.jsx)(ac,{}),skills:[{name:"Bengali",percentage:100},{name:"Hindi",percentage:80},{name:"English",percentage:70}]}],r={hidden:{width:0},visible:e=>({width:`${e}%`,transition:{duration:1,ease:"easeOut"}})};return(0,Ac.jsx)(hf,{id:"skills",variants:bc,initial:"hidden",animate:t?"visible":"hidden",exit:"exit",ref:e,children:(0,Ac.jsxs)(Lc,{children:[(0,Ac.jsxs)(Ec,{children:[(0,Ac.jsx)(Uu.h2,{variants:Sc,children:"Skills"}),(0,Ac.jsx)(Uu.p,{variants:Sc,children:"My technical expertise and proficiency levels"})]}),(0,Ac.jsx)(pf,{children:(0,Ac.jsx)(Uu.div,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},initial:"hidden",animate:t?"visible":"hidden",className:"row",style:{width:"100%"},children:n.map((e=>(0,Ac.jsx)(Uu.div,{variants:Sc,className:"col-lg-6",children:(0,Ac.jsxs)(mf,{children:[(0,Ac.jsxs)(gf,{children:[(0,Ac.jsx)(vf,{children:e.icon}),(0,Ac.jsx)(yf,{children:e.title})]}),e.skills.map(((e,n)=>(0,Ac.jsxs)(xf,{children:[(0,Ac.jsxs)(bf,{children:[(0,Ac.jsx)(wf,{children:e.name}),(0,Ac.jsxs)(Sf,{children:[e.percentage,"%"]})]}),(0,Ac.jsx)(Cc,{children:(0,Ac.jsx)(Pc,{custom:e.percentage,variants:r,initial:"hidden",animate:t?"visible":"hidden",percentage:e.percentage})})]},n)))]})},e.id)))})})]})})}),Ef=ur(xc)`
  background-color: ${e=>e.theme.background};
`,Cf=ur.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 40px;
`,Pf=ur.button`
  background-color: ${e=>e.active?e.theme.primary:"transparent"};
  color: ${e=>e.active?"#fff":e.theme.text};
  border: 2px solid ${e=>e.active?e.theme.primary:e.theme.border};
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.active?e.theme.primary:e.theme.secondary};
    transform: translateY(-3px);
  }
`,jf=ur(Uu.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,Tf=ur(wc)`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`,_f=ur.div`
  position: relative;
  height: 200px;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    
    svg {
      color: #fff;
      font-size: 40px;
    }
  }
  
  &:hover .overlay {
    opacity: 1;
  }
`,Lf=ur.div`
  padding: 25px;
  flex: 1;
  display: flex;
  flex-direction: column;
`,Rf=ur.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: ${e=>e.theme.text};
`,Af=ur.p`
  color: ${e=>e.theme.textLight};
  margin-bottom: 20px;
  flex: 1;
`,zf=ur.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
`,Mf=ur.div`
  display: flex;
  gap: 15px;
`,Of=ur(kc)`
  padding: 8px 15px;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    font-size: 16px;
  }
`,Nf=ur.div`
  text-align: center;
  padding: 40px;
  width: 100%;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: ${e=>e.theme.text};
  }
  
  p {
    color: ${e=>e.theme.textLight};
  }
`,Df=()=>{const[e,n]=(0,t.useState)("all"),[r,i]=_d({threshold:.1,triggerOnce:!0}),o=[{id:1,title:"School Management System",description:"A full-featured school management system with features like student-guardian management, teacher management, and course management. Responsive design for all devices.",image:"/images/project-1.jpg",category:"web_development",technologies:["HTML","CSS","JavaScript","PHP","MySQL"],liveLink:"",githubLink:""},{id:2,title:"Attendance Management System",description:"A task management application with features like task creation, categorization, due dates, and progress tracking. Includes drag-and-drop functionality.",image:"/images/project-2.jpg",category:"web_development",technologies:["CSS","JavaScript","PHP","MySQL"],liveLink:"",githubLink:""}],a="all"===e?o:o.filter((t=>t.category===e));return(0,Ac.jsx)(Ef,{id:"projects",variants:bc,initial:"hidden",animate:i?"visible":"hidden",exit:"exit",ref:r,children:(0,Ac.jsxs)(Lc,{children:[(0,Ac.jsxs)(Ec,{children:[(0,Ac.jsx)(Uu.h2,{variants:Sc,children:"Projects"}),(0,Ac.jsx)(Uu.p,{variants:Sc,children:"A selection of my recent work and personal projects"})]}),(0,Ac.jsx)(Cf,{children:[{value:"all",label:"All"},{value:"web_development",label:"Web Development"}].map((t=>(0,Ac.jsx)(Pf,{active:e===t.value,onClick:()=>n(t.value),children:t.label},t.value)))}),a.length>0?(0,Ac.jsx)(jf,{variants:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.1}}},initial:"hidden",animate:i?"visible":"hidden",children:a.map((e=>(0,Ac.jsx)(Uu.div,{variants:Sc,children:(0,Ac.jsxs)(Tf,{children:[(0,Ac.jsxs)(_f,{children:[(0,Ac.jsx)("img",{src:e.image,alt:e.title}),(0,Ac.jsx)("div",{className:"overlay",children:(0,Ac.jsx)(pc,{})})]}),(0,Ac.jsxs)(Lf,{children:[(0,Ac.jsx)(Rf,{children:e.title}),(0,Ac.jsx)(Af,{children:e.description}),(0,Ac.jsx)(zf,{children:e.technologies.map(((e,t)=>(0,Ac.jsx)(Rc,{children:e},t)))}),(0,Ac.jsxs)(Mf,{children:[(0,Ac.jsxs)(Of,{as:"a",href:e.liveLink,target:"_blank",rel:"noopener noreferrer",children:[(0,Ac.jsx)(uc,{})," Live Demo"]}),(0,Ac.jsxs)(Of,{as:"a",href:e.githubLink,target:"_blank",rel:"noopener noreferrer",outlined:!0,children:[(0,Ac.jsx)(Xu,{})," View Code"]})]})]})]})},e.id)))}):(0,Ac.jsxs)(Nf,{children:[(0,Ac.jsx)("h3",{children:"No projects found"}),(0,Ac.jsx)("p",{children:"Try selecting a different category or check back later for new projects."})]})]})})},$f=ur(xc)`
  background-color: ${e=>e.theme.backgroundAlt};
`,Vf=ur.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,If=ur(Uu.div)`
  background-color: ${e=>e.theme.background};
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 30px;
    color: ${e=>e.theme.text};
  }
`,Ff=ur(Uu.div)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  
  svg {
    color: ${e=>e.theme.primary};
    font-size: 24px;
    margin-right: 15px;
    margin-top: 5px;
  }
  
  div {
    h4 {
      font-size: 1.1rem;
      margin-bottom: 5px;
      color: ${e=>e.theme.text};
    }
    
    p {
      color: ${e=>e.theme.textLight};
      line-height: 1.6;
    }
  }
`,Bf=ur(Uu.div)`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`,Uf=ur.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${e=>e.theme.backgroundLight};
  color: ${e=>e.theme.text};
  font-size: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.theme.primary};
    color: #fff;
    transform: translateY(-5px);
  }
`,Hf=ur(Uu.form)`
  background-color: ${e=>e.theme.background};
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 30px;
    color: ${e=>e.theme.text};
  }
`,Wf=ur(Uu.div)`
  margin-bottom: 25px;
`,Yf=ur.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: ${e=>e.theme.text};
`,Kf=ur.input`
  width: 100%;
  padding: 12px 15px;
  border-radius: 8px;
  border: 2px solid ${e=>e.theme.border};
  background-color: ${e=>e.theme.backgroundLight};
  color: ${e=>e.theme.text};
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${e=>e.theme.primary};
    outline: none;
  }
`,Qf=ur.textarea`
  width: 100%;
  padding: 12px 15px;
  border-radius: 8px;
  border: 2px solid ${e=>e.theme.border};
  background-color: ${e=>e.theme.backgroundLight};
  color: ${e=>e.theme.text};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: ${e=>e.theme.primary};
    outline: none;
  }
`,Gf=ur(kc)`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  margin-top: 10px;
`,qf=ur.div`
  padding: 15px;
  margin-top: 20px;
  border-radius: 8px;
  text-align: center;
  
  &.success {
    background-color: rgba(46, 213, 115, 0.15);
    color: #2ed573;
  }
  
  &.error {
    background-color: rgba(255, 71, 87, 0.15);
    color: #ff4757;
  }
`,Xf=()=>{const[e,n]=(0,t.useState)({name:"",email:"",subject:"",message:""}),[r,i]=(0,t.useState)({submitted:!1,success:!1,message:""}),[o,a]=_d({threshold:.1,triggerOnce:!0}),s=e=>{const{name:t,value:r}=e.target;n((e=>({...e,[t]:r})))},l=[{icon:(0,Ac.jsx)(dc,{}),title:"Location",details:"Bhubaneswar, Odisha, India"},{icon:(0,Ac.jsx)(hc,{}),title:"Phone",details:"+91 7005260498"},{icon:(0,Ac.jsx)(lc,{}),title:"Email",details:"jayeetamal7@gmail.com"}],u=[{icon:(0,Ac.jsx)(ec,{}),url:"https://linkedin.com/in/jayeeta-mal"},{icon:(0,Ac.jsx)(Xu,{}),url:"https://github.com/jayeeta-mal"},{icon:(0,Ac.jsx)(tc,{}),url:"#"}],c={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.5}}},d={hidden:{opacity:0,x:-20},visible:{opacity:1,x:0,transition:{duration:.3}}};return(0,Ac.jsx)($f,{id:"contact",variants:bc,initial:"hidden",animate:a?"visible":"hidden",exit:"exit",ref:o,children:(0,Ac.jsxs)(Lc,{children:[(0,Ac.jsxs)(Ec,{children:[(0,Ac.jsx)(Uu.h2,{variants:Sc,children:"Contact Me"}),(0,Ac.jsx)(Uu.p,{variants:Sc,children:"Get in touch for opportunities or just to say hello"})]}),(0,Ac.jsxs)(Vf,{children:[(0,Ac.jsxs)(If,{variants:c,initial:"hidden",animate:a?"visible":"hidden",children:[(0,Ac.jsx)("h3",{children:"Contact Information"}),l.map(((e,t)=>(0,Ac.jsxs)(Ff,{variants:d,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.1*t},children:[e.icon,(0,Ac.jsxs)("div",{children:[(0,Ac.jsx)("h4",{children:e.title}),(0,Ac.jsx)("p",{children:e.details})]})]},t))),(0,Ac.jsx)(Bf,{variants:c,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.3},children:u.map(((e,t)=>(0,Ac.jsx)(Uf,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.icon},t)))})]}),(0,Ac.jsxs)(Hf,{variants:c,initial:"hidden",animate:a?"visible":"hidden",onSubmit:t=>{if(t.preventDefault(),!e.name||!e.email||!e.message)return void i({submitted:!0,success:!1,message:"Please fill in all required fields."});/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)?setTimeout((()=>{i({submitted:!0,success:!0,message:"Your message has been sent successfully! I will get back to you soon."}),n({name:"",email:"",subject:"",message:""})}),1e3):i({submitted:!0,success:!1,message:"Please enter a valid email address."})},children:[(0,Ac.jsx)("h3",{children:"Send Me a Message"}),(0,Ac.jsxs)(Wf,{variants:d,initial:"hidden",animate:a?"visible":"hidden",children:[(0,Ac.jsx)(Yf,{htmlFor:"name",children:"Name *"}),(0,Ac.jsx)(Kf,{type:"text",id:"name",name:"name",value:e.name,onChange:s,placeholder:"Your name",required:!0})]}),(0,Ac.jsxs)(Wf,{variants:d,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.1},children:[(0,Ac.jsx)(Yf,{htmlFor:"email",children:"Email *"}),(0,Ac.jsx)(Kf,{type:"email",id:"email",name:"email",value:e.email,onChange:s,placeholder:"Your email address",required:!0})]}),(0,Ac.jsxs)(Wf,{variants:d,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.2},children:[(0,Ac.jsx)(Yf,{htmlFor:"subject",children:"Subject"}),(0,Ac.jsx)(Kf,{type:"text",id:"subject",name:"subject",value:e.subject,onChange:s,placeholder:"Subject of your message"})]}),(0,Ac.jsxs)(Wf,{variants:d,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.3},children:[(0,Ac.jsx)(Yf,{htmlFor:"message",children:"Message *"}),(0,Ac.jsx)(Qf,{id:"message",name:"message",value:e.message,onChange:s,placeholder:"Your message",required:!0})]}),(0,Ac.jsx)(Gf,{type:"submit",variants:d,initial:"hidden",animate:a?"visible":"hidden",transition:{delay:.4},children:"Send Message"}),r.submitted&&(0,Ac.jsx)(qf,{className:r.success?"success":"error",children:r.message})]})]})]})})},Jf=ur.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${e=>e.theme.cardBackground};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`,Zf=ur.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  max-width: 1200px;
  margin: 0 auto;
`,eh=ur(Uu.div)`
  font-size: 24px;
  font-weight: 800;
  font-family: 'Raleway', sans-serif;
  
  a {
    color: ${e=>e.theme.text};
    text-decoration: none;
    
    span {
      color: ${e=>e.theme.primary};
    }
  }
`,th=ur.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`,nh=ur(Uu.nav)`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background-color: ${e=>e.theme.cardBackground};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  padding: 80px 20px 20px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 769px) {
    display: none;
  }
`,rh=ur.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`,ih=ur.li`
  a {
    color: ${e=>e.theme.text};
    text-decoration: none;
    font-weight: 500;
    padding: 5px 10px;
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover, &.active {
      color: ${e=>e.theme.primary};
    }
    
    &.active {
      font-weight: 600;
    }
    
    @media (max-width: 768px) {
      display: block;
      padding: 10px;
      
      &:hover, &.active {
        background-color: ${e=>e.theme.secondary};
      }
    }
  }
`,oh=ur.button`
  background: none;
  border: none;
  color: ${e=>e.theme.text};
  font-size: 20px;
  cursor: pointer;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${e=>e.theme.primary};
    transform: rotate(15deg);
  }
`,ah=ur.button`
  display: none;
  background: none;
  border: none;
  color: ${e=>e.theme.text};
  font-size: 24px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`,sh=ur(Uu.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`,lh=e=>{let{toggleTheme:n,currentTheme:r}=e;const[i,o]=(0,t.useState)(!1),[a,s]=(0,t.useState)("home"),l=A(),u=()=>{o(!i)};(0,t.useEffect)((()=>{o(!1)}),[l]),(0,t.useEffect)((()=>(document.body.style.overflow=i?"hidden":"auto",()=>{document.body.style.overflow="auto"})),[i]),(0,t.useEffect)((()=>{const e=()=>{const e=document.querySelectorAll("section[id]"),t=window.scrollY+100;e.forEach((e=>{const n=e.offsetTop,r=e.offsetHeight,i=e.getAttribute("id");t>=n&&t<n+r&&s(i)}))};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]);const c=[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"experience",label:"Experience"},{id:"education",label:"Education"},{id:"skills",label:"Skills"},{id:"projects",label:"Projects"},{id:"contact",label:"Contact"}],d=e=>{const t=document.getElementById(e);t&&(t.scrollIntoView({behavior:"smooth"}),o(!1))};return(0,Ac.jsxs)(Jf,{children:[(0,Ac.jsxs)(Zf,{children:[(0,Ac.jsx)(eh,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.5},children:(0,Ac.jsxs)(G,{to:"/",onClick:()=>d("home"),children:["My",(0,Ac.jsx)("span",{children:"Resume"})]})}),(0,Ac.jsxs)(th,{children:[(0,Ac.jsx)(rh,{children:c.map((e=>(0,Ac.jsx)(ih,{children:(0,Ac.jsx)("a",{href:`#${e.id}`,className:a===e.id?"active":"",onClick:t=>{t.preventDefault(),d(e.id)},children:e.label})},e.id)))}),(0,Ac.jsx)(oh,{onClick:n,"aria-label":"Toggle theme",children:"light"===r?(0,Ac.jsx)(fc,{}):(0,Ac.jsx)(mc,{})})]}),(0,Ac.jsx)(ah,{onClick:u,"aria-label":"Toggle menu",children:i?(0,Ac.jsx)(gc,{}):(0,Ac.jsx)(rc,{})})]}),(0,Ac.jsx)(ye,{children:i&&(0,Ac.jsxs)(Ac.Fragment,{children:[(0,Ac.jsx)(sh,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},onClick:u}),(0,Ac.jsxs)(nh,{initial:{x:300},animate:{x:0},exit:{x:300},transition:{type:"tween",duration:.3},children:[(0,Ac.jsx)(rh,{children:c.map((e=>(0,Ac.jsx)(ih,{children:(0,Ac.jsx)("a",{href:`#${e.id}`,className:a===e.id?"active":"",onClick:t=>{t.preventDefault(),d(e.id)},children:e.label})},e.id)))}),(0,Ac.jsx)(oh,{onClick:n,"aria-label":"Toggle theme",style:{marginTop:"20px",alignSelf:"center"},children:"light"===r?(0,Ac.jsx)(fc,{}):(0,Ac.jsx)(mc,{})})]})]})})]})},uh=ur.footer`
  background-color: ${e=>e.theme.cardBackground};
  padding: 40px 0;
  border-top: 1px solid ${e=>e.theme.border};
`,ch=ur.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`,dh=ur.div`
  font-size: 24px;
  font-weight: 800;
  font-family: 'Raleway', sans-serif;
  margin-bottom: 20px;
  
  a {
    color: ${e=>e.theme.text};
    text-decoration: none;
    
    span {
      color: ${e=>e.theme.primary};
    }
  }
`,fh=ur.nav`
  margin-bottom: 30px;
`,hh=ur.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 576px) {
    gap: 15px;
  }
`,ph=ur.li`
  a {
    color: ${e=>e.theme.textLight};
    text-decoration: none;
    font-size: 14px;
    transition: all 0.3s ease;
    
    &:hover {
      color: ${e=>e.theme.primary};
    }
  }
`,mh=ur.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
`,gh=ur(Uu.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${e=>e.theme.secondary};
  color: ${e=>e.theme.primary};
  font-size: 18px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${e=>e.theme.primary};
    color: #fff;
    transform: translateY(-3px);
  }
`,vh=ur.div`
  color: ${e=>e.theme.textLight};
  font-size: 14px;
  text-align: center;
`,yh=()=>{const e=(new Date).getFullYear(),t={hover:{y:-5,transition:{duration:.3,type:"spring",stiffness:300}}};return(0,Ac.jsx)(uh,{children:(0,Ac.jsxs)(ch,{children:[(0,Ac.jsx)(dh,{children:(0,Ac.jsxs)("a",{href:"#home",children:["Jayeeta",(0,Ac.jsx)("span",{children:"Mal"})]})}),(0,Ac.jsx)(fh,{children:(0,Ac.jsxs)(hh,{children:[(0,Ac.jsx)(ph,{children:(0,Ac.jsx)("a",{href:"#home",children:"Home"})}),(0,Ac.jsx)(ph,{children:(0,Ac.jsx)("a",{href:"#about",children:"About"})}),(0,Ac.jsx)(ph,{children:(0,Ac.jsx)("a",{href:"#experience",children:"Experience"})}),(0,Ac.jsx)(ph,{children:(0,Ac.jsx)("a",{href:"#education",children:"Education"})}),(0,Ac.jsx)(ph,{children:(0,Ac.jsx)("a",{href:"#skills",children:"Skills"})}),(0,Ac.jsx)(ph,{children:(0,Ac.jsx)("a",{href:"#projects",children:"Projects"})}),(0,Ac.jsx)(ph,{children:(0,Ac.jsx)("a",{href:"#contact",children:"Contact"})}),(0,Ac.jsx)(ph,{children:(0,Ac.jsxs)("a",{href:"/Resume.pdf",download:"Jayeeta_Mal_Resume.pdf",target:"_blank",rel:"noopener noreferrer",children:["Resume ",(0,Ac.jsx)(sc,{style:{fontSize:"12px",marginLeft:"5px"}})]})})]})}),(0,Ac.jsxs)(mh,{children:[(0,Ac.jsx)(gh,{href:"https://github.com/jayeeta-mal",target:"_blank",rel:"noopener noreferrer",whileHover:"hover",variants:t,children:(0,Ac.jsx)(Xu,{})}),(0,Ac.jsx)(gh,{href:"https://linkedin.com/in/jayeeta-mal",target:"_blank",rel:"noopener noreferrer",whileHover:"hover",variants:t,children:(0,Ac.jsx)(Zu,{})}),(0,Ac.jsx)(gh,{href:"#",target:"_blank",rel:"noopener noreferrer",whileHover:"hover",variants:t,children:(0,Ac.jsx)(tc,{})}),(0,Ac.jsx)(gh,{href:"#",target:"_blank",rel:"noopener noreferrer",whileHover:"hover",variants:t,children:(0,Ac.jsx)(Ju,{})}),(0,Ac.jsx)(gh,{href:"mailto:jayeetamal7@gmail.com",whileHover:"hover",variants:t,children:(0,Ac.jsx)(lc,{})})]}),(0,Ac.jsxs)(vh,{children:[(0,Ac.jsxs)("p",{children:["\xa9 ",e," Jayeeta Mal. All rights reserved."]}),(0,Ac.jsx)("p",{children:"Designed and built with React"})]})]})})},xh={primary:"#0563bb",secondary:"#f5f8fd",accent:"#0678e3",background:"#ffffff",cardBackground:"#ffffff",text:"#272829",textLight:"#6c757d",border:"#ddd",boxShadow:"0 0 24px 0 rgba(0, 0, 0, 0.12)",success:"#28a745",error:"#dc3545",warning:"#ffc107",info:"#17a2b8"},bh={primary:"#0563bb",secondary:"#1e2a3a",accent:"#0678e3",background:"#121212",cardBackground:"#1e1e1e",text:"#f0f0f0",textLight:"#a0a0a0",border:"#333",boxShadow:"0 0 24px 0 rgba(0, 0, 0, 0.5)",success:"#28a745",error:"#dc3545",warning:"#ffc107",info:"#17a2b8"},wh=(function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=ar.apply(void 0,be([e],n,!1)),o="sc-global-".concat(Ut(JSON.stringify(i))),a=new cr(i,o),s=function(e){var n=Un(),r=t.useContext(er),i=t.useRef(n.styleSheet.allocateGSInstance(o)).current;return n.styleSheet.server&&l(i,e,n.styleSheet,r,n.stylis),t.useLayoutEffect((function(){if(!n.styleSheet.server)return l(i,e,n.styleSheet,r,n.stylis),function(){return a.removeStyles(i,n.styleSheet)}}),[i,e,n.styleSheet,r,n.stylis]),null};function l(e,t,n,r,i){if(a.isStatic)a.renderStyles(e,_t,n,i);else{var o=xe(xe({},t),{theme:At(t,r,s.defaultProps)});a.renderStyles(e,o,n,i)}}return t.memo(s)})`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Raleway:wght@700;800&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    overflow-x: hidden;
    background-color: ${e=>e.theme.background};
    color: ${e=>e.theme.text};
    transition: all 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    margin-bottom: 15px;
    color: ${e=>e.theme.text};
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
  }

  h2 {
    font-size: 2.5rem;
    position: relative;
    margin-bottom: 30px;
  }

  h2::after {
    content: '';
    position: absolute;
    display: block;
    width: 50px;
    height: 3px;
    background: ${e=>e.theme.primary};
    bottom: -10px;
    left: 0;
  }

  h3 {
    font-size: 1.75rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  p {
    margin-bottom: 15px;
    color: ${e=>e.theme.text};
  }

  a {
    text-decoration: none;
    color: ${e=>e.theme.primary};
    transition: all 0.3s ease;
  }

  a:hover {
    color: ${e=>e.theme.accent};
  }

  ul, ol {
    margin-left: 20px;
    margin-bottom: 15px;
  }

  li {
    margin-bottom: 8px;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }

  section {
    padding: 80px 0;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .section-title {
    text-align: center;
    margin-bottom: 60px;
  }

  .section-title h2 {
    display: inline-block;
  }

  .section-title h2::after {
    left: calc(50% - 25px);
  }

  .text-center {
    text-align: center;
  }

  .mb-1 {
    margin-bottom: 0.5rem;
  }

  .mb-2 {
    margin-bottom: 1rem;
  }

  .mb-3 {
    margin-bottom: 1.5rem;
  }

  .mb-4 {
    margin-bottom: 2rem;
  }

  .mb-5 {
    margin-bottom: 3rem;
  }

  .mt-1 {
    margin-top: 0.5rem;
  }

  .mt-2 {
    margin-top: 1rem;
  }

  .mt-3 {
    margin-top: 1.5rem;
  }

  .mt-4 {
    margin-top: 2rem;
  }

  .mt-5 {
    margin-top: 3rem;
  }

  /* Responsive Grid System */
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .col {
    flex: 1 0 0%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .col-12 {
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .col-md-6 {
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .col-lg-4 {
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .col-lg-6 {
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }

  .col-lg-8 {
    flex: 0 0 100%;
    max-width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }

  @media (min-width: 768px) {
    .col-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
  }

  @media (min-width: 992px) {
    .col-lg-4 {
      flex: 0 0 33.333333%;
      max-width: 33.333333%;
    }

    .col-lg-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }

    .col-lg-8 {
      flex: 0 0 66.666667%;
      max-width: 66.666667%;
    }
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideInUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-50px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideInRight {
    from {
      transform: translateX(50px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`,Sh=ur.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${e=>e.theme.background};
  color: ${e=>e.theme.text};
  transition: all 0.3s ease;
`,kh=ur.main`
  flex: 1;
  padding-top: 80px; // To account for fixed header
`;const Eh=function(){const[e,n]=(0,t.useState)("light");return A(),(0,t.useEffect)((()=>{const e=localStorage.getItem("theme");e&&n(e)}),[]),(0,t.useEffect)((()=>{localStorage.setItem("theme",e)}),[e]),(0,t.useEffect)((()=>{const e=e=>{var t;const n=e.target;if("A"===n.tagName&&null!==(t=n.getAttribute("href"))&&void 0!==t&&t.startsWith("#")){e.preventDefault();const t=n.getAttribute("href").slice(1),r=document.getElementById(t);r&&r.scrollIntoView({behavior:"smooth"})}};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)}),[]),(0,Ac.jsxs)(tr,{theme:"light"===e?xh:bh,children:[(0,Ac.jsx)(wh,{}),(0,Ac.jsxs)(Sh,{children:[(0,Ac.jsx)(lh,{toggleTheme:()=>{n("light"===e?"dark":"light")},currentTheme:e}),(0,Ac.jsx)(kh,{children:(0,Ac.jsxs)(ye,{mode:"wait",children:[(0,Ac.jsx)(Hc,{}),(0,Ac.jsx)(Fd,{}),(0,Ac.jsx)(Wd,{}),(0,Ac.jsx)(tf,{}),(0,Ac.jsx)(ff,{}),(0,Ac.jsx)(kf,{}),(0,Ac.jsx)(Df,{}),(0,Ac.jsx)(Xf,{})]})}),(0,Ac.jsx)(yh,{})]})]})};i.createRoot(document.getElementById("root")).render((0,Ac.jsx)(t.StrictMode,{children:(0,Ac.jsx)(Y,{children:(0,Ac.jsx)(Eh,{})})}))})()})();
//# sourceMappingURL=main.d98b0550.js.map