// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import CartPage from "@/views/CartPage.vue";
import loginPage from "@/views/auth/loginPage.vue";
import registerPage from "@/views/auth/registerPage.vue";
import ProductsList from "@/views/Product/List/ProductsList.vue";
import ViewProduct from "@/views/Product/Show/ViewProduct.vue";
import EditProduct from "@/views/Product/Show/EditProduct.vue";

function checkAccess() {
  console.log("checking access");
}

function loadProduct() {
  console.log("checking products");
}

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
    props: false,
  },
  {
    path: "/products",
    beforeEnter: () => {
      checkAccess();
      loadProduct();
    },
    children: [
      {
        name: "ProductsList",
        path: "",
        component: ProductsList,
      },
      {
        path: "/products/:productId",
        beforeEnter: () => {
          checkAccess();
          loadProduct();
        },
        children: [
          {
            name: "view_product",
            path: "",
            component: ViewProduct,
          },
          {
            name: "edit_product",
            path: "edit",
            component: EditProduct,
          },
        ],
      },
    ],
  },
  {
    path: "/cart",
    name: "CartPage",
    component: CartPage,
    props: false,
  },
  {
    path: "/login",
    name: "loginPage",
    component: loginPage,
    props: false,
  },
  {
    path: "/register",
    name: "registerPage",
    component: registerPage,
    props: false,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/not-found",
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
