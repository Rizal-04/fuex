<template>
  <div class="flex justify-center items-center ">
    <div class="bg-white ">
      <div v-if="isLoading === true">
        <span class="title is-4">Loading...</span>
      </div>
      <div v-if="isEmpty === true">
        <div>
          <div>
            <p class="title is-4">Belum ada pesanan</p>
          </div>
        </div>
      </div>
      <div
        v-for="orders in riwayatPesanan"
        :key="orders._id"
        class="border my-3"
      >
        <div class="card" @click="handlePush(orders)">
          <div class="columns is-gapless p-4">
            <div
              class="column flex flex-col justify-start items-start text-sm mt-3 text-left "
            >
              <p class="flex  font-bold p-2 overflow-clip overflow-hidden">
                {{ orders.quantity }}x {{ orders.name }} - Rp.{{
                  orders.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
                }}/Liter
              </p>
            </div>
            <div class=" flex justify-end flex-col">
              <div class="flex justify-end"></div>
              <div class="mt-4">
                <p class="text-sm">
                  <!-- {{ orders.createdDate }}  -->
                  {{ new Date(orders.createdDate).getDate() }}-{{
                    new Date(orders.createdDate).getMonth()
                  }}-{{ new Date(orders.createdDate).getFullYear() }}
                  {{ new Date(orders.createdDate).getHours() }}.{{
                    new Date(orders.createdDate).getMinutes()
                  }}
                </p>
                <div>
                  <p class="w-48 text-sm my-4 truncate">
                    {{ orders.address }}
                  </p>
                </div>
                <div
                  :class="[
                    orders.status === '1'
                      ? 'bg-yellow-100 rounded-full mt-2 p-1 text-red-500 '
                      : orders.status === '2'
                      ? 'bg-indigo-100	 rounded-full mt-2 p-1 text-blue-500 '
                      : orders.status === '3'
                      ? 'bg-green-100 rounded-full mt-2 p-1 text-green-700 '
                      : orders.status === '4'
                      ? 'bg-red-100 rounded-full mt-2  p-1 text-red-500 '
                      : orders.status === '5'
                      ? 'bg-green-100 rounded-full mt-2 p-1 text-green-700 '
                      : '',
                  ]"
                >
                  <p class="text-sm">{{ handleFineStatus(orders.status) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./script.js" />
