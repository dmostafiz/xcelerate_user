import { defineStore } from 'pinia'

export const useAuthStore = defineStore({

  id: 'authStore',

  state: () => ({
    id: '',
    uid: '',
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    display_name: '',
    user_type: '',
    account_type: '',
    avatar: '',
  }),

  actions: {
    addUser(user: any) {
      this.id = user.id
      this.uid = user.uid
      this.username = user.username
      this.email = user.email
      this.first_name = user.first_name
      this.last_name = user.last_name
      this.display_name = user.display_name
      this.user_type = user.user_type
      this.account_type = user.account_type
      this.avatar = user.avatar
    },

    getUser() {
      return this.$state
    },

    removeUser() {
      this.id = ''
      this.uid = ''
      this.username = ''
      this.email = ''
      this.first_name = ''
      this.last_name = ''
      this.display_name = ''
      this.user_type = ''
      this.account_type = ''
      this.avatar = ''
    }
  },

  persist: true,
})
