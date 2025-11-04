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
  link?: string;                  // 外部链接
  imgList?: string[];             // 图片列表
  channel?: string;               // 来源渠道
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

// 真实 API 响应类型
export interface ApiArticleItem {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  link: string;
  channel: string;
  channel_id: number;
  img_list: string[];
  publish_at: number;
}

export interface ApiArticleResponse {
  code: number;
  data: {
    list: ApiArticleItem[];
    meta: {
      next_token: string;
      result_count: number;
    };
  };
  msg: string;
}

// 文章详情 API 响应类型
export interface ApiArticleDetail {
  news_id: number;
  title: string;
  excerpt: string;
  content: string;  // HTML 格式的正文
  author: string;
  link: string;
  channel: string;
  channel_id: number;
  business_type: number;
  keywords: string;
  img_list: string[];
  publish_at: number;
}

export interface ApiArticleDetailResponse {
  code: number;
  data: {
    data: ApiArticleDetail;  // 注意：嵌套了两层 data
  };
  msg: string;
}


