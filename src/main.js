// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userName: '',
        maxQuestion: 1,
        questionIndex: 0,
        questionPhase: 0, // 0 - waiting, 1 - highlighted, 2 - answered
        currentQuestion: {},
        answersHistory: []
    },
    mutations: {
        setName (state, payload) {
            state.userName = payload.userName;
        },
        updateCurrentQuestion (state, questionData) {
            if (state.questionPhase !== 2) {
                state.questionPhase = 1;
                state.currentQuestion = questionData;
            }
        },
        finishedQuestion (state, correct) {
            state.questionPhase = 2;
            state.currentQuestion.correct = correct;
            state.answersHistory.push( correct );
        },
        nextQuestion (state) {
            if (state.questionIndex < state.maxQuestion) {
                state.questionPhase = 0;
                state.currentQuestion = {};
                state.questionIndex++;
            } else {
                Quiz.$router.push('/finish');
            }
        }
    },
    actions: {
        updateUserName ({ commit }, payload) {
            commit('setName', payload);
        },
        updateCurrentAnswer ({ commit }, questionData) {
            commit('updateCurrentQuestion', questionData);
        },
        answerQuestion ({commit}, correct) {
            commit('finishedQuestion', correct);
        },
        moveNext({commit} ) {
            commit('nextQuestion');
        }
    }
});

/* eslint-disable no-new */
let Quiz = new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
});
