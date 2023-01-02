<template>
  <div>
    <h1>This is product list page</h1>
    <div>
      <ul>
        <li v-for="(product, index) in products" :key="index"><NuxtLink :to="{name: 'products-id', params: {id: product._id}}">{{product.name}}</NuxtLink></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductListPage',
  data() {
    return {
      products: [],
    }
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
