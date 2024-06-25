<template>
  <div class="h-screen bg-black bg-[url('https://www.go20x.com/img/hero-bg-img.png')]">

    <div class="p-10">
      <NuxtImg width="80px" src="https://www.go20x.com/icons/nav-logo.svg" />
    </div>

    <div class="flex flex-col xl:flex-row">
      <div class="xl:w-[55%] bg-cover">

      </div>
      <div class="flex-1">
        <div class="w-full h-full p-5 xl:p-16 flex items-center justify-center">
          <form @submit.prevent="submitLogin">
            <Card class="">
              <template #title>Sign in</template>
              <template #content>
                <div class="flex flex-col gap-1 mb-3">
                  <label for="username">Username / Email</label>
                  <InputText type="text" placeholder="Enter your email / username" v-model="username" />
                </div>
                <div class="flex flex-col gap-1 mb-3">
                  <label for="password">Password</label>
                  <Password v-model="password" placeholder="Enter password" toggleMask />
                  <NuxtLink to="/auth/forgot-password">
                    <span class="text-sm text-zinc-600 hover:text-zinc-900">Forget password?</span>
                  </NuxtLink>
                </div>
                <div v-if="errorMessage">
                  <span class="text-red-400">{{ errorMessage }}</span>
                </div>
              </template>

              <template #footer>
                <div>
                  <Button :loading="loading" type="submit" class="rounded-none" label="Login Now" />
                </div>

              </template>

            </Card>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
const username = ref('')
const password = ref('')
const { $axios } = useNuxtApp()
const accessToken = useCookie('accessToken')
const loading = ref(false)
const errorMessage = ref(null)

const toast = useToast()

const authStore = useAuthStore()

const submitLogin = async (ev) => {
  loading.value = true
  errorMessage.value = null
  // alert(password.value)
  const res = await $axios().post('/auth/login', {
    username: username.value,
    password: password.value,
    user_type: 'user'
  })

  loading.value = false

  if (res?.data?.ok) {
    accessToken.value = res?.data?.token
    authStore.addUser(res?.data?.user)

    navigateTo('/')
  } else {
    errorMessage.value = res?.data?.msg
    toast.add(
      {
        severity: 'error',
        summary: 'Ops!',
        detail: res?.data?.msg,
        life: 3000
      });
  }

  console.log('axios res: ', res)
}
</script>

<style></style>