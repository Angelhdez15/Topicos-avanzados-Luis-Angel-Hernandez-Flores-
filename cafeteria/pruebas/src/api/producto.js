import {ENV} from "../utils/Constants";
//import Axios from "../services/Axios";
import Axios from "axios";
export class Producto{

    baseApi=ENV.BASE_API;

    async createProduct(data,){
        try {
            const formData=new FormData();
            Object.keys(data).forEach((key)=>{
                formData.append(key,data[key])
            });

          
            await Axios.post(`${this.baseApi}/${ENV.API_ROUTES.CREATEPRODUCTO}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log("Se agregó el producto correctamente");
        } catch (error) {
            console.error("Error al crear producto:", error);
        }
    }

            //const url=`/${ENV.API_ROUTES.CREATEPRODUCTO}`;
            /* const params={
                method:"POST",
                body: formData
            }  */

            /* const response=await Axios.post(`${this.baseApi}/${ENV.API_ROUTES.CREATEPRODUCTO}`,formData); */
           // const result=await response.json();

            /* if(response.status!==200) throw result;
            return result; */

    

    async getProducto() {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.GETPRODUCTO}`;
            const response = await Axios.get(url);
            return response.data; // ✅ Devuelve los productos correctamente
        } catch (err) {
            console.error("Error al obtener productos:", err);
            return []; // ✅ Devuelve un array vacío en caso de error
        }
    }
}