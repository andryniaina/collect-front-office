import { useQuery } from "@tanstack/react-query";
import { getForm } from "../services/forms";

export const useForm = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["form", id],
    queryFn: () => getForm(id),
  });
  return {
    data,
    isLoading,
    error,
  };
};
