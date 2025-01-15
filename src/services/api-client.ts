import axios from "axios";

export interface FetchDataResponse<T> {
  count: number; // 数据总数
  results: T[]; // 实际数据数组
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});
