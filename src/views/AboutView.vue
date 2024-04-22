<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">id</span>
    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" v-model="a">
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">name</span>
    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" v-model="b">
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">email</span>
    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" v-model="c">
  </div>

  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">adress</span>
    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" v-model="d">
  </div>
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">phone</span>
    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" v-model="e">
  </div>
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">website</span>
    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" v-model="f">
  </div>
  <div class="input-group mb-3">
    <span class="input-group-text" id="basic-addon1">company</span>
    <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" v-model="g">
  </div>

  <RouterLink :to="'/'">  <button type="button" class="btn" @click="InsertOneUser({id:a, name:b, email:c,address:d, phone:e,website:f,company:g})">追加</button>
</RouterLink>
</template>

<script setup>
import { useStoreUsers } from '@/stores/store'
import { ref } from 'vue'

const a = ref("")
const b = ref("")
const c = ref("")
const d = ref("")
const e = ref("")
const f = ref("")
const g = ref("")
const storeUsers = useStoreUsers();
const InsertOneUser = (obj) => {
  console.log(obj)
  storeUsers.insertUser(obj)
}

</script>

<style>
.about {
  display: flex;
  align-items: center;
}
</style>
