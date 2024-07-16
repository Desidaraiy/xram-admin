import { defineStore } from 'pinia'
import { proxyBaseUrl } from '~~/configs/fetchBaseUrl'
import {
  mdiValveClosed,
  mdiChartArc,
  mdiShieldAccount,
  mdiNotificationClearAll,
  mdiStar,
  mdiChat,
  mdiAccountMultiplePlus
} from '@mdi/js'



export const useMainStore = defineStore('main', {
  state: () => ({
    layoutIsLoading: false,
    clients: [
    ],
    isSearchingClients: false,
    isSearchingClientsQuery: '',
    clientsFound: [],
    groups: [
    ],
    filteredGroups: [],
    isSearchingGroups: false,
    isSearchingGroupsQuery: '',
    groupsFound: [],
    currentGroupClients: [],
    currentGroup: {},
    admins: [
    ],
    isSearchingAdmins: false,
    isSearchingAdminsQuery: '',
    adminsFound: [],
    currentAdmin: {},
    currentAdminSections: [],
    messages: [],
    isSearchingMessages: false,
    foundMessages: [],
    userName: '',
    userToken: '',
    adminData: {
      id: 0,
      name: '',
      phone: '',
      email: '',
    },
    chatAdminData: {
      id: 0,
    },
    isSearchingDialogs: false,
    isSearchingDialogsQuery: '',
    dialogsFound: [],
    dialogs: [],
    currentDialogId:0,
    dialogIsTyping: false,
    currentDialogMessages:[],
    currentDialogClientName: '',
    currentDialogClientId: 0,
    currentDialogAccepted: false,
    typingTimeout: null,
    allUnreadMessagesCount: 0,
    userLogged: false,
    allowedNavigation: [
    ],
    allNavigation: [
      {
        to: '/',
        icon: mdiShieldAccount,
        label: 'Клиенты'
      },
      {
        to: '/pushmailing',
        icon: mdiNotificationClearAll,
        label: 'Рассылка'
      },
      {
        to: '/advertising',
        icon: mdiStar,
        label: 'Реклама'
      },
      {
        to: '/groups',
        label: 'Группы',
        icon: mdiAccountMultiplePlus
      },
      {
        to: '/admins',
        label: 'Администраторы',
        icon: mdiValveClosed
      }
    ],
    adverts: [],
    pushmailing: [],
    stats: {},
    statsLoaded: false
  }),
  actions: {
    // сброс поисков
    resetSearches(){
      this.isSearchingGroups = false
      this.isSearchingGroupsQuery = ''
      this.isSearchingClients = false
      this.isSearchingClientsQuery = ''
      this.isSearchingAdmins = false
      this.isSearchingAdminsQuery = ''
      this.isSearchingMessages = false
      this.isSearchingDialogs = false
      this.isSearchingDialogsQuery = ''
    },
    // ?завод поиска
    setSearchingGroupsQuery(payload){
      this.isSearchingGroupsQuery = payload
      this.groupsFound = []
      this.isSearchingGroups = true
      if(this.isSearchingGroupsQuery === ''){
        this.isSearchingGroups = false
        return
      }
      const query = this.isSearchingGroupsQuery.toLowerCase();
      this.groupsFound = this.groups.filter(group => {
        return group.name.toLowerCase().includes(query);
      });
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

      const onlyLetters = /^[a-zA-Zа-яА-ЯёЁ]+$/;
      const onlyDigits = /^[0-9]+$/;
    
      this.clientsFound = this.clients.filter(client => {
        if(onlyLetters.test(query)){
          return client.city.toLowerCase().includes(query);
        }else{
          return client.phone.includes(query);
        }
      });
    },
    setSearchingAdminsQuery(payload){
      this.isSearchingAdminsQuery = payload
      this.adminsFound = []
      this.isSearchingAdmins = true
      if(this.isSearchingAdminsQuery === ''){
        this.isSearchingAdmins = false
        return
      }
      const query = this.isSearchingAdminsQuery.toLowerCase();
      this.adminsFound = this.admins.filter(admin => {
        return admin.fio.toLowerCase().includes(query);
      });
    },
    // ! завод поиска

    // ?поиск сообщений по датам 

    getMessagesList(payload){
      const { startDate, endDate } = payload
      this.isSearchingMessages = true;
      if (!startDate && !endDate) {
        this.isSearchingMessages = false;
        this.foundMessages = []
      }
      if (startDate && endDate) {
        this.foundMessages = this.messages.filter(message => {
          const messageDate = new Date(message.date.replace(/-/g, '/'));
          const start = new Date(startDate.split('.').reverse().join('/'));
          const end = new Date(endDate.split('.').reverse().join('/'));
          return messageDate >= start && messageDate <= end;
        });
      } else if (startDate && !endDate) {
        this.foundMessages = this.messages.filter(message => {
          const messageDate = new Date(message.date.replace(/-/g, '/'));
          const selectedDate = new Date(startDate.split('.').reverse().join('/'));
          return messageDate >= selectedDate; });
        } else if (!startDate && endDate) {
        this.foundMessages = this.messages.filter(message => {
          const messageDate = new Date(message.date.replace(/-/g, '/'));
          const selectedDate = new Date(endDate.split('.').reverse().join('/'));
          return messageDate < selectedDate;
        });
      }
    },

    // ! поиск сообщений по датам

    setLayoutIsLoading(payload){
      this.layoutIsLoading = payload
    },
    setUser(payload){
      this.userName = payload.name
      this.userPhone = payload.phone
      this.userEmail = payload.email
      this.userAvatar = payload.avatar
    },
    setUserLogged(payload){
      this.userLogged = payload
    },
    setUserToken(payload){
      this.userToken = payload
    },
    setMessages(payload){
      this.messages = payload
    },
    agregateAdminData(payload){
      this.adminData.email = payload.admin.email
      this.adminData.name = payload.admin.fio
      this.adminData.phone = payload.admin.phone
      this.adminData.id = payload.admin.id
      this.userName = payload.admin.fio
      this.userLogged = true
      this.allowedNavigation = []
      for(let i = 0; i < payload.sections.length; i++){
        for(let j = 0; j < this.allNavigation.length; j++){
          if(payload.sections[i].route == this.allNavigation[j].to){
            this.allowedNavigation.push(this.allNavigation[j])
          }
        }
      }
      if (!this.allowedNavigation.some(item => item.to === '/')) {
        this.allowedNavigation.push({
            to: '/',
            icon: mdiChartArc,
            label: 'Клиенты'
        })
      }
    },
    resetCurrentAdmin(){
      this.currentAdmin = {}
    },
    async setCurrentAdmin(id){
      if(this.admins.length == 0){
        await this.getAdminsList()
      }
      this.currentAdmin = this.admins.find(admin => admin.id == id)
    },
    async getCurrentAdminSections(){
      const path = proxyBaseUrl+'get-admin-data'
      await $fetch(path, {
        method: 'POST',
        body: { token: this.userToken, id: this.currentAdmin.id}
      }).then(r => {
        if(r.message === 'ok'){
          this.currentAdminSections = []
          for(let i = 0; i < r.sections.length; i++){
            this.currentAdminSections.push(r.sections[i].id)
          }
        }
      })
    },
    async getAdminsList(){
      this.layoutIsLoading = true
      const path = proxyBaseUrl+'get-admins'
      await $fetch(path, {
        method: 'POST',
        body: { token: this.userToken}
      }).then(r => {
        if(r.message === 'ok'){
          this.admins = r.admins
        }
        this.layoutIsLoading = false
      })
    },
    async getClientsList(){
      const path = proxyBaseUrl+'get-users'
      await $fetch(path, {
        method: 'POST',
        body: { token: this.userToken}
      }).then(r => {
        if(r.message === 'ok'){
          this.clients = r.users
        }
      })
    // let length = 5;
    // let clients = [];
    // for(let i = 0; i < length; i++){
    //   let client = {
    //     id: i,
    //     address: 'Адрес '+i,
    //     city: 'Город '+i,
    //     dogovor: 'Договор '+i
    //   }
    //   clients.push(client)
    // }
    // this.clients = clients
    

    },
    async getGroupsList() {
      const path = proxyBaseUrl+'get-all-groups'
      await $fetch(path, {
        method: 'POST',
        body: { token: this.userToken}
      }).then(r => {
        if(r.message === 'ok'){
          this.groups = r.groups
          this.filterGroups()
        }
      })
    },
    filterGroups() {
      let arr = [];
      for(let i = 0; i < this.groups.length; i++){
        if(this.groups[i].users_total > 0){
          arr.push(this.groups[i])
        }
      }
      this.filteredGroups = arr
    },
    async setCurrentGroup(groupId){
      const path = proxyBaseUrl+'get-group-info'
      await $fetch(path, {
        method: 'POST',
        body: { token: this.userToken, group_id: groupId}
      }).then(r => {
        if(r.message === 'ok'){
          this.currentGroup = r.group
          this.currentGroupClients = r.group.users
        }
      })
    },
    async deleteClientFromGroup(clients, groupId){
      const path = proxyBaseUrl+'remove-user-from-group'
      await $fetch(path, {
        method: 'POST',
        body: { token: this.userToken, user_id: clients, group_id: groupId}
      })
    },
    async getAdvertsList(){
      const path = proxyBaseUrl+'get-advertising'
      const uniqueArray = [];
      const uniqueAdIds = new Set();
      await $fetch(path, {
        method: 'POST',
        body: { token: this.userToken}
      }).then(r => {
        if(r.message == 'ok'){
          
          if(r.advertise == null){
            this.adverts = []
            return
          }


          for (const item of r.advertise) {
            if (!uniqueAdIds.has(item.advertising_id)) {
              uniqueAdIds.add(item.advertising_id);
              uniqueArray.push(item);
            }
          }

          this.adverts = uniqueArray
        }
      })
    },
    async getPlannedPushmailingList(){
      const path = proxyBaseUrl+'get-planed-messages-list'


      await $fetch(path, {
        method: 'POST',
        body: { token: this.userToken}
      }).then(r => {
        if(r.message == 'ok'){
          this.pushmailing = r.messages.messages
        }
      })
    },

    async getStats(){
      const path = proxyBaseUrl+'get-stats'
      // if(this.stats != {}) return
      await $fetch(path, {
        method: 'POST',
        body: { token: this.userToken}
      }).then(r => {
        if(r.message == 'ok'){
          this.stats = r
          this.statsLoaded = true
        }
      })
    },
    async deleteCurrentGroup() {
      const path = proxyBaseUrl+'group'
      await $fetch(path, {
        method: 'POST',
        body: { token: this.userToken, group_id: this.currentGroup.id, action: "delete"}
      }).then(r => {
        this.getGroupsList()
      })      
    }
  }
})