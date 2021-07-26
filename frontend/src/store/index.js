import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    questions: [],
    totalQuestions: null,
    lives: 3,
    won: null,
    score: 0,
  },
  mutations: {
    setFetchedQuestions(state, questions) {
      state.questions = questions;
      state.totalQuestions = state.questions.length;
    },
    removeLife(state) {
      state.lives -= 1;
      if (state.lives <= 0) {
        state.lives = 0;
        state.won = false;
      }
    },
    incrementScore(state) {
      state.score += 1;

      if (state.score >= state.totalQuestions) {
        state.won = true;
      }
    },
  },
  actions: {
    fetchQuestions({ commit }) {
      axios.get('/api/sounds')
        .then((res) => {
          commit('setFetchedQuestions', res.data);
        })
        .catch((error) => {
          console.log(error.statusText);
        });
    },
  },
  modules: {
  },
});
