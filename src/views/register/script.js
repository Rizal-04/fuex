import Axios from "axios";
import Config from "../../config";

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
      if (
        this.dataFromRegister.username === "" ||
        this.dataFromRegister.password === "" ||
        this.dataFromRegister.numberPhone === ""
      ) {
        return;
      } else {
        this.isLoading = true;
        var register = await Axios({
          url: `${Config.baseUrl}users`,
          method: "POST",
          data: {
            username: this.dataFromRegister.username,
            password: this.dataFromRegister.password,
            mobilePhoneNumber: this.dataFromRegister.numberPhone,
            userType: "2",
          },
        });
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
