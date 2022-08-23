import request from "@/service/index"
import localStorageCache from "@/global/localStorageCache"
import avgFunc from '@/global/avgFunc/avg'

const UUID  = localStorageCache.getUUID()
console.log(UUID);
const getFpTime = async() =>{
    const newArr: number[] = []
    const result:any = await request.get({
        url:`?uuid=${UUID}`
    })
    result.data.forEach((item:any)=>{
        if(item.name === 'FP'){
            newArr.push(item.FPtime)
        }
    })
    return avgFunc(newArr)
}
export  default  getFpTime