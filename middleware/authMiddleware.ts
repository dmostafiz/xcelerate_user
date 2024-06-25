export default defineNuxtRouteMiddleware(async (ctx) => {

    var token = useCookie('accessToken')
    const authStore = useAuthStore()

    if (import.meta.client) {
        token = useCookie('accessToken')
        console.log('Client Side Token: ', token.value)
        return
    }

    if (import.meta.server) {
        console.log('Server Side Token: ', token.value)
    }

    const { $axios } = useNuxtApp()
    const res = await $axios(token.value).post('/auth/authenticate')

    if (res?.data?.user) {
        console.log('user data: ', res?.data?.user?.email)
        authStore.addUser(res?.data.user)
    } else {
        authStore.removeUser()
        return navigateTo('/auth', {
            replace: true,
        })
    }

})

