!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.r(n);var i=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.cpfLimpo=n.replace(/\D+/g,"").toString(),this.cpfParcial=Array.from(this.cpfLimpo).slice(0,-2)}var n,t,i;return n=e,(t=[{key:"validarCpf",value:function(){var e=this;if(function(){var n=0;for(var t in e.cpfLimpo)e.cpfLimpo[t]===e.cpfLimpo[t-1]&&(n+=1);return 11===e.cpfLimpo.length&&n<=9}()){var n=function(){for(var n=e.cpfParcial.length+1,t=[],r=0;r<e.cpfParcial.length;r++)t.push(e.cpfParcial[r]*n),n--;return t.reduce((function(e,n){return e+Number(n)}))};return this.cpfLimpo===function(){for(var t=0;t<2;t++){var r=11-n()%11;r>9&&(r=0),e.cpfParcial.push(r)}return e.cpfParcial.toString().replace(/\D+/g,"")}()}return!1}}])&&r(n.prototype,t),i&&r(n,i),e}();function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a,o,c,f,l=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.input=n}var n,t,r;return n=e,(t=[{key:"mask",value:function(){var e=this;this.input.pattern="[0-9]{3}[.]{1}[0-9]{3}[.]{1}[0-9]{3}[-]{1}[0-9]{2}",this.input.addEventListener("input",(function(n){(isNaN(n.data)||null===n.data)&&(e.input.value=e.input.value.slice(0,-1));var t=e.input.value.length;3!==t&&7!==t||(e.input.value+="."),11===t&&(e.input.value+="-")}))}}])&&u(n.prototype,t),r&&u(n,r),e}();a=document.querySelector("#input-cpf"),o=document.querySelector("#btn-validar"),c=document.querySelector("form p"),f=function(){!function(e){c.innerHTML=e?"CPF válido.":"CPF inválido!"}(new i(a.value).validarCpf())},a.addEventListener("paste",(function(e){return e.preventDefault()})),o.addEventListener("click",(function(e){14===a.value.length&&(f(),e.preventDefault())})),new l(a).mask()}]);
//# sourceMappingURL=bundle.js.map