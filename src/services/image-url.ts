/**
 * 用于处理图片URL的工具函数
 * 将原始图片URL转换为裁剪后的URL格式
 */

/**
 * 将给定的图片URL转换为固定尺寸(600x400)的裁剪版本
 * @param url - 原始图片URL
 * @returns 裁剪后的图片URL
 * @example
 * // 输入: https://example.com/media/games/123.jpg
 * // 输出: https://example.com/media/crop/600/400/games/123.jpg
 */
import noImage from "../assets/no-image-placeholder.jpg";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
