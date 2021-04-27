import Axios from "axios";
import Config from "../../config";

export default {
  name: "Search",
  data() {
    return {
      product: [],
    };
  },
  methods: {
    handlePush(products) {
      this.$router.push(`/order/create?product=${products._id}`);
    },
    async handleGetProduct() {
      var get = await Axios({
        url: `${Config.baseUrl}product`,
        method: "GET",
      });
      console.log(get);
      this.product = get.data.data;
    },
  },
  mounted() {
    this.handleGetProduct();
  },
};
