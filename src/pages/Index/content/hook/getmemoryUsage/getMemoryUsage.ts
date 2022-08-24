import Iresult from "@/pages/Index/Performance/Hook/type/type";
import quest from "@/service";

export default async function (id:string = ''){
    let memoryUsage:string = ''
    const result:Iresult =  await quest.get({
        url:`/tracker?uuid=${id}`
    })
    if(result.code == 1 && result.msg == 'success'){
      try{
          result.data.forEach((item: any)=> {
              if (item.memoryUsage){
                  memoryUsage = item.memoryUsage
                  throw new Error('break')
              }
          })
      }catch (err: any){
            if(err.message !== 'break'){
                throw err
            }
      }
    }
    return memoryUsage
}