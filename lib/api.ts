// API 调用和数据转换工具

import { 
  ApiArticleResponse, 
  ApiArticleItem, 
  ApiArticleDetailResponse,
  ApiArticleDetail,
  Article 
} from "./types";

const API_BASE_URL = "https://api.shandian.io/front/index";

/**
 * 将 API 返回的文章数据转换为前端 Article 类型
 */
export function transformApiArticle(apiArticle: ApiArticleItem): Article {
  return {
    id: apiArticle.id,
    title: apiArticle.title,
    description: apiArticle.excerpt,
    content: "", // 列表接口不提供完整内容
    author: {
      name: apiArticle.author,
    },
    coverImage: apiArticle.img_list?.[0] || "",
    imgList: apiArticle.img_list,
    category: apiArticle.channel || "未分类",
    tags: [],
    publishDate: new Date(apiArticle.publish_at * 1000).toISOString(),
    readTime: 5, // 默认阅读时长
    featured: false,
    link: apiArticle.link,
    channel: apiArticle.channel,
  };
}

/**
 * 将 API 返回的详情数据转换为前端 Article 类型
 */
export function transformApiArticleDetail(apiDetail: ApiArticleDetail): Article {
  // 从 keywords 字符串生成标签数组
  const tags = apiDetail.keywords 
    ? apiDetail.keywords.split(',').map(k => k.trim()).filter(k => k)
    : [];

  return {
    id: apiDetail.news_id,
    title: apiDetail.title,
    description: apiDetail.excerpt,
    content: apiDetail.content, // HTML 格式的完整内容
    author: {
      name: apiDetail.author,
    },
    coverImage: apiDetail.img_list?.[0] || "",
    imgList: apiDetail.img_list,
    category: apiDetail.channel || "未分类",
    tags: tags,
    publishDate: new Date(apiDetail.publish_at * 1000).toISOString(),
    readTime: Math.max(1, Math.ceil(apiDetail.content.length / 400)), // 根据内容长度估算阅读时间
    featured: false,
    link: apiDetail.link,
    channel: apiDetail.channel,
  };
}

/**
 * 获取文章列表
 * @param maxResults 最大返回数量
 * @param nextToken 分页token
 * @param keywords 搜索关键词
 */
export async function getArticleList(
  maxResults: number = 10,
  nextToken: string = "",
  keywords: string = ""
): Promise<{
  articles: Article[];
  nextToken: string;
  resultCount: number;
}> {
  try {
    const url = `${API_BASE_URL}/getArticleList?max_results=${maxResults}&next_token=${nextToken}&keywords=${encodeURIComponent(keywords)}`;
    
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // 添加缓存策略，避免过度请求
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data: ApiArticleResponse = await response.json();

    if (data.code !== 0) {
      throw new Error(data.msg || "API 返回错误");
    }

    // 转换数据
    const articles = data.data.list.map(transformApiArticle);

    return {
      articles,
      nextToken: data.data.meta.next_token || "",
      resultCount: data.data.meta.result_count,
    };
  } catch (error) {
    console.error("获取文章列表失败:", error);
    throw error;
  }
}

/**
 * 获取文章详情
 * @param newsId 文章ID
 */
export async function getArticleDetail(newsId: number | string): Promise<Article> {
  try {
    const url = `${API_BASE_URL}/detail?news_id=${newsId}`;
    
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data: ApiArticleDetailResponse = await response.json();

    if (data.code !== 0) {
      throw new Error(data.msg || "API 返回错误");
    }

    // 注意：数据嵌套在 data.data 中
    const article = transformApiArticleDetail(data.data.data);

    return article;
  } catch (error) {
    console.error("获取文章详情失败:", error);
    throw error;
  }
}

