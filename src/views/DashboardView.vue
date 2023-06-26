<script setup lang="ts">
import { onMounted, ref } from 'vue';
const allReceitas = ref<Array<iReceitasAttrb>>([]);
const allDespesas = ref<Array<iReceitasAttrb>>([]);
const allReceber = ref<Array<iReceitasAttrb>>([]);

const valoresReceitas: number[] = [];
const valoresDespesas: number[] = [];
const valoresReceber: number[] = [];

onMounted(() => {
  getFinancas(allReceitas, "receitas");
  getFinancas(allDespesas, "despesas");
  getFinancas(allReceber, "receber");

  valorTotal();
});

interface iReceitasAttrb {
  _id?: string,
  valor?: number,
  nota?: string
}

async function modalController(modal: string) {
  const submitFinancas = document.querySelector(".submitFinancas") as HTMLDivElement;
  const valor = document.querySelector("#inputValor") as HTMLInputElement;
  const nota = document.querySelector("#inputNota") as HTMLInputElement;

  switch(modal) {
    case "receitas":
      submitFinancas.onclick = () => {
        postItem("receitas", {
          "receitas": [
            {"valor": valor.value, "nota": nota.value}
          ]
        });
      }
      break;
    case "despesas":
      submitFinancas.onclick = () => {
        postItem("despesas", {
          "despesas": [
            {"valor": valor.value, "nota": nota.value}
          ]
        });
      }
      break;
    case "receber":
      submitFinancas.onclick = () => {
        postItem("receber", {
          "receber": [
            {"valor": valor.value, "nota": nota.value}
          ]
        });
      }
      break;
    default:
      alert("Nenhum clicado");
      break;
  }

  openOrCloseModal()
}
async function valorTotal() {
  const allFinancasValues = await returnValores();
  const totalReceitas = (document.querySelector(".totalReceitas") as HTMLParagraphElement);
  const totalDespesas = (document.querySelector(".totalDespesas") as HTMLParagraphElement);
  const totalReceber = (document.querySelector(".totalReceber") as HTMLParagraphElement);
  let soma1 = 0;
  let soma2 = 0;
  let soma3 = 0;

  for(let i of allFinancasValues[0]) {
    soma1 += i;

    totalReceitas.textContent = soma1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }
  for(let i of allFinancasValues[1]) {
    soma2 += i;

    totalDespesas.textContent = soma2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }
  for(let i of allFinancasValues[2]) {
    soma3 += i;

    totalReceber.textContent = soma3.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }
}
async function returnValores() {
  const valoresReceitas: number[] = [];
  const valoresDespesas: number[] = [];
  const valoresReceber: number[] = [];

  const receitasValues = await getRequest("receitas");
  const despesasValues = await getRequest("despesas");
  const receberValues = await getRequest("receber");

  for(let i of receitasValues) {
    for(let j of i.receitas) {
      valoresReceitas.push(j.valor);
    }
  }
  for(let i of despesasValues) {
    for(let j of i.despesas) {
      valoresDespesas.push(j.valor);
    }
  }
  for(let i of receberValues) {
    for(let j of i.receber) {
      valoresReceber.push(j.valor);
    }
  }

  return [valoresReceitas, valoresDespesas, valoresReceber];
}
async function getRequest(endp: string) {
  const req = await fetch(`http://localhost:5000/financas/${endp}`, {
    method: "GET",
    headers: {
      "authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTc4ZmY4MDRlMjNjMThlNGQxNTE4MSIsInVzZXJuYW1lIjoicGF0aHljcm96OCIsImlhdCI6MTY4NzY1NDM5N30.g11k3WLwIvdP7B09Assy1ljfN4K84YkMUKNP4qbB230"
    }
  })
  .then(e => e.json())

  return req;
}
function openOrCloseModal() {
  const modalContainer = document.querySelector(".modalContainer") as HTMLDivElement;

  modalContainer.classList.toggle("hidden");
}
async function getFinancas(arr: any, endp: string) {
  const token = sessionStorage.getItem("token");

  try {
    const res = await fetch(`http://localhost:5000/financas/${endp}`, {
      method: "GET",
      headers: {
        "Authentication": `bearer ${token}`
      }
    })
    .then(e => e.json());

    for(let i of res) {
        arr.value.push(i);
    }

    return res;
  } catch(e) {
    console.log({get_financas_error: e});
  }
}

async function postItem(end: string, body: any) {
  const token = sessionStorage.getItem("token");

  const res = await fetch(`http://localhost:5000/financas/register/${end}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "Application/json",
      "authorization": `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTc4ZmY4MDRlMjNjMThlNGQxNTE4MSIsInVzZXJuYW1lIjoicGF0aHljcm96OCIsImlhdCI6MTY4NzY1NDM5N30.g11k3WLwIvdP7B09Assy1ljfN4K84YkMUKNP4qbB230`
    }
  })
  .then(e => e.json())
  .then((e) => {
    console.log(e);
  });

  document.location.reload();
  return res;
}
async function deleteItem(endp: string, id: string) {
  const conf = confirm("Deseja deletar o seguinte item?");

  if(conf) {
    await fetch(`http://localhost:5000/financas/delete/${endp}/${id}`, {
      method: "DELETE",
      headers: {
        "authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTc4ZmY4MDRlMjNjMThlNGQxNTE4MSIsInVzZXJuYW1lIjoicGF0aHljcm96OCIsImlhdCI6MTY4NzY1NDM5N30.g11k3WLwIvdP7B09Assy1ljfN4K84YkMUKNP4qbB230"
      }
    });

    document.location.reload();
  }

  return;
}
async function updateItem(endp: string, id: string) {
  openOrCloseModal();
  const submitFinancas = document.querySelector(".submitFinancas") as HTMLDivElement;
  const valor = document.querySelector("#inputValor") as HTMLInputElement;
  const nota = document.querySelector("#inputNota") as HTMLInputElement;
  const baseurl = "http://localhost:5000/financas/";


  if(endp == "receitas") {
  }
  switch(endp) {
    case "receitas":
      const resReceitas = await fetch(`${baseurl}/${endp}/${id}`, {
        method: "GET",
        headers: {
          "authorization": `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTc4ZmY4MDRlMjNjMThlNGQxNTE4MSIsInVzZXJuYW1lIjoicGF0aHljcm96OCIsImlhdCI6MTY4NzY1NDM5N30.g11k3WLwIvdP7B09Assy1ljfN4K84YkMUKNP4qbB230`
        }
      })
      .then(e => e.json())
      .then(e => e.receitas[0]);

      valor.value = resReceitas.valor;
      nota.value = resReceitas.nota;

      submitFinancas.onclick = () => {
        updateRequest("receitas", id, {
          "receitas": [
            {"valor": valor.value, "nota": nota.value}
          ]
        });
      }
      break;
    case "despesas":
      const resDespesas = await fetch(`${baseurl}/${endp}/${id}`, {
        method: "GET",
        headers: {
          "authorization": `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTc4ZmY4MDRlMjNjMThlNGQxNTE4MSIsInVzZXJuYW1lIjoicGF0aHljcm96OCIsImlhdCI6MTY4NzY1NDM5N30.g11k3WLwIvdP7B09Assy1ljfN4K84YkMUKNP4qbB230`
        }
      })
      .then(e => e.json())
      .then(e => e.despesas[0]);

      valor.value = resDespesas.valor;
      nota.value = resDespesas.nota;

      submitFinancas.onclick = () => {
        updateRequest("despesas", id, {
          "despesas": [
            {"valor": valor.value, "nota": nota.value}
          ]
        });
      }
      break;
    case "receber":
      const resReceber = await fetch(`${baseurl}/${endp}/${id}`, {
        method: "GET",
        headers: {
          "authorization": `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTc4ZmY4MDRlMjNjMThlNGQxNTE4MSIsInVzZXJuYW1lIjoicGF0aHljcm96OCIsImlhdCI6MTY4NzY1NDM5N30.g11k3WLwIvdP7B09Assy1ljfN4K84YkMUKNP4qbB230`
        }
      })
      .then(e => e.json())
      .then(e => e.receber[0]);

      valor.value = resReceber.valor;
      nota.value = resReceber.nota;

      submitFinancas.onclick = () => {
        updateRequest("receber", id, {
          "receber": [
            {"valor": valor.value, "nota": nota.value}
          ]
        });
      }
      break;
    default:
      alert("Nenhum clicado");
      break;
  }
}
async function updateRequest(endp: string, id: string, body: any) {
  const token = sessionStorage.getItem("token");

  const res = await fetch(`http://localhost:5000/financas/update/${endp}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "Application/json",
      "authorization": `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTc4ZmY4MDRlMjNjMThlNGQxNTE4MSIsInVzZXJuYW1lIjoicGF0aHljcm96OCIsImlhdCI6MTY4NzY1NDM5N30.g11k3WLwIvdP7B09Assy1ljfN4K84YkMUKNP4qbB230`
    }
  })
  .then(e => e.json())
  .then((e) => {
    console.log(e);
  });

  document.location.reload();
  return res;
}
</script>

<template>
  <main class="bg-slate-200 py-5 relative">
    <div class="modalContainer hidden bottom-0 absolute w-full h-full flex justify-center items-center bg-modalBackground">
      <div class="w-2/5 bg-white h-96 relative p-20 flex justify-center items-center">
        <div class="">
          <div class="">
            <div class="">
              <input type="number" name="" id="inputValor" class="border border-black mb-2 px-1 outline-none" placeholder="Informe o valor">
            </div>
            <div class="">
              <input type="text" name="" id="inputNota" class="border border-black mb-3 px-1 outline-none" placeholder="Informe uma nota">
            </div>
            <div class="submitFinancas flex justify-center">
              <button class="px-8 py-2 bg-lightSeaGreen text-white">Informar finança</button>
            </div>
          </div>
        </div>
        <div @click="openOrCloseModal()" class="closeModal absolute -top-5 -right-5 bg-modalBackground w-10 h-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-slate-200 active:bg-slate-400">
          <p class="pi pi-times"></p>
        </div>
      </div>
    </div>
    <section class="mb-10 w-full flex justify-center">
      <div class="flex justify-center w-4/5 gap-5">
        <div class="dashCard bg-green-500 w-96 h-52 p-10 rounded-xl">
          <div class="mb-3">
            <p class="totalReceitas inline text-2xl border-b-4 border-gray-500 font-bold mt-2"></p>
          </div>
          <div>
            <p class="text-xl">receita mensal</p>
          </div>
        </div>
        <div class="dashCard bg-red-500 w-96 h-52 p-10 rounded-xl">
          <div class="mb-3">
            <p class="totalDespesas inline text-2xl border-b-4 border-gray-500 font-bold mt-2"></p>
          </div>
          <div>
            <p class="text-xl">despesas</p>
          </div>
        </div>
        <div class="dashCard bg-yellow-500 w-96 h-52 p-10 rounded-xl">
          <div class="mb-3">
            <p class="totalReceber inline text-2xl border-b-4 border-gray-500 font-bold mt-2"></p>
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
        <div v-for="(item, index) of allReceitas.reverse()" :key="index" class="receitas flex flex-col gap-2">
          <!-- Receita 1 -->
          <div class="receita border bg-green-200 border-gray-300 px-5 py-2 w-full mb-1 flex items-center justify-between">
            <div v-for="(receita, i) of item.receitas" :key="i" class="flex flex-col justify-between">
              <div>
                <p>{{ receita.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</p>
              </div>
              <div class="mt-1">
                <p class="truncate w-60 first-letter:uppercase"><span class="font-bold">Nota:</span> {{ receita.nota }}</p>
              </div>
            </div>
            <div class="flex gap-5">
              <a @click="updateItem('receitas', item._id)" class="hover:bg-green-600 duration-300 w-8 h-8 flex items-center justify-center rounded-full" href="#">
                <i class="pi pi-pencil"></i>
              </a>
              <a @click="deleteItem('receitas', item._id)" class="hover:bg-green-600 duration-300 w-8 h-8 flex items-center justify-center rounded-full" href="#">
                <i class="pi pi-trash"></i>
              </a>
            </div>
          </div>
          <!-- Receita 1 -->
        </div>
        <div class="flex items-center justify-center mt-5">
          <div @click="modalController('receitas')" class="active:bg-green-200 hover:bg-green-400 duration-200 rounded-sm cursor-pointer py-1 px-6 flex justify-center items-center bg-green-300">
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
        <div v-for="(item, index) of allDespesas.reverse()" :key="index" class="despesas flex flex-col gap-2">
          <div class="border bg-red-200 border-gray-300 px-5 py-2 mb-1 w-full flex items-center justify-between">
            <div v-for="(despesa, i) of item.despesas" :key="i" class="flex flex-col justify-between">
              <div>
                <p>{{ despesa.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</p>
              </div>
              <div class="mt-1">
                <p class="truncate w-60"><span class="font-bold">Nota:</span> {{ despesa.nota }}</p>
              </div>
            </div>
            <div class="flex gap-5">
              <a @click="updateItem('despesas', item._id)" class="hover:bg-red-600 duration-300 w-8 h-8 flex items-center justify-center rounded-full" href="#">
                <i class="pi pi-pencil"></i>
              </a>
              <a @click="deleteItem('despesas', item._id)" class="hover:bg-red-600 duration-300 w-8 h-8 flex items-center justify-center rounded-full" href="#">
                <i class="pi pi-trash"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center mt-5">
          <div @click="modalController('despesas')" class="active:bg-red-200 hover:bg-red-400 duration-200 rounded-sm cursor-pointer py-1 px-6 flex justify-center items-center bg-red-300">
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
        <div v-for="(item, index) of allReceber.reverse()" :key="index" class="despesas flex flex-col gap-2">
          <div class="receita-1 border bg-yellow-200 border-gray-300 px-5 py-2 mb-1 w-full flex items-center justify-between">
            <div v-for="(receb, i) of item.receber" :key="i" class="flex flex-col justify-between">
              <div>
                <p>{{ receb.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}</p>
              </div>
              <div class="mt-1">
                <p class="truncate w-60"><span class="font-bold">Nota:</span> {{ receb.nota }}</p>
              </div>
            </div>
            <div class="flex gap-5">
              <a @click="updateItem('receber', item._id)" class="hover:bg-yellow-600 duration-300 w-8 h-8 flex items-center justify-center rounded-full" href="#">
                <i class="pi pi-pencil"></i>
              </a>
              <a @click="deleteItem('receber', item._id)" class="hover:bg-yellow-600 duration-300 w-8 h-8 flex items-center justify-center rounded-full" href="#">
                <i class="pi pi-trash"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center mt-5">
          <div @click="modalController('receber')" class="active:bg-yellow-200 hover:bg-yellow-400 duration-200 rounded-sm cursor-pointer py-1 px-6 flex justify-center items-center bg-yellow-300">
            <div class="bg-yellow-400 mr-2 w-5 h-5 rounded-full flex justify-center items-center">
              <i class="pi pi-plus text-sm"></i>
            </div>
            <div>
              <button class="text-base">Adicionar recebimentos</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section></section>
  </main>
</template>
