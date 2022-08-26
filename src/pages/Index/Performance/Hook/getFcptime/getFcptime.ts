import Iresult from "@/pages/Index/Performance/Hook/type/type";
import request from "@/service";
import avgFunc from "@/global/avgFunc/avg";

export default async function (id: string = "tracker") {
    const newArr: number[] = [];
    const result: Iresult = await request.get({
        url: `/tracker?uuid=${id}`,
    });
    if (result.code == 1 && result.msg == "success") {
        result.data.forEach((item: any) => {
            if (item.name === "FCP") {
                newArr.push(item.FCPtime);
            }
        });
    }
    return avgFunc(newArr);
}
