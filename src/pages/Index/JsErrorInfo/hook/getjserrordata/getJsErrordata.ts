import Iresult from "@/pages/Index/Performance/Hook/type/type";
import request from "@/service";
import dayjs from "dayjs";

interface IData{
    date: string
    name: string
    address: string
    type: string
}

export default async function (id: string = 'tracker'){
    const tableData:IData[] =[]
        const result: Iresult = await request.get({
            url:`/tracker?uuid=${id}`
        })
    if(result.code == 1 && result.msg == 'success'){
        result.data.forEach((item: any) =>{
            if (item.name == 'JsError'){
                const arr:IData = {
                    date:dayjs(item.reportTime).format('YYYY-MM-DD'),
                    name:item.position,
                    type:item.errorType,
                    address:item.message,
                }
                tableData.push(arr)
            }
        })
    }
    return tableData
}

