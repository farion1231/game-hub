import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import ApiClient, { FetchDataResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {
  return useQuery<FetchDataResponse<Game>, Error>({
    queryKey: ["games", gameQuery], // 查询key，改变gameQuery，则重新获取数据
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id, // 如果selectedGenre为null，则不添加这个参数
          parent_platforms: gameQuery.platform?.id, // 如果selectedPlatform为null，则不添加这个参数
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 1000 * 60 * 60 * 24, // 24小时
  });
};

export default useGames;
