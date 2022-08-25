import Iresult from "@/pages/Index/Performance/Hook/type/type";
import quest from "@/service";

export default async function (id:string = ''){
    let memoryUsage:string = ''
    const result:Iresult =  await quest.get({
        url:`/tracker?uuid=${id}`
    })
    if(result.code == 1 && result.msg == 'success'){
          result.data.forEach((item: any)=> {
              if (item.name == 'pagePerformance' && item.memoryUsage !== ''){
                  memoryUsage = item.memoryUsage
              }
          })
    }
    return memoryUsage
}