<template>
<div class="flex justify-evenly mt-28  ">
  <div class="w-96 h-36 shadow-lg rounded-xl text-left ">
    <span class="ml-4 mt-10 font-bold text-xl ">Dom平均解析时间</span>
    <P class="text-3xl ml-4 mt-12">{{domTime ? domAvgTime : 0}}</P>
  </div>
  <div class="w-96 h-36 shadow-lg rounded-xl ">
    <span class="ml-4 mt-10 font-bold text-xl ">FP平均时间</span>
    <P class="text-3xl ml-4 mt-12">{{Fp? FpTime : 0}}</P>
  </div>
  <div class="w-96 h-36 shadow-lg rounded-xl ">
    <span class="ml-4 mt-10 font-bold text-xl ">FCP平均时间</span>
    <P class="text-3xl ml-4 mt-12">{{0}}</P>
  </div>
</div>
  <div class="flex justify-start">
    <div class="w-5/12 h-96  shadow-md rounded-xl mt-4 ml-24 " id="loadingTime"></div>
    <div class="w-5/12 h-96 shadow-md rounded-xl  font-bold text-xl mt-4 ml-16">
      <span class="ml-4  inline-block mt-7 ">其他解析时间</span>
      <ul class="text-base ml-12 mt-8" >
        <li >DNS解析时间:{{0}}</li>
        <br>
        <li>建立TCP连接耗时{{0}}</li>
        <br>
        <li>完整的加载耗时{{0}}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {onMounted, getCurrentInstance, onBeforeMount, ref, onBeforeUnmount,computed} from "vue";
import getDomRTime from '@/pages/Index/Performance/Hook/getdomavgtime/getDomAvgTime'

import getFpTime from './Hook/getFptime/getFpTime'


//dom平均时间
let domTime = ref<number>(0)
const getDomTime = async () =>{
  const result = await getDomRTime()
  domTime.value = result
}

//获取dom加载时间
getDomTime()

//截取domReady参数前三个
const domAvgTime = computed(
  ()=>{
    return domTime.value.toString().slice(0,3)
})

//fp平均时间
let Fp = ref <Number>(0)
const getfptime = async() =>{
  const result = await getFpTime()
  Fp.value = result
}
getfptime()
const FpTime =computed(()=>{
  return Fp.value.toString().slice(0,3)
})


//FCP平均时间

//加载图表
let option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    y:'bottom',
    left: 'center'
  },
  title:{
    text:'页面加载耗时分段数量占比',
    left:10,
    top:30
  },
  series: [
    {
      name: 'loadingTimeTable',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: '<1秒' },
        { value: 735, name: '1-5秒' },
        { value: 580, name: '5-10秒' },
        { value: 484, name: '10-30秒' },
        { value: 300, name: '30秒以上' }
      ]
    }
  ]
};
let myChart:any
const {proxy} = getCurrentInstance()
const setEcharts = () =>{
  myChart = proxy.$echarts.init(document.getElementById('loadingTime'))
  myChart.setOption(option)
}
onMounted( ()=>{
  setEcharts()
})
onBeforeUnmount(()=>{
  myChart.dispose()
})
</script>

<style scoped>

</style>