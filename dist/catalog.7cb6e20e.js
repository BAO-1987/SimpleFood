!function(){function e(e){var t=!0,n=!1,o=null,d={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function r(e){t=!1}function u(){document.addEventListener("mousemove",c),document.addEventListener("mousedown",c),document.addEventListener("mouseup",c),document.addEventListener("pointermove",c),document.addEventListener("pointerdown",c),document.addEventListener("pointerup",c),document.addEventListener("touchmove",c),document.addEventListener("touchstart",c),document.addEventListener("touchend",c)}function c(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mousedown",c),document.removeEventListener("mouseup",c),document.removeEventListener("pointermove",c),document.removeEventListener("pointerdown",c),document.removeEventListener("pointerup",c),document.removeEventListener("touchmove",c),document.removeEventListener("touchstart",c),document.removeEventListener("touchend",c))}document.addEventListener("keydown",(function(n){n.metaKey||n.altKey||n.ctrlKey||(i(e.activeElement)&&s(e.activeElement),t=!0)}),!0),document.addEventListener("mousedown",r,!0),document.addEventListener("pointerdown",r,!0),document.addEventListener("touchstart",r,!0),document.addEventListener("visibilitychange",(function(e){"hidden"===document.visibilityState&&(n&&(t=!0),u())}),!0),u(),e.addEventListener("focus",(function(e){var n,o,r;i(e.target)&&(t||(n=e.target,o=n.type,"INPUT"===(r=n.tagName)&&d[o]&&!n.readOnly||"TEXTAREA"===r&&!n.readOnly||n.isContentEditable))&&s(e.target)}),!0),e.addEventListener("blur",(function(e){var t;i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}),!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document);const n=()=>{let e=1*window.innerHeight;document.querySelector(":root").style.setProperty("--vh",`${e}px`)};window.addEventListener("resize",n),window.addEventListener("scroll",n),n();const o=()=>{const e=document.querySelector(".header"),t=e?e.offsetHeight:0;document.documentElement.style.setProperty("--header-height",`${t}px`)};window.addEventListener("resize",o),window.addEventListener("scroll",o),o();const d="classList",i="querySelector",s=(e,t)=>{document[i](e)?.[d].add(t)},r=(e,t)=>{document[i](e)?.[d].remove(t)};let u,c,a=parseFloat(document.documentElement.style.getPropertyValue("--header-height"));const m=function(e,t=1e3){let n,o=!1;const d=()=>{null==n?o=!1:(e(...n),n=null,setTimeout(d,t))};return(...i)=>{o?n=i:(e(...i),o=!0,setTimeout(d,t))}}((()=>{u=window.scrollY,s(".header","scroll"),a-140<u&&u>c?(s(".header","hide"),s(".header","scroll")):c>u&&r(".header","hide"),u<a-140&&r(".header","scroll"),c=u}),250);window.addEventListener("scroll",m),m()}();