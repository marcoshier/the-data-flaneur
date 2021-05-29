<template>
  <div id="home-cnt">
    <Header />
    <Video />
    <Concept title="Concept"/>
    <Calendar title="Calendar"/>
    <About title="Who are we?"/>
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
    padding-top: 100px;
    background-color: black;
    min-height: 100vh;
    width: 100vw;
  }
</style>
