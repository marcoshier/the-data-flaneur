<template>
  <div id="home-cnt">
    <Header />
    <Video id="main-cnt" />
    <Concept id="concept-cnt" title="Concept" />
    <Goals id="components-cnt" title="Goals" />
    <Proof id="components-cnt" title="Proof of concept" />
    <Calendar  id="calendar-cnt" title="Calendar"/>
    <About id="about-cnt" title="Who are we?" />
    <Footer />
  </div>
</template>

<script>
import Header from './elements/header';
import Video from './elements/video';
import Goals from './elements/goals';
import Concept from './elements/concept';
import Proof from './elements/proof';
import Calendar from './elements/calendar';
import About from './elements/about';
import Footer from './elements/footer';

export default {
  name: 'Homepage',
  components: {
    Header,
    Goals,
    Video,
    Concept,
    Proof,
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
