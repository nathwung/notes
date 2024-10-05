<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/Layout/NavBar.vue'
import { useStoreAuth } from '@/stores/storeAuth'

onMounted(()=>{
  const storeAuth = useStoreAuth()
  storeAuth.init()
})
</script>

<template>
  <NavBar></NavBar>
  <div class="container is-max-desktop px-2 py-4">
    <RouterView />
  </div>

</template>

<style>

@import 'bulma/css/bulma.min.css';

</style>
