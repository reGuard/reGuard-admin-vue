import { createI18n } from 'vue-i18n'
import {zh} from './zh'
import {en} from './en'

// 语言库
const messages = {
  'zh': zh,
  'en': en
}

// 默认语言
// const langDefault = 'zh'
const langDefault = 'en'

const i18n = createI18n({
  locale: langDefault,		//默认显示的语言 
  messages,
  globalInjection:true,
  legacy: false,
})

export default i18n; // 将i18n暴露出去，在main.js中引入挂载