import ky from "ky-universal";
import { useQuery } from "@tanstack/react-query";

const fetchDistributions = async () => {
  console.log("fetch d", process.env.NEXT_PUBLIC_API_URL);
  const discrete = await ky(
    `${process.env.NEXT_PUBLIC_API_URL}/discrete/`
  ).json();

  const continuous = await ky(
    `${process.env.NEXT_PUBLIC_API_URL}/continuous/`
  ).json();
  return [...discrete, ...continuous];
};

const useDistributions = () => {
  return useQuery({
    queryKey: ["distributions"],
    queryFn: () => fetchDistributions(),
  });
};

export { fetchDistributions, useDistributions };
