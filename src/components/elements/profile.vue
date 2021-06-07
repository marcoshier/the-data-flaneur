<template>
    <div id="profile">
        <div class="pic">
            <img :src="imageSource" />
        </div>
        <div class="name">
            {{ name }}
        </div>
    </div>
  
</template>

<script>
export default {
    name: 'Profile',
    props: {
        name: String,
    },
    computed: {
        imageSource() {
            return require("../../assets/" + this.name.toLowerCase() + ".png")
        }
    }
}
</script>

<style>
#profile {
    padding: 70px;
}

.pic {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: none;
    margin-bottom: 40px;
    overflow: hidden;
}

.pic img {
    width: 200px;
    height: 200px;
}

.name {
    font-size: 25px;
    text-align: center;
}

</style>