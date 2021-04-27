import Axios from "axios";
import Config from "../../config";

export default {
  name: "CreateOrder",
  data() {
    return {
      isLoading: false,
      dataForm: {
        alamat: "",
        name: "",
        price: 0,
        quantity: 1,
        totalHarga: 0,
        adminFee: 1000,
        deliveryCost: 10000,
        totalBayar: 0,
        idBuyer: "",
        idProduct: "",
      },
    };
  },
  methods: {
    handleTotalBayar() {
      this.dataForm.totalBayar =
        this.dataForm.adminFee +
        this.dataForm.deliveryCost +
        this.dataForm.totalHarga;
    },
    handleTotalHarga() {
      this.dataForm.totalHarga = this.dataForm.quantity * this.dataForm.price;
    },
    handleQuantityKurang() {
      if (this.dataForm.quantity <= 1) {
        return;
      } else {
        this.dataForm.quantity--;
        this.handleTotalHarga();
        this.handleTotalBayar();
      }
    },
    handleQuantityTambah() {
      this.dataForm.quantity++;
      this.handleTotalHarga();
      this.handleTotalBayar();
    },
    async handleGetDataById() {
      var getDataById = await Axios({
        url: `${Config.baseUrl}product/${this.$route.query.product}`,
        method: "GET",
      });
      if (getDataById.data.status === "SUCCESS") {
        this.dataForm.name = getDataById.data.data.name;
        this.dataForm.price = getDataById.data.data.price;
        this.dataForm.idProduct = getDataById.data.data._id;
        this.handleTotalHarga();
        this.handleTotalBayar();
      } else if (getDataById.data.status === "ERROR") {
        this.$buefy.toast.open({
          duration: 2000,
          message: `Try Again`,
          type: "is-danger",
        });
      }
    },
    handleGetAddres() {
      var alamat = sessionStorage.getItem("USER_ADDRESS");
      console.log(alamat);
      this.dataForm.alamat = alamat;
    },
    handleGetUserFromLogin() {
      var getUser = JSON.parse(sessionStorage.getItem("user_data"));
      this.dataForm.idBuyer = getUser._id;
    },
    async handlePush() {
      if (window.navigator.onLine === false) {
        this.$buefy.toast.open({
          duration: 1000,
          message: `Internet Anda terputus`,
          type: "is-danger",
        });
      } else {
        if (window.confirm("Buat Pesanan ini?")) {
          this.isLoading = true;
          var postData = await Axios({
            url: `${Config.baseUrl}transactions`,
            method: "POST",
            data: {
              buyer: this.dataForm.idBuyer,
              product: this.dataForm.idProduct,
              deliveryCost: this.dataForm.deliveryCost,
              address: this.dataForm.alamat,
              adminFee: this.dataForm.adminFee,
              quantity: this.dataForm.quantity,
            },
          });

          if (postData.data.status === "SUCCESS") {
            this.$buefy.toast.open({
              duration: 1500,
              message: postData.data.message,
              type: "is-success",
            });
            setTimeout(() => {
              this.$router.push(`/order/${postData.data.data._id}`);
            }, 1000);
          } else if (postData.data.status === "ERROR") {
            this.$buefy.toast.open({
              duration: 2000,
              message: postData.data.message,
              type: "is-danger",
            });
          }
        }
        this.isLoading = false;
      }

      console.log(postData);
    },
  },
  mounted() {
    this.handleGetDataById();
    this.handleTotalBayar();
    this.handleGetAddres();
    this.handleGetUserFromLogin();
    console.log(this.$route.query.product);
  },
};
