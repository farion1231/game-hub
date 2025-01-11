// 本地导入游戏类型数据
import genres from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  return { data: genres, error: null, isLoading: false };
};

export default useGenres;
