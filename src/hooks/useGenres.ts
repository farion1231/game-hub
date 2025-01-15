// 本地导入游戏类型数据
import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchDataResponse } from "./useData";
import genres from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchDataResponse<Genre>>("/genres")
        .then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 24小时
    initialData: { count: genres.length, results: genres }, // 本地数据
  });
};

export default useGenres;
