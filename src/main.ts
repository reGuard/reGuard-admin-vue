import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import judgeID from "@/global/useAppidHook/useAppIDHook";
import i18n from './lang'
import router from "@/router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
import localStorageCache from '@/global/localStorageCache/index'
const app = createApp(App)
import * as echarts from 'echarts'



app.use(i18n)
//注册路由
app.use(router)
//注册elementui
app.use(ElementPlus)

/*new Tracker({
    uuid:localStorageCache.getItem('ID'),
    historyTracker: true,
    requestUrl: "http://43.142.180.91:3000/tracker",
    FPTracker: true,
    FCPTracker: true,
    DOMTracker: true,
    jsError: true,
    resourceError: true,
    screenTracker: true,
    performanceIndex: true,
    requestTracker: true,
});*/
//注册ID
judgeID()
//挂载echarts
app.config.globalProperties.$echarts = echarts
app.use(createPinia())
app.mount('#app')
