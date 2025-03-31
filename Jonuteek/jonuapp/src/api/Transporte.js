import { ENV } from "../utils/Constants";
import Axios from "axios";

export class TransporteAPI {
    baseApi = ENV.BASE_API;

    async createTransporte(data) {
        try {
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
                formData.append(key, data[key]);
            });

            const response = await Axios.post(`${this.baseApi}/${ENV.API_ROUTES.CREATETRANSPORTE}`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            return response.data; // Devuelve el transporte creado
        } catch (error) {
            console.error("Error al crear transporte:", error);
            throw error;
        }
    }

    async updateTransporte(id, data) {
        try {
            const formData = new FormData();
            Object.keys(data).forEach((key) => {
                formData.append(key, data[key]);
            });

            const response = await Axios.patch(
                `${this.baseApi}/${ENV.API_ROUTES.UPDATETRANSPORTE}/${id}`,
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );
            return response.data;
        } catch (error) {
            console.error("Error al actualizar transporte:", error);
            throw error;
        }
    }

    async delTransporte(id) {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.DELTRANSPORTE}/${id}`;
            const response = await Axios.delete(url);
            return response.data; // Devuelve la respuesta del servidor
        } catch (error) {
            console.error("Error al eliminar transporte:", error);
            throw error;
        }
    }

    async getTransporte() {
        try {
            const url = `${this.baseApi}/${ENV.API_ROUTES.GETTRANSPORTE}`;
            const response = await Axios.get(url);
            return response.data; // Devuelve los transportes correctamente
        } catch (err) {
            console.error("Error al obtener transportes:", err);
            return []; // Devuelve un array vacío en caso de error
        }
    }
}