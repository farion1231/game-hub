import { Platform } from "./Platform";
import { Genre } from "./Genre";
import { Publisher } from "./Publisher";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  slug: string; // 用于生成游戏详情页的URL
  description_raw: string; // 游戏描述
  genres: Genre[];
  publishers: Publisher[];
}
