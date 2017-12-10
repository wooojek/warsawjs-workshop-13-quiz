<template>
    <div class="question">
        <p>{{ question.title }}</p>
        <answer v-for="(answer, index) in question.answers" :answer="answer" :key="index"
                @handleAnswer="selectAnswer"></answer>
    </div>
</template>

<script>
    import Answer from '@/components/Answer';

    export default {
        name: "question",
        props: ['question'],
        components: {
            Answer
        },
        methods: {
            selectAnswer(answerData) {
                this.$store.dispatch( 'updateCurrentAnswer', { questionId: this.question.id, answerId: answerData.id })
            }
        }
    }
</script>

<style scoped>
    .question {
        margin: 50px auto 0;
        max-width: 800px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .question p {
        width: 100%;
        border: 3px solid #41B883;
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        margin: 15px;
    }

    .question div {
        max-width: 50%;
    }
</style>