<template>
    <div class="bg-background" id="project">
      <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 class="text-3xl font-bold tracking-tight text-lightgray sm:text-4xl">BBQ project</h2>
          <p class="mt-4 text-darkgray">I worked as a member of a group for an organization, and helped them to create a whole new website.</p>
            <div class="text-green py-8"><a href="#"> Read more</a></div>
          <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
              <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
              <dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
        <div class="grid grid-rows-1">
          <img src="../assets/pic-1.jfif" alt="bbq picture" class="rounded-lg bg-gray-100 h-96" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

  </script>