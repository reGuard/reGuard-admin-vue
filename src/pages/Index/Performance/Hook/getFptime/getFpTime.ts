import request from "@/service/index"
import avgFunc from '@/global/avgFunc/avg'
import Iresult from "@/pages/Index/Performance/Hook/type/type";

const getFpTime = async(id: string = 'tracker') =>{
    const newArr: number[] = []
    const result: Iresult = await request.get({
        url:`/tracker?uuid=${id}`
    })
    if (result.code == 1 && result.msg == 'success'){
        result.data.forEach((item:any)=>{
            if(item.name === 'FP'){
                newArr.push(item.FPtime)
            }
        })
    }
    return avgFunc(newArr)
}
export  default  getFpTime