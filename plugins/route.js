import { tokenCookieName, proxyBaseUrl } from '@/configs/fetchBaseUrl'
import { useMainStore } from '~~/stores/main'

export default defineNuxtPlugin(() => {
    addRouteMiddleware('global-test', (to, from) => {
        const etoken = useCookie(tokenCookieName, {sameSite: 'None', secure: true})
        const mainStore = useMainStore()
        if (etoken.value !== '') {
            mainStore.setUserToken(etoken.value)
        }
        if (to.fullPath === '/login') {
            return
        }
        $fetch(proxyBaseUrl + '/check', {
            method: 'POST',
            body: { token: etoken.value }
        })
        .then(resp => {
            if (resp.state !== 'success') {
                return navigateTo('/login');
            }
        })
    }, 
    { 
        global: true 
    })
})