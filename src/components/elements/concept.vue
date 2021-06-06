<template>
  <div class="section content-section">
      <div class="section-title">
          <h3>{{ title }}</h3>
          <h3>1</h3>
      </div>
      <div class="circles subsection">
          <div class="subsection-image">
              <img src="../../assets/svg/circles.svg" />
          </div>
          <div class="subsection-text">
              <h1>Inviting everyone.</h1>
              <p>
              “How do we tempt people from all levels of digital literacy to achieve data awareness and strengthen their position on Smart City technology?”
              </p></div>
      </div>
      <div class="eye subsection reversed">
          <div class="subsection-image">
              <img src="../../assets/svg/eye.svg" />
          </div>
          <div class="subsection-text">
              <h1>Visually communicating
data collection.</h1>
              <p>
              “What does a common visual language about data collection in public space look like?”
              </p>
              </div>
      </div>
      <div class="situational subsection">
          <div class="subsection-image">
              <img src="../../assets/svg/situational.svg" />
          </div>
          <div class="subsection-text">
              <h1>Situational awareness</h1>
              <p>
              “How do we motivate people to walk along the Boulevard, not only more aware of the data collection, but also more aware of themselves?”
              </p>
              </div>
      </div>
  </div>
</template>

<script>

export default {
    name: 'Concept',
    props: {
        title: String,
        desc: String
    }
}
</script>
<style scoped>
canvas {
    width: 400px;
    height: 350px;
}

.section-title {
   position: sticky;
   top: 70px;
}
</style>