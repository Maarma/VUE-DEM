import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
    path: "/",
    name: "homepage",
    component: () => import("./pages/Welcome.vue"),
},
{
    path: "/products",
    name: "products",
    component: () => import("./pages/Products.vue"),
    children: [
        {
        path: ":id",
        name: "product",
        component: () => import("./pages/Product.vue"),
    }
]
},
];

export const router = createRouter ({
    history: createWebHashHistory(),
    routes: routes,
});