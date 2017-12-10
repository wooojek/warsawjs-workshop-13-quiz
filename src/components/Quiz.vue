<template>
    <div class="quiz">
        <h1>{{ msg }}</h1>
        <about-us></about-us>
        <user-name></user-name>
    </div>
</template>

<script>
    import UserName from '@/components/UserName';
    import AboutUs from '@/components/AboutUs';

    export default {
        name: 'Quiz',
        data() {
            return {
                msg: 'I want to play a game'
            }
        },
        components: {
            UserName,
            AboutUs
        },
        mounted() {
            this.$store.dispatch('reset');
        }
    }
</script>
