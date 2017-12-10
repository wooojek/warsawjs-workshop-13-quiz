<template>
    <div class="about-us">
        <h1>About Us</h1>
        <img src="http://bit.ly/2As3pms" alt="about-us image">
        <h3>{{ aboutText }}</h3>
    </div>
</template>

<script>
    export default {
        name: "about-us",
        data() {
            return {
                aboutText: 'You don\'t talk about Quiz Club'
            }
        }
    }
</script>

<style scoped>
    .about-us {
        position: fixed;
        top: 30px;
        right: 30px;
    }

    .about-us img {
        border-radius: 10px;
        height: 250px;
    }
</style>