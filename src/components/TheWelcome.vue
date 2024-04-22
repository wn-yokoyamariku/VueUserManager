<script>
import { useStoreUsers } from '@/stores/store'
import axios from 'axios'
import { reactive, onMounted } from 'vue'
export default {
  setup() {
    const storeUsers = useStoreUsers();
    const data = reactive({
      title: 'JSON Placeholderからのユーザー情報取得',
      users: []
    })
    const deleteTasks = (id) => {
      storeUsers.deleteUser(id)
    }
    const getData = () => {
      let url = 'https://jsonplaceholder.typicode.com/users/'
      axios.get(url).then((result) => {
        console.log(result.data)

        // reactiveな値を格納するための配列に代入する
        data.users = result.data
      })
    }

    onMounted(() => {
      getData()
      storeUsers.initTable(data.users);
    })
    return { data, getData }
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
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <button>編集</button>
        <button>削除</button>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        <button>編集</button>
        <button>削除</button>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>Thornton</td>
        <td>@fat</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <button>編集</button>
        <button>削除</button>
      </tr>
    </tbody>
  </table>
</template>
