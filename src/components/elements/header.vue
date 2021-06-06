<template>
  <div id="header">
      <div class="logo">The Data Flâneur</div>
      <ul class="menu">
          <li><a href="#" v-scroll-to="'#main-cnt'">Home</a></li>
          <li><a href="#" v-scroll-to="'#concept-cnt'">Concept</a></li>
          <li><a href="#" v-scroll-to="'#calendar-cnt'">Calendar</a></li>
          <li><a href="#" v-scroll-to="'#about-cnt'">About</a></li>
            
      </ul>
  </div>
</template>

<script>
export default {
    name: 'Header',created () {
    window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll (event) {
        let max = 530
        let element = document.getElementById("header")
        let scrollTop = event.target.documentElement.scrollTop;

        function map(x, in_min, in_max, out_min, out_max) {
            return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        }

        let opacityValue = map(scrollTop, 0, max, 0, 1)

        element.style.backgroundColor = "rgba(0, 0, 0, " + opacityValue + ")";
        }
    }
}
</script>

<style scoped>
    #header {
        position: fixed;
        width: 100%;
        height: 100px;
        top: 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: horizontal;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
        background-color: rgba(0, 0, 0, 0);
    }

    .logo {
        font-size: 29px;
        margin-left: 40px;
    }

    .menu {
        display: block;
        margin-right: 60px;
    }

    li {
        float: left;
    }

    a {
        display: block;
        text-decoration: none;
        color: white;
        margin-right: 48px;
    }

    li:last-child a{
        margin-right: 0 !important
    }

</style>