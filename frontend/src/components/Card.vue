<template>
  <div class="flex card flex-row justify-center items-center py-5">
    <PlayButton :id="id" />
    <form class="self-end" @submit.prevent="handleSubmit">
      <input class="h-6 relative right-5 rounded self-end answer-input" v-model="input" :disabled="isDisabled ? true : false" placeholder="type name of the game.."/>
    </form>
  </div>
</template>
<script>
import PlayButton from '@/components/PlayButton.vue';
import axios from 'axios';

export default {
  name: 'Card',
  components: {
    PlayButton,
  },
  props: {
    id: String,
  },
  data() {
    return {
      input: '',
      isCorrect: null,
    };
  },
  methods: {
    handleSubmit() {
      if (this.input.length >= 1) {
        axios.post(`/api/sounds/${this.id}/answer`, { answer: this.input })
          .then((res) => {
            this.isCorrect = res.data.success;
            if (!this.isCorrect) {
              this.$store.commit('removeLife');
            } else {
              this.$store.commit('incrementScore');
              this.input = res.data.answer.game;
            }
          })
          .catch((err) => console.log(err));
      }
    },
  },
  computed: {
    isDisabled() {
      if (this.isCorrect) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style scoped>
.answer-input:disabled {
  background-color: #fff;
  color: #0f0;
}
</style>
