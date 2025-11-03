import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Eye, User, Share2, Bookmark, ArrowLeft, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { dummyArticles } from "@/lib/dummy-articles";

// 动态路由参数类型
type Props = {
  params: { slug: string };
};

// 生成元数据（服务端）
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = dummyArticles.find(
    (a) => a.slug === params.slug || String(a.id) === params.slug
  );

  return {
    title: article ? `${article.title} | 入门宝` : "文章详情 | 入门宝",
    description: article?.description || "",
  };
}

export default function ArticleDetailPage({ params }: Props) {
  const article = dummyArticles.find(
    (a) => a.slug === params.slug || String(a.id) === params.slug
  );

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">文章未找到</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            抱歉，您访问的文章不存在或已被删除
          </p>
          <Link href="/articles">
            <Button size="lg">
              <ArrowLeft className="h-4 w-4 mr-2" />
              返回文章列表
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(article.publishDate).toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // 推荐文章（同分类）
  const relatedArticles = dummyArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

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
    <>
      {/* Hero 区域 */}
      <section className="relative overflow-hidden py-16 gradient-bg">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-light/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* 返回按钮 */}
            <Link href="/articles">
              <Button variant="ghost" className="mb-8 text-gray-300 hover:text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4 mr-2" />
                返回文章列表
              </Button>
            </Link>

            {/* 分类和标签 */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Badge className={`bg-gradient-to-r ${gradientColor} text-white border-0 shadow-lg`}>
                {article.category}
              </Badge>
              {article.featured && (
                <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                  <Sparkles className="h-3 w-3 mr-1" />
                  精选
                </Badge>
              )}
            </div>

            {/* 标题 */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>

            {/* 描述 */}
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {article.description}
            </p>

            {/* 元信息 */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold">
                  {article.author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-white">{article.author.name}</div>
                  <div className="text-xs text-gray-400">作者</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime} 分钟阅读</span>
              </div>
              {article.views && (
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  <span>{article.views} 次浏览</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 文章主体 */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 操作栏 */}
            <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="h-4 w-4" />
                  分享文章
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Bookmark className="h-4 w-4" />
                  收藏
                </Button>
              </div>
              <div className="text-sm text-gray-500">
                目录
              </div>
            </div>

            {/* 封面图 */}
            <div className="relative aspect-[21/9] rounded-[32px] overflow-hidden mb-12 shadow-2xl">
              {article.coverImage ? (
                <div className={`w-full h-full bg-gradient-to-br ${gradientColor}`} />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${gradientColor} flex items-center justify-center relative`}>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                  <div className="relative z-10 text-center">
                    <div className="text-6xl mb-4">📰</div>
                    <div className="text-white/50 text-sm">封面图占位</div>
                  </div>
                </div>
              )}
            </div>

            {/* 文章正文 */}
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              {/* 占位内容 */}
              <div className="bg-white dark:bg-gray-900 rounded-[32px] p-8 md:p-12 border border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary">
                    <Sparkles className="h-4 w-4" />
                    <span>文章正文区域</span>
                  </div>

                  <h2 className="text-3xl font-bold mt-8 mb-4">什么是加密货币？</h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    加密货币是一种使用密码学原理来确保交易安全及控制交易单位创造的交易媒介。
                    它是数字货币（或称虚拟货币）的一种。比特币在2009年成为第一个去中心化的加密货币，
                    这之后加密货币一词多指此类设计。
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    后端同事抓取的文章内容会渲染在这里。支持 HTML 或 Markdown 格式。
                    前端会将 content 字段直接渲染（做好 XSS 防护）。
                  </p>

                  <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 border-l-4 border-primary rounded-r-2xl p-6 my-8">
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 text-primary mt-1 shrink-0" />
                      <div>
                        <div className="font-semibold text-primary mb-2">重要提示</div>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          这是一个引用示例。文章内容会在这里展示，保持良好的排版和可读性。
                          加密货币投资存在风险，请根据自身情况谨慎决策。
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mt-8 mb-4">核心特点</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>去中心化：</strong>无需中央机构控制，通过分布式网络运行
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>透明性：</strong>所有交易记录公开可查，确保系统透明度
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">
                        <strong>安全性：</strong>使用密码学技术保护交易和账户安全
                      </span>
                    </li>
                  </ul>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
                    建议后端返回已经处理好的 HTML，包含图片、链接、代码块等。
                    也可以返回 Markdown，前端用库（如 marked）转换。
                  </p>
                </div>
              </div>
            </div>

            {/* 标签区域 */}
            <div className="mb-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">相关标签</span>
                <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800" />
              </div>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-all px-4 py-2"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* 分享区域 */}
            <div className="mb-16 p-8 bg-gradient-to-br from-primary/5 to-primary-light/5 rounded-[32px] border border-primary/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-3">觉得这篇文章有帮助？</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  分享给更多需要的人，让知识传播更远
                </p>
                <div className="flex gap-3 justify-center">
                  <Button className="gap-2">
                    <Share2 className="h-4 w-4" />
                    分享文章
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Bookmark className="h-4 w-4" />
                    收藏
                  </Button>
                </div>
              </div>
            </div>

            {/* 相关文章 */}
            {relatedArticles.length > 0 && (
              <section>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-2">相关文章推荐</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    继续探索 {article.category} 相关内容
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedArticles.map((related) => (
                    <Link key={related.id} href={`/articles/${related.slug || related.id}`}>
                      <div className="group cursor-pointer h-full">
                        <div className="bg-white dark:bg-gray-900 rounded-[24px] overflow-hidden border-2 border-gray-200 dark:border-gray-800 hover:border-primary hover:shadow-xl transition-all duration-300 h-full">
                          {/* 小封面 */}
                          <div className={`h-32 bg-gradient-to-br ${categoryColors[related.category] || 'from-primary to-primary-light'} relative overflow-hidden`}>
                            <div className="absolute top-2 right-2">
                              <Badge className="bg-white/90 dark:bg-gray-900/90 text-xs">
                                {related.category}
                              </Badge>
                            </div>
                          </div>

                          {/* 内容 */}
                          <div className="p-5">
                            <h3 className="font-bold text-base leading-tight mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                              {related.title}
                            </h3>
                            <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                              {related.description}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Clock className="h-3 w-3" />
                              <span>{related.readTime} 分钟</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </article>

      {/* CTA 区域 */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-primary to-primary-light rounded-[32px] p-12 text-center overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                  <Sparkles className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">继续学习</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  开启你的加密之旅
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  从今天开始，跟随我们的学习路径，安全、高效地进入加密世界
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/learn">
                    <Button size="lg" className="text-base px-8 h-12 bg-white hover:bg-gray-100 text-gray-900 border-0 shadow-xl">
                      开始学习
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/articles">
                    <Button size="lg" className="text-base px-8 h-12 bg-white/20 hover:bg-white/30 text-white border-2 border-white/50">
                      浏览更多文章
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD 结构化数据（SEO） */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.description,
            author: {
              "@type": "Person",
              name: article.author.name,
            },
            datePublished: article.publishDate,
            dateModified: article.updateDate || article.publishDate,
          }),
        }}
      />
    </>
  );
}

