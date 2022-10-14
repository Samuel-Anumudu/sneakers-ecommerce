<template>
  <section>
    <div
      v-if="!newCarts.length"
      class="if-empty-cart pb-[6rem] lg:px-14 lg:pt-12 lg:pb-[10rem] text-[#333]"
    >
      <h2 class="text-[1.5rem] font-Roboto">Shopping Cart</h2>
      <p class="py-5">You have nothing in your shopping cart.</p>
      <!-- btn-xs sm:btn-sm md:btn-md lg:btn-lg  -->
      <button
        class="text-white text-[1.1rem] py-5 px-10 capitalize bg-[#a8a6a0] border-none rounded-none font-normal"
      >
        <router-link to="/">Continue Shopping</router-link>
      </button>
    </div>

    <div v-else class="container lg:pt-12 lg:pb-[10rem] lg:px-10 mx-auto">
      <section
        :key="sneaker.id"
        v-for="(sneaker, index) in newCarts"
        class="individual-sneaker"
      >
        <h2 class="text-[1.5rem] font-Roboto pb-6">Shopping Cart</h2>
        <div class="flex flex-container justify-between">
          <div class="flex basis-[70%] lg:basis-[46%] first-item gap-5">
            <figure class="image-in-cart">
              <img
                :src="sneaker.image"
                :alt="sneaker.brand"
                class="w-[200px] h-[60px] lg:w-[130px] lg:h-[130px]"
              />
            </figure>
            <div>
              <h2>{{ sneaker.model }}</h2>
              <small class="text-[#878787] text-[.875rem]"
                >Size: {{ sneaker.size }}</small
              >
            </div>
          </div>

          <div class="second-item hidden large-screens-only lg:block">
            <button
              :disabled="sneaker.quantity === 1"
              class="fa-solid fa-minus text-xl"
            ></button>
            <span class="mx-5 font-regular">{{ sneaker.quantity }}</span>
            <button
              @click="handleIncrement(sneaker.id)"
              class="fa-solid fa-plus text-xl"
            ></button>
          </div>

          <div class="third-item price text-[#333]">
            <span class="hidden lg:inline-block">${{ sneaker.price }}.00</span>

            <button
              @click="handleDelete(index)"
              class="fa-solid fa-xmark text-xl ml-8 text-[#333]"
            ></button>
          </div>
        </div>

        <div
          class="small-screen-only flex justify-end items-center pt-4 lg:hidden"
        >
          <div class="second-item">
            <button
              :disabled="sneaker.quantity === 1"
              class="fa-solid fa-minus text-xl"
            ></button>
            <span class="mx-5 font-regular">{{ sneaker.quantity }}</span>
            <button class="fa-solid fa-plus text-xl"></button>
          </div>
          <span class="ml-[3.2rem]">${{ sneaker.price }}.00</span>
        </div>
        <div class="divider"></div>
      </section>

      <section class="lg:hidden">
        <div class="flex justify-between">
          <span>Subtotal</span>
          <span class="text-[1.375rem] font-normal">${{ subtotal }}.00</span>
        </div>
        <div class="checkout">
          <button
            class="text-base w-full btn-wide rounded-none capitalize border-0 bg-red-500 py-4 text-center text-white my-6"
          >
            Checkout
          </button>
        </div>
      </section>

      <section class="subtotal hidden lg:flex flex-col items-end justify-end">
        <div
          class="price-subtotal flex items-center gap-[12.5rem] lg:gap-[17rem]"
        >
          <span>Subtotal</span>
          <span class="text-[1.375rem] font-normal">${{ subtotal }}.00</span>
        </div>

        <div class="checkout my-7 w-[21.5rem] lg:w-[26.5rem]">
          <button
            class="text-base rounded-none capitalize border-0 w-full py-4 text-center text-white"
          >
            Checkout
          </button>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      quantity: 1,
      newCarts: this.carts,
    };
  },
  name: "Cart",

  props: {
    carts: Array,
  },

  methods: {
    handleIncrement: function (id) {
      console.log(id);
    },
    handleDelete: function (index) {
      if (confirm("Are you sure you want to delete this item?")) {
        this.newCarts.splice(index, 1);
      }
      this.carts.length = this.newCarts.length;
    },
  },

  computed: {
    subtotal() {
      const totalPrice = this.newCarts
        .map((sneaker) => sneaker.price)
        .reduce((accum, curr) => curr + accum, 0);
      return totalPrice;
    },
  },
};
</script>
