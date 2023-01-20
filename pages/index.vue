<template>
  <div>


    <NavBar />
    <!-- <NuxtLink to="/products">
      Product Page
    </NuxtLink> -->
    <Button label="Secondary" class="p-button-secondary" />
    <p class="text-lg">Localhost</p>



  </div>
</template>

<script>

import NavBar from '~/components/layouts/NavBar.vue';
export default {
  name: 'IndexPage',
  data(){
    return {
      visibleLeft: true
    }
  },
  components: {
    NavBar
  }
}
</script>
