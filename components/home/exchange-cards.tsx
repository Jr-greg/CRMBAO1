"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ArrowRight } from "lucide-react";

const exchanges = [
  {
    name: "Binance",
    slug: "binance",
    tagline: "全球交易量第一",
    description: "全球最大的加密货币交易所，提供 350+ 币种交易，24/7 中文客服支持",
    features: ["零手续费交易对", "新手学院免费课程", "实时行情跟踪"],
    rating: 4.8,
    reviewCount: "12.5万",
    brandColor: "from-amber-400 to-yellow-500",
    icon: "B",
    registerLink: "https://accounts.maxweb.red/register?ref=CRMBAO",
  },
  {
    name: "OKX",
    slug: "okx",
    tagline: "一站式 Web3 平台",
    description: "综合性交易平台，支持现货、合约及 Web3 钱包，适合进阶用户",
    features: ["统一交易账户", "Web3 钱包内置", "专业合约工具"],
    rating: 4.7,
    reviewCount: "8.3万",
    brandColor: "from-blue-500 to-cyan-500",
    icon: "O",
    registerLink: "https://www.afibbjgrubxx.com/join/CRMBAO",
  },
];

export function ExchangeCards() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* 标题区域 - 居中对齐 */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            精选推荐
          </p>
          <h2 className="text-4xl font-bold mb-4">热门交易所</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            为新手精心挑选的主流平台
          </p>
        </div>

        {/* 交易所卡片 - 左右排列 */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {exchanges.map((exchange) => (
            <div key={exchange.slug} className="group h-full">
              <div className="bg-white dark:bg-gray-900 rounded-[28px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-800 h-full flex flex-col">
                <div className="p-6 flex flex-col h-full">
                    {/* 顶部：图标+标题 */}
                    <div className="flex items-start gap-4 mb-4">
                      {/* 品牌图标 */}
                      <div className={`w-20 h-20 rounded-[18px] overflow-hidden shadow-lg flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                        <img 
                          src={`/images/${exchange.slug}.png`} 
                          alt={exchange.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* 标题区 */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="text-2xl font-bold">{exchange.name}</h3>
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-0 shrink-0 text-xs">
                            推荐
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {exchange.tagline}
                        </p>
                      </div>
                    </div>

                    {/* 评分 */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3.5 w-3.5 ${
                              i < Math.floor(exchange.rating)
                                ? "fill-amber-400 text-amber-400"
                                : "fill-gray-300 text-gray-300 dark:fill-gray-700 dark:text-gray-700"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-semibold">{exchange.rating}</span>
                      <span className="text-xs text-gray-500">
                        {exchange.reviewCount} 个评分
                      </span>
                    </div>

                    {/* 描述 */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-1">
                      {exchange.description}
                    </p>

                    {/* 特性标签 */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exchange.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* 底部按钮 */}
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-800 space-y-3">
                      <a
                        href={exchange.registerLink}
                        target="_blank"
                        rel="nofollow sponsored noopener noreferrer"
                        className="block"
                      >
                        <Button
                          className="w-full group-hover:scale-[1.02] transition-transform shadow-md"
                          size="lg"
                        >
                          立即注册
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                      <a
                        href={exchange.registerLink}
                        target="_blank"
                        rel="nofollow sponsored noopener noreferrer"
                        className="block"
                      >
                        <Button
                          variant="outline"
                          className="w-full group-hover:scale-[1.02] transition-transform"
                          size="lg"
                        >
                          下载 App
                        </Button>
                      </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


