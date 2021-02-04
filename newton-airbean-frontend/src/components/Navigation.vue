<template>
  <nav>
    <!-- Top small -->
    <div>
        
    </div>
    <!-- Cover modal -->
    <div class="modal">
      <router-link to="/menu">Meny</router-link>
      <router-link to="/about">Vårt kaffe</router-link>
      <router-link to="/profile">Min profil</router-link>
      <router-link to="/status">Orderstatus</router-link>
      <div>
        <router-link to="/cart">Kassa({{ numberOfItemsInCart }})</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      cartItemCount: -1,
    };
  },
  computed: {
    numberOfItemsInCart() {
      return this.$store.getters.getCartTotalItemCount;
    },
  },
  methods: {
    goToCartPage() {
      this.$router.push({ path: "/cart" });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>