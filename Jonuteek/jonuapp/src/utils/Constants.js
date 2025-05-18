import Axios from "../Services/Axios";

const localH="http://localhost:4000/api"

export const ENV={
    BASE_API:localH,
    API_ROUTES:{
        CREATEPRODUCTO:"/createproduct",
        GETPRODUCTO:"/getproducto",
        UPDATEPRODUCTO:"/updateproducto",
        DELPRODUCTO:"/delproducto",
        CREATETRANSPORTE:"/createT",
        GETTRANSPORTE:"/getT",
        UPDATETRANSPORTE:"/updateT",
        DELTRANSPORTE:"/delT",    
        CREATEComida:"/createC",
        GETComida:"/getC",
        UPDATEComida:"/updateC",
        DELComida:"/delC",    
    }
}