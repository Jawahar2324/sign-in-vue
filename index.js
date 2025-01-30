// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue"; 
import Dashboard from "@/components/DashBoard.vue"; 
import forgotpassword from "@/components/forgotPassword.vue";

const routes = [
  { path: "/", name: "Hello", component: HelloWorld },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  {path:"/forgotpassword",name:"forgotPassword", component: forgotpassword},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
