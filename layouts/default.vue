<template>
  <div id="app">
    <NavBar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
export default {
  components: {
    NavBar,
    Footer,
  },
}
</script>

<style>
#app {
  color: var(--text-light);
  background: #000;
  background-image: var(--bg-gradient);
}
</style>
