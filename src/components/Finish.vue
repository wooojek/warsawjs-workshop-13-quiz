<template>
    <div class="finish">
        <p>WOW! To już koniec! Twój wynik: {{getHistory}}</p>
        <button @click="goHome">Go home</button>
    </div>
</template>

<script>
    export default {
        name: "finish",
        data() {
            return {
                score: '2/10'
            }
        },
        computed: {
            getHistory() {
                return this.$store.state.answersHistory;
            }
        },
        methods: {
            goHome() {
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>
    .finish button {
        border-color: #41B883;
        border-radius: 5px;
        background-color: #41B883;
        padding: 10px 20px;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
        color: #fff;
    }
</style>