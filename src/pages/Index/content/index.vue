<script setup lang='ts'>
import {getCurrentInstance, onMounted, onBeforeUnmount, computed, ref} from "vue";
let PV: { setOption: (arg0: { xAxis: { type: string; data: string[]; }; title: { text: string; left: number; top: number; }; yAxis: { type: string; }; grid: { top: number; x: number; x2: number; y2: number; }; series: { data: number[]; type: string; }[]; }) => any; dispose: () => void; }
let CountInfoTable: { setOption: (arg0: { tooltip: { trigger: string; }; legend: { top: string; left: string; }; series: { name: string; type: string; radius: string[]; avoidLabelOverlap: boolean; itemStyle: { borderRadius: number; borderColor: string; borderWidth: number; }; label: { show: boolean; position: string; }; emphasis: { label: { show: boolean; fontSize: string; fontWeight: string; }; }; labelLine: { show: boolean; }; data: { value: number; name: string; }[]; }[]; }) => void; dispose: () => void; }
let stayTime: { setOption: (arg0: { xAxis: { type: string; data: string[]; }; yAxis: { type: string; }; title: { text: string; left: number; top: number; }; series: { data: number[]; type: string; }[]; }) => any; dispose: () => void; }

let option = {
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
}

let countInfo = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: '错误统计',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
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
        { value: 108, name: 'JS异常' },
        { value: 29, name: '接口异常' },
        { value: 9, name: '白屏异常' },
        { value: 10, name: '资源异常' },
      ]
    }
  ]
}

let stayTimeInfo={
  xAxis: {
    type: 'category',
    data: ['home','index','admin']
  },
  yAxis: {
    type: 'value'
  },
  title:{
    text:'用户停留时间',
    left:10,
    top:10
  },
  series: [
    {
      data: [120, 200, 300],
      type: 'bar'
    }
  ]
}

import getTypeInfo from "@/pages/Index/content/hook/gettypeinfo/getTypeInfo"
import {useRoute} from "vue-router";
const {query} = useRoute()

//获取内存使用占比
import getMemoryUsage from "@/pages/Index/content/hook/getmemoryUsage/getMemoryUsage";
let Memory = ref('')
const getMemory = async () =>{
  const result = await getMemoryUsage(query.UUID as string)
  Memory.value = result
}
getMemory()

const gettypeinfo = async () => {
  const result = await getTypeInfo(query.UUID as string)
  countInfo.series[0].data = result
  CountInfoTable.setOption(countInfo)
}

onMounted(()=>{
  const { proxy } = getCurrentInstance()


  let PVDom: HTMLElement  = document.getElementById('main')as HTMLDivElement
      PV = proxy.$echarts.init(PVDom)


   let CountInfoDom: HTMLElement  = document.getElementById('countInfo')as HTMLDivElement
   let stayTimeDom: HTMLElement  = document.getElementById('stayTime')as HTMLDivElement


   CountInfoTable = proxy.$echarts.init(CountInfoDom)
   stayTime = proxy.$echarts.init(stayTimeDom)


  CountInfoTable && CountInfoTable.setOption(countInfo)
  stayTime && stayTime.setOption(stayTimeInfo)
  PV && PV.setOption(option)

      gettypeinfo()

      getpvoption()
}
)
onBeforeUnmount(()=>{
  PV.dispose()
  CountInfoTable.dispose()
  stayTime.dispose()
})

import getPvOption from "@/pages/Index/content/hook/getPvOption/getPvOption";
//获取pv时间表
const getpvoption = async () =>{
  const result = await getPvOption(query.UUID as string)
  option.xAxis.data = result.PVTime
  option.series[0].data = result.PVInfo
  PV.setOption(option)
}


</script>

<template>
  <div class="flex justify-between w-screen  mt-20 font-sans ">
    <div class="flex-1">
      <div class="flex flex-col justify-center ml-20 mt-1">
        <div class="w-10/12 h-40 shadow-2xl mt-3 rounded-xl border ">
          <span class="font-semibold ml-4 block mt-4 h-1 ">Dashboard</span>
          <div class="flex justify-evenly mt-10 text-center">
            <div class="text-red-500 font-semibold text-3xl ">
              {{98}}%
              <p class="font-semibold text-lg text-black ">健康度</p>
            </div>
            <div class="text-green-500 font-semibold text-3xl">
              {{Memory ? Memory : 0}}
              <p class="font-semibold text-lg text-black ">内存使用度</p>
            </div>
            <div v-show="false" class="text-green-500 font-semibold text-3xl">
              {{12}}%
              <p class="font-semibold text-lg text-black ">其他度</p>
            </div>
            <div v-show="false" class="text-green-500 font-semibold text-3xl">
              {{12}}%
              <p class="font-semibold text-lg text-black ">其他度</p>
            </div>
            <div v-show="false" class="text-green-500 font-semibold text-3xl">
              {{12}}%
              <p class="font-semibold text-lg text-black ">其他度</p>
            </div>
          </div>
        </div>
        <div class="w-10/12 h-40 shadow-2xl mt-3 rounded-xl border">
          <div id="main" style="height: 200px;width: 500px">
          </div>
        </div>
        <div class="w-10/12 h-40 shadow-2xl mt-3 rounded-xl border" style="height: 200px" id="stayTime">

        </div>
      </div>
    </div>
    <div class="flex-1 justify-center items-center  transition duration-150 ease-in-out hover:scale-105">
      <div class="w-11/12 border mt-10 shadow-xl rounded-xl" style="height: 500px" id="countInfo">

      </div>
    </div>
  </div>
</template>
<style scoped>

</style>