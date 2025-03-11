import * as yup from 'yup';
export function initialValues(){
    return{
        Producto:"",
        Precio:"",
        Cantidad:"",
        Unidad:"",
        imagen:""
    }
}
export function validationSchema(){
    return yup.object({
        nombre: yup.string(),
        precio: yup.number(),
        cantidad: yup.number(),
        unidad: yup.number(),
        imagen: yup.string()
    })
}