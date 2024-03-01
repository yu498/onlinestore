<template>
  <Navbar></Navbar>
  <router-view></router-view>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/UserNavBar.vue';
import emitter from '@/methods/emitter';

export default {
  components: {
    Navbar,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {
  },
};
</script>
