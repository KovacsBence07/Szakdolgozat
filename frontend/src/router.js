import {createWebHistory, createRouter} from "vue-router";

const routes = [
    {
        path: "/",
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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;