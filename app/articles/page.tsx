"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import { ArticleCard } from "@/components/articles/article-card";
import { dummyArticles, dummyCategories } from "@/lib/dummy-articles";

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // 筛选文章
  const filteredArticles = dummyArticles.filter(article => {
    const matchCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchSearch = searchQuery === "" || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCategory && matchSearch;
  });

  // 精选文章
  const featuredArticles = dummyArticles.filter(a => a.featured);
  
  // 统计数据
  const totalArticles = dummyArticles.length;
  const totalViews = dummyArticles.reduce((sum, article) => sum + (article.views || 0), 0);

  return (
    <>
      {/* Hero 区域 */}
      <section className="relative overflow-hidden py-20 gradient-bg">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-light/20 rounded-full blur-3xl animate-float-slow-reverse" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* 小标签 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <BookOpen className="h-4 w-4 text-primary-light" />
              <span className="text-sm font-medium text-gray-200">深度内容 · 持续更新</span>
            </div>

            {/* 主标题 */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-white">文章</span>{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                知识库
              </span>
            </h1>

            {/* 副标题 */}
            <p className="text-xl text-gray-300 opacity-85 mb-12 max-w-2xl mx-auto leading-relaxed">
              精选优质内容，涵盖入门教程、安全指南、交易技巧等，助你深入了解加密世界
            </p>

            {/* 搜索栏 */}
            <div className="max-w-2xl mx-auto mb-10">
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="搜索文章标题、标签..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-gray-400 focus:bg-white/20 transition-colors"
                />
              </div>
            </div>

            {/* 统计数据 */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="text-3xl font-bold text-white mb-1">{totalArticles}</div>
                <div className="text-xs text-gray-400">精选文章</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10">
                <div className="text-3xl font-bold text-white mb-1">{(totalViews / 1000).toFixed(1)}K</div>
                <div className="text-xs text-gray-400">总阅读量</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 col-span-2 md:col-span-1">
                <div className="text-3xl font-bold text-white mb-1">{dummyCategories.length}</div>
                <div className="text-xs text-gray-400">内容分类</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 分类筛选 */}
      <section className="py-8 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-16 z-30 backdrop-blur-lg bg-white/80 dark:bg-gray-950/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge
              variant={selectedCategory === "all" ? "default" : "outline"}
              className="cursor-pointer px-5 py-2.5 text-sm hover:scale-105 transition-transform"
              onClick={() => setSelectedCategory("all")}
            >
              全部文章
            </Badge>
            {dummyCategories.map((cat) => (
              <Badge
                key={cat.id}
                variant={selectedCategory === cat.name ? "default" : "outline"}
                className="cursor-pointer px-5 py-2.5 text-sm hover:scale-105 transition-transform"
                onClick={() => setSelectedCategory(cat.name)}
              >
                {cat.name}
                {cat.count && <span className="ml-1.5 text-xs opacity-70">({cat.count})</span>}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* 精选文章 */}
      {selectedCategory === "all" && !searchQuery && (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
          <div className="container mx-auto px-4">
            {/* 标题 */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">编辑推荐</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">精选文章</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                深度解析热门话题，由专家团队精心挑选
              </p>
            </div>

            {/* 文章网格 */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 最新文章 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* 标题 */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-4xl font-bold mb-2">
                    {selectedCategory === "all" ? "全部文章" : `${selectedCategory}`}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    共 {filteredArticles.length} 篇文章
                    {searchQuery && ` · 搜索「${searchQuery}」`}
                  </p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
            </div>

            {/* 文章网格 */}
            {filteredArticles.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                  ))}
                </div>

                {/* 分页占位 */}
                <div className="mt-16 flex justify-center gap-2">
                  {[1, 2, 3, 4, 5].map((page) => (
                    <button
                      key={page}
                      className={`h-12 w-12 rounded-xl font-medium transition-all ${
                        page === 1
                          ? "bg-gradient-to-r from-primary to-primary-light text-white shadow-lg scale-110"
                          : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-primary hover:text-primary"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
                  未找到相关文章
                </h3>
                <p className="text-gray-500 dark:text-gray-500 mb-6">
                  试试其他关键词或浏览全部分类
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                >
                  清除筛选
                </Button>
              </div>
            )}

            {/* 热门标签 - 小模块 */}
            <div className="mt-16 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">热门标签</span>
                <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
              </div>
              <div className="flex flex-wrap gap-2">
                {["比特币", "以太坊", "DeFi", "NFT", "钱包", "交易", "安全", "入门", "区块链", "稳定币", "Layer2", "Web3", "KYC", "提现", "合约"].map((tag, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-all px-3 py-1.5 text-xs"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 区域 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-primary to-primary-light rounded-[32px] p-12 text-center overflow-hidden shadow-2xl">
              {/* 背景装饰 */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                  <Sparkles className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">准备开始学习了吗？</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  从入门到精通，一站式学习
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  完整的学习路径和手把手教程，让你安全、高效地进入加密世界
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/learn">
                    <Button size="lg" className="text-base px-8 h-12 bg-white hover:bg-gray-100 text-gray-900 border-0 shadow-xl">
                      开始学习
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/binance">
                    <Button size="lg" className="text-base px-8 h-12 bg-white/20 hover:bg-white/30 text-white border-2 border-white/50">
                      查看交易所教程
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

