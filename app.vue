<template>
  <div>
    <NuxtRouteAnnouncer />

    <div v-if="accessToken">You are logged in</div>
    <div v-else>Ooops! Not authenticated.</div>

    <div>AT: {{ accessToken }}</div>
  </div>
</template>

<script setup>

const accessToken = useCookie('accessToken')

</script>
