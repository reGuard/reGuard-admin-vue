
import quest from "@/service";
import Iresult from "@/pages/Index/Performance/Hook/type/type";

interface ItypeInfo{
    value: number
    name: string
}

export default async function (id:string = ''){
    const data:ItypeInfo[] = [
        { value: 0, name: 'JS异常' },
        { value: 0, name: '接口异常' },
        { value: 0, name: '白屏异常' },
        { value: 0, name: '资源异常' },
    ]
    //获取所有数据
    const result:Iresult =  await quest.get({
        url:`/tracker?uuid=${id}`
    })
    //统计类型
    if (result.code == 1 && result.msg == 'success'){
        result.data.forEach((item: any)=>{
            switch (item.name){
                case 'JsError' : data[0].value = data[0].value + 1 ; break
                case 'request' : data[1].value = data[1].value +1; break
                case '白屏' : data[2].value = data[2].value +1 ; break
                case 'resourceError' : data[3].value = data[3].value +1 ; break
            }
        })
    }
    return data
}