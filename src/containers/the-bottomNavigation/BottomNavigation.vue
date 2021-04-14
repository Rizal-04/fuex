<template>
  <div class="w-full fixed bg-gray-100 bottom-0 flex justify-center	">
    <button class="m-4 p-1" @click="handleRoute('/home')">Home</button>
    <button class="m-4 p-1" @click="handleRoute('/order/history')">
      Riwayat Pesanan
    </button>
    <button class="m-4 p-1" @click="handleRoute('/help')">Help</button>
    <button class="m-4 p-1" @click="handleRoute('/profile')">Profile</button>
  </div>
</template>
<script src="./script.js" />
