<template>
  <div id="date">
      <div class="numbers">
            <div class = "day">
                {{ day }}
            </div>
            <div class="month">
                {{ month }}
            </div>
            <div class="location-text">
                Smart@Sea Scheveningen
            </div>
          </div>
  </div>
</template>

<script>
export default {
    name: 'Date',
    props: {
        day: String,
        month: String,
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
        font-size: 13vw;
        line-height: 1.1;
        text-align: center;
    }

    .month {
        font-size: 40px;
        font-weight: 400;
        text-align: center;
    }

    .location-text {
        font-size: 22px;
        font-weight: 300;
        text-align: center;
        padding-top: 43px;
        text-align: center;
        color: rgb(172, 172, 172);
    }

</style>