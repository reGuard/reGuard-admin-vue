import Content from '@/pages/Index/content/index.vue'
import JsErrorInfo from "@/pages/Index/JsErrorInfo/index.vue";
import Performance from '@/pages/Index/Performance/index.vue'
import requestInfo from '@/pages/Index/requestInfo/index.vue'
import {markRaw, reactive} from "vue";

//切换动态组件的方法
const tab = reactive([
    {
    name:'content',
    components:markRaw(Content)
}, {
    name:'jsError',
    components:markRaw(JsErrorInfo)
},
    {
    name:'performance',
    components:markRaw(Performance)
    },
    {
        name:'request',
        components:markRaw(requestInfo)
    }])

let currentTable = reactive({tabComp:tab[0].components})

const changeTable = (componentsName:string) =>{
    tab.forEach(item => {
            if(item.name === componentsName){
                currentTable.tabComp = item.components
            }
        }
    )
}
export {
    changeTable,
    currentTable
}