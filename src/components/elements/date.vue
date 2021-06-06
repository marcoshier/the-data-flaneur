<template>
  <div id="date">
      <div class="numbers">
            <div class = "day">
                {{ day }}
            </div>
            <div class="month">
                {{ month }}
            </div>
          </div>
        <div class="text">
            <p>{{ text }}
            </p>
        </div>
  </div>
</template>

<script>
export default {
    name: 'Date',
    props: {
        day: String,
        month: String,
        text: String
    }

}
</script>

<style>
    #date {
        display: flex;
        flex-direction: row;
        padding: 70px;
    }

    .numbers {
        display: flex;
        flex-direction: column;
    }

    .day {
        font-weight: 400;
        font-size: 180px;
        line-height: 1.1;
    }

    .month {
        font-size: 30px;
        font-weight: 300;
    }

    .text p {
        
        padding-top: 40px;
        padding-left: 60px;
        padding-top: 0 !important;
        margin-top: 10px;
    }
</style>