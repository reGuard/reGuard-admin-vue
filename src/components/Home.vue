<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import localStorageCache from '@/global/localStorageCache/index'
import {ref} from "vue";
const { locale } = useI18n()

locale.value = localStorageCache.getItem('language') || 'zh'
 const language = locale.value
 const changeLanguage = () => {
  const currentLanguage = locale.value === 'zh' ? 'en' : 'zh';
  locale.value = currentLanguage // 要切换的语言
  localStorageCache.setItem('language', currentLanguage)
}


import quest from "@/service";
import {useRouter} from "vue-router";
const router  = useRouter()
const checkId = async (id: string) =>{
  const result:any= await quest.get({
    url:`?uuid=${id}`
  })
  if(result.data.length === 0 ){
    alert('请输入正确的Project')
    throw new Error('跳转失败，账户不正确')
  }
  else {
    //测试通过，路由跳转
    router.replace({
      path:'/index',
      query:{
        UUID:Id.value
      }
    })
  }
}



let Id = ref<string>('')
const toIndex = async () =>{
  //判断是否输入了ID
  if(Id.value === ''){
    alert('请填写Project ID')
  }
  //如果有输入就查询数据库审核ID
  else{
    await checkId(Id.value)
  }
}



</script>

<template id="home">
  <div class='h-screen flex flex-col'>
    <!-- TODO: 阴影 -->
    
    <div class="h-1/6">
      <div class='w-full h-full flex flex-row justify-end'>
        <a href='/' class='flex items-center justify-center'>
          <button class='transition duration-150 ease-in-out hover:scale-125 w-8 h-8'
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
        </a>
        <div class='mr-4'></div>
          <a href='https://github.com/re-guard/reGuard-sdk'  class='flex items-center justify-center'>
            <button class='transition duration-150 ease-in-out hover:scale-125 w-8 h-8' ><img src='../assets/github.svg'  alt='github'/></button>
          </a>
        <div class='mr-10'></div>
      </div>
    </div>
    <div class='h-2/6 flex flex-col items-center justify-center'>
        <div class='flex flex-col justify-center items-center'>
          <img src='../assets/reguard.svg' alt='logo' class="w-28 h-28"/>
          <text class='text-4xl'>re<a class='text-primary'>Guard</a></text>
        </div>
        <div class='mt-4 w-96 flex'>
          <input 
          type="email" 
          name="email" 
          class="w-full placeholder:text-lg mt-1 px-4 py-3  bg-white border shadow-sm transition duration-150 border-slate-300 placeholder-slate-400 focus:scale-105 hover:scale-105 focus:border-sky-800 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1"
          :placeholder= "$t('placeholder')"
          v-model="Id"
          />
        </div>
          <button
              @click="toIndex"
              class='bg-primary transition duration-150 ease-in-out hover:scale-105 rounded-md text-white mt-4 w-96 flex flex-row items-center justify-center'>
            <img class='pr-4 w-12 h-12' src='../assets/monitor.svg' alt='monitor'>
            <text class='pl-2 text-lg' >{{$t('continue')}}</text>
          </button>
    </div>
     <div class='h-1/6 mt-auto flex items-end'>
          <text class='w-full flex flex-col justify-center items-center mb-4 opacity-50'>
              © Copyright reGuard | 2022
        </text>
      </div>
  </div>
    
</template>
