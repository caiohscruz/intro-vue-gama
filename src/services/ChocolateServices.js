import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: false,
    headers:{
        Accept: "aplication/json",
        "Content-Type": "aplication/json"
    }
})

export default{
    getChocolates(){
        return apiClient.get("/chocolates")
    }
}