# API 集成指南

## 📡 后端接口规范

这份文档帮助后端同事了解前端需要的数据格式，最小化对接工作量。

---

## 1️⃣ 数据类型定义

前端已定义好 TypeScript 类型（位于 `lib/types.ts`），后端返回的 JSON 应该匹配这些结构：

### 文章对象 (Article)

```typescript
{
  id: string | number,           // 文章唯一标识
  title: string,                 // 标题
  description: string,           // 摘要/描述
  content: string,               // 正文（HTML 或 Markdown）
  author: {
    name: string,                // 作者名
    avatar?: string              // 作者头像 URL（可选）
  },
  coverImage?: string,           // 封面图 URL（可选）
  category: string,              // 分类名称
  tags: string[],                // 标签数组
  publishDate: string,           // 发布时间（ISO 8601 格式）
  updateDate?: string,           // 更新时间（可选）
  readTime: number,              // 预估阅读时长（分钟）
  views?: number,                // 浏览量（可选）
  featured?: boolean,            // 是否精选（可选，默认 false）
  slug?: string                  // URL 友好的标识符（可选，用于 SEO）
}
```

### 示例 JSON

```json
{
  "id": 1,
  "title": "比特币新手完全指南",
  "description": "全面介绍比特币的基本概念...",
  "content": "<h2>什么是比特币？</h2><p>比特币是...</p>",
  "author": {
    "name": "加密小白",
    "avatar": "https://example.com/avatar.jpg"
  },
  "coverImage": "https://example.com/cover.jpg",
  "category": "新手入门",
  "tags": ["比特币", "入门教程", "区块链"],
  "publishDate": "2024-10-15T10:00:00Z",
  "readTime": 8,
  "views": 1250,
  "featured": true,
  "slug": "bitcoin-beginner-guide"
}
```

---

## 2️⃣ 需要的 API 端点

### GET `/api/articles` - 获取文章列表

**查询参数：**
- `page` (number, 可选): 页码，默认 1
- `pageSize` (number, 可选): 每页数量，默认 12
- `category` (string, 可选): 分类筛选
- `tag` (string, 可选): 标签筛选
- `search` (string, 可选): 搜索关键词
- `featured` (boolean, 可选): 是否只返回精选

**返回格式：**

```json
{
  "articles": [ /* Article 数组 */ ],
  "total": 50,
  "page": 1,
  "pageSize": 12,
  "categories": [
    { "id": "beginner", "name": "新手入门", "slug": "beginner", "count": 12 }
  ]
}
```

### GET `/api/articles/:slug` - 获取文章详情

**路径参数：**
- `slug` (string): 文章的 slug 或 id

**返回格式：**

```json
{
  "article": { /* 完整的 Article 对象 */ },
  "relatedArticles": [ /* 相关文章（同分类），最多 3 篇 */ ]
}
```

---

## 3️⃣ 前端集成步骤

### 步骤 1：创建 API 请求函数

在 `lib/api.ts` 中添加：

```typescript
import { Article, ArticleListResponse } from "./types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export async function fetchArticles(params?: {
  page?: number;
  pageSize?: number;
  category?: string;
  search?: string;
}): Promise<ArticleListResponse> {
  const query = new URLSearchParams(params as any).toString();
  const res = await fetch(`${API_BASE}/articles?${query}`);
  if (!res.ok) throw new Error("Failed to fetch articles");
  return res.json();
}

export async function fetchArticle(slug: string): Promise<Article> {
  const res = await fetch(`${API_BASE}/articles/${slug}`);
  if (!res.ok) throw new Error("Failed to fetch article");
  const data = await res.json();
  return data.article;
}
```

### 步骤 2：替换假数据

在 `app/articles/page.tsx` 中：

```typescript
// 替换这一行
import { dummyArticles } from "@/lib/dummy-articles";

// 改为
import { fetchArticles } from "@/lib/api";
const { articles } = await fetchArticles({ page: 1 });
```

---

## 4️⃣ 注意事项

### 关于 `content` 字段：

1. **推荐格式：HTML**
   - 后端爬取后处理成干净的 HTML
   - 前端直接用 `dangerouslySetInnerHTML` 渲染
   - 需要做 XSS 过滤（推荐用 DOMPurify）

2. **备选格式：Markdown**
   - 后端存储 Markdown 原文
   - 前端用 `marked` 或 `react-markdown` 转换
   - 更安全，但需要额外依赖

### 关于图片：

- 封面图和正文图片建议存储到 CDN
- 返回完整的 URL（包含 `https://`）
- 建议提供多尺寸版本（缩略图/原图）

### 关于时间格式：

- 统一使用 ISO 8601 格式：`2024-10-15T10:00:00Z`
- 前端会自动转换为本地时间显示

### 关于分页：

- 前端目前使用简单的页码分页
- 如果文章量大，可以改用无限滚动（Infinite Scroll）

---

## 5️⃣ 快速测试

后端同事可以先用 Mock 数据搭建接口，前端已准备好假数据可以参考：

- 假数据位置：`lib/dummy-articles.ts`
- 包含 8 篇示例文章和 6 个分类
- 可以直接复制这些数据作为 Mock 返回

---

## 6️⃣ 环境变量

在 `.env.local` 中配置 API 地址：

```bash
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## 🎯 总结

✅ **前端已准备好：**
- 完整的 TypeScript 类型定义
- 文章列表页和详情页 UI
- 假数据展示效果

✅ **后端需要做：**
- 提供 2 个 API 端点（列表 + 详情）
- 返回符合类型定义的 JSON
- 处理好文章内容（HTML/Markdown）

✅ **对接时：**
- 只需替换前端的假数据为 API 调用
- 工作量极小，15 分钟即可完成

有问题随时沟通！🚀


