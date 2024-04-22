import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStoreUsers = defineStore({
  id: 'users',
  state: () => ({
    //id, name, email, address, phone, website, company
    registered_users: [

    ]
  }),
  getters: {
    //filterとか
  },
  actions: {
    initTable(users_list) {
        this.registered_users = registered_users
    },
    selectUser(id){
        return this.registered_users.filter((user) => user.id == id)
    },
    insertUser(obj) {
        this.registered_users.push(obj)
    },
    updateUser(obj) {
        for (let i = 0; i < this.registered_users.length; i++){
            if (i == obj.id){
                this.registered_users.id = obj.id
                this.registered_users.name = obj.name
                this.registered_users.email = obj.email
                this.registered_users.address = obj.address
                this.registered_users.website = obj.website
                this.registered_users.company = obj.company
                return;
            }
        }
    },
    // １件のタスクを削除する
    deleteUser(id) {
      const new_incomp = this.incompleteTasks.filter((task) => task.id != id)
      this.incompleteTasks = new_incomp
    },
  }
})
