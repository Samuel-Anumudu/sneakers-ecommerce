<template>
  <header>
    <Nav :carts="carts" />
  </header>
</template>

<script>
import Nav from "./Nav.vue";

export default {
  name: "Header",
  props: {
    carts: Array,
  },
  components: {
    Nav,
  },
};
</script>
