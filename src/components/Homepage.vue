<template>
  <div id="home-cnt">
    <Header />
    <Video id="main-cnt" />
    <Concept id="concept-cnt" title="Concept" />
    <Calendar  id="calendar-cnt" title="Calendar"/>
    <About id="about-cnt" title="Who are we?" />
    <Footer />
  </div>
</template>

<script>
import Header from './elements/header';
import Video from './elements/video';
import Concept from './elements/concept';
import Calendar from './elements/calendar';
import About from './elements/about';
import Footer from './elements/footer';

export default {
  name: 'Homepage',
  components: {
    Header,
    Video,
    Concept,
    Calendar,
    About,
    Footer
  }
}
</script>

<style scoped>
  #home-cnt {
    
    background-color: black;
    min-height: 100vh;
    width: 100vw;
  }
</style>
