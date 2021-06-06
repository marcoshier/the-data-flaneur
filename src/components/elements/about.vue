<template>
  <div class="section content-section">
      <div class="section-title">
            <h1>{{ title }}
            </h1>
            <h3>3</h3>
        </div>
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

    .section-title  {
        position: sticky;
        top: 100px;
    }
</style>