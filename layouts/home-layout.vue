<template>
  <div class="flex">
    <div class="hidden lg:block w-[300px] h-screen gap-2 border-r">
      <div class="flex items-center justify-center">
        <Image class="w-[180px]" src="https://www.shopxcelerate.com/main-logo-black.png" />
      </div>
      <div class="p-5">
        <HomeSidebarMenuItems />
      </div>
    </div>
    <div class="flex-1">
      <div class="border-b border-zinc-100 py-2 mb-12">
        <Container>

          <div class="flex justify-between">
            <div class="flex items-center gap-2">
              <div class="lg:hidden">
                <NuxtImg width="40px" src="https://www.go20x.com/icons/nav-logo.svg" />
              </div>
              <div>
                <h1 class="font-semibold text-xl text-zinc-600">{{ title }}</h1>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <div>
                <Avatar :image="auth?.avatar" shape="circle" />
              </div>
              <HomeSideDrawer class="block lg:!hidden"/>
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