<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
export default {
  data(){
    return {

    }
  },
  components: { Navigation },
};
</script>

<style lang="scss">

@import "@/styles/global.scss";
</style>
