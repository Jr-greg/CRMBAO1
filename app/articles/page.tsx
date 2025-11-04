"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, AlertCircle } from "lucide-react";
import { ArticleCard } from "@/components/articles/article-card";
import { ArticleDetailDialog } from "@/components/articles/article-detail-dialog";
import { getArticleList } from "@/lib/api";
import { Article } from "@/lib/types";

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [nextToken, setNextToken] = useState<string>("");
  const [hasMore, setHasMore] = useState<boolean>(true);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  
  // 弹窗状态
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  // 获取文章列表
  const fetchArticles = async (reset: boolean = false, token: string = "") => {
    if (loading) return;
    
    setLoading(true);
    setError("");
    
    try {
      const result = await getArticleList(10, token, "");
      
      if (reset) {
        setArticles(result.articles);
      } else {
        setArticles(prev => [...prev, ...result.articles]);
      }
      
      setNextToken(result.nextToken);
      setHasMore(!!result.nextToken && result.articles.length > 0);
    } catch (err) {
      console.error("获取文章失败:", err);
      setError("加载文章失败，请稍后重试");
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  // 初始加载
  useEffect(() => {
    fetchArticles(true, "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 处理 URL 参数 - 支持直接打开文章
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get("id");
    
    if (articleId) {
      setSelectedArticleId(articleId);
      setDialogOpen(true);
    }
  }, []);

  // 打开文章弹窗
  const handleOpenArticle = (articleId: string | number) => {
    const idString = String(articleId);
    setSelectedArticleId(idString);
    setDialogOpen(true);
    
    // 更新 URL 参数（不刷新页面）
    const url = new URL(window.location.href);
    url.searchParams.set("id", idString);
    window.history.pushState({}, "", url);
  };

  // 关闭弹窗
  const handleCloseDialog = (open: boolean) => {
    setDialogOpen(open);
    
    if (!open) {
      // 移除 URL 参数
      const url = new URL(window.location.href);
      url.searchParams.delete("id");
      window.history.pushState({}, "", url);
      setSelectedArticleId(null);
    }
  };

  // 头条文章（第一篇）
  const topStory = articles[0];
  
  // 最新文章（排除第一篇）
  const latestArticles = articles.slice(1);

  // 无限滚动
  useEffect(() => {
    if (!loadMoreRef.current || !hasMore || loading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          fetchArticles(false, nextToken);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMore, loading, nextToken]);

  return (
    <>
      {/* 主要内容区 */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-6xl mx-auto">
          
          {/* 头条区域 */}
          {topStory && (
            <section className="mb-8">
              {/* 头条大卡片 - 优化布局 */}
              <button
                onClick={() => handleOpenArticle(topStory.id)}
                className="w-full text-left"
              >
                <div className="group cursor-pointer bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-800 hover:border-primary hover:shadow-2xl transition-all duration-500">
                  <div className="md:flex">
                    {/* 左侧图片 - 16:9 */}
                    <div className="md:w-[40%] aspect-[16/9] md:aspect-[16/9] bg-white dark:bg-gray-800 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 relative overflow-hidden">
                      {topStory.coverImage || topStory.imgList?.[0] ? (
                        <img 
                          src={topStory.coverImage || topStory.imgList?.[0]} 
                          alt={topStory.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-light/10" />
                          <div className="absolute inset-0 flex items-center justify-center text-gray-300 dark:text-gray-600">
                            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </>
                      )}
                    </div>
                    
                    {/* 右侧内容 - 60% */}
                    <div className="md:w-[60%] p-6 md:p-8 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                        {topStory.title}
                      </h2>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                        {topStory.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 opacity-65">
                        <span>{topStory.author.name}</span>
                        <span>·</span>
                        <span>{(() => {
                          const date = new Date(topStory.publishDate);
                          const now = new Date();
                          const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
                          
                          if (diffInHours < 1) return "刚刚";
                          if (diffInHours < 24) return `${diffInHours} 小时前`;
                          const diffInDays = Math.floor(diffInHours / 24);
                          if (diffInDays < 30) return `${diffInDays} 天前`;
                          return date.toLocaleDateString("zh-CN");
                        })()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </section>
          )}

          {/* 最新文章流 */}
          <section>
            {/* 标题 */}
            <div className="mb-6">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-gray-400" />
                <h2 className="text-xl font-bold">最新资讯</h2>
              </div>
            </div>

            {/* 错误提示 */}
            {error && (
              <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl">
                <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                  <AlertCircle className="h-5 w-5 flex-shrink-0" />
                  <p className="text-sm">{error}</p>
                </div>
              </div>
            )}

            {/* 初始加载状态 */}
            {loading && articles.length === 0 ? (
              <div className="py-20 text-center">
                <div className="inline-flex items-center gap-2 text-sm text-gray-400">
                  <div className="h-2 w-2 rounded-full bg-primary animate-bounce" />
                  <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:0.2s]" />
                  <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:0.4s]" />
                  <span className="ml-2">加载中...</span>
                </div>
              </div>
            ) : latestArticles.length > 0 ? (
              <>
                {/* 流式文章列表 */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm px-4">
                  {latestArticles.map((article, index) => (
                    <div key={article.id}>
                      <div onClick={() => handleOpenArticle(article.id)}>
                        <ArticleCard article={article} layout="horizontal" />
                      </div>
                      {/* 模块之间的分隔线，最后一个不显示 */}
                      {index < latestArticles.length - 1 && (
                        <div className="h-px bg-gray-100 dark:bg-gray-800" />
                      )}
                    </div>
                  ))}
                </div>

                {/* 加载更多触发器 */}
                {hasMore && (
                  <div ref={loadMoreRef} className="py-8 text-center">
                    {loading ? (
                      <div className="inline-flex items-center gap-2 text-sm text-gray-400">
                        <div className="h-2 w-2 rounded-full bg-primary animate-bounce" />
                        <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:0.2s]" />
                        <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:0.4s]" />
                        <span className="ml-2">加载中...</span>
                      </div>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => fetchArticles(false, nextToken)}
                      >
                        加载更多
                      </Button>
                    )}
                  </div>
                )}

                {/* 加载完成提示 */}
                {!hasMore && latestArticles.length > 0 && (
                  <div className="py-6 text-center text-sm text-gray-400">
                    已加载全部 {latestArticles.length} 篇文章
                  </div>
                )}
              </>
            ) : !loading && (
              <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  暂无文章
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  稍后再来看看吧
                </p>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* 文章详情弹窗 */}
      <ArticleDetailDialog
        articleId={selectedArticleId}
        open={dialogOpen}
        onOpenChange={handleCloseDialog}
      />
    </>
  );
}
