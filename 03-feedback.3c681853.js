function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i="Expected a function",o=NaN,r="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,s=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,g=c||m||Function("return this")(),v=Object.prototype.toString,d=Math.max,p=Math.min,y=function(){return g.Date.now()};function b(e,t,n){var o,r,a,u,l,f,s=0,c=!1,m=!1,g=!0;if("function"!=typeof e)throw new TypeError(i);function v(t){var n=o,i=r;return o=r=void 0,s=t,u=e.apply(i,n)}function b(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-s>=a}function w(){var e=y();if(b(e))return O(e);l=setTimeout(w,function(e){var n=t-(e-f);return m?p(n,a-(e-s)):n}(e))}function O(e){return l=void 0,g&&o?v(e):(o=r=void 0,u)}function T(){var e=y(),n=b(e);if(o=arguments,r=this,f=e,n){if(void 0===l)return function(e){return s=e,l=setTimeout(w,t),c?v(e):u}(f);if(m)return l=setTimeout(w,t),v(f)}return void 0===l&&(l=setTimeout(w,t)),u}return t=h(t)||0,j(n)&&(c=!!n.leading,a=(m="maxWait"in n)?d(h(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),T.cancel=function(){void 0!==l&&clearTimeout(l),s=0,o=f=r=l=void 0},T.flush=function(){return void 0===l?u:O(y())},T}function j(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&v.call(e)==r}(e))return o;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=l.test(e);return n||f.test(e)?s(e.slice(2),n?2:8):u.test(e)?o:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return j(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};const w="feedback-form-state",O=document.querySelector(".feedback-form");const T=JSON.parse(localStorage.getItem(w))||{email:null,message:null};O.elements.email.value||(O.elements.email.value=T.email),O.elements.message.value||(O.elements.message.value=T.message),O.addEventListener("input",e(t)((function(e){"email"===e.target.name?T.email=e.target.value:"message"===e.target.name&&(T.message=e.target.value),localStorage.setItem(w,JSON.stringify(T))}),500)),O.addEventListener("submit",(function(e){e.preventDefault(),(T.email||T.message)&&(console.log(T),localStorage.removeItem(w),O.elements.email.value="",O.elements.message.value="")}));
//# sourceMappingURL=03-feedback.3c681853.js.map