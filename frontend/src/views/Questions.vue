<template>
  <Header />
  <div class="grid grid-cols-1 md:grid-cols-3 pt-24 xl:grid-cols-4">
    <Card v-for="item in questions" :key="item.order" :id="item.id" />
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Card from '@/components/Card.vue';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Header,
    Card,
  },
  data() {
    return {
      questions: [],
    };
  },
  created() {
    axios.get('/api/sounds')
      .then((res) => {
        this.questions = res.data;
      });
  },
};
</script>
