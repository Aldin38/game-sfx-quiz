<template>
  <div class="flex card flex-row justify-center items-end py-5">
    <PlayButton :id="id" />
    <div ref="inputField" :class="isCorrect ? 'correct-answer' : ''" class="relative rounded-lg right-8 bg-white flex">
      <form @submit.prevent="handleSubmit">
        <input :class="isCorrect ? 'text-green-600' : ''" class="h-6 ml-10 rounded-lg answer-input" v-model="input" :disabled="isDisabled ? true : false" placeholder="type name of the game.."/>
      </form>
    </div>
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
              const { inputField } = this.$refs;
              inputField.animate([
                {
                  transform: 'translate(1px, 1px) rotate(0deg)',
                  color: 'red',
                },
                { transform: 'translate(-1px, -2px) rotate(-1deg)' },
                { transform: 'translate(-3px, 0px) rotate(1deg)' },
                { transform: 'translate(3px, 2px) rotate(0deg)' },
                { transform: 'translate(1px, -1px) rotate(1deg)' },
                { transform: 'translate(-1px, 2px) rotate(-1deg)' },
                { transform: 'translate(-3px, 1px) rotate(0deg)' },
                { transform: 'translate(3px, 1px) rotate(-1deg)' },
                { transform: 'translate(-1px, -1px) rotate(1deg)' },
                { transform: 'translate(1px, 2px) rotate(0deg)' },
                { transform: 'translate(1px, -2px) rotate(-1deg)' },
              ],
              {
                easing: 'ease-out',
                duration: 500,
              });
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
      if (this.isCorrect || !this.$store.state.lives) {
        return true;
      }
      return false;
    },
  },
};
</script>
<style scoped>
.correct-answer {
  animation: correct 0.3s;
  animation-fill-mode: forwards;
}

@keyframes correct {
  0% {
    box-shadow: 1px 0px 0px -48px rgba(79,201,21,0.67);
    -webkit-box-shadow: 1px 0px 0px -48px rgba(79,201,21,0.67);
    -moz-box-shadow: 1px 0px 0px -48px rgba(79,201,21,0.67);
  }
  100% {
    box-shadow: 1px 0px 0px 2px rgba(79,201,21,0.67);
    -webkit-box-shadow: 1px 0px 0px 2px rgba(79,201,21,0.67);
    -moz-box-shadow: 1px 0px 0px 2px rgba(79,201,21,0.67);
  }
}
</style>
