import Axios from "axios";
import Config from "../../config";

export default {
  name: "Home",
  data() {
    return {
      username: "",
      walletBalance: 0,
      walletId: "",

      dataModal: {
        labelAlamat: "",
        alamatLengkap: "",
        kodePos: "",
      },
      modalStatus: false,
    };
  },
  methods: {
    handleGetUsername() {
      var getUsername = JSON.parse(sessionStorage.getItem("user_data"));
      this.username = getUsername.username;
      this.walletId = getUsername.wallet;
    },
    async handleGetWalletByid() {
      var getWallet = await Axios({
        url: `${Config.baseUrl}wallet/${this.walletId}`,
        method: "GET",
      });
      console.log(getWallet);
      this.walletBalance = getWallet.data.data.balance;
    },
    handleConfirmAdrees() {
      const addressPayload = JSON.stringify({
        labelAlamat: this.dataModal.labelAlamat,
        alamatLengkap: this.dataModal.alamatLengkap,
        kodePos: this.dataModal.kodePos,
      });
      if (
        this.dataModal.labelAlamat === "" ||
        this.dataModal.alamatLengkap === "" ||
        this.dataModal.kodePos === ""
      ) {
        return;
      } else {
        this.modalStatus = false;
        sessionStorage.setItem(
          "USER_ADDRESS",
          ` ${this.dataModal.labelAlamat}, ${this.dataModal.alamatLengkap}, ${this.dataModal.kodePos}`
        );
        this.$router.push("/product/search");
      }
      console.log(addressPayload);
    },
  },
  mounted() {
    this.handleGetUsername();
    this.handleGetWalletByid();
  },
};
