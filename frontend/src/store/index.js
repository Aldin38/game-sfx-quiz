import { createStore } from 'vuex';

export default createStore({
  state: {
    lives: 3,
    score: 0,
  },
  mutations: {
    removeLife(state) {
      state.lives -= 1;
      if (state.lives <= 0) {
        state.lives = 0;
      }
    },
    incrementScore(state) {
      state.score += 1;
    },
  },
  actions: {
  },
  modules: {
  },
});
