<template>
  <main class="bg-green is-fullsize">
    <section>
      <img src="~@/assets/airbean-landing.svg" alt="bajs" />
    </section>
  </main>
</template>

<script>
export default {
  mounted() {
      
    setTimeout(() => {
      this.$router.push({ name: "Menu" });
    }, 2500);
  },
};
</script>

<style lang="scss" scoped>
main {
  background-image: url("~@/assets/intro-graphic-left.svg"),
    url("~@/assets/intro-graphic-right.svg");
  background-repeat: no-repeat;
  background-position: left, right;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>