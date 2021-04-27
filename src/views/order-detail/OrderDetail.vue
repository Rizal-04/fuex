<template>
  <div class="flex flex-col min-w-full w-6/12 justify-center items-center">
    <div class="bg-white p-5 card">
      <p class="flex" style="font-weight:bold;">Detail Pesanan</p>
      <div class="border-b border-black p-3 ">
        <div class="flex flex-row justify-between ">
          <p>
            {{ dataOrder.quantity }}x {{ dataOrder.name }} (Rp
            {{
              dataOrder.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
            }})
          </p>
          <p>
            Rp.
            {{
              dataOrder.totalHarga
                .toFixed(2)
                .replace(/\d(?=(\d{3})+\.)/g, "$&,")
            }}
          </p>
        </div>
      </div>
      <div class="border-b border-black p-3 flex flex-row justify-between">
        <p>Biaya Admin</p>
        <p>
          Rp.
          {{ dataOrder.adminFee }}
        </p>
      </div>
      <div class="border-b border-black p-3 flex flex-row justify-between">
        <p>Biaya Pengiriman</p>
        <p>
          Rp.
          {{
            dataOrder.deliveryCost
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, "$&,")
          }}
        </p>
      </div>
      <div class="border-b border-black p-3 flex flex-row justify-between">
        <p>Total Bayar</p>
        <p>
          Rp.
          {{
            dataOrder.totalBayar.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
          }}
        </p>
      </div>
      <div class=" flex p-4">
        <p style="font-weight:bold;">Alamat Pengantaran</p>
      </div>
      <div class=" p-2">
        <p>
          {{ dataOrder.address }}
        </p>
      </div>
      <div class=" p-4">
        <p style="font-weight:bold;">Status Pesanan</p>
      </div>
      <div
        :class="[
          dataOrder.statusCode === '1'
            ? 'bg-yellow-100 p-5 mt-4 text-red-500 text-lg'
            : dataOrder.statusCode === '2'
            ? 'bg-indigo-100	 p-5 mt-4 text-blue-500 text-lg '
            : dataOrder.statusCode === '3'
            ? 'bg-green-100 p-5 mt-4 text-green-700 text-lg'
            : dataOrder.statusCode === '4'
            ? 'bg-red-100 p-5 mt-4 text-red-500 text-lg'
            : dataOrder.statusCode === '5'
            ? 'bg-green-100 p-5 mt-4 text-green-700 text-lg'
            : 'p-5 mt-4',
        ]"
        class="flex justify-center"
      >
        <p>
          {{
            dataOrder.statusCode === "2"
              ? `${dataOrder.statusPesanan} ( ${dataOrder.username} - 0${dataOrder.numberPhone} )`
              : dataOrder.statusPesanan
          }}
        </p>
      </div>
      <div class="p-5 mt-2" v-if="dataOrder.statusCode === '2'">
        <b-button class="is-success" @click="routeToWhatsapp" outlined>
          Hubungi Driver
        </b-button>
      </div>
      <div class=" mt-4">
        <b-button v-if="dataOrder.statusCode === '1'" type="is-danger" expanded>
          Hubungi CS
        </b-button>
      </div>
      <div class=" mt-4">
        <b-button
          v-if="dataOrder.statusCode === '1'"
          @click="handleCancelOrder()"
          type="is-danger"
          expanded
          outlined
          >Batalkan</b-button
        >
      </div>
    </div>
  </div>
</template>
<script src="./script.js" />
