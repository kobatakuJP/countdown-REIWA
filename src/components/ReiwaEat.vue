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
  name: 'ReiwaEat',
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
</style>
