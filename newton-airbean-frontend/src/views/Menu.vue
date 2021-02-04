<template>
  <section>
    <i>/menu</i>
    <ul v-for="(item, index) in getMenuItems" :key="index">
      <li>{{ item }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  computed:{
    getMenuItems(){
      return this.$store.state.menuItems
    }
  },
  mounted(){
      this.$store.commit("loadMenu");
  },
};
</script>

<style>
</style>