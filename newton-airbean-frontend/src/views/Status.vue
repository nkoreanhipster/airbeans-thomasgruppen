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
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      orders: "orders",
    }),
    getOrder() {
      let item = {eta:-1,orderNr:-1111};
      let i = 0;
      for (let order of this.orders) {
        item = order;
        console.log({item})
        if (i > 0) break;
        i++;
      }
      return item;
    },
  },
};
</script>