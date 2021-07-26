<template>
  <div>
    <div class="radial-gradient fixed h-screen w-screen"></div>
    <Header />
    <GameOver />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-24 xl:grid-cols-4">
      <Card v-for="item in questions" :key="item.order" :id="item.id" />
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Card from '@/components/Card.vue';
import GameOver from '@/components/GameOver.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Card,
    GameOver,
  },
  created() {
    this.$store.dispatch('fetchQuestions');
  },
  computed: {
    questions() {
      return this.$store.state.questions;
    },
  },
};
</script>
<style scoped>
.radial-gradient {
  background: rgb(0,0,32);
  background: radial-gradient(circle, rgba(0,0,32,0) 0%, rgba(9,9,121,0.3) 80%);
}
</style>
