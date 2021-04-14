<template>
  <div class="flex flex-col justify-center items-center p-3">
    <div class="bg-white w-6/12 p-5 rounded-xl card">
      <p class="flex" style="font-weight:bold;">Produk</p>
      <div class="card">
        <div class="columns is-gapless p-2">
          <div class="column flex justify-start text-lg ">
            <p class="flex p-2"></p>
          </div>
          <div class=" flex justify-end flex-col">
            <div class="flex flex-row justify-around">
              <button
                class="rounded-full h-10 w-10"
                style="background-color:#FF4242; color:white;"
              >
                +
              </button>
              <p style="font-weight:bold;" class="mt-2"></p>
              <button
                class="rounded-full h-10 w-10"
                style="background-color:#FF4242; color:white;"
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
        <p>Jenis bahan bakar</p>
        <p>Harga</p>
      </div>
      <div class="border-b border-black p-3 flex flex-row justify-between">
        <p>Biaya Admin</p>
        <p>Harga</p>
      </div>
      <div class="border-b border-black p-3 flex flex-row justify-between">
        <p>Biaya Pengiriman</p>
        <p>Harga</p>
      </div>
      <div class="border-b border-black p-3 flex flex-row justify-between">
        <p>Total Bayar</p>
        <p>Harga</p>
      </div>
      <div class="p-7">
        <b-button type="is-danger" @click="handlePush()" expanded
          >Buat Pesanan</b-button
        >
      </div>
    </div>
  </div>
</template>
<script src="./script.js" />
