import axios from "axios";
export const get=async(url,payload)=>{
    try {
       const {data}=await axios.post(url,payload)
      
        return data
    } catch (error) {
        return {error:error.message,success:false}
    }
}
export const getData=async(url)=>{
    try {
        const {data}=await axios.get(url)
        return data
    } catch (error) {
         return { error: error.message, success: false };
    }
}
export const create=async(url,payload)=>{
    try {
        const {data}=await axios.post(url,payload)
        return data;
    } catch (error) {
         return {error:error.message,success:false}
    }
}
export const update=async(url,payload)=>{
    try {
        
        return axios.put(url, payload);
    } catch (error) {
         return {error:error.message,success:false}
    }
}
export const getById=async(url)=>{
    try { 
        return axios.get(url)
    } catch (error) {
         return {error:error.message,success:false}
    }
}
export const deleteData=async(url)=>{
    try {
         return axios.delete(url);
    } catch (error) {
          return {error:error.message,success:false}
    }
}