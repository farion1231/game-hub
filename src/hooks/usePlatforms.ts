import apiClient from "../services/api-client";
import { FetchDataResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchDataResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data), //从res中获取data
    staleTime: 1000 * 60 * 60 * 24, // 24小时
  });
};
