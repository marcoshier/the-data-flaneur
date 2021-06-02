<template>
    <div id="profile">
        <div class="pic">
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
        pic: String,
        name: String,
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
    background: white;
    margin-bottom: 40px;
}

.name {
    font-size: 25px;
    text-align: center;
}

</style>