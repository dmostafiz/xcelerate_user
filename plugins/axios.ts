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
                
                let createAxios = axios.create({
                    withCredentials: true,
                    baseURL: config.public.API_SERVER,
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${accessToken || token.value}`
                    }
                });

                return createAxios
            },
        },
    };


})