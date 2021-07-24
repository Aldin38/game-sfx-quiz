<template>
  <div v-if="isOutOfLives" class="fixed h-screen w-screen flex justify-center items-center z-10 gradient">
    <h1 class="text-3xl text-red-400">game over screen</h1>
    <button @click="retry">retry</button>
  </div>
</template>
<script>
export default {
  name: 'GameOver',
  computed: {
    isOutOfLives() {
      return this.$store.state.lives <= 0;
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
