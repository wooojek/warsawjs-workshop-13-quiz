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
        computed: {
            actualQuestion() {
                return this.$store.state.questionsList[ this.$store.state.questionIndex ];
            }
        }
    }
</script>

<style scoped>

</style>