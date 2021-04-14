import Axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      isLoading: false,
      dataForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    handleRouteToPageLogin(tujuan) {
      this.$router.push(tujuan);
    },
    async handleLogin() {
      this.isLoading = true;
      var response = await Axios({
        url: "http://fuex-api.herokuapp.com/users/login",
        method: "POST",
        data: {
          username: this.dataForm.username,
          password: this.dataForm.password,
        },
      });
      console.log(response);

      if (response.data.status === "SUCCESS") {
        this.$buefy.toast.open({
          duration: 1500,
          message: response.data.message,
          type: "is-success",
        });
        var convertToString = JSON.stringify(response.data.data);
        window.location.reload();
        sessionStorage.setItem("user_data", convertToString);
      } else if (response.data.status === "ERROR") {
        this.$buefy.toast.open({
          duration: 1000,
          message: response.data.message,
          type: "is-danger",
        });
      }
      this.isLoading = false;
    },
  },
};
