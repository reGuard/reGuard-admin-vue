//截取函数
const cut =(num: number): number =>{
    const cutNum = num.toString().slice(0,3)
    return parseInt(cutNum)
}
export default cut