(()=>{var t={144:(t,e,n)=>{const r=n(310);t.exports=class{constructor(){this.ships=[],this.shipsSunk=[],this.missedShots=[],this.grid=new Array(10).fill(0).map((()=>new Array(10).fill("")))}isLegalCoordinates(t){const[e,n]=t;return e>=0&&e<=9&&n>=0&&n<=9}shipOutOfBounds(t,e,n){const[r,o]=e;if("horizontal"===n){const n=e[1]+(t.length-1);if(this.isLegalCoordinates([r,n]))return!0}if("vertical"===n){const n=e[0]+(t.length-1);if(this.isLegalCoordinates([n,o]))return!0}return!1}placeShip(t,e,n){if(this.isLegalCoordinates(e)||this.shipOutOfBounds(t,e,n)){const[r,o]=e;if("vertical"===n){for(let e=0;e<t.length;e++)this.grid[r+e][o]=t;this.ships.push(t)}else{for(let e=0;e<t.length;e++)this.grid[r][o+e]=t;this.ships.push(t)}return this.grid}throw new Error("coordinates are higher than board row/column ")}alreadyShot(t){const[e,n]=t;return"x"===this.grid[e][n]}receiveAttack(t,e){const[n,o]=e;if(this.alreadyShot(e))return console.error("Already shot"),this.grid;if(""===this.grid[n][o])this.grid[n][o]="x",this.missedShots.push(this.grid[n][o]);else{if(!(t instanceof r))return console.error("Invalid parameter for receive attack"),this.grid;this.shipsSunk.push(this.grid[n][o]),t.hit()}return this.grid}allSunk(){return this.ships.every((t=>t.isSunk()))}}},842:(t,e,n)=>{const r=n(144),o=n(310);class a{constructor(t){this.name=t,this.grid=new r}attack(t,e){return this.grid.receiveAttack(t,e)}placeShip(t,e,n){return this.grid.placeShip(t,e,n)}}t.exports=a,t.exports=class extends a{getRandomPlace(){const t=new o(Math.floor(4*Math.random())),e=[Math.floor(9*Math.random()),Math.floor(9*Math.random())],n=["horizontal","vertical"],r=n[Math.floor(Math.random()*n.length)];return this.placeShip(t,e,r)}getRandomAttack(){const t=new o(Math.floor(4*Math.random())),e=[Math.floor(9*Math.random()),Math.floor(9*Math.random())];return this.attack(t,e)}}},310:t=>{t.exports=class{constructor(t){this.length=t,this.timesHit=0,this.sunk=!1}hit(){this.timesHit++,this.timesHit>=this.length&&(this.sunk=!0)}isHit(){return this.timesHit>0}isSunk(){return this.sunk}}},426:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"* {\n\tmargin: 0;\n\tpadding: 0;\n}\nbody {\n\tdisplay: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n\tpadding: 75px;\n}\n\n/* header */\n#header {\n\tpadding-bottom: 20px;\n}\nh1{\n\tfont-size: 35px;\n}\n\n/* content */\n#content {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tgap: 100px;\n\tpadding-bottom: 20px;\n}\n#human, #ai {\n\tdisplay: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\ntable, td, th {\n\tborder: 1px solid;\n}\n#ai-cells {\n\tdisplay: none;\n}\ntd.ai-cells {\n\topacity: 0;\n}\ntable {\n\tborder-collapse: collapse;\n\ttext-align: center;\n\tdisplay: inline-table;\n\toverflow:scroll;\n\ttable-layout: fixed;\n\twidth: 480px;\n}\n\ntd {\n\theight: 50px;\n}\n/* footer */\n#footer {\n\tpadding-top: 50px;\n}\n\n/* dialog */\n\n::backdrop, dialog + .backdrop {\n\tbackground-color: rgb(158 158 158 / 61%);\n}\ndialog {\n\twidth: 362px;\n    margin-left: 950px;\n    margin-top: 385px;\n    height: 154px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n}\n\ndialog::backdrop {\n\tdisplay: flex;\n}",""]);const s=i},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],s=0;s<t.length;s++){var l=t[s],c=r.base?l[0]+r.base:l[0],d=a[c]||0,p="".concat(c," ").concat(d);a[c]=d+1;var h=n(p),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)e[h].references++,e[h].updater(u);else{var f=o(u,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var l=r(t,o),c=0;c<a.length;c++){var d=n(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var r={};(()=>{"use strict";n.d(r,{Rw:()=>S,Gj:()=>x});var t=n(379),e=n.n(t),o=n(795),a=n.n(o),i=n(569),s=n.n(i),l=n(565),c=n.n(l),d=n(216),p=n.n(d),h=n(589),u=n.n(h),f=n(426),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,n(144),n(310),n(842),n(842);const g=n(144),v=n(310),y=(n(842),document.getElementById("human-grid")),b=document.getElementById("ai-grid"),x=new g,S=new g,k=new v(1),w=new v(1),M=new v(1),C=new v(1),E=new v(2),L=new v(2),T=new v(2),H=new v(4),A=new v(4),I=new v(4);function z(t){let{tableData:e,grid:n,boolean:r}=t;!0===r?(x.placeShip(k,[0,0],"vertical"),x.placeShip(w,[6,8],"vertical"),x.placeShip(M,[2,2],"vertical"),x.placeShip(C,[0,6],"vertical"),x.placeShip(E,[2,4],"horizontal"),x.placeShip(L,[1,8],"horizontal"),x.placeShip(T,[7,1],"horizontal"),x.placeShip(H,[8,4],"horizontal"),x.placeShip(A,[4,0],"horizontal"),x.placeShip(I,[3,6],"vertical")):!1===r&&(S.placeShip(k,[0,4],"vertical"),S.placeShip(w,[9,1],"vertical"),S.placeShip(M,[1,2],"vertical"),S.placeShip(C,[1,1],"vertical"),S.placeShip(E,[2,4],"horizontal"),S.placeShip(L,[1,8],"horizontal"),S.placeShip(T,[7,1],"horizontal"),S.placeShip(H,[8,4],"horizontal"),S.placeShip(A,[3,3],"vertical"),S.placeShip(I,[5,6],"horizontal"));const o=document.createElement("table"),a=document.createElement("tbody");e.forEach((t=>{const e=document.createElement("tr");t.forEach((t=>{const n=document.createElement("td");!0===r?(n.className="human-cells",o.id="human-table"):!1===r&&(n.className="ai-cells",o.id="ai-table"),n.appendChild(document.createTextNode(t)),e.appendChild(n)})),a.appendChild(e)})),o.appendChild(a),n.appendChild(o)}z({tableData:x.grid,grid:y,boolean:!0}),z({tableData:S.grid,grid:b,boolean:!1}),function(){const t=document.getElementsByClassName("human-cells"),e=document.getElementsByClassName("ai-cells");let n=0,r=0;const o=document.querySelector("dialog");let a=document.getElementById("end-text");for(let s=0;s<e.length;s++){const l=e[s];l.addEventListener("click",(e=>{const s=document.getElementById("h2-ai"),c=e.target.parentElement.rowIndex,d=e.target.cellIndex,p=[c,d],h=S.grid[c][d];if(l.classList.contains("attacked"))return;l.classList.add("attacked"),S.receiveAttack(h,p)&&"[object Object]"==l.innerHTML?(l.style.pointerEvents="none",l.style.opacity="1",l.textContent="ship",l.style.backgroundColor="red",r++,s.innerHTML="Player 2(Ai); Score: "+r):"[object Object]"!==l.innerHTML&&(l.style.pointerEvents="none",l.style.opacity="1",l.textContent="miss",l.style.backgroundColor="blue");const u=document.getElementById("h2-player");for(;;){const e=Math.floor(9*Math.random()),r=Math.floor(9*Math.random()),s=[e,r],l=x.grid[e][r];console.log(x);const c=t[9*e+r];if(!c.classList.contains("attacked")){let t=x.receiveAttack(l,s);if(c.classList.add("attacked"),t&&("pink"===c.style.backgroundColor?(c.style.backgroundColor="red",n++,u.innerHTML="Player 1(Human); Score: "+n,c.innerHTML="ship"):"red"!==c.style.backgroundColor&&(c.style.backgroundColor="blue",c.innerHTML="miss")),(x.allSunk()||S.allSunk())&&(i(),x.allSunk())){const t=x.ships.every((t=>t.isSunk()));o.showModal(),t?(console.log("player wins"),a.textContent="Game over. Player wins"):(console.log("computer wins!"),a.textContent="Game over. Ai wins")}}break}}))}for(let e=0;e<t.length;e++){const n=t[e];"[object Object]"===n.innerHTML&&(n.style.backgroundColor="pink",n.innerHTML=""),n.style.pointerEvents="none"}function i(){for(let t=0;t<e.length;t++)e[t].classList.remove("attacked")}}()})()})();