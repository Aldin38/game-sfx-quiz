import { createStore } from 'vuex';

export default createStore({
  state: {
    lives: 3,
    score: 0,
  },
  mutations: {
    removeLife(state) {
      state.lives -= 1;
      console.log(state.lives);
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
