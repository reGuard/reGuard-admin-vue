import request from "@/service";

export default async function (id: string = 'tracker'){
    const
    const result: Iresult = await request.get({
        url:`/tracker?uuid=${id}`
    })
    if(result.code == 1 && result.msg == 'success'){

    }
}