import platforms from "../data/platforms";
import ApiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Platform from "../entities/Platform";

const apiClient = new ApiClient<Platform>("/platforms/lists/parents");
export const usePlatforms = () => {
  return useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), // 24小时
    initialData: platforms, // 本地数据
  });
};
