<template>
  <div id="content-cnt" class="section">
      <div class="section-title">
          <h1>{{ title }}
          </h1>
          </div>
  </div>
</template>

<script>
export default {
    name: 'About',
    props: {
        title: String
    }
}
</script>