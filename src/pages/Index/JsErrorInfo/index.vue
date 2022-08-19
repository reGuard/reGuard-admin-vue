<script lang="ts" setup>
import * as echarts from 'echarts';
import {onMounted} from "vue";

const tableData = [
  {
    date: '2016-05-03',
    name: '32-15',
    address: 'Uncaught ReferenceError: xx is not defined',
    type:'jsError'
  },
  {
    date: '2016-05-03',
    name: '32-15',
    address: 'Uncaught ReferenceError: xx is not defined',
    type:'jsError'
  },{
    date: '2016-05-03',
    name: '32-15',
    address: 'Uncaught ReferenceError: xx is not defined',
    type:'jsError'
  },
  {
    date: '2016-05-03',
    name: '32-15',
    address: 'Uncaught ReferenceError: xx is not defined',
    type:'jsError'
  },
  {
    date: '2016-05-03',
    name: '32-15',
    address: 'Uncaught ReferenceError: xx is not defined',
    type:'jsError'
  },

  {
    date: '2016-05-03',
    name: '2-1',
    address: 'Uncaught ReferenceError: xsd is not defined',
    type:'jsError'
  },{
    date: '2016-05-03',
    name: '3-15',
    address: 'Uncaught ReferenceError: vue is not defined',
    type:'jsError'
  },{
    date: '2016-05-03',
    name: '12-25',
    address: 'Uncaught ReferenceError: xx is not defined',
    type:'jsError'
  },
]


onMounted(()=>{
  let JsErrorInfo = {
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Reference Error' },
          { value: 735, name: 'Syntax Error' },
          { value: 580, name: 'TypeError' },
          { value: 484, name: ' Syntax Error' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  let chartDom = document.getElementById('js');
  let myChart = echarts.init(chartDom);
  JsErrorInfo && myChart.setOption(JsErrorInfo);

})

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
            <el-table-column prop="date" label="Time" width="180" />
            <el-table-column prop="type" label="Type" width="180" />
            <el-table-column prop="name" label="Position" width="180" />
            <el-table-column prop="address" label="Info" />
          </el-table>
    </div>
  </div>
  <div class="flex-1">
    <div class="
    flex
    w-11/12 border mt-10 shadow-xl
    rounded-xl ml-10 transition
    duration-150
    focus:border
    focus:scale-105 hover:scale-105
    "
   style="height: 500px" >
    <div class="flex-1  flex items-center justify-center" id="js" ></div>
      <div class="flex-1 flex items-center justify-center flex-col">
        <span>建议</span>
      </div>
    </div>
  </div>

</div>
</template>


<style scoped>

</style>