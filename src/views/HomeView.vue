<template>
    <HelloWorld/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  created() {
    console.log(process.env.VUE_APP_PATH);
  },
};
</script>
