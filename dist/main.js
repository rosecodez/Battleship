(()=>{var t={125:(t,e,n)=>{const r=n(901);n(926),t.exports=class{constructor(){this.ships=[],this.shipsSunk=[],this.missedShots=[],this.grid=new Array(10).fill(0).map((()=>new Array(10).fill("")))}isLegalCoordinates(t){const[e,n]=t;return e>=0&&e<=9&&n>=0&&n<=9}shipOutOfBounds(t,e,n){const[r,a]=e;return"horizontal"===n?a+(t.length-1)>9:"vertical"===n&&r+(t.length-1)>9}isOverlapping(t,e,n){const[r,a]=e;if("horizontal"===n){for(let e=0;e<t.length;e++)if(!this.isLegalCoordinates([r,a+e])||""!==this.grid[r][a+e])return!0}else if("vertical"===n)for(let e=0;e<t.length;e++)if(!this.isLegalCoordinates([r+e,a])||""!==this.grid[r+e][a])return!0;return!1}validateCoordinates(t,e,n){if(this.shipOutOfBounds(t,e,n))throw new Error("ship placement is out of bounds");if(this.isOverlapping(t,e,n))throw new Error("ship placement is overlapping")}placeShip(t,e,n){this.validateCoordinates(t,e,n);const[r,a]=e;if("vertical"===n)for(let e=0;e<t.length;e++)this.grid[r+e][a]=t;else for(let e=0;e<t.length;e++)this.grid[r][a+e]=t;return this.ships.push(t),this.grid}alreadyShot(t){const[e,n]=t;return"x"===this.grid[e][n]}receiveAttack(t,e){const[n,a]=e;return!this.alreadyShot(e)&&(this.grid[n][a]instanceof r?(this.grid[n][a].hit(),this.grid[n][a]="x",!0):(this.grid[n][a]="",this.missedShots.push(e),!1))}allSunk(){return this.ships.every((t=>t.isSunk()))}getRandomPlace(t){let e=0;for(;e<50;){const n=[Math.floor(10*Math.random()),Math.floor(10*Math.random())],r=["horizontal","vertical"],a=r[Math.floor(Math.random()*r.length)];try{return void this.placeShip(t,n,a)}catch(t){e++}}throw new Error("get random place fail")}reset(){this.ships.forEach((t=>{t.timesHit=0,t.sunk=!1})),this.ships=[],this.shipsSunk=[],this.missedShots=[],this.grid=new Array(10).fill(0).map((()=>new Array(10).fill("")))}}},926:(t,e,n)=>{const r=n(125),a=n(901);class o{constructor(t){this.name=t,this.grid=new r}attack(t,e){return this.grid.receiveAttack(t,e)}placeShip(t,e,n){return this.grid.placeShip(t,e,n)}}t.exports=o,t.exports=class extends o{getRandomPlace(){const t=new a(Math.floor(4*Math.random())),e=[Math.floor(9*Math.random()),Math.floor(9*Math.random())],n=["horizontal","vertical"],r=n[Math.floor(Math.random()*n.length)];return this.placeShip(t,e,r)}getRandomAttack(){const t=new a(Math.floor(4*Math.random())),e=[Math.floor(9*Math.random()),Math.floor(9*Math.random())];return this.attack(t,e)}}},901:t=>{t.exports=class{constructor(t){this.length=t,this.timesHit=0,this.sunk=!1}hit(){this.timesHit++,this.timesHit>=this.length&&(this.sunk=!0)}isHit(){return this.timesHit>0}isSunk(){return this.sunk}}},208:(t,e,n)=>{"use strict";n.d(e,{A:()=>g});var r=n(601),a=n.n(r),o=n(314),i=n.n(o),s=n(417),c=n.n(s),l=new URL(n(50),n.b),d=new URL(n(452),n.b),p=new URL(n(454),n.b),u=i()(a()),h=c()(l),m=c()(d),f=c()(p);u.push([t.id,`@font-face {\n\tfont-family: 'Battleship';\n\tsrc: url(${h}) format('truetype');\n}\n* {\n\tmargin: 0;\n\tpadding: 0;\n}\nbody {\n\tfont-family: 'Battleship';\n\tbackground-image: url(${m});\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tdisplay: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n\tpadding: 30px;\n\tletter-spacing: 2px;\n\tword-spacing: 4px;\n}\n\n/* header */\n#header {\n\tpadding-bottom: 20px;\n}\n\nh1 {\n\t\n\tfont-size: 60px;\n}\nh2 {\n\tfont-size: 30px;\n}\n\n/* content */\n#content {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tgap: 100px;\n\tpadding-bottom: 20px;\n}\n#human, #ai {\n\tdisplay: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 20px;\n}\ntable, td, th {\n\tborder: 1px solid;\n}\n#ai-cells {\n\tdisplay: none;\n}\ntd {\n\tbackground-image: url(${f}); \n\tbackground-position: bottom;\n}\n\ntd.ai-cells {\n\tcursor: alias;\n}\ntable {\n\t\n\tborder-collapse: collapse;\n\ttext-align: center;\n\tdisplay: inline-table;\n\toverflow:scroll;\n\ttable-layout: fixed;\n\twidth: 480px;\n}\n\ntd {\n\theight: 50px;\n}\n#resetGameBtn{\n\tfont-family: 'Battleship';\n\tdisplay: inline-block;\n\tpadding: 15px 25px;\n\tfont-size: 24px;\n\tcursor: pointer;\n\ttext-align: center;\n\ttext-decoration: none;\n\toutline: none;\n\tcolor: #fff;\n\tbackground-color: #0c55c2;\n\tborder: none;\n\tborder-radius: 15px;\n\tbox-shadow: 0 5px #7e5f5f;\n}\n\n#resetGameBtn:hover {\n\tbackground-color: #0c55c2\n}\n\n#resetGameBtn:active {\n  background-color: #0c55c2;\n  box-shadow: 0 5px #666;\n  transform: translateY(4px);\n}\n\n/* dialog */\n\n::backdrop, dialog + .backdrop {\n\tbackground-color: rgb(158 158 158 / 61%);\n}\n\ndialog {\n\twidth: 362px;\n    margin-left: 950px;\n    margin-top: 385px;\n    height: 154px;\n    display: none;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n}\n\ndialog::backdrop {\n\tdisplay: flex;\n}`,""]);const g=u},314:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),e.push(d))}},e}},417:t=>{"use strict";t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},601:t=>{"use strict";t.exports=function(t){return t[1]}},72:t=>{"use strict";var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],s=0;s<t.length;s++){var c=t[s],l=r.base?c[0]+r.base:c[0],d=o[l]||0,p="".concat(l," ").concat(d);o[l]=d+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(h);else{var m=a(h,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var c=r(t,a),l=0;l<o.length;l++){var d=n(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},659:t=>{"use strict";var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},50:(t,e,n)=>{"use strict";t.exports=n.p+"f9b5498389cbf8284b54.otf"},454:(t,e,n)=>{"use strict";t.exports=n.p+"e910a579ae66f30d94aa.webp"},452:(t,e,n)=>{"use strict";t.exports=n.p+"48667d47862c3e85fedf.png"}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!t||!/^http(s?):/.test(t));)t=r[a--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var r={};(()=>{"use strict";n.d(r,{tT:()=>O,D6:()=>H,U5:()=>z,Wj:()=>I,cE:()=>N});var t=n(72),e=n.n(t),a=n(825),o=n.n(a),i=n(659),s=n.n(i),c=n(56),l=n.n(c),d=n(540),p=n.n(d),u=n(113),h=n.n(u),m=n(208),f={};f.styleTagTransform=h(),f.setAttributes=l(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=p(),e()(m.A,f),m.A&&m.A.locals&&m.A.locals;const g=n.p+"f485aaa67f3d82857487.png",v=n.p+"886a63362977ac826550.gif",y=n.p+"cc4cdaf20cc7a17f71f7.png";n(125),n(901),n(926);let x=0,b=0;const w=document.getElementsByClassName("human-cells"),k=document.getElementsByClassName("ai-cells"),E=document.getElementById("h2-ai"),S=document.getElementById("h2-player"),M=document.querySelector("dialog"),C=document.getElementById("end-text"),P=document.getElementById("restart-button"),R=document.createElement("img");function L(){for(let e=0;e<k.length;e++){const n=k[e];n.addEventListener("mouseover",(t=>{if(n.classList.contains("attacked"))return;const e=document.createElement("img");e.src=g,e.style.width="40px",e.style.pointerEvents="none",e.classList.add("crosshair"),t.target.appendChild(e)})),n.addEventListener("mouseout",(t=>{const e=t.target.querySelector(".crosshair");e&&t.target.removeChild(e)})),n.addEventListener("click",(e=>{if(n.classList.contains("attacked"))return;const r=e.target.parentElement.rowIndex,a=e.target.cellIndex,o=[r,a],i=O.grid[r][a];if(n.classList.add("attacked"),O.receiveAttack(i,o),e.target.style.pointerEvents="none","true"===n.dataset.hasShip){const t=document.createElement("img");t.src=`${v}?t=${Date.now()}`,t.style.width="60px",n.appendChild(t),n.style.pointerEvents="none";const r=e.target.querySelector(".crosshair");r&&e.target.removeChild(r),setTimeout((()=>{n.removeChild(t),n.style.pointerEvents="auto";const e=document.createElement("img");e.src=y,e.style.width="45px",n.appendChild(e)}),2800),b++,E.innerHTML=`Human score: ${b}`}else n.textContent="Miss";for(;;){const t=Math.floor(9*Math.random()),e=Math.floor(9*Math.random()),n=w[9*t+e];if(!n.classList.contains("attacked")){n.classList.add("attacked");const r=N.grid[t][e];if(N.receiveAttack(r,[t,e]),n.textContent="","true"===n.dataset.hasShip){const t=document.createElement("img");t.src=`${v}?t=${Date.now()}`,t.style.width="60px",n.appendChild(t),setTimeout((()=>{n.removeChild(t);const e=document.createElement("img");e.src=y,e.style.width="45px",n.appendChild(e)}),2800),x++,S.innerHTML=`AI score: ${x}`}else n.textContent="Miss";break}}(N.allSunk()||O.allSunk())&&t()}))}function t(){if(!M.open){for(let t=0;t<k.length;t++)k[t].classList.remove("attacked");(N.allSunk()||O.allSunk())&&(M.showModal(),M.style.display="flex",O.allSunk()||44===b?(console.log("player wins"),C.textContent="Game over. Player wins"):(b.allSunk()||44===computerScore)&&(console.log("computer wins!"),C.textContent="Game over. Ai wins"),P.addEventListener("click",A))}}}function A(){console.log(O),console.log(N),M.close(),M.style.display="none",x=0,b=0,E.innerHTML="Ai table",S.innerHTML="Human table",O.reset(),N.reset(),H.innerHTML="",I.innerHTML="",z(),L()}R.src=g,R.style.width="40px",R.style.pointerEvents="none";const T=n(125),B=n(901),I=(n(926),document.getElementById("human-grid")),H=document.getElementById("ai-grid"),$=document.getElementById("resetGameBtn"),N=new T,O=new T;function j(t){let{tableData:e,grid:n,isPlayer:r}=t;!0===r?function(){const t=new B(1),e=new B(1),n=new B(1),r=new B(1),a=new B(2),o=new B(2),i=new B(2),s=new B(4),c=new B(4),l=new B(4);N.getRandomPlace(t),N.getRandomPlace(e),N.getRandomPlace(n),N.getRandomPlace(r),N.getRandomPlace(a),N.getRandomPlace(o),N.getRandomPlace(i),N.getRandomPlace(s),N.getRandomPlace(c),N.getRandomPlace(l)}():!1===r&&function(){const t=new B(1),e=new B(1),n=new B(1),r=new B(1),a=new B(2),o=new B(2),i=new B(2),s=new B(4),c=new B(4),l=new B(4);O.getRandomPlace(t),O.getRandomPlace(e),O.getRandomPlace(n),O.getRandomPlace(r),O.getRandomPlace(a),O.getRandomPlace(o),O.getRandomPlace(i),O.getRandomPlace(s),O.getRandomPlace(c),O.getRandomPlace(l)}();const a=document.createElement("table"),o=document.createElement("tbody");e.forEach((t=>{const e=document.createElement("tr");t.forEach((t=>{const n=document.createElement("td");!0===r?(n.className="human-cells",a.id="human-table",t instanceof B?(n.dataset.hasShip="true",n.textContent="Ship",n.style.color="lightblue",n.style.borderColor="black"):(n.dataset.hasShip="false",n.textContent=t)):!1===r&&(n.className="ai-cells",a.id="ai-table",t instanceof B?(n.dataset.hasShip="true",n.textContent=""):(n.dataset.hasShip="false",n.textContent="")),e.appendChild(n)})),o.appendChild(e)})),a.appendChild(o),n.appendChild(a)}function z(){j({tableData:N.grid,grid:I,isPlayer:!0}),j({tableData:O.grid,grid:H,isPlayer:!1})}z(),L(),$.addEventListener("click",A)})()})();