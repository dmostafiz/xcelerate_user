<template>
<NuxtLayout name="home-layout">

  <NuxtPage />
  <p>Logged in as: {{ authStore.email }}</p>

</NuxtLayout>
</template>

<script setup>

definePageMeta({
  middleware: ['auth-middleware']
})

const authStore = useAuthStore()

</script>

<style></style>