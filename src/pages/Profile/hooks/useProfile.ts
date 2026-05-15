import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/auth";

export const useProfile = () => {
  const accessToken = localStorage.getItem("accessToken");

  return useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(accessToken as string),
    enabled: Boolean(accessToken),
  });
};
