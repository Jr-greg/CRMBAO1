"use client";

import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Video,
  FileText,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "系统化教程",
    description: "从零开始，循序渐进掌握加密货币交易的每个环节",
    color: "text-blue-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Video,
    title: "图文并茂",
    description: "丰富的截图演示和详细步骤说明，让学习更加直观易懂",
    color: "text-purple-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: FileText,
    title: "实时更新",
    description: "紧跟平台最新变化，确保教程内容始终准确有效",
    color: "text-green-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
  },
];

const highlights = [
  "注册与身份认证指南",
  "入金提现完整流程",
  "交易安全防护知识",
  "常见问题解决方案",
];

export function CourseCards() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* 标题区 */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">精心打造</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">新手教程体系</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              我们正在为你准备详尽的加密货币入门教程，帮助你安全、快速地开启交易之旅
            </p>
          </div>

          {/* 特色卡片 */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300`}
              >
                <div className="mb-4">
                  <div className="inline-flex h-14 w-14 rounded-2xl bg-white dark:bg-gray-900 items-center justify-center shadow-lg">
                    <feature.icon className={`h-7 w-7 ${feature.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* 即将推出的内容 */}
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="text-center mb-8">
              <Badge className="bg-primary/10 text-primary border-0 mb-4">
                即将推出
              </Badge>
              <h3 className="text-2xl font-bold mb-3">教程内容抢先看</h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                涵盖从账户注册到交易实操的全流程指导，让你轻松入门
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-gray-500">
                在此之前，你可以先访问{" "}
                <a href="/binance" className="text-primary hover:underline font-medium">
                  交易所教程页面
                </a>{" "}
                开始了解
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


