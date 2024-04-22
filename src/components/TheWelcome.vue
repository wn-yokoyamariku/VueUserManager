<script>
import { useStoreUsers } from '@/stores/store'
import axios from 'axios'
import { onBeforeMount } from 'vue';
import { reactive, onMounted } from 'vue'
export default {
  setup() {
    const storeUsers = useStoreUsers();
    const data = reactive({
      title: 'JSON Placeholderからのユーザー情報取得',
      users: []
    })
    const deleteOneUser = (id) => {
      storeUsers.deleteUser(id)
    }
    const getData = () => {
        if (storeUsers.registered_users.length != 0) {
          return
        }
      let url = 'https://jsonplaceholder.typicode.com/users/'
      axios.get(url).then((result) => {
        console.log(result.data)

        // reactiveな値を格納するための配列に代入する
        data.users = result.data
          storeUsers.initTable(result.data)

      })
    }
    onBeforeMount(() =>
      getData()
    )
    onMounted(() => {
      console.log(data.users)
      console.log(storeUsers.registered_users)
    })
    return { data, storeUsers, getData, deleteOneUser}
  }
}
</script>


<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">name</th>
        <th scope="col">email</th>
        <th scope="col">address</th>
        <th scope="col">phone</th>
        <th scope="col">website</th>
        <th scope="col">company</th>
      </tr>
    </thead>
    <tbody v-for="user in storeUsers.registered_users" :key="user.id">
      <tr>
        <th scope="row">{{ user.id }}</th>
        <td colspan="2">{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.address.street }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.website }}</td>
        <td>{{ user.company.name }}</td>
        <button>編集</button>
        <button @click="deleteOneUser(user.id)">削除</button>
      </tr>
    </tbody>
  </table>
</template>
