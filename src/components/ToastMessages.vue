<template>
  <div class="toast-container position-absolute pe-3 top-0 end-0">
    <ToastList v-for="(msg, key) in messages" :key="key" :msg="msg"></ToastList>
  </div>
</template>

<script>
import ToastList from './ToastList.vue';

export default {
  components: { ToastList },
  data() {
    return {
      messages: [],
    };
  },
  inject: ['emitter'],
  mounted() {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message;
      this.messages.push({ style, title, content });
    });
  },
};
</script>
