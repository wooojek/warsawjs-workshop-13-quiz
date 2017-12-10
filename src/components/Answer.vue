<template>
    <div :class="'answer ' + answerStatus" @click="highlight">
        <span>{{answer.content}}</span>
    </div>
</template>

<script>
    export default {
        name: "answer",
        props: ['answer'],
        computed: {
            highlighted() {
                return this.$store.state.currentQuestion.answerId;
            },
            answerStatus() {
                if ( this.$store.state.questionPhase === 1 && this.answer.id === this.$store.state.currentQuestion.answerId) {
                    return 'selected';
                }
                if( this.$store.state.questionPhase === 2 ) {
                    if (this.answer.id === this.$store.state.currentQuestion.answerId) {
                        if (this.$store.state.currentQuestion.correct) {
                            return 'correct-answer';
                        } else {
                            return 'wrong-answer';
                        }
                    }
                }
                return null;
            }
        },
        methods: {
            highlight(e) {
                this.$emit('handleAnswer', {id: this.answer.id})
            }
        }
    }
</script>

<style scoped>
    .answer {
        width: 350px;
        border: 3px solid #41B883;
        border-radius: 10px;
        background-color: #41B883;
        color: #fff;
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        margin: 15px;
    }

    .selected {
        background-color: #F2C078;
    }

    .wrong-answer {
        background-color: #E84855;
    }

    .correct-answer {
        background-color: #6CC551;
    }
</style>