<template>
  <div id="wrap">
    <div id="gengo">令和</div>
  </div>
</template>

<script>
export default {
  name: 'Animation',
  reiwaTime: [2019, 4, 1],
  data() {
    return {
      now: 0
    }
  },
  methods: {
    setGoal: function (v) {
      this.now = v
    }
  },
  mounted: function () {
    // this.updateReal()
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
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>
