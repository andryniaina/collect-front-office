import { axiosInstance } from "../../lib/axiosInstance";
import { LoginDTO } from "../../datas/dtos/auth";

export const login = async(loginDto: LoginDTO) => {
    try {
        const {data} = await axiosInstance.post("/auth/login", loginDto);
        return data ;
    } catch(error){
        console.error(error);
    } 
}