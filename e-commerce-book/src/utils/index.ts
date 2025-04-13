import axios from "axios";
// import usePostStore from "@/store/usePostStore";

const API_URL = "http://localhost:8800";

export const API = axios.create({
  baseURL: API_URL,
  responseType: "json",
});

export const apiRequest = async ({ url, token, data, method }:{url:string, token?:string, data:Record<string, any>, method:"GET" | "POST" | "PUT" | "DELETE"}) => {
  try {
    const result = await API(url, {
      method: method || "GET",
      data: data,
      headers: {
        "content-type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });
    return result?.data;
  } catch (error:any) {
    const err = error.response.data;
    console.log(err);
    return { status: err.success, message: err.message };
  }
};
