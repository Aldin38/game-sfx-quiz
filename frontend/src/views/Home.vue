<template>
  <div class="h-screen flex justify-start items-center flex-col gradient z-1">
    <h1 class="hero-title text-white text-5xl pb-12 pt-48 font-raleway">Game SFX <br>Quiz</h1>
    <router-link
      to="/questions"
      class="text-gray-900
            font-bold
            py-2
            px-10
            border-2
            rounded-2xl
            bg-white
            start"
    >Start
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
<style>
.hero-title {
  text-shadow: 2px 4px #000;
}

.start:hover {
box-shadow: 0px -1px 29px 0px rgba(255,255,255,1);
-webkit-box-shadow: 0px -1px 29px 0px rgba(255,255,255,1);
-moz-box-shadow: 0px -1px 29px 0px rgba(255,255,255,1);
}
</style>
