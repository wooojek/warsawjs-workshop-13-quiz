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
            state.questionPhase = 1;
            state.currentQuestion = questionData;
        },
        finishedQuestion (state, questionData) {
            state.questionPhase = 2;
            state.answersHistory.push( questionData );
        },
        resetQuestion (state, questionData) {
            state.questionPhase = 0;
            state.currentQuestion = {};
        }
    },
    actions: {
        updateUserName ({ commit }, payload) {
            commit('setName', payload);
        },
        updateCurrentAnswer ({ commit }, questionData) {
            commit('updateCurrentQuestion', questionData);
        }
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {App}
});
