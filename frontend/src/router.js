import {createWebHistory, createRouter} from "vue-router";

const routes = [
    
    {
        path: "/products",
        alias: "/products",
        name: "products",
        component: () => import("./components/ProductsList")
    },
    {
        path: "/products/:id",
        name: "product-details",
        component: ()=> import("./components/Product")
    },
    {
        path: "/add",
        name: "add",
        component: ()=> import("./components/AddProduct")
    },
    {
        path: "/userproducts",
        name: "user-products",
        component: ()=> import("./components/UserProducts")
    },
    {
        path: "/login",
        name: "login",
        component: ()=> import("./components/Login")
    },
    {
        path: "/register",
        name: "register",
        component: ()=> import("./components/Register")
    },
    {
        path: "/",
        alias: "/home",
        name: "home",
        component: ()=> import("./components/Home")
    },
   
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;