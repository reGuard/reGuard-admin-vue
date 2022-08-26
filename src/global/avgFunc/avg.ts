//平均数的函数
export default function avg(nums: number[]) {
    if (nums.length == 0) {
        return;
    }
    let len = nums.length;
    let total = 0;
    nums.forEach((item) => {
        total = total + Number(item);
    });
    return total / len;
}
