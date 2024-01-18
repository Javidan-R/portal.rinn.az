import axios from 'axios';
const HTTP = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
      "Content-type": "application/json",
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
export const GETAPIData = (url: string)=>{
    return HTTP.get(url);
}

// export const POSTAPIData = (url: string , data:string)=>{
//     return HTTP.post(url ,data);
// }
// export const DeleteAPIData = (url: string , id:number)=>{
//     return HTTP.delete(`${url}/${id}`);
// }
// export const PUTAPIData = (url: string,data:string ,id:string)=>{
//     return HTTP.put(`${url}/${id}` ,data);
// }
