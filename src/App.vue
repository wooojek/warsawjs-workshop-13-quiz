<template>
    <div id="app">
        <img class="master-image" src="http://bit.ly/2AkuKCG">
        <router-view/>
    </div>
</template>

<script>

    export default {
        name: 'app',
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    #app .master-image {
        height: 300px;
        border-radius: 10px;
    }
</style>
