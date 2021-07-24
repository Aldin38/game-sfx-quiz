<template>
  <div class="rounded-full border-2 border-black flex h-14 w-14 bg-white cursor-pointer" ref="playBtn" @click="handleClick">
    <div class="arrow-right self-center justify-center my-0 mx-auto relative left-1"></div>
  </div>
</template>
<script>
export default {
  name: 'PlayButton',
  props: {
    id: String,
  },
  methods: {
    handleClick() {
      this.$refs.playBtn.blur();
      this.audioPlayer().playAudio(this.id);
    },
    handlePlayError(error) {
      if (error instanceof DOMException && error.message.indexOf('pause()') > -1) {
        // Double clicked audio, pause() interferes with play()
        console.error(error);
        return;
      }
      console.log('Network error: No response. Try again.');
    },
    audioPlayer() {
      let sound = new Audio();

      const playAudio = (id) => {
        sound.pause();
        sound = new Audio(`/api/sounds/${id}.mp3`);
        sound.volume = 0.7;
        sound.play().catch(this.handlePlayError);
      };

      return {
        playAudio,
      };
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
