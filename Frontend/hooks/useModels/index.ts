import ky from "ky-universal";
import { useQuery } from "@tanstack/react-query";

const fetchModels = async () => {
  console.log("fetch d", process.env.NEXT_PUBLIC_API_URL);
  const models = await ky(`${process.env.NEXT_PUBLIC_API_URL}/models`).json();
  return models;
};

const useModels = () => {
  return useQuery({
    queryKey: ["models"],
    queryFn: () => fetchModels(),
  });
};

export { fetchModels, useModels };
