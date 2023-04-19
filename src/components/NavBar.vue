<template>
  <header class="bg-background2">
    <nav
      class="mx-auto flex items-center justify-between py-6 px-12 lg:px-36"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Simon's Portfolio</span>
          <h2 class="text-green text-2xl font-bold lg:text-4xl">Simon.</h2>
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-lightgray"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-8 w-8" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-20">
        <a
          href="#hero-section"
          class="text-lg font-semibold text-lightgray hover:text-purple"
          >Home</a
        >
        <a
          href="#project-section"
          class="text-lg font-semibold text-lightgray hover:text-purple"
          >Projects</a
        >
        <a
          href="#about-section"
          class="text-lg font-semibold text-lightgray hover:text-purple"
          >About</a
        >
        <a
          href="#contact-section"
          class="text-lg font-semibold text-lightgray hover:text-purple"
          >Contact</a
        >
      </PopoverGroup>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-background px-12 py-6 sm:max-w-sm"
      >
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Simon's Portfolio</span>
            <h2 class="text-green text-2xl font-bold lg:text-4xl">Simon.</h2>
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-lightgray"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-lightgray">
            <div class="space-y-1 py-6">
              <a
                href="#hero-section"
                class="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold text-lightgray hover:text-purple"
                >Home</a
              >
              <a
                href="#project-section"
                class="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold text-lightgray hover:text-purple"
                >Projects</a
              >
              <a
                href="#about-section"
                class="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold text-lightgray hover:text-purple"
                >About</a
              >
              <a
                href="#contact-section"
                class="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold text-lightgray hover:text-purple"
                >Contact</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const mobileMenuOpen = ref(false);
</script>
