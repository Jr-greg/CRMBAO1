"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bitcoin,
  Wallet,
  FileCheck,
  CreditCard,
  ShoppingCart,
  ArrowDownToLine,
  Calculator,
  AlertTriangle,
  Clock,
  ArrowRight,
} from "lucide-react";

const courses = [
  {
    icon: Bitcoin,
    title: "BTC 是什么？",
    description: "了解比特币与加密货币的基本概念",
    duration: "5 分钟",
    level: "入门",
    color: "text-orange-500",
    bgColor: "bg-orange-500/5 hover:bg-orange-500/10",
  },
  {
    icon: Wallet,
    title: "钱包 vs 交易所",
    description: "理解托管与自托管的区别",
    duration: "8 分钟",
    level: "入门",
    color: "text-blue-500",
    bgColor: "bg-blue-500/5 hover:bg-blue-500/10",
  },
  {
    icon: FileCheck,
    title: "KYC 身份认证",
    description: "为什么需要 KYC，如何准备材料",
    duration: "6 分钟",
    level: "入门",
    color: "text-green-500",
    bgColor: "bg-green-500/5 hover:bg-green-500/10",
  },
  {
    icon: CreditCard,
    title: "如何入金",
    description: "法币充值、C2C、银行卡的使用方法",
    duration: "10 分钟",
    level: "入门",
    color: "text-purple-500",
    bgColor: "bg-purple-500/5 hover:bg-purple-500/10",
  },
  {
    icon: ShoppingCart,
    title: "完成首单",
    description: "现货交易、市价单、限价单详解",
    duration: "12 分钟",
    level: "初级",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/5 hover:bg-cyan-500/10",
  },
  {
    icon: ArrowDownToLine,
    title: "如何提现",
    description: "转账到钱包、提现到银行卡",
    duration: "10 分钟",
    level: "初级",
    color: "text-teal-500",
    bgColor: "bg-teal-500/5 hover:bg-teal-500/10",
  },
  {
    icon: Calculator,
    title: "税务入门",
    description: "加密货币税务的基本概念（各地规则不同）",
    duration: "15 分钟",
    level: "进阶",
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/5 hover:bg-indigo-500/10",
  },
  {
    icon: AlertTriangle,
    title: "风险识别",
    description: "识别诈骗、钓鱼网站、假客服",
    duration: "8 分钟",
    level: "必修",
    color: "text-red-500",
    bgColor: "bg-red-500/5 hover:bg-red-500/10",
  },
];

export function CourseCards() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950/50">
      <div className="container mx-auto px-4">
        {/* 标题区 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">新手课程</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-2">
            从基础概念到实操指南，一站式学习
          </p>
          <div className="inline-flex items-center gap-2 text-sm text-gray-500">
            <span>共 {courses.length} 门课程</span>
            <span>·</span>
            <span>完全免费</span>
          </div>
        </div>

        {/* 课程网格 - 紧凑轻量 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-8">
          {courses.map((course, index) => (
            <Link key={index} href="/learn">
              <div
                className={`group cursor-pointer ${course.bgColor} rounded-2xl p-5 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-800`}
              >
                {/* 图标 */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`h-10 w-10 rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center shrink-0 shadow-sm`}>
                    <course.icon className={`h-5 w-5 ${course.color}`} />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {course.level}
                  </Badge>
                </div>

                {/* 标题 */}
                <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>

                {/* 描述 */}
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-3 line-clamp-2">
                  {course.description}
                </p>

                {/* 时长 */}
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{course.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 底部CTA */}
        <div className="text-center mt-12">
          <Link href="/learn">
            <Button variant="ghost" size="lg" className="group">
              查看全部课程
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}


