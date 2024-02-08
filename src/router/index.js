import { createRouter, createWebHistory } from "vue-router";

// import en lazy load 
const Home = () => import("@/views/Home.vue");
const Customers = () => import("@/views/Customers.vue");
const NotFound = () => import("@/views/NotFound.vue");
const AddCustomer = () => import("@/views/AddCustomer.vue");

export const router = createRouter({
    history : createWebHistory(),
    routes: [
        {path: "/", name: "Home", component: Home},
        {path: "/customers", name: "Customers", component: Customers},
        {path: "/add", name: "AddCustomers", component: AddCustomer},
        {path: "/:pathMatch(.*)", name: "NotFound", component: NotFound}
    ]
})