<template>
  <div
    v-if="hover"
    class="absolute top-1/4 left-0 right-0 text-center mx-auto show-sneaker"
  >
    <label
      for="sneaker-modal"
      class="btn modal-button font-normal font-Poppins bg-black border-none hover:bg-black rounded-none"
      >Quick View</label
    >
    <input type="checkbox" id="sneaker-modal" class="modal-toggle" />
    <div class="modal z-1">
      <div
        class="modal-box lg:w-[70%] block lg:max-w-full lg:h-full relative lg:flex rounded-none"
      >
        <label
          for="sneaker-modal"
          class="btn btn-sm btn-circle absolute right-2 top-2 bg-black text-xl"
          >✕</label
        >
        <div class="lg:flex w-3/4 mx-auto justify-center items-center gap-8">
          <!-- px-10 pt-10 -->
          <figure class="modal-image">
            <img
              :src="sneaker.image"
              :alt="sneaker.brand"
              class="lg:w-[800px] pb-10"
            />
          </figure>
          <div class="text-left font-Roboto font-regular">
            <div class="text-area">
              <h2 class="text-2xl lg:text-4xl">{{ sneaker.model }}</h2>
              <h3 class="text-xl lg:text-2xl font-medium py-6">
                ${{ sneaker.price }}.00
              </h3>
              <span class="uppercase font-medium font-Poppins text-[.875rem]"
                >Description</span
              >
              <p class="font-Poppins font-light pt-4 pb-4">
                {{ sneaker.description }}
              </p>
              <small class="text-red-400 font-Poppins"
                >only {{ sneaker.quantity }} available</small
              >
              <div>...</div>
            </div>
            <div class="size">
              <label class="label">
                <span class="label-text text-base font-Poppins">Size:</span>
              </label>
              <select
                class="select border border-black rounded-none"
                v-model="selectedOption"
                @change="optionChanged"
              >
                <option disabled selected>Select Size</option>
                <option>4</option>
                <option>4.5</option>
                <option>5</option>
                <option>5.5</option>
                <option>6</option>
              </select>
            </div>
            <div class="quantity py-8 font-Poppins">
              <label for="quantity text-base font-Poppins">Quantity:</label>
              <input
                v-model="selectedNumber"
                @change="numberChanged"
                class="border border-black block w-[37%] p-3 focus:outline-none"
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                :max="sneaker.quantity"
              />
            </div>

            <div class="card-actions font-Poppins">
              <button
                v-if="!isAdded"
                class="rounded-none btn-wide p-6 mt-4 bg-[#a8a6a0] text-white"
                @click="addSneakerToCart(sneaker.id)"
              >
                Add To Cart
              </button>
              <button
                v-else
                class="rounded-none btn-wide p-6 mt-4 bg-[#a8a6a0] text-white"
              >
                Added!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAdded: false,
      selectedOption: null,
      selectedNumber: 1,
    };
  },

  name: "ModalShow",

  props: {
    hover: Boolean,
    sneaker: Object,
  },

  methods: {
    optionChanged: function (value) {
      this.$emit("update-option", this.selectedOption);
    },

    numberChanged: function (value) {
      this.$emit("update-number", this.selectedNumber);
    },

    addSneakerToCart(id) {
      const cartObject = {
        id,
        size: this.selectedOption,
        quantity: this.selectedNumber,
      };

      if (this.selectedOption) {
        this.$emit("add-to-cart", cartObject);
        this.isAdded = true;

        setTimeout(() => {
          this.isAdded = false;
        }, 1000);
      } else {
        alert("Your Must Select A Size!");
      }
    },
  },
};
</script>
