import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import judgeID from "@/global/useAppidHook/useAppIDHook";
import i18n from './lang'
import router from "@/router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'
const app = createApp(App)

app.use(i18n)

//注册路由
app.use(router)
//注册elementui
app.use(ElementPlus)
//注册ID
judgeID()
app.use(createPinia())
app.mount('#app')
