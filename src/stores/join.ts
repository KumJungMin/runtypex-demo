import { defineStore } from 'pinia'

export const useJoinStore = defineStore('join', {
    state: () => ({
        address: '',
        username: '',
        email: '',
    }),
    actions: {
        setAddress(address: string) {
            this.address = address;
        },
        setUsername(username: string) {
            this.username = username;
        },
        setEmail(email: string) {
            this.email = email;
        }
    }
})