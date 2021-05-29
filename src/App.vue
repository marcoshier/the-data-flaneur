<template>
  <div id="app">
    <Homepage />
  </div>
</template>

<script>
import Homepage from './components/Homepage.vue'

export default {
  name: 'App',
  components: {
    Homepage
  }
}
</script>

<style>
@font-face {
  font-family: "Graphik";
  src: url("../src/assets/fonts/Graphik-300-Light.otf") format("opentype");
  font-weight: 300;
}

@font-face {
  font-family: "Graphik";
  src: url("../src/assets/fonts/Graphik-400-Regular.otf") format("opentype");
  font-weight: 400;
}

#app {
  font-family: Avenir, 'Graphik', Helvetica, Arial, sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  overflow-x: hidden;
  background: black;
}

.section {
        height: calc(100vh - 100px);
        box-sizing: content-box;
        padding: 10%;
}

.section-title {
  line-height: 1.5;
  font-size: 100px;
  font-weight: 300;
}


</style>
