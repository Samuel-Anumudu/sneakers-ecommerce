<template>
  <!-- card lg:w-full bg-base-100 shadow-xl -->
  <div @mouseenter="hover = true" @mouseleave="hover = false" class="">
    <div class="relative">
      <figure class="brand-image cursor-pointer">
        <img :src="sneaker.image" :alt="sneaker.brand" />
      </figure>
      <!-- card-body items-center text-center -->
      <div class="font-Roboto">
        <h2 class="text-[1.3rem] font-normal mt-4">{{ sneaker.model }}</h2>
        <small class="block released font-Poppins">{{ sneaker.release }}</small>
        <span class="text-base my-2 inline-block font-Poppins"
          >${{ sneaker.price }}.00</span
        >
      </div>
      <ShowSneaker
        @add-to-cart="addToCart"
        @update-option="optionUpdate"
        @update-number="numberUpdate"
        :sneaker="sneaker"
        :hover="hover"
      />
    </div>
  </div>
</template>

<script>
import ShowSneaker from "./ShowSneaker";

export default {
  data() {
    return {
      hover: false,
      sizeSelected: "",
      numberSelected: 1,
    };
  },
  name: "Sneaker",
  props: {
    sneaker: Object,
  },
  components: { ShowSneaker },

  methods: {
    optionUpdate: function (value) {
      this.sizeSelected = value;
    },

    numberUpdate: function (value) {
      this.numberSelected = value;
    },

    addToCart: function (cartObject) {
      this.$emit("add-to-cart", cartObject);
    },
  },
};
</script>
