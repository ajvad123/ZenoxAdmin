import base_url from "./base_url";
import { commonApi } from "./commonApi";



export const getContact=async()=>{
    return commonApi("GET",`${base_url}/getContact`,"","")
}

export const getDetails=async()=>{
    return commonApi("GET",`${base_url}/getDetails`,"","")
}