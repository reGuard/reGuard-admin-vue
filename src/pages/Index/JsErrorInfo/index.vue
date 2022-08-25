<script lang="ts" setup>
import {onMounted, getCurrentInstance, ref} from "vue";

let tableData = ref([
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
])
const {query} = useRoute()
import getJsErrordata from "@/pages/Index/JsErrorInfo/hook/getjserrordata/getJsErrordata";
import {useRoute} from "vue-router";
const getjsinfo = async () =>{
  const result = await getJsErrordata(query.UUID as string)
  tableData.value = result
}
getjsinfo()
let JsErrorInfo = {
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Reference Error' },
        { value: 735, name: 'RangeError Error' },
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
let myChart:any
//获取错误图表数据
import getErrorInfo from "@/pages/Index/JsErrorInfo/hook/geterrorinfo/getErrorInfo";
const getjserrorinfo = async () =>{
  const result = await getErrorInfo(query.UUID as string)
  JsErrorInfo.series[0].data = result
  myChart.setOption(JsErrorInfo)
}

onMounted(()=>{
  const { proxy } = getCurrentInstance()
  let chartDom = document.getElementById('js');
  myChart = proxy.$echarts.init(chartDom);
  JsErrorInfo && myChart.setOption(JsErrorInfo);
  getjserrorinfo()
})
</script>
<template>
    <div class="flex justify-between w-screen mt-20 font-sans">
        <div class="flex-1">
            <div class="w-11/12 border mt-10 shadow-xl rounded-xl ml-10 transition duration-150 focus:border focus:scale-105 hover:scale-105" style="height: 500px">
                <el-table :data="tableData" style="width: 100%" height="500">
                    <el-table-column prop="date" label="Time" width="180" />
                    <el-table-column prop="type" label="Type" width="180" />
                    <el-table-column prop="name" label="Position" width="180" />
                    <el-table-column prop="address" label="Info" />
                </el-table>
            </div>
        </div>
        <div class="flex-1">
            <div class="flex w-11/12 border mt-10 shadow-xl rounded-xl ml-10 transition duration-150 focus:border focus:scale-105 hover:scale-105" style="height: 500px">
                <div class="flex-1 flex items-center justify-center" id="js"></div>
                <div class="flex-1 flex justify-center flex-col ml-10">
                    <span class="text-2xl">建议</span>
                    <br />
                    <ul>
                        <li>1. 使用具有静态类型检测的TypeScript语言。</li>
                        <li>2. 项目中配置JSLint、ESLint等插件以检测代码的规范。</li>
                        <li>3. 避免使用过多的全局变量。</li>
                        <li>4. 在可能会报错的代码中使用try-catch捕获。</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
