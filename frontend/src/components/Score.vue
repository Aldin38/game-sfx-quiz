<template>
  <div class="p-4 text-white">
    <h1>SCORE</h1>
    <h3>{{currentScore}}/{{total}}</h3>
  </div>
</template>
<script>
export default {
  name: 'Score',
  computed: {
    currentScore() {
      return this.$store.state.score;
    },
    total() {
      return this.$store.state.totalQuestions;
    },
  },
};
</script>
