<template>
  <div id="wrap">
    <div id="head">令和まで</div>
    <div id="strong-area">
      <span class="dgtl">{{strong}}</span>
    </div>
    <div id="detail-area" class="dgtl">{{detail}}</div>
  </div>
</template>

<script>
import 'dseg/css/dseg.css'
import moment from 'moment'
import mdf from 'moment-duration-format'
export default {
  name: 'HelloWorld',
  data() {
    return {
      diff: 0,
    }
  },
  methods: {
    updateReal: function () {
      setInterval(() => {
        this.diff = new Date([2019, 5, 1]) - Date.now();
      }, 500)
    }
  },
  mounted: function () {
    mdf(moment)
    this.updateReal()
  },
  computed: {
    detail: function () {
      return moment.duration(this.diff).format("D[日] HH : mm : ss")
    },
    strong: function () {
      if (this.diff > 1000 * 60 * 60 * 24) {
        // 1日以上なら日付を強調
        return `${moment.duration(this.diff).format("D")} 日`
      } else if (this.diff > 1000 * 60 * 60) {
        // 1時間以上なら時間を強調
        return `${moment.duration(this.diff).format("h")} 時間`
      } else if (this.diff > 1000 * 60) {
        // 1分以上なら分を強調
        return `${moment.duration(this.diff).format("m")} 分`
      } else if (this.diff > 1000) {
        // 1秒以上なら秒を強調
        return `${moment.duration(this.diff).format("s")}`
      }
    }
  }
}
</script>

<style scoped>
#wrap {
  background-color: black;
  width: 100%;
  height: 100%;
}
#head {
  color: white;
}
#strong-area {
  font-size: 10em;
}
#detail-area {
  font-size: 2em;
}
.dgtl {
  font-family: "DSEG14-Classic";
  font-weight: bold;
  color: #f2f804;
  text-shadow: 0px 0px 0.2em #f2f804;
}
</style>
