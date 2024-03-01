<template>
    <NavBar/>
    <HomeMode/>
</template>

<script>
// @ is an alias to /src
import HomeMode from '@/components/HomeMode.vue';
import NavBar from '@/components/UserNavBar.vue';

export default {
  name: 'HomeView',
  components: {
    HomeMode,
    NavBar,
  },
  created() {
    console.log(process.env.VUE_APP_PATH);
  },
};
</script>
