<template>
  <div class="px-4 mx-auto lg:px-14">
    <Header :carts="carts" />
    <router-view
      :carts="carts"
      @add-to-cart="addToCart"
      :sneakers="sneakers"
    ></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  data() {
    return {
      sneakers: [],
      carts: [],
    };
  },

  name: "App",

  components: {
    Header,
    Footer,
  },

  methods: {
    addToCart: function (cartObject) {
      this.carts.push({
        ...this.sneakers.find((sneaker) => sneaker.id === cartObject.id),
        ...cartObject,
      });
    },
  },

  mounted() {
    fetch("api/sneakers?_limit=10")
      .then((res) => res.json())
      .then((data) => (this.sneakers = data))
      .catch((err) => console.log(err));
  },
};
</script>
