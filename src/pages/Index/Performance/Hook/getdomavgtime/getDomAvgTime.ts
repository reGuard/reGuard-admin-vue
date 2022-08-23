import avg from "@/global/avgFunc/avg";
import quest from "@/service";
import Iresult from "@/pages/Index/Performance/Hook/type/type";
   const  getDomRTime = async(id:string = 'tracker') => {
       const result:Iresult =  await quest.get({
           url:`/tracker?uuid=${id}`
       })
       let newArr: number[] = []
        if (result.code == 1 && result.msg == 'success'){
            result.data.forEach((item: any)=>{
                if(item.DOMReady){
                    newArr.push(item.DOMReady)
                }
            })
        }
       return avg(newArr)
   }


export default getDomRTime


