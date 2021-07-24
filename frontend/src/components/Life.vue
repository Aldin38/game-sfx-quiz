<template>
<div class="flex flex-row">
  <svg v-for="n in parseInt(lives)" :key="n" class="heart m-2" viewBox="0 0 32 29.6">
    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
  </svg>
</div>
</template>
<script>
export default {
  name: 'Life',
  computed: {
    lives() {
      return this.$store.state.lives;
    },
  },
};
</script>
<style>
.heart {
  fill: red;
  position: relative;
  top: 5px;
  width: 50px;
  animation: pulse 1s ease infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}
</style>
