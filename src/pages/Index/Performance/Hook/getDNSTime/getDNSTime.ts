import request from "@/service/index";
import avgFunc from "@/global/avgFunc/avg";
import Iresult from "@/pages/Index/Performance/Hook/type/type";

const getDNSTime = async (id: string = "tracker") => {
    const newArr: number[] = [];
    const result: Iresult = await request.get({
        url: `/tracker?uuid=${id}`,
    });
    if (result.code == 1 && result.msg == "success") {
        result.data.forEach((item: any) => {
            if (item.name === "pagePerformance") {
                newArr.push(item.DNSTime);
            }
        });
    }
    return avgFunc(newArr);
};
export default getDNSTime;
