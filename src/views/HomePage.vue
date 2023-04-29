<template>
  <main>
    <product-display-component></product-display-component>
    <products-component></products-component>
    <about-us-component></about-us-component>
    <news-letters-component></news-letters-component>
  </main>
</template>

<script>
import ProductDisplayComponent from "@/components/ProductDisplayComponent.vue";
import ProductsComponent from "@/components/ProductsComponent.vue";
import AboutUsComponent from "@/components/AboutUsComponent.vue";
import NewsLettersComponent from "@/components/NewsLettersComponent.vue";
export default {
  name: "HomePage",
  components: {
    ProductsComponent,
    ProductDisplayComponent,
    AboutUsComponent,
    NewsLettersComponent,
  },
};
</script>