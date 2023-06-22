<script setup lang="ts"></script>

<template>
  <main>
    <section class="flex justify-center">
      <div class="flex p-7 justify-around">
        <div class="card-1 bg-blue-900">
          <div class="mb-10">
            <p>Boa tarde, <span class="font-extrabold text-2xl block">Gabriel</span></p>
          </div>
          <div class="bg-gray-300 w-52 h-12 rounded-xl">
            <div class="text-center">
              <p>receita mensal</p>
              <span class="text-green-900 block font-extrabold">R$ 0,00</span>
            </div>
          </div>
        </div>
        <div class="card-2 bg-green-900 flex flex-col justify-end w-52">
          <div>
            <div class="text-center">
              <p>Despesa mensal</p>
              <span class="">R$ 0,00</span>
            </div>
          </div>
        </div>
        <div class="card-3 bg-pink-900 flex justify-center items-center w-52">
          <div class="text-center">
              <p>saldo geral</p>
              <p class="">R$ <span class="font-extrabold">0,00</span></p>
          </div>
        </div>
        <div class="card-4 w-52">
          <div>
            <div>
              <p class="font-bold">Acesso rápido</p>
            </div>
            <div class="flex justify-around">
              <div class="text-center">
                <div>
                  <i class="pi pi-minus-circle text-5xl text-red-900"></i>
                </div>
                <div>
                  <p>DESPESA</p>
                </div>
              </div>
              <div class="text-center">
                <div>
                  <i class="pi pi-plus-circle text-5xl text-green-900"></i>
                </div>
                <div>
                  <p>RECEITA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section></section>
    <section></section>
    <section></section>
  </main>
</template>
