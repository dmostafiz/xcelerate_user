<template>
  <div class="flex gap-2">
    <NuxtLink to="/">Index</NuxtLink>
    <NuxtLink to="/home">Home</NuxtLink>
    <NuxtLink to="/auth/login">Login</NuxtLink>
  </div>
  <NuxtPage />
  <p>Logged in as: {{ authStore.email }}</p>
</template>

<script setup>

definePageMeta({
  middleware: ['auth-middleware']
})

const authStore = useAuthStore()

</script>

<style></style>