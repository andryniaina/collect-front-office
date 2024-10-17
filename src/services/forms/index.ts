import { axiosInstance } from "../../lib/axiosInstance";
import { IForm } from "../../datas/interfaces/forms";

export const getForms = async (): Promise<IForm[]> => {
  const { data } = await axiosInstance.get("/forms");

  return data;
};

export const getForm = async (id: string): Promise<IForm> => {
  const { data } = await axiosInstance.get(`/forms/${id}`);
  console.log(data)
  return data;
};
