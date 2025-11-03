import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
  BookOpen,
  Play,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Target,
  Users,
  Award,
} from "lucide-react";

export const metadata: Metadata = {
  title: "新手入门中心 - 从零学习加密货币 | 入门宝",
  description: "系统化的加密货币学习路径，从基础概念到实操交易，帮助你安全、高效地入门。",
};

const stats = [
  { icon: Users, label: "学习人数", value: "12,500+" },
  { icon: BookOpen, label: "课程数量", value: "8 门" },
  { icon: Clock, label: "总时长", value: "218 分钟" },
  { icon: Award, label: "完成率", value: "89%" },
];

const learningPath = [
  { 
    step: 1, 
    title: "加密基础", 
    icon: Bitcoin, 
    duration: "30min",
    gradient: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-500",
  },
  { 
    step: 2, 
    title: "钱包认知", 
    icon: Wallet, 
    duration: "25min",
    gradient: "from-cyan-500 to-teal-500",
    iconBg: "bg-cyan-500",
  },
  { 
    step: 3, 
    title: "账户安全", 
    icon: FileCheck, 
    duration: "20min",
    gradient: "from-teal-500 to-green-500",
    iconBg: "bg-teal-500",
  },
  { 
    step: 4, 
    title: "入金充值", 
    icon: CreditCard, 
    duration: "35min",
    gradient: "from-green-500 to-emerald-500",
    iconBg: "bg-green-500",
  },
  { 
    step: 5, 
    title: "首笔交易", 
    icon: ShoppingCart, 
    duration: "40min",
    gradient: "from-emerald-500 to-lime-500",
    iconBg: "bg-emerald-500",
  },
  { 
    step: 6, 
    title: "提现转账", 
    icon: ArrowDownToLine, 
    duration: "30min",
    gradient: "from-lime-500 to-yellow-500",
    iconBg: "bg-lime-500",
  },
  { 
    step: 7, 
    title: "税务须知", 
    icon: Calculator, 
    duration: "25min",
    gradient: "from-yellow-500 to-orange-500",
    iconBg: "bg-yellow-500",
  },
  { 
    step: 8, 
    title: "风险防范", 
    icon: AlertTriangle, 
    duration: "30min",
    gradient: "from-orange-500 to-red-500",
    iconBg: "bg-orange-500",
    featured: true,
  },
];

const courses = [
  {
    icon: Bitcoin,
    title: "比特币是什么？",
    description: "理解加密货币的核心概念与工作原理",
    duration: "30 分钟",
    level: "入门",
    lessons: 4,
    color: "text-orange-500",
    bgColor: "bg-orange-500/5 hover:bg-orange-500/10",
  },
  {
    icon: Wallet,
    title: "钱包 vs 交易所",
    description: "托管与自托管的区别及选择",
    duration: "25 分钟",
    level: "入门",
    lessons: 4,
    color: "text-blue-500",
    bgColor: "bg-blue-500/5 hover:bg-blue-500/10",
  },
  {
    icon: FileCheck,
    title: "KYC 身份认证",
    description: "了解认证流程与材料准备",
    duration: "20 分钟",
    level: "入门",
    lessons: 4,
    color: "text-green-500",
    bgColor: "bg-green-500/5 hover:bg-green-500/10",
  },
  {
    icon: CreditCard,
    title: "如何入金",
    description: "法币充值与加密货币转账方法",
    duration: "35 分钟",
    level: "初级",
    lessons: 4,
    color: "text-purple-500",
    bgColor: "bg-purple-500/5 hover:bg-purple-500/10",
  },
  {
    icon: ShoppingCart,
    title: "完成首单",
    description: "现货交易、市价单、限价单详解",
    duration: "40 分钟",
    level: "初级",
    lessons: 4,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/5 hover:bg-cyan-500/10",
  },
  {
    icon: ArrowDownToLine,
    title: "提现与转账",
    description: "安全转出资产到钱包或银行",
    duration: "30 分钟",
    level: "初级",
    lessons: 4,
    color: "text-teal-500",
    bgColor: "bg-teal-500/5 hover:bg-teal-500/10",
  },
  {
    icon: Calculator,
    title: "税务入门",
    description: "加密货币税务的基本概念",
    duration: "25 分钟",
    level: "进阶",
    lessons: 4,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/5 hover:bg-indigo-500/10",
  },
  {
    icon: AlertTriangle,
    title: "风险识别",
    description: "识别诈骗、钓鱼网站、假客服",
    duration: "30 分钟",
    level: "必修",
    lessons: 4,
    color: "text-red-500",
    bgColor: "bg-red-500/5 hover:bg-red-500/10",
  },
];

const glossary = [
  { term: "BTC", definition: "Bitcoin（比特币）的缩写", category: "币种" },
  { term: "ETH", definition: "Ethereum（以太坊）的缩写", category: "币种" },
  { term: "USDT", definition: "Tether，与美元挂钩的稳定币", category: "币种" },
  { term: "KYC", definition: "Know Your Customer，身份认证", category: "术语" },
  { term: "2FA", definition: "Two-Factor Authentication，双重认证", category: "安全" },
  { term: "DCA", definition: "Dollar Cost Averaging，定投策略", category: "策略" },
  { term: "DYOR", definition: "Do Your Own Research，自己做研究", category: "术语" },
  { term: "FOMO", definition: "Fear Of Missing Out，害怕错过", category: "术语" },
  { term: "FUD", definition: "Fear, Uncertainty, Doubt，恐慌情绪", category: "术语" },
];

export default function LearnPage() {
  return (
    <>
      {/* Hero 区域 */}
      <section className="relative overflow-hidden py-20 gradient-bg">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-light/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* 小标签 */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="h-4 w-4 text-primary-light" />
              <span className="text-sm font-medium text-gray-200">系统化学习路径</span>
            </div>

            {/* 主标题 */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-white">新手入门</span>{" "}
              <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                学习中心
              </span>
            </h1>

            {/* 副标题 */}
            <p className="text-xl text-gray-300 opacity-85 mb-12 max-w-2xl mx-auto leading-relaxed">
              从零开始，8 门精心设计的课程助你安全、高效地进入加密世界
            </p>

            {/* 统计数据 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <stat.icon className="h-6 w-6 text-primary-light mb-2 mx-auto" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8 h-12 shadow-2xl shadow-primary/25">
                <Play className="mr-2 h-5 w-5" />
                开始学习
              </Button>
              <Link href="/binance">
                <Button size="lg" variant="outline" className="text-base px-8 h-12">
                  查看交易所教程
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 学习路径 */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          {/* 标题 */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">完整学习路径</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">8 步掌握加密交易</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              循序渐进，每一步都有详细指引
            </p>
          </div>

          {/* 路径时间轴 */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningPath.map((item, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                >
                  <div className={`relative bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 ${item.featured ? 'border-red-500' : 'border-gray-200 dark:border-gray-800'} hover:border-primary hover:shadow-2xl transition-all duration-300`}>
                    {/* 步骤标记 */}
                    <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg border-2 border-white dark:border-gray-900">
                      <span className="text-xs font-bold text-white">{item.step}</span>
                    </div>

                    {item.featured && (
                      <div className="absolute -top-3 -left-3">
                        <Badge className="bg-red-500 text-white border-0 shadow-lg">
                          必修
                        </Badge>
                      </div>
                    )}

                    {/* 图标 */}
                    <div className="mb-4">
                      <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* 内容 */}
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 课程列表 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* 标题 */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">精选课程</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              深入浅出，从基础到进阶的完整知识体系
            </p>
          </div>

          {/* 课程网格 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`group cursor-pointer ${course.bgColor} rounded-2xl p-5 transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-800 hover:shadow-lg`}
              >
                {/* 图标与标签 */}
                <div className="flex items-center justify-between mb-3">
                  <div className={`h-12 w-12 rounded-xl bg-white dark:bg-gray-900 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                    <course.icon className={`h-6 w-6 ${course.color}`} />
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
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* 底部信息 */}
                <div className="flex items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3.5 w-3.5" />
                    <span>{course.lessons} 节</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 术语表 */}
      <section className="py-20 bg-gray-50 dark:bg-gray-950/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* 标题 */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">术语速查</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                快速了解常见的加密货币术语
              </p>
            </div>

            {/* 术语网格 */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {glossary.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-900 rounded-2xl p-5 hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-800 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="font-mono font-bold text-xl text-primary">
                      {item.term}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.definition}
                  </div>
                </div>
              ))}
            </div>

            {/* 底部CTA */}
            <div className="text-center mt-12">
              <Button variant="ghost" size="lg" className="group">
                查看完整术语表
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 行动召唤 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-primary to-primary-light rounded-[32px] p-12 text-center overflow-hidden">
              {/* 背景装饰 */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                  <Sparkles className="h-4 w-4 text-white" />
                  <span className="text-sm font-medium text-white">准备好了吗？</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  开启你的加密之旅
                </h2>
                <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                  从今天开始，跟随我们的学习路径，安全、高效地进入加密世界
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/binance">
                    <Button size="lg" variant="outline" className="text-base px-8 h-12 bg-white hover:bg-gray-100 text-gray-900 border-0">
                      注册交易所
                    </Button>
                  </Link>
                  <Button size="lg" className="text-base px-8 h-12 bg-white/20 hover:bg-white/30 text-white border-2 border-white/50">
                    <Play className="mr-2 h-5 w-5" />
                    开始第一课
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
