<template>
  <ToastMessages></ToastMessages>
  <Navbar></Navbar>
  <router-view></router-view>
 <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/UserNavBar.vue';
import Footer from '@/components/UserFooter.vue';
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';

export default {
  components: {
    Navbar,
    Footer,
    ToastMessages,
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
