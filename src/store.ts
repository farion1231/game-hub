import { create } from "zustand";

// 定义游戏查询参数的接口
interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

// 定义游戏查询状态存储的接口
interface GameQueryStore {
  gameQuery: GameQuery; // 存储当前的查询参数
  setSearchText: (searchText: string) => void; // 设置搜索文本的方法
  setGenreId: (genreId: number) => void; // 设置游戏类型ID的方法
  setPlatformId: (platformId: number) => void; // 设置平台ID的方法
  setSortOrder: (sortOrder: string) => void; // 设置排序方式的方法
}

// 创建游戏查询状态管理存储
const useGameQueryStore = create<GameQueryStore>((set) => ({
  // 初始化空的查询参数对象
  gameQuery: {},

  // 设置搜索文本，会重置其他查询参数
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),

  // 设置游戏类型ID，保留其他现有查询参数
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),

  // 设置平台ID，保留其他现有查询参数
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),

  // 设置排序方式，保留其他现有查询参数
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
