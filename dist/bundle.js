!function(){"use strict";var e={726:function(e,n,t){var o=t(645),i=t.n(o)()((function(e){return e[1]}));i.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nbody {\n  font: bold 20px "Courier";\n}\n#main {\n  position: relative;\n  width: 360px;\n  height: 420px;\n  background-color: #b7d4a8;\n  margin: 20px auto;\n  border: 10px solid black;\n  border-radius: 40px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column;\n          flex-flow: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n}\n#main #stage {\n  width: 304px;\n  height: 304px;\n  border: 2px solid black;\n  position: relative;\n}\n#main #stage #snake > div {\n  width: 10px;\n  height: 10px;\n  background-color: #000;\n  border: 1px solid #b7d4a8;\n  position: absolute;\n}\n#main #stage #food {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  left: 40px;\n  top: 100px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -ms-flex-line-pack: justify;\n      align-content: space-between;\n}\n#main #stage #food > div {\n  width: 4px;\n  height: 4px;\n  background-color: black;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n#main #score-panel {\n  width: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n#main #info {\n  position: absolute;\n  top: 150px;\n  font-size: 34px;\n  display: none;\n}\n#buttons {\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  /* 阻止选择 */\n}\n#buttons .arrow {\n  width: 60px;\n  height: 60px;\n  line-height: 60px;\n  font-size: 30px;\n  background-color: #b7d4a8;\n  text-align: center;\n  border: 2px solid #000;\n  border-radius: 5px;\n}\n#buttons > div {\n  margin: 0 auto;\n}\n#buttons .mid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 300px;\n  -webkit-box-orient: inherit;\n  -webkit-box-direction: inherit;\n      -ms-flex-direction: inherit;\n          flex-direction: inherit;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n',""]),n.Z=i},645:function(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&i[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},379:function(e,n,t){var o,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),r=[];function a(e){for(var n=-1,t=0;t<r.length;t++)if(r[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},o=[],i=0;i<e.length;i++){var s=e[i],c=n.base?s[0]+n.base:s[0],l=t[c]||0,d="".concat(c," ").concat(l);t[c]=l+1;var u=a(d),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(r[u].references++,r[u].updater(f)):r.push({identifier:d,updater:b(f,n),references:1}),o.push(d)}return o}function c(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,d=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,o){var i=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(n,i);else{var r=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(r,a[n]):e.appendChild(r)}}function f(e,n,t){var o=t.css,i=t.media,r=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,p=0;function b(e,n){var t,o,i;if(n.singleton){var r=p++;t=h||(h=c(n)),o=u.bind(null,t,r,!1),i=u.bind(null,t,r,!0)}else t=c(n),o=f.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var i=a(t[o]);r[i].references--}for(var c=s(e,n),l=0;l<t.length;l++){var d=a(t[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}t=c}}}}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e=t(379),n=t.n(e),o=t(726);function i(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}n()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;var r=function(){function e(n){var t=n.onDied,o=void 0===t?function(){}:t;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=document.getElementById("snake"),this.head=document.getElementById("snake").querySelector("div"),this.bodies=document.getElementById("snake").getElementsByTagName("div"),this.X=0,this.Y=0,this.onDied=o}var n,t;return n=e,(t=[{key:"X",get:function(){return this.head.offsetLeft},set:function(e){this.X!==e&&(e<0||e>290||this.checkEatBody(e,this.Y)?this.onDied():(this.bodyMove(),this.head.style.left=e+"px"))}},{key:"Y",get:function(){return this.head.offsetTop},set:function(e){this.Y!==e&&(e<0||e>290||this.checkEatBody(this.X,e)?this.onDied():(this.bodyMove(),this.head.style.top=e+"px"))}},{key:"addBody",value:function(){var e=document.createElement("div");this.element.appendChild(e)}},{key:"bodyMove",value:function(){for(var e=this.bodies.length-1;e>0;e--){var n=this.bodies[e-1],t=n.offsetLeft,o=n.offsetTop,i=this.bodies[e];i.style.left=t+"px",i.style.top=o+"px"}}},{key:"checkEatBody",value:function(e,n){for(var t=1;t<this.bodies.length;t++){var o=this.bodies[t];if(o.offsetLeft===e&&o.offsetTop===n)return!0}return!1}}])&&i(n.prototype,t),e}();function a(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var s=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=document.getElementById("food")}var n,t;return n=e,(t=[{key:"X",get:function(){return this.element.offsetLeft}},{key:"Y",get:function(){return this.element.offsetTop}},{key:"changePositon",value:function(){var e=10*Math.floor(30*Math.random()),n=10*Math.floor(30*Math.random());this.element.style.left=e+"px",this.element.style.top=n+"px"}}])&&a(n.prototype,t),e}();function c(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function l(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var d=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.maxLevel,o=void 0===t?10:t,i=n.upScore,r=void 0===i?2:i;c(this,e),this.score=0,this.level=1,this.scoreElement=document.getElementById("score"),this.levelElement=document.getElementById("level"),this.maxLevel=o,this.upScore=r,this.score=0,this.level=1}var n,t;return n=e,(t=[{key:"addScore",value:function(){this.scoreElement.innerText=++this.score+"",this.score%this.upScore==0&&this.levelUp()}},{key:"levelUp",value:function(){this.level<this.maxLevel&&(this.levelElement.innerText=++this.level+"")}}])&&l(n.prototype,t),e}();function u(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}new(function(){function e(){var n=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.isLive=!0,this.direction="",this.oppositeMap={ArrowUp:"ArrowDown",ArrowDown:"ArrowUp",ArrowLeft:"ArrowRight",ArrowRight:"ArrowLeft"},this.onDied=function(){document.getElementById("info").style.display="block",n.isLive=!1},this.keydownHandler=function(e){n.oppositeMap[n.direction]===e.key&&n.scorePanel.score>0||(n.direction=e.key)},this.snake=new r({onDied:this.onDied}),this.food=new s,this.food.changePositon(),this.scorePanel=new d,this.init()}var n,t;return n=e,(t=[{key:"init",value:function(){var e=this;console.log("Start ..."),document.addEventListener("keydown",this.keydownHandler),document.getElementById("ArrowUp").onclick=function(){e.keydownHandler({key:"ArrowUp"})},document.getElementById("ArrowDown").onclick=function(){e.keydownHandler({key:"ArrowDown"})},document.getElementById("ArrowLeft").onclick=function(){e.keydownHandler({key:"ArrowLeft"})},document.getElementById("ArrowRight").onclick=function(){e.keydownHandler({key:"ArrowRight"})},this.run()}},{key:"reStart",value:function(){this.snake=new r({onDied:this.onDied}),this.food=new s,this.food.changePositon(),this.scorePanel=new d,this.direction="",this.isLive=!0}},{key:"run",value:function(){var e=this,n=this.snake.X,t=this.snake.Y;switch(this.direction){case"ArrowUp":t-=10;break;case"ArrowLeft":n-=10;break;case"ArrowDown":t+=10;break;case"ArrowRight":n+=10}this.checkEat(n,t),this.snake.X=n,this.snake.Y=t,this.isLive&&setTimeout((function(){e.run()}),200-10*this.scorePanel.level)}},{key:"checkEat",value:function(e,n){e===this.food.X&&n===this.food.Y&&(console.log("吃到食物了"),this.food.changePositon(),this.scorePanel.addScore(),this.snake.addBody())}}])&&u(n.prototype,t),e}())}()}();