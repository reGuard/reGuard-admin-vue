import Content from '@/pages/Index/content/Content.vue'
import JsErrorInfo from "@/pages/Index/JsErrorInfo/index.vue";
import Performance from '@/pages/Index/Performance/index.vue'
import {markRaw, reactive} from "vue";


const tab = reactive([
    {
    name:'content',
    components:markRaw(Content)
}, {
    name:'jserrorinfo',
    components:markRaw(JsErrorInfo)
},
    {
    name:'performance',
    components:markRaw(Performance)
    }])

let currentTable = reactive({tabComp:tab[2].components})

const changeTable = (componentsName:string) =>{
    tab.forEach(item => {
            if(item.name === componentsName){
                currentTable.tabComp = item.components
            }
        }
    )
}
export {changeTable,currentTable}