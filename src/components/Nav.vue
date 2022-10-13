<template>
  <div class="navbar p-0 my-4 lg:my-12">
    <div class="navbar-start">
      <ul class="hidden lg:block lg:flex lg:gap-5">
        <li class="font-Poppins font-light">
          <router-link to="/">Shop</router-link>
        </li>
        <li class="font-Poppins font-light">
          <a class="cursor-pointer" to="/About">About</a>
        </li>
        <li class="font-Poppins font-light">
          <a class="cursor-pointer" to="/Contact">Contact</a>
        </li>
      </ul>
      <div class="dropdown lg:hidden">
        <label tabIndex="{0}">
          <span class="fa-solid fa-bars cursor-pointer text-xl"></span>
        </label>
        <ul
          tabIndex="{0}"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li class="font-Poppins"><router-link to="/">Home</router-link></li>
          <li class="font-Poppins">
            <a to="/About">About</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="navbar-center lg:flex">
      <h1 class="text-2xl lg:text-3xl font-Roboto">
        <router-link to="/">Sneakers</router-link>
      </h1>
    </div>
    <div class="navbar-end">
      <div class="socials hidden text-[1.1rem] lg:flex gap-5">
        <span class="fa-brands fa-instagram cursor-pointer"></span>
        <span class="fa-brands fa-twitter cursor-pointer"></span>
      </div>
      <div class="cart ml-12 flex">
        <router-link to="/cart">
          <span class="fa-solid fa-cart-shopping text-xl" title="cart"></span
        ></router-link>
        <span class="ml-[0.25rem] font-light">{{ carts.length }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  props: {
    carts: Array,
  },
};
</script>
