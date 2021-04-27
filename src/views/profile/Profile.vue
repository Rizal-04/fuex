<template>
  <div class="flex justify-center items-center ">
    <div class="bg-white min-w-min w-5/12">
      <div class="card  p-7">
        <div>
          <div class="flex flex-row justify-between space-x-6">
            <img
              src="https://smpn2malili.sch.id/wp-content/uploads/2019/12/profile-icon.png"
              alt=""
              class="w-20 h-20"
            />
            <div class="flex justify-center items-start flex-col  w-full">
              <span>{{ dataForm.username }}</span>
              <span>0{{ dataForm.numberPhone }}</span>
            </div>
          </div>
        </div>
        <b-button class="mt-6" type="is-danger" @click="handleLogout()" outlined
          >Log out</b-button
        >
      </div>
    </div>
  </div>
</template>
<script src="./script.js" />
