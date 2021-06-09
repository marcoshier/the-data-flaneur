<template>
  <div id="header">
      <div class="logo">The Data Flâneur</div>
      <ul class="menu">
          <li><a href="#" v-scroll-to="'#main-cnt'">Home</a></li>
          <li><a href="#" v-scroll-to="'#components-cnt'">Concept</a></li>
          <li><a href="#" v-scroll-to="'#calendar-cnt'">Calendar</a></li>
          <li><a href="#" v-scroll-to="'#about-cnt'">About</a></li>
            
      </ul>
      <div class="menu-mobile-btn"  v-on:click="show">
          <svg id="btn" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 95.98 79.02"><path d="M16,35.36h9.19a20.79,20.79,0,0,0,12.22-4l2.12-1.54a20.07,20.07,0,0,1,23.27-.21l2.74,1.92a21.08,21.08,0,0,0,12.06,3.8h34.09" transform="translate(-15.95 -23.03)" class="menu-svg"/><path d="M16.23,68.67H27.92a21.18,21.18,0,0,0,7.87-1.51L43.86,64a19.59,19.59,0,0,1,14.37,0l8.3,3.25a21.64,21.64,0,0,0,7.83,1.48h37.56" transform="translate(-15.95 -23.03)" class="menu-svg"/><path d="M16,99.05h15a21.67,21.67,0,0,0,2.42-.13l11.72-1.31a54.6,54.6,0,0,1,11.92,0l12.33,1.34a21.43,21.43,0,0,0,2.27.12h40" transform="translate(-15.95 -23.03)" class="menu-svg"/></svg>
      </div>
      <div id="menu-mobile" class="hidden">
          <div class="close-button" v-on:click="hide">
              <span class="x-one">
              </span>
              <span class="x-two">
              </span>
          </div>
          <ul class="menu-mobile-entries">
            <li><a href="#"  v-on:click="hide" v-scroll-to="'#main-cnt'" >Home</a></li>
            <li><a href="#"  v-on:click="hide" v-scroll-to="'#concept-cnt'">Concept</a></li>
            <li><a href="#"  v-on:click="hide" v-scroll-to="'#calendar-cnt'">Calendar</a></li>
            <li><a href="#"  v-on:click="hide" v-scroll-to="'#about-cnt'">About</a></li>
          </ul>
      </div>
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
            if(scrollTop > 500) {
                element.style.height = 70 + "px"
            } else {
                element.style.height = 100 + "px"
            }
        },
        
        hide() {
            document.getElementById('menu-mobile').classList.add("hidden")
        },
        show() {
            document.getElementById('menu-mobile').classList.remove("hidden")
        }
    }
}
</script>

<style scoped>
    #header {
        position: fixed;
        width: 100vw;
        height: 100px;
        top: 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: horizontal;
        justify-content: space-between;
        align-items: center;
        z-index: 100;
        background-color: rgba(0, 0, 0, 0);
        transition: 0.2s;
    }

    .logo {
        font-size: 29px;
        margin-left: 40px;
        z-index: 100;
    }

    .menu {
        position: absolute;
        display: block;
        right: 60px;
    }

    .menu li {
        float: left;
    }

    a {
        display: block;
        text-decoration: none;
        color: white;
    }

    .menu a {
        margin-right: 48px;
    }

    .menu li:last-child a{
        margin-right: 0 !important
    }

    .menu-svg {
        fill:none;
        stroke:#ffffff;
        stroke-miterlimit:10;
        stroke-width: 8px;
        display: none;
    }

    #btn {
        height: 100%;
        padding: 3px;
    }

    .menu-mobile-btn {
        position: absolute;
        right: 10px;
        height: 30px;
        margin-top: -5px;
        cursor: pointer;
    }

    .close-button {
        position: relative;
        float: right;
        right: 30px;
        top: 47px;
        height: 30px;
        width: 30px;
        cursor: pointer;
        z-index: 100;
    }

    .close-button span {
        position: absolute;
        display: block;
        height: 4px;
        width: 100%;
        background: white;
        transform-origin: center;
    }

    .close-button span:nth-child(1) {
        transform: rotate(45deg);
    }

    .close-button span:nth-child(2) {
        transform: rotate(-45deg);
    }

    #menu-mobile {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: black;
        visibility: visible;
        opacity: 1;
        transition: 0.2s ease;
        z-index: 99;
    }

    .menu-mobile-entries {
        height: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        color: white;
    }

    .menu-mobile-entries ul {
        margin-top: 15px;
    }

    .menu-mobile-entries li {
        height: 70px;
        margin: 15px;
    }

    .menu-mobile-entries a {
        font-size: 35px;
    }

    .hidden {
        display: none;
        visibility: hidden;
        opacity: 0;
        transition: 0.2s ease;
    }


    /* MOBILE */

    @media screen and (max-width: 736px) {
        .logo {
            font-size: 23px;
            margin-left: 20px;
        }

        .menu-svg {
            display: block;
        }

        .menu {
            display: none;
        }
    }
</style>