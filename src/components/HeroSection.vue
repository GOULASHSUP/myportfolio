<template> <!--
  hero section
-->
  <section class="bg-background" id="hero-section">
    <div
      class="mx-12 flex flex-col lg:items-center lg:mx-64 lg:grid max-w-screen-4xl py-8 lg:grid-cols-12 lg:gap-8 lg:py-28 xl:gap-0"
    >
      <div class="lg:mr-auto flex flex-col lg:col-span-7">
        <div class="flex flex-row gap-5 lg:justify-start justify-center">
          <h1
            class="flex justify-center mb-4 max-w-2xl text-4xl font-bold leading-none md:text-5xl xl:text-6xl text-purple"
          >
            Hi, I am
          </h1>
          <h1 
            class="flex justify-center mb-4 max-w-2xl text-4xl font-bold leading-none md:text-5xl xl:text-6xl text-purple animate-bounce">
            Simon
          </h1>
        </div>

        <p
          class="flex justify-center lg:justify-start text-lightgray md:text-lg mb-6 max-w-2xl font-light lg:mb-8 lg:text-xl"
        >
          Frontend developer and designer
        </p>
        <div class="flex justify-center lg:justify-start"> <!--about me button-->
          <a
            href="#about-section"
            class="mb-8 max-w-fit inline-flex items-center justify-center rounded-xl border border-darkgray bg-lightgray px-5 py-3 text-center text-base font-medium text-background hover:bg-purple hover:text-lightgray ease-in duration-100"
          >
            More about me>
          </a>
        </div>
      </div>
      <div class="lg:col-span-5 flex lg:justify-end justify-center lg:mt-0"> <!--profile picture-->
        <img
          src="../assets/profile-pic-1.png"
          class="h-72 rounded-full lg:h-96"
          alt="profile picture"
        />
      </div>
    </div>
    <template />
  </section>
</template>



<script setup>
</script>