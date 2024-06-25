<template>
  <div class="flex">
    <div class="w-[300px] h-screen gap-2 border-r">
      <div class="flex items-center justify-center">
        <Image class="w-[180px]" src="https://www.shopxcelerate.com/main-logo-black.png" />
      </div>
      <div class="p-5">
        <div class="flex flex-col gap-2">
          <NuxtLink to="/">Index</NuxtLink>
          <NuxtLink to="/home">Home</NuxtLink>
          <NuxtLink to="/auth/login">Login</NuxtLink>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <div class=" py-4 mb-10">
        <Container>

          <div class="flex justify-between">
            <div>
              <h1 class="font-semibold text-xl text-zinc-600">{{ title }}</h1>
            </div>
            <div>
              <Avatar :image="auth?.avatar" shape="circle" />
            </div>
          </div>

        </Container>
      </div>
      <Container>
        <slot />

      </Container>

    </div>
  </div>
</template>

<script setup>

// defineProps(['title'])
const title = useAttrs().title
const auth = useAuthStore()
</script>

<style></style>