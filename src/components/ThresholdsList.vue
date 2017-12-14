<template>
    <ul class="thresholds">
        <li>Thresholds Progress:</li>
        <li v-for="(question, index) in thresholds" :class="thresholdStatus[index]" :key="index">{{ question.threshold }}</li>
    </ul>
</template>

<script>
    export default {
        name: "thresholds-list",
        data() {
            return {
                thresholds: this.$store.state.questionsList.filter(item => item.threshold).reverse(),
                totalQuestions: this.$store.state.totalQuestions - 1
            }
        },
        computed: {
            thresholdStatus() {
                let thresholdStatusArray = [];
                this.$store.state.answersHistory.forEach((answer, index) => {
                    answer.correct ? thresholdStatusArray[this.totalQuestions - index] = 'successAnswer' : 'wrongAnswer';
                });
                return thresholdStatusArray;
            }
        }
    }
</script>

<style scoped>
    .thresholds {
       position: fixed;
        left: 0;
        top: 25%;
        list-style: none;
    }

    .thresholds li {
        font-weight: 800;
    }

    .thresholds li.successAnswer {
        color: #41B883;
    }
    .thresholds li.wrongAnswer {
        color: #E84855;
    }
</style>