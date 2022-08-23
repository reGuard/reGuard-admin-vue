import request from "@/service/index"
import localStorageCache from "@/global/localStorageCache"
import avgFunc from '@/global/avgFunc/avg'
import {BASE_URl} from "@/service/request/config";

const UUID  = localStorageCache.getUUID()
const getFpTime = async() =>{
    console.log('11',BASE_URl)
    const newArr: number[] = []
    const result:any = await request.get({
        url:BASE_URl
    })
    result.data.forEach((item:any)=>{
        if(item.name === 'FP'){
            newArr.push(item.FPtime)
        }
    })
    return avgFunc(newArr)
}
export  default  getFpTime