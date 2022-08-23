
//平均数的函数
export  default function avg(nums: number[]){
    let len = nums.length
    let total = 0
    nums.forEach((item)=>{
        total = total+item
    })
    return total/len
}
