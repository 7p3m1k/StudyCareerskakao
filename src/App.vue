<template>
  <div class="App">
    <router-view></router-view>
  </div>
</template>

<script>
import Main from './components/Main.vue'
import "./reset.css"

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style scoped>
  .App {
    background: #f9f9f9;
  }
</style>