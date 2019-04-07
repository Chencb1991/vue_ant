import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Myorder from "./views/Myorder.vue"
import Myuser from "./views/Myuser.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/myorder",
      name: "myorder",
      component: Myorder
    },
    {
      path: "/myuser",
      name: "myuser",
      component: Myuser
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
