import { defineStore } from 'pinia'

export const useAuthStore = defineStore({

  id: 'authStore',

  state: () => ({
    id: '',
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    full_name: '',
    user_type: '',
    avatar: '',
  }),

  actions: {
    addUser(user: any) {
      this.id = user.id
      this.username = user.username
      this.email = user.email
      this.first_name = user.first_name
      this.last_name = user.last_name
      this.full_name = user.full_name
      this.user_type = user.user_type
      this.avatar = user.avatar
    },

    getUser() {
      return this.$state
    },

    removeUser() {
      this.id = ''
      this.username = ''
      this.email = ''
      this.first_name = ''
      this.last_name = ''
      this.full_name = ''
      this.user_type = ''
      this.avatar = ''
    }
  },

  persist: true,
})
