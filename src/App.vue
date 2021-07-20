<template>
  <div id="app" >
    <HomePage />
    <toast />
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import toast from './components/toast.vue'

export default {
  name: 'App',
  components: {
    HomePage,
    toast
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
