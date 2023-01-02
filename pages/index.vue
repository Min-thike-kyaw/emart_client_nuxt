<template>
  <div>


    <NavBar />
    <!-- <NuxtLink to="/products">
      Product Page
    </NuxtLink> -->

  </div>
</template>

<script>
import NavBar from '~/components/layouts/NavBar.vue';
export default {
  name: 'IndexPage',
  components: {
    NavBar
  }
}
</script>
