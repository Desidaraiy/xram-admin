import { defineStore } from 'pinia'
import { proxyBaseUrl } from '~~/configs/fetchBaseUrl'

export const useMainStore = defineStore('main', {
  state: () => ({
    layoutIsLoading: false,
    clients: [],
    isSearchingClients: false,
    isSearchingClientsQuery: '',
    clientsFound: [],
    userToken: '',
    orders: [],
    currentOrder: {},
    currentCategory: "",
    sortedOrders: [],

    schedules: [],
  }),
  actions: {
    resetSearches(){
      this.isSearchingClients = false
      this.isSearchingClientsQuery = ''
    },
    setSearchingClientsQuery(payload){
      this.isSearchingClientsQuery = payload
      this.clientsFound = []
      this.isSearchingClients = true
      if(this.isSearchingClientsQuery === ''){
        this.isSearchingClients = false
        return
      }
      const query = this.isSearchingClientsQuery.toLowerCase();
      this.clientsFound = this.clients.filter(client => {
        return client.email.includes(query);
      });
    },

    setUserToken(payload){
      this.userToken = payload
    },
    resetCurrentAdmin(){
      this.currentAdmin = {}
    },
    async getClientsList(){
      const path = proxyBaseUrl+'/users'
      await $fetch(path, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + this.userToken
        }
      }).then(r => {
        if(r.state === 'success'){
          this.clients = r.data
        }
      })
    },
    sortClientsBySubscription(){
      this.clients.sort((a, b) => b.subscribed - a.subscribed)
    },

    async getOrdersList(){
      const path = proxyBaseUrl+'/orders'
      await $fetch(path, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + this.userToken
        }
      }).then(r => {
        if(r.state === 'success'){
          this.orders = r.data
        }
      })
    },

    async getCurrentOrder(id){
      const path = proxyBaseUrl+'/orders/'+id
      await $fetch(path, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + this.userToken
        }
      }).then(r => {
        if(r.state === 'success'){
          this.currentOrder = r.data
        }
      })
    },

    selectCategory(payload){
      this.currentCategory = payload
      this.sortedOrders = []
      let _orders = []
      for(let i = 0; i < this.orders.length; i++){
        if(this.orders[i].category === payload){
          _orders.push(this.orders[i])
        }
      }
      this.sortedOrders = _orders
    },

    resetCategory(){
      this.currentCategory = ""
      this.sortedOrders = []
    },

    async completeOrder(id){
      const path = proxyBaseUrl+'/orders/complete'+id
      await $fetch(path, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + this.userToken
        }
      }).then(r => {
        if(r.state === 'success'){
          this.getCurrentOrder(id)
        }
      })
    },

    async getScheduleList(){
      const path = proxyBaseUrl+'/schedules'
      this.schedules = []
      await $fetch(path, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + this.userToken
        }
      }).then(r => {
        if(r.state === 'success'){
          this.schedules = r.data
        }
      })
    },
    getScheduleById(id){
      
      const schedule = this.schedules.find((item) => item.id == id);
      return schedule
    },
    async updateSchedule(payload){
      console.log('updating')
      const path = proxyBaseUrl+'/schedules/update'
      await $fetch(path, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + this.userToken
        },
        body: payload
      }).then(r => {
        if(r.state === 'success'){
          this.getScheduleList()
        }
      })
    }
  }
})