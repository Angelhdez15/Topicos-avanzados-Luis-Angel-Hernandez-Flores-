import * as YUP from "yup";

export function initialValues(){
    return{
        nombret: "",
        preciot: "",
        cantidadt: "",
        fechat: "",
        horariot: "",
        imagept: "",
    }
}

export function validationSchema(){
    return YUP.object({
        nombret:YUP.string(),
        preciot: YUP.number(),
        cantidadt: YUP.number(),
        fechat: YUP.string(),
        horariot: YUP.string(),
        imagept: YUP.string()
    })
}