import request from "@/service";
import dayjs from "dayjs";
import Iresult from "@/pages/Index/Performance/Hook/type/type";

export default async function (id: string = 'tracker'){
    const data: any = []
    const result: Iresult = await request.get({
        url:`/tracker?uuid=${id}`
    })
    if(result.code == 1 && result.msg == 'success'){
        result.data.forEach((item: any) => {
            if (item.name == 'request'){
                const arr = {
                    date:dayjs(item.reportTime).format('YYYY-MM-DD'),
                    name:item.name,
                    method:item.method,
                    type:item.type,
                    duration:item.duration,
                    status:item.status,
                    response:item.response
                }
                data.push(arr)
            }
        })
    }
    return data
}