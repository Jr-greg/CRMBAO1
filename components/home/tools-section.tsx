"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { ArticleDetailDialog } from "@/components/articles/article-detail-dialog";
import { getArticleList } from "@/lib/api";
import { Article } from "@/lib/types";

export function FeaturedArticlesSection() {
  const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  
  // 弹窗状态
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // 加载精选文章
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const result = await getArticleList(3, "", ""); // 只获取前3篇
        setFeaturedArticles(result.articles);
      } catch (error) {
        console.error("加载精选文章失败:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // 打开文章弹窗
  const handleOpenArticle = (articleId: string | number) => {
    const idString = String(articleId);
    setSelectedArticleId(idString);
    setDialogOpen(true);
  };

  // 关闭弹窗
  const handleCloseDialog = (open: boolean) => {
    setDialogOpen(open);
    if (!open) {
      setSelectedArticleId(null);
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* 标题区 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">精选文章</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            深度内容，助你深入了解加密世界
          </p>
        </div>

        {/* 文章网格 */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {loading ? (
            // 加载骨架屏
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800 h-full flex flex-col animate-pulse">
                <div className="aspect-video bg-gray-200 dark:bg-gray-800" />
                <div className="p-5 space-y-3">
                  <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6" />
                </div>
              </div>
            ))
          ) : (
            featuredArticles.map((article) => {
              const formattedDate = new Date(article.publishDate).toLocaleDateString("zh-CN", {
                month: "long",
                day: "numeric",
              });
              
              // 计算时间差
              const getTimeAgo = (dateString: string): string => {
                const date = new Date(dateString);
                const now = new Date();
                const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
                
                if (diffInHours < 1) return "刚刚";
                if (diffInHours < 24) return `${diffInHours} 小时前`;
                const diffInDays = Math.floor(diffInHours / 24);
                if (diffInDays < 30) return `${diffInDays} 天前`;
                return date.toLocaleDateString("zh-CN");
              };
              
              const timeAgo = getTimeAgo(article.publishDate);

              return (
                <button
                  key={article.id}
                  onClick={() => handleOpenArticle(article.id)}
                  className="w-full text-left"
                >
                  <div className="group cursor-pointer h-full">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 h-full flex flex-col">
                      {/* 封面图 */}
                      <div className="aspect-video bg-gradient-to-br from-primary/10 via-primary-light/5 to-primary/5 relative overflow-hidden">
                        {article.coverImage || article.imgList?.[0] ? (
                          <>
                            <img 
                              src={article.coverImage || article.imgList?.[0]} 
                              alt={article.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                          </>
                        ) : (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="text-gray-400 text-sm">暂无封面</span>
                            </div>
                          </>
                        )}
                        {/* 分类徽章 */}
                        <div className="absolute top-3 left-3">
                          <Badge className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-gray-100 border-0">
                            {article.category}
                          </Badge>
                        </div>
                      </div>

                    {/* 内容区 */}
                    <div className="p-5 flex flex-col flex-1">
                      {/* 标题 */}
                      <h3 className="font-bold text-lg leading-tight mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>

                      {/* 摘要 */}
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2 flex-1">
                        {article.description}
                      </p>

                        {/* 底部元信息 */}
                        <div className="flex items-center gap-4 text-xs text-gray-500 pt-3 border-t border-gray-100 dark:border-gray-800">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{formattedDate}</span>
                          </div>
                          <span>{timeAgo}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* 底部CTA */}
        <div className="text-center mt-12">
          <Link href="/articles">
            <Button variant="ghost" size="lg" className="group">
              查看全部文章
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      {/* 文章详情弹窗 */}
      <ArticleDetailDialog
        articleId={selectedArticleId}
        open={dialogOpen}
        onOpenChange={handleCloseDialog}
      />
    </section>
  );
}


