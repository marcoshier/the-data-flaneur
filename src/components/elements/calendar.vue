<template>
  <div class="section content-section">
        <div class="section-title">
            <h1>{{ title }}
            </h1>
            <h3>4</h3>
        </div>
      <div class="calendar subsection">
          <Date day="10-11" month="june 2021"/>     
          <div class="location-cnt">
              <img class="location" src="../../assets/location.png" />
      </div>
    </div>
  </div>
</template>

<script>
import Date from './date'

export default {
    name: 'Calendar',
    components: {
        Date
    },
    props: {
        title: String,
    }
}
</script>

<style scoped>
.calendar {
    width: 100%;
    display: flex;
    flex-direction: row;
}

iframe {
    width: 100%;
    height: 100%;
    padding: 0;
}

.section-title {
   position: sticky;
   top: 70px;
}

.location-cnt { 
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-width: 50%;
  padding: 0 100px;
  box-sizing: border-box;
}

.location  {
    width: 100%;
    height: 80%;
}

@media screen and (max-width: 950px){
 .location-cnt {
    padding: 0 100px 80px 100px
  }
 }




</style>