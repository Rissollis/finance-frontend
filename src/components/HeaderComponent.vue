<script setup lang="ts"></script>

<template>
  <header id="header" class="w-full border-b border-bg-dourado">
    <div
      class="w-full max-w-2700px flex items-center justify-between px-20 py-5"
    >
      <div class="">
        <router-link class="inline-block" to="/">
          <img
            class="w-full max-w-200px"
            src="/icons/header-icon-dourado.png"
            alt="icone finance"
          />
        </router-link>
      </div>
      <nav class="">
        <ul class="uppercase flex">
          <router-link
            class="hover:bg-dourado px-10 py-5 active:bg-douradoActive mr-16 inline-block"
            to="#"
          >
            <li class="tracking-widest">Arroz</li>
          </router-link>
          <router-link
            class="hover:bg-dourado px-10 py-5 active:bg-douradoActive mr-16"
            to="#"
          >
            <li class="tracking-widest">Arroz</li>
          </router-link>
          <router-link
            class="hover:bg-dourado px-10 py-5 active:bg-douradoActive"
            to="#"
          >
            <li class="tracking-widest">Arroz</li>
          </router-link>
        </ul>
      </nav>
      <div class="">
        <button
          class="bg-dourado hover:bg-douradoHover active:bg-douradoActive px-8 py-3"
        >
          Registrar-se
        </button>
      </div>
    </div>
  </header>
</template>
