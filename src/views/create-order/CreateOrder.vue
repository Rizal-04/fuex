<template>
  <div class="flex flex-col  min-w-full w-6/12 justify-center items-center p-3">
    <div class="bg-white p-5 card">
      <p class="flex" style="font-weight:bold;">Produk</p>
      <div class="card">
        <div class="columns is-gapless p-2">
          <div class="column flex justify-start text-lg ">
            <p class="flex p-2">
              {{ dataForm.name }}-Rp.{{
                dataForm.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
              }}/Liter
            </p>
          </div>
          <div class=" flex justify-end flex-col">
            <div class="flex flex-row justify-around">
              <button
                class="rounded-full h-10 w-10"
                style="background-color:#FF4242; color:white;"
                @click="handleQuantityTambah"
              >
                +
              </button>
              <p style="font-weight:bold;" class="mt-2">
                {{ dataForm.quantity }}
              </p>
              <button
                class="rounded-full h-10 w-10"
                style="background-color:#FF4242; color:white;"
                @click="handleQuantityKurang"
              >
                -
              </button>
            </div>
            <div class="mt-4">
              <p class="text-sm mt-3 items-end">
                Fandbrother Official Store
              </p>
            </div>
          </div>
        </div>
      </div>
      <b-field>
        <b-input
          class="my-5"
          type="textarea"
          placeholder="Alamat"
          v-model="dataForm.alamat"
          disabled
          expanded
        ></b-input>
      </b-field>
      <p class="flex p-2" style="font-weight:bold;">Total Pembayaran</p>
      <div class="border-b border-black p-3 flex flex-row justify-between">
        <p>
          {{ dataForm.quantity }}x {{ dataForm.name }} (Rp.
          {{ dataForm.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,") }})
        </p>
        <p>
          Rp.
          {{
            dataForm.totalHarga.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
          }}
        </p>
      </div>
      <div class="border-b border-black p-3 flex flex-row justify-between">
        <p>Biaya Admin</p>
        <p>
          Rp.{{
            dataForm.adminFee.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
          }}
        </p>
      </div>
      <div class="border-b border-black p-3 flex flex-row justify-between">
        <p>Biaya Pengiriman</p>
        <p>
          Rp.{{
            dataForm.deliveryCost.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
          }}
        </p>
      </div>
      <div class="border-b border-black p-3 flex flex-row justify-between">
        <p>Total Bayar</p>
        <p>
          Rp.{{
            dataForm.totalBayar.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
          }}
        </p>
      </div>
      <div class="p-7">
        <b-button
          type="is-danger"
          @click="handlePush()"
          :loading="isLoading"
          expanded
          >Buat Pesanan</b-button
        >
      </div>
    </div>
  </div>
</template>
<script src="./script.js" />
