<template>
  <NuxtLayout>
    <NuxtPwaManifest />
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>

const accessToken = useCookie('accessToken')

</script>
