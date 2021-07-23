<template class="bg-black">
  <div class="home bg-gray-900 min-h-screen relative z-0">
    <div class="wallpaper min-h-screen w-full fixed -z-1 opacity-40"></div>
  <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wallpaper {
  background-size: cover;
   filter: grayscale(50%) blur(2px);
  background-image: url('static/media/background.jpg');
}

.gradient {
  background: rgb(0,0,32);
  background: linear-gradient(0deg, rgba(0,0,32,0.8) 0%, rgba(9,9,121,0) 50%);
}
</style>
