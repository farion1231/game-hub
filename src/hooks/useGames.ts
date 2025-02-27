import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient, { FetchDataResponse } from "../services/api-client";
import useGameQueryStore from "../store";
import Game from "../entities/Game";

const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery); //任何时候gameQuery改变，都会重新获取数据

  return useInfiniteQuery<FetchDataResponse<Game>, Error>({
    queryKey: ["games", gameQuery], // 查询key，改变gameQuery，则重新获取数据
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId, // 如果selectedGenre为null，则不添加这个参数
          parent_platforms: gameQuery.platformId, // 如果selectedPlatform为null，则不添加这个参数
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    staleTime: 1000 * 60 * 60 * 24, // 24小时
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
