<template>
    <div class="finish">
        <p>WOW! It's over! Your score: {{getHistory.correct }} / {{ getHistory.sum }}</p>
        <button @click="goHome">Go home</button>
    </div>
</template>

<script>
    export default {
        name: "finish",
        data() {
            return {
                score: '2/10' ///fake data
            }
        },
        computed: {
            getHistory() {
                let correctCounter = 0;
                let arrayCorrect = this.$store.state.answersHistory.filter(item => item.correct ? correctCounter++ : null);
                return {
                    correct: correctCounter,
                    sum: this.$store.state.totalQuestions
                };
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