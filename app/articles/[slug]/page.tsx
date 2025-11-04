import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Share2, ArrowLeft, Clock, Sparkles, MessageCircle } from "lucide-react";
import Link from "next/link";
import { dummyArticles } from "@/lib/dummy-articles";
import Image from "next/image";

// 动态路由参数类型
type Props = {
  params: { slug: string };
};

// 生成静态路径
export async function generateStaticParams() {
  return dummyArticles.map((article) => ({
    slug: article.slug || String(article.id),
  }));
}

// 生成元数据
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
          <h1 className="text-2xl font-bold mb-4">文章未找到</h1>
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

  // 推荐文章
  const relatedArticles = dummyArticles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <>
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto h-14 flex items-center justify-between">
            <Link href="/articles">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                返回
              </Button>
            </Link>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {article.category}
            </div>
          </div>
        </div>
      </header>

      {/* 文章主体 */}
      <article className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 头部信息 */}
            <div className="mb-8">
              {/* 作者信息 + 分享 */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold">
                    {article.author.name.charAt(0)}
                  </div>
                  <div>
                    <Link href="#" className="font-medium hover:text-primary transition-colors">
                      {article.author.name}
                    </Link>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{formattedDate}</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="gap-1.5">
                    <Share2 className="h-4 w-4" />
                    <span className="text-sm">分享</span>
                  </Button>
                </div>
              </div>

              {/* 标题 */}
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900 dark:text-gray-100">
                {article.title}
              </h1>
            </div>

            {/* 导读区 - 类似"闪电导读" */}
            <div className="mb-8 bg-gradient-to-r from-primary/5 to-primary-light/5 dark:from-primary/10 dark:to-primary-light/10 rounded-2xl p-6 border border-primary/20">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-primary mb-2">文章导读</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </div>
            </div>

            {/* 封面图（可选） */}
            {article.coverImage && (
              <div className="mb-8 rounded-2xl overflow-hidden">
                <div className="aspect-[21/9] bg-gradient-to-br from-primary/10 to-primary-light/10" />
              </div>
            )}

            {/* 正文内容 - Typography.js 风格 */}
            <div className="article-content mb-12">
              {/* 示例内容 - 实际使用时通过 dangerouslySetInnerHTML 渲染后端返回的 HTML */}
              <h2>什么是加密货币？</h2>
              <p>
                加密货币是一种使用密码学原理来确保交易安全及控制交易单位创造的交易媒介。
                它是数字货币（或称虚拟货币）的一种。比特币在2009年成为第一个去中心化的加密货币，
                这之后加密货币一词多指此类设计。
              </p>

              <p>
                加密货币基于去中心化的共识机制，与依赖中心化监管体系的银行金融系统相对。
                去中心化的性质源自于使用分布式账本的区块链技术。
              </p>

              <blockquote>
                <strong>重要提示：</strong>加密货币投资存在风险，价格波动较大。
                请根据自身风险承受能力，合理配置资产。切勿投入超过自己承受范围的资金。
              </blockquote>

              <h3>核心特点</h3>
              <ul>
                <li><strong>去中心化：</strong>无需中央机构控制，通过分布式网络运行</li>
                <li><strong>透明性：</strong>所有交易记录公开可查，确保系统透明度</li>
                <li><strong>安全性：</strong>使用密码学技术保护交易和账户安全</li>
                <li><strong>匿名性：</strong>用户可以在一定程度上保持身份匿名</li>
              </ul>

              <h3>常见应用场景</h3>
              <p>
                加密货币不仅可以用于投资，还有许多实际应用场景：
              </p>
              <ol>
                <li>跨境支付和汇款</li>
                <li>去中心化金融（DeFi）服务</li>
                <li>NFT 数字资产交易</li>
                <li>智能合约应用</li>
              </ol>

              <p>
                随着技术的发展和监管的完善，加密货币正在逐步走向主流应用。
                了解基础知识，理性参与，才能更好地把握机遇。
              </p>

              {/* 实际使用时替换为：
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
              */}
            </div>

            {/* 标签区域 */}
            <div className="mb-8 pb-8 border-b border-gray-200 dark:border-gray-800">
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition-all px-3 py-1.5"
                  >
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* 免责声明 */}
            <div className="mb-12 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-2xl text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              <p className="mb-2">
                <strong>免责声明：</strong>
                本文不构成投资建议，用户应考虑本文中的任何意见、观点或结论是否符合其特定状况。据此投资，风险自担。
              </p>
              <p>
                本文内容仅供参考学习，不代表本站观点。加密货币投资存在较大风险，请谨慎决策。
              </p>
            </div>

            {/* 评论区占位 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="h-5 w-5 text-gray-400" />
                <h3 className="text-xl font-bold">评论</h3>
                <span className="text-sm text-gray-500">(0)</span>
              </div>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-12 text-center border-2 border-dashed border-gray-200 dark:border-gray-800">
                <MessageCircle className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  评论功能即将上线，敬请期待
                </p>
              </div>
            </div>

            {/* 相关文章 */}
            {relatedArticles.length > 0 && (
              <section className="mb-12">
                <h3 className="text-xl font-bold mb-6">相关文章推荐</h3>
                <div className="space-y-4">
                  {relatedArticles.map((related) => (
                    <Link key={related.id} href={`/articles/${related.slug || related.id}`}>
                      <div className="group flex gap-4 items-start p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors">
                        <div className="w-32 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary/10 to-primary-light/10" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium leading-snug mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            {related.title}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <span>{related.author.name}</span>
                            <span>·</span>
                            <Clock className="h-3 w-3" />
                            <span>{related.readTime} 分钟</span>
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
