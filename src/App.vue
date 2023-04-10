<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/HeaderComponent.vue";
import Footer from "./components/FooterComponent.vue";
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
