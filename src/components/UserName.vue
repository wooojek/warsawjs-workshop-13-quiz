<template>
    <div class="user-name--input">
        <input id="userName" v-model="userName" :placeholder="placeholder"/>
        <p>Gracz: <span>{{ userName }}</span></p>
        <input type="submit" @click="startQuiz" :value="buttonText">
    </div>
</template>

<script>
    export default {
        name: "user-name",
        data() {
            return {
                placeholder: 'Your name',
                userName: '',
                buttonText: `Play!`
            }
        },
        computed: {

        },
        methods: {
            startQuiz (e) {
                e.preventDefault();
                let userNameInput = document.getElementById('userName');
                if (this.userName === '') {
                    userNameInput.style.borderColor = 'red';
                    setTimeout(function () {
                        userNameInput.style.borderColor = '#41B883';
                    }, 5000);
                } else {
                    userNameInput.style.borderColor = '#41B883';
                    this.$router.push('/quiz');
                    this.$store.dispatch('updateUserName', { userName: this.userName });
                }
            }
        }
    }
</script>

<style scoped>
.user-name--input {
}
.user-name--input span {
    font-weight: 700;
    font-size: 18px;
}
.user-name--input input {
    border-radius: 5px;
    padding: 10px 20px;
    border-color: #41B883;
}
.user-name--input input[type='submit'] {
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