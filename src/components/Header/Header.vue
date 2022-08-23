<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Search } from '@element-plus/icons-vue'
import localStorageCache from '@/global/localStorageCache'
import {changeTable} from "@/Hooks/changeTabs/changeTabs";
const { locale } = useI18n()

locale.value = localStorageCache.getItem('language') || 'zh'
 const language = locale.value
 const changeLanguage = () => {
  const currentLanguage = locale.value === 'zh' ? 'en' : 'zh'
  locale.value = currentLanguage // 要切换的语言
  localStorageCache.setItem('language', currentLanguage)
}

const handleClick = (tab: TabsPaneContext) => {
  changeTable(tab.props.label)
}
</script>

<template>

  <div class="head-content font-sans ">
    <div class="flex items-center shadow-lg w-screen h-20 rounded-lg fixed left-0 top-0 flex-wrap  ">
      <div class="flex-1 -ml-5 transition duration-150 hover:scale-105  hover:cursor-pointer" @click="changeTable('content')" >
        <img src='../../assets/logo.png' class="w-10 h-10 leading-10 inline-block ml-8  "
             alt="没有网络"  >
        <span class="pl-2 text-2xl align-middle">re</span>
        <span class="text-2xl font-semibold text-blue-500 align-middle">Guard</span>
      </div>
      <div class="flex-1 inline font-semibold subpixel-antialiased ">
        <span class="mr-10">Getting Start</span>
        <span>Docs</span>
      </div>
      <div class="flex-1 ml-20">
        <!--  TODO:阴影-->
        <!--         <div class="inline ">-->
        <!--           <input type="text"  class="border-2 border-blue-200 rounded-lg py-1 w-60 shadow-xl -ml-40 outline-none-->
        <!--            "/>-->
        <!--         </div>-->
        <!--          <div class="w-10 h-9 bg-blue-700 inline-block leading-9 -ml-2  rounded-r-md">-->
        <!--            <el-icon  color="white"><Search /></el-icon>-->
        <!--          </div>-->
        <el-tabs  class="demo-tabs"   @tab-click="handleClick" >
          <el-tab-pane label="content"  ></el-tab-pane>
          <el-tab-pane label="jsError" ></el-tab-pane>
          <el-tab-pane label="performance" ></el-tab-pane>
          <el-tab-pane label="request" ></el-tab-pane>
        </el-tabs>
      </div>
      <div class="flex-1 flex justify-end mr-20">
        <button class='transition duration-150 ease-in-out hover:scale-125 w-8 h-8 mr-5 '
                @click="changeLanguage"
        >
          <img
              :src="[
          language === 'zh'
          ? 'src/assets/zh.svg'
          : 'src/assets/en.svg'
          ]"
              alt='language'/>
        </button>
        <svg
            class="w-8 h-8 transition duration-150 ease-in-out hover:scale-125 hover:cursor-pointer"
            height="24" aria-hidden="true" viewBox="0 0 16 16"  width="24" data-view-component="true">
          <path  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
      </div>
    </div>
  </div>

</template>

<style>

</style>