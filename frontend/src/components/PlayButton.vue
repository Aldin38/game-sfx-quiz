<template>
  <div class="rounded-full border-2 border-black flex h-14 w-14 bg-white cursor-pointer" ref="playBtn" @click="handleClick">
    <div class="arrow-right self-center justify-center my-0 mx-auto relative left-1"></div>
  </div>
</template>
<script>
import AudioPlayer from '../assets/scripts/AudioPLayer';

export default {
  name: 'PlayButton',
  props: {
    id: String,
  },
  methods: {
    handleClick() {
      this.$refs.playBtn.blur();
      AudioPlayer.playAudio(this.id);
    },
  },
};
</script>
<style>
.arrow-right {
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 20px solid black;
}
</style>
