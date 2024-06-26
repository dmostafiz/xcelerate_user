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
    
    console.log('middleware res: ', res?.data)

    if (res?.data?.user) {
        authStore.addUser(res?.data.user)
    } else {
        authStore.removeUser()
        console.log('User not found!')
        return navigateTo('/auth/login', {
            replace: true,
        })
    }

})

