<template>
  <div>
    <NavBar />
    <div class="container mt-10 mx-auto">
      <div class="flex flex-row gap-3">
        <ProductCart class="basis-1/3" v-for="(product, index) in products" :key="index" :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/layouts/NavBar.vue';
export default {
  name: 'ProductListPage',
  data() {
    return {
      products: [],
    }
  },
  components: {
    NavBar,
  },
  async fetch() {
    const response = await this.$http.$get('products')
    this.products = response.data;

  },
  // async asyncData({ $axios }) {
  //   const ip = await $axios.$get('products')
  //   console.log(ip, "hello world");
  // }



}
</script>
