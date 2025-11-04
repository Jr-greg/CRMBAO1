"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, Clock, Share2, Maximize2, Minimize2 } from "lucide-react";
import { getArticleDetail, getArticleList } from "@/lib/api";
import { Article } from "@/lib/types";

interface ArticleDetailDialogProps {
  articleId: string | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ArticleDetailDialog({
  articleId,
  open,
  onOpenChange,
}: ArticleDetailDialogProps) {
  const [article, setArticle] = useState<Article | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!articleId || !open) {
      return;
    }

    const fetchArticle = async () => {
      setLoading(true);
      setError(false);
      
      try {
        // 获取文章详情
        const articleDetail = await getArticleDetail(articleId);
        setArticle(articleDetail);

        // 获取相关文章推荐
        try {
          const listResult = await getArticleList(20, "", "");
          const related = listResult.articles
            .filter((a) => a.category === articleDetail.category && a.id !== articleDetail.id)
            .slice(0, 3);
          setRelatedArticles(related);
        } catch (err) {
          console.log("获取相关文章失败，但不影响主文章显示");
        }
      } catch (err) {
        console.error("加载文章失败:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [articleId, open]);

  // 重置状态
  const handleClose = () => {
    onOpenChange(false);
    setIsFullscreen(false);
    setTimeout(() => {
      setArticle(null);
      setRelatedArticles([]);
      setError(false);
    }, 200);
  };

  // 切换全屏模式
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // 分享功能
  const handleShare = () => {
    if (article) {
      const url = `${window.location.origin}/articles?id=${article.id}`;
      navigator.clipboard.writeText(url);
      // 可以添加 toast 提示
      alert("链接已复制到剪贴板！");
    }
  };

  const formattedDate = article
    ? new Date(article.publishDate).toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className={`p-0 gap-0 flex flex-col overflow-hidden transition-all duration-300 ${
        isFullscreen 
          ? 'max-w-full w-screen h-screen rounded-none' 
          : 'max-w-7xl w-[96vw] h-[92vh] rounded-2xl'
      }`}>
        {/* 顶部固定栏 - 全屏时隐藏 */}
        {!isFullscreen && (
          <div className="flex-shrink-0 bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-3">
                {article && (
                  <Badge variant="outline" className="text-xs">
                    {article.category}
                  </Badge>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleShare}
                  className="gap-2"
                >
                  <Share2 className="h-4 w-4" />
                  分享
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleClose}
                  className="rounded-full"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* 主内容区域 - 可滚动 */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <div className="max-w-5xl mx-auto px-8 py-8">
            {/* 加载状态 */}
            {loading && (
              <div className="py-20 text-center">
                <div className="inline-flex items-center gap-2 text-sm text-gray-400">
                  <div className="h-2 w-2 rounded-full bg-primary animate-bounce" />
                  <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:0.2s]" />
                  <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:0.4s]" />
                  <span className="ml-2">加载中...</span>
                </div>
              </div>
            )}

            {/* 错误状态 */}
            {error && !loading && (
              <div className="py-20 text-center">
                <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  文章加载失败
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-6">
                  请稍后重试
                </p>
                <Button onClick={handleClose}>关闭</Button>
              </div>
            )}

            {/* 文章内容 */}
            {article && !loading && !error && (
              <>
                {/* 文章头部 */}
                <header className="mb-10">
                  {/* 标题 */}
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight text-gray-900 dark:text-gray-100">
                    {article.title}
                  </h1>

                  {/* 元信息 */}
                  <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400 pb-6 border-b border-gray-200 dark:border-gray-800">
                    <span className="font-medium text-gray-700 dark:text-gray-300">{article.author.name}</span>
                    <span>·</span>
                    <span>{formattedDate}</span>
                    {article.channel && (
                      <>
                        <span>·</span>
                        <span>{article.channel}</span>
                      </>
                    )}
                    {article.readTime && (
                      <>
                        <span>·</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{article.readTime} 分钟</span>
                        </div>
                      </>
                    )}
                  </div>
                </header>

                {/* 文章正文 - 优化排版 */}
                <article className="mb-12">
                  <div
                    dangerouslySetInnerHTML={{ __html: article.content }}
                    className="article-body text-base md:text-lg leading-[1.8] text-gray-800/75 dark:text-gray-200/75"
                    style={{
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word',
                    }}
                  />
                </article>

                {/* 额外图片展示 */}
                {article.imgList && article.imgList.length > 1 && (
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold mb-5 text-gray-900 dark:text-gray-100">
                      相关图片
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {article.imgList.slice(1, 5).map((img, idx) => (
                        <div
                          key={idx}
                          className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800"
                        >
                          <img
                            src={img}
                            alt={`${article.title} - 图片 ${idx + 1}`}
                            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 标签区域 */}
                {article.tags && article.tags.length > 0 && (
                  <div className="mb-10">
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-all px-3 py-1.5 text-sm"
                        >
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

              </>
            )}
          </div>

          {/* 相关文章推荐 */}
          {!loading && !error && article && relatedArticles.length > 0 && (
            <section className="border-t border-gray-200 dark:border-gray-800 pt-10">
              <div className="max-w-5xl mx-auto px-8">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-gray-100">
                  相关文章推荐
                </h3>
                <div className="space-y-3 mb-8">
                  {relatedArticles.map((related) => (
                    <button
                      key={related.id}
                      onClick={() => {
                        // 切换到新文章
                        const url = new URL(window.location.href);
                        url.searchParams.set("id", String(related.id));
                        window.history.pushState({}, "", url);
                        // 触发重新加载
                        window.location.href = url.toString();
                      }}
                      className="group flex gap-4 items-start p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all w-full text-left border border-transparent hover:border-gray-200 dark:hover:border-gray-800"
                    >
                      <div className="w-28 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary/10 to-primary-light/10">
                        {(related.coverImage || related.imgList?.[0]) && (
                          <img
                            src={related.coverImage || related.imgList?.[0]}
                            alt={related.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors text-gray-900 dark:text-gray-100">
                          {related.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                          <span>{related.author.name}</span>
                          <span>·</span>
                          <Clock className="h-3 w-3" />
                          <span>{related.readTime} 分钟</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>

        {/* 全屏按钮 - 固定在弹窗右下角 */}
        {!loading && !error && article && (
          <button
            onClick={toggleFullscreen}
            className="absolute bottom-6 right-6 z-50 p-3 bg-primary hover:bg-primary/90 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
            aria-label={isFullscreen ? "退出全屏" : "进入全屏"}
          >
            {isFullscreen ? (
              <Minimize2 className="h-5 w-5" />
            ) : (
              <Maximize2 className="h-5 w-5" />
            )}
            <span className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {isFullscreen ? "退出沉浸式阅读" : "沉浸式阅读"}
            </span>
          </button>
        )}

        {/* 全屏模式下的关闭按钮 - 固定在弹窗右上角 */}
        {!loading && !error && article && isFullscreen && (
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 z-50 p-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
            aria-label="关闭"
          >
            <X className="h-5 w-5" />
            <span className="absolute top-full right-0 mt-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              关闭
            </span>
          </button>
        )}
      </DialogContent>
    </Dialog>
  );
}

