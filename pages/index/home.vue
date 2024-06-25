<template>
  <NuxtLayout name="home-layout" title="Home">
    Home Page

  </NuxtLayout>
</template>

<script setup>
const authStore = useAuthStore()

defineExpose({
  title: 'Home page expose'
})
</script>

<style></style>