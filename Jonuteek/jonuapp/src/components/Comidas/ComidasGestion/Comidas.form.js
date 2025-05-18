import * as YUP from "yup";

export function initialValues(){
    return{
        nombreC: "",
        precioC: "",
        cantidadC: "",
        imageC: "",
    }
}

export function validationSchema(){
    return YUP.object({
        nombreC:YUP.string(),
        precioC: YUP.number(),
        cantidadC: YUP.number(),
        imageC: YUP.string()
    })
}