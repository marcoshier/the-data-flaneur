<template>
  <div class="section no-border">
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

.no-border {
    padding: 0 !important;
    border: none !important;
}

.video {
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
}

.video iframe{
    width: 100vw;
   height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
   min-height: 100vh;
   min-width: 177.77vh; /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
   position: relative;
   left: 50%;
   transform: translateX(-50%);
   z-index: 0;
}

</style>