<template>
  <main>
    <section>
      <i>/profile</i>
      <p>{{ user.name }}</p>
      <p>{{ user.email }}</p>
      <p>isLoggedIn = {{ isLoggedIn }}</p>
    </section>

    <section>
      <i>Orderhistorik</i>
      <span v-for="(item, index) in orders" :key="index">
        {{ item }}
        <br />
      </span>
    </section>

    <section class="modal" :class="{ open: !isLoggedIn }">
      <i>/profile - modal</i>
      <form action="POST">
        <input v-model="name" name="name" type="text" placeholder="Name" />
        <input v-model="email" name="email" type="email" placeholder="Mail" />
        <input @click="login" type="submit" value="Brew me a cup, dog boy" />
      </form>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
    user() {
      return this.$store.getters.getUser;
    },
    orders() {
      return this.$store.getters.orders;
    },
  },
  methods: {
    login(ev) {
      ev.preventDefault();
      return this.$store.dispatch("setUser", {
        name: this.name,
        email: this.email,
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
