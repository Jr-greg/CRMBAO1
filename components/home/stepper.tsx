"use client";

import { Badge } from "@/components/ui/badge";
import {
  UserPlus,
  CheckCircle2,
  CreditCard,
  ShoppingCart,
  Shield,
  ArrowDownToLine,
  HelpCircle,
} from "lucide-react";

const steps = [
  { 
    icon: UserPlus, 
    title: "注册账户", 
    description: "选择交易所，创建专属账户",
    color: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-500",
    position: { x: 8, y: 45 }
  },
  { 
    icon: CheckCircle2, 
    title: "身份认证", 
    description: "完成 KYC 提升权限",
    color: "from-cyan-500 to-teal-500",
    iconBg: "bg-cyan-500",
    position: { x: 20, y: 25 }
  },
  { 
    icon: CreditCard, 
    title: "充值入金", 
    description: "充值法币或加密货币",
    color: "from-teal-500 to-green-500",
    iconBg: "bg-teal-500",
    position: { x: 32, y: 50 }
  },
  { 
    icon: ShoppingCart, 
    title: "完成首单", 
    description: "购买第一枚加密货币",
    color: "from-green-500 to-emerald-500",
    iconBg: "bg-green-500",
    position: { x: 46, y: 30 }
  },
  { 
    icon: Shield, 
    title: "安全设置", 
    description: "开启双重验证保护",
    color: "from-emerald-500 to-lime-500",
    iconBg: "bg-emerald-500",
    position: { x: 60, y: 48 }
  },
  { 
    icon: ArrowDownToLine, 
    title: "提现转账", 
    description: "安全转出和管理资产",
    color: "from-lime-500 to-yellow-500",
    iconBg: "bg-lime-500",
    position: { x: 74, y: 28 }
  },
  { 
    icon: HelpCircle, 
    title: "进阶学习", 
    description: "探索更多功能",
    color: "from-yellow-500 to-orange-500",
    iconBg: "bg-orange-500",
    position: { x: 88, y: 45 }
  },
];

export function Stepper() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-primary-light/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-4 text-sm px-4 py-1.5">
            新手指南
          </Badge>
          <h2 className="text-4xl font-bold mb-4">7步完成新手之旅</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            循序渐进，每一步都有详细指引，从零开始轻松上手
          </p>
        </div>

        {/* 桌面端：曲线+图标节点 */}
        <div className="hidden md:block relative max-w-6xl mx-auto" style={{ height: '400px' }}>
          {/* 动态曲线 SVG */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
          >
            {/* 主曲线 */}
            <path
              d="M 8,45 Q 14,20 20,25 T 32,50 Q 39,40 46,30 T 60,48 Q 67,35 74,28 T 88,45"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="0.3"
              className="opacity-40"
            />
            
            {/* 虚线装饰 */}
            <path
              d="M 8,45 Q 14,20 20,25 T 32,50 Q 39,40 46,30 T 60,48 Q 67,35 74,28 T 88,45"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="0.15"
              strokeDasharray="2,3"
              className="opacity-60 animate-pulse"
            />
            
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.6 }} />
                <stop offset="25%" style={{ stopColor: '#06B6D4', stopOpacity: 0.8 }} />
                <stop offset="50%" style={{ stopColor: '#10B981', stopOpacity: 0.8 }} />
                <stop offset="75%" style={{ stopColor: '#84CC16', stopOpacity: 0.8 }} />
                <stop offset="100%" style={{ stopColor: '#F59E0B', stopOpacity: 0.6 }} />
              </linearGradient>
            </defs>
          </svg>

          {/* 步骤节点 */}
          {steps.map((step, index) => (
            <div
              key={index}
              className="absolute group cursor-pointer"
              style={{
                left: `${step.position.x}%`,
                top: `${step.position.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              {/* 节点容器 */}
              <div className="flex flex-col items-center">
                {/* 图标圆圈 */}
                <div className="relative mb-4">
                  {/* 光晕效果 */}
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-20 blur-xl scale-150 group-hover:scale-[2] transition-transform duration-500`} />
                  
                  {/* 主图标 */}
                  <div className={`relative h-20 w-20 rounded-full ${step.iconBg} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 border-2 border-white/50 dark:border-white/10`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  
                  {/* 步骤编号徽章 */}
                  <div className={`absolute -top-2 -right-2 h-8 w-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg border-2 border-white/80 dark:border-white/20`}>
                    <span className="text-sm font-bold text-white">{index + 1}</span>
                  </div>
                  
                  {/* 脉动圆环 */}
                  <div className={`absolute inset-0 rounded-full border-2 bg-gradient-to-br ${step.color} opacity-30 animate-ping`} style={{ animationDuration: '3s' }} />
                </div>

                {/* 文字信息 */}
                <div className="text-center max-w-[120px]">
                  <h3 className="font-bold text-sm mb-1 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 移动端：简洁列表 */}
        <div className="md:hidden space-y-6 max-w-md mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 group cursor-pointer">
              {/* 图标 */}
              <div className="relative shrink-0">
                <div className={`h-16 w-16 rounded-full ${step.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform border-2 border-white/50 dark:border-white/10`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className={`absolute -top-1 -right-1 h-6 w-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow border-2 border-white/80 dark:border-white/20`}>
                  <span className="text-xs font-bold text-white">{index + 1}</span>
                </div>
              </div>
              
              {/* 文字 */}
              <div className="flex-1 pt-1">
                <h3 className="font-bold text-base mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


