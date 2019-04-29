<template>
  <div id="wrap">
    <div class="timeleep" v-show="leepable">
      <button @click="leep">10秒前へ</button>
      <button @click="togame" style="left: 0;">令和ゲームに挑戦</button>
    </div>
    <div id="gengo">令和</div>
  </div>
</template>

<script>
export default {
  name: 'Animation',
  data() {
    return {
      leepable: false
    }
  },
  methods: {
    leep: function () {
      this.$router.push({ path: '/', query: { leep: 10 } })
    },
    togame: function() {
      this.$router.push({ path: '/reiwagame' })
    }
  },
  mounted: function () {
    setTimeout(() => { this.leepable = true }, 5000)
  },
  computed: {
  }
}
</script>

<style scoped>
#wrap {
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#gengo {
  color: black;
  font-size: 1.5em;
}

.timeleep {
  position: fixed;
  top: 10px;
  left: 10px;
}
</style>
