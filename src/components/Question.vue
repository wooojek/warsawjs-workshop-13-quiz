<template>
    <div class="question">
        <p>{{ question.title }}</p>
        <answer v-for="(answer, index) in question.answers" :answer="answer" :key="index"
                @handleAnswer="selectAnswer"></answer>
        <gamemaster></gamemaster>
        <thresholds-list></thresholds-list>
        <lifelines></lifelines>
    </div>
</template>

<script>
    import Answer from '@/components/Answer';
    import Gamemaster from '@/components/Gamemaster';
    import ThresholdsList from '@/components/ThresholdsList';
    import Lifelines from '@/components/Lifelines';

    export default {
        name: "question",
        props: ['question'],
        components: {
            Answer,
            Gamemaster,
            ThresholdsList,
            Lifelines
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
        border-radius: 10px;
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        margin: 15px;
        padding: 15px 0;
    }

    .question div {
        max-width: 50%;
        cursor: pointer;
    }
</style>