import quest from "@/service";
import Iresult from "@/pages/Index/Performance/Hook/type/type";
import dayjs from 'dayjs'

interface ItypeInfo{
    value: number
    name: string
}

export default async function (id:string = ''){
    const PVInfo = [0,0,0,0,0]
    const PVTime = ['2022-08-22','2022-08-23','2022-08-24','2022-08-25','2022-08-26']
    const result:Iresult =  await quest.get({
        url:`/tracker?uuid=${id}`
    })
    if(result.code == 1 && result.msg == 'success'){
        result.data.forEach((item: any) => {
            if (item.name == 'PV'){
               const time = dayjs(item.time).format('YYYY-MM-DD')
                for (const key in PVTime){
                    if(time == PVTime[key]){
                        PVInfo[key] = PVInfo[key] + 1
                    }
                }
            }
        })
    }
    return { PVInfo, PVTime}
}