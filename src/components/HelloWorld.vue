<template>
  <div class="hello">
    <div class="contdown">{{msg}}</div>
  </div>
</template>

<script>
import 'dseg/css/dseg.css'
import moment from 'moment'
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 0
    }
  },
  methods: {
    updateReal: function () {
      setInterval(() => {
        this.msg = moment(moment([2019, 5, 1]).diff(moment())).format("D HH:mm:ss");
      }, 500)
    }
  },
  mounted: function () {
    this.updateReal()
  }
}
</script>

<style scoped>
.contdown {
  font-family: "DSEG14-Classic";
  font-weight: bold;
  font-style: italic;
  color: #f2f804;
  text-shadow: 0px 0px 3px #f2f804;
  background-color: black;
}
</style>
