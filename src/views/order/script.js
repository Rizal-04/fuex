import Axios from "axios";
import Config from "../../config";

export default {
  name: "Order",
  data() {
    return {
      riwayatPesanan: [],
      status: [],
      isLoading: false,
      isEmpty: false,
      dataForm: {
        product: "",
        creatDate: "",
        buyer: "",
        statusPesanan: "",
      },
    };
  },
  methods: {
    handleFineStatus(orders) {
      var fineStatus = this.status.find((index) => index.code === orders);
      return fineStatus.name;
    },
    handleGetUser() {
      var getUser = JSON.parse(sessionStorage.getItem("user_data"));
      this.dataForm.buyer = getUser._id;
    },
    async handleGetStatusPesanan() {
      var getStatus = await Axios({
        url: `${Config.baseUrl}reference/transaction-status`,
        method: "GET",
      });
      console.log(getStatus);
      getStatus.data.data.map((data) => {
        const code = data.code;
        const name = data.name;
        this.status.push({
          name,
          code,
        });
      });
    },
    async handleGetTransactions() {
      this.isLoading = true;
      var getData = await Axios({
        url: `${Config.baseUrl}transactions`,
        params: {
          buyer: this.dataForm.buyer,
        },
        method: "GET",
      });
      console.log(getData);
      if (getData.data.status === "SUCCESS") {
        getData.data.data.map(async (index) => {
          var getDataProductById = await Axios({
            url: `${Config.baseUrl}product/${index.product}`,
            method: "GET",
          });
          Object.assign(index, {
            name: getDataProductById.data.data.name,
            price: getDataProductById.data.data.price,
          });
          this.riwayatPesanan.push(index);
        });
      } else {
        this.isEmpty = true;
      }

      this.isLoading = false;
    },

    handlePush(orders) {
      this.$router.push(`/order/${orders._id}`);
    },
  },
  mounted() {
    this.handleGetUser();
    this.handleGetTransactions();
    this.handleGetStatusPesanan();
  },
};
