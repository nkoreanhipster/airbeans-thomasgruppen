<template>
  <section>
    <span>/cart</span>
    <ul v-for="(item, index) in cartItems" :key="index">
      <li>
        <p>{{ item.title }}</p>
        <span>{{ item.price * item.quantity }}kr</span>
        <span> quantity:{{ item.quantity }}</span>
      </li>
    </ul>
    <p>total:{{ $store.getters.getCartTotalSum }}</p>

    <button @click="checkout">Take my money, i'm an stupidy</button>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "cart",
  data() {
    return {
      totalSum: 0,
    };
  },
  computed: {
    ...mapGetters({
      products: "getCartItems",
    }),
    cartItems() {
      let x = [];
      for (let item of this.products) {
        let i = x.findIndex((y) => y.id === item.id);
        if (i < 0) {
          x.push(item);
        } else {
          console.log("no thank you");
        }
      }
      return x;
    },
  },
  methods: {
    async checkout() {
      this.$store.dispatch("postOrder");
      this.$router.push({ name: "Status" });
    },
  },
};
</script>

<style>
</style>