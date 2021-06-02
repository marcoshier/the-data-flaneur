<template>
  <div id="content-cnt" class="section content-section">
      <div class="profiles subsection">
          <Profile name="Xiaoyao"/>
          <Profile name="Jeroen"/>
          <Profile name="Marco"/>
      </div>
  </div>
</template>

<script>
import Profile from './profile'
export default {
    name: 'About',
    components: {
        Profile
    },
    props: {
        title: String,
        desc: String
    }
}
</script>

<style scoped>
    .profiles {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }
</style>