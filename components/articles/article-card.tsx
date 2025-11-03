import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Eye, User, Sparkles, TrendingUp } from "lucide-react";
import { Article } from "@/lib/types";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  const formattedDate = new Date(article.publishDate).toLocaleDateString("zh-CN", {
    month: "numeric",
    day: "numeric",
  });

  // 根据分类选择配色
  const categoryColors: Record<string, string> = {
    "新手入门": "from-blue-500 to-cyan-500",
    "安全指南": "from-red-500 to-orange-500",
    "交易技巧": "from-green-500 to-emerald-500",
    "钱包教程": "from-purple-500 to-pink-500",
    "DeFi 探索": "from-indigo-500 to-blue-500",
    "行业动态": "from-yellow-500 to-orange-500",
  };

  const gradientColor = categoryColors[article.category] || "from-primary to-primary-light";

  return (
    <Link href={`/articles/${article.slug || article.id}`}>
      <div className="group cursor-pointer h-full">
        <div className={`relative bg-white dark:bg-gray-900 rounded-[28px] overflow-hidden border-2 transition-all duration-300 h-full flex flex-col ${
          featured 
            ? "border-primary/30 shadow-lg hover:shadow-2xl hover:border-primary" 
            : "border-gray-200 dark:border-gray-800 hover:border-primary/50 hover:shadow-xl"
        }`}>
          {/* 封面图 */}
          <div className="relative aspect-video overflow-hidden">
            {article.coverImage ? (
              <div className={`w-full h-full bg-gradient-to-br ${gradientColor} opacity-20`} />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${gradientColor} flex items-center justify-center relative overflow-hidden`}>
                {/* 装饰元素 */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                
                {/* 分类图标 */}
                <div className="relative z-10 text-white/30">
                  <TrendingUp className="h-16 w-16" />
                </div>
              </div>
            )}
            
            {/* 精选角标 */}
            {featured && (
              <div className="absolute top-3 left-3">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-white text-xs font-medium shadow-lg backdrop-blur-sm">
                  <Sparkles className="h-3 w-3" />
                  <span>精选</span>
                </div>
              </div>
            )}
            
            {/* 分类标签 */}
            <div className="absolute top-3 right-3">
              <Badge className={`bg-gradient-to-r ${gradientColor} text-white border-0 shadow-lg`}>
                {article.category}
              </Badge>
            </div>

            {/* 阅读时长 */}
            <div className="absolute bottom-3 right-3">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs">
                <Clock className="h-3 w-3" />
                <span>{article.readTime} min</span>
              </div>
            </div>
          </div>

          {/* 内容区 */}
          <div className="p-6 flex flex-col flex-1">
            {/* 标题 */}
            <h3 className="font-bold text-lg leading-tight mb-3 line-clamp-2 group-hover:text-primary transition-colors">
              {article.title}
            </h3>

            {/* 描述 */}
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2 flex-1">
              {article.description}
            </p>

            {/* 标签 */}
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* 底部元信息 */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-xs font-bold">
                  {article.author.name.charAt(0)}
                </div>
                <div className="text-xs">
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    {article.author.name}
                  </div>
                  <div className="text-gray-500">
                    {formattedDate}
                  </div>
                </div>
              </div>

              {article.views && (
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Eye className="h-3.5 w-3.5" />
                  <span>{article.views}</span>
                </div>
              )}
            </div>
          </div>

          {/* 悬停时的底部指示器 */}
          <div className={`h-1 bg-gradient-to-r ${gradientColor} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
        </div>
      </div>
    </Link>
  );
}

