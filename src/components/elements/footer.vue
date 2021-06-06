<template>
  <div id="footer">
      <div class="with-love">◍ with love.</div>
      <div class="quick-links">
        <div class="footer-column">
            <p class="footer-column-main">Sitemap</p>
            <p class="footer-column-link">Main</p>
            <p class="footer-column-link">Concept</p>
            <p class="footer-column-link">Calendar</p>
            <p class="footer-column-link">About us</p>
        </div>
        <div class="footer-column">
            <p class="footer-column-main">Social</p>
            <p class="footer-column-link">Instagram</p>
            <p class="footer-column-link">Notion</p>
            <p class="footer-column-link">Vimeo</p>
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
}

p {
    padding: 8px 0;
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