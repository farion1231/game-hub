import { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  slug: string; // 用于生成游戏详情页的URL
  description_raw: string; // 游戏描述
}
