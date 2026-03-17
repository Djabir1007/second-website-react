import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type User = {
  id: number;
  address: { city: string };
};

export const useGetCities = () => {
  return useQuery({
    queryKey: ["cities"],
    queryFn: async () => {
      const { data } = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users",
      );
      return data.map((u) => ({
        id: u.id,
        city: u.address.city,
      }));
    },
  });
};
