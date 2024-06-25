<template>
  <div>
    <div class="flex gap-2">
    <NuxtLink to="/">Index</NuxtLink>
    <NuxtLink to="/home">Home</NuxtLink>
    <NuxtLink to="/auth/login">Login</NuxtLink>
  </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>