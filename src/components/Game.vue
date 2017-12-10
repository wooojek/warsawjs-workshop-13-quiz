<template>
    <div>
        <question :question="actualQuestion"></question>
    </div>
</template>

<script>
    import Question from '@/components/Question';

    export default {
        name: "game",
        components: {
            Question
        },
        data() {
            return {
                questionsList: [
                    {
                        id: 1,
                        title: "best car?",
                        answers: [{
                            id: 1,
                            content: "ford",
                            correct: false
                        }, {
                            id: 2,
                            content: "fiat",
                            correct: false
                        }, {
                            id: 3,
                            content: "tesla",
                            correct: false
                        }, {
                            id: 4,
                            content: "GM",
                            correct: true
                        }

                        ]
                    }]
            }
        },
        computed: {
            actualQuestion() {
                return this.questionsList[ 0 ]
            }
        }
    }
</script>

<style scoped>

</style>