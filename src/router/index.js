import Vue from "vue";
import VueRouter from "vue-router";
import Container from "@/containers/the-container";
import Home from "@/views/home";
import Login from "@/views/login";
import Register from "@/views/register";
import Help from "@/views/help";
import Order from "@/views/order";
import Profile from "@/views/profile";
import CreateOrder from "@/views/create-order";
import Search from "@/views/search";
import OrderDetail from "@/views/order-detail";

Vue.use(VueRouter);

const ifNotAuthenticated = (to, from, next) => {
  const getUserDataFromSession = JSON.parse(
    sessionStorage.getItem("user_data")
  );
  if (!getUserDataFromSession) {
    next();
    return;
  }
  if (
    to.query !== null &&
    to.query !== undefined &&
    to.query.ref !== null &&
    to.query.ref !== undefined
  ) {
    return next(to.query.ref);
  }
  next("/");
};

const ifAuthenticated = async (to, from, next) => {
  const getUserDataFromSession = JSON.parse(
    sessionStorage.getItem("user_data")
  );
  if (getUserDataFromSession) {
    return next();
  } else {
    next("/pages/login");
  }
};
// const routes = [];

function configRouters() {
  return [
    {
      path: "/",
      redirect: "/home",
      name: "",
      component: Container,
      children: [
        {
          path: "home",
          name: "Home",
          component: Home,
          beforeEnter: ifAuthenticated,
        },
        {
          path: "help",
          name: "Help",
          component: Help,
          beforeEnter: ifAuthenticated,
        },
        {
          path: "order",
          component: {
            render(c) {
              return c("router-view");
            },
          },
          children: [
            {
              path: "history",
              beforeEnter: ifAuthenticated,
              component: Order,
            },
            {
              path: "create",
              beforeEnter: ifAuthenticated,
              component: CreateOrder,
            },
            {
              path: ":id",
              beforeEnter: ifAuthenticated,
              component: OrderDetail,
            },
          ],
        },
        {
          path: "product",
          component: {
            render(c) {
              return c("router-view");
            },
          },
          children: [
            {
              path: "search",
              beforeEnter: ifAuthenticated,
              component: Search,
            },
          ],
        },
        {
          path: "profile",
          name: "Profile",
          component: Profile,
          beforeEnter: ifAuthenticated,
        },
      ],
    },
    {
      path: "/pages",
      name: "pages",
      component: {
        render(c) {
          return c("router-view");
        },
      },
      children: [
        {
          path: "login",
          name: "login",
          component: Login,
          beforeEnter: ifNotAuthenticated,
        },

        {
          path: "register",
          name: "register",
          component: Register,
          beforeEnter: ifNotAuthenticated,
        },
      ],
    },
  ];
}

const router = new VueRouter({
  mode: "history",
  routes: configRouters(),
  scrollBehavior: () => ({ y: 0 }),
});

export default router;
