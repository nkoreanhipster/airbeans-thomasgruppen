<template>
  <section>
    <i>/menu</i>
    <ul v-for="(item, index) in getMenuItems" :key="index">
      <li>
        <button @click="addToCart(item)">+</button>
        <span>{{ item }}</span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    getMenuItems() {
      return this.$store.getters.getMenuItems;
    },
  },
  methods:{
    addToCart(item){
      this.$store.commit("assToCart", item);
    }
  },
  async created() {
    this.$store.commit("loadMenu");
  },
};
</script>

<style>
</style>