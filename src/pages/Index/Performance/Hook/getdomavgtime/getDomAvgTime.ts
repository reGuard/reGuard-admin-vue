import  axios from 'axios'
import avg from "@/global/avgFunc/avg";
import localStorageCache from "@/global/localStorageCache";
import quest from "@/service";
interface Idata{
    DOMReady: number
    reportTime:number
    sdkversion:string
    uuid:string
}
   const UUID = localStorageCache.getItem('ID')
   const   getDomRTime = async(id:string = '') => {
       const result:any =  await quest.get({
           url:''
       })
       console.log(result.data.data)
       let newArr: number[ ] = []
       result.data.data.forEach((item:Idata)=>{
           if(item.DOMReady){
               newArr.push(item.DOMReady)
           }
       })
       return avg(newArr)
      /* let len = result.data.data.length
       let total: number = 0
       result.data.data.forEach((item:any)=>{
           const re = item.reportTime.toString()
           const re2 = re.slice(1,4)
           total = total + parseInt(re2)
       })
       return total/len*/
   }


export default getDomRTime


