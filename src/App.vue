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

#element::-webkit-scrollbar {
    display: none;
}

#app {
  font-family: Avenir, 'Graphik', Helvetica, Arial, sans-serif; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  color: white;
  overflow-x: hidden;
  background: black;
  overflow: -moz-scrollbars-none;
  scrollbar-width: none;
  -ms-overflow-style: none;
  
}

.section {
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.7);
  overflow: hidden;
}

.section-title {
  display: flex;
  justify-content: space-between;  
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  box-sizing: border-box;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
 
}

.section-title h3 {
  display: inline-block;
}


.content-section {
  border: 1px solid rgba(255, 255, 255, 0.7);
  margin: 0 80px;
}

.subsection {
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 70vh;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
}

.subsection:last-child {
  border-bottom: none !important;
}

.reversed {
  flex-direction: row-reverse !important;
}

.subsection-image {
  height: 100%;
  min-width: 50%;
  padding: 0 100px;
  box-sizing: border-box;
}

.subsection-image img {
  width: 100%;
}

.subsection-text {
  padding-right: 135px;
  }

.reversed .subsection-text {
  padding-right: 10px;
  padding-left: 135px;
}

.subsection-text h1 {
  font-size: 48px;
  margin-bottom: 35px;
  font-weight: 400;
}

.subsection-text p, .text p {
  font-weight: 300;
  font-size: 19px;
  line-height: 1.5;

}



</style>
