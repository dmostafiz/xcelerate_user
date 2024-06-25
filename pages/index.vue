<template>
    <NuxtPage ref="page" />
    
</template>

<script setup>

definePageMeta({
  middleware: ['auth-middleware']
})
const page = ref()

const authStore = useAuthStore()

console.log('page: ', page)

</script>

<style></style>