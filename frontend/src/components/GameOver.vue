<template>
  <div>
    <div v-if="won !== null && won !== true" class="fixed h-screen w-screen flex flex-col justify-center items-center z-10 gradient">
      <h1 class="text-3xl text-red-400">Game Over!</h1>
      <h2 class="text-white">With a score of {{ score }} out of {{ total }}</h2>
      <button class="text-white" @click="retry">retry</button>
    </div>
    <div v-if="won === true" class="fixed h-screen w-screen flex flex-col justify-center items-center z-10 gradient">
      <h1 class="text-3xl text-red-400">YOU WON!</h1>
      <h2 class="text-white">With a score of {{ score }} out of {{ total }}</h2>
      <button class="text-white" @click="retry">retry</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'GameOver',
  computed: {
    score() {
      return this.$store.state.score;
    },
    total() {
      return this.$store.state.totalQuestions;
    },
    isOutOfLives() {
      return this.$store.state.lives <= 0;
    },
    won() {
      return this.$store.state.won;
    },
    retry() {
      return this.$router.go(this.$router.currentRoute);
    },
  },
};
</script>
<style scoped>
.gradient {
  background: rgb(0,0,32,1);
  background: linear-gradient(0deg, rgba(0,0,32,0.8) 0%, rgba(9,9,121,0) 70%);
}
</style>
