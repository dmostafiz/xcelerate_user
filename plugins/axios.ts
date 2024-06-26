import axios from 'axios'
// import { storeToRefs } from 'pinia'

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()

    return {
        provide: {
            axios: (accessToken: any = null) => {
                // console.log('headers ', accessToken)
                const token = useCookie('accessToken', {
                    watch: 'shallow'
                })

                const bearerToken = `Bearer ${accessToken || token.value}`

                console.log('token from axios: ', bearerToken)
                
                let createAxios = axios.create({
                    withCredentials: true,
                    baseURL: config.public.API_SERVER,
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: bearerToken
                    }
                });

                return createAxios
            },
        },
    };


})