<script setup lang="ts">
function openModal() {
  alert("You clicked me!");
}
</script>

<template>
  <main class="bg-slate-200 py-5">
    <section class="mb-10 w-full flex justify-center">
      <div class="flex justify-center w-4/5 gap-5">
        <div class="dashCard bg-green-500 w-96 h-52 p-10 rounded-xl">
          <div class="mb-3">
            <p class="inline text-4xl border-b-4 border-gray-500 font-bold mt-2">R$ <span class="">0,00</span></p>
          </div>
          <div>
            <p class="text-xl">receita mensal</p>
          </div>
        </div>
        <div class="dashCard bg-red-500 w-96 h-52 p-10 rounded-xl">
          <div class="mb-3">
            <p class="inline text-4xl border-b-4 border-gray-500 font-bold mt-2">R$ <span class="">0,00</span></p>
          </div>
          <div>
            <p class="text-xl">despesas</p>
          </div>
        </div>
        <div class="dashCard bg-yellow-500 w-96 h-52 p-10 rounded-xl">
          <div class="mb-3">
            <p class="inline text-4xl border-b-4 border-gray-500 font-bold mt-2">R$ <span class="">0,00</span></p>
          </div>
          <div>
            <p class="text-xl">a receber</p>
          </div>
        </div>
      </div>
    </section>
    <section class="flex justify-center gap-8">
      <div class="bg-white shadow shadow-gray-400 w-2/6 p-5">
        <div>
          <div>
            <p class="border-b border-gray-300 mb-1 text-xl font-bold">Receitas</p>
          </div>
        </div>
        <div class="receitas flex flex-col gap-2">
          <div class="receita-1 border bg-green-200 border-gray-300 px-5 py-2 w-full flex items-center justify-between">
            <div class="flex flex-col justify-between">
              <div>
                <p>R$ 1.000,00</p>
              </div>
              <div class="mt-1">
                <p class="truncate w-60 first-letter:uppercase"><span class="font-bold">Nota:</span> agiotaaaaaaaaaaaaa</p>
              </div>
            </div>
            <div class="flex gap-5">
              <a class="hover:bg-green-600 duration-300 w-8 h-8 flex items-center justify-center rounded-full" href="#">
                <i class="pi pi-pencil"></i>
              </a>
              <a class="hover:bg-green-600 duration-300 w-8 h-8 flex items-center justify-center rounded-full" href="#">
                <i class="pi pi-trash"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center mt-5">
          <div v-on:click="openModal()" class="active:bg-green-200 hover:bg-green-400 duration-200 rounded-sm cursor-pointer py-1 px-6 flex justify-center items-center bg-green-300">
            <div class="bg-green-400 mr-2 w-5 h-5 rounded-full flex justify-center items-center">
              <i class="pi pi-plus text-sm"></i>
            </div>
            <div>
              <button class="text-base">Adicionar receita</button>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white shadow shadow-gray-400 w-2/6 p-5">
        <div>
          <div>
            <p class="border-b border-gray-300 mb-1 text-xl font-bold">Despesas</p>
          </div>
        </div>
        <div class="despesas flex flex-col gap-2">
          <div class="receita-1 border bg-red-200 border-gray-300 px-5 py-2 w-full flex items-center justify-between">
            <div class="flex flex-col justify-between">
              <div>
                <p>R$ 1.000,00</p>
              </div>
              <div class="mt-1">
                <p class="truncate w-60"><span class="font-bold">Nota:</span> Agiotaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              </div>
            </div>
            <div class="flex gap-5">
              <a class="hover:bg-red-600 duration-300 w-8 h-8 flex items-center justify-center rounded-full" href="#">
                <i class="pi pi-pencil"></i>
              </a>
              <a class="hover:bg-red-600 duration-300 w-8 h-8 flex items-center justify-center rounded-full" href="#">
                <i class="pi pi-trash"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center mt-5">
          <div class="active:bg-red-200 hover:bg-red-400 duration-200 rounded-sm cursor-pointer py-1 px-6 flex justify-center items-center bg-red-300">
            <div class="bg-red-400 mr-2 w-5 h-5 rounded-full flex justify-center items-center">
              <i class="pi pi-plus text-sm"></i>
            </div>
            <div>
              <button class="text-base">Adicionar despesa</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="w-full flex justify-center mt-7">
      <div class="bg-white shadow shadow-gray-400 w-2/6 p-5">
        <div>
          <div>
            <p class="border-b border-gray-300 mb-1 text-xl font-bold">A receber</p>
          </div>
        </div>
        <div class="despesas flex flex-col gap-2">
          <div class="receita-1 border bg-yellow-200 border-gray-300 px-5 py-2 w-full flex items-center justify-between">
            <div class="flex flex-col justify-between">
              <div>
                <p>R$ 1.000,00</p>
              </div>
              <div class="mt-1">
                <p class="truncate w-60"><span class="font-bold">Nota:</span> Agiotaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
              </div>
            </div>
            <div class="flex gap-5">
              <a class="hover:bg-yellow-600 duration-300 w-8 h-8 flex items-center justify-center rounded-full" href="#">
                <i class="pi pi-pencil"></i>
              </a>
              <a class="hover:bg-yellow-600 duration-300 w-8 h-8 flex items-center justify-center rounded-full" href="#">
                <i class="pi pi-trash"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center mt-5">
          <div class="active:bg-yellow-200 hover:bg-yellow-400 duration-200 rounded-sm cursor-pointer py-1 px-6 flex justify-center items-center bg-yellow-300">
            <div class="bg-yellow-400 mr-2 w-5 h-5 rounded-full flex justify-center items-center">
              <i class="pi pi-plus text-sm"></i>
            </div>
            <div>
              <button class="text-base">Adicionar despesa</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section></section>
  </main>
</template>
