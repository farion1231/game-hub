import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id, // 如果selectedGenre为null，则不添加这个参数
        parent_platforms: gameQuery.platform?.id, // 如果selectedPlatform为null，则不添加这个参数
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery] // 这是useEffect的依赖 如果selectedGenre或selectedPlatform发生变化，则重新获取数据
  );
};

export default useGames;
