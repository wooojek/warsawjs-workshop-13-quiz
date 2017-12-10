<template>
    <div class="answer" @click="highlight">
        <span>{{answer.content}}</span>
    </div>
</template>

<script>
    export default {
        name: "answer",
        props: [ 'answer' ],
        methods: {
            highlight (e) {
                this.$emit( 'handleAnswer', { id: this.answer.id } )
            }
        }
    }
</script>

<style scoped>
.answer {
    width: 350px;
    border: 3px solid #41B883;
    background-color: #41B883;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 15px;
}
</style>