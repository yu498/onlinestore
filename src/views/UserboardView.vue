<template>
  <Navbar></Navbar>
  <router-view></router-view>
 <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/UserNavBar.vue';
import Footer from '@/components/UserFooter.vue';
import emitter from '@/methods/emitter';

export default {
  components: {
    Navbar,
    Footer,
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
