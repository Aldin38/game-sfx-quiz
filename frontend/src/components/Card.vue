<template>
  <div class="flex card flex-row justify-center items-center py-5">
    <PlayButton />
    <input class="h-6 relative right-5 rounded self-end" v-model="input" placeholder="type name of the game.."/>
  </div>
</template>
<script>
import PlayButton from '@/components/PlayButton.vue';

export default {
  name: 'Card',
  components: {
    PlayButton,
  },
  data() {
    return {
      input: '',
    };
  },
};
</script>
