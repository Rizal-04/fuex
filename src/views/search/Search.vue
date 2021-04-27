<template>
  <div class="flex justify-center items-center mb-10">
    <div class="bg-white ">
      <div v-for="products in product" :key="products.id">
        <div class="card">
          <div class="columns is-gapless p-3">
            <div class="column flex justify-start text-lg mt-3">
              <p class="flex p-2">
                {{ products.name }}-Rp.{{
                  products.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
                }}/Liter
              </p>
            </div>
            <div class=" flex justify-end flex-col">
              <div class="flex justify-end">
                <b-button
                  style="background-color:#FF4242; color:white; max-width: 100px; width: 100%"
                  @click="handlePush(products)"
                  >Pilih</b-button
                >
              </div>
              <div class="mt-4">
                <p class="text-sm">
                  Fandbrother Official Store
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./script.js" />
