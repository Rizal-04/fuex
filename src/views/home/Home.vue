<template>
  <div class="p-7">
    <p class="title is-4">Hallo {{ username }}</p>
    <p>
      Saldo anda Rp.
      <font class="text-yellow-500">{{
        walletBalance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")
      }}</font>
    </p>
    <section>
      <b-modal :width="400" v-model="modalStatus">
        <section class="modal-card-body" style="text-align:left;">
          <b-field label="Label Alamat">
            <b-input
              v-model="dataModal.labelAlamat"
              type="text"
              placeholder="your Label Alamat"
            >
            </b-input>
          </b-field>
          <b-field label="Alamat Lengkap">
            <b-input
              v-model="dataModal.alamatLengkap"
              type="textarea"
              placeholder="Tulis Alamat Lengkap"
            >
            </b-input>
          </b-field>

          <b-field label="Kode Pos">
            <b-input
              v-model="dataModal.kodePos"
              type="text"
              placeholder="Tulis Kode Pos"
            >
            </b-input>
          </b-field>

          <footer class="modal-card-medium flex justify-center">
            <b-button
              class="w-2/3"
              type="is-danger"
              @click="handleConfirmAdrees()"
              >Konfirmasi</b-button
            >
          </footer>
        </section>
      </b-modal>
    </section>
    <div class="justify-center flex p-3">
      <div class="card min-w-min w-6/12">
        <div class="card-content flex ">
          <b-button
            class="m-4 p-1"
            type="is-danger"
            @click="modalStatus = true"
            expanded
          >
            Beli Bensin
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js" />
