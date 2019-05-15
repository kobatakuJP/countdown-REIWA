<template>
  <div id="wrap">
    <!-- <button @click="last10sec">?</button> debug用 -->
    <div>
      <div id="head">令和まで</div>
      <div id="strong-area">
        <span class="dgtl strong">{{strong}}</span>
        <span class="dgtl unit">{{unit}}</span>
      </div>
      <div id="detail-area" class="dgtl">{{detail}}</div>
    </div>
  </div>
</template>

<script>
import 'dseg/css/dseg.css'
import moment from 'moment'
import mdf from 'moment-duration-format'
export default {
  name: 'Counter',
  reiwaTime: [2019, 4, 1],
  data() {
    return {
      now: moment(),
      goal: moment([2019, 4, 1]),
      iKey: -1
    }
  },
  methods: {
    updateReal: function () {
      this.iKey = setInterval(() => {
        this.now = moment()
      }, 500)
    },
    last10sec: function () {
      this.goal = moment().add(10, 's')
      if (this.iKey !== -1) {
        this.updateReal()
      }
    }
  },
  mounted: function () {
    mdf(moment)
    this.updateReal()
    if (this.$route.query.leep) {
      this.goal = moment().add(this.$route.query.leep, 's')
    }
  },
  computed: {
    diff: function () {
      return Math.max(this.goal.diff(this.now), 0)
    },
    detail: function () {
      return moment.duration(this.diff).format('D[日] HH : mm : ss', { trim: false, trunc: true })
    },
    strong: function () {
      if (this.diff >= 1000 * 60 * 60 * 24) {
        // 1日以上なら日付を強調
        return `${moment.duration(this.diff).format('D', { trim: false, trunc: true })}`
      } else if (this.diff >= 1000 * 60 * 60) {
        // 1時間以上なら時間を強調
        return `${moment.duration(this.diff).format('h', { trim: false, trunc: true })}`
      } else if (this.diff >= 1000 * 60) {
        // 1分以上なら分を強調
        return `${moment.duration(this.diff).format('m', { trim: false, trunc: true })}`
      } else if (this.diff >= 0) {
        // 0秒以上なら秒を強調
        return `${moment.duration(this.diff).format('s', { trim: false, trunc: true })}`
      }
    },
    unit: function () {
      if (this.diff >= 1000 * 60 * 60 * 24) {
        // 1日以上なら日付を強調
        return ` 日`
      } else if (this.diff >= 1000 * 60 * 60) {
        // 1時間以上なら時間を強調
        return ` 時間`
      } else if (this.diff >= 1000 * 60) {
        // 1分以上なら分を強調
        return ` 分`
      } else if (this.diff >= 0) {
        // 1秒以上なら秒を強調
        return ``
      }
    }
  },
  watch: {
    diff: function (v) {
      if (v <= 0) {
        clearInterval(this.iKey)
        this.$router.push('/a')
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
  display: flex;
  justify-content: center;
  align-items: center;
}
#head {
  color: white;
  font-size: 1.5em;
}
#strong-area {
  margin: 3em;
}
.strong {
  font-size: 10em;
  font-style: italic;
}
.unit {
  font-size: 3em;
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

@keyframes flash {
    0% {
        text-shadow: 0px 0px 0.2em #f2f804;
    }
    50% {
        text-shadow: 0px 0px 3em #f2f804;
    }
    100% {
      text-shadow: 0px 0px 0.2em #f2f804;
    }
}

.flashing {
    animation-name: flash;
    animation-timing-function: linear;
    animation-duration: 2s;
    animation-iteration-count: infinite;
}
</style>
