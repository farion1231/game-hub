// 本地导入游戏类型数据
import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import genres from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 60 * 24, // 24小时
    initialData: genres, // 本地数据
  });
};

export default useGenres;
