import { ENV } from "../utils/Constants";
import Axios from "axios";

export class ComidaAPI {
    baseApi = ENV.BASE_API;

    async createComida(data) {
        try {
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
                formData.append(key, data[key]);
            });

            const response = await Axios.post(`${this.baseApi}/${ENV.API_ROUTES.CREATEComida}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            return response.data; // Devuelve el Comida creado
        } catch (error) {
            console.error("Error al crear Comida:", error);
            throw error;
        }
    }

    async updateComida(id, data) {
        try {
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
                formData.append(key, data[key]);
            });

            const response = await Axios.patch(
                `${this.baseApi}/${ENV.API_ROUTES.UPDATEComida}/${id}`,
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            return response.data;
        } catch (error) {
            console.error("Error al actualizar Comida:", error);
            throw error;
        }
    }
    async delComida(id) {
        try {
          const url = `${this.baseApi}/${ENV.API_ROUTES.DELComida}/${id}`;
          const response = await Axios.delete(url);
          return response.data;
        } catch (error) {
          console.error("Error al eliminar Comida:", error);
          throw error;
        }
      }
async getComida() {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.GETComida}`;
            const response = await Axios.get(url);
            return response.data; // Devuelve los Comidas correctamente
        } catch (err) {
            console.error("Error al obtener Comidas:", err);
            return []; // Devuelve un array vacío en caso de error
        }
    }
}