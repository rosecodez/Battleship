(()=>{var t={144:(t,e,n)=>{n(310),t.exports=class{constructor(){this.ships=[],this.shipsSunk=[],this.missedShots=[],this.grid=new Array(10).fill(0).map((()=>new Array(10).fill("")))}isLegalCoordinates(t){const[e,n]=t;return e>=0&&e<9&&n>=0&&n<9}shipOutOfBounds(t,e,n){const[r,o]=e;if("horizontal"===n){const n=e[1]+(t.length-1);if(this.isLegalCoordinates([r,n]))return!0}if("vertical"===n){const n=e[0]+(t.length-1);if(this.isLegalCoordinates([n,o]))return!0}return!1}placeShip(t,e,n){if(this.isLegalCoordinates(e)||this.shipOutOfBounds(t,e,n)){const[r,o]=e;if("vertical"===n){for(let e=0;e<t.length;e++)this.grid[r+e][o]=t;this.ships.push(t)}else{for(let e=0;e<t.length;e++)this.grid[r][o+e]=t;this.ships.push(t)}return this.grid}throw new Error("coordinates are higher than board row/column ")}alreadyShot(t){const[e,n]=t;return"x"===this.grid[e][n]?(console.log("coordinate has an x already"),!0):(console.log("coordinate doesnt have an x "),!1)}receiveAttack(t,e){const[n,r]=e;if(this.alreadyShot(e))throw new Error("already shot");return""===this.grid[n][r]?(this.grid[n][r]="x",this.missedShots.push(this.grid[n][r])):t.hit(),this.grid}allSunk(){return this.ships.every((t=>t.isSunk()))}}},842:(t,e,n)=>{const r=n(144),o=n(310);class i{constructor(t){this.name=t,this.grid=new r}attack(t,e){return this.grid.receiveAttack(t,e)}placeShip(t,e,n){return this.grid.placeShip(t,e,n)}}t.exports=i,t.exports=class extends i{getRandomPlace(){const t=new o(4),e=[Math.floor(9*Math.random()),Math.floor(9*Math.random())],n=["horizontal","vertical"],r=n[Math.floor(Math.random()*n.length)];return this.placeShip(t,e,r)}getRandomAttack(){const t=new o(4),e=[Math.floor(9*Math.random()),Math.floor(9*Math.random())];return this.attack(t,e)}},new o(4)},310:t=>{t.exports=class{constructor(t){this.length=t,this.timesHit=0}hit(){return this.timesHit++}isHit(){return this.timesHit>=0}isSunk(){return this.length===this.timesHit}}},426:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,"* {\n\tmargin: 0;\n\tpadding: 0;\n}\nbody {\n\tdisplay: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n\tpadding: 75px;\n}\n\n/* header */\n#header {\n\tpadding-bottom: 20px;\n}\nh1{\n\tfont-size: 35px;\n}\n\n/* content */\n#content {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tgap: 100px;\n\tpadding-bottom: 20px;\n}\n#human, #ai {\n\tdisplay: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\ntable, td, th {\n\tborder: 1px solid;\n}\n\ntable {\n\tdisplay: flex;\n\tborder-collapse: collapse;\n\theight: 450px;\n\twidth: 450px;\n\ttext-align: center;\n\tdisplay: inline-table;\n\tborder: none; \n\tword-wrap:break-word;\n\toverflow:scroll;\n}\ntd {\n\twidth: 40px;\n\theight: 20px;\n}\nimg {\n\twidth: 27px;\n}\n/* footer */\n#footer {\n\tpadding-top: 50px;\n}\n",""]);const s=a},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],s=0;s<t.length;s++){var c=t[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var h=n(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(u);else{var f=o(u,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=n(i[a]);e[s].references--}for(var c=r(t,o),l=0;l<i.length;l++){var d=n(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";var t=n(379),e=n.n(t),r=n(795),o=n.n(r),i=n(569),a=n.n(i),s=n(565),c=n.n(s),l=n(216),d=n.n(l),p=n(589),h=n.n(p),u=n(426),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,n(144),n(310),n(842);const m=n(144),g=n(310),v=(n(842),document.getElementById("human-grid")),x=document.getElementById("ai-grid"),y=new m,w=new m;function b(t){let{tableData:e,grid:n}=t;!function(){const t=new g(1),e=new g(1),n=new g(1),r=new g(1),o=new g(2),i=new g(2),a=new g(2),s=new g(4),c=new g(4),l=new g(4);y.placeShip(t,[0,0],"vertical"),y.placeShip(e,[6,8],"vertical"),y.placeShip(n,[3,2],"vertical"),y.placeShip(r,[0,6],"vertical"),y.placeShip(o,[2,4],"horizontal"),y.placeShip(i,[1,8],"horizontal"),y.placeShip(a,[7,1],"horizontal"),y.placeShip(s,[8,4],"horizontal"),y.placeShip(c,[4,0],"horizontal"),y.placeShip(l,[3,6],"vertical"),console.log(y)}();const r=document.createElement("table"),o=document.createElement("tbody");e.forEach((t=>{const e=document.createElement("tr");t.forEach((t=>{const n=document.createElement("td");n.className="cell",n.appendChild(document.createTextNode(t)),e.appendChild(n)})),o.appendChild(e)})),r.appendChild(o),n.appendChild(r)}b({tableData:y.grid,grid:v}),b({tableData:w.grid,grid:x}),function(){const t=document.getElementsByClassName("cell");for(let e=0;e<t.length;e++){const n=t[e];"[object Object]"===n.innerHTML&&(n.style.backgroundColor="pink"),n.addEventListener("click",(t=>{console.log(t);const e=[t.target.parentElement.rowIndex,t.target.cellIndex];console.log(e),n.textContent="",n.style.backgroundColor="black"}))}}()})()})();