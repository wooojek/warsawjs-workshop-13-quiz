// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
// import VueResource from 'vue-resource';
import App from './App';
import router from './router';
import { countQuestions, data as questions} from './assets/validation.js';

Vue.config.productionTip = false;
Vue.use(Vuex);
// Vue.use(VueResource);

const store = new Vuex.Store({
    state: {
        userName: '',
        maxQuestion: countQuestions() - 1,
        questionIndex: 0,
        questionPhase: 0, // 0 - waiting, 1 - highlighted, 2 - answered
        currentQuestion: {},
        answersHistory: [],
        totalQuestions: countQuestions(),
        questionsList: questions,
        won:false,
        infinite:false,
        lifelines: true,
        lifelinesOpened: false,
    },
    mutations: {
        setName(state, payload) {
            state.userName = payload.userName;
        },
        updateCurrentQuestion(state, questionData) {
            if (state.questionPhase !== 2) {
                state.questionPhase = 1;
                state.currentQuestion = questionData;
            }
        },
        finishedQuestion(state, correct) {
            state.questionPhase = 2;
            state.currentQuestion.correct = correct;
            state.answersHistory.push(state.currentQuestion);
        },
        nextQuestion(state) {
            if (state.questionIndex < state.maxQuestion) {
                state.questionPhase = 0;
                state.currentQuestion = {};
                state.questionIndex++;
            } else {
                state.won=true;
                Quiz.$router.push('/finish');
            }
        },
        safeGame(state) {
            state.infinite = true;
        },
        getinfo(state, info) {
            state.questions = info;
        },
        disablePublicVote(state) {
            state.lifelines = false;
            state.lifelinesOpened = true;
        },
        resetState(state) {
            state.userName = '';
            state.maxQuestion = countQuestions() - 1;
            state.questionIndex = 0;
            state.questionPhase = 0; // 0 - waiting, 1 - highlighted, 2 - answered
            state.currentQuestion = {};
            state.answersHistory = [];
            state.infinite = false;
            state.lifelines = true;
            state.lifelinesOpened = false;
        }
    },
    actions: {
        updateUserName({commit}, payload) {
            commit('setName', payload);
        },
        changeGameToSafe({commit}) {
            commit('safeGame');
        },
        updateCurrentAnswer({commit}, questionData) {
            commit('updateCurrentQuestion', questionData);
        },
        answerQuestion({commit}, correct) {
            commit('finishedQuestion', correct);
        },
        moveNext({commit}) {
            commit('nextQuestion');
        },
        safeGame({commit}) {
          commit('safeGame');
        },
        reset({commit}) {
            commit('resetState');
        },
        getinfo({commit}, info) {
            commit('getinfo', info);
        },
        usePublicVote({commit}) {
            commit('disablePublicVote')
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
