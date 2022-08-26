import quest from "@/service";
import Iresult from "@/pages/Index/Performance/Hook/type/type";
import dayjs from 'dayjs'

export default async function (id:string = ''){
    const stayY = [0,0,0]
    const stayX = ['2022-08-24','2022-08-25','2022-08-26']
    const result:Iresult =  await quest.get({
        url:`/tracker?uuid=${id}`
    })
    if(result.code == 1 && result.msg == 'success'){
        result.data.forEach((item: any) => {
            if (item.name == 'PV'){
                const time = dayjs(item.time).format('YYYY-MM-DD')
                console.log(time);
                for (const key in stayX){
                    if(time == stayX[key]){
                        stayY[key] = stayY[key] + (item.stayTime/1000)
                    }
                }
            }
        })
    }
    return { stayY, stayX}
}