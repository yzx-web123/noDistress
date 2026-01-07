/*
 * @Author: yzx-web123 1184699248@qq.com
 * @Date: 2026-01-07 17:35:12
 * @LastEditors: yzx-web123 1184699248@qq.com
 * @LastEditTime: 2026-01-07 17:37:02
 * @FilePath: \vite-project\src\utils\localStorage.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 本地存储工具函数
// 设置缓存数据
export const setCache = (key, data, expireTime = 7 * 24 * 60 * 60 * 1000) => {
  const cacheData = {
    data,
    timestamp: Date.now(),
    expireTime: expireTime, // 默认7天
  };
  try {
    localStorage.setItem(key, JSON.stringify(cacheData));
    return true;
  } catch (error) {
    console.error("存储缓存失败:", error);
    return false;
  }
};

// 获取缓存数据
export const getCache = (key) => {
  try {
    const cacheData = localStorage.getItem(key);
    if (!cacheData) return null;

    const parsedData = JSON.parse(cacheData);
    const now = Date.now();

    // 检查数据是否过期
    if (now - parsedData.timestamp > parsedData.expireTime) {
      localStorage.removeItem(key);
      return null;
    }

    return parsedData.data;
  } catch (error) {
    console.error("获取缓存失败:", error);
    return null;
  }
};

// 删除缓存数据
export const removeCache = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error("删除缓存失败:", error);
    return false;
  }
};

// 清除所有缓存
export const clearAllCache = () => {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error("清除所有缓存失败:", error);
    return false;
  }
};

// 检查缓存是否存在
export const hasCache = (key) => {
  try {
    return localStorage.getItem(key) !== null;
  } catch (error) {
    console.error("检查缓存失败:", error);
    return false;
  }
};
