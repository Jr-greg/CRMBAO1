// 数据类型定义 - 方便后端对接

export interface Article {
  id: string | number;
  title: string;
  description: string;
  content: string;               // HTML 或 Markdown
  author: {
    name: string;
    avatar?: string;
  };
  coverImage?: string;            // 封面图 URL
  category: string;               // 分类：如 "入门教程"、"安全指南"
  tags: string[];                 // 标签数组
  publishDate: string;            // ISO 8601 格式：2024-01-01T00:00:00Z
  updateDate?: string;
  readTime: number;               // 阅读时长（分钟）
  views?: number;                 // 浏览量（可选）
  featured?: boolean;             // 是否精选
  slug?: string;                  // URL 友好的标识符
}

export interface ArticleCategory {
  id: string;
  name: string;
  slug: string;
  count?: number;                 // 该分类下的文章数
}

// API 响应格式建议
export interface ArticleListResponse {
  articles: Article[];
  total: number;
  page: number;
  pageSize: number;
  categories?: ArticleCategory[];
}


