import { defineStore } from 'pinia'

export const useChatController = defineStore('chat', {
    state: () => {
        return {
            chats: [],
            currentChat: null
        }
    },
    actions: {
        addChat(chat) {
            this.chats.push(chat)
        },
        setCurrentChat(chat) {
            this.currentChat = chat
        }
    }
})