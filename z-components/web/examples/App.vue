<template>
  <div id="app">
    <z-button></z-button>
  </div>
</template>
<script>
import zButton from '../packages/button'
export default {
  name: 'app',
  components: {
    zButton
  },
  data: function () {
    return {
    }
  },
  watch: {
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
