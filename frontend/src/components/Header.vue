<template>
  <div v-if="won !== true && won !== false" class="mb-5 fixed z-10 flex justify-between w-screen">
    <Life />
    <Score />
  </div>
</template>
<script>
import Life from '@/components/Life.vue';
import Score from '@/components/Score.vue';

export default {
  name: 'Header',
  components: {
    Life,
    Score,
  },
  computed: {
    won() {
      return this.$store.state.won;
    },
  },
};
</script>
<style>
</style>
