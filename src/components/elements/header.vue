<template>
  <div id="header">
      <div class="logo">The Data Flâneur</div>
      <ul class="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Concept</a></li>
          <li><a href="#">Calendar</a></li>
          <li><a href="#">About</a></li>
            
      </ul>
  </div>
</template>

<script>
export default {
    name: 'Header'

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
        background: black;
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