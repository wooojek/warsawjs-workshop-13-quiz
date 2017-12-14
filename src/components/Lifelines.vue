<template>
    <div v-if="lifelinesAvailable" class="lifelines">
        <div v-if="!state">
            <div class="public-vote" @click="checkPublicVote">Public Vote</div>
        </div>
        <div v-if="state">
            <div class="votes" v-for="(answer, index) in publicVotesAmount" :style="answer.style" :key="index"><span>{{ answer.content }} - {{ answer.publicVotes }}%</span></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "lifelines",
        data() {
            return {
                currentQuestion: this.$store.state.questionsList[this.$store.state.questionIndex],
                publicVotesPercentage: 100
            }
        },
        computed: {
            state() {
                return this.$store.state.lifelinesOpened;
            },
            publicVotesAmount() {
                let votesArray = [];
                let currentAnswers = this.$store.state.questionsList[this.$store.state.questionIndex];
                currentAnswers.answers.forEach(item => votesArray.push({
                    correct: item.correct,
                    content: item.content
                }));
                votesArray.forEach(item => {
                    let votes = 0;
                    if (item.correct) {
                        votes = Math.floor(Math.floor(Math.random() * this.publicVotesPercentage)*0.9);
                    } else {
                        votes = Math.floor(Math.floor(Math.random() * this.publicVotesPercentage)*0.6);
                    }
                    this.publicVotesPercentage -= votes;
                    item.publicVotes = votes;
                    item.style = `width: ${votes}%`
                });

                return votesArray;
            },
            lifelinesAvailable() {
                return this.$store.state.lifelines;
            }
        },
        methods: {
            checkPublicVote() {
                if(this.$store.state.phase <= 1) {
                    this.$store.dispatch('usePublicVote');
                }
            }
        }
    }
</script>

<style scoped>
    .lifelines {
        max-width: 500px;
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 0);
        font-weight: 800;
        color: black;
    }
    .lifelines > div {
        width: 600px;
        height: 160px;
        background-color: transparent;
    }
    .votes {
        background-color: #41B883;
        height: 30px;
        color: black;
        position: relative;
        border-bottom: 1px solid black;
    }
    .votes span {
        text-align: right;
        width: 400px;
        position: absolute;
        left: 15px;
        top: 50%;
        transform: translate(0, -50%);
    }
    .public-vote {
        border: 1px solid #41B883;
        padding: 10px 20px;
    }
</style>