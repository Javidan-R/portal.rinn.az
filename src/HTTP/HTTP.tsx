import axios from 'axios';
import { Category, Organisation, Service } from '../types/type';
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
// eslint-disable-next-line react-refresh/only-export-components
export const getSingleDataOrganisation = async (url: string, id: number) => {
  try {
    const response = await HTTP.get(url);
    const organisation = response.data.find(
      (org: Organisation) => org.organisationsId === id
    );
    if (organisation) {
      return { success: true, data: organisation };
    } else {
      return { success: false, error: "Organization not found" };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return { success: false, error: "Failed to fetch data" };
  }
};
// eslint-disable-next-line react-refresh/only-export-components
export const getSingleDataCategories = async (url: string, id: number) => {
  try {
    const response = await HTTP.get(url);
    const category = response.data.find(
      (cat: Category) => cat.categoriesId === id
    );
    if (category) {
      return { success: true, data: category };
    } else {
      return { success: false, error: "Organization not found" };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return { success: false, error: "Failed to fetch data" };
  }
};
// eslint-disable-next-line react-refresh/only-export-components
export const getSingleDataService = async (url: string, id: number) => {
  try {
    const response = await HTTP.get(url);
    const service = response.data.find(
      (ser: Service) => ser.serviceId === id
    );
    if (service) {
      return { success: true, data: service };
    } else {
      return { success: false, error: "Organization not found" };
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return { success: false, error: "Failed to fetch data" };
  }
};

// export const POSTAPIData = (url: string , data:string)=>{
//     return HTTP.post(url ,data);
// }
// export const DeleteAPIData = (url: string , id:number)=>{
//     return HTTP.delete(`${url}/${id}`);
// }
// export const PUTAPIData = (url: string,data:string ,id:string)=>{
//     return HTTP.put(`${url}/${id}` ,data);
// }
