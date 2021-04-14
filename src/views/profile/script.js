import Login from "@/views/login";

export default {
  name: "Profile",
  components: { Login },
  methods: {
    handleLogout() {
      sessionStorage.clear();
      window.location.reload();
    },
  },
};
