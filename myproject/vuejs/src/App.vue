<template>
<div>
  <Header/>
  <Body/>
  <Footer/>
</div>
</template>
<script>
import Header from './components/Header.vue'
import Body from './components/Body.vue'
import Footer from './components/Footer.vue'

import Vue from 'vue'

export default {
  name: 'App',
  components: {
    Header,Body,Footer,Vue
  }
}

</script>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>


