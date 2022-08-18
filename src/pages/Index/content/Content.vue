<script setup lang='ts'>
import {onMounted} from "vue";
import * as echarts from 'echarts';
onMounted(()=>{

  let chartDom = document.getElementById('main');
  let myChart = echarts.init(chartDom);
  let option;

  option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    title:{
      text:'PV',
      left:10,
      top:10
    },
    yAxis: {
      type: 'value'
    },
    grid:{
      top:45,
      x:45,
      x2:30,
      y2:80
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };

  option && myChart.setOption(option);
})




</script>

<template>
  <div class="flex justify-between w-screen  mt-20 font-sans">
    <div class="flex-1">
      <div class="flex flex-col justify-center ml-20 mt-7">
        <div class="w-10/12 h-40 shadow-2xl mt-3 rounded-xl border ">
          <span class="font-semibold ml-4 block mt-4 h-1 ">Dashboard</span>
          <div class="flex justify-evenly mt-10 text-center">
            <div class="text-red-500 font-semibold text-3xl ">
              {{98}}%
              <p class="font-semibold text-lg text-black ">健康度</p>
            </div>
            <div class="text-green-500 font-semibold text-3xl">
              {{12}}%
              <p class="font-semibold text-lg text-black ">其他度</p>
            </div>
            <div class="text-green-500 font-semibold text-3xl">
              {{12}}%
              <p class="font-semibold text-lg text-black ">其他度</p>
            </div>
            <div class="text-green-500 font-semibold text-3xl">
              {{12}}%
              <p class="font-semibold text-lg text-black ">其他度</p>
            </div>
            <div class="text-green-500 font-semibold text-3xl">
              {{12}}%
              <p class="font-semibold text-lg text-black ">其他度</p>
            </div>
          </div>
        </div>
        <div class="w-10/12 h-40 shadow-2xl mt-3 rounded-xl border">
          <div id="main" style="height: 200px;width: 500px">
          </div>
        </div>
        <div class="w-10/12 h-40 shadow-2xl mt-3 rounded-xl border">1</div>
      </div>
    </div>
    <div class="flex-1 ">
      <div class="w-11/12 border mt-10 shadow-xl rounded-xl" style="height: 500px"></div>
    </div>
  </div>
</template>
<style scoped>

</style>