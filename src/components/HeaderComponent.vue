<script setup lang="ts"></script>

<template>
  <header id="header" class="w-full border-b ">
    <div
      class="w-full max-w-2700px flex items-center justify-between px-20 py-4 bg-white"
    >
      <div class="">
        <router-link class="inline-block" to="/">
          <img
            class="w-full max-w-200px"
            src="/icons/logo_gradient.png"
            alt="icone finance"
          />
        </router-link>
      </div>
      <nav class="">
        <ul class="flex">
          <router-link
            class="transition-colors hover:text-teal-400 px-10 py-2 active:bg-teal-500Active mr-16 inline-block font-light"
            to="#"
          >
            <li class="tracking-widest">Lorem</li>
          </router-link>
          <router-link
            class="transition-colors hover:text-teal-400 px-10 py-2 active:bg-teal-500Active mr-16 inline-block font-light"
            to="#"
          >
            <li class="tracking-widest">Lorem</li>
          </router-link>
          <router-link
            class="transition-colors hover:text-teal-400 px-10 py-2 active:bg-teal-500Active mr-16 inline-block font-light"
            to="#"
          >
            <li class="tracking-widest">Lorem</li>
          </router-link>
        </ul>
      </nav>
      <div class="">
        <button
          class="transition-colors text-slate-100 rounded-full bg-lightSeaGreen hover:bg-midnightGreen Hover active:bg-midnightGreen Active px-6 py-2"
        >
          Registrar-se
        </button>
      </div>
    </div>
  </header>
</template>
