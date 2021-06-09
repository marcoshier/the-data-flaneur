<template>
  <div class="section content-section">
      <div class="section-title">
          <h3>{{ title }}</h3>
          <h3>3</h3>
      </div>
      <div class="vimeo-video subsection">
          <iframe src="https://player.vimeo.com/video/498946704" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Proof',
    props: {
        title: String
    }
}
</script>

<style>
.vimeo-video {
    justify-content: center;
}

.vimeo-video iframe {
    max-width: 100%;
}

@media screen and (max-width: 736px) {

    .vimeo-video iframe {
        max-width: 100%;
    }
}
</style>