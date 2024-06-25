<template>
  <NuxtLayout name="home-layout" title="Index">
    <p>Logged in as: {{ authStore.email }}</p>
  </NuxtLayout>
</template>

<script setup>

const authStore = useAuthStore()

</script>

<style></style>