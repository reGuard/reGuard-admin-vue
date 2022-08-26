import quest from "@/service";
import Iresult from "@/pages/Index/Performance/Hook/type/type";
import cut from "@/pages/Index/Performance/Hook/cutnumber/cut";
export default  async function (id: string = ''){
    const loadingData: ILData[] = [
        { value: 1, name: '<1秒' },
        { value: 1, name: '1-5秒' },
        { value: 0, name: '5-10秒' },
        { value: 0, name: '10-30秒' },
        { value: 0, name: '30秒以上' }
    ]
    //拿到所有数据
    const result: Iresult = await quest.get({
        url:`tracker?uuid=${id}`
    })
    //forEach进行判断，相应数量+1
    if (result.code == 1 && result.msg == 'success'){
        result.data.forEach((item: any)=>{
            //将DomReady进行截取
            if(item.DOMReady){
            const result = (cut(item.DOMReady))/1000
            if(result < 1){loadingData[0].value = loadingData[0].value + 1}
            if(result >1 && result <=5){loadingData[1].value = loadingData[1].value + 1}
            if(result>5 && result <= 10){loadingData[2].value = loadingData[2].value + 1}
            if(result > 10 && result <= 30){loadingData[3].value = loadingData[3].value + 1}
            if(result > 30){loadingData[4].value = loadingData[4].value + 1}
            }
        })

    }

    //返回对象，包含数据
    return loadingData
}
interface ILData{
    value: number
    name: string
}

