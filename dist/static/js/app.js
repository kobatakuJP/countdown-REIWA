webpackJsonp([1],{"2VS5":function(t,e){},Gqy1:function(t,e){},JfAg:function(t,e){t.exports="data:image/svg+xml;base64,PCEtLT94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPy0tPgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+Cgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9Il94MzJfIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJ3aWR0aDogNjRweDsgaGVpZ2h0OiA2NHB4OyBvcGFjaXR5OiAxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzRCNEI0Qjt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ4Ny45MzIsMjQzLjc2OEwyNTUuOTk5LDBMMjQuMDc2LDI0My43NjhjLTIxLjc4NywyMi44ODYtMjAuODc0LDU5LjA4OCwyLjAxMyw4MC44NjUKCQljMjIuODg3LDIxLjc4Nyw1OS4wOTksMjAuODk2LDgwLjg4Ni0yLjAxM2w5MS44MTgtOTYuNTA2djIyOC42OTFjMCwzMS41OSwyNS42MTcsNTcuMTk1LDU3LjIwNSw1Ny4xOTUKCQljMzEuNiwwLDU3LjIxNy0yNS42MDYsNTcuMjE3LTU3LjE5NVYyMjYuMTE0bDkxLjgyOSw5Ni41MDZjMjEuNzc3LDIyLjkwOSw1Ny45NzgsMjMuOCw4MC44NzUsMi4wMTMKCQlDNTA4LjgwNiwzMDIuODU1LDUwOS42OTgsMjY2LjY1NCw0ODcuOTMyLDI0My43Njh6IiBzdHlsZT0iZmlsbDogcmdiKDc1LCA3NSwgNzUpOyI+PC9wYXRoPgo8L2c+Cjwvc3ZnPgo="},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),i=s("RZCy"),a=s.n(i),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("transition",[e("router-view")],1)],1)},staticRenderFns:[]};var o=s("VU/8")({name:"App"},r,!1,function(t){s("Gqy1")},null,null).exports,c=s("/ocq"),d=(s("QBpD"),s("PJh5")),u=s.n(d),h=s("SdwT"),l=s.n(h),j={name:"Counter",reiwaTime:[2019,4,1],data:function(){return{now:u()(),goal:u()([2019,4,1]),iKey:-1}},methods:{updateReal:function(){var t=this;this.iKey=setInterval(function(){t.now=u()()},500)},last10sec:function(){this.goal=u()().add(10,"s"),-1!==this.iKey&&this.updateReal()}},mounted:function(){l()(u.a),this.updateReal(),this.$route.query.leep&&(this.goal=u()().add(this.$route.query.leep,"s"))},computed:{diff:function(){return Math.max(this.goal.diff(this.now),0)},detail:function(){return u.a.duration(this.diff).format("D[日] HH : mm : ss",{trim:!1,trunc:!0})},strong:function(){return this.diff>=864e5?""+u.a.duration(this.diff).format("D",{trim:!1,trunc:!0}):this.diff>=36e5?""+u.a.duration(this.diff).format("h",{trim:!1,trunc:!0}):this.diff>=6e4?""+u.a.duration(this.diff).format("m",{trim:!1,trunc:!0}):this.diff>=0?""+u.a.duration(this.diff).format("s",{trim:!1,trunc:!0}):void 0},unit:function(){return this.diff>=864e5?" 日":this.diff>=36e5?" 時間":this.diff>=6e4?" 分":this.diff>=0?"":void 0}},watch:{diff:function(t){0===t&&(clearInterval(this.iKey),this.$router.push("/a"))}}},m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"wrap"}},[s("div",[s("div",{attrs:{id:"head"}},[t._v("令和まで")]),t._v(" "),s("div",{attrs:{id:"strong-area"}},[s("span",{staticClass:"dgtl strong"},[t._v(t._s(t.strong))]),t._v(" "),s("span",{staticClass:"dgtl unit"},[t._v(t._s(t.unit))])]),t._v(" "),s("div",{staticClass:"dgtl",attrs:{id:"detail-area"}},[t._v(t._s(t.detail))])])])},staticRenderFns:[]};var f=s("VU/8")(j,m,!1,function(t){s("hIfh")},"data-v-5a9db9a2",null).exports,v={name:"Animation",data:function(){return{leepable:!1}},methods:{leep:function(){this.$router.push({path:"/",query:{leep:10}})},togame:function(){this.$router.push({path:"/reiwagame"})}},mounted:function(){var t=this;setTimeout(function(){t.leepable=!0},3e3)},computed:{}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"wrap"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.leepable,expression:"leepable"}],staticClass:"timeleep"},[s("button",{on:{click:t.leep}},[t._v("10秒前へ")]),t._v(" "),s("button",{staticStyle:{left:"0"},on:{click:t.togame}},[t._v("令和ゲームに挑戦")])]),t._v(" "),s("div",{attrs:{id:"gengo"}},[t._v("令和")])])},staticRenderFns:[]};var p=s("VU/8")(v,g,!1,function(t){s("2VS5")},"data-v-92991636",null).exports,w=s("e7x4"),y=s.n(w),k={name:"ReiwaGame",head:{meta:[{name:"description",content:"令和をつなげるゲームです。得点(令和PT)に応じて評価が入ります。"},{property:"og:title",content:"令和ゲーム"},{property:"og:description",content:"令和をつなげるゲームです。得点(令和PT)に応じて評価が入ります。"},{property:"og:type",content:"website"},{property:"og:url",content:"https://kobatakujp.github.io/countdown-REIWA/dist/#/reiwagame"},{property:"og:image",content:"https://kobatakujp.github.io/countdown-REIWA/img/og_raiwagame.png"},{name:"twitter:card",content:"令和をつなげるゲーム"}]},data:function(){return{leepable:!1,snake:[],count:0,movecount:30,isDead:!1,nowdir:2,nextdir:2,agent:null,dircode:{u:1,l:2,r:-2,d:-1}}},methods:{leep:function(){this.$router.push({path:"/",query:{leep:10}})},reset:function(){location.reload()},mainloop:function(){this.isDead||(this.countup(),requestAnimationFrame(this.mainloop))},init:function(){this.snake=[{x:14,y:0,div:document.createElement("div")},{x:15,y:0,div:document.createElement("div")}],this.agent={x:7,y:0,div:document.createElement("div")},this.agent.div.className="agent",this.movecount=30,this.nowdir=this.dircode.l,this.nextdir=this.dircode.l,this.addKeyAction(),this.draw(),this.mainloop()},addKeyAction:function(){var t=this;document.addEventListener("keydown",function(e){switch(e.key){case"ArrowUp":t.move(t.dircode.u);break;case"ArrowRight":t.move(t.dircode.r);break;case"ArrowLeft":t.move(t.dircode.l);break;case"ArrowDown":t.move(t.dircode.d)}})},draw:function(){var t=this;this.agent.div.style.gridArea="g"+this.agent.y+"-"+this.agent.x,this.agent.div.style.backgroundColor="red",this.$refs.snakebox.appendChild(this.agent.div),this.snake.forEach(function(e,s){var n=s%2==0?"令":"和";e.div.innerText=n,e.div.style.gridArea="g"+e.y+"-"+e.x,e.div.style.backgroundColor="black",t.$refs.snakebox.appendChild(e.div)})},countup:function(){this.count++,this.count>=this.movecount&&(this.update(),this.count=0)},move:function(t){-1*t!==this.nowdir&&(this.nextdir=t)},update:function(){this.nowdir=this.nextdir,this.updategrid(),this.checkDead(),this.isDead||this.draw()},updategrid:function(){var t={x:this.snake[0].x+(this.nowdir===this.dircode.r?1:this.nowdir===this.dircode.l?-1:0),y:this.snake[0].y+(this.nowdir===this.dircode.d?1:this.nowdir===this.dircode.u?-1:0),div:document.createElement("div")};this.agent.x===t.x&&this.agent.y===t.y&&(this.snake.push({x:t.x,y:t.y,div:document.createElement("div")}),this.updateAgent());for(var e=this.snake[this.snake.length-1].div,s=this.snake.length-1;s>0;s--)this.snake[s]=this.snake[s-1];t.div=e,this.snake[0]=t},updateAgent:function(){for(var t=this,e=[],s=function(s){for(var n=function(n){-1===t.snake.findIndex(function(t){return t.x===s&&t.y===n})&&e.push({x:s,y:n})},i=0;i<15;i++)n(i)},n=0;n<15;n++)s(n);var i=e[Math.floor(Math.random()*e.length)];this.agent.x=i.x,this.agent.y=i.y,this.movecount=Math.ceil(25-.08*this.snake.length)},checkDead:function(){var t=this.snake[0];(this.offside(t)||this.hitself(t))&&this.dead()},offside:function(t){return 0>t.x||t.x>15||0>t.y||t.y>15},hitself:function(t){return this.snake.filter(function(e){return e.x===t.x&&e.y===t.y}).length>1},dead:function(){this.isDead=!0;var t=this.snake.length,e="ほう",s="【令和PT】"+t+"PT【評価】"+(e=256===t?"You are Perfect 令和。令和はあなたにあげます。自慢していいです。あなたはすごいやつです。愛しています。":t>240?"ここまで到達する者を見るのは令和では久しぶりだ。到達するのか、その先へ。":t>220?"もはや何も言うまでもない令和ぶり。君はすでに人を越えた。":t>200?"令和な大台を突破。修羅の道を進む君にエールを送る。":t>180?"令和に愛され始めている。ほかの元号が嫉妬するレベルになってきている。":t>160?"令和に生きる人間としては最高峰のひとり。今ならワンフェイクで沢北をかわせます。":t>140?"相当な手練れの令和ぶり。相手がヤムチャならワンパン余裕です。":t>120?"かなり令和に近づいている。令和とともにあらんことを。":t>100?"意地でも令和をつなげたい気持ちが盛り上がる。ここを乗り越えると強くなれる。":t>80?"令和の心が少しづつ分かってくるころ。万葉集と古今和歌集の区別がつき始める。":t>60?"中の下の令和。心無いコメントをされると折れるレベル。":t>40?"脱・令和初心者。もう平成とは言わせない。":t>20?"令和がゲシュタルト崩壊してくるころ。しかしまだまだ先は長い。":t>10?"令和初心者。俺たちの戦いは始まったばかり。":t>2?"令和に満たない。でも僕は好きです。":"え？")+"【令和Game：<http://bit.ly/2vvAOaK>】";y.a.fire({allowOutsideClick:!1,type:t>200?"success":"error",title:"令和ポイント："+t,text:""+e,footer:'<a href="https://mixi.jp/simplepost/voice?status='+s+'">mixi</a>／<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text='+s+'" data-size="large">Tweet</a>／<a href="http://line.me/R/msg/text/?'+s+'">LINE</a>／<a href="https://www.facebook.com/sharer/sharer.php?u=http://bit.ly/2vvAOaK">Facebook</a>'})}},mounted:function(){this.init()},computed:{}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrap"}},[n("h3",[t._v("令和ゲーム")]),t._v(" "),n("div",{attrs:{id:"game-main"}},[n("div",{ref:"snakebox",staticClass:"snakegame-main-box"})]),t._v(" "),n("div",{staticClass:"controler"},[n("div",{staticClass:"contbtn up",on:{click:function(e){return t.move(1)}}},[n("img",{attrs:{src:s("JfAg")}})]),t._v(" "),n("div",{staticClass:"contbtn left",on:{click:function(e){return t.move(2)}}},[n("img",{attrs:{src:s("JfAg")}})]),t._v(" "),n("div",{staticClass:"contbtn right",on:{click:function(e){return t.move(-2)}}},[n("img",{attrs:{src:s("JfAg")}})]),t._v(" "),n("div",{staticClass:"contbtn down",on:{click:function(e){return t.move(-1)}}},[n("img",{attrs:{src:s("JfAg")}})])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isDead,expression:"isDead"}],staticClass:"buttonarea"},[n("button",{on:{click:t.leep}},[t._v("10秒カウントダウン")]),t._v(" "),n("button",{on:{click:t.reset}},[t._v("リセット")])])])},staticRenderFns:[]};var x=s("VU/8")(k,b,!1,function(t){s("r0Nr")},"data-v-b81d1268",null).exports;n.a.use(c.a);var M=new c.a({routes:[{path:"/",name:"Counter",component:f},{path:"/a",name:"Animation",component:p},{path:"/reiwagame",name:"ReiwaGame",component:x}]});n.a.config.productionTip=!1,n.a.use(a.a,{separator:" | "}),new n.a({el:"#app",router:M,components:{App:o},template:"<App/>"})},QBpD:function(t,e){},hIfh:function(t,e){},r0Nr:function(t,e){},uslO:function(t,e,s){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function i(t){return s(a(t))}function a(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(n)},i.resolve=a,t.exports=i,i.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.js.map