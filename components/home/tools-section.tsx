"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { dummyArticles } from "@/lib/dummy-articles";

export function FeaturedArticlesSection() {
  // 获取精选文章（featured: true）
  const featuredArticles = dummyArticles.filter(article => article.featured).slice(0, 3);

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
          {featuredArticles.map((article) => {
            const formattedDate = new Date(article.publishDate).toLocaleDateString("zh-CN", {
              month: "long",
              day: "numeric",
            });

            return (
              <Link key={article.id} href={`/articles/${article.slug || article.id}`}>
                <div className="group cursor-pointer h-full">
                  <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 h-full flex flex-col">
                    {/* 封面图 */}
                    <div className="aspect-video bg-gradient-to-br from-primary/10 via-primary-light/5 to-primary/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">封面图</span>
                      </div>
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
                        <div className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{article.readTime} 分钟</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
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
    </section>
  );
}


