import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import { Article } from "@/lib/types";

interface ArticleCardProps {
  article: Article;
  layout?: "horizontal" | "vertical";
}

export function ArticleCard({ article, layout = "horizontal" }: ArticleCardProps) {
  const formattedDate = new Date(article.publishDate).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const timeAgo = getTimeAgo(article.publishDate);

  // 横向布局（图片+标题）
  if (layout === "horizontal") {
    return (
      <Link href={`/articles/${article.slug || article.id}`}>
        <div className="group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900/50 -mx-4 px-4 py-5 transition-all duration-300">
          <div className="flex items-start justify-between">
            {/* 左侧内容 */}
            <div className="flex-1 min-w-0 flex flex-col min-h-[110px] max-w-[65%] mr-8">
              {/* 标签 + 标题（同一行） */}
              <div className="flex items-start gap-2 mb-1.5">
                {article.featured && (
                  <span className="inline-flex items-center px-1.5 py-0.5 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-medium rounded shadow-sm flex-shrink-0">
                    头条
                  </span>
                )}
                <h3 className="font-semibold text-base leading-snug line-clamp-2 group-hover:text-primary transition-colors flex-1">
                  {article.title}
                </h3>
              </div>
              
              {/* 摘要 - 显示3行 */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3 flex-1 mb-2">
                {article.description}
              </p>
              
              {/* 元信息 - 底部对齐 */}
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 opacity-65 mt-auto">
                <span>{article.author.name}</span>
                <span>·</span>
                <span>{timeAgo}</span>
              </div>
            </div>

            {/* 右侧图片 - 加大尺寸 */}
            <div className="w-[160px] h-[110px] rounded-xl overflow-hidden flex-shrink-0 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 relative group-hover:border-primary/40 group-hover:shadow-md transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-primary-light/8" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-300 dark:text-gray-600">
                <svg className="w-10 h-10 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // 竖向布局（默认保留，用于精选等）
  return (
    <Link href={`/articles/${article.slug || article.id}`}>
      <div className="group cursor-pointer">
        <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary hover:shadow-lg transition-all">
          {/* 封面 */}
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary-light/10" />
          
          {/* 内容 */}
          <div className="p-5">
            <h3 className="font-bold text-base leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {article.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
              {article.description}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{article.author.name}</span>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{article.readTime} 分钟</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

// 时间格式化辅助函数
function getTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return "刚刚";
  if (diffInHours < 24) return `${diffInHours} 小时前`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return `${diffInDays} 天前`;
  return date.toLocaleDateString("zh-CN");
}

