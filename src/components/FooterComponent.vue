<script setup lang="ts"></script>

<template>
  <footer id="footer" class="bg-white p-10 border-t-2">
    <h1 class="font-bold text-2xl pb-2 px-2 text-lightSeaGreen">Contato</h1>
    <div class="block justify-between md:flex">
      <div class="flex">
        <div class="block space-y-1 p-2">
          <p class="font-medium text-m">Gabriel Carvalho</p>
          <p class="font-medium text-m">Diogo Espindola</p>
        </div>
        <div class="block px-2 space-y-1 p-2">
          <p class="font-light text-m">gabriel_carvalho.contato@outlook.com</p>
          <p class="font-light text-m">diogoespindoladasilva@outlook.com</p>
        </div>

        <div class="inline-block px-2 p-2 space-y-1">
          <a
            href="https://github.com/gabriel-cheng"
            target="_blank"
            class="block font-bold text-m"
            >GitHub</a
          >
          <a
            href="https://github.com/Rissollis"
            target="_blank"
            class="block font-bold text-m"
            >GitHub</a
          >
        </div>
      </div>
      <div class="max-w-xs text-right">
        <p class="font-light text-sm">
          este é um projeto desenvolvido como trabalho de graduação para a FATEC
          de Araçatuba
        </p>
      </div>
    </div>
    <div class="h-0.5 bg-lightSeaGreen mb-4 mt-10"></div>
    <div class="flex justify-center space-x-2">
      <a
        href="https://github.com/gabriel-cheng/finance-frontend"
        target="_blank"
        >repositório do projeto</a
      >
      <img src="/icons/github_icon.png" class="h-6" />
    </div>
  </footer>
</template>
