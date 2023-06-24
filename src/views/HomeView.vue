<script setup lang="ts"></script>

<template>
  <main>

    <section class="flex bg-slate-100 py-16 px-16 relative after:bg-gray-300 after:h-px after:w-full after:absolute after:bottom-0">
      <div class=" space-y-6 px-20 flex flex-col justify-around">
        <div class="relative w-4/5">
          <h1 class="text-5xl font-semibold text-midnightGreen"><span class="text-lightSeaGreen">O controle</span> total das suas finanças na palma da sua mão</h1>
          <!-- <img src="https://organizze.com.br/build/_assets/traced-border@2x-BLHJJMC7.png" alt="" class="absolute w-60 top-11"> -->
        </div>
        <div>
          <p>
            Organize seu dinheiro em tempo real com com uma solução completa, prática e segura, e garanta o controle total das suas finanças.
          </p>
        </div>
        <div>
          <router-link to="/about">
            <button class="bg-midnightGreen text-white px-5 py-4 rounded-xl hover:bg-lightSeaGreen ease-in-out duration-300">Organizar minhas finanças <i class="pi pi-arrow-right ml-2 bg-lightSeaGreen rounded-lg p-3"></i></button>
          </router-link>
        </div>
        <div class="flex space-x-4">
          <div class="flex items-center">
            <div class="bg-green-200 rounded-xl p-17px flex items-center justify-center mx-2">
              <i class="pi pi-lock text-3xl"></i>
            </div>
            <div>
              <p>Segurança dos seus dados em primeiro lugar.</p>
            </div>
          </div>
          <div class="flex items-center">
            <div class="bg-green-200 rounded-xl p-17px flex items-center justify-center mx-2">
              <i class="pi pi-desktop text-3xl"></i>
            </div>
            <div>
              <p>Acesse quando quiser, no celular ou computador.</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div>
        <img src="https://organizze.com.br/build/_assets/hero-mockup-app-organizze-OSCC5ZCI.webp" alt="protótipo do site">
      </div> -->
    </section>

    <section class="px-48 py-12">
      <div class="flex">
        <!-- <div>
          <img src="https://organizze.com.br/build/_assets/phone01-QOE2JQZC.webp" alt="">
        </div> -->
        <div>
          <!-- <div>
            <p class="font-extralight">Organize suas finanças</p>
          </div> -->
          <div>
            <h1 class="text-midnightGreen text-right font-bold text-5xl my-6">O guia para o seu sucesso financeiro</h1>
          </div>
          <div class="flex flex-wrap justify-end">
            <div class="flex gap-10">
              <div class="cardFinancas">
                <div>
                  <p class="cardFinancaNumber">01</p>
                </div>
                <div>
                  <h2 class="font-semibold text-midnightGreen my-3">Suas contas e cartões num só lugar</h2>
                </div>
                <div>
                  <p>
                    Comece cadastrando suas contas e cartões para ter uma visão mais clara das suas finanças.
                  </p>
                </div>
              </div>
              <div class="cardFinancas">
                <div>
                  <p class="cardFinancaNumber">02</p>
                </div>
                <div>
                  <h2 class="font-semibold text-midnightGreen my-3">Registre todos os seus gastos</h2>
                </div>
                <div>
                  <p>
                    Garanta uma previsibilidade financeira poderosa cadastrando suas despesas em tempo real, de onde você estiver.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex gap-10 mt-7">
              <div class="cardFinancas">
                <div>
                  <p class="cardFinancaNumber">03</p>
                </div>
                <div>
                  <h2 class="font-semibold text-midnightGreen my-3">Saiba o destino de cada centavo</h2>
                </div>
                <div>
                  <p>
                    Mantenha tudo sob controle informando sua renda e ganhos extras para ter um ponto de partida.
                  </p>
                </div>
              </div>
              <div class="cardFinancas">
                <div>
                  <p class="cardFinancaNumber">04</p>
                </div>
                <div>
                  <h2 class="font-semibold text-midnightGreen my-3">Transformando em hábito</h2>
                </div>
                <div>
                  <p>
                    Lance os gastos do dia a dia, acompanhe os relatórios sempre que possível e assuma o controle do seu dinheiro.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-48 py-12">
      <div class="flex items-center">
        <div>
          <!-- <div>
            <p>Segurança em primeiro lugar</p>
          </div> -->
          <div class="w-3/4">
            <h1 class="mt-3 mb-10 text-5xl text-lightSeaGreen">A segurança que você precisa para evoluir a sua gestão</h1>
          </div>
          <div class="flex flex-col gap-5">
            <div class="segCardContainer">
              <div>
                <i class="pi pi-dollar font-extrabold text-midnightGreen text-2xl"></i>
              </div>
              <div>
                <p>Nós não pedimos sua senha do banco. Nem hoje, nem nunca!</p>
              </div>
            </div>
            <div class="segCardContainer">
              <div>
                <i class="pi pi-dollar font-extrabold text-midnightGreen text-2xl"></i>
              </div>
              <div>
                <p>Tenha a facilidade de registrar e acompanhar seus gastos a qualquer momento</p>
              </div>
            </div>
            <div class="segCardContainer">
              <div>
                <i class="pi pi-dollar font-extrabold text-midnightGreen text-2xl"></i>
              </div>
              <div>
                <p>Gerencie as faturas de todos os sesu cartões de crédito num único lugar!</p>
              </div>
            </div>
            <div class="segCardContainer">
              <div>
                <i class="pi pi-dollar font-extrabold text-midnightGreen text-2xl"></i>
              </div>
              <div>
                <p>Receba alertas de contas a pagar e nunca mais sofra com juros</p>
              </div>
            </div>
            <div class="segCardContainer">
              <div>
                <i class="pi pi-dollar font-extrabold text-midnightGreen text-2xl"></i>
              </div>
              <div>
                <p>Importe os dados da sua planilha financeira e não comece do zero</p>
              </div>
            </div>
            <div>
              <router-link to="/">
                <button class="bg-midnightGreen text-white w-56 h-12 rounded-lg hover:bg-lightSeaGreen duration-300">Gerenciar finanças</button>
              </router-link>
            </div>
          </div>
        </div>
        <!-- <div>
          <div>
            <img src="https://organizze.com.br/build/_assets/organizzeTamplateWeb-B3IDUPTB.png" alt="modelo dashboard">
          </div>
        </div> -->
      </div>
    </section>

    <section class="px-20 py-12 bg-slate-100">
      <div>
        <div class="mt-24 mb-10">
          <div class="text-center">
            <p>Controle total</p>
          </div>
          <div class="text-center text-midnightGreen text-4xl font-bold">
            <h1>Você, no controle das suas finanças</h1>
          </div>
        </div>
        <div class="">
          <div class="flex justify-between gap-48 mb-20">
            <div class="">
              <div class="">
                <div class="mb-6 flex-wrap">
                  <div class="containerControlIcons">
                    <i class="controlIcons pi pi-chart-line"></i>
                  </div>
                </div>
                <div class="">
                  <p>
                    Com seu dinheiro organizado fica muito mais fácil planejar o futuro. Para te ajudar, o Organizze te mostra previsões valiosas das suas finanças.
                  </p>
                </div>
              </div>
            </div>
            <div class="">
              <div class="">
                <div class="mb-6 flex-wrap">
                  <div class="containerControlIcons">
                    <i class="controlIcons pi pi-stopwatch"></i>
                  </div>
                </div>
                <div class="">
                  <p>
                    Com seu dinheiro organizado fica muito mais fácil planejar o futuro. Para te ajudar, o Organizze te mostra previsões valiosas das suas finanças.
                  </p>
                </div>
              </div>
            </div>
            <div class="">
              <div class="">
                <div class="mb-6 flex-wrap">
                  <div class="containerControlIcons">
                    <i class="controlIcons pi pi-chart-bar"></i>
                  </div>
                </div>
                <div class="">
                  <p>
                    Com seu dinheiro organizado fica muito mais fácil planejar o futuro. Para te ajudar, o Organizze te mostra previsões valiosas das suas finanças.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="flex gap-48">
            <div class="">
              <div class="">
                <div class="mb-6 flex-wrap">
                  <div class="containerControlIcons">
                    <i class="controlIcons pi pi-mobile"></i>
                  </div>
                </div>
                <div class="">
                  <p>
                    Com seu dinheiro organizado fica muito mais fácil planejar o futuro. Para te ajudar, o Organizze te mostra previsões valiosas das suas finanças.
                  </p>
                </div>
              </div>
            </div>
            <div class="">
              <div class="">
                <div class="mb-6 flex-wrap">
                  <div class="containerControlIcons">
                    <i class="controlIcons pi pi-thumbs-up"></i>
                  </div>
                </div>
                <div class="">
                  <p>
                    Com seu dinheiro organizado fica muito mais fácil planejar o futuro. Para te ajudar, o Organizze te mostra previsões valiosas das suas finanças.
                  </p>
                </div>
              </div>
            </div>
            <div class="">
              <div class="">
                <div class="mb-6">
                  <div class="containerControlIcons">
                    <i class="controlIcons pi pi-chart-line"></i>
                  </div>
                </div>
                <div class="">
                  <p>
                    Com seu dinheiro organizado fica muito mais fácil planejar o futuro. Para te ajudar, o Organizze te mostra previsões valiosas das suas finanças.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>
