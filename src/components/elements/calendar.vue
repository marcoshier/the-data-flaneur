<template>
  <div class="section content-section">
        <div class="section-title">
            <h1>{{ title }}
            </h1>
            <h3>2</h3>
        </div>
      <div class="calendar subsection">
          <Date day="19" month="june" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic dicta mollitia deserunt blanditiis dignissimos facere? Sit nihil non mollitia, consequatur expedita debitis. Quibusdam accusamus corporis doloremque quo ullam optio ipsam."/>     
          <Date day="30" month="September" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic dicta mollitia deserunt blanditiis dignissimos facere? Sit nihil non mollitia, consequatur expedita debitis. Quibusdam accusamus corporis doloremque quo ullam optio ipsam."/>    
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
        desc: String
    }
}
</script>

<style scoped>
.calendar {
    width: 100%;
    display: flex;
    flex-direction: row;
}

.section-title {
   position: sticky;
   top: 100px;
}

</style>