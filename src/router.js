import Vue from 'vue';
import Router from 'vue-router';
import ProductsTable from "@/components/ProductsTable";
import AddProduct from "@/components/AddProduct";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'ProductsTable',
            component: ProductsTable
        },
        {
            path: '/add',
            name: 'AddProduct',
            component: AddProduct
        }
    ]
});

export default router;
