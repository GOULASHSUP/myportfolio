<template>
  <section class="bg-background">
    <div
      class="mx-36 grid max-w-screen-4xl py-8 lg:grid-cols-12 lg:gap-8 lg:py-24 xl:gap-0"
    >
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="mb-4 max-w-2xl text-4xl font-bold leading-none md:text-5xl xl:text-6xl text-purple"
        >
          Hi, I am Simon
        </h1>
        <p
          class="text-lightgray md:text-lg mb-6 max-w-2xl font-light lg:mb-8 lg:text-xl"
        >
          Frontend developer and designer
        </p>
        <a
          href="#about"
          class="mb-8 inline-flex items-center justify-center rounded-xl border border-darkgray bg-lightgray px-5 py-3 text-center text-base font-medium text-background hover:bg-purple hover:text-lightgray ease-in duration-100"
        >
          More about me
        </a>
      </div>
      <div class="lg:col-span-5 justify-center lg:mt-0 lg:flex">
        <img
          src="../assets/profile.jpg"
          class="h-3/4 rounded-full lg:h-3/4"
          alt=""
        />
      </div>
    </div>
    <template />
  </section>
</template>



<script setup>
</script>