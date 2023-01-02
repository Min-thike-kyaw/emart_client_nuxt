<template>
  <NuxtLink class=" h-80 block border border-gray-500"  :to="{name: 'products-id', params: {id: product._id}}">
    <img class="h-40 w-auto" :src="product.images[0]" alt="">
    <div class="p-4">
      <span class="text-lg mb-1 block text-gray-500">{{ product.name }}</span>
      <span class="text-sm block font-bold text-gray-500">${{ product.price }}</span>
    </div>
  </NuxtLink>
</template>
<script>
export default {
  props: {
    product: Object,
  }
}

</script>
