<template>
  <nav class="navigation">
    <!-- Cover modal -->
    <div v-if="showMenu" class="large">
      <router-link to="/menu">Meny</router-link>
      <router-link to="/about">Vårt kaffe</router-link>
      <router-link to="/profile">Min profil</router-link>
      <router-link to="/status">Orderstatus</router-link>
      <button class="hamburger-circle" @click="showMenu=!showMenu">
          <img src="~@/assets/close.svg" alt="Navigate" />
        </button>
      <div>
        <router-link to="/cart">Kassa({{ numberOfItemsInCart }})</router-link>
      </div>
    </div>
    <!-- Top small -->
    <div v-else class="small">
        <button class="hamburger-circle" @click="showMenu=!showMenu">
          <img src="~@/assets/navicon.svg" alt="Navigate" />
        </button>
        <router-link to="/cart"
          >
          <div class="round-button relative">
            <div class="red-round-circle top-right absolute center-text">
            {{ numberOfItemsInCart }}
            </div>
          </div>
        </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      cartItemCount: -1,
      showMenu: false,
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