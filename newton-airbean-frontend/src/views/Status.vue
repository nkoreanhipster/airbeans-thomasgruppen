<template>
  <section>
    <i>/status</i>
    <span>
      <i>{{ getOrder.eta }}minuter</i>
      <i>Ordernummer:{{ getOrder.orderNr }}</i>
    </span>
  </section>
</template>

<script>
export default {
  computed: {
    getOrder() {
      return this.$store.getters.order;
    },
  },
};
</script>