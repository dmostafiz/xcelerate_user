<template>
    <NuxtPage ref="page" />
    
</template>

<script setup>

definePageMeta({
  middleware: ['auth-middleware']
})
const page = ref()

</script>

<style></style>