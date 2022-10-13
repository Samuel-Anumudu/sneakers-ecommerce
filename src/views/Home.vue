<template>
  <main class="py-10 lg:py-24">
    <div class="breadcrumbs lg:text-center">
      <span class="font-Poppins font-light cursor-pointer">Trending</span>
      <span class="pipe lg:mx-6"></span>
      <span class="font-Poppins font-light cursor-pointer">Nike</span>
      <span class="pipe lg:mx-6"></span>
      <span class="font-Poppins font-light cursor-pointer">Yeezy</span>
    </div>
    <div class="hidden lg:divider pt-10"></div>
    <section class="grid gap-8 md:grid-cols-3 lg:grid-cols-4 py-6">
      <Sneakers @add-to-cart="addToCart" :sneakers="sortedData" />
    </section>
  </main>
</template>

<script>
import Sneakers from "../components/Sneakers";

export default {
  name: "Home",

  props: {
    sneakers: Array,
  },

  components: {
    Sneakers,
  },

  computed: {
    sortedData() {
      return this.sneakers.sort(
        (a, b) => new Date(b.release) - new Date(a.release)
      );
    },
  },

  methods: {
    addToCart: function (cartObject) {
      this.$emit("add-to-cart", cartObject);
    },
  },
};
</script>
