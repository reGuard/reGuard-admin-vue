import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import judgeID from "@/global/useAppidHook/useAppIDHook";
import i18n from './lang'

const app = createApp(App)

app.use(i18n)


//注册ID
judgeID()
app.mount('#app')
