<template>
  <div id="main-cnt" class="section">
      <div class="video">
          <iframe src="https://player.vimeo.com/video/498946704?background=1&autoplay=1&loop=1&byline=0&title=0?muted=1" width="640" height="360" frameborder="0" allow="autoplay; fullscreen;" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Video'
}
</script>

<style>

#main-cnt {
    padding: 0 !important;
}

.video {
    overflow: hidden;
}

.video iframe{
    width: 100%;
    max-height: calc(100vh - 100px);
    min-height: calc(100vh - 100px);
   min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
   position: relative;
   left: 50%;
   transform: translateX(-50%);
   z-index: 0;
}

</style>