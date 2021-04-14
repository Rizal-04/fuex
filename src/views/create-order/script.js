import Axios from "axios";

export default {
  name: "CreateOrder",
  data() {
    return {
      dataForm: {
        alamat: "",
        vehicleType: "",
      },
      options: {
        typeKendaraan: [],
      },
    };
  },
  methods: {
    handleGetAddres() {
      var alamat = sessionStorage.getItem("USER_ADDRESS");
      console.log(alamat);
      this.dataForm.alamat = alamat;
    },
    async handleGetVehicleTypeForReference() {
      var getData = await Axios({
        url: "http://fuex-api.herokuapp.com/reference/vehicle-type",
        method: "GET",
      });
      getData.data.data.map((index) => {
        const value = index._id;
        const text = index.name;
        this.options.typeKendaraan.push({
          value,
          text,
        });
      });
    },
    handlePush() {
      this.$router.push("/order/:id");
    },
  },
  mounted() {
    this.handleGetAddres();
    this.handleGetVehicleTypeForReference();
  },
};
