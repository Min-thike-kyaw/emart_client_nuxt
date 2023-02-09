<template>
  <div>
    <h1>This is product list page</h1>
    <div>
      <ul>
        <li v-for="(product, index) in products" :key="product">{{product}}</li>
      </ul>
    </div>
    <NuxtLink to="/products/2">go to detail</NuxtLink>
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
    this.products = await this.$http.$get('https://api.nuxtjs.dev/posts')
    console.log(this.products)
  },

}
</script>
