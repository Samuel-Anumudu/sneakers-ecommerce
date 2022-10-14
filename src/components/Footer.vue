<template>
  <footer class="container mx-auto px-4">
    <section>
      <div
        class="socials footer-socials text-center pb-16 flex justify-center gap-4"
      >
        <span class="fa-brands fa-instagram text-xl cursor-pointer"></span>
        <span class="fa-brands fa-twitter text-xl cursor-pointer"></span>
      </div>
      <div class="signup text-center font-Poppins pb-10 hidden lg:block">
        <p class="font-light">Sign up to receive news and updates.</p>
      </div>
      <div class="form-control hidden lg:block">
        <div class="input-group flex justify-center">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            class="input focus:outline-none input-bordered placeholder:font-light placeholder:font-Poppins"
          />
          <button
            class="btn capitalize font-normal font-Poppins bg-[#a8a6a0] border-none"
          >
            Sign Up
          </button>
        </div>
      </div>
      <small
        class="text-center made-with-love block pb-10 lg:p-16 font-light font-Poppins text-base"
        >Made with love❤️ by
        <a href="https://samuelanumudu.com" target="_blank">Sam</a></small
      >
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
