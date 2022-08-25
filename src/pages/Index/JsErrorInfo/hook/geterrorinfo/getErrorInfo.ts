import Iresult from "@/pages/Index/Performance/Hook/type/type";
import request from "@/service";

export default async function (id: string = 'tracker'){
    const data =[
        { value: 0, name: 'Reference Error' },
        { value: 0, name: 'RangeError Error' },
        { value: 0, name: 'TypeError' },
        { value: 0, name: ' Syntax Error' },
    ]
    const result: Iresult = await request.get({
        url:`/tracker?uuid=${id}`
    })
    if(result.code == 1 && result.msg == 'success'){
        result.data.forEach((item: any)=>{
            if(item.name == 'JsError'){
                if (item.message.indexOf('Reference') != -1){
                    data[0].value = data[0].value+1
                }
                if (item.message.indexOf('RangeError') != -1){
                    data[1].value = data[1].value+1
                }
                if (item.message.indexOf('TypeError') != -1){
                    data[2].value = data[2].value+1
                }
                if (item.message.indexOf('Syntax') != -1){
                    data[3].value = data[3].value+1
                }
            }
        })
    }
    return data
}