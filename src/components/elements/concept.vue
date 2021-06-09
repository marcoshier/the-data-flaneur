<template>
  <div class="section content-section">
      <div class="section-title">
          <h3>{{ title }}</h3>
          <h3>1</h3>
      </div>
      <div class="subsection concept-sub">
          <div class="subsection-text concept-text">
              <h1>Are you aware of the data traces you leave behind?</h1>
              <p>
                The Data Flâneur creates a visceral experience of data collection in the smart city. New sensory technologies enable the city to become aware of the sounds, sights and movements of its citizens. But these new streams of data are obscured from the public. This interactive installation uses light to make the invisible visible through poetic and engaging interactions, revealing the traces you leave behind in the digital world. Not only does the experience make us more aware of the data we are sharing with the city, it also stimulates a fresh state of awareness of our surroundings. Ultimately slowing the visitors down to the pace of a Flâneur strolling calmly along the boulevard. 
              </p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Concept',
    props: {
        title: String
    }
    }
</script>

<style>
.section-title {
   position: sticky;
   top: 70px;
}

.concept-sub {
    justify-content: center;
}

.concept-text {
    padding: 40px 40px !important;
    text-align: center;
}
</style>