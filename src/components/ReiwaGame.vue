<template>
  <div id="wrap">
    <h3>令和ゲーム</h3>
    <div id="game-main">
      <div class="snakegame-main-box" ref="snakebox"></div>
    </div>
    <div class="controler">
      <div class="contbtn up" @click="move(1)">
        <img src="../../img/arrow_up.svg">
      </div>
      <div class="contbtn left" @click="move(2)">
        <img src="../../img/arrow_up.svg">
      </div>
      <div class="contbtn right" @click="move(-2)">
        <img src="../../img/arrow_up.svg">
      </div>
      <div class="contbtn down" @click="move(-1)">
        <img src="../../img/arrow_up.svg">
      </div>
    </div>
    <div v-show="isDead" class="buttonarea">
      <button @click="leep">10秒カウントダウン</button>
      <button @click="reset">リセット</button>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert2";
export default {
  name: "ReiwaGame",
  head: {
    meta: [
      { name: 'description', content: '令和をつなげるゲームです。得点(令和PT)に応じて評価が入ります。' },
      { property: 'og:title', content: '令和ゲーム' },
      { property: 'og:description', content: '令和をつなげるゲームです。得点(令和PT)に応じて評価が入ります。' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://kobatakujp.github.io/countdown-REIWA/dist/#/reiwagame' },
      { property: 'og:image', content: 'https://kobatakujp.github.io/countdown-REIWA/img/og_raiwagame.png' },
      { name: 'twitter:card', content: '令和をつなげるゲーム' }
    ]
  },
  data() {
    return {
      leepable: false,
      /** 蛇データ */
      snake: [],
      /** メインループ回数 */
      count: 0,
      /** moveするためのループ回数 */
      movecount: 30,
      /** 死？ */
      isDead: false,
      /** 現在の方向 */
      nowdir: 2,
      /** 次の方向 */
      nextdir: 2,
      /** 敵の場所 */
      agent: null,
      /** 方向のキー、反対方向はマイナスをかけるとなる。上は１、下はー１など */
      dircode: {
        u: 1,
        l: 2,
        r: -2,
        d: -1
      }
    };
  },
  methods: {
    leep: function() {
      this.$router.push({ path: "/", query: { leep: 10 } });
    },
    reset: function() {
      location.reload();
    },
    mainloop: function() {
      if (!this.isDead) {
        this.countup();
        requestAnimationFrame(this.mainloop);
      }
    },
    init: function() {
      this.snake = [
        { x: 14, y: 0, div: document.createElement("div") },
        { x: 15, y: 0, div: document.createElement("div") }
      ];
      this.agent = { x: 7, y: 0, div: document.createElement("div") };
      this.agent.div.className = "agent";
      this.movecount = 30;
      this.nowdir = this.dircode.l;
      this.nextdir = this.dircode.l;
      this.addKeyAction();
      this.draw();
      this.mainloop();
    },
    addKeyAction() {
      document.addEventListener("keydown", e => {
        switch (e.key) {
          case "ArrowUp":
            this.move(this.dircode.u);
            break;
          case "ArrowRight":
            this.move(this.dircode.r);
            break;
          case "ArrowLeft":
            this.move(this.dircode.l);
            break;
          case "ArrowDown":
            this.move(this.dircode.d);
            break;
        }
      });
    },
    draw: function() {
      this.agent.div.style.gridArea = `g${this.agent.y}-${this.agent.x}`;
      this.agent.div.style.backgroundColor = "red";
      this.$refs.snakebox.appendChild(this.agent.div);
      this.snake.forEach((v, i) => {
        const c = i % 2 === 0 ? "令" : "和";
        v.div.innerText = c;
        v.div.style.gridArea = `g${v.y}-${v.x}`;
        v.div.style.backgroundColor = "black";
        this.$refs.snakebox.appendChild(v.div);
      });
    },
    countup: function() {
      this.count++;
      if (this.count >= this.movecount) {
        this.update();
        this.count = 0;
      }
    },
    move: function(key) {
      // キーが現在の入力と正反対の場合は無視する
      if (-1 * key !== this.nowdir) {
        this.nextdir = key;
      }
    },
    update: function() {
      this.nowdir = this.nextdir;
      this.updategrid();
      this.checkDead();
      if (!this.isDead) {
        this.draw();
      }
    },
    updategrid: function() {
      // 先頭の新しい場所を確認
      const newplace = {
        x:
          this.snake[0].x +
          (this.nowdir === this.dircode.r
            ? 1
            : this.nowdir === this.dircode.l
            ? -1
            : 0),
        y:
          this.snake[0].y +
          (this.nowdir === this.dircode.d
            ? 1
            : this.nowdir === this.dircode.u
            ? -1
            : 0),
        div: document.createElement("div")
      };
      // エンカウント確認
      if (this.agent.x === newplace.x && this.agent.y === newplace.y) {
        // エンカウントしてたら蛇を長くする
        this.snake.push({ x: newplace.x, y: newplace.y, div: document.createElement("div") });
        this.updateAgent();
      }
      const topdiv = this.snake[this.snake.length - 1].div;
      // 先頭以外をひとつずつずらす
      for (let i = this.snake.length - 1; i > 0; i--) {
        this.snake[i] = this.snake[i - 1];
      }
      newplace.div = topdiv;
      // 先頭を入れて終了
      this.snake[0] = newplace;
    },
    updateAgent: function() {
      const blank = [];
      for (let xi = 0; xi < 15; xi++) {
        for (let yi = 0; yi < 15; yi++) {
          const v = this.snake.findIndex(v => v.x === xi && v.y === yi);
          if (v === -1) {
            blank.push({ x: xi, y: yi });
          }
        }
      }
      const nextAgent = blank[Math.floor(Math.random() * blank.length)];
      this.agent.x = nextAgent.x;
      this.agent.y = nextAgent.y;
      this.movecount = Math.ceil(25 - 0.08 * this.snake.length);
    },
    checkDead: function() {
      const head = this.snake[0];
      if (this.offside(head) || this.hitself(head)) {
        this.dead();
      }
    },
    offside: function(head) {
      return 0 > head.x || head.x > 15 || 0 > head.y || head.y > 15;
    },
    hitself: function(head) {
      return (
        this.snake.filter(v => v.x === head.x && v.y === head.y).length > 1
      );
    },
    dead: function() {
      this.isDead = true;
      const pt = this.snake.length;
      let com = "ほう";
      if (pt === 256) {
        com =
          "You are Perfect 令和。令和はあなたにあげます。自慢していいです。あなたはすごいやつです。愛しています。";
      } else if (pt > 240) {
        com =
          "ここまで到達する者を見るのは令和では久しぶりだ。到達するのか、その先へ。";
      } else if (pt > 220) {
        com = "もはや何も言うまでもない令和ぶり。君はすでに人を越えた。";
      } else if (pt > 200) {
        com = "令和な大台を突破。修羅の道を進む君にエールを送る。";
      } else if (pt > 180) {
        com =
          "令和に愛され始めている。ほかの元号が嫉妬するレベルになってきている。";
      } else if (pt > 160) {
        com =
          "令和に生きる人間としては最高峰のひとり。今ならワンフェイクで沢北をかわせます。";
      } else if (pt > 140) {
        com = "相当な手練れの令和ぶり。相手がヤムチャならワンパン余裕です。";
      } else if (pt > 120) {
        com = "かなり令和に近づいている。令和とともにあらんことを。";
      } else if (pt > 100) {
        com =
          "意地でも令和をつなげたい気持ちが盛り上がる。ここを乗り越えると強くなれる。";
      } else if (pt > 80) {
        com =
          "令和の心が少しづつ分かってくるころ。万葉集と古今和歌集の区別がつき始める。";
      } else if (pt > 60) {
        com = "中の下の令和。心無いコメントをされると折れるレベル。";
      } else if (pt > 40) {
        com = "脱・令和初心者。もう平成とは言わせない。";
      } else if (pt > 20) {
        com = "令和がゲシュタルト崩壊してくるころ。しかしまだまだ先は長い。";
      } else if (pt > 10) {
        com = "令和初心者。俺たちの戦いは始まったばかり。";
      } else if (pt > 2) {
        com = "令和に満たない。でも僕は好きです。";
      } else {
        com = "え？";
      }
      const shareStr = `【令和PT】${pt}PT【評価】${com}【令和Game：<http://bit.ly/2vvAOaK>】`
      swal.fire({
        allowOutsideClick: false,
        type: pt > 200 ? "success" : "error",
        title: `令和ポイント：${pt}`,
        text: `${com}`,
        footer: `<a href="https://mixi.jp/simplepost/voice?status=${shareStr}">mixi</a>／<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=${shareStr}" data-size="large">Tweet</a>／<a href="http://line.me/R/msg/text/?${shareStr}">LINE</a>／<a href="https://www.facebook.com/sharer/sharer.php?u=http://bit.ly/2vvAOaK">Facebook</a>`
      });
    }
  },
  mounted: function() {
    this.init();
  },
  computed: {}
};
</script>

<style scoped>
.controler {
  position: fixed;
  display: grid;
  bottom: 20px;
  right: 20px;
  margin: 0;
  padding: 0;
  grid-template-columns: repeat(3, 64px);
  grid-template-rows: repeat(3, 64px);
  opacity: 0.3;
}

.contbtn {
  cursor: pointer;
}

.contbtn.up {
  grid-area: 1 / 2 / 2 / 3;
}

.contbtn.left {
  grid-area: 2 / 1 / 3 / 2;
  transform: rotate(-90deg);
}

.contbtn.right {
  grid-area: 2 / 3 / 3 / 4;
  transform: rotate(90deg);
}

.contbtn.down {
  grid-area: 3 / 2 / 4 / 3;
  transform: rotate(180deg);
}

.snakegame-main-box {
  display: grid;
  margin: 0 auto; /* 左右中央寄せ */
  font-family: "Courier New", Consolas, monospace;
  grid-template-columns: repeat(16, 15px);
  grid-template-rows: repeat(16, 15px);
  border: solid;
  border-width: 5px;
  border-color: black;
  width: fit-content;
  font-size: 15px;
  font-weight: bold;
  color: white;
  grid-template-areas:
    "g0-0 g0-1 g0-2 g0-3 g0-4 g0-5 g0-6 g0-7 g0-8 g0-9 g0-10 g0-11 g0-12 g0-13 g0-14 g0-15"
    "g1-0 g1-1 g1-2 g1-3 g1-4 g1-5 g1-6 g1-7 g1-8 g1-9 g1-10 g1-11 g1-12 g1-13 g1-14 g1-15"
    "g2-0 g2-1 g2-2 g2-3 g2-4 g2-5 g2-6 g2-7 g2-8 g2-9 g2-10 g2-11 g2-12 g2-13 g2-14 g2-15"
    "g3-0 g3-1 g3-2 g3-3 g3-4 g3-5 g3-6 g3-7 g3-8 g3-9 g3-10 g3-11 g3-12 g3-13 g3-14 g3-15"
    "g4-0 g4-1 g4-2 g4-3 g4-4 g4-5 g4-6 g4-7 g4-8 g4-9 g4-10 g4-11 g4-12 g4-13 g4-14 g4-15"
    "g5-0 g5-1 g5-2 g5-3 g5-4 g5-5 g5-6 g5-7 g5-8 g5-9 g5-10 g5-11 g5-12 g5-13 g5-14 g5-15"
    "g6-0 g6-1 g6-2 g6-3 g6-4 g6-5 g6-6 g6-7 g6-8 g6-9 g6-10 g6-11 g6-12 g6-13 g6-14 g6-15"
    "g7-0 g7-1 g7-2 g7-3 g7-4 g7-5 g7-6 g7-7 g7-8 g7-9 g7-10 g7-11 g7-12 g7-13 g7-14 g7-15"
    "g8-0 g8-1 g8-2 g8-3 g8-4 g8-5 g8-6 g8-7 g8-8 g8-9 g8-10 g8-11 g8-12 g8-13 g8-14 g8-15"
    "g9-0 g9-1 g9-2 g9-3 g9-4 g9-5 g9-6 g9-7 g9-8 g9-9 g9-10 g9-11 g9-12 g9-13 g9-14 g9-15"
    "g10-0 g10-1 g10-2 g10-3 g10-4 g10-5 g10-6 g10-7 g10-8 g10-9 g10-10 g10-11 g10-12 g10-13 g10-14 g10-15"
    "g11-0 g11-1 g11-2 g11-3 g11-4 g11-5 g11-6 g11-7 g11-8 g11-9 g11-10 g11-11 g11-12 g11-13 g11-14 g11-15"
    "g12-0 g12-1 g12-2 g12-3 g12-4 g12-5 g12-6 g12-7 g12-8 g12-9 g12-10 g12-11 g12-12 g12-13 g12-14 g12-15"
    "g13-0 g13-1 g13-2 g13-3 g13-4 g13-5 g13-6 g13-7 g13-8 g13-9 g13-10 g13-11 g13-12 g13-13 g13-14 g13-15"
    "g14-0 g14-1 g14-2 g14-3 g14-4 g14-5 g14-6 g14-7 g14-8 g14-9 g14-10 g14-11 g14-12 g14-13 g14-14 g14-15"
    "g15-0 g15-1 g15-2 g15-3 g15-4 g15-5 g15-6 g15-7 g15-8 g15-9 g15-10 g15-11 g15-12 g15-13 g15-14 g15-15";
}
</style>
