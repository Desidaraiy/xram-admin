import { tokenCookieName, proxyBaseUrl } from '@/configs/fetchBaseUrl'
import { useMainStore } from '~~/stores/main'
import { useFetch } from '#app'

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
        useFetch(proxyBaseUrl + 'get-my-data', {
            method: 'POST',
            body: { token: etoken.value }
        })
        .then(resp => {
            let data = resp.data.value
            if (data.message !== 'ok') {
                return navigateTo('/login')
            }
            mainStore.resetSearches()
            mainStore.agregateAdminData(data)
            mainStore.getGroupsList()
            const allowedRoutes = new Set(mainStore.allowedNavigation.map(item => item.to))
            allowedRoutes.add('/login')
            if (![...allowedRoutes].some(route => new RegExp(`^${route}(\/.*)*(\\?.*)?$`).test(to.fullPath)) && to.fullPath !== '/permission_denied') {
                return navigateTo('/permission_denied');
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error)
        })
    }, 
    { 
        global: true 
    })
})