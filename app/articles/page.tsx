"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, TrendingUp } from "lucide-react";
import { ArticleCard } from "@/components/articles/article-card";
import { dummyArticles, dummyCategories } from "@/lib/dummy-articles";

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [displayCount, setDisplayCount] = useState<number>(15);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  
  // 头条文章（第一篇featured，不受分类影响）
  const topStory = dummyArticles.find(a => a.featured);

  // 筛选文章（受分类和搜索影响）
  const filteredArticles = dummyArticles.filter(article => {
    const matchCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchSearch = searchQuery === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  // 最新文章（排除顶部大卡片显示的那篇，保留其他所有文章包括其他头条）
  const latestArticles = filteredArticles.filter(a => a.id !== topStory?.id);
  
  // 显示的文章（分页）
  const displayedArticles = latestArticles.slice(0, displayCount);
  const hasMore = displayCount < latestArticles.length;

  // 无限滚动
  useEffect(() => {
    if (!loadMoreRef.current || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setDisplayCount(prev => Math.min(prev + 10, latestArticles.length));
          }, 300);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [hasMore, latestArticles.length]);

  // 重置分页
  useEffect(() => {
    setDisplayCount(15);
  }, [selectedCategory, searchQuery]);

  return (
    <>
      {/* 主要内容区 */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-6xl mx-auto">
          
          {/* 头条区域（不受分类影响） */}
          {!searchQuery && topStory && (
            <section className="mb-8">
              {/* 头条大卡片 - 优化布局 */}
              <Link href={`/articles/${topStory.slug || topStory.id}`}>
                <div className="group cursor-pointer bg-white dark:bg-gray-900 rounded-[32px] overflow-hidden border-2 border-gray-200 dark:border-gray-800 hover:border-primary hover:shadow-2xl transition-all duration-500">
                  <div className="md:flex">
                    {/* 左侧图片 - 16:9 */}
                    <div className="md:w-[40%] aspect-[16/9] md:aspect-[16/9] bg-white dark:bg-gray-800 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary-light/10" />
                      <div className="absolute inset-0 flex items-center justify-center text-gray-300 dark:text-gray-600">
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* 右侧内容 - 60% */}
                    <div className="md:w-[60%] p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-2 mb-4">
                        <Badge variant="outline" className="text-xs">
                          {topStory.category}
                        </Badge>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                        {topStory.title}
                      </h2>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                        {topStory.description}
                      </p>
                      
                      <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-medium">{topStory.author.name}</span>
                        <span>·</span>
                        <span>{new Date(topStory.publishDate).toLocaleDateString("zh-CN")}</span>
                        {topStory.views && (
                          <>
                            <span>·</span>
                            <span>{topStory.views} 阅读</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </section>
          )}

          {/* 最新文章流 */}
          <section>
            {/* 标题 + 分类导航 */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-gray-400" />
                  <h2 className="text-xl font-bold">最新资讯</h2>
                  {searchQuery && (
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      · 搜索「{searchQuery}」
                    </span>
                  )}
                </div>
                
                {/* 搜索按钮 */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2"
                  onClick={() => setShowSearch(!showSearch)}
                >
                  <Search className="h-4 w-4" />
                  {!showSearch && <span className="text-sm">搜索</span>}
                </Button>
              </div>

              {/* 搜索框（可展开） */}
              {showSearch && (
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="搜索文章标题、标签..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-11 h-12 rounded-2xl bg-white dark:bg-gray-900 border-2"
                    />
                  </div>
                </div>
              )}

              {/* 分类导航 */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
                <Badge
                  variant={selectedCategory === "all" ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm whitespace-nowrap rounded-full hover:scale-105 transition-transform"
                  onClick={() => setSelectedCategory("all")}
                >
                  全部
                </Badge>
                {dummyCategories.map((cat) => (
                  <Badge
                    key={cat.id}
                    variant={selectedCategory === cat.name ? "default" : "outline"}
                    className="cursor-pointer px-4 py-2 text-sm whitespace-nowrap rounded-full hover:scale-105 transition-transform"
                    onClick={() => setSelectedCategory(cat.name)}
                  >
                    {cat.name}
                  </Badge>
                ))}
              </div>
            </div>

            {displayedArticles.length > 0 ? (
              <>
                {/* 流式文章列表 */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm px-4">
                  {displayedArticles.map((article, index) => (
                    <div key={article.id}>
                      <ArticleCard article={article} layout="horizontal" />
                      {/* 模块之间的分隔线，最后一个不显示 */}
                      {index < displayedArticles.length - 1 && (
                        <div className="h-px bg-gray-100 dark:bg-gray-800" />
                      )}
                    </div>
                  ))}
                </div>

                {/* 加载更多触发器 */}
                {hasMore && (
                  <div ref={loadMoreRef} className="py-8 text-center">
                    <div className="inline-flex items-center gap-2 text-sm text-gray-400">
                      <div className="h-2 w-2 rounded-full bg-primary animate-bounce" />
                      <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:0.2s]" />
                      <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:0.4s]" />
                      <span className="ml-2">加载中...</span>
                    </div>
                  </div>
                )}

                {/* 加载完成提示 */}
                {!hasMore && displayedArticles.length > 15 && (
                  <div className="py-6 text-center text-sm text-gray-400">
                    已加载全部 {latestArticles.length} 篇文章
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-16 bg-white dark:bg-gray-900 rounded-2xl border-2 border-gray-200 dark:border-gray-800">
                <Search className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  未找到相关文章
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                  试试其他关键词或浏览全部分类
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                    setShowSearch(false);
                  }}
                >
                  清除筛选
                </Button>
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}
