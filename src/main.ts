import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import judgeID from "@/global/useAppidHook/useAppIDHook";

//注册ID
judgeID()

createApp(App).mount('#app')
