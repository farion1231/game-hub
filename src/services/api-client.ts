import axios, { AxiosRequestConfig } from "axios";

export interface FetchDataResponse<T> {
  count: number; // 数据总数
  results: T[]; // 实际数据数组
  next: string | null; // 下一页的URL
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // 用箭头函数是因为在类中使用this
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchDataResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
}

export default ApiClient;
