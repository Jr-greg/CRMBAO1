import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, FileCheck, AlertTriangle } from "lucide-react";
import { AnimatedBackground } from "./animated-background";

export function Hero() {
  const trustBadges = [
    { icon: Shield, text: "官方渠道" },
    { icon: FileCheck, text: "内容审核" },
    { icon: AlertTriangle, text: "非金融建议" },
  ];

  return (
    <section className="relative overflow-hidden py-20 gradient-bg">
      {/* 动态粒子背景 */}
      <AnimatedBackground />
      
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* 小标签 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-[60px]">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-gray-200">为新手精心打造</span>
          </div>

          {/* 主标题 */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              加密货币
            </span>{" "}
            <span className="text-white">从入门到精通</span>
          </h1>

          {/* 副标题 */}
          <p className="text-xl md:text-2xl text-gray-300 opacity-85 mb-[72px] max-w-2xl mx-auto leading-relaxed">
            一站式学习平台，助你安全、高效地开启加密之旅
          </p>

          {/* CTA 按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/learn">
              <Button size="lg" className="text-base px-10 h-14 shadow-2xl shadow-primary/25">
                开始学习
              </Button>
            </Link>
            <Link href="/binance">
              <Button size="lg" variant="outline" className="text-base px-10 h-14">
                浏览教程
              </Button>
            </Link>
          </div>

          {/* 信任指标 - 更简洁 */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-400"
              >
                <badge.icon className="h-4 w-4" />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


