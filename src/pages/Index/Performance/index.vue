<template>
    <div class="flex justify-evenly mt-28">
        <div class="w-96 h-36 shadow-lg rounded-xl text-left">
            <span class="ml-4 mt-10 font-bold text-xl">Dom平均解析时间</span>
            <P class="text-3xl ml-4 mt-12">{{ domTime ? domAvgTime : 0 }}ms</P>
        </div>
        <div class="w-96 h-36 shadow-lg rounded-xl">
            <span class="ml-4 mt-10 font-bold text-xl">FP平均时间</span>
            <P class="text-3xl ml-4 mt-12">{{ Fp ? FpTime : 0 }}ms</P>
        </div>
        <div class="w-96 h-36 shadow-lg rounded-xl">
            <span class="ml-4 mt-10 font-bold text-xl">FCP平均时间</span>
            <P class="text-3xl ml-4 mt-12">{{ FCPTime ? FCPAvgTime : 0 }}ms</P>
        </div>
    </div>
    <div class="flex justify-start">
        <div class="w-5/12 h-96 shadow-md rounded-xl mt-4 ml-24" id="loadingTime"></div>
        <div class="w-5/12 h-96 shadow-md rounded-xl font-bold text-xl mt-4 ml-16">
            <span class="ml-4 inline-block mt-7">其他解析时间</span>
            <ul class="text-base ml-12 mt-8">
                <li>DNS解析时间: {{ DNSTime ? DNSAvgTime : 0 }}ms</li>
                <br />
                <li>建立TCP连接耗时: {{ TCPTime ? TCPAvgTime : 0 }}ms</li>
                <br />
                <li>完整的加载耗时: {{ CompleteLoadTime ? CompleteLoadAvgTime : 0 }}ms</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, getCurrentInstance, ref, onBeforeUnmount, computed, reactive } from "vue";
import getDomRTime from "@/pages/Index/Performance/Hook/getdomavgtime/getDomAvgTime";
import getFpTime from "./Hook/getFptime/getFpTime";
import { useRoute } from "vue-router";

import cut from "./Hook/cutnumber/cut";

const { query } = useRoute();
//dom平均时间
let domTime = ref<number>(0);
const getDomTime = async () => {
    const result = await getDomRTime(query.UUID as string);
    domTime.value = result as number;
};

//获取dom加载时间
getDomTime();

//截取domReady参数前三个
const domAvgTime = computed(() => {
    return cut(domTime.value);
});

//fp平均时间
let Fp = ref<number>(0);
const getfptime = async () => {
    const result = await getFpTime(query.UUID as string);
    Fp.value = result as number;
};
getfptime();
const FpTime = computed(() => {
    return cut(Fp.value);
});

import reqFCPTime from "./Hook/getFcptime/getFcptime";
//FCP平均时间
let FCPTime = ref<number>(0);
const getFCPTime = async () => {
    const result = await reqFCPTime(query.UUID as string);
    FCPTime.value = result as number;
};
getFCPTime();

const FCPAvgTime = computed(() => {
    return cut(FCPTime.value);
});

//DNS平均时间
import reqDNSTime from "./Hook/getDNSTime/getDNSTime";
let DNSTime = ref<number>(0);
const getDNSTime = async () => {
    const result = await reqDNSTime(query.UUID as string);
    DNSTime.value = result as number;
};
getDNSTime();

const DNSAvgTime = computed(() => {
    return cut(DNSTime.value);
});

//TCP平均时间
import reqTCPTime from "./Hook/getTCPTime/getTCPTime";
let TCPTime = ref<number>(0);
const getTCPTime = async () => {
    const result = await reqTCPTime(query.UUID as string);
    TCPTime.value = result as number;
};
getTCPTime();
const TCPAvgTime = computed(() => {
    return cut(TCPTime.value);
});

//完整加载 平均时间
import reqCompleteLoadTime from "./Hook/getCompleteLoadTime/getCompleteLoadTime";
let CompleteLoadTime = ref<number>(0);
const getCompleteLoadTime = async () => {
    const result = await reqCompleteLoadTime(query.UUID as string);
    CompleteLoadTime.value = result as number;
};
getCompleteLoadTime();
const CompleteLoadAvgTime = computed(() => {
    return cut(CompleteLoadTime.value);
});

//获取图表数据
import getLoadingTime from "@/pages/Index/Performance/Hook/getloadingtable/getLoadingTime";
const getTableData = async () => {
    const loadingData = await getLoadingTime(query.UUID as string);
    option.series[0].data = loadingData;
    myChart.setOption(option);
};
getTableData();

//加载图表

let option = reactive({
    tooltip: {
        trigger: "item",
    },
    legend: {
        y: "bottom",
        left: "center",
    },
    title: {
        text: "页面加载耗时分段数量占比",
        left: 10,
        top: 30,
    },
    series: [
        {
            name: "加载时间",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: "center",
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: "40",
                    fontWeight: "bold",
                },
            },
            labelLine: {
                show: false,
            },
            data: [
                { value: 1048, name: "<1秒" },
                { value: 735, name: "1-5秒" },
                { value: 580, name: "5-10秒" },
                { value: 484, name: "10-30秒" },
                { value: 300, name: "30秒以上" },
            ],
        },
    ],
});
let myChart: any;
const { proxy } = getCurrentInstance();
const setEcharts = () => {
    myChart = proxy.$echarts.init(document.getElementById("loadingTime"));
    myChart.setOption(option);
};
onMounted(() => {
    setEcharts();
});
onBeforeUnmount(() => {
    myChart.dispose();
});
</script>

<style scoped></style>
