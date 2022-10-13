<template>
  <div :key="sneaker.id" v-for="sneaker in sneakers" class="fade-in">
    <Sneaker @add-to-cart="addToCart" :sneaker="sneaker" />
  </div>
</template>

<script>
import Sneaker from "./Sneaker.vue";

export default {
  name: "Sneakers",
  props: {
    sneakers: Array,
  },

  components: {
    Sneaker,
  },

  methods: {
    addToCart: function (cartObject) {
      this.$emit("add-to-cart", cartObject);
    },
  },

  emits: ["add-to-cart"],
};
</script>
