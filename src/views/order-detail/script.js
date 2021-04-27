import Axios from "axios";
import Config from "../../config";

export default {
  name: "OrderDetail",
  data() {
    return {
      dataOrder: {
        quantity: 0,
        name: "",
        adminFee: 0,
        deliveryCost: 0,
        totalBayar: 0,
        totalHarga: 0,
        address: "",
        statusPesanan: "",
        statusCode: "",
        idProduct: "",
        buyer: "",
        price: 0,
        numberPhone: 0,
        username: "",
      },
    };
  },
  methods: {
    async handleGetStatusReference() {
      var getStatus = await Axios({
        url: `${Config.baseUrl}reference/transaction-status/findByCode`,
        params: {
          code: this.dataOrder.statusCode,
        },
        method: "GET",
      });
      if (getStatus.data.status === "SUCCESS") {
        this.dataOrder.statusPesanan = getStatus.data.data.name;
      }
      console.log(getStatus);
    },
    handleTotalBayar() {
      this.dataOrder.totalBayar =
        parseFloat(this.dataOrder.adminFee) +
        parseFloat(this.dataOrder.deliveryCost) +
        parseFloat(this.dataOrder.totalHarga);
    },
    handleTotalHarga() {
      this.dataOrder.totalHarga =
        this.dataOrder.quantity * this.dataOrder.price;
    },
    async handleGetProdyctById() {
      var getProductById = await Axios({
        url: `${Config.baseUrl}product/${this.dataOrder.idProduct}`,
        method: "GET",
      });
      console.log(getProductById);
      if (getProductById.data.status === "SUCCESS") {
        this.dataOrder.name = getProductById.data.data.name;
        this.dataOrder.price = getProductById.data.data.price;
      } else if (getProductById.data.status === "ERROR") {
        this.$buefy.toast.open({
          duration: 2000,
          message: `ERROR`,
          type: "is-danger",
        });
      }
    },
    async handleGetOrder() {
      var getOrderFromTransactions = await Axios({
        url: `${Config.baseUrl}transactions/${this.$route.params.id}`,
        method: "GET",
      });
      if (getOrderFromTransactions.data.status === "SUCCESS") {
        this.dataOrder.quantity = getOrderFromTransactions.data.data.quantity;
        this.dataOrder.name = getOrderFromTransactions.data.data.name;
        this.dataOrder.adminFee = getOrderFromTransactions.data.data.adminFee;
        this.dataOrder.deliveryCost =
          getOrderFromTransactions.data.data.deliveryCost;
        this.dataOrder.address = getOrderFromTransactions.data.data.address;
        this.dataOrder.idProduct = getOrderFromTransactions.data.data.product;
        this.dataOrder.statusCode = getOrderFromTransactions.data.data.status;
        this.dataOrder.buyer = getOrderFromTransactions.data.data.buyer;
        await this.handleGetProdyctById();
        this.handleTotalHarga();
        this.handleTotalBayar();
        this.handleGetStatusReference();
        this.handleGetUserById();
      } else if (getOrderFromTransactions.data.status === "ERROR") {
        this.$buefy.toast.open({
          duration: 2000,
          message: `Try Again`,
          type: "is-danger",
        });
      }
      console.log(getOrderFromTransactions);
    },
    routeToWhatsapp() {
      window.open(
        `https://api.whatsapp.com/send?phone=+62${this.dataOrder.numberPhone}`
      );
    },
    handleRouter() {
      this.$router.push("/home");
    },
    async handleCancelOrder() {
      if (window.navigator.onLine === false) {
        this.$buefy.toast.open({
          duration: 1000,
          message: `Internet Anda terputus`,
          type: "is-danger",
        });
      } else {
        if (window.confirm("Batalkan Pesanan ini?")) {
          var deleteData = await Axios({
            url: `${Config.baseUrl}transactions/cancel/${this.$route.params.id}`,
            method: "PUT",
          });
          if (deleteData.data.status === "SUCCESS") {
            this.$buefy.toast.open({
              duration: 2000,
              message: `Pesanan anda di Batalkan`,
              type: "is-danger",
            });
            window.location.reload();
          } else if (deleteData.data.status === "ERROR") {
            this.$buefy.toast.open({
              duration: 2000,
              message: `Pembatalan Gagal`,
              type: "is-danger",
            });
          }
        }
      }
    },
    async handleGetUserById() {
      var getUserById = await Axios({
        url: `${Config.baseUrl}users/607e6603b07f730022a0c13b`,
        method: "GET",
      });
      this.dataOrder.numberPhone = getUserById.data.data.mobilePhoneNumber;
      this.dataOrder.username = getUserById.data.data.username;
    },
  },
  mounted() {
    this.handleGetOrder();
  },
};
