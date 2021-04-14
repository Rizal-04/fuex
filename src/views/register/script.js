import Axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      isLoading: false,
      dataFromRegister: {
        username: "",
        password: "",
        numberPhone: "",
      },
    };
  },

  methods: {
    handleRouteToPageSign(tujuan) {
      this.$router.push(tujuan);
    },
    async handleRegister() {
      this.isLoading = true;
      var register = await Axios({
        url: "http://fuex-api.herokuapp.com/users",
        method: "POST",
        data: {
          username: this.dataFromRegister.username,
          password: this.dataFromRegister.password,
          mobilePhoneNumber: this.dataFromRegister.numberPhone,
          userType: "2",
        },
      });
      if (
        this.dataFromRegister.username === "" ||
        this.dataFromRegister.password === "" ||
        this.dataFromRegister.numberPhone === ""
      ) {
        this.$buefy.toast.open({
          duration: 1500,
          message: `Input Your Data!!!`,
          type: "is-danger",
        });
      } else {
        this.$buefy.toast.open({
          duration: 2000,
          message: `Register ` + register.data.message,
          type: "is-success",
        });
        this.$router.push("login");
      }
      this.isLoading = false;
      // console.log(register);
    },
  },
};
