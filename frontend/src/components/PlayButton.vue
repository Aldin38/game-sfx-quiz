<template>
  <div class="rounded-full border-2 border-black flex h-14 w-14 bg-white cursor-pointer">
    <div class="arrow-right self-center justify-center my-0 mx-auto relative left-1"></div>
  </div>
</template>
<script>
export default {
  name: 'PlayButton',
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
