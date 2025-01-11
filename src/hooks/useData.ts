import { AxiosRequestConfig, CanceledError } from "axios";
import apiClient from "../services/api-client";
import { useState, useEffect } from "react";

// 定义API响应数据的接口类型
interface FetchDataResponse<T> {
  count: number; // 数据总数
  results: T[]; // 实际数据数组
}

// 通用数据获取Hook
// T: 泛型参数，用于指定返回数据的类型
// endpoint: API端点
// requestConfig: axios请求配置
// deps: 依赖数组，当依赖变化时重新获取数据
const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  // 状态管理
  const [data, setData] = useState<T[]>([]); // 存储获取的数据
  const [error, setError] = useState<string>(""); // 存储错误信息
  const [isLoading, setIsLoading] = useState(false); // 加载状态标识

  useEffect(() => {
    // 创建AbortController用于取消请求
    const controller = new AbortController();
    setIsLoading(true);

    apiClient
      .get<FetchDataResponse<T>>(endpoint, {
        ...requestConfig,
        signal: controller.signal, // 添加取消信号
      })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        // 如果是取消请求导致的错误，直接返回
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    // 注意：这里确实存在一个BUG，应该在finally中设置isLoading

    // 清理函数：组件卸载时取消请求
    return () => controller.abort();
  }, [...(deps || [])]); // 展开依赖数组，如果deps为undefined则使用空数组

  // 返回数据、错误信息和加载状态
  return { data, error, isLoading };
};

export default useData;
