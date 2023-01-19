<template>
  <div>


    <NavBar />
    <!-- <NuxtLink to="/products">
      Product Page
    </NuxtLink> -->
    <Button label="Secondary" class="p-button-secondary" />
    <p class="text-lg">Localhost</p>
    <Sidebar :visible.sync="visibleLeft">
    Content
  </Sidebar>


  </div>
</template>

<script>
// import Button from 'primevue/button';
// import Sidebar from 'primevue/sidebar';
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
