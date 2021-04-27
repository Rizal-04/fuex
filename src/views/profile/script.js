export default {
  name: "Profile",
  data() {
    return {
      dataForm: {
        username: "",
        numberPhone: 0,
      },
    };
  },

  methods: {
    handleLogout() {
      sessionStorage.clear();
      window.location.reload();
    },
    handleGetSesionUsername() {
      var getSesion = JSON.parse(sessionStorage.getItem("user_data"));
      this.dataForm.username = getSesion.username;
      this.dataForm.numberPhone = getSesion.mobilePhoneNumber;
    },
  },
  mounted() {
    this.handleGetSesionUsername();
  },
};
