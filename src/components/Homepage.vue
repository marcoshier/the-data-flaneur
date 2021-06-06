<template>
  <div id="home-cnt">
    <Header />
    <Video id="main-cnt" />
    <Concept id="concept-cnt" title="Concept" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor." />
    <Calendar  id="calendar-cnt" title="Calendar" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor."/>
    <About id="about-cnt" title="Who are we?" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor." />
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
