<template>
  <div class="flex justify-center items-center">
    <div class="bg-white w-6/12 my-12 h-20 ">
      <div class="card">
        <div class="columns is-gapless p-5">
          <div class="column flex justify-start text-lg mt-3">
            <p class="flex p-2">
              Pertalite-Rp.10.000/Liter
            </p>
          </div>
          <div class=" flex justify-end flex-col">
            <div class="flex justify-end">
              <b-button
                style="background-color:#FF4242; color:white; max-width: 100px; width: 100%"
                @click="handlePush()"
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
</template>
<script src="./script.js" />
