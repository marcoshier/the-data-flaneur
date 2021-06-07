<template>
  <div id="footer">
      <div class="with-love">◍ with love.</div>
      <div class="quick-links">
        <div class="footer-column">
            <a class="footer-column-main">Sitemap</a>
            <a v-scroll-to="'#main-cnt'" class="footer-column-link">Main</a>
            <a v-scroll-to="'#concept-cnt'" class="footer-column-link">Concept</a>
            <a v-scroll-to="'#calendar-cnt'" class="footer-column-link">Calendar</a>
            <a v-scroll-to="'#about-cnt'" class="footer-column-link">About us</a>
        </div>
        <div class="footer-column">
            <a class="footer-column-main">Social</a>
            <a class="footer-column-link">Instagram</a>
            <a class="footer-column-link">Notion</a>
            <a class="footer-column-link">Vimeo</a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>

#footer {
    height: 80vh;
    width: 100vw;
    padding: 0 10% 10% 10% ;
    box-sizing: border-box;
    background: rgb(231, 231, 231);
    margin-top: 130px;
}

.with-love {
    color: black;
    font-weight: 400;
    font-size: 18px;
    padding: 80px 40px 40px 40px;
}

.quick-links {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-row-gap: 0;
    grid-column-gap: 130px;
    margin-top: 60px;
}

.footer-column {
    display: flex;
    flex-direction:  column;
    cursor: pointer;
}

a {
    text-decoration: none;
    color: grey;
    padding: 8px 0;
}

a:hover {
    text-decoration: underline;
}

.footer-column-main {
    color: black;
    font-size: 19px;
    font-weight: 400;
}

.footer-column {
    color: grey;
    font-size: 16px;
    font-weight: 300;
    padding: 0 40px;
}

@media screen and (max-width: 736px) {
.quick-links {
    grid-column-gap: 10px;
}

#footer {
    padding: 0 10% 10% 3% ;
}

}


</style>