<template>
  <div id="wrap">
    <div class="timeleep" v-show="leepable">
      <button @click="leep">10秒前へ</button>
    </div>
    <div id="gengo">令和</div>
  </div>
</template>

<script>
export default {
  name: 'Animation',
  reiwaTime: [2019, 4, 1],
  data() {
    return {
      leepable: false
    }
  },
  methods: {
    leep: function () {
      this.$router.push({ path: '/', query: { leep: 10 } })
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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
