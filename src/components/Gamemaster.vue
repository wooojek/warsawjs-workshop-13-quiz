<template>
    <div :class="'gamemaster ' + changeStatus">
        <div v-if="state===1">
            <p>Are you sure?</p>
            <button @click="accept">Tak</button>
        </div>
        <div v-if="state===2">
            <p>Continue?</p>
            <button @click="moveNext">Tak</button>
        </div>
    </div>
</template>

<script>
    import checker from '../assets/validation.js';

    export default {
        name: "gamemaster",
        computed: {
            question(){
                return this.$store.state.currentQuestion;
            },
            state() {
                return this.$store.state.questionPhase;
            },
            changeStatus() {
                if (this.$store.state.questionPhase === 1) {
                    return 'player-selected';
                } else if (this.$store.state.questionPhase === 2) {
                    if (this.$store.state.currentQuestion.correct) {
                        return 'player-succeed';
                    } else {
                        return 'player-failed';
                    }
                } else {
                    return;
                }
            }
        },
        methods: {
            accept() {
                this.$store.dispatch('answerQuestion', checker(this.question.questionId, this.question.answerId));
            },
            moveNext() {
                if(this.$store.state.currentQuestion.correct || this.$store.state.infinite) {
                    this.$store.dispatch('moveNext');
                } else {
                    this.$router.push('/finish');
                }
                return;
            }
        }
    }
</script>

<style scoped>
    .gamemaster {
        display: none;
        position: fixed;
        top: 50%;
        right: 30px;
        height: 250px;
        width: 200px;
        border-radius: 20px;
    }

    .gamemaster div {
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: #41B883;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    .gamemaster p {
        margin: 0;
    }

    .player-selected, .player-succeed, .player-failed {
        display: block;
    }

    .player-selected {
        background-image: url("http://bit.ly/2CdD74n");
        background-position: center;
        background-size: cover;
    }
    .player-succeed {
        background-position: left;
        background-size: cover;
        background-image: url("http://read.bi/2hlfNwg");
    }
    .player-failed {
        background-image: url("http://bit.ly/2BjqDun");
        background-size: cover;
        background-position: center;
    }
</style>