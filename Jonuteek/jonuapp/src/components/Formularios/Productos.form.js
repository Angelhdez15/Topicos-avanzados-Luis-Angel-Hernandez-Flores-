import * as YUP from "yup";

export function initialValues(){
    return{
        nombre: "",
        precio: "",
        cantidad: "",
        fecha: "",
        horario: "",
        ubicacion: "",
        imagep: "",
    }
}

export function validationSchema(){
    return YUP.object({
        nombre:YUP.string(),
        precio: YUP.number(),
        cantidad: YUP.number(),
        fecha: YUP.string(),
        horario: YUP.string(),
        ubicacion: YUP.string(),
        imagep: YUP.string()
    })
}