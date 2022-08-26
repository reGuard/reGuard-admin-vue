<script lang="ts" setup>
import {ref} from "vue";

let tableData = ref([])

import getinto from "@/pages/Index/requestInfo/getinfo/getinto"
import {useRoute} from "vue-router";
const {query} = useRoute()
 const getinfo = async () =>{
  const result = await getinto(query.UUID as string)
   tableData.value = result
 }
getinfo()
</script>
<template>
  <div class="flex justify-between w-screen  mt-20 font-sans">
    <div class="flex-1">

      <div class="
    w-11/12 border mt-10 shadow-xl
    rounded-xl ml-10 transition
    duration-150
    focus:border
    focus:scale-105 hover:scale-105
    "
           style="height: 500px"  >
        <el-table :data="tableData" style="width: 100%"  height="500" >
          <el-table-column prop="date" label="Time" width="200" />
          <el-table-column prop="name" label="Name" width="200" />
          <el-table-column prop="method" label="Method" width="200" />
          <el-table-column prop="type" label="Type" width="200" />
          <el-table-column prop="duration" label="Duration" width="200" />
          <el-table-column prop="status" label="Status" width="200" />
          <el-table-column prop="response" label="Response" width="200" />
        </el-table>
      </div>
    </div>
<!--    <div class="flex-1">-->
<!--      <div class="-->
<!--    flex-->
<!--    w-11/12 border mt-10 shadow-xl-->
<!--    rounded-xl ml-10 transition-->
<!--    duration-150-->
<!--    focus:border-->
<!--    focus:scale-105 hover:scale-105-->
<!--    "-->
<!--           style="height: 500px" >-->
<!--        <div class="flex-1  flex items-center justify-center" id="js" ></div>-->
<!--        <div class="flex-1 flex items-center justify-center flex-col">-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

  </div>
</template>


