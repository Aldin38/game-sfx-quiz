<template>
  <div class="rounded-full border-2 border-black flex self-start h-14 w-14 bg-white cursor-pointer z-2 playBtn" @click="handleClick">
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
      AudioPlayer.playAudio(this.id);
    },
  },
};
</script>
<style>
.playBtn {
  box-shadow: 10px 10px 23px -8px rgba(0,0,0,0.75);
  -webkit-box-shadow: 10px 10px 23px -8px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 23px -8px rgba(0,0,0,0.75);
}

.arrow-right {
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-left: 20px solid black;
}
</style>
